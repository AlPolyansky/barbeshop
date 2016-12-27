var sliderModule = (function() {

		var $skills = $('.skills');
		var $list = $skills.find('.skills__list');
		var flag = $('.js-skills-slider');
		var isFlickity = true;

		var addSlider = function(element){
			element.flickity({
				cellAlign: 'left',
  			//contain: true,
  			adaptiveHeight: true,
  			prevNextButtons: false,
  			autoPlay: true
  			//groupCells: true
			})
		}

		if(window.innerWidth < 768){
			if(isFlickity){
				addSlider($list);
				isFlickity = false;
			}
		}


		$('.recall__list').flickity({
				cellAlign: 'left',
  			//contain: true,
  			adaptiveHeight: true,
  			prevNextButtons: true,
  			//setGallerySize: false
  			//autoPlay: true
  			//groupCells: true
			})
		


		var _setUpListener = function(){
			$(window).on('resize',function(){
				if(window.innerWidth <= 768){
					if(isFlickity){
						addSlider($list);
						isFlickity = false;
					}
				}else{
					if(!isFlickity){
						$list.flickity('destroy');
						isFlickity = true;
					}
				}
			})
		}

    return {
    	init: function(){
    		_setUpListener();
    	}
    }
})();