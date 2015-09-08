$(function() {
    var controller = new ScrollMagic.Controller();

    // Declare object to animate
    var tween = TweenMax.to('#burrito', 0,{});

    var numScenes= 7;
    var offSetRange = 250;
    //TODO: make sure container padding has enough paddding
    // container set CSS
    // padding: 200px 0 (numScenes * offsetRange)px 0;

    // Since each picture transition is the same, we create a forloop
    for(var i = 0; i < numScenes; i++){
        var name = "scene" + i;
        // new Scene object
        name = new ScrollMagic.Scene({
            // Triggered by another element
            triggerElement: "#scene",
            // How wide of a range do we activate in
            duration:offSetRange,
            // off set from the .top of #scene
            offset: ((i+1)*offSetRange)
        })
        .setTween(tween)
        .setClassToggle('#burrito','burrito'+(i+1))
        .addIndicators()
        .addTo(controller);
    }

});
