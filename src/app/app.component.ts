import { Form, FormControl , Validators, FormGroup } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { PostServiceService } from './PostService/post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit{
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
  
  /*
  name:string;
  age:number;
  bio:string;
  gender:string;
  count:number=0;
  id:number;

  titleErrors:string;

  users:Array<any>=[];

  ngOnInit() : void{}

  handleSubmit(){
    this.id=this.count+1;
    this.users.push({
      id:this.id,
      name:this.name,
      age:this.age,
      bio:this.bio,
      gender:this.gender,
    })
    console.log(this.id);
    this.count=this.id;
  }

  handleClear(){
    this.name="",
    this.age=0,
    this.bio="",
    this.gender="";
  }

  handleRemove(event){
    console.log(event.id)
    this.users.filter((user)=>user.id!==this.id);
  }
  
  handleKeyUp(event: any){
    const val=event.target.value.trim();
    if(val.length===0){
      this.titleErrors="*Title Required"
    }
      else{
      this.titleErrors=null;
    }
    }
  */
}
