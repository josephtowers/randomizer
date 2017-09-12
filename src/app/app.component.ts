import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor()
  {
  //This code snippet initialises the NiceScroll plugin
    $(document).ready(function()
    {
        $("body").niceScroll({ horizrailenabled: false});
    })  
  }
}
