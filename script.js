const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.nextPage',
		start: 'top 70%',
		end: 'top 20%',
		markers: true,
		scrub: 0.75
	}
});

tl
	.to('.avocado', {
		y: '25vw',
		rotation: 360,
		duration: 13
	})
	// .call(() => console.log("call!")) // <-- here's the call
	.to('.avocado', {
		y: '75vw',
		duration: 13
	});

// gsap.to('.avocado', {
// 	scrollTrigger: {
// 		trigger: '.avocado',
// 		scrub: 0.75,
// 		start: 'top 70%',
// 		end: 'top 20%',
// 		markers: true
// 	},
// 	y: '25vw',
// 	rotation: 360,
// })

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
