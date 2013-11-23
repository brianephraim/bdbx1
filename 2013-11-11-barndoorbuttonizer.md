---
layout: post
title: "Barndoorbuttonizer"
description: ""
category: 
tags: [dev]
git_widget_repo_name: "barndoorbuttonizer"
---

{% include JB/setup %}

description

{% include BE/github_widget %}

<link rel="stylesheet" href="{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/css/barndoorbuttonizer.css" media="screen" type="text/css" />
<link rel="stylesheet" href="{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/css/app.css" media="screen" type="text/css" />
<div class="barndoorbuttonizerBlogWidgetWrap widgetWrap">
	<div class="barndoorbuttonizerWidgetFrame">
		<h1>Single-image barndoor button generator</h1>
        <p>Click this image to use it as a sample: <img src="cloud.png" class="cloud" /> . See if you can get the red, green, and blue lines to repeat!</p>
        <div id="barndoorbuttonizerStatus">Or drag an image from you hard drive to the area below ...</div>
        <div id="barndoorbuttonizerDrop">Drop files here.</div>
        <div id="barndoorbuttonizerList"> </div>
	</div>
</div>
<script> 
	inlineScript.barndoorbuttonizer = require.config({
		paths: {
	 		'jQuery': '{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/jquery.min'
	 	},
	 	shim: {
	        'jQuery': {
	            exports: '$'
	        }
	    },
     	 context: "barndoorbuttonizer",
         baseUrl: "{{ site.JB.WIDGET_PATH }}/barndoorbuttonizer/"
    });
	inlineScript.barndoorbuttonizer(['js/app']);
</script>