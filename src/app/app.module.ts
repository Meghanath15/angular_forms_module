import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { EachPostComponent } from './MainPosts/each-post/each-post.component';
import { AllPostsComponent } from './MainPosts/all-posts/all-posts.component';
import { LikedPostsComponent } from './liked-posts/liked-posts.component';
import { PostDetailsComponent } from './MainPosts/post-details/post-details.component';
import { UserFormComponent } from './MainPosts/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EachPostComponent,
    AllPostsComponent,
    LikedPostsComponent,
    PostDetailsComponent,
    UserFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
