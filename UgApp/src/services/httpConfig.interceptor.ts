import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Util } from './util';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  loaderToShow: any;

  constructor(
    public loadingController: LoadingController,
    public alerts: Util,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = 'my-token-string-from-server';

    // Authentication by setting header with token value
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    /* this.alerts.showProgress('Cargando...'); */

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // event return all info about http request
          console.log('INFO INTERCEPTOR', event);
       /*    this.alerts.dismiss(); */
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('ERROR CATCH INTERCEPTOR', error);
        this.alerts.showAlert('', 'No hay comunicación con el servidor', []);
       /*  this.alerts.dismiss(); */
        return throwError(error);
      }));
  }
}
