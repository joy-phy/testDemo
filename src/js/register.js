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

    $('.mi-account > .container > .box> p:first-of-type').on('click', 'a', function (ev) {
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
    $('.tab-list').each((index, el) => {

        $(el).children('div:lt(3)').on('click', function (ev) {
            console.log(ev.target.nodeName)


            if (ev.target.nodeName.toLowerCase() == 'label') {
                $(ev.target).css({
                    height: '20px',
                    transition: 'all .2s',
                    'font-size': '12px',
                    color:'rgba(0, 0, 0, 0.4)',
                    padding: `5px 0 0 0`,
                    'margin': `0 0 0 20px`

                })
                if ($(this).index() / 2 == 1) {
                    $(`<input type="password" id="d${$(this).index()/2}" style="font-size:17px; display:block;margin-left:20px ;outline:none;border:none;">`).appendTo($(ev.target).parent())
                } else {

                    $(`<input type="email" id="d${$(this).index()/2}" style="font-size:17px; display:block;margin-left:20px ;outline:none;border:none;">`).appendTo($(ev.target).parent())
                }
                $(ev.target).parent().css({
                    border: '1px solid orangered ',
                    backgroundColor: 'white',
                    boxShadow: `0 0 2px 0 darkorange`
                })
            }

            $('.tab-list>div:lt(3)').each((index, el) => {
                $(el).children('input').on('blur', function () {
                    if (!$(this).val()) {
                        $(ev.target).parent().css({
                            border: 'none',
                            backgroundColor: '#FCF2F3',
                            color: 'red',
                            transition:'all .3s'

                        })
                        $(ev.target).parent().next('span').css({
                            display:'block'
                        })
                        $(ev.target).css({
                            height: '100%',
                            width:"100%",
                            color:'orangered',
                            transition: 'all .2s',
                            'font-size': '17px',
                            padding: `20px`,
                            'margin': `0`,
                            transition:'all .3s'


                        })
                        $(this).remove()

                    }else{
                        $(ev.target).parent().css({
                            border: 'none',
                            boxShadow:'none',
                            backgroundColor: '#F9F9F9',
                            transition:'all .3s'
                        })
                        $(ev.target).parent().next('span').css({
                            display:'none'
                        })
                        $(ev.target).css({
                            backgroundColor:'#F9F9F9',
                            transition:'all .3s'

                        })
                    }
                })
            })

        })


    })

})