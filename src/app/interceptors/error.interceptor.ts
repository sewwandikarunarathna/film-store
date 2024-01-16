import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if([404].includes(error.status)){
        console.log('Not Found');
      };
      const e = error.message || error.statusText;
      console.log(e);

      return throwError(() => error);
    })
  );
};
