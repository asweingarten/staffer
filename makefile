compile:
	cd src/es6 && babel *.js --out-dir ../cd es5/;

test:
	node tests/test.js;
