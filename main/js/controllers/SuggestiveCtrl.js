/*jshint esversion: 6 */
angular.module('plantMasters').controller('SuggestiveCtrl', function ($scope, mainSearchService){

  $scope.searchName = () => {
    mainSearchService.searchName($scope.search);

  };
  // Gets call when the input changes //
  $scope.plantSuggest = function() {
    mainSearchService.searchName($scope.search);
  };
});