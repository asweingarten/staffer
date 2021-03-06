module.exports = function(grunt) {
  grunt.initConfig({
    ts: {

		default : {
			options: {
				compiler: './ts-1.5.0beta/bin/tsc',
				module: 'commonjs',
				target: 'es5',
				
				
			},
			src: ["src/*.ts", "!node_modules/**/*.ts", "!ts-1.5.0beta/**/*.ts"],
			outDir: 'dist',
			watch: 'src'
		}
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};