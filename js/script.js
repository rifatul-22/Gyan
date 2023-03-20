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
    // Courses Box slider activation
    $('.course_box_slider').slick({
         autoplay: false,
         arrows: true,
         prevArrow:$('.course_box_slider_icon_btn.prev'),
         nextArrow:$('.course_box_slider_icon_btn.next')
    });
    // testimonial_slider activation
    $('.testimonial_slider').slick({
         autoplay: true,
         arrows: true,
         prevArrow:$('.testimonial_slider_icon_btn.prev'),
         nextArrow:$('.testimonial_slider_icon_btn.next')
    });
    // Counter Up activation
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Back to Top activation 
    $(window).on('scroll', function(){
        var navScroll = $(window).scrollTop();
  
        //BackToTop
        if(navScroll > 500){
            $('#backToTop').show(300);
        }else{
            $('#backToTop').hide(300);
        }
    })
    $('#backToTop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        })
    })
});