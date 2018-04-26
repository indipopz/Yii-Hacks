var TestController = (function($){
	return {
		listing: function(){
		  TestController.Listing.init();
		},
	};
}($));

TestController.Listing = (function($){
	var alertFunction = function(){
		alert('In Alert function');
	};
	var attachEvents = function(){
		alertFunction();
	};

	return {
	    init: function () {
	        attachEvents();
	    }
	};
}($));