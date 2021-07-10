// import $ from "./library/jquery.js";


// console.log($);
$(function () {
        $(`<div class="container navbar">
            <ul class="nav">
                <li><a href="#">小米商城</a></li><span>|</span>
                <li><a href="#">MIUI</a></li><span>|</span>
                <li><a href="#">loT</a></li><span>|</span>
                <li><a href="#">云服务</a></li><span>|</span>
                <li><a href="#">天行数科</a></li><span>|</span>
                <li><a href="#">优品</a></li><span>|</span>
                <li><a href="#">小爱开放平台</a></li><span>|</span>
                <li><a href="#">企业团购</a></li><span>|</span>
                <li><a href="#">资质证照</a></li><span>|</span>
                <li><a href="#">下载app</a></li><span>|</span>
                <li><a href="#">协议规则</a></li><span>|</span>
                <li><a href="#">智能生活</a></li><span>|</span>
                <li><a href="#">Select Location</a></li>
            </ul>
            <ul class="nav">
                <li><a href="#">登录</a>

                </li><span>|</span>
                <li>
                    <a href="#">注册</a>
                </li><span>|</span>
                <li>
                    <a href="#">消息通知</a>
                </li>
                <li class="lastone"><a href="#"><span class="iconfont icon-gouwuche"></span>购物车<span>(0)</span></a>
                <div>购物车中还没有商品，赶紧选购吧！</div>
                </li>
            </ul>


        </div>`).appendTo('header');




        $(` <div class="container navbar">
            <div><a href="#">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaomixinLogo"></use>
                    </svg>
                </a></div>

            <ul class="nav">
                <li><a href="#">小米手机</a></li>
                <li><a href="#">Redmi红米</a></li>
                <li><a href="#">电视</a></li>
                <li><a href="#">笔记本</a></li>
                <li><a href="#">家电</a></li>
                <li><a href="#">路由器</a></li>
                <li><a href="#">智能硬件</a></li>
                <li><a href="#">服务</a></li>
                <li><a href="#">社区</a></li>
                <div class="navmenu">
                    <ul class="container nav">
                        <li><a href="#"><img src="../images/产品兔兔1.webp">
                                <p>k40超级游戏手机</p>
                                <span>不要钱</span>
                            </a></li>
                        <li><a href="#"><img src="../images/产品兔兔1.webp">
                                <p>k40超级游戏手机</p>
                                <span>不要钱</span>
                            </a></li>
                        <li><a href="#"><img src="../images/产品兔兔1.webp">
                                <p>k40超级游戏手机</p>
                                <span>不要钱</span>
                            </a></li>
                        <li><a href="#"><img src="../images/产品兔兔1.webp">
                                <p>k40超级游戏手机</p>
                                <span>不要钱</span>
                            </a></li>
                        <li><a href="#"><img src="../images/产品兔兔1.webp">
                                <p>k40超级游戏手机</p>
                                <span>不要钱</span>
                            </a></li>

                    </ul>
                </div>
            </ul>


            <div class="nav navbar-right">
                <input type="search" name="" id="">
                <input type="submit" name="" id="" value='🔍'>
            </div>
        </div>`).appendTo($('nav'))
        $(` <a href="#">
            <div>
                <span class="iconfont icon-shoujichongzhi"></span>
                <i>手机app</i>
            </div>
        </a>
        <a href="#">
            <div>
                <span class="iconfont icon-fangdajing"></span>
                <i>个人中心</i>
            </div>
        </a>
        <a href="#">
            <div>
                <span class="iconfont icon-f"></span>
                <i>售后服务</i>
            </div>
        </a>
        <a href="#">
            <div>
                <span class="iconfont icon-jianzhu"></span>
                <i>人工服务</i>
            </div>
        </a>
        <a href="#">
            <div>
                <span class="iconfont icon-gouwuche
"></span>
                <i>购物车</i>
            </div>
        </a>
`).appendTo($('aside'));
$(`<section class="container">

            <div class="row one">
                <h2>小米秒杀</h2>
                <p>
                    
                        <span  class="iconfont icon-left">

                        </span>
                    
                    
                        <span class="iconfont icon-you">

                        </span>
                    
                </p>
            </div>
            <div class="row two">
                <div class="first col-2">
                    <p>20:00 场</p>
                    <p><img src="../images/闪电.jpg" alt=""></p>
                    <p>距离结束还有</p>
                    <p><span></span>:<span></span>:<span></span></p>

                </div>
                <div class="second">
                    <ul class="nav clearfix">
                        <div class="nav">
                            

                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                            <li><a href="#">
                                    <div>
                                        <div><img src="../images/产品1.webp" alt=""></div>
                                        <h3>拉杆箱非常不辍</h3>
                                        <p>超长续航，给你持久</p>
                                        <p><span>379元</span>&nbsp;<del>999元</del></p>
                                    </div>
                                </a></li>
                        </div>


                    </ul>

                </div>
            </div>
            <div class="adv">
                <a href="#"><img src="../images/广告图1.webp" alt=""></a>
            </div>
        </section>
        <section class="container">

            <div class="row one">
                <h2>手机</h2>
                <p>

                    <a href="#">
                        查看更多<span class="iconfont icon-you">

                        </span>
                    </a>
                </p>
            </div>
            <div class="clearfix">
                <div class="firsto  col-2">
                    <a href="#">
                        <img src="../images/产品中图.webp" alt="">
                    </a>
                </div>
                <div class="seco">
                    <ul class="nav">
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <!-- <li><a href="#">
                            <div>
                                <img src="../images/产品图5.webp" alt="">

                            </div>
                            <h3>
                                Note 10 Pro
                            </h3>
                            <p>天玑1100年度旗舰芯，VC液态散热</p>
                            <p>
                                <span>1599元起</span><del>1699元</del>
                            </p>
                        </a></li> -->
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                    </ul>
                </div>
            </div>
            <div class="adv">
                <a href="#"><img src="../images/广告图2.webp" alt=""></a>
            </div>
        </section>
        <section class="container">

            <div class="row one">
                <h2>家电</h2>
                <p>

                    <span href="#" class="active">
                        家电
                    </span>
                    <span href="#">
                        热门影音
                    </span>

                </p>
            </div>
            <div class="clearfix">
                <div class="firsto  col-2">
                    <a href="#">
                        <img src="../images/产品中小图.webp" alt="">
                    </a>
                    <a href="#">
                        <img src="../images/产品中小图.webp" alt="">
                    </a>
                </div>
                <div class="seco">
                    <ul class="nav">
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <!-- <li><a href="#">
                            <div>
                                <img src="../images/产品图5.webp" alt="">

                            </div>
                            <h3>
                                Note 10 Pro
                            </h3>
                            <p>天玑1100年度旗舰芯，VC液态散热</p>
                            <p>
                                <span>1599元起</span><del>1699元</del>
                            </p>
                        </a></li> -->
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div>
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3>
                                    Note 10 Pro
                                </h3>
                                <p>天玑1100年度旗舰芯，VC液态散热</p>
                                <p>
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div class="pho">
                                    <img src="../images/产品图5.webp" alt="">

                                </div>
                                <h3 class="col-lg-push-6">
                                    Note 10 Pro
                                </h3>
                                <!-- <p>天玑1100年度旗舰芯，VC液态散热</p> -->
                                <p class="col-lg-push-6">
                                    <span>1599元起</span><del>1699元</del>
                                </p>
                            </a></li>
                        <li><a href="#">
                                <div class="iconfont icon-you">


                                </div>
                                <h3>
                                    浏览更多
                                </h3>
                                <p>热门</p>
                                <p>
                                    <!-- <span>1599元起</span><del>1699元</del> -->
                                </p>
                            </a></li>

                    </ul>
                </div>
            </div>
            <div class="adv">
                <a href="#"><img src="../images/广告3.webp" alt=""></a>
            </div>
        </section>`).appendTo($('main'))
        let count = 3;
        let timers;
        let timer

        let int = () => {

            $('.banner.container .wrapper').eq(count).animate({
                opacity: 1,
                // 'z-index':'66'

            }, 1000).siblings('.wrapper').css('opacity', '0');
            count++;
            if (count == 4) {
                count = 0
            }
            // $('.banner.container .wrapper').eq(count).animate({
            //     opacity: 0,


            // }, 1000);
            $('.remotebanner').children('a').eq(count).addClass('active').siblings().removeClass('active')
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
            console.log($(ev.target).index());

            if ($(ev.target).index()) {
                $('main section > .row.two > .second ul.nav div.nav').css({
                    'transform': `translateX(${translax -= 992}px)`

                })
                if (translax <= - 3000) {
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

        $('main section:eq(2) .row.one p span').on('mouseenter',function(ev){
            $(ev.target).addClass('active').siblings().removeClass('active')
        })

        let d = new Date();
        let hours =d.getHours() + 2;
        let e = d.setHours(hours)
        e = new Date(e)
        setInterval(() => {
            let f = new Date().getTime()
            $('main section:eq(0)> .row.two > .first p:eq(0)').html(`${hours}:00 场`)
            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(0)').html(`${new Date(e-f).getHours()}`)
            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(1)').html(`${new Date(e-f).getMinutes()}`)
            $('main section:eq(0)> .row.two > .first p:eq(3) span:eq(2)').html(`${new Date(e-f).getSeconds()}`)


            
        }, 500);

    }


)