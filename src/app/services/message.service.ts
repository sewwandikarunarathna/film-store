import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Message {
  type: 'Success' | 'Warning';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new BehaviorSubject<Message>({type:'Success', text:''});

  /** Observable of all messages */
  messages$ = this.messageSubject.asObservable();

  /** Add an success message to the Subject */
  addSuccess(text: string) {
    this.messageSubject.next({ type: 'Success', text });
    console.log(this.messages$)
  }

  /** Add a warning message to the Subject */
  addWarning(text: string) {
    this.messageSubject.next({ type: 'Warning', text });
  }
}
