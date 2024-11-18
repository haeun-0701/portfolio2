


$(".open-modal").click(function () {
    $(".modal").show();
    //$(".modal").slideDown();
    //$(".modal").fadeIn();
})
$(".close-modal").click(function () {
    $(".modal").hide();
    //$(.modal).slideUp();
    //$(".modal").fadeOut();
})



$(".btn-gal").click(function () {
    $(".gal").show();
    $(".notice").hide();

    $(".btn-gal").css("backgroundColor", "#5f1c25");
    $(".btn-notice").css("backgroundColor", "#cccccc");
})
$(".btn-notice").click(function () {
    $(".notice").show();
    $(".gal").hide();

    $(".btn-notice").css("backgroundColor", "#5f1c25");
    $(".btn-gal").css("backgroundColor", "#cccccc");
})



$(".gnb>li").mouseover(function () {
    //$(".sub").show();
    $(this).children(".sub").stop().slideDown();
})
$(".gnb>li").mouseleave(function () {
    $(".sub").stop().slideUp();
})