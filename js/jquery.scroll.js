// anchor in page
$(window).bind('load',function(){
	"use strict";
	$(function(){
		$('a[href^="#"]').click(function(){
			if($(this).parents('.ui-datepicker').length === 0) {
				if ( ($($(this).attr('href') ).length) ) {
					var p = $( $(this).attr('href') ).offset();
					if($(window).width() > 640){
						$('html,body').animate({ scrollTop: p.top - 82 }, 400);
					}
					else {
						$('html,body').animate({ scrollTop: p.top - 58}, 400);
					}
				}
				return false;
			}
			
		});
	});
});

// anchor top page #
$(window).bind('load',function(){
	"use strict";
 var hash = location.hash;
 if(hash){
	  var p1 = $(hash).offset();
	if($(window).width() > 640){
		
					$('html,body').animate({ scrollTop: p1.top - 82}, 400);
				}
				else {
					$('html,body').animate({ scrollTop: p1.top - 58}, 400);
				}
	}

});



