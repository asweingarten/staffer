import {ScaleConstructor, Scale} from './dist/scales';

module.exports = function(app) {

	app.get('/c-major', function(req, res){
		var cMajorScale = ScaleConstructor.C_MAJOR();
		res.json(cMajorScale);
	});
}