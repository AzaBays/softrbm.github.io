$(document).ready(function(){
    
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        navigation: true,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'service','section7',],
        navigationTooltips: ['Главная  -  ', 'Разработка веб-сайтов  -  ', 'Наши преимущества  -  ', 'Создание интернет магазинов  -  ', 'Концепт  -  ', 'Услуги  -  '],
        onLeave: function(origin, destination, direction){
            // console.log(destination.index);
            if(destination.index == 1){
                dark();
            }else if(destination.index == 3){
                dark();
            }else if(destination.index == 6){
                dark();
            }else{
                light();
            }

            if (destination.index > 0) {
                $(".main-bg").removeClass("main-animation");
                
            } else {
                $(".main-bg").addClass("main-animation");
            }
        }
    });

    $('.menu-btn').click(function(){
        $(this).toggleClass('menu-btn_active');
        $('.navbar').toggleClass('navbar_active');
    });

    $('.mockups-icon').mouseover(function(e){
        $(this).next().css('opacity', '1');
    });
    $('.mockups-icon').mouseout(function(e){
        $(this).next().css('opacity', '');
    });
   
    function dark(){
        $('#fp-nav ul li a span').css('background', '#676767');
        $('#fp-nav ul li .fp-tooltip').css('color', '#676767');
        $('header .social-icon_icons, header .social-icon_icons a').css('color', '#676767');
    }
    function light(){
        $('#fp-nav ul li a span').css('background', '#ffffff');
        $('#fp-nav ul li .fp-tooltip').css('color', '#ffffff');
        $('header .social-icon_icons, header .social-icon_icons a').css('color', '#ffffff');
    }
});

