$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});
	
	/* ======= Fixed Header animation ======= */ 
        
    $(window).on('scroll load', function() {
         
         if ($(window).scrollTop() > 0 ) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');             
         }
    }); 

    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    
    $('#bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 6000
    });
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();         
    
    /* ======= Instagram ======= */
    //Instafeed.js - add Instagram photos to your website
    //Ref: http://instafeedjs.com/
    
    var userFeed = new Instafeed({
        limit: 24,
        get: 'user',
        userId: 417386679, /* Find out your userID: http://www.pinceladasdaweb.com.br/instagram/user-id/ */
        accessToken: '510573486.ab7d4b6.d8b155be5d1a47c78f72616b4d942e8d', /* You need to generate your own token: http://www.pinceladasdaweb.com.br/instagram/access-token/ */
        template: '<a class="item" href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a>',
        resolution: 'low_resolution'
    });
    userFeed.run();
    

    /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 45.8190031,
        lng: 3.7589517000000114,
    });
    map.addMarker({
        lat: 45.8190031,
        lng: 3.7589517000000114,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">Your Restaurant Name</h5><p><span class="region">Address line goes here</span><br><span class="postal-code">Postcode</span><br><span class="country-name">Country</span></p>'
        }
        
    });

        /* ======= Google Map 2 ======= */
    map = new GMaps({
        div: '#map2',
        lat: 48.8714937,
        lng: 2.3443534000000454,
    });
    map.addMarker({
        lat:48.8714937,
        lng: 2.3443534000000454,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">Your Restaurant Name</h5><p><span class="region">Address line goes here</span><br><span class="postal-code">Postcode</span><br><span class="country-name">Country</span></p>'
        }
        
    });
    
    /* ===== Bootstrap DateTime Picker ==== */
    
    $('.make-datepicker').datetimepicker({
        format: 'MMM Do YYYY',
        defaultDate: new Date()
    });
    
    $('.make-timepicker').datetimepicker({
        format: 'LT',
        stepping: 15
    });

    
    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $(".reserve-form").validate({
		messages: {
		    date: {
				required: 'Please enter a date' //You can customise this message
			},
			time: {
				required: 'Please enter a time' //You can customise this message
			},
		    name: {
    			required: 'Please enter your name' //You can customise this message
			},
			email: {
				required: 'Please enter your email' //You can customise this message
			},
			phone: {
				required: 'Please enter your phone number' //You can customise this message
			}
		}
	});
	
	$(".subscribe-form").validate({
		messages: {
			email: {
				required: 'Please enter your email' //You can customise this message
			}
		}
	});
	
	/* ====== Fullscreen Modal ====== */
	// .modal-backdrop classes
    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });
	
	   

});