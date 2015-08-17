
//navbar collapsing
$(window).scroll(function() {
    if ($(".navbar").offset().top > 700) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//when using lunks to jump sections
$(function() {
	$('a.page-scroll').bind('click', function(event){
		var $anchor= $(this);
		$('html, body').stop().animate({
			scrollTop:$($anchor.attr('href')).offset().top
		}, 1200, 'easeInOutCubic');
		event.preventDefault();
	});
});

/*
//Hover effects
$( ".Linkedin" ).mouseover(function() {
	var img = $( this );
	img.attr("src","img/Linkedin_hover.png").fadeIn(12200, 'easeInOutCubic');
});
$( ".Linkedin" ).mouseout(function() {
	var img = $( this );
	img.attr("src","img/Linkedin.png");
});

$( ".Github" ).mouseover(function() {
	var img = $( this );
	//img.removeAttr( "src" );
	img.attr("src","img/Github_hover.png");
});
$( ".Github" ).mouseout(function() {
	var img = $( this );
	//img.removeAttr( "src" );
	img.attr("src","img/Github.png");
});

$( ".Email" ).mouseover(function() {
	var img = $( this );
	//img.removeAttr( "src" );
	img.attr("src","img/email_hover.png");
});
$( ".Email" ).mouseout(function() {
	var img = $( this );
	//img.removeAttr( "src" );
	img.attr("src","img/email.png");
});

//video pause button functions
 var vid = document.getElementById("bgvid");
 var pauseButton = document.getElementById("vidpause");

 function vidFade() {
     vid.classList.add("stopfade");
 }

 vid.addEventListener('ended', function(){
     vid.pause();
     vidFade();
 });

 pauseButton.addEventListener("click", function()
 {
     vid.classList.toggle('stopfade');
     if(vid.paused)
     {
         vid.play();
         pauseButton.innerHTML = "Pause";
     }
     else
     {
         vid.pause();
         pauseButton.innerHTML = "Paused";
     }
 })

 */
