// Fade loadin page
window.transitionToPage = function (href) {
	document.querySelector("body").style.opacity = 0;
	setTimeout(function () {
		window.location.href = href;
	}, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
	document.querySelector("body").style.opacity = 1;
});

document.addEventListener("DOMContentLoaded", function () {
	var isEnglishPage = document.documentElement.lang === "en";
	var backToTopLabel = isEnglishPage ? "Back to top" : "Lên đầu trang";
	var backToTopButton = document.createElement("button");
	backToTopButton.className = "back-to-top";
	backToTopButton.type = "button";
	backToTopButton.setAttribute("aria-label", backToTopLabel);
	backToTopButton.innerHTML = '<span class="back-to-top__label">' + backToTopLabel + "</span>";
	document.body.appendChild(backToTopButton);

	function toggleBackToTopButton() {
		backToTopButton.classList.toggle("is-visible", window.scrollY > 420);
	}

	backToTopButton.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	window.addEventListener("scroll", toggleBackToTopButton, { passive: true });
	toggleBackToTopButton();
});

// Sticky menu on bottom

// var navpos = $(".nav").offset();
// console.log(navpos.top);
// $(window).bind("scroll", function () {
// 	if ($(window).scrollTop() > navpos.top) {
// 		$(".nav").addClass("sticky");
// 	} else {
// 		$(".nav").removeClass("sticky");
// 	}
// });

// For menu
var jsMenu = $(".menu-nav");
var jsMenuBtn = $(".menu-btn");

$(".menu-btn").on("click", function () {
	if ($(this).hasClass("is-open")) {
		closeMenu();
		$("body").removeClass("is-loading");
		$("body").addClass("is-loaded");
	} else {
		$(this).addClass("is-open");
		jsMenu.addClass("is-open");
		$("body").addClass("is-loading");
		$("body").removeClass("is-loaded");
		setTimeout(function () {
			$(".menu-item").each(function (i) {
				setTimeout(function () {
					$(".menu-item").eq(i).addClass("is-active");
				}, 50 * i);
			});
		}, 500);
	}
});

$(".menu-item").on("click", function () {
	closeMenu();
	$("body").removeClass("is-loading");
	$("body").addClass("is-loaded");
});

function closeMenu() {
	jsMenuBtn.removeClass("is-open");
	jsMenu.removeClass("is-open");
	$(".menu-item").removeClass("is-active");
	$(".menu-logo").addClass("d-block");
}

// modal
$("#modal-1, #modal-2").iziModal({
	// restoreDefaultContent: true,
	fullscreen: true,
	openFullscreen: true,
	closeOnEscape: true,
	closeButton: true,
	transitionIn: "fadeInUp",
	transitionOut: "fadeOutDown",
	transitionInOverlay: "fadeIn",
	transitionOutOverlay: "fadeOut",
	borderBottom: true,
});

$("#voices-1, #voices-2, #voices-3, #voices-4, #voices-5").iziModal({
	// restoreDefaultContent: true,
	fullscreen: false,
	openFullscreen: false,
	closeOnEscape: true,
	closeButton: true,
	transitionIn: "fadeInUp",
	transitionOut: "fadeOutDown",
	transitionInOverlay: "fadeIn",
	transitionOutOverlay: "fadeOut",
	borderBottom: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		const target = document.querySelector(this.getAttribute("href"));

		if (!target) {
			return;
		}

		e.preventDefault();

		closeMenu();
		$("body").removeClass("is-loading");
		$("body").addClass("is-loaded");

		const desktopNav = document.querySelector(".nav.sticky-top");
		const navOffset =
			desktopNav && window.getComputedStyle(desktopNav).display !== "none"
				? desktopNav.offsetHeight
				: 0;
		const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navOffset;

		window.scrollTo({
			top: targetTop,
			behavior: "smooth",
		});
	});
});

// swiper
var mySwiper = new Swiper(".swiper-container", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	simulateTouch: false,
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
	},
});
