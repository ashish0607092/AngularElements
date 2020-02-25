import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DesktopService } from './desktop.service';
import { Components } from './desktop.interface';
import { Observable } from 'rxjs';
import { eventDispatcher, store } from './store';
import { ActionTypes } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  addedComponent$: Observable<Components>;
  value;
  componentList: Components[] = [];
  constructor() {
    store.subscribe((state) => {
      this.componentList = state.componentList;
      console.log(this.componentList);
    });
  }
  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.GET_COMPONENT });
  }
  addComponent() {
    eventDispatcher.next({ type: ActionTypes.ADD_COMPONENT, payload: { name: this.value } });
    this.value = '';
  }
}

