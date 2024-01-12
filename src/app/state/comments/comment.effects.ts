// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of, from } from 'rxjs';
// import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
// import { Store } from '@ngrx/store';
// import { AppState } from '../app.state';
// import { CommentService } from '../../comment.service';
// import { addComment, loadComments, loadCommentsFailure, loadCommentsSuccess, removeComment } from './comment.actions';
// import { selectAllComments } from './comment.selectors';

// @Injectable()
// export class CommentEffects {
//   constructor(
//     private actions$: Actions,
//     private store: Store<AppState>,
//     private commentService: CommentService
//   ) {}

//   // Run this code when a loadComments action is dispatched
//   loadComments$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadComments),
//       switchMap(() =>
//         // Call the getComments method, convert it to an observable
//         from(this.commentService.getComments()).pipe(
//           // Take the returned value and return a new success action containing the comments
//           map((comments) => loadCommentsSuccess({ comments: comments })),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(loadCommentsFailure({ error })))
//         )
//       )
//     )
//   );

//   // Run this code when the addComment or removeComment action is dispatched
//   saveComments$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(addComment, removeComment),
//         withLatestFrom(this.store.select(selectAllComments)),
//         switchMap(([action, comments]) => from(this.commentService.saveComments(comments)))
//       ),
//     // Most effects dispatch another action, but this one is just a "fire and forget" effect
//     { dispatch: false }
//   );
// }