compile:
	cd src/es6 && babel *.js --out-dir ../es5/;
	cd tests/es6 && babel *.js --out-dir ../es5/ --modules common;

test:
	node --harmony tests/es6/bootstrap.js;
