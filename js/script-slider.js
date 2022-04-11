$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:13,
		speed:300,
		centerMode: true,
		centerPadding: '0px',
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:11
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow:9
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:3
				}
			}
		]
	});
});

