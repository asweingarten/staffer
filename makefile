compile:
	tsc --module commonjs --outDir public/js src/*.ts;

test:
	tsc \
	--module commonjs \
	tests/test.ts;
	node tests/test.js > results;
	cat results;
