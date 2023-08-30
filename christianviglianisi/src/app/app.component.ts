import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';

import {NavigationEnd, Router} from "@angular/router";
import * as aos from 'aos';
import {DOCUMENT} from "@angular/common";
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'christianviglianisi';
    burgerIsClicked: boolean = false;
    @ViewChild('toggleButton') toggleButton: ElementRef | undefined;
    @ViewChild('menu') menu: ElementRef | undefined;
    @ViewChild('burgerOne') span1: ElementRef | undefined;
    @ViewChild('burgerTwo') span2: ElementRef | undefined;
    @ViewChild('burgerThree') span3: ElementRef | undefined;

    public constructor(private router: Router, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {

        this.renderer.listen('window', 'click', (e: Event) => {


            if (this.burgerIsClicked) {
                if (e.target !== this.toggleButton!.nativeElement && e.target !== this.menu!.nativeElement) {
                    this.activateBurger(this.span1?.nativeElement!, this.span2?.nativeElement!, this.span3?.nativeElement!);
                } else {
                    this.unactivateBurger(this.span1?.nativeElement!, this.span2?.nativeElement!, this.span3?.nativeElement!);
                    this.burgerIsClicked = false;
                }
            }
        });
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                //scroll to top
                window.scrollTo(0, 0);
            }
        });
    }

    ngOnInit() {
        aos.init();
    }

    navigateTo(s: string) {
        console.log("ddd");
        this.unactivateBurger(this.span1?.nativeElement!, this.span2?.nativeElement!, this.span3?.nativeElement!);
        this.burgerIsClicked = false;
        this.router.navigate([s]).then(() => {
            window.location.reload();
        });
    }

    burgerClick($event: MouseEvent) {
        $event.preventDefault();
        if (this.burgerIsClicked) {
            console.log("a");
            this.burgerIsClicked = false;
            this.unactivateBurger(this.span1?.nativeElement!, this.span2?.nativeElement!, this.span3?.nativeElement!);
        } else {
            console.log("b");
            this.burgerIsClicked = true;
            this.activateBurger(this.span1?.nativeElement!, this.span2?.nativeElement!, this.span3?.nativeElement!);
        }
    }

    private activateBurger(span1: HTMLElement, span2: HTMLElement, span3: HTMLElement) {
        span1!.style.transformOrigin = 'bottom';
        span1!.style.transform = 'rotateZ(45deg) translate(8px, 0px)';

        span2!.style.transformOrigin = 'top';
        span2!.style.transform = 'rotateZ(-45deg)';

        span3!.style.transformOrigin = 'bottom';
        span3!.style.width = '56%';
        span3!.style.transform = 'translate(20px, -11px) rotateZ(45deg)';
        this.document.body.style.overflowY = "hidden";
    }

    private unactivateBurger(span1: HTMLElement, span2: HTMLElement, span3: HTMLElement) {
        span1!.style.transformOrigin = '';
        span1!.style.transform = '';

        span2!.style.transformOrigin = '';
        span2!.style.transform = '';

        span3!.style.transformOrigin = '';
        span3!.style.width = '';
        span3!.style.transform = '';
        this.document.body.style.overflowY = "inherit";
    }
}

