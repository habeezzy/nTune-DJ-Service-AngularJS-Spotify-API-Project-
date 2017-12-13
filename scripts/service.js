(function() {
  function SpotifyService(Spotify) {
var info = {};
    return {
      setData: setData,
      getData: getData
    };
   function setData(category) {
     return Spotify.getCategoryPlaylists(category).then(function (data) {
     info = data;
    })
    }
    function getData() {
      return info;
    }
   }

  angular
  .module('app')
  .factory("SpotifyService", SpotifyService);
})();
