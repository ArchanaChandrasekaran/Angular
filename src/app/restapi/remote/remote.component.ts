import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
//import { getAllRouteGuards } from '@angular/Router/src/utils/preactivation';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
users:any=[]

  constructor(private restapi:RestapiService) { }

  
getAllUsers()
{
  this.restapi.getRemoteUsers().subscribe((response)=>{
    /*console.log(response)
    this.users=response
    console.log(this.users)
    },function(error){});*/
    console.log(response)
    this.users=response
    console.log(this.users)
    },
    function(error){});
    
}
ngOnInit() {
  this.getAllUsers()
  
}
}
