
  $(function(){
    
    window.scrollReveal = new scrollReveal({ reset: true, move: '50px' });

    // 实现鼠标移动到热点上的时候，轮播图片切换
    $('.carousel-indicators li').mouseover(function () {
        $('.carousel-indicators .active').removeClass('active');
        $(this).addClass('active');
        $(this).click();
    })
    $('.carousel-indicators-wrap').mouseenter(function () {
        $('.carousel-indicators').animate({bottom: 0}, 500)
    }).mouseleave(function(){
        $('.carousel-indicators').animate({bottom: '-100%'}, 500)
    })
// $('.carousel-indicators-wrap').mousemove(function (e) {
//     if (e.offsetY >= $('#myCarousel').height() * .75) {
//         $('.carousel-indicators-wrap').show();
//         $('.carousel-indicators').slideUp("slow");
//     }
//     // console.log(e.offsetY, 'y');
//     // console.log($('#myCarousel').height(), 'h')
// })

// $('.carousel-indicators-wrap').mouseout(function () {
//     console.log('aaa')
//     $('.carousel-indicators-wrap').slideDown();
// })

    var nice = $("html").niceScroll({
            cursorborderradius: 0,
            cursorwidth: "5px",
            cursorfixedheight: 50,
            cursorcolor: "#333",
            zindex: 9999,
            cursorborder: 0,
        });
    
    // 只有当页面滚动的时候navbar的border-bottom才显示
    // var timeout = false;
    // $(window).scroll( function () {
    //     if (timeout) {
    //         $('.navigationbar').addClass('border-bottom');
    //         clearTimeout(timeout);
    //     }
    //     timeout = setTimeout(function(){
    //         $('.navigationbar').removeClass('border-bottom');
    //     },100); 
    // });
    
// 暂时在所有navigationbar下面显示一条白线
    $('.navigationbar').addClass('border-bottom');
//  hide/show

        $('.nav_slide_button').click(function() {
            $('.pull').slideToggle();
            this.classList.toggle("active");
            $('.navigationbar').toggleClass('modified');
        }); 
        
        $('.thirdShow').click(function(){
            $(this).toggleClass('active');
            $('.third').show(500);
        })
        
        $('.close-third').click(function(){
            $('.third').hide(500);
        })
        
//      swiper
        var banner = new Swiper('.slide_banner', {
        pagination: '.slide-pagination',
        nextButton: '.slide-right',
        prevButton: '.slide-left',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
                centeredSlides: true,
                autoplay : 5000,
                grabCursor: true
    });
    
    var about = new Swiper('.about_slide', {
        pagination: '.about-pagination',
        nextButton: '.about-right',
        prevButton: '.about-left',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        effect : 'coverflow',
                centeredSlides: true,
                autoplay : 5000,
                grabCursor: true
    });
    
    var banner = new Swiper('.banner_slide', {
        pagination: '.banner-pagination',
        nextButton: '.banner-right',
        prevButton: '.banner-left',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        effect : 'coverflow',
                centeredSlides: true,
                autoplay : 5000,
                grabCursor: true
    });
    
    var galleryTop = new Swiper('.gallery-top', {
            slidesPerView: 1,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        autoplay : 3000,
        loop: true,
        grabCursor: true
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
    
        
        wow = new WOW({
            animateClass: 'animated',
            offset: 120
        });
        wow.init();
        
        
        
    
        
        
    var slideHeight = $(window).height();
        $('.banner').css('margin-top',slideHeight);
        $('.slide_banner, .about_slide, .project').css('height',slideHeight);
        $(window).resize(function(){'use strict',
            $('.slide_banner, .about_slide, .project').css('height',slideHeight);
        });
        

        //  back to top
        $(window).scroll(function() {
            
            $('.banner').animate({ marginTop : 0 },1500);
            
            if ($(window).scrollTop() > 400) {
                $('.top').fadeIn(200);
            } else {
                $('.top').fadeOut(200);
            }
        });
        
        $('.top').click(function() {
            
            $('html, body').stop().animate({ scrollTop : 0 }, 1500);
            
        });




    })

    
//  function changeImgSize(){ 
//          var getContainer = document.getElementById('imgcontainer'); 
//          //获取div下img节点
//          var getIMG=getContainer.getElementsByTagName('img')[0]; 
//          //获取图片宽高
//          var iw=getIMG.width; 
//          var ih=getIMG.height; 
//          //获取div容器宽高
//          var cw = getContainer.offsetWidth;
//          var ch = getContainer.offsetHeight;
//          var xw = iw/cw;
//          var xh = ih/ch;
//          if(xh < xw){
//              //说明高更小一点
//              alert("高更小一点");
//              var a = ch/ih;
//              getIMG.height = ch;
//              getIMG.width = iw * a;  
//          }else{
//              alert("宽更小一点");
//              var a = cw/iw;
//              getIMG.width = cw;
//              getIMG.height = ih * a;
//      }