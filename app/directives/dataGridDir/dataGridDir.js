angular.module('myApp.directives', [])

.directive('myGrid', ['$compile', function ($compile) {

    return {
        scope: {
            options: "=",
            data: "=",

        },
        template: "<table class=''> <tr ng-repeat='x in data'> " +
            "<td> <input type='text'  value='{{x.name}}' /></td> " +
          "  <td>  <input type='text' value= '{{ x.age }}' />  </td>" +
          "  <td>   <input type='text' value= '{{ x.desc }}' /> </td> " +

           " <td> <input type='button' ng-click='deleteItem(x.id)'   value='{{options}}' /></td>" +
        "</tr></table>",


        restrict: 'E',
        transclude: true,

        link: function (scope, element, attr, controller) {
            var data;


        }




    }


}])

.directive('myCombo', []);