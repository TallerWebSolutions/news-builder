import { SET_CURRENT_CANVAS_LAYOUT } from './';

export default function (context, payload, done) {
	context.dispatch(SET_CURRENT_CANVAS_LAYOUT, payload.current_layout);
	done();
};