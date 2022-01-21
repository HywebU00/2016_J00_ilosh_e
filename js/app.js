$(document).ready(function() {
    $('html').removeClass('no-js');
    // 多層選單
    var menu = $('#Header .menu');
    //$('#Header .menu>ul>li').addClass('hasChild');
    $('.menu li:has(ul)').addClass('hasChild')
    menu.find('li.hasChild').hover(function() { $(this).children().stop().fadeIn(200); }, function() { $(this).children('ul').stop().fadeOut(200); });
    menu.find('li').keyup(function() {
        $(this).siblings().children('ul').hide();
    });
    menu.find('li.hasChild').keyup(function() {
        $(this).children().show();
    });
    menu.find('li:last>a').focusout(function() {
        menu.find('li ul').hide();
    });
    // $(menu).last('li').children('a').focusout(
    // //$('#Header .menu li:last>a').focusout(
    // function(){
    // 	$(menu).find('li ul').hide();
    // 	//$('#Header .menu li>ul').hide();
    // });
    //
    //inmenu
    // $('.inmenu h1').click(function(){
    //	   $('.inmenu ul').slideToggle(500);
    //       $
    //   
    //   })
    //  
});
//gotop
$(function() {
    $("#gotop").click(function() {
        //$("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
})
// 影片燈箱區
$(function() {
    $('.moviebox .close').click(function() {
        $('.movie_lightbox').fadeOut()
    })
    $('.movie_lightbox').click(function() {
        $('.movie_lightbox').fadeOut()
    })
})
//以下新增
$(function() {
    $('a.goCenter').keydown(function(e) {
        if (e.which == 13) {
            $('#aC').focus(); /*#aC 是中間定位點的id*/
             $('html, body').stop(true, true).animate({ scrollTop: $('.MainContent').find('.accesskey').offset().top }, 800, 'easeOutExpo');
        }
    });
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).bind('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop').click(function(e) {
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeOutExpo');
        e.preventDefault();
    });
    $('.scrollToTop').keydown(function(e) {
        $('body').find('a:first').focus();
        e.preventDefault();
    });
    /*-----------------------------------*/
    /////////////fatfooter開關/////////////
    /*-----------------------------------*/
    $('.btn-fatfooter').click(function(e) {
        $(this).parent('#FatFooter').find('nav>ul>li>ul').stop(true, true).slideToggle(function() {
            if ($(this).is(':visible')) {
                $('.btn-fatfooter').html("收合/CLOSE");
                $('.btn-fatfooter').attr('name', '收合選單/CLOSE');
            } else {
                $('.btn-fatfooter').html("展開/OPEN");
                $('.btn-fatfooter').attr('name', '展開選單/OPEN');
            }
        });
        $(this).stop(true, true).toggleClass('close');
    });
})
/*-----------------------------------*/
/////////// 無障礙快捷鍵盤組合  //////////
/*-----------------------------------*/
$(document).on('keydown', function(e) {
    // alt+S 查詢
    if (e.altKey && e.keyCode == 83) {
        $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
        $('.Search').find('input[type="text"]').focus();
    }
    // alt+U header
    if (e.altKey && e.keyCode == 85) {
        $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
        $('#Header').find('.accesskey').focus();
    }
    // // alt+C 主要內容區
    if (e.altKey && e.keyCode == 67) {
        $('html, body').stop(true, true).animate({ scrollTop: $('.MainContent').find('.accesskey').offset().top }, 800, 'easeOutExpo');
        $('.MainContent').find('.accesskey').focus();
    }

    // alt+Z footer
    if (e.altKey && e.keyCode == 90) {
        $('html, body').stop(true, true).animate({ scrollTop: $('#Footer').find('.accesskey').offset().top }, 800, 'easeOutExpo');
        $('#Footer').find('.accesskey').focus();
    }
});