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


$(function(){
    // 條件查詢
    $('.condition_searchbtn').click(function() {
        $('.condition_block2').stop().slideToggle();
    })
})

$(function() {
    /*-----------------------------------*/
    ////////////////多組Tab////////////////
    /*-----------------------------------*/
    var _window = $(window),
        ww = _window.outerWidth(),
        wh = _window.height(),
        _body = $("body"),
        wwNormal = 1400,
        wwMedium = 992,
        wwSmall = 768,
        wwxs = 576;
    var tab_headerHeight = Math.floor($('.header').outerHeight(true));
    var resizeTimer1;
    _window.resize(function() {
        clearTimeout(resizeTimer1);
        resizeTimer1 = setTimeout(function() {
            ww = _window.outerWidth();
            tabSet();
        }, 50);
    });

    function tabSet() {
        $('.tabs').each(function() {
            var _tab = $(this),
                _tabItem = _tab.find('.tabItem'),
                // _tabItemA = _tabItem.children('a'), //改button後，這行沒有
                _tabContent = _tab.find('.tabContent'),
                tabwidth = _tab.width(),
                tabItemHeight = _tabItem.outerHeight(),
                tabContentHeight = _tab.find('.active').next().innerHeight(),
                tiGap =8,
                tabItemLength = _tabItem.length, //有幾個頁籤
                tabItemRows = parseInt(tabItemLength / 3); //頁籤有幾行
            if (tabItemLength % 3 != 0) {
                tabItemRows = tabItemRows + 1;
            }; //判斷頁籤一行３個的時後有沒有整除，若不等於０，tabItemRows 就要加＋１
            var tabItemHeight = _tabItem.outerHeight(true) * tabItemRows, //頁籤的總高度
                tabItemWidth;
            _tab.find('.active').next('.tabContent').show();
            if (ww >= wwSmall) {
                _tabContent.css('top', tabItemHeight);
                _tab.height(tabContentHeight + tabItemHeight);
                tabItemWidth = parseInt((tabwidth - 3 * tiGap) / 3); //每個頁籤的寬度
                _tabItem.width(tabItemWidth).css('margin-left', tiGap);
                // _tabItem.first().css('margin-left', 0);
                // _tabItem.last().css({ 'position': 'absolute', 'top': 0, 'right': 0 }).width(tabItemWidth);
            } else {
                _tab.css('height', 'auto');
                _tabItem.width(tabwidth);
                _tabItem.css('margin-left', 0);
            }
            _tabItem.focus(tabs); //改button後，前面改_tabItem
            _tabItem.click(tabs); //改button後，前面改_tabItem
            function tabs(e) {
                var _tabItemNow = $(this), //改button後，原來$(this).parent(),改$(this)
                    tvp = _tab.offset().top,
                    tabIndex = _tabItemNow.index() / 2,
                    scollDistance = tvp + tabItemHeight * tabIndex - tab_headerHeight;
                _tabItem.removeClass('active');
                _tabItemNow.addClass('active');
                if (ww <= wwSmall) {
                    _tabItem.not('.active').next().slideUp();
                    _tabItemNow.next().slideDown();
                    $("html,body").stop(true, false).animate({ scrollTop: scollDistance });
                } else {
                    _tabItem.not('.active').next().hide();
                    _tabItemNow.next().show();
                    tabContentHeight = _tabItemNow.next().innerHeight();
                    _tab.height(tabContentHeight + tabItemHeight);
                }
                e.preventDefault();
            }
        });
    }
    $('.tabs>.tabItem:first-child>a').trigger('click');
    tabSet();
})
$(function() {
    // 我要發問
    var _ask_questions = $('.ask_questions').children('button');
    _ask_questions.click(function() {
        _ask_questions.siblings('.questions_block').stop().slideToggle();
    })
    _ask_questions.siblings('.questions_block').find('.close').click(function() {
        _ask_questions.siblings('.questions_block').stop().slideUp();
    })
    _ask_questions.keyup(function() {
        _ask_questions.siblings('.questions_block').slideDown();
    })
    $('.questions_block').find('li:last>a').focusout(function() {
        $('.questions_block').stop().slideUp();
    });
    // 收合
    $(".accordion_grounp .accordionblock").each(function() {
        var _accordionItem3 = $(this).children(".Q").children('a');
        var _word = _accordionItem3.children('.word');
        var _ullist = $(this).children('.answer').find('.answer_list');
        if (_ullist.length == 0) {
            _word.hide();
        } else {
            function accordion3(e) {
                if (_ullist.is(':visible')) {
                    _ullist.slideUp();
                    _word.text('展開').addClass('close');
                } else {
                    _ullist.slideDown();
                    _word.text('收合').removeClass('close');
                }
            }
            _accordionItem3.click(accordion3);
            // _accordionItem3.keyup(accordion3);
        }
    });

    // 點外面關閉
    $(document).on('touchend click', function(e) {
        var container = $(" .ask_questions .btn, .ask_questions .questions_block");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(' .ask_questions .questions_block').slideUp();
        }
    });
    // 跑馬燈
    // if ($('.marquee').length > 0) {
    //     $('.marquee ul').slick({
    //         dots: false,
    //         infinite: true,
    //         vertical: true,
    //         verticalSwiping: true,
    //         speed: 300,
    //         autoplaySpeed: 8000,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         pauseOnHover: true, //滑鼠移過後暫停自動撥放
    //         focusOnSelect: true,
    //     });
    // }
})
// 跑馬燈
$(function() {
    function marquee(state) {
        let marquee = document.querySelector(".marquee");
        let marqueeOuter = marquee.querySelector(".marqueeOuter");
        let marqueeBox = marquee.querySelector(".marqueeBox");
        let marqueeItem = marquee.querySelector(".marqueeItem");
        let marqueeSpeed = state.speed;
        let clone = marqueeBox.cloneNode(true);
        const marqueeContent = () => {
            let marqueeOuterWidth = marqueeOuter.offsetWidth;
            let marqueeBoxWidth = marqueeBox.offsetWidth;
            let outerWidth = marquee.offsetWidth;
            if (marqueeOuterWidth >= outerWidth) {
                marqueeOuter.appendChild(clone);
                let cloneFocus = clone.querySelectorAll("a,input,button,select");
                let marqueeBoxAll = marquee.querySelectorAll(".marqueeBox");
                let sliderMovePx = 0;
                let request;
                let marqueeState;
                let animationStartTime = 0;
                let pause = 0;
                cloneFocus.forEach((item, index) => {
                    item.setAttribute("tabindex", "-1");
                });
                cancelAnimationFrame(request);
                const animation = () => {
                    sliderMovePx++;
                    if (sliderMovePx / marqueeSpeed < marqueeBoxWidth) {
                        marqueeBoxAll.forEach((item, index) => {
                            item.style = `transform:translateX(-${
              sliderMovePx / marqueeSpeed
            }px)`;
                        });
                    } else {
                        sliderMovePx = 0;
                    }
                    request = requestAnimationFrame(animation);
                };          
                const marqueeStop = () => {
                    if (marqueeState === "stop") {
                        return;
                    }
                    if (request) {
                        cancelAnimationFrame(request);
                        // Stop point timestamp
                        pause = window.performance.now();
                        marqueeState = "stop";
                    }
                };
                const marqueeContinue = () => {
                    animationStartTime += window.performance.now() - pause;
                    request = requestAnimationFrame(animation);
                    marqueeState = "continue";
                };
                animation();
                marquee.addEventListener("mouseenter", marqueeStop);
                marquee.addEventListener("mouseleave", () => {
                    cancelAnimationFrame(request);
                    marqueeContinue();
                });
            }
        };
        window.addEventListener("load", marqueeContent);
        window.addEventListener("resize", marqueeContent);
    }
    marquee({
        speed: 1 //越低越快
    });
})