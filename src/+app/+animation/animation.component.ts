import { Component, OnInit, trigger, state, style, transition, animate, group } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations : [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0px)'
      })),
      state('highlight', style({ // If "highlight" name is not given the style will be applied to void state
      // which is the default state and applied to elment which are not in the dom
       'background-color': 'blue',
       'transform': 'translateX(100px)'
      })),
      transition('normal <=> highlight', [
        group([ // Syncronus animation
          animate(500, style({ 'width': "500px" })),
          animate(500, style({ 'height': "500px" })),
          animate(1000, style({
          'border-radius': '50px' // Animation in between transation and will revert back
        }))
        ]),
        animate(500) // actual transition animation
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  state = 'normal';
  innerText : string;
  constructor() { }

  ngOnInit() { }

  animateDiv(){
   // (this.state == 'normal') ? this.state = 'highlight' : this.state = 'normal';

    if(this.state == 'normal'){
        this.state = 'highlight';
        this.innerText = "Rana";
    }else{
        this.state = 'normal';
        this.innerText = "Ankit";
    }
  }

}
