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
    SpotifyProvider.setAuthToken("BQCmeksN6bLlUpLrnF3l7jO-Sl6uX5f8sLExfSZzahIoRo5wxD5eyYVWeBWEoFhDewdX4QoYvefTtm5KyWzvKvRTwC6OK_qs1eOLXxRmCFsUTdecxiOQKuniek2Sp190i-W95GJ55sT0qFI")
  })

})();
