import { Component } from '@angular/core';

@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  type = 'demopracti';

  displaymessage=function()
  {
    //alert("angular practise started");
    return this.type;
  }
}
