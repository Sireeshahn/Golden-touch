gsap.registerPlugin(ScrollTrigger);

// Reused Styles:
const commonSettings = {
    duration: 1.5,
    ease: "power2.out",
    markers: true
};

// SECTION 1 – Fade In
gsap.from("#section1 .box", {
    opacity: 0,
    y: 50,
    ...commonSettings,
    scrollTrigger: {
        trigger: "#section1 .box",
        start: "top center",
        toggleActions: "play reverse play reverse",
        markers: true
    }
});

// SECTION 2 – Scale with bounce
gsap.from("#section2 .box", {
    scale: 0,
    ease: "bounce.out",
    duration: 1.2,
    scrollTrigger: {
        trigger: "#section2 .box",
        start: "top 75%",
        toggleActions: "play none none reset",
        markers: true
    }
});

// SECTION 3 – Spin + Drop
gsap.from("#section3 .box", {
    rotation: 720,
    y: -200,
    ...commonSettings,
    scrollTrigger: {
        trigger: "#section3 .box",
        start: "top bottom",
        toggleActions: "restart none none reverse",
        markers: true
    }
});

// SECTION 4 – Slide Right + Skew
gsap.from("#section4 .box", {
    x: -300,
    skewX: 25,
    ...commonSettings,
    scrollTrigger: {
        trigger: "#section4 .box",
        start: "center center",
        toggleActions: "play pause resume reset",
        markers: true
    }
});

// SECTION 6 – Float Up + Fade
gsap.from("#section6 .box", {
    y: 150,
    opacity: 0,
    scale: 0.8,
    ease: "back.out(1.7)",
    duration: 1.3,
    scrollTrigger: {
        trigger: "#section6 .box",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        markers: true
    }
});

// SECTION 7 – Flip + Swing
gsap.from("#section7 .box", {
    rotationY: 360,
    rotation: 15,
    transformOrigin: "center center",
    scale: 1.2,
    duration: 1.8,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#section7 .box",
        start: "center center",
        toggleActions: "play pause resume reverse",
        markers: true
    }
});

// SECTION 8 – Staggered Reveal
gsap.from("#section8 .box", {
    opacity: 0,
    y: 100,
    scale: 0.5,
    rotation: -45,
    ease: "power4.out",
    duration: 1.6,
    scrollTrigger: {
        trigger: "#section8 .box",
        start: "top 80%",
        toggleActions: "restart none none none",
        markers: true
    }
});
