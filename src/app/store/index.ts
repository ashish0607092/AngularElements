import { Subject } from 'rxjs';
import { ActionTypes } from './actions';
import { Components } from '../desktop.interface';

interface InitialState {
  componentList: Components[];
}

let state: InitialState = {
  componentList: [],
};

interface Event {
  type: string;
  payload?: any;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.ADD_COMPONENT:
      state = {
        componentList: [...state.componentList, data.payload],
      };
      store.next(state);
      break;
    case ActionTypes.GET_COMPONENT:
      store.next(state);
      break;
    default:
      break;
  }
});
