// Programmer: Bikram Chatterjee
// Mac App Store
// purchased.js

// Original HTML content
var head_og = "<div id='head'> <div class='head_txt' id='head_one' draggable='false'> <img  draggable='false' style='margin-right: 8px;' src='Images/logo.png' alt='logo' height='30px'> Mac App Store </div> <a href='home.html'  draggable='false'> <div class='head_txt'  draggable='false'> Home </div></a> <a href='music.html' draggable='false'> <div class='head_txt'  draggable='false'> Music </div> </a> <a href='purchased.html' draggable='false'> <div class='head_txt' draggable='false'> Purchased </div></a><form method='post' action='sign_out.php' draggable='false'><input  draggable='false' type='submit' style='background: none; border: none;' onclick='localStorage.clear();' class='head_txt' value='Sign Out'></form> <a href='' id='search_a' draggable='false'><div class='head_txt' id='search_app' draggable='false'> <img style='margin-right: 8px' draggable='false' src='Images/search.png' alt='logo' height='19px'> Search </div> </a> </div>";
var head_search = "<div id='search_div' draggable='false'> <img id='search_icon' draggable='false' style='margin-left: 21px; margin-right: 8px' src='Images/search.png' alt='logo' height='19px'> <input id='search_input' draggable='false' placeholder='Search Mac App Store'> <img id='cross' draggable='false' style='margin-left: 4px' src='Images/cross.png' alt='logo' height='19px'> </div>";
var main_search = "<div id='search_head_container'><div id='search_head'>Purchased Apps<hr></div></div><div id='search_results'></div>";
var curr_page_content = "<div id='search_head_container'><div id='search_head'>Purchased Apps<hr></div></div></div><div style='display: flex; height: 780px; width:100%; justify-content: center; align-items: center'><p style='font-size: 20px;'>You Haven't Purchased Apps Yet!</p>";

// Utilizes AJAX to fetch purchased app data from iTunes API and insert it into HTML
function purchased_apps() {
	$('main').html(main_search);
	purchases = localStorage.getItem('p_id');
	url = 'http://itunes.apple.com/lookup?callback=?&id=';

	// Check if user has purchased any apps
	if (purchases != null) {
		purchases = purchases.split('_');
		purchases.pop();
		
		// Retrieve app IDs of purchased apps and combine them into a string
		$.each(purchases, function (i, p) {
			url += p;
			if (i != purchases.length - 1) {
				url += ',';
			}
		});
		
		// Retrieve purchased app data in JSON format from iTunes API using AJAX
		$.getJSON(url, function (data) {

			// iTunes server error due to multiple requests
			if (data.results.length == 0) {
				$('main').append("<div style='display: flex; height: 780px; width:100%; justify-content: center; align-items: center;'><p style='font-size: 20px'>iTunes Server Not Responding. Please Try Again Later.</p></div>");
			} 
			
			// Append purchased app data to HTML
			else {
				$.each(data.results, function (i, field) {
					div = "<div class='search_results_elems'><input type='hidden' name='app_id' value='" + field.trackId + "' /><img class='search_app_icon'  draggable='false' src='";
					div += field.artworkUrl512 + "' alt='app_icon'> <div class='app_search_name'>";
					div += field.trackName + "<p class='app_search_sub'>" + field.primaryGenreName + "</p> <p class='app_search_dev'>";
					div += field.artistName + "</p></div><a draggable='false' style='margin-left:39px;' href='app.txt' download='" + field.trackName + "'><img type='button' draggable='false' class='download' alt='download' src='Images/download.png'></a></div>";
					
					if (i % 2 == 0) {
						div += "<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
					}
					
					$('#search_results').append(div);
				});

				// Save current page state
				curr_page_content = $('main').html();
			}
		});
	} 
	
	// No apps purchased
	else {
		$('main').html(curr_page_content)
	}
}

// Utilizes AJAX to fetch user desired app data from iTunes API and insert it into HTML
function search_apps(search_value) {
	$('main').html(main_search);
	$('#search_head').html('Search results for "' + search_value + '"' + "<hr>");
	url = 'http://itunes.apple.com/search?entity=macSoftware&callback=?&term=' + search_value;
	
	// Fetch user desired app data in JSON format using AJAX
	$.getJSON(url, function (data) {

		// No search results found
		if (data.results.length == 0) {
			$('main').append("<div style='display: flex; height: 800px; width:100%; justify-content: center; align-items: center'><p style='font-size: 20px; '>No Results Found!</p>");
		} 
		
		// Append app data to HTML
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
		$('main').html(curr_page_content);
	});
}

$(function () {
	// Initialize
	purchased_apps();
	
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
	$('main').on('click', '.view_app', function () {
		localStorage.setItem('app_id', this.value);
	});

	// Upon clicking anywhere in the app area, the app ID of the app that the user wishes to view is stored in local storage and the app page is loaded
	$('main').on('click', '.search_results_elems', function () {
		localStorage.setItem('app_id', $(this).find('input').attr('value'));
		document.location.href = 'app.html';
	})
});