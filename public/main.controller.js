'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
			// RESOLVE!
				resolve: {
					    users: function(User){
		    // sends a GET request to /api/users
		    // remember, js-data constructs the route by 
		    // concatenating the basepath and the name of our resource
		    return User.findAll()
		    // under the hood, js-data maps over this array, instantiates each object as an instance of the User class, and injects the users in the cache : adding them to an array : 
		  /* 
		  .then(function(userObjects){
		     return userObjects.map(function(obj){  
		       var user = User.createInstance(obj)
		        return User.inject(user)
		    })
		   })
		   */
		   },
		 // injecting the users resolve-service into posts to 
		 // avoid race conditions 
		    posts: function(Post, users) {
		        // GET --> /api/posts
		        return Post.findAll({}, {bypassCache: true})
		    }
		}
	})
})

app.controller('MainController', function($scope, posts, $stateParams) {

 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
 	$scope.allPosts = posts;
 	console.dir($stateParams);
    //console.log('posts: ', posts);
})


