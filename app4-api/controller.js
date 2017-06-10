angular.module('apiApp').controller('pokeCtrl', function($scope, pokeService){
  $scope.pokemon = function(){
    pokeService.pokemonData().then(function(result){
      $scope.display = result.data.pokemon_species;
      console.log($scope.display);
    })
  }
  $scope.pokemon();
})
