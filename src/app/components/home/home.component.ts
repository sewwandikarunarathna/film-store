import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  hint: string = '';
  color: string = '#7a145f';

  constructor(private messageService: MessageService){}

  addSuccess(text: string) {
    this.messageService.addSuccess(text);
    console.log(text)
  }

  addWarning(text: string) {
    this.messageService.addWarning(text);
  }

  createSuccessMessage() {
    this.addSuccess('You earned the top fan badge!');
  }

  createWarningMessage() {
    this.addWarning('You have 5 mins to leave this website');
  }
}
