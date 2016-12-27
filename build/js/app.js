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
$(document).ready(function () {

	commonModule.init();
	menuModule.init();
	sliderModule.init();

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21tb24uanMiLCJfbWVudS5qcyIsIl9zbGlkZXIuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb21tb25Nb2R1bGUgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyICRzaGFyZSA9ICQoJy5zaGFyZScpO1xyXG5cdFx0dmFyICRkZXNrID0gJHNoYXJlLmZpbmQoJy5zaGFyZV9fZGVzaycpO1xyXG5cclxuXHRcdHZhciB1cERlc2sgPSBmdW5jdGlvbihtaW4sbWF4KXtcclxuXHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPD0gbWluICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heCl7XHJcblx0XHRcdFx0JHNoYXJlLmNzcyh7XHJcblx0XHRcdFx0XHQndHJhbnNmb3JtJyA6ICd0cmFuc2xhdGUoMHB4ICwnKyAtICRkZXNrLm91dGVySGVpZ2h0KCkgICsncHgpJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdCRzaGFyZS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHZhciB0ZXh0Q3V0dGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHJcblx0XHRcdHZhciAkZWxlbWV0cyA9ICQoJ1tkYXRhLWxlbmd0aF0nKTtcclxuXHRcdFx0JC5lYWNoKCRlbGVtZXRzLGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0XHR2YXIgbGltaXQgPSAkdGhpcy5kYXRhKCkubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciBzdHIgPSAkdGhpcy50ZXh0KCk7XHJcblx0XHRcdFx0dmFyIG5ld1N0ciA9IHN0ci5zbGljZSgwLGxpbWl0KTtcclxuXHRcdFx0XHQkdGhpcy50ZXh0KG5ld1N0cik7XHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHR2YXIgX3NldFVwTGlzdGVuZXIgPSBmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0Ly8gZGVzayBmaXhcclxuXHRcdFx0aWYoIShuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSArIDEpKXtcclxuXHRcdFx0XHR1cERlc2soMTE5OSw3NjcpO1xyXG5cdFx0XHR9ZWxzZSBpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSArIDEpe1xyXG5cdFx0XHRcdHVwRGVzaygxMTk5LDc2Nyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0aWYoIShuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSArIDEpKXtcclxuXHRcdFx0XHRcdHVwRGVzaygxMTk5LDc2Nyk7XHJcblx0XHRcdFx0fWVsc2UgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgKyAxKXtcclxuXHRcdFx0XHRcdHVwRGVzaygxMTk5LDc2Nyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cclxuXHJcblx0XHRcdHRleHRDdXR0ZXIoKTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cclxuXHRcdH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgXHRpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgXHRcdF9zZXRVcExpc3RlbmVyKCk7XHJcbiAgICBcdH1cclxuICAgIH1cclxufSkoKTsiLCJ2YXIgbWVudU1vZHVsZSA9IChmdW5jdGlvbigpIHtcclxuXHJcblxyXG5cdFx0dmFyICRtZW51ID0gJCgnLm1lbnUnKTtcclxuXHRcdHZhciAkYnV0dG9uID0gJG1lbnUuZmluZCgnLm1lbnVfX2J1dHRvbicpO1xyXG5cdFx0dmFyICRsaXN0ID0gJG1lbnUuZmluZCgnLm1lbnVfX2xpc3QnKTtcclxuXHJcblx0XHR2YXIgYnV0dG9uQW5pbWF0aW9uID0gZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnbWVudV9fYnV0dG9uLS1hY3RpdmUnKTtcclxuXHRcdFx0JGxpc3QudG9nZ2xlQ2xhc3MoJ21lbnVfX2xpc3QtLW9wZW4nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF9zZXRVcExpc3RlbmVyID0gZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdCRidXR0b24ub24oJ2NsaWNrJyxidXR0b25BbmltYXRpb24pXHJcblxyXG5cdFx0fVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICBcdGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICBcdFx0X3NldFVwTGlzdGVuZXIoKTtcclxuICAgIFx0fVxyXG4gICAgfVxyXG59KSgpOyIsInZhciBzbGlkZXJNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyICRza2lsbHMgPSAkKCcuc2tpbGxzJyk7XHJcblx0XHR2YXIgJGxpc3QgPSAkc2tpbGxzLmZpbmQoJy5za2lsbHNfX2xpc3QnKTtcclxuXHRcdHZhciBmbGFnID0gJCgnLmpzLXNraWxscy1zbGlkZXInKTtcclxuXHRcdHZhciBpc0ZsaWNraXR5ID0gdHJ1ZTtcclxuXHJcblx0XHR2YXIgYWRkU2xpZGVyID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcblx0XHRcdGVsZW1lbnQuZmxpY2tpdHkoe1xyXG5cdFx0XHRcdGNlbGxBbGlnbjogJ2xlZnQnLFxyXG4gIFx0XHRcdC8vY29udGFpbjogdHJ1ZSxcclxuICBcdFx0XHRhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICBcdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxyXG4gIFx0XHRcdGF1dG9QbGF5OiB0cnVlXHJcbiAgXHRcdFx0Ly9ncm91cENlbGxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0aWYod2luZG93LmlubmVyV2lkdGggPCA3Njgpe1xyXG5cdFx0XHRpZihpc0ZsaWNraXR5KXtcclxuXHRcdFx0XHRhZGRTbGlkZXIoJGxpc3QpO1xyXG5cdFx0XHRcdGlzRmxpY2tpdHkgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQkKCcucmVjYWxsX19saXN0JykuZmxpY2tpdHkoe1xyXG5cdFx0XHRcdGNlbGxBbGlnbjogJ2xlZnQnLFxyXG4gIFx0XHRcdC8vY29udGFpbjogdHJ1ZSxcclxuICBcdFx0XHRhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICBcdFx0XHRwcmV2TmV4dEJ1dHRvbnM6IHRydWUsXHJcbiAgXHRcdFx0Ly9zZXRHYWxsZXJ5U2l6ZTogZmFsc2VcclxuICBcdFx0XHQvL2F1dG9QbGF5OiB0cnVlXHJcbiAgXHRcdFx0Ly9ncm91cENlbGxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHRcclxuXHJcblxyXG5cdFx0dmFyIF9zZXRVcExpc3RlbmVyID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggPD0gNzY4KXtcclxuXHRcdFx0XHRcdGlmKGlzRmxpY2tpdHkpe1xyXG5cdFx0XHRcdFx0XHRhZGRTbGlkZXIoJGxpc3QpO1xyXG5cdFx0XHRcdFx0XHRpc0ZsaWNraXR5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpZighaXNGbGlja2l0eSl7XHJcblx0XHRcdFx0XHRcdCRsaXN0LmZsaWNraXR5KCdkZXN0cm95Jyk7XHJcblx0XHRcdFx0XHRcdGlzRmxpY2tpdHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgXHRpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgXHRcdF9zZXRVcExpc3RlbmVyKCk7XHJcbiAgICBcdH1cclxuICAgIH1cclxufSkoKTsiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGNvbW1vbk1vZHVsZS5pbml0KCk7XHJcblx0bWVudU1vZHVsZS5pbml0KCk7XHJcblx0c2xpZGVyTW9kdWxlLmluaXQoKTtcclxuXHJcbn0pOyJdfQ==
