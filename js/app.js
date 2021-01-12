// Programmer: Bikram Chatterjee
// Mac App Store
// app.js

// Original HTML content
var head_og = "<div id='head'> <div class='head_txt' id='head_one'  draggable='false'> <img  draggable='false' style='margin-right: 8px;' src='Images/logo.png' alt='logo' height='30px'> Mac App Store </div> <a href='home.html'  draggable='false'> <div class='head_txt'  draggable='false'> Home </div> </a> <a href='music.html'  draggable='false'> <div class='head_txt'  draggable='false'> Music </div> </a> <a href='purchased.html'  draggable='false'> <div class='head_txt'  draggable='false'> Purchased </div> </a> <form method='post' action='sign_out.php'  draggable='false'> <input  draggable='false' type='submit' style='background: none; border: none;' onclick='localStorage.clear();' class='head_txt' value='Sign Out'> </form> <a href='' id='search_a' draggable='false'> <div class='head_txt' id='search_app' draggable='false'> <img style='margin-right: 8px' draggable='false' src='Images/search.png' alt='logo' height='19px'> Search </div> </a> </div>";
var head_search = "<div id='search_div' draggable='false'> <img id='search_icon' draggable='false' style='margin-left: 21px; margin-right: 8px' src='Images/search.png' alt='logo' height='19px'> <input id='search_input' draggable='false' placeholder='Search Mac App Store'> <img id='cross' draggable='false' style='margin-left: 4px' src='Images/cross.png' alt='logo' height='19px'> </div>";
var main_search = "<div id='search_head_container'><div id='search_head'></div></div><div id='search_results'></div>";
var search_value = '';
var app_id = '';
var div = '';
var app_page = '';
var price = '';

// Utilizes AJAX to fetch user desired app data from iTunes API and insert it into HTML
function search_apps(search_value) {
	$('main').html(main_search);
	$('#search_head').html('Search results for "' + search_value + '"' + "<hr>");
	url = 'http://itunes.apple.com/search?entity=macSoftware&callback=?&term=' + search_value;

	// Retrieve user desired app data in JSON format from iTunes API using AJAX
	$.getJSON(url, function (data) {

		// No results found
		if (data.results.length == 0) {
			$('#search_results').append('<p style="font-size: 16px; margin-left: 8px">No Results Found!</p>');
		} 
		
		// Append user desired app data to HTML
		else {
			$.each(data.results, function (i, field) {
				div = "<div class='search_results_elems'><input type='hidden' name='app_id' value='" + field.trackId + "' /><img class='search_app_icon'  draggable='false' src='";
				div += field.artworkUrl512 + "' alt='app_icon'> <a style='width:200px' href=''><div class='app_search_name'>";
				div += field.trackName + "<p class='app_search_sub'>" + field.primaryGenreName + "</p> <p class='app_search_dev'>";
				div += field.artistName + "</p></div><a href='app.html'></a><button class='view_app' value='" + field.trackId + "'>VIEW</button></a></div>";
				
				if (i % 2 == 0) {
					div += "<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
				}

				$('#search_results').append(div);
			});
		}
	});

	// Brings back the menu bar when user clicks the cross icon
	$('header').on('click', '#cross', function () {
		$('#head').html(head_og);
		$('main').html(app_page);
	});
}

// Utilizes AJAX to fetch user desired app data from iTunes API and insert it into HTML
function lookup() {
	app_id = localStorage.getItem('app_id');
	purchases = localStorage.getItem('p_id');
	is_purchased = false;

	// Check if desired app is already purchased
	if (purchases != null) {
		purchases = purchases.split('_');
		$.each(purchases, function (i, p) {
			if (p == app_id) {
				is_purchased = true;
			}
		});
	}
	
	// Retrieves user desired app data from iTunes API and insert it into HTML
	if (app_id != null) {
		url = 'http://itunes.apple.com/lookup?callback=?&id=' + app_id;

		// Retrieve user desired app data in JSON format from iTunes API using AJAX
		$.getJSON(url, function (data) {
	
			// iTunes server error due to multiple requests
			if (data.results.length == 0) {
				$('main').html("<div style='display: flex; height: 800px; width:100%; justify-content: center; align-items: center;'><p style='font-size: 20px;'>iTunes Server Not Responding. Try Again or Comment out the Demo Code in the app.html File</p>");
			} 
			
			// Append desired app data to HTML
			else {
				$.each(data.results, function (i, field) {
					price = field.formattedPrice;
					div = "<div id='app_head_container'> <div id='app_head'> Mac App Store&nbsp;<span id='app_head_preview'>Preview</span> <hr class='hr_app'> </div></div>";
					div += "<div draggable='false' class='app_title_container'><img class='app_icon_container' draggable='false' src='" + field.artworkUrl512 + "'>";
					div += "<div class='app_title_info'><div class='app_title'>" + field.trackName + "<span class='age_rating'>";
					div += field.trackContentRating + "</span></div><div class='app_category'>" + field.primaryGenreName + "</div><div class='app_publisher'>";
					div += field.sellerName + "</div><img class='app_rating' src='Images/App/rating.png' alt='app_icon' class='rating'> <div class='app_price'>";
					if (is_purchased) {
						div += field.formattedPrice + "</div> <div class='purchased_button' draggable='false'> Purchased ";
					} else {
						div += field.formattedPrice + "</div> <a href='' onclick='return false;'><div class='add_cart_button' draggable='false'> Get Now";
					}
					div += "</div></a></div></div><div class='app_screenshot_container'> <hr class='hr_app' style='margin-bottom:19px'><p class='app_screenshot_title'> Screenshots </p> <div class='app_screenshots'>";
					$.each(field.screenshotUrls, function (i, sc) {
						div += "<img draggable='false' src='" + sc + "' class='app_screen'>";
						if (i != field.screenshotUrls.length - 1) {
							div += "&nbsp;";
						}
					});
					div += "</div> </div> <div class='app_desc_container'> <div class='app_desc_div'> <hr class='hr_app' style='margin-bottom:19px'> <p class='app_desc'>";
					div += field.description.replace(/\n/g, '<br>') + "</p> </div> </div> <div class='app_desc_container'> <div class='app_desc_div'> <hr class='hr_app' style='margin-bottom:19px'> <p class='app_release_head'> What's New </p>";
					div += "<div class='release_notes' style=' padding-top:15px'>";
					div += field.releaseNotes.replace(/\n/g, '<br>') + "</div></div></div><div class='app_desc_container'> <div class='app_desc_div'> <hr class='hr_app' style='margin-bottom:19px'> <p class='app_release_head'> Information </p>";
					div += "<div class='info_container'> <div class='info_left_div'> <p class='info_left'>Seller</p> <p class='info_left'>Category</p> <p class='info_left'>Compatibility</p> <p class='info_left'>Age Rating</p><p class='info_left'>Price</p></div>";
					div += "<div class='info_right_div'><p class='info_right'>" + field.sellerName + "</p><p class='info_right'>" + field.primaryGenreName + "</p> <p class='info_right'>macOS " + field.minimumOsVersion;
					div += " or later</p><p class='info_right'>" + field.trackContentRating + "</p><p class='info_right'>" + field.formattedPrice;
					div += "</p></div></div></div></div>";
					$('main').append(div);
					app_page = div;
				});
			}
		});
	}
}

// Save purchased app ID to local storage
function add_purchase(purchase_id) {
	app_id = localStorage.getItem('p_id');
	if (app_id == null) {
		app_id = '';
	}
	localStorage.setItem('p_id', purchase_id + '_' + app_id);
	return true;
};

$(function () {
	// Initialize
	lookup();
	
	// Checks if user has clicked on the search icon and dynamically changes the menu bar to display the search bar
	$('header').on('click', '#search_a', function (e) {
		e.preventDefault();
		$('#head').html(head_search);
		$('#search_input').focus();
	});

	// Checks Checks if user has clicked on the cross icon and dynamically changes the search bar to display the menu bar
	$('header').on('click', '#cross', function () {
		$('#head').html(head_og);
	});

	// Sanitize user input
	$('header').on('click', '#search_icon', function () {
		search_apps($('#search_input').val().replace(/<\/?[^>]+(>|$)/g, ""));
	});

	// Check if user has pressed enter key in the search bar, sanitize user input, and call the search_apps func
	$('header').on('keyup', '#search_input', function (e) {
		if (e.key === 'Enter' || e.keyCode === 13) {
			search_apps($('#search_input').val().replace(/<\/?[^>]+(>|$)/g, ""));
		}
	});

	// Upon clicking the view button, the app ID of the app that the user wishes to view is stored in local storage
	$('main').on('click', '.view_app', function (e) {
		localStorage.setItem('app_id', this.value);
	});

	// Upon clicking anywhere in the app area, the app ID of the app that the user wishes to view is stored in local storage and the app page is loaded
	$('main').on('click', '.search_results_elems', function () {
		localStorage.setItem('app_id', $(this).find('input').attr('value'));
		document.location.href = 'app.html';
	})

	// If user clicks buy button, app ID of purchased app is saved in local storage and a window showing purchase confirmation and app price pops up
	// Additionally, buy button is replaced by a non clickable purchased button
	$('main').on('click', '.add_cart_button', function (e) {
		add_purchase(app_id);
		$(this).removeClass('add_cart_button');
		$(this).html('Purchased');
		$(this).addClass('purchased_button');
		alert('Purchase Complete! (Total Amount: ' + price + ') Go to the Purchased Page to Download!');
	});
});