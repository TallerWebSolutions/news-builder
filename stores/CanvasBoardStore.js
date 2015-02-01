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
  },
  
  handleReceiveCanvasItems(items) {
    this.items = items;
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
      current_layout: this.current_layout
    };
  },
  
  dehydrate() {
    return this.getState();
  },
  
  rehydrate(state) {
    this.items = state.items;
    this.current_layout = state.current_layout;
  }
});