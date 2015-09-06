$(function() {
    // Controller for parallaxes
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onEnter",
            duration: "200%"
            }
        }
    );

    // Parallax effects
    for(var i = 1; i < 5; i++){
        new ScrollMagic.Scene({triggerElement: "#parallax"+i})
        .setTween(".image"+i, {y:"80%", ease: Linear.easeNone})
        //.addIndicators()
        .addTo(controller);
    }

});
