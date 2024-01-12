import { Component } from '@angular/core';
import { selectAllComments } from '../../state/comments/comment.selectors';
import { addComment, loadComments, removeComment } from '../../state/comments/comment.actions';
import { Store } from '@ngrx/store';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  // public allComments$ = this.store.select(selectAllComments);
  public comment = '';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadComments());
  }

  addComment() {
    this.store.dispatch(addComment({ content: this.comment }));
    this.comment = '';
  }

  removeComment(comment: Comment) {
    this.store.dispatch(removeComment({ id: comment.id }));
  }
}
