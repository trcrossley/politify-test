var politify = angular.module('Politify', ['ngMaterial', 'users'])

politify.config(function ($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet("app/assets/svg/avatars.svg", 128);
  })
  .run(function( $log ) {
    $log.debug("MyApp running");
});

politify.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue', {
      'default': '400',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': 'A100'
    })
    .accentPalette('amber')
    .warnPalette('red')
    .backgroundPalette('grey');
});
