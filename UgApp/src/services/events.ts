import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

/**
 * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
 *
 * @author Shashank Agrawal
 */
@Injectable({
    providedIn: 'root'
})
export class Events {

    private fooSubject = new Subject<any>();

    publishSomeData(data: any) {
        this.fooSubject.next(data);
    }

    getObservable(): Subject<any> {
        return this.fooSubject;
    }
}
