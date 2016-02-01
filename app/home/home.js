'use strict';
angular.module('myApp.home', ['ui.router'])

.controller('homeCtrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', '$timeout', '$interval', function ($state, $scope, dataServices, $http, $window, _, $timeout, $interval) {
    var availitems = [
       { imgSrc: '../app/img/movie1.jpg', label: 'label 1' },
       { imgSrc: '../app/img/movie2.jpg', label: 'label 2' },
        { imgSrc: '../app/img/movie3.jpg', label: 'label 3' },
         { imgSrc: '../app/img/movie4.jpg', label: 'label 4' },
          { imgSrc: '../app/img/movie5.jpg', label: 'label 5' },
           { imgSrc: '../app/img/movie6.jpg', label: 'label 6' },
            { imgSrc: '../app/img/movie7.jpg', label: 'label 7' },
             { imgSrc: '../app/img/movie8.jpg', label: 'label 8' }
    ];

    var vidReady = 0;


    //$scope.slickConfig = {
    //    dots: true,
    //    lazyLoad: 'progressive',
    //    infinite: true,
    //    speed: 100,
    //    slidesToScroll: 1,
    //    variableWidth: true,
    //    onInit: function () {
    //        jQuery(window).resize();
    //        console.log('slickcaroseal locded');
    //    },
    //    centerMode: true

    //};
    $scope.dataLoaded = false;
    $scope.items = availitems;
    $scope.items = $scope.items.slice(vidReady, 4);
    vidReady = 1;
    $interval(function () {
        ///  $scope.dataLoaded = true;
       
        $scope.items = availitems;
        $scope.items = $scope.items.slice(4*(vidReady), 4*(vidReady+1));
        vidReady++;
        if (vidReady == 2)
            vidReady = 0;
       // $scope.$apply();
    }, 1000 * 3);
    $scope.number = 1;


    //});

    $scope.gotoVideo = function () {
        $state.go("video", {}, { reload: true });
        $scope.$apply();
    }




}]);