angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('iSCAP.welcomeToISCAP', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/welcomeToISCAP.html',
        controller: 'welcomeToISCAPCtrl'
      }
    }
  })

  .state('iSCAP.hotelInformation', {
    url: '/Page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hotelInformation.html',
        controller: 'hotelInformationCtrl'
      }
    }
  })

  .state('iSCAP.speakers', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/speakers.html',
        controller: 'speakersCtrl'
      }
    }
  })

  .state('iSCAP.schedule', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('iSCAP.events', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('iSCAP.messages', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('iSCAP.replies', {
    url: '/page7',
	params: {
		eventsId: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/replies.html',
        controller: 'repliesCtrl'
      }
    }
  })

  .state('iSCAP.fAQ', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fAQ.html',
        controller: 'fAQCtrl'
      }
    }
  })

  .state('iSCAP', {
    url: '/side-menu21',
    templateUrl: 'templates/iSCAP.html',
    controller: 'iSCAPCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});