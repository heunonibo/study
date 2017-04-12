define(['jquery'], function($) {
  'use strict';
  console.log('tab.js 파일 실행');

  var tabModule = function() {
    $('.tabModule').on('click', '.tab_menu li', function() {
      var self = $(this);
      var index = self.index();
      var tabContent = $('.tab_container > div').eq(index);

      self.add(tabContent).addClass('active').siblings().removeClass('active');
    });
  };

  return tabModule;

});
