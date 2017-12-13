(function() {
  var playlistComponent = {
    templateUrl: "partials/playlist.html",


     controller : function (SpotifyService) {
       var vm  = this;
       var data = SpotifyService.getData();
       vm.getPlaylist = data.data.playlists.items;
       console.log(vm.getPlaylist);
     }

  }
  angular
  .module("app")
  .component("playlistComponent", playlistComponent)
})();
