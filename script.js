gsap.from('#ondertitel', {
	scrollTrigger: {
		trigger: '#titel',
		start: 'top 20%',
		end: 'top top',
		scrub: 0.3,
	},
	opacity: 0,
})

// Avocado animatie door schermen
gsap.timeline({
	scrollTrigger: {
		trigger: '#avocado',
		start: 'top 70%',
		end: 'top 40%',
		scrub: 0.75,
	},
}).to('#avocado', {
	y: '25vw',
	rotation: 360,
	duration: 13,
})

gsap.timeline({
	scrollTrigger: {
		trigger: '#avocado',
		start: '150% 40%',
		end: '150% top',
		scrub: 0.75,
	},
}).to('#avocado', {
	rotation: 360,
	y: '88vw',
	transform: 'scale(1.5)',
	duration: 13,
})

// Hype pagina
gsap.to('#De_avocado_tekst', {
	scrollTrigger: {
		trigger: '#De_avocado_tekst',
		end: 'top center',
		scrub: 0.2,
	},
	opacity: '100%',
})

gsap.from('#Hashtag', {
	scrollTrigger: {
		trigger: '#Hashtag',
		scrub: 1,
		end: 'top 70%',
	},
	x: 400,
	duration: 1,
	stagger: 0.5,
})

// Health pagina
gsap.timeline({
	scrollTrigger: {
		trigger: '#gezondheid',
		pin: '#gezondheid',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	},
})
	.to('#avocado', {
		opacity: 0,
		duration: 0.1,
	})
	.to('#gezondheid', {
		scale: 3,
		transformOrigin: '7% 43%',
	})
	.from('#Groep_text', {
		opacity: 0,
		scale: 0,
		transformOrigin: '0% 50%',
		stagger: 0.5,
	})

// Avocado eten (keerzijde pagina)
gsap.timeline({
	scrollTrigger: {
		trigger: '#keerzijde',
		pin: '#keerzijde',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	},
})
	.to('#arm_avocado', {
		rotation: 50,
		transformOrigin: '100% 0%',
		y: '3vw',
		x: '1vw',
		duration: 13,
	})
	.from('#stopteken', {
		x: 700,
		duration: 13,
	})
	.to('#avocado_eten', {
		y: 1500,
		x: 1500,
		duration: 30,
	})

// Chili pagina
gsap.from('#petorca_text>*', {
	scrollTrigger: {
		trigger: '#petorca_text',
		scrub: 0.75,
		start: 'top 80%',
		end: 'top 35%',
	},
	opacity: 0,
	stagger: 0.5,
})

gsap.to('#chili', {
	scrollTrigger: {
		trigger: '#chili',
		pin: '#chili',
		scrub: 0.5,
		anticipatePin: 1,
	},
	scale: 3.4,
	transformOrigin: '100% 90%',
})

// Grafiek pagina
gsap.set('#Balk_avocado, #Balk_sinaasappel, #Balk_Tomaat', {
	rotation: 180,
	transformOrigin: '50% 50%',
})

gsap.timeline({
	scrollTrigger: {
		trigger: '#watervoetafdruk',
		pin: '#watervoetafdruk',
		scrub: 0.5,
		start: '0% top',
		end: '+=100%',
		pinSpacing: true,
	},
})
	.from('#Balk_avocado, #Balk_sinaasappel, #Balk_Tomaat', {
		height: 0,
		stagger: 0.3
	})
	.from('#tekst_balk, #Avocado_2_, #Sinaasappel_1_, #Tomaat_2_', {
		opacity: 0,
		stagger: 0.2
	})

// Rivier pagina
gsap.timeline({
	scrollTrigger: {
		trigger: '#rivier',
		pin: '#rivier',
		scrub: 0.5,
		start: '96% bottom',
		end: '+=100%',
		pinSpacing: true,
	},
})
	.from('#Man', {
		x: '-600',
		duration: 5,
	})
	.from('#Vrouw', {
		x: '600',
		duration: 5,
	})
	.from('#Man', {
		x: '0',
		duration: 5,
	})
	.from('#Vrouw', {
		x: '0',
		duration: 5,
	})
	.from('#droge_rivier', {
		x: '-600',
		duration: 5,
	})
	.from('#vrachtwagen', {
		x: '600',
		duration: 5,
	})
	.from('#droge_rivier', {
		x: '0',
		duration: 5,
	})
	.from('#vrachtwagen', {
		x: '0',
		duration: 5,
	})

gsap.timeline({
	scrollTrigger: {
		trigger: '#rivier',
		pin: '#rivier',
		scrub: 0.5,
		start: '96% bottom',
		end: '+=100%',
		pinSpacing: true,
	},
})
	.to('#rivier_vol', {
		opacity: 0,
		display: 'none',
		duration: 0.5,
	})
	.to('#rivier_droog', {
		opacity: 1,
		display: 'block',
		duration: 0.5,
	})

// Wereldkaart pagina
gsap.timeline({
	scrollTrigger: {
		trigger: '#wereldbol',
		pin: '#wereldbol',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	},
})
	.from('#wereldkaart', {
		scale: 3.5,
		transformOrigin: '22% 98%',
		duration: 8,
	})
	.from('#Streepjes>*', {
		opacity: 0,
		stagger: 0.5,
	})
	.to('#Streepjes', {
		opacity: 0,
	})
	.to('#wereldkaart', {
		scale: 6,
		duration: 8,
		transformOrigin: '51% 38%',
	})

// Oversteek pagina
gsap.timeline({
	scrollTrigger: {
		trigger: '#oversteek',
		pin: '#oversteek',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	}
})
	.fromTo('#boot', {
		x: -200,
		y: -300,
		scale: 0.5
	}, {
		x: 400,
		y: 500,
		scale: 1,
		duration: 15
	})

gsap.timeline({
	scrollTrigger: {
		trigger: '#oversteek',
		pin: '#oversteek',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	}
})
	.from('.boot_tekst', {
		opacity: 0,
		stagger: 1.3,
		delay: 0.4,
		duration: 1
	})
	.from('.loods_tekst', {
		opacity: 0,
		stagger: 0.8,
		duration: 1
	})

// Verspilling pagina
gsap.timeline({
	scrollTrigger: {
		trigger: '#verspilling',
		pin: '#verspilling',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	},
})
	.to('#naar_prullenbak>*', {
		x: 'random(280, 450)',
		y: 'random(360, 450)',
		stagger: 0.5,
	})

// Alternatief pagina
document.querySelector('#tips_button').addEventListener('click', () => {
	gsap.timeline()
		.to('#alternatief', {
			opacity: 0,
			display: 'none',
			duration: 0.5,
		})
		.to('#tips', {
			opacity: 1,
			display: 'block',
			duration: 0.5,
		})
})

document.querySelector('#alternatief_button').addEventListener('click', () => {
	gsap.timeline()
		.to('#tips', {
			opacity: 0,
			display: 'none',
			duration: 0.5,
		})
		.to('#alternatief', {
			opacity: 1,
			display: 'block',
			duration: 0.5,
		})
})
