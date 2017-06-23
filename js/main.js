(function () {
  var menu = $('#menu') // 菜单
  var menuLink = $('#menu-link') // 隐藏菜单的触发按钮
  var appShade = $('#app-shade') // 内容幕布
  var app = $('#app') // 整个视口内容
  menu.attr('data-show', '0') // 默认标记位隐藏 (0 为隐藏，1 为 显示)
  /**
   * 滑出菜单
   * */
  function MenuIn() {
    menu.animate({
      'right': '20%'
    }, 400);
    app.animate(({
      'left': '80%'
    }))
    appShade.addClass('active')
    menu.attr('data-show', '1')
  }
  /**
   * 隐藏菜单
   * */
  function MenuOut() {
    menu.animate({
      'right': '100%'
    }, 400);
    app.animate(({
      'left': '0'
    }))
    appShade.removeClass('active')
    menu.attr('data-show', '0')
  }
  /*监听菜单的触发按钮的点击*/
  menuLink.click(function (e) {
    e.stopPropagation();
    if(Number(menu.attr('data-show'))) {
      MenuOut()
    }else {
      MenuIn()
    }
  })
  /*监听页面点击事件*/
  $(document).click(function (e) {
    MenuOut()
  });
}())