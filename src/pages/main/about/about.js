Fancybox.bind("[data-fancybox]", {
  hideScrollbar: false,
  Carousel: {
    transition: "classic",
  },
  Thumbs: false,
});


$("[data-round]").each((e, t) => {
    ScrollTrigger.create({
        trigger: t,
        start: "center 95%",
        onEnter: () => {
            let e = Number(t.dataset.number),
                a = Number(t.dataset.round) || 0,
                i = Number(t.dataset.duration) || 4e3;
            anime({
                targets: t,
                innerHTML: [a, e],
                easing: "linear",
                round: 1,
                duration: i,
            });
        },
        once: !0,
        markers: !1,
    });
})
