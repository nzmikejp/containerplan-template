
(function($){
    $(function(){
        
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


        //--- Sticky header
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: {className: 'main-header--scrolled', targets: '.main-header'}
        });

    })

})(jQuery)