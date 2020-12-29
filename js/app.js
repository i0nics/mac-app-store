var head_og = "<div id='head'> <div class='head_txt' id='head_one'  draggable='false'> <img  draggable='false' style='margin-right: 8px;' src='Images/logo.png' alt='logo' height='30px'> Mac App Store </div> <a href='home.html'  draggable='false'> <div class='head_txt'  draggable='false'> Home </div> </a> <a href='music.html'  draggable='false'> <div class='head_txt'  draggable='false'> Music </div> </a> <a href='purchased.html'  draggable='false'> <div class='head_txt'  draggable='false'> Purchased </div> </a> <form method='post' action='sign_out.php'  draggable='false'> <input  draggable='false' type='submit' style='background: none; border: none;' onclick='localStorage.clear();' class='head_txt' value='Sign Out'> </form> <a href='' id='search_a' draggable='false'> <div class='head_txt' id='search_app' draggable='false'> <img style='margin-right: 8px' draggable='false' src='Images/search.png' alt='logo' height='19px'> Search </div> </a> </div>";
var head_search = "<div id='search_div' draggable='false'> <img id='search_icon' draggable='false' style='margin-left: 21px; margin-right: 8px' src='Images/search.png' alt='logo' height='19px'> <input id='search_input' draggable='false' placeholder='Search Mac App Store'> <img id='cross' draggable='false' style='margin-left: 4px' src='Images/cross.png' alt='logo' height='19px'> </div>";
var main_search = "<div id='search_head_container'><div id='search_head'></div></div><div id='search_results'></div>";
var search_value = '';
var app_id = '';
var div = '';
var app_page = '';
var price = '';

function search_apps(search_value) {
	$('main').html(main_search);
	$('#search_head').html('Search results for "' + search_value + '"' + "<hr>");
	url = 'http://itunes.apple.com/search?entity=macSoftware&callback=?&term=' + search_value;
	// url = 'https://itunes.apple.com/search?term=' + search_value + "&entity=macSoftware";
	$.getJSON(url, function (data) {
		if (data.results.length == 0) {
			$('#search_results').append('<p style="font-size: 16px; margin-left: 8px">No Results Found!</p>');
		} else {
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

	$('header').on('click', '#cross', function () {
		$('#head').html(head_og);
		$('main').html(app_page);
	});
}

// artistId: 284417353
// artistName: "Apple"
// artistViewUrl: "https://apps.apple.com/us/developer/apple/id284417353?mt=12&uo=4"
// artworkUrl60: "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/6f/9e/9b/6f9e9be8-f32b-34fe-c0d8-321f57eb0529/source/60x60bb.png"
// artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/6f/9e/9b/6f9e9be8-f32b-34fe-c0d8-321f57eb0529/source/100x100bb.png"
// artworkUrl512: "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/6f/9e/9b/6f9e9be8-f32b-34fe-c0d8-321f57eb0529/source/512x512bb.png"
// averageUserRating: 0
// averageUserRatingForCurrentVersion: 0
// bundleId: "com.apple.iMovieApp"
// contentAdvisoryRating: "4+"
// currency: "USD"
// currentVersionReleaseDate: "2020-11-13T00:28:30Z"
// description: "With a streamlined design and intuitive editing features, iMovie lets you create Hollywood-style trailers and beautiful movies like neve…"
// fileSizeBytes: "2182889509"
// formattedPrice: "Free"
// genreIds: ["6008"] (1)
// genres: ["Photo & Video"] (1)
// isVppDeviceBasedLicensingEnabled: true
// kind: "mac-software"
// languageCodesISO2A: ["CA", "HR", "CS", "DA", "NL", "EN", "FI", "FR", "DE", "EL", …] (30)
// minimumOsVersion: "10.15.6"
// price: 0
// primaryGenreId: 6008
// primaryGenreName: "Photo & Video"
// releaseDate: "2011-01-05T01:49:58Z"
// releaseNotes: "• Improved performance and efficiency on Mac computers with Apple silicon"
// screenshotUrls: ["https://is4-ssl.mzstatic.com/image/thumb/PurpleSou…d-b7d4-2d6e0e28f0ae_1-Hero-13in.png/800x500bb.jpg", "https://is3-ssl.mzstatic.com/image/thumb/PurpleSou…-a6f3-d74a9b92bd7c_2-Audio-13in.png/800x500bb.jpg", "https://is3-ssl.mzstatic.com/image/thumb/PurpleSou…71f02dae0712_3-Greenscreen-13in.png/800x500bb.jpg", "https://is5-ssl.mzstatic.com/image/thumb/PurpleSou…bf9-3e840869aa91_4-Trailer-13in.png/800x500bb.jpg", "https://is5-ssl.mzstatic.com/image/thumb/PurpleSou…7d-1c3dacad6e46_5-Sharing-13oin.png/800x500bb.jpg"] (5)
// sellerName: "Apple Inc."
// sellerUrl: "http://www.apple.com/imovie/"
// trackCensoredName: "iMovie"
// trackContentRating: "4+"
// trackId: 408981434
// trackName: "iMovie"
// trackViewUrl: "https://apps.apple.com/us/app/imovie/id408981434?mt=12&uo=4"
// userRatingCount: 0
// userRatingCountForCurrentVersion: 0
// version: "10.2.1"
// wrapperType: "software"

function lookup() {
	app_id = localStorage.getItem('app_id');
	purchases = localStorage.getItem('p_id');
	is_purchased = false;
	if (purchases != null) {
		purchases = purchases.split('_');
		$.each(purchases, function (i, p) {
			if (p == app_id) {
				is_purchased = true;
			}
		});
	}

	if (app_id != null) {
		url = 'http://itunes.apple.com/lookup?callback=?&id=' + app_id;
		$.getJSON(url, function (data) {
			console.log(data);
			if (data.results.length == 0) {
				$('main').html("<div style='display: flex; height: 800px; width:100%; justify-content: center; align-items: center;'><p style='font-size: 20px;'>iTunes Server Not Responding. Try Again or Comment out the Demo Code in the app.html File</p>");
			} else {
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

function add_purchase(purchase_id) {
	app_id = localStorage.getItem('p_id');
	if (app_id == null) {
		app_id = '';
	}
	localStorage.setItem('p_id', purchase_id + '_' + app_id);
	return true;
};

$(function () {
	lookup();
	console.log(localStorage.getItem('app_id'));
	$('header').on('click', '#search_a', function (e) {
		e.preventDefault();
		$('#head').html(head_search);
		$('#search_input').focus();
	});

	// Sanitize Input
	$('header').on('click', '#search_icon', function () {
		search_apps($('#search_input').val().replace(/<\/?[^>]+(>|$)/g, ""));
	});

	$('header').on('keyup', '#search_input', function (e) {
		if (e.key === 'Enter' || e.keyCode === 13) {
			search_apps($('#search_input').val().replace(/<\/?[^>]+(>|$)/g, ""));
		}
	});

	$('header').on('click', '#cross', function () {
		$('#head').html(head_og);
	});

	$('main').on('click', '.view_app', function (e) {
		localStorage.setItem('app_id', this.value);
	});

	$('main').on('click', '.add_cart_button', function (e) {
		add_purchase(app_id);
		$(this).removeClass('add_cart_button');
		$(this).html('Purchased');
		$(this).addClass('purchased_button');
		alert('Purchase Complete! (Total Amount: ' + price + ') Go to the Purchased Page to Download!');
	});

	$('main').on('click', '.search_results_elems', function () {
		localStorage.setItem('app_id', $(this).find('input').attr('value'));
		document.location.href = 'app.html';
	})
});