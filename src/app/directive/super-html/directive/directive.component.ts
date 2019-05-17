import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

friends = ["obb","ola","uber","ezy","moto","zoom"]
locations=[
  {
    id:1,
    city:"Chennai",
    code:"044"
  },
  {
    id:2,
    city:"Bengalur",
    code:"022"
  },
  {
    id:3,
    city:"mumbai",
    code:"080"
  },
  {
    id:4,
    city:"Kolkata",
    code:"050"
  }
]
check:boolean = true
checkelse:boolean =true
city ="044"
money = 88
name ='chance-e-illiya'
birthday = new Date()
toggleCheck = function(){
  
  this.check=!this.check ? true:false
  console.log(this.check)
}
toggleelseCheck = function(){
  
  this.checkelse=!this.checkelse ? true:false
  console.log(this.checkelse)
}

displayText =  function()
{
  return "called from function"
}
  constructor() { }

  ngOnInit() {
  }

}
