import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-consumechild2',
  templateUrl: './consumechild2.component.html',
  styleUrls: ['./consumechild2.component.css']
})
export class Consumechild2Component implements OnInit {

  constructor(private local:LocalService) { }
 allBanks:any
  ngOnInit() {
    this.allBanks = this.local.addBank()


  }

}
