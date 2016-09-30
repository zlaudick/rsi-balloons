/**
 * Created by dbeets on 9/30/2016.
 */
$(document).ready(function(){
	$(".hid").hide();
	$(".toggle-btn").click(function(){
		$(".shw, .look").slideToggle();
		$(".toggle-btn").click(function(){
			$(".look").slideToggle();
		});
	});
});