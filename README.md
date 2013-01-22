#[jQuery wetchBox Plugin](http://jquery.webscoming.com/wetchbox)

##Overview

wetchBox is a JavaScript plugin that makes long, unwieldy check boxes and radio buttons much more user-friendly. It is built on the top of the popular JavaScript framework jQuery and is both easy to implement and a snap to customize.

- jQuery support: 1.8.3+

For documentation, usage, and examples, see:  
http://jquery.webscoming.com/wetchbox

---

## How to use it

Download the Javascript plugin file from: wetchBox.zip, Github Repository.
Include the file in your website (after your include of jQuery)

```
<!-- Add jQuery library -->
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.3.min.js"><\/script>')</script>   
<!-- Add wetchBox -->    
<script type="text/javascript" src="jquery.wetchbox.js"></script>
```

Create a normal input elements, checkbox and radio buttons.

```
<!-- Add CheckBox All -->
<input class="demo" type="checkbox" id="all" name="all" value="";> 
<!-- Add CheckBox -->
<input class="demo" type="checkbox" id="checkbox-1" name="checkbox-1" value="cb-1">     
<!-- Add RadioButons -->
<input class="demo" type="radio" id="radio-1" name="radio" value="rd-1">   
```       

Attach wetchBox when the document is loaded. If you are not familiar with jQuery, please, read this tutorial for beginners.

```
$(document).ready(function(){
  $('input[type=checkbox].demo, input[type=radio].demo').wetchBox();
});
```

### Adjust the options (they are all optional)

####debug                

If true, it sets to debug mode. 
* Boolean; Default value: false
                         
####checkWidth 	         

Defines the width of the input. 
* Number, String; Default value: 11
                         
####checkHeight 	       

Defines the height of the input. 
* Number, String; Default value: 11
                         
####container 	         

Defines the container's html element. 
* String; Default value: "div"
                         
####item 	               

Defines the item's html element. 
* String; Default value: "span"
                         
####attrContainer 	     

Defines the attribute property html element. 
* String; Default value: "data-id"
                         
####idcheckAll 	         

Defines the input check all id (Only for checkboxes). 
* String; Default value: "all"
                         
####containerClass 	     

Defines the container's CSS class (Change it in the CSS file also). 
* String; Default value: "wetchbox"
                         
####checkedClass 	       

Defines the container and item checked CSS class (Change it in the CSS file also). 
* String; Default value: "checked"
                         
####hiddenClass 	       

Defines the input hidden CSS class (Change it in the CSS file also). 
* String; Default value: "hidden"
                         
####forMobile 	         

If false, disable plugin for mobile browsers. 
* Boolean; Default value: true

---

## FAQs

###Something doesn't work. Can you fix it?
- Yes! Please report all issues using the GitHub issue tracking tool. Please include the plugin version, browser and OS. The more information provided, the easier it is to fix a problem.

###What browsers are supported?
- All modern browsers are supported (Firefox, Chrome, Safari and IE9). Legacy support for IE8 is also enabled.

---

## Credits

- Built by [Webscoming](http://webscoming.com)
- Concept and development by [Pol Alegria](http://blogs.webscoming.com/category/pol-alegria/)
- Translate by [Rodrigo Riera](http://blogs.webscoming.com/category/rodrigo-riera/)

---


wetchBox is licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License)
