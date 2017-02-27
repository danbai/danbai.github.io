window.onload = function() {
    var isOn = false;

    function $(selector) {
        return document.querySelector(selector);
    }

    function turnOn() {
        $('#status').innerHTML = 'ON';
        isOn = true;
    }

    function turnOff() {
        $('#status').innerHTML = 'OFF';
        isOn = false;
    }

    var theSwitch = $('.switch');

    /*theSwitch.addEventListener('touchstart', function() {
        if (isOn) {
            theSwitch.style.left = 0;
            turnOff();
        } else {
            theSwitch.style.left = '119px';
            turnOn();
        }
    });*/

    function switchFun() {
        if (isOn) {
            theSwitch.style.left = 0;
            turnOff();
        } else {
            theSwitch.style.left = '119px';
            turnOn();
        }
    }
    

    var TRANSITION_END = 'webkitTransitionEnd',
        TRANSITION_CSS = '-webkit-transition',
        TRANSFORM_CSS = '-webkit-transform',
        TRANSFORM = 'webkitTransform',
        TRANSITION = 'webkitTransition';

    if (document.body.style.transform) {
        TRANSITION_END = 'transitionend';
        TRANSITION_CSS = 'transition';
        TRANSFORM_CSS = 'transform';
        TRANSFORM = 'transform';
        TRANSITION = 'transition';
    }

    var startLeft,
        goTo,
        l = $('form').offsetLeft;   //相对定位父元素的偏移距离

    function handleTouch(e) {
        switch (e.type) {
            case 'touchstart':
                
                break;
            case 'touchmove':
                goTo = e.touches[0].pageX - l;

                if (goTo < 119 && goTo > 0) {
                    //update the position
                    theSwitch.style[TRANSFORM] = 'translate3d(' + goTo + 'px, 0, 0)';
                }

                if (goTo > 60 && !isOn) {
                    turnOn();
                } else if (goTo < 60 && isOn) {
                    turnOff();
                }
                break;
            case 'touchend':
                if (goTo > 60) {
                    endPoint = 119;
                } else {
                    endPoint = 0;
                }

                theSwitch.style[TRANSITION] = TRANSFORM_CSS + ' 0.1s ease-out';
                theSwitch.style[TRANSFORM] = 'translate3d(' + endPoint + 'px, 0, 0)';
                break;
        }
    }

    theSwitch.addEventListener('touchstart', handleTouch);
    theSwitch.addEventListener('touchmove', handleTouch);
    theSwitch.addEventListener('touchend', handleTouch);
}