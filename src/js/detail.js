// import $ from "./library/jquery.js";


// console.log($);
$(function () {




            let count = 0;
            let timers;
            let timer

            let int = () => {

                $('.wrapper').eq(count).animate({
                    opacity: 1,
                    // 'z-index':'66'

                }, {
                    duration: 1000,
                    queue: false
                });

                $('.wrapper').eq(count).siblings('.wrapper').css('opacity', '0');
                count++;
                if (count == 6) {
                    count = 0
                }
                // $('.banner.container .wrapper').eq(count).animate({
                //     opacity: 0,


                // }, 1000);
                $('.swiper-control').children('span').eq(count).addClass('active').siblings().removeClass('active')
                return int;
            }
            timer = setInterval(int(), 8000);

            $('.image-left.col-6.clearfix').on('mouseleave', function () {
                timers = setTimeout(() => {
                    timer = setInterval(int(), 8000);
                }, 2000);

            })
            $('.swiper-control').on('click', function (ev) {

                clearInterval(timer);
                clearTimeout(timers);
                $(ev.target).addClass('active').siblings().removeClass('active');

                if ($(ev.target).index() == 0) {
                    count = 7
                }
                count = $(ev.target).index() - 1;
                timers = setTimeout(() => {
                    timer = setInterval(int(), 8000);
                }, 2000);
                $('.wrapper').eq(count).css('opacity', 1).siblings('.wrapper').css('opacity', '0');

                //   $('.remotebanner').children('a').eq(count).css('opacity',1).siblings().css('opacity',0)


            })






            $('footer .linkbar > ul:last-of-type a:last-of-type').on('mouseenter',function () {
                $('footer .linkbar > ul:last-of-type .binacode').css('display', 'block')
            }).on('mouseleave',function () {
                $('footer .linkbar > ul:last-of-type .binacode').css('display', 'none')

            })


            $('.image-left.col-6.clearfix').on('mouseenter', function () {
                clearTimeout(timers)
                clearInterval(timer)
            })
            let translax = 0;
            $('main>section:eq(0)>.row.one p span').on('click', function (ev) {
                console.log($(ev.target).index());

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

                timer = setInterval(int(), 8000);
                if (count < 0) {
                    count = 5
                }

                console.log(count);
            })
            $('.swiper-button-next').on("click", function () {

                clearTimeout(timers)
                clearInterval(timer)

                timer = setInterval(int(), 8000);


                console.log(count);
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
            $('.fixednav-right').on('mouseenter', function () {
                $('#banner.container').css({
                    display: 'block'
                })
            }).on('mouseleave', function () {
                $('#banner.container').css({
                    display: 'none'
                })

            })
            $('.fixednav-right').on('mouseenter', function () {
                $(this).css({
                    display: 'block'
                })
            }).on('mouseleave', function () {
                $(this).css({
                    display: 'none'
                })

            })
            $('.togglenav').on('mouseenter', function () {
                $('#banner.container').css({
                    display: 'block'
                })
            }).on('mouseleave', function () {
                $('#banner.container').css({
                    display: 'none'
                })
            });
            $('.fixednav').on('mouseenter', function () {
                $('#banner.container').css({
                    display: 'block'
                })
            }).on('mouseleave', function () {
                $('#banner.container').css({
                    display: 'none'
                })
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

            $('nav .navbar ul.nav').on('mouseenter', ' li:gt(0):lt(7)',function () {
                $('nav .navbar ul.nav .navmenu').css({
                    height: '230px',
                    transition: 'all .3s',
                    'box-shadow': ' 0 1px 3px 0 lightgray',
                    'border-top': ' 1px solid lightgray'
                })
            }).on('mouseleave', ' li:gt(0):lt(7)',function () {
                $('nav .navbar ul.nav .navmenu').css({
                    height: '0px',
                    transition: 'all .3s',

                })
            })
            $('nav .navbar ul.nav').on('mouseenter','.navmenu',function () {
                $('nav .navbar ul.nav .navmenu').css({
                    height: '230px',
                    transition: 'all .3s',
                    'box-shadow': ' 0 1px 3px 0 lightgray',
                    'border-top': ' 1px solid lightgray'
                })
            }).on('mouseleave', '.navmenu',function () {
                $('nav .navbar ul.nav .navmenu').css({
                    height: '0px',
                    transition: 'all .3s',

                })
            })
            
            $('.text-bottom div:eq(1) button').on('click',function(){
                $(this).addClass('active').siblings().removeClass('active')
            })
            $('.text-bottom div:eq(2) button').on('click',function(){
                $(this).addClass('active').siblings().removeClass('active')
            })
            })
