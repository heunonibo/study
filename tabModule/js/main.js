requirejs.config({

  baseUrl: 'js',
  paths:{
    'jquery': 'lib/jquery-3.2.0.min',
    'tab' : 'module/tab'
  },
  shim:{
    'jquery' : {
      exports: '$'
    },
    'tab' : {
      deps: ['jQuery'],
      exports: 'tabModule'
    }
  }

});

require(['jquery', 'module/tab'] , function ($, tabModule) {

  tabModule();
  
});
