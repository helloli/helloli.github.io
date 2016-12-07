
  (function(){
  	
  	var nice = $("html").niceScroll({
			cursorborderradius: 0,
			cursorwidth: "5px",
			cursorfixedheight: 50,
			cursorcolor: "#333",
			zindex: 9999,
			cursorborder: 0,
		});
  
  	//swiper
    var swiper_wrap = new Swiper('.swiper_wrap', {
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        grabCursor: true,
        parallax : true
        
    });
    
    var banner = new Swiper('.slide_banner', {
        pagination: '.slide-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
				centeredSlides: true,
				autoplay : 5000,
				grabCursor: true
    });
    
    var about = new Swiper('.about_slide', {
        pagination: '.about-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
				centeredSlides: true,
				autoplay : 5000,
				grabCursor: true
    });
    
    var banner_slide = new Swiper('.banner_slide', {
        pagination: '.banner-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
				centeredSlides: true,
				autoplay : 5000,
				grabCursor: true
    });
    
    var third_slide = new Swiper('.third_banner', {
        pagination: '.third-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
				centeredSlides: true,
				autoplay : 5000,
				grabCursor: true,
				loop: false,
				
				
				onSlidePrevStart: function(swiper){
		      $('.newGroup').hide(100);
		    },
				onReachEnd: function(swiper){
		      $('.newGroup').show(500);
		    }

    });


    var galleryTop = new Swiper('.gallery-top', {
    		slidesPerView: 1,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        autoplay : 3000,
        loop: true,
        grabCursor: true,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
  	
  	
//	hide/show

  	$('.nav_slide_button').click(function() {
			$('.pull').slideToggle();
			this.classList.toggle("active");
			$('.navigationbar').toggleClass('modified');
		});	

		$('.close').click(function(){
			window.parent.callback();
		})
		
		$('.share').click(function(){
			$('.btn-hide').show(500);
		})

		wow = new WOW({
			animateClass: 'animated',
			offset: 120
		});
		wow.init();
	
    var judge = true;
    $('#nav-toggle').click(function(){
        var a = $('#navBar').css("background-color")
        console.log(a)

        if(judge){
            $('#navBar').css("background-color", '#000');
            $('.navbar-nav li:nth-child(1)').css('display', 'none');
            $('.navbar-nav li:nth-child(2)').css('display', 'none');
            $('.navbar-nav li:nth-child(3)').css('display', 'none');
            judge = !judge;
        } else{
            $('#navBar').css("background-color", 'rgba(255,255,255,0)');
            $('.navbar-nav li:nth-child(1)').css('display', 'block');
            $('.navbar-nav li:nth-child(2)').css('display', 'block');
            $('.navbar-nav li:nth-child(3)').css('display', 'block');
            judge = !judge;
        }
    })
		
		





	})()