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

  async getComments() {
    // if (!this.storageInitialised) await this.storage.();

    return (await this.storage.select('comments')) || [];
  }

  // async saveComments(comments: Comment[]) {
  //   if (!this.storageInitialised) await this.storage.create();

  //   return this.storage.set('comments', comments);
  // }
}

// // comment.service.ts
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { AppState } from '../state/app.state';
// import * as CommentActions from '../state/comments/comment.actions';
// import { selectAllComments } from '../state/comments/comment.selectors';
// import { Comment } from '../models/comment.model';
// import { select } from '@ngrx/store';

// @Injectable({
//   providedIn: 'root',
// })
// export class CommentService {
//   // private storageInitialised = false;

//   constructor(private store: Store<AppState>) {}

//   async getComments(): Promise<Comment[]> {
//       // Load comments from the store
//        return this.store.dispatch(CommentActions.loadComments());
   
//     // return this.store.select('comments').pipe(selectAllComments).toPromise();
//   }

//   // async saveComments(comments: Comment[]) {
//   //   // Save comments to the store
//   //   this.store.dispatch(CommentActions.saveComments({ comments }));
//   // }

//   addComment(content: Comment): void {
//     // Dispatch an action to add a comment
//     this.store.dispatch(CommentActions.addComment({ content }));
//   }

//   removeComment(id: string): void {
//     // Dispatch an action to remove a comment
//     this.store.dispatch(CommentActions.removeComment({ id }));
//   }
// }
