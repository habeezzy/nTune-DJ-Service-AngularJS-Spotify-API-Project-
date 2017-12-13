(function() {
  var searchComponent = {
    templateUrl: "partials/search.html"
    ,
    controller: function(SpotifyService, $location) {
      var vm = this;

      vm.toPlaylist = function(music) {
        console.log("working");
        console.log(music);
        SpotifyService.setData(music).then(function() {
          $location.path("/playlist");

        });
      }
    }
  };
  angular
  .module('app')
  .component("searchComponent", searchComponent);
})();
