import { RECEIVE_CANVAS_ITEMS } from './';

export default function (context, payload, done) {
  // context.service.read('500px', {}, {}, function (err, photos) {
  //   context.dispatch(RECEIVE_PHOTOS, photos);
  //   done();
  // });
	
	var items = {
		md: [
			{x: 0, y: 10, w: 2, h: 1},
			{x: 0, y: 1, w: 1, h: 1}
		]
	};

	context.dispatch(RECEIVE_CANVAS_ITEMS, items);

	done();
};