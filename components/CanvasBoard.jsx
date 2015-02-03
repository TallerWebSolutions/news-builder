import React from 'react';
import IntlMixin from 'react-intl';
import { StoreMixin } from 'fluxible';
import { assign, random, range, result, reject, concat } from 'lodash';
import { BROWSER } from '../utils/env';
import PhotosStore from '../stores/PhotosStore';
import CanvasBoardStore from '../stores/CanvasBoardStore';
import ReactGridLayout from 'react-grid-layout';

const CanvasBoard = React.createClass({
  mixins: [StoreMixin, IntlMixin],
  
  statics: {
    storeListeners: [CanvasBoardStore]
  },

  getDefaultProps() {
    return {
      className: "canvas-board",
      cols: {
        lg: 12, md: 10, sm: 8, xs: 4, xxs: 2
      }
    };
  },

  getInitialState() {
    return this.getState();
  },

  getState() {
    var storeState = this.getStore(CanvasBoardStore).getState();
    return storeState;
  },

  createElement(el) {
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    var i = el.add ? '+' : el.i;
    return (
      <div key={i} _grid={el} isResizable={true}>
        {el.add ? 
          <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
        : <span className="text">{i}</span>}
        <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
      </div>
    );
  },

  onAddItem() {
    console.log('adding', this.state.newCounter);
    var breakpoint = this.state.breakpoint;
    var current_breakpoint_items = this.state.items[breakpoint];

    this.state.items[breakpoint] = current_breakpoint_items.concat({
      i: this.state.newCounter,
      x: (current_breakpoint_items.length || 1) * 2 % (this.state.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 2, 
      h: 2,
      static: false
    });

    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items,
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  },

  onRemoveItem(i) {
    console.log('removing', i);
    var breakpoint = this.state.breakpoint;
    this.state.items[breakpoint] = reject(this.state.items[breakpoint], {i: i})
    
    this.setState({
      items: this.state.items
    });
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    
    this.setState({
      breakpoint: breakpoint,
      cols: cols,
      items: this.state.items,
      newCounter: (this.state.items[breakpoint].length || 0) + 1
    });

    console.log(this.state.breakpoint);
  },

  // onLayoutChange(layout) {
  //   console.log('CHANGE LAYOUT');
  //   this.setState({current_layout: layout});
  // },

  onChange() {
    this.setState(this.getState());
  },

  render() {
    var { current_layout, items, breakpoint } = this.state;

    var current_items = items[breakpoint];

    // @TODO: Refactor class of ReactGridLayout.
    return (
      <ReactGridLayout.Responsive {...this.props} layouts={items} onBreakpointChange={this.onBreakpointChange}>
        {
          current_items.map(this.createElement)
        }
      </ReactGridLayout.Responsive>
    );
  }

});

export default CanvasBoard;