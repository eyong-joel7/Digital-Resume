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

	// document.getElementById('btn_send').addEventListener('submit', function(){
	// 	console.log('i am here');
	// 	var template_params = {
	// 		"to": "to_value",
	// 		"from_name": "from_name_value",
	// 		"message": "message_value"
	// 	 }
	 
	 
	//  var service_id = "default_service";
	//  var template_id = "template_WFp07kBp";
	//  emailjs.send(service_id, template_id, template_params)
	//  .then(function (response){
	// 	 console.log('SUCCESS!', response.status, response.text);
	//  },
	//  function (error){
	// 	 console.log('FAILED!', error);
	//  });
	//   });

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
	document.getElementById('validationForm').querySelectorAll('.form-control').forEach(function (input) {
		input.addEventListener(('input'), function() {
		  if (input.checkValidity()) {
			input.classList.remove('is-invalid')
			input.classList.add('is-valid');
			// $("#submitBtn").attr("disabled",false);           <<<<======== ??????
		  } else {
			input.classList.remove('is-valid')
			input.classList.add('is-invalid');
		  }
		  var is_valid = $('.form-control').length === $('.form-control.is-valid').length;
		  $("#btn_send").attr("disabled", !is_valid);
		});
	  });
	}, false);
	})();

