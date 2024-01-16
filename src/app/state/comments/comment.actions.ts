import { createAction, props } from '@ngrx/store';
import { Comment } from '../../models/comment.model';

export const addComment = createAction(
  '[Comment Page] Add Comment',
  props<{ content: string }>()
);

export const removeComment = createAction(
  '[Comment Page] Remove Comment',
  props<{ id: string }>()
);

export const loadComments = createAction('[Comment Page] Load Comments');

export const loadCommentsSuccess = createAction(
  '[Comment API] Comment Load Success',
  props<{ comments: Comment[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comment API] Comment Load Failure',
  props<{ error: string }>()
);