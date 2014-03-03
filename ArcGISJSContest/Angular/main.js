var app = angular.module("twitterApp", ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/connect', {
        template: '<h3>Connnect with twitter</h3><button ng-click="connect()" class="btn btn-privary">connect with twitter</button>',
        controller: 'connectCtrl'
    }).when('/tweets', { template: '<div><ul ng-repeat="tweet in tweets"><li>{{tweet.text}}</li></ul></div>', controller: 'twitterCtrl' }
    ).otherwise({ redirectTo: '/connect' });});
app.factory('tweetService', function() {
    return {
        twitter: '',
        getTweets: function() {
            if (twitter) {
                
            }
        }
    };
});
app.controller('connectCtrl', [
    '$scope', '$rootScope', '$location', 'tweetService', function($scope, $rootScope, $location, tweetService) {
        OAuth.initialize("Adhl2MaaPcCjRxrBpshUhDbFYZc");
        $scope.connect = function() {
            OAuth.popup("twitter", function(err, res) {
                if (err) return alert(err);
                $rootScope.twitter = res;
                $location.path('/tweets');
                $scope.$apply();
            });};}]);
app.controller('twitterCtrl', ['$scope', '$rootScope', '$resource', function($scope, $resource) {
    $scope.twitter.get('/1.1/search/tweets.json?q=football&count=100').done(function(data) {
        $scope.tweets = data.statuses;
        console.log($scope.tweets);
        $scope.$apply();
    });
}]);
