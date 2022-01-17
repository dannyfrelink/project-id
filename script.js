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
				scrub: 0.75
			},
			y: '25vw',
			rotation: 360,
			duration: 13
		})
// .to('.avocado',
// 	{
// 		scrollTrigger: {
// 			trigger: '.avocado',
// 			start: '500% 70%',
// 			end: '500% 40%',
// 			markers: true,
// 			scrub: 0.75
// 		},
// 		rotation: 0,
// 		opacity: 0,
// 		transform: 'scale(0.5)',
// 		duration: 13
// 	})

// .fromTo('.avocado', {
// 	x: '-2vw',
// 	y: '90vw',
// 	transform: 'scale(1.5)'
// },
// 	{
// 		scrollTrigger: {
// 			trigger: '.avocado',
// 			start: '500% 70%',
// 			end: '500% 40%',
// 			markers: true,
// 			scrub: 0.75
// 		},
// 		y: '90vw',
// 		x: '-2vw',
// 		opacity: 0,
// 		transform: 'scale(0.5)',
// 		duration: 13
// 	})

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

// Avocado eten (keerzijde pagina)
var tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: '.keerzijde',
		pin: '.keerzijde',
		scrub: 0.75,
		start: 'top top',
		end: 'bottom top',
		markers: true
	},
})

tl2.to('#vork', {
	rotation: -50,
	x: '2.5vw',
	y: '5.5vw',
	transformOrigin: '0% 100%'
})

tl2.to('#vork, .avocado_bord', {
	y: '-10vw',
	duration: 13,
})

// gsap.to('.avocado_bord', {
// 	scrollTrigger: {
// 		trigger: '.avocado_bord',
// 		scrub: 1,
// 		// start: 'top bottom',
// 		end: 'top 80%',
// 		markers: true
// 	},
// 	opacity: 0.5,
// 	duration: 1
// })

gsap.to('#De_avocado_tekst', {
	scrollTrigger: {
		trigger: '#De_avocado_tekst',
		scrub: true,
	},
	opacity: '100%',
})
