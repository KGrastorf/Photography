angular.module("photoApp").directive("y1Dir", function($document) {
    return {
   template: '{{ynp1.img}}','{{ynp1.data}}'
 };
});
.directive("y2Dir", function($document) {
   return {
      template: '{{ynp2.img}}', '{{ynp2.data}}'
   }
});
