import React from 'react';
import IntlMixin from 'react-intl';
import { StoreMixin } from 'fluxible';
import { assign, random, range, map, result } from 'lodash';
import { BROWSER } from '../utils/env';
import PhotosStore from '../stores/PhotosStore';
import Caption from './photos/Caption.jsx';
import CanvasBoard from './CanvasBoard.jsx';
import ReactGridLayout from 'react-grid-layout';

const Home = React.createClass({
  mixins: [StoreMixin, IntlMixin],
  
  statics: {
    storeListeners: [PhotosStore]
  },

  getInitialState() {
    return this.getState();
  },

  onChange() {
    this.setState(this.getState());
  },

  getState() {
    const storeState = this.getStore(PhotosStore).getState();
    // return assign(storeState, {
    //   current_photo: 0
    // });
    return storeState;
  },

  render() {
    if (BROWSER) require('../style/components/home.scss');

    return (
      <div className="home">
        <CanvasBoard {...this.props}>
        </CanvasBoard>
      </div>
    );
  }
});

export default Home;