import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "src/environments/environment";
import {animate, state, style, transition, trigger} from '@angular/animations'
import {Router} from "@angular/router";
import * as AOS from "aos";

const style1 = style({
    opacity: 1,
    transform: "translateY(0)"
})

const style2 = style({
    opacity: 0,
    transform: "translateY(+100%)"
})


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('foobar', [
            state('show', style1),
            state('hide', style2),
            transition('show => hide', animate('700ms ease-out')),
            transition('hide => show', animate('700ms ease-in'))
        ])
    ]
})
export class HomeComponent implements OnInit {
    navButtons: Array<HTMLElement>;
    pageHeight: number;
    softwareEngineerText = "";
    deliveryLeadText = "";
    subTitleHomePage = "";
    i: number = 0;
    /* The text */
    speed: number = 50; /* The speed/duration of the effect in milliseconds */
    isSectionTwoEnabled = false;
    slide1Effects = 'hide';
    slide2Effects = 'hide';
    slide3Effects = 'hide';
    stateSlide0 = true;
    stateSlide1 = false;
    stateSlide2 = false;
    stateSlide3 = false;
    stateSlideArray = [this.stateSlide0, this.stateSlide1, this.stateSlide2, this.stateSlide3];
    mouseWheelIsRunning = false;
    timestampLastRunningWheel: number = 0;
    @ViewChild('slide0', {read: ElementRef})
    slide0: ElementRef<HTMLElement> | undefined;
    @ViewChild('slide1', {read: ElementRef})
    slide1: ElementRef<HTMLElement> | undefined;
    @ViewChild('slide2', {read: ElementRef})
    slide2: ElementRef<HTMLElement> | undefined;
    @ViewChild('slide3', {read: ElementRef})
    slide3: ElementRef<HTMLElement> | undefined;
    flagMobile = false;
    private UP_KEYCODE = 38;
    private DOWN_KEYCODE = 40;
    private isScrolling = false;
    check = false;

    constructor(public el: ElementRef, private router: Router) {
        this.navButtons = Array.from(document.querySelectorAll("nav a[href^='#']"));
        this.pageHeight = 1000;
        this.softwareEngineerText = environment.softwareEngineerText;
        this.deliveryLeadText = environment.deliveryLeadText;
        this.stateSlide0 = true;
        // const isMobile = !window.matchMedia('only screen and (min-width: 920px)').matches
        // if (isMobile) {
        this.isSectionTwoEnabled = true;
        this.stateSlide1 = true;
        this.stateSlide2 = true;
        this.stateSlide3 = true;
        this.flagMobile = true;

        // }
        this.slide1Effects = 'show';
        this.slide2Effects = 'show';
        this.slide3Effects = 'show';
    }

    ngOnInit() {
        AOS.init({
            // Global settings:
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them

        });
        this.startTypingEffect();
        console.log("                      /^--^\\     /^--^\\     /^--^\\\n" +
            "                      \\____/     \\____/     \\____/\n" +
            "                     /      \\   /      \\   /      \\\n" +
            "                    |        | |        | |        |\n" +
            "                     \\__  __/   \\__  __/   \\__  __/\n" +
            "|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^/ /^|^|^|^|^\\ \\^|^|^|^|^|^|^|^|^|^|^|^|\n" +
            "| | | | | | | | | | | | |\\ \\| | |/ /| | | | | | \\ \\ | | | | | | | | | | |\n" +
            "########################/ /######\\ \\###########/ /#######################\n" +
            "| | | | | | | | | | | | \\/| | | | \\/| | | | | |\\/ | | | | | | | | | | | |\n" +
            "|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|");
        console.log(".");
        console.log("mmmmmeeeowwwww");
        console.log(".");
        console.log("Shhhhh! Steal it here: https://github.com/cviglianisi/christianviglianisi-com");
        console.log(".");
    }

    startTypingEffect() {
        var txt = 'Be blessed by being a blessing.';
        const intervalId = setInterval(() => {
            if (this.i === txt.length) {
                clearInterval(intervalId);
                return;
            }
            this.subTitleHomePage += txt.charAt(this.i);
            this.i++;
        }, 100)
    }

    takeMeToTheBlog() {
        this.router.navigate(['/blog']);
    }

    onKeydownPressed(event: WheelEvent) {
        const isMobile = !window.matchMedia('only screen and (min-width: 768px)').matches
        if (!isMobile) {
            this.goToSlide(this.stateSlideArray.findIndex(e => e == true), 2);
        }
    }

    onKeyUpPressed(event: WheelEvent) {

        const isMobile = !window.matchMedia('only screen and (min-width: 768px)').matches
        if (!isMobile) {
            this.goToSlide(this.stateSlideArray.findIndex(e => e == true), -2);
        }
    }

    scrollToElement(event: WheelEvent) {

        const isMobile = !window.matchMedia('only screen and (min-width: 768px)').matches
        if (!isMobile && !this.isScrolling) {
            this.isScrolling = true;
            const delta = event.deltaY / 30 || -event.detail;
            this.goToSlide(this.stateSlideArray.findIndex(e => e == true), delta);
            setTimeout(() => {
                this.isScrolling = false;
                console.log("not scrolling");
            }, 1000);
        }
    }

    private goToSlide(number: number, delta: number) {
        if (delta < 0) {
            if (delta > -100) {
                if (this.stateSlideArray[number - 1] != undefined) {
                    this.stateSlideArray[number] = false;
                    this.stateSlideArray[number - 1] = true;

                    this.scrollIntoView(number - 1);
                }
            }
        } else if (delta > 0) {
            if (delta < 100) {
                if (this.stateSlideArray[number + 1] != undefined) {
                    this.stateSlideArray[number] = false;
                    this.stateSlideArray[number + 1] = true;

                    this.scrollIntoView(number + 1);
                }
            }
        }
    }

    private scrollIntoView(num: number) {
        switch (num) {
            case 1: {
                this.slide1?.nativeElement.scrollIntoView({behavior: "smooth"});
                this.slide1Effects = 'show';
                this.slide2Effects = 'hide';
                this.slide3Effects = 'hide';
                return
            }
            case 2: {
                this.stateSlide2 = true;
                this.slide1Effects = 'hide';
                this.slide2Effects = 'show';
                this.slide3Effects = 'hide';
                this.slide2?.nativeElement.scrollIntoView({behavior: "smooth"});
                return
            }
            case 3: {
                this.stateSlide2 = false;
                this.stateSlide3 = true;
                this.slide1Effects = 'hide';
                this.slide2Effects = 'hide';
                this.slide3Effects = 'show';
                this.slide3?.nativeElement.scrollIntoView({behavior: "smooth"});
                return
            }
            case 0: {
                this.stateSlide0 = true;
                this.slide1Effects = 'hide';
                this.slide2Effects = 'hide';
                this.slide3Effects = 'hide';
                this.slide0?.nativeElement.scrollIntoView({behavior: "smooth"});
                return
            }
            default: {
                return
            }
        }
    }

}

