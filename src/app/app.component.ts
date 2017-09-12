import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor()
  {
  $(document).ready(function()
  {
  $("body").niceScroll({ horizrailenabled: false});
  
  
  })
  
  }
  

}
