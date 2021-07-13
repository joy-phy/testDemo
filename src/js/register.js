$(function () {
    let timer;
    $('.register > div:last-of-type>a:last-of-type').on('mouseenter', function () {
        $(this).addClass('active');
        $('.register > div:last-of-type>ul').css({
            height: 'auto',
        })
    }).on('mouseleave', function () {
        timer = setTimeout(() => {
            $(this).removeClass('active');
            $('.register > div:last-of-type>ul').css({
                height: '0',
            })
        }, 1000);


    })
    $('.register > div:last-of-type>ul').on('mouseenter', function () {
        clearTimeout(timer);
    }).on('mouseleave', function () {
        timer = setTimeout(() => {
            $('.register > div:last-of-type>a:last-of-type').removeClass('active');
            $('.register > div:last-of-type>ul').css({
                height: '0',
            })
        }, 1000);
    })

    $('.mi-account > .container > .box> p:first-of-type').on('click', function (ev) {
        $(ev.target).addClass('active').siblings().removeClass('active')

        if ($(ev.target).index() == 1) {
            $('.mi-account > .container > .box> p:first-of-type i').css({
                transform: 'translateX(0px)',
                transition: 'all .3s'
            })
            console.log($('.controlbar'))
            $('.controlbar').css({
                transform: 'translateX(0)',
                transition: 'all .3s'

            })
        } else {
            $('.mi-account > .container > .box> p:first-of-type i').css({
                transform: 'translateX(68px)',
                transition: 'all .3s'
            })
            $('.controlbar').css({
                transform: 'translateX(-414px)',
                transition: 'all .3s'

            })

        }
    })

})