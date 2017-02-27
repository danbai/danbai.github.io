$(function() {
    function render(i) {
        $.ajax({
            url: '../data/scrolling-data' + i + '.js',
            dataType: 'json',
            error: function(res) {
                console.log(res);
            },
            success: function(data) {
                var arr  = data.response,
                    str = '';

                for (var i = 0; i < arr.length; i++) {
                    str += '<img src="../images/' + arr[i] + '">';
                }

                $('#wrap').append(str);

                n++;
            }
        });
    }
    
    var n = 1;

    render(n);

    $('.content').on('scroll', function() {
        console.log($('#wrap').height());
        console.log($(this).scrollTop());

        if (n >= 5) {
            $(this).off('scroll');
        }  else if ($('#wrap').height() - $(this).scrollTop() < 600){
            render(n);
        }
    });
});