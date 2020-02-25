import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Components } from './desktop.interface';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {
  component$ = new BehaviorSubject<Components[]>([]);
  constructor() { }

  addComponent(component: Components) {
    this.component$.next([component]);
  }
}
