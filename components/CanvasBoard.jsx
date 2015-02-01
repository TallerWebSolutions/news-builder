import React from 'react';
import IntlMixin from 'react-intl';
import { StoreMixin } from 'fluxible';
import { assign, random, range, result } from 'lodash';
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
    return this.getStore(CanvasBoardStore).getState();
  },

  onChange() {
    this.setState(this.getState());
  },

  render() {
    //const { current_layout, items } = this.state;

    var items = {
      lg: [
        {x: 1, y: 1, w: 2, h: 1, i: 1},
        {x: 1, y: 2, w: 1, h: 1, i: 2},
        {x: 1, y: 2, w: 1, h: 1, i: 3}
      ],
      md: [
        {x: 0, y: 1, w: 2, h: 1, i: 1},
        {x: 0, y: 2, w: 1, h: 1, i: 2}
      ]
    };

    // @TODO: Refactor class of ReactGridLayout.
    return (
      <ReactGridLayout.Responsive {...this.props} layouts={items}>
        {
          items.lg.map((item, key) => {
            return <div key={key+1}>{item}</div>
          })
        }
      </ReactGridLayout.Responsive>
    );
  }

});

export default CanvasBoard;