import { MemoizedSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CommentState } from './comment.reducer';

export const selectComments = (state: AppState) => state.comments;
export const selectAllComments = createSelector(
  selectComments,
  (state) => state.comments
);

// export const selectComments: MemoizedSelector<AppState, Comment[]> = createSelector(
//   (state: AppState) => state.comments,
//   (comments: Comment[]) => comments
// );