angular.module('myApp.component', [])
   .directive('myDraggable', ['$document', function($document) {
       return {
           //priority: 100001,
           restrict:'A',
           link: function (scope, element, attr) {

               //handle top and left
               function getPosition(element) {
                   var xPosition = 0;
                   var yPosition = 0;

                   while (element) {
                       xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                       yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                       element = element.offsetParent;
                   }
                   return { x: xPosition, y: yPosition };
               }

               var topPer = ((element[0].offsetParent.offsetHeight) * scope.item.ptop) / 100;

               var leftPer = ((element[0].offsetParent.offsetWidth) * scope.item.pleft) / 100;
               var startX = 0, startY = 0, x = topPer, y = leftPer;

               element.css({
                   position: 'absolute',
                   border: '1px solid red',
                   backgroundColor: 'lightgrey',
                   cursor: 'pointer',
                   top: scope.item.ptop + '%',
                   left: scope.item.pleft + '%'
               });
             
               element.on('mousedown', function(event) {
                   // Prevent default dragging of selected content
                   var parentPosition = getPosition(event.currentTarget.offsetParent);
                   event.preventDefault();
                   startX = event.pageX -  y;
                   startY = event.pageY  - x;
                   $document.on('mousemove', mousemove);
                   $document.on('mouseup', mouseup);
               });

               function mousemove(event) {
                   y = event.pageY - startY;
                   x = event.pageX - startX;
                  
                   var finalPositiontop = element[0].attributes["style"].value.split(';')[3].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");
                   var finalPositionleft = element[0].attributes["style"].value.split(';')[4].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");



                   var top = Math.round(((finalPositiontop) * 100) / element[0].offsetParent.offsetHeight);
                   var left = Math.round(((finalPositionleft) * 100) / element[0].offsetParent.offsetWidth);
                   if(top+1>=0&&left+1>=0&&top-1<=100 && left-1<=100)
                   element.css({
                       top: y + 'px',
                       left: x + 'px'
                   });
               }

               function mouseup() {
                   $document.off('mousemove', mousemove);
                   $document.off('mouseup', mouseup);
                   //handle top left
                   var finalPositiontop = element[0].attributes["style"].value.split(';')[3].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");
                   var finalPositionleft = element[0].attributes["style"].value.split(';')[4].split(':')[1].replace("px", "").replace("%", "").replace(" ", "");

                  

                   var top =Math.round( ((finalPositiontop) * 100) / element[0].offsetParent.offsetHeight);
                   var left = Math.round(((finalPositionleft) * 100) / element[0].offsetParent.offsetWidth);
                   scope.item.ptop = element[0].attributes["style"].value.split(';')[3].split(':')[1].indexOf("%")>-1 ? finalPositiontop :top ;
                   scope.item.pleft = element[0].attributes["style"].value.split(';')[4].split(':')[1].indexOf("%") > -1 ? finalPositionleft : left;
                   if (scope.item.ptop >= 0 && scope.item.pleft >= 0 && scope.item.ptop <= 100 && scope.item.pleft <= 100)
                   element.css({
                       top: scope.item.ptop + '%',
                       left: scope.item.pleft + '%'
                   });
               }
           }

       };
   }])

  
      .directive('myTest', ['$compile', function ($compile) {
          return {
              scope: {
                 

              },
              template: "<div>hello chaitanya</div>",


              restrict: 'E',
              transclude: true,

              link: function (scope, element, attr, controller) {
                  var data;


              }


          }
      }]);