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