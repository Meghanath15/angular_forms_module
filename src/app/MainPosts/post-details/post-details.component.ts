import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from 'src/app/PostService/post-service.service';
import { AllProducts } from '../type/product.type';
import { PosttService } from '../postt.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public post: AllProducts;

  @Input() public index:number;

  constructor(
    private route: ActivatedRoute,
    private posttService: PosttService,
    private postService: PostServiceService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      const postId=params.id;
      this.post=this.posttService.getPosttDetailById(+postId);
    });
  }

  handlePostAdd(post:AllProducts){
    this.postService.addItem(post);
  }

}
