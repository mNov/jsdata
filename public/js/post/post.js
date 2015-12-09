'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			users: function(User){
				// GET - > '/api/users'
				return User.findAll()
			}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, Post, $stateParams) {


	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/
	// $scope.post = function(id) {
	// 	Post.find(id)
	// 	.then()
	// }
	Post.find($stateParams.postId)
	.then(function(post) {
		$scope.post = post;
		console.log(post);
	})
	

	/*
		2. DELETE POST 
		create a function that destroys the post, adds an alert that the post has been 
		successfully deleted, and redirects to the main state. 
	*/
	// $scope.delete = function(id) {
	// 	Post.destroy();
	// }

	/*  IGNORE THIS!!!!
		3. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})