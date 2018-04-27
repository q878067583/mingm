// JavaScript Document

(function(){
		  $.extend({
				 "click_change":function(obj,show_img,width_img){
					 var midul=obj.find(".mid_items ul");
					 var midli=obj.find(".mid_items li");
					  midul.width(midli.length*width_img);
      					num=0;
					   obj.find(".leftmove").click(function(){
						   num--;
						   move();
					  })
					 obj.find(".rightmove").click(function(){
						   num++;
						   move();
					   })
					  function move(){
					   if(num<0 || num>midli.length-show_img){
						 num=num<0?0:midli.length-show_img;
					  }
					  else{
						 midul.animate({left:-num*width_img});
					  }
					}
					 }  
				   })
		  })(jQuery)
$(function(){
		     /*Í¼Æ¬ÇÐ»»*/
		  
		   $(".menu_area li").hover(function(){
											 $(this).addClass("hover");
											$(this).children(".sub_menu").show();
	},function(){
		$(this).removeClass("hover").children(".sub_menu").hide();
	})
    $(".tab a").hover(function(){
		var i=$(".tab a").index(this);
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().nextAll(".tab_cont").hide();
		$(".tab_cont").eq(i).show();
	})
	/*×ó²à²Ëµ¥*/
	$(".widget h3").click(function(){	 
				if($(this).next("ul").is(":visible")){
					$(this).next("ul").slideUp(500);
						$(".widget h3").removeClass("open");
					
					} 	else{
						$(".widget h3").removeClass("open");
						$(".widget ul").slideUp(500);
						$(this).addClass("open");
						$(this).next("ul").slideDown(500);
						}			   
			
				
			})
	/*¹Ç¿Æ×ó²à²Ëµ¥*/
	$(".left_menu li").hover(function(){
								
									  if($(this).has('i').length){
										   $(".left_menu li").removeClass("active");
										 $(this).addClass("active");
										 $(".sort").hide();
									  	$(this).find(".sort").show();
										  }
  
		   })
	/*·µ»Ø¶¥²¿°´Å¥*/
		$('#goTop').click(function(){
			$('body,html').animate({scrollTop:0},1000);
			return false;
		})
		$(window).scroll(function () {
			var top = $(window).scrollTop();
			if (top < 60) {
				$('#goTop').hide();
			} else {
				$('#goTop').show();
			}
		});
 
})