$(".banner_slider").slick({
    arrows: false,
    dots: true,
    fade: true,
})
$(".screenshots").slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
})

$(".details-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    asNavFor: ".img-slider",
})

$(".img-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    asNavFor: ".details-slider",
})









