import { Component, OnInit } from '@angular/core';
import { AllProducts } from '../MainPosts/type/product.type';

import { PostServiceService } from '../PostService/post-service.service';

@Component({
  selector: 'app-liked-posts',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.css']
})
export class LikedPostsComponent implements OnInit {
  likedItems:AllProducts[];
  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.likedItems=this.postService.getItems();
  }

  getLikedItems(){
   this.likedItems=this.postService.getItems()
  }

  handleRemoveLiked(id:number){
    this.likedItems=this.likedItems.filter((post)=>post.id!==id);
  }

}
