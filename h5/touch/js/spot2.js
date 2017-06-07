var spots = {},
    touches,
    timer;

document.addEventListener('touchstart', function(e) {
    e.preventDefault();

    // targetTouches: 位于当前DOM元素上的手指动作的TouchList列表
    // changedTouches: 在一个touched事件中,这将是移开的那根手指
    [].forEach.call(e.targetTouches, function(touch) {
        // 对每一根触摸在屏幕上的手指都生成一个元素,并且用touch.identifier作为该元素的
        // 唯一标识, 以在触摸结束后清除引用的元素
        // identifier: 一个数字,用于唯一标识触摸会话中的当前手指
        // target: 作为动作目标的DOM元素
        // clentX,clientY: 触摸点相对于浏览器窗口viewport的位置   pageX,pageY,触摸点相对于页面的位置
        //screenX,screenY
        if (spots[touch.identifier]) {
            return;
        }
        var spot = spots[touch.identifier] = document.createElement('div');
        spot.classList.add('spot');
        spot.style.left = touch.pageX - 35 + 'px';
        spot.style.top = touch.pageY - 35 + 'px';
        document.body.appendChild(spot);
    });

    // 任何一根手指的移动都会导致touchmove事件触发很多次
    // 这里使用一个timer来减少渲染光点的开支
    // 使用16ms是因为1000 / 16 = 60ps
    timer = setInterval(function() {
        renderTouches(touches);
    }, 16);
}, false);

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    touches = e.touches;
}, false);

function renderTouches(touches) {
    if (!touches) {
        return;
    }

    [].forEach.call(touches, function(touch) {
        var spot = spots[touch.identifier];

        if (spot) {
            spot.style.left = touch.pageX - 35 + 'px';
            spot.style.top = touch.pageY - 35 + 'px';
        }
    });
}

document.addEventListener('touchend', function(e) {
    e.preventDefault();
    // changedTouches存储了变化的指头,在touchend事件代表着离开屏幕的指头
    [].forEach.call(e.changedTouches, function(touch) {
        var spot = spots[touch.identifier];

        if (spot) {
            document.body.removeChild(spot);
            delete spots[touch.identifier];
        }
    });

    if (e.changedTouches.length === 0) {
        clearInterval(timer);
    }
}, false);