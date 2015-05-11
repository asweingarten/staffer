compile:
	tsc --watch -m commonjs -t es5 --emitDecoratorMetadata --outDir js  *.ts;

test:
	make compile;
	node --harmony tests/bootstrap.js;

server:
	babel-node server;
