/* -------------------------------------------------------

01. ScrollIt
02. Logo & Menu scroll sticky
03. Menu Navigation
04. Custom OnePage Menu
05. Sub Menu
06. Custom OnePage Sub Menu
07. Sections background image from data background 
08. Animations
09. YouTubePopUp
10. Rooms 1 owlCarousel
11. Rooms 2 owlCarousel
12. Rooms 4 owlCarousel
13. Rooms Details 1 owlCarousel
14. Rooms Details 2 owlCarousel
15. Amenities owlCarousel
16. Services 2 owlCarousel
17. Blog Home owlCarousel
18. Testimonials owlCarousel 
19. Client 
20. Accordion Box (for Faqs)
21. Accordion Menu
22. MagnificPopup Gallery
23. Smooth Scrolling
24. Scroll back to top
25. Select2
26. Datepicker
27. Slider
28. Preloader
29. Contact Form


------------------------------------------------------- */
$(function () {
	"use strict";
	var wind = $(window);

	// ScrollIt
	$.scrollIt({
		upKey: 38, // key code to navigate to the next section
		downKey: 40, // key code to navigate to the previous section
		easing: "swing", // the easing function for animation
		scrollTime: 600, // how long (in ms) the animation takes
		activeClass: "active", // class given to the active nav element
		onPageChange: null, // function(pageIndex) that is called when page is changed
		topOffset: -70, // offste (in px) for fixed top navigation
	});

	// Logo & Menu scroll sticky
	$(window).scroll(function () {
		var $this = $(this),
			st = $this.scrollTop(),
			navbar = $(".fugir-header"),
			logo = $(".fugir-header .fugir-logo> img");
		if (st > 150) {
			if (!navbar.hasClass("scrolled")) {
				navbar.addClass("scrolled");
				logo.attr(
					"src",
					"images/logos/PNG - OTHER VERSION OF COLOR/HORIZONTAL LOGO/Horizontal logo - PASTEL GOLD COLOR @3x.png"
				);
			}
		}
		if (st < 150) {
			if (navbar.hasClass("scrolled")) {
				navbar.removeClass("scrolled sleep");
				logo.attr(
					"src",
					"images/logos/PNG - OTHER VERSION OF COLOR/HORIZONTAL LOGO/Horizontal logo - white color@3x.png"
				);
			}
		}
		if (st > 350) {
			if (!navbar.hasClass("awake")) {
				navbar.addClass("awake");
			}
		}
		if (st < 350) {
			if (navbar.hasClass("awake")) {
				navbar.removeClass("awake");
				navbar.addClass("sleep");
			}
		}
	});

	// Menu Navigation
	$(".fugir-js-fugir-nav-toggle").on("click", function (e) {
		var $this = $(this);
		e.preventDefault();
		if ($("body").hasClass("menu-open")) {
			$this.removeClass("active");
			$(".fugir-wrap .fugir-wrap-inner > ul > li").each(function (i) {
				var that = $(this);
				setTimeout(function () {
					that.removeClass("open");
				}, i * 100);
			});
			setTimeout(function () {
				$(".fugir-wrap").removeClass("fugir-wrap-show");
			}, 300);
			$("body").removeClass("menu-open");
		} else {
			$(".fugir-wrap").addClass("fugir-wrap-show");
			$this.addClass("active");
			$("body").addClass("menu-open");
			setTimeout(function () {
				$(".fugir-wrap .fugir-wrap-inner > ul > li").each(function (i) {
					var that = $(this);
					setTimeout(function () {
						that.addClass("open");
					}, i * 100);
				});
			}, 200);
		}
	});

	// (1). Custom OnePage Menu
	$(".fugir-menu > ul > li > a").on("click", function (e) {
		var $this = $(this);
		if ($("body").hasClass("menu-open")) {
			$(".fugir-wrap").removeClass("fugir-wrap-show");
			$(".fugir-js-fugir-nav-toggle").removeClass("active");
		}
	});

	// Sub Menu
	$(".fugir-menu li.fugir-menu-sub>a").on("click", function () {
		$(this).removeAttr("href");
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp();
		} else {
			element.addClass("open");
			element.children("ul").slideDown();
			element.siblings("li").children("ul").slideUp();
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp();
		}
	});
	$(".fugir-menu>ul>li.fugir-menu-sub>a").append(
		'<span class="holder"></span>'
	);

	// (2). Custom OnePage Sub Menu
	$(".fugir-menu>ul>li.fugir-menu-sub>a").on("click", function (e) {
		var $this = $(this);
		if ($("body").hasClass("menu-open")) {
			$(".fugir-wrap").addClass("fugir-wrap-show");
			$(".fugir-js-fugir-nav-toggle").addClass("active");
		}
	});

	// Sections background image from data background
	var pageSection = $(".bg-img, section");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css(
				"background-image",
				"url(" + $(this).data("background") + ")"
			);
		}
	});

	// Animations
	var contentWayPoint = function () {
		var i = 0;
		$(".animate-box").waypoint(
			function (direction) {
				if (direction === "down" && !$(this.element).hasClass("animated")) {
					i++;
					$(this.element).addClass("item-animate");
					setTimeout(function () {
						$("body .animate-box.item-animate").each(function (k) {
							var el = $(this);
							setTimeout(
								function () {
									var effect = el.data("animate-effect");
									if (effect === "fadeIn") {
										el.addClass("fadeIn animated");
									} else if (effect === "fadeInLeft") {
										el.addClass("fadeInLeft animated");
									} else if (effect === "fadeInRight") {
										el.addClass("fadeInRight animated");
									} else {
										el.addClass("fadeInUp animated");
									}
									el.removeClass("item-animate");
								},
								k * 200,
								"easeInOutExpo"
							);
						});
					}, 100);
				}
			},
			{
				offset: "85%",
			}
		);
	};
	$(function () {
		contentWayPoint();
	});
	// Initiate the wowjs
	new WOW().init();

	// YouTubePopUp
	$("a.vid").YouTubePopUp();

	// Rooms 1 owlCarousel
	if ($(".rooms1-carousel").length) {
		$(".rooms1-carousel").owlCarousel({
			loop: true,
			margin: 30,
			autoHeight: false,
			autoplayTimeout: 5000,
			dots: false,
			nav: true,
			navText: [
				'<i class="ti-angle-left" aria-hidden="true"></i>',
				'<i class="ti-angle-right" aria-hidden="true"></i>',
			],
			responsiveClass: true,
			responsive: {
				0: {
					dots: false,
					items: 1,
				},
				600: {
					dots: false,
					items: 1,
				},
				1000: {
					dots: false,
					items: 1,
				},
			},
		});
	}

	// Rooms 2 owlCarousel
	$(".rooms2 .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: false,
		dots: true,
		nav: true,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	// Rooms 4 owlCarousel
	$(".room4 .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: false,
		dots: true,
		autoplayHoverPause: true,
		nav: false,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	// Rooms Details owlCarousel
	$(".room-details1 .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: true,
		dots: true,
		nav: true,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	// Room Details 2 owlCarousel
	$(".room-details2 .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: true,
		dots: true,
		nav: true,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	// Amenities owlCarousel
	$(".amenities .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: false,
		dots: true,
		autoplayHoverPause: true,
		nav: false,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	// Services 2 owlCarousel
	$(".services2 .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: false,
		dots: true,
		nav: false,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	// Team owlCarousel
	$(".team .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: false,
		dots: false,
		autoplayHoverPause: true,
		nav: false,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	// Blog Home owlCarousel
	$(".blog-home .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: false,
		dots: true,
		autoplayHoverPause: true,
		nav: false,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	// Testimonials owlCarousel
	$(".testimonials .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: false,
		autoplayTimeout: 7000,
		dots: false,
		nav: false,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	// Clients owlCarousel *
	$(".clients .owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		mouseDrag: true,
		autoplay: true,
		dots: false,
		nav: false,
		navText: [
			"<span class='lnr ti-angle-left'></span>",
			"<span class='lnr ti-angle-right'></span>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				margin: 10,
				items: 3,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 6,
			},
		},
	});

	// Accordion Box (for Faqs)
	if ($(".accordion-box").length) {
		$(".accordion-box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion-box");
			var target = $(this).parents(".accordion");
			if ($(this).next(".acc-content").is(":visible")) {
				//return false;
				$(this).removeClass("active");
				$(this).next(".acc-content").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc-content").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc-content").slideDown(300);
			}
		});
	}

	// Accordion Menu
	if ($(".accordion-menu").length) {
		$(".accordion-menu").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion-menu");
			var target = $(this).parents(".accordion");
			if ($(this).next(".acc-content").is(":visible")) {
				//return false;
				$(this).removeClass("active");
				$(this).next(".acc-content").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc-content").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc-content").slideDown(300);
			}
		});
	}

	// MagnificPopup Gallery
	$(".gallery").magnificPopup({
		delegate: ".popimg",
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	$(".img-zoom").magnificPopup({
		type: "image",
		closeOnContentClick: !0,
		mainClass: "mfp-fade",
		gallery: {
			enabled: !0,
			navigateByImgClick: !0,
			preload: [0, 1],
		},
	});
	$(".magnific-youtube, .magnific-vimeo, .magnific-custom").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 300,
		preloader: false,
		fixedContentPos: false,
	});
	$(".image-popup-vertical-fit").magnificPopup({
		type: "image",
		closeOnContentClick: true,
		mainClass: "mfp-img-mobile",
		image: {
			verticalFit: true,
		},
	});

	// Smooth Scrolling
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});

	// Scroll back to top
	var progressPath = document.querySelector(".progress-wrap path");
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = "none";
	progressPath.style.strokeDasharray = pathLength + " " + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition =
		"stroke-dashoffset 10ms linear";
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength) / height;
		progressPath.style.strokeDashoffset = progress;
	};
	updateProgress();
	$(window).scroll(updateProgress);
	var offset = 150;
	var duration = 550;
	jQuery(window).on("scroll", function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery(".progress-wrap").addClass("active-progress");
		} else {
			jQuery(".progress-wrap").removeClass("active-progress");
		}
	});
	jQuery(".progress-wrap").on("click", function (event) {
		event.preventDefault();
		jQuery("html, body").animate(
			{
				scrollTop: 0,
			},
			duration
		);
		return false;
	});

	// Select2
	$(".select2").select2({
		minimumResultsForSearch: Infinity,
	});

	// Datepicker
	$(".datepicker").datepicker({
		orientation: "top",
	});
});

// Slider
$(document).ready(function () {
	var owl = $(".header .owl-carousel");
	// Slider owlCarousel - (Inner Page Slider)
	$(".slider .owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		margin: 0,
		autoplay: false,
		autoplayTimeout: 5000,
		nav: true,
		navText: [
			'<i class="ti-angle-left" aria-hidden="true"></i>',
			'<i class="ti-angle-right" aria-hidden="true"></i>',
		],
		responsiveClass: true,
		responsive: {
			0: {
				dots: false,
			},
			600: {
				dots: false,
			},
			1000: {
				dots: false,
			},
		},
	});
	// Slider owlCarousel (Homepage Slider)
	$(".slider-fade .owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 5000,
		animateOut: "fadeOut",
		nav: true,
		navText: [
			'<i class="ti-angle-left" aria-hidden="true"></i>',
			'<i class="ti-angle-right" aria-hidden="true"></i>',
		],
		responsiveClass: true,
		responsive: {
			0: {
				dots: false,
				nav: false,
			},
			600: {
				dots: false,
				nav: false,
			},
			1000: {
				dots: false,
			},
		},
	});
	owl.on("changed.owl.carousel", function (event) {
		var item = event.item.index - 2; // Position of the current item
		$("span").removeClass("animated fadeInUp");
		$("h4").removeClass("animated fadeInUp");
		$("h1").removeClass("animated fadeInUp");
		$("p").removeClass("animated fadeInUp");
		$(".butn-light").removeClass("animated fadeInUp");
		$(".butn-dark").removeClass("animated fadeInUp");
		$(".owl-item")
			.not(".cloned")
			.eq(item)
			.find("span")
			.addClass("animated fadeInUp");
		$(".owl-item")
			.not(".cloned")
			.eq(item)
			.find("h4")
			.addClass("animated fadeInUp");
		$(".owl-item")
			.not(".cloned")
			.eq(item)
			.find("h1")
			.addClass("animated fadeInUp");
		$(".owl-item")
			.not(".cloned")
			.eq(item)
			.find("p")
			.addClass("animated fadeInUp");
		$(".owl-item")
			.not(".cloned")
			.eq(item)
			.find(".butn-light")
			.addClass("animated fadeInUp");
		$(".owl-item")
			.not(".cloned")
			.eq(item)
			.find(".butn-dark")
			.addClass("animated fadeInUp");
	});
});

// Preloader
$("#preloader").fadeOut(700);
$(".preloader-bg").delay(700).fadeOut(700);
var wind = $(window);

// Contact Form
var form = $(".contact__form"),
	message = $(".contact__msg"),
	form_data;
// success function
function done_func(response) {
	message.fadeIn().removeClass("alert-danger").addClass("alert-success");
	message.text(response);
	setTimeout(function () {
		message.fadeOut();
	}, 2000);
	form.find('input:not([type="submit"]), textarea').val("");
}
// fail function
function fail_func(data) {
	message.fadeIn().removeClass("alert-success").addClass("alert-success");
	message.text(data.responseText);
	setTimeout(function () {
		message.fadeOut();
	}, 2000);
}
form.submit(function (e) {
	e.preventDefault();
	form_data = $(this).serialize();
	$.ajax({
		type: "POST",
		url: form.attr("action"),
		data: form_data,
	})
		.done(done_func)
		.fail(fail_func);
});

// Select the closes house
function findClosestHouse() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showClosestHouse);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showClosestHouse(position) {
	const userLat = position.coords.latitude;
	const userLng = position.coords.longitude;

	const houses = document.querySelectorAll(".rooms1-single");
	const houseLocations = [
		{ lat: 37.833, lng: -8.67 }, // Cercal do Alentejo
		{ lat: 38.524, lng: -8.892 }, // Setúbal
		{ lat: 37.96, lng: -8.868 }, // Sines
	];

	let closestDistance = Infinity;
	let closestHouseIndex = -1;

	houseLocations.forEach((location, index) => {
		const distance = getDistance(userLat, userLng, location.lat, location.lng);
		if (distance < closestDistance) {
			closestDistance = distance;
			closestHouseIndex = index;
		}
	});

	if (closestHouseIndex !== -1) {
		// Check if the closest house is already visible
		const owl = document.querySelector(".rooms1-carousel");
		const items = owl.querySelectorAll(".rooms1-single");
		const currentActiveIndex = Array.from(items).findIndex((item) =>
			item.classList.contains("active")
		);

		if (currentActiveIndex !== closestHouseIndex) {
			// Scroll to the closest house
			scrollToHouse(closestHouseIndex);

			// Log the closest house details to the console
			const closestHouse = houses[closestHouseIndex];
			const houseTitle =
				closestHouse.querySelector(".rooms1-title a").textContent;
			const houseTagline =
				closestHouse.querySelector(".rooms1-tagline").textContent;
			console.log(`Closest House: ${houseTitle}, Location: ${houseTagline}`);
		} else {
			console.log("Already at the closest house.");
		}
	}
}

function scrollToHouse(index) {
	const owl = $(".rooms1-carousel").owlCarousel();
	owl.trigger("to.owl.carousel", index);
}

function getDistance(lat1, lng1, lat2, lng2) {
	const R = 6371; // Radius of the Earth in km
	const dLat = deg2rad(lat2 - lat1);
	const dLng = deg2rad(lng2 - lng1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) *
			Math.cos(deg2rad(lat2)) *
			Math.sin(dLng / 2) *
			Math.sin(dLng / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c;
}

function deg2rad(deg) {
	return deg * (Math.PI / 180);
}
