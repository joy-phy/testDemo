import $ from './library/jquery.js';
import cookie from './library/cookie.js';
import './jquery.lazyload.js';

$(function () {


    if (cookie.get('isLogined') === 'true') {
        console.log(cookie.get('username'))
        $('header>div>ul:eq(1)>li:eq(0) a').html(cookie.get('username'));
        $('header>div>ul:eq(1)>li:eq(1) a').html('注销');


        $('header>div>ul:eq(1)>li:eq(1) a').on('click', function () {
            if (confirm('真的要走了吗')) {
                cookie.remove('isLogined');
                cookie.remove('username');
                location.reload();
            }
        })
    }



    let count = 3;
    let timers;
    let timer

    let int = () => {

        $('.banner.container .wrapper').eq(count).animate({
            opacity: 1,
            // 'z-index':'66'

        }, {
            duration: 1000,
            queue: false
        });

        $('.banner.container .wrapper').eq(count).siblings('.wrapper').css('opacity', '0');
        count++;
        if (count == 4) {
            count = 0
        }
        // $('.banner.container .wrapper').eq(count).animate({
        //     opacity: 0,


        // }, 1000);
        $('.remotebanner').children('span').eq(count).addClass('active').siblings().removeClass('active')
        return int;
    }
    timer = setInterval(int(), 4600);

    $('.banner.container').on('mouseleave', function () {
        timers = setTimeout(() => {
            timer = setInterval(int(), 4600);
        }, 2000);

    })
    $('.remotebanner').on('click', function (ev) {

        clearInterval(timer);
        clearTimeout(timers);
        $(ev.target).addClass('active').siblings().removeClass('active');

        if ($(ev.target).index() == 0) {
            count = 5
        }
        count = $(ev.target).index() - 1;
        timers = setTimeout(() => {
            timer = setInterval(int(), 4600);
        }, 2000);
        $('.banner.container .wrapper').eq(count).css('opacity', 1).siblings('.wrapper').css('opacity', '0');

        //   $('.remotebanner').children('a').eq(count).css('opacity',1).siblings().css('opacity',0)


    })






    $('footer .linkbar > ul:last-of-type a:last-of-type').mouseenter(function () {
        $('footer .linkbar > ul:last-of-type .binacode').css('display', 'block')
    }).mouseleave(function () {
        $('footer .linkbar > ul:last-of-type .binacode').css('display', 'none')

    })


    $('#banner.container').on('mouseenter', function () {
        clearTimeout(timers)
        clearInterval(timer)
    })
    let translax = 0;
    $('main>section:eq(0)>.row.one p span').on('click', function (ev) {

        if ($(ev.target).index()) {
            $('main section > .row.two > .second ul.nav div.nav').css({
                'transform': `translateX(${translax -= 992}px)`

            })
            if (translax <= -3000) {
                translax = 992;
            }
        } else {
            if (translax >= 0) {
                translax = -4000
            }

            $('main section > .row.two > .second ul.nav div.nav').css({
                'transform': `translateX(${translax += 992}px)`

            })
        }
    })

    $('main section:eq(2) .row.one p span').on('mouseenter', function (ev) {
        $(ev.target).addClass('active').siblings().removeClass('active')
    })

    let d = new Date();
    let e = new Date();
    d.setHours(e.getHours() + 2)
    d.setMinutes(0);
    d.setSeconds(0);
    let h = d.getHours();
    // console.log(new Date(d - e))
    setInterval(() => {
        let f = new Date();
        if ($('main section:eq(0)> .row.two > .first p:eq(0)').html() < 10) {
            $('main section:eq(0)> .row.two > .first p:eq(0)').html(`0${h}:00 场`)
        } else {

            $('main section:eq(0)> .row.two > .first p:eq(0)').html(`${h}:00 场`)
        }
        if ($('main section:eq(0)> .row.two > .first p:eq(3) span:eq(0)').html() < 10) {
            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(0)').html(`0${d.getHours() - f.getHours() - 1}`)

        } else {

            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(0)').html(`${d.getHours() - f.getHours() - 1}`)
        }
        if ($('main section:eq(0)> .row.two > .first p:eq(3) span:eq(1)').html() < 10) {
            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(1)').html(`0${59-f.getMinutes() }`)


        } else {

            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(1)').html(`${59-f.getMinutes() }`)

        }
        if ($('main section:eq(0)> .row.two > .first p:eq(3) span:eq(2)').html() < 10) {
            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(2)').html(`0${59 - f.getSeconds()}`)

        } else {
            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(2)').html(`${59 - f.getSeconds()}`)

        }






    }, 500);

    $('.swiper-button-prev').on("click", function () {

        clearTimeout(timers)
        clearInterval(timer)
        count -= 2;

        timer = setInterval(int(), 4600);
        if (count < 0) {
            count = 3
        }

    })
    $('.swiper-button-next').on("click", function () {

        clearTimeout(timers)
        clearInterval(timer)

        timer = setInterval(int(), 4600);


    })
    $('.fixednav').on('mouseenter', 'li', function () {
        $('.fixednav-right').css({
            display: 'block'
        })
    }).on('mouseleave', 'li', function () {
        $('.fixednav-right').css({
            display: 'none'
        })

    })
    $('.fixednav-right').on('mouseenter', 'ul', function () {
        $(this.parentNode).css({
            display: 'block'
        })
    }).on('mouseleave', 'ul', function () {
        $(this.parentNode).css({
            display: 'none'
        })



        document.onmousewheel = function () {
            if (document.documentElement.scrollTop >= 750) {
                $('.removethis').remove();
                $(`<div class="removethis" style="margin-top:10px;"><a href="#">
            <div>
                <span style="transform:rotate(-90deg)" class="iconfont icon-you
"></span>
                <i>回到顶部</i>
            </div>
        </a></div>`).appendTo($('aside'))
            } else {
                $('.removethis').remove();

            }

        }
    })
    $('nav .navbar ul.nav').on('mouseenter', 'li:lt(7)', function () {
        $('nav .navbar ul.nav .navmenu').css({
            height: '230px',
            transition: 'all .3s',
            'box-shadow': ' 0 1px 3px 0 lightgray',
            'border-top': ' 1px solid lightgray'
        })
    }).on('mouseleave', 'li:lt(7)', function () {
        $('nav .navbar ul.nav .navmenu').css({
            height: '0px',
            transition: 'all .3s',

        })
    })
    $('nav .navbar ul.nav').on('mouseenter', '.navmenu', function () {
        $('nav .navbar ul.nav .navmenu').css({
            height: '230px',
            transition: 'all .3s',
            'box-shadow': ' 0 1px 3px 0 lightgray',
            'border-top': ' 1px solid lightgray'
        })
    }).on('mouseleave', '.navmenu', function () {
        $('nav .navbar ul.nav .navmenu').css({
            height: '0px',
            transition: 'all .3s',

        })
    })
    $.ajax({
        type: "get",
        url: "../../interface/getData.php",
        dataType: "json",

    }).then(function (data) {
        data.forEach((el, i) => {

            let picture = JSON.parse(el.picture);
            $('main>section:eq(1) .clearfix .seco .nav li').eq(i).children('a').children('div').html(`<img data-original="../${picture[0].src}" alt="">`);
            $('main>section:eq(1) .clearfix .seco .nav li').eq(i).children('a').attr('href', `./detail.html?item=${el.id}`)

            $('main>section:eq(1) .clearfix .seco .nav li').eq(i).children('a').children('h3').html(el.title);
            $('main>section:eq(1) .clearfix .seco .nav li').eq(i).children('a').children('p').eq(0).html(el.detail);
            $('main>section:eq(1) .clearfix .seco .nav li').eq(i).children('a').children('p').eq(1).children('span').html(`${el.price}元起`);
            $('main>section:eq(1) .clearfix .seco .nav li').eq(i).children('a').children('p').eq(1).children('del').html(`${el.price}元`);
        })
        $("img").lazyload({
            effect: "fadeIn",
            threshold: 180
        });
    }).catch(function (xhr) {
        console.log(xhr.status)
    });




})