// $(document).ready(function(){
// 	// Activate tooltip
// 	$('[data-toggle="tooltip"]').tooltip();


// const questionModel = require("../../Back-end/Models/questionModel");

	
// 	// Select/Deselect checkboxes
// 	var checkbox = $('table tbody input[type="checkbox"]');
// 	$("#selectAll").click(function(){
// 		if(this.checked){
// 			checkbox.each(function(){
// 				this.checked = true;                        
// 			});
// 		} else{
// 			checkbox.each(function(){
// 				this.checked = false;                        
// 			});
// 		} 
// 	});
// 	checkbox.click(function(){
// 		if(!this.checked){
// 			$("#selectAll").prop("checked", false);
// 		}
// 	});
// });

(function () {
	var $quiz = $(".quiz");
	init();
	function init() {
		bindEvents();
	}
	function gotoNextSlide(e) {
		var $trigger = $(e.currentTarget);
		var $slide = $trigger.closest('.quiz-slide');

		var $next = $slide.next('.quiz-slide');

		
		if ($next.length > 0) {
			// removeActive();
			$slide.addClass('quiz-slide-move-to-left');
			$next.addClass('active').addClass('quiz-slide-move-from-right')	;
		}
		
	}
	function bindEvents() {
		$("[type='radio']").on('click', gotoNextSlide);
	}

})();

