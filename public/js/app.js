angular.module('movieReviewApp')
  .controller('HomeController', HomeController)
  .controller('AuthController', AuthController)
  .controller('MovieController', MovieController)
  // .controller('ReviewController', ReviewController)
  .factory('AuthTokenFactory', AuthTokenFactory)
  .factory('AuthInterceptor', AuthInterceptor)