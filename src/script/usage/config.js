function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise('first/home');
    $stateProvider
        .state('first', {
            url: '/first',
            templateUrl: 'src/script/tpl/first.html',
            controller: 'firstController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/first.css"]
					}])
                }
            }
        })
        .state('first.home', {
            url: '/home',
            templateUrl: 'src/script/tpl/home.html',
            controller: 'homeController as list',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/home.css"]
					}])
                },
                news: function ($http) {
                    return $http.get('src/script/data/art.json')
                        .then(function (event) {
                            return event.data;
                        })
                },
                data: function ($http) {
                    return $http({
                        method: 'GET',
                        url: 'src/script/data/index.json'
                    })

                }
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "src/script/tpl/login.html",
            controller: 'loginController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/login.css"]
					}])
                }
            }
        })
        .state('user', {
            url: '/user',
            templateUrl: 'src/script/tpl/user.html',
            controller: 'userController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/user.css"]
                        }])
                }
            }
        })
        .state('user.applyMx', {
            url: '/applyMx',
            templateUrl: 'src/script/tpl/applyMx.html'
        })
        .state('user.idea', {
            url: '/idea',
            templateUrl: 'src/script/tpl/idea.html'
        })
        .state('user.idea.feedback', {
            url: 'user/idea/feedback',
            templateUrl: 'src/script/tpl/feedback.html'
        })
        .state('user.idea.protect', {
            url: 'user/idea/protect',
            templateUrl: 'src/script/tpl/protect.html'
        })

    .state('user.news', {
            url: '/news',
            templateUrl: 'src/script/tpl/user_news.html'
        })
        .state('user.collection', {
            url: '/collection',
            templateUrl: 'src/script/tpl/user_collection.html'
        })
        .state('user.comment', {
            url: '/comment',
            templateUrl: 'src/script/tpl/user_comment.html'
        })
        .state('user.address', {
            url: '/address',
            templateUrl: 'src/script/tpl/user_address.html'
        })
        .state('user.gift', {
            url: '/gift',
            templateUrl: 'src/script/tpl/user_gift.html'
        })
        .state('user.whole', {
            url: '/whole',
            templateUrl: 'src/script/tpl/user_whole.html',
            controller: function ($state) {
                $state.go("user.whole.a")
            }
        })
        .state('user.whole.a', {
            url: 'user/whole/a',
            templateUrl: 'src/script/tpl/user_whole_a.html'
        })
        .state('user.whole.b', {
            url: 'user/whole/b',
            templateUrl: 'src/script/tpl/user_whole_b.html'
        })
        .state('user.whole.c', {
            url: 'user/whole/c',
            templateUrl: 'src/script/tpl/user_whole_c.html'
        })
        .state('user.whole.d', {
            url: 'user/whole/d',
            templateUrl: 'src/script/tpl/user_whole_d.html'
        })
        .state('user.whole.e', {
            url: 'user/whole/e',
            templateUrl: 'src/script/tpl/user_whole_e.html'
        })
        .state('search', {
            url: "/search",
            templateUrl: "src/script/tpl/search.html",
            controller: 'loginController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/search.css"]
					}])
                }
            }
        })
        .state('register', {
            url: "/register",
            templateUrl: "src/script/tpl/register.html",
            controller: 'loginController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/register.css"]
					}])
                }
            }
        })
        .state('forget', {
            url: "/forget",
            templateUrl: "src/script/tpl/forget.html",
            controller: 'loginController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/forget.css"]
					}])
                }
            }
        })
        .state('home_cha', {
            url: "/home_cha",
            templateUrl: "src/script/tpl/home_cha1.html",
            controller: 'loginController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/home_cha1.css"]
					}])
                }
            }
        })
        .state('item', {
            url: '/item/:index',
            templateUrl: './src/script/tpl/item.html',
            controller: 'itemController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/item.css"]
					}])
                },
                boring: function ($http) {
                    return $http.get('src/script/data/data.json')
                        .then(function (event) {
                            return event.data.data
                        })
                }
            }

        })
        .state('first.list', {
            url: '/list',
            templateUrl: './src/script/tpl/list.html',
            controller: 'listController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_con.css"]
                    }])
                },
                info: function ($http) {
                    return $http.get("src/script/data/tea_con.json")
                        .success(function (data) {
                            //console.log(data)
                            data
                        })
                        .error(function () {
                            console.log("error...")
                        })
                },
                neww: function ($http) {
                    return $http.get("src/script/data/art.json")
                        .then(function (data) {
                            return data.data
                        })
                }
            }
        })

    .state("first.list.items1", {
            url: "first/list/items1",
            templateUrl: './src/script/tpl/tea_list.html',
            replace: true,
            controller: "List1Controll"

        })
        .state("first.list.items2", {
            url: "first/list/items2",
            templateUrl: './src/script/tpl/tea_list2.html',
            controller: "List2Controll",
            replace: true

        })
        .state("first.list.items3", {
            url: "first/list/items3",
            templateUrl: './src/script/tpl/tea_list3.html',
            replace: true

        })
        .state("all", {
            url: "/all",
            templateUrl: "./src/script/tpl/tea_list_all.html",
            controller: 'allController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_list_all.css"]
                    }])
                }
            }
        })
        .state("all.con", {
            url: "/all/con",
            templateUrl: "./src/script/tpl/all_con.html"
        })
        .state("all.con.list1", {
            url: "/all/con/list1",
            templateUrl: "./src/script/tpl/all_con_list1.html"
        })
        .state("all.score", {
            url: "/all/score",
            templateUrl: "./src/script/tpl/all_score.html"
        })
        .state("all.year", {
            url: "/all/year",
            templateUrl: "./src/script/tpl/all_year.html"
        })
        .state("all.num", {
            url: "/all/num",
            templateUrl: "./src/script/tpl/all_mun.html"
        })

    .state("detail", {
            url: "/detail",
            templateUrl: "./src/script/tpl/tea_list2_detail.html",
            controller: 'listdetailController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_list_all.css"]
                    }])
                }
            }

        })
        .state("detail_list", {
            url: "/detail_list",
            templateUrl: "./src/script/tpl/detail_list.html",
            replace: true,
            controller: "detaillistController",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_list_all.css"]
                    }])
                }
            }
        })
        .state("detail_ping", {
            url: '/detail_ping',
            templateUrl: "./src/script/tpl/detail_ping.html",
            controller: "pingController",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_detail_ping.css"]
                    }])
                }
            }
        })
        .state("swiper-detali", {
            url: "/swiper-detali",
            templateUrl: "./src/script/tpl/swiper-detali.html",
            controller: "swiperdetaliController",
            replace: true,
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_list_all.css"]
                    }])
                }
            }
        })
        .state("tea-bang", {
            url: "/tea-bang",
            templateUrl: "./src/script/tpl/tea-bang.html",
            controller: "teabangController",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_list_all.css"]
                    }])
                }
            }
        })


    .state('first.call', {
        url: '/call',
        templateUrl: 'src/script/tpl/tea_shiji.html',
        controller: 'callController',
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/tea_shiji.css"]
					}])
            },
            tea_shiji: function ($http) {
                return $http({
                    method: 'GET',
                    url: 'src/script/data/index.json'
                })
            }
        }

    })

    .state('dashi', {
            url: '/dashi/:id',
            templateUrl: 'src/script/tpl/dashi.html',
            controller: "dashiController",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('dashi.detail', {
            url: '/dashi/detail',
            templateUrl: 'src/script/tpl/dashiDetail.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('pinlei', {
            url: '/pinlei',
            templateUrl: 'src/script/tpl/pinlei.html',
            controller: "pinleiController",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('dashi.handBrake', {
            url: '/dashi/handBrake',
            templateUrl: 'src/script/tpl/handBrake.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('dashi.heji', {
            url: '/dashi/heji',
            templateUrl: 'src/script/tpl/heji.html',

            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('mingxing', {
            url: '/mingxing',
            templateUrl: 'src/script/tpl/mingxing.html',
            controller: "mingxingController",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('mxChangpin', {
            url: '/mxChangpin',
            templateUrl: 'src/script/tpl/mxChangpin.html',
            controller: "mxChangpinController",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })


    .state('mxChangpinShop', {
        url: '/mxChangpinShop',
        templateUrl: 'src/script/tpl/mxChangpinShop.html',

        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/tea_shiji.css"]
					}])
            }
        }

    })

    .state('changpinAuthor', {
        url: '/changpinAuthor',
        templateUrl: 'src/script/tpl/changpinAuthor.html',
        controller: "changpinController",
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/tea_shiji.css"]
					}])
            }
        }

    })

    .state('mingxing.detail', {
        url: '/mingxing/detail',
        templateUrl: 'src/script/tpl/mingxingDetail.html',
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/tea_shiji.css"]
					}])
            }
        }

    })

    .state('mingxing.heji', {
            url: '/mingxing/heji',
            templateUrl: 'src/script/tpl/heji.html',

            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('listImg1', {
            url: '/listImg1',
            templateUrl: 'src/script/tpl/listImg1.html',

            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/listImgBuy.css"]
                        }])
                }
            }

        })

    .state('listImgAuthor', {
        url: '/listImgAuthor',
        templateUrl: 'src/script/tpl/listImgAuthor.html',
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/listImgBuy.css"]
                        }])
            }
        }

    })

    .state('listImgBuy', {
        url: '/listImgBuy',
        templateUrl: 'src/script/tpl/listImgBuy.html',
        controller: "listImgBuy",
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/listImgBuy.css"]
                        }])
            }
        }

    })

    .state('listImgBuy.detail', {
        url: '/listImgBuy/detail',
        templateUrl: 'src/script/tpl/listImgDetail.html',

        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/listImgBuy.css"]
                        }])
            }
        }

    })

    .state('listImgBuy.baseMsg', {
        url: '/listImgBuy/baseMsg',
        templateUrl: 'src/script/tpl/listImgbaseMsg.html',

        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/listImgBuy.css"]
                        }])
            }
        }

    })

    .state('listImgBuy.comment', {
        url: '/listImgBuy/comment',
        templateUrl: 'src/script/tpl/listImgcomment.html',

        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ["src/style/scss/listImgBuy.css"]
                        }])
            }
        }

    })


    .state('contents', {
            url: '/content',
            templateUrl: 'src/script/tpl/contents.html',
            controller: 'conController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/contents.css"]
					}])
                }
            }

        })
        .state('heji', {
            url: '/heji',
            templateUrl: 'src/script/tpl/heji.html',

            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
					}])
                }
            }

        })
        .state('find', {
            url: '/find',
            templateUrl: 'src/script/tpl/find.html',
            controller: 'findController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/tea_shiji.css"]
                        }])
                }
            }

        })
        .state('findDetail', {
            url: '/findDetail',
            templateUrl: 'src/script/tpl/listImgBuy.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/listImgBuy.css"]
                        }])
                }
            }

        })
        .state('buyCar', {
            url: '/buyCar',
            templateUrl: 'src/script/tpl/buyCar.html',
            controller: "buyCar",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/listImgBuy.css"]
                        }])
                }
            }

        })

    .state('first.detail', {
            url: '/detail',
            templateUrl: 'src/script/tpl/detail.html',
            controller: 'detailController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/quan/detail.css"]
					}])
                },
                boring: function ($http) {
                    return $http({
                        method: 'GET',
                        url: 'src/script/data/index.json'
                    })
                }
            }


        })
        .state('first.art', {
            url: '/art',
            templateUrl: 'src/script/tpl/art.html',
            controller: 'artController',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/art.css"]
                    }])
                },
                news: function ($http) {
                    return $http.get('src/script/data/art.json')
                        .then(function (event) {
                            return event.data
                        })
                }
            }
        })
        .state("first.art.artnewest", {
            url: "first/art/artnewest_",
            templateUrl: './src/script/tpl/art_newest.html',
            replace: true
        })
        .state("first.art.arthot", {
            url: "first/art/arthot",
            templateUrl: './src/script/tpl/art_hot.html',
            replace: true

        })
        .state("first.art.artspecial", {
            url: "first/art/artspecial",
            templateUrl: './src/script/tpl/art_special.html',
            replace: true
        })
        .state("arts", {
            url: '/arts/:id',
            templateUrl: 'src/script/tpl/art_details1.html',
            controller: function ($scope, $window, $http) {
                $scope.back = function () {
                    $window.history.back()
                }
                $http.get("src/script/data/art.json").success(function (da) {
                    $scope.da = da;
                })
            },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/art.css"]
                    }])
                }
            }
        })
        .state("comment", {
            url: '/comment',
            templateUrl: 'src/script/tpl/art_comment.html',
            controller: function ($scope, $window, $http) {
                $scope.back = function () {
                    $window.history.back()
                }
            },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/css/art.css"]
                    }])
                }
            }
        })
        .state('yuan', {
            url: '/yuan',
            templateUrl: 'src/script/tpl/yuan.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/yuan.css"]
					}])
                }
            }

        })
        .state('speak', {
            url: '/speak',
            templateUrl: 'src/script/tpl/speak.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/speak.css"]
					}])
                }
            }

        })
        .state('white', {
            url: '/white',
            templateUrl: 'src/script/tpl/white.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/white.css"]
					}])
                }
            }

        })
        .state('shen', {
            url: '/shen',
            templateUrl: 'src/script/tpl/shen.html',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        files: ["src/style/scss/shen.css"]
					}])
                }
            }

        })
}
angular.module('myapp')
    .config(config);