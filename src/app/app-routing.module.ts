import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { PostDetailsComponent } from './MainPosts/post-details/post-details.component';
import { AllPostsComponent } from './MainPosts/all-posts/all-posts.component';
import { UserFormComponent } from './MainPosts/user-form/user-form.component';


const routes: Routes = [
  {path:"liked", component: LikedPostsComponent},
  {path:"posts/:id", component : PostDetailsComponent},
  {path:"posts",component: AllPostsComponent},
  {path:"form",component:UserFormComponent},
  {path:"**",redirectTo:"",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
