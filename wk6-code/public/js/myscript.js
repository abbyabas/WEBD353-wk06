var nlform = new NLForm(document.getElementById('nl-form'));

$(document).ready(function () {
    
    $("#submit").click(function () {
        $("#questionairre").fadeOut(500);
        $("#loader").fadeIn(500);
        setTimeout(function () {
            $("#loader").fadeOut(500);
            $('#content').fadeIn(500);
            $('.secondarynav').slideDown(250);
            if (jQuery.browser.mobile) {
                $.ttgSlideshow({
                    closebutton: 'Close Tour',
                    elements: [{
                            content: '<h2>Wedding Events</h2><p>Based on the cultural backgrounds you enter, we auto populate a timeline with common events from your cultural backgrounds. We suggest a date for the event, based on your wedding date.</p>'
                                        },
                        {
                            content: '<h2>Sort Your Events</h2><p>Sort your wedding events by culture or date.</p>'
                                        },
                        {
                            content: '<h2>Remove Events</h2><p>Delete an event from your timeline.</p>'
                                        }]
                });
            } else {
                setTimeout(function () {
                    $.ttgTour({
                        scrollspeed: 700,
                        next: "Next",
                        prev: "Prev",
                        finish: "End"
                    });
                }, 500);
            }

        }, 3500);
    });
    
    $("#contactclose").click(function () {
        ga('send', 'event', 'Buttons', 'Click', 'Contact Form - Close Button');
        $("#contactform").fadeOut(500);
        $("#overlay").fadeOut(500);
    });
    $("#getstarted").click(function () {
        $("#welcome").fadeOut(500);
        $("#welcomeoverlay").fadeOut(500);
    });


    $(".closebtn").click(function () {
        var q = $(this)
        if (window.confirm("Do you really want to delete?")) {
            /* where we actually delete the event */
            /* deleting via ajax */
            $.ajax({
                url: '/'+$(this).attr('data-event-id'),
                method: 'DELETE',
                success: function(data) {
                    q.closest(".event").slideUp(500, function () { /* delete animation */
                    q.remove();
                }); 
                }
            });

            

        }

    });

    $(".detailbtn").click(function (event) {
        event.preventDefault();
        $(this).closest(".row").siblings(".eventdetails").slideToggle(500);
    });

    $("#persian").click(function () {
        if ($('#persian').css('opacity') == 1) {
            $("#persian").css("opacity", ".25");
            $(".persian").closest(".event").slideUp(500);
        } else {
            $("#persian").css("opacity", "1");
            $(".persian").closest(".event").slideDown(500);
        }
    });
    $("#portugese").click(function () {
        if ($('#portugese').css('opacity') == 1) {
            $("#portugese").css("opacity", ".25");
            $(".portugese").closest(".event").slideUp(500);
        } else {
            $("#portugese").css("opacity", "1");
            $(".portugese").closest(".event").slideDown(500);
        }
    });
    $("#tradition").click(function () {
        if ($('#tradition').css('opacity') == 1) {
            $("#tradition").css("opacity", ".25");
            $(".tradition").closest(".event").slideUp(500);
        } else {
            $("#tradition").css("opacity", "1");
            $(".tradition").closest(".event").slideDown(500);
        }
    });

});