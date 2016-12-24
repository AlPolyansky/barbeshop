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
$(document).ready(function () {

	//commonModule.init();
	menuModule.init();

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9tZW51LmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtZW51TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcblx0XHR2YXIgJG1lbnUgPSAkKCcubWVudScpO1xyXG5cdFx0dmFyICRidXR0b24gPSAkbWVudS5maW5kKCcubWVudV9fYnV0dG9uJyk7XHJcblx0XHR2YXIgJGxpc3QgPSAkbWVudS5maW5kKCcubWVudV9fbGlzdCcpO1xyXG5cclxuXHRcdHZhciBidXR0b25BbmltYXRpb24gPSBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtZW51X19idXR0b24tLWFjdGl2ZScpO1xyXG5cdFx0XHQkbGlzdC50b2dnbGVDbGFzcygnbWVudV9fbGlzdC0tb3BlbicpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgX3NldFVwTGlzdGVuZXIgPSBmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0JGJ1dHRvbi5vbignY2xpY2snLGJ1dHRvbkFuaW1hdGlvbilcclxuXHJcblx0XHR9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgIFx0aW5pdDogZnVuY3Rpb24oKXtcclxuICAgIFx0XHRfc2V0VXBMaXN0ZW5lcigpO1xyXG4gICAgXHR9XHJcbiAgICB9XHJcbn0pKCk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvL2NvbW1vbk1vZHVsZS5pbml0KCk7XHJcblx0bWVudU1vZHVsZS5pbml0KCk7XHJcblxyXG59KTsiXX0=
