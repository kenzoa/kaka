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
    $.navlevel2("li.dropdown", 400);
}); 

