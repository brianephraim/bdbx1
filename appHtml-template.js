;(function(global){
	// UglifyJS define hack.  Used for unit testing.
	if (typeof BARNDOORBUTTONIZER_APP_NOW === 'undefined') {
	  BARNDOORBUTTONIZER_APPHTML_NOW = function () {
	    return +new Date();
	  };
	}

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//EXPECTS <whatev class="catSlides"></whatev> in the DOM
	var app = function($,barndoorbuttonizer){
		var html = '<%= appHtml %>';
		console.log(html)
		return html;
	};


	if (typeof exports === 'object') {
		// nodejs
		module.exports = app($,barndoorbuttonizer);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define([],function(){ 
			return app.apply(null,arguments);
		});
	} else if (typeof global.app === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.app = app($,barndoorbuttonizer);
	}



})(this);


