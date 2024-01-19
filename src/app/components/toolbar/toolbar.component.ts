import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  badgevisible = false;
  openNotification() {
    this.badgevisible = true;
    // this.messageService.open();
    this.router.navigate(['/main/notifications']);
  }

  constructor(private router: Router, private messageService: MessageService) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
