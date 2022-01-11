gsap.to('.square', {
	scrollTrigger: {
		trigger: '.square',
		scrub: true,
		start: 'top center ',
		end: 'top 100px',
		markers: true,
	},
	x: 600,
	rotation: 360,
	duration: 3,
})
