$(function() {
    var str = '',
        oWrap = $('#alp_wrap'),
        oTarget = $('#alp_target'),
        oBtn = $('#sub_btn'),
        oTxt = $('#sub_txt'),
        oSuccessTimes = $('#success_times'),
        oLastTimes = $('#last_times');

    var Page = {
        config: {
            nTotalAlp: 6,
            time: 20,
            isLowerUpper: true
        },
        init: function() {
            this.myFunction();
            this.render();
            this.bindEvent();
        },
        myFunction: function() {
            if (!Array.prototype.indexOf) {
                Array.prototype.indexOf = function(n) {
                    for (var i = 0; i < this.length; i++) {
                        if (this[i] === n) {
                            return i;
                        }
                    }

                    return -1;
                }
            }
        },
        render: function() {
            for (var i = 0; i < this.config.nTotalAlp; i++) {
                str += String.fromCharCode(this.getRandom(65, 122));
            }

            oTarget.text(str);

            var maxTop = oWrap.height() - oTarget.height();

            oTarget.animate({'top': maxTop}, Page.config.time * 1000, function() {
                alert('游戏结束!');
                location.reload();
            });
        },
        bindEvent: function() {
            oBtn.on('click', function() {
                var sRes = oTxt.val();

                if (Page.config.isLowerUpper) {
                    sRes = sRes.toLowerCase();
                    str = str.toLowerCase();
                }

                if (sRes === str) {
                    oSuccessTimes.text(parseInt(oSuccessTimes.text()) + 1);
                    oTarget.stop().css('top', 0);
                    str = '';
                    oTxt.val('');
                    Page.config.time = Page.config.time - 3;
                    if (Page.config.time <= 3) {
                        alert('闯关成功!');
                        location.reload();
                    }
                    Page.render();

                } else {
                    oLastTimes.text(parseInt(oLastTimes.text()) -1);

                    if (parseInt(oLastTimes.text()) <= 0) {
                        alert('游戏结束!');
                        location.reload();
                    }
                }
            });
        },
        getRandom: function(min, max) {
            var rand = Math.random(),
                range = max - min,
                aIngnore = [91, 92, 93, 94, 95, 96],
                nRes = min + Math.round(rand * range);

            if (aIngnore.indexOf(nRes) === -1) {
                return nRes;
            } else {
                return this.getRandom(min, max);
            }
        }
    }

    Page.init();
});