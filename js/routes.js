angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.cameraTabDefaultPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/cameraTabDefaultPage.html',
        controller: 'cameraTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('challenges', {
    url: '/page5',
    templateUrl: 'templates/challenges.html',
    controller: 'challengesCtrl'
  })

  .state('makeTheMonkeyJump', {
    url: '/page6',
    templateUrl: 'templates/makeTheMonkeyJump.html',
    controller: 'makeTheMonkeyJumpCtrl'
  })

  .state('goals', {
    url: '/page7',
    templateUrl: 'templates/goals.html',
    controller: 'goalsCtrl'
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page9',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('account', {
    url: '/page10',
    templateUrl: 'templates/account.html',
    controller: 'accountCtrl'
  })

  .state('expenses', {
    url: '/page11',
    templateUrl: 'templates/expenses.html',
    controller: 'expensesCtrl'
  })

  .state('stats', {
    url: '/page12',
    templateUrl: 'templates/stats.html',
    controller: 'statsCtrl'
  })



  

});