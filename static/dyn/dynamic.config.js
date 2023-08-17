self.__dynamic$config = {
  prefix: '/dynamic/~/',
  encoding: 'aes',
  mode: 'production', 
  logLevel: 0, 
  bare: {
    version: 3, 
    path: '/bare/',
  },
  tab: {
    title: 'Google',
    icon: "https://www.google.com/favicon.ico",
    ua: null,
  },
  assets: {
    prefix: '/dyn/',
    files: {
      handler: 'dynamic.handler.js',
      client: 'dynamic.client.js',
      worker: 'dynamic.worker.js',
      config: 'dynamic.config.js',
      inject: null,
    }
  },
  block: [
  
  ]
};
