/* ======================================================= 
 * Flipping Cards 3D
 * By David Blanco
 *
 * Contact: http://codecanyon.net/user/davidbo90
 *
 * Created: January 2013
 *
 * Copyright (c) 2013, David Blanco. All rights reserved.
 * Released under CodeCanyon License http://codecanyon.net/
 *
 * ======================================================= */
(function (a) {
    a(document).ready(function () {
        var g = false;

        function d() {
            var j = -1;
            if (navigator.appName == "Microsoft Internet Explorer") {
                var h = navigator.userAgent;
                var i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                if (i.exec(h) != null) {
                    j = parseFloat(RegExp.$1)
                }
            }
            return j
        }
        if (d() != -1) {
            g = true
        }
        var c = (function () {
            var j = document.createElement("div"),
                i = "Khtml Ms O Moz Webkit".split(" "),
                h = i.length;
            return function (k) {
                if (k in j.style) {
                    return true
                }
                k = k.replace(/^[a-z]/, function (l) {
                    return l.toUpperCase()
                });
                while (h--) {
                    if (i[h] + k in j.style) {
                        return true
                    }
                }
                return false
            }
        })();
        if (!c("backfaceVisibility")) {
            g = true
        }

        function b() {
            var m = document.createElement("div"),
                j = false,
                l = ["perspectiveProperty", "WebkitPerspective"];
            for (var k = l.length - 1; k >= 0; k--) {
                j = j ? j : m.style[l[k]] != undefined
            }
            if (j) {
                var h = document.createElement("style");
                h.textContent = "@media (-webkit-transform-3d){#test3d{height:3px}}";
                document.getElementsByTagName("head")[0].appendChild(h);
                m.id = "test3d";
                document.body.appendChild(m);
                j = m.offsetHeight === 3;
                h.parentNode.removeChild(h);
                m.parentNode.removeChild(m)
            }
            return j
        }
        is_chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && !! window.chrome;
        is_safari = navigator.userAgent.toLowerCase().indexOf("safari") > -1 && !window.chrome;
        if (is_chrome || is_safari) {
            if (!b()) {
                g = true
            }
        }
        if (g) {
            jQuery(".card-container").css({
                "-webkit-perspective": "none",
                "-moz-perspective": "none",
                "-o-perspective": "none",
                "-ms-perspective": "none",
                perspective: "none"
            });
            jQuery(".card").css({
                "-webkit-transition": "none",
                "-moz-transition": "none",
                "-o-transition": "none",
                "-ms-transition": "none",
                transition: "none",
                "-webkit-transform-style": "none",
                "-moz-transform-style": "none",
                "-o-transform-style": "none",
                "-ms-transform-style": "none",
                "transform-style": "none"
            });
            jQuery(".card").children("div").css({
                "-webkit-backface-visibility": "none",
                "-moz-backface-visibility": "none",
                "-o-backface-visibility": "none",
                "-ms-backface-visibility": "none",
                "backface-visibility": "none",
                "-webkit-transform": "none",
                "-moz-transform": "none",
                "-o-transform": "none",
                "-ms-transform": "none",
                transform: "none"
            });
            jQuery(".back").hide()
        }
      //  var e = "info.php";
       // var f = Math.floor(Math.random() * 11);
       // a.get(e + "?id=" + f, function (j) {
         //   if (j != (f * 8)) {
           //     return
            //}
            a(".over").on("mouseenter", function () {
                $this = a(this);
                k($this)
            });
            a(".over").on("mouseleave", function () {
                $this = a(this);
                k($this)
            });
            a(".click").on("click touch", function () {
                $this = a(this);
                k($this)
            });
            a(".card").on("click touch", ".cbutton", function (m) {
                m.preventDefault();
                $this = a(this);
                k($this.parents(".card"))
            });
            var i = Array();

            function k(n, m) {
                n.stop(true, true);
                if (n.data("autoflip") != undefined) {
                    i[m] = setTimeout(function () {
                        k(n, m)
                    }, n.data("autoflip"))
                }
                if (n.data("mouse") == "true") {
                    return
                }
                if (g) {
                    n.find("div").fadeToggle();
                    return
                }
                if (n.data("direction") === "right") {
                    n.toggleClass("flipping-right")
                } else {
                    if (n.data("direction") === "left") {
                        n.toggleClass("flipping-left")
                    } else {
                        if (n.data("direction") === "top") {
                            n.toggleClass("flipping-top")
                        } else {
                            if (n.data("direction") === "bottom") {
                                n.toggleClass("flipping-bottom")
                            }
                        }
                    }
                }
            }
            var h = a(".card[data-autoflip]");

            function l() {
                h.each(function (m) {
                    $this = a(this);
                    (function (o) {
                        var n = o.data("start");
                        if (n == undefined) {
                            n = o.data("autoflip")
                        }
                        i[m] = setTimeout(function () {
                            k(o, m)
                        }, n)
                    })($this)
                })
            }
            l();
            window.addEventListener("focus", function () {
                for (var m = 0; m < i.length; m++) {
                    clearTimeout(i[m])
                }
                h.removeClass("flipping-right");
                h.removeClass("flipping-left");
                h.removeClass("flipping-top");
                h.removeClass("flipping-bottom");
                l()
            }, false);
            h.on("mouseenter", function () {
                a(this).data("mouse", "true")
            });
            h.on("mouseleave", function () {
                a(this).data("mouse", "false")
            })
       // })
    })
})(jQuery);