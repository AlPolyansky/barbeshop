var commonModule = (function() {

		var $share = $('.share');
		var $desk = $share.find('.share__desk');

		var upDesk = function(min,max){
			if(window.innerWidth <= min && window.innerWidth >= max){
				$share.css({
					'transform' : 'translate(0px ,'+ - $desk.outerHeight()  +'px)'
				})
				
			}else{
				$share.removeAttr('style');
			}
		}


		var textCutter = function(){
			
			var $elemets = $('[data-length]');
			$.each($elemets,function(){
				var $this = $(this);
				var limit = $this.data().length;
				var str = $this.text();
				var newStr = str.slice(0,limit);
				$this.text(newStr);
			})
			
		}


		var _setUpListener = function(){

			// desk fix
			if(!(navigator.userAgent.indexOf('Firefox') + 1)){
				upDesk(1199,767);
			}else if(navigator.userAgent.indexOf('Firefox') + 1){
				upDesk(1199,767);
			}
			
			
			$(window).on('resize',function(){

				if(!(navigator.userAgent.indexOf('Firefox') + 1)){
					upDesk(1199,767);
				}else if(navigator.userAgent.indexOf('Firefox') + 1){
					upDesk(1199,767);
				}
			})


			textCutter();
			
			

		}

    return {
    	init: function(){
    		_setUpListener();
    	}
    }
})();
var menuModule = (function() {


		var $menu = $('.menu');
		var $button = $menu.find('.menu__button');
		var $list = $menu.find('.menu__list');

		var buttonAnimation = function(e){
			e.preventDefault();
			$(this).toggleClass('menu__button--active');
			$list.toggleClass('menu__list--open');

		}

		var _setUpListener = function(){

			$button.on('click',buttonAnimation)

		}

    return {
    	init: function(){
    		_setUpListener();
    	}
    }
})();
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
$(document).ready(function () {

	commonModule.init();
	menuModule.init();
	sliderModule.init();

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWVudS5qcyIsIl9zbGlkZXIuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tbW9uTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciAkc2hhcmUgPSAkKCcuc2hhcmUnKTtcclxuXHRcdHZhciAkZGVzayA9ICRzaGFyZS5maW5kKCcuc2hhcmVfX2Rlc2snKTtcclxuXHJcblx0XHR2YXIgdXBEZXNrID0gZnVuY3Rpb24obWluLG1heCl7XHJcblx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IG1pbiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXgpe1xyXG5cdFx0XHRcdCRzaGFyZS5jc3Moe1xyXG5cdFx0XHRcdFx0J3RyYW5zZm9ybScgOiAndHJhbnNsYXRlKDBweCAsJysgLSAkZGVzay5vdXRlckhlaWdodCgpICArJ3B4KSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQkc2hhcmUucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHR2YXIgdGV4dEN1dHRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgJGVsZW1ldHMgPSAkKCdbZGF0YS1sZW5ndGhdJyk7XHJcblx0XHRcdCQuZWFjaCgkZWxlbWV0cyxmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblx0XHRcdFx0dmFyIGxpbWl0ID0gJHRoaXMuZGF0YSgpLmxlbmd0aDtcclxuXHRcdFx0XHR2YXIgc3RyID0gJHRoaXMudGV4dCgpO1xyXG5cdFx0XHRcdHZhciBuZXdTdHIgPSBzdHIuc2xpY2UoMCxsaW1pdCk7XHJcblx0XHRcdFx0JHRoaXMudGV4dChuZXdTdHIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0dmFyIF9zZXRVcExpc3RlbmVyID0gZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdC8vIGRlc2sgZml4XHJcblx0XHRcdGlmKCEobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgKyAxKSl7XHJcblx0XHRcdFx0dXBEZXNrKDExOTksNzY3KTtcclxuXHRcdFx0fWVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgKyAxKXtcclxuXHRcdFx0XHR1cERlc2soMTE5OSw3NjcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdGlmKCEobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgKyAxKSl7XHJcblx0XHRcdFx0XHR1cERlc2soMTE5OSw3NjcpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpICsgMSl7XHJcblx0XHRcdFx0XHR1cERlc2soMTE5OSw3NjcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHJcblxyXG5cdFx0XHR0ZXh0Q3V0dGVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHJcblx0XHR9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgIFx0aW5pdDogZnVuY3Rpb24oKXtcclxuICAgIFx0XHRfc2V0VXBMaXN0ZW5lcigpO1xyXG4gICAgXHR9XHJcbiAgICB9XHJcbn0pKCk7IiwidmFyIG1lbnVNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuXHRcdHZhciAkbWVudSA9ICQoJy5tZW51Jyk7XHJcblx0XHR2YXIgJGJ1dHRvbiA9ICRtZW51LmZpbmQoJy5tZW51X19idXR0b24nKTtcclxuXHRcdHZhciAkbGlzdCA9ICRtZW51LmZpbmQoJy5tZW51X19saXN0Jyk7XHJcblxyXG5cdFx0dmFyIGJ1dHRvbkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnVfX2J1dHRvbi0tYWN0aXZlJyk7XHJcblx0XHRcdCRsaXN0LnRvZ2dsZUNsYXNzKCdtZW51X19saXN0LS1vcGVuJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfc2V0VXBMaXN0ZW5lciA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHQkYnV0dG9uLm9uKCdjbGljaycsYnV0dG9uQW5pbWF0aW9uKVxyXG5cclxuXHRcdH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgXHRpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgXHRcdF9zZXRVcExpc3RlbmVyKCk7XHJcbiAgICBcdH1cclxuICAgIH1cclxufSkoKTsiLCJ2YXIgc2xpZGVyTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciAkc2tpbGxzID0gJCgnLnNraWxscycpO1xyXG5cdFx0dmFyICRsaXN0ID0gJHNraWxscy5maW5kKCcuc2tpbGxzX19saXN0Jyk7XHJcblx0XHR2YXIgZmxhZyA9ICQoJy5qcy1za2lsbHMtc2xpZGVyJyk7XHJcblx0XHR2YXIgaXNGbGlja2l0eSA9IHRydWU7XHJcblxyXG5cdFx0dmFyIGFkZFNsaWRlciA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG5cdFx0XHRlbGVtZW50LmZsaWNraXR5KHtcclxuXHRcdFx0XHRjZWxsQWxpZ246ICdsZWZ0JyxcclxuICBcdFx0XHQvL2NvbnRhaW46IHRydWUsXHJcbiAgXHRcdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgXHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICBcdFx0XHRhdXRvUGxheTogdHJ1ZVxyXG4gIFx0XHRcdC8vZ3JvdXBDZWxsczogdHJ1ZVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KXtcclxuXHRcdFx0aWYoaXNGbGlja2l0eSl7XHJcblx0XHRcdFx0YWRkU2xpZGVyKCRsaXN0KTtcclxuXHRcdFx0XHRpc0ZsaWNraXR5ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHJcblxyXG5cdFx0dmFyIF9zZXRVcExpc3RlbmVyID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPD0gNzY4KXtcclxuXHRcdFx0XHRcdGlmKGlzRmxpY2tpdHkpe1xyXG5cdFx0XHRcdFx0XHRhZGRTbGlkZXIoJGxpc3QpO1xyXG5cdFx0XHRcdFx0XHRpc0ZsaWNraXR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpZighaXNGbGlja2l0eSl7XHJcblx0XHRcdFx0XHRcdCRsaXN0LmZsaWNraXR5KCdkZXN0cm95Jyk7XHJcblx0XHRcdFx0XHRcdGlzRmxpY2tpdHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgXHRpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgXHRcdF9zZXRVcExpc3RlbmVyKCk7XHJcbiAgICBcdH1cclxuICAgIH1cclxufSkoKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGNvbW1vbk1vZHVsZS5pbml0KCk7XHJcblx0bWVudU1vZHVsZS5pbml0KCk7XHJcblx0c2xpZGVyTW9kdWxlLmluaXQoKTtcclxuXHJcbn0pOyJdfQ==
