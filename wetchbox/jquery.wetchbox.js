/* ------------------------------------------------------------------------
	wetchBox
	
	Developped By: Pol Alegria (http://www.webscoming.me/wetchBox)
	Creadits: Webscoming (http://www.webscoming.com)
	Version: 0.2
	
	Copyright: Feel free to redistribute the script/modify it, as
			   long as you leave my infos at the top.
------------------------------------------------------------------------- */

(function($) {
  $.fn.wetchBox = function(options) {
	options = $.extend({
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
	}, options || {}); 	
    return this.each(function() {
      var oElement = $(this),
          oElementId = oElement.attr("id"),
          oElementName = oElement.attr("name"),
          oElementType = oElement.attr("type"),
          oElementCheck = oElement.is(":checked"),
          oContainer = document.createElement(options.container),
          oContainerItem = document.createElement(options.item),
          oData = oElement.parents("[" + options.checkallData + "]").attr(options.checkallData),
          oParent = oElement.parents("[" + options.checkallData + "='" + oData + "']"),
          oMobile = navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i);
      
      if(options.mobile) {    
        if(oMobile) { return false; }
      }

      $(oContainer).addClass(options.containerClass + " " + oElementType).attr(options.containerData, oElementId).prepend(oContainerItem);
      oElement.wrap(oContainer).css({
        width: $("." + options.containerClass + "." + oElementType).outerWidth(),
        height: $("." + options.containerClass + "." + oElementType).outerHeight()
      });
      
      oElement.addClass(options.hiddenClass);
      
      if(oElement.is(":checked")) {
        oElement.parent().addClass(options.checkedClass);
      }
      
      oElement.on({
        change: function() {
          if(oElementType == "checkbox") {
            if(oElementName == options.checkallName) {
              selectAll($(this), oParent);
            }
            else {
              if($(this).is(":checked")) {
                checkforAll($(this), oParent);
                $(this).parent().addClass(options.checkedClass);
              }
              else {
                var oCheckAll = oParent.find("input[name='" + options.checkallName + "']");
                if(oCheckAll.prop("checked") == true) {
                  oCheckAll.prop("checked", false).parent().removeClass(options.checkedClass);
                }
                $(this).parent().removeClass(options.checkedClass);
              }
            }  
          }
          else {
            $("input[name='" + oElementName + "']").each(function() {
              if($(this).is(":checked")) {
                $(this).parent().addClass(options.checkedClass);
              }
              else {
                $(this).parent().removeClass(options.checkedClass);
              }
            });
          }
        },
        hover: function() {
          $(this).parents("." + options.containerClass).toggleClass(options.containerHoverClass);
        }
      });
      
      function selectAll(oElement, oParent) {
        if($(oElement).is(":checked")) {
          oParent.find("." + options.containerClass + "." + oElementType).each(function() {
            $(this).find("input").prop("checked", true).parent().addClass(options.checkedClass);
          });
        }
        else {
          oParent.find("." + options.containerClass).each(function() {
            $(this).find("input").prop("checked", false).parent().removeClass(options.checkedClass);
          });
        }
      }
      
      function checkforAll(oElement, oParent) {
        var oAll = true;
        oParent.find("input").not("[name='" + options.checkallName + "']").each(function() {
          if($(this).prop("checked") == false) {
            oAll = false;
          }  
        });
        if(oAll){
          oParent.find("input[name='" + options.checkallName + "']").prop("checked", true).parent().addClass(options.checkedClass);
        }
      }
      
    });
  }
})(jQuery);