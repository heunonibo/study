requirejs.config({

  baseUrl: 'js',
  paths:{
    'jquery': 'lib/jquery-3.2.0.min',
    'tab' : 'module/tab',
    'content' : 'module/content',
    'sub' : 'module/sub',
    'handlebars': 'lib/handlebars-v4.0.5',  // javascript template engine
    'handle' : 'handle',
  },
  shim:{
    'jquery' : {
      exports: '$'
    },
    'tab' : {       // Q. shim 에서 객체명과 paths 명을 같게 해야 되는가?
      deps: ['jquery'],
      exports: 'tabModule'
    },
    'handle' : {
      dep: ['jquery', 'handlebars'],
      exports: 'handle'
    }
  }

});


require(['tab'],function(tabModule){
  tabModule();
});




/*

require JS

무언가를 포함 시키고 싶을 때 -> require 함수 사용

require() : 의존성(dependency)을 가져와서 '코드'를 실행한다.
define() : 의존성(dependency)을 가져와서 '모듈'을 실행한다.

*/
