angular.module('myapp')
    .directive('myTea', function () {
        return {
            restrict: "E",
            templateUrl: './src/script/tpl/tea_swiper.html',
            replace: true,
            link: function (scope, element, attr) {

                setTimeout(function(){
                    var swiper = new Swiper('.teacon-main-swiper', {
                            pagination: ".swiper-pagination",
                            paginationClickable: true,
                            centeredSlides: true,
                            autoplay: 1000,
                            zoom:true,
                            autoplayDisableOnInteraction: false,
                            onSlideChangeEnd:function(swiper){
                                
                                $('.swiper-con i').text(scope.inf.tabs[swiper.realIndex].title)
                                 $('.swiper-con span').text(scope.inf.tabs[swiper.realIndex].cont)
                            }
                        });
                 },0)
                var nav = new Swiper('.nav', {
                    slidesPerView: 4.8,
                    paginationClickable: true,
                    freeMode: true
                });

                var nav = new Swiper('.navv', {
                    slidesPerView: 2,
                    paginationClickable: true,
                    freeMode: true,
                     autoplay: 1000
                });

            }
        }
    })
    .directive("myDetail", function () {
        return {
            restrict: "E",
            templateUrl: './src/script/tpl/detail_list_swiper.html',
            replace: true,
            link: function (scope, element, attr) {
                var swiper = new Swiper('.detail-list-swiper', {
                    pagination: ".swiper-pagination",
                    paginationClickable: true,
                    centeredSlides: true,
                    autoplay: 1000,
                    autoplayDisableOnInteraction: false

                });


                $('.detail_list_info2').on('click', 'h2', function () {

                    if ($(this).next().css('display') == 'none') {
                        $('.uls').slideDown();
                        $('.tu_piao').html('&#xe624;');
                    } else {
                        $('.uls').slideUp();
                        $('.tu_piao').html('&#xe65c;');
                    }
                })

            }
        }
    })