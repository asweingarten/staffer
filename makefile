compile:
	cd src && flow;
	cd src/es6 && babel -o notestests.js -l flow *.es6;

test:
	node --harmony tests/bootstrap.js;
