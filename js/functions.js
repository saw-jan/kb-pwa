//get bhajans
function getBhajan() {
	var cat = 'Bhajan';
	$.getJSON('data/bhajans.json', function(data) {
		var list = '';
		$.each(data, function(key, value) {
			var num = value.no;
			var cato = value.category;
			if (value.category == cat) {
				list += '<a onclick="thisSong(' + num + ",'Bhajan')\"><li>";
				list +=
					'<div id="' +
					num +
					cato +
					'" style="display:grid;grid-template-columns:.5fr 4fr;"><div class="no">' +
					value.no +
					'.</div><div class="to-bold">' +
					value.title +
					'</div></div>';
				list += '</li></a>';
			}
		});
		$('#songList').html(list);
	});
}
//get chorus
function getChorus() {
	var cat = 'Chorus';
	$.getJSON('data/bhajans.json', function(data) {
		var list = '';
		$.each(data, function(key, value) {
			var num = value.no;
			var cato = value.category;
			if (value.category == cat) {
				list += '<a onclick="thisSong(' + num + ",'Chorus')\"><li>";
				list +=
					'<div id="' +
					num +
					cato +
					'" style="display:grid;grid-template-columns:.5fr 4fr;"><div class="no">' +
					value.no +
					'.</div><div class="to-bold">' +
					value.title +
					'</div></div>';
				list += '</li></a>';
			}
		});
		$('#songList').html(list);
	});
}
//get BalChorus
function getBalChorus() {
	var cat = 'BalChorus';
	$.getJSON('data/bhajans.json', function(data) {
		var list = '';
		//var songList = document.getElementById("songList");
		$.each(data, function(key, value) {
			var num = value.no;
			var cato = value.category;
			if (value.category == cat) {
				list += '<a onclick="thisSong(' + num + ",'BalChorus')\"><li>";
				list +=
					'<div id="' +
					num +
					cato +
					'" style="display:grid;grid-template-columns:.5fr 4fr;"><div class="no">' +
					value.no +
					'.</div><div class="to-bold">' +
					value.title +
					'</div></div>';
				list += '</li></a>';
			}
		});
		$('#songList').html(list);
	});
}
//next and previous song id
var sno = 0;
var scat = '';
var nxtNum = 0;
var preNum = 0;
//total song count
var ttlsong = new Array();
//selected song
function thisSong(no, cat) {
	sno = no;
	scat = cat;
	nxtNum = (parseInt(sno) + 1).toString();
	preNum = (parseInt(sno) - 1).toString();
	$('#main').css({ display: 'none' });
	$('#songList').css({ display: 'none' });
	$('#single').css({ display: 'block' });
	$('.onesong').css({ display: 'block' });
	$('#single').css({ display: 'block' });
	$('#searchList').css({ display: 'none' });
	$('#find').val('');

	$('#cat').text(changeCategory(cat) + ' - ' + changeNumber(no));
	//get song
	$.getJSON('data/bhajans.json', function(data) {
		var list = '';
		$.each(data, function(key, value) {
			var cate = value.category.replace(' ', '');
			if (cate == cat) {
				ttlsong += '0';
			}
			if (value.no == no && cate == cat) {
				$('#stitle').text(value.title);
				list += '';
				list += value.lyrics;
				list += '';
			}
		});
		$('.onesong').html(list);
	});
}
//back button
function goBack() {
	$('#main').css({ display: 'block' });
	$('#songList').css({ display: 'block' });
	$('#single').css({ display: 'none' });
	$('.onesong').css({ display: 'none' });
	$('#single').css({ display: 'none' });
}
//change to nepali
function changeCategory(category) {
	if (category == 'Bhajan') {
		return 'भजन';
	} else if (category == 'Chorus') {
		return 'काेरस';
	} else if (category == 'BalChorus') {
		return 'बाल काेरस';
	}
}
function changeNumber(num) {
	var digits = num.toString().split('');
	var numb = '';
	//converting to nepali numbers
	if (digits.length == 1) {
		return (numb = toNepaliNum(digits[0]));
	} else if (digits.length == 2) {
		return (numb = toNepaliNum(digits[0]) + toNepaliNum(digits[1]));
	} else if (digits.length == 3) {
		return (numb = toNepaliNum(digits[0]) + toNepaliNum(digits[1]) + toNepaliNum(digits[2]));
	} else if (digits.length == 4) {
		return (numb =
			toNepaliNum(digits[0]) + toNepaliNum(digits[1]) + toNepaliNum(digits[2]) + toNepaliNum(digits[3]));
	}
}
function toNepaliNum(num) {
	if (num == '0') {
		return '०';
	} else if (num == '1') {
		return '१';
	} else if (num == '2') {
		return '२';
	} else if (num == '3') {
		return '३';
	} else if (num == '4') {
		return '४';
	} else if (num == '5') {
		return '५';
	} else if (num == '6') {
		return '६';
	} else if (num == '7') {
		return '७';
	} else if (num == '8') {
		return '८';
	} else if (num == '9') {
		return '९';
	}
}
//next song
function next() {
	if (parseInt(nxtNum) <= ttlsong.length) {
		$(document).ready(function() {
			$.getJSON('data/bhajans.json', function(data) {
				var list = '';
				$.each(data, function(key, value) {
					var cate = value.category.replace(' ', '');
					if (value.no == nxtNum && cate == scat) {
						$('#title').text(value.title);
						$('#cat').text(changeCategory(cate) + ' - ' + changeNumber(value.no));
						list += '';
						list += value.lyrics;
						list += '';
					}
				});
				$('.onesong').html(list);
				var nxNum = parseInt(nxtNum) + 1;
				var prNum = parseInt(nxtNum) - 1;
				nxtNum = nxNum.toString();
				preNum = prNum.toString();
			});
		});
	} else {
		nxtNum = ttlsong.length + 1;
		preNum = ttlsong.length - 1;
	}
}
//previous song
function prev() {
	if (parseInt(preNum) > 0) {
		$(document).ready(function() {
			$.getJSON('data/bhajans.json', function(data) {
				var list = '';
				$.each(data, function(key, value) {
					var cate = value.category.replace(' ', '');
					if (value.no == preNum && cate == scat) {
						$('#title').text(value.title);
						$('#cat').text(changeCategory(cate) + ' - ' + changeNumber(value.no));
						list += '';
						list += value.lyrics;
						list += '';
					}
				});
				$('.onesong').html(list);
				var nxNum = parseInt(preNum) + 1;
				var prNum = parseInt(preNum) - 1;
				nxtNum = nxNum.toString();
				preNum = prNum.toString();
			});
		});
	} else {
		nxtNum = '2';
		preNum = '0';
	}
}
