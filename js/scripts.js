$(document).ready(function() {

    $('.phone').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    $('.scroll_to_form').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.footer').offset().top});
    });

    var win = $(window);

    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $('.similarities, .advantages__item').each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).addClass($(i).attr('class') + '--animated') : true;

        });

    }

    win.scroll(function(){
        scrFunc();
    });

    $('.form__button').click(function (e) {
        e.preventDefault();

        var fio = $('.form input[name=fio]');
        var email = $('.form input[name=email]');
        var phone = $('.form input[name=phone]');

        if (fio.val() != '' && email.val() != '' && phone.val() != '') {
            if (!validEmail(email.val())) {
                email.addClass('form__input--error');
            }
            else {
                email.removeClass('form__input--error');
            }
            if (!validPhone(phone.val())) {
                phone.addClass('form__input--error');
            }
            else {
                phone.removeClass('form__input--error');
            }
        }
        else {
            $('.form input').each(function () {
                if ($(this).val() == '') $(this).addClass('form__input--error');
            });
        }
    });

    $('.form input[name=fio]').keyup(function (e) {
        if ($(this).val() != '') {
            $(this).removeClass('form__input--error');
        }
        else {
            $(this).addClass('form__input--error');
        }
    });

    $('.form input[name=email]').keyup(function (e) {
        if (validEmail($(this).val())) {
            $(this).removeClass('form__input--error');
        }
        else {
            $(this).addClass('form__input--error');
        }
    });

    $('.form input[name=phone]').keyup(function (e) {
        if (validPhone($(this).val())) {
            $(this).removeClass('form__input--error');
        }
        else {
            $(this).addClass('form__input--error');
        }
    });

});

function validEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}

function validPhone(phone) {
    var reg = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
    return reg.test(phone);
}