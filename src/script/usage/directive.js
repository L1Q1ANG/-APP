angular.module("myapp").directive("mySlider", function () {
    return {
        restrict: "E",
        templateUrl: "src/script/tpl/tea_shijiSlider.html",

        link: function (scope, element, attrs) {
            var mySwiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                centeredSlides: true,
                autoplay: 2000,
                autoplayDisableOnInteraction: false
                
            });

        }
    }

})

angular.module("myapp").directive("imgSlider", function () {
    return {
        restrict: "E",
        templateUrl: "src/script/tpl/listImgBuy_slider.html",

        link: function (scope, element, attrs) {
            var mySwiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                centeredSlides: true,
                autoplay: 2000,
                autoplayDisableOnInteraction: false,
                zoom:true//放大效果
            });

        }
    }

})
angular.module("myapp").directive("myNum", function () {
    return {
        link: function (scope, element, attrs) {
            scope.total=total;
            $(".shop-list").on("click","input:checkbox",function(){
                var tr=$(this).prop("checked");
                $.each($(this).parents("li").find("input:checkbox"),function(i,v){
                    $(v).attr("checked",tr)
                })
                total()
            })
            $("#comms").on("click",function(){
                total()
            })
            $(".shop-list").on("click",".sp-btn",function(){
                total()
            })
            $(".edit").on("click",function(){
                $("input:checkbox").attr("checked",false)
                if ($(this).text()=="编辑") {
                    $(this).text("完成")
                    $(".settlement").css("display","none")
                    $(".remo").css("display","block")
                }else{
                    $(this).text("编辑")
                    $(".settlement").css("display","block")
                    $(".remo").css("display","none")
                }
            })
            $(".remo").on("click",function(){
                var arr=[];
                $.each($(".che"),function(i,v){
                    if ($(v).prop("checked")) {
                        arr.push(i)   
                    }
                })
                $.each(arr.reverse(),function(i,v){
                    scope.obj.splice(v,1)
                    $(".shop-list").find("li")[v].remove()
                })
                $(".remo em").text(0)
                $(".settlement em").text(0)
                sessionStorage.setItem("obj",JSON.stringify(scope.obj))
            })
            function total(){
                scope.num=0;
                var arr=[];
                $.each($(".che"),function(i,v){
                    if ($(v).prop("checked")) {
                        arr.push(i)   
                    }
                })
                $.each(arr,function(i,v){
                    scope.num+=(scope.obj[v].text.substr(1)*1)*scope.obj[v].num
                })
                $(".buyCar_box_footright i").html(scope.num.toFixed(2))
                $(".settlement em").text($(".che:checked").length)
                $(".remo em").text($(".che:checked").length)
            }
        }
    }
})