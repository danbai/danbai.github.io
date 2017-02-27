$(function() {
    var Page = {
        init: function() {
            this.myFunction();
            this.getHeader();
            this.setNav();
            this.getModule();
            this.hashChanged();
            this.analise();
        },
        myFunction: function() {
            if (!Array.prototype.indexOf) {
                Array.prototype.indexOf = function(n) {
                    for (var i = 0; i < this.length; i++) {
                        if (n === this[i]) {
                            return i;
                        }
                    }

                    return -1;
                }
            }
        },
        getHeader: function() {
            this.getMessage();
        },
        getMessage: function() {
            var self = this;

            $.ajax({
                url: 'data/message.json',
                dataType: 'json',
                type: 'GET',
                error: function(res) {
                    //console.log(res);
                },
                success: function(res) {
                    var arr = res.response;

                    $('#message').html(arr[self.getRandom(0, arr.length - 1)]);
                }
            });
        },
        getRandom: function(min, max) {
            var range = max - min,
                rand = Math.random();

            //console.log(min + Math.round(range * rand));
            return min + Math.round(range * rand);
        },
        setNav: function() {
            var oHeader = $('#header'),
                oNav = $('#nav'),
                nScrollTop;

            $(window).on('scroll', function() {
                nScrollTop = document.body.scrollTop || document.documentElement.scrollTop;

                if (nScrollTop >= 94) {
                    oHeader.addClass('header_fixed');
                    oNav.addClass('nav_fixed');
                } else {
                    oHeader.removeClass('header_fixed');
                    oNav.removeClass('nav_fixed');
                }
            });

            this.getData();
        },
        navClick: function(oModule) {
            var oNav = $('#nav'),
                aLi = oNav.find('li'),
                self = this;

            aLi.on('click', function() {
                $(this).addClass('current').siblings().removeClass('current');
                $('.second_show').hide();
                $('#crumbs_second').text($(this).find('a').text());

                var str = '',
                    arr = oModule[$(this).attr('data-url')],
                    ele;

                for (var i = 0; i < arr.length; i++) {
                    ele = arr[i];

                    str += '<div class="box">' +
                                '<h2><a href="javascript:;" data-jump="' + ele.target + '" data-title="' + ele.title + '" data-date="' + ele.date +
                                '" data-view="' + ele.view + '" data-intro="' + ele.content + '">' +ele.title + '</a></h2>' +
                                '<p class="box_date"><span class="date">' + ele.date + '</span><span class="view">' + ele.view + '</span>view</p>' +
                                '<p class="box_intro">' + ele.content + '</p>' +
                                '<a href="javascript:;" class="read_all" data-jump="' + ele.target + '" data-title="' + ele.title + '">阅读全文</a>' +
                            '</div>';
                }

                $('#left_box').html(str);

                $('#page_turn').show();

                self.turnPage(5);
            });

            var sHash = location.hash.slice(1);

            if (sHash === '') {
                aLi.eq(0).trigger('click');
            } else {
                $('#nav').find('li[data-url=' + sHash + ']').trigger('click');
            }
            
        },
        getData: function() {
            var self = this;

            $.ajax({
                url: 'data/module.json',
                type: 'GET',
                dataType: 'json',
                error: function(res) {
                    //console.log(res);
                },
                success: function(res) {
                    //console.log(res);
                    self.navClick(res);
                }
            });;
        },
        getModule: function() {
            var oLeftBox = $('#left_box');

            oLeftBox.on('click', 'a[data-jump]', function() {
                var self = $(this);

                if (self.attr('data-title').match(/(person|game|tools|html5_css3)/)) {
                    window.open(self.attr('data-jump'), '_blank');
                } else {
                    oLeftBox.load($(this).attr('data-jump') + '?' + new Date().getTime(), function() {
                        oLeftBox.find('#module_title').text(self.attr('data-title'));
                        oLeftBox.find('#module_date').text(self.attr('data-date'));
                        oLeftBox.find('#module_views').text(self.attr('data-view'));
                        oLeftBox.find('#module_intro').text(self.attr('data-intro'));

                        $('#page_turn').hide();
                        $('.second_show').show().eq(1).text(self.attr('data-title'));
                        $('html, body').scrollTop(0);
                    });
                }    
            });

            $('#crumbs_second').on('click', function() {
                $('#nav').find('li.current').trigger('click');
            });
        },
        turnPage: function(nPerPage) {
            var aBox = $('#left_box .box'),
                oPrev = $('#prev'),
                oNext = $('#next'),
                oPageWrap = $('#btn_wrap'),
                nTotal = aBox.length,
                nTotalPage = Math.ceil(nTotal / nPerPage),
                strBtn = '',
                index;

            for (var i = 0; i < nTotalPage; i++) {
                strBtn += '<button>' + (i + 1) + '</button>';
            }

            oPageWrap.html(strBtn);

            var aBtn = oPageWrap.find('button');

            showBox(0);

            aBtn.on('click', function() {
                showBox(parseInt($(this).text(), 10) - 1);
            });

            oPrev.off('click');
            oPrev.on('click', function() {
                $('#btn_wrap .current').prev().trigger('click');
                
            });

            oNext.off('click');
            oNext.on('click', function() {
                $('#btn_wrap .current').next().trigger('click');
                
            });

            function showBox(n) {
                aBtn.eq(n).addClass('current').siblings().removeClass('current');

                aBox.hide().each(function() {
                    index = $(this).index();

                    if (index >= n * nPerPage && index < (n + 1) * nPerPage) {
                        aBox.eq(index).show();
                    }
                });

                $('body, html').scrollTop(0);
            }
        },
        hashChanged: function() {
            $(window).on('hashchange', function() {
                var sHash = location.hash.slice(1);

                $('#nav').find('li[data-url=' + sHash + ']').trigger('click');
            });
        },
        analise: function() {
            
        }
    }

    Page.init();
});
