'use strict';

var gravatar = require('gravatar');

module.exports = ['$rootScope', function ($rootScope) {
  var userFactory = {};

  userFactory.navigationItems = [
    {title: '$USER', sref: 'user'},
    {title: '$VEHICLES', sref: 'user.vehicle'},
    {title: '$SETTINGS', sref: 'user.setting'},
    {title: '$COMPETITIONS', sref: 'user.competition'}
  ];

  userFactory.userData = {};

  $rootScope.$on('login-logged-in', function (event, userData) {
    userFactory.userData = userData;

    // TODO: Remove once the server sends the correct data.
    userFactory.userData.id = userFactory.userData._id;

    $rootScope.$emit('user-loaded', { name: userData.name, imageUrl: userData.imageUrl } );
  });

  userFactory.getUserImage = function (pixelSize) {
    return gravatar.url(userFactory.userData.email, {s: pixelSize});
  };

  return userFactory;
}];
