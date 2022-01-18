const tl = gsap.timeline()

tl.fromTo(
	'#avocado',
	{
		y: '25vw',
	},
	{
		scrollTrigger: {
			trigger: '#avocado',
			start: '200% 39%',
			end: '200% top',
			scrub: 0.75,
		},
		rotation: 360,
		x: '-2vw',
		y: '90vw',
		transform: 'scale(1.5)',
		duration: 13,
	}
).fromTo(
	'#avocado',
	{ y: 0 },
	{
		scrollTrigger: {
			trigger: '#avocado',
			start: 'top 70%',
			end: 'top 40%',
			scrub: 0.75,
		},
		y: '25vw',
		rotation: 360,
		duration: 13,
	}
)

// .to('#avocado',
// 	{
// 		scrollTrigger: {
// 			trigger: '#avocado',
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

// .fromTo('#avocado', {
// 	x: '-2vw',
// 	y: '90vw',
// 	transform: 'scale(1.5)'
// },
// 	{
// 		scrollTrigger: {
// 			trigger: '#avocado',
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

gsap.to('#De_avocado_tekst', {
	scrollTrigger: {
		trigger: '#De_avocado_tekst',
		end: 'top center',
		scrub: true,
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

gsap.from('#Groep_text', {
	scrollTrigger: {
		trigger: '#Groep_text',
		scrub: 1,
		end: 'top 70%',
	},
	x: -400,
	duration: 1,
	stagger: 0.5,
})

gsap.from('#Groep_arrow', {
	scrollTrigger: {
		trigger: '#Groep_arrow',
		scrub: 1,
		end: 'top 70%',
	},
	transform: 'scale(0)',
	duration: 1,
	stagger: 0.5,
})

// Avocado eten (keerzijde pagina)
var tl_keerzijde = gsap.timeline({
	scrollTrigger: {
		trigger: '#keerzijde',
		pin: '#keerzijde',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	},
})

tl_keerzijde.to('#vork', {
	rotation: -50,
	x: '2.5vw',
	y: '5.5vw',
	transformOrigin: '0% 100%',
})

tl_keerzijde.to('#vork_avocado, #hand', {
	y: '-14vw',
	duration: 13,
})

tl_keerzijde.from('#stopbord', {
	x: 700,
	duration: 13,
})

tl_keerzijde.to('#avocado_eten', {
	y: 2000,
	duration: 30,
	rotation: 90,
})

// gsap.to('#avocado_eten', {
// 	scrollTrigger: {
// 		trigger: '#avocado_eten',
// 		scrub: 0.75,
// 		start: 'top -40%',
// 		end: 'top -100%',
// 	},
// 	y: '150vw',
// 	rotation: 90,
// 	// duration: 15
// })

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

gsap.set('#Balk_avocado, #Balk_sinaasappel, #Balk_Tomaat', {
	rotation: 180,
	transformOrigin: '50% 50%',
})

// Grafiek pagina
var tl_grafiek = gsap.timeline({
	scrollTrigger: {
		trigger: '#watervoetafdruk',
		pin: '#watervoetafdruk',
		scrub: 0.5,
		start: '5% top',
		end: '+=100%',
		pinSpacing: true,
	},
})

tl_grafiek.from('#Balk_avocado, #Balk_sinaasappel, #Balk_Tomaat', {
	height: 0,
})

tl_grafiek.from('#tekst_balk, #tekst_balk, #Avocado_2_, #Sinaasappel_1_, #Tomaat_2_', {
	opacity: 0,
})

// Rivier pagina
var tl_rivier_fotos = gsap.timeline({
	scrollTrigger: {
		trigger: '#rivier',
		pin: '#rivier',
		scrub: 0.5,
		end: '+=100%',
		pinSpacing: true,
	},
})

tl_rivier_fotos.to('#rivier_water', {
	backgroundColor: 'red',
})

tl_rivier_fotos.from('#Man', {
	x: '-700',
})

tl_rivier_fotos.from('#Vrouw', {
	x: '700',
})

tl_rivier_fotos.from('#Man', {
	x: '0',
})

tl_rivier_fotos.from('#Vrouw', {
	x: '0',
})

tl_rivier_fotos.from('#droge_rivier', {
	x: '-700',
})

tl_rivier_fotos.from('#vrachtwagen', {
	x: '700',
})

tl_rivier_fotos.from('#droge_rivier', {
	x: '0',
})

tl_rivier_fotos.from('#vrachtwagen', {
	x: '0',
})

var tl_rivier = gsap.timeline({
	scrollTrigger: {
		trigger: '#rivier',
		pin: '#rivier',
		scrub: 0.5,
		end: '+=100%',
		pinSpacing: true,
	},
})

tl_rivier.to('#Streepje1, #Streepje2', {
	y: '2vw',
	fill: '#84786A',
	duration: 1
})

tl_rivier.to('#Streepje4, #Streepje5', {
	x: '-2vw',
	fill: '#84786A',
	duration: 1
})

tl_rivier.to('#Streepje6', {
	x: '2vw',
	y: '3.5vw',
	fill: '#84786A',
	rotation: -20,
	duration: 1
})

tl_rivier.to('#Streepje3', {
	x: '3vw',
	y: '2vw',
	fill: '#84786A',
	rotation: 25,
	duration: 1
})

gsap.to('#rivier_water', {
	scrollTrigger: {
		trigger: '#rivier',
		pin: '#rivier',
		scrub: 0.5,
		end: '+=100%',
		pinSpacing: true,
	},
	fill: '#A59589'
})

// Wereldkaart pagina
var tl_wereldkaart = gsap.timeline({
	scrollTrigger: {
		trigger: '#wereldbol',
		pin: '#wereldbol',
		scrub: 0.5,
		start: 'top top',
		end: '+=100%',
		pinSpacing: true,
	},
})

tl_wereldkaart.from('#wereldkaart', {
	scale: 3.5,
	transformOrigin: '22% 98%',
	duration: 8,
})

tl_wereldkaart.from('#Streepjes>*', {
	opacity: 0,
	stagger: 0.5,
})

tl_wereldkaart.to('#Streepjes', {
	opacity: 0,
})

tl_wereldkaart.to('#wereldkaart', {
	scale: 6,
	duration: 8,
	transformOrigin: '52% 38%',
})