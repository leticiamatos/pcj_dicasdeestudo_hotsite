$(function() {

	//Scroll
	$(".chapters_01").click(function(){
		$("body,html").animate({scrollTop : 0},5000);
		console.log($(this).offset())
	})
	$(".chapters_02").click(function(){
		$("body,html").animate({scrollTop : 6051},5000);
		//scrollTop( 6051 );
		console.log($(this).offset())
	})
}); 