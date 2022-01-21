/*-----------------------------------*/
///////////////Slick輪播///////////////
/*-----------------------------------*/
$(document).ready(function() {
    //Single_slider 單張輪播
    $('.Single_slider').slick({
        dots: true, //要不要顯示圓點
        dotsClass: 'slick-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //Multiple Items 多張輪播
    $('.Multiple-items').slick({
        dots: true,
        dotsClass: 'slick-number',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,  //一次顯示幾張
        slidesToScroll: 3  //一次輪播幾張
    });
    //Variable Items 寬度不一的多張輪播
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.uneven').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    //Responsive Display 縮小成手機板時會變成單張輪播
    $('.Responsive_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    //Vertical_slider 垂直自動輪播
    $('.Vertical_slider').slick({
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,

        speed: 1000,
        // centerMode: true,
        focusOnSelect: true,
//      responsive: [{
//          breakpoint: 990,
//          settings: {
//              slidesToShow: 2,
//              slidesToScroll: 2
//          }
//      }, {
//          breakpoint: 600,
//          settings: {
//              slidesToShow: 2,
//              slidesToScroll: 2,
//              vertical: false,
//              verticalSwiping: false

//          }
//      }, {
//          breakpoint: 480,
//          settings: {
//              slidesToShow: 1,
//              slidesToScroll: 1,
//              vertical: false,
//              verticalSwiping: false
//          }
//      }]
    });
    //vertical-syncing 垂直點小圖換大圖輪播
    $('.vertical-syncing').slick({
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1000,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow:3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                vertical: false,
                verticalSwiping:false

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping:false
            }
        }]
    });
    //slider-for  slider-nav 水平點小圖換大圖輪播
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.Slider-nav'
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.Slider-for',        
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div'
    });
    //remove active class from all thumbnail slides
    $('.Slider-nav .slick-slide').removeClass('slick-active');

    //set active class to first thumbnail slides
    $('.Slider-nav .slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.Slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.Slider-nav .slick-slide').removeClass('slick-active');
        $('.Slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
     });
    //使用lazyLoad
    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    });
    //單張由右至左
    $('.single-item-rtl').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    });
    //多張由右至左
    $('.multiple-items-rtl').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3,
        rtl: true
    });

});
/*-----------------------------------*/
///////////////fatfooter///////////////
/*-----------------------------------*/  
$(document).ready(function() {
    $( ".FatFooterBtn" ).click(function(){
        $('#FatFooter>nav>ul>li>ul').slideToggle(function(){
            if($(this).is(':visible')){ document.getElementById("FatFooterBtn");}
            else{document.getElementById("FatFooterBtn");}
        });
        $(this).toggleClass('close');
    });
});
/*-----------------------------------*/
///////送select選單內容至select框內///////
/*-----------------------------------*/  
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});
/*-----------------------------------*/
///////////////fatfooter///////////////
/*-----------------------------------*/  
$(function(){
    
    $(".scrollup").click(function(){
        $("html,body").animate({scrollTop:0},500,"easeOutQuint");
        return false;

    });

});
$(function(){
    $(window).load(function(){
        $(window).bind('scroll resize', function(){
            var $this = $(this);
            var $this_Top=$this.scrollTop();
            //當高度小於130時，關閉區塊
            if($this_Top < 130){
                $(".scrollup").fadeOut();
                }
            //當高度小於130時，顯示區塊
            if($this_Top > 130){
                $(".scrollup").fadeIn();
            }
        }).scroll();
    });
});


/*-----------------------------------*/
///////////////megamenu////////////////
/*-----------------------------------*/  
//防止menu跳掉
$(document).ready(function() {
    window.prettyPrint && prettyPrint()
    $(document).on('click', '.megamenu .dropdown-menu', function(e) {
        e.stopPropagation()
    })
})
/*-----------------------------------*/
///////////fullcalendar自訂/////////////
/*-----------------------------------*/  
$(document).ready(function() {
    function renderCalendar() {
        $('#calendar').fullCalendar({
            buttonText: {
                today: '今天',
                month: '月',
                day: '日'
            },
            weekMode: "variable",
            columnFormat: {
                year: 'dddd',
                month: 'dddd',
                day: 'dddd M-d'
            },
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayNames: ["日", "一", "二", "三", "四", "五", "六"],
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaDay'
            },                  
            defaultDate: '2015-02-12',
        buttonIcons: false, // show the prev/next text
        eventClick: function (date, allDay, jsEvent, view) {
        },
        events: function (start, end, callback) {
        }
    });
    }
    renderCalendar();
});
/*-----------------------------------*/
////////////////tab頁籤////////////////
/*-----------------------------------*/  
$(document).ready(function() {
    // 預設顯示第一個 Tab
    var _showTab = 0;
    var $defaultDiv = $('div.tabs').eq(_showTab).addClass('active');
    $($defaultDiv.find('a').attr('href')).siblings('div.tab_container').hide();

    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $('div.tabs').click(function () {
        // 找出 li 中的超連結 href(#id)
        var $this = $(this),
        _clickTab = $this.find('a').attr('href');
        // 把目前點擊到的 li 頁籤加上 .active
        // 並把兄弟元素中有 .active 的都移除 class
        $this.addClass('active').siblings('.active').removeClass('active');
        // 淡入相對應的內容並隱藏兄弟元素
        $(_clickTab).stop(false, true).fadeIn().siblings('div.tab_container').hide();

        return false;
    })
    $("#font_l").trigger('click');
    function Focus(id) {
        $("#" + id).trigger('click');
        document.getElementById(id).focus();
    }
});