'use strict';
angular.module('myApp.view1', ['ui.router'])

.controller('View1Ctrl', ['$state', '$scope', 'dataServices', '$http', '$window', '_', function ($state, $scope, dataServices, $http, $window, _) {
  

	$scope.isVisible = false;
//	dataServices.loadshopItems();


	var getAvailableItems = function () {

		var curTime = (document.getElementById('MyVideo1').currentTime);
		var filteredItems = dataServices.shopItems;
		filteredItems = _.filter(filteredItems, function (item) {
		    return (item.starttime <= curTime && item.endtime >= curTime);
		});
		return filteredItems;
	}

	// Image click behaviour
	$scope.openInNewWindow = function (item) {
		$window.open(item.redURL);
	}
	
	
	

	//video control
	// Video
	var video = document.getElementById("MyVideo1");
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
	        $scope.ShowItemsAvail();
	    }
	    $scope.opacityinorout = "out";
	    $scope.$apply();
	}

	document.getElementById("MyVideo1").onplaying = function () {
	    $scope.isVisible = false;
	    $scope.isItemSelected = false;
		$scope.$apply();
	};
	$scope.ShowItemsAvail = function (item) {
	    if ($scope.playorpause == "play") {
	        video.pause();
	        $scope.playorpause = "play";
	        // Update the button text to 'Play'
	        //  playButton.innerHTML = "Play";
	        $scope.availItems = getAvailableItems();
	        $scope.isVisible = true;
	        $scope.opacityinorout = "in";
	        $scope.$apply();
	    }
	}


	// Event listener for the mute button
	muteButton.addEventListener("click", function () {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			// muteButton.innerHTML = "Unmute";
			$scope.muteorunmute = "mute";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			//muteButton.innerHTML = "Mute";
			$scope.muteorunmute = "speaker-on";
		}

		$scope.$apply();
	});


    // Event listener for the full-screen button
	$scope.fullscrren = false;;
	fullScreenButton.addEventListener("click", function () {
		if (video.requestFullscreen) {
		    //video.requestFullscreen();

		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			//video.webkitRequestFullscreen(); // Chrome and Safari
		}
		$scope.fullscrren = !$scope.fullscrren;
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

		// Update the slider value
		seekBar.value = value;
	    //seektime.textContent = Math.floor(video.currentTime);


	    //handle plus position

		//handlePlusForItems();

	});

	function handlePlusForItems() {
	    var vidCurTime = video.currentTime;
	    var vidDuration = video.duration;

	    var videoinSec = Math.round(vidCurTime);
	    $scope.isVisible = true;
	  $scope.availItems= getAvailableItems();
	 // $scope.$apply();

	}
	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function () {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function () {
		video.play();
	});

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function () {
		// Update the video volume
		video.volume = volumeBar.value;
	});

	$scope.openSelectedItem = function (item) {
	    $scope.ProductHandleURL = "";
	    $scope.isItemSelected = true;

	    $scope.selectedItem = item;
	  //  $scope.ProductHandleURL="https://widgets.shopifyapps.com/embed/product?eid=0&product_modal=false&button_text_color=ffffff&button_background_color=7db461&buy_button_text=Add%20to%20cart&redirect_to=cart&display_size=compact&has_image=true&product_handle="+ $scope.selectedItem.ProductHandle  +"&shop=gayamstore.myshopify.com&embed_type=product&r=";
	    $scope.ProductHandleURL = "https://widgets.shopifyapps.com/embed/product?eid=0&button_text_color=ffffff&button_background_color=7db461&buy_button_text=Buy now&redirect_to=checkout&display_size=compact&has_image=true&product_handle=" + $scope.selectedItem.ProductHandle + "&shop=gayamstore.myshopify.com&embed_type=product&r=";
	    //dataServices.loadProductInfo(item.ProductNo).then(function (data) {
	    //    $scope.selectedItem = data;
	    //});
	    //$scope.$apply();
	}

	$scope.closeItemSelected = function () {
	    $scope.isItemSelected = false;
	    $scope.ProductHandleURL = "";
	}

	function loadItemsData() {

	    dataServices.loadshopItems().then(function (data) {
	        dataServices.shopItems = data.data.data;
	        handlePlusForItems();
	    });
	}
	loadItemsData();

    //shoppify
	//document.getElementById('ShopifyEmbedScript') || document.write('<script type="text/javascript" src="https://widgets.shopifyapps.com/assets/widgets/embed/client.js" id="ShopifyEmbedScript"><\/script>');

}]);