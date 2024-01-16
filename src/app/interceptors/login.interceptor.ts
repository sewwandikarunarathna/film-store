import { HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`request is on way to ${req.url}`);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer qwasdfdg23dsfsfwe'),
  })
  return next(authReq);
};
