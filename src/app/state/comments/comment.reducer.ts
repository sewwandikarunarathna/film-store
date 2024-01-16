import { createReducer, on } from '@ngrx/store';
import { addComment, loadComments, loadCommentsFailure, loadCommentsSuccess, removeComment } from './comment.actions';
import { Comment } from '../../models/comment.model';

export interface CommentState {
  comments: Comment[];
  error?: string;
  status?: string;
//   status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CommentState = {
  comments: [],
  error: '',
  status: 'pending',
};

export const commentReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new comment to the comments array
  on(addComment, (state, { content }) => ({
    ...state,
    comments: [...state.comments, { id: Date.now().toString(), content: content }],
  })),
  // Remove the comment from the comments array
  on(removeComment, (state, { id }) => ({
    ...state,
    comments: state.comments.filter((comment) => comment.id !== id),
  })),
  // Trigger loading the comments
  on(loadComments, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded comments
  on(loadCommentsSuccess, (state, { comments }) => ({
    ...state,
    comments: comments,
    error: '',
    status: "success",
  })),
  // Handle comments load failure
  on(loadCommentsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);