$(document).ready(function() {

$(window).scroll(function(e){
  	parallax();
	});
	function parallax(){
  	var scrolled = $(window).scrollTop();
  	$('.bg-parallax').css('top',-(scrolled*0.2)+'px');
	}
	
$('.left-arrow ').click(function() {
	var slidWidth = $('.slid-window li').width();
	var Step = $('.slid-window ul').position().left;
	var result = Step - slidWidth;
	var leng = $('.slider ul').width();
	if($('.slider ul').position().left > -leng + slidWidth) {
		$('.slid-window ul').animate({left:result});
	}
})

$('.right-arrow ').click(function() {
	var slidWidth = $('.slid-window li').width();
	var Step = $('.slid-window ul').position().left;
	var result = Step + slidWidth;
	var leng = $('.slider ul').width();
	if($('.slider ul').position().left < 0) {
		$('.slid-window ul').animate({left:result});
	}
})

$(window).scroll(function() {
    	if($(window).scrollTop() > 299) {
			$('.topWindow').fadeIn();
		}
		else {
			$('.topWindow').fadeOut();
		}
})
$('.topWindow').click(function() {
   		$('body,html').animate({scrollTop: 0},400);
})
	
});