const timeline = gsap.timeline();

timeline
.from('.nav-left', {
	opacity: 0,
	x:20,
	delay: 0.5,
	duration: 1
})
.from('.nav-mid', {
	opacity: 0,
	y: -20,
	delay: 0,
	duration: 1
})
.from('.front-page h1', {
	opacity: 0,
		y: 40,
		delay: 0,
		duration: 1
})
.from('.front-page-bottom',{
	opacity: 0,
		y: 20,
		delay: "-1",
		duration: 1
})
.from('.girl-one', {
	opacity: 0,
	y: 60,
	delay: 0.5,
	duration: 1
})
.from('.girl-two', {
	opacity: 0,
	x: 60,
	delay: "-1",
	duration: 1
})
.from('.girl-three', {
	opacity: 0,
	y: 60,
	delay: "-1",
	duration: 1
})

const timelinePageTwo = gsap.timeline();


timelinePageTwo
.from('.page-two h5',{
	opacity: 0,
	duration: 0.5,
	y: -100,
	scrollTrigger:{
		trigger: ".page-two h1",
		scroller: "body",
		scrub: 5
		}
})
.from('.page-two h1', {
	opacity: 0,
	duration: 2,
	delay: 1,
	y: -100,
	scrollTrigger: {
		trigger: ".page-two-bottom",
		scroller: "body",
		scrub:5
	}
})
.from('.page-two-bottom', {
	opacity: 0,
	duration: 2,
	y: -100,
	scrollTrigger: {
		trigger: ".page-two-bottom",
		scroller: "body",
		scrub: 5
	}
})

const timelinePageThree = gsap.timeline();


timelinePageThree
.from('.text-above-img',{
	opacity: 0,
	y: 40,
	scrollTrigger: {
		trigger: ".text-above-img",
		scroller: "body",
		scrub: 5,
		start: "top 100%",
		end: "top 40%"
	}
})
.from('.page-three img',{
	opacity: 0,
	y: -40,
	scrollTrigger: {
	trigger: ".page-three img",
	scroller: "body",
	scrub: 5,
	start: "top 80%",
	end: "top 40%"
	}
})
.from('.scroll-text-one',{
	opacity: 0,
	x: -100,
	duration: 2,
	delay: 1,
	scrollTrigger: {
		trigger: ".scroll-text-one",
		scroller: "body",
		scrub: 5,
		start: "top 60%",
		end: "top 40%",
	}
})
.from('.scroll-text-three', {
	opacity: 0,
	x: 100,
	duration: 2,
	delay: "-2",
	scrollTrigger: {
		trigger: ".scroll-text-two",
		scroller: "body",
		scrub: 5,
		start: "top 75%",
		end: "top 50%",
	}
})
.from('.scroll-text-two', {
	opacity: 0,
	x: -100,
	duration: 2,
	delay: 1,
	scrollTrigger: {
		trigger: ".scroll-text-three",
		scroller: "body",
		scrub: 5,
		start: "top 80%",
		end: "top 60%",
	}
})
