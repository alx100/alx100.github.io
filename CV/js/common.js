$(window).load(function() {

	$(".loader_inner").fadeOut(1700);
	$(".loader").delay(1500).fadeOut("slow");

});

var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-36251023-1']);
		_gaq.push(['_setDomainName', 'jqueryscript.net']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();

		$(document).ready(function () {
			$(".icon").click(function () {
				$("#main_nav").fadeToggle(500);
				$(".top-menu").toggleClass("top-animate");
				$(".mid-menu").toggleClass("mid-animate");
				$(".bottom-menu").toggleClass("bottom-animate");
			});
		});
		$(document).ready(function(){
    	$(".points").click(function(){
        $("#main_nav").hide();
				$(".top-menu").toggleClass("top-animate");
				$(".mid-menu").toggleClass("mid-animate");
				$(".bottom-menu").toggleClass("bottom-animate");
    	});
   });
   	$(document).ready(function(){
    	$("#main_nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
	});
   	
$(document).ready(function() {
		$("#form").submit(function() {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				alert("Thank you!");
				$("#form").trigger("reset");
			});
			return false;
		});
	});

$('.owl-carousel').owlCarousel({
    margin:20,
    stagePadding:10,
    mouseDrag:false,
    nav:true,
    navText: [
      "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
      "<i class='fa fa-chevron-right' aria-hidden='true'></i>"
      ],
		responsiveClass:true,
		responsive:{
					240: {
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1200: {
						items:4
					}
				}
})