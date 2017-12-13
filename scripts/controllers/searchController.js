(function() {
    function searchController(SpotifyService, $location) {
      var vm = this;

      vm.toPlaylist = function(music) {
        console.log("working");
        SpotifyService.setData(music).then(function() {
          $location.path("/playlist");

        });
      }
    }

    angular
      .module('app')
      .controller('searchController', searchController)

})()
