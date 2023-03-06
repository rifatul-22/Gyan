$(function(){
    // banner slider activation
    $('.banner_slider').slick({
        autoplay: true,
        arrows: true,
        prevArrow:$('.banner_slider_icon_btn.prev'),
        nextArrow:$('.banner_slider_icon_btn.next')
    });
    // about img slider activation
    $('.about_img_slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'about_img_slider_dots'
    });
});