import $ from "./library/jquery.js";
import cookie from "./library/cookie.js";
$(function () {
    let shop = cookie.get('shop');
    let count4 = 0;

    if (shop) {
        shop = JSON.parse(shop)
        let idList = shop.map(elm => elm.id).join();

        $.ajax({
            type: "get",
            url: "../../interface/getitems.php",
            data: {
                idList
            },
            dataType: "json",
        }).then(function (data) {

            data.forEach(el => {
                let current = shop.filter(elm => elm.id === el.id);

                current.forEach(el => count4 += parseInt(el.num))
                $(`<div>
                <div><input type="checkbox" checked='checked'><span></span></div>

                <div><img src="../${current[0].picture}" style="width: 80px;height: 80px;" alt=""></div>
                <div style="height: 100%;"><h3 style="line-height: 80px;font-size: 18px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"><a href="#" style="text-decoration: none;color: black;">${current[0].title}</a></h3></div>
                <div>${current[0].price}元</div>
                <div>
                    <div class="clearfix addandminer" style="border: 1px solid #eee;">
                    <a  data-id="${el.id}" href="javascript:;" style="float: left;width: 38px;height: 38px;line-height: 38px;text-align: center;text-decoration: none;font-size: 40px;color: #bbb;">-</a>
                    <input data-id="${el.id}" class="goodsum" type="number" style="text-align:center;float: left;width: 72px;height: 38px;outline: none;border: none;" value="${current[0].num}">
                    <a data-id="${el.id}" href="javascript:;" style="float: left;width: 38px;height: 38px;line-height: 38px;text-align: center;text-decoration: none;font-size: 40px;color: #bbb;">+</a>

                    </div>
                </div>
                <div class='sumcount' style="color: darkorange;">${current[0].price * current[0].num}元</div>
                <div><a class="close1" data-id="${el.id}" href="javascript:;" style="text-align: center;text-decoration: none;font-size: 25px;color: #bbb;">×</a></div>
                </div>`).appendTo($('main .container.hasgoods'));









            });
            $('.close1').on('click', function () {
        console.log(1);

        let res = shop.filter(el => el.id !== $(this).attr('data-id'));
        console.log(res)
        return (function(){if (res !== true) {
            
            cookie.set('shop', JSON.stringify(res), 1);
            location.reload()

        } else {
            res = ''
            cookie.set('shop', '', -1);
            localStorage.removeItem('count');
            location.reload()

        }
    })()
    })
            $('#chooseAll').on('click', function () {
                if ($(this).prop('checked')) {
                    console.log($('.container.hasgoods input[type=checked]'))
                    $('.container.hasgoods input[type=checkbox]').each((index, el) => {
                        $(el).prop('checked', 'checked')
                    })
                    sum();
                } else {
                    $('.container.hasgoods input[type=checkbox]').each((index, el) => {
                        $(el).prop('checked', false)
                    })
                    $('.sumnum').html('0')

                }
            })
            $('.addandminer input').on('blur', function () {
                shop.forEach(el => {
                    if ((el.id) === $(this).attr('data-id')) {
                        el.num = $(this).val()

                    }
                    if ($(this).val() <= 0 || isNaN($(this).val())) {
                        el.num = 0;


                    }
                })
                cookie.set('shop', JSON.stringify(shop), 1)

                location.reload()

            })
            $('.addandminer a').on('click', function () {
                if ($(this).index()) {
                    for (let i = 0; i < shop.length; i++) {

                        if (shop[i].id === $(this).attr('data-id')) {
                            shop[i].num = parseInt(shop[i].num) + 1;
                            cookie.set('shop', JSON.stringify(shop), 1)

                        }


                    }
                    location.reload()
                    return;

                } else {
                    shop.forEach(el => {
                        if ((el.id) === $(this).attr('data-id')) {
                            el.num = parseInt(el.num) - 1
                            if (el.num <= 0) {
                                el.num = 0;


                            }
                        }
                    })
                    cookie.set('shop', JSON.stringify(shop), 1)

                    location.reload()
                }
            })



            sum()
            let nav = document.querySelector('#some')

            window.addEventListener('scroll', function (e) {
                if (window.pageYOffset < nav.offsetTop && nav.offsetTop > 674) {
                    nav.style.position = 'fixed'
                    nav.style.bottom = '0px'
                } else {
                    nav.style.position = 'static'
                }
            })


        }).catch(function (xhr) {

            console.log(xhr.status)
        });
    } else {
        $('main .container.hasgoods').css({
            display: 'none'
        });
        $('main .container.clearfix.empty').css({
            display: 'block'
        })


    }

    // location.reload()

    function sum() {
        $('.newcreate').remove()

        let emptya = 0;

        $('.sumcount').each((index, el) => {
            emptya += parseInt($(el).html());
        })
        $('.sumnum').html(emptya);

        $(`<div class="newcreate"  style="height:10px !important;background:#f5f5f5"></div>
                
            <div class="newcreate" id="some" class="clearfix" style="line-height:50px !important;">
            <div style="float:left;width:auto;height:50px !important">
            <a href="./index.html" style="text-decoration:none">继续购物</a>丨
                共<em class="sum" style="color:darkorange;font-style:normal;">3</em>件商品,已选择<em class="selectSum" style="font-style:normal;">3</em>件
                </div>
                <div style="float:right;width:auto;height:50px !important">
                合计：<em class="sumnum" style="font-style:normal;">${emptya}</em>元 <button style="line-height:50px;border:none;width:180px;height:86px;background:orange; color:white;font-size:18px">去结算</button>
                </div>

                </div>`).appendTo($('main .container.hasgoods'))
        $('.sum').html(count4);
        $('.selectSum').html(count4)


    }
    

    // location.reload()

    $('#quicklyshop').on('click', function () {
        location.href = "../html/index.html"
    })

    $('html').on('click', function (ev) {




        let count5 = 0;
        let count3 = 0;
        let count1 = $('input[type=checkbox]').not('#chooseAll').length
        let count2 = 0;
        $('input[type=checkbox]').not('#chooseAll').each((index, el) => {

            if (($(el).prop('checked'))) {
                count2++;
                count3 += parseInt($(el).parent().parent().children('.sumcount').html())
                count5 += (parseInt($(el).parent().parent().children('div').eq(4).children().children('input').val()))
            }


        })
        $('.sumnum').html(count3)
        $('.selectSum').html(count5)
        if (count2 !== count1) {
            $('input[type=checkbox]').eq(0).prop('checked', false)
        } else {
            $('input[type=checkbox]').eq(0).prop('checked', true)

        }
        count2 = 0;

    })
})