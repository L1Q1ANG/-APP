function homeController($scope, $window, news, data) {
    $scope.da = news;
    $scope.data = data;
}

function loginController($scope, $window) {
    $scope.login = function () {
        $window.history.back();
    }
}

function listController($scope, info, $state, neww) {
    //console.log(info.data)
    $scope.list = info.data;
    $state.go("first.list.items1")
    $scope.inf = neww;
    $scope.share = share;
}

function listdetailController($scope) {

    //console.log($(".creatediv"))
    $(".creatediv").on('click', "a", function () {
        var nodes = $('<div class="bottom">' +
            '<div class="bottom-head"><h3>品牌</h3><span class="sp">&times;</span></div>' +
            '<div class="bottom-con">' +
            '<div class="con-dl"><dl><dt><img src="./src/images/19557ee3eb53b397.jpg" alt="" /></dt><dd><b>你的爱比我的年龄还深，我的侥幸总比你的伤口还多</b><p>在姥姥的孙辈中，我和姥姥最有缘分，从小，我是姥姥一手带大的</p></dd></dl></div>' +
            '<section class="teacon-main-pai">' +
            '<ul class="teacon-main-pai-item">' +
            '<li><a href=""><span>全部<i></i></span></a></li>' +
            '<li><a href=""><span>B<i></i></span></a></li>' +
            '<li><a href=""><span>C<i></i></span></a></li>' +
            '<li><a href=""><span>D<i></i></span></a></li>' +
            '<li><a href=""><span>E<i></i></span></a></li>' +
            '<li><a href=""><span>F<i></i></span></a></li>' +
            '<li><a href=""><span>G<i></i></span></a></li>' +
            '<li><a href=""><span>H<i></i></span></a></li>' +
            '<li><a href=""><span>I<i></i></span></a></li>' +
            '<li><a href=""><span>J<i></i></span></a></li>' +
            '<li><a href=""><span>K<i></i></span></a></li>' +
            '<li><a href=""><span>D<i></i></span></a></li>' +
            '<li><a href=""><span>E<i></i></span></a></li>' +
            '<li><a href=""><span>F<i></i></span></a></li>' +
            '<li><a href=""><span>I<i></i></span></a></li>' +
            '<li><a href=""><span>J<i></i></span></a></li>' +
            '<li><a href=""><span>K<i></i></span></a></li>' +
            '</ul></section>' +
            '</div>' +
            '</div>');
        $('body').prepend(nodes);
        $('.bottom').show()
        $('.bottom').stop().animate({
            'top': -0.5 + '%'
        }, 1000)
        $('.tea_all_main').slideUp(3000)
        $('.sp').on('click', function () {
            $('.tea_all_main').slideDown(100)
            setTimeout(function () {
                $('.bottom').stop().animate({
                    'top': 100 + '%'
                }, 1000, function () {
                    $('.bottom').hide()
                })
            }, 900)
        })
    })
}

function allController($scope, $state) {
    $state.go("all.num")
        /* $('.main_con_ul li').on('click',function(){
             console.log($(this).index())
             $('.tea_all_main_tab').show()
                 var th=$(this).index()
                 $('.tea_all_main_tab div').eq(th).show().siblings().hide()
         }) */
}

function List1Controll($scope) {
    $('.meun-list>li').on('click', 'a', function () {
        if ($(this).next().css('display') == 'none') {
            $(this).next().slideDown();

            $(this).find('.tu-biao').html('&#xe624;');
        } else {
            $(this).next().slideUp();
            $(this).find('.tu-biao').html('&#xe65c;');
        }
    })

}

function List2Controll($scope) {
    console.log($('.pai-list'))
    $('.teacon-main-pai-item a').on("click", function () {
        $('.pai-list').show()
        $('.pai-biao').on("click", function () {
            $('.pai-list').hide()
        })
    })
}

function pingController($scope) {
    console.log($('.ping-main-list'))
    $('.title a').on('click', function () {
        if ($('.ping-main-list').css('display') == 'block') {
            $('.ping-main-list').slideUp()
            $(this).children('small').html('展开')
            console.log($(this).children('i'))
            $(this).children('i').html('&#xe624;')
        } else {
            $('.ping-main-list').slideDown()
            $(this).children('small').html("收起")
            $(this).children('i').html('&#xe65c;')
        }
    })
}

function detaillistController($scope) {
    console.log($('.tea-tan'))
        // $('.tea-tan').on("click",function(){
    $scope.share = share;
    //})
}


function swiperdetaliController($scope) {
    $('.swiper-tab li').on('click', function () {
        $('.swiper-mark').show()
        var th = $(this).index()
        $('.swiper-mark div').eq(th).show().siblings().hide()
        $(this).find("em").html("&#xe624;").parents("li").siblings().find("em").html("&#xe65c;");
    })
    $scope.share = share;
}

function teabangController($scope) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = "#0202d1";
    ctx.lineWidth = 3;
    ctx.arc(40, 40, 25, 0, Math.PI * 1.5, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#ccc";
    ctx.fillText('30%', 27, 45);
    ctx.lineWidth = 3;
    ctx.arc(40, 40, 25, 0, Math.PI * 1.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#d17902";
    ctx.lineWidth = 3;
    ctx.arc(110, 40, 25, 0, Math.PI * 1.5, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#ccc";
    ctx.fillText('35%', 100, 45);
    ctx.lineWidth = 3;
    ctx.arc(110, 40, 25, 0, Math.PI * 1.5, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#a76103";
    ctx.lineWidth = 3;
    ctx.arc(180, 40, 25, 0, Math.PI * 1.5, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#ccc";
    ctx.fillText('15%', 170, 45);
    ctx.lineWidth = 3;
    ctx.arc(180, 40, 25, 0, Math.PI * 1.5, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    ctx.arc(250, 40, 25, 0, Math.PI * 1.5, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#ccc";
    ctx.fillText('20%', 240, 45);
    ctx.lineWidth = 3;
    ctx.arc(250, 40, 25, 0, Math.PI * 1.5, false);
    ctx.stroke();


    $('.setter').on('click', function () {

        if ($(this).next().css('display') == "none") {
            $(this).next().slideDown();
            $(this).find('i').html("&#xe624;");
        } else {
            $(this).next().slideUp();
            $(this).find('i').html("&#xe65c;");
        }
    })
    $('.quick').on('click', function () {
        if ($('.score-nav ul').css('display') == "none") {
            $('.score-nav ul').show();
        } else {
            $('.score-nav ul').hide();
        }
    })
}




function callController($scope, tea_shiji, $state) {
    // $scope.tea_box_banner
    $scope.list = tea_shiji.data.shiji;
    $scope.share = share;

}

function listImgBuy($scope, $state, $window) {
    $state.go("listImgBuy.detail");
    $scope.back = function () {
        $window.history.back()
            //$state.go("first.call");
    }
    $scope.service = service;
    //点击送至的盒子，出现省份选择
    $(".to_area").on("click", function (event) {
            event.stopPropagation()
                //$(".toAreaList").show();
            $(".listImgBuy_box").on("click", function () {
                $(".toAreaList").hide();
            })
            if ($(".toAreaList").css("display") == "none") {
                $(".toAreaList").show()
            } else {
                $(".toAreaList").hide()
            }

        })
        //点击地区列表哪行被选中有样式
    $(".toAreaList").on("click", "li", function () {
        var val = $(this).find("span").html();
        $(".to_area").find("a").html(val);
        for (var i = 0; i < $(".toAreaList_ul").find("i").length; i++) {
            $(".toAreaList_ul").find("i").eq(i).hide()
            if (i == $(this).index() - 1) {
                $(".toAreaList_ul").find("i").eq(i).show().css("color", "#893e20")
            }
        }
    })




}

function dashiController($scope, $state, $window) {
    $state.go("dashi.detail");
    $scope.back = function () {
        $window.history.back()
    }
    $scope.surname = surname;
}

function mingxingController($scope, $state, $window) {

    $state.go("mingxing.detail");
    $scope.back = function () {
        //$window.history.back()
        $state.go("first.call");
    }



}

function changpinController($scope) {

    $scope.mingxingLook = function () {

        $(".lookDown").on("click", function () {
            $(".changpinAuthor_msg").show()
            $(this).hide()

        })

        $(".lookUp").on("click", function () {
            $(".changpinAuthor_msg").hide()
            $(".lookDown").show()

        })

    }



}

function mxChangpinController($scope) {

    $scope.back = function () {
        $window.history.back()
    }
    $scope.addCar = addCar;
    $scope.service = service;


}

function findController($scope, $window, $state) {

    $scope.back = function () {
        $window.history.back()
    }

    $(".find_link").find("a").on("click", function () {
        $(".container div").eq($(this).index()).show().siblings().hide()
        if ($(this).attr('class') == "high") {
            $(this).removeClass("high")
            $(".container").hide();
            $('.find_list').show();
            $(".container div").eq($(this).index()).show().siblings().hide()
            $(this).find("i").html("&#xe65c;")
        } else {
            $(this).addClass("high").siblings().removeClass("high");
            $(".container").show();
            $('.find_list').hide();
            $(this).find("i").html("&#xe624;").parent().siblings().find("i").html("&#xe65c;");
        }
    })

    $(".fenleiAll").on("click", function () {
        $(".container").hide();
        $('.find_list').show();
        $(".find_link").find("a").find("i").html("&#xe65c;");
        $(".find_link").find("a").removeClass("high");

    })

    $(".container").find(".linkA").on("click", function () {
        if ($(this).next("ul")) {
            if ($(this).next("ul").css("display") == "block") {
                $(this).next("ul").slideUp()
                $(this).removeClass("high")
                $(this).find("i").html("&#xe65c;")
            } else {
                $(this).next("ul").slideDown()
                $(this).addClass("high")
                $(this).find("i").html("&#xe624;")
                $(this).parent().siblings().find("ul").slideUp()
                $(this).parent().siblings().find(".linkA").removeClass("high")
                $(this).parent().siblings().find("i").html("&#xe65c;")
            }
        }

    })

}

function pinleiController($scope, $window) {
    $scope.back = function () {
        $window.history.back()
    }
    $('.category-tea').on('click', function () {
        if ($('.tea')) {
            if ($('.tea').css("display") == "none") {
                $('.tea').slideDown();
                $(this).find("i").html("&#xe624;");
            } else {
                $('.tea').slideUp();
                $(this).find("i").html("&#xe65c;");
            }
        }
    })
    $('.category-utensils').on('click', function () {
        if ($('.utensils')) {
            if ($('.utensils').css("display") == "none") {
                $('.utensils').slideDown();
                $(this).find("i").html("&#xe624;");
            } else {
                $('.utensils').slideUp();
                $(this).find("i").html("&#xe65c;");
            }
        }
    })

    $(".closePinlei").on("click", function () {
        $window.history.back()
    })

}



function firstController($scope) {
    $(".f_footer a").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
}

function detailController($scope, $http, boring) {
    var vm = this;
    $scope.lists = boring.data.quanzi;
}

function itemController($scope, $stateParams, boring) {
    $scope.tit = boring[$stateParams.index].title


}

function artController($scope, $window, news) {
    $scope.back = function () {
        $window.history.back()
    }
    $scope.da = news;
    $scope.share = share;
}

function userController($scope, $window) {
    $scope.back = function () {
        $window.history.back()
    }
}

function conController($scope, $window) {
    $scope.back = function () {
        $window.history.back()
    }
    $(".sub").on("click", function () {
        if ($(this).next("ul")) {
            if ($(this).next("ul").css("display") == "block") {
                $(this).next("ul").slideUp()
                $(this).removeClass("active")
                $(this).find("i").html("&#xe65c;")
            } else {
                $(this).next("ul").slideDown()
                $(this).addClass("active")
                $(this).find("i").html("&#xe624;")
                $(this).parent().siblings().find("ul").slideUp()
                $(this).parent().siblings().find("a").removeClass("active")
                $(this).parent().siblings().find("i").html("&#xe65c;")
            }
        }

    })
}

function yuanController($scope) {
    $scope.down = function () {
        alert(1)
    }
}

function buyCar($scope, $window) {
    $scope.back = function () {
        $window.history.back()
    }
    $scope.obj = JSON.parse(sessionStorage.getItem("obj"));
    $scope.reduce = reduce;
    $scope.add = add;
    $scope.comm = false;
    $scope.num = 0;
}
angular.module('myapp')
    .controller('homeController', homeController)
    .controller('loginController', loginController)
    .controller('listController', listController)
    .controller('listdetailController', listdetailController)
    .controller("List1Controll", List1Controll)
    .controller("List2Controll", List2Controll)
    .controller('allController', allController)
    .controller('detaillistController', detaillistController)
    .controller('swiperdetaliController', swiperdetaliController)
    .controller('pingController', pingController)
    .controller('teabangController', teabangController)
    .controller('callController', callController)
    .controller('firstController', firstController)
    .controller('detailController', detailController)
    .controller('itemController', itemController)
    .controller('artController', artController)
    .controller('conController', conController)
    .controller('listImgBuy', listImgBuy)
    .controller('yuanController', yuanController)
    .controller("dashiController", dashiController)
    .controller("userController", userController)
    .controller("mingxingController", mingxingController)
    .controller("findController", findController)
    .controller("userController", userController)
    .controller("changpinController", changpinController)
    .controller("mxChangpinController", mxChangpinController)
    .controller("pinleiController", pinleiController)
    .controller("buyCar", buyCar)


function share() {
    var str = '<div class="mark">\
                    <div class="markBg"></div>\
                    <main class="mark-main">\
                        <div class="mark-share">\
                            <h3>分享到：</h3>\
                            <ul>\
                                <li>\
                                    <a href="javascript:;" class="iconfont">&#xe691;</a>\
                                    <span>微信朋友圈</span>\
                                </li>\
                                <li>\
                                    <a href="javascript:;" class="iconfont">&#xe691;</a>\
                                    <span>微信好友</span>\
                                </li>\
                                <li>\
                                    <a href="javascript:;" class="iconfont">&#xe691;</a>\
                                    <span>QQ好友</span>\
                                </li>\
                                <li>\
                                    <a href="javascript:;" class="iconfont">&#xe691;</a>\
                                    <span>新浪微博</span>\
                                </li>\
                                <li>\
                                    <a href="javascript:;" class="iconfont">&#xe691;</a>\
                                    <span>QQ空间</span>\
                                </li>\
                            </ul>\
                        </div>\
                        <div class="mark-btn">\
                            <button class="delete">取消</button>\
                        </div>\
                    </main>\
                </div>'
    $("body").append($(str))
    $("body").css({
        overflow: "hidden"
    })
    $(".delete").on("click", function () {
        $(".mark").remove()
        $("body").css({
            overflow: "hidden"
        })
    })

}

function surname() {
    var arr = '<div class="Surname-mark">\
        <main class="Surname-mark-main">\
            <div class="Surname-mark-share">\
                <div class="Surname-btn">\
                    <h3>按姓氏</h3>\
                    <span class="iconfont Surname-del">&#xe61c;</span>\
                </div>\
                <ul>\
                    <li class="bg">\
                        <a href="javascript:;">全部</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">C</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">L</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">Q</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">S</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">W</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">X</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">Y</a>\
                    </li>\
                    <li>\
                        <a href="javascript:;">Z</a>\
                    </li>\
                </ul>\
                <p>按姓氏首字母搜索</p>\
            </div>\
        </main>\
    </div>';
    $("body").append($(arr))
    $("body").css({
        overflow: "hidden"
    })
    $(".Surname-del").on("click", function () {
        $(".Surname-mark").remove()
        $("body").css({
            overflow: ""
        })
    })
    $('.Surname-mark-share li').on('click', function () {
        var ohtml = $(this).text();
        $(".Surname-mark").remove();
        $('.surname-replace').text(ohtml);
    })
    $('.delet').on('click', function () {
        $(".Surname-mark").remove();
    })
}

function service() {
    var str1 = '<div class="service-mark">\
        <div class="service-content">\
            <div class="service-one">\
                <h3>客服电话</h3>\
                <p>400-892-5066</p>\
            </div>\
            <div class="service-two">\
                <span class="service-del">取消</span>\
                <span class="service-dial"><a href= "tel:10086">拨打</a></span>\
            </div>\
        </div>\
    </div>'
    $("body").append($(str1))
    $("body").css({
        overflow: "hidden"
    })
    $(".service-del").on("click", function () {
        $(".service-mark").remove()
        $("body").css({
            overflow: ""
        })
    })
}


function addCar() {
    var str = '<div class="mark">\
                    <div class="markBg"></div>\
                    <main class="mark-main">\
                       <dl>\
                            <dt><img src="src/images/57be5b0a0c9f1zyrh.jpeg"></dt>\
                            <dd>\
                                <h2>东方美人茶2015年新竹冬季[膨风茶]头等奖</h2>\
                                <em>￥8000.00</em>\
                                <i>库存19</i>\
                                <span class="close">&times;</span>\
                            </dd>\
                       </dl>\
                        <div class="addCount">\
                            <label>数量</label>\
                            <span class="reduce">-</span>\
                            <input type="text" value="1" class="count">\
                            <span class="add">+</span>\
                        </div>\
                        <div class="mark-sure">\
                            <button class="delete">确定</button>\
                        </div>\
                    </main>\
                </div>'
    $("body").append($(str))
    $("body").css({
        overflow: "hidden"
    })
    $(".delete").on("click", function () {
        /*var main=$(".mark-main h2").text();
        var txt=$(".mark-main em").text();
        var src=$(".mark-main img").attr("src");
        var num=$(".count").val();
        var obj=[{"name":"李强","main":main,"text":txt,"src":src,"num":num}];*/
        var commodity = [
            {
                "name": "李强",
                "main": "台湾柴烧公道杯",
                "text": "￥10000.00",
                "src": "src/images/57be5b0a0c9f1zyrh.jpeg",
                "num": 1
            },
            {
                "name": "李强",
                "main": "开园茶·西湖龙井",
                "text": "￥2000.00",
                "src": "src/images/57be5b0a0c9f1zyrh.jpeg",
                "num": 1
            },
            {
                "name": "李强",
                "main": "开园茶·峨眉雪芽雀舌",
                "text": "￥5000.00",
                "src": "src/images/57be5b0a0c9f1zyrh.jpeg",
                "num": 1
            },
            {
                "name": "李强",
                "main": "开园茶·林湖雀舌",
                "text": "￥2000.00",
                "src": "src/images/57be5b0a0c9f1zyrh.jpeg",
                "num": 1
            },
            {
                "name": "李强",
                "main": "大红袍",
                "text": "￥6600.00",
                "src": "src/images/57be5b0a0c9f1zyrh.jpeg",
                "num": 1
            }
    ]
        sessionStorage.setItem("obj", JSON.stringify(commodity))
        $(".mark").remove()
        $("body").css({
            overflow: "hidden"
        })
    })
    $(".close").on("click", function () {
        $(".mark").remove()
        $("body").css({
            overflow: "hidden"
        })
    })
    var count = $(".count").val();
    $(".add").on("click", function () {
        $(".count").val(count++);
    })
    $(".reduce").on("click", function () {

        $(".count").val(count--);
        if ($(".count").val() <= 0) {
            count = 0;
            return;
        }
    })
}


function reduce(x) {
    x.num--
        if (x.num < 1) {
            x.num = 1
        };
}

function add(x) {
    x.num++
}