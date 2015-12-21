$(document).ready(function () {
    var screen = $("#second-screen"), rightControls = $("#right-side-controls"), videoHolder = $("#video-holder");
    screen.css({
        "height": $(window).height() + "px"
    });

    rightControls.css({
        "top": ($(window).height() - 104) / 2 + "px"
    });

    videoHolder.css({
        "top": ($(window).height() - 500) / 2 + "px"
    });

});