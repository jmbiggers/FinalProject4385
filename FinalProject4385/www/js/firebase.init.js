angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB4aSlGGsYkjaUJER93bxtREJCDyoUHLl8",
    authDomain: "iscap-confrence-information.firebaseapp.com",
    databaseURL: "https://iscap-confrence-information.firebaseio.com",
    storageBucket: "iscap-confrence-information.appspot.com",
  };
  firebase.initializeApp(config);

})


.service("AuthorBios", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("authorBios");
    var author = $firebaseArray(ref);
    
    var authorbio = {
        'author' : author
    };
    
        
    return authorbio;
}])

.service("Other", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("other");
    var items = $firebaseArray(ref);
    var otherInfo = {
        'other' : other
    };
    return otherInfo;
}])

.service("ScheduleInfo", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("schedule");
    var schedule = $firebaseArray(ref);
    var events = {
        'schedule' : schedule
    };
    return events;
}])

.service("Save", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("save");
    var items = $firebaseArray(ref);
    var saves = {
        'save' : save
    };
    return saves;
}])

.service("MessageInfo", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("message");
    var message = $firebaseArray(ref);
    var messages = {
        'message' : message
    };
    return messages;
}]);