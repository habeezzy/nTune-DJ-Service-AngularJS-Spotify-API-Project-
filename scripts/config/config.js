(function() {

  angular
  .module("app")
  .config(function($routeProvider, SpotifyProvider) {
    $routeProvider
    .when("/home", {
      template: "<search-component></search-component>",
      // controller: "searchController as ctrl"
    })
    .when("/playlist", {
      template: "<playlist-component></playlist-component>"
    });
    SpotifyProvider.setClientId('fd36055cd7f8457cbc2e621683f0c86a');
    SpotifyProvider.setAuthToken("BQBNH8QrDYlmU1Fglrpj_MHsjIENMyiMgpT7NgKn0wV_sOux0xvYUe_y5wNqVUlhqKUrALqE4dsHDsOKGyXeUM3mIcavWsk8rOw8uq5XBOARW-l9SaRCG-RejzD6n4PMbzTPPUabPhm-")
  })

})();
