$(function() {
    var oUl = $('ul'),
        oBox = $('.box');

    var Page = {
        init: function() {
            this.render();
        },
        render: function() {
            var self = this;

            $.ajax({
                url: '../js/game3-data.js',
                type: 'GET',
                dataType: 'json',
                error: function(res) {
                    console.log(res);
                },
                success: function(res) {
                    var res = res.response, //[],[],[]
                        str = '',
                        timer;

                    for (var i = 0; i < res.length; i++) {
                        str += '<li><a href="javascript:;">笑话' + (i + 1) + '</a></li>';
                    }

                    oUl.append(str);

                    $('li').on('click', function(ev) {
                        var i = 1,
                            index = $(this).index(),
                            arr = res[index];

                        oBox.html('');
                        clearInterval(timer);

                        $(this).addClass('current').siblings().removeClass('current');

                        if (!ev.isNotPush) {
                            history.pushState({count: index + 1}, null, '?num=' + (index + 1));
                        }

                        document.title = '笑话' + (index + 1);

                        self.displayBox(arr, 0);

                        timer = setInterval(function() {
                            self.displayBox(arr, i);
                            i++;

                            if (i === arr.length) {
                                i = 0;
                            }
                        }, 1500);
                    });

                    self.stateChange();

                    self.setNameUrl();
                }
            });
        },
        displayBox: function(a, i) {
            oBox.html(a[i]);
        },
        stateChange: function() {
            window.onpopstate = function(e) {
                console.log(e.state);
                if (e.state && e.state.count) {
                    $('li').eq(e.state.count - 1).trigger({type: 'click', isNotPush: true});
                }
            }
        },
        setNameUrl: function() {
            if (location.search) {
                var num = location.search.split('=')[1] - 1;

                if (num >= 0 && num < $('li').length) {
                    $('li').eq(num).trigger({type: 'click', isNotPush: true});
                }
            }
        }
    };

    Page.init();
});
