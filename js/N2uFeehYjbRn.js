(function($){'use strict';$(document).ready(function(){bmiCalculator.init();});var bmiCalculator=function(){var form=$('.mkdf-bmic-form'),bmiCalcHolder=$('.mkdf-bmi-calculator-holder'),data={},notificationHolderCol=bmiCalcHolder.find('.mkdf-bmic-notifications-col1'),notificationHolder=bmiCalcHolder.find('.mkdf-bmic-notifications1'),notificationTextHolder=notificationHolder.find('.mkdf-bmic-notification-text1'),iconHolder=notificationHolder.find('.mkdf-bmic-icon-holder');var handleForm=function(){if(form.length&&typeof form!=='undefined'){form.submit(function(e){e.preventDefault();data.formData=form.serialize();data.action='mkdf_bmi_calculate';notificationHolder.hide();notificationTextHolder.html('');$('html').removeClass('hide-scroll');notificationHolderCol.removeClass('show-div-content');notificationHolder.removeClass('mkdf-bmic-notification-error');iconHolder.find('span').removeClass();$.ajax({data:data,dataType:'json',type:'POST',url:mkdfBmiCalculatorAjaxUrl,success:function(response){if(response.hasError){$('html').addClass('hide-scroll');notificationHolder.addClass('mkdf-bmic-notification-error');notificationHolderCol.addClass('show-div-content');}else{iconHolder.find('span').addClass('mkdf-bmic-'+response.BMIRank);clearForm();}
gtag('event',("Data-"+data.formData),{'event_category':'ht-bmr','event_label':response.notificationText});$('html').addClass('hide-scroll');notificationHolderCol.show();notificationHolder.show();notificationTextHolder.html(response.notificationText);$('#showHeightContent').show();if(jQuery(window).width()>=1024){$('html,body').animate({scrollTop:$("#archery").offset().top-250},'slow');};if(jQuery(window).width()<1024){$('html,body').animate({scrollTop:$("#archery").offset().top-150},'slow');};}});});}};var clearForm=function(){form.find('input[type="text"], select, textarea').val();form.find('input[type="number"], select, textarea').val();};var handleCloseIcon=function(){var closeIcon=notificationHolder.find('.mkdf-bmic-notification-close');if(closeIcon.length){closeIcon.on('click',function(e){e.preventDefault();e.stopPropagation();$('html').removeClass('hide-scroll');notificationHolderCol.removeClass('show-div-content');notificationHolderCol.fadeOut();notificationHolder.fadeOut();});}}
return{init:function(){handleForm();handleCloseIcon();}}}();})(jQuery);