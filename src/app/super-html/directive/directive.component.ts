import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

friends = ["obb","ola","uber","ezy","moto","zoom"]

/*locations =[{
  id:1,
  city:"Chennai",
  Code:"044"
},
{
  id:2,
  city:"Mumbai",
  Code:"042"
},
{
  id:3,
  city:"Bangalore",
  Code:"043"
},
{
  id:4,
  city:"kolkata",
  Code:"041"
}]

city="041" */


check:boolean = true

checkelse:boolean = true

money = 88

name='chance-e-illa'

birthday = new Date()
togglecheck =function()
{
  
  this.check = !this.check ? true:false
  console.log(this.check)
}

toggleelsecheck =function()
{
  
  this.checkelse = !this.checkelse ? true:false
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
