window.onload = function() {
    var Page = {
        init: function() {
            this.renderHeader();
            this.getNowTime();
            this.slideLock();
            this.getLocalStorage();
        },
        getLocalStorage: function() {
            console.log(localStorage);
        },
        getAjax: function(url, fnSucc, fnFail) {
            var xmlHttp = new XMLHttpRequest();
            //打开连接
            xmlHttp.open('GET', '../' + url + '?' + Math.random(), true);
            //发送请求
            xmlHttp.send();
            //接受响应
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    fnSucc(xmlHttp.responseText);
                } else {
                    fnFail(xmlHttp.status);
                }
            }
        },
        renderHeader: function() {
            var oHeader = document.querySelector('#header');

            this.getAjax(
                'data/cares-data.js',
                function(data) {
                    var res = JSON.parse(data).response,
                        o;
                    console.log(res);

                    for (var i in res) {
                        o = res[i];

                        if (o.visible) {
                            oHeader.querySelector('#' + [i]).style.visibility = 'visible';
                        } else {
                            oHeader.querySelector('#' + [i]).style.visibility = 'hidden';
                        }

                        if (i.match(/operator|net|battery_percent/)) {
                            oHeader.querySelector('#' + [i]).innerHTML = o.des;
                        }
                    }

                    for (var j = 1; j <= res['signal'].des; j++) {
                        oHeader.querySelector('#signal').querySelectorAll('li')[j - 1].className = 'current';
                    }

                    oHeader.querySelector('#battery_img').querySelector('i').style.width = parseFloat(res['battery_percent'].des) / 100 * 26 + 'px';
                },
                function(sss) {
                    console.log(sss);
                }
            );
        },
        addZero: function(n) {
            if (n < 10) {
                return '0' + n;
            }
            return '' + n;
        },
        getNowTime: function() {
            var oTime = document.querySelector('#time'),
                oDate = document.querySelector('#date'),
                self = this;

            (function renderTime() {
                var t = new Date(),
                    nMonth = t.getMonth() + 1,
                    nDate = t.getDate(),
                    nDay = t.getDay(),
                    nHour = self.addZero(t.getHours()),
                    nMinute = self.addZero(t.getMinutes()),
                    sTime = nHour + ':' + nMinute,
                    sDay, sDate;

                switch (nDay) {
                    case 0:
                        sDay = '星期日';
                        break;
                    case 1:
                        sDay = '星期一';
                        break;
                    case 2:
                        sDay = '星期二';
                        break;
                    case 3:
                        sDay = '星期三';
                        break;
                    case 4:
                        sDay = '星期四';
                        break;
                    case 5:
                        sDay = '星期五';
                        break;
                    case 6:
                        sDay = '星期六';
                }

                sDate = nMonth + '月' + nDate + '日 ' + sDay;

                oTime.innerHTML = sTime;
                oDate.innerHTML = sDate;

                setTimeout(renderTime, 1000);
            }());   
        },
        slideLock: function() {
            var aLightLi = document.querySelector('#slide_lock').querySelectorAll('li'),
                j = 1;

            function slideLight() {
                for (var i = 0; i < aLightLi.length; i++) {
                    aLightLi[i].className = '';
                }

                aLightLi[j].className = 'current';
                j++;
                if (j === aLightLi.length) {
                    j = 0;
                }
            }

            setInterval(slideLight, 300);
        }
    }

    Page.init();
}