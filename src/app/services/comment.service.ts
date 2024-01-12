import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Comment } from '../models/comment.model';
import { AppState } from '../state/app.state';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private storageInitialised = false;

  constructor(private storage: Store<AppState>) {}

  async getComments(): Promise<Comment[]> {
    if (!this.storageInitialised) await this.storage.();

    return (await this.storage.get('comments')) || [];
  }

  async saveComments(comments: Comment[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('comments', comments);
  }
}
