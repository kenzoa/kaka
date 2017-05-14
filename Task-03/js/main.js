$(document).ready(function() {
    jQuery.navlevel2 = function(level1, dytime) {
        $(level1).mouseenter(function() {
            varthis = $(this);
            delytime = setTimeout(function() { varthis.find('.dropdown-menu').slideDown(); }, dytime);
        });
        $(level1).mouseleave(function() {
            clearTimeout(delytime);
            $(this).find('.dropdown-menu').slideUp();

        });
    };
    $.navlevel2("li.dropdown", 300);
}); 

$(function() {

    $(".font_inner li:eq(0)").clone(true).appendTo($(".font_inner")); //克隆第一个放到最后(实现无缝滚动)
    var liHeight = $(".swiper_wrap").height(); 
    var totalHeight = ($(".font_inner li").length * $(".font_inner li").eq(0).height()) - liHeight;
    $(".font_inner").height(liHeight);
    var index = 0;
    var autoTimer = 0; 
    var clickEndFlag = true; 

    function tab() {
        $(".font_inner").stop().animate({
            top: -index * liHeight
        }, 400, function() {
            clickEndFlag = true; 
            if (index == $(".font_inner li").length - 1) {
                $(".font_inner").css({
                    top: 0
                });
                index = 0;
            }
        })
    }

    function next() {
        index++;
        if (index > $(".font_inner li").length - 1) { 
            index = 0;
        }
        tab();
    }

    function prev() {
        index--;
        if (index < 0) {
            index = $(".font_inner li").size() - 2; //因为index的0 == 第一个Li，减二是因为一开始就克隆了一个LI在尾部也就是多出了一个Li，减二也就是_index = Li的长度减二
            $(".font_inner").css("top", -($(".font_inner li").size() - 1) * liHeight); //当_index为-1时执行这条，也就是走到li的最后一个
        }
        tab();
    }
  
    autoTimer = setInterval(next, 5000);
    $(".font_inner a").hover(function() {
            clearInterval(autoTimer);
        }, function() {
            autoTimer = setInterval(next, 5000);
        })
    
})