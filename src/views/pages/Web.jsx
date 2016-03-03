var React = require('react');
var $ = require('jquery');

var Picture = require('../components/Picture.jsx');

var Web = React.createClass({

	componentDidMount: function() {
		var imgSrc = {
			"Korea TCS": [{
				"data": "./img/koreatcs/koreatcs_01.png"
			}, {
				"data": "./img/koreatcs/koreatcs_02.png"
			}, {
				"data": "./img/koreatcs/koreatcs_03.png"
			}, {
				"data": "./img/koreatcs/koreatcs_04.png"
			}, {
				"data": "./img/koreatcs/koreatcs_05.png"
			}, {
				"data": "./img/koreatcs/koreatcs_06.png"
			}], 
			"ChulApp": [{
				"data": "./img/chulapp/chulapp_01.png"
			}, {
				"data": "./img/chulapp/chulapp_02.png"
			}, {
				"data": "./img/chulapp/chulapp_03.png"
			}, {
				"data": "./img/chulapp/chulapp_04.png"
			}, {
				"data": "./img/chulapp/chulapp_05.png"
			}, {
				"data": "./img/chulapp/chulapp_06.png"
			}],
			"Mobile Store": [{
				"data": "./img/mobilestore/mobile_chulapp_01.png"
			}, {
				"data": "./img/mobilestore/mobile_chulapp_02.png"
			}, {
				"data": "./img/mobilestore/mobile_chulapp_03.png"
			}, {
				"data": "./img/mobilestore/mobile_chulapp_04.png"
			}, {
				"data": "./img/mobilestore/mobile_chulapp_05.png"
			}, {
				"data": "./img/mobilestore/mobile_chulapp_06.png"
			}],
			"Seoul National Univ Admin": [{
				"data": "./img/snu/SNU_01.png"
			}, {
				"data": "./img/snu/SNU_02.png"
			}, {
				"data": "./img/snu/SNU_03.png"
			}, {
				"data": "./img/snu/SNU_04.png"
			}, {
				"data": "./img/snu/SNU_05.png"
			}, {
				"data": "./img/snu/SNU_06.png"
			}],
			"Comico Webtoon": [{
				"data": "./img/comico/comico_01.png"
			}, {
				"data": "./img/comico/comico_02.png"
			}, {
				"data": "./img/comico/comico_03.png"
			}, {
				"data": "./img/comico/comico_04.png"
			}, {
				"data": "./img/comico/comico_05.png"
			}, {
				"data": "./img/comico/comico_06.png"
			}],
			"homepage_01": [{
				"data": "./img/dongjak_jinro_center/dongjak_jinro_center_01.png"
			}, {
				"data": "./img/dongjak_jinro_center/dongjak_jinro_center_02.png"
			}, {
				"data": "./img/dongjak_jinro_center/dongjak_jinro_center_03.png"
			}, {
				"data": "./img/dongjak_jinro_center/dongjak_jinro_center_04.png"
			}, {
				"data": "./img/dongjak_jinro_center/dongjak_jinro_center_05.png"
			}, {
				"data": "./img/dongjak_jinro_center/dongjak_jinro_center_06.png"
			}],
			"homepage_02": [{
				"data": "./img/techno_doctor/techno_doctor_01.png"
			}, {
				"data": "./img/techno_doctor/techno_doctor_02.png"
			}, {
				"data": "./img/techno_doctor/techno_doctor_03.png"
			}, {
				"data": "./img/techno_doctor/techno_doctor_04.png"
			}, {
				"data": "./img/techno_doctor/techno_doctor_05.png"
			}, {
				"data": "./img/techno_doctor/techno_doctor_06.png"
			}],
		}

		// image show when menu is clicked
		$('.list-group-item').each(function(index, el) {
			$(this).on('click', function() {
				$('.thumbnail img').fadeOut(2000, function() {
					$('.list-group-item').removeClass('selected');
					$(this).addClass('selected');
					$.each(imgSrc, function(key, data) {
						if ( el.innerHTML == key ) {
							$.each(data, function(imgIndex, data) {
								$('.thumbnail img').eq(imgIndex).attr('src', data.data).fadeIn(1000);
							});
						}
					});
				});
			});
		});

		// enlarge image
		$('.thumbnail img').on('click', function() {
			$('.dim').show();
			$('.popup').show();
			var imgUrl = $(this).attr('src');
			$('.popup').append('<img src="' + imgUrl + '" width="100%" height="100%" />');
		});

		$('.closeBtn').on('click', function() {
			$('.dim').hide();
			$('.popup').hide();
			$('.popup img').remove();
		});

		function AlignCenter() {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var width = $('.popup').width();
			var height = $('.popup').height();

			$('.popup').css({ 'left': (windowWidth -  width) / 2, 'top': (windowHeight - height) / 2 });
		}

		AlignCenter();

		$(window).resize(function() {
			AlignCenter();	
		});

	},

	render: function() {
		var pictures = [{
			"koreatcs" : "./img/koreatcs/koreatcs_01.png",
		}, {
			"koreatcs" : "./img/koreatcs/koreatcs_02.png",	
		}, {
			"koreatcs" : "./img/koreatcs/koreatcs_03.png",	
		}, {
			"koreatcs" : "./img/koreatcs/koreatcs_04.png",	
		}, {
			"koreatcs" : "./img/koreatcs/koreatcs_05.png",	
		}, {
			"koreatcs" : "./img/koreatcs/koreatcs_06.png",
		}];
		return (
			<div id="web" className="container">
				<div className="row">
					<div className="col-sm-9">
						<Picture key={pictures.id} images={pictures} />
					</div>
					<div className="quickMenu col-sm-3">
						<ul className="list-group">
						  	<li className="list-group-item selected">Korea TCS</li>
						  	<li className="list-group-item">ChulApp</li>
						  	<li className="list-group-item">Mobile Store</li>
						  	<li className="list-group-item">Seoul National Univ Admin</li>
						  	<li className="list-group-item">Comico Webtoon</li>
						  	<li className="list-group-item">homepage_01</li>
						  	<li className="list-group-item">homepage_02</li>
						</ul>
					</div>
				</div>
				<div className="dim"></div>
				<div className="popup">
					
					<a className="closeBtn">X</a>
				</div>
				
			</div>	
		);
	}

});

module.exports = Web;