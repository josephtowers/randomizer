import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var UIkit: any;

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent implements OnInit {

  constructor() { }

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

  getRandom2()
  {
    var arrayOfLines = $('.guests').val().split('\n');
    if(arrayOfLines.length<2)
    {
        UIkit.notification({
    message: '¡Debes introducir al menos dos personas!',
    status: 'danger',
    pos: 'top-center',
    timeout: 5000
});
    }else
    {
    var shuffle = this.shuffle;
    var list = "";
    var speed = 50;
    setInterval(function(){
    speed += 50;
    var inter = setTimeout(function(){
    var newArray = shuffle(arrayOfLines);   
    list += "<li>" + newArray[0] + "</li>";
    $('.publico').html(list);
    list = "";
    }, speed);
    if(speed>1000) clearInterval(inter);
    },10)
    }
    
    
  }
  erase2()
  {
    $('.guests').val("");
     $('.publico').html("");
  }
  
  endme()
  {
  this.erase2();
  }

}
