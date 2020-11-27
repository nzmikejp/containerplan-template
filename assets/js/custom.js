
(function($){
    $(function(){

        //--- AOS
        AOS.init({
            easing: 'ease-in-out-quad',
            duration: 600,
            once: true,
        });
        
        //--- Menu Button
        var isOpen = false

        $('.menu-btn').on('click',function(){

            if(isOpen == false){
                $(this).addClass('open')
                $('.wrap').addClass('active')
                $('.main-header').addClass('active')

                isOpen = true
    
            }else {
                $('.menu-btn').removeClass('open')
                $('.wrap').removeClass('active')  
                $('.main-header').removeClass('active')  

                isOpen = false
            }
        })

        //--- Menu Responsive Check
        function showWidth(display) {
            if(display) {
                $(window).resize(function(){
                    var width = $(window).innerWidth()
                    
                    if(width > 1072 && isOpen === true ){
                        $('.menu-btn').removeClass('open')
                        $('.wrap').removeClass('active')  
                        $('.main-header').removeClass('active')  
        
                        isOpen = false
                    }
                }) 
            }
        }
        
        $(document).ready(function(){
            showWidth(true)
        })

        gsap.registerPlugin(ScrollTrigger);

        //--- Sticky header
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: {
                className: 'main-header--scrolled',
                targets: '.main-header'
            }
        });

        //--- Index scroll animations
        ScrollTrigger.defaults({

            // markers: {startColor: "red", endColor: "red", fontSize: "16px", indent: 10,}
        });
        

        gsap.from("#mark-1", {
            scrollTrigger: {
                trigger: "#mark-1",
                id: "plan-mark",
                scrub: 1,
                start: "-=1000",
                end: "-=700"
            },
            rotate: 180,
            duration: 0.5,
        })
        
        gsap.from("#mark-2", {
            scrollTrigger: {
                trigger: "#mark-2",
                id: "plan-mark",
                scrub: 1,
                start: "-=1000",
                end: "-=700"
            },
            rotate: 720,
            duration: 0.5,
        })
        
        gsap.from("#mark-3", {
            scrollTrigger: {
                trigger: "#mark-3",
                id: "plan-mark",
                scrub: 1,
                start: "-=200",
                end: "-=100"
            },
            rotate: -360,
            duration: 0.5,
        })
        
        gsap.from("#mark-4", {
            scrollTrigger: {
                trigger: "#mark-4",
                id: "plan-mark",
                scrub: 1,
                start: "-=1000",
                end: "-=700"
            },
            rotate: 270,
            duration: 0.5,
        })
        
        gsap.from("#cp-ruler", {
            scrollTrigger: {
                trigger: "#cp-ruler",
                id: "plan-ruler",
                scrub: true,
                start: "-=1000",
                end: "-=800",
            },
            x: -300,
            rotate: 15,
            duration: 0.5,
        })


        //--- Swiper
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            }
          })

    })

})(jQuery)