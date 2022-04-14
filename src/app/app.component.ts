import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent{
  name:string;
  age:number;
  bio:string;
  gender:string;
  count:number=0;
  id:number;

  users:Array<any>=[];

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
}
