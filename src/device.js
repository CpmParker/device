;(function(factory){
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        var target = module['exports'] || exports;
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        define(['exports'], factory);
    } else {
        factory(window['device'] = {});
    }

})(function (device) {

    var devicer = {

        //判断变量是否是iPhone4
        isIphone4: function () {
            ///判断变量是否是iPhone4
            if (this.isIOS()) {
                var _width = window.screen.width;
                var _height = window.screen.height;
                var _scale = _width / _height;
                if (_scale > 0.6 && _scale < 0.7) { return true; }
            }
            return false;
        },
        //判断变量是否是iPhone4
        isIphone5: function () {
            if (this.isIOS()) {
                var _width = window.screen.width;
                var _height = window.screen.height;
                var _scale = _width / _height;
                if (_scale > 0.5 && _scale < 0.6) { return true; }
            }
            return false;
        },
        //是否是Android系统
        isAndroid: function () {

            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        //是否是IOS系统
        isIOS: function () {

            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        isIPad: function () {

            return navigator.userAgent.match(/iPad/i) ? true : false;
        },
        //是否是IEMobile
        isIEMobile: function () {

            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        isQQBrowser: function () {
            return navigator.userAgent.match(/QQ/i) ? true : false;
        },
        isIE: function () {
            return navigator.userAgent.match(/MSIE|Trident/g) ? true : false;
        },
        //检测浏览器版本号 支持 ie firefox chrome opera safari
        browserVersion: function () {

            var ua = navigator.userAgent.toLowerCase();
            var s;
            (s = ua.match(/msie ([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/opera.([\d.]+)/)) ? s = s[1] :
            (s = ua.match(/version\/([\d.]+).*safari/)) ? s = s[1] : 0;

            return s;
        },
        //是否是BlackBerry
        isBlackBerry: function () {

            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        //是否是移动设备
        isMobile: function () {

            return (this.isAndroid() || this.isIOS() || this.isIEMobile() || this.isBlackBerry());
        },
        ///是不是微信浏览器
        
        isWeiXin: function () {

            return navigator.userAgent.match(/MicroMessenger/i) ? true : false;
        }
    }

    if (Object.assign) {
        Object.assign(device,devicer)
    } else {
        for (var key in devicer) {
            device[key] = devicer[key]
        }
    }
    
})