import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, startWith } from 'rxjs';
import { Message, MessageService } from '../../services/message.service';

@Component({
  selector: 'app-noification',
  templateUrl: './noification.component.html',
  styleUrl: './noification.component.scss'
})
export class NoificationComponent implements OnInit {
/** Observable of all messages from the MessageService */
messages$: Observable<Message>;

/** Observable of Error message texts */
success$: Observable<string>;
successMessages: any = 'asd';
/** Observable of Warning message texts */
warnings$: Observable<string>;

constructor(private messageService: MessageService) {
  
}

ngOnInit(): void {
  // Observable of ALL messages
  this.messages$ = this.messageService.messages$;
  console.log(this.messages$)
  // Derived string observable of just the success message texts
  this.success$ = this.messages$.pipe(
    filter(m => m.type === 'Success'),
    map(m => m.text)
  );
  
  this.success$.subscribe((suc)=>{
    this.successMessages = suc;
    console.log(this.successMessages)
  })
  // Derived string observable of just the warning message texts
  this.warnings$ = this.messages$.pipe(
    filter(m => m.type === 'Warning'),
    map(m => m.text)
  );
  
}

}
