angular.module('myapp')
    .directive('artSwiper', function () {
        return {
            restrict: "E",
            templateUrl: './src/script/tpl/art1.html',
            replace: true,
            link: function (scope, element, attr) {
                setTimeout(function(){
                    var banner = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        centeredSlides: true,
                        autoplay: 2500,
                        autoplayDisableOnInteraction: false,
                        loop: true,
                        onSlideChangeEnd: function(swiper){
                          //alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
                            $(".l_shadow i").text(scope.da.tabs[swiper.realIndex].title) 
                            $(".l_shadow span").text(scope.da.tabs[swiper.realIndex].cont) 
                        }
                    });
                },0)
                
            }
        }
    })