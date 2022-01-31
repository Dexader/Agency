$(function () {


	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#menu");
	let navToggle = $("#navToggle");
	let wid = $(window).width();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function () {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("header__fixed");
		} else {
			header.removeClass("header__fixed");
		}
	}
	
	

	var sections = $('section')
		
		, nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});

	nav.find('a').on('click', function () {
		var $el = $(this)
			, id = $el.attr('href');

		$('html, body').animate({
			scrollTop: $(id).offset().top - 70
		}, 500);

		return false;
	});

	navToggle.on('click', function () {
		if ($(this).hasClass('menu__show')) {
			$(this).removeClass('menu__show');
			nav.slideUp();
		} else {
			$(this).addClass('menu__show');
			nav.slideDown();
		}
	});

	if ($(window).width() < 768) { menuHandler(); }

	$(window).on('resize', function () {
		if ($(window).width() < 768) {
			menuHandler();
		}
	});

	let menuHandler = function () {
		$(document).click(function (e) {
			if (!navToggle.is(e.target) && navToggle.has(e.target).length === 0) {
				nav.slideUp();
				navToggle.removeClass('menu__show');
			};
		});

	}
});