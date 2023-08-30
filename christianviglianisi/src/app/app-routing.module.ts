import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "src/app/home/home.component";
import {BlogComponent} from "src/app/blog/blog.component";
import {ArticleComponent} from "src/app/article/article.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'blog/:id',
        component: ArticleComponent
    }
    // {
    //     path: 'projects',
    //     component: ArticleComponent
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
