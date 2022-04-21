import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AllProducts} from "../type/product.type";
import {Router } from '@angular/router';

@Component({
  selector: 'app-each-post',
  templateUrl: './each-post.component.html',
  styleUrls: ['./each-post.component.css']
})
export class EachPostComponent implements OnInit {
  @Input() public post: AllProducts;
  @Input() public first:boolean;
  @Input() public last:boolean;
  @Input() public index:number;
  @Input() public isDetailView:boolean;

  @Output() public postDelete: EventEmitter<number> = new EventEmitter();
  @Output() public postLikeButton: EventEmitter<AllProducts> = new EventEmitter();
  @Output() public posttAdd: EventEmitter<AllProducts> = new EventEmitter();


  constructor(private router:Router) {}

  ngOnInit(): void {}

  handleDelete() {
    this.postDelete.emit(this.post.id);
  }

  handleLikeButton(){
    this.postLikeButton.emit(this.post)
  }

  handleShowDetails() {
    this.router.navigateByUrl(`/posts/${this.post.id}`, {})
  }

}
