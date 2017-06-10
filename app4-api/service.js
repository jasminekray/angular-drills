angular.module('apiApp').service('pokeService', function($http) {

  // this.pokemonData = function(){
  //   return $http({
  //     method: "GET",
  //     url: "http://pokeapi.co/api/v2/generation/3/"
  //   })
  // }


  this.pokemonData = function(){
    return $http({
      method: "GET",
      url: "http://pokeapi.co/api/v2/generation/3/"
    })
  }
})
