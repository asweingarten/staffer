compile:
	tsc --watch -m commonjs -t es5 --emitDecoratorMetadata --outDir js  *.ts;

test:
	cd test && tsc -m commonjs -t es5 --emitDecoratorMetadata --outDir  *.ts;
	babel-node test/test.js;

server:
	babel-node server;
