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
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>   
<!-- Add wetchBox -->    
<script type="text/javascript" src="jquery.wetchbox.js"></script>
```

Create a normal input elements, checkbox and radio buttons.

```
<!-- Example checkbox with all -->
<div class="checkbox" data-wetchbox="1">
  <input class="demo" id="all" type="checkbox" name="all" value="all">
  <label for="all">All</label>   
  <input class="demo" type="checkbox" id="checkbox-1" name="checkbox-1" value="cb-1">
  <label for="checkbox-1">Sample 1</label>
  <input class="demo" type="checkbox" id="checkbox-2" name="checkbox-2" value="cb-2" checked="checked">
  <label for="checkbox-2">Sample 2</label>
  <input class="demo" type="checkbox" id="checkbox-3" name="checkbox-3" value="cb-3">
  <label for="checkbox-3">Sample 3</label>
</div>   
```       

Attach wetchBox when the document is loaded. If you are not familiar with jQuery, please, read this tutorial for beginners.

```
$('input[type=checkbox].demo, input[type=radio].demo').wetchBox({
  container: "div",
  item: "span",
  containerData: "data-id",
  checkallData: "data-wetchbox",
  containerClass: "wetchBox",
  containerHoverClass: "hover",
  checkedClass: "checked",
  hiddenClass: "transparent",
  checkallName: "all",
  mobile: true  
});
```

### Adjust the options (they are all optional)

####container 	

Defines the container's html element. 
* String; Default value: "div"

####item 	

Defines the item's html element.
* String; Default value: "span"

####containerData 	

Defines the attribute property html element.
* String; Default value: "data-id"

####checkallData 	

Defines the parent attribute property for checkall. 
* String; Default value: "data-wetchbox"

####containerClass 	

Defines the container's CSS class. (Change it in the CSS file also). 
* String; Default value: "wetchbox"

####containerHoverClass 	

Defines the container's CSS class hover for older browsers. (Change it in the CSS file also). 
* String; Default value: "wetchbox"

####checkedClass 	

Defines the container and item checked CSS class. (Change it in the CSS file also). 
* String; Default value: "checked"

####hiddenClass 	

Defines the input hidden CSS class. (Change it in the CSS file also). 
* String; Default value: "transparent"

####checkallName 	

Defines the input name for checkall. 
* String; Default value: "all"

####mobile 	

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
- Assistant development by [Hector Escriche](http://blogs.webscoming.com/category/hector-estriche/)
- Testing on browsers by [Darío López](#)
- Support languages by [Rodrigo Riera](http://blogs.webscoming.com/category/rodrigo-riera/)

---


wetchBox is licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License)
