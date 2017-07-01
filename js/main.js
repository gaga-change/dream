/*控制菜单手机浏览器种滑入滑出*/
(function () {
    var menu = $('#menu') // 菜单
    var menuLink = $('#menu-link') // 隐藏菜单的触发按钮
    var appShade = $('#app-shade') // 内容幕布
    var headFixed = $('#head-fixed') // 头部置顶的部分
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
        /*解决uc手机头部fixed问题*/
        headFixed.animate(({
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
        /*解决uc手机头部fixed问题*/
        headFixed.animate(({
            'left': '0'
        }))
        appShade.removeClass('active')
        menu.attr('data-show', '0')
    }

    /*监听菜单的触发按钮的点击*/
    menuLink.click(function (e) {
        e.stopPropagation();
        if (Number(menu.attr('data-show'))) {
            MenuOut()
        } else {
            MenuIn()
        }
    })
    /*监听页面点击事件*/
    $(document).click(function (e) {
        MenuOut()
    });
    /*监听页面滚动*/
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
        if (t >= 10) { //当距离顶部超过300px时
            headFixed.addClass('shrink')
        } else { //如果距离顶部小于300px
            headFixed.removeClass('shrink')
        }
    }
}())