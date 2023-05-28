$domain_url = window.site_info.site_url;

(function($){

	var langmenu = '';
	
	if(window.location.href.indexOf('/hindi') > -1){
	langmenu = `<a href="javascript:void(0)" class="header-top-nav-links">हिन्दी</a>
						<ul id="personal-childmenu" class="sub-menu">
							<li class="level1">
								<a href="https://www.adityabirlacapital.com/healthinsurance/active-together/">English</a>
							</li>
							<li class="level1 active">
								<a href="javascript:void(0)">हिन्दी</a>
							</li>
						</ul>`; 
		} else{

			langmenu = `<a href="javascript:void(0)" class="header-top-nav-links">English</a>
						<ul id="personal-childmenu" class="sub-menu">
							<li class="level1 active">
								<a href="javascript:void(0)">English</a>
							</li>
							<li class="level1">
								<a href="https://www.adityabirlacapital.com/healthinsurance/hindi/active-together/">हिन्दी</a>
							</li>
						</ul>`; 

		}

	//if($domain_url == "https://www.adityabirlacapital.com/healthinsurance/hindi/active-together" || $domain_url == "https://www.adityabirlacapital.com/healthinsurance/hindi/active-together/"){
			

		jQuery("#langMenuDropdown").html(langmenu);

})(jQuery);


// When the user scrolls the page, Top Main Menu Should be Fixed
window.onscroll = function() {abcFixedMenuFunc()};
function abcFixedMenuFunc() {
  if (window.pageYOffset > 160) {
    document.getElementById("abcFixedMenu").classList.add('abc-sticky-menu');
  } else {
    document.getElementById("abcFixedMenu").classList.remove('abc-sticky-menu');
  }
  var doc = document.getElementsByTagName("ARTICLE")[0] || document.getElementsByTagName("section")[0] ; 
  var x = doc.scrollHeight; 
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var winScrollT = winScroll - 220;
  var height = x - document.documentElement.clientHeight;
  var scrolled = (winScrollT / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  document.getElementById("myBar").style.maxWidth = "100%";
}


/*---------------------------------------*/
/* Custom Created js                  */
/*---------------------------------------*/
jQuery(window).on('load', function() {
var url = window.location;
    if(window.location.href.match('health-and-fitness') != null){  
	jQuery('#threeforty_posts_widget-2').show();
	jQuery('.sort-category-2').addClass('select-health');
    } else if(window.location.href.match('fitness-videos') != null){  
	jQuery('#threeforty_posts_widget-2').show();
	jQuery('.sort-category-2').addClass('select-health');
   } else if(window.location.href.match('diet-and-nutrition') != null){
	jQuery('#threeforty_posts_widget-3').show();
	jQuery('sort-category-2').addClass('select-health-1');
    } else if(window.location.href.match('nutrition-videos') != null){
	jQuery('#threeforty_posts_widget-3').show();
	jQuery('sort-category-2').addClass('select-health-1');
    } else  if(window.location.href.match('lifestyle-conditions') != null){
	jQuery('#threeforty_posts_widget-4').show();
	jQuery('sort-category-2').addClass('select-health-2');
    } else  if(window.location.href.match('lifestyle-conditions-videos') != null){
	jQuery('#threeforty_posts_widget-4').show();
	jQuery('sort-category-2').addClass('select-health-2');
    } else  if(window.location.href.match('moneywise') != null){
	jQuery('#threeforty_posts_widget-5').show();
	jQuery('sort-category-2').addClass('select-health-3');
    } else  if(window.location.href.match('moneywise-videos') != null){
	jQuery('#threeforty_posts_widget-5').show();
	jQuery('sort-category-2').addClass('select-health-3');
    }

});

jQuery('.masonry-container').ready(function(){
	if(jQuery('.entry-header').hasClass('entry-meta')){
	jQuery('.share').remove();
}
});

//email subscribers code for disabling the submit button
jQuery("input[type='name'], input[type='email']").on("keyup", function(){
    if(jQuery(this).val() != "" ){
        jQuery("input[type='submit']").removeAttr("disabled");
    }
});

//helping the text to excerpt in category or post used

jQuery(document).ready(function(){
	if(jQuery(window).width() < 768){
	var maxLength = 114;
	jQuery(".post-hide").each(function(){
		var content = jQuery(this).text();
		if(content.length > maxLength){
			var newStr = content.substring(0, maxLength);
			var removedStr = content.substring(maxLength, content.length);
			jQuery(this).empty().html(newStr);
			jQuery(this).append('<a href="javascript:void(0);" class="read-more">...Read more</a>');
			jQuery(this).append('<span class="more-text">' + removedStr + '</span>');
		}
	});
	jQuery(".read-more").click(function(){
		jQuery(this).siblings(".more-text").contents().unwrap();
		jQuery(this).remove();
	});
	}
});

//helping the text to excerpt in category or post used

jQuery(document).ready(function() {
	var showChar = 80;
	var ellipsestext = "...";
	var moretext = "Read More";
	var lesstext = "Read Less";
	jQuery('.post-hide1').each(function() {
		var content = jQuery(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="read-more1"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="more-text1">' + moretext + '</a></span>';

			jQuery(this).html(html);
		}

	});

	jQuery(".more-text1").click(function(){
		if(jQuery(this).hasClass("less")) {
			jQuery(this).removeClass("less");
			jQuery(this).html(moretext);
		} else {
			jQuery(this).addClass("less");
			jQuery(this).html(lesstext);
		}
		jQuery(this).parent().prev().toggle();
		jQuery(this).prev().toggle();
		return false;
	});
});


jQuery(".btn-11").click(function(){
        location.href = $domain_url + "/health-tools/";
});

    var inputQuantity = [];
    jQuery(function() {
      jQuery(".quantity").on("keyup", function (e) {
        var field = jQuery(this),
            val=this.value,
            thisIndex=parseInt(field.data("idx"),10); // retrieve the index
//        window.console && console.log($field.is(":invalid"));
          //  field.is(":invalid") is for Safari, it must be the last to not error in IE8
        if (this.validity && this.validity.badInput || isNaN(val) || field.is(":invalid") ) {
            this.value = inputQuantity[thisIndex];
            return;
        } 
        if (val.length > Number(field.attr("maxlength"))) {
          val=val.slice(0, 3);
          field.val(val);
        }
        inputQuantity[thisIndex]=val;
      });      
    });

jQuery( window ).on( "load", function() {
setTimeout(function(){
 jQuery('#boxzilla-overlay').fadeOut();
 jQuery('#boxzilla-52420').fadeOut();
}, 70000);
 })

//making the url variables pass in the web-view from app
var a = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

if(a[1] == "fromApp=1"){
	
	jQuery('#boxzilla-overlay').remove();
	jQuery('.boxzilla-container').remove();
	jQuery('.mkdf-mobile-header-inner').remove();
	jQuery('.mkdf-wrapper-inner1').remove();
	jQuery('.mkdf-wrapper-inner2').remove();
	jQuery('.buttonside').show();
	jQuery('.whatsapp').remove();
	jQuery('.scrollcontent').show();
	jQuery('.mkdf-title').hide();
	jQuery('.mkdf-category-share-holder').hide();
	jQuery('.mkdf-blog-single-navigation').hide();
	jQuery('.mkdf-related-posts-holder').hide();
	jQuery('.mkdf-comment-holder').hide();
	jQuery('.mkdf-comment-form').hide();
	jQuery('.mkdf-page-footer').hide();
	jQuery('.subheader2').hide();
	jQuery('#colophon').remove();
	jQuery('.herald-site-content').addClass('site-view-mobi');
	jQuery('.header-bottom').addClass('site-view-mobi2');
	jQuery('.submit-box .btn-11').hide();
        jQuery('.modal-dialog').hide();
        jQuery('.modal-open').css('overflow', 'auto'); 
        jQuery('.modal-backdrop.fade').removeClass('in').css('display', 'none'); 
        jQuery('#appleOfferModal').hide(); 
        jQuery('#abhi-top-header').hide(); 
 
} 

jQuery(document).ready(function(){
if (jQuery(".site-main .type-post").hasClass("category-health-and-fitness")){
  jQuery("#threeforty_posts_widget-2").addClass("show");  
}
else if (jQuery(".site-main .type-post").hasClass("category-diet-and-nutrition")) {
  jQuery("#threeforty_posts_widget-3").addClass("show");  
}
else if (jQuery(".site-main .type-post").hasClass("category-lifestyle-conditions")) {
  jQuery("#threeforty_posts_widget-4").addClass("show");  
}
});

 jQuery(".headtext2").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-header",
		event_label: "blog-header_[ABC-logo]"
	})
});
 jQuery(".custom-logo-link").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-header",
		event_label: "blog-header_[ABC-logo-sticky]"
	})
}); 

 jQuery(".head-logo-2").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[Activ Together]"
	})
}); jQuery("#email-subscribers-form-11 .es_textbox_button").click(function() {
	gtag("event", "click-button", {
		event_category: "blog-subscribe",
		event_label: "blog-subscribe_widget_right"
	})
}); 
jQuery(".boxzilla-close-icon").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-subscribe",
		event_label: "blog-subscribe_popup-close"
	})
}); jQuery(".ads-img").click(function() {
	gtag("event", "click-icon", {
		event_category: "blog-subscribe",
		event_label: "blog-subscribe-ads"
	})
}); jQuery(".menu-item-4462").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[Protecting]"
	})
}); jQuery(".menu-item-4463").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[Investing]"
	})
}); jQuery(".menu-item-4464").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[Financing]"
	})
}); jQuery(".menu-item-4465").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[Advising]"
	})
}), jQuery(".menu-item-1606").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[health&fitness]"
	})
}); jQuery(".menu-item-4471").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[diet&nutrition]"
	})
}); jQuery(".menu-item-4459").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[lifestyleconditions]"
	})
}), jQuery(".menu-item-7849").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[healthforum]"
	})
}); jQuery(".menu-item-47979").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[health-tools]"
	})
}); jQuery(".menu-item-3247").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_Activities-[#behadzindagi]"
	})
}); jQuery(".menu-item-7844").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_Activities-[#jumpforhealth-2018]"
	})
}); jQuery(".menu-item-47731").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_Activities-[#jumpforhealth-2019]"
	})
}); jQuery(".menu-item-7859").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-header",
		event_label: "blog-header_[login&register]"
	})
}); jQuery("#wp-submit").click(function() {
	gtag("event", "click-button", {
		event_category: "blog-homepage",
		event_label: "blog-login_[submit]"
	})
}); jQuery(".mkdf-back-to-top-inner").click(function() {
	gtag("event", "click-button", {
		event_category: "blog-pages",
		event_label: "blog-pages_[back-to-top]"
	})
}); jQuery(".mkdf-tabs-nav").on("click", "#ui-id-1", function() {
	gtag("event", "click-text", {
		event_category: "blog-tabs",
		event_label: "blog-tabs_[health&fitness]"
	})
}); jQuery(".mkdf-tabs-nav").on("click", "#ui-id-2", function() {
	gtag("event", "click-text", {
		event_category: "blog-tabs",
		event_label: "blog-tabs_[diet&nutrition]"
	})
}); jQuery(".mkdf-tabs-nav").on("click", "#ui-id-3", function() {
	gtag("event", "click-text", {
		event_category: "blog-tabs",
		event_label: "blog-tabs_[lifestyleconditions]"
	})
}); jQuery(".mkdf-tabs-nav").on("click", "#ui-id-4", function() {
	gtag("event", "click-text", {
		event_category: "blog-tabs",
		event_label: "blog-tabs_[healthforum]"
	})
}); jQuery(".mkdf-tabs-nav").on("click", "#ui-id-5", function() {
	gtag("event", "click-text", {
		event_category: "blog-tabs",
		event_label: "blog-tabs_[activities]"
	})
}); jQuery(".bmi-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[bmi-image]"
	})
}); jQuery(".ideal-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[ideal-image]"
	})
}); jQuery(".smoke-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[smoke-image]"
	})
}); jQuery(".menstruation-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[menstruation-image]"
	})
}); jQuery(".bloodpr-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[blood-pressure-image]"
	})
}); jQuery(".cholestrol-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[cholestrol-image-image]"
	})
}); jQuery(".bloodpr-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[blood-glucose-image]"
	})
}); jQuery(".waisthip-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[waist-hip-image]"
	})
}); jQuery(".bmr-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[bmr-image]"
	})
}); jQuery(".asthma-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[asthma-image]"
	})
}); jQuery(".emotionalw-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[emotionalw-image]"
	})
}); jQuery(".chronicd-1").click(function() {
	gtag("event", "click-image", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[chronicd-image]"
	})
}); jQuery(".bgbutton1").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[bmi-title]"
	})
}); jQuery(".bmi-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[bmi-content]"
	})
}); jQuery(".bgbutton2").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[ideal-weight-title]"
	})
}); jQuery(".ideal-weight-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[ideal-weight-content]"
	})
}); jQuery(".bgbutton3").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[smoking-cost-title]"
	})
}); jQuery(".smoking-cost-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[smoking-cost-content]"
	})
}); jQuery(".bgbutton4").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[cycle-title]"
	})
}); jQuery(".cycle-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[cycle-conetnt]"
	})
}); jQuery(".bgbutton5").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[blood-pressure-title]"
	})
}); jQuery(".blood-pressure-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[blood-pressure-content]"
	})
}); jQuery(".bgbutton6").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[cholesterol-title]"
	})
}); jQuery(".cholesterol-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[cholesterol-content]"
	})
}); jQuery(".bgbutton7").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[blood-glucose-title]"
	})
}); jQuery(".blood-glucose-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[blood-glucose-content]"
	})
}); jQuery(".bgbutton8").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[waist-hip-title]"
	})
}); jQuery(".waist-hip-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[waist-hip-content]"
	})
}); jQuery(".bgbutton9").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[bmr-title]"
	})
}); jQuery(".bmr-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[bmr-content]"
	})
}); jQuery(".bgbutton10").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[asthma-title]"
	})
}); jQuery(".asthma-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[asthma-content]"
	})
}); jQuery(".bgbutton11").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[emotional-wellbeing-title]"
	})
}); jQuery(".emotional-wellbeing-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[emotional-wellbeing-content]"
	})
}); jQuery(".bgbutton12").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[chronic-disease-title]"
	})
}); jQuery(".chronic-disease-content").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-health-tools",
		event_label: "health-tools_[chronic-disease-content]"
	})
}); jQuery(".bmi-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[bmi-image]"
	})
}); jQuery(".bgbmi-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[bmi-title]"
	})
}); jQuery("#ht-page-bmi .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[bmi-calculate]"
	})
}); jQuery(".bmr-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[bmr-image]"
	})
}); jQuery(".bgbmr-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[bmr-title]"
	})
}); jQuery("#ht-page-bmr .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[bmr-calculate]"
	})
}); jQuery(".ideal-weight-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[ideal-weight-image]"
	})
}); jQuery(".bgideal-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[ideal-weight-title]"
	})
}); jQuery("#ht-page-idealw .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[ideal-weight-calculate]"
	})
}); jQuery(".smoking-cost-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[smoking-cost-image]"
	})
}); jQuery(".bgsmoking-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[smoking-cost-title]"
	})
}); jQuery("#ht-page-smokingc .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[smoking-cost-calculate]"
	})
}); jQuery(".cycle-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[cycle-image]"
	})
}); jQuery(".bgcycle-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[cycle-title]"
	})
}); jQuery("#ht-page-cyclec .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[cycle-calculate]"
	})
}); jQuery(".blood-pressure-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[blood-pressure-image]"
	})
}); jQuery(".bgbloodpressure-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[blood-pressure-title]"
	})
}); jQuery("#ht-page-bloodp .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[blood-pressure-calculate]"
	})
}); jQuery(".cholesterol-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[cholesterol-image]"
	})
}); jQuery(".bgcholesterol-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[cholesterol-title]"
	})
}); jQuery("#ht-page-cholesterol .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[cholesterol-calculate]"
	})
}); jQuery(".blood-glucose-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[blood-glucose-image]"
	})
}); jQuery(".bgbloodglucose-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[blood-glucose-title]"
	})
}); jQuery("#ht-page-bloodg .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[blood-glucose-calculate]"
	})
}); jQuery(".waist-hip-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[waist-hip-image]"
	})
}); jQuery(".bgwaisthip-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[waist-hip-title]"
	})
}); jQuery("#ht-page-waisth .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[waist-hip-calculate]"
	})
}); jQuery(".asthma-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[asthma-image]"
	})
}); jQuery(".bgasthma-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[asthma-title]"
	})
}); jQuery("#ht-page-asthma .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[asthma-calculate]"
	})
}); jQuery(".emotionalw-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[emotional-wellbeing-image]"
	})
}); jQuery(".bgemotionalw-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[emotional-wellbeing-title]"
	})
}); jQuery("#ht-page-emotionalw .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[emotional-wellbeing-calculate]"
	})
}); jQuery(".chronicd-2").click(function() {
	gtag("event", "click-image", {
		event_category: "health-tools",
		event_label: "health-tools-page_[chronic-disease-image]"
	})
}); jQuery(".bgchronicd-1").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "health-tools-page_[chronic-disease-title]"
	})
}); 

jQuery("#ht-page-chronicd .ht-page-cta").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[chronic-disease-calculate]"
	})
}); 


// Covid-19 Calculator
jQuery(".covid-cal-submit-btn").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools-page_[covid-19-calculate]"
	})
}); 

jQuery(".searchform").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-events",
		event_label: "blog-search-form"
	})
}); jQuery(".removepad").click(function() {
	gtag("event", "click-text", {
		event_category: "blog-events",
		event_label: "blog-widget-ads"
	})
}); jQuery(".form-submit").click(function() {
	gtag("event", "click-text", {
		event_category: "health-tools",
		event_label: "blog-form-submit"
	})
}); jQuery(".sub1").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[ideal-weight-submit]"
	})
}); jQuery(".sub2").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[smoking-submit]"
	})
}); jQuery("#bmiSubmit").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[bmi-submit]"
	})
}); jQuery(".sub4").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[menstruation-submit]"
	})
}); jQuery(".sub5").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[blood-pressure-submit]"
	})
}); jQuery(".sub6").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[cholestrol-submit]"
	})
}); jQuery(".sub7").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[blood-glucose-submit]"
	})
}); jQuery(".sub8").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[waist-hip-submit]"
	})
}); jQuery(".sub9").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[bmr-submit]"
	})
}); jQuery(".sub10").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[asthma-submit]"
	})
}); jQuery(".sub11").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[emotional-wellbeing-submit]"
	})
}); jQuery(".sub115").click(function() {
	gtag("event", "click-button", {
		event_category: "health-tools",
		event_label: "health-tools_[chronic-disease-submit]"
	})
}); jQuery(".category-healthandfitness .mkdf-post-title").click(function() {
	gtag("event", "click-text", {
		event_category: "health-fitness",
		event_label: "health-fitness_[post-title]"
	})
}); jQuery(".category-healthandfitness .mkdf-post-text .mkdf-post-excerpt").click(function() {
	gtag("event", "click-text", {
		event_category: "health-fitness",
		event_label: "health-fitness_[post-read-more]"
	})
}); jQuery(".category-diet-nutrition .mkdf-post-title").click(function() {
	gtag("event", "click-text", {
		event_category: "diet-nutrition",
		event_label: "diet-nutrition_[post-title]"
	})
}); jQuery(".category-diet-nutrition .mkdf-post-text .mkdf-post-excerpt").click(function() {
	gtag("event", "click-text", {
		event_category: "diet-nutrition",
		event_label: "diet-nutrition_[post-read-more]"
	})
}); jQuery(".category-lifestyle-conditions .mkdf-post-title").click(function() {
	gtag("event", "click-text", {
		event_category: "lifestyle-conditions",
		event_label: "lifestyle-conditions_[post-title]"
	})
}); jQuery(".category-lifestyle-conditions .mkdf-post-text .mkdf-post-excerpt").click(function() {
	gtag("event", "click-text", {
		event_category: "lifestyle-conditions",
		event_label: "lifestyle-conditions_[post-read-more]"
	})
});
 


// Lucky Custom Code for ABC starts here 
jQuery(document).ready(function(){
	// Blood Pressure (Pre) Click Event
	jQuery('#blood-pressure-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[blood-pressure-precalculate]'
		})
	});

	// Blood Glucose (Pre) Click Event
	jQuery('#blood-glucose-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[blood-glucose-precalculate]'
		})
	});

	// BMI Cal (Pre) Click Event
	jQuery('#bmi-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[bmi-precalculate]'
		})
	});

	// BMR Cal (Pre) Click Event
	jQuery('#bmr-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[bmr-precalculate]'
		})
	});

	// Ideal Weight Cal (Pre) Click Event
	jQuery('#ideal-weight-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[ideal-weight-precalculate]'
		})
	});

	// Smoking Cost Cal (Pre) Click Event
	jQuery('#smoking-cost-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[smoking-cost-precalculate]'
		})
	});

	// Cycle Cal (Pre) Click Event
	jQuery('#cycle-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[cycle-cal-precalculate]'
		})
	});

	// Cholesterol Cal (Pre) Click Event
	jQuery('#cholesterol-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[cholesterol-cal-precalculate]'
		})
	});

	// Waist Hip Ratio (Pre) Click Event
	jQuery('#waist-hip-ratio-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[waist-hip-ratio-precalculate]'
		})
	});

	// Asthma Cal (Pre) Click Event
	jQuery('#asthma-cal a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[asthma-precalculate]'
		})
	});

	// Chronic disease (Pre) Click Event
	jQuery('#chronic-disease a').click(function() {
		gtag('event','click-button',{
			'event_category':'health-tools',
			'event_label':'health-tools_[chronic-disease-precalculate]'
		})
	});


	// Fitness Header Menu Click Event
	jQuery('.HeaderMenuFitness').click(function() {
		gtag('event','click-button',{
			'event_category':'blog-header',
			'event_label':'blog-header_[fitness]'
		})
	});

	// Nutrition Header Menu Click Event
	jQuery('.HeaderMenuNutrition').click(function() {
		gtag('event','click-button',{
			'event_category':'blog-header',
			'event_label':'blog-header_[nutrition]'
		})
	});

	// lifestyle-condition Header Menu Click Event
	jQuery('.HeaderMenuLifestyle').click(function() {
		gtag('event','click-button',{
			'event_category':'blog-header',
			'event_label':'blog-header_[lifestyle-condition]'
		})
	});

	// health-tools Header Menu Click Event
	jQuery('.HeaderMenuHealthTools').click(function() {
		gtag('event','click-button',{
			'event_category':'blog-header',
			'event_label':'blog-header_[health-tools]'
		})
	});

	// activities-jumpforhealth-2018 Header Menu Click Event
	jQuery('.HeaderMenujumpforhealth2018').click(function() {
		gtag('event','click-button',{
			'event_category':'blog-header',
			'event_label':'blog-header_[activities-jumpforhealth-2018]'
		})
	});

	// activities-jumpforhealth-2019 Header Menu Click Event
	jQuery('.HeaderMenujumpforhealth2019').click(function() {
		gtag('event','click-button',{
			'event_category':'blog-header',
			'event_label':'blog-header_[activities-jumpforhealth-2019]'
		})
	});

	var homeClass = jQuery("body").hasClass( "home" );
	var fitnessClass = jQuery("body").hasClass( "category-health-and-fitness" );
	var nutritionClass = jQuery("body").hasClass( "category-diet-and-nutrition" );
	var lifestyleClass = jQuery("body").hasClass( "category-lifestyle-conditions" );
	var healthToolsClass = jQuery("body").hasClass( "page-id-52267" );
	if(homeClass || fitnessClass || nutritionClass || lifestyleClass || healthToolsClass){


		/*---------------------------------------*/
		/* Subscription Form Click event starts here*/
		/*---------------------------------------*/

		// Subscription form - Home Page Click Event
		jQuery('.home .es_subscription_form_submit').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-footer-form',
				'event_label':'blog-subscription-home-page_[subscribe – stay updated with us]'
			})
		});

		// Subscription form - Fitness Page Click Event
		jQuery('.category-health-and-fitness .es_subscription_form_submit').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-footer-form',
				'event_label':'blog-subscription-fitness-page_[subscribe – stay updated with us]'
			})
		});

		// Subscription form - Nutrition Page Click Event
		jQuery('.category-diet-and-nutrition .es_subscription_form_submit').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-footer-form',
				'event_label':'blog-subscription-nutrition-page_[subscribe – stay updated with us]'
			})
		});	

		// Subscription form - Lifestyle Page Click Event
		jQuery('.category-lifestyle-conditions .es_subscription_form_submit').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-footer-form',
				'event_label':'blog-subscription-lifestyle-page_[subscribe – stay updated with us]'
			})
		});

		// Subscription form - Health Tools Page Click Event
		jQuery('.page-id-52267 .es_subscription_form_submit').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-footer-form',
				'event_label':'blog-subscription-health-tool-page_[subscribe – stay updated with us]'
			})
		});


		/*---------------------------------------*/
		/* Sidebar Category Form Click Event Starts here */
		/*---------------------------------------*/

		// Sidebar Category form - Click Event
		jQuery('.category-health-and-fitness #selectCatBtn').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-fitnesspage',
				'event_label':'submit-category'
			})
		});

		// Sidebar Category form - Click Event
		jQuery('.category-diet-and-nutrition #selectCatBtn').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-nutritionpage',
				'event_label':'submit-category'
			})
		});

		// Sidebar Category form - Click Event
		jQuery('.category-lifestyle-conditions #selectCatBtn').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-lifestylepage',
				'event_label':'submit-category'
			})
		});

		/*---------------------------------------*/
		/* Sidebar Ad Banner Click Event Starts here */
		/*---------------------------------------*/

		// Sidebar Ad Banner - Click Event
		jQuery('.category-health-and-fitness aside #media_image-2 img').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-fitnesspage',
				'event_label':'sidebar-ad-activ-health'
			})
		});

		// Sidebar Ad Banner - Click Event
		jQuery('.category-diet-and-nutrition aside #media_image-2 img').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-nutritionpage',
				'event_label':'sidebar-ad-activ-health'
			})
		});

		// Sidebar Ad Banner - Click Event
		jQuery('.category-lifestyle-conditions aside #media_image-2 img').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-lifestylepage',
				'event_label':'sidebar-ad-activ-health'
			})
		});

		/*---------------------------------------*/
		/* Pagination Click Event Starts here */
		/*---------------------------------------*/

		// Paginayion Prev Btn - Click Event
		jQuery('.category-health-and-fitness .pagination .prev').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-fitnesspage',
				'event_label':'pagination-prev'
			})
		});
		// Paginayion Next Btn - Click Event
		jQuery('.category-health-and-fitness .pagination .next').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-fitnesspage',
				'event_label':'pagination-next'
			})
		});

		// Paginayion Prev Btn - Click Event
		jQuery('.category-diet-and-nutrition .pagination .prev').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-nutritionpage',
				'event_label':'pagination-prev'
			})
		});
		// Paginayion Next Btn - Click Event
		jQuery('.category-diet-and-nutrition .pagination .next').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-nutritionpage',
				'event_label':'pagination-next'
			})
		});

		// Paginayion Prev Btn - Click Event
		jQuery('.category-lifestyle-conditions .pagination .prev').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-lifestylepage',
				'event_label':'pagination-prev'
			})
		});
		// Paginayion Next Btn - Click Event
		jQuery('.category-lifestyle-conditions .pagination .next').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-lifestylepage',
				'event_label':'pagination-next'
			})
		});

	} else{
		// Subscription form - Other Page Click Event
		jQuery('.es_subscription_form_submit').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-footer-form',
				'event_label':'blog-subscription-others-page_[subscribe – stay updated with us]'
			})
		});

		// Sidebar Category form - Click Event
		jQuery('#selectCatBtn').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-otherspage',
				'event_label':'submit-category'
			})
		});

		// Sidebar Ad Banner - Click Event
		jQuery('aside #media_image-2 img').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-otherspage',
				'event_label':'sidebar-ad-activ-health'
			})
		});

		// Paginayion Prev Btn - Click Event
		jQuery('.pagination .prev').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-otherspage',
				'event_label':'pagination-prev'
			})
		});
		// Paginayion Next Btn - Click Event
		jQuery('.pagination .next').click(function() {
			gtag('event','click-button',{
				'event_category':'blog-otherspage',
				'event_label':'pagination-next'
			})
		});
	}

	jQuery("body").on("click",".entry-header a,.post-thumbnail img" , function(){
             var postSecTitle = jQuery(this).closest(".content-area").find(".page-title").text().trim().toLowerCase();
             var postSecTitle1 = jQuery(this).closest("body.archive").find(".page-title").text().trim().toLowerCase();
             var postCatV = jQuery(this).closest(".flex-box.has-post-thumbnail").find(".post-categories :eq(0)").text().trim().toLowerCase();
             var postTitle = jQuery(this).closest(".flex-box.has-post-thumbnail").find(".entry-title a").text().trim().toLowerCase();
             var postTitleArchive = jQuery(this).closest("main.site-main .flex-box.has-post-thumbnail").find(".entry-title a").text().trim().toLowerCase();

              if(postSecTitle){
              		gtag('event','click-button',{
						'event_category':'blog-homepage',
						'event_label': postSecTitle+ "<"+postCatV+"><"+postTitle+">", 
					});
              }
              if(postSecTitle1 && postTitleArchive){
              		gtag('event','click-button',{
						'event_category':'blog-categorypage',
						'event_label': postSecTitle1+ "<"+postCatV+"><"+postTitleArchive+">" 
					});
              }
    });
});


/*************** BMI Calculator Start Here ****************/
// Convert Weight from KG to Pound
function kgToPound($weight){
	$kg = $weight;
	$weightInPound = $kg * 2.2046226218;
	return $weightInPound;
}

// Get Height Value for BMI Formula 
function heightToInches($feet,$inch){
	$heightFeet = $feet;
	$heightInch = $inch;
	$heightFeetValue = $heightFeet * 12;
	$HeightResult = parseInt($heightFeetValue) + parseInt($heightInch);
	$hVal = $HeightResult * $HeightResult;
	return $hVal;
}

// BMI Formula 
function BMIFormula($h,$w){
	$wVal = 703 * $w;
	$calBmi = $wVal / $h;
	return $calBmi;
}

// BMI Result after getting BMI Value from BMI Formula
function BMIResult($BMI){
	$bmiNo =  $BMI;
	if($bmiNo <= parseInt(18.5)){
		$bmiOutput = "You are <span style='color:#FFBF00'>Underweight!</span> Your BMI is <span style='color:#FFBF00'>"+ $bmiNo + "</span>";
	}
	if($bmiNo > parseInt(18.5)){
		$bmiOutput = "You are <span style='color:green'>Healthy!</span> Your BMI is <span style='color:green'>"+ $bmiNo + "</span>";
	}
	if($bmiNo >= parseInt(25)){
		$bmiOutput = "You are <span style='color:red'>Overweight!</span> Your BMI is <span style='color:red'>"+ $bmiNo + "</span>";
	}
	if($bmiNo >= parseInt(30)){
		$bmiOutput = "You are <span style='color:red'>Obese!</span> Your BMI is <span style='color:red'>"+ $bmiNo + "</span>";
	}
	return $bmiOutput;
}

jQuery("#bmical1, #bmical2").focusout(function(){

	$bmiHeightVal = jQuery("#bmical1").val();
 	$bmiWeightVal = jQuery("#bmical2").val();
 	$hRes = $bmiHeightVal.split('.');
	$hFeet = $hRes[0];
	$hInch = $hRes[1];

	if($hInch > 11){
		$msg = "Height Inch should be below 12";
		jQuery('#bmiResultsDiv').css('display','none');
		jQuery('#msgError').css('display','block');
			jQuery("#msgError").css('color','red');
			jQuery("#msgError").html($msg);
	} else{
	 	if($bmiHeightVal > 8 || $bmiWeightVal > 630){
	 		if($bmiHeightVal > 8){
	 			$msg = "Please provide a valid Height. Example 5.10 or 5";
	 		}
	 		if($bmiWeightVal > 630){
	 			$msg = "Please provide a valid Weight.";
	 		}
	 		if($bmiHeightVal > 8 && $bmiWeightVal > 630){
	 			$msg = "Please enter valid information";
	 		}
	 		if($msg){
	 			jQuery("#msgError").css('display','block');
	 			jQuery('#bmiResultsDiv').css('display','none');
	 			jQuery("#msgError").css('color','red');
	 			jQuery("#msgError").html($msg); 
	 		}
	 	} else{
	 		$msg = "";
	 		jQuery("#msgError").css('color','black');
	 		jQuery("#msgError").html($msg);			
	 		jQuery("#msgError").css('display','none');
	 	}
	}
});

// BMI Calculation after form submission 
jQuery(document).on('submit','#bmiForm',function(e){
	e.preventDefault();

	$bmiHeightVal = jQuery("#bmical1").val();
 	$bmiWeightVal = jQuery("#bmical2").val();
 	$memberId = jQuery("#memberId").val();
 	$moduleName = jQuery("#moduleName").val();


 	$hRes = $bmiHeightVal.split('.');
	$hFeet = $hRes[0];
	$hInch = $hRes[1];

	if($hInch > 11){
		$msg = "Height Inch should be below 12";
		jQuery("#msgError").css('display','block');
		jQuery('#bmiResultsDiv').css('display','none');
			jQuery("#msgError").css('color','red');
			jQuery("#msgError").html($msg);
	} else{
		jQuery("#msgError").css('display','none');
		if($hInch){
		heightToInches($hFeet,$hInch);
		}else{
			$hInch = 00;//Default Inch Value
			heightToInches($hFeet,$hInch);
		}

	 	kgToPound($bmiWeightVal);

	 	BMIFormula($hVal,$weightInPound);//Got Parameter data from Height and Weight Function

		if($calBmi){
			$bmiFloat = $calBmi.toFixed(2);
			BMIResult($bmiFloat);	

			// formData.push( { "name" : "security", "value" : ajax_nonce } );

			if($memberId && $moduleName){

				var formData = {
					action: 'bmiDataSubmitApi',
	            	// security : rml_obj.ajax_nonce, 
		            'bmiHeight': $bmiHeightVal,
			        'bmiWeight': $bmiWeightVal,
			        'memberId': $memberId,
			        'moduleName': $moduleName,
			        'bmiOutput': $bmiOutput,
		        };

				jQuery.ajax({           
		            url : ajax_url,
		            type : 'post',
	    			dataType: 'json',
		            data: formData,
		            beforeSend: function(){
					    jQuery("#abcFormLoader").show();
				   	},
		            success : function( data ) {
		            	if(data.code == 1){
		            		console.log(data.msg);
			               	jQuery('#bmiResultsDiv').css('display','block');
				   			jQuery("#bmiResults").html($bmiOutput);
				   		} else if(data.code == 0){
				   			console.log(data.msg);
			               	jQuery("#bmiResults").html("Code 0 data " + data);
				   		} else{
				   			console.log(data);
				   			jQuery('#bmiResultsDiv').css('display','block');
				   			jQuery("#bmiResults").html($bmiOutput);
				   		}
		            },
		            complete:function(data){
					    jQuery("#abcFormLoader").hide();
				   }
		        }); 

			} else{

				if($bmiOutput){

					var healthtools = { 
					        'calculator': 'bmi', 
					        'qna': {
					            'height' : $bmiHeightVal,
					            'weight' : $bmiWeightVal,
					            'result' : $bmiOutput
					        }
					    };

					// Set HT Form data in Local storage
					localStorage.setItem('healthtools', JSON.stringify(healthtools));

					var get_sub_email = localStorage.getItem('abhi_sub_email');


					if(get_sub_email){
						add_health_tool_data();						
					} else{
						jQuery('#bmiResultsDiv').css('display','block');
						jQuery("#bmiResults").html($bmiOutput);
						jQuery(".calSubBtn").show();
					}



					
			    } 

			}

		}
		
	    return false;
	}
});


/*************** Blood Pressure Calculator Start Here ****************/

function msgDisplay($msg){
	if($msg !== null){
		jQuery('.msgRes').css('display','block');
		jQuery('#msgError').css('display','block');
		jQuery('#msgError').html($msg);
	} else{
		jQuery('#msgError').css('display','none');
		jQuery('.msgRes').css('display','none');
	}
	return false;
}

function bpValidation($systolicV,$diastolicV){
$s = $systolicV;
$d = $diastolicV;

if($s < 70 && $d < 40){
	$msg = "Your <span class='red'>Systolic and Diastolic</span> number is <span class='red'>low</span>. Please check again.";
} else if($s < 70){
	$msg = "Your <span class='red'>Systolic</span> number is <span class='red'>low</span>. Please check again.";
} else if($d < 40){
	$msg = "Your <span class='red'>Diastolic</span> number is <span class='red'>low</span>. Please check again.";
} else if($s < 100 || $d < 70){
	$msg = "You have <span class='red'>low</span> blood pressure. <ul><li>Monitor for symptoms such as dizziness or lightheadedness, blurred vision, nausea, fatigue, confusion, rapid, shallow breathing. </li><li>You can seek medical help in case of any symptoms. </li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2016/12/30/5-lifestyle-changes-to-lower-your-blood-pressure/'>5 lifestyle changes to lower your blood pressure</a></li></ul>";
} else if($s < 121 || $d < 91){
	$msg = "Your Blood Pressure is <span class='text-green'>Normal</span>.";
} else if($s <= 140 || $d <= 100){
	$msg = "Your Blood Pressure is in the <span class='text-amber'>borderline</span>. <br><ul><li>Please try to be in the range of (100/70-120/80) mm Hg.</li><li>You may want to seek medical help in case of symptoms.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2019/04/02/tip-to-control-high-blood-pressure/'>5 Tips to Control High Blood Pressure</a></li></ul>";
} else if($s > 140 || $d > 100){
	$msg = "Your Blood Pressure is <span class='red'>High</span>. <br><ul><li>Please try to be in the range of (100/70-120/80) mm Hg.</li><li>You may want to seek medical help in case of symptoms.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2016/12/30/5-lifestyle-changes-to-lower-your-blood-pressure/'>5 lifestyle changes to lower your blood pressure</a></li></ul>";
}

	return $msg;
}

jQuery(document).on('submit','#bpForm',function(e){
	e.preventDefault();

	$bpcal1Val = jQuery("#bpcal1").val();
	$bpcal2Val = jQuery("#bpcal2").val();
	$memberId = jQuery("#memberId").val();
	$moduleName = jQuery("#moduleName").val();

	if($bpcal1Val && $bpcal2Val){
		bpValidation($bpcal1Val,$bpcal2Val);

		if($memberId && $moduleName){

				var formData = {
					action: 'bpDataSubmitApi',
	            	// security : rml_obj.ajax_nonce, 
		            'systolic': $bpcal1Val,
			        'diastolic': $bpcal2Val,
			        'memberId': $memberId,
			        'moduleName': $moduleName,
			        'resultMsg': $msg,
		        };

				jQuery.ajax({           
		            url : ajax_url,
		            type : 'post',
	    			dataType: 'json',
		            data: formData,
		            beforeSend: function(){
					    jQuery("#abcFormLoader").show();
				   	},
		            success : function( data ) {
		            	if(data.code == 1){
		            		console.log(data.msg);
			               	msgDisplay($msg);
				   		} else if(data.code == 0){
				   			console.log(data.msg);
			               	msgDisplay($msg);
				   		} else{
				   			console.log(data);
				   			msgDisplay($msg);
				   		}
		            },
		            complete:function(data){
					    jQuery("#abcFormLoader").hide();
				   }
		        }); 

			} else{
				if($msg){
					
					var healthtools = { 
				        'calculator': 'bp', 
				        'qna': {
				            'systolic': $bpcal1Val,
			        		'diastolic': $bpcal2Val,
				            'result' : $msg
				        }
				    };

					// Set HT Form data in Local storage
					localStorage.setItem('healthtools', JSON.stringify(healthtools));

					var get_sub_email = localStorage.getItem('abhi_sub_email');


					if(get_sub_email){
						add_health_tool_data();						
					} else{
						msgDisplay($msg);
						jQuery(".calSubBtn").show();
					}

			    } 
			}

	} else{
		$msg = "Please enter valid information";
		if($msg){
			msgDisplay($msg);
	    }
	}
	return false;
});


/*************** Blood Glucose Calculator Start Here ****************/

function bgValidation($fbs){
$fbsVal = $fbs;

if($fbsVal < 80){
	$msg = "Your blood glucose level is <span class='red'>low</span>. <br><ul><li>If you are a diabetic and your FBS is always < 80 mg/dl, you may want to talk to your doctor to adjust your insulin or diabetes medicine dosage.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2019/03/20/healthy-and-tasty-food-choices-to-keep-diabetes-at-bay/'>4 Diabetic Diet Meal Plan</a></li></ul>";
} else if($fbsVal <= 100){
	$msg = "Your Fasting blood sugar is <span class='text-green'>Normal</span>.";
} else if($fbsVal <= 120){
	$msg = "Your Fasting Blood Sugar is in the <span class='text-amber'>borderline</span>. <br><ul><li>Please try to be in the range of 80 - 100 mg/dL.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2019/07/18/go-on-a-liver-cleanse-with-these-5-foods/'>5 Healthy Foods To Include In Your Liver Cleansing Diet</a></li></ul>";
} else if($fbsVal > 120){
	$msg = "Your Fasting Blood Sugar is <span class='red'>High</span>. <br><ul><li>Please try to be in the range of 80 - 100 mg/dL.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2019/03/20/healthy-and-tasty-food-choices-to-keep-diabetes-at-bay/'>4 Diabetic Diet Meal Plan</a></li></ul>";
} 
	return $msg;
}

jQuery(document).on('submit','#bgForm',function(e){
	e.preventDefault();
	$bgcal1Val = jQuery("#bgcal1").val();
	$memberId = jQuery("#memberId").val();
	$moduleName = jQuery("#moduleName").val();

	if($bgcal1Val){
		bgValidation($bgcal1Val);

		if($memberId && $moduleName){

				var formData = {
					action: 'bgDataSubmitApi',
	            	// security : rml_obj.ajax_nonce, 
		            'fbs': $bgcal1Val,
			        'memberId': $memberId,
			        'moduleName': $moduleName,
			        'resultMsg': $msg,
		        };

				jQuery.ajax({           
		            url : ajax_url,
		            type : 'post',
	    			dataType: 'json',
		            data: formData,
		            beforeSend: function(){
					    jQuery("#abcFormLoader").show();
				   	},
		            success : function( data ) {
		            	if(data.code == 1){
		            		console.log(data.msg);
			               	msgDisplay($msg);
				   		} else if(data.code == 0){
				   			console.log(data.msg);
			               	msgDisplay($msg);
				   		} else{
				   			console.log(data);
				   			msgDisplay($msg);
				   		}
		            },
		            complete:function(data){
					    jQuery("#abcFormLoader").hide();
				   }
		        }); 

			} else{
				if($msg){
					
					var healthtools = { 
				        'calculator': 'bg', 
				        'qna': {
				            'fbs': $bgcal1Val,
				            'result' : $msg
				        }
				    };

					// Set HT Form data in Local storage
					localStorage.setItem('healthtools', JSON.stringify(healthtools));

					var get_sub_email = localStorage.getItem('abhi_sub_email');


					if(get_sub_email){
						add_health_tool_data();						
					} else{
						msgDisplay($msg);
						jQuery(".calSubBtn").show();
					}

			    } 
			}


	} else{
		$msg = "Please enter valid information";
		if($msg){
			msgDisplay($msg);
	    } 
	}

	return false;
});


/*************** Smoking Cost Calculator Start Here ****************/

function daysCal($selection,$current){
	var Difference_In_Time = $current.getTime() - $selection.getTime(); 
	var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
	$days = Math.round(Difference_In_Days); 
	return $days;
}

function smokingCostCal($days,$perDay,$InPacket,$perCost){
	$fromDays = $perDay * $days; 
	$packUsed = $fromDays / $InPacket;
	$totalSmokingCost = $packUsed * $perCost;
	return 	$totalSmokingCost;
}

function smokingResult($totalSmokingCostV){
$scval = Math.round($totalSmokingCostV);

if($scval <= 0){
	$msg = "<span class='red'>Please select proper date when you have started smoking. </span>";
} else if($scval < 500){
	$msg = "Your smoking cost to date : Rs. "+$scval+"<br><ul></ul>";
} else if($scval < 5000){
	$msg = "Your smoking cost to date : Rs. "+$scval+"<br><ul></ul>";
} else if($scval < 10000){
	$msg = "Your smoking cost to date : Rs. "+$scval+"<br><ul></ul>";
} else if($scval < 50000){
	$msg = "Your smoking cost to date : Rs. "+$scval+"<br><ul></ul>";
} else if($scval >= 50000){
	$msg = "Your smoking cost to date : Rs. "+$scval+"<br><ul></ul>";
} 
	return $msg;
}


jQuery(document).on('submit','#smokingForm',function(e){
	e.preventDefault();
	var smokingDateVal = document.getElementById("smokingDate").value;
	var sDate = new Date(smokingDateVal); 
	var cDate = new Date();
  	daysCal(sDate,cDate);

  	$smokingDaysV = $days;
  	$smokingPackCostV = jQuery("#smokingPackCost").val();
  	$smokingInPackV = jQuery("#smokingInPack").val();
  	$smokingPerDayV = jQuery("#smokingPerDay").val();
  	$memberId = jQuery("#memberId").val();
  	$moduleName = jQuery("#moduleName").val();
  	$moduleName = jQuery("#moduleName").val();

  	smokingCostCal($smokingDaysV,$smokingPerDayV,$smokingInPackV,$smokingPackCostV);  	
	smokingResult($totalSmokingCost);

	if($memberId && $moduleName){

			var formData = {
				action: 'cosDataSubmitApi',
            	// security : rml_obj.ajax_nonce, 
	            'smokingdays': $smokingDaysV,
	            'smokingPackCost': $smokingPackCostV,
	            'smokingInPack': $smokingInPackV,
	            'smokingPerDay': $smokingPerDayV,
		        'memberId': $memberId,
		        'moduleName': $moduleName,
		        'resultMsg': $msg,
	        };

			jQuery.ajax({           
	            url : ajax_url,
	            type : 'post',
    			dataType: 'json',
	            data: formData,
	            beforeSend: function(){
				    jQuery("#abcFormLoader").show();
			   	},
	            success : function( data ) {
	            	if(data.code == 1){
	            		console.log(data.msg);
		               	msgDisplay($msg);
			   		} else if(data.code == 0){
			   			console.log(data.msg);
		               	msgDisplay($msg);
			   		} else{
			   			console.log(data);
			   			msgDisplay($msg);
			   		}
	            },
	            complete:function(data){
				    jQuery("#abcFormLoader").hide();
			   }
	        }); 

		} else{
			if($msg){

				var healthtools = { 
		        	'calculator': 'smoking-cost', 
			        'qna': {
			            'smokingdays': $smokingDaysV,
			            'smokingPackCost': $smokingPackCostV,
			            'smokingInPack': $smokingInPackV,
			            'smokingPerDay': $smokingPerDayV,
			            'result' : $msg
			        }
			    };

				// Set HT Form data in Local storage
				localStorage.setItem('healthtools', JSON.stringify(healthtools));

				var get_sub_email = localStorage.getItem('abhi_sub_email');


				if(get_sub_email){
					add_health_tool_data();						
				} else{
					msgDisplay($msg);
					jQuery(".calSubBtn").show();
				}

		    } 
		}

	return false;
});





/*************** Cycle Calculator Start Here ****************/

function indDataFormat($date){
	$oDay = $date.getDate();
	$oMonth = $date.getMonth() + 1;
	$oYear = $date.getFullYear();
	$FullDate = $oDay + "/" + $oMonth + "/" + $oYear;

	return $FullDate;
}

function OvulationCal($Selecteddate,$cycleLength){

	if($Selecteddate && $cycleLength){
		$cycleDaysLength = $cycleLength - 14;

		$Selecteddate.setDate($Selecteddate.getDate() + $cycleDaysLength);
		
		// Final Ovulation Date for Output
		$OvulationDate = $Selecteddate;

	} 

	return $OvulationDate;
}

function FerterlityPeriod($OvulationDate){

		$startDate = $OvulationDate;
		
		$OvulationDate.setDate($OvulationDate.getDate() - 6);

		indDataFormat($OvulationDate);

		$fertileDate = $FullDate;

		return $fertileDate;
}

function cycleResult($ovuDate, $fertileDate){
	$msg = "<ul><li>Your estimated ovulation date is : <span class='red'>" + $ovuDate +"</span></li><li>Your estimated fertile window is : <span class='red'>" + $fertileDate +" to "+ $ovuDate +"</span></li></ul>";

	return $msg;
}


jQuery(document).on('submit','#cycleForm',function(e){
	e.preventDefault();

	$cycleLength = parseInt(jQuery("#cycleLength").val());
	$memberId = jQuery("#memberId").val();
	$moduleName = jQuery("#moduleName").val();

	var periodDateVal = document.getElementById("cycleDate").value;
	var pDate = new Date(periodDateVal);

	// Run Ovulation Funtion to get Ovulation Date
	OvulationCal(pDate,$cycleLength);

	if($OvulationDate){

		indDataFormat($OvulationDate);

		$ovuDate = $FullDate;


		// Run FerterlityPeriod Funtion to get Fertility Period to concieve
		FerterlityPeriod($OvulationDate);

		if($fertileDate){

			cycleResult($ovuDate,$fertileDate);

			if($memberId && $moduleName){

				var speriodDateVal = document.getElementById("cycleDate").value;
				var sDate = new Date(speriodDateVal);

				indDataFormat(sDate);

				var formData = {
					action: 'cycleDataSubmitApi',
	            	// security : rml_obj.ajax_nonce, 
		            'cycleDate': $FullDate,
		            'cycleLength': $cycleLength,
			        'memberId': $memberId,
			        'moduleName': $moduleName,
			        'resultMsg': $msg,
		        };

				jQuery.ajax({           
		            url : ajax_url,
		            type : 'post',
	    			dataType: 'json',
		            data: formData,
		            beforeSend: function(){
					    jQuery("#abcFormLoader").show();
				   	},
		            success : function( data ) {
		            	if(data.code == 1){
		            		console.log(data.msg);
			               	msgDisplay($msg);
				   		} else if(data.code == 0){
				   			console.log(data.msg);
			               	msgDisplay($msg);
				   		} else{
				   			console.log(data);
				   			msgDisplay($msg);
				   		}
		            },
		            complete:function(data){
					    jQuery("#abcFormLoader").hide();
				   }
		        }); 

			} else{
				if($msg){
					
					var healthtools = { 
				        'calculator': 'cycle', 
				        'qna': {
				            'cycleDate': $FullDate,
		            		'cycleLength': $cycleLength,
				            'result' : $msg
				        }
				    };

					// Set HT Form data in Local storage
					localStorage.setItem('healthtools', JSON.stringify(healthtools));

					var get_sub_email = localStorage.getItem('abhi_sub_email');


					if(get_sub_email){
						add_health_tool_data();						
					} else{
						msgDisplay($msg);
						jQuery(".calSubBtn").show();
					}

			    } 
			}

			return false;


		}

	}



});





/*************** Ideal Weight Calculator Start Here ****************/

// Get Height Value for Ideal Weight Formula 
function IwheightToInches($feet,$inch){
	$heightFeet = $feet;
	$heightInch = $inch;
	$heightFeetValue = $heightFeet * 12;
	$HeightResult = parseInt($heightFeetValue) + parseInt($heightInch);
	// $hVal = $HeightResult * $HeightResult;
	return $HeightResult;
}

function iwLogic($age, $heightInInch){
	// Check if age is above 14 years or not
	if($age > 14){
		$iwVal = Math.pow(($heightInInch/39.37), 2)*21.75;
		$iwVal = $iwVal.toFixed(2);
	} else{
		$months = $age * 12;

		if($months <= 12){
			$iwVal = ($months + 9) / 2;
			$iwVal = $iwVal.toFixed(2);
		} else if($months > 12 && $months <= (5*12)){
			$iwVal = ((Math.round($months/12,0))*2)+10;
			$iwVal = $iwVal.toFixed(2);
		} else {
			$iwVal = (Math.round($months/12,0))*4;
			$iwVal = $iwVal.toFixed(2);
		}
	}
	return $iwVal;
}


// Ideal Weight Calculation after form submission 
jQuery(document).on('submit','#iwForm',function(e){
	e.preventDefault();

	$iwAge = jQuery("#iwAge").val();
 	$iwHeight = jQuery("#iwHeight").val();
 	$memberId = jQuery("#memberId").val();
 	$moduleName = jQuery("#moduleName").val();


 	$hRes = $iwHeight.split('.');
	$hFeet = $hRes[0];
	$hInch = $hRes[1];


	if($hInch > 11 || $hFeet <= 0){
		$hmsg = "<span class=\"red\">Please enter valid height. Example 5.11 </span>";
		msgDisplay($hmsg);
	} else if($iwAge <= 0){
		$agemsg = "<span class=\"red\">Please enter valid age </span>";
		msgDisplay($agemsg);
	} else{
		if($hInch){
		IwheightToInches($hFeet,$hInch);
		}else{
			$hInch = 00;//Default Inch Value
			IwheightToInches($hFeet,$hInch);
		}

		if($HeightResult){
			iwLogic($iwAge, $HeightResult);

			if($iwVal){
				$iwOutput = "Your Ideal Weight should be : <span style='color:green'>"+ $iwVal + " Kg.</span>";

				if($memberId && $moduleName){

				var formData = {
					action: 'iwDataSubmitApi',
	            	// security : rml_obj.ajax_nonce, 
		            'iwAge': $iwAge,
		            'iwHeight': $iwHeight,
			        'memberId': $memberId,
			        'moduleName': $moduleName,
			        'resultMsg': $iwOutput,
		        };

				jQuery.ajax({           
		            url : ajax_url,
		            type : 'post',
	    			dataType: 'json',
		            data: formData,
		            beforeSend: function(){
					    jQuery("#abcFormLoader").show();
				   	},
		            success : function( data ) {
		            	if(data.code == 1){
		            		console.log(data.iwOutput);
			               	msgDisplay($iwOutput);
				   		} else if(data.code == 0){
				   			console.log(data.iwOutput);
			               	msgDisplay($iwOutput);
				   		} else{
				   			console.log(data);
				   			msgDisplay($iwOutput);
				   		}
		            },
		            complete:function(data){
					    jQuery("#abcFormLoader").hide();
				   }
		        }); 

			} else{
				if($iwOutput){

					var healthtools = { 
				        'calculator': 'ideal-weight', 
				        'qna': {
				            'iwAge' : $iwAge,
				            'iwHeight' : $iwHeight,
				            'result' : $iwOutput
				        }
				    };

					// Set HT Form data in Local storage
					localStorage.setItem('healthtools', JSON.stringify(healthtools));

					var get_sub_email = localStorage.getItem('abhi_sub_email');


					if(get_sub_email){
						add_health_tool_data();						
					} else{
						msgDisplay($iwOutput);
						jQuery(".calSubBtn").show();
					}

			    } 


			}


			}
		}
		
	    return false;
	}
});



// Hash Scroll down to id functionality
jQuery(document).ready(function(){
  jQuery(".sub_scroll_btn").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
  
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
      }, 1000);
    } // End if
  });
});



// Health from home Header Menu Click Event
jQuery('.hfhMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[health-from-home]'
  })
});

// Header Menu Click Event
jQuery('.waistHipRatioMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[waist-hip-ratio]'
  })
});

jQuery('.bmiCalMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[bmi-calculator]'
  })
});

jQuery('.idealWeightMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[ideal-weight]'
  })
});

jQuery('.bmrCalMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[bmr-calculator]'
  })
});

jQuery('.bloodPressureMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[blood-pressure]'
  })
});

jQuery('.bloodGlucoseMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[blood-glucose]'
  })
});

jQuery('.cycleCalMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[cycle-calculator]'
  })
});

jQuery('.cholesterolCalMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[cholesterol-calculator]'
  })
});

jQuery('.smokingCostMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[smoking-cost]'
  })
});

jQuery('.asthmaCalMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[asthma-calculator]'
  })
});

jQuery('.chronicCalMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[chronic-disease]'
  })
});

jQuery('.covid19CalMenu').click(function() {
  gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[covid19-self-assessment]'
  })
});

// Health from home page click event
jQuery('#hfh-banner-slider .item.active a').click(function() {
  gtag('event','click-button',{
    'event_category':'health-from-home',
    'event_label':'blog-banner_[health-from-home-page]'
  })
});

// Yoga Post page click event
jQuery('#hfhPostsDivyoga .hfhSubModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDivyoga .hfhSubModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','yoga',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});

// Fitness Post page click event
jQuery('#hfhPostsDiv .hfhSubModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDiv .hfhSubModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','fitness',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});


// Nutrition Post page click event
jQuery('#hfhPostsDivNutrition .hfhSubModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDivNutrition .hfhSubModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','nutrition',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});

// Wellness Post page click event
jQuery('#hfhPostsDivWellness .hfhSubModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDivWellness .hfhSubModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','wellness',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});




// Yoga Video Post page click event
jQuery('#hfhPostsDivyoga .YTVideoModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDivyoga .YTVideoModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','yoga',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});

// Fitness Video Post page click event
jQuery('#hfhPostsDiv .YTVideoModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDiv .YTVideoModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','fitness',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});


// Nutrition Video Post page click event
jQuery('#hfhPostsDivNutrition .YTVideoModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDivNutrition .YTVideoModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','nutrition',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});

// Wellness Video Post page click event
jQuery('#hfhPostsDivWellness .YTVideoModalOpen').click(function() {
   $postTitle = jQuery(this).closest("#hfhPostsDivWellness .YTVideoModalOpen").find(".w3-container p").text().trim().toLowerCase();

   gtag('event','wellness',{
    'event_category':'health-from-home',
    'event_label':$postTitle,
  })
});



// Email Subscription Modal Form click event
jQuery('#YTModalDiv #abhi_es_form_submit').click(function() {
   gtag('event','active-together-form',{
    'event_category':'health-from-home',
    'event_label':'subscribe now',
  })
});

// Email Subscription Footer Form click event
jQuery('.page-template-page-health-from-home footer .es_subscription_form_submit').click(function() {
   gtag('event','stay-updated-with-us',{
    'event_category':'health-from-home',
    'event_label':'subscribe',
  })
});


// Health from home live page Email Subscription Footer Form click event
jQuery('.footerHfhSubscription #abhi_es_form_submit').click(function() {
   gtag('event','video-update-on-health-from-home',{
    'event_category':'health-from-home-live',
    'event_label':'register',
  })
});


// HFH Live Page Sidebar Specific Post
jQuery('.hfh-sidebar .post_ids-posts li.widget-entry > div > a').click(function() {
   $postTitleHfh = jQuery(this).closest(".hfh-sidebar .post_ids-posts li").find(".entry-title-link").text().trim().toLowerCase();

   gtag('event','latest-articles',{
    'event_category':'health-from-home-live',
    'event_label':$postTitleHfh,
  })
});


// HFH Email Subscriber form Click Gtag and Facebook Pixel Function
jQuery('#abhi_es_form_submit').click(function() {
    gtag_report_conversion();
  	abhi_hfh_fb_px();
});


// Header Navigation Email Subscription Scroll Button click event
jQuery('.abcBtnHeader').click(function() {
   gtag('event','Blog subscription',{
    'event_category':'header click',
    'event_label':'subscribe',
  })
});

// Header Navigation Mindfulness category click event 
jQuery('.HeaderMenuMindfulness a').click(function() {
   gtag('event','click-button',{
    'event_category':'blog-header',
    'event_label':'blog-header_[Mindfulness]',
  })
});

// Scroll Button below homepage banner click event
jQuery('.home-section-content .abcBtn').click(function() {
   gtag('event','Blog subscription',{
    'event_category':'home page  body click',
    'event_label':'subscribe now',
  })
});

// Footer Email Subscription Form submit event
jQuery('#abhi_es_form_footer').submit(function() {
   gtag('event','Blog-subscription',{
    'event_category':'footer-form-click',
    'event_label':'subscribe',
  })
  gtag_report_conversion_footer();
  abhi_footer_hfh_fb_px();
});


// New Health Tools Click events on submit
// BMI
jQuery('#bmiForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[bmi-submit]'
  })
});

// Blood Pressure
jQuery('#bpForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[blood-pressure-submit]'
  })
});

// Blood Glucose
jQuery('#bgForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[blood-glucose-submit]'
  })
});

// Smoking Cost
jQuery('#smokingForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[smoking-cost-submit]'
  })
});

// Ideal Weight
jQuery('#iwForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[ideal-weight-submit]'
  })
});

// Cycle Cal
jQuery('#cycleForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[cycle-submit]'
  })
});


// cholesterol Click Event
jQuery('#cholesterolForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[cholesterol-submit]'
  })
});

// Waist Hip Ratio Click Event
jQuery('#wirForm').submit(function() {
  gtag('event','click-button',{
    'event_category':'health-tools',
    'event_label':'health-tools_[waist-hip-ratio-submit]'
  })
});


// Home page mobile view Click Event Starts here
// Latest Articles Mobile
jQuery('.home #carousel-1 .carousel-item > a').click(function() {
   $postTitleHfh = jQuery(this).closest(".home #carousel-1 .carousel-item > a").find(".slider_article_title").text().trim().toLowerCase();

   gtag('event','click-button',{
    'event_category':'homepage-mobile-latest-articles',
    'event_label':$postTitleHfh,
  })
});

// Popular Articles Mobile
jQuery('.home #popular_articles_home .carousel-item > a').click(function() {
   $postTitleHfh = jQuery(this).closest(".home #popular_articles_home .carousel-item > a").find(".slider_article_title").text().trim().toLowerCase();

   gtag('event','click-button',{
    'event_category':'homepage-mobile-popular-articles',
    'event_label':$postTitleHfh,
  })
});


// Stay well read more button click
jQuery('.home #stayWellLink').click(function() {
  gtag('event','click-button',{
    'event_category':'mobile-staywell-read-more',
    'event_label':'staywell_[read-more-button]'
  })
});


// Category Tabs Menu Mobile 
jQuery('.home .cat-tab-slider .cat-tab-menu > ul > li').click(function() {
   $postTitleHfh = jQuery(this).closest(".home .cat-tab-slider .cat-tab-menu > ul > li").find("a").text().trim().toLowerCase();

   gtag('event','click-button',{
    'event_category':'cat-tab-menu',
    'event_label':$postTitleHfh,
  })
});



// Fitness Category Tab Slider Articles Mobile
jQuery('.home #fitness-cat-carousel .carousel-item .cat-img-link, .home #fitness-cat-carousel .carousel-item .cat-title-link, .home #fitness-cat-carousel .carousel-item .cat-more-link').click(function() {
   $catTitleArticle = jQuery(this).closest(".home #fitness-cat-carousel .carousel-item").find(".cat-title-link").text().trim().toLowerCase();

   gtag('event','click-button',{
    'event_category':'homepage-mobile-category-tab',
    'event_label':'fitness<><'+$catTitleArticle+'>',
  })
});

// Nutrition Category Tab Slider Articles Mobile
jQuery('.home #nutrition-cat-carousel .carousel-item .cat-img-link, .home #nutrition-cat-carousel .carousel-item .cat-title-link, .home #nutrition-cat-carousel .carousel-item .cat-more-link').click(function() {
   $catTitleArticle = jQuery(this).closest(".home #nutrition-cat-carousel .carousel-item").find(".cat-title-link").text().trim().toLowerCase();

   gtag('event','click-button',{
    'event_category':'homepage-mobile-category-tab',
    'event_label':'nutrition<><'+$catTitleArticle+'>',
  })
});


// Lifestyle Category Tab Slider Articles Mobile
jQuery('.home #lifestyle-cat-carousel .carousel-item .cat-img-link, .home #lifestyle-cat-carousel .carousel-item .cat-title-link, .home #lifestyle-cat-carousel .carousel-item .cat-more-link').click(function() {
   $catTitleArticle = jQuery(this).closest(".home #lifestyle-cat-carousel .carousel-item").find(".cat-title-link").text().trim().toLowerCase();

   gtag('event','click-button',{
    'event_category':'homepage-mobile-category-tab',
    'event_label':'lifestyle<><'+$catTitleArticle+'>',
  })
});


// If mobile app then all links will add parameter fromApp=1
jQuery(document).ready(function(){
	var getUrl = window.location.search;
	var getUrlParams = new URLSearchParams(getUrl);
	var is_app = getUrlParams.get('fromApp');
	var is_app1 = getUrlParams.get('fromapp');

	var singleTemplate = jQuery('body').hasClass('single');
	var archiveTemplate = jQuery('body').hasClass('archive');
	
	if( (is_app == 1 || is_app1 == 1) && (singleTemplate == true || archiveTemplate == true) && window.screen.width <= 1024){	
		jQuery("#abhi-top-header").hide();	
		jQuery('a[href]').each(function(){ 
            var params = { fromApp:1 };
			var str = jQuery.param( params );
            var oldUrl = jQuery(this).attr("href");
            var mainurl = oldUrl+"?"+str;
            jQuery(this).attr("href", mainurl); 
        });
	} 
});






/*************** Cholesterol Calculator Start Here ****************/

function cholesterolResult($cholestrolReading){
$colVal = Math.round($cholestrolReading);

if($colVal <= 0){
	$msg = "<span class='red'>Please select proper cholesterol reading. </span>";
} else if($colVal < 50){
	$msg = "Your Cholesterol is <span class='red'>too low</span>.<br><ul><li>If you are a diabetic and your FBS is always < 80 mg/dl, you may want to talk to your doctor to adjust your insulin or diabetes medicine dosage.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2019/04/07/7-lifestyle-changes-to-reduce-cholesterol-levels/'>How to Reduce Cholesterol Level Naturally with Lifestyle Changes</a></li></ul>";
} else if($colVal <= 200){
	$msg = "Your Cholesterol is <span class='text-green'>normal</span>.";
} else if($colVal <= 300){
	$msg = "Your Cholesterol is in the <span class='text-amber'>borderline</span>.<ul><li>Your target Cholesterol should be below 200 mg/dL.</li><li>If you are a diabetic and your FBS is always < 80 mg/dl, you may want to talk to your doctor to adjust your insulin or diabetes medicine dosage.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2017/04/18/effects-of-high-cholesterol-on-the-body/'>4 Diabetic Diet Meal Plan</a></li></ul>";
} else if($colVal > 300){
	$msg = "Your Cholesterol is <span class='red'>high</span>.<br><ul><li>You could have bought a smart phone with the money you would have saved and saved your lungs too!.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2019/03/20/healthy-and-tasty-food-choices-to-keep-diabetes-at-bay/'>Addiction to Smoking: What, Why and How to Stop</a></li></ul>";
}	
return $msg;
}


jQuery(document).on('submit','#cholesterolForm',function(e){
	e.preventDefault();

  	$cholesterolReadingValue = jQuery("#cholesterolReading").val();
  	$memberId = jQuery("#memberId").val();
  	$moduleName = jQuery("#moduleName").val();
  	$moduleName = jQuery("#moduleName").val();
	
	cholesterolResult($cholesterolReadingValue);

	if($memberId && $moduleName){

			var formData = {
				action: 'cholesterolDataSubmitApi',
            	// security : rml_obj.ajax_nonce, 
	            'cholesterolReading': $cholesterolReadingValue,
		        'memberId': $memberId,
		        'moduleName': $moduleName,
		        'resultMsg': $msg,
	        };

			jQuery.ajax({           
	            url : ajax_url,
	            type : 'post',
    			dataType: 'json',
	            data: formData,
	            beforeSend: function(){
				    jQuery("#abcFormLoader").show();
			   	},
	            success : function( data ) {
	            	if(data.code == 1){
	            		console.log(data.msg);
		               	msgDisplay($msg);
			   		} else if(data.code == 0){
			   			console.log(data.msg);
		               	msgDisplay($msg);
			   		} else{
			   			console.log(data);
			   			msgDisplay($msg);
			   		}
	            },
	            complete:function(data){
				    jQuery("#abcFormLoader").hide();
			   }
	        }); 

		} else{
			if($msg){
				
				var healthtools = { 
		        	'calculator': 'cholesterol', 
			        'qna': {
			            'cholesterolReading': $cholesterolReadingValue,
			            'result' : $msg
			        }
			    };

				// Set HT Form data in Local storage
				localStorage.setItem('healthtools', JSON.stringify(healthtools));

				var get_sub_email = localStorage.getItem('abhi_sub_email');


				if(get_sub_email){
					add_health_tool_data();						
				} else{
					msgDisplay($msg);
					jQuery(".calSubBtn").show();
				}

		    } 
		}

	return false;
});






/*************** Waist Hip Ratio (WHR) Calculator Start Here ****************/

function whrResult(gender, waist, hip){

	var wirRatio = waist / hip;
	var wirValue = (parseFloat(wirRatio).toFixed(2));

	if(gender == "Male"){
		// Male Waiste Hip Ratio
		if(wirValue < 0.95){
			$msg = "Your Waist Hip Ratio is <span class='text-green'>"+wirValue+"</span>. <br><ul><li>You are at a <span class='text-green'>low risk</span> of developing health problems.</li></ul>";
		} else if(wirValue <= 1.02){
			$msg = "Your Waist Hip Ratio is <span class='text-amber'>"+wirValue+"</span>. <br><ul><li>You are at a <span class='text-amber'>moderate risk</span> of developing health problems.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2017/06/14/how-to-get-rid-of-that-excess-fat-round-your-waist/'>How to get rid of that excess fat round your waist</a></li></ul>";
		} else if(wirValue > 1.02){
			$msg = "Your Waist Hip Ratio is <span class='red'>"+wirValue+"</span>. <br><ul><li>You are at a <span class='red'>high risk</span> of developing health problems.</li><li>A healthy WHR should be less than 0.95 to avoid health problems.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2016/12/22/5-tips-to-maintain-your-summer-waistline-in-winter/'>5 Tips to Maintain Your Summer Waistline in Winter</a></li></ul>";
		}

	} else{
		// Female Waiste Hip Ratio
		if(wirValue < 0.85){
			$msg = "Your Waist Hip Ratio is <span class='text-green'>"+wirValue+"</span>. <br><ul><li>You are at a <span class='text-green'>low risk</span> of developing health problems.</li></ul>";
		} else if(wirValue <= 1.02){
			$msg = "Your Waist Hip Ratio is <span class='text-amber'>"+wirValue+"</span>. <br><ul><li>You are at a <span class='text-amber'>moderate risk</span> of developing health problems.</li><li>A healthy WHR should be less than 0.85 to avoid health problems.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2017/06/14/how-to-get-rid-of-that-excess-fat-round-your-waist/'>How to get rid of that excess fat round your waist</a></li></ul>";
		} else if(wirValue > 1.02){
			$msg = "Your Waist Hip Ratio is <span class='red'>"+wirValue+"</span>. <br><ul><li>You are at a <span class='red'>high risk</span> of developing health problems.</li><li>A healthy WHR should be less than 0.85 to avoid health problems.</li><li>You can check our below articles to improve your health. <br><a href='https://www.adityabirlacapital.com/healthinsurance/active-together/2016/12/22/5-tips-to-maintain-your-summer-waistl cbine-in-winter/'>5 Tips to Maintain Your Summer Waistline in Winter</a></li></ul>";
		}

	}
	return $msg;
}


jQuery(document).on('submit','#wirForm',function(e){
	e.preventDefault();

    $wirGenderVal = jQuery("input[name='gender']:checked").val();
    $wirWaist = jQuery('#waistc1').val();
	$wirHip = jQuery('#hipc1').val();
  	$memberId = jQuery("#memberId").val();
  	$moduleName = jQuery("#moduleName").val();
	
	whrResult($wirGenderVal, $wirWaist, $wirHip);

	if($memberId && $moduleName){

			var formData = {
				action: 'wirDataSubmitApi',
            	// security : rml_obj.ajax_nonce, 
	            'wirGenderVal': $wirGenderVal,
	            'wirWaist': $wirWaist,
	            'wirHip': $wirHip,
		        'memberId': $memberId,
		        'moduleName': $moduleName,
		        'resultMsg': $msg,
	        };

			jQuery.ajax({           
	            url : ajax_url,
	            type : 'post',
    			dataType: 'json',
	            data: formData,
	            beforeSend: function(){
				    jQuery("#abcFormLoader").show();
			   	},
	            success : function( data ) {
	            	if(data.code == 1){
	            		console.log(data.msg);
		               	msgDisplay($msg);
			   		} else if(data.code == 0){
			   			console.log(data.msg);
		               	msgDisplay($msg);
			   		} else{
			   			console.log(data);
			   			msgDisplay($msg);
			   		}
	            },
	            complete:function(data){
				    jQuery("#abcFormLoader").hide();
			   }
	        }); 

		} else{
			if($msg){

			    var healthtools = { 
				        'calculator': 'waist-hip-ratio', 
				        'qna': {
				            'wirGenderVal' : $wirGenderVal,
				            'wirWaist' : $wirWaist,
				            'wirHip' : $wirHip,
				            'result' : $msg
				        }
				    };

				// Set HT Form data in Local storage
				localStorage.setItem('healthtools', JSON.stringify(healthtools));

				var get_sub_email = localStorage.getItem('abhi_sub_email');


				if(get_sub_email){
					add_health_tool_data();						
				} else{
					msgDisplay($msg);
					jQuery(".calSubBtn").show();
				}


		    } 



		}

	return false;
});





/*************** Basal Metabolic Rate (BMR) Calculator Start Here ****************/

function bmrCal(gender, weight, height, age){
	$BMR = 0;

	switch(gender) {
		case 'male':
			$BMR = 10 * weight + 6.25 * height - 5 * age + 5;
			break;
		case 'female':
			$BMR = 10 * weight + 6.25 * height - 5 * age - 161;
			break;
	}
	return $BMR;
}

function bmrCalAct(bmr, activityLevel){
	$BMR = bmr;

	switch(activityLevel) {
		case 'little':
			$bmrActLevel = $BMR * 1.2;
			break;
		case 'light':
			$bmrActLevel = $BMR * 1.375;
			break;
		case 'moderate':
			$bmrActLevel = $BMR * 1.55;
			break;
		case 'heavy':
			$bmrActLevel = $BMR * 1.725;
			break;
		case 'very_heavy':
			$bmrActLevel = $BMR * 1.9;
			break;
	}
	return $bmrActLevel;
}


function bmrResultOutput(bmi, bmr, bmrAct){

	$BMI = bmi;

	if($BMI < 18.5) {
		$bmiStatus = "<span class='text-amber'>underweight </span>.";
	} else if($BMI < 25){
		$bmiStatus = "<span class='text-green'>normal </span>.";
	} else if($BMI < 30) {
		$bmiStatus = "<span class='text-amber'>overweight </span>.";
	} else if($BMI >= 30) {
		$bmiStatus = "<span class='red'>obese </span>.";
	}

	$bmrResMsg = "You are "+$bmiStatus+" <br><ul><li>Your BMI is " + $BMI +"</li><li>BMR " + bmr + " kcal/day</li><li>BMR with Activity Factor is "+ bmrAct +"</li></ul>";

	return $bmrResMsg;
}



jQuery(document).on('submit','#bmrForm',function(e){
	e.preventDefault();

	$bmrActVal = jQuery("#activity_level").val();
	$bmrGenderVal = jQuery("#bmrGender").val();
    $bmrAgeVal = jQuery('#bmrAge').val();
    $bmrWeightVal = jQuery('#bmrWeight').val();
	$bmrHeightVal = jQuery('#bmrHeight').val();

	$memberId = jQuery("#memberId").val();
  	$moduleName = jQuery("#moduleName").val();

 	$hRes = $bmrHeightVal.split('.');
	$hFeet = $hRes[0];
	$hInch = $hRes[1];

	

	if($hInch > 11 || $bmrAgeVal > 150){
		msgDisplay(null);
		if($bmrAgeVal > 150){
			$msg = "Age should be less than 150 years.";
			jQuery("#bmrMsgError").css('color','red');
			jQuery("#bmrMsgError").show();
			jQuery("#bmrMsgError").html($msg);
		}

		if($hInch > 11){
			$msg = "Height Inch should be below 12";
			jQuery("#bmrMsgError").css('color','red');
			jQuery("#bmrMsgError").show();
			jQuery("#bmrMsgError").html($msg);

		}

	} else{
		jQuery("#bmrMsgError").hide();

		if($hInch){
		heightToInches($hFeet,$hInch);
		}else{
			$hInch = 00;//Default Inch Value
			heightToInches($hFeet,$hInch);
		}

	 	kgToPound($bmrWeightVal);

	 	// BMI Calculation Formula
	 	BMIFormula($hVal,$weightInPound);//Got Parameter data from Height and Weight Function

	 	if($calBmi){
	 		// BMI Output Value 
			$bmiFloat = $calBmi.toFixed(2);

			// BMR Output Value - return $BMR
			bmrCal($bmrGenderVal, $bmrWeightVal, $bmrHeightVal, $bmrAgeVal);

			// BMR with Activity Level Calculation Value - return $bmrActLevel
			bmrCalAct($BMR, $bmrActVal)

			bmrResultOutput($bmiFloat, $BMR, $bmrActLevel);

			if($memberId && $moduleName){

				var formData = {
					action: 'bmrDataSubmitApi',
	            	// security : rml_obj.ajax_nonce, 
		            'bmrActVal': $bmrActVal,
		            'bmrGenderVal': $bmrGenderVal,
		            'bmrAgeVal': $bmrAgeVal,
		            'bmrWeightVal': $bmrWeightVal,
		            'bmrHeightVal': $bmrHeightVal,
			        'memberId': $memberId,
			        'moduleName': $moduleName,
			        'resultMsg': $bmrResMsg,
		        };

				jQuery.ajax({           
		            url : ajax_url,
		            type : 'post',
	    			dataType: 'json',
		            data: formData,
		            beforeSend: function(){
					    jQuery("#abcFormLoader").show();
				   	},
		            success : function( data ) {
		            	if(data.code == 1){
		            		console.log(data.msg);
			               	msgDisplay($bmrResMsg);
				   		} else if(data.code == 0){
				   			console.log(data.msg);
			               	msgDisplay($bmrResMsg);
				   		} else{
				   			console.log(data);
				   			msgDisplay($bmrResMsg);
				   		}
		            },
		            complete:function(data){
					    jQuery("#abcFormLoader").hide();
				   }
		        }); 

			} else{
				if($bmrResMsg){
					var healthtools = { 
				        'calculator': 'bmr', 
				        'qna': {
				            'ActivityFactor' : $bmrActVal,
				            'Gender': $bmrGenderVal,
				            'Age': $bmrAgeVal,
				            'Weight': $bmrWeightVal,
				            'Height': $bmrHeightVal,
				            'result' : $bmrResMsg
				        }
				    };

					// Set HT Form data in Local storage
					localStorage.setItem('healthtools', JSON.stringify(healthtools));

					var get_sub_email = localStorage.getItem('abhi_sub_email');


					if(get_sub_email){
						add_health_tool_data();						
					} else{
						msgDisplay($bmrResMsg);
						jQuery(".calSubBtn").show();
					}

			    } 
			}

		} 

	}
	return false;
});






// Activ Health V2 Tool Start here
function msgDisplayV2($step,$msg){
	if($msg !== null){
		jQuery('.msgRes').css('display','block');
		jQuery($step).css('display','block');
		jQuery($step).html($msg);
	} else{
		jQuery($step).css('display','none');
		jQuery('.msgRes').css('display','none');
	}
	return false;
}

 function checkIllness(illnessCheckedVal){
	if(illnessCheckedVal == "yes"){
		jQuery("#illnessYes").css("display","inline-block");
		jQuery("#illnessYes").focus();
	} else{
		jQuery(".step5errorMsg").css("display","none");
		jQuery("#illnessYes").css("display","none");
	}
}

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}

function nextBtnValidation(step){
	if(step == 1){
		$name = jQuery('#fullname').val();
		$dob = jQuery('#dob').val();

		if($name !== "" && $dob !== ""){

			var selectedDateVal = new Date($dob);
	        var todayDate = new Date();
	        if ( selectedDateVal > todayDate ) { 
	            msgDisplayV2(".step1error","Date should be less than today's date.");
				jQuery("#step1Btn").attr("href", "javascript:void()");
	        } else{
	        	msgDisplayV2(".step1error",null);
				jQuery("#step1Btn").attr("href", "#activHealthCarousel");
	        }
			
		} else{
			msgDisplayV2(".step1error","All fields are mandatory");
			jQuery("#step1Btn").attr("href", "javascript:void()");

		}
	} else if(step == 2){

		var workoutChecked = jQuery("input[name='workoutVal']:checked");

		var workoutVal = workoutChecked.val();

		if(workoutChecked.length !== 0){
			msgDisplayV2(".step2error",null);
			jQuery("#step2Btn").attr("href", "#activHealthCarousel");
		} else{
			msgDisplayV2(".step2error","Please select any one");
			jQuery("#step2Btn").attr("href", "javascript:void()");

		}
	} else if(step == 3){

		var healthCheckupChecked = jQuery("input[name='healthCheckupVal']:checked");

		var healthCheckupVal = healthCheckupChecked.val();

		if(healthCheckupChecked.length !== 0){
			msgDisplayV2(".step3error",null);
			jQuery("#step3Btn").attr("href", "#activHealthCarousel");
		} else{
			msgDisplayV2(".step3error","Please select any one");
			jQuery("#step3Btn").attr("href", "javascript:void()");

		}
	} else if(step == 4){

		var fastFoodChecked = jQuery("input[name='fastFoodVal']:checked");

		var fastFoodVal = fastFoodChecked.val();

		if(fastFoodChecked.length !== 0){
			msgDisplayV2(".step4error",null);
			jQuery("#step4Btn").attr("href", "#activHealthCarousel");
		} else{
			msgDisplayV2(".step4error","Please select any one");
			jQuery("#step4Btn").attr("href", "javascript:void()");

		}
	} else if(step == 5){

		var illnessChecked = jQuery("input[name='illnessVal']:checked");

		var illnessVal = illnessChecked.val();

		if(illnessVal == "yes"){
			$illnessYes = jQuery('#illnessYes').val();

			if($illnessYes == "" || $illnessYes == null){
				msgDisplayV2(".step5errorMsg","Please mention chronic illness.");
				jQuery(".step5errorMsg").css("display","inline-block");
				jQuery("#step5Btn").attr("href", "javascript:void()");

				return false;
			} else{
				jQuery(".step5errorMsg").css("display","none");
			}
		} else{
			jQuery('#illnessYes').val('');
		}

		if(illnessChecked.length !== 0){
			msgDisplayV2(".step5error",null);
			jQuery("#step5Btn").attr("href", "#activHealthCarousel");
		} else{
			msgDisplayV2(".step5error","Please select any one");
			jQuery("#step5Btn").attr("href", "javascript:void()");

		}
	} else if(step == 6){

		var healthyScoreChecked = jQuery("input[name='healthyScoreVal']:checked");

		var healthyScoreVal = healthyScoreChecked.val();

		// if(healthyScoreChecked.length !== 0){
		if( jQuery(".healthyScoreVal").is( ":checked" ) ){
			msgDisplayV2(".step6error",null);
			jQuery("#step6Btn").attr("href", "#activHealthCarousel");
		} else{
			msgDisplayV2(".step6error","Please select any one");
			jQuery("#step6Btn").attr("href", "javascript:void()");

		}
	} else if(step == 7){

		var expertGuideChecked = jQuery("input[name='expertGuideVal']:checked");

		var expertGuideVal = expertGuideChecked.val();

		if(expertGuideChecked.length !== 0){
			msgDisplayV2(".step7error",null);
			jQuery("#step7Btn").attr("href", "#activHealthCarousel");
		} else{
			msgDisplayV2(".step7error","Please select any one");
			jQuery("#step7Btn").attr("href", "javascript:void()");

		}
	}

}


function aquisition_tool_result(v2FormData){
	jQuery("#activHealthv2Section").hide();
	jQuery("#activHealthResultSec").show();

	if(v2FormData.workout == "ans1" && (v2FormData.fastFood == "Once a week" || v2FormData.fastFood == "More than once a week") && v2FormData.illness == "no" && v2FormData.healthyScore <= 7){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").show();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").show();
	} else if(v2FormData.workout == "ans1" && (v2FormData.fastFood == "Once a week" || v2FormData.fastFood == "More than once a week") && v2FormData.illness == "no" && v2FormData.healthyScore >= 8){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").show();
		jQuery("#AnxiousRes").hide();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").show();
		jQuery("#health-anxious").hide();
	} else if(v2FormData.workout == "ans1" && v2FormData.illness == "yes"){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").show();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").show();
	} else if(v2FormData.workout == "ans1" && v2FormData.fastFood == "Once in two weeks" && v2FormData.illness == "no" && v2FormData.healthyScore <= 7){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").show();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").show();
	} else if(v2FormData.workout == "ans1" && v2FormData.fastFood == "Once in two weeks" && v2FormData.illness == "no" && v2FormData.healthyScore >= 8){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").show();
		jQuery("#AnxiousRes").hide();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").show();
		jQuery("#health-anxious").hide();
	} else if(v2FormData.workout == "ans2" && v2FormData.illness == "yes"){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").show();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").show();
	} else if(v2FormData.workout == "ans2" && (v2FormData.fastFood == "Once a week" || v2FormData.fastFood == "More than once a week") && v2FormData.illness == "no" && v2FormData.healthyScore >= 5 && v2FormData.healthyScore <= 7){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").show();
		jQuery("#AnxiousRes").hide();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").show();
		jQuery("#health-anxious").hide();
	} else if(v2FormData.workout == "ans2" && v2FormData.illness == "no" && v2FormData.healthyScore <= 4){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").show();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").show();
	} else if(v2FormData.workout == "ans2" && (v2FormData.fastFood == "More than once a week" || v2FormData.fastFood == "Once in two weeks") && v2FormData.illness == "no" && v2FormData.healthyScore >= 8){
		jQuery("#proActivRes").show();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").hide();

		jQuery("#health-proactive").show();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").hide();
	} else if(v2FormData.workout == "ans3" && v2FormData.illness == "no" && v2FormData.healthyScore <= 7){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").show();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").show();
	} else if(v2FormData.workout == "ans3" && v2FormData.illness == "yes"){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").hide();
		jQuery("#AnxiousRes").show();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").hide();
		jQuery("#health-anxious").show();
	} else if(v2FormData.workout == "ans3" && v2FormData.illness == "no" && v2FormData.healthyScore >= 8){
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").show();
		jQuery("#AnxiousRes").hide();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").show();
		jQuery("#health-anxious").hide();
	} else {
		jQuery("#proActivRes").hide();
		jQuery("#thinkerRes").show();
		jQuery("#AnxiousRes").hide();

		jQuery("#health-proactive").hide();
		jQuery("#health-thinker").show();
		jQuery("#health-anxious").hide();
	}
}


jQuery(document).on('submit','#activHealthFormv2',function(e){
	e.preventDefault();

	$name = jQuery('#fullname').val();
	// $dob = jQuery('#dob').val();
	$contactNumber = jQuery('#contactNumber').val();
	$email = jQuery('#email').val();
	$abhicode = jQuery('#abhicode').val();
	var workoutVal = jQuery("input[name='workoutVal']:checked").val();
	var healthCheckupVal = jQuery("input[name='healthCheckupVal']:checked").val();
	var fastFoodVal = jQuery("input[name='fastFoodVal']:checked").val();
	var illnessVal = jQuery("input[name='illnessVal']:checked").val();
	var healthyScoreVal = jQuery("input[name='healthyScoreVal']:checked").val();
	var expertGuideVal = jQuery("input[name='expertGuideVal']:checked").val();

	if($contactNumber == 7777777777 || $contactNumber == 8888888888 || $contactNumber == 9999999999){
		msgDisplayV2(".step8error", "Please enter valid mobile number");

		return false;
	} 

	$illnessYes = null;

	if(illnessVal == "yes"){
		$illnessYes = jQuery('#illnessYes').val();
	}

	$gcl_id = undefined;
	if(sessionStorage.getItem("gcl_id")){
		$gcl_id = sessionStorage.getItem("gcl_id");
	}

	$source = "";
	if(getAllUrlParams().source){
		$source = getAllUrlParams().source;
	}

	if($name !== "" && $contactNumber !== "" && $email !== ""){

		var v2FormData = {
			action: 'aquisition_tool_data_submit',
			"name":$name,
			"workout":workoutVal,
			"healthCheckup":healthCheckupVal,
			"fastFood":fastFoodVal,
			"illness":illnessVal,
			"illnessDetail":$illnessYes,
			"healthyScore":healthyScoreVal,
			"expertGuide":expertGuideVal,
			"contactNumber":$contactNumber,
			"email":$email,
			"abhicode":$abhicode,
			"crmCapture":"no",
			"gcl_id":$gcl_id,
			"current_url":window.location.href,
			"source":$source,
		}

		document.getElementById("UserNameProActiv").innerHTML = v2FormData.name.toLowerCase();
		document.getElementById("UserNameThinker").innerHTML = v2FormData.name.toLowerCase();
		document.getElementById("UserNameAnxious").innerHTML = v2FormData.name.toLowerCase();

		jQuery.ajax({           
            url : ajax_url,
            type : 'post',
			dataType: 'json',
            data: v2FormData,
            beforeSend: function(){
			    jQuery("#abcFormLoader").show();
		   	},
            success : function( data ) {
            	if(data.code == 1 || data.res){
            		if($source == "abhi_health" || $source == "%22abhi_health%22"){
            			if(data.data.NavigateUrl !== "" || data.data.NavigateUrl !== null){
            				ctaLink = data.data.NavigateUrl;
		            		document.getElementById("v2CTA").innerHTML = `<a href="${ctaLink}" class="d-block abcBtn" target="_blank">Click here to read further</a>`;
		            	} else{
		            		document.getElementById("v2CTA").innerHTML = `<a class="d-block abcBtn">Our Health Insurance expert will contact you shortly</a>`;
		            	}
		            } else{
		            	document.getElementById("v2CTA").innerHTML = `<a class="d-block abcBtn no-cursor">Our Health Insurance expert will contact you shortly</a>`;
		            }
		            console.log(data.msg);
            		aquisition_tool_result(v2FormData);
		   		} else{
		   			console.log(data.msg);
		   			aquisition_tool_result(v2FormData);
		   		}
		   		console.log(data);
            },
            complete:function(data){
			    jQuery("#abcFormLoader").hide();
		   }
        }); 
	}

});





function msgDisplayFooterES1($alert, $msg){
	if($alert == "success" && $msg != ""){
		jQuery("#responseMsgDiv1").css('display','block').fadeIn();
		jQuery("#responseMsgDiv1").removeClass("alert-danger").addClass("alert-success").html($msg);
	} else if($alert != "success" && $msg != ""){
		jQuery("#responseMsgDiv1").css('display','block').fadeIn();
		jQuery("#responseMsgDiv1").removeClass("alert-success").addClass("alert-danger").html($msg);
	} else{
		jQuery("#responseMsgDiv1").css('display','none').fadeOut();
	}
	return false;
}

jQuery(document).on('submit','#blogESForm1',function(e){
	e.preventDefault();

	jQuery("#responseMsgDiv #responseMsgDiv1").hide();

	$name = jQuery('#esfullname').val();
	$contactNumber = jQuery('#esmobileNumber').val();
	$email = jQuery('#esemail').val();
	$source = "normal";

	if($contactNumber == 7777777777 || $contactNumber == 8888888888 || $contactNumber == 9999999999){
		msgDisplayFooterES1("Failed", "Please enter valid mobile number");

		return false;
	} 

	if($name !== "" && $contactNumber !== "" && $email !== ""){

		var FooterFormData = {
			action: 'abhi_email_sub_data_submit',
			"es_name":$name,
			"es_mobile":$contactNumber,
			"es_email":$email,
			"source":$source,
		}

		localSetEmail($email);


		jQuery.ajax({           
            url : ajax_url,
            type : 'post',
			dataType: 'json',
            data: FooterFormData,
            beforeSend: function(){
			    jQuery("#abcFormLoaderFooter1").show();
		   	},
            success : function( data ) {
            	if(data.code == 1){
            		msgDisplayFooterES1("success",data.msg);
		            // console.log(data.msg);
		   		} else{
		   			msgDisplayFooterES1("failed",data.msg);
		   			// console.log(data.msg);
		   		}
		   		console.log(data);
            },
            complete:function(data){
			    jQuery("#abcFormLoaderFooter1").hide();
		   }
        }); 
	}

});




function msgDisplayFooterES($alert, $msg){
	if($alert == "success" && $msg != ""){
		jQuery("#responseMsgDiv").css('display','block').fadeIn();
		jQuery("#responseMsgDiv").removeClass("alert-danger").addClass("alert-success").html($msg);
	} else if($alert != "success" && $msg != ""){
		jQuery("#responseMsgDiv").css('display','block').fadeIn();
		jQuery("#responseMsgDiv").removeClass("alert-success").addClass("alert-danger").html($msg);
	} else{
		jQuery("#responseMsgDiv").css('display','none').fadeOut();
	}
	return false;
}

jQuery(document).on('submit','#ESFooterForm',function(e){
	e.preventDefault();
	fbPxCodeActivLiving();
	$name = jQuery('#footerfullname').val();
	$contactNumber = jQuery('#footermobileNumber').val();
	$email = jQuery('#footeremail').val();
	$source = "normal";

	if($contactNumber == 7777777777 || $contactNumber == 8888888888 || $contactNumber == 9999999999){
		msgDisplayFooterES("Failed", "Please enter valid mobile number");

		return false;
	} 

	if($name !== "" && $contactNumber !== "" && $email !== ""){

		var FooterFormData = {
			action: 'abhi_email_sub_data_submit',
			"es_name":$name,
			"es_mobile":$contactNumber,
			"es_email":$email,
			"source":$source,
		}

		localSetEmail($email);

		jQuery.ajax({           
            url : ajax_url,
            type : 'post',
			dataType: 'json',
            data: FooterFormData,
            beforeSend: function(){
			    jQuery("#abcFormLoaderFooter").show();
		   	},
            success : function( data ) {
            	if(data.code == 1){
            		msgDisplayFooterES("success", data.msg);
		            // console.log(data.msg);
		   		} else{
		   			msgDisplayFooterES("failed", data.msg);
		   			// console.log(data.msg);
		   		}
		   		console.log(data);
            },
            complete:function(data){
			    jQuery("#abcFormLoaderFooter").hide();
		   }
        }); 
	}

});


// Click Event for New Homepage
jQuery(document).ready(function($){

	// Header Subscription Button
	jQuery('.abcBtnHeader').click(function() {
		gtag('event',"header",{
			'event_category':'active-together-blog',
			'event_label':'subscribe'
		})
	});

	// Header Subscription Button
	jQuery('.menuSubBtn .search-submit-mkdf').click(function() {
		gtag('event',"header",{
			'event_category':'active-together-blog',
			'event_label':'search'
		})
	});

	// Homepage Subscription Form
	jQuery('#blogESForm1 .abcSubBtn').click(function() {
		gtag('event',"stay inform stay healthy - body",{
			'event_category':'active-together-blog',
			'event_label':'subscribe now'
		})
	});

	// Homepage Footer Subscription Form
	jQuery('#ESFooterForm .abcSubBtn').click(function() {
		gtag('event',"stay inform stay healthy - footer",{
			'event_category':'active-together-blog',
			'event_label':'subscribe now'
		})
	});

	// Homepage - Latest in Fitness Section
	jQuery(".fitness-articles-content-div a").click(function() {
		var LatestInFitnessArtTitle = jQuery(this).closest(".fitness-articles-content-div").find(".postArticleTitle").text().trim().toLowerCase();
		if(LatestInFitnessArtTitle){
				gtag('event',"latest in fitness – articles",{
				'event_category':'active-together-blog',
				'event_label': LatestInFitnessArtTitle, 
			});
		}
	});

	// Homepage - Latest in Nutrition Section
	jQuery(".nutrition-articles-content-div a").click(function() {
		var LatestInNutritionArtTitle = jQuery(this).closest(".nutrition-articles-content-div").find(".postArticleTitle").text().trim().toLowerCase();
		if(LatestInNutritionArtTitle){
				gtag('event',"latest in nutrition – articles",{
				'event_category':'active-together-blog',
				'event_label': LatestInNutritionArtTitle, 
			});
		}
	});

	// Homepage - Latest in Nutrition Section
	jQuery(".lifestyle-articles-content-div a").click(function() {
		var LatestInlifestyleArtTitle = jQuery(this).closest(".lifestyle-articles-content-div").find(".postArticleTitle").text().trim().toLowerCase();
		if(LatestInlifestyleArtTitle){
				gtag('event',"latest in lifestyle – articles",{
				'event_category':'active-together-blog',
				'event_label': LatestInlifestyleArtTitle, 
			});
		}
	});

	// Homepage - Latest in Mindfulness Section
	jQuery(".mindulness-articles-content-div a").click(function() {
		var LatestInmindulnessArtTitle = jQuery(this).closest(".mindulness-articles-content-div").find(".postArticleTitle").text().trim().toLowerCase();
		alert(LatestInmindulnessArtTitle);
		if(LatestInmindulnessArtTitle){
				gtag('event',"latest in mindulness – articles",{
				'event_category':'active-together-blog',
				'event_label': LatestInmindulnessArtTitle, 
			});
		}
	});


	// Videos for You Section homepage
	jQuery('#videoForYouSection .playIconDiv').click(function() {
		var VideoForYouTitle = jQuery(this).closest(".videosForYou").find("h5").text().trim().toLowerCase();
         
		if(VideoForYouTitle){
				gtag('event',"vides for you",{
				'event_category':'active-together-blog',
				'event_label': VideoForYouTitle, 
			});
		}
	});


	// Health Tools Section homepage
	jQuery('#htSlider .item').on('click',function() {
		var healthToolsTitle = jQuery(this).closest("#htSlider .item").find(".calTitle").text().trim().toLowerCase();
		if(healthToolsTitle){
				gtag('event',"health tools Calculator",{
				'event_category':'active-together-blog',
				'event_label': healthToolsTitle, 
			});
		}
	});


	// Podcast Section homepage
	jQuery('#podcastSlider .item').on('click',function() {
		var podcastTitle = jQuery(this).closest("#podcastSlider .item").find(".podcastTitle").text().trim().toLowerCase();
		if(podcastTitle){
				gtag('event',"podcast for you",{
				'event_category':'active-together-blog',
				'event_label': podcastTitle, 
			});
		}
	});

	// Meditation audios for you Section homepage
	jQuery('#meditationSlider .item').on('click',function() {
		var meditationTitle = jQuery(this).closest("#meditationSlider .item").find(".meditationTitle").text().trim().toLowerCase();
		if(meditationTitle){
				gtag('event',"meditation audios for you",{
				'event_category':'active-together-blog',
				'event_label': meditationTitle, 
			});
		}
	});

	// Browse Category Section - Fitness - homepage
	jQuery('#browse-cat-fitness').on('click',function() {
		gtag('event',"browse by category",{
				'event_category':'active-together-blog',
				'event_label': 'fitness', });

	});

	// Browse Category Section - nutrition - homepage
	jQuery('#browse-cat-nutrition').on('click',function() {
		gtag('event',"browse by category",{
				'event_category':'active-together-blog',
				'event_label': 'nutrition', });
	});

	// Browse Category Section - lifestyle - homepage
	jQuery('#browse-cat-lifestyle').on('click',function() {
		gtag('event',"browse by category",{
				'event_category':'active-together-blog',
				'event_label': 'lifestyle', });
	});

	// Browse Category Section - mindfulness - homepage
	jQuery('#browse-cat-mindfulness').on('click',function() {
		alert("Yes");
		gtag('event',"browse by category",{
				'event_category':'active-together-blog',
				'event_label': 'mindfulness', });
	});


	

});


// Homepage latest articles min height manage thru javascript for author conditional view
if(screen.width > 768) {
	if(jQuery(".fitness-articles-content-div .mainDiv").children('div.author-div').length > 0){
		jQuery(".fitness-articles-content-div").css("min-height", "420px");
	} else{
		jQuery(".fitness-articles-content-div").css("min-height", "390");
	}

	if(jQuery(".nutrition-articles-content-div .mainDiv").children('div.author-div').length > 0){
		jQuery(".nutrition-articles-content-div").css("min-height", "420px");
	} else{
		jQuery(".nutrition-articles-content-div").css("min-height", "350px");
	}

	if(jQuery(".lifestyle-articles-content-div .mainDiv").children('div.author-div').length > 0){
		jQuery(".lifestyle-articles-content-div").css("min-height", "420px");
	} else{
		jQuery(".lifestyle-articles-content-div").css("min-height", "350px");
	}

	if(jQuery(".mindfulness-articles-content-div .mainDiv").children('div.author-div').length > 0){
		jQuery(".mindfulness-articles-content-div").css("min-height", "420px");
	} else{
		jQuery(".mindfulness-articles-content-div").css("min-height", "350px");
	}
}



function fetchResults(){
    var keyword = jQuery('#search-form-header').val();
    if(keyword == ""){
        jQuery("#datafetch").html("");
        jQuery("#datafetch").hide();
        jQuery("#searchDataFetchLoad").hide();
    } else {
    	jQuery("#datafetch").show();
    	jQuery("#searchDataFetchLoad").show();
        jQuery.ajax({
            url: ajax_url,
            type: 'post',
            data: { action: 'data_fetch', keyword: keyword  },
            beforeSend: function(){
			    jQuery("#searchDataFetchLoad").show();
		   	},
            success: function(data) {
                jQuery('#datafetch').html( data );
            },
            complete:function(data){
			    jQuery("#searchDataFetchLoad").hide();
		   }
        });
    }
}

function fetchResultsMob(){
    var keyword = jQuery('#search-form-header-mob').val();
    if(keyword == ""){
        jQuery("#datafetchMob").html("");
        jQuery("#datafetchMob").hide();
        jQuery("#searchDataFetchLoadMob").hide();
    } else {
    	jQuery("#datafetchMob").show();
    	jQuery("#searchDataFetchLoadMob").show();
        jQuery.ajax({
            url: ajax_url,
            type: 'post',
            data: { action: 'data_fetch', keyword: keyword  },
            beforeSend: function(){
			    jQuery("#searchDataFetchLoadMob").show();
		   	},
            success: function(data) {
                jQuery('#datafetchMob').html( data );
            },
            complete:function(data){
			    jQuery("#searchDataFetchLoadMob").hide();
		   }
        });
    }
}

function clearSearchResetMob(){
	document.getElementById("search-form-header-mob").value = '';
	jQuery("#datafetchMob").html("");
    jQuery("#datafetchMob").hide();
    jQuery("#searchDataFetchLoadMob").hide();
}


function clearSearchReset(){
	document.getElementById("search-form-header").value = '';
	jQuery("#datafetch").html("");
    jQuery("#datafetch").hide();
    jQuery("#searchDataFetchLoad").hide();
}



// Download Music ES Form JS 
function msgDisplayDownloadMusicES($alert, $msg){
	if($alert == "success" && $msg != ""){
		jQuery("#downloadmusicresponseMsgDiv").css('display','block').fadeIn();
		jQuery("#downloadmusicresponseMsgDiv").removeClass("alert-danger").addClass("alert-success").html($msg);
	} else if($alert != "success" && $msg != ""){
		jQuery("#downloadmusicresponseMsgDiv").css('display','block').fadeIn();
		jQuery("#downloadmusicresponseMsgDiv").removeClass("alert-success").addClass("alert-danger").html($msg);
	} else{
		jQuery("#downloadmusicresponseMsgDiv").css('display','none');
	}
	return false;
}

jQuery(document).on('submit','#ESDownloadMusicForm',function(e){
	e.preventDefault();
	$name = jQuery('#downloadmusicfullname').val();
	$contactNumber = jQuery('#downloadmusicmobile').val();
	$email = jQuery('#downloadmusicemail').val();
	$abhiDownloadFileURL = jQuery('#abhi-download-file').val();
	$source = "normal";

	if($contactNumber == 7777777777 || $contactNumber == 8888888888 || $contactNumber == 9999999999){
		jQuery("#downloadmusicresponseMsgDiv").css('display','block').fadeIn();
		jQuery("#downloadmusicresponseMsgDiv").removeClass("alert-success").addClass("alert-danger").html("Please enter valid mobile number");

		return false;
	} 

	if($name !== "" && $contactNumber !== "" && $email !== ""){

		var FooterFormData = {
			action: 'abhi_email_sub_data_submit',
			"es_name":$name,
			"es_mobile":$contactNumber,
			"es_email":$email,
			"source":$source,
		}

		jQuery.ajax({           
            url : ajax_url,
            type : 'post',
			dataType: 'json',
            data: FooterFormData,
            beforeSend: function(){
			    jQuery("#abcFormLoaderDownloadMusic").show();
		   	},
            success : function( data ) {
            	if(data.code == 1){
            		$msg = "Form Submit Successfully. Please <a href='"+$abhiDownloadFileURL+"' target='blank' download>click here</a> to download now";
            		msgDisplayDownloadMusicES("success", $msg);
            		jQuery("#ESDownloadMusicForm").css('display','none').fadeOut();
		            // console.log(data.msg);
		   		} else if(data.code == 2){
            		$msg = "Email Already Exists. Please <a href="+$abhiDownloadFileURL+"' target='blank' download>click here</a> to download now";
            		msgDisplayDownloadMusicES("success", $msg);
            		jQuery("#ESDownloadMusicForm").css('display','none').fadeOut();
		            // console.log(data.msg);
		   		} else{
		   			msgDisplayDownloadMusicES("failed", data.msg);
		   			// console.log(data.msg);
		   		}
		   		console.log(data);
            },
            complete:function(data){
			    jQuery("#abcFormLoaderDownloadMusic").hide();
		   }
        }); 
	}

});



jQuery("#mob-burger-icon").on("click", function(){
	jQuery("#abc-mobnav").toggleClass("active");
});

jQuery(".abc-close-menu").on("click", function(){
	jQuery("#abc-mobnav").removeClass("active");
});


jQuery("#mob-others-dropwdown").on("click", function(){
	jQuery("#mob-others-dropwdown-ul").toggle();
});


jQuery("#personal-mobile-topmenu").on("click", function(){
	jQuery("#personal-mobile-topmenu").addClass("selected-menu");
	jQuery(".utility-links").addClass("active");
	jQuery("#corporate-mobile-topmenu").removeClass("selected-menu");
	jQuery("#advisor-mobile-topmenu").removeClass("selected-menu");

	jQuery("#mob-personal-ul").show();
	jQuery("#mob-corporate-ul").hide();
	jQuery("#mob-advisors-ul").hide();

});

jQuery("#corporate-mobile-topmenu").on("click", function(){
	jQuery("#personal-mobile-topmenu").removeClass("selected-menu");
	jQuery("#corporate-mobile-topmenu").addClass("selected-menu");
	jQuery("#advisor-mobile-topmenu").removeClass("selected-menu");
	jQuery(".utility-links").removeClass("active");

	jQuery("#mob-personal-ul").hide();
	jQuery("#mob-corporate-ul").show();
	jQuery("#mob-advisors-ul").hide();
});

jQuery("#advisor-mobile-topmenu").on("click", function(){
	jQuery("#personal-mobile-topmenu").removeClass("selected-menu");
	jQuery("#corporate-mobile-topmenu").removeClass("selected-menu");
	jQuery("#advisor-mobile-topmenu").addClass("selected-menu");
	jQuery(".utility-links").removeClass("active");

	jQuery("#mob-personal-ul").hide();
	jQuery("#mob-corporate-ul").hide();
	jQuery("#mob-advisors-ul").show();
});




jQuery("#mob-personal-ul").on("click", function(){
	jQuery("#mob-personal-ul").addClass();
});




// Apple Offer Subscription Form Validation msg 
function msgDisplayOfferModal($alert, $msg){
	if($alert == "success" && $msg != ""){
		jQuery("#offerResponseMsgDiv").css('display','block').fadeIn();
		jQuery("#offerResponseMsgDiv").removeClass("alert-danger").addClass("alert-success").html($msg);
	} else if($alert != "success" && $msg != ""){
		jQuery("#offerResponseMsgDiv").css('display','block').fadeIn();
		jQuery("#offerResponseMsgDiv").removeClass("alert-success").addClass("alert-danger").html($msg);
	} else{
		jQuery("#offerResponseMsgDiv").css('display','none');
	}
	return false;
}

// Apple Offer Subscription Form Submit
jQuery(document).on('submit','#ESAppleOfferForm',function(e){
	e.preventDefault();
	fbPxCodeActivLiving();
	$name = jQuery('#esofferfullname').val();
	$contactNumber = jQuery('#esoffermobile').val();
	$email = jQuery('#esofferemail').val();
	$source = "offer";

	if($contactNumber == 7777777777 || $contactNumber == 8888888888 || $contactNumber == 9999999999){
		jQuery("#offerResponseMsgDiv").css('display','block').fadeIn();
		jQuery("#offerResponseMsgDiv").removeClass("alert-success").addClass("alert-danger").html("Please enter valid mobile number");

		return false;
	} 

	if($name !== "" && $contactNumber !== "" && $email !== ""){

		var OfferFormData = {
			action: 'abhi_email_sub_data_submit',
			"es_name":$name,
			"es_mobile":$contactNumber,
			"es_email":$email,
			"source":$source,
		}

		localSetEmail($email);

		jQuery.ajax({           
            url : ajax_url,
            type : 'post',
			dataType: 'json',
            data: OfferFormData,
            beforeSend: function(){
			    jQuery("#abcFormLoaderAppleOffer").show();
		   	},
            success : function( data ) {
            	if(data.code == 1){
            		$msg = "Thank you for subscribing. You are now eligible for the offer.";
            		msgDisplayOfferModal("success", $msg);
            		jQuery("#ESDownloadMusicForm").css('display','none').fadeOut();
            		sessionStorage.setItem("offerModalSession", true);
		            gtag('event','subscribe_button_click',{
									'event_category':'subscribe now popup_widget',
									'event_label':'new user'
								});
		   		} else if(data.code == 2){
            		$msg = "Email Already Exists.";
            		msgDisplayOfferModal("success", $msg);
            		jQuery("#ESDownloadMusicForm").css('display','none').fadeOut();
            		sessionStorage.setItem("offerModalSession", true);
		            gtag('event','subscribe_button_click',{
									'event_category':'subscribe now popup_widget',
									'event_label':'existing user'
								});
		   		} else{
		   			msgDisplayOfferModal("failed", data.msg);
		   			// console.log(data.msg);
		   		}
		   		console.log(data);
            },
            complete:function(data){
			    jQuery("#abcFormLoaderAppleOffer").hide();
		   }
        }); 
	}

});



// Article Page Social Share Icons Click Events
jQuery('.social-icons .social-icon.facebook > a').click(function() {

	$shareArticleTitle = 'Facebook-shared_[' + jQuery("#primary header.entry-header .entry-title").text().trim().toLowerCase() + ']';

	gtag('event','click-button',{
	    'event_category':'article-page-share-button',
	    'event_label': $shareArticleTitle,
  	});
});


jQuery('.social-icons .social-icon.whatsapp > a').click(function() {

	$shareArticleTitle = 'Whatsapp-shared_[' + jQuery("#primary header.entry-header .entry-title").text().trim().toLowerCase() + ']';

	gtag('event','click-button',{
	    'event_category':'article-page-share-button',
	    'event_label': $shareArticleTitle,
  	});
});


jQuery('.social-icons .social-icon.twitter > a').click(function() {

	$shareArticleTitle = 'Twitter-shared_[' + jQuery("#primary header.entry-header .entry-title").text().trim().toLowerCase() + ']';

	gtag('event','click-button',{
	    'event_category':'article-page-share-button',
	    'event_label': $shareArticleTitle,
  	});
});


jQuery('.social-icons .social-icon.email > a').click(function() {

	$shareArticleTitle = 'Email-shared_[' + jQuery("#primary header.entry-header .entry-title").text().trim().toLowerCase() + ']';

	gtag('event','click-button',{
	    'event_category':'article-page-share-button',
	    'event_label': $shareArticleTitle,
  	});
});



// Common Modal Email Subscription Form Validation msg 
function msgDisplayHealthToolCal($alert, $msg){
	if($alert == "success" && $msg != ""){
		jQuery("#abhiEmailSubscriptionResponse").css('display','block').fadeIn();
		jQuery("#abhiEmailSubscriptionResponse").removeClass("alert-danger").addClass("alert-success").html($msg);
	} else if($alert != "success" && $msg != ""){
		jQuery("#abhiEmailSubscriptionResponse").css('display','block').fadeIn();
		jQuery("#abhiEmailSubscriptionResponse").removeClass("alert-success").addClass("alert-danger").html($msg);
	} else{
		jQuery("#abhiEmailSubscriptionResponse").css('display','none');
	}
	return false;
}

// Calculator Common Modal Email Subscription Form Submit
jQuery(document).on('submit','#abhiEmailSubscriptionModal',function(e){
	e.preventDefault();
	$name = jQuery('#abhiESfullname').val();
	$contactNumber = jQuery('#abhiESmobile').val();
	$email = jQuery('#abhiESemail').val();
	$source = "Popup Form";

	if($contactNumber == 7777777777 || $contactNumber == 8888888888 || $contactNumber == 9999999999){
		jQuery("#abhiEmailSubscriptionResponse").css('display','block').fadeIn();
		jQuery("#abhiEmailSubscriptionResponse").removeClass("alert-success").addClass("alert-danger").html("Please enter valid mobile number");

		return false;
	} 

	if($name !== "" && $contactNumber !== "" && $email !== ""){

		var PopupFormData = {
			action: 'abhi_email_sub_data_submit',
			"es_name":$name,
			"es_mobile":$contactNumber,
			"es_email":$email,
			"source":$source,
		}

		var abhi_sub_email = $email;

		// Store email in local to manage calculator data
		localStorage.setItem('abhi_sub_email', JSON.stringify(abhi_sub_email));

		var get_sub_email = localStorage.getItem('abhi_sub_email');
		var get_healthtools = localStorage.getItem('healthtools');



		jQuery.ajax({           
            url : ajax_url,
            type : 'post',
			dataType: 'json',
            data: PopupFormData,
            beforeSend: function(){
			    jQuery("#abhiESLoader").show();
		   	},
            success : function( data ) {
            	if(data.code == 1){
            		add_health_tool_data();
            		$msg = "Thank you for subscribing.";
            		msgDisplayHealthToolCal("success", $msg);
            		jQuery("#abhiEmailSubscriptionModalForm").css('display','none').fadeOut();
		            // console.log(data.msg);
		   		} else if(data.code == 2){
		   			add_health_tool_data();
            		$msg = "Email Already Exists.";
            		msgDisplayHealthToolCal("success", $msg);
            		jQuery("#abhiEmailSubscriptionModalForm").css('display','none').fadeOut();
		            // console.log(data.msg);
		   		} else{
		   			msgDisplayHealthToolCal("failed", data.msg);
		   			// console.log(data.msg);
		   		}
		   		console.log(data);
            },
            complete:function(data){
			    jQuery("#abhiESLoader").hide();
		   }
        }); 

	}

});




// Health Tools New Calculators JS Code
function add_health_tool_data(){

	// Hide subscribe btn from result div
	jQuery(".calSubBtn").hide();

	var abhi_sub_email = localStorage.getItem('abhi_sub_email');
	var healthtools = JSON.parse(localStorage.getItem('healthtools'));

	var formData = {
		action: 'healthToolsDataCapture',
		'sub_email' : abhi_sub_email,
		'cal_name' : healthtools.calculator,
		'qna' : healthtools.qna,
	};

	
	jQuery.ajax({           
        url : ajax_url,
        type : 'post',
		dataType: 'json',
        data: formData,
        beforeSend: function(){
		    jQuery("#abcFormLoader").show();
	   	},
        success : function( data ) {
        	if(data.code == 1){
        		all_health_tool_result(healthtools);
        	} else{
        		console.log("Failed to calculate");
        	}
    		
        	console.log(data);
        },
        complete:function(data){
		    jQuery("#abcFormLoader").hide();
	   }
    }); 

}

function all_health_tool_result($healthtools){

	$calName = $healthtools.calculator;
	$result = $healthtools.qna.result;

	if($calName == 'bmi'){
		jQuery('#bmiResultsDiv').css('display','block');
		jQuery("#bmiResults").html($result);
	} else if($calName == 'waist-hip-ratio' || $calName == 'ideal-weight' || $calName == 'bmr' || $calName == 'bp' || $calName == 'bg' || $calName == 'cycle' || $calName == 'cholesterol' || $calName == 'smoking-cost' || $calName == 'asthma' || $calName == 'chronic' || $calName == 'covid'){
		msgDisplay($result);
	} else{
		console.log("Failed result");
	}

}



function localSetEmail($email){

	console.log("Email Val before " + $email);

	if( $email !== null && $email !== '' ){
		// Store email in local to manage calculator data
		localStorage.setItem('abhi_sub_email', JSON.stringify($email));
	} else{
		console.log("Email Val " + $email);
	}

}



/*
function fbPxCodeActivLiving(){
	fbq('track', 'ActivLiving_Subscription');
}


jQuery('.custom-copy-url').click(function (e) {
   e.preventDefault();
   var copyText = jQuery(this).attr('href');

   document.addEventListener('copy', function(e) {
      e.clipboardData.setData('text/plain', copyText);
      e.preventDefault();
   }, true);

   document.execCommand('copy');  
   alert('Link Copied To Clipboard'); 
 });
 */
 



