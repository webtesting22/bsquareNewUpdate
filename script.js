
$(function () {
    "use strict";

    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".showover").fadeIn();
        $(".img-show img").attr("src", $src);
    });

    $("span, .overlay").click(function () {
        $(".showover").fadeOut();
    });

});
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
$(document).ready(function () {

    $('.client-single').on('click', function (event) {
        event.preventDefault();

        var active = $(this).hasClass('active');

        var parent = $(this).parents('.testi-wrap');

        if (!active) {
            var activeBlock = parent.find('.client-single.active');

            var currentPos = $(this).attr('data-position');

            var newPos = activeBlock.attr('data-position');

            activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
            activeBlock.attr('data-position', currentPos);

            $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
            $(this).attr('data-position', newPos);

        }
    });

}(jQuery));
jQuery(document).ready(function ($) {
    $(".show-more-btn").click(function (e) {
        $(".show-more-item:hidden").slice(0, 3).fadeIn();
        if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
    })
})
// var iphone = $('#First');
// // var camera= $('#camera');

// var layer = $('#main');

// layer.mousemove(function (e) {
//     var ivalueX = (e.pageX * -1 / 30);
//     var ivalueY = (e.pageY * -1 / 30);
//     var cvalueX = (e.pageX * -1 / 40);
//     var cvalueY = (e.pageY * -1 / 60);
//     console.log('ok');
//     iphone.css('transform', 'translate3d(' + ivalueX + 'px,' + ivalueY + 'px, 0)');
//     camera.css('transform', 'translate3d(' + cvalueX + 'px,' + cvalueY + 'px, 0)');
// });
// window.addEventListener(
//     "scroll",
//     () => {
//         document.body.style.setProperty(
//             "--scroll",
//             window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//         );
//     },
//     false
// );
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});
// const counters = document.querySelectorAll('.value');
// const speed = 500;

// counters.forEach(counter => {
//     const animate = () => {
//         const value = +counter.getAttribute('akhi');
//         const data = +counter.innerText;

//         const time = value / speed;
//         if (data < value) {
//             counter.innerText = Math.ceil(data + time);
//             setTimeout(animate, 1);
//         } else {
//             counter.innerText = value;
//         }

//     }

//     animate();
// });

//  ------------------------------counter javascript start-----------------------------------

$(document).ready(function () {
    $('.counter-value').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

//  ------------------------------counter javascript End-----------------------------------
// (function ($) {
//     "use strict";

//     //Page cursors

//     document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
//         t.style.left = n.clientX + "px",
//             t.style.top = n.clientY + "px",
//             e.style.left = n.clientX + "px",
//             e.style.top = n.clientY + "px",
//             i.style.left = n.clientX + "px",
//             i.style.top = n.clientY + "px"
//     });
//     var t = document.getElementById("cursor"),
//         e = document.getElementById("cursor2"),
//         i = document.getElementById("cursor3");
//     function n(t) {
//         e.classList.add("hover"), i.classList.add("hover")
//     }
//     function s(t) {
//         e.classList.remove("hover"), i.classList.remove("hover")
//     }
//     s();
//     for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
//         o(r[a])
//     }
//     function o(t) {
//         t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
//     }

//     $(document).ready(function () {

//         /* Hero Case study images */

//         $('.case-study-name:nth-child(1)').on('mouseenter', function () {
//             $('.case-study-name.active').removeClass('active');
//             $('.case-study-images li.show').removeClass("show");
//             $('.case-study-images li:nth-child(1)').addClass("show");
//             $('.case-study-name:nth-child(1)').addClass('active');
//         })
//         $('.case-study-name:nth-child(2)').on('mouseenter', function () {
//             $('.case-study-name.active').removeClass('active');
//             $('.case-study-images li.show').removeClass("show");
//             $('.case-study-images li:nth-child(2)').addClass("show");
//             $('.case-study-name:nth-child(2)').addClass('active');
//         })
//         $('.case-study-name:nth-child(3)').on('mouseenter', function () {
//             $('.case-study-name.active').removeClass('active');
//             $('.case-study-images li.show').removeClass("show");
//             $('.case-study-images li:nth-child(3)').addClass("show");
//             $('.case-study-name:nth-child(3)').addClass('active');
//         })
//         $('.case-study-name:nth-child(4)').on('mouseenter', function () {
//             $('.case-study-name.active').removeClass('active');
//             $('.case-study-images li.show').removeClass("show");
//             $('.case-study-images li:nth-child(4)').addClass("show");
//             $('.case-study-name:nth-child(4)').addClass('active');
//         })
//         $('.case-study-name:nth-child(1)').trigger('mouseenter')

//     });




// })(jQuery);







