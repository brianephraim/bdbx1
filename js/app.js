;(function(global){
	// UglifyJS define hack.  Used for unit testing.
	if (typeof APP_NOW === 'undefined') {
	  APP_NOW = function () {
	    return +new Date();
	  };
	}

	if (typeof APPS === 'undefined') {
	  var global = (function(){return this;})();
	}

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//EXPECTS <whatev class="catSlides"></whatev> in the DOM
	var app = function($,barndoorbuttonizer){
		$(function(){
    		$('.barndoorbuttonizerWidgetFrame').append('asdfasfasdfasdfasdfa');
    		var myBarndoorbuttonizer = new barndoorbuttonizer();
    		setTimeout(function(){$('.cloud').trigger('click')},10)
		});
		return 'Hi i am return app';
	};


	if (typeof exports === 'object') {
		// nodejs
		module.exports = app($,barndoorbuttonizer);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jQuery','js/barndoorbuttonizer'],function(){ 
			return app.apply(null,arguments);
		});
	} else if (typeof global.app === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.app = app($,barndoorbuttonizer);
	}



})(this);


