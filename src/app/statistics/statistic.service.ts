import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  private subject = new Subject<any>();

  constructor() {
  }


  generateStatistic(right, wrong) {
    const a = [right, wrong];
    this.subject.next({a});
  }

  getValues(): Observable<any> {
    return this.subject.asObservable();
  }

  clearValues() {
    this.subject.next();
  }

}


