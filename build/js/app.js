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

		var jobsHeight = function(){
			var job = $('.job');
			var content = job.find('.job__content');
			
			

			//content.height(part.height() - icons.height())
			$.each(content,function(){
				var $this = $(this);
				var part = $this.closest('.job__part');
				var icons = part.find('.job__icons');


				/*$this.css({
					'height' : part.outerHeight() - icons.outerHeight()
				})*/
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
			jobsHeight();
			
			

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWVudS5qcyIsIl9zbGlkZXIuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb21tb25Nb2R1bGUgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyICRzaGFyZSA9ICQoJy5zaGFyZScpO1xyXG5cdFx0dmFyICRkZXNrID0gJHNoYXJlLmZpbmQoJy5zaGFyZV9fZGVzaycpO1xyXG5cclxuXHRcdHZhciB1cERlc2sgPSBmdW5jdGlvbihtaW4sbWF4KXtcclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPD0gbWluICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heCl7XHJcblx0XHRcdFx0JHNoYXJlLmNzcyh7XHJcblx0XHRcdFx0XHQndHJhbnNmb3JtJyA6ICd0cmFuc2xhdGUoMHB4ICwnKyAtICRkZXNrLm91dGVySGVpZ2h0KCkgICsncHgpJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdCRzaGFyZS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHZhciB0ZXh0Q3V0dGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHJcblx0XHRcdHZhciAkZWxlbWV0cyA9ICQoJ1tkYXRhLWxlbmd0aF0nKTtcclxuXHRcdFx0JC5lYWNoKCRlbGVtZXRzLGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0XHR2YXIgbGltaXQgPSAkdGhpcy5kYXRhKCkubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciBzdHIgPSAkdGhpcy50ZXh0KCk7XHJcblx0XHRcdFx0dmFyIG5ld1N0ciA9IHN0ci5zbGljZSgwLGxpbWl0KTtcclxuXHRcdFx0XHQkdGhpcy50ZXh0KG5ld1N0cik7XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBqb2JzSGVpZ2h0ID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGpvYiA9ICQoJy5qb2InKTtcclxuXHRcdFx0dmFyIGNvbnRlbnQgPSBqb2IuZmluZCgnLmpvYl9fY29udGVudCcpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQvL2NvbnRlbnQuaGVpZ2h0KHBhcnQuaGVpZ2h0KCkgLSBpY29ucy5oZWlnaHQoKSlcclxuXHRcdFx0JC5lYWNoKGNvbnRlbnQsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdHZhciBwYXJ0ID0gJHRoaXMuY2xvc2VzdCgnLmpvYl9fcGFydCcpO1xyXG5cdFx0XHRcdHZhciBpY29ucyA9IHBhcnQuZmluZCgnLmpvYl9faWNvbnMnKTtcclxuXHJcblxyXG5cdFx0XHRcdC8qJHRoaXMuY3NzKHtcclxuXHRcdFx0XHRcdCdoZWlnaHQnIDogcGFydC5vdXRlckhlaWdodCgpIC0gaWNvbnMub3V0ZXJIZWlnaHQoKVxyXG5cdFx0XHRcdH0pKi9cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0dmFyIF9zZXRVcExpc3RlbmVyID0gZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdC8vIGRlc2sgZml4XHJcblx0XHRcdGlmKCEobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgKyAxKSl7XHJcblx0XHRcdFx0dXBEZXNrKDExOTksNzY3KTtcclxuXHRcdFx0fWVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgKyAxKXtcclxuXHRcdFx0XHR1cERlc2soMTE5OSw3NjcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdGlmKCEobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgKyAxKSl7XHJcblx0XHRcdFx0XHR1cERlc2soMTE5OSw3NjcpO1xyXG5cdFx0XHRcdH1lbHNlIGlmKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpICsgMSl7XHJcblx0XHRcdFx0XHR1cERlc2soMTE5OSw3NjcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHJcblxyXG5cdFx0XHR0ZXh0Q3V0dGVyKCk7XHJcblx0XHRcdHN2ZzRldmVyeWJvZHkoKTtcclxuXHRcdFx0am9ic0hlaWdodCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblxyXG5cdFx0fVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICBcdGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICBcdFx0X3NldFVwTGlzdGVuZXIoKTtcclxuICAgIFx0fVxyXG4gICAgfVxyXG59KSgpOyIsInZhciBtZW51TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcblx0XHR2YXIgJG1lbnUgPSAkKCcubWVudScpO1xyXG5cdFx0dmFyICRidXR0b24gPSAkbWVudS5maW5kKCcubWVudV9fYnV0dG9uJyk7XHJcblx0XHR2YXIgJGxpc3QgPSAkbWVudS5maW5kKCcubWVudV9fbGlzdCcpO1xyXG5cclxuXHRcdHZhciBidXR0b25BbmltYXRpb24gPSBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51X19idXR0b24tLWFjdGl2ZScpO1xyXG5cdFx0XHQkbGlzdC50b2dnbGVDbGFzcygnbWVudV9fbGlzdC0tb3BlbicpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgX3NldFVwTGlzdGVuZXIgPSBmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0JGJ1dHRvbi5vbignY2xpY2snLGJ1dHRvbkFuaW1hdGlvbilcclxuXHJcblx0XHR9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgIFx0aW5pdDogZnVuY3Rpb24oKXtcclxuICAgIFx0XHRfc2V0VXBMaXN0ZW5lcigpO1xyXG4gICAgXHR9XHJcbiAgICB9XHJcbn0pKCk7IiwidmFyIHNsaWRlck1vZHVsZSA9IChmdW5jdGlvbigpIHtcclxuXHJcblx0XHR2YXIgJHNraWxscyA9ICQoJy5za2lsbHMnKTtcclxuXHRcdHZhciAkbGlzdCA9ICRza2lsbHMuZmluZCgnLnNraWxsc19fbGlzdCcpO1xyXG5cdFx0dmFyIGZsYWcgPSAkKCcuanMtc2tpbGxzLXNsaWRlcicpO1xyXG5cdFx0dmFyIGlzRmxpY2tpdHkgPSB0cnVlO1xyXG5cclxuXHRcdHZhciBhZGRTbGlkZXIgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuXHRcdFx0ZWxlbWVudC5mbGlja2l0eSh7XHJcblx0XHRcdFx0Y2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgXHRcdFx0Ly9jb250YWluOiB0cnVlLFxyXG4gIFx0XHRcdGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gIFx0XHRcdHByZXZOZXh0QnV0dG9uczogZmFsc2UsXHJcbiAgXHRcdFx0YXV0b1BsYXk6IDcwMDAsXHJcbiAgXHRcdFx0Ly9ncm91cENlbGxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0aWYod2luZG93LmlubmVyV2lkdGggPCA3Njgpe1xyXG5cdFx0XHRpZihpc0ZsaWNraXR5KXtcclxuXHRcdFx0XHRhZGRTbGlkZXIoJGxpc3QpO1xyXG5cdFx0XHRcdGlzRmxpY2tpdHkgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQkKCcucmVjYWxsX19saXN0JykuZmxpY2tpdHkoe1xyXG5cdFx0XHRcdGNlbGxBbGlnbjogJ2xlZnQnLFxyXG4gIFx0XHRcdC8vY29udGFpbjogdHJ1ZSxcclxuICBcdFx0XHRhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICBcdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXHJcbiAgXHRcdFx0Ly9zZXRHYWxsZXJ5U2l6ZTogZmFsc2VcclxuICBcdFx0XHRhdXRvUGxheTogNzAwMCxcclxuICBcdFx0XHQvL2dyb3VwQ2VsbHM6IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdFxyXG5cclxuXHJcblx0XHR2YXIgX3NldFVwTGlzdGVuZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njgpe1xyXG5cdFx0XHRcdFx0aWYoaXNGbGlja2l0eSl7XHJcblx0XHRcdFx0XHRcdGFkZFNsaWRlcigkbGlzdCk7XHJcblx0XHRcdFx0XHRcdGlzRmxpY2tpdHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlmKCFpc0ZsaWNraXR5KXtcclxuXHRcdFx0XHRcdFx0JGxpc3QuZmxpY2tpdHkoJ2Rlc3Ryb3knKTtcclxuXHRcdFx0XHRcdFx0aXNGbGlja2l0eSA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICBcdGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICBcdFx0X3NldFVwTGlzdGVuZXIoKTtcclxuICAgIFx0fVxyXG4gICAgfVxyXG59KSgpOyIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Y29tbW9uTW9kdWxlLmluaXQoKTtcclxuXHRtZW51TW9kdWxlLmluaXQoKTtcclxuXHRzbGlkZXJNb2R1bGUuaW5pdCgpO1xyXG5cclxufSk7Il19
