import { Components } from './store/desktop.interface';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { eventDispatcher, store } from './store';
import { ActionTypes } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  addedComponent$: Observable<Components>;
  value;
  componentList: Components[] = [];
  constructor() {
    store.subscribe((state) => {
      this.componentList = state.componentList.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        }
      });
    });
  }
  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.GET_COMPONENT });
  }
  addComponent() {
    eventDispatcher.next({
      type: ActionTypes.ADD_COMPONENT, payload: {
        name: this.value,
        id: '_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().getTime()
      }
    });
    this.value = undefined;
  }
  remove(component) {
    eventDispatcher.next({
      type: ActionTypes.REMOVE_COMPONENT, payload: component
    });
  }
}

