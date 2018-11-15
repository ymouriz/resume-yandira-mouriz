/*
Contact me form validation.
*/

var emailPattern = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');



var email = document.forms['userRegForm'].email;
var phone = document.forms['userRegForm'].phone;
var firstName = document.forms['userRegForm'].firstName;
var lastName = document.forms['userRegForm'].lastName;

// Email length regex pattern.
var emailLengthPattern = new RegExp($(email).attr('pattern'));


// Initialize popover for all required inputs
$('input[required]').popover({
	placement: 'bottom',
	container: 'body',
	trigger: 'manual',
	selector: 'true',
	content: function() {
		return $(this).attr('title');
	},
	template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
}).focus(function() {
	$(this).popover('hide');
});

function validateForm(form) {

	// Email validation.
  if (!emailPattern.test(email.value) || !emailLengthPattern.test(email.value)) {
  	$(email).popover('show');
    	return false;
    } else {
		$(email).addClass('valid')
	}


	// First name validation.
	if (firstName.value.length === 0) {
		$(firstName).popover('show');
		return false;
	}

	// Last name validation.
	if (lastName.value.length === 0) {
		$(lastName).popover('show');
		return false;
	}

  // Phone validation.
	if (phone.value.length === 0) {
		$(phone).popover('show');
		return false;
	}

	// No validation errors.
	$( "form" ).replaceWith("Thank you for your message!");


	return false;
}

function validateEmail(input) {
	if (emailPattern.test(input.value) && emailLengthPattern.test(input.value)) {
		$(input).addClass('valid')
	} else {
		$(input).removeClass('valid');
	}
}


function validateRequired(input) {

	if (input.setCustomValidity) {
		input.setCustomValidity('');

		if (input.validity && !input.validity.valid) {
			input.setCustomValidity(input.title);
		}
	}

	if (input.value.length > 0) {
  	$(input).addClass('valid');
  } else {
		$(input).removeClass('valid');
	}
}
