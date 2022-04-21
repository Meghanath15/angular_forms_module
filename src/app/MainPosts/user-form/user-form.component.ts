import { Component, OnInit } from '@angular/core';
import { Form, FormControl,Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PosttService } from '../postt.service';
import { PostServiceService } from 'src/app/PostService/post-service.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  
  postService: PostServiceService;

  // count:number=0;
  // id:number;

  users:Array<any>=[];

  ngOnInit() : void{}

  constructor(){
    this.postService=new PostServiceService();
    

    this.userForm=new FormGroup({
      name:new FormControl('', Validators.pattern('[a-zA-Z ]*')),
      age : new FormControl("",[Validators.required, Validators.max(40)]),
      bio:new FormControl('', Validators.pattern('[a-zA-Z0-9 ]*')),
      gender: new FormControl(""),
      
    })

    console.log(this.userForm);
    
     //this.userForm.get("age").valueChanges.subscribe(value=>{
    //   console.log(value);
    //   console.log(this.name);
    // })
    // this.age.valueChanges.subscribe(value=>{
    //   console.log(this.age.errors);
    // })

  }

  handleSubmit(event:MouseEvent){
  if( this.userForm.invalid){
      console.log("Invalid name value");
      return;
      }
    }


}
