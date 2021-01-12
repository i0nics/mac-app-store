// Programmer: Bikram Chatterjee
// Mac App Store
// login.js

// Original HTML content
let login_html = "<img src='Images/logo.png' draggable='false' alt='logo' height='200px'> <p class='login'>Sign in to Mac App Store</p> <form style='height: 84px' method='post' action='form.php'> <input type='text' placeholder='Apple ID' id='in_email' name='in_email' required> <input type='password' placeholder='Password' id='in_pass' name='in_pass' required> <input type='hidden' name='state' value='signin'/> <input type='image' id='submit_login' src='Images/Login/s_button.png' height=25px width=25px alt='submit_login' /> </form> <p class='login' style='font-size: 14px'>Don't have an Apple ID?&nbsp;<a href='' onclick='return false;'><span id='create_one'>Create one!</span></a></p>";
let register_html = "<div id='register'><div id='reg_head'> <img id='reg_logo' src='Images/logo.png' alt='logo' height='19px'> <p id='reg_head_text'> Create Your Apple ID</p> </div> <hr> <form id='form_id' method='post' action='form.php'> <div id='form_main'> <div id='regp1'>One Apple ID is all you need to access all Apple services.<br> Already have an Apple ID? <a class='cancel' href='' onclick='return false;'><span id='back'>Sign In</span><span style='font-size: 17px;'>&nbsp;</span><img src='Images/Login/signin_arrow_vector.png' alt='arrow' height='10px'></a> </div> <div class='form_input'> <div class='form_field' id='first_name_field'> <p class='placeholder' id='placefirst_name'>First name</p> <input type='text' placeholder='First name' id='first_name' name='first_name'> </div> <div class='form_field' id='last_name_field' style='position: relative; left: 5px;'> <p class='placeholder' id='placelast_name'>Last name</p> <input type='text' placeholder='Last name' id='last_name' name='last_name'> </div> </div> <div style='display: flex; height: 5px;'> <p class='error' id='first_name_error'> <img src='Images/Login/red.png' id='red_first_name' style='display: none; position: relative; top: 2.5px; left: -3px' height='12px' width='12px'> Enter a valid first name. </p> <p class='error' id='last_name_error'> <img src='Images/Login/red.png' id='red_last_name' style='display: none; position: relative; top: 2.5px; left: -3px' height='12px' width='12px'> Enter a valid last name. </p> </div> <div class='form_input' id='form_input_email' style='display: block;'> <div class='form_field' id='email_field' style='width: 460px'> <p class='placeholder' id='placeemail'>Email</p> <input type='text' placeholder='Email' id='email' name='email'> </div> <p class='error' id='email_error'> <img src='Images/Login/red.png' id='red_email' style='display: none; position: relative; top: 2.5px; left: -4px' height='12px' width='12px'> Enter a valid email address to use as your Apple ID. </p> </div> <div class='form_input' id='form_input3' style='display: block'> <div class='form_field' id='password_field' style='width: 460px'> <p class='placeholder' id='placepassword'>Password</p> <input type='password' placeholder='Password' id='password' name='password'> </div> <p class='error' id='password_error'> <img src='Images/Login/red.png' id='red_password' style='display: none; position: relative; top: 2.5px; left: -3px' height='12px' width='12px'> Password must have at least 5 characters, 1 digit, and 1 upper and lowercase character. </p> </div> </div> <hr> <div id='foot_form'> <button id='cancel' class='cancel' onclick='return false;'>Cancel</button> <input type='hidden' name='state' value='register'> <input type='button' name='submit_reg' value='Submit' placeholder='Submit' id='submit_reg'> </div> </form> </div>"

// Validates user registration data such that all fields are filled, email address is valid looking, and password is strong
function submit_form() {
	isError = false;
	var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	var re1 = /[a-z]/;
	var re2 = /[A-Z]/;
	var re3 = /[0-9]/;
	var re4 = /^[a-zA-Z]+$/;
	var pass = $("#password").val();
	var first = false;

	// Check if first name field is empty or contains invalid characters
	if ($('#first_name').val() == 0 || !re4.test(($('#first_name').val()))) {
		isError = true;
		first = true;
		$('#first_name_field').css({
			'border-color': 'rgb(222, 7, 28)',
			'background': '#FEEFF0'
		});
		$('#first_name').css('background', '#FEEFF0');
		$("#first_name").addClass('form_text');
		$('#placefirst_name').css('color', 'rgb(222, 7, 28)');
		$('#first_name_error').css('display', 'inline-block');
		$('#red_first_name').css('display', 'inline-block');
	} 
	
	else {
		$('#first_name_field').css({
			'border-color': '#868686',
			'background': 'white'
		});
		$('#first_name').css('background', 'white');
		$('#first_name_field').css('border-color', '#868686');
		$("#first_name").removeClass('form_text');
		$('#placefirst_name').css('color', ' #9c9c9c');
		$('#first_name_error').css('display', 'none');
		$('#red_first_name').css('display', 'none');
	}

	// Check if last name field is empty or contains invalid characters
	if ($('#last_name').val() == 0 || !re4.test(($('#last_name').val()))) {
		isError = true;
		$('#last_name_field').css({
			'border-color': 'rgb(222, 7, 28)',
			'background': '#FEEFF0'
		});
		$('#last_name').css('background', '#FEEFF0');
		$("#last_name").addClass('form_text');
		$('#placelast_name').css('color', 'rgb(222, 7, 28)');
		$('#last_name_error').css('display', 'inline-block');
		$('#red_last_name').css('display', 'inline-block');
		if (!first) {
			$('#last_name_error').css('left', '324px');
			$('#red_last_name').css('left', '-2px');
		} 
		
		else {
			$('#last_name_error').css('left', '192px');
			$('#red_last_name').css('left', '-2px');
		}
	} 
	
	else {
		$('#last_name_field').css({
			'border-color': '#868686',
			'background': 'white'
		});
		$('#last_name').css('background', 'white');
		$("#last_name").removeClass('form_text');
		$('#placelast_name').css('color', ' #9c9c9c');
		$('#last_name_error').css('display', 'none');
		$('#red_last_name').css('display', 'none');
	}

     // Check if email is valid looking
	if (!re.test($("#email").val())) {
		isError = true;
		$('#email_field').css({
			'border-color': 'rgb(222, 7, 28)',
			'background': '#FEEFF0'
		});
		$('#email').css('background', '#FEEFF0');
		$("#email").addClass('form_text');
		$('#placeemail').css('color', 'rgb(222, 7, 28)');
		$('#email_error').css('display', 'inline-block');
		$('#red_email').css('display', 'inline-block');
	} 
	
	else {
		$('#email_field').css({
			'border-color': '#868686',
			'background': 'white'
		});
		$('#email').css('background', 'white');
		$("#email").removeClass('form_text');
		$('#placeemail').css('color', ' #9c9c9c');
		$('#email_error').css('display', 'none');
		$('#red_email').css('display', 'none');
	}

    // Check if password length is at least 5 and has at least one uppercase letter, lowercase letter, and digit
	if (pass.length < 5 || !re1.test(pass) || !re2.test(pass) || !re3.test(pass)) {
		isError = true;
		$('#password_field').css({
			'border-color': 'rgb(222, 7, 28)',
			'background': '#FEEFF0'
		});
		$('#password').css('background', '#FEEFF0');
		$("#password").addClass('form_text');
		$('#placepassword').css('color', 'rgb(222, 7, 28)');
		$('#password_error').css('display', 'inline-block');
		$('#red_password').css('display', 'inline-block');
	} 
	
	else {
		$('#password_field').css({
			'border-color': '#868686',
			'background': 'white'
		});
		$('#password').css('background', 'white');
		$("#password").removeClass('form_text');
		$('#placepassword').css('color', ' #9c9c9c');
		$('#password_error').css('display', 'none');
		$('#red_password').css('display', 'none');
	}
	
	// Submit only if all above conditions are met
	if (isError) {
		first = false;
		isError = false;
		return false;
	} 
	
	else {
		first = false;
		isError = false;
		$('#form_id')[0].submit();
		return true;
	}
}

// Handles sign in page
function sign_in() {
	// Dynamically switches login page content to registration page content when user clicks register
	$('#create_one').click(function () {
		$('main').html(register_html);
		register();
	});

	// CSS/visual alterations depending on user's actions
	$('#in_pass').focus(function () {
		$('#in_email').css('border-bottom', '0px solid');
	});
	$('#in_pass').blur(function () {
		$('#in_email').css('border-bottom', 'solid 1px #d3d3d3');
	});
	$('#in_email').focus(function () {
		$('#in_email').css('border-bottom', 'solid 3px #227cce');
	});
	$('#in_email').blur(function () {
		$('#in_email').css('border-bottom', 'solid 1px #d3d3d3');
	});
}

// Handles registration page
function register() {

	// Dynamically switches registration page content to login page content when user clicks cancel
	$('.cancel').click(function () {
		$('main').html(login_html);
		sign_in();
	});

	// Submits form when user presses enter
	$('input').keydown(function (e) {
		if (e.key === 'Enter' || e.keyCode === 13) {
			e.preventDefault();
			this.blur();
			submit_form();
		}
	});

	// Submits form when user clicks on submit button
	$("#submit_reg").click(function () {
		submit_form();
	});

	// CSS/visual alterations depending on user's actions
	$('input, text').focus(function () {
		error = false;
		var field = '#' + this.id + '_field';

		$(field).css({
			border: 'solid 1px #227CCE',
			'box-shadow': '0px 0px 0px 2px #C0DDFC'
		});
		$(this).css({
			top: '-6px'
		});
		$(this).attr('placeholder', '');
		$('#place' + this.id).css('display', 'block');
		$(this).keyup(function () {
			$(field).css({
				'border-color': '#868686',
				'background': 'white'
			});
			$('#' + this.id).css('background', 'white');
			$(field).css('border-color', '#868686');
			$('#' + this.id).removeClass('form_text');
			$('#place' + this.id).css('color', ' #9c9c9c');
			$('#' + this.id + '_error').css('display', 'none');
			$('#red_' + this.id).css('display', 'none');
			if (this.id == 'first_name') {
				$('#last_name_error').css('left', '324px');
				$('#red_last_name').css('left', '-2px');
			}
			if ($('#' + this.id).css('background-color') != 'rgb(255, 255, 255)') {
				error = true;
			}
		})
		
        // CSS/visual alterations depending on user's actions
		$(this).blur(function () {
			if (!error) {
				$(field).css('border', 'solid 1px #868686');
			} else {
				$(field).css('border', 'solid 1px rgb(222, 7, 28)');
			}
			$(field).css('box-shadow', '0px 0px 0px 0px #C0DDFC');
			if ($(this).val().length == 0) {
				if (this.id == 'first_name') {
					$(this).attr('placeholder', 'First Name');
				}
				if (this.id == 'last_name') {
					$(this).attr('placeholder', 'Last Name');
				}
				if (this.id == 'email') {
					$(this).attr('placeholder', 'Email');
				}
				if (this.id == 'password') {
					$(this).attr('placeholder', 'Password');
				}

				$(this).css({
					top: '0px'
				});
				$('#place' + this.id).css('display', 'none');
			}
		});
	})
}

// Initialize
$(function () {
	sign_in();
});