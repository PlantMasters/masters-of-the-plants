angular.module('plantMasters').controller('myGardenCtrl', function($scope, gardenRef, gardenService) {
    $scope.myGarden = gardenRef.data
    $scope.removePlant = function(plant) {
        var c = confirm('Are you sure you want to remove this plant from your garden?');
        if(c === true) {
            gardenService.deletePlant(plant)
            .then(function(response) {
                console.log(response.data);
                $scope.myGarden = response.data;
            })
        }
    }
    $scope.checkMyGarden = function() {
        if (gardenRef.data.length === 0) {
            console.log('nothing growing');
            return false
        } else {
            return true
        }
    }
});
