import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedPostsComponent } from './liked-posts.component';
import { LikedPostsRoutingModule } from './liked-posts-routing.module';

@NgModule({
  declarations: [LikedPostsComponent],
  imports: [
    CommonModule,
    LikedPostsRoutingModule
  ],
  exports:[LikedPostsComponent]
})
export class LikedPostsModule { }
