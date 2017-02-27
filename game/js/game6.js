var Page = {
    init: function() {
        Page.start();
    },
    start: function() {
        var nLucky,
            sThisClass,
            aPosition = [
                {'left': 0, 'top': 0},      //0
                {'left': 0, 'top': 64},     //1
                {'left': 0, 'top': 128},    //2
                {'left': 0, 'top': 192},    //3
                {'left': 0, 'top': 256},    //4
                {'left': 0, 'top': 320},     //5
                {'left': 64, 'top': 320},    //2-6
                {'left': 128, 'top': 320},    //2-7
                {'left': 192, 'top': 320},      //2-8
                {'left': 192, 'top': 256},     //3-9
                {'left': 192, 'top': 192},    //3-10
                {'left': 192, 'top': 128},    //3-11
                {'left': 192, 'top': 64},      //3-12
                {'left': 192, 'top': 0},     //3-13
                {'left': 128, 'top': 0},     //4-14
                {'left': 64, 'top': 0},     //4-15
            ];

        $('#btn').on('click', function() {
            nLucky = Page.getRandom(1, 6);
            sThisClass = $(this).attr('class');
            $('#tools').text(nLucky);

            if ($('#' + sThisClass).attr('data-start') === 'no') {
                if (nLucky === 6) {
                    $('#' + sThisClass).animate(aPosition[0]);
                    $('#' + sThisClass).attr('data-start', 'yes');
                }
            } else {
                var nTotal = nLucky + parseInt($('#' + sThisClass).attr('data-num'), 10);
                
                if (nTotal === 16) {
                    nTotal = 0;
                } else if (nTotal > 16) {
                    nTotal = nTotal - 16;
                }

                $('#' + sThisClass).attr('data-num', nTotal);
                $('#' + sThisClass).animate(aPosition[nTotal], 500, function() {
                    if (nTotal === 0) {
                        alert(sThisClass + '胜利啦!');
                    }
                });
            }           

            if (sThisClass === 'ma') {
                $(this).attr('class', 'wang');
            } else {
                $(this).attr('class', 'ma');
            }

            $('#btn').text($(this).attr('class') + ' 扔一扔');
        });
    },
    getRandom: function(min, max) {
        var range = max - min,
            rand = Math.random();

        return min + Math.round(range * rand);
    }
};

Page.init();