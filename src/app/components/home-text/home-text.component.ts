import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-text',
  templateUrl: './home-text.component.html',
  styleUrl: './home-text.component.scss'
})
export class HomeTextComponent {
  @Input() displayText!: string;
  @Input() textColor!: string;
  @Output() displayTextChange = new EventEmitter<string>();
  @Output() textColorChange = new EventEmitter<string>();

  isDisabled: boolean = false;
 displayHint () {
  this.displayText = "Go to the dashboard";
  this.displayTextChange.emit(this.displayText);
 }

 changeTextColor() {
  this.textColor = '#39345c';
  this.textColorChange.emit(this.textColor);
  alert('Changed the title color to Dark Blue');
  if(this.textColor){
    this.isDisabled = true
  }
 }
}
