import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  money = 23;
  name = 'chennai';
  birthday = new Date();
  constructor() { }

  ngOnInit() {
  }

}
