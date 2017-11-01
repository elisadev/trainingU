/********************
		NAV BAR 
********************/

$(document).ready(function(){

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").click(function(){
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});
});

/* ESSAI */
/* NAVBAR TOGGLE BUTTON  */

//$('button').click(function() {
//  $(this).toggleClass('expanded').siblings('div').slideToggle();
//});

$(document).ready(function(){
    $("#nav-main").sticky({topSpacing:0});
//    $(".sticky-wrapper").style.height = 0;
  });



/********************
		CAROUSEL
********************/


var main = function() {


$('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(100).removeClass('active-slide');
    nextSlide.fadeIn(100).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(100).removeClass('active-slide');
    prevSlide.fadeIn(100).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

$(document).ready(main);

/* TEST 3D CAROUSEL


var slides = [
	{src: '../IMAGES/img-retouched/barbell.jpg'},
	{src: '../IMAGES/img-retouched/abs.jpg'},
	{src: '../IMAGES/img-retouched/sheRun.jpg'},
	{src: '<p>'},
]

$(document).ready(function(){
	// with minimal configuration and default setting
	//	$('.jR3DCarouselGallery').jR3DCarousel({ slides: slides });
	// Or with options
//		var slides = [];
//    for ( var i = 0; i < 3; i++) {
////				slides.push({src: 'https://unsplash.it/'+(1366+i)+'/'+(768+i)})
//				slides.push('src : ../IMAGES/barbell.jpg ');
//		}
 		$('.jR3DCarouselGallery').jR3DCarousel({
		 	  width: 400, 				// largest allowed width
			  height: 222, 				// largest allowed height
			  slideLayout : 'fill',    // "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio)
        animation: 'slide3D', // slide | slide3D | scroll | scroll3D | fade
			  animationCurve: 'ease',
			  animationDuration: 2000,
			  animationInterval: 1000,
			  autoplay: true,
			  onSlideShow: shown,		 // callback when Slide show event occurs
			  navigation: 'circles', // circles | squares */
//	REMOVE		  slides: slides 			// array of images source or slides from template
	
/*	REMOVE });
        
        
    function shown(slides){
			console.log("Slide shown: ", slide.find('img').attr('src'));
	}
	
});
    var myjR3DCarousel = $('.jR3DCarouselGallery')
					.jR3DCarousel({
						slides: slides
					});

myjR3DCarousel.showSlide(0);
myjR3DCarousel.showPreviousSlide();
myjR3DCarousel.showNextSlide();
var slide = myjR3DCarousel.getSlideByIndex(1);
var currentSlide = myjR3DCarousel.getCurrentSlide();
						
						
	REMOVE */	

/* 3D CUBE */

(function($) {

	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
		$('#cubeTransition>div:eq(0)').addClass('visible');

	for (i = 0; i < length; i++) {
		var bullet = $("<li></li>");
		if (i == 0) bullet.addClass('active');
		$("#bullets").append(bullet);
	}

	function openIndex(i) {
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut' : 'rotateCubeTopOut'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show()
		}
	}

	function trans(direction) {
		if (!onGoing) {
			onGoing = true;
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut';
				inClass = 'rotateCubeBottomIn';
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut';
				inClass = 'rotateCubeTopIn';
			}
			show();
		}
	}

	function show() {
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass('visible');
		$('#cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);	
		$('#bullets>li:eq(' + (current - 1) + ')').removeClass('active');
		$('#bullets>li:eq(' + (next - 1) + ')').addClass('active');
		setTimeout(function() {
			
		},50)
		
		animationOut(current - 1)
		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass('visible');
		}, 500)

		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			
			animationIn(next - 1)
			current = next;
			onGoing = false;
		}, 600)
	}

	$(document).ready(

	function() {
		$(document).mousewheel(function(e, delta) {
			e.preventDefault();
			if (delta < 0) {
				trans('down')
			} else {
				trans('up')
			}
		});
		$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up')
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down')
			}

		});

		$(document).swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == "up") {
					trans('down')
				} else if (direction == "down") {
					trans('up')
				}
			}
		});


		$('#bullets>li').on('click', function() {
			openIndex($(this).index() + 1);
		});

	});
})(jQuery);

						
						
/* FAQ SLIDER */					
						
var action = 'click';
var speed = '500'; 

$(document).ready(function(){
	$('li.question').on(action, function(){
		$(this).next()
		.slideToggle(speed)
			.siblings('li.answer')
				.slideUp();
		
		var img = $(this).children('.rotateIMG');
		$('.rotateIMG').not(img).removeClass('rotate');
        // toggle rotate class
        img.toggleClass('rotate');
	});
});
						
						
		























						
						