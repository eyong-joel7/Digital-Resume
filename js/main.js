// Change the current window shown by toggling the active class.
$('.main-menu a').on('click', function (e) {

	var activeClass = $(this).attr('href').substring(1);

	setTimeout(function () {
		$('.content.active').removeClass('active');

		$('.' + activeClass).addClass('active');

		$('html, body').animate({
			scrollTop: $($('.' + activeClass)).offset().top
		}, 500);

	}, 300);

	// Once a user clicks the portfolio link, animate the portfolio.
	if (activeClass === 'portfolio') {

		setTimeout(function () {

			$('.filter-controls li')[0].click();

		}, 300);
	}

});


// Change the current active window based on the hash value in the url.
var type = window.location.hash.substr(1);

if (type) {
	$('.content.active').removeClass('active');

	$('.' + type).addClass('active');

}

// Magnific Popup init
$('.popup-link').magnificPopup({
	type: 'image'
});

// Adds active class to the current portfolio item selected.
$('.filter-controls li').on('click', function () {

	if (!$(this).hasClass('active')) {

		$('.filter-controls li.active').removeClass('active');

		$(this).addClass('active')

	}

});

// Filterizr init for portfolio page.
var options = {
	/* check next step for available options */ };

// Adjust the CSS selector to match the container where you set up your image gallery
var filterizr = new Filterizr('.filter-container', options);



(function() {
	'use strict';
	window.addEventListener('load', function() {
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	var validation = Array.prototype.filter.call(forms, function(form) {
	form.addEventListener('submit', function(event) {
	if (form.checkValidity() === false) {
	event.preventDefault();
	event.stopPropagation();
	}
	form.classList.add('was-validated');
	}, false);
	});
	}, false);
	})();