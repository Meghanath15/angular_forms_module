import { Component, OnInit, Output } from '@angular/core';
import { PostServiceService } from 'src/app/PostService/post-service.service';
import { AllProducts } from '../type/product.type';
import { PosttService } from '../postt.service';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: AllProducts[];
  borderBottom = '1px solid rgba(0,0,0,0.2)';

  constructor(private postService:PostServiceService, private posttService:PosttService) {}
  
  ngOnInit(): void {
    this.posts=this.posttService.getPosts();
  }

  handlePostLike(post:AllProducts){
    this.postService.addItem(post);
  }
  
  handleDeletePost(id: number) {
    this.posttService.removePost(id)
    this.posts = this.posttService.getPosts();
  }
 
  notFoundStyle():Object{
    return {'background-color' : 'lightgrey',
  'color':'darkblue',
  'height':'50vh',
  'width':'50vw',
  'margin':'auto',
  'text-align':'center'};

  }

}
