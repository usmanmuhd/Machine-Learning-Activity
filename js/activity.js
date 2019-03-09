define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	requirejs(['domReady!'], function (doc) {

		// Initialize the activity.
		activity.setup();
		console.log('lala')
		require(['vue'], function (vue){
			var app = new vue({
				el: '#canvas',
				data: {msg: "Welcome to Machine Learning Activity"}
			})
		});
	});

});
