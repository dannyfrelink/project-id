gsap.to('.avocado', {
	scrollTrigger: {
		trigger: '.avocado',
		scrub: true,
		start: 'top 60%',
		end: 'center top',
	},
	y: '25vw',
	rotation: 360,
	duration: 13,
})

gsap.to('#Hashtag_1', {
	scrollTrigger: {
		trigger: '#Hashtag_1',
		scrub: true,
		end: 'top 70%',
	},
	x: '0',
})

gsap.to('#Hashtag_2', {
	scrollTrigger: {
		trigger: '#Hashtag_2',
		scrub: true,
		end: 'top 70%',
	},
	x: '0',
})

gsap.to('#Hashtag_3', {
	scrollTrigger: {
		trigger: '#Hashtag_3',
		scrub: true,
		end: 'top 70%',
	},

	x: '0',
})

gsap.to('#De_avocado_tekst', {
	scrollTrigger: {
		trigger: '#De_avocado_tekst',
		scrub: true,
	},
	opacity: '100%',
	// ease: Expo.easeOut,
})

gsap.to('.avocadoFoto', {
	scrollTrigger: {
		trigger: '.avocadoFoto',
		scrub: true,
	},
	x: '0',
	rotate: 720,
})

gsap.to('.titel', {
	scrollTrigger: {
		trigger: '.titel',
		scrub: true,
	},
	x: '0',
})
