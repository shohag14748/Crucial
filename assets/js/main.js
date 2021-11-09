$(document).ready(function() {

    $('.quantity button').click(function (e) {

        e.preventDefault();
        var pick_btn_class = $(e.currentTarget).prop('class');
        var value = +$('.qty_valu').val();

        if (pick_btn_class.indexOf('btn_plus') !== -1) {
            value = (value) + 1;
        } else {
            value = (value) - 1;
        }
        value = value < 0 ? 0 : value;
        $('.qty_valu').val(value);

    });

    $('.qty_valu').click(function () {
        $(this).focus().select();
    });
    $('.accordion .accordion_item .body').slideUp();
    $('.accordion .accordion_item .head').click(function () {
        $(this).toggleClass('active').siblings('.body').slideToggle();
    });

    if ($(window).width() <= 767){
        $('.footer_item ul').slideUp();
        $('.footer_item h4').click(function () {
            $(this).parents('.footer_item:not(.sup)').toggleClass('active').children('ul').slideToggle();
        });   
    }
    else{
        $('.footer_item ul').slideDown();
    }

    $(window).resize(function () {
        if ($(window).width() > 767) {
            $('.footer_item ul').slideDown();
        } else {
            $('.footer_item ul').slideUp();
        }
    })


    // Animation Attribute Data Set

    $('[data-style*="riseUp"]').wrap('<div class="animation_cropper"><div class="crop_content"></div></div>');

    $('[data-style*="animation"]').each(function() {
        $delay = $(this).attr("data-delay");
        $duration = $(this).attr("data-duration");

        if ($delay === "") {

            $delay = 0.5 + "s";
            $(this).css({ "animation-delay": $delay }).parents('.crop_content').css({ "animation-delay": $delay }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');

        } else {

            $delay = $delay + "s";
            $(this).css({ "animation-delay": $delay }).parents('.crop_content').css({ "animation-delay": $delay }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');
        }
        if ($duration === "") {

            $duration = 0.5 + "s";
            $(this).css({ "animation-duration": $duration }).parents('.crop_content').css({ "animation-duration": $duration }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');
        } else {

            $duration = $duration + "s";
            $(this).css({ "animation-duration": $duration }).parents('.crop_content').css({ "animation-duration": $duration }).children('[data-style*="animation"]').removeAttr('style');
            $(this).removeAttr('data-delay data-duration');
        }

    });

    // Animation Attrbute Data Controll End

    // Auto Animation Delay Stytem 


    $('[data-style*="animation-auto"]').each(function() {

        $delayCount = $(this).attr("data-delay-unit");

        $(this).children().each(function() {

            $selected = $(this).index();

            if ($delayCount === "") {

                $delayCount = 0.1;
                $selected = (($selected + 1) * $delayCount) + "s";
                $(this).css({ "animation-delay": $selected });
                $(this).children().css({ "animation-delay": $selected });

            } else {

                $delayCount = $delayCount;
                $selected = (($selected + 1) * $delayCount) + "s";
                $(this).css({ "animation-delay": $selected });
                $(this).children().css({ "animation-delay": $selected });
            }

        });

        $(this).removeAttr('data-delay-unit');

    });

    // Auto Animation Fix Duration Method


    $('[data-style*="fix-duration"]').each(function() {

        $fixDuration = $(this).attr("data-duration-unit");

        if ($fixDuration === "") {

            $fixDuration = 1 + "s";
            $(this).children().css({ "animation-duration": $fixDuration });
            $(this).children('.animation_cropper').removeAttr('style').children().css({ "animation-duration": $fixDuration });

        } else {

            $fixDuration = $fixDuration + "s";
            $(this).children().css({ "animation-duration": $fixDuration });
            $(this).children('.animation_cropper').removeAttr('style').children().css({ "animation-duration": $fixDuration });

        }

        $(this).removeAttr('data-duration-unit');

    });

    // Sticky Header Fix

    $('[data-style*="sticky"]').wrap('<div class="sticky_nav"></div>');

    $hader_hight = $(".header_navbar").height();

    $(window).scroll(function() {

        if ($(window).scrollTop() < 180) {
            $hader_hight = $('[data-style*="sticky"]:not(.open)').height();
            $(".sticky_nav").height($hader_hight);
        }

        if ($(window).scrollTop() > 200) {
            $('[data-style*="sticky"]').addClass("active");
            setTimeout(addOpen, 100);

            function addOpen() {

                $('[data-style*="sticky"]').addClass("open");
            }
        } else {

            $('[data-style*="sticky"]').removeClass("active");
            $('[data-style*="sticky"]').removeClass("open");
        }

    })


    $(window).resize(function() {

        $hader_hight = $('[data-style*="sticky"].open').height();
        $(".sticky_nav").height($hader_hight);

        if ($(window).scrollTop() < 180) {
            $hader_hight = $('[data-style*="sticky"]:not(.open)').height();
            $(".sticky_nav").height($hader_hight);
        }
    })

    // Sticky Nav Fixed


    // Any type of toggle popup add and remove class open

    $('body').prepend('<span class="screen" ></span>');

    $('[data-toggle*="open"]').click(function(e) {
        e.preventDefault();
        $selector_button = $(this).attr("data-target");
        $selected_content = $('[data-toggle*="content"]').attr("data-target");

        if ($selector_button == $selected_content) {
            $('[data-toggle*="content"]').toggleClass('open')
        }

        $('[data-toggle*="close"]').toggleClass('open');
        $(".screen").toggleClass("open");
        $("body").css("overflow", "hidden");

    });

    $('[data-toggle*="close"]').click(function(e) {
        e.preventDefault();
        $selector_button = $(this).attr("data-target");
        $selected_content = $('[data-toggle*="content"]').attr("data-target");

        if ($selector_button == $selected_content) {
            $('[data-toggle*="content"]').removeClass('open')
        }

        $(this).toggleClass('open');
        $(".screen").toggleClass("open");
        $("body").css("overflow", "auto");

    });

    $('[class*="screen"]').click(function(e) {
        e.preventDefault();
        $('[data-toggle*="content"]').removeClass('open')
        $('[data-toggle*="close"]').toggleClass('open');
        $(".screen").toggleClass("open");
        $("body").css("overflow", "auto");
    });

    // Any type of toggle and popup and add and remove class open



    jarallax(document.querySelectorAll(".jarallax"));

    $(".currency ul li").click(function(e) {
        e.preventDefault();
        $(".selact_item").toggleClass("open");
    });

    $(".selact_item ul li").click(function() {
        var currentele = $(this).html();
        $(".default ul li").html(currentele);
        $(".selact_item").removeClass("open");
    });

    $(".color_swatch .swatch_list li").mouseenter(function(e) {
        e.preventDefault();
        $(this)
            .parents(".product_item")
            .find(".coloured_img")
            .eq($(this).index())
            .css({ "z-index": "1", opacity: "1" })
            .siblings()
            .css("z-index", "-1");
    });
    $(".color_swatch .swatch_list li").mouseleave(function(e) {
        e.preventDefault();
        $(this).parents(".product_item").find(".coloured_img").attr("style", "");
    });

});


$(".water_slider").each(function () {
    var next = $('.slider_button.water').children(".next_arrow");
    var prev = $('.slider_button.water').children(".prev_arrow");
    $(this).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: next,
        prevArrow: prev,
        dots: false,
        arrows: true,
        focusOnSelect: true
    });
});

$(".mobile_slider").each(function () {
    var next = $('.slider_button.review').children(".next_arrow");
    var prev = $('.slider_button.review').children(".prev_arrow");
    $(this).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: next,
        prevArrow: prev,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$(".mobile_slide.product").each(function () {
    $(this).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$(".video_slider").each(function() {
    var next = $(this).siblings('.slider_button').children(".next_arrow");
    var prev = $(this).siblings('.slider_button').children(".prev_arrow");
    $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        nextArrow: next,
        prevArrow: prev,
        arrows: true,
        focusOnSelect: true,
    });
});
