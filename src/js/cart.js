import $ from "./library/jquery.js";
import cookie from "./library/cookie.js";
$(function () {
    let shop = cookie.get('shop');
    console.log(shop)

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
                $(`<div>
                <div><input type="checkbox"><span></span></div>

                <div><img src="../${current[0].picture}" style="width: 80px;height: 80px;" alt=""></div>
                <div style="height: 100%;"><h3 style="line-height: 80px;font-size: 18px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"><a href="#" style="text-decoration: none;color: black;">${current[0].title}</a></h3></div>
                <div>${current[0].price}元</div>
                <div>
                    <div class="clearfix" style="margin-top: 23px;border: 1px solid #eee;">
                    <a href="javascript:;" style="float: left;width: 38px;height: 38px;line-height: 38px;text-align: center;text-decoration: none;font-size: 40px;color: #bbb;">-</a>
                    <input type="number" style="float: left;width: 72px;height: 38px;outline: none;border: none;" value="${current[0].num}">
                    <a href="javascript:;" style="float: left;width: 38px;height: 38px;line-height: 38px;text-align: center;text-decoration: none;font-size: 40px;color: #bbb;">+</a>

                    </div>
                </div>
                <div style="color: darkorange;">${current[0].price}元</div>
                <div><a class="close1" data-id="${el.id}" href="javascript:;" style="text-align: center;text-decoration: none;font-size: 25px;color: #bbb;">×</a></div>
            </div>`).appendTo($('main .container.hasgoods'));
                $('.close1').on('click', function () {
                    let res = shop.filter(el => el.id !== $(this).attr('data-id'));
                    if(res!==true){
                        res=''
                        cookie.set('shop', '', -1);
                    }else{
                        cookie.set('shop', JSON.stringify(res), 1);

                    }
                    
                    location.reload()

                })

            });

        }).catch(function (xhr) {

            console.log(xhr.status)
        });
    } else{
        $('main .container.hasgoods').css({
            display: 'none'
        });
        $('main .container.clearfix.empty').css({
            display: 'block'
        })

        $('#quicklyshop').on('click', function () {
            location.href = "../html/index.html"
        })
    }



})