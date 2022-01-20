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
	}
})
	.to('#avocado', {
		opacity: 0,
		duration: 0.1
	})
	.to('#gezondheid', {
		scale: 3,
		transformOrigin: '7% 43%'
	})
	.from('#Groep_text', {
		opacity: 0,
		scale: 0,
		transformOrigin: '0% 50%',
		stagger: 0.5
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
	}
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
		anticipatePin: 1
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
	})
	.from('#tekst_balk, #tekst_balk, #Avocado_2_, #Sinaasappel_1_, #Tomaat_2_', {
		opacity: 0,
	})

// Rivier pagina
gsap.timeline({
	scrollTrigger: {
		trigger: '#rivier',
		pin: '#rivier',
		scrub: 0.5,
		end: '+=100%',
		pinSpacing: true,
	},
})
	.to('#rivier_water', {
		backgroundColor: 'red',
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
		end: '+=100%',
		pinSpacing: true,
	},
})
	.to('#Streepje1, #Streepje2', {
		y: '2vw',
		fill: '#84786A',
	})
	.to('#Streepje4, #Streepje5', {
		x: '-2vw',
		fill: '#84786A',
	})
	.to('#Streepje6', {
		x: '2vw',
		y: '3.5vw',
		fill: '#84786A',
		rotation: -20,
	})
	.to('#Streepje3', {
		x: '3vw',
		y: '2vw',
		fill: '#84786A',
		rotation: 25,
	})

gsap.to('#rivier_water', {
	scrollTrigger: {
		trigger: '#rivier',
		pin: '#rivier',
		scrub: 0.5,
		end: '+=100%',
		pinSpacing: true,
	},
	fill: '#A59589',
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

// Alternatief pagina
document.querySelector('#tips_button').addEventListener('click', () => {
	document.querySelector('#alternatief').style.display = 'none';
})