import {Scale} from './dist/scales';

module.exports = function(app) {

	app.get('/c-major', function(req, res){
		cMajorScale = new Scale
		res.json();
	});
}