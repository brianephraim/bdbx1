;(function(global){
	// UglifyJS define hack.  Used for unit testing..
	if (typeof BARNDOORBUTTONIZER_NOW === 'undefined') {
	  BARNDOORBUTTONIZER_NOW = function () {
	    return +new Date();
	  };
	}

	if (typeof BARNDOORBUTTONIZER === 'undefined') {
	  var global = (function(){return this;})();
	}


	var makeBarndoorbuttonizerObject = function($){
		console.log('makeBarndoorbuttonizerObject')
		var barndoorbuttonizer = function(options){
//00000000
			$(document).ready(function() {
			  var $cloud = $('.cloud');
			  $cloud.on('click',function(){
			      analyzeImage($('.cloud')[0])
			  })
			});
			if(window.FileReader) { 
    
    			function analyzeImage(img){
			        var $body = $('.barndoorbuttonizerWidgetFrame');
			        var $img = $(img);
			        var imgWidth = $img.width();
			        var imgHeight = $img.height();
			        console.log(imgWidth,imgHeight)
			        var $ruler = $('<div class="ruler"></div>');
			        var $pointer = $('<div class="pointer"><div class="pointerInner"></div></div>');
			        
			        var $controlPanel = $('<div class="controlPanel"></div>');
			        var $control = $('<input type="range" name="points" min="0" max="'+(imgWidth - 1)+'" />');
			        var $buttonPlus = $('<button>+</button>');
			        var $buttonMinus = $('<button>-</button>');
			        var $controlValue = $('<div class="controlValue"></div>');
			        var $cssProduct = $('<div class="cssProduct"></div>');
			        var $demo = $('<h3>Rendered Result</h3><div class="demoContainer clearfix"><div class="demo" style="">Test Test Test Test Test Test Test Test</div></div>');
			        
			        var $tweakPanel = $('<div class="tweakPanel"></div>');
			        var $leftPadding = $('<input type="number" min="0" value="0"/>');
			        var $rightPadding = $('<input type="number" min="0" value="0"/>');
			        var $topPadding = $('<input type="number" value="0"/>');
			        var $textToUse = $('<input type="text" />');
			        var $colorToUse = $('<input type="text" />');
			        $tweakPanel.append($leftPadding);
			        $tweakPanel.append(' - <label>left padding</label><br/> ');
			        
			        $tweakPanel.append($rightPadding);
			        $tweakPanel.append(' - <label>right padding</label><br/> ');
			        
			        $tweakPanel.append($topPadding);
			        $tweakPanel.append(' - <label>top padding tweak</label>');
			       
			        $controlPanel.append($buttonMinus);
			        $controlPanel.append($control);
			        $controlPanel.append($buttonPlus);
			        
			        $body.append('<h3>Tweak padding</h3>');
			        $body.append($tweakPanel);
			        
			        $body.append('<h3>Text to demo</h3>');
			        
			        $body.append($textToUse);
			        $body.append(' - <label>Text to demo</label></br>');
			        
			        $body.append($colorToUse);
			        $body.append(' - <label>Font color</label>');
			        
			        $body.append('<h3>Set repeated pixel position</h3>');
			        $body.append($controlPanel);
			        $body.append($controlValue);
			        $body.append($ruler);
			        $body.append($demo);
			        $body.append('<h3>Generated CSS</h3>');
			        $body.append($cssProduct);
			        $ruler.append($pointer);
			        $ruler.append($img);
			        
			        $textToUse.on('change',function(){
			            var text = $textToUse.val()
			            $demo.find('.demo').text(text)
			        })
			        
			        $colorToUse.on('change',function(){
			            var text = $colorToUse.val()
			            $demo.find('.demo').css('color',text)
			        })
			        
			        $buttonPlus.on('click',function(){
			            var val = parseInt($control.val());
			            $control.val(val+1);
			            $control.trigger('change')
			        })
			        $buttonMinus.on('click',function(){
			            var val = parseInt($control.val());
			            $control.val(val-1);
			            $control.trigger('change')
			        })
			        $control.add($leftPadding).add($rightPadding).add($topPadding).on('change',function(){
			            var leftPadding = $leftPadding.val();
			            var rightPadding = $rightPadding.val();
			            var topPadding = $topPadding.val();
			            
			            
			            var val = parseInt($control.val());
			            $controlValue.html(val);
			            console.log(imgWidth-val)
			            $pointer.css('left',(imgWidth-val -1)+'px')
			            var borderWidthValue  = imgHeight+'px '+val+'px 0px '+(imgWidth-val)+'px';
			            function getBorderImageValue(url){
			                return 'url('+url+') '+imgHeight+' '+val+' 0 '+((imgWidth-val)-1)+' repeat'
			            }

			            function returnStyles(tab,br,url){
			                return ''+
			                    '.demo{'+ br +
			                           tab + 'height:'+imgHeight+'px;'+ br +
			                           tab + 'line-height:'+imgHeight+'px;'+ br +
			                           tab + 'padding:0px '+rightPadding+'px 0px '+leftPadding+'px;'+ br +
			                    '}'+ br +
			                    '.demo:after{'+ br +
			                           tab + 'content:"";'+ br +
			                           tab + 'display: block;'+ br +
			                           tab + 'margin: -'+(imgHeight - -topPadding)+'px '+(-rightPadding)+'px 0 '+ (-leftPadding)+'px;'+ br +
			                           tab + 'border-width: '+borderWidthValue+';'+ br +
			                           tab + '-webkit-border-image: '+ getBorderImageValue(url)+';'+ br +
			                         '}';
			            }
			            $cssProduct.html('<p>'+returnStyles('&nbsp;&nbsp;&nbsp;&nbsp;','</br>','yourImageUrl') +'</p>');
			            console.log()
			            $body.append('<style type="text/css">'+
			                         returnStyles('','',img.src)+
			                         '</style>');
			            //$cssProduct.html('{<br/>'+
			                   //          '&nbsp;&nbsp; border-width:'+borderWidthValue+';<br/>'+
			                   //          '&nbsp;&nbsp; -webkit-border-image:'+getBorderImageValue('yourImageUrl')+';<br/>'+
			                   //          '}')
			                   
			            
			        })
			        $control.trigger('change')        
    			}
			 	var drop; 
				addEventHandler(window, 'load', function() {
				    var status = document.getElementById('barndoorbuttonizerStatus');
				    drop   = document.getElementById('barndoorbuttonizerDrop');
				    var list   = document.getElementById('barndoorbuttonizerList');
				  	
				    function cancel(e) {
				      if (e.preventDefault) { e.preventDefault(); }
				      return false;
				    }
				  
				    // Tells the browser that we *can* drop on this target
				    addEventHandler(drop, 'dragover', cancel);
				    addEventHandler(drop, 'dragenter', cancel);

					addEventHandler(drop, 'drop', function (e) {
						e = e || window.event; // get window.event if e argument missing (in IE)   
						if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

						var dt    = e.dataTransfer;
						var files = dt.files;
						for (var i=0; i<files.length; i++) {
						    var file = files[i];
						    var reader = new FileReader();
						      
						    //attach event handlers here...
						   
						    reader.readAsDataURL(file);
							addEventHandler(reader, 'loadend', function(e, file) {
							    var bin           = this.result; 
							    var newFile       = document.createElement('div');
							    newFile.innerHTML = 'Loaded : '+file.name+' size '+file.size+' B';
							    list.appendChild(newFile);  
							    var fileNumber = list.getElementsByTagName('div').length;
							    status.innerHTML = fileNumber < files.length 
							                     ? 'Loaded 100% of file '+fileNumber+' of '+files.length+'...' 
							                     : 'Done loading. processed '+fileNumber+' files.';

							    var img = document.createElement("img"); 
							    img.file = file;   
							    img.src = bin;
							    list.appendChild(img);
							    analyzeImage(img)
							}.bindToEventHandler(file));
						}
						return false;
					});
					Function.prototype.bindToEventHandler = function bindToEventHandler() {
						var handler = this;
						var boundParameters = Array.prototype.slice.call(arguments);
						//create closure
						return function(e) {
						  e = e || window.event; // get window.event if e argument missing (in IE)   
						  boundParameters.unshift(e);
						  handler.apply(this, boundParameters);
						}
					};
				});
			} else { 
			  document.getElementById('barndoorbuttonizerStatus').innerHTML = 'Your browser does not support the HTML5 FileReader.';
			}
			function addEventHandler(obj, evt, handler) {
			    if(obj.addEventListener) {
			        // W3C method
			        obj.addEventListener(evt, handler, false);
			    } else if(obj.attachEvent) {
			        // IE method.
			        obj.attachEvent('on'+evt, handler);
			    } else {
			        // Old school method.
			        obj['on'+evt] = handler;
			    }
			}
//00000000
        };
		return barndoorbuttonizer;
	}
	//return objInstance;

	if (typeof exports === 'object') {
		// nodejs
		module.exports = makeBarndoorbuttonizerObject($,tools);
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jQuery'],function(){
			return makeBarndoorbuttonizerObject.apply(null,arguments);
		});
	} else if (typeof global.barndoorbuttonizer === 'undefined') {
		// Browser: Make `Tweenable` globally accessible.
		global.barndoorbuttonizer = makeBarndoorbuttonizerObject($,tools);
	}



})(this);