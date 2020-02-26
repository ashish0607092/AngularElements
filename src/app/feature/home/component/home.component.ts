import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Components } from '../store/desktop.interface';
import { store, eventDispatcher } from '../store';
import { ActionTypes } from '../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
