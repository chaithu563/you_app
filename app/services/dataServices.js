//'use strict';

angular.module('myApp.service', [])

.service('dataServices', ['$http', '_', '$q', function ($http, _, $q) {

    var blazerItem = "http://www.happiepug.com/products/black-blazer";
    var carItem = "http://www.happiepug.com/products/car";
    var capItem = "http://www.happiepug.com/products/cap";
    var DiningItem = "http://www.pepperfry.com/two-seater-dining-set-in-white-colour-by-ventura-1265359.html?type=sel";
    var CycleItem = "http://www.happiepug.com/products/cycle";
    var glassItem = "http://www.happiepug.com/products/construction-glass";
    var tableItem = "http://www.happiepug.com/products/office-table";
    var chairItem = "http://www.happiepug.com/products/office-chair";
    var cupItem = "http://www.happiepug.com/products/cup";
    var shirtItem = "http://www.happiepug.com/products/men-t-shirt";

    var mentradItem = "http://www.happiepug.com/products/men-traditional-dress";
    var spectItem = "http://www.happiepug.com/products/spectacles";
    var wallDocrItem = "http://www.happiepug.com/products/wall-decorator";
    var ladiesDressItem1 = "http://www.happiepug.com/products/ladies-party-dress";
    var ladiesDressItem2 = "http://www.happiepug.com/products/punjabee-dress";
    var ladiesDressItem3 = "http://www.happiepug.com/products/punjabee-dress";

    var menStoleItem = "http://www.happiepug.com/products/men-stole";
    var tileItem = "http://www.happiepug.com/products/tiles";
    var poojaItems = "http://www.happiepug.com/products/pooja-items";
    var goldRingItem = "http://www.happiepug.com/products/gold-ring";
    var watchItem = "http://www.happiepug.com/products/watch";
    var chainItem = "http://www.happiepug.com/products/gold-chain";
    var phoneUrl = "http://www.happiepug.com/products/iphone-4s";
    var sofaItem = "http://www.happiepug.com/products/sofa";
    var bhudhaItem = "http://www.happiepug.com/products/bhudha-item";
    var sareeItem = "http://www.happiepug.com/products/saree";
    var earringItem = "http://www.happiepug.com/products/ear-ring";
    var videos = [
           { name: 'Attharinti Daredi', code: '1' },
           { name: 'Aagadu', code: '2' },
           { name: 'Athadu', code: '3' },
           { name: 'Avakay Biryani', code: '4' },

           { name: 'Bhartiyudu', code: '5' },
           { name: 'Bava', code: '6' },
           { name: 'Bhuzzigadu', code: '7' },

           { name: 'Chinnadanee', code: '8' },
           { name: 'Chukkalo Chnadrudu', code: '9' },

           { name: 'Dadi', code: '10' },
           { name: 'Don', code: '11' },
           { name: 'Doosukosta', code: '12' },


           { name: 'Gamyam', code: '13' },
           { name: 'Godavari', code: '15' },




           { name: 'Jilla', code: '16' },
           { name: 'Gabbar Sing', code: '18' },

           { name: 'Munna', code: '19' },

           { name: '3Idiots', code: '20' },
           { name: 'Businessman', code: '21' },


           { name: 'Sreemanthudu', code: '22' },
           { name: 'Nenokkadee', code: '23' },

           { name: 'Bahubali', code: '24' }


    ];

    var items = [
				{ id: 6, name: "cycle", x: 56, y: 40, ST: 9, ET: 10, imgURL: "cycle.jpg", redURL: CycleItem, price: 34000 },
                { id: 1, name: "Blazer", x: 40, y: 47, ST: 11, ET: 13, imgURL: "Blazer.jpg", redURL: blazerItem, price: 5000 },
				{ id: 7, name: "Car", x: 62, y: 11, ST: 11, ET: 13, imgURL: "car.jpg", redURL: carItem, price: 1000000 },
			    { id: 8, name: "Glass", x: 24, y: 67, ST: 11, ET: 15, imgURL: "glass.jpg", redURL: glassItem, price: 1200 },
				 { id: 9, name: "Table", x: 70, y: 79, ST: 14, ET: 15, imgURL: "table.jpg", redURL: tableItem, price: 23000 },
				 { id: 10, name: "Chair", x: 71, y: 64, ST: 14, ET: 15, imgURL: "chair.jpg", redURL: chairItem, price: 2500 },
				  { id: 18, name: "Shirt", x: 50, y: 50, ST: 14, ET: 15, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 19, name: "Tiles", x: 81, y: 34, ST: 14, ET: 15, imgURL: "Tiles.jpg", redURL: tileItem, price: 250 },
				 { id: 11, name: "Table", x: 66, y: 65, ST: 19, ET: 20, imgURL: "dinning.jpg", redURL: DiningItem, price: 1001 },
				 //{ id: 12, name: "Chair", x: 69, y: 10, ST: 19, ET: 20, imgURL: "chair.jpg", redURL: chairItem, price: 1000 },
				 { id: 20, name: "Spectales", x: 30, y: 31, ST: 19, ET: 20, imgURL: "eyeglass.jpg", redURL: spectItem, price: 1100 },
				 { id: 13, name: "Cup", x: 53, y: 71, ST: 19, ET: 20, imgURL: "cup.jpg", redURL: cupItem, price: 450 },
				 { id: 13, name: "Cup", x: 83, y: 52, ST: 21, ET: 24, imgURL: "cup.jpg", redURL: cupItem, price: 450 },
				 { id: 17, name: "Shirt", x: 68, y: 46, ST: 21, ET: 24, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 //{ id: 12, name: "Chair", x: 69, y: 20, ST: 21, ET: 24, imgURL: "chair.jpg", redURL: chairItem, price: 1000 },
				 { id: 27, name: "Men Dress", x: 52, y: 76, ST: 25, ET: 26, imgURL: "menstraditional.jpg", redURL: mentradItem, price: 11000 },
				 { id: 28, name: "Mens Stole", x: 35, y: 33, ST: 25, ET: 26, imgURL: "mensstole.jpg", redURL: menStoleItem, price: 1600 },
				 { id: 29, name: "Pooja Items", x: 85, y: 45, ST: 29, ET: 30, imgURL: "poojaitems.jpg", redURL: poojaItems, price: 11000 },
				 { id: 22, name: "Wall Decor", x: 45, y: 80, ST: 35, ET: 37, imgURL: "Wall-Decor.jpg", redURL: wallDocrItem, price: 1200 },
				 { id: 23, name: "Dress", x: 49, y: 65, ST: 35, ET: 37, imgURL: "ladiesdress1.jpg", redURL: ladiesDressItem1, price: 2400 },
				 { id: 4, x: 59, y: 11, name: "Dinning", ST: 35, ET: 37, imgURL: "dinning2.jpg", redURL: DiningItem, price: 19000 },
				 { id: 14, name: "Cup", x: 74, y: 32, ST: 35, ET: 37, imgURL: "cup.jpg", redURL: cupItem, price: 450 },
			     { id: 2, x: 20, y: 34, name: "Cap", ST: 39, ET: 40, imgURL: "cap.jpg", redURL: capItem, price: 1003 },
			     { id: 21, name: "Shirt", x: 52, y: 32, ST: 39, ET: 40, imgURL: "golf-shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 15, name: "Shirt", x: 48, y: 29, ST: 41, ET: 42, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 25, name: "Dress", x: 56, y: 43, ST: 41, ET: 42, imgURL: "ladiesdress2.jpg", redURL: ladiesDressItem2, price: 2400 },
				 { id: 26, name: "Dress", x: 53, y: 63, ST: 41, ET: 42, imgURL: "ladiesdress3.jpg", redURL: ladiesDressItem3, price: 2400 },
				 { id: 15, name: "Shirt", x: 58, y: 49, ST: 43, ET: 43, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 25, name: "Dress", x: 56, y: 43, ST: 43, ET: 43, imgURL: "ladiesdress2.jpg", redURL: ladiesDressItem2, price: 2400 },
                 //{ id: 23, name: "Ladies Dress", x: 19, y: 45, ST: 49, ET: 65, imgURL: "ladiesdress1.jpg", redURL: ladiesDressItem1, price: 3000 },
				 { id: 24, name: "Shirt", x: 54, y: 33, ST: 35, ET: 37, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 40, name: "Ring", x: 44, y: 34, ST: 45, ET: 47, imgURL: "ladiesearring.jpg", redURL: earringItem, price: 12000 },
				 { id: 30, name: "Dress", x: 70, y: 50, ST: 45, ET: 47, imgURL: "ladiesdress3.jpg", redURL: ladiesDressItem3, price: 2400 },
				  { id: 24, name: "Shirt", x: 74, y: 43, ST: 48, ET: 49, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				   { id: 24, name: "Shirt", x: 74, y: 43, ST: 54, ET: 44, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 31, name: "Dress", x: 64, y: 71, ST: 54, ET: 55, imgURL: "ladiesdress4.jpg", redURL: ladiesDressItem2, price: 2400 },



				 { id: 32, name: "Ring", x: 37, y: 66, ST: 61, ET: 62, imgURL: "goldring.jpg", redURL: goldRingItem, price: 10000 },
				 { id: 33, name: "Watch", x: 73, y: 75, ST: 61, ET: 62, imgURL: "watch.jpg", redURL: watchItem, price: 23000 },
			     { id: 34, name: "Chain", x: 74, y: 43, ST: 61, ET: 62, imgURL: "goldchain.jpg", redURL: chainItem, price: 14000 },
				 { id: 35, name: "Phone", x: 50, y: 56, ST: 61, ET: 62, imgURL: "phone.jpg", redURL: phoneUrl, price: 21000 },


				  { id: 16, name: "Shirt", x: 67, y: 67, ST: 77, ET: 82, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },
				 { id: 36, name: "Sofa", x: 67, y: 33, ST: 77, ET: 82, imgURL: "sofa.jpg", redURL: sofaItem, price: 31100 },
			     { id: 37, name: "Bhudha", x: 55, y: 30, ST: 77, ET: 82, imgURL: "budha.jpg", redURL: bhudhaItem, price: 1100 },
				   { id: 3, x: 60, y: 63, name: "car", ST: 86, ET: 86, imgURL: "car.jpg", redURL: carItem, price: 1000000 },


				{ id: 38, name: "Saree", x: 50, y: 50, ST: 109, ET: 115, imgURL: "saree.jpg", redURL: sareeItem, price: 2500 },
				 { id: 39, name: "Shirt", x: 50, y: 40, ST: 109, ET: 115, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },

				 { id: 41, name: "Shirt", x: 51, y: 49, ST: 94, ET: 96, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },


				{ id: 42, name: "Shirt", x: 41, y: 44, ST: 117, ET: 118, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },

                { id: 5, x: 55, y: 44, name: "cycle", ST: 117, ET: 118, imgURL: "cycle.jpg", redURL: CycleItem, price: 34000 },

				{ id: 42, name: "Shirt", x: 51, y: 54, ST: 119, ET: 119, imgURL: "shirt.jpg", redURL: shirtItem, price: 1100 },





    ];

    //var MoviesService = "http://edarachaitanya.com/shop/HappiPugService/HappiPugService/api/movies";
    //var MovieItemsService = "http://edarachaitanya.com/shop/HappiPugService/HappiPugService/api/movieItems";

    var MoviesService = "http://localhost/shop/HappiPugService/HappiPugService/api/movies";
    var MovieItemsService = "http://localhost/shop/HappiPugService/HappiPugService/api/movieItems";

    var adminShoppifyURL = "https://gayamstore.myshopify.com/admin/products/";

    //Movie items operation

    this.loadshopItems = function () {
        var deferred = $q.defer();
        $http.get(MovieItemsService).then(
         function (data, status, headers, config) {
             deferred.resolve({
                 data: data

             });
         },
          function (data, status, headers, config) {
              console.log("failure message: " + JSON.stringify({ data: data }));

          }
         );
        return deferred.promise;
    };

    this.addNewItem = function (item) {

        var deferred = $q.defer();


        $http.post(MovieItemsService, JSON.stringify(item)).then(
            function (data, status, headers, config) {
                deferred.resolve({
                    data: data

                });
            },
             function (data, status, headers, config) {
                 console.log("failure message: " + JSON.stringify({ data: data }));
             }
            );
        return deferred.promise;

    };

    this.deleteItem = function (id) {
        var deferred = $q.defer();
        $http.delete(MovieItemsService+'/'+id).then(
           function (data, status, headers, config) {
               deferred.resolve({
                   data: data

               });
           },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
            }
           );
        return deferred.promise;
    };

    this.updateItem = function (item) {
        var deferred = $q.defer();
        $http.put(MovieItemsService, JSON.stringify(item)).then(
           function (data, status, headers, config) {
               deferred.resolve({
                   data: data

               });
           },
            function (data, status, headers, config) {
                console.log("failure message: " + JSON.stringify({ data: data }));
            }
           );
        return deferred.promise;


    };
    //end Movie items operation

    //shoppify operations
    this.loadProductInfo = function (id) {

        var deferred = $q.defer();
         $http.get(adminShoppifyURL + id+ ".json").then(
        function (data, status, headers, config) {
            deferred.resolve({
                data: data

            });
        },
         function (data, status, headers, config) {
             console.log("failure message: " + JSON.stringify({ data: data }));

         }
        );

      //  $http({
      //      method: 'JSONP',
      //      url: adminShoppifyURL + id + ".json"
      //  }).
      //success(function (data, status, headers, config) {
      //    deferred.resolve({
      //        data: data

      //    });
      //}).
      //error(function (data, status, headers, config) {
      //    //your code when fails
      //    console.log("failure message: " + JSON.stringify({ data: data }));
      //});


        return deferred.promise;

    }


}])


