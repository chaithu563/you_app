'use strict';
angular.module('myApp.admin', ['ui.router'])

.controller('adminCtrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', '$timeout', '$interval', function ($state, $scope, dataServices, $http, $window, _, $timeout, $interval) {
  
   
    var getAvailableItems = function () {

        var curTime = (document.getElementById('MyAdminVideo1').currentTime);
        var filteredItems = dataServices.shopItems;
        filteredItems = _.filter(filteredItems, function (item) {
            return (item.starttime <= curTime && item.endtime >= curTime);
        });
        return filteredItems;
    }
  
   
    var video = document.getElementById("MyAdminVideo1");
    video.play();
    $scope.playorpause = "pause";
    $scope.muteorunmute = "speaker-on";
    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seektime = document.getElementById("seek-time");
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    document.onkeypress = function (e) {
        if ((e || window.event).keyCode === 32) {
            handlePlayorPause();
        }
    };

    playButton.addEventListener("click", function () {
        handlePlayorPause();
    });
    function handlePlayorPause() {
        if (video.paused == true) {
            // Play the video
            video.play();
            $scope.playorpause = "pause";

        } else {
            // Pause the video
            video.pause();
            $scope.playorpause = "play";
           // $scope.ShowItemsAvail();
        }
        $scope.opacityinorout = "out";
        $scope.$apply();
    }

    document.getElementById("MyAdminVideo1").onplaying = function () {
        $scope.isVisible = false;
        $scope.isItemSelected = false;
        $scope.$apply();
    };
   
    // Event listener for the mute button
    muteButton.addEventListener("click", function () {
        if (video.muted == false) {
            // Mute the video
            video.muted = true;
            $scope.muteorunmute = "mute";
        } else {
            // Unmute the video
            video.muted = false;
            $scope.muteorunmute = "speaker-on";
        }

        $scope.$apply();
    });

    // Event listener for the seek bar
    seekBar.addEventListener("change", function () {
        // Calculate the new time
        var time = video.duration * (seekBar.value / 100);

        // Update the video time
        video.currentTime = time;

    });


    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function () {
        // Calculate the slider value
        var value = (100 / video.duration) * video.currentTime;
        $scope.currentTime = video.currentTime;
        // Update the slider value
        seekBar.value = value;
       
        handlePlusForItems();
    });

    function handlePlusForItems() {
        var vidCurTime = video.currentTime;
        var vidDuration = video.duration;

        var videoinSec = Math.round(vidCurTime);
        $scope.isVisible = true;
        //dataServices.loadshopItems().then(function (data) {
        //    dataServices.shopItems = data.data.data;
        //    $scope.availItems = getAvailableItems();
          
        //});
        $scope.availItems = getAvailableItems();

    }

    $scope.openSelectedItem = function (item) {

        $scope.isItemSelected = true;
        $scope.selectedItem = item;


    }

    $scope.$watch("selectedItem", function (newvalue, oldvalue) {

        if(oldvalue)
            dataServices.updateItem(newvalue).then(function (data) {
                console.log(data);
               // handlePlusForItems();
                loadItemsData();
            });;

    }, true);

    $scope.addNewItem = function () {
        var curTime = (document.getElementById('MyAdminVideo1').currentTime);
        var item = { ProductHandle: null, ptop: 0, pleft: 0, starttime: curTime, endtime: curTime, Movie_Id: 1 };
        dataServices.addNewItem(item).then(function (data) {
            console.log(data);
            $scope.selectedItem = data.data.data;
            // handlePlusForItems();
            loadItemsData();
        });;
       
    }

    $scope.deleteItem = function (id) {
       // var item = { name: "", x: 0, y: 0, ST: $scope.currentTime, ET: $scope.currentTime };
        dataServices.deleteItem(id).then(function (data) {
            console.log(data);
            loadItemsData();
            $scope.selectedItem = null;
        });;
    }
    function loadItemsData() {

        dataServices.loadshopItems().then(function (data) {
            dataServices.shopItems = data.data.data;
            handlePlusForItems();
        });
    }
    loadItemsData();

}]);