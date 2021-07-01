

//JS

		function increaseInput1() {
      var input = document.getElementById("inputNumberAdults");
      input.value++;

    }

    function decreaseInput1() {
      var input = document.getElementById("inputNumberAdults");
      input.value--;

    }
    function increaseInput2() {
      var input = document.getElementById("inputNumberChild");
      input.value++;

    }

    function decreaseInput2() {
      var input = document.getElementById("inputNumberChild");
      input.value--;

    }
    function increaseInput3() {
      var input = document.getElementById("inputNumberInfant");
      input.value++;

    }

    function decreaseInput3() {
      var input = document.getElementById("inputNumberInfant");
      input.value--;

    }

 


//Jquery

jQuery(function($) {

	$(".menu-toggle").click(function() {
    $(this).toggleClass("is-active");
    $('.menu-list, .menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });

  $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
        $('.header').toggleClass('open-menu');
        $('.intro-index__content').toggleClass('open-menu');
    });



	var toTop = $(".index-to-top");
	var body = $("html, body");

	$(window).on("scroll", function(){
            var winScrollTopValue = $(window).scrollTop(); 

            if (winScrollTopValue > 1000) {
                toTop.fadeIn(800); 
            } else if (winScrollTopValue < 1000) {
                toTop.fadeOut(400); 
            }
        });

        toTop.on("click", toTopClicked); 

        function toTopClicked(e) {
            e.preventDefault(); //отменить переход по ссылке
            toTop.toggleClass("scroll-to-top");
            body.animate(
                { scrollTop: 0 },
                1200
            );
        }





$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
$( "#datepicker" ).datepicker();



$("#menu").selectmenu({width : 'auto'});


$( ".styled" ).checkboxradio({
  classes: {
    "ui-checkboxradio": "highlight"
  }
});
$('#menu-button').attr('tabindex', '17');





		var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -20},
						{x: 300,	y: 10}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 510,	y: 60},
						{x: 620,	y: -60},
						{x: 500,	y: -100},
						{x: 600,	y: 20},
						{x: 700,	y: 60},
						{x: 800,	y: 20},
						{x: 920,	y: 15}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 1100,	y: 20},
						{x: 1920,	y: 130},
						{x: $(window).width() + 700,	y: -70},
					]
			}
		};
		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween = new TimelineMax()
			.add(TweenMax.to($("#plane"), 1.5, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3000, offset: 50})
						.setPin("#target")
						.setTween(tween)
						//.addIndicators()
						.addTo(controller);
	})