$(document).ready(function(){
    $(".j-dot").dotdotdot({
        watch: "true",
        ellipsis: '...',
        wrap: 'letter'
    });

    function rusData() {
        var rusMon;
        var date = new Date();
        var year=date.getFullYear();
        var day=date.getDate();
        var mon=date.getMonth();
        switch (mon) {
            case 0: rusMon="января"; break;
            case 1: rusMon="февраля"; break;
            case 2: rusMon="марта"; break;
            case 3: rusMon="апреля"; break;
            case 4: rusMon="мая"; break;
            case 5: rusMon="июня"; break;
            case 6: rusMon="июля"; break;
            case 7: rusMon="августа"; break;
            case 8: rusMon="сентября"; break;
            case 9: rusMon="октября"; break;
            case 10: rusMon="ноября"; break;
            case 11: rusMon="декабря"; break;
        }
        var result=day + " " + rusMon + " "+ year;
        return result
    }

    $('.j-button').on('click', function(){
        var comment = $('.footer-inner__textarea').val();
        if(comment.length>1){
            var cloneBlock = $('.j-item').clone();
            cloneBlock.removeClass('j-item');
            $(cloneBlock).children('.content-comments__heading').html('Гость');
            $(cloneBlock).children('.content-comments__text').html(comment);
            $(cloneBlock).children('.content-comments__date').html(rusData);
            $('.content-comments').append(cloneBlock);
            $('.footer-inner__textarea').val('')
        }
        return false;
    });

    $('.j-textarea').on('keydown', function (keyNumber) {
        var comment = $('.footer-inner__textarea').val();
          if ((keyNumber.ctrlKey && keyNumber.keyCode == 13) && comment.length>1) {
            var cloneBlock = $('.j-item').clone();
            cloneBlock.removeClass('j-item');
            $(cloneBlock).children('.content-comments__heading').html('Гость');
            $(cloneBlock).children('.content-comments__text').html(comment);
            $(cloneBlock).children('.content-comments__date').html(rusData);
            $('.content-comments').append(cloneBlock);
            $('.footer-inner__textarea').val('')
          }
    }); 
})