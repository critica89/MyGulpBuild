$(document).ready(function() {

	var menuToggle = (function ($) {
		var ulMenu = $(".header__nav");
		var btnMenu = $(".menu-toggle");

		var isVisible = false;

		return {
			getUlMenu : ulMenu,
			getBtnMenu : btnMenu,

			toggleMenu : function () {
				if (!isVisible) {
					ulMenu.addClass("nav_visible");
					isVisible = true;
				} else {
					ulMenu.removeClass("nav_visible");
					isVisible = false;
				}
			}
		}
	})(jQuery);

	var aboutTabs = (function ($) {
			var aboutTabs = $("[data-tab]");
			var aboutContent = $("[data-tab-content]");

			return {
				getButtons: aboutTabs,
				getContent: aboutContent,

				showContent: function() {
					
					var dataTab = $(this).data("tab");
					aboutTabs.removeClass("detailsAboutUs__button_active");
					$(this).addClass("detailsAboutUs__button_active");
					aboutContent.each( function() {						
						var dataTabContent = $(this).data("tabContent");
						$(this).removeClass("detailsAboutUs__content_visible");
						if(dataTabContent === dataTab) {
							$(this).addClass("detailsAboutUs__content_visible");
						}
					});
				}
			}
		})(jQuery);

var init = (function () {
	menuToggle.getBtnMenu.click(menuToggle.toggleMenu);
	aboutTabs.getButtons.click(aboutTabs.showContent);
})();







	
/*
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	
	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		}
	}, {offset: 100});	

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});*/
	

});