import { Component, OnInit } from '@angular/core';
import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';
declare var $: any;
declare var UIkit: any;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { 
  $(document).ready(function()
  {
  $('.members').on('input', function () {
            var arrayOfLines = $('.members').val().split('\n');
            var list = "";
    $.each(arrayOfLines, function(index, item) {
    if(item != "")
        list += "<li>" + item + "</li>";
    });
    $('.miembros').html(list);
    
        });
  })
  }

  ngOnInit() {
  }
  
  shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

getRandom()
  {
  
    var arrayOfLines = $('.members').val().split('\n');
    if(arrayOfLines.length < 2)
    {
     UIkit.notification({
    message: '¡Debes introducir al menos dos personas!',
    status: 'danger',
    pos: 'top-center',
    timeout: 5000
});
    }
    else
    {
    var shuffle = this.shuffle;
    var list = "";
    var speed = 50;
    setInterval(function(){
    speed += 50;
    var inter = setTimeout(function(){
    var newArray = shuffle(arrayOfLines);
        $.each(newArray, function(index, item) {
    if(item != "")
        list += "<li>" + item + "</li>";
    });
    $('.miembros').html(list);
    list = "";
    }, speed);
    if(speed>1000) clearInterval(inter);
    },10)
    }
    
    
  }
  erase()
  {
    $('.members').val("");
     $('.miembros').html("");
  }
   endme()
  {
  this.erase();
  }

}
