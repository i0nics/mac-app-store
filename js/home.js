var head_og = "<div id='head'> <div class='head_txt' id='head_one'  draggable='false'> <img  draggable='false' style='margin-right: 8px;' src='Images/logo.png' alt='logo' height='30px'> Mac App Store </div> <a href='home.html'  draggable='false'> <div class='head_txt'  draggable='false'> Home </div> </a> <a href='music.html'  draggable='false'> <div class='head_txt'  draggable='false'> Music </div> </a> <a href='purchased.html'  draggable='false'> <div class='head_txt'  draggable='false'> Purchased </div> </a> <form method='post' action='sign_out.php'  draggable='false'> <input  draggable='false' type='submit' style='background: none; border: none;' onclick='localStorage.clear();' class='head_txt' value='Sign Out'> </form> <a href='' id='search_a' draggable='false'> <div class='head_txt' id='search_app' draggable='false'> <img style='margin-right: 8px' draggable='false' src='Images/search.png' alt='logo' height='19px'> Search </div> </a> </div>";
var head_search = "<div id='search_div' draggable='false'> <img id='search_icon' draggable='false' style='margin-left: 21px; margin-right: 8px' src='Images/search.png' alt='logo' height='19px'> <input id='search_input' draggable='false' placeholder='Search Mac App Store'> <img id='cross' draggable='false' style='margin-left: 4px' src='Images/cross.png' alt='logo' height='19px'> </div>";
var main_search = "<div id='search_head_container'><div id='search_head'></div></div><div id='search_results'></div>";
var body = '';

function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

function search_apps(search_value) {
	$('main').html(main_search);
	$('#search_head').html('Search results for "' + search_value + '"' + "<hr>");
	var url = 'http://itunes.apple.com/search?entity=macSoftware&callback=?&term=' + search_value;
	$.getJSON(url, function (data) {
		if (data.results.length == 0) {
			$('main').append("<div style='display: flex; height: 800px; width:100%; justify-content: center; align-items: center;'><p style='font-size: 20px; '>No Results Found!</p>");
		} else {
			$.each(data.results, function (i, field) {
				div = "<div class='search_results_elems'><input type='hidden' name='app_id' value='" + field.trackId + "' /><img class='search_app_icon'  draggable='false' src='";
				div += field.artworkUrl512 + "' alt='app_icon'> <a style='width:200px' href=''><div class='app_search_name'>";
				div += field.trackName + "<p draggable='false' class='app_search_sub'>" + field.primaryGenreName + "</p> <p class='app_search_dev'>";
				div += field.artistName + "</p></div><a draggable='false' href='app.html'><button class='view_app' draggable='false' value='" + field.trackId + "'>VIEW</button></a></div>";
				if (i % 2 == 0) {
					div += "<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>";
				}
				$('#search_results').append(div);
			});
		}
	});

	$('header').on('click', '#cross', function () {
		$('#head').html(head_og);
		$('main').html(body);
	});
}

function scroll(num) {
	$('main').on('click', '#scr' + num, function () {
		$("#app_list_" + num).animate({
			scrollLeft: 992
		}, 800);
		$(this).css('opacity', '20%');
		$('#scl' + num).css('opacity', '100%');

	});
	$('main').on('click', '#scl' + num, function () {
		$("#app_list_" + num).animate({
			scrollLeft: -992
		}, 800);
		$(this).css('opacity', '20%');
		$('#scr' + num).css('opacity', '100%');
	});

	// $('main').on('scroll', '.app_list_in', function () {
	// 	$('#scr' + num).css('opacity', '100%');
	// 	$('#scl' + num).css('opacity', '100%');
	// });

	// Set Opacity of Left and Right Buttons Bases on User's Scrolling
	document.addEventListener('scroll', function (event) {
		if (event.target.id === 'app_list_' + num) {
			if ($("#b" + num).offset().left >= getWidth() + getWidth() * 0.23) {
				$('#scl' + num).css('opacity', '20%');
				$('#scr' + num).css('opacity', '100%');
			} else if ($("#b" + num).offset().left <= getWidth() - getWidth() * 0.08) {
				$('#scr' + num).css('opacity', '20%');
				$('#scl' + num).css('opacity', '100%');
			} else {
				$('#scr' + num).css('opacity', '100%');
				$('#scl' + num).css('opacity', '100%');
			}
		}
	}, true);
}

function start_up(ids, part) {
	var toAppend = '';
	var url = 'http://itunes.apple.com/lookup?callback=?&id=' + ids;
	$.getJSON(url, function (data) {
		$.each(data.results, function (i, field) {
			if (i % 2 == 0) {
				if (i == 0) {
					toAppend += "<div class='app_block' draggable='false' id='a" + part + "'>";
				} else {
					toAppend += "<div class='app_block' draggable='false'>";
				}
			}

			if (i == 15) {
				toAppend += "<div class='app_b' id='b" + part + "'>";
			} else {
				toAppend += "<div class='app_b'>";
			}
			toAppend += "<div class='app_b1'> <div class='app_icon_div'> <img class='app_home_img' draggable='false' src='" + field.artworkUrl512 + "'> </div> <div class='app_info_div'> <p class='app_info_title'>" + field.trackName + "</p> <p class='app_info_des'>" + field.primaryGenreName + "</p> </div> <a draggable='false' href='app.html'> <div class='view_button' draggable='false' > <input type='hidden' name='app_id' value='" + field.trackId + "'/> VIEW </div> </a> </div> </div>";

			if (i % 2 != 0) {
				toAppend += "</div>";
			}
		});
		$('#app_list_' + part).append(toAppend);
		body = $('main').html();
	});
}

$(function () {
	start_up('497799835,409201541,409183694,824183456,904280696,775737590,824171161,588726889,1346203938,1055511498,1289197285,450527929,1171820258,1091189122,696977615,441258766', 1);
	start_up('1462114288,1472777122,1438657064,288545208,1436953057,1107421413,1333542190,1451893560,1473726602,1437501942,1533703891,1440147259,1465707487,1476177064,1364038646,1432182561', 2);
	start_up('408981434,409201541,409183694,409203825,462054704,1474276998,1472777122,1462114288,462062816,462058435,1480068668,1147396723,985367838,1451544217,1216244845,405399194', 3);
	start_up('1174039276,610391947,972224785,1491129197,871033113,1031341769,1154174205,1478418722,1465682080,412980789,1448585397,1292510839,781424368,1112040046,796885130,416970936', 4);
	start_up('1289583905,1444383602,736189492,441258766,634148309,424389933,1247176246,417375580,824183456,533696630,1213692557,1107163858,634159523,1498571894,995838410,470158793', 5);
	start_up('1185339859,1529351927,625278208,1437906083,1156513849,1508191454,1002623276,1465779286,538511880,408054320,500880061,1108032375,1510323563,438092450,917288997,1070220144', 6);
	start_up('450527929,1451544217,1465779286,1289583905,904280696,409206073,1003160018,993487541,993487541,411643860,404009241,881418622,824183456,824171161,1055511498,1225570693', 7);
	scroll(1);
	scroll(2);
	scroll(3);
	scroll(4);
	scroll(5);
	scroll(6);
	scroll(7);
	$('header').on('click', '#search_a', function (e) {
		e.preventDefault();
		$('#head').html(head_search);
		$('#search_input').focus();
	});

	$('header').on('click', '#cross', function () {
		$('#head').html(head_og);
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

	$('main').on('click', '.view_app', function (e) {
		localStorage.setItem('app_id', this.value);
	});

	$('main').on('click', '.search_results_elems', function () {
		console.log($(this).find('input').attr('value'));
		localStorage.setItem('app_id', $(this).find('input').attr('value'));
		document.location.href = 'app.html';
	});

	$('main').on('click', '.view_button', function () {
		localStorage.setItem('app_id', $(this).find('input').attr('value'));
	})
});