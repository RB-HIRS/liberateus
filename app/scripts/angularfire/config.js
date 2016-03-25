angular.module('firebase.config', [])
  .constant('FBURL', 'https://liberateus.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['github'])

  .constant('loginRedirectPath', '/login');
