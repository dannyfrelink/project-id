gsap.to('.avocado', {
	scrollTrigger: {
		trigger: '.avocado',
		scrub: true,
		start: 'top 60%',
		end: 'center top',
		// markers: true,
	},
	y: '25vw',
	rotation: 360,
	duration: 13,
})
