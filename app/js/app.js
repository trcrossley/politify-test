angular
  .module('MyApp', ['ngMaterial', 'users'])
  .config(function ($mdIconProvider) {
    $mdIconProvider.defaultIconSet("assets/svg/avatars.svg", 128);
  })
  .run(function( $log ) {
    $log.debug("MyApp running");
});
