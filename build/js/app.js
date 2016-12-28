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
			svg4everybody();
			
			

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
  			autoPlay: 7000,
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
  			autoPlay: 7000,
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
$(document).ready(function () {

	commonModule.init();
	menuModule.init();
	sliderModule.init();

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWVudS5qcyIsIl9zbGlkZXIuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbW1vbk1vZHVsZSA9IChmdW5jdGlvbigpIHtcclxuXHJcblx0XHR2YXIgJHNoYXJlID0gJCgnLnNoYXJlJyk7XHJcblx0XHR2YXIgJGRlc2sgPSAkc2hhcmUuZmluZCgnLnNoYXJlX19kZXNrJyk7XHJcblxyXG5cdFx0dmFyIHVwRGVzayA9IGZ1bmN0aW9uKG1pbixtYXgpe1xyXG5cdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSBtaW4gJiYgd2luZG93LmlubmVyV2lkdGggPj0gbWF4KXtcclxuXHRcdFx0XHQkc2hhcmUuY3NzKHtcclxuXHRcdFx0XHRcdCd0cmFuc2Zvcm0nIDogJ3RyYW5zbGF0ZSgwcHggLCcrIC0gJGRlc2sub3V0ZXJIZWlnaHQoKSAgKydweCknXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0JHNoYXJlLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0dmFyIHRleHRDdXR0ZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyICRlbGVtZXRzID0gJCgnW2RhdGEtbGVuZ3RoXScpO1xyXG5cdFx0XHQkLmVhY2goJGVsZW1ldHMsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdHZhciBsaW1pdCA9ICR0aGlzLmRhdGEoKS5sZW5ndGg7XHJcblx0XHRcdFx0dmFyIHN0ciA9ICR0aGlzLnRleHQoKTtcclxuXHRcdFx0XHR2YXIgbmV3U3RyID0gc3RyLnNsaWNlKDAsbGltaXQpO1xyXG5cdFx0XHRcdCR0aGlzLnRleHQobmV3U3RyKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHZhciBfc2V0VXBMaXN0ZW5lciA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHQvLyBkZXNrIGZpeFxyXG5cdFx0XHRpZighKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpICsgMSkpe1xyXG5cdFx0XHRcdHVwRGVzaygxMTk5LDc2Nyk7XHJcblx0XHRcdH1lbHNlIGlmKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpICsgMSl7XHJcblx0XHRcdFx0dXBEZXNrKDExOTksNzY3KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdCQod2luZG93KS5vbigncmVzaXplJyxmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRpZighKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpICsgMSkpe1xyXG5cdFx0XHRcdFx0dXBEZXNrKDExOTksNzY3KTtcclxuXHRcdFx0XHR9ZWxzZSBpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSArIDEpe1xyXG5cdFx0XHRcdFx0dXBEZXNrKDExOTksNzY3KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblxyXG5cclxuXHRcdFx0dGV4dEN1dHRlcigpO1xyXG5cdFx0XHRzdmc0ZXZlcnlib2R5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHJcblx0XHR9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgIFx0aW5pdDogZnVuY3Rpb24oKXtcclxuICAgIFx0XHRfc2V0VXBMaXN0ZW5lcigpO1xyXG4gICAgXHR9XHJcbiAgICB9XHJcbn0pKCk7IiwidmFyIG1lbnVNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuXHRcdHZhciAkbWVudSA9ICQoJy5tZW51Jyk7XHJcblx0XHR2YXIgJGJ1dHRvbiA9ICRtZW51LmZpbmQoJy5tZW51X19idXR0b24nKTtcclxuXHRcdHZhciAkbGlzdCA9ICRtZW51LmZpbmQoJy5tZW51X19saXN0Jyk7XHJcblxyXG5cdFx0dmFyIGJ1dHRvbkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ21lbnVfX2J1dHRvbi0tYWN0aXZlJyk7XHJcblx0XHRcdCRsaXN0LnRvZ2dsZUNsYXNzKCdtZW51X19saXN0LS1vcGVuJyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfc2V0VXBMaXN0ZW5lciA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHQkYnV0dG9uLm9uKCdjbGljaycsYnV0dG9uQW5pbWF0aW9uKVxyXG5cclxuXHRcdH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgXHRpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgXHRcdF9zZXRVcExpc3RlbmVyKCk7XHJcbiAgICBcdH1cclxuICAgIH1cclxufSkoKTsiLCJ2YXIgc2xpZGVyTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciAkc2tpbGxzID0gJCgnLnNraWxscycpO1xyXG5cdFx0dmFyICRsaXN0ID0gJHNraWxscy5maW5kKCcuc2tpbGxzX19saXN0Jyk7XHJcblx0XHR2YXIgZmxhZyA9ICQoJy5qcy1za2lsbHMtc2xpZGVyJyk7XHJcblx0XHR2YXIgaXNGbGlja2l0eSA9IHRydWU7XHJcblxyXG5cdFx0dmFyIGFkZFNsaWRlciA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG5cdFx0XHRlbGVtZW50LmZsaWNraXR5KHtcclxuXHRcdFx0XHRjZWxsQWxpZ246ICdsZWZ0JyxcclxuICBcdFx0XHQvL2NvbnRhaW46IHRydWUsXHJcbiAgXHRcdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgXHRcdFx0cHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICBcdFx0XHRhdXRvUGxheTogNzAwMCxcclxuICBcdFx0XHQvL2dyb3VwQ2VsbHM6IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCl7XHJcblx0XHRcdGlmKGlzRmxpY2tpdHkpe1xyXG5cdFx0XHRcdGFkZFNsaWRlcigkbGlzdCk7XHJcblx0XHRcdFx0aXNGbGlja2l0eSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdCQoJy5yZWNhbGxfX2xpc3QnKS5mbGlja2l0eSh7XHJcblx0XHRcdFx0Y2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgXHRcdFx0Ly9jb250YWluOiB0cnVlLFxyXG4gIFx0XHRcdGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gIFx0XHRcdHByZXZOZXh0QnV0dG9uczogdHJ1ZSxcclxuICBcdFx0XHQvL3NldEdhbGxlcnlTaXplOiBmYWxzZVxyXG4gIFx0XHRcdGF1dG9QbGF5OiA3MDAwLFxyXG4gIFx0XHRcdC8vZ3JvdXBDZWxsczogdHJ1ZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHJcblxyXG5cclxuXHRcdHZhciBfc2V0VXBMaXN0ZW5lciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQod2luZG93KS5vbigncmVzaXplJyxmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCl7XHJcblx0XHRcdFx0XHRpZihpc0ZsaWNraXR5KXtcclxuXHRcdFx0XHRcdFx0YWRkU2xpZGVyKCRsaXN0KTtcclxuXHRcdFx0XHRcdFx0aXNGbGlja2l0eSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0aWYoIWlzRmxpY2tpdHkpe1xyXG5cdFx0XHRcdFx0XHQkbGlzdC5mbGlja2l0eSgnZGVzdHJveScpO1xyXG5cdFx0XHRcdFx0XHRpc0ZsaWNraXR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgIFx0aW5pdDogZnVuY3Rpb24oKXtcclxuICAgIFx0XHRfc2V0VXBMaXN0ZW5lcigpO1xyXG4gICAgXHR9XHJcbiAgICB9XHJcbn0pKCk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRjb21tb25Nb2R1bGUuaW5pdCgpO1xyXG5cdG1lbnVNb2R1bGUuaW5pdCgpO1xyXG5cdHNsaWRlck1vZHVsZS5pbml0KCk7XHJcblxyXG59KTsiXX0=
