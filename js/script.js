// Smooth Scrolling
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Owl Carousel settings
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        dots: false,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        rewind: false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
});

// Email JS (contact form)
$(document).ready(function() {
    var myform = $("form#myform");
    myform.submit(function(event) {
        event.preventDefault();

        var params = myform.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});

        // Change to your service ID, or keep using the default service
        var service_id = "ganeshsundaram39_gmail_com";

        var template_id = "gscode_template";
        myform.find("button").text("Sending...");
        emailjs.send(service_id, template_id, params)
            .then(function() {
                // Sweet alert
                swal("Sent!", "I will contact you soon!", "success");
                myform.find("button").text("Send");
            }, function(err) {
                // Sweet alert
                swal("Send email failed!", "Something went wrong!", "error");
                console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                myform.find("button").text("Send");
            });
        return false;
    });
});

// Slick setting
$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand'
    });
});

