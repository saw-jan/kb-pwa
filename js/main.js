//registering service worker
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('sw.js')
			.then((reg) => console.log('SW Registered'))
			.catch((err) => console.log('SW Failed'));
	});
}
$(document).ready(() => {
	//tab clicks
	$('#bhajan').click(function() {
		$('#searchList').css({ display: 'none' });
		$('#songList').css({ display: 'block' });
		$('#find').val('');
		$('#songList').load('index.html', function() {});
		$('.t1').css({
			opacity: '1',
			'background-color': '#33B0A3',
			'border-bottom': 'solid 3px #ED9A00',
			'animation-name': 'fadein',
			'animation-duration': '.5s'
		});
		$('.t2').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
		$('.t3').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
	});

	//load chorus
	$('#chorus').click(function() {
		$('#searchList').css({ display: 'none' });
		$('#songList').css({ display: 'block' });
		$('#find').val('');
		$('#songList').load('chorus.html', function() {});
		$('.t2').css({
			opacity: '1',
			'background-color': '#33B0A3',
			'border-bottom': 'solid 3px #ED9A00',
			'animation-name': 'fadein',
			'animation-duration': '.5s'
		});
		$('.t1').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
		$('.t3').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
	});
	//load BalChorus
	$('#bal').click(function() {
		$('#searchList').css({ display: 'none' });
		$('#songList').css({ display: 'block' });
		$('#find').val('');
		$('#songList').load('bal.html', function() {});
		$('.t3').css({
			opacity: '1',
			'background-color': '#33B0A3',
			'border-bottom': 'solid 3px #ED9A00',
			'animation-name': 'fadein',
			'animation-duration': '.5s'
		});
		$('.t1').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
		$('.t2').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
	});
	//swipe navigation
	var songs = document.getElementById('songList');
	songs.addEventListener('swiped-left', function(e) {
		if (pageid == 1) {
			$('#songList').load('chorus.html', function() {});
			$('.t2').css({
				opacity: '1',
				'background-color': '#33B0A3',
				'border-bottom': 'solid 3px #ED9A00',
				'animation-name': 'fadein',
				'animation-duration': '.5s'
			});
			$('.t1').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
			$('.t3').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
		} else if (pageid == 2) {
			$('#songList').load('bal.html', function() {});
			$('.t3').css({
				opacity: '1',
				'background-color': '#33B0A3',
				'border-bottom': 'solid 3px #ED9A00',
				'animation-name': 'fadein',
				'animation-duration': '.5s'
			});
			$('.t1').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
			$('.t2').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
		}
	});
	songs.addEventListener('swiped-right', function(e) {
		if (pageid == 2) {
			$('#songList').load('index.html', function() {});
			$('.t1').css({
				opacity: '1',
				'background-color': '#33B0A3',
				'border-bottom': 'solid 3px #ED9A00',
				'animation-name': 'fadein',
				'animation-duration': '.5s'
			});
			$('.t2').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
			$('.t3').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
		} else if (pageid == 3) {
			$('#songList').load('chorus.html', function() {});
			$('.t2').css({
				opacity: '1',
				'background-color': '#33B0A3',
				'border-bottom': 'solid 3px #ED9A00',
				'animation-name': 'fadein',
				'animation-duration': '.5s'
			});
			$('.t1').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
			$('.t3').css({ opacity: '.5', 'background-color': '#009383', 'border-bottom': 'none' });
		}
	});
	//swipe songs
	var song = document.getElementById('onesong');
	song.addEventListener('swiped-left', function(e) {
		next();
	});
	song.addEventListener('swiped-right', function(e) {
		prev();
	});
	//searching songs
	$('#find').keydown(function() {
		$('#searchList').css({ display: 'block' });
		$('.content').css({ 'margin-top': '165px' });
		$('#songList').css({ display: 'none' });
		var tosearch = $('#find').val();
		var express = new RegExp(tosearch, 'i');
		if ($.trim(tosearch) != '') {
			if (tosearch.length > 0) {
				var cato = '';
				if (pageid == 1) {
					cato = 'Bhajan';
				} else if (pageid == 2) {
					cato = 'Chorus';
				} else if (pageid == 3) {
					cato = 'BalChorus';
				}
				$.getJSON('data/bhajans.json', function(data) {
					var list = '';
					$.each(data, function(key, value) {
						var num = value.no;
						//var cato = value.category;
						if (value.category == cato) {
							cato = cato.replace(' ', '');
							if (value.title.search(express) != -1 || num.toString() == tosearch) {
								list += '<a onclick="thisSong(' + num + ",'" + cato + '\')"><li>';
								list +=
									'<div style="display:grid;grid-template-columns: 10% 70% 20%;"><div class="no">' +
									value.no +
									'.</div><div class="to-bold">' +
									value.title +
									'</div><div class="tag">' +
									value.category +
									'</div></div>';
								list += '</li></a>';
							}
						}
					});
					$('#searchList').html(list);
				});
			} else {
				$('#searchList').css({ display: 'none' });
				$('.content').css({ 'margin-top': '155px' });
				$('#songList').css({ display: 'block' });
			}
		} else {
			$('#searchList').css({ display: 'none' });
			$('.content').css({ 'margin-top': '155px' });
			$('#songList').css({ display: 'block' });
		}
	});
	$('#find').keyup(function() {
		$('#searchList').css({ display: 'block' });
		$('.content').css({ 'margin-top': '165px' });
		$('#songList').css({ display: 'none' });
		var tosearch = $('#find').val();
		var express = new RegExp(tosearch, 'i');
		if ($.trim(tosearch) != '') {
			if (tosearch.length > 0) {
				var cato = '';
				if (pageid == 1) {
					cato = 'Bhajan';
				} else if (pageid == 2) {
					cato = 'Chorus';
				} else if (pageid == 3) {
					cato = 'BalChorus';
				}
				$.getJSON('data/bhajans.json', function(data) {
					var list = '';
					$.each(data, function(key, value) {
						var num = value.no;
						//var cato = value.category;
						if (value.category == cato) {
							cato = cato.replace(' ', '');
							if (value.title.search(express) != -1 || num.toString() == tosearch) {
								list += '<a onclick="thisSong(' + num + ",'" + cato + '\')"><li>';
								list +=
									'<div style="display:grid;grid-template-columns: 10% 70% 20%;"><div class="no">' +
									value.no +
									'.</div><div class="to-bold">' +
									value.title +
									'</div><div class="tag">' +
									value.category +
									'</div></div>';
								list += '</li></a>';
							}
						}
					});
					$('#searchList').html(list);
				});
			} else {
				$('#searchList').css({ display: 'none' });
				$('.content').css({ 'margin-top': '155px' });
				$('#songList').css({ display: 'block' });
			}
		} else {
			$('#searchList').css({ display: 'none' });
			$('.content').css({ 'margin-top': '155px' });
			$('#songList').css({ display: 'block' });
		}
	});
});
