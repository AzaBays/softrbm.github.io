$(document).ready(function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass('menu-btn_active');
        $('.navbar ul li a, .navbar .contacts, .navbar .copyright').toggleClass('animated fadeInRight');
        $('.navbar').toggleClass('navbar_active');
    });
   
    

    

});

