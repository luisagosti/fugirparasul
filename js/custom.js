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
				logo.attr("src", "");
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

// Caroussel
document.addEventListener("DOMContentLoaded", (event) => {
	const carouselSlide = document.querySelector(".carousel-slide");
	const carouselImages = document.querySelectorAll(".carousel-slide img");
	const imageCount = carouselImages.length;
	const imageWidth = carouselImages[0].clientWidth;
	let counter = 0;

	function nextSlide() {
		counter++;
		if (counter >= imageCount) {
			counter = 0;
		}
		carouselSlide.style.transition = "transform 2s ease-in-out";
		carouselSlide.style.transform = `translateX(${-imageWidth * counter}px)`;

		setTimeout(nextSlide, 8000); // Change image every 4 seconds
	}

	nextSlide();
});

// Language Selector

document.addEventListener("DOMContentLoaded", () => {
	// Function to update language
	function updateLanguage(lang) {
		// Hide all elements that do not match the selected language
		document.querySelectorAll("[data-lang]").forEach((el) => {
			el.style.display =
				el.getAttribute("data-lang") === lang ? "block" : "none";
		});
	}

	// Initialize to show Portuguese content by default
	updateLanguage("pt");

	// Event listeners for flags
	document.getElementById("flag-en").addEventListener("click", (event) => {
		event.preventDefault();
		updateLanguage("en");
	});

	document.getElementById("flag-pt").addEventListener("click", (event) => {
		event.preventDefault();
		updateLanguage("pt");
	});
});

// Details Text

document.querySelectorAll("details").forEach((detail) => {
	const content = detail.querySelector(".text-justify");

	// Set detail to open on page load
	detail.setAttribute("open", true);
	content.style.maxHeight = content.scrollHeight + "px"; // Set maxHeight to content's full height on load

	detail.addEventListener("toggle", function () {
		if (detail.open) {
			content.style.maxHeight = content.scrollHeight + "px"; // Set max-height to content's scroll height
		} else {
			content.style.maxHeight = content.scrollHeight + "px"; // Set maxHeight to current height (no change)

			// Delay reducing height to 0 to trigger smooth closing animation
			setTimeout(() => {
				content.style.maxHeight = "0"; // Smoothly collapse by reducing max-height to 0
			}, 10);
		}
	});

	// Ensure content is fully collapsed initially when the page loads
	detail.addEventListener("transitionend", (e) => {
		if (!detail.open) {
			content.style.maxHeight = "0"; // Reset height after closing is complete
		}
	});
});

$(document).ready(function () {
	var $carousel = $("#testimonial-carousel");
	var $bg = $("#testimonial-bg");

	$carousel.owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		items: 1,
		smartSpeed: 800,
	});

	// Navigation buttons
	$("#prev-testimonial").on("click", function () {
		$carousel.trigger("prev.owl.carousel");
	});

	$("#next-testimonial").on("click", function () {
		$carousel.trigger("next.owl.carousel");
	});

	// Sync background on init & change
	function syncBackground(event) {
		var index = event.item.index;
		var $item = $(event.target).find(".owl-item").eq(index).find(".item");
		var bg = $item.data("bg");
		if (bg) {
			$bg.css("background-image", "url(" + bg + ")");
		}
	}

	$carousel.on("changed.owl.carousel", syncBackground);
	$carousel.on("initialized.owl.carousel", syncBackground);
});

// ============== redirectToAirbnb() ==============

function redirectToAirbnb() {
	// Detecta a linguagem ativa
	const isPt = document.querySelector('[data-lang="pt"]:not([style*="display: none"])') !== null;

	// Campos de data
	const checkin = isPt
		? document.getElementById('checkin-pt').value
		: document.getElementById('checkin-en').value;
	const checkout = isPt
		? document.getElementById('checkout-pt').value
		: document.getElementById('checkout-en').value;

	// Adultos e Crianças
	const adults = isPt
		? document.getElementById('adults-pt').value
		: document.getElementById('adults-en').value;
	const children = isPt
		? document.getElementById('kids-pt').value
		: document.getElementById('kids-en').value;

	// Casa selecionada
	const house = document.getElementById('house').value;

	// Mapeamento de URLs e share IDs
	const houseData = {
		"1": {
			url: "https://www.airbnb.pt/rooms/36367734",
			shareId: "08d6c901-17e7-4d17-b7ae-079f6b6034c1"
		},
		"2": {
			url: "https://www.airbnb.pt/rooms/2262342",
			shareId: "0f921361-7dee-4b8e-a59a-d02b990dada3"
		},
		"3": {
			url: "https://www.airbnb.pt/rooms/862629523957211348",
			shareId: "d404d274-1653-4979-bf84-502c418624ba"
		}
	};

	// Função de formatação de data
	function formatDate(input) {
		const date = new Date(input);
		if (isNaN(date)) return "";
		const yyyy = date.getFullYear();
		const mm = String(date.getMonth() + 1).padStart(2, '0');
		const dd = String(date.getDate()).padStart(2, '0');
		return `${yyyy}-${mm}-${dd}`;
	}

	const check_in = formatDate(checkin);
	const check_out = formatDate(checkout);

	if (!check_in || !check_out || !adults || !children) {
		alert("Por favor, preencha todas as informações.");
		return;
	}

	const totalGuests = parseInt(adults) + parseInt(children);

	const houseInfo = houseData[house];
	if (!houseInfo) {
		alert("Casa inválida.");
		return;
	}

	const finalUrl = `${houseInfo.url}?adults=${adults}` +
		`&children=${children}` +
		`&check_in=${check_in}` +
		`&check_out=${check_out}` +
		`&guests=${totalGuests}` +
		`&s=67` +
		`&unique_share_id=${houseInfo.shareId}`;

	console.log(finalUrl, "_blank");
	window.open(finalUrl, "_blank");

}

// ============== Mapa ==============

let currentRegion = 0;
const totalRegions = 3;
let currentLang = 'pt'; // default language
const testimonialIndices = [0, 0, 0]; // one per region


// Define positions for the red dot (relative to map container)
const dotPositions = [
	{ top: '44%', left: '37%' }, // North
	{ top: '75%', left: '41%' }, // Center
	{ top: '77%', left: '50%' }  // South
];

// Function to update amenities section if it exists
function updateAmenities(regionIndex) {
	const amenitiesSection = document.getElementById('amenities');
	if (amenitiesSection) {
		// Update amenities content sections using inline styles
		for (let i = 0; i < totalRegions; i++) {
			const amenityContent = document.querySelector(`#amenities #content-${i}`);
			const regionCarousel = document.querySelector(`.region-amenities[data-region="${i}"]`);

			if (amenityContent) {
				amenityContent.style.opacity = '0';
				amenityContent.style.display = 'none';
			}
			if (regionCarousel) {
				regionCarousel.classList.remove('active');
			}
		}

		// Show active content and carousel
		const activeAmenityContent = document.querySelector(`#amenities #content-${regionIndex}`);
		const activeCarousel = document.querySelector(`.region-amenities[data-region="${regionIndex}"]`);

		if (activeAmenityContent) {
			activeAmenityContent.style.opacity = '1';
			activeAmenityContent.style.display = 'block';
		}
		if (activeCarousel) {
			activeCarousel.classList.add('active');
		}
	}
}

function switchLanguage(lang) {
	currentLang = lang;

	// Toggle all elements with data-lang
	document.querySelectorAll('[data-lang]').forEach(el => {
		if (el.getAttribute('data-lang') === lang) {
			el.style.display = '';
		} else {
			el.style.display = 'none';
		}
	});
}

// Function to update testimonials section if it exists
function updateTestimonials(regionIndex) {
	const testimonialsSection = document.getElementById('testimonial-section');
	if (testimonialsSection) {
		// Update testimonials content sections
		for (let i = 0; i < totalRegions; i++) {
			const testimonialContent = document.querySelector(`#testimonial-section #testimonial-content-${i}`);
			const regionTestimonials = document.querySelector(`.region-testimonials[data-region="${i}"]`);

			if (testimonialContent) {
				testimonialContent.style.opacity = '0';
				testimonialContent.style.display = 'none';
			}
			if (regionTestimonials) {
				regionTestimonials.classList.remove('active');
			}
		}

		// Show active content and testimonials
		const activeTestimonialContent = document.querySelector(`#testimonial-section #testimonial-content-${regionIndex}`);
		const activeTestimonials = document.querySelector(`.region-testimonials[data-region="${regionIndex}"]`);

		if (activeTestimonialContent) {
			activeTestimonialContent.style.opacity = '1';
			activeTestimonialContent.style.display = 'block';
		}
		if (activeTestimonials) {
			activeTestimonials.classList.add('active');

			// Reset testimonial index and show first testimonial
			currentTestimonialIndex = 0;
			showTestimonial(activeTestimonials, 0);
		}

		// Update background image based on region
		const backgroundImages = [
			'images/setubalpng.png',  // Region 0
			'images/alentejopng.png',  // Region 1
			'images/cercalpng.png'   // Region 2 
		];

		const testimonialBg = document.getElementById('testimonial-bg');
		if (testimonialBg && backgroundImages[regionIndex]) {
			testimonialBg.style.backgroundImage = `url('${backgroundImages[regionIndex]}')`;
		}
	}
}

function updateContent(regionIndex) {
	// Hide all content sections
	for (let i = 0; i < totalRegions; i++) {
		const contentEl = document.getElementById(`content-${i}`);
		const imagesEl = document.getElementById(`images-${i}`);
		if (contentEl) contentEl.classList.remove('active');
		if (imagesEl) imagesEl.classList.remove('active');
	}

	// Show current region content
	const activeContent = document.getElementById(`content-${regionIndex}`);
	const activeImages = document.getElementById(`images-${regionIndex}`);
	if (activeContent) activeContent.classList.add('active');
	if (activeImages) activeImages.classList.add('active');

	// Move the red dot
	const redDot = document.getElementById('red-dot');
	if (redDot && dotPositions[regionIndex]) {
		redDot.style.top = dotPositions[regionIndex].top;
		redDot.style.left = dotPositions[regionIndex].left;
	}

	// Update counter safely
	const regionCounter = document.getElementById('region-counter');
	if (regionCounter) regionCounter.textContent = regionIndex + 1;

	// Update amenities and testimonials
	updateAmenities(regionIndex);
	updateTestimonials(regionIndex);
}

function navigateUp() {
	currentRegion = (currentRegion - 1 + totalRegions) % totalRegions;
	updateContent(currentRegion);
}

function navigateDown() {
	currentRegion = (currentRegion + 1) % totalRegions;
	updateContent(currentRegion);
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
	if (e.key === 'ArrowUp') {
		e.preventDefault();
		navigateUp();
	} else if (e.key === 'ArrowDown') {
		e.preventDefault();
		navigateDown();
	}
});

// Button navigation
document.getElementById('prev').addEventListener('click', navigateUp);
document.getElementById('next').addEventListener('click', navigateDown);

// Testimonial navigation - Simple approach
let currentTestimonialIndex = 0;

function updateTestimonialNavigation() {
	const prevBtn = document.getElementById('prev-testimonial');
	const nextBtn = document.getElementById('next-testimonial');

	if (prevBtn) {
		prevBtn.addEventListener('click', function () {
			const activeRegion = document.querySelector('.region-testimonials.active');
			if (activeRegion) {
				const testimonialItems = activeRegion.querySelectorAll('.item');
				if (testimonialItems.length > 0) {
					currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialItems.length) % testimonialItems.length;
					showTestimonial(activeRegion, currentTestimonialIndex);
				}
			}
		});
	}

	if (nextBtn) {
		nextBtn.addEventListener('click', function () {
			const activeRegion = document.querySelector('.region-testimonials.active');
			if (activeRegion) {
				const testimonialItems = activeRegion.querySelectorAll('.item');
				if (testimonialItems.length > 0) {
					currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
					showTestimonial(activeRegion, currentTestimonialIndex);
				}
			}
		});
	}
}

function showTestimonial(container, index) {
	const items = container.querySelectorAll('.item');
	items.forEach((item, i) => {
		item.style.display = i === index ? 'block' : 'none';
	});
}

// Initialize testimonial navigation when page loads
document.addEventListener('DOMContentLoaded', function () {
	updateTestimonialNavigation();

	// Show first testimonial of active region
	const activeRegion = document.querySelector('.region-testimonials.active');
	if (activeRegion) {
		showTestimonial(activeRegion, 0);
	}
});

// Touch/swipe support for mobile - Updated to avoid carousel conflicts
let touchStartY = 0;
let touchEndY = 0;
let touchTarget = null;

document.addEventListener('touchstart', function (e) {
	touchStartY = e.changedTouches[0].screenY;
	touchTarget = e.target;
});

document.addEventListener('touchend', function (e) {
	touchEndY = e.changedTouches[0].screenY;

	// Only handle swipe if not touching carousel elements
	const isCarouselTouch = touchTarget && (
		touchTarget.closest('.owl-carousel') ||
		touchTarget.closest('#amenities') ||
		touchTarget.closest('.region-amenities')
	);

	if (!isCarouselTouch) {
		handleSwipe();
	}
});

function handleSwipe() {
	const swipeThreshold = 50; // minimum distance for a swipe
	const difference = touchStartY - touchEndY;

	if (Math.abs(difference) > swipeThreshold) {
		if (difference > 0) {
			// Swiped up - go to next region
			navigateDown();
		} else {
			// Swiped down - go to previous region
			navigateUp();
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	switchLanguage(currentLang);
	updateTestimonialNavigation();
	const activeRegion = document.querySelector('.region-testimonials.active');
	if (activeRegion) showTestimonial(activeRegion, 0);
});


// Initialize
updateContent(currentRegion);



// ======== Send Email =========

document.querySelector(".contact__form").addEventListener("submit", function (e) {
	e.preventDefault();
	let form = this;
	let formData = new FormData(form);

	fetch(form.action, {
		method: "POST",
		body: formData
	})
		.then(response => response.text())
		.then(result => {
			if (result.trim() === "success") {
				let msg = document.querySelector(".contact__msg");
				msg.classList.remove("hidden");
				msg.classList.add("animate-fadeIn");

				form.reset();

				// esconder depois de 4s
				setTimeout(() => {
					msg.classList.add("hidden");
					msg.classList.remove("animate-fadeIn");
				}, 4000);
			} else {
				alert("Ocorreu um erro ao enviar. Tente novamente.");
			}
		})
		.catch(() => {
			alert("Erro de rede. Verifique a ligação.");
		});
});