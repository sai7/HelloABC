import { Component, Input } from '@angular/core';

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
  public flipped : boolean = false;

  @Input() public frontContent : string;
  @Input() public backContent : string;

  text: string;

  constructor() {
    console.log('Hello FlashCardComponent Component');
    this.text = 'Hello World';
  }

  public flip() {
    this.flipped = !this.flipped;
  }
}
