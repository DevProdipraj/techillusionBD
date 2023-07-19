!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      e(".preloader").fadeOut();
    }),
    e(window).on("resize", function () {
      e(".slick-slider").slick("refresh");
    }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.asmobilemenu = function (t) {
      var s = e.extend(
        {
          menuToggleBtn: ".as-menu-toggle",
          bodyToggleClass: "as-body-visible",
          subMenuClass: "as-submenu",
          subMenuParent: "as-item-has-children",
          subMenuParentToggle: "as-active",
          meanExpandClass: "as-mean-expand",
          appendElement: '<span class="as-mean-expand"></span>',
          subMenuToggleClass: "as-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function a() {
          t.toggleClass(s.bodyToggleClass);
          var a = "." + s.subMenuClass;
          e(a).each(function () {
            e(this).hasClass(s.subMenuToggleClass) &&
              (e(this).removeClass(s.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(s.subMenuParentToggle));
          });
        }
        t.find("li").each(function () {
          var t = e(this).find("ul");
          t.addClass(s.subMenuClass),
            t.css("display", "none"),
            t.parent().addClass(s.subMenuParent),
            t.prev("a").append(s.appendElement),
            t.next("a").append(s.appendElement);
        });
        var n = "." + s.meanExpandClass;
        e(n).each(function () {
          e(this).on("click", function (t) {
            var a;
            t.preventDefault(),
              (a = e(this).parent()),
              e(a).next("ul").length > 0
                ? (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).next("ul").slideToggle(s.toggleSpeed),
                  e(a).next("ul").toggleClass(s.subMenuToggleClass))
                : e(a).prev("ul").length > 0 &&
                  (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).prev("ul").slideToggle(s.toggleSpeed),
                  e(a).prev("ul").toggleClass(s.subMenuToggleClass));
          });
        }),
          e(s.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              a();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), a();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".as-menu-wrapper").asmobilemenu(),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? e(".sticky-wrapper").addClass("sticky")
        : e(".sticky-wrapper").removeClass("sticky");
    }),
    e(".scroll-top"))
  ) {
    var t = document.querySelector(".scroll-top"),
      s = document.querySelector(".scroll-top path"),
      a = s.getTotalLength();
    (s.style.transition = s.style.WebkitTransition = "none"),
      (s.style.strokeDasharray = a + " " + a),
      (s.style.strokeDashoffset = a),
      s.getBoundingClientRect(),
      (s.style.transition = s.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var n = function () {
      var t = e(window).scrollTop(),
        n = e(document).height() - e(window).height(),
        i = a - (t * a) / n;
      s.style.strokeDashoffset = i;
    };
    n(), e(window).scroll(n);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(t).addClass("show")
        : jQuery(t).removeClass("show");
    }),
      jQuery(t).on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  e("[data-bg-src]").length > 0 &&
    e("[data-bg-src]").each(function () {
      var t = e(this).attr("data-bg-src");
      e(this).css("background-image", "url(" + t + ")"),
        e(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".as-carousel").each(function () {
      var t = e(this);
      function s(e) {
        return t.data(e);
      }
      var a =
          '<button type="button" class="slick-prev"><i class="' +
          s("prev-arrow") +
          '"></i></button>',
        n =
          '<button type="button" class="slick-next"><i class="' +
          s("next-arrow") +
          '"></i></button>';
      e("[data-slick-next]").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext");
        });
      }),
        e("[data-slick-prev]").each(function () {
          e(this).on("click", function (t) {
            t.preventDefault(),
              e(e(this).data("slick-prev")).slick("slickPrev");
          });
        }),
        1 == s("arrows") &&
          (t.closest(".arrow-wrap").length ||
            t.closest(".container").parent().addClass("arrow-wrap")),
        t.slick({
          dots: !!s("dots"),
          fade: !!s("fade"),
          arrows: !!s("arrows"),
          speed: s("speed") ? s("speed") : 1e3,
          asNavFor: !!s("asnavfor") && s("asnavfor"),
          autoplay: 0 != s("autoplay"),
          infinite: 0 != s("infinite"),
          slidesToShow: s("slide-show") ? s("slide-show") : 1,
          adaptiveHeight: !!s("adaptive-height"),
          centerMode: !!s("center-mode"),
          autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
          centerPadding: s("center-padding") ? s("center-padding") : "0",
          focusOnSelect: 0 != s("focuson-select"),
          pauseOnFocus: !!s("pauseon-focus"),
          pauseOnHover: !!s("pauseon-hover"),
          variableWidth: !!s("variable-width"),
          vertical: !!s("vertical"),
          verticalSwiping: !!s("vertical"),
          swipeToSlide: !!s("swipetoslide"),
          prevArrow: s("prev-arrow")
            ? a
            : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
          nextArrow: s("next-arrow")
            ? n
            : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
          rtl: "rtl" == e("html").attr("dir"),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                arrows: !!s("xl-arrows"),
                dots: !!s("xl-dots"),
                slidesToShow: s("xl-slide-show")
                  ? s("xl-slide-show")
                  : s("slide-show"),
                centerMode: !!s("xl-center-mode"),
                centerPadding: "0",
              },
            },
            {
              breakpoint: 1400,
              settings: {
                arrows: !!s("ml-arrows"),
                dots: !!s("ml-dots"),
                slidesToShow: s("ml-slide-show")
                  ? s("ml-slide-show")
                  : s("slide-show"),
                centerMode: !!s("ml-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: !!s("lg-arrows"),
                dots: !!s("lg-dots"),
                slidesToShow: s("lg-slide-show")
                  ? s("lg-slide-show")
                  : s("slide-show"),
                centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: !!s("md-arrows"),
                dots: !!s("md-dots"),
                slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                centerMode: !!s("md-center-mode") && s("md-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: !!s("sm-arrows"),
                dots: !!s("sm-dots"),
                slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 576,
              settings: {
                arrows: !!s("xs-arrows"),
                dots: !!s("xs-dots"),
                slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                centerPadding: 0,
              },
            },
          ],
        });
    }),
    e("[data-ani-duration]").each(function () {
      var t = e(this).data("ani-duration");
      e(this).css("animation-duration", t);
    }),
    e("[data-ani-delay]").each(function () {
      var t = e(this).data("ani-delay");
      e(this).css("animation-delay", t);
    }),
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t),
        e(".slick-current [data-ani]").addClass("as-animated");
    }),
    e(".as-carousel").on("afterChange", function (t, s, a, n) {
      e(s.$slides).find("[data-ani]").removeClass("as-animated"),
        e(s.$slides[a]).find("[data-ani]").addClass("as-animated");
    });
  var i,
    o,
    r,
    l = ".ajax-contact",
    c = '[name="email"]',
    d = e(".form-messages");
  function p() {
    var t = e(l).serialize();
    (function () {
      var t,
        s = !0;
      function a(a) {
        a = a.split(",");
        for (var n = 0; n < a.length; n++)
          (t = l + " " + a[n]),
            e(t).val()
              ? (e(t).removeClass("is-invalid"), (s = !0))
              : (e(t).addClass("is-invalid"), (s = !1));
      }
      a(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        e(c).val() &&
        e(c)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(c).removeClass("is-invalid"), (s = !0))
          : (e(c).addClass("is-invalid"), (s = !1));
      return s;
    })() &&
      jQuery
        .ajax({ url: e(l).attr("action"), data: t, type: "POST" })
        .done(function (t) {
          d.removeClass("error"),
            d.addClass("success"),
            d.text(t),
            e(l + ' input:not([type="submit"]),' + l + " textarea").val("");
        })
        .fail(function (e) {
          d.removeClass("success"),
            d.addClass("error"),
            "" !== e.responseText
              ? d.html(e.responseText)
              : d.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  function u(e) {
    return parseInt(e, 10);
  }
  e(l).on("submit", function (e) {
    e.preventDefault(), p();
  }),
    (i = ".popup-search-box"),
    (o = ".searchClose"),
    (r = "show"),
    e(".searchBoxToggler").on("click", function (t) {
      t.preventDefault(), e(i).addClass(r);
    }),
    e(i).on("click", function (t) {
      t.stopPropagation(), e(i).removeClass(r);
    }),
    e(i)
      .find("form")
      .on("click", function (t) {
        t.stopPropagation(), e(i).addClass(r);
      }),
    e(o).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(i).removeClass(r);
    }),
    (function (t, s, a, n) {
      e(s).on("click", function (s) {
        s.preventDefault(), e(t).addClass(n);
      }),
        e(t).on("click", function (s) {
          s.stopPropagation(), e(t).removeClass(n);
        }),
        e(t + " > div").on("click", function (s) {
          s.stopPropagation(), e(t).addClass(n);
        }),
        e(a).on("click", function (s) {
          s.preventDefault(), s.stopPropagation(), e(t).removeClass(n);
        });
    })(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    e(".popup-content").on("click", function () {
      e(".slick-slider").slick("refresh");
    }),
    (e.fn.sectionPosition = function (t, s) {
      e(this).each(function () {
        var a,
          n,
          i,
          o,
          r,
          l = e(this);
        (a = Math.floor(l.height() / 2)),
          (n = l.attr(t)),
          (i = l.attr(s)),
          (o = u(e(i).css("padding-top"))),
          (r = u(e(i).css("padding-bottom"))),
          "top-half" === n
            ? (e(i).css("padding-bottom", r + a + "px"),
              l.css("margin-top", "-" + a + "px"))
            : "bottom-half" === n &&
              (e(i).css("padding-top", o + a + "px"),
              l.css("margin-bottom", "-" + a + "px"));
      });
    });
  function h() {
    e(".feature-circle .progressbar").each(function () {
      var t = e(this).attr("data-path-color"),
        s = e(this).offset().top,
        a = e(window).scrollTop(),
        n = e(this).find(".circle").attr("data-percent"),
        i = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
      s < a + e(window).height() - 30 &&
        !i &&
        (e(this).data("animate", !0),
        e(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: n / 100,
            size: 100,
            thickness: 6,
            emptyFill: "transparent",
            lineCap: "round",
            fill: { color: t },
          })
          .on("circle-animation-progress", function (t, s, a) {
            e(this)
              .find(".circle-num")
              .text((100 * a).toFixed(0) + "%");
          })
          .stop());
    }),
      e(".skill-circle .progressbar").each(function () {
        var t = e(this).offset().top,
          s = e(window).scrollTop(),
          a = e(this).find(".circle").attr("data-percent"),
          n = (parseInt(a, 10), parseInt(100, 10), e(this).data("animate"));
        t < s + e(window).height() - 30 &&
          !n &&
          (e(this).data("animate", !0),
          e(this)
            .find(".circle")
            .circleProgress({
              startAngle: -Math.PI / 2,
              value: a / 100,
              size: 100,
              thickness: 8,
              emptyFill: "#E0E0E0",
              lineCap: "round",
              fill: { gradient: ["#F11F22", "#F2891D"] },
            })
            .on("circle-animation-progress", function (t, s, a) {
              e(this)
                .find(".circle-num")
                .text((100 * a).toFixed(0) + "%");
            })
            .stop());
      });
  }
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    e(".filter-active-cat1").imagesLoaded(function () {
      if (e(".filter-active-cat1").length > 0) {
        var t = e(".filter-active-cat1").isotope({
          itemSelector: ".filter-item",
          filter: ".cat1",
          masonry: { columnWidth: 1 },
        });
        e(".filter-menu-active").on("click", "button", function () {
          var s = e(this).attr("data-filter");
          t.isotope({ filter: s });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.asTab = function (t) {
      var s = e.extend({ sliderTab: !1, tabButton: "button" }, t);
      e(this).each(function () {
        var t = e(this),
          a = t.find(s.tabButton);
        t.append('<span class="indicator"></span>');
        var n = t.find(".indicator");
        if (
          (a.on("click", function (t) {
            t.preventDefault();
            var a = e(this);
            a.addClass("active").siblings().removeClass("active"),
              s.sliderTab
                ? e(i).slick("slickGoTo", a.data("slide-go-to"))
                : r();
          }),
          s.sliderTab)
        ) {
          var i = t.data("asnavfor"),
            o = 0;
          a.each(function () {
            var a = e(this);
            a.attr("data-slide-go-to", o),
              o++,
              a.hasClass("active") &&
                e(i).slick("slickGoTo", a.data("slide-go-to")),
              e(i).on("beforeChange", function (e, a, n, i) {
                t
                  .find(s.tabButton + '[data-slide-go-to="' + i + '"]')
                  .addClass("active")
                  .siblings()
                  .removeClass("active"),
                  r();
              });
          });
        }
        function r() {
          var i = t.find(s.tabButton + ".active"),
            o = i.css("height"),
            r = i.css("width"),
            l = i.position().top + "px",
            c = i.position().left + "px";
          n.get(0).style.setProperty("--height-set", o),
            n.get(0).style.setProperty("--width-set", r),
            n.get(0).style.setProperty("--pos-y", l),
            n.get(0).style.setProperty("--pos-x", c),
            e(a).first().position().left == i.position().left
              ? n.addClass("start").removeClass("center").removeClass("end")
              : e(a).last().position().left == i.position().left
              ? n.addClass("end").removeClass("center").removeClass("start")
              : n.addClass("center").removeClass("start").removeClass("end");
        }
        r();
      });
    }),
    e(".testi-card-tab").length &&
      e(".testi-card-tab").asTab({ sliderTab: !0, tabButton: ".tab-btn" }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          s = t.data("top"),
          a = t.data("right"),
          n = t.data("bottom"),
          i = t.data("left");
        t.css({ top: s, right: a, bottom: n, left: i })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    e(".price_slider").slider({
      range: !0,
      min: 10,
      max: 100,
      values: [10, 75],
      slide: function (t, s) {
        e(".from").text("$" + s.values[0]), e(".to").text("$" + s.values[1]);
      },
    }),
    e(".from").text("$" + e(".price_slider").slider("values", 0)),
    e(".to").text("$" + e(".price_slider").slider("values", 1)),
    e(".tilt-active").tilt({ maxTilt: 7, perspective: 1e3 }),
    (e.fn.indicator = function () {
      var t = e(this),
        s = t.find("a"),
        a = t.find("button");
      t.append('<span class="indicator"></span>');
      var n = t.find(".indicator");
      if (s.length) var i = s;
      else if (a.length) i = a;
      function o() {
        var s = t.find(".active"),
          a = s.css("height"),
          i = s.css("width"),
          o = s.position().top + "px",
          r = s.position().left + "px";
        e(window).on("resize", function () {
          (o = s.position().top + "px"), (r = s.position().left + "px");
        }),
          n.get(0).style.setProperty("--height-set", a),
          n.get(0).style.setProperty("--width-set", i),
          n.get(0).style.setProperty("--pos-y", o),
          n.get(0).style.setProperty("--pos-x", r);
      }
      i.on("click", function (t) {
        t.preventDefault(),
          e(this).addClass("active"),
          e(this).siblings(".active").removeClass("active"),
          o();
      }),
        o();
    }),
    e(".indicator-active").length && e(".indicator-active").indicator(),
    h(),
    e(window).scroll(h),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var s = e(this).siblings(".qty-input"),
          a = parseInt(s.val(), 10);
        isNaN(a) || s.val(a + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var s = e(this).siblings(".qty-input"),
          a = parseInt(s.val(), 10);
        !isNaN(a) && a > 1 && s.val(a - 1);
      });
    }),
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      !1
    ),
    (document.onkeydown = function (e) {
      return (
        123 != event.keyCode &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
        (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
        void 0
      );
    });
})(jQuery);










