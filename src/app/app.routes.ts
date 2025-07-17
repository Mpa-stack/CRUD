import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { Home } from './home/home';
import { PostCreate } from './posts/post-create/post-create';
import { PostDetail } from './posts/post-detail/post-detail';
import { PostsComponent } from './posts/posts/posts';

 export const routes:Routes = [
  { path: '', component: Home},
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new', component: PostCreate},
  { path: 'posts/:id', component: PostDetail},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouting {}
