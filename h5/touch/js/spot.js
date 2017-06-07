var spot = null;

// touch 所有类型事件都会冒泡,在document上绑定touch事件是一种简单粗暴的处理方式
document.addEventListener('touchstart', function(e) {
    // 如果阻止了touchstart的默认行为,后续的mousedown和click事件将不会触发.
    e.preventDefault();
    // 如果已经生成小光点,就直接返回
    if (spot) {
        return;
    }

    spot = document.createElement('div');
    spot.classList.add('spot');
    spot.style.left = e.touches[0].pageX - 35 + 'px';
    spot.style.top = e.touches[0].pageY - 35 + 'px';
    document.body.appendChild(spot);
}, false);

document.addEventListener('touchmove', function(e) {
    // 如果阻止了touchmove默认行为, 后续的mousemove事件将不会触发
    e.preventDefault();

    if (spot) {
        spot.style.left = e.touches[0].pageX - 35 + 'px';
        spot.style.top = e.touches[0].pageY - 35 + 'px';
    }
}, false);

document.addEventListener('touchend', function(e) {
    // 如果阻止了touchend的默认行为, 后续的mouseup,click事件将不会触发
    e.preventDefault();

    if (spot) {
        document.body.removeChild(spot);
        spot = null;
    }
}, false);