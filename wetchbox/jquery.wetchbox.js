/* ------------------------------------------------------------------------
	wetchBox
	
	Developped By: Pol Alegria (http://jquery.webscoming.com/wetchbox)
	Creadits: Webscoming (http://www.webscoming.com)
	Version: 0.1
	
	Copyright: Feel free to redistribute the script/modify it, as
			   long as you leave my infos at the top.
------------------------------------------------------------------------- */

(function ($) {
  $.fn.wetchBox = function (options) {
		options = $.extend({
		  debug: false,
  		checkWidth: 11,
  		checkHeight: 11,
  		container: "div",
  		item: "span",
  		attrContainer: "data-id",
  		idcheckAll: "all",
  		containerClass: "wetchBox",
  		checkedClass: "checked",
  		hiddenClass: "hidden",
  		forMobile: true 
		}, options || {});  
		
    return this.each(function() {
      var oElement       = $(this),
          oElementId     = $(oElement).attr("id"),
          oElementType   = $(oElement).attr("type"),
          oElementCheck  = $(oElement).is(':checked'),
          oElementLength = $("input[type='" + oElementType + "']:checked").length,
          oMobile        = navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i),
          oContainer     = document.createElement(options.container),
          oContainer     = $(oContainer).addClass(options.containerClass),
          oItem          = document.createElement(options.item);
      
      if (options.forMobile) {         
          if (oMobile) return false;
      }
      
      if (options.debug) {
          $(oElement).css({ left: "50px", position: "absolute" });
      } 
      
      if (options.container) {
          $(oContainer).addClass(oElementType).attr(options.attrContainer, oElementId);
          $(oContainer).prepend(oItem);
          $(oElement).wrap(oContainer); 
      }
      
      oContainer = $(options.container + "[" + options.attrContainer + "='" + oElementId + "']");

			if (oElementCheck) {
  			  $(oContainer).addClass(options.checkedClass).children(options.item).addClass(options.checkedClass);
  			  if (options.debug) {
				      countCheck();
				  } 			
  		}

  		if (options.checkWidth && options.checkHeight) {
    		  $(oElement).width(options.checkboxWidth).height(options.checkboxHeight);      
      }

			if (options.hiddenClass && !options.debug) {
  			  $(oElement).addClass(options.hiddenClass);
  		}
  		
			$(oContainer).on("click", function (e) {
  		    e.preventDefault();
  		    containerClick($(oContainer)); 			
			});
			
			$(oElement).on("click", function (e) {
  		    e.stopPropagation();
  		    elementClick(oElement);   			
			});
			
      $("input#" + $(oContainer).attr(options.attrContainer)).on("keypress", function (e) {
          if (e.keyCode == 32) {
              if ($.browser.msie) {
                  $(options.container + "[" + options.attrContainer + "='" + $(this).attr('id') + "']")
                      .toggleClass(options.checkedClass)
                      .children(options.item)
                      .toggleClass(options.checkedClass);
              }
              else {
                  $(this).prop("checked", function (i, val) {
                      return !val;
                  }); 
              }    
            return false;    
          }
      });
			
      function containerClick(oContainer) {
          if ($("input#" + $(oContainer).attr(options.attrContainer)).is(":checkbox")) {
              if ($(oContainer).attr(options.attrContainer) == options.idcheckAll) {
                  selectAll(oContainer);
              }
              else {
                  if ($(oContainer).parent().find("input#" + options.idcheckAll).prop("checked") == true) {
                      var oCheckedAll = $(oContainer).parent().find("input#" + options.idcheckAll);
                      $(oCheckedAll).prop("checked", false);
                      $(oCheckedAll).parent().removeClass(options.checkedClass).parent().removeClass(options.checkedClass);
                  }  
                  $(oContainer).toggleClass(options.checkedClass).children(options.item).toggleClass(options.checkedClass);
                  $('input#' + $(oContainer).attr(options.attrContainer)).prop("checked", function (i, val) {
                      return !val;
                  });
              }    			
          }
          else {
    					var oTocheck = $("input#" + $(oContainer).attr(options.attrContainer));
    					$("input[name='" + oTocheck.attr("name") + "']").each( function () {
                  $(options.container + "[" + options.attrContainer + "='" + $(this).attr("id") + "']")
                      .removeClass(options.checkedClass)
                          .children(options.item)
                              .removeClass(options.checkedClass);	
    					});
              $(oContainer).addClass(options.checkedClass).children(options.item).addClass(options.checkedClass);
              oTocheck.prop("checked", function (i, val) {
                  return !val;
              });	      
          } 
          
          if (options.debug) {
				      countCheck();
				  }            			
      }
			
			function elementClick(oElement) {
  		    if ($(oElement).is(":checkbox")) {
  		        if ($(oElement).attr("id") == options.idcheckAll) {
    		          selectAll(oElement);
  		        }
  		        else {
                  if ($(oContainer).parent().find("input#" + options.idcheckAll).prop("checked") == true) {
                      var oCheckedAll = $(oContainer).parent().find("input#" + options.idcheckAll);
                      $(oCheckedAll).prop("checked", false);
                      $(oCheckedAll).parent().removeClass(options.checkedClass).parent().removeClass(options.checkedClass);
                  }  		        
      		        $(options.container + "[" + options.attrContainer + "='" + oElementId + "']")
      		            .toggleClass(options.checkedClass)
      		                .children(options.item)
      		                    .toggleClass(options.checkedClass);
      		    }
  		    }
  		    else {
    		      $("input[name='" + $(oElement).attr('name') + "']").each( function () {
      		        $(options.container + "[" + options.attrContainer + "='" + $(this).attr('id') + "']")
      		            .removeClass(options.checkedClass)
      		                .children(options.item)
      		                    .removeClass(options.checkedClass);	
      		    });
      		    $(options.container + "[" + options.attrContainer + "='" + oElementId + "']")
      		        .addClass(options.checkedClass)
      		            .children(options.item)
      		                .addClass(options.checkedClass);    		    
  		    }
          
          if (options.debug) {
				      countCheck();
				  }   		    
			}
			
			function selectAll(oElements) {
  			  if (oElements.attr('id')) {
    			     var oMain = $(oElements).parent().parent().parent();
  			  }
  			  else {
    			     var oMain = $(oElements).parent();
			    }
			    var oChildren = $(oMain).children("." + options.containerClass);
			    var oInput    = $(oMain).children("." + oElementType).find("input");
			    
			    if (oInput.prop("checked") == false) {
              if (oElements.attr('id')) {
                  oChildren.removeClass(options.checkedClass);
                  oChildren.children(options.item).removeClass(options.checkedClass);
                  oInput.prop("checked", false); 
              }
              else {
                  $(oMain).children("." + oElementType)
                      .addClass(options.checkedClass)
                          .children(options.item)
                              .addClass(options.checkedClass);              
                  $(oMain).children("." + oElementType).find("input").prop("checked", true); 
              }
          }
          else {
              if (oElements.attr('id')) {
                  $(oMain).children("." + oElementType)
                      .addClass(options.checkedClass)
                          .children(options.item)
                              .addClass(options.checkedClass);  
                  $(oMain).children("." + oElementType).find("input").each( function() {
                      $(this).not("#" + options.idcheckAll).prop("checked", true);
                  });
              }
              else {
                  oChildren.removeClass(options.checkedClass);
                  oChildren.children(options.item).removeClass(options.checkedClass);
                  oInput.prop("checked", false);          
              }
          }
			}
			
			function update() {
  			  $(oContainer).each( function () {
          	  if ($(this).hasClass(options.checkedClass)) {
            		  $(this).find('input').prop("checked", true);     
          	  }
          	  else {
            	    $(this).find('input').prop("checked", false);  
          	  }    		
  			  });
			}
			
			function countCheck() {
  			  oElementLength = $("input[type='" + oElementType + "']:checked").length;
  		    $("." + oElementType + "s").text(oElementLength + (oElementLength === 1 ? " is " : " are ") + options.checkedClass + "!");
			}
			
    });			
			
  };
  
})(jQuery);