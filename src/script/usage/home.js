angular.module('myapp')
    .directive('mySwiper', function () {
        return {
            restrict: "E",
            templateUrl: './src/script/tpl/home1.html',
            replace: true,
            link: function (scope, element, attr) {
                setTimeout(function () {
                    var banner = new Swiper('.banner', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        centeredSlides: true,
                        autoplay: 2500,
                        autoplayDisableOnInteraction: false,
                        loop: true,
                        onSlideChangeEnd: function (swiper) {
                            $(".l_shadow i").text(scope.da.tabs[swiper.realIndex].title)
                            $(".l_shadow span").text(scope.da.tabs[swiper.realIndex].cont)
                        }
                    });
                }, 0);
                var nav = new Swiper('.nav', {
                    slidesPerView: 5,
                    paginationClickable: true,
                    freeMode: true,
                    observer: true,
                    observeParents: true
                });
                var one_shiji = new Swiper('.one_shiji', {
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    spaceBetween: 10,
                    observer: true,
                    observeParents: true
                });
            }
        }
    })