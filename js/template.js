$(document).ready(function(){
    $(window).scroll(function(e){
        var st = $(this).scrollTop();
        if(st != 0){
            $('.portfolio-header').css({
                background: '#ffffff',
                'border-bottom': '1px solid rgba(0,0,0,0.3)'
            });
            $('.menu-btn span').css({background: '#676767'});
            $('.portfolio-header .social-icon_icons').css({color: '#676767'});
            $('.portfolio-header .social-icon_icons a').css({color: '#ff3a4c'});
        }else{
            $('.menu-btn span').css({background: ''});
            $('header').css({background: '', 'border-bottom': ''});
            $('.portfolio-header .social-icon_icons, .portfolio-header .social-icon_icons a').css({color: ''});
        }

        $('.section-video-title').css({
            transform: 'translateY(' + st/2 + '%)',
        });
    });
    $('.menu-btn').click(function(){
        $(this).toggleClass('menu-btn_active');
        $('.navbar ul li a, .navbar .contacts, .navbar .copyright').toggleClass('animated fadeInRight');
        $('.navbar').toggleClass('navbar_active');
    });

    $('a[data-target^="target"]').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 0;
        $('body, html').animate({ scrollTop: bl_top }, 1500);
		return false;
    });
    
    $('.adress').mouseover(function(){
        $('.adress-bottom-border').css('width', '100%');
        $('.adress-content').css('background', 'rgba(0,0,0,0.3)');
        $(this).children('img').css('width', '110%');
        $('.arrow').css('border', 'none');
        $('.arrow i').css('transform', 'translate(0)');
        $('.arrow-line').css({
            'transform': 'translate(5px)',
            'opacity': '1'
        });
    });
    $('.adress').mouseout(function(){
        $('.adress-bottom-border').css('width', '');
        $('.adress-content').css('background', '');
        $(this).children('img').css('width', '');
        $('.arrow').css('border', '');
        $('.arrow i').css('transform', '');
        $('.arrow-line').css({
            'transform': '',
            'opacity': ''
        });
    });

    $('.content-item').mouseover(function(){
        $(this).children('.content-item-popup').css('display', 'flex');
    });
    $('.content-item').mouseout(function(){
        $(this).children('.content-item-popup').css('display', '');
    });

    $('.input').focus(function(){
        $(this).parent().addClass('focus');
    }).blur(function(){
        if($(this).val() === ''){
            $(this).parent().removeClass('focus');
        }
    });

    function calculatePrice(){
        var total = 0,
            distancePrice = 0;

        

        $('.content-item').click(function(){
            var dataPrice = parseFloat($(this).children('label').children('input').attr('data-price'));

            $(this).toggleClass('checked');
            if($(this).children('label').children('input').prop('checked')){
                total += dataPrice;
                distancePrice += dataPrice/10;
                
                $('.price-place span').text(total);
                $('.progress-line').css('width', distancePrice+20 + 'px');
                $('.price-place').css({'transform': 'translateX(' + distancePrice + 'px)'});
            }else{
                total -= dataPrice;
                distancePrice -= dataPrice/10;
                
                $('.price-place span').text(total);
                $('.progress-line').css('width', distancePrice+20 + 'px');
                $('.price-place').css({'transform': 'translateX(' + distancePrice + 'px)'});
            }
            

            if($('#multi-lang').hasClass('checked')){
                $('#lang-checkbox').css('display', 'flex');
            }else{
                $('#lang-checkbox').css('display', '');
            }
        });
        
        $('.content-range input').on('input', function(){
            var page = $('#page-range').val();
            var item = $('#item-range').val();

            $('#page-volume').text(page);
            $('#page-volume').css('left', page*5.1 -15 + 'px');
            $('#item-volume').text(item);
            $('#item-volume').css('left', item*5.1 -15 + 'px');
        });

        $('#page-range').on('change', function(e){
            var vol = $(this).val(),
                dataPrice = $(this).attr('data-price'),
                range = parseFloat(vol) * parseFloat(dataPrice);

            total += range;
            $('.price-place span').text(total);
            distancePrice += range/10;
            $('.progress-line').css('width', distancePrice+20 + 'px');
            $('.price-place').css({'transform': 'translateX(' + distancePrice + 'px)'});
        });
        
        $('#item-range').on('change', function(){
            var vol = $(this).val(),
                dataPrice = $(this).attr('data-price'),
                range = parseFloat(vol) * parseFloat(dataPrice);

            total += range;
            $('.price-place span').text(total);
            distancePrice += range/10;
            $('.progress-line').css('width', distancePrice+20 + 'px');
            $('.price-place').css({'transform': 'translateX(' + distancePrice + 'px)'});
        });

        $('.checkbox input[type="checkbox"]').click(function(){
            if(this.checked){
                total += parseFloat($(this).attr('data-price'));
                $('.price-place span').text(total);
                distancePrice += parseFloat($(this).attr('data-price'))/10;
                $('.progress-line').css('width', distancePrice+20 + 'px');
                $('.price-place').css({'transform': 'translateX(' + distancePrice + 'px)'});
            }else{
                total -= parseFloat($(this).attr('data-price'));
                $('.price-place span').text(total);
                distancePrice -= parseFloat($(this).attr('data-price'))/10;
                $('.progress-line').css('width', distancePrice+20 + 'px');
                $('.price-place').css({'transform': 'translateX(' + distancePrice + 'px)'});
            }
        });
        // configurator
        $('.type .content-item').click(function(){
            configType(this);
        });
        $('.content-btn-success').click(function(){
            $('.count-price').text($('.price-place span').text())
            if(!$(this).attr('type')){
                if($(this).parent().children().children('.content-item').hasClass('checked') || $(this).parent().children('p').attr('data-option')){
                    configType(this);
                }else{
                    $('.alert').fadeIn();
                }
            }
        });
    
        function configType(data){
            setTimeout(function(){
                if(data.parentNode.classList == 'content-items'){
                    $(data).parent().parent().hide();
                }else{
                    $(data).parent().hide();
                }
            }, 1500);
            setTimeout(function(){
                if(data.parentNode.classList == 'content-items'){
                    $(data).parent().parent().next().css('display', 'flex');
                }else{
                    $(data).parent().next().css('display', 'flex');
                }
            }, 1500);
            
            if(data.id != 'landing'){
                $('#page').css('display', 'flex');
            }
            if(data.id == 'e-shop'){
                $('#item').css('display', 'flex');
            }
        }

        
    }
    calculatePrice();
});