$(function () {


	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#menu");
	let navToggle = $("#navToggle");

	//Header fixed

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
	
	//Active

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

	//Smooth scroll

	nav.find('a').on('click', function () {
		var $el = $(this)
			, id = $el.attr('href');

		$('html, body').animate({
			scrollTop: $(id).offset().top - 70
		}, 500);

		return false;
	});

	//Toggle menu

	navToggle.on('click', function () {
		if ($(this).hasClass('menu__show')) {
			$(this).removeClass('menu__show');
			nav.slideUp();
		} else {
			$(this).addClass('menu__show');
			nav.slideDown();
		}
	});

	//Filter

	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();

		let cat = $(this).data('filter');

		if (cat == 'all') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function () {
				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});

});