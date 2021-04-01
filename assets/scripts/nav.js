'use strict';

(function() {
  let toggle = $('#js-nav-trigger');
  let mainNav = $('.nav--main');
  let sidebar = $('.nav--aside');
  let sidebarList = sidebar.find('.nav__list');
  let sidebarLink = sidebar.find('.nav__link--dropdown');

  let ModifierClass = {
    TOGGLE: 'is-active',
    MAIN_NAV: 'is-visible',
    SB_LIST: 'moves-out',
    SB_LINK: 'is-selected',
    SB_LINK_H: 'hover'
  }

  toggle.on('click', function() {
    $(this).toggleClass(ModifierClass.TOGGLE);
    mainNav.toggleClass(ModifierClass.MAIN_NAV).find('.nav__list').slideToggle();
  });

  sidebarLink.on('click', function(evt) {
    evt.preventDefault();
    let link = $(this);

    link.toggleClass(ModifierClass.SB_LINK).siblings('ul').slideToggle();
    sidebarList.addClass(ModifierClass.SB_LIST);

    if (!sidebarLink.hasClass(ModifierClass.SB_LINK)) {
      sidebarList.removeClass(ModifierClass.SB_LIST);
    }

  });

})();