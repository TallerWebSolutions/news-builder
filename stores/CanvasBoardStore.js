import createStore from 'fluxible/utils/createStore';

import {
  SET_CURRENT_CANVAS_LAYOUT,
  RECEIVE_CANVAS_ITEMS
} from '../actions';

export default createStore({

  storeName: 'CanvasBoardStore',
  
  initialize(dispatcher) {
    this.items = [];
    this.current_layout = [];
    this.newCounter = 0;
    this.breakpoint = 'lg';
  },
  
  handleReceiveCanvasItems(items) {
    this.items = items;
    this.current_layout = items[this.breakpoint];
    this.newCounter = items[this.breakpoint].length;

    this.emitChange();
  },

  handleSetCurrentCanvasLayout(current_layout) {
    this.current_layout = current_layout;
    this.emitChange();
  },
  
  handlers: {
    [RECEIVE_CANVAS_ITEMS]: 'handleReceiveCanvasItems',
    [SET_CURRENT_CANVAS_LAYOUT]: 'handleSetCurrentCanvasLayout'
  },
  
  getState() {
    return {
      items: this.items,
      current_layout: this.current_layout,
      newCounter: this.newCounter,
      breakpoint: this.breakpoint
    };
  },
  
  dehydrate() {
    return this.getState();
  },
  
  rehydrate(state) {
    this.items = state.items;
    this.current_layout = state.current_layout;
    this.newCounter = state.newCounter;
    this.breakpoint = state.breakpoint;
  }
});