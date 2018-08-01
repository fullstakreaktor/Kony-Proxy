module.exports= function (grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 3005,
                    base: 'public',
                    hostname: 'localhost',
                    keepalive: true,
                    open: true,
                    livereload: true,
                    middleware: function (connect, options, middlewares) {
                      middlewares.unshift(require('grunt-connect-proxy/lib/utils').proxyRequest);
                      return middlewares;
                    }
                },
            proxies: [
                {
	                context: '/hero_service',
	                host: 'localhost',
	                port: 3000,
	                rewrite: {
	                    '^/hero_service':'/'
	                }
              	},
                {
	                context: '/about_service',
	                host: 'localhost',
	                port: 3001,
	                rewrite: {
	                    '^/about_service':'/'
	                }
              	},
              	{
	                context: '/reviews_service',
	                host: 'localhost',
	                port: 3002,
	                rewrite: {
	                    '^/reviews_service':'/api'
	               }
              	},
              	{
	                context: '/reservation_service',
	                host: 'localhost',
	                port: 3003,
	                rewrite: {
	                    '^/reservation_service':'/api'
	                }
              	},
            ]
          }
        }
      });
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('server', function (target) {
      grunt.task.run([
          'configureProxies:server',
          'connect:server',
      ]);
    });
}