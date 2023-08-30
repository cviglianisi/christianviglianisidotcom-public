import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "src/app/services/contentful.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    blogArticles: Observable<any> | undefined;
    articleIsActive = false;
    blogIsActive = true;
    articleFromParent: any;

    public constructor(private contentfulService: ContentfulService, public router: Router) {}

    ngOnInit() {
        this.blogArticles = this.contentfulService.getAllEntries();
    }

    readArticle(article: any) {
        this.router.navigate(['/blog/' + article.fields.urlHandler]);
        this.blogIsActive = false;
        this.articleIsActive = true;
        this.articleFromParent = article;
    }
}
