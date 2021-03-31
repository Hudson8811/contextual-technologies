'use strict';

(function() {
  let toggle = $('#js-nav-trigger');
  let mainNav = $('.nav--main');
  let sidebar = $('.nav--aside');
  let sidebarList = sidebar.find('.nav__list');
  let sidebarMainLink = sidebar.find('.nav__link--main');
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
    //let parent = link.parent();

    link.toggleClass(ModifierClass.SB_LINK).next().slideToggle();
    sidebarList.addClass(ModifierClass.SB_LIST);

    if (!sidebarLink.hasClass(ModifierClass.SB_LINK)) {
      sidebarList.removeClass(ModifierClass.SB_LIST);
    }
    
   /* let url = link.attr('href');
    sidebarLink.parent().find('.nav__add-link').remove();*/

    /*if (link.hasClass(ModifierClass.SB_LINK)) {
      parent.append(setLink(url));
    } else {
      parent.find('.nav__add-link').remove();
    }*/

  });

  sidebarLink.each(function() {
    let link = $(this);
    let parent = link.parent();
    let url = link.attr('href');

    parent.append(setLink(url));
  });

  function setLink(url) {
    let link = $('<a class="nav__add-link" href="' + url + '">Перейти в раздел</a>');
    return link;
  }

})();