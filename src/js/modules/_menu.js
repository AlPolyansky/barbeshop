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