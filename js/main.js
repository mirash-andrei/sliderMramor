$(document).ready(function(){
	$(function() {      
	  var slider = $('.slider'),
		sliderContent = slider.html(),                      // Содержимое слайдера
		slideWidth = $('.slider-box').outerWidth(),         // Ширина слайдера
		slideCount = $('.slider .img_product').length,               // Количество слайдов
		prev = $('.slider-box .prev'),                      // Кнопка "назад"
		next = $('.slider-box .next'),                      // Кнопка "вперед"
		//sliderInterval = 99999,                               Интервал смены слайдов
		animateTime = 1000,                                 // Время смены слайдов
		course = 1,                                         // Направление движения слайдера (1 или -1)
		margin = - slideWidth;                              // Первоначальное смещение слайдов
	  $('.slider .img_product:last').clone().prependTo('.slider');   // Копия последнего слайда помещается в начало.
	  $('.slider .img_product').eq(1).clone().appendTo('.slider');   // Копия первого слайда помещается в конец.  
	  $('.slider').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.
	 
	 // function nextSlide(){                                  Запускается функция animation(), выполняющая смену слайдов.
	//	interval = window.setInterval(animate, sliderInterval);
	//  }
		var sliderSmall = $('.slider_small'),
            sliderSmallContent = slider.html(),                      						// Содержимое слайдера2
            sliderSmallHeight = $('.slider-box_small').outerHeight(),         				// Высота слайдера2
			slideSmallHeight  = $('.img_product_small').outerHeight(),						// высота слайда
            slideSmallCount = $('.slider_small .img_product_small').length,					// колличество слайдов во 2 слайдере
			marginSmall = - slideSmallHeight;
        	$('.slider_small .img_product_small:last').clone().prependTo('.slider_small');   // Копия последнего слайда помещается в начало.
			$('.slider_small .img_product_small').eq(1).clone().appendTo('.slider_small');   // Копия первого слайда помещается в конец.
			$('.slider_small').css('margin-top', -slideSmallHeight);         				// Контейнер .slider2 сдвигается вверх на высоту одного слайда.
	 
	  function animate(){
		if (margin==-slideCount*slideWidth-slideWidth){     // Если слайдер дошел до конца
			slider.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
		  margin=-slideWidth*2;
		}else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
		  slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
		  margin=-slideWidth*slideCount+slideWidth;
		}else{                                              // Если условия выше не сработали,
		margin = margin - slideWidth*(course);              // значение margin устанавливается для показа следующего слайда
		}
		slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.

	  }

	  // анимация второго слайдера
		function animate2(){
            if (marginSmall==-(slideSmallCount-2)*slideSmallHeight-slideSmallHeight){    		 // Если слайдер дошел до конца
                sliderSmall.css({'marginTop':-slideSmallHeight});          							 // то блок .slider возвращается в начальное положение
                marginSmall= 0;
            }else if(marginSmall==0 && course==-1){                  								// Если слайдер находится в начале и нажата кнопка "назад"
                sliderSmall.css({'marginTop':-slideSmallHeight*slideSmallHeight});					// то блок .slider перемещается в конечное положение
                marginSmall=-slideSmallHeight*2;
            }else{                                              								// Если условия выше не сработали,
					marginSmall = marginSmall - slideSmallHeight*(course);              		// значение margin устанавливается для показа следующего слайда
            }
            sliderSmall.animate({'marginTop':marginSmall},animateTime);  							// Блок .slider смещается влево на 1 слайд.
		}

	 
	  /*function sliderStop(){                                 Функция преостанавливающая работу слайдера
		window.clearInterval(interval);
	  }*/
	 
	  prev.click(function() {                               // Нажата кнопка "назад"
		if (slider.is(':animated')) { return false; }       // Если не происходит анимация
		var course2 = course;                               // Временная переменная для хранения значения course
		course = -1;                                        // Устанавливается направление слайдера справа налево
		animate();                                          // Вызов функции animate()
        animate2();
		course = course2 ;                                  // Переменная course принимает первоначальное значение
	  });
	  next.click(function() {                               // Нажата кнопка "вперед"
		if (slider.is(':animated')) { return false; }       // Если не происходит анимация
		var course2 = course;                               // Временная переменная для хранения значения course
		course = 1;                                         // Устанавливается направление слайдера справа налево
		animate();                                          // Вызов функции animate()
        animate2();
		course = course2 ;                                  // Переменная course принимает первоначальное значение
	  });
	 
	  /*slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
		sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
	  }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.

	  nextSlide();*/                                          // Вызов функции nextSlide()
	});
	
	
	  
});