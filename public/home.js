const slideCount = 7;
const startingSlide = Math.floor(Math.random() * slideCount);
$('.carousel').carousel(
	startingSlide, // select a random slide to begin
	{
		interval: 2000,
		pause: 'false'
	}
);