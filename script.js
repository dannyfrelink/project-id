const tl = gsap.timeline();

tl
	.fromTo('.avocado', {
		y: '25vw'
	},
		{
			scrollTrigger: {
				trigger: '.avocado',
				start: '200% 39%',
				end: '200% top',
				markers: true,
				scrub: 0.75
			},
			rotation: 360,
			x: '-2vw',
			y: '90vw',
			transform: 'scale(1.5)',
			duration: 13
		})
	.fromTo('.avocado', { y: 0 },
		{
			scrollTrigger: {
				trigger: '.avocado',
				start: 'top 70%',
				end: 'top 40%',
				markers: true,
				scrub: 0.75
			},
			y: '25vw',
			rotation: 360,
			duration: 13
		})

gsap.from('#Hashtag_1', {
	scrollTrigger: {
		trigger: '#Hashtag_1',
		scrub: 1,
		end: 'top 70%',
	},
	x: 400,
	duration: 1,
	stagger: 0.5
})

gsap.from('#Groep_text', {
	scrollTrigger: {
		trigger: '#Groep_text',
		scrub: 1,
		end: 'top 70%',
	},
	x: -400,
	duration: 1,
	stagger: 0.5
})

gsap.from('#Groep_arrow', {
	scrollTrigger: {
		trigger: '#Groep_arrow',
		scrub: 1,
		end: 'top 70%',
	},
	transform: 'scale(0)',
	duration: 1,
	stagger: 0.5
})



gsap.to('#De_avocado_tekst', {
	scrollTrigger: {
		trigger: '#De_avocado_tekst',
		scrub: true,
	},
	opacity: '100%',
	// ease: Expo.easeOut,
})

// gsap.to('.avocadoFoto', {
// 	scrollTrigger: {
// 		trigger: '.avocadoFoto',
// 		scrub: true,
// 	},
// 	x: '0',
// 	rotate: 720,
// })

// gsap.to('.titel', {
// 	scrollTrigger: {
// 		trigger: '.titel',
// 		scrub: true,
// 	},
// 	x: '0',
// })
