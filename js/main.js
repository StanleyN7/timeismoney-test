$(function(){
	//Инициализация слайдера
    $('.slider').owlCarousel({
    	loop: true,
		items:	1,
		nav: true,
		dots: true,
		smartSpeed: 2000,
		autoplay: true,
		autoplayTimeout: 8000,
		navText: [
			'<p class="slider_nav_btn prew_btn"><i class="fa fa-angle-left" aria-hidden="true"></i></p>',
			'<p class="slider_nav_btn next_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></p>'
		]
	});
	//Прокрутка к разделам
	$('body').on('click', '.go_to', function(){
		var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
	    return false;
    });
    //Ховер в ценовых пакетах
    $(".package_buy_btn").hover(
	  function() {
	    $(this).closest(".package").addClass( "hover" );
	  }, function() {
	    $(this).closest(".package").removeClass( "hover" );
	  }
	);
	// Мобильное меню
	$('.menu_mobile_btn, .go_to').on('click', function(){
		$('.nav_menu_list').toggleClass('active');
    });
    //Валидация формы
    $('.send_btn').on('click', function(){
    	var check = 1;
    	$(this).closest('.send_form').find('.field').each(function(e){ //проверка на наличие текста
    		if ($(this).val() == ''){
    			$(this).addClass('error');
    			check = 0;
     		}
    	});
    	if($('.email_field').val() != ''){ //валидация корректного email
    		var email = $('.email_field').val();
    		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    		if(!pattern.test(email)){
    			check = 0;
    			$('.email_field').val('').addClass('error').attr('placeholder', 'не коррректный email');
    		}
    	}
    	if(check == 1){
			console.log('отправили форму'); //Отправка аякса или формы по прохождении валидации
		}
    });
    $('input, textarea').on('click', function(){ //снятые выделения
    	$('input, textarea').removeClass('error');
    });
});