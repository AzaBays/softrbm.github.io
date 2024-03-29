$(document).ready(function(){
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        navigation: true,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'service','section7',],
        navigationTooltips: ['Главная  -  ', 'Разработка веб-сайтов  -  ', 'Наши преимущества  -  ', 'Создание интернет магазинов  -  ', 'Концепт  -  ', 'Услуги  -  '],
        sectionsColor: ['#fff', '#fff', '#e1144b', 'fff', '#07befa', '#fff', '#fff'],
        scrollOverflow: true,
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

            if(!destination.isFirst) {
                $(".main-bg").removeClass("main-animation");
                $('.main-img').removeClass('animated fadeInUp');
                $('.main-title, .main-title p, .main-title a, .main-title .main-title_btns').removeClass('animated fadeInUp');
            }else {
                $(".main-bg").addClass("main-animation");
                $('.main-img').addClass('animated fadeInUp');
                $('.main-title, .main-title p, .main-title a, .main-title .main-title_btns').addClass('animated fadeInUp');
            }

            if(destination.index == 1){
                $('.developing-mockup, .mockups-icon').addClass('animated fadeInUp');
            }else{
                $('.developing-mockup, .mockups-icon').removeClass('animated fadeInUp');
            }
            if(destination.index == 2){
                $('.adv-column .adv-column_img').children('img').addClass('animated fadeIn');
                $('.adv-column .adv-column_item').addClass('animated fadeIn');
            }else{
                $('.adv-column .adv-column_img').children('img').removeClass('animated fadeIn');
                $('.adv-column .adv-column_item').removeClass('animated fadeIn');
            }
            if(destination.index == 3){
                $('.ecommerce-img img').addClass('animated fadeInLeft');
                $('.ecommerce-title').addClass('animated fadeInRight');
            }else{
                $('.ecommerce-img img').removeClass('animated fadeInLeft');
                $('.ecommerce-title').removeClass('animated fadeInRight');
            }
            if(destination.index == 4){
                $('.concept-img_circle, .concept-img_circle-item, .concept-img_circle img').addClass('animated fadeIn');
                $('.concept-title').children('h2, p, a').addClass('animated fadeInUp');
            }else{
                $('.concept-img_circle, .concept-img_circle-item, .concept-img_circle img').removeClass('animated fadeIn');
                $('.concept-title').children('h2, p, a').removeClass('animated fadeInUp');
            }
        },
    });

    $('.menu-btn').click(function(){
        $(this).toggleClass('menu-btn_active');
        $('.navbar ul li a, .navbar .contacts, .navbar .copyright').toggleClass('animated fadeInRight');
        $('.navbar').toggleClass('navbar_active');
    });

    $('.mockups-icon').mouseover(function(e){
        $(this).next().css('opacity', '1');
    });
    $('.mockups-icon').mouseout(function(e){
        $(this).next().css('opacity', '');
    });
   
    function dark(){
        $('.menu-btn span').css('background', '#676767');
        $('#fp-nav ul li a span').css('background', '#676767');
        $('#fp-nav ul li a.active span').css('border-color', '#fff');
        $('#fp-nav ul li .fp-tooltip').css('color', '#676767');
        $('header .social-icon_icons, header .social-icon_icons a').css('color', '#676767');
    }
    function light(){
        $('.menu-btn span').css('background', '');
        $('#fp-nav ul li a span').css('background', '#ffffff');
        $('#fp-nav ul li .fp-tooltip').css('color', '#ffffff');
        $('header .social-icon_icons, header .social-icon_icons a').css('color', '#ffffff');
    }
});

