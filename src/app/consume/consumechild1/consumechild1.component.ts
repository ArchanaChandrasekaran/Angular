import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
//import { LocalService } from "../../services/local.service";

@Component({
  selector: 'app-consumechild1',
  templateUrl: './consumechild1.component.html',
  styleUrls: ['./consumechild1.component.css']
})
export class Consumechild1Component implements OnInit {

  constructor(private local:LocalService) { }

  ngOnInit() {
    this.accessLocalService()
    
  }

  accessLocalService = function()
  {
    var allBanks = this.local.addBank()
    
  }

}
