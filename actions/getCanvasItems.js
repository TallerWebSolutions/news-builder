import { RECEIVE_CANVAS_ITEMS } from './';

export default function (context, payload, done) {
  // context.service.read('500px', {}, {}, function (err, photos) {
  //   context.dispatch(RECEIVE_PHOTOS, photos);
  //   done();
  // });
	
	var items = {
    lg: [
      {x: 0, y: 0, w: 6, h: 2, i: 1},
      {x: 6, y: 0, w: 3, h: 2, i: 2},
      {x: 9, y: 0, w: 3, h: 1, i: 3},
      {x: 9, y: 1, w: 3, h: 1, add: true}
    ],
    md: [
      {x: 0, y: 0, w: 6, h: 2, i: 1},
      {x: 6, y: 0, w: 4, h: 2, i: 2},
      {x: 0, y: 2, w: 10, h: 1, add: true}
    ],
    sm: [
      {x: 1, y: 1, w: 2, h: 1, i: 1},
      {x: 1, y: 2, w: 1, h: 1, i: 2},
      {x: 1, y: 2, w: 1, h: 1, i: 3},
      {x: 1, y: 2, w: 1, h: 1, add: true}
    ],
    xs: [
      {x: 1, y: 1, w: 2, h: 1, i: 1},
      {x: 1, y: 2, w: 1, h: 1, i: 2},
      {x: 1, y: 2, w: 1, h: 1, i: 3},
      {x: 1, y: 2, w: 1, h: 1, add: true}
    ]
  };

	context.dispatch(RECEIVE_CANVAS_ITEMS, items);

	done();
};