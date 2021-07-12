$(function () {
    let o1 = {
        'transform': 'rotate(180deg)',
        'border-top-color': 'darkorange',
        transition: 'all .3s'
    };
    let o2 = {
        'transform': 'rotate(0deg)',
        'border-top-color': '#838383',
        transition: 'all .3s'
    }
    $('.register > div:last-of-type a:last-of-type').on('mouseenter', function () {
        $('.register > div:last-of-type a:last-of-type span').css(o1)
    }).on('mouseleave', function () {
        $('.register > div:last-of-type a:last-of-type span').css(o2)
    })

    $('.mi-account > .container > .box > .tab-list > p:first-of-type').on('click', function (ev) {
        $(ev.target).addClass('active').siblings().removeClass('active')

        if ($(ev.target).index() == 1) {
            $('.mi-account > .container > .box > .tab-list > p:first-of-type i').css({
                transform:'translateX(0px)',
                transition:'all .3s'
            })
            
        }else{
             $('.mi-account > .container > .box > .tab-list > p:first-of-type i').css({
                transform:'translateX(68px)',
                transition:'all .3s'
            })
        }
    })

})