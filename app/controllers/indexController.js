politify.controller('IndexCtrl', function ($scope, $mdSidenav, $state) {
  $scope.menuItems = [
    { name: 'summary', path: 'summary' },
    { name: 'activity', path: 'activity' },
    { name: 'social media', path: 'socialMedia' },
    { name: 'contact', path: 'contact' },
  ];

  $scope.title = 'politify';

  $scope.go = function (path, title) {
        $state.go(path);
        $scope.title = title;
    };

    $scope.toggleLeft = function () {
        $mdSidenav('left')
              .toggle();
    };

    $scope.menuIcon = 'menu';
    $scope.menuToggle = function () {
        if ($scope.menuIcon == 'menu') {
            $mdSidenav('left')
              .open();
            $scope.menuIcon = 'arrow_back';
        }
        else {
            $mdSidenav('left')
              .close();
            $scope.menuIcon = 'menu';
        }
    };
});
