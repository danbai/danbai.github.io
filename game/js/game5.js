var Page = {
    init: function() {
        this.render();
        this.move();
    },
    render: function() {
        var aClass = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        $('p').each(function() {
            var nIndex = Page.getRandom(0, aClass.length - 1);
            $(this).addClass('a' + aClass[nIndex]);
            aClass.splice(nIndex, 1);
        });
    },
    getRandom: function(min, max) {
        var range = max - min,
            rand = Math.random();

        return min + Math.round(range * rand);
    },
    move: function() {
        var iX,
            iY,
            bDrag = false,
            nWrapLeft = $('.content').offset().left,
            nWrapTop = $('.content').offset().top;

        $('p').on('mousedown', function(ev) {
            console.log(ev.pageX);
            console.log($(this).offset().left);
            iX = ev.pageX - $(this).offset().left;
            iY = ev.pageY - $(this).offset().top;
            $(this).css('index', 10);
            bDrag = true;
        });

        $('p').on('mousemove', function(ev) {
            if (bDrag) {
                $(this).css({'left': ev.pageX - iX - nWrapLeft - 10, 'top': ev.pageY - iY - nWrapTop - 10});
            }
        });

        $('p').on('mouseup', function(ev) {
            bDrag = false;
            $(this).css('index', 1);
        });
    }
};

Page.init();