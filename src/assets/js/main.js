var uid;
function main(){
    //购物车下拉菜单
    $(".s_cart").mouseover(function(){
        $(".cart_dropdown").stop().slideDown(100);
    });
    $(".s_cart").mouseout(function(){
        $(".cart_dropdown").stop().slideUp(100);
    });

    // 判断用户是否登陆
    if(sessionStorage.uid){
        uid=sessionStorage.uid;
        //console.log(uid);
        var text='<li class="top_user"><router-link to="">'+sessionStorage.uname+'<router-link></li><li class="top_quit"><router-link to="">退出<router-link></li>';
        $(".h_con>ul").append(text);
        $(".top_quit").click(function(){
            sessionStorage.clear();
        });
    }else{
        var text='<li><router-link to="/login" class="h_login">登录<router-link></li><li><em>|</em></li><li><router-link to="/register" class="h_register">注册<router-link></li>';
        $(".h_con>ul").append(text);
    }
    //刷新购物车
    cartUpdate(uid);
}
function navText(text){
    $(".nav>ul>li").each(function(){
        var thisText=$(this).children("a").text();
        if(thisText==text){
            //console.log(thisText);
            $("nav li").removeClass("cur");
            $(this).addClass("cur");
        }
    });
}

//时间转换函数
function dateFormat(time){
    var t=new Date(time);
    var year= t.getFullYear();
    var month= t.getMonth()+1;
    var day= t.getDate();
    return year+"-"+month+"-"+day;
}

function cartUpdate(uid){
    $.ajax({
        type:"post",
        url:"data/cart_detail_select.php",
        data:{uid:sessionStorage.uid},
        success:function(d){
            var data= d.products;
            var listHtml="";
            var count=0;
            var priceSum=0;
            for(var i=0;i< data.length;i++){
                listHtml+='<li><router-link to=""><img src="'
                +data[i].pic
                +'" alt=""/><router-link><div><span>-</span><input type="text" value="'
                +data[i].count
                +'"/><span>+</span></div><strong>¥'
                +data[i].price*data[i].count
                +'</strong><em></em></li>';
                count+=parseInt(data[i].count);
                priceSum+=data[i].price*data[i].count;
            }
            $(".cart_dropdown>ul").html(listHtml);
            $("#cart_sum").text(count);
            $(".cd_js").show().find("strong").text(priceSum);
        }
    });
}



