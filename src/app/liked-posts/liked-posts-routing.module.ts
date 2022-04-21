import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikedPostsComponent } from './liked-posts.component';

const routes: Routes = [
  { path: '', component: LikedPostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedPostsRoutingModule {}