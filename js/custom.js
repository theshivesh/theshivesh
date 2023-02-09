$(document).ready(function () {
    $(document).mousemove(function (e) {
        $(".cursor").eq(0).css({
            left: e.pageX,
            top: e.pageY,
        });
        setTimeout(function () {
            $(".cursor").eq(1).css({
                left: e.pageX,
                top: e.pageY,
            });
        }, 120);
    });

    $("a").on({
        mouseenter: function () {
            $(".cursor").addClass("big");
        },
        mouseleave: function () {
            $(".cursor").removeClass("big");
        },
    });
});
