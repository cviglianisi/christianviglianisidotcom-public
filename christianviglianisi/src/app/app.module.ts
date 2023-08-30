import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BlogComponent} from './blog/blog.component';
import {ArticleComponent} from './article/article.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BlogComponent,
        ArticleComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
