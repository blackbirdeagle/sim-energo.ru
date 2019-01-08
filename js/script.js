/**
 * Copyright by Alexander Afanasyev
 * E-mail: blackbirdeagle@mail.ru
 * Skype: al_sidorenko1
 * */

function isEmailValid(emailAdress) {
    var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
    return EMAIL_REGEXP.test(emailAdress)
}

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$(document).ready(function() {
    var owl = $("#slider__reviews");
    owl.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 2
            },
            991: {
                items: 2
            }
        },
        margin: 98,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['', ''],
    });
});

$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 40;
        $('.popup.'+target).css('top', top).css('left', left);
    })


    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){

        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });
    }
}

addEventListener("keydown", keyExit);

$('.send__order').click(function () {
   var name = $('.usagr-pp input[name = "name"]').val();
   var phone = $('.usagr-pp input[name = "phone"]').val();
   var email = $('.usagr-pp input[name = "email"]').val();
   var flag = 0;

    $('.usagr-pp input').css({"border":"1px solid #e9e9ea"});

   if(name == ""){
       $('.usagr-pp input[name = "name"]').css({"border":"1px solid red"});
       flag = 1;
   }

   if(phone == ""){
       $('.usagr-pp input[name = "phone"]').css({"border":"1px solid red"});
       flag = 1;
   }

   if(email != "" && !isEmailValid(email)){
       $('.usagr-pp input[name = "phone"]').css({"border":"1px solid red"});
       flag = 1;
   }

   if(flag == 0){
       $.post('/send.php', {NAME: name, PHONE: phone, EMAIL: email, EVENT: 'ORDER'}, function(data){
           alert('Ваша заявка принята! В ближайшее время мы свяжемся с Вами.');
           $('.usagr-pp input[name = "name"]').val("");
           $('.usagr-pp input[name = "phone"]').val("");
           $('.usagr-pp input[name = "email"]').val("");
           var popup = $('.popup:visible');
           popup.fadeOut(200, function(){
               $('.overlay').fadeOut(200);
           });
       });
   }
});

$('.send__consult').click(function(){
    var name = $('.consult-pp input[name = "name"]').val();
    var phone = $('.consult-pp input[name = "phone"]').val();
    var email = $('.consult-pp input[name = "email"]').val();
    var flag = 0;

    $('.consult-pp input').css({"border":"1px solid #e9e9ea"});

    if(name == ""){
        $('.consult-pp input[name = "name"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(phone == ""){
        $('.consult-pp input[name = "phone"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(email != "" && !isEmailValid(email)){
        $('.consult-pp input[name = "phone"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(flag == 0){
        $.post('/send.php', {NAME: name, PHONE: phone, EMAIL: email, EVENT: 'CONSULT'}, function(data){
            alert('Ваша заявка принята! В ближайшее время мы свяжемся с Вами.');
            $('.consult-pp input[name = "name"]').val("");
            $('.consult-pp input[name = "phone"]').val("");
            $('.consult-pp input[name = "email"]').val("");
            var popup = $('.popup:visible');
            popup.fadeOut(200, function(){
                $('.overlay').fadeOut(200);
            });
        });
    }
});

$('.get__button').click(function(){
    var name = $('.bottom__form input[name="name"]').val();
    var phone = $('.bottom__form input[name="phone"]').val();
    var email = $('.bottom__form input[name="email"]').val();
    var comment = $('.bottom__form textarea').val();
    var flag = 0;

    $('.bottom__form input').css({"border":"1px solid #bbbbbb"});

    if(name == ""){
        $('.bottom__form input[name="name"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(phone == ""){
        $('.bottom__form input[name="phone"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(email != "" && !isEmailValid(email)){
        $('.bottom__form input[name="email"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(flag == 0){
        $.post('/send.php', {NAME: name, PHONE: phone, EMAIL: email, COMMENT: comment, EVENT: 'OFFER'}, function(data){
            alert('Ваша заявка принята! В ближайшее время мы свяжемся с Вами.');
            $('.bottom__form input[name="name"]').val("");
            $('.bottom__form input[name="phone"]').val("");
            $('.bottom__form input[name="email"]').val("");
            $('.bottom__form textarea').val("");
        });
    }
});