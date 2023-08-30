import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "src/app/services/contentful.service";
import {ArticleModel} from "src/app/models/article.model";

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    article: any;
    articles: ArticleModel[] = [];
    articleId = location.pathname.split("/blog/")[1];

    constructor(private contentfulService: ContentfulService) {
    }

    ngOnInit() {
        this.article = this.contentfulService.getAllEntries()
            .subscribe(res => {
                this.articles = res.items;
                this.article = this.articles.filter(e => e.fields.urlHandler.match(this.articleId))[0];
                console.log("ciao");
            });
    }


    isBold(marks: any): boolean {

        if (marks.length > 0) {
            return marks[0].type === 'bold';
        }
        return false;
    }
}
