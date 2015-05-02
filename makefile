compile:
	cd src && flow;
	cd src/es6 && babel -o notes.js -l flow *.es6;

test:
	node --harmony tests/es6/bootstrap.js;
