/*
@license

dhtmlxGantt v.7.0.0 Standard

This version of dhtmlxGantt is distributed under GPL 2.0 license and can be legally used in GPL projects.

To use dhtmlxGantt in non-GPL projects (and get Pro version of the product), please obtain Commercial/Enterprise or Ultimate license on our site https://dhtmlx.com/docs/products/dhtmlxGantt/#licensing or contact us at sales@dhtmlx.com

(c) XB Software Ltd.

*/
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("dhtmlxgantt", [], e) : "object" == typeof exports ? exports.dhtmlxgantt = e() : t.dhtmlxgantt = e()
}(window, function () {
    return function (t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var r = e[i] = {i: i, l: !1, exports: {}};
            return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r, function (e) {
                return t[e]
            }.bind(null, r));
            return i
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "/codebase/", n(n.s = 240)
    }([function (t, e, n) {
        var i, r = n(3);
        t.exports = {
            copy: function t(e) {
                var n, i;
                if (e && "object" == typeof e) switch (!0) {
                    case r.isDate(e):
                        i = new Date(e);
                        break;
                    case r.isArray(e):
                        for (i = new Array(e.length), n = 0; n < e.length; n++) i[n] = t(e[n]);
                        break;
                    case r.isStringObject(e):
                        i = new String(e);
                        break;
                    case r.isNumberObject(e):
                        i = new Number(e);
                        break;
                    case r.isBooleanObject(e):
                        i = new Boolean(e);
                        break;
                    default:
                        for (n in i = function (t) {
                            return t.constructor.toString() !== {}.constructor.toString()
                        }(e) ? Object.create(e) : {}, e) Object.prototype.hasOwnProperty.apply(e, [n]) && (i[n] = t(e[n]))
                }
                return i || e
            }, defined: function (t) {
                return void 0 !== t
            }, mixin: function (t, e, n) {
                for (var i in e) (void 0 === t[i] || n) && (t[i] = e[i]);
                return t
            }, uid: function () {
                return i || (i = (new Date).valueOf()), ++i
            }, bind: function (t, e) {
                return t.bind ? t.bind(e) : function () {
                    return t.apply(e, arguments)
                }
            }, event: function (t, e, n, i) {
                t.addEventListener ? t.addEventListener(e, n, void 0 !== i && i) : t.attachEvent && t.attachEvent("on" + e, n)
            }, eventRemove: function (t, e, n, i) {
                t.removeEventListener ? t.removeEventListener(e, n, void 0 !== i && i) : t.detachEvent && t.detachEvent("on" + e, n)
            }
        }
    }, function (t, e) {
        function n(t) {
            var e = 0, n = 0, i = 0, r = 0;
            if (t.getBoundingClientRect) {
                var a = t.getBoundingClientRect(), o = document.body,
                    s = document.documentElement || document.body.parentNode || document.body,
                    l = window.pageYOffset || s.scrollTop || o.scrollTop,
                    c = window.pageXOffset || s.scrollLeft || o.scrollLeft, u = s.clientTop || o.clientTop || 0,
                    d = s.clientLeft || o.clientLeft || 0;
                e = a.top + l - u, n = a.left + c - d, i = document.body.offsetWidth - a.right, r = document.body.offsetHeight - a.bottom
            } else {
                for (; t;) e += parseInt(t.offsetTop, 10), n += parseInt(t.offsetLeft, 10), t = t.offsetParent;
                i = document.body.offsetWidth - t.offsetWidth - n, r = document.body.offsetHeight - t.offsetHeight - e
            }
            return {
                y: Math.round(e),
                x: Math.round(n),
                width: t.offsetWidth,
                height: t.offsetHeight,
                right: Math.round(i),
                bottom: Math.round(r)
            }
        }

        function i(t) {
            var e = !1, n = !1;
            if (window.getComputedStyle) {
                var i = window.getComputedStyle(t, null);
                e = i.display, n = i.visibility
            } else t.currentStyle && (e = t.currentStyle.display, n = t.currentStyle.visibility);
            return "none" != e && "hidden" != n
        }

        function r(t) {
            return !isNaN(t.getAttribute("tabindex")) && 1 * t.getAttribute("tabindex") >= 0
        }

        function a(t) {
            return !{a: !0, area: !0}[t.nodeName.loLowerCase()] || !!t.getAttribute("href")
        }

        function o(t) {
            return !{
                input: !0,
                select: !0,
                textarea: !0,
                button: !0,
                object: !0
            }[t.nodeName.toLowerCase()] || !t.hasAttribute("disabled")
        }

        function s(t) {
            if (!t) return "";
            var e = t.className || "";
            return e.baseVal && (e = e.baseVal), e.indexOf || (e = ""), u(e)
        }

        var l;

        function c(t) {
            return t.tagName ? t : (t = t || window.event).target || t.srcElement
        }

        function u(t) {
            return (String.prototype.trim || function () {
                return this.replace(/^\s+|\s+$/g, "")
            }).apply(t)
        }

        t.exports = {
            getNodePosition: n, getFocusableNodes: function (t) {
                for (var e = t.querySelectorAll(["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"].join(", ")), n = Array.prototype.slice.call(e, 0), s = 0; s < n.length; s++) {
                    var l = n[s];
                    (r(l) || o(l) || a(l)) && i(l) || (n.splice(s, 1), s--)
                }
                return n
            }, getScrollSize: function () {
                var t = document.createElement("div");
                t.style.cssText = "visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;", document.body.appendChild(t);
                var e = t.offsetWidth - t.clientWidth;
                return document.body.removeChild(t), e
            }, getClassName: s, addClassName: function (t, e) {
                e && -1 === t.className.indexOf(e) && (t.className += " " + e)
            }, removeClassName: function (t, e) {
                e = e.split(" ");
                for (var n = 0; n < e.length; n++) {
                    var i = new RegExp("\\s?\\b" + e[n] + "\\b(?![-_.])", "");
                    t.className = t.className.replace(i, "")
                }
            }, insertNode: function (t, e) {
                l || (l = document.createElement("div")), l.innerHTML = e;
                var n = l.firstChild;
                return t.appendChild(n), n
            }, removeNode: function (t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }, getChildNodes: function (t, e) {
                for (var n = t.childNodes, i = n.length, r = [], a = 0; a < i; a++) {
                    var o = n[a];
                    o.className && -1 !== o.className.indexOf(e) && r.push(o)
                }
                return r
            }, toNode: function (t) {
                return "string" == typeof t ? document.getElementById(t) || document.querySelector(t) || document.body : t || document.body
            }, locateClassName: function (t, e, n) {
                var i = c(t), r = "";
                for (void 0 === n && (n = !0); i;) {
                    if (r = s(i)) {
                        var a = r.indexOf(e);
                        if (a >= 0) {
                            if (!n) return i;
                            var o = 0 === a || !u(r.charAt(a - 1)),
                                l = a + e.length >= r.length || !u(r.charAt(a + e.length));
                            if (o && l) return i
                        }
                    }
                    i = i.parentNode
                }
                return null
            }, locateAttribute: function (t, e) {
                if (e) {
                    for (var n = c(t); n;) {
                        if (n.getAttribute && n.getAttribute(e)) return n;
                        n = n.parentNode
                    }
                    return null
                }
            }, getTargetNode: c, getRelativeEventPosition: function (t, e) {
                var i = document.documentElement, r = n(e);
                return {
                    x: t.clientX + i.scrollLeft - i.clientLeft - r.x + e.scrollLeft,
                    y: t.clientY + i.scrollTop - i.clientTop - r.y + e.scrollTop
                }
            }, isChildOf: function (t, e) {
                if (!t || !e) return !1;
                for (; t && t != e;) t = t.parentNode;
                return t === e
            }, hasClass: function (t, e) {
                return "classList" in t ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
            }, closest: function (t, e) {
                if (t.closest) return t.closest(e);
                if (t.matches || t.msMatchesSelector || t.webkitMatchesSelector) {
                    var n = t;
                    if (!document.documentElement.contains(n)) return null;
                    do {
                        if ((n.matches || n.msMatchesSelector || n.webkitMatchesSelector).call(n, e)) return n;
                        n = n.parentElement || n.parentNode
                    } while (null !== n && 1 === n.nodeType);
                    return null
                }
                return console.error("Your browser is not supported"), null
            }
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

            function i() {
                this.constructor = t
            }

            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }
    }, function (t, e) {
        var n = {
            second: 1,
            minute: 60,
            hour: 3600,
            day: 86400,
            week: 604800,
            month: 2592e3,
            quarter: 7776e3,
            year: 31536e3
        };

        function i(t) {
            return !(!t || "object" != typeof t) && !!(t.getFullYear && t.getMonth && t.getDate)
        }

        function r(t, e) {
            var n = [];
            if (t.filter) return t.filter(e);
            for (var i = 0; i < t.length; i++) e(t[i], i) && (n[n.length] = t[i]);
            return n
        }

        t.exports = {
            getSecondsInUnit: function (t) {
                return n[t] || n.hour
            }, forEach: function (t, e) {
                if (t.forEach) t.forEach(e); else for (var n = t.slice(), i = 0; i < n.length; i++) e(n[i], i)
            }, arrayMap: function (t, e) {
                if (t.map) return t.map(e);
                for (var n = t.slice(), i = [], r = 0; r < n.length; r++) i.push(e(n[r], r));
                return i
            }, arrayFind: function (t, e) {
                if (t.find) return t.find(e);
                for (var n = 0; n < t.length; n++) if (e(t[n], n)) return t[n]
            }, arrayFilter: r, arrayDifference: function (t, e) {
                return r(t, function (t, n) {
                    return !e(t, n)
                })
            }, arraySome: function (t, e) {
                if (0 === t.length) return !1;
                for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return !0;
                return !1
            }, hashToArray: function (t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(t[n]);
                return e
            }, sortArrayOfHash: function (t, e, n) {
                var i = function (t, e) {
                    return t < e
                };
                t.sort(function (t, r) {
                    return t[e] === r[e] ? 0 : n ? i(t[e], r[e]) : i(r[e], t[e])
                })
            }, throttle: function (t, e) {
                var n = !1;
                return function () {
                    n || (t.apply(null, arguments), n = !0, setTimeout(function () {
                        n = !1
                    }, e))
                }
            }, isArray: function (t) {
                return Array.isArray ? Array.isArray(t) : t && void 0 !== t.length && t.pop && t.push
            }, isDate: i, isValidDate: function (t) {
                return i(t) && !isNaN(t.getTime())
            }, isStringObject: function (t) {
                return t && "object" == typeof t && "function String() { [native code] }" === Function.prototype.toString.call(t.constructor)
            }, isNumberObject: function (t) {
                return t && "object" == typeof t && "function Number() { [native code] }" === Function.prototype.toString.call(t.constructor)
            }, isBooleanObject: function (t) {
                return t && "object" == typeof t && "function Boolean() { [native code] }" === Function.prototype.toString.call(t.constructor)
            }, delay: function (t, e) {
                var n, i = function () {
                    i.$cancelTimeout(), t.$pending = !0;
                    var r = Array.prototype.slice.call(arguments);
                    n = setTimeout(function () {
                        t.apply(this, r), i.$pending = !1
                    }, e)
                };
                return i.$pending = !1, i.$cancelTimeout = function () {
                    clearTimeout(n), t.$pending = !1
                }, i.$execute = function () {
                    t(), t.$cancelTimeout()
                }, i
            }, objectKeys: function (t) {
                if (Object.keys) return Object.keys(t);
                var e, n = [];
                for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
                return n
            }, isEventable: function (t) {
                return t.attachEvent && t.detachEvent
            }
        }
    }, function (t, e) {
        var n = function () {
            this._silent_mode = !1, this.listeners = {}
        };
        n.prototype = {
            _silentStart: function () {
                this._silent_mode = !0
            }, _silentEnd: function () {
                this._silent_mode = !1
            }
        };
        var i = function (t) {
            var e = {}, n = 0, i = function () {
                var n = !0;
                for (var i in e) {
                    var r = e[i].apply(t, arguments);
                    n = n && r
                }
                return n
            };
            return i.addEvent = function (t, r) {
                if ("function" == typeof t) {
                    var a;
                    if (r && r.id ? a = r.id : (a = n, n++), r && r.once) {
                        var o = t;
                        t = function () {
                            o(), i.removeEvent(a)
                        }
                    }
                    return e[a] = t, a
                }
                return !1
            }, i.removeEvent = function (t) {
                delete e[t]
            }, i.clear = function () {
                e = {}
            }, i
        };
        t.exports = function (t) {
            var e = new n;
            t.attachEvent = function (t, n, r) {
                t = "ev_" + t.toLowerCase(), e.listeners[t] || (e.listeners[t] = i(this)), r && r.thisObject && (n = n.bind(r.thisObject));
                var a = t + ":" + e.listeners[t].addEvent(n, r);
                return r && r.id && (a = r.id), a
            }, t.attachAll = function (t) {
                this.attachEvent("listen_all", t)
            }, t.callEvent = function (t, n) {
                if (e._silent_mode) return !0;
                var i = "ev_" + t.toLowerCase(), r = e.listeners;
                return r.ev_listen_all && r.ev_listen_all.apply(this, [t].concat(n)), !r[i] || r[i].apply(this, n)
            }, t.checkEvent = function (t) {
                return !!e.listeners["ev_" + t.toLowerCase()]
            }, t.detachEvent = function (t) {
                if (t) {
                    var n = e.listeners;
                    for (var i in n) n[i].removeEvent(t);
                    var r = t.split(":");
                    if (n = e.listeners, 2 === r.length) {
                        var a = r[0], o = r[1];
                        n[a] && n[a].removeEvent(o)
                    }
                }
            }, t.detachAllEvents = function () {
                for (var t in e.listeners) e.listeners[t].clear()
            }
        }
    }, function (t, e) {
        function n() {
            console.log("Method is not implemented.")
        }

        function i() {
        }

        i.prototype.render = n, i.prototype.set_value = n, i.prototype.get_value = n, i.prototype.focus = n, t.exports = function (t) {
            return i
        }
    }, function (t, e) {
        t.exports = function (t, e, n, i) {
            var r = e.$getConfig().row_height;
            return {start: Math.max(0, Math.floor(i.y / r) - 5), end: Math.min(n.count(), Math.ceil(i.y_end / r) + 5)}
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = function () {
            };
            return e.prototype = {
                show: function (t, e, n, i) {
                }, hide: function () {
                }, set_value: function (t, e, n, i) {
                    this.get_input(i).value = t
                }, get_value: function (t, e, n) {
                    return this.get_input(n).value || ""
                }, is_changed: function (t, e, n, i) {
                    var r = this.get_value(e, n, i);
                    return r && t && r.valueOf && t.valueOf ? r.valueOf() != t.valueOf() : r != t
                }, is_valid: function (t, e, n, i) {
                    return !0
                }, save: function (t, e, n) {
                }, get_input: function (t) {
                    return t.querySelector("input")
                }, focus: function (t) {
                    var e = this.get_input(t);
                    e && (e.focus && e.focus(), e.select && e.select())
                }
            }, e
        }
    }, function (t, e, n) {
        var i = n(9);
        t.exports = function (t) {
            return i.isNode || !t.$root
        }
    }, function (t, e) {
        var n = "undefined" != typeof window, i = {
            isIE: n && (navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0),
            isIE6: n && !XMLHttpRequest && navigator.userAgent.indexOf("MSIE") >= 0,
            isIE7: n && navigator.userAgent.indexOf("MSIE 7.0") >= 0 && navigator.userAgent.indexOf("Trident") < 0,
            isIE8: n && navigator.userAgent.indexOf("MSIE 8.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0,
            isOpera: n && navigator.userAgent.indexOf("Opera") >= 0,
            isChrome: n && navigator.userAgent.indexOf("Chrome") >= 0,
            isKHTML: n && (navigator.userAgent.indexOf("Safari") >= 0 || navigator.userAgent.indexOf("Konqueror") >= 0),
            isFF: n && navigator.userAgent.indexOf("Firefox") >= 0,
            isIPad: n && navigator.userAgent.search(/iPad/gi) >= 0,
            isEdge: n && -1 != navigator.userAgent.indexOf("Edge"),
            isNode: !n || "undefined" == typeof navigator
        };
        t.exports = i
    }, function (t, e, n) {
        var i = n(0), r = n(4), a = n(1), o = function () {
            "use strict";

            function t(t, e, n, o) {
                t && (this.$container = a.toNode(t), this.$parent = t), this.$config = i.mixin(e, {headerHeight: 33}), this.$gantt = o, this.$domEvents = o._createDomEventScope(), this.$id = e.id || "c" + i.uid(), this.$name = "cell", this.$factory = n, r(this)
            }

            return t.prototype.destructor = function () {
                this.$parent = this.$container = this.$view = null, this.$gantt.$services.getService("mouseEvents").detach("click", "gantt_header_arrow", this._headerClickHandler), this.$domEvents.detachAll(), this.callEvent("onDestroy", []), this.detachAllEvents()
            }, t.prototype.cell = function (t) {
                return null
            }, t.prototype.scrollTo = function (t, e) {
                1 * t == t && (this.$view.scrollLeft = t), 1 * e == e && (this.$view.scrollTop = e)
            }, t.prototype.clear = function () {
                this.getNode().innerHTML = "", this.getNode().className = "gantt_layout_content", this.getNode().style.padding = "0"
            }, t.prototype.resize = function (t) {
                if (this.$parent) return this.$parent.resize(t);
                !1 === t && (this.$preResize = !0);
                var e = this.$container, n = e.offsetWidth, i = e.offsetHeight, r = this.getSize();
                e === document.body && (n = document.body.offsetWidth, i = document.body.offsetHeight), n < r.minWidth && (n = r.minWidth), n > r.maxWidth && (n = r.maxWidth), i < r.minHeight && (i = r.minHeight), i > r.maxHeight && (i = r.maxHeight), this.setSize(n, i), this.$preResize, this.$preResize = !1
            }, t.prototype.hide = function () {
                this._hide(!0), this.resize()
            }, t.prototype.show = function (t) {
                this._hide(!1), t && this.$parent && this.$parent.show(), this.resize()
            }, t.prototype._hide = function (t) {
                if (!0 === t && this.$view.parentNode) this.$view.parentNode.removeChild(this.$view); else if (!1 === t && !this.$view.parentNode) {
                    var e = this.$parent.cellIndex(this.$id);
                    this.$parent.moveView(this, e)
                }
                this.$config.hidden = t
            }, t.prototype.$toHTML = function (t, e) {
                void 0 === t && (t = ""), e = [e || "", this.$config.css || ""].join(" ");
                var n = this.$config, i = "";
                n.raw ? t = "string" == typeof n.raw ? n.raw : "" : (t || (t = "<div class='gantt_layout_content' " + (e ? " class='" + e + "' " : "") + " >" + (n.html || "") + "</div>"), n.header && (i = "<div class='gantt_layout_header'>" + (n.canCollapse ? "<div class='gantt_layout_header_arrow'></div>" : "") + "<div class='gantt_layout_header_content'>" + n.header + "</div></div>"));
                return "<div class='gantt_layout_cell " + e + "' data-cell-id='" + this.$id + "'>" + i + t + "</div>"
            }, t.prototype.$fill = function (t, e) {
                this.$view = t, this.$parent = e, this.init()
            }, t.prototype.getNode = function () {
                return this.$view.querySelector("gantt_layout_cell") || this.$view
            }, t.prototype.init = function () {
                var t = this;
                this._headerClickHandler = function (e) {
                    a.locateAttribute(e, "data-cell-id") == t.$id && t.toggle()
                }, this.$gantt.$services.getService("mouseEvents").delegate("click", "gantt_header_arrow", this._headerClickHandler), this.callEvent("onReady", [])
            }, t.prototype.toggle = function () {
                this.$config.collapsed = !this.$config.collapsed, this.resize()
            }, t.prototype.getSize = function () {
                var t = {
                    height: this.$config.height || 0,
                    width: this.$config.width || 0,
                    gravity: this.$config.gravity || 1,
                    minHeight: this.$config.minHeight || 0,
                    minWidth: this.$config.minWidth || 0,
                    maxHeight: this.$config.maxHeight || 1e5,
                    maxWidth: this.$config.maxWidth || 1e5
                };
                if (this.$config.collapsed) {
                    var e = "x" === this.$config.mode;
                    t[e ? "width" : "height"] = t[e ? "maxWidth" : "maxHeight"] = this.$config.headerHeight
                }
                return t
            }, t.prototype.getContentSize = function () {
                var t = this.$lastSize.contentX;
                t !== 1 * t && (t = this.$lastSize.width);
                var e = this.$lastSize.contentY;
                return e !== 1 * e && (e = this.$lastSize.height), {width: t, height: e}
            }, t.prototype._getBorderSizes = function () {
                var t = {top: 0, right: 0, bottom: 0, left: 0, horizontal: 0, vertical: 0};
                return this._currentBorders && (this._currentBorders[this._borders.left] && (t.left = 1, t.horizontal++), this._currentBorders[this._borders.right] && (t.right = 1, t.horizontal++), this._currentBorders[this._borders.top] && (t.top = 1, t.vertical++), this._currentBorders[this._borders.bottom] && (t.bottom = 1, t.vertical++)), t
            }, t.prototype.setSize = function (t, e) {
                this.$view.style.width = t + "px", this.$view.style.height = e + "px";
                var n = this._getBorderSizes(), i = e - n.vertical, r = t - n.horizontal;
                this.$lastSize = {
                    x: t,
                    y: e,
                    contentX: r,
                    contentY: i
                }, this.$config.header ? this._sizeHeader() : this._sizeContent()
            }, t.prototype._borders = {
                left: "gantt_layout_cell_border_left",
                right: "gantt_layout_cell_border_right",
                top: "gantt_layout_cell_border_top",
                bottom: "gantt_layout_cell_border_bottom"
            }, t.prototype._setBorders = function (t, e) {
                e || (e = this);
                var n = e.$view;
                for (var i in this._borders) a.removeClassName(n, this._borders[i]);
                "string" == typeof t && (t = [t]);
                var r = {};
                for (i = 0; i < t.length; i++) a.addClassName(n, t[i]), r[t[i]] = !0;
                e._currentBorders = r
            }, t.prototype._sizeContent = function () {
                var t = this.$view.childNodes[0];
                t && "gantt_layout_content" == t.className && (t.style.height = this.$lastSize.contentY + "px")
            }, t.prototype._sizeHeader = function () {
                var t = this.$lastSize;
                t.contentY -= this.$config.headerHeight;
                var e = this.$view.childNodes[0], n = this.$view.childNodes[1], i = "x" === this.$config.mode;
                if (this.$config.collapsed) if (n.style.display = "none", i) {
                    e.className = "gantt_layout_header collapsed_x", e.style.width = t.y + "px";
                    var r = Math.floor(t.y / 2 - t.x / 2);
                    e.style.transform = "rotate(90deg) translate(" + r + "px, " + r + "px)", n.style.display = "none"
                } else e.className = "gantt_layout_header collapsed_y"; else e.className = i ? "gantt_layout_header" : "gantt_layout_header vertical", e.style.width = "auto", e.style.transform = "", n.style.display = "", n.style.height = t.contentY + "px";
                e.style.height = this.$config.headerHeight + "px"
            }, t
        }();
        t.exports = o
    }, function (t, e, n) {
        var i = n(2), r = n(25);
        t.exports = function (t) {
            var e = n(5)(t);

            function a() {
                return e.apply(this, arguments) || this
            }

            return i(a, e), a.prototype.render = function (t) {
                var e = "<div class='gantt_cal_ltext' style='height:" + ((t.height || "23") + "px") + ";'>";
                return e += r.getHtmlSelect(t.options, [{key: "style", value: "width:100%;"}]), e += "</div>"
            }, a.prototype.set_value = function (t, e, n, i) {
                var r = t.firstChild;
                !r._dhx_onchange && i.onchange && (r.onchange = i.onchange, r._dhx_onchange = !0), void 0 === e && (e = (r.options[0] || {}).value), r.value = e || ""
            }, a.prototype.get_value = function (t) {
                return t.firstChild.value
            }, a.prototype.focus = function (e) {
                var n = e.firstChild;
                t._focus(n, !0)
            }, a
        }
    }, function (t, e) {
        t.exports = function (t) {
            return t.config.smart_rendering && t._smart_render
        }
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e, n) {
        (function (e) {
            var n;
            n = "undefined" != typeof window ? window : e, t.exports = n
        }).call(this, n(13))
    }, function (t, e, n) {
        var i = n(0);
        t.exports = {
            createDropTargetObject: function (t) {
                var e = {
                    targetParent: null,
                    targetIndex: 0,
                    targetId: null,
                    child: !1,
                    nextSibling: !1,
                    prevSibling: !1
                };
                return t && i.mixin(e, t, !0), e
            }, nextSiblingTarget: function (t, e, n) {
                var i = this.createDropTargetObject();
                return i.targetId = e, i.nextSibling = !0, i.targetParent = n.getParent(i.targetId), i.targetIndex = n.getBranchIndex(i.targetId), (n.getParent(t) != i.targetParent || i.targetIndex < n.getBranchIndex(t)) && (i.targetIndex += 1), i
            }, prevSiblingTarget: function (t, e, n) {
                var i = this.createDropTargetObject();
                return i.targetId = e, i.prevSibling = !0, i.targetParent = n.getParent(i.targetId), i.targetIndex = n.getBranchIndex(i.targetId), n.getParent(t) == i.targetParent && i.targetIndex > n.getBranchIndex(t) && (i.targetIndex -= 1), i
            }, firstChildTarget: function (t, e, n) {
                var i = this.createDropTargetObject();
                return i.targetId = e, i.targetParent = i.targetId, i.targetIndex = 0, i.child = !0, i
            }, lastChildTarget: function (t, e, n) {
                var i = n.getChildren(e), r = this.createDropTargetObject();
                return r.targetId = i[i.length - 1], r.targetParent = e, r.targetIndex = i.length, r.nextSibling = !0, r
            }
        }
    }, function (t, e, n) {
        var i = n(12);
        t.exports = function (t, e, n, r) {
            var a = e.width[t];
            if (a <= 0) return !1;
            if (!r.config.smart_rendering || i(r)) return !0;
            var o = e.left[t] - a, s = e.left[t] + a;
            return o <= n.x_end && s >= n.x
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            var n = 0, i = t.left.length - 1;
            if (e) for (var r = 0; r < t.left.length; r++) {
                var a = t.left[r];
                if (a < e.x && (n = r), a > e.x_end) {
                    i = r;
                    break
                }
            }
            return {start: n, end: i}
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            var n = e.$getConfig();
            return {top: e.getItemTop(t.id), height: n.row_height, left: 0, right: 1 / 0}
        }
    }, function (t, e, n) {
        var i = n(22), r = n(4), a = n(0), o = n(32), s = n(99), l = function (t, e, n, s) {
            this.$config = a.mixin({}, e || {}), this.$scaleHelper = new i(s), this.$gantt = s, this._posFromDateCache = {}, this._timelineDragScroll = null, a.mixin(this, o()), r(this)
        };

        function c(t, e) {
            for (var n, i, r, a = 0, o = t.length - 1; a <= o;) if (i = +t[n = Math.floor((a + o) / 2)], r = +t[n - 1], i < e) a = n + 1; else {
                if (!(i > e)) {
                    for (; +t[n] == +t[n + 1];) n++;
                    return n
                }
                if (!isNaN(r) && r < e) return n - 1;
                o = n - 1
            }
            return t.length - 1
        }

        l.prototype = {
            init: function (t) {
                t.innerHTML += "<div class='gantt_task' style='width:inherit;height:inherit;'></div>", this.$task = t.childNodes[0], this.$task.innerHTML = "<div class='gantt_task_scale'></div><div class='gantt_data_area'></div>", this.$task_scale = this.$task.childNodes[0], this.$task_data = this.$task.childNodes[1], this.$task_data.innerHTML = "<div class='gantt_task_bg'></div><div class='gantt_links_area'></div><div class='gantt_bars_area'></div>", this.$task_bg = this.$task_data.childNodes[0], this.$task_links = this.$task_data.childNodes[1], this.$task_bars = this.$task_data.childNodes[2], this._tasks = {
                    col_width: 0,
                    width: [],
                    full_width: 0,
                    trace_x: [],
                    rendered: {}
                };
                var e = this.$getConfig(), n = e[this.$config.bind + "_attribute"],
                    i = e[this.$config.bindLinks + "_attribute"];
                !n && this.$config.bind && (n = "data-" + this.$config.bind + "-id"), !i && this.$config.bindLinks && (i = "data-" + this.$config.bindLinks + "-id"), this.$config.item_attribute = n || null, this.$config.link_attribute = i || null;
                var r = this._createLayerConfig();
                this.$config.layers || (this.$config.layers = r.tasks), this.$config.linkLayers || (this.$config.linkLayers = r.links), this._attachLayers(this.$gantt), this.callEvent("onReady", []), this.$gantt.ext.dragTimeline && (this._timelineDragScroll = this.$gantt.ext.dragTimeline.create(), this._timelineDragScroll.attach(this))
            }, setSize: function (t, e) {
                var n = this.$getConfig();
                if (1 * t === t && (this.$config.width = t), 1 * e === e) {
                    this.$config.height = e;
                    var i = Math.max(this.$config.height - n.scale_height);
                    this.$task_data.style.height = i + "px"
                }
                if (this.refresh(), this.$task_bg.style.backgroundImage = "", n.smart_rendering && this.$config.rowStore) {
                    var r = this.$config.rowStore;
                    this.$task_bg.style.height = n.row_height * r.countVisible() + "px"
                } else this.$task_bg.style.height = "";
                for (var a = this._tasks, o = this.$task_data.childNodes, s = 0, l = o.length; s < l; s++) {
                    var c = o[s];
                    c.hasAttribute("data-layer") && c.style && (c.style.width = a.full_width + "px")
                }
            }, isVisible: function () {
                return this.$parent && this.$parent.$config ? !this.$parent.$config.hidden : this.$task.offsetWidth
            }, getSize: function () {
                var t = this.$getConfig(), e = this.$config.rowStore, n = e ? t.row_height * e.countVisible() : 0,
                    i = this.isVisible() ? this._tasks.full_width : 0;
                return {
                    x: this.isVisible() ? this.$config.width : 0,
                    y: this.isVisible() ? this.$config.height : 0,
                    contentX: this.isVisible() ? i : 0,
                    contentY: this.isVisible() ? t.scale_height + n : 0,
                    scrollHeight: this.isVisible() ? n : 0,
                    scrollWidth: this.isVisible() ? i : 0
                }
            }, scrollTo: function (t, e) {
                if (this.isVisible()) {
                    var n = !1;
                    this.$config.scrollTop = this.$config.scrollTop || 0, this.$config.scrollLeft = this.$config.scrollLeft || 0, 1 * e === e && (this.$config.scrollTop = e, this.$task_data.scrollTop = this.$config.scrollTop, n = !0), 1 * t === t && (this.$task.scrollLeft = t, this.$config.scrollLeft = this.$task.scrollLeft, this._refreshScales(), n = !0), n && this.callEvent("onScroll", [this.$config.scrollLeft, this.$config.scrollTop])
                }
            }, _refreshScales: function () {
                if (this.isVisible() && this.$getConfig().smart_scales) {
                    var t = this.getViewPort(), e = this._scales;
                    this.$task_scale.innerHTML = this._getScaleChunkHtml(e, t.x, t.x_end)
                }
            }, getViewPort: function () {
                var t = this.$config.scrollLeft || 0, e = this.$config.scrollTop || 0, n = this.$config.height || 0,
                    i = this.$config.width || 0;
                return {y: e, y_end: e + n, x: t, x_end: t + i, height: n, width: i}
            }, _createLayerConfig: function () {
                var t = this, e = function () {
                    return t.isVisible()
                };
                return {
                    tasks: [{
                        expose: !0,
                        renderer: this.$gantt.$ui.layers.taskBar(),
                        container: this.$task_bars,
                        filter: [e]
                    }, {
                        renderer: this.$gantt.$ui.layers.taskSplitBar(),
                        filter: [e],
                        container: this.$task_bars,
                        append: !0
                    }, {renderer: this.$gantt.$ui.layers.taskBg(), container: this.$task_bg, filter: [e]}],
                    links: [{
                        expose: !0,
                        renderer: this.$gantt.$ui.layers.link(),
                        container: this.$task_links,
                        filter: [e]
                    }]
                }
            }, _attachLayers: function (t) {
                this._taskLayers = [], this._linkLayers = [];
                var e = this, n = this.$gantt.$services.getService("layers");
                if (this.$config.bind) {
                    this._bindStore();
                    var i = n.getDataRender(this.$config.bind);
                    i || (i = n.createDataRender({
                        name: this.$config.bind, defaultContainer: function () {
                            return e.$task_data
                        }
                    })), i.container = function () {
                        return e.$task_data
                    };
                    for (var r = this.$config.layers, a = 0; r && a < r.length; a++) {
                        "string" == typeof (c = r[a]) && (c = this.$gantt.$ui.layers[c]()), ("function" == typeof c || c && c.render && c.update) && (c = {renderer: c}), c.view = this;
                        var o = i.addLayer(c);
                        this._taskLayers.push(o), c.expose && (this._taskRenderer = i.getLayer(o))
                    }
                    this._initStaticBackgroundRender()
                }
                if (this.$config.bindLinks) {
                    e.$config.linkStore = e.$gantt.getDatastore(e.$config.bindLinks);
                    var s = n.getDataRender(this.$config.bindLinks);
                    s || (s = n.createDataRender({
                        name: this.$config.bindLinks, defaultContainer: function () {
                            return e.$task_data
                        }
                    }));
                    var l = this.$config.linkLayers;
                    for (a = 0; l && a < l.length; a++) {
                        var c;
                        "string" == typeof c && (c = this.$gantt.$ui.layers[c]()), (c = l[a]).view = this;
                        var u = s.addLayer(c);
                        this._taskLayers.push(u), l[a].expose && (this._linkRenderer = s.getLayer(u))
                    }
                }
            }, _initStaticBackgroundRender: function () {
                var t = this, e = s.create(), n = t.$config.rowStore;
                n && (this._staticBgHandler = n.attachEvent("onStoreUpdated", function (n, i, r) {
                    if (null === n && t.isVisible()) {
                        var a = t.$getConfig();
                        if (a.static_background) {
                            var o = t.$gantt.getDatastore(t.$config.bind), s = t.$task_bg_static;
                            s || ((s = document.createElement("div")).className = "gantt_task_bg", t.$task_bg_static = s, t.$task_bg.nextSibling ? t.$task_data.insertBefore(s, t.$task_bg.nextSibling) : t.$task_data.appendChild(s)), o && e.render(s, a, t.getScale(), a.row_height * o.countVisible())
                        } else a.static_background && t.$task_bg_static && t.$task_bg_static.parentNode && t.$task_bg_static.parentNode.removeChild(t.$task_bg_static)
                    }
                }), this.attachEvent("onDestroy", function () {
                    e.destroy()
                }), this._initStaticBackgroundRender = function () {
                })
            }, _clearLayers: function (t) {
                var e = this.$gantt.$services.getService("layers"), n = e.getDataRender(this.$config.bind),
                    i = e.getDataRender(this.$config.bindLinks);
                if (this._taskLayers) for (var r = 0; r < this._taskLayers.length; r++) n.removeLayer(this._taskLayers[r]);
                if (this._linkLayers) for (r = 0; r < this._linkLayers.length; r++) i.removeLayer(this._linkLayers[r]);
                this._linkLayers = [], this._taskLayers = []
            }, _render_tasks_scales: function () {
                var t = this.$getConfig(), e = "", n = 0, i = 0, r = this.$gantt.getState();
                if (this.isVisible()) {
                    var a = this.$scaleHelper, o = this._getScales();
                    i = t.scale_height;
                    var s = this.$config.width;
                    "x" != t.autosize && "xy" != t.autosize || (s = Math.max(t.autosize_min_width, 0));
                    var l = a.prepareConfigs(o, t.min_column_width, s, i - 1, r.min_date, r.max_date, t.rtl),
                        c = this._tasks = l[l.length - 1];
                    this._scales = l, this._posFromDateCache = {}, e = this._getScaleChunkHtml(l, 0, this.$config.width), n = c.full_width + "px", i += "px"
                }
                this.$task_scale.style.height = i, this.$task_data.style.width = this.$task_scale.style.width = n, this.$task_scale.innerHTML = e
            }, _getScaleChunkHtml: function (t, e, n) {
                for (var i = [], r = this.$gantt.templates.scale_row_class, a = 0; a < t.length; a++) {
                    var o = "gantt_scale_line", s = r(t[a]);
                    s && (o += " " + s), i.push('<div class="' + o + '" style="height:' + t[a].height + "px;position:relative;line-height:" + t[a].height + 'px">' + this._prepareScaleHtml(t[a], e, n) + "</div>")
                }
                return i.join("")
            }, _prepareScaleHtml: function (t, e, n) {
                var i = this.$getConfig(), r = this.$gantt.templates, a = [], o = null, s = null,
                    l = t.format || t.template || t.date;
                "string" == typeof l && (l = this.$gantt.date.date_to_str(l));
                var u = 0, d = t.count;
                !i.smart_scales || isNaN(e) || isNaN(n) || (u = c(t.left, e), d = c(t.left, n) + 1), s = t.css || function () {
                }, !t.css && i.inherit_scale_class && (s = r.scale_cell_class);
                for (var h = u; h < d && t.trace_x[h]; h++) {
                    o = new Date(t.trace_x[h]);
                    var f = l.call(this, o), _ = t.width[h], g = t.height, p = t.left[h], v = "", m = "", y = "";
                    if (_) {
                        v = "width:" + _ + "px;height:" + g + "px;" + (i.smart_scales ? "position:absolute;left:" + p + "px" : ""), y = "gantt_scale_cell" + (h == t.count - 1 ? " gantt_last_cell" : ""), (m = s.call(this, o)) && (y += " " + m);
                        var k = "<div class='" + y + "'" + this.$gantt._waiAria.getTimelineCellAttr(f) + " style='" + v + "'>" + f + "</div>";
                        a.push(k)
                    }
                }
                return a.join("")
            }, dateFromPos: function (t) {
                var e = this._tasks;
                if (t < 0 || t > e.full_width || !e.full_width) return null;
                var n = c(this._tasks.left, t), i = this._tasks.left[n], r = e.width[n] || e.col_width, a = 0;
                r && (a = (t - i) / r, e.rtl && (a = 1 - a));
                var o = 0;
                return a && (o = this._getColumnDuration(e, e.trace_x[n])), new Date(e.trace_x[n].valueOf() + Math.round(a * o))
            }, posFromDate: function (t) {
                if (!this.isVisible()) return 0;
                if (!t) return 0;
                var e = String(t.valueOf());
                if (void 0 !== this._posFromDateCache[e]) return this._posFromDateCache[e];
                var n = this.columnIndexByDate(t);
                this.$gantt.assert(n >= 0, "Invalid day index");
                var i = Math.floor(n), r = n % 1, a = this._tasks.left[Math.min(i, this._tasks.width.length - 1)];
                i == this._tasks.width.length && (a += this._tasks.width[this._tasks.width.length - 1]), r && (i < this._tasks.width.length ? a += this._tasks.width[i] * (r % 1) : a += 1);
                var o = Math.round(a);
                return this._posFromDateCache[e] = o, Math.round(o)
            }, _getNextVisibleColumn: function (t, e, n) {
                for (var i = +e[t], r = t; n[i];) i = +e[++r];
                return r
            }, _getPrevVisibleColumn: function (t, e, n) {
                for (var i = +e[t], r = t; n[i];) i = +e[--r];
                return r
            }, _getClosestVisibleColumn: function (t, e, n) {
                var i = this._getNextVisibleColumn(t, e, n);
                return e[i] || (i = this._getPrevVisibleColumn(t, e, n)), i
            }, columnIndexByDate: function (t) {
                var e = new Date(t).valueOf(), n = this._tasks.trace_x_ascending, i = this._tasks.ignore_x,
                    r = this.$gantt.getState();
                if (e <= r.min_date) return this._tasks.rtl ? n.length : 0;
                if (e >= r.max_date) return this._tasks.rtl ? 0 : n.length;
                var a = c(n, e), o = this._getClosestVisibleColumn(a, n, i), s = n[o],
                    l = this._tasks.trace_index_transition;
                if (!s) return l ? l[0] : 0;
                var u = (t - n[o]) / this._getColumnDuration(this._tasks, n[o]);
                return l ? l[o] + (1 - u) : o + u
            }, getItemPosition: function (t, e, n) {
                var i, r, a;
                return this._tasks.rtl ? (r = this.posFromDate(e || t.start_date), i = this.posFromDate(n || t.end_date)) : (i = this.posFromDate(e || t.start_date), r = this.posFromDate(n || t.end_date)), a = Math.max(r - i, 0), {
                    left: i,
                    top: this.getItemTop(t.id),
                    height: this.getItemHeight(),
                    width: a
                }
            }, getItemHeight: function () {
                var t = this.$getConfig(), e = t.task_height;
                if ("full" == e) {
                    var n = t.task_height_offset || 5;
                    e = t.row_height - n
                }
                return e = Math.min(e, t.row_height), Math.max(e, 0)
            }, getScale: function () {
                return this._tasks
            }, _getScales: function () {
                var t = this.$getConfig(), e = this.$scaleHelper, n = [e.primaryScale(t)].concat(e.getSubScales(t));
                return e.sortScales(n), n
            }, _getColumnDuration: function (t, e) {
                return this.$gantt.date.add(e, t.step, t.unit) - e
            }, _bindStore: function () {
                if (this.$config.bind) {
                    var t = this.$gantt.getDatastore(this.$config.bind);
                    if (this.$config.rowStore = t, t && !t._timelineCacheAttached) {
                        var e = this;
                        t._timelineCacheAttached = t.attachEvent("onBeforeFilter", function () {
                            e._resetTopPositionHeight()
                        })
                    }
                }
            }, _unbindStore: function () {
                if (this.$config.bind) {
                    var t = this.$gantt.getDatastore(this.$config.bind);
                    t._timelineCacheAttached && (t.detachEvent(t._timelineCacheAttached), t._timelineCacheAttached = !1)
                }
            }, refresh: function () {
                this._bindStore(), this.$config.bindLinks && (this.$config.linkStore = this.$gantt.getDatastore(this.$config.bindLinks)), this._resetTopPositionHeight(), this._initStaticBackgroundRender(), this._render_tasks_scales()
            }, destructor: function () {
                var t = this.$gantt;
                this._clearLayers(t), this._unbindStore(), this.$task = null, this.$task_scale = null, this.$task_data = null, this.$task_bg = null, this.$task_links = null, this.$task_bars = null, this.$gantt = null, this.$config.rowStore && (this.$config.rowStore.detachEvent(this._staticBgHandler), this.$config.rowStore = null), this.$config.linkStore && (this.$config.linkStore = null), this._timelineDragScroll && (this._timelineDragScroll.destructor(), this._timelineDragScroll = null), this.callEvent("onDestroy", []), this.detachAllEvents()
            }
        }, t.exports = l
    }, function (t, e) {
        t.exports = function (t) {
            var e = [];
            return {
                delegate: function (n, i, r, a) {
                    e.push([n, i, r, a]), t.$services.getService("mouseEvents").delegate(n, i, r, a)
                }, destructor: function () {
                    for (var n = t.$services.getService("mouseEvents"), i = 0; i < e.length; i++) {
                        var r = e[i];
                        n.detach(r[0], r[1], r[2], r[3])
                    }
                    e = []
                }
            }
        }
    }, function (t, e, n) {
        var i = n(1), r = n(0), a = n(4), o = n(172), s = n(32), l = n(171).default, c = function (t, e, n, i) {
            this.$config = r.mixin({}, e || {}), this.$gantt = i, this.$parent = t, a(this), this.$state = {}, r.mixin(this, s())
        };
        c.prototype = {
            init: function (t) {
                var e = this.$gantt, i = e._waiAria.gridAttrString(), r = e._waiAria.gridDataAttrString(),
                    a = this.$getConfig(), s = a.reorder_grid_columns || !1;
                void 0 !== this.$config.reorder_grid_columns && (s = this.$config.reorder_grid_columns), t.innerHTML = "<div class='gantt_grid' style='height:inherit;width:inherit;' " + i + "></div>", this.$grid = t.childNodes[0], this.$grid.innerHTML = "<div class='gantt_grid_scale' " + e._waiAria.gridScaleRowAttrString() + "></div><div class='gantt_grid_data' " + r + "></div>", this.$grid_scale = this.$grid.childNodes[0], this.$grid_data = this.$grid.childNodes[1];
                var c = a[this.$config.bind + "_attribute"];
                if (!c && this.$config.bind && (c = "data-" + this.$config.bind + "-id"), this.$config.item_attribute = c || null, !this.$config.layers) {
                    var u = this._createLayerConfig();
                    this.$config.layers = u
                }
                var d = o(e, this);
                d.init(), this._renderHeaderResizers = d.doOnRender, this._mouseDelegates = n(20)(e), this._addLayers(this.$gantt), this._initEvents(), s && (this._columnDND = new l(e, this), this._columnDND.init()), this.callEvent("onReady", [])
            }, _validateColumnWidth: function (t, e) {
                var n = t[e];
                if (n && "*" != n) {
                    var i = this.$gantt, r = 1 * n;
                    isNaN(r) ? i.assert(!1, "Wrong " + e + " value of column " + t.name) : t[e] = r
                }
            }, setSize: function (t, e) {
                this.$config.width = this.$state.width = t, this.$config.height = this.$state.height = e;
                for (var n, i = this.getGridColumns(), r = 0, a = (u = this.$getConfig()).grid_elastic_columns, o = 0, s = i.length; o < s; o++) this._validateColumnWidth(i[o], "min_width"), this._validateColumnWidth(i[o], "max_width"), this._validateColumnWidth(i[o], "width"), r += 1 * i[o].width;
                if (!isNaN(r) && this.$config.scrollable || (r = n = this._setColumnsWidth(t + 1)), this.$config.scrollable && a && !isNaN(r)) {
                    var l = 0;
                    i.forEach(function (t) {
                        l += t.min_width || u.min_grid_column_width
                    });
                    var c = Math.max(l, t);
                    r = this._setColumnsWidth(c), n = t
                }
                this.$config.scrollable ? (this.$grid_scale.style.width = r + "px", this.$grid_data.style.width = r + "px") : (this.$grid_scale.style.width = "inherit", this.$grid_data.style.width = "inherit"), this.$config.width -= 1;
                var u = this.$getConfig();
                n !== t && (void 0 !== n ? (u.grid_width = n, this.$config.width = n - 1) : isNaN(r) || (this._setColumnsWidth(r), u.grid_width = r, this.$config.width = r - 1));
                var d = Math.max(this.$state.height - u.scale_height, 0);
                this.$grid_data.style.height = d + "px", this.refresh()
            }, getSize: function () {
                var t = this.$getConfig(), e = this.$config.rowStore, n = e ? t.row_height * e.countVisible() : 0,
                    i = this._getGridWidth();
                return {
                    x: this.$state.width,
                    y: this.$state.height,
                    contentX: this.isVisible() ? i : 0,
                    contentY: this.isVisible() ? t.scale_height + n : 0,
                    scrollHeight: this.isVisible() ? n : 0,
                    scrollWidth: this.isVisible() ? i : 0
                }
            }, _bindStore: function () {
                if (this.$config.bind) {
                    var t = this.$gantt.getDatastore(this.$config.bind);
                    if (this.$config.rowStore = t, t && !t._gridCacheAttached) {
                        var e = this;
                        t._gridCacheAttached = t.attachEvent("onBeforeFilter", function () {
                            e._resetTopPositionHeight()
                        })
                    }
                }
            }, _unbindStore: function () {
                if (this.$config.bind) {
                    var t = this.$gantt.getDatastore(this.$config.bind);
                    t._gridCacheAttached && (t.detachEvent(t._gridCacheAttached), t._gridCacheAttached = !1)
                }
            }, refresh: function () {
                this._bindStore(), this._resetTopPositionHeight(), this._initSmartRenderingPlaceholder(), this._calculateGridWidth(), this._renderGridHeader()
            }, getViewPort: function () {
                var t = this.$config.scrollLeft || 0, e = this.$config.scrollTop || 0, n = this.$config.height || 0,
                    i = this.$config.width || 0;
                return {y: e, y_end: e + n, x: t, x_end: t + i, height: n, width: i}
            }, scrollTo: function (t, e) {
                if (this.isVisible()) {
                    var n = !1;
                    this.$config.scrollTop = this.$config.scrollTop || 0, this.$config.scrollLeft = this.$config.scrollLeft || 0, 1 * t == t && (this.$config.scrollLeft = this.$state.scrollLeft = this.$grid.scrollLeft = t, n = !0), 1 * e == e && (this.$config.scrollTop = this.$state.scrollTop = this.$grid_data.scrollTop = e, n = !0), n && this.callEvent("onScroll", [this.$config.scrollLeft, this.$config.scrollTop])
                }
            }, getColumnIndex: function (t) {
                for (var e = this.$getConfig().columns, n = 0; n < e.length; n++) if (e[n].name == t) return n;
                return null
            }, getColumn: function (t) {
                var e = this.getColumnIndex(t);
                return null === e ? null : this.$getConfig().columns[e]
            }, getGridColumns: function () {
                return this.$getConfig().columns.slice()
            }, isVisible: function () {
                return this.$parent && this.$parent.$config ? !this.$parent.$config.hidden : this.$grid.offsetWidth
            }, getItemHeight: function () {
                return this.$getConfig().row_height
            }, _createLayerConfig: function () {
                var t = this;
                return [{
                    renderer: this.$gantt.$ui.layers.gridLine(), container: this.$grid_data, filter: [function () {
                        return t.isVisible()
                    }]
                }]
            }, _addLayers: function (t) {
                if (this.$config.bind) {
                    this._taskLayers = [];
                    var e = this, n = this.$gantt.$services.getService("layers"),
                        i = n.getDataRender(this.$config.bind);
                    i || (i = n.createDataRender({
                        name: this.$config.bind, defaultContainer: function () {
                            return e.$grid_data
                        }
                    }));
                    for (var r = this.$config.layers, a = 0; r && a < r.length; a++) {
                        var o = r[a];
                        o.view = this;
                        var s = i.addLayer(o);
                        this._taskLayers.push(s)
                    }
                    this._bindStore(), this._initSmartRenderingPlaceholder()
                }
            }, _refreshPlaceholderOnStoreUpdate: function (t) {
                var e = this.$getConfig(), n = this.$config.rowStore;
                if (n && null === t && this.isVisible() && e.smart_rendering) {
                    var i;
                    if (this.$config.scrollY) {
                        var r = this.$gantt.$ui.getView(this.$config.scrollY);
                        r && (i = r.getScrollState().scrollSize)
                    }
                    if (i || (i = n ? e.row_height * n.countVisible() : 0), i) {
                        this.$rowsPlaceholder && this.$rowsPlaceholder.parentNode && this.$rowsPlaceholder.parentNode.removeChild(this.$rowsPlaceholder);
                        var a = this.$rowsPlaceholder = document.createElement("div");
                        a.style.visibility = "hidden", a.style.height = i + "px", a.style.width = "1px", this.$grid_data.appendChild(a)
                    }
                }
            }, _initSmartRenderingPlaceholder: function () {
                var t = this.$config.rowStore;
                t && (this._initSmartRenderingPlaceholder = function () {
                }, this._staticBgHandler = t.attachEvent("onStoreUpdated", r.bind(this._refreshPlaceholderOnStoreUpdate, this)))
            }, _initEvents: function () {
                var t = this.$gantt;
                this._mouseDelegates.delegate("click", "gantt_close", t.bind(function (t, e, n) {
                    var r = this.$config.rowStore;
                    if (!r) return !0;
                    var a = i.locateAttribute(t, this.$config.item_attribute);
                    return a && r.close(a.getAttribute(this.$config.item_attribute)), !1
                }, this), this.$grid), this._mouseDelegates.delegate("click", "gantt_open", t.bind(function (t, e, n) {
                    var r = this.$config.rowStore;
                    if (!r) return !0;
                    var a = i.locateAttribute(t, this.$config.item_attribute);
                    return a && r.open(a.getAttribute(this.$config.item_attribute)), !1
                }, this), this.$grid)
            }, _clearLayers: function (t) {
                var e = this.$gantt.$services.getService("layers").getDataRender(this.$config.bind);
                if (this._taskLayers) for (var n = 0; n < this._taskLayers.length; n++) e.removeLayer(this._taskLayers[n]);
                this._taskLayers = []
            }, _getColumnWidth: function (t, e, n) {
                var i = t.min_width || e.min_grid_column_width, r = Math.max(n, i || 10);
                return t.max_width && (r = Math.min(r, t.max_width)), r
            }, _checkGridColumnMinWidthLimits: function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) {
                    var r = 1 * t[n].width;
                    !t[n].min_width && r < e.min_grid_column_width && (t[n].min_width = r)
                }
            }, _getGridWidthLimits: function () {
                for (var t = this.$getConfig(), e = this.getGridColumns(), n = 0, i = 0, r = 0; r < e.length; r++) n += e[r].min_width ? e[r].min_width : t.min_grid_column_width, void 0 !== i && (i = e[r].max_width ? i + e[r].max_width : void 0);
                return this._checkGridColumnMinWidthLimits(e, t), [n, i]
            }, _setColumnsWidth: function (t, e) {
                var n = this.$getConfig(), i = this.getGridColumns(), r = 0, a = t;
                e = window.isNaN(e) ? -1 : e;
                for (var o = 0, s = i.length; o < s; o++) r += 1 * i[o].width;
                if (window.isNaN(r)) {
                    this._calculateGridWidth(), r = 0;
                    for (o = 0, s = i.length; o < s; o++) r += 1 * i[o].width
                }
                var l = a - r, c = 0;
                for (o = 0; o < e + 1; o++) c += i[o].width;
                r -= c;
                for (o = e + 1; o < i.length; o++) {
                    var u = i[o], d = Math.round(l * (u.width / r));
                    l < 0 ? u.min_width && u.width + d < u.min_width ? d = u.min_width - u.width : !u.min_width && n.min_grid_column_width && u.width + d < n.min_grid_column_width && (d = n.min_grid_column_width - u.width) : u.max_width && u.width + d > u.max_width && (d = u.max_width - u.width), r -= u.width, u.width += d, l -= d
                }
                for (var h = l > 0 ? 1 : -1; l > 0 && 1 === h || l < 0 && -1 === h;) {
                    var f = l;
                    for (o = e + 1; o < i.length; o++) {
                        var _;
                        if ((_ = i[o].width + h) == this._getColumnWidth(i[o], n, _) && (l -= h, i[o].width = _), !l) break
                    }
                    if (f == l) break
                }
                l && e > -1 && ((_ = i[e].width + l) == this._getColumnWidth(i[e], n, _) && (i[e].width = _));
                return this._getColsTotalWidth()
            }, _getColsTotalWidth: function () {
                for (var t = this.getGridColumns(), e = 0, n = 0; n < t.length; n++) {
                    var i = parseFloat(t[n].width);
                    if (window.isNaN(i)) return !1;
                    e += i
                }
                return e
            }, _calculateGridWidth: function () {
                for (var t = this.$getConfig(), e = this.getGridColumns(), n = 0, i = [], r = [], a = 0; a < e.length; a++) {
                    var o = parseFloat(e[a].width);
                    window.isNaN(o) && (o = t.min_grid_column_width || 10, i.push(a)), r[a] = o, n += o
                }
                var s = this._getGridWidth() + 1;
                if (t.autofit || i.length) {
                    var l = s - n;
                    if (t.autofit && !t.grid_elastic_columns) for (a = 0; a < r.length; a++) {
                        var c = Math.round(l / (r.length - a));
                        r[a] += c, (u = this._getColumnWidth(e[a], t, r[a])) != r[a] && (c = u - r[a], r[a] = u), l -= c
                    } else if (i.length) for (a = 0; a < i.length; a++) {
                        c = Math.round(l / (i.length - a));
                        var u, d = i[a];
                        r[d] += c, (u = this._getColumnWidth(e[d], t, r[d])) != r[d] && (c = u - r[d], r[d] = u), l -= c
                    }
                    for (a = 0; a < r.length; a++) e[a].width = r[a]
                } else {
                    var h = s != n;
                    this.$config.width = n - 1, t.grid_width = n, h && this.$parent._setContentSize(this.$config.width, null)
                }
            }, _renderGridHeader: function () {
                var t = this.$gantt, e = this.$getConfig(), n = this.$gantt.locale, i = this.$gantt.templates,
                    r = this.getGridColumns();
                e.rtl && (r = r.reverse());
                for (var a = [], o = 0, s = n.labels, l = e.scale_height - 1, c = 0; c < r.length; c++) {
                    var u = c == r.length - 1, d = r[c];
                    d.name || (d.name = t.uid() + "");
                    var h = 1 * d.width, f = this._getGridWidth();
                    u && f > o + h && (d.width = h = f - o), o += h;
                    var _ = t._sort && d.name == t._sort.name ? "<div class='gantt_sort gantt_" + t._sort.direction + "'></div>" : "",
                        g = ["gantt_grid_head_cell", "gantt_grid_head_" + d.name, u ? "gantt_last_cell" : "", i.grid_header_class(d.name, d)].join(" "),
                        p = "width:" + (h - (u ? 1 : 0)) + "px;", v = d.label || s["column_" + d.name] || s[d.name];
                    v = v || "";
                    var m = "<div class='" + g + "' style='" + p + "' " + t._waiAria.gridScaleCellAttrString(d, v) + " data-column-id='" + d.name + "' column_id='" + d.name + "'>" + v + _ + "</div>";
                    a.push(m)
                }
                this.$grid_scale.style.height = e.scale_height + "px", this.$grid_scale.style.lineHeight = l + "px", this.$grid_scale.innerHTML = a.join(""), this._renderHeaderResizers && this._renderHeaderResizers()
            }, _getGridWidth: function () {
                return this.$config.width
            }, destructor: function () {
                this._clearLayers(this.$gantt), this._mouseDelegates && (this._mouseDelegates.destructor(), this._mouseDelegates = null), this._unbindStore(), this.$grid = null, this.$grid_scale = null, this.$grid_data = null, this.$gantt = null, this.$config.rowStore && (this.$config.rowStore.detachEvent(this._staticBgHandler), this.$config.rowStore = null), this.callEvent("onDestroy", []), this.detachAllEvents()
            }
        }, t.exports = c
    }, function (t, e, n) {
        var i = n(0);
        t.exports = function (t) {
            var e = t.date, n = t.$services;
            return {
                getSum: function (t, e, n) {
                    void 0 === n && (n = t.length - 1), void 0 === e && (e = 0);
                    for (var i = 0, r = e; r <= n; r++) i += t[r];
                    return i
                }, setSumWidth: function (t, e, n, i) {
                    var r = e.width;
                    void 0 === i && (i = r.length - 1), void 0 === n && (n = 0);
                    var a = i - n + 1;
                    if (!(n > r.length - 1 || a <= 0 || i > r.length - 1)) {
                        var o = t - this.getSum(r, n, i);
                        this.adjustSize(o, r, n, i), this.adjustSize(-o, r, i + 1), e.full_width = this.getSum(r)
                    }
                }, splitSize: function (t, e) {
                    for (var n = [], i = 0; i < e; i++) n[i] = 0;
                    return this.adjustSize(t, n), n
                }, adjustSize: function (t, e, n, i) {
                    n || (n = 0), void 0 === i && (i = e.length - 1);
                    for (var r = i - n + 1, a = this.getSum(e, n, i), o = n; o <= i; o++) {
                        var s = Math.floor(t * (a ? e[o] / a : 1 / r));
                        a -= e[o], t -= s, r--, e[o] += s
                    }
                    e[e.length - 1] += t
                }, sortScales: function (t) {
                    function n(t, n) {
                        var i = new Date(1970, 0, 1);
                        return e.add(i, n, t) - i
                    }

                    t.sort(function (t, e) {
                        return n(t.unit, t.step) < n(e.unit, e.step) ? 1 : n(t.unit, t.step) > n(e.unit, e.step) ? -1 : 0
                    });
                    for (var i = 0; i < t.length; i++) t[i].index = i
                }, _isLegacyMode: function (e) {
                    var n = e || t.config;
                    return n.scale_unit || n.date_scale || n.subscales
                }, _prepareScaleObject: function (e) {
                    var n = e.format;
                    return n || (n = e.template || e.date || "%d %M"), "string" == typeof n && (n = t.date.date_to_str(n)), {
                        unit: e.unit || "day",
                        step: e.step || 1,
                        format: n,
                        css: e.css
                    }
                }, primaryScale: function (e) {
                    var i, r = n.getService("templateLoader"), a = this._isLegacyMode(e), o = e || t.config;
                    if (a) r.initTemplate("date_scale", void 0, void 0, o, t.config.templates), i = {
                        unit: t.config.scale_unit,
                        step: t.config.step,
                        template: t.templates.date_scale,
                        date: t.config.date_scale,
                        css: t.templates.scale_cell_class
                    }; else {
                        var s = o.scales[0];
                        i = {
                            unit: s.unit,
                            step: s.step,
                            template: s.template,
                            format: s.format,
                            date: s.date,
                            css: s.css || t.templates.scale_cell_class
                        }
                    }
                    return this._prepareScaleObject(i)
                }, getSubScales: function (e) {
                    var n = this._isLegacyMode(e), i = e || t.config;
                    return (n ? i.subscales || [] : i.scales.slice(1)).map(function (t) {
                        return this._prepareScaleObject(t)
                    }.bind(this))
                }, prepareConfigs: function (t, e, n, i, r, a, o) {
                    for (var s = this.splitSize(i, t.length), l = n, c = [], u = t.length - 1; u >= 0; u--) {
                        var d = u == t.length - 1, h = this.initScaleConfig(t[u], r, a);
                        d && this.processIgnores(h), this.initColSizes(h, e, l, s[u]), this.limitVisibleRange(h), d && (l = h.full_width), c.unshift(h)
                    }
                    for (u = 0; u < c.length - 1; u++) this.alineScaleColumns(c[c.length - 1], c[u]);
                    for (u = 0; u < c.length; u++) o && this.reverseScale(c[u]), this.setPosSettings(c[u]);
                    return c
                }, reverseScale: function (t) {
                    t.width = t.width.reverse(), t.trace_x = t.trace_x.reverse();
                    var e = t.trace_indexes;
                    t.trace_indexes = {}, t.trace_index_transition = {}, t.rtl = !0;
                    for (var n = 0; n < t.trace_x.length; n++) t.trace_indexes[t.trace_x[n].valueOf()] = n, t.trace_index_transition[e[t.trace_x[n].valueOf()]] = n;
                    return t
                }, setPosSettings: function (t) {
                    for (var e = 0, n = t.trace_x.length; e < n; e++) t.left.push((t.width[e - 1] || 0) + (t.left[e - 1] || 0))
                }, _ignore_time_config: function (n, i) {
                    if (t.config.skip_off_time) {
                        for (var r = !0, a = n, o = 0; o < i.step; o++) o && (a = e.add(n, o, i.unit)), r = r && !this.isWorkTime(a, i.unit);
                        return r
                    }
                    return !1
                }, processIgnores: function (t) {
                    t.ignore_x = {}, t.display_count = t.count
                }, initColSizes: function (t, n, i, r) {
                    var a = i;
                    t.height = r;
                    var o = void 0 === t.display_count ? t.count : t.display_count;
                    o || (o = 1), t.col_width = Math.floor(a / o), n && t.col_width < n && (t.col_width = n, a = t.col_width * o), t.width = [];
                    for (var s = t.ignore_x || {}, l = 0; l < t.trace_x.length; l++) if (s[t.trace_x[l].valueOf()] || t.display_count == t.count) t.width[l] = 0; else {
                        var c = 1;
                        "month" == t.unit && (c = Math.round((e.add(t.trace_x[l], t.step, t.unit) - t.trace_x[l]) / 864e5)), t.width[l] = c
                    }
                    this.adjustSize(a - this.getSum(t.width), t.width), t.full_width = this.getSum(t.width)
                }, initScaleConfig: function (t, e, n) {
                    var r = i.mixin({
                        count: 0,
                        col_width: 0,
                        full_width: 0,
                        height: 0,
                        width: [],
                        left: [],
                        trace_x: [],
                        trace_indexes: {},
                        min_date: new Date(e),
                        max_date: new Date(n)
                    }, t);
                    return this.eachColumn(t.unit, t.step, e, n, function (t) {
                        r.count++, r.trace_x.push(new Date(t)), r.trace_indexes[t.valueOf()] = r.trace_x.length - 1
                    }), r.trace_x_ascending = r.trace_x.slice(), r
                }, iterateScales: function (t, e, n, i, r) {
                    for (var a = e.trace_x, o = t.trace_x, s = n || 0, l = i || o.length - 1, c = 0, u = 1; u < a.length; u++) {
                        var d = t.trace_indexes[+a[u]];
                        void 0 !== d && d <= l && (r && r.apply(this, [c, u, s, d]), s = d, c = u)
                    }
                }, alineScaleColumns: function (t, e, n, i) {
                    this.iterateScales(t, e, n, i, function (n, i, r, a) {
                        var o = this.getSum(t.width, r, a - 1);
                        this.getSum(e.width, n, i - 1) != o && this.setSumWidth(o, e, n, i - 1)
                    })
                }, eachColumn: function (n, i, r, a, o) {
                    var s = new Date(r), l = new Date(a);
                    e[n + "_start"] && (s = e[n + "_start"](s));
                    var c = new Date(s);
                    for (+c >= +l && (l = e.add(c, i, n)); +c < +l;) {
                        o.call(this, new Date(c));
                        var u = c.getTimezoneOffset();
                        c = e.add(c, i, n), c = t._correct_dst_change(c, u, i, n), e[n + "_start"] && (c = e[n + "_start"](c))
                    }
                }, limitVisibleRange: function (t) {
                    var n = t.trace_x, i = t.width.length - 1, r = 0;
                    if (+n[0] < +t.min_date && 0 != i) {
                        var a = Math.floor(t.width[0] * ((n[1] - t.min_date) / (n[1] - n[0])));
                        r += t.width[0] - a, t.width[0] = a, n[0] = new Date(t.min_date)
                    }
                    var o = n.length - 1, s = n[o], l = e.add(s, t.step, t.unit);
                    if (+l > +t.max_date && o > 0 && (a = t.width[o] - Math.floor(t.width[o] * ((l - t.max_date) / (l - s))), r += t.width[o] - a, t.width[o] = a), r) {
                        for (var c = this.getSum(t.width), u = 0, d = 0; d < t.width.length; d++) {
                            var h = Math.floor(r * (t.width[d] / c));
                            t.width[d] += h, u += h
                        }
                        this.adjustSize(r - u, t.width)
                    }
                }
            }
        }
    }, , function (t, e, n) {
    }, function (t, e, n) {
        var i = n(3), r = {
            getHtmlSelect: function (t, e, n) {
                var r = "", o = this;
                return t = t || [], i.forEach(t, function (t) {
                    var e = [{key: "value", value: t.key}];
                    n == t.key && (e[e.length] = {
                        key: "selected",
                        value: "selected"
                    }), t.attributes && (e = e.concat(t.attributes)), r += o.getHtmlOption({innerHTML: t.label}, e)
                }), a("select", {innerHTML: r}, e)
            }, getHtmlOption: function (t, e) {
                return a("option", t, e)
            }, getHtmlButton: function (t, e) {
                return a("button", t, e)
            }, getHtmlDiv: function (t, e) {
                return a("div", t, e)
            }, getHtmlLabel: function (t, e) {
                return a("label", t, e)
            }, getHtmlInput: function (t) {
                return "<input" + o(t || []) + ">"
            }
        };

        function a(t, e, n) {
            return e = e || [], "<" + t + o(n || []) + ">" + (e.innerHTML || "") + "</" + t + ">"
        }

        function o(t) {
            var e = "";
            return i.forEach(t, function (t) {
                e += " " + t.key + "='" + t.value + "'"
            }), e
        }

        t.exports = r
    }, function (t, e) {
        t.exports = function (t) {
            var e = {};
            return t.$data.tasksStore.attachEvent("onStoreUpdated", function () {
                e = {}
            }), function (n, i, r, a) {
                var o = n.id + "_" + i + "_" + r.unit + "_" + r.step;
                return e[o] ? e[o] : e[o] = function (e, n, i, r) {
                    g = "task" == e.$role ? [] : t.getTaskBy(n, e.id);
                    for (var a = i.unit, o = i.step, s = {}, l = 0; l < g.length; l++) for (var c = g[l], u = t.date[a + "_start"](new Date(c.start_date)); u < c.end_date;) {
                        var d = u;
                        if (u = t.date.add(u, o, a), t.isWorkTime({date: d, task: c, unit: a})) {
                            var h = d.valueOf();
                            s[h] || (s[h] = []), s[h].push(c)
                        }
                    }
                    for (var f, _, g, p = [], v = r.$getConfig(), l = 0; l < i.trace_x.length; l++) f = new Date(i.trace_x[l]), _ = t.date.add(f, o, a), (g = s[f.valueOf()] || []).length || v.resource_render_empty_cells ? p.push({
                        start_date: f,
                        end_date: _,
                        tasks: g
                    }) : p.push(null);
                    return p
                }(n, i, r, a)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            function e(e, a) {
                if (!t._isAllowedUnscheduledTask(e) && t._isTaskInTimelineLimits(e)) {
                    var o = a.getItemPosition(e), s = a.$getConfig(), l = a.$getTemplates(), c = a.getItemHeight(),
                        u = t.getTaskType(e.type), d = Math.floor((t.config.row_height - c) / 2);
                    u == s.types.milestone && s.link_line_width > 1 && (d += 1), u == s.types.milestone && (o.left -= Math.round(c / 2), o.width = c);
                    var h = document.createElement("div"), f = Math.round(o.width);
                    a.$config.item_attribute && (h.setAttribute(a.$config.item_attribute, e.id), h.setAttribute(a.$config.bind + "_id", e.id)), s.show_progress && u != s.types.milestone && function (e, n, i, r, a) {
                        var o = 1 * e.progress || 0;
                        i = Math.max(i - 2, 0);
                        var s = document.createElement("div"), l = Math.round(i * o);
                        l = Math.min(i, l), e.progressColor && (s.style.backgroundColor = e.progressColor, s.style.opacity = 1), s.style.width = l + "px", s.className = "gantt_task_progress", s.innerHTML = a.progress_text(e.start_date, e.end_date, e), r.rtl && (s.style.position = "absolute", s.style.right = "0px");
                        var c = document.createElement("div");
                        if (c.className = "gantt_task_progress_wrapper", c.appendChild(s), n.appendChild(c), t.config.drag_progress && !t.isReadonly(e)) {
                            var u = document.createElement("div"), d = l;
                            r.rtl && (d = i - l), u.style.left = d + "px", u.className = "gantt_task_progress_drag", s.appendChild(u), n.appendChild(u)
                        }
                    }(e, h, f, s, l);
                    var _ = function (e, n, i) {
                        var r = document.createElement("div");
                        return t.getTaskType(e.type) != t.config.types.milestone && (r.innerHTML = i.task_text(e.start_date, e.end_date, e)), r.className = "gantt_task_content", r
                    }(e, 0, l);
                    e.textColor && (_.style.color = e.textColor), h.appendChild(_);
                    var g = function (e, n, i, r) {
                        var a = r.$getConfig(), o = [e];
                        n && o.push(n);
                        var s = t.getState(), l = t.getTask(i);
                        if (t.getTaskType(l.type) == a.types.milestone ? o.push("gantt_milestone") : t.getTaskType(l.type) == a.types.project && o.push("gantt_project"), o.push("gantt_bar_" + t.getTaskType(l.type)), t.isSummaryTask(l) && o.push("gantt_dependent_task"), t.isSplitTask(l) && (a.open_split_tasks && !l.$open || !a.open_split_tasks) && o.push("gantt_split_parent"), a.select_task && t.isSelectedTask(i) && o.push("gantt_selected"), i == s.drag_id && (o.push("gantt_drag_" + s.drag_mode), s.touch_drag && o.push("gantt_touch_" + s.drag_mode)), s.link_source_id == i && o.push("gantt_link_source"), s.link_target_id == i && o.push("gantt_link_target"), a.highlight_critical_path && t.isCriticalTask && t.isCriticalTask(l) && o.push("gantt_critical_task"), s.link_landing_area && s.link_target_id && s.link_source_id && s.link_target_id != s.link_source_id) {
                            var c = s.link_source_id, u = s.link_from_start, d = s.link_to_start,
                                h = t.isLinkAllowed(c, i, u, d), f = "";
                            f = h ? d ? "link_start_allow" : "link_finish_allow" : d ? "link_start_deny" : "link_finish_deny", o.push(f)
                        }
                        return o.join(" ")
                    }("gantt_task_line", l.task_class(e.start_date, e.end_date, e), e.id, a);
                    (e.color || e.progressColor || e.textColor) && (g += " gantt_task_inline_color"), h.className = g;
                    var p = ["left:" + o.left + "px", "top:" + (d + o.top) + "px", "height:" + c + "px", "line-height:" + Math.max(c < 30 ? c - 2 : c, 0) + "px", "width:" + f + "px"];
                    e.color && p.push("background-color:" + e.color), e.textColor && p.push("color:" + e.textColor), h.style.cssText = p.join(";");
                    var v = function (t, e, r) {
                        var a = "gantt_left " + i(!e.rtl, t);
                        return n(t, r.leftside_text, a)
                    }(e, s, l);
                    v && h.appendChild(v), (v = function (t, e, r) {
                        var a = "gantt_right " + i(!!e.rtl, t);
                        return n(t, r.rightside_text, a)
                    }(e, s, l)) && h.appendChild(v), t._waiAria.setTaskBarAttr(e, h);
                    var m = t.getState();
                    return t.isReadonly(e) || (s.drag_resize && !t.isSummaryTask(e) && u != s.types.milestone && r(h, "gantt_task_drag", e, function (t) {
                        var e = document.createElement("div");
                        return e.className = t, e
                    }, s), s.drag_links && s.show_links && r(h, "gantt_link_control", e, function (t) {
                        var e = document.createElement("div");
                        e.className = t, e.style.cssText = ["height:" + c + "px", "line-height:" + c + "px"].join(";");
                        var n = document.createElement("div");
                        n.className = "gantt_link_point";
                        var i = !1;
                        return m.link_source_id && s.touch && (i = !0), n.style.display = i ? "block" : "", e.appendChild(n), e
                    }, s)), h
                }
            }

            function n(t, e, n) {
                if (!e) return null;
                var i = e(t.start_date, t.end_date, t);
                if (!i) return null;
                var r = document.createElement("div");
                return r.className = "gantt_side_content " + n, r.innerHTML = i, r
            }

            function i(e, n) {
                var i = function (e) {
                    return e ? {
                        $source: [t.config.links.start_to_start],
                        $target: [t.config.links.start_to_start, t.config.links.finish_to_start]
                    } : {
                        $source: [t.config.links.finish_to_start, t.config.links.finish_to_finish],
                        $target: [t.config.links.finish_to_finish]
                    }
                }(e);
                for (var r in i) for (var a = n[r], o = 0; o < a.length; o++) for (var s = t.getLink(a[o]), l = 0; l < i[r].length; l++) if (s.type == i[r][l]) return "gantt_link_crossing";
                return ""
            }

            function r(e, n, i, r, a) {
                var o, s = t.getState();
                +i.start_date >= +s.min_date && ((o = r([n, a.rtl ? "task_right" : "task_left", "task_start_date"].join(" "))).setAttribute("data-bind-property", "start_date"), e.appendChild(o)), +i.end_date <= +s.max_date && ((o = r([n, a.rtl ? "task_left" : "task_right", "task_end_date"].join(" "))).setAttribute("data-bind-property", "end_date"), e.appendChild(o))
            }

            return function (n, i) {
                var r = i.$getConfig().type_renderers[t.getTaskType(n.type)], a = e;
                return r ? r.call(t, n, function (e) {
                    return a.call(t, e, i)
                }, i) : a.call(t, n, i)
            }
        }
    }, function (t, e) {
        t.exports = function (t, e, n, i) {
            if (!t.start_date || !t.end_date) return null;
            var r = n.$getConfig(), a = n.getItemTop(t.id), o = r.row_height;
            if (a > e.y_end || a + o < e.y) return !1;
            var s = n.posFromDate(t.start_date), l = n.posFromDate(t.end_date), c = Math.min(s, l) - 200,
                u = Math.max(s, l) + 200;
            return !(c > e.x_end || u < e.x)
        }
    }, function (t, e, n) {
        var i = n(2), r = n(1), a = function (t) {
            "use strict";

            function e(e, n, i) {
                var r = t.apply(this, arguments) || this;
                return e && (r.$root = !0), r._parseConfig(n), r.$name = "layout", r
            }

            return i(e, t), e.prototype.destructor = function () {
                this.$container && this.$view && r.removeNode(this.$view);
                for (var e = 0; e < this.$cells.length; e++) {
                    this.$cells[e].destructor()
                }
                this.$cells = [], t.prototype.destructor.call(this)
            }, e.prototype._resizeScrollbars = function (t, e) {
                var n, i = !1, r = [], a = [];

                function o(t) {
                    t.$parent.show(), i = !0, r.push(t)
                }

                function s(t) {
                    t.$parent.hide(), i = !0, a.push(t)
                }

                for (var l = 0; l < e.length; l++) t[(n = e[l]).$config.scroll] ? s(n) : n.shouldHide() ? s(n) : n.shouldShow() ? o(n) : n.isVisible() ? r.push(n) : a.push(n);
                var c = {};
                for (l = 0; l < r.length; l++) r[l].$config.group && (c[r[l].$config.group] = !0);
                for (l = 0; l < a.length; l++) (n = a[l]).$config.group && c[n.$config.group] && o(n);
                return i
            }, e.prototype._syncCellSizes = function (t, e) {
                if (t) {
                    var n = {};
                    return this._eachChild(function (t) {
                        t.$config.group && "scrollbar" != t.$name && "resizer" != t.$name && (n[t.$config.group] || (n[t.$config.group] = []), n[t.$config.group].push(t))
                    }), n[t] && this._syncGroupSize(n[t], e), n[t]
                }
            }, e.prototype._syncGroupSize = function (t, e) {
                if (t.length) for (var n = t[0].$parent._xLayout ? "width" : "height", i = t[0].$parent.getNextSibling(t[0].$id) ? 1 : -1, r = 0; r < t.length; r++) {
                    var a = t[r].getSize(),
                        o = i > 0 ? t[r].$parent.getNextSibling(t[r].$id) : t[r].$parent.getPrevSibling(t[r].$id);
                    "resizer" == o.$name && (o = i > 0 ? o.$parent.getNextSibling(o.$id) : o.$parent.getPrevSibling(o.$id));
                    var s = o.getSize();
                    if (o[n]) {
                        var l = a.gravity + s.gravity, c = a[n] + s[n], u = l / c;
                        t[r].$config.gravity = u * e, o.$config[n] = c - e, o.$config.gravity = l - u * e
                    } else t[r].$config[n] = e;
                    var d = this.$gantt.$ui.getView("grid");
                    d && t[r].$content === d && !d.$config.scrollable && (this.$gantt.config.grid_width = e)
                }
            }, e.prototype.resize = function (e) {
                var n = !1;
                if (this.$root && !this._resizeInProgress && (this.callEvent("onBeforeResize", []), n = !0, this._resizeInProgress = !0), t.prototype.resize.call(this, !0), t.prototype.resize.call(this, !1), n) {
                    var i = [];
                    i = (i = (i = i.concat(this.getCellsByType("viewCell"))).concat(this.getCellsByType("viewLayout"))).concat(this.getCellsByType("hostCell"));
                    for (var r = this.getCellsByType("scroller"), a = 0; a < i.length; a++) i[a].$config.hidden || i[a].setContentSize();
                    var o = this._getAutosizeMode(this.$config.autosize), s = this._resizeScrollbars(o, r);
                    if (this.$config.autosize && (this.autosize(this.$config.autosize), s = !0), s) {
                        this.resize();
                        for (a = 0; a < i.length; a++) i[a].$config.hidden || i[a].setContentSize()
                    }
                    this.callEvent("onResize", [])
                }
                n && (this._resizeInProgress = !1)
            }, e.prototype._eachChild = function (t, e) {
                if (t(e = e || this), e.$cells) for (var n = 0; n < e.$cells.length; n++) this._eachChild(t, e.$cells[n])
            }, e.prototype.isChild = function (t) {
                var e = !1;
                return this._eachChild(function (n) {
                    n !== t && n.$content !== t || (e = !0)
                }), e
            }, e.prototype.getCellsByType = function (t) {
                var n = [];
                if (t === this.$name && n.push(this), this.$content && this.$content.$name == t && n.push(this.$content), this.$cells) for (var i = 0; i < this.$cells.length; i++) {
                    var r = e.prototype.getCellsByType.call(this.$cells[i], t);
                    r.length && n.push.apply(n, r)
                }
                return n
            }, e.prototype.getNextSibling = function (t) {
                var e = this.cellIndex(t);
                return e >= 0 && this.$cells[e + 1] ? this.$cells[e + 1] : null
            }, e.prototype.getPrevSibling = function (t) {
                var e = this.cellIndex(t);
                return e >= 0 && this.$cells[e - 1] ? this.$cells[e - 1] : null
            }, e.prototype.cell = function (t) {
                for (var e = 0; e < this.$cells.length; e++) {
                    var n = this.$cells[e];
                    if (n.$id === t) return n;
                    var i = n.cell(t);
                    if (i) return i
                }
            }, e.prototype.cellIndex = function (t) {
                for (var e = 0; e < this.$cells.length; e++) if (this.$cells[e].$id === t) return e;
                return -1
            }, e.prototype.moveView = function (t, e) {
                if (this.$cells[e] !== t) return window.alert("Not implemented");
                e += this.$config.header ? 1 : 0;
                var n = this.$view;
                e >= n.childNodes.length ? n.appendChild(t.$view) : n.insertBefore(t.$view, n.childNodes[e])
            }, e.prototype._parseConfig = function (t) {
                this.$cells = [], this._xLayout = !t.rows;
                for (var e = t.rows || t.cols || t.views, n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.mode = this._xLayout ? "x" : "y";
                    var r = this.$factory.initUI(i, this);
                    r ? (r.$parent = this, this.$cells.push(r)) : (e.splice(n, 1), n--)
                }
            }, e.prototype.getCells = function () {
                return this.$cells
            }, e.prototype.render = function () {
                var t = r.insertNode(this.$container, this.$toHTML());
                this.$fill(t, null), this.callEvent("onReady", []), this.resize(), this.render = this.resize
            }, e.prototype.$fill = function (t, e) {
                this.$view = t, this.$parent = e;
                for (var n = r.getChildNodes(t, "gantt_layout_cell"), i = n.length - 1; i >= 0; i--) {
                    var a = this.$cells[i];
                    a.$fill(n[i], this), a.$config.hidden && a.$view.parentNode.removeChild(a.$view)
                }
            }, e.prototype.$toHTML = function () {
                for (var e = this._xLayout ? "x" : "y", n = [], i = 0; i < this.$cells.length; i++) n.push(this.$cells[i].$toHTML());
                return t.prototype.$toHTML.call(this, n.join(""), (this.$root ? "gantt_layout_root " : "") + "gantt_layout gantt_layout_" + e)
            }, e.prototype.getContentSize = function (t) {
                for (var e, n, i, r = 0, a = 0, o = 0; o < this.$cells.length; o++) (n = this.$cells[o]).$config.hidden || (e = n.getContentSize(t), "scrollbar" === n.$config.view && t[n.$config.scroll] && (e.height = 0, e.width = 0), n.$config.resizer && (this._xLayout ? e.height = 0 : e.width = 0), i = n._getBorderSizes(), this._xLayout ? (r += e.width + i.horizontal, a = Math.max(a, e.height + i.vertical)) : (r = Math.max(r, e.width + i.horizontal), a += e.height + i.vertical));
                return r += (i = this._getBorderSizes()).horizontal, a += i.vertical, this.$root && (r += 1, a += 1), {
                    width: r,
                    height: a
                }
            }, e.prototype._cleanElSize = function (t) {
                return 1 * (t || "").toString().replace("px", "") || 0
            }, e.prototype._getBoxStyles = function (t) {
                var e = null,
                    n = ["width", "height", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                    i = {
                        boxSizing: "border-box" == (e = window.getComputedStyle ? window.getComputedStyle(t, null) : {
                            width: t.clientWidth,
                            height: t.clientHeight
                        }).boxSizing
                    };
                e.MozBoxSizing && (i.boxSizing = "border-box" == e.MozBoxSizing);
                for (var r = 0; r < n.length; r++) i[n[r]] = e[n[r]] ? this._cleanElSize(e[n[r]]) : 0;
                var a = {
                    horPaddings: i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth,
                    vertPaddings: i.paddingTop + i.paddingBottom + i.borderTopWidth + i.borderBottomWidth,
                    borderBox: i.boxSizing,
                    innerWidth: i.width,
                    innerHeight: i.height,
                    outerWidth: i.width,
                    outerHeight: i.height
                };
                return a.borderBox ? (a.innerWidth -= a.horPaddings, a.innerHeight -= a.vertPaddings) : (a.outerWidth += a.horPaddings, a.outerHeight += a.vertPaddings), a
            }, e.prototype._getAutosizeMode = function (t) {
                var e = {x: !1, y: !1};
                return "xy" === t ? e.x = e.y = !0 : "y" === t || !0 === t ? e.y = !0 : "x" === t && (e.x = !0), e
            }, e.prototype.autosize = function (t) {
                var e = this._getAutosizeMode(t), n = this._getBoxStyles(this.$container), i = this.getContentSize(t),
                    r = this.$container;
                e.x && (n.borderBox && (i.width += n.horPaddings), r.style.width = i.width + "px"), e.y && (n.borderBox && (i.height += n.vertPaddings), r.style.height = i.height + "px")
            }, e.prototype.getSize = function () {
                this._sizes = [];
                for (var e = 0, n = 0, i = 1e5, r = 0, a = 1e5, o = 0, s = 0; s < this.$cells.length; s++) {
                    var l = this._sizes[s] = this.$cells[s].getSize();
                    this.$cells[s].$config.hidden || (this._xLayout ? (!l.width && l.minWidth ? e += l.minWidth : e += l.width, i += l.maxWidth, n += l.minWidth, r = Math.max(r, l.height), a = Math.min(a, l.maxHeight), o = Math.max(o, l.minHeight)) : (!l.height && l.minHeight ? r += l.minHeight : r += l.height, a += l.maxHeight, o += l.minHeight, e = Math.max(e, l.width), i = Math.min(i, l.maxWidth), n = Math.max(n, l.minWidth)))
                }
                var c = t.prototype.getSize.call(this);
                return c.maxWidth >= 1e5 && (c.maxWidth = i), c.maxHeight >= 1e5 && (c.maxHeight = a), c.minWidth = c.minWidth != c.minWidth ? 0 : c.minWidth, c.minHeight = c.minHeight != c.minHeight ? 0 : c.minHeight, this._xLayout ? (c.minWidth += this.$config.margin * this.$cells.length || 0, c.minWidth += 2 * this.$config.padding || 0, c.minHeight += 2 * this.$config.padding || 0) : (c.minHeight += this.$config.margin * this.$cells.length || 0, c.minHeight += 2 * this.$config.padding || 0), c
            }, e.prototype._calcFreeSpace = function (t, e, n) {
                var i = n ? e.minWidth : e.minHeight, r = e.maxWidth, a = t;
                return a ? (a > r && (a = r), a < i && (a = i), this._free -= a) : ((a = Math.floor(this._free / this._gravity * e.gravity)) > r && (a = r, this._free -= a, this._gravity -= e.gravity), a < i && (a = i, this._free -= a, this._gravity -= e.gravity)), a
            }, e.prototype._calcSize = function (t, e, n) {
                var i = t, r = n ? e.minWidth : e.minHeight, a = n ? e.maxWidth : e.maxHeight;
                return i || (i = Math.floor(this._free / this._gravity * e.gravity)), i > a && (i = a), i < r && (i = r), i
            }, e.prototype._configureBorders = function () {
                this.$root && this._setBorders([this._borders.left, this._borders.top, this._borders.right, this._borders.bottom], this);
                for (var t = this._xLayout ? this._borders.right : this._borders.bottom, e = this.$cells, n = e.length - 1, i = n; i >= 0; i--) if (!e[i].$config.hidden) {
                    n = i;
                    break
                }
                for (i = 0; i < e.length; i++) if (!e[i].$config.hidden) {
                    var r = i >= n, a = "";
                    !r && e[i + 1] && "scrollbar" == e[i + 1].$config.view && (this._xLayout ? r = !0 : a = "gantt_layout_cell_border_transparent"), this._setBorders(r ? [] : [t, a], e[i])
                }
            }, e.prototype._updateCellVisibility = function () {
                for (var t, e = this._visibleCells || {}, n = !this._visibleCells, i = {}, r = 0; r < this._sizes.length; r++) t = this.$cells[r], !n && t.$config.hidden && e[t.$id] ? t._hide(!0) : t.$config.hidden || e[t.$id] || t._hide(!1), t.$config.hidden || (i[t.$id] = !0);
                this._visibleCells = i
            }, e.prototype.setSize = function (e, n) {
                this._configureBorders(), t.prototype.setSize.call(this, e, n), n = this.$lastSize.contentY, e = this.$lastSize.contentX;
                var i, r, a = this.$config.padding || 0;
                this.$view.style.padding = a + "px", this._gravity = 0, this._free = this._xLayout ? e : n, this._free -= 2 * a, this._updateCellVisibility();
                for (var o = 0; o < this._sizes.length; o++) if (!(i = this.$cells[o]).$config.hidden) {
                    var s = this.$config.margin || 0;
                    "resizer" != i.$name || s || (s = -1);
                    var l = i.$view, c = this._xLayout ? "marginRight" : "marginBottom";
                    o !== this.$cells.length - 1 && (l.style[c] = s + "px", this._free -= s), r = this._sizes[o], this._xLayout ? r.width || (this._gravity += r.gravity) : r.height || (this._gravity += r.gravity)
                }
                for (o = 0; o < this._sizes.length; o++) if (!(i = this.$cells[o]).$config.hidden) {
                    var u = (r = this._sizes[o]).width, d = r.height;
                    this._xLayout ? this._calcFreeSpace(u, r, !0) : this._calcFreeSpace(d, r, !1)
                }
                for (o = 0; o < this.$cells.length; o++) if (!(i = this.$cells[o]).$config.hidden) {
                    r = this._sizes[o];
                    var h = void 0, f = void 0;
                    this._xLayout ? (h = this._calcSize(r.width, r, !0), f = n - 2 * a) : (h = e - 2 * a, f = this._calcSize(r.height, r, !1)), i.setSize(h, f)
                }
            }, e
        }(n(10));
        t.exports = a
    }, function (t, e) {
        t.exports = function (t, e) {
            return {top: e.getItemTop(t.id), height: e.getItemHeight(t.id), left: 0, right: 1 / 0}
        }
    }, function (t, e, n) {
        var i = n(0), r = n(3);

        function a(t, e, n, i, r) {
            return this.date = t, this.unit = e, this.task = n, this.id = i, this.calendar = r, this
        }

        function o(t, e, n, i, r, a) {
            return this.date = t, this.dir = e, this.unit = n, this.task = i, this.id = r, this.calendar = a, this
        }

        function s(t, e, n, i, r, a, o) {
            return this.start_date = t, this.duration = e, this.unit = n, this.step = i, this.task = r, this.id = a, this.calendar = o, this
        }

        function l(t, e, n, i) {
            return this.start_date = t, this.end_date = e, this.task = n, this.calendar = i, this.unit = null, this.step = null, this
        }

        t.exports = function (t) {
            return {
                getWorkHoursArguments: function () {
                    var e = arguments[0];
                    if (e = r.isDate(e) ? {date: e} : i.mixin({}, e), !r.isValidDate(e.date)) throw t.assert(!1, "Invalid date argument for getWorkHours method"), new Error("Invalid date argument for getWorkHours method");
                    return e
                }, setWorkTimeArguments: function () {
                    return arguments[0]
                }, unsetWorkTimeArguments: function () {
                    return arguments[0]
                }, isWorkTimeArguments: function () {
                    var e, n = arguments[0];
                    if (n instanceof a) return n;
                    if ((e = n.date ? new a(n.date, n.unit, n.task, null, n.calendar) : new a(arguments[0], arguments[1], arguments[2], null, arguments[3])).unit = e.unit || t.config.duration_unit, !r.isValidDate(e.date)) throw t.assert(!1, "Invalid date argument for isWorkTime method"), new Error("Invalid date argument for isWorkTime method");
                    return e
                }, getClosestWorkTimeArguments: function (e) {
                    var n, i = arguments[0];
                    if (i instanceof o) return i;
                    if (n = r.isDate(i) ? new o(i) : new o(i.date, i.dir, i.unit, i.task, null, i.calendar), i.id && (n.task = i), n.dir = i.dir || "any", n.unit = i.unit || t.config.duration_unit, !r.isValidDate(n.date)) throw t.assert(!1, "Invalid date argument for getClosestWorkTime method"), new Error("Invalid date argument for getClosestWorkTime method");
                    return n
                }, _getStartEndConfig: function (e) {
                    var n, i = l;
                    if (e instanceof i) return e;
                    if (r.isDate(e) ? n = new i(arguments[0], arguments[1], arguments[2], arguments[3]) : (n = new i(e.start_date, e.end_date, e.task), e.id && (n.task = e)), n.unit = n.unit || t.config.duration_unit, n.step = n.step || t.config.duration_step, n.start_date = n.start_date || n.start || n.date, !r.isValidDate(n.start_date)) throw t.assert(!1, "Invalid start_date argument for getDuration method"), new Error("Invalid start_date argument for getDuration method");
                    if (!r.isValidDate(n.end_date)) throw t.assert(!1, "Invalid end_date argument for getDuration method"), new Error("Invalid end_date argument for getDuration method");
                    return n
                }, getDurationArguments: function (t, e, n, i) {
                    return this._getStartEndConfig.apply(this, arguments)
                }, hasDurationArguments: function (t, e, n, i) {
                    return this._getStartEndConfig.apply(this, arguments)
                }, calculateEndDateArguments: function (e, n, i, a) {
                    var o, l = arguments[0];
                    if (l instanceof s) return l;
                    if (o = r.isDate(l) ? new s(arguments[0], arguments[1], arguments[2], void 0, arguments[3], void 0, arguments[4]) : new s(l.start_date, l.duration, l.unit, l.step, l.task, null, l.calendar), l.id && (o.task = l, o.unit = null, o.step = null), o.unit = o.unit || t.config.duration_unit, o.step = o.step || t.config.duration_step, !r.isValidDate(o.start_date)) throw t.assert(!1, "Invalid start_date argument for calculateEndDate method"), new Error("Invalid start_date argument for calculateEndDate method");
                    return o
                }
            }
        }
    }, function (t, e) {
        t.exports = function () {
            var t = {};
            return {
                _resetTopPositionHeight: function () {
                    t = {}
                }, getRowTop: function (t) {
                    return t * this.$getConfig().row_height
                }, getItemTop: function (e) {
                    if (this.$config.rowStore) {
                        if (void 0 !== t[e]) return t[e];
                        var n = this.$config.rowStore;
                        if (!n) return 0;
                        var i = n.getIndexById(e);
                        if (-1 === i && n.getParent && n.exists(e)) {
                            var r = n.getParent(e);
                            if (n.exists(r)) {
                                var a = n.getItem(r);
                                if (this.$gantt.isSplitTask(a)) return this.getRowTop(n.getIndexById(a.id))
                            }
                        }
                        return t[e] = this.getRowTop(i), t[e]
                    }
                    return 0
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t() {
                var t = this;
                this.canParse = function (e) {
                    return !isNaN(t.parse(e))
                }, this.format = function (t) {
                    return String(t)
                }, this.parse = function (t) {
                    return parseInt(t, 10)
                }
            }

            return t.create = function (e) {
                return void 0 === e && (e = null), new t
            }, t
        }();
        e.default = i
    }, function (t, e) {
        function n(t, e, n) {
            for (var i = 0; i < e.length; i++) t.isLinkExists(e[i]) && (n[e[i]] = t.getLink(e[i]))
        }

        function i(t, e, i) {
            n(t, e.$source, i), n(t, e.$target, i)
        }

        t.exports = {
            getSubtreeLinks: function (t, e) {
                var n = {};
                return t.isTaskExists(e) && i(t, t.getTask(e), n), t.eachTask(function (e) {
                    i(t, e, n)
                }, e), n
            }, getSubtreeTasks: function (t, e) {
                var n = {};
                return t.eachTask(function (t) {
                    n[t.id] = t
                }, e), n
            }
        }
    }, function (t, e, n) {
        var i = n(22), r = n(22);

        function a(t) {
            var e = function (t) {
                var e = new r(t).primaryScale(), n = e.unit, a = e.step;
                if (t.config.scale_offset_minimal) {
                    var o = new i(t), s = [o.primaryScale()].concat(o.getSubScales());
                    o.sortScales(s), n = s[s.length - 1].unit, a = s[s.length - 1].step || 1
                }
                return {unit: n, step: a}
            }(t), n = e.unit, a = e.step, o = function (t, e) {
                var n = {start_date: null, end_date: null};
                if (e.config.start_date && e.config.end_date) {
                    n.start_date = e.date[t + "_start"](new Date(e.config.start_date));
                    var i = new Date(e.config.end_date), r = e.date[t + "_start"](new Date(i));
                    i = +i != +r ? e.date.add(r, 1, t) : r, n.end_date = i
                }
                return n
            }(n, t);
            o.start_date && o.end_date || ((o = t.getSubtaskDates()).start_date && o.end_date || (o = {
                start_date: new Date,
                end_date: new Date
            }), o.start_date = t.date[n + "_start"](o.start_date), o.start_date = t.calculateEndDate({
                start_date: t.date[n + "_start"](o.start_date),
                duration: -1,
                unit: n,
                step: a
            }), o.end_date = t.date[n + "_start"](o.end_date), o.end_date = t.calculateEndDate({
                start_date: o.end_date,
                duration: 2,
                unit: n,
                step: a
            })), t._min_date = o.start_date, t._max_date = o.end_date
        }

        t.exports = function (t) {
            a(t), function (t) {
                if (t.config.fit_tasks) {
                    var e = +t._min_date, n = +t._max_date;
                    if (+t._min_date != e || +t._max_date != n) return t.render(), t.callEvent("onScaleAdjusted", []), !0
                }
            }(t)
        }
    }, function (t, e, n) {
        var i = n(37), r = n(0), a = n(3), o = n(38);
        o.default && (o = o.default);
        var s = function (t) {
            return o.apply(this, [t]), this._branches = {}, this.pull = {}, this.$initItem = t.initItem, this.$parentProperty = t.parentProperty || "parent", "function" != typeof t.rootId ? this.$getRootId = function (t) {
                return function () {
                    return t
                }
            }(t.rootId || 0) : this.$getRootId = t.rootId, this.$openInitially = t.openInitially, this.visibleOrder = i.$create(), this.fullOrder = i.$create(), this._searchVisibleOrder = {}, this._skip_refresh = !1, this._ganttConfig = null, t.getConfig && (this._ganttConfig = t.getConfig()), this.attachEvent("onFilterItem", function (t, e) {
                var n = !1;
                if (this._ganttConfig) n = this._ganttConfig.open_split_tasks;
                var i = !0;
                return this.eachParent(function (t) {
                    i = i && t.$open && (n || !this._isSplitItem(t))
                }, e), !!i
            }), this
        };
        s.prototype = r.mixin({
            _buildTree: function (t) {
                for (var e = null, n = this.$getRootId(), i = 0, a = t.length; i < a; i++) e = t[i], this.setParent(e, this.getParent(e) || n);
                for (i = 0, a = t.length; i < a; i++) e = t[i], this._add_branch(e), e.$level = this.calculateItemLevel(e), r.defined(e.$open) || (e.$open = r.defined(e.open) ? e.open : this.$openInitially());
                this._updateOrder()
            }, _isSplitItem: function (t) {
                return "split" == t.render && this.hasChild(t.id)
            }, parse: function (t) {
                this.callEvent("onBeforeParse", [t]);
                var e = this._parseInner(t);
                this._buildTree(e), this.filter(), this.callEvent("onParse", [e])
            }, _addItemInner: function (t, e) {
                var n = this.getParent(t);
                r.defined(n) || (n = this.$getRootId(), this.setParent(t, n));
                var i = this.getIndexById(n) + Math.min(Math.max(e, 0), this.visibleOrder.length);
                1 * i !== i && (i = void 0), o.prototype._addItemInner.call(this, t, i), this.setParent(t, n), t.hasOwnProperty("$rendered_parent") && this._move_branch(t, t.$rendered_parent), this._add_branch(t, e)
            }, _changeIdInner: function (t, e) {
                var n = this.getChildren(t), i = this._searchVisibleOrder[t];
                o.prototype._changeIdInner.call(this, t, e);
                var r = this.getParent(e);
                this._replace_branch_child(r, t, e);
                for (var a = 0; a < n.length; a++) this.setParent(this.getItem(n[a]), e);
                this._searchVisibleOrder[e] = i, delete this._branches[t]
            }, _traverseBranches: function (t, e) {
                e = e || this.$getRootId();
                var n = this._branches[e];
                if (n) for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    t.call(this, r), this._branches[r] && this._traverseBranches(t, r)
                }
            }, _updateOrder: function (t) {
                this.fullOrder = i.$create(), this._traverseBranches(function (t) {
                    this.fullOrder.push(t)
                }), t && o.prototype._updateOrder.call(this, t)
            }, _removeItemInner: function (t) {
                var e = [];
                this.eachItem(function (t) {
                    e.push(t)
                }, t), e.push(this.getItem(t));
                for (var n = 0; n < e.length; n++) this._move_branch(e[n], this.getParent(e[n]), null), o.prototype._removeItemInner.call(this, e[n].id), this._move_branch(e[n], this.getParent(e[n]), null)
            }, move: function (t, e, n) {
                var i = arguments[3];
                if (i) {
                    if (i === t) return;
                    n = this.getParent(i), e = this.getBranchIndex(i)
                }
                if (t != n) {
                    n = n || this.$getRootId();
                    var r = this.getItem(t), a = this.getParent(r.id), o = this.getChildren(n);
                    if (-1 == e && (e = o.length + 1), a == n) if (this.getBranchIndex(t) == e) return;
                    if (!1 === this.callEvent("onBeforeItemMove", [t, n, e])) return !1;
                    this._replace_branch_child(a, t), (o = this.getChildren(n))[e] ? o = o.slice(0, e).concat([t]).concat(o.slice(e)) : o.push(t), this.setParent(r, n), this._branches[n] = o;
                    var s = this.calculateItemLevel(r) - r.$level;
                    r.$level += s, this.eachItem(function (t) {
                        t.$level += s
                    }, r.id, this), this._moveInner(this.getIndexById(t), this.getIndexById(n) + e), this.callEvent("onAfterItemMove", [t, n, e]), this.refresh()
                }
            }, getBranchIndex: function (t) {
                for (var e = this.getChildren(this.getParent(t)), n = 0; n < e.length; n++) if (e[n] == t) return n;
                return -1
            }, hasChild: function (t) {
                return r.defined(this._branches[t]) && this._branches[t].length
            }, getChildren: function (t) {
                return r.defined(this._branches[t]) ? this._branches[t] : i.$create()
            }, isChildOf: function (t, e) {
                if (!this.exists(t)) return !1;
                if (e === this.$getRootId()) return !0;
                if (!this.hasChild(e)) return !1;
                var n = this.getItem(t), i = this.getParent(t);
                if (this.getItem(e).$level >= n.$level) return !1;
                for (; n && this.exists(i);) {
                    if ((n = this.getItem(i)) && n.id == e) return !0;
                    i = this.getParent(n)
                }
                return !1
            }, getSiblings: function (t) {
                if (!this.exists(t)) return i.$create();
                var e = this.getParent(t);
                return this.getChildren(e)
            }, getNextSibling: function (t) {
                for (var e = this.getSiblings(t), n = 0, i = e.length; n < i; n++) if (e[n] == t) return e[n + 1] || null;
                return null
            }, getPrevSibling: function (t) {
                for (var e = this.getSiblings(t), n = 0, i = e.length; n < i; n++) if (e[n] == t) return e[n - 1] || null;
                return null
            }, getParent: function (t) {
                var e = null;
                return (e = void 0 !== t.id ? t : this.getItem(t)) ? e[this.$parentProperty] : this.$getRootId()
            }, clearAll: function () {
                this._branches = {}, o.prototype.clearAll.call(this)
            }, calculateItemLevel: function (t) {
                var e = 0;
                return this.eachParent(function () {
                    e++
                }, t), e
            }, _setParentInner: function (t, e, n) {
                n || (t.hasOwnProperty("$rendered_parent") ? this._move_branch(t, t.$rendered_parent, e) : this._move_branch(t, t[this.$parentProperty], e))
            }, setParent: function (t, e, n) {
                this._setParentInner(t, e, n), t[this.$parentProperty] = e
            }, eachItem: function (t, e) {
                e = e || this.$getRootId();
                var n = this.getChildren(e);
                if (n) for (var i = 0; i < n.length; i++) {
                    var r = this.pull[n[i]];
                    t.call(this, r), this.hasChild(r.id) && this.eachItem(t, r.id)
                }
            }, eachParent: function (t, e) {
                for (var n = {}, i = e, r = this.getParent(i); this.exists(r);) {
                    if (n[r]) throw new Error("Invalid tasks tree. Cyclic reference has been detected on task " + r);
                    n[r] = !0, i = this.getItem(r), t.call(this, i), r = this.getParent(i)
                }
            }, _add_branch: function (t, e, n) {
                var r = void 0 === n ? this.getParent(t) : n;
                this.hasChild(r) || (this._branches[r] = i.$create());
                for (var a = this.getChildren(r), o = !1, s = 0, l = a.length; s < l; s++) if (a[s] == t.id) {
                    o = !0;
                    break
                }
                o || (1 * e == e ? a.splice(e, 0, t.id) : a.push(t.id), t.$rendered_parent = r)
            }, _move_branch: function (t, e, n) {
                this._replace_branch_child(e, t.id), this.exists(n) || n == this.$getRootId() ? this._add_branch(t, void 0, n) : delete this._branches[t.id], t.$level = this.calculateItemLevel(t), this.eachItem(function (t) {
                    t.$level = this.calculateItemLevel(t)
                }, t.id)
            }, _replace_branch_child: function (t, e, n) {
                var r = this.getChildren(t);
                if (r && void 0 !== t) {
                    for (var a = i.$create(), o = 0; o < r.length; o++) r[o] != e ? a.push(r[o]) : n && a.push(n);
                    this._branches[t] = a
                }
            }, sort: function (t, e, n) {
                this.exists(n) || (n = this.$getRootId()), t || (t = "order");
                var i = "string" == typeof t ? function (e, n) {
                    return e[t] == n[t] || a.isDate(e[t]) && a.isDate(n[t]) && e[t].valueOf() == n[t].valueOf() ? 0 : e[t] > n[t] ? 1 : -1
                } : t;
                if (e) {
                    var r = i;
                    i = function (t, e) {
                        return r(e, t)
                    }
                }
                var o = this.getChildren(n);
                if (o) {
                    for (var s = [], l = o.length - 1; l >= 0; l--) s[l] = this.getItem(o[l]);
                    s.sort(i);
                    for (l = 0; l < s.length; l++) o[l] = s[l].id, this.sort(t, e, o[l])
                }
            }, filter: function (t) {
                for (var e in this.pull) this.pull[e].$rendered_parent !== this.getParent(this.pull[e]) && this._move_branch(this.pull[e], this.pull[e].$rendered_parent, this.getParent(this.pull[e]));
                return o.prototype.filter.apply(this, arguments)
            }, open: function (t) {
                this.exists(t) && (this.getItem(t).$open = !0, this.callEvent("onItemOpen", [t]))
            }, close: function (t) {
                this.exists(t) && (this.getItem(t).$open = !1, this.callEvent("onItemClose", [t]))
            }, destructor: function () {
                o.prototype.destructor.call(this), this._branches = null
            }
        }, o.prototype), t.exports = s
    }, function (t, e, n) {
        var i = n(0), r = {
            $create: function (t) {
                return i.mixin(t || [], this)
            }, $removeAt: function (t, e) {
                t >= 0 && this.splice(t, e || 1)
            }, $remove: function (t) {
                this.$removeAt(this.$find(t))
            }, $insertAt: function (t, e) {
                if (e || 0 === e) {
                    var n = this.splice(e, this.length - e);
                    this[e] = t, this.push.apply(this, n)
                } else this.push(t)
            }, $find: function (t) {
                for (var e = 0; e < this.length; e++) if (t == this[e]) return e;
                return -1
            }, $each: function (t, e) {
                for (var n = 0; n < this.length; n++) t.call(e || this, this[n])
            }, $map: function (t, e) {
                for (var n = 0; n < this.length; n++) this[n] = t.call(e || this, this[n]);
                return this
            }, $filter: function (t, e) {
                for (var n = 0; n < this.length; n++) t.call(e || this, this[n]) || (this.splice(n, 1), n--);
                return this
            }
        };
        t.exports = r
    }, function (t, e, n) {
        var i = n(37), r = n(0), a = n(4), o = function (t) {
            return this.pull = {}, this.$initItem = t.initItem, this.visibleOrder = i.$create(), this.fullOrder = i.$create(), this._skip_refresh = !1, this._filterRule = null, this._searchVisibleOrder = {}, this.$config = t, a(this), this
        };
        o.prototype = {
            _parseInner: function (t) {
                for (var e = null, n = [], i = 0, a = t.length; i < a; i++) e = t[i], this.$initItem && (e = this.$initItem(r.copy(e))), this.callEvent("onItemLoading", [e]) && (this.pull.hasOwnProperty(e.id) || this.fullOrder.push(e.id), n.push(e), this.pull[e.id] = e);
                return n
            }, parse: function (t) {
                this.callEvent("onBeforeParse", [t]);
                var e = this._parseInner(t);
                this.refresh(), this.callEvent("onParse", [e])
            }, getItem: function (t) {
                return this.pull[t]
            }, _updateOrder: function (t) {
                t.call(this.visibleOrder), t.call(this.fullOrder)
            }, updateItem: function (t, e) {
                if (r.defined(e) || (e = this.getItem(t)), !this._skip_refresh && !1 === this.callEvent("onBeforeUpdate", [e.id, e])) return !1;
                this.pull[t] = e, this._skip_refresh || (this.callEvent("onAfterUpdate", [e.id, e]), this.callEvent("onStoreUpdated", [e.id, e, "update"]))
            }, _removeItemInner: function (t) {
                this._updateOrder(function () {
                    this.$remove(t)
                }), delete this.pull[t]
            }, removeItem: function (t) {
                var e = this.getItem(t);
                if (!this._skip_refresh && !1 === this.callEvent("onBeforeDelete", [e.id, e])) return !1;
                this._removeItemInner(t), this._skip_refresh || (this.filter(), this.callEvent("onAfterDelete", [e.id, e]), this.callEvent("onStoreUpdated", [e.id, e, "delete"]))
            }, _addItemInner: function (t, e) {
                if (this.exists(t.id)) this.silent(function () {
                    this.updateItem(t.id, t)
                }); else {
                    var n = this.visibleOrder, i = n.length;
                    (!r.defined(e) || e < 0) && (e = i), e > i && (e = Math.min(n.length, e))
                }
                this.pull[t.id] = t, this._skip_refresh || this._updateOrder(function () {
                    -1 === this.$find(t.id) && this.$insertAt(t.id, e)
                }), this.filter()
            }, isVisible: function (t) {
                return this.visibleOrder.$find(t) > -1
            }, getVisibleItems: function () {
                return this.getIndexRange()
            }, addItem: function (t, e) {
                return r.defined(t.id) || (t.id = r.uid()), this.$initItem && (t = this.$initItem(t)), !(!this._skip_refresh && !1 === this.callEvent("onBeforeAdd", [t.id, t])) && (this._addItemInner(t, e), this._skip_refresh || (this.callEvent("onAfterAdd", [t.id, t]), this.callEvent("onStoreUpdated", [t.id, t, "add"])), t.id)
            }, _changeIdInner: function (t, e) {
                this.pull[t] && (this.pull[e] = this.pull[t]);
                var n = this._searchVisibleOrder[t];
                this.pull[e].id = e, this._updateOrder(function () {
                    this[this.$find(t)] = e
                }), this._searchVisibleOrder[e] = n, delete this._searchVisibleOrder[t], delete this.pull[t]
            }, changeId: function (t, e) {
                this._changeIdInner(t, e), this.callEvent("onIdChange", [t, e])
            }, exists: function (t) {
                return !!this.pull[t]
            }, _moveInner: function (t, e) {
                var n = this.getIdByIndex(t);
                this._updateOrder(function () {
                    this.$removeAt(t), this.$insertAt(n, Math.min(this.length, e))
                })
            }, move: function (t, e) {
                var n = this.getIdByIndex(t), i = this.getItem(n);
                this._moveInner(t, e), this._skip_refresh || this.callEvent("onStoreUpdated", [i.id, i, "move"])
            }, clearAll: function () {
                this.pull = {}, this.visibleOrder = i.$create(), this.fullOrder = i.$create(), this._skip_refresh || (this.callEvent("onClearAll", []), this.refresh())
            }, silent: function (t, e) {
                this._skip_refresh = !0, t.call(e || this), this._skip_refresh = !1
            }, arraysEqual: function (t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
                return !0
            }, refresh: function (t, e) {
                var n;
                if (!this._skip_refresh && (n = t ? [t, this.pull[t], "paint"] : [null, null, null], !1 !== this.callEvent("onBeforeStoreUpdate", n))) {
                    if (t) {
                        if (!e) {
                            var i = this.visibleOrder;
                            this.filter(), this.arraysEqual(i, this.visibleOrder) || (t = void 0)
                        }
                    } else this.filter();
                    n = t ? [t, this.pull[t], "paint"] : [null, null, null], this.callEvent("onStoreUpdated", n)
                }
            }, count: function () {
                return this.fullOrder.length
            }, countVisible: function () {
                return this.visibleOrder.length
            }, sort: function (t) {
            }, serialize: function () {
            }, eachItem: function (t) {
                for (var e = 0; e < this.fullOrder.length; e++) {
                    var n = this.pull[this.fullOrder[e]];
                    t.call(this, n)
                }
            }, filter: function (t) {
                this.callEvent("onBeforeFilter", []);
                var e = i.$create();
                this.eachItem(function (t) {
                    this.callEvent("onFilterItem", [t.id, t]) && e.push(t.id)
                }), this.visibleOrder = e, this._searchVisibleOrder = {};
                for (var n = 0; n < this.visibleOrder.length; n++) this._searchVisibleOrder[this.visibleOrder[n]] = n;
                this.callEvent("onFilter", [])
            }, getIndexRange: function (t, e) {
                e = Math.min(e || 1 / 0, this.countVisible() - 1);
                for (var n = [], i = t || 0; i <= e; i++) n.push(this.getItem(this.visibleOrder[i]));
                return n
            }, getItems: function () {
                var t = [];
                for (var e in this.pull) t.push(this.pull[e]);
                return t
            }, getIdByIndex: function (t) {
                return this.visibleOrder[t]
            }, getIndexById: function (t) {
                var e = this._searchVisibleOrder[t];
                return void 0 === e && (e = -1), e
            }, _getNullIfUndefined: function (t) {
                return void 0 === t ? null : t
            }, getFirst: function () {
                return this._getNullIfUndefined(this.visibleOrder[0])
            }, getLast: function () {
                return this._getNullIfUndefined(this.visibleOrder[this.visibleOrder.length - 1])
            }, getNext: function (t) {
                return this._getNullIfUndefined(this.visibleOrder[this.getIndexById(t) + 1])
            }, getPrev: function (t) {
                return this._getNullIfUndefined(this.visibleOrder[this.getIndexById(t) - 1])
            }, destructor: function () {
                this.detachAllEvents(), this.pull = null, this.$initItem = null, this.visibleOrder = null, this.fullOrder = null, this._skip_refresh = null, this._filterRule = null, this._searchVisibleOrder = null
            }
        }, t.exports = o
    }, function (t, e) {
        var n, i, r = t.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : a
            } catch (t) {
                n = a
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (t) {
                i = o
            }
        }();
        var l, c = [], u = !1, d = -1;

        function h() {
            u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && f())
        }

        function f() {
            if (!u) {
                var t = s(h);
                u = !0;
                for (var e = c.length; e;) {
                    for (l = c, c = []; ++d < e;) l && l[d].run();
                    d = -1, e = c.length
                }
                l = null, u = !1, function (t) {
                    if (i === clearTimeout) return clearTimeout(t);
                    if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                    try {
                        i(t)
                    } catch (e) {
                        try {
                            return i.call(null, t)
                        } catch (e) {
                            return i.call(this, t)
                        }
                    }
                }(t)
            }
        }

        function _(t, e) {
            this.fun = t, this.array = e
        }

        function g() {
        }

        r.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new _(t, e)), 1 !== c.length || u || s(f)
        }, _.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function (t) {
            return []
        }, r.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, r.cwd = function () {
            return "/"
        }, r.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, r.umask = function () {
            return 0
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            if (!e) return !0;
            if (t._on_timeout) return !1;
            var n = Math.ceil(1e3 / e);
            return n < 2 || (setTimeout(function () {
                delete t._on_timeout
            }, n), t._on_timeout = !0, !0)
        }
    }, function (t, e, n) {
        var i = n(0);
        t.exports = function t(e, n) {
            e = e || i.event, n = n || i.eventRemove;
            var r = [], a = {
                attach: function (t, n, i, a) {
                    r.push({element: t, event: n, callback: i, capture: a}), e(t, n, i, a)
                }, detach: function (t, e, i, a) {
                    n(t, e, i, a);
                    for (var o = 0; o < r.length; o++) {
                        var s = r[o];
                        s.element === t && s.event === e && s.callback === i && s.capture === a && (r.splice(o, 1), o--)
                    }
                }, detachAll: function () {
                    for (var t = r.slice(), e = 0; e < t.length; e++) {
                        var n = t[e];
                        a.detach(n.element, n.event, n.callback, n.capture), a.detach(n.element, n.event, n.callback, void 0), a.detach(n.element, n.event, n.callback, !1), a.detach(n.element, n.event, n.callback, !0)
                    }
                    r.splice(0, r.length)
                }, extend: function () {
                    return t(this.event, this.eventRemove)
                }
            };
            return a
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = new RegExp("<(?:.|\n)*?>", "gm"), n = new RegExp(" +", "gm");

            function i(t) {
                return (t + "").replace(e, " ").replace(n, " ")
            }

            var r = new RegExp("'", "gm");

            function a(t) {
                return (t + "").replace(r, "&#39;")
            }

            for (var o in t._waiAria = {
                getAttributeString: function (t) {
                    var e = [" "];
                    for (var n in t) {
                        var r = a(i(t[n]));
                        e.push(n + "='" + r + "'")
                    }
                    return e.push(" "), e.join(" ")
                }, getTimelineCellAttr: function (e) {
                    return t._waiAria.getAttributeString({"aria-label": e})
                }, _taskCommonAttr: function (e, n) {
                    e.start_date && e.end_date && (n.setAttribute("aria-label", i(t.templates.tooltip_text(e.start_date, e.end_date, e))), e.$dataprocessor_class && n.setAttribute("aria-busy", !0), n.setAttribute("aria-selected", t.isSelectedTask(e.id) ? "true" : "false"))
                }, setTaskBarAttr: function (e, n) {
                    this._taskCommonAttr(e, n), !t.isReadonly(e) && t.config.drag_move && (e.id != t.getState().drag_id ? n.setAttribute("aria-grabbed", !1) : n.setAttribute("aria-grabbed", !0))
                }, taskRowAttr: function (e, n) {
                    this._taskCommonAttr(e, n), !t.isReadonly(e) && t.config.order_branch && n.setAttribute("aria-grabbed", !1), n.setAttribute("role", "row"), n.setAttribute("aria-level", e.$level), t.hasChild(e.id) && n.setAttribute("aria-expanded", e.$open ? "true" : "false")
                }, linkAttr: function (e, n) {
                    var r = t.config.links, a = e.type == r.finish_to_start || e.type == r.start_to_start,
                        o = e.type == r.start_to_start || e.type == r.start_to_finish,
                        s = t.locale.labels.link + " " + t.templates.drag_link(e.source, o, e.target, a);
                    n.setAttribute("aria-label", i(s)), t.isReadonly(e) && n.setAttribute("aria-readonly", !0)
                }, gridSeparatorAttr: function (t) {
                    t.setAttribute("role", "separator")
                }, lightboxHiddenAttr: function (t) {
                    t.setAttribute("aria-hidden", "true")
                }, lightboxVisibleAttr: function (t) {
                    t.setAttribute("aria-hidden", "false")
                }, lightboxAttr: function (t) {
                    t.setAttribute("role", "dialog"), t.setAttribute("aria-hidden", "true"), t.firstChild.setAttribute("role", "heading")
                }, lightboxButtonAttrString: function (e) {
                    return this.getAttributeString({role: "button", "aria-label": t.locale.labels[e], tabindex: "0"})
                }, lightboxHeader: function (t, e) {
                    t.setAttribute("aria-label", e)
                }, lightboxSelectAttrString: function (e) {
                    var n = "";
                    switch (e) {
                        case"%Y":
                            n = t.locale.labels.years;
                            break;
                        case"%m":
                            n = t.locale.labels.months;
                            break;
                        case"%d":
                            n = t.locale.labels.days;
                            break;
                        case"%H:%i":
                            n = t.locale.labels.hours + t.locale.labels.minutes
                    }
                    return t._waiAria.getAttributeString({"aria-label": n})
                }, lightboxDurationInputAttrString: function (e) {
                    return this.getAttributeString({
                        "aria-label": t.locale.labels.column_duration,
                        "aria-valuemin": "0"
                    })
                }, gridAttrString: function () {
                    return [" role='treegrid'", t.config.multiselect ? "aria-multiselectable='true'" : "aria-multiselectable='false'", " "].join(" ")
                }, gridScaleRowAttrString: function () {
                    return "role='row'"
                }, gridScaleCellAttrString: function (e, n) {
                    var i = "";
                    if ("add" == e.name) i = this.getAttributeString({
                        role: "button",
                        "aria-label": t.locale.labels.new_task
                    }); else {
                        var r = {role: "columnheader", "aria-label": n};
                        t._sort && t._sort.name == e.name && ("asc" == t._sort.direction ? r["aria-sort"] = "ascending" : r["aria-sort"] = "descending"), i = this.getAttributeString(r)
                    }
                    return i
                }, gridDataAttrString: function () {
                    return "role='rowgroup'"
                }, gridCellAttrString: function (e, n, i) {
                    var r = {role: "gridcell", "aria-label": n};
                    return e.editor && !t.isReadonly(i) || (r["aria-readonly"] = !0), this.getAttributeString(r)
                }, gridAddButtonAttrString: function (e) {
                    return this.getAttributeString({role: "button", "aria-label": t.locale.labels.new_task})
                }, messageButtonAttrString: function (t) {
                    return "tabindex='0' role='button' aria-label='" + t + "'"
                }, messageInfoAttr: function (t) {
                    t.setAttribute("role", "alert")
                }, messageModalAttr: function (t, e) {
                    t.setAttribute("role", "dialog"), e && t.setAttribute("aria-labelledby", e)
                }, quickInfoAttr: function (t) {
                    t.setAttribute("role", "dialog")
                }, quickInfoHeaderAttrString: function () {
                    return " role='heading' "
                }, quickInfoHeader: function (t, e) {
                    t.setAttribute("aria-label", e)
                }, quickInfoButtonAttrString: function (e) {
                    return t._waiAria.getAttributeString({role: "button", "aria-label": e, tabindex: "0"})
                }, tooltipAttr: function (t) {
                    t.setAttribute("role", "tooltip")
                }, tooltipVisibleAttr: function (t) {
                    t.setAttribute("aria-hidden", "false")
                }, tooltipHiddenAttr: function (t) {
                    t.setAttribute("aria-hidden", "true")
                }
            }, t._waiAria) t._waiAria[o] = function (e) {
                return function () {
                    return t.config.wai_aria_attributes ? e.apply(this, arguments) : ""
                }
            }(t._waiAria[o])
        }
    }, function (t, e) {
        t.exports = function (t) {
            t._extend_to_optional = function (e) {
                var n = e, i = {
                    render: n.render, focus: n.focus, set_value: function (e, r, a, o) {
                        var s = t._resolve_default_mapping(o);
                        if (!a[s.start_date] || "start_date" == s.start_date && this._isAllowedUnscheduledTask(a)) {
                            i.disable(e, o);
                            var l = {};
                            for (var c in s) l[s[c]] = a[c];
                            return n.set_value.call(t, e, r, l, o)
                        }
                        return i.enable(e, o), n.set_value.call(t, e, r, a, o)
                    }, get_value: function (e, i, r) {
                        return r.disabled ? {start_date: null} : n.get_value.call(t, e, i, r)
                    }, update_block: function (e, n) {
                        if (t.callEvent("onSectionToggle", [t._lightbox_id, n]), e.style.display = n.disabled ? "none" : "block", n.button) {
                            var i = e.previousSibling.querySelector(".gantt_custom_button_label"), r = t.locale.labels,
                                a = n.disabled ? r[n.name + "_enable_button"] : r[n.name + "_disable_button"];
                            i.innerHTML = a
                        }
                        t.resizeLightbox()
                    }, disable: function (t, e) {
                        e.disabled = !0, i.update_block(t, e)
                    }, enable: function (t, e) {
                        e.disabled = !1, i.update_block(t, e)
                    }, button_click: function (e, n, r, a) {
                        if (!1 !== t.callEvent("onSectionButton", [t._lightbox_id, r])) {
                            var o = t._get_typed_lightbox_config()[e];
                            o.disabled ? i.enable(a, o) : i.disable(a, o)
                        }
                    }
                };
                return i
            }, t.form_blocks.duration_optional = t._extend_to_optional(t.form_blocks.duration), t.form_blocks.time_optional = t._extend_to_optional(t.form_blocks.time)
        }
    }, function (t, e, n) {
        var i = n(2);
        t.exports = function (t) {
            var e = n(11)(t);

            function r() {
                return e.apply(this, arguments) || this
            }

            return i(r, e), r.prototype.render = function (n) {
                var i = t.config.types, r = t.locale.labels, a = [], o = n.filter || function (t, e) {
                    return !i.placeholder || e !== i.placeholder
                };
                for (var s in i) !1 == !o(s, i[s]) && a.push({key: i[s], label: r["type_" + s]});
                n.options = a;
                var l = n.onchange;
                return n.onchange = function () {
                    t.changeLightboxType(this.value), "function" == typeof l && l.apply(this, arguments)
                }, e.prototype.render.apply(this, arguments)
            }, r
        }
    }, function (t, e, n) {
        var i = n(2), r = n(25);
        t.exports = function (t) {
            var e = n(5)(t);

            function a() {
                return e.apply(this, arguments) || this
            }

            function o(e) {
                return !e || e === t.config.constraint_types.ASAP || e === t.config.constraint_types.ALAP
            }

            function s(t, e) {
                for (var n = o(e), i = 0; i < t.length; i++) t[i].disabled = n
            }

            return i(a, e), a.prototype.render = function (e) {
                var n = (e.height || 30) + "px",
                    i = "<div class='gantt_cal_ltext gantt_section_" + e.name + "' style='height:" + n + ";'>", a = [];
                for (var o in t.config.constraint_types) a.push({
                    key: t.config.constraint_types[o],
                    label: t.locale.labels[t.config.constraint_types[o]]
                });
                return e.options = e.options || a, i += "<span data-constraint-type-select>" + r.getHtmlSelect(e.options, [{
                    key: "data-type",
                    value: "constraint-type"
                }]) + "</span>", i += "<label data-constraint-time-select>" + (t.locale.labels.constraint_date || "Constraint date") + ": " + t.form_blocks.getTimePicker.call(this, e) + "</label>", i += "</div>"
            }, a.prototype.set_value = function (e, n, i, r) {
                var a = e.querySelector("[data-constraint-type-select] select"),
                    o = e.querySelectorAll("[data-constraint-time-select] select"), l = r._time_format_order,
                    c = t._resolve_default_mapping(r);
                a._eventsInitialized || (a.addEventListener("change", function (t) {
                    s(o, t.target.value)
                }), a._eventsInitialized = !0);
                var u = i[c.constraint_date] || new Date;
                t.form_blocks._fill_lightbox_select(o, 0, u, l, r);
                var d = i[c.constraint_type] || t.getConstraintType(i);
                a.value = d, s(o, d)
            }, a.prototype.get_value = function (e, n, i) {
                var r = e.querySelector("[data-constraint-type-select] select"),
                    a = e.querySelectorAll("[data-constraint-time-select] select"), s = r.value, l = null;
                return o(s) || (l = t.form_blocks.getTimePickerValue(a, i)), {constraint_type: s, constraint_date: l}
            }, a.prototype.focus = function (e) {
                t._focus(e.querySelector("select"))
            }, a
        }
    }, function (t, e, n) {
        var i = n(2);
        t.exports = function (t) {
            var e = n(11)(t);

            function r() {
                return e.apply(this, arguments) || this
            }

            function a(e, n) {
                var i = [], r = [];
                n && (i = t.getTaskByTime(), e.allow_root && i.unshift({
                    id: t.config.root_id,
                    text: e.root_label || ""
                }), i = function (e, n, i) {
                    var r = n.filter || function () {
                        return !0
                    };
                    e = e.slice(0);
                    for (var a = 0; a < e.length; a++) {
                        var o = e[a];
                        (o.id == i || t.isChildOf(o.id, i) || !1 === r(o.id, o)) && (e.splice(a, 1), a--)
                    }
                    return e
                }(i, e, n), e.sort && i.sort(e.sort));
                for (var a = e.template || t.templates.task_text, o = 0; o < i.length; o++) {
                    var s = a.apply(t, [i[o].start_date, i[o].end_date, i[o]]);
                    void 0 === s && (s = ""), r.push({key: i[o].id, label: s})
                }
                return e.options = r, e.map_to = e.map_to || "parent", t.form_blocks.select.render.apply(this, arguments)
            }

            return i(r, e), r.prototype.render = function (t) {
                return a(t, !1)
            }, r.prototype.set_value = function (e, n, i, r) {
                var o = document.createElement("div");
                o.innerHTML = a(r, i.id);
                var s = o.removeChild(o.firstChild);
                return e.onselect = null, e.parentNode.replaceChild(s, e), t.form_blocks.select.set_value.apply(t, [s, n, i, r])
            }, r
        }
    }, function (t, e, n) {
        var i = n(2), r = n(33).default;
        t.exports = function (t) {
            var e = n(5)(t);

            function a() {
                return e.apply(this, arguments) || this
            }

            function o(t) {
                return t.formatter || new r
            }

            function s(e, n) {
                var i = e.getElementsByTagName("select"), r = n._time_format_order, a = 0, o = 0;
                if (t.defined(r[3])) {
                    var s = i[r[3]], l = parseInt(s.value, 10);
                    isNaN(l) && s.hasAttribute("data-value") && (l = parseInt(s.getAttribute("data-value"), 10)), a = Math.floor(l / 60), o = l % 60
                }
                return new Date(i[r[2]].value, i[r[1]].value, i[r[0]].value, a, o)
            }

            function l(t, e) {
                var n = t.getElementsByTagName("input")[1];
                return (n = o(e).parse(n.value)) && !window.isNaN(n) || (n = 1), n < 0 && (n *= -1), n
            }

            return i(a, e), a.prototype.render = function (e) {
                var n = "<div class='gantt_time_selects'>" + t.form_blocks.getTimePicker.call(this, e) + "</div>",
                    i = " " + t.locale.labels[t.config.duration_unit + "s"] + " ",
                    r = e.single_date ? " style='display:none'" : "", a = e.readonly ? " disabled='disabled'" : "",
                    o = t._waiAria.lightboxDurationInputAttrString(e), s = "gantt_duration_value";
                e.formatter && (i = "", s += " gantt_duration_value_formatted");
                var l = "<div class='gantt_duration' " + r + "><input type='button' class='gantt_duration_dec' value='−'" + a + "><input type='text' value='5days' class='" + s + "'" + a + " " + o + "><input type='button' class='gantt_duration_inc' value='+'" + a + ">" + i + "<span></span></div>";
                return "<div style='height:" + (e.height || 30) + "px;padding-top:0px;font-size:inherit;' class='gantt_section_time'>" + n + " " + l + "</div>"
            }, a.prototype.set_value = function (e, n, i, r) {
                var a, c, u, d, h = e.getElementsByTagName("select"), f = e.getElementsByTagName("input"), _ = f[1],
                    g = [f[0], f[2]], p = e.getElementsByTagName("span")[0], v = r._time_format_order;

                function m() {
                    var n = s.call(t, e, r), a = l.call(t, e, r),
                        o = t.calculateEndDate({start_date: n, duration: a, task: i}),
                        c = t.templates.task_end_date || t.templates.task_date;
                    p.innerHTML = c(o)
                }

                function y(t) {
                    var e = _.value;
                    e = o(r).parse(e), window.isNaN(e) && (e = 0), (e += t) < 1 && (e = 1), _.value = o(r).format(e), m()
                }

                g[0].onclick = t.bind(function () {
                    y(-1 * t.config.duration_step)
                }, this), g[1].onclick = t.bind(function () {
                    y(1 * t.config.duration_step)
                }, this), h[0].onchange = m, h[1].onchange = m, h[2].onchange = m, h[3] && (h[3].onchange = m), _.onkeydown = t.bind(function (e) {
                    var n;
                    return (n = (e = e || window.event).charCode || e.keyCode || e.which) == t.constants.KEY_CODES.DOWN ? (y(-1 * t.config.duration_step), !1) : n == t.constants.KEY_CODES.UP ? (y(1 * t.config.duration_step), !1) : void window.setTimeout(m, 1)
                }, this), _.onchange = t.bind(m, this), "string" == typeof (a = t._resolve_default_mapping(r)) && (a = {start_date: a}), c = i[a.start_date] || new Date, u = i[a.end_date] || t.calculateEndDate({
                    start_date: c,
                    duration: 1,
                    task: i
                }), d = Math.round(i[a.duration]) || t.calculateDuration({
                    start_date: c,
                    end_date: u,
                    task: i
                }), d = o(r).format(d), t.form_blocks._fill_lightbox_select(h, 0, c, v, r), _.value = d, m()
            }, a.prototype.get_value = function (e, n, i) {
                var r = s(e, i), a = l(e, i), o = t.calculateEndDate({start_date: r, duration: a, task: n});
                return "string" == typeof t._resolve_default_mapping(i) ? r : {start_date: r, end_date: o, duration: a}
            }, a.prototype.focus = function (e) {
                t._focus(e.getElementsByTagName("select")[0])
            }, a
        }
    }, function (t, e, n) {
        var i = n(2);
        t.exports = function (t) {
            var e = n(5)(t);

            function r() {
                return e.apply(this, arguments) || this
            }

            return i(r, e), r.prototype.render = function (t) {
                var e = "<div class='gantt_cal_ltext' style='height:" + ((t.height || "23") + "px") + ";'>";
                if (t.options && t.options.length) for (var n = 0; n < t.options.length; n++) e += "<label><input type='radio' value='" + t.options[n].key + "' name='" + t.name + "'>" + t.options[n].label + "</label>";
                return e += "</div>"
            }, r.prototype.set_value = function (t, e, n, i) {
                var r;
                i.options && i.options.length && (r = t.querySelector("input[type=radio][value='" + e + "']") || t.querySelector("input[type=radio][value='" + i.default_value + "']")) && (!t._dhx_onchange && i.onchange && (t.onchange = i.onchange, t._dhx_onchange = !0), r.checked = !0)
            }, r.prototype.get_value = function (t, e) {
                var n = t.querySelector("input[type=radio]:checked");
                return n ? n.value : ""
            }, r.prototype.focus = function (e) {
                t._focus(e.querySelector("input[type=radio]"))
            }, r
        }
    }, function (t, e, n) {
        var i = n(3), r = n(2);
        t.exports = function (t) {
            var e = n(5)(t);

            function a() {
                return e.apply(this, arguments) || this
            }

            return r(a, e), a.prototype.render = function (t) {
                var e = "<div class='gantt_cal_ltext' style='height:" + ((t.height || "23") + "px") + ";'>";
                if (t.options && t.options.length) for (var n = 0; n < t.options.length; n++) e += "<label><input type='checkbox' value='" + t.options[n].key + "' name='" + t.name + "'>" + t.options[n].label + "</label>";
                return e += "</div>"
            }, a.prototype.set_value = function (t, e, n, r) {
                var a = Array.prototype.slice.call(t.querySelectorAll("input[type=checkbox]"));
                !t._dhx_onchange && r.onchange && (t.onchange = r.onchange, t._dhx_onchange = !0), i.forEach(a, function (t) {
                    t.checked = !!e && e.indexOf(t.value) >= 0
                })
            }, a.prototype.get_value = function (t) {
                return i.arrayMap(Array.prototype.slice.call(t.querySelectorAll("input[type=checkbox]:checked")), function (t) {
                    return t.value
                })
            }, a.prototype.focus = function (e) {
                t._focus(e.querySelector("input[type=checkbox]"))
            }, a
        }
    }, function (t, e, n) {
        var i = n(2);
        t.exports = function (t) {
            var e = n(5)(t);

            function r() {
                return e.apply(this, arguments) || this
            }

            return i(r, e), r.prototype.render = function (e) {
                var n = t.form_blocks.getTimePicker.call(this, e),
                    i = "<div style='height:" + (e.height || 30) + "px;padding-top:0px;font-size:inherit;text-align:center;' class='gantt_section_time'>";
                return i += n, e.single_date ? (n = t.form_blocks.getTimePicker.call(this, e, !0), i += "<span></span>") : i += "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>", i += n, i += "</div>"
            }, r.prototype.set_value = function (e, n, i, r) {
                var a = r, o = e.getElementsByTagName("select"), s = r._time_format_order;
                if (a.auto_end_date) for (var l = function () {
                    d = new Date(o[s[2]].value, o[s[1]].value, o[s[0]].value, 0, 0), h = t.calculateEndDate({
                        start_date: d,
                        duration: 1,
                        task: i
                    }), t.form_blocks._fill_lightbox_select(o, s.size, h, s, a)
                }, c = 0; c < 4; c++) o[c].onchange = l;
                var u = t._resolve_default_mapping(r);
                "string" == typeof u && (u = {start_date: u});
                var d = i[u.start_date] || new Date,
                    h = i[u.end_date] || t.calculateEndDate({start_date: d, duration: 1, task: i});
                t.form_blocks._fill_lightbox_select(o, 0, d, s, a), t.form_blocks._fill_lightbox_select(o, s.size, h, s, a)
            }, r.prototype.get_value = function (e, n, i) {
                var r, a = e.getElementsByTagName("select"), o = i._time_format_order;
                return r = t.form_blocks.getTimePickerValue(a, i), "string" == typeof t._resolve_default_mapping(i) ? r : {
                    start_date: r,
                    end_date: function (e, n, r) {
                        var a = t.form_blocks.getTimePickerValue(e, i, n.size);
                        return a <= r ? t.date.add(r, t._get_timepicker_step(), "minute") : a
                    }(a, o, r)
                }
            }, r.prototype.focus = function (e) {
                t._focus(e.getElementsByTagName("select")[0])
            }, r
        }
    }, function (t, e, n) {
        var i = n(2);
        t.exports = function (t) {
            var e = n(5)(t);

            function r() {
                return e.apply(this, arguments) || this
            }

            return i(r, e), r.prototype.render = function (t) {
                return "<div class='gantt_cal_ltext' style='height:" + ((t.height || "130") + "px") + ";'><textarea></textarea></div>"
            }, r.prototype.set_value = function (e, n) {
                t.form_blocks.textarea._get_input(e).value = n || ""
            }, r.prototype.get_value = function (e) {
                return t.form_blocks.textarea._get_input(e).value
            }, r.prototype.focus = function (e) {
                var n = t.form_blocks.textarea._get_input(e);
                t._focus(n, !0)
            }, r.prototype._get_input = function (t) {
                return t.querySelector("textarea")
            }, r
        }
    }, function (t, e, n) {
        var i = n(2);
        t.exports = function (t) {
            var e = n(5)(t);

            function r() {
                return e.apply(this, arguments) || this
            }

            return i(r, e), r.prototype.render = function (t) {
                return "<div class='gantt_cal_ltext gantt_cal_template' style='height:" + ((t.height || "30") + "px") + ";'></div>"
            }, r.prototype.set_value = function (t, e) {
                t.innerHTML = e || ""
            }, r.prototype.get_value = function (t) {
                return t.innerHTML || ""
            }, r.prototype.focus = function () {
            }, r
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(1), i = n(3), r = n(52)(t), a = n(51)(t), o = n(50)(t), s = n(11)(t), l = n(49)(t), c = n(48)(t),
                u = n(47)(t), d = n(46)(t), h = n(11)(t), f = n(45)(t), _ = n(44)(t);

            function g(e, n) {
                var i, r, a = "";
                for (r = 0; r < e.length; r++) i = t.config._migrate_buttons[e[r]] ? t.config._migrate_buttons[e[r]] : e[r], a += "<div " + t._waiAria.lightboxButtonAttrString(i) + " class='gantt_btn_set gantt_left_btn_set " + i + "_set'" + (n ? " style='float:right;'" : "") + "><div dhx_button='1' data-dhx-button='1' class='" + i + "'></div><div>" + t.locale.labels[i] + "</div></div>";
                return a
            }

            function p(e, n, i) {
                var r, a, o, s, l, c, u = "";
                switch (i.timeFormat[n]) {
                    case"%Y":
                        for (e._time_format_order[2] = n, e._time_format_order.size++, e.year_range && (isNaN(e.year_range) ? e.year_range.push && (o = e.year_range[0], s = e.year_range[1]) : r = e.year_range), r = r || 10, a = a || Math.floor(r / 2), o = o || i.date.getFullYear() - a, s = s || o + r, l = o; l < s; l++) u += "<option value='" + l + "'>" + l + "</option>";
                        break;
                    case"%m":
                        for (e._time_format_order[1] = n, e._time_format_order.size++, l = 0; l < 12; l++) u += "<option value='" + l + "'>" + t.locale.date.month_full[l] + "</option>";
                        break;
                    case"%d":
                        for (e._time_format_order[0] = n, e._time_format_order.size++, l = 1; l < 32; l++) u += "<option value='" + l + "'>" + l + "</option>";
                        break;
                    case"%H:%i":
                        for (e._time_format_order[3] = n, e._time_format_order.size++, l = i.first, c = i.date.getDate(), e._time_values = []; l < i.last;) u += "<option value='" + l + "'>" + t.templates.time_picker(i.date) + "</option>", e._time_values.push(l), i.date.setTime(i.date.valueOf() + 60 * t._get_timepicker_step() * 1e3), l = 24 * (i.date.getDate() != c ? 1 : 0) * 60 + 60 * i.date.getHours() + i.date.getMinutes()
                }
                return u
            }

            t._lightbox_methods = {}, t._lightbox_template = "<div class='gantt_cal_ltitle'><span class='gantt_mark'>&nbsp;</span><span class='gantt_time'></span><span class='gantt_title'></span></div><div class='gantt_cal_larea'></div>", t.$services.getService("state").registerProvider("lightbox", function () {
                return {lightbox: t._lightbox_id}
            }), t.showLightbox = function (t) {
                if (this.callEvent("onBeforeLightbox", [t])) {
                    var e = this.getTask(t), n = this.getLightbox(this.getTaskType(e.type));
                    this._center_lightbox(n), this.showCover(), this._fill_lightbox(t, n), this._waiAria.lightboxVisibleAttr(n), this.callEvent("onLightbox", [t])
                }
            }, t._get_timepicker_step = function () {
                if (this.config.round_dnd_dates) {
                    var e;
                    if (function (t) {
                        var e = t.$ui.getView("timeline");
                        return !(!e || !e.isVisible())
                    }(this)) {
                        var n = t.getScale();
                        e = i.getSecondsInUnit(n.unit) * n.step / 60
                    }
                    return (!e || e >= 1440) && (e = this.config.time_step), e
                }
                return this.config.time_step
            }, t.getLabel = function (t, e) {
                for (var n = this._get_typed_lightbox_config(), i = 0; i < n.length; i++) if (n[i].map_to == t) for (var r = n[i].options, a = 0; a < r.length; a++) if (r[a].key == e) return r[a].label;
                return ""
            }, t.updateCollection = function (e, n) {
                n = n.slice(0);
                var i = t.serverList(e);
                if (!i) return !1;
                i.splice(0, i.length), i.push.apply(i, n || []), t.resetLightbox()
            }, t.getLightboxType = function () {
                return this.getTaskType(this._lightbox_type)
            }, t.getLightbox = function (e) {
                var n, i, r, a, o = "";
                return void 0 === e && (e = this.getLightboxType()), this._lightbox && this.getLightboxType() == this.getTaskType(e) || (this._lightbox_type = this.getTaskType(e), n = document.createElement("div"), o = "gantt_cal_light", i = this._is_lightbox_timepicker(), (t.config.wide_form || i) && (o += " gantt_cal_light_wide"), i && (t.config.wide_form = !0, o += " gantt_cal_light_full"), n.className = o, n.style.visibility = "hidden", r = this._lightbox_template, r += g(this.config.buttons_left), r += g(this.config.buttons_right, !0), n.innerHTML = r, t._waiAria.lightboxAttr(n), t.config.drag_lightbox && (n.firstChild.onmousedown = t._ready_to_dnd, n.firstChild.onselectstart = function () {
                    return !1
                }, n.firstChild.style.cursor = "pointer", t._init_dnd_events()), document.body.insertBefore(n, document.body.firstChild), this._lightbox = n, a = this._get_typed_lightbox_config(e), r = this._render_sections(a), n.querySelector("div.gantt_cal_larea").innerHTML = r, function (e) {
                    var n, i, r, a, o, s;
                    for (s = 0; s < e.length; s++) n = e[s], r = document.getElementById(n.id), n.id && r && (i = r.querySelector("label"), (a = r.nextSibling) && (o = a.querySelector("input, select, textarea")) && (o.id = o.id || "input_" + t.uid(), n.inputId = o.id, i.setAttribute("for", n.inputId)))
                }(a), this.resizeLightbox(), this._init_lightbox_events(this), n.style.display = "none", n.style.visibility = "visible"), this._lightbox
            }, t._render_sections = function (t) {
                for (var e = "", n = 0; n < t.length; n++) {
                    var i = this.form_blocks[t[n].type];
                    if (i) {
                        t[n].id = "area_" + this.uid();
                        var r = t[n].hidden ? " style='display:none'" : "", a = "";
                        t[n].button && (a = "<div class='gantt_custom_button' data-index='" + n + "'><div class='gantt_custom_button_" + t[n].button + "'></div><div class='gantt_custom_button_label'>" + this.locale.labels["button_" + t[n].button] + "</div></div>"), this.config.wide_form && (e += "<div class='gantt_wrap_section' " + r + ">"), e += "<div id='" + t[n].id + "' class='gantt_cal_lsection'><label>" + a + this.locale.labels["section_" + t[n].name] + "</label></div>" + i.render.call(this, t[n]), e += "</div>"
                    }
                }
                return e
            }, t.resizeLightbox = function () {
                if (this._lightbox) {
                    var t = this._lightbox.childNodes[1];
                    t.style.height = "0px", t.style.height = t.scrollHeight + "px", this._lightbox.style.height = t.scrollHeight + this.config.lightbox_additional_height + "px", t.style.height = t.scrollHeight + "px"
                }
            }, t._center_lightbox = function (t) {
                if (t) {
                    t.style.display = "block";
                    var e = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
                        n = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
                        i = window.innerHeight || document.documentElement.clientHeight;
                    t.style.top = e ? Math.round(e + Math.max((i - t.offsetHeight) / 2, 0)) + "px" : Math.round(Math.max((i - t.offsetHeight) / 2, 0) + 9) + "px", document.documentElement.scrollWidth > document.body.offsetWidth ? t.style.left = Math.round(n + (document.body.offsetWidth - t.offsetWidth) / 2) + "px" : t.style.left = Math.round((document.body.offsetWidth - t.offsetWidth) / 2) + "px"
                }
            }, t.showCover = function () {
                if (!this._cover) {
                    this._cover = document.createElement("DIV"), this._cover.className = "gantt_cal_cover";
                    var t = void 0 !== document.height ? document.height : document.body.offsetHeight,
                        e = document.documentElement ? document.documentElement.scrollHeight : 0;
                    this._cover.style.height = Math.max(t, e) + "px", document.body.appendChild(this._cover)
                }
            }, t._init_lightbox_events = function () {
                t.lightbox_events = {}, t.lightbox_events.gantt_save_btn = function () {
                    t._save_lightbox()
                }, t.lightbox_events.gantt_delete_btn = function () {
                    t.callEvent("onLightboxDelete", [t._lightbox_id]) && (t.isTaskExists(t._lightbox_id) ? t.$click.buttons.delete(t._lightbox_id) : t.hideLightbox())
                }, t.lightbox_events.gantt_cancel_btn = function () {
                    t._cancel_lightbox()
                }, t.lightbox_events.default = function (n, i) {
                    if (i.getAttribute("data-dhx-button")) t.callEvent("onLightboxButton", [i.className, i, n]); else {
                        var r, a, o = e.getClassName(i);
                        if (-1 != o.indexOf("gantt_custom_button")) if (-1 != o.indexOf("gantt_custom_button_")) for (r = i.parentNode.getAttribute("data-index"), a = i; a && -1 == e.getClassName(a).indexOf("gantt_cal_lsection");) a = a.parentNode; else r = i.getAttribute("data-index"), a = i.parentNode, i = i.firstChild;
                        var s = t._get_typed_lightbox_config();
                        r && (r *= 1, t.form_blocks[s[1 * r].type].button_click(r, i, a, a.nextSibling))
                    }
                }, this.event(t.getLightbox(), "click", function (n) {
                    var i = (n = n || window.event).target ? n.target : n.srcElement, r = e.getClassName(i);
                    return r || (i = i.previousSibling, r = e.getClassName(i)), i && r && 0 === r.indexOf("gantt_btn_set") && (i = i.firstChild, r = e.getClassName(i)), !(!i || !r) && (t.defined(t.lightbox_events[i.className]) ? t.lightbox_events[i.className] : t.lightbox_events.default)(n, i)
                }), t.getLightbox().onkeydown = function (n) {
                    var i = n || window.event, r = n.target || n.srcElement,
                        a = e.getClassName(r).indexOf("gantt_btn_set") > -1;
                    switch ((n || i).keyCode) {
                        case t.constants.KEY_CODES.SPACE:
                            if ((n || i).shiftKey) return;
                            a && r.click && r.click();
                            break;
                        case t.keys.edit_save:
                            if ((n || i).shiftKey) return;
                            a && r.click ? r.click() : t._save_lightbox();
                            break;
                        case t.keys.edit_cancel:
                            t._cancel_lightbox()
                    }
                }
            }, t._cancel_lightbox = function () {
                var e = this.getLightboxValues();
                this.callEvent("onLightboxCancel", [this._lightbox_id, e.$new]), t.isTaskExists(e.id) && e.$new && this.silent(function () {
                    t.$data.tasksStore.removeItem(e.id), t._update_flags(e.id, null)
                }), this.refreshData(), this.hideLightbox()
            }, t._save_lightbox = function () {
                var t = this.getLightboxValues();
                this.callEvent("onLightboxSave", [this._lightbox_id, t, !!t.$new]) && (t.$new ? (delete t.$new, this.addTask(t, t.parent, this.getTaskIndex(t.id))) : this.isTaskExists(t.id) && (this.mixin(this.getTask(t.id), t, !0), this.refreshTask(t.id), this.updateTask(t.id)), this.refreshData(), this.hideLightbox())
            }, t._resolve_default_mapping = function (t) {
                var e = t.map_to;
                return !{
                    time: !0,
                    time_optional: !0,
                    duration: !0,
                    duration_optional: !0
                }[t.type] ? "constraint" === t.type && (t.map_to && "string" != typeof t.map_to || (e = {
                    constraint_type: "constraint_type",
                    constraint_date: "constraint_date"
                })) : "auto" == t.map_to ? e = {
                    start_date: "start_date",
                    end_date: "end_date",
                    duration: "duration"
                } : "string" == typeof t.map_to && (e = {start_date: t.map_to}), e
            }, t.getLightboxValues = function () {
                var e = {};
                t.isTaskExists(this._lightbox_id) && (e = this.mixin({}, this.getTask(this._lightbox_id)));
                for (var n = this._get_typed_lightbox_config(), i = 0; i < n.length; i++) {
                    var r = document.getElementById(n[i].id);
                    r = r ? r.nextSibling : r;
                    var a = this.form_blocks[n[i].type];
                    if (a) {
                        var o = a.get_value.call(this, r, e, n[i]), s = t._resolve_default_mapping(n[i]);
                        if ("string" == typeof s && "auto" != s) e[s] = o; else if ("object" == typeof s) for (var l in s) s[l] && (e[s[l]] = o[l])
                    }
                }
                return e
            }, t.hideLightbox = function () {
                var t = this.getLightbox();
                t && (t.style.display = "none"), this._waiAria.lightboxHiddenAttr(t), this._lightbox_id = null, this.hideCover(), this.callEvent("onAfterLightbox", [])
            }, t.hideCover = function () {
                this._cover && this._cover.parentNode.removeChild(this._cover), this._cover = null
            }, t.resetLightbox = function () {
                t._lightbox && !t._custom_lightbox && t._lightbox.parentNode.removeChild(t._lightbox), t._lightbox = null, t.hideCover()
            }, t._set_lightbox_values = function (e, n) {
                var i = e, r = n.getElementsByTagName("span"), a = [];
                t.templates.lightbox_header ? (a.push(""), a.push(t.templates.lightbox_header(i.start_date, i.end_date, i)), r[1].innerHTML = "", r[2].innerHTML = t.templates.lightbox_header(i.start_date, i.end_date, i)) : (a.push(this.templates.task_time(i.start_date, i.end_date, i)), a.push(String(this.templates.task_text(i.start_date, i.end_date, i) || "").substr(0, 70)), r[1].innerHTML = this.templates.task_time(i.start_date, i.end_date, i), r[2].innerHTML = String(this.templates.task_text(i.start_date, i.end_date, i) || "").substr(0, 70)), r[1].innerHTML = a[0], r[2].innerHTML = a[1], t._waiAria.lightboxHeader(n, a.join(" "));
                for (var o = this._get_typed_lightbox_config(this.getLightboxType()), s = 0; s < o.length; s++) {
                    var l = o[s];
                    if (this.form_blocks[l.type]) {
                        var c = document.getElementById(l.id).nextSibling, u = this.form_blocks[l.type],
                            d = t._resolve_default_mapping(o[s]), h = this.defined(i[d]) ? i[d] : l.default_value;
                        u.set_value.call(t, c, h, i, l), l.focus && u.focus.call(t, c)
                    }
                }
                e.id && (t._lightbox_id = e.id)
            }, t._fill_lightbox = function (t, e) {
                var n = this.getTask(t);
                this._set_lightbox_values(n, e)
            }, t.getLightboxSection = function (e) {
                for (var n = this._get_typed_lightbox_config(), i = 0; i < n.length && n[i].name != e; i++) ;
                var r = n[i];
                if (!r) return null;
                this._lightbox || this.getLightbox();
                var a = document.getElementById(r.id), o = a.nextSibling, s = {
                    section: r, header: a, node: o, getValue: function (e) {
                        return t.form_blocks[r.type].get_value.call(t, o, e || {}, r)
                    }, setValue: function (e, n) {
                        return t.form_blocks[r.type].set_value.call(t, o, e, n || {}, r)
                    }
                }, l = this._lightbox_methods["get_" + r.type + "_control"];
                return l ? l(s) : s
            }, t._lightbox_methods.get_template_control = function (t) {
                return t.control = t.node, t
            }, t._lightbox_methods.get_select_control = function (t) {
                return t.control = t.node.getElementsByTagName("select")[0], t
            }, t._lightbox_methods.get_textarea_control = function (t) {
                return t.control = t.node.getElementsByTagName("textarea")[0], t
            }, t._lightbox_methods.get_time_control = function (t) {
                return t.control = t.node.getElementsByTagName("select"), t
            }, t._init_dnd_events = function () {
                this.event(document.body, "mousemove", t._move_while_dnd), this.event(document.body, "mouseup", t._finish_dnd), t._init_dnd_events = function () {
                }
            }, t._move_while_dnd = function (e) {
                if (t._dnd_start_lb) {
                    document.gantt_unselectable || (document.body.className += " gantt_unselectable", document.gantt_unselectable = !0);
                    var n = t.getLightbox(), i = [e.pageX, e.pageY];
                    n.style.top = t._lb_start[1] + i[1] - t._dnd_start_lb[1] + "px", n.style.left = t._lb_start[0] + i[0] - t._dnd_start_lb[0] + "px"
                }
            }, t._ready_to_dnd = function (e) {
                var n = t.getLightbox();
                t._lb_start = [parseInt(n.style.left, 10), parseInt(n.style.top, 10)], t._dnd_start_lb = [e.pageX, e.pageY]
            }, t._finish_dnd = function () {
                t._lb_start && (t._lb_start = t._dnd_start_lb = !1, document.body.className = document.body.className.replace(" gantt_unselectable", ""), document.gantt_unselectable = !1)
            }, t._focus = function (e, n) {
                if (e && e.focus) if (t.config.touch) ; else try {
                    n && e.select && e.select(), e.focus()
                } catch (t) {
                }
            }, t.form_blocks = {
                getTimePicker: function (e, n) {
                    var r, a, o, s = "", l = this.config, c = {
                        first: 0,
                        last: 1440,
                        date: this.date.date_part(new Date(t._min_date.valueOf())),
                        timeFormat: function (e) {
                            var n, r, a;
                            if (e.time_format) return e.time_format;
                            a = ["%d", "%m", "%Y"], n = t.getScale(), r = n ? n.unit : t.config.duration_unit, i.getSecondsInUnit(r) < i.getSecondsInUnit("day") && a.push("%H:%i");
                            return a
                        }(e)
                    };
                    for (e._time_format_order = {size: 0}, t.config.limit_time_select && (c.first = 60 * l.first_hour, c.last = 60 * l.last_hour + 1, c.date.setHours(l.first_hour)), r = 0; r < c.timeFormat.length; r++) r > 0 && (s += " "), (a = p(e, r, c)) && (o = t._waiAria.lightboxSelectAttrString(c.timeFormat[r]), s += "<select " + (e.readonly ? "disabled='disabled'" : "") + (n ? " style='display:none' " : "") + o + ">" + a + "</select>");
                    return s
                },
                getTimePickerValue: function (e, n, i) {
                    var r, a = n._time_format_order, o = t.defined(a[3]), s = 0, l = 0, c = i || 0;
                    return o && (r = parseInt(e[a[3] + c].value, 10), s = Math.floor(r / 60), l = r % 60), new Date(e[a[2] + c].value, e[a[1] + c].value, e[a[0] + c].value, s, l)
                },
                _fill_lightbox_select: function (e, n, i, r) {
                    if (e[n + r[0]].value = i.getDate(), e[n + r[1]].value = i.getMonth(), e[n + r[2]].value = i.getFullYear(), t.defined(r[3])) {
                        var a = 60 * i.getHours() + i.getMinutes();
                        a = Math.round(a / t._get_timepicker_step()) * t._get_timepicker_step();
                        var o = e[n + r[3]];
                        o.value = a, o.setAttribute("data-value", a)
                    }
                },
                template: new r,
                textarea: new a,
                select: new s,
                time: new o,
                duration: new u,
                parent: new d,
                radio: new c,
                checkbox: new l,
                resources: new h,
                constraint: new f,
                typeselect: new _
            }, t._is_lightbox_timepicker = function () {
                for (var t = this._get_typed_lightbox_config(), e = 0; e < t.length; e++) if ("time" == t[e].name && "time" == t[e].type) return !0;
                return !1
            }, t._dhtmlx_confirm = function (e, n, i, r) {
                if (!e) return i();
                var a = {text: e};
                n && (a.title = n), r && (a.ok = r), i && (a.callback = function (t) {
                    t && i()
                }), t.confirm(a)
            }, t._get_typed_lightbox_config = function (e) {
                void 0 === e && (e = this.getLightboxType());
                var n = function (t) {
                    for (var e in this.config.types) if (this.config.types[e] == t) return e;
                    return "task"
                }.call(this, e);
                return t.config.lightbox[n + "_sections"] ? t.config.lightbox[n + "_sections"] : t.config.lightbox.sections
            }, t._silent_redraw_lightbox = function (t) {
                var e = this.getLightboxType();
                if (this.getState().lightbox) {
                    var n = this.getState().lightbox, i = this.getLightboxValues(), r = this.copy(this.getTask(n));
                    this.resetLightbox();
                    var a = this.mixin(r, i, !0), o = this.getLightbox(t || void 0);
                    this._center_lightbox(this.getLightbox()), this._set_lightbox_values(a, o), this.showCover()
                } else this.resetLightbox(), this.getLightbox(t || void 0);
                this.callEvent("onLightboxChange", [e, this.getLightboxType()])
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            function e() {
                var e;
                return t.$ui.getView("timeline") && (e = t.$ui.getView("timeline")._tasks_dnd), e
            }

            t.config.touch_drag = 500, t.config.touch = !0, t.config.touch_feedback = !0, t.config.touch_feedback_duration = 1, t._prevent_touch_scroll = !1, t._touch_feedback = function () {
                t.config.touch_feedback && navigator.vibrate && navigator.vibrate(t.config.touch_feedback_duration)
            }, t.attachEvent("onGanttReady", t.bind(function () {
                if ("force" != this.config.touch && (this.config.touch = this.config.touch && (-1 != navigator.userAgent.indexOf("Mobile") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Touch"))), this.config.touch) {
                    var t = !0;
                    try {
                        document.createEvent("TouchEvent")
                    } catch (e) {
                        t = !1
                    }
                    t ? this._touch_events(["touchmove", "touchstart", "touchend"], function (t) {
                        return t.touches && t.touches.length > 1 ? null : t.touches[0] ? {
                            target: t.target,
                            pageX: t.touches[0].pageX,
                            pageY: t.touches[0].pageY,
                            clientX: t.touches[0].clientX,
                            clientY: t.touches[0].clientY
                        } : t
                    }, function () {
                        return !1
                    }) : window.navigator.pointerEnabled ? this._touch_events(["pointermove", "pointerdown", "pointerup"], function (t) {
                        return "mouse" == t.pointerType ? null : t
                    }, function (t) {
                        return !t || "mouse" == t.pointerType
                    }) : window.navigator.msPointerEnabled && this._touch_events(["MSPointerMove", "MSPointerDown", "MSPointerUp"], function (t) {
                        return t.pointerType == t.MSPOINTER_TYPE_MOUSE ? null : t
                    }, function (t) {
                        return !t || t.pointerType == t.MSPOINTER_TYPE_MOUSE
                    })
                }
            }, t));
            var n = [];
            t._touch_events = function (i, r, a) {
                for (var o, s = 0, l = !1, c = !1, u = null, d = null, h = null, f = 0; f < n.length; f++) t.eventRemove(n[f][0], n[f][1], n[f][2]);
                (n = []).push([t.$container, i[0], function (n) {
                    var i = e();
                    if (!a(n) && l) {
                        d && clearTimeout(d);
                        var h = r(n);
                        if (i && (i.drag.id || i.drag.start_drag)) return i.on_mouse_move(h), n.preventDefault && n.preventDefault(), n.cancelBubble = !0, !1;
                        if (!t._prevent_touch_scroll) {
                            if (h && u) {
                                var f = u.pageX - h.pageX, g = u.pageY - h.pageY;
                                if (!c && (Math.abs(f) > 5 || Math.abs(g) > 5) && (t._touch_scroll_active = c = !0, s = 0, o = t.getScrollState()), c) {
                                    t.scrollTo(o.x + f, o.y + g);
                                    var p = t.getScrollState();
                                    if (o.x != p.x && g > 2 * f || o.y != p.y && f > 2 * g) return _(n)
                                }
                            }
                            return _(n)
                        }
                        return !0
                    }
                }]), n.push([this.$container, "contextmenu", function (t) {
                    if (l) return _(t)
                }]), n.push([this.$container, i[1], function (n) {
                    if (!a(n)) if (n.touches && n.touches.length > 1) l = !1; else {
                        u = r(n), t._locate_css(u, "gantt_hor_scroll") || t._locate_css(u, "gantt_ver_scroll") || (l = !0);
                        var i = e();
                        d = setTimeout(function () {
                            var e = t.locate(u);
                            i && e && !t._locate_css(u, "gantt_link_control") && !t._locate_css(u, "gantt_grid_data") && (i.on_mouse_down(u), i.drag && i.drag.start_drag && (!function (e) {
                                var n = t._getTaskLayers(), i = t.getTask(e);
                                if (i && t.isTaskVisible(e)) for (var r = 0; r < n.length; r++) if ((i = n[r].rendered[e]) && i.getAttribute(t.config.task_attribute) && i.getAttribute(t.config.task_attribute) == e) {
                                    var a = i.cloneNode(!0);
                                    h = i, n[r].rendered[e] = a, i.style.display = "none", a.className += " gantt_drag_move ", i.parentNode.appendChild(a)
                                }
                            }(e), i._start_dnd(u), t._touch_drag = !0, t.refreshTask(e), t._touch_feedback())), d = null
                        }, t.config.touch_drag)
                    }
                }]), n.push([this.$container, i[2], function (n) {
                    if (!a(n)) {
                        d && clearTimeout(d), t._touch_drag = !1, l = !1;
                        var i = r(n), o = e();
                        if (o && o.on_mouse_up(i), h && (t.refreshTask(t.locate(h)), h.parentNode && (h.parentNode.removeChild(h), t._touch_feedback())), t._touch_scroll_active = l = c = !1, h = null, u && s) {
                            var f = new Date;
                            if (f - s < 500) t.$services.getService("mouseEvents").onDoubleClick(u), _(n); else s = f
                        } else s = new Date
                    }
                }]);
                for (f = 0; f < n.length; f++) t.event(n[f][0], n[f][1], n[f][2]);

                function _(t) {
                    return t && t.preventDefault && t.preventDefault(), t.cancelBubble = !0, !1
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(9), r = n(4), a = n(8), o = ["ctrlKey", "altKey", "shiftKey", "metaKey"],
            s = [[{unit: "month", date: "%M", step: 1}, {unit: "day", date: "%d", step: 1}], [{
                unit: "day",
                date: "%d %M",
                step: 1
            }], [{unit: "day", date: "%d %M", step: 1}, {unit: "hour", date: "%H:00", step: 8}], [{
                unit: "day",
                date: "%d %M",
                step: 1
            }, {unit: "hour", date: "%H:00", step: 1}]], l = function () {
                function t(t) {
                    var e = this;
                    this.zoomIn = function () {
                        var t = e.getCurrentLevel() - 1;
                        t < 0 || e.setLevel(t)
                    }, this.zoomOut = function () {
                        var t = e.getCurrentLevel() + 1;
                        t > e._levels.length - 1 || e.setLevel(t)
                    }, this.getCurrentLevel = function () {
                        return e._activeLevelIndex
                    }, this.getLevels = function () {
                        return e._levels
                    }, this.setLevel = function (t) {
                        var n = e._getZoomIndexByName(t);
                        -1 === n && e.$gantt.assert(-1 !== n, "Invalid zoom level for gantt.ext.zoom.setLevel. " + t + " is not an expected value."), e._setLevel(n, 0)
                    }, this._getZoomIndexByName = function (t) {
                        var n = -1;
                        if ("string" == typeof t) {
                            if (!isNaN(Number(t)) && e._levels[Number(t)]) n = Number(t); else for (var i = 0; i < e._levels.length; i++) if (e._levels[i].name === t) {
                                n = i;
                                break
                            }
                        } else n = t;
                        return n
                    }, this._getVisibleDate = function () {
                        var t = e.$gantt.getScrollState().x, n = e.$gantt.$task.offsetWidth;
                        e._visibleDate = e.$gantt.dateFromPos(t + n / 2)
                    }, this._setLevel = function (t, n) {
                        e._activeLevelIndex = t;
                        var i = e.$gantt, r = i.copy(e._levels[e._activeLevelIndex]), a = i.copy(r);
                        if (delete a.name, i.mixin(i.config, a, !0), !!i.$root) {
                            if (n) {
                                var o = e.$gantt.dateFromPos(n + e.$gantt.getScrollState().x);
                                e.$gantt.render();
                                var s = e.$gantt.posFromDate(o);
                                e.$gantt.scrollTo(s - n)
                            } else {
                                var l = e.$gantt.$task.offsetWidth;
                                e._visibleDate || e._getVisibleDate();
                                var c = e._visibleDate;
                                e.$gantt.render();
                                s = e.$gantt.posFromDate(c);
                                e.$gantt.scrollTo(s - l / 2)
                            }
                            e.callEvent("onAfterZoom", [e._activeLevelIndex, r])
                        }
                    }, this._attachWheelEvent = function (t) {
                        var n, r = i.isFF ? "wheel" : "mousewheel";
                        (n = "function" == typeof t.element ? t.element() : t.element) && e._domEvents.attach(n, r, e.$gantt.bind(function (t) {
                            if (this._useKey) {
                                if (o.indexOf(this._useKey) < 0) return !1;
                                if (!t[this._useKey]) return !1
                            }
                            if ("function" == typeof this._handler) return this._handler.apply(this, [t]), !0
                        }, e))
                    }, this._defaultHandler = function (t) {
                        var n = e.$gantt.$task.getBoundingClientRect().x, i = t.clientX - n, r = !1;
                        (e.$gantt.env.isFF ? -40 * t.deltaY : t.wheelDelta) > 0 && (r = !0), t.preventDefault(), t.stopPropagation(), e._setScaleSettings(r, i)
                    }, this._setScaleDates = function () {
                        e._initialStartDate && e._initialEndDate && (e.$gantt.config.start_date = e._initialStartDate, e.$gantt.config.end_date = e._initialEndDate)
                    }, this.$gantt = t, this._domEvents = this.$gantt._createDomEventScope()
                }

                return t.prototype.init = function (t) {
                    var e = this;
                    a(this.$gantt) && (this._initialStartDate = t.startDate, this._initialEndDate = t.endDate, this._activeLevelIndex = t.activeLevelIndex ? t.activeLevelIndex : 0, this._levels = this._mapScales(t.levels || s), this._handler = t.handler || this._defaultHandler, this._minColumnWidth = t.minColumnWidth || 60, this._maxColumnWidth = t.maxColumnWidth || 240, this._widthStep = t.widthStep || 3 / 8 * t.minColumnWidth, this._useKey = t.useKey, this._initialized || (r(this), this.$gantt.attachEvent("onGanttScroll", function () {
                        e._getVisibleDate()
                    })), this._domEvents.detachAll(), "wheel" === t.trigger && (this.$gantt.$root ? this._attachWheelEvent(t) : this.$gantt.attachEvent("onGanttReady", function () {
                        e._attachWheelEvent(t)
                    })), this._initialized = !0, this.setLevel(this._activeLevelIndex))
                }, t.prototype._mapScales = function (t) {
                    return t.map(function (t) {
                        return Array.isArray(t) ? {scales: t} : t
                    })
                }, t.prototype._setScaleSettings = function (t, e) {
                    t ? this._stepUp(e) : this._stepDown(e)
                }, t.prototype._stepUp = function (t) {
                    if (!(this._activeLevelIndex >= this._levels.length - 1)) {
                        var e = this._activeLevelIndex;
                        if (this._setScaleDates(), this._widthStep) {
                            var n = this.$gantt.config.min_column_width + this._widthStep;
                            n > this._maxColumnWidth && (n = this._minColumnWidth, e++), this.$gantt.config.min_column_width = n
                        } else e++;
                        this._setLevel(e, t)
                    }
                }, t.prototype._stepDown = function (t) {
                    if (!(this._activeLevelIndex < 1)) {
                        var e = this._activeLevelIndex;
                        if (this._setScaleDates(), this._widthStep) {
                            var n = this.$gantt.config.min_column_width - this._widthStep;
                            n < this._minColumnWidth && (n = this._maxColumnWidth, e--), this.$gantt.config.min_column_width = n
                        } else e--;
                        this._setLevel(e, t)
                    }
                }, t
            }();
        e.default = l
    }, function (t, e) {
        window.dhtmlx && (window.dhtmlx.attaches || (window.dhtmlx.attaches = {}), window.dhtmlx.attaches.attachGantt = function (t, e, n) {
            var i = document.createElement("DIV");
            n = n || window.gantt, i.id = "gantt_" + n.uid(), i.style.width = "100%", i.style.height = "100%", i.cmp = "grid", document.body.appendChild(i), this.attachObject(i.id), this.dataType = "gantt", this.dataObj = n;
            var r = this.vs[this.av];
            r.grid = n, n.init(i.id, t, e), i.firstChild.style.border = "none", r.gridId = i.id, r.gridObj = i;
            return this.vs[this._viewRestore()].grid
        }), void 0 !== window.dhtmlXCellObject && (window.dhtmlXCellObject.prototype.attachGantt = function (t, e, n) {
            n = n || window.gantt;
            var i = document.createElement("DIV");
            return i.id = "gantt_" + n.uid(), i.style.width = "100%", i.style.height = "100%", i.cmp = "grid", document.body.appendChild(i), this.attachObject(i.id), this.dataType = "gantt", this.dataObj = n, n.init(i.id, t, e), i.firstChild.style.border = "none", i = null, this.callEvent("_onContentAttach", []), this.dataObj
        }), t.exports = null
    }, function (t, e) {
        window.jQuery && function (t) {
            var e = [];
            t.fn.dhx_gantt = function (n) {
                if ("string" != typeof (n = n || {})) {
                    var i = [];
                    return this.each(function () {
                        if (this && this.getAttribute) if (this.gantt || window.gantt.$root == this) i.push("object" == typeof this.gantt ? this.gantt : window.gantt); else {
                            var t = window.gantt.$container && window.Gantt ? window.Gantt.getGanttInstance() : window.gantt;
                            for (var e in n) "data" != e && (t.config[e] = n[e]);
                            t.init(this), n.data && t.parse(n.data), i.push(t)
                        }
                    }), 1 === i.length ? i[0] : i
                }
                if (e[n]) return e[n].apply(this, []);
                t.error("Method " + n + " does not exist on jQuery.dhx_gantt")
            }
        }(window.jQuery), t.exports = null
    }, function (t, e, n) {
        var i = n(1), r = n(8);
        t.exports = function (t) {
            var e = 50, n = 30, a = 10, o = 50, s = null, l = !1, c = null, u = {started: !1}, d = {};

            function h(e) {
                return e && i.isChildOf(e, t.$root) && e.offsetHeight
            }

            function f() {
                var e = !!document.querySelector(".gantt_drag_marker"),
                    n = !!document.querySelector(".gantt_drag_marker.gantt_grid_resize_area"),
                    i = !!document.querySelector(".gantt_link_direction"), r = t.getState(), a = r.autoscroll;
                return l = e && !n && !i, !(!r.drag_mode && !e || n) || a
            }

            function _(e) {
                if (c && (clearTimeout(c), c = null), e) {
                    var n = t.config.autoscroll_speed;
                    n && n < 10 && (n = 10), c = setTimeout(function () {
                        s = setInterval(v, n || o)
                    }, t.config.autoscroll_delay || a)
                }
            }

            function g(t) {
                t ? (_(!0), u.started || (u.x = d.x, u.y = d.y, u.started = !0)) : (s && (clearInterval(s), s = null), _(!1), u.started = !1)
            }

            function p(e) {
                var n = f();
                if (!s && !c || n || g(!1), !t.config.autoscroll || !n) return !1;
                d = {x: e.clientX, y: e.clientY}, !s && n && g(!0)
            }

            function v() {
                if (!f()) return g(!1), !1;
                var e = i.getNodePosition(h(t.$task) ? t.$task : h(t.$grid) ? t.$grid : t.$root), r = d.x - e.x,
                    a = d.y - e.y, o = l ? 0 : m(r, e.width, u.x - e.x), s = m(a, e.height, u.y - e.y),
                    c = t.getScrollState(), _ = c.y, p = c.inner_height, v = c.height, y = c.x, k = c.inner_width,
                    b = c.width;
                s && !p ? s = 0 : s < 0 && !_ ? s = 0 : s > 0 && _ + p >= v + 2 && (s = 0), o && !k ? o = 0 : o < 0 && !y ? o = 0 : o > 0 && y + k >= b && (o = 0);
                var w = t.config.autoscroll_step;
                w && w < 2 && (w = 2), o *= w || n, s *= w || n, (o || s) && function (e, n) {
                    var i = t.getScrollState(), r = null, a = null;
                    e && (r = i.x + e, r = Math.min(i.width, r), r = Math.max(0, r));
                    n && (a = i.y + n, a = Math.min(i.height, a), a = Math.max(0, a));
                    t.scrollTo(r, a)
                }(o, s)
            }

            function m(t, n, i) {
                return t - e < 0 && t < i ? -1 : t > n - e && t > i ? 1 : 0
            }

            t.attachEvent("onGanttReady", function () {
                r(t) || (t.eventRemove(document.body, "mousemove", p), t.event(document.body, "mousemove", p))
            })
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            t.ext || (t.ext = {});
            for (var e = [n(58), n(57), n(56)], i = 0; i < e.length; i++) e[i] && e[i](t);
            var r = n(55).default;
            t.ext.zoom = new r(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.skins.contrast_white = {
                config: {
                    grid_width: 360,
                    row_height: 35,
                    scale_height: 35,
                    link_line_width: 2,
                    link_arrow_size: 6,
                    lightbox_additional_height: 75
                }, _second_column_width: 100, _third_column_width: 80
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.skins.contrast_black = {
                config: {
                    grid_width: 360,
                    row_height: 35,
                    scale_height: 35,
                    link_line_width: 2,
                    link_arrow_size: 6,
                    lightbox_additional_height: 75
                }, _second_column_width: 100, _third_column_width: 80
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.skins.material = {
                config: {
                    grid_width: 411,
                    row_height: 34,
                    task_height_offset: 6,
                    scale_height: 36,
                    link_line_width: 2,
                    link_arrow_size: 6,
                    lightbox_additional_height: 80
                },
                _second_column_width: 110,
                _third_column_width: 75,
                _redefine_lightbox_buttons: {
                    buttons_left: ["dhx_delete_btn"],
                    buttons_right: ["dhx_save_btn", "dhx_cancel_btn"]
                }
            }, t.attachEvent("onAfterTaskDrag", function (e) {
                var n = t.getTaskNode(e);
                n && (n.className += " gantt_drag_animation", setTimeout(function () {
                    var t = n.className.indexOf(" gantt_drag_animation");
                    t > -1 && (n.className = n.className.slice(0, t))
                }, 200))
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.skins.broadway = {
                config: {
                    grid_width: 360,
                    row_height: 35,
                    scale_height: 35,
                    link_line_width: 1,
                    link_arrow_size: 7,
                    lightbox_additional_height: 86
                },
                _second_column_width: 90,
                _third_column_width: 80,
                _lightbox_template: "<div class='gantt_cal_ltitle'><span class='gantt_mark'>&nbsp;</span><span class='gantt_time'></span><span class='gantt_title'></span><div class='gantt_cancel_btn'></div></div><div class='gantt_cal_larea'></div>",
                _config_buttons_left: {},
                _config_buttons_right: {gantt_delete_btn: "icon_delete", gantt_save_btn: "icon_save"}
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.skins.terrace = {
                config: {
                    grid_width: 360,
                    row_height: 35,
                    scale_height: 35,
                    link_line_width: 2,
                    link_arrow_size: 6,
                    lightbox_additional_height: 75
                }, _second_column_width: 90, _third_column_width: 70
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.skins.meadow = {
                config: {
                    grid_width: 350,
                    row_height: 27,
                    scale_height: 30,
                    link_line_width: 2,
                    link_arrow_size: 6,
                    lightbox_additional_height: 72
                }, _second_column_width: 95, _third_column_width: 80
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.skins.skyblue = {
                config: {
                    grid_width: 350,
                    row_height: 27,
                    scale_height: 27,
                    link_line_width: 1,
                    link_arrow_size: 8,
                    lightbox_additional_height: 75
                }, _second_column_width: 95, _third_column_width: 80
            }
        }
    }, function (t, e) {
        function n(t, e) {
            var n = e.skin;
            if (!n || t) for (var i = document.getElementsByTagName("link"), r = 0; r < i.length; r++) {
                var a = i[r].href.match("dhtmlxgantt_([a-z_]+).css");
                if (a && (e.skins[a[1]] || !n)) {
                    n = a[1];
                    break
                }
            }
            e.skin = n || "terrace";
            var o = e.skins[e.skin] || e.skins.terrace;
            !function (t, e, n) {
                for (var i in e) (void 0 === t[i] || n) && (t[i] = e[i])
            }(e.config, o.config, t);
            var s = e.getGridColumns();
            s[1] && !e.defined(s[1].width) && (s[1].width = o._second_column_width), s[2] && !e.defined(s[2].width) && (s[2].width = o._third_column_width);
            for (r = 0; r < s.length; r++) {
                var l = s[r];
                "add" == l.name && (l.width || (l.width = 44), e.defined(l.min_width) && e.defined(l.max_width) || (l.min_width = l.min_width || l.width, l.max_width = l.max_width || l.width), l.min_width && (l.min_width = +l.min_width), l.max_width && (l.max_width = +l.max_width), l.width && (l.width = +l.width, l.width = l.min_width && l.min_width > l.width ? l.min_width : l.width, l.width = l.max_width && l.max_width < l.width ? l.max_width : l.width))
            }
            o.config.task_height && (e.config.task_height = o.config.task_height || "full"), o._lightbox_template && (e._lightbox_template = o._lightbox_template), o._redefine_lightbox_buttons && (e.config.buttons_right = o._redefine_lightbox_buttons.buttons_right, e.config.buttons_left = o._redefine_lightbox_buttons.buttons_left), e.resetLightbox()
        }

        t.exports = function (t) {
            t.resetSkin || (t.resetSkin = function () {
                this.skin = "", n(!0, this)
            }, t.skins = {}, t.attachEvent("onGanttLayoutReady", function () {
                n(!1, this)
            }))
        }
    }, function (t, e) {
        t.exports = function () {
            function t(t) {
                return t.$ui.getView("timeline")
            }

            function e(t) {
                return t.$ui.getView("grid")
            }

            function n(t) {
                return t.$ui.getView("scrollVer")
            }

            function i(t) {
                return t.$ui.getView("scrollHor")
            }

            var r = "DEFAULT_VALUE";

            function a(t, e, n, i) {
                var a = t(this);
                return a && a.isVisible() ? a[e].apply(a, n) : i ? i() : r
            }

            return {
                getColumnIndex: function (t) {
                    var n = a.call(this, e, "getColumnIndex", [t]);
                    return n === r ? 0 : n
                }, dateFromPos: function (e) {
                    var n = a.call(this, t, "dateFromPos", Array.prototype.slice.call(arguments));
                    return n === r ? this.getState().min_date : n
                }, posFromDate: function (e) {
                    var n = a.call(this, t, "posFromDate", [e]);
                    return n === r ? 0 : n
                }, getRowTop: function (n) {
                    var i = this, o = a.call(i, t, "getRowTop", [n], function () {
                        return a.call(i, e, "getRowTop", [n])
                    });
                    return o === r ? 0 : o
                }, getTaskTop: function (n) {
                    var i = this, o = a.call(i, t, "getItemTop", [n], function () {
                        return a.call(i, e, "getItemTop", [n])
                    });
                    return o === r ? 0 : o
                }, getTaskPosition: function (e, n, i) {
                    var o = a.call(this, t, "getItemPosition", [e, n, i]);
                    return o === r ? {left: 0, top: this.getTaskTop(e.id), height: this.getTaskHeight(), width: 0} : o
                }, getTaskHeight: function () {
                    var n = this, i = a.call(n, t, "getItemHeight", [], function () {
                        return a.call(n, e, "getItemHeight", [])
                    });
                    return i === r ? 0 : i
                }, columnIndexByDate: function (e) {
                    var n = a.call(this, t, "columnIndexByDate", [e]);
                    return n === r ? 0 : n
                }, roundTaskDates: function () {
                    a.call(this, t, "roundTaskDates", [])
                }, getScale: function () {
                    var e = a.call(this, t, "getScale", []);
                    return e === r ? null : e
                }, getTaskNode: function (e) {
                    var n = t(this);
                    if (n && n.isVisible()) {
                        var i = n._taskRenderer.rendered[e];
                        if (!i) {
                            var r = n.$config.item_attribute;
                            i = n.$task_bars.querySelector("[" + r + "='" + e + "']")
                        }
                        return i || null
                    }
                    return null
                }, getLinkNode: function (e) {
                    var n = t(this);
                    return n.isVisible() ? n._linkRenderer.rendered[e] : null
                }, scrollTo: function (t, e) {
                    var r = n(this), a = i(this), o = {position: 0}, s = {position: 0};
                    r && (s = r.getScrollState()), a && (o = a.getScrollState()), a && 1 * t == t && a.scroll(t), r && 1 * e == e && r.scroll(e);
                    var l = {position: 0}, c = {position: 0};
                    r && (l = r.getScrollState()), a && (c = a.getScrollState()), this.callEvent("onGanttScroll", [o.position, s.position, c.position, l.position])
                }, showDate: function (t) {
                    var e = this.posFromDate(t), n = Math.max(e - this.config.task_scroll_offset, 0);
                    this.scrollTo(n)
                }, showTask: function (t) {
                    var e, n = this.getTaskPosition(this.getTask(t)),
                        i = Math.max(n.left - this.config.task_scroll_offset, 0), r = this._scroll_state().y;
                    e = r ? n.top - (r - this.config.row_height) / 2 : n.top, this.scrollTo(i, e)
                }, _scroll_state: function () {
                    var t = {
                        x: !1,
                        y: !1,
                        x_pos: 0,
                        y_pos: 0,
                        scroll_size: this.config.scroll_size + 1,
                        x_inner: 0,
                        y_inner: 0
                    }, e = n(this), r = i(this);
                    if (r) {
                        var a = r.getScrollState();
                        a.visible && (t.x = a.size, t.x_inner = a.scrollSize), t.x_pos = a.position || 0
                    }
                    if (e) {
                        var o = e.getScrollState();
                        o.visible && (t.y = o.size, t.y_inner = o.scrollSize), t.y_pos = o.position || 0
                    }
                    return t
                }, getScrollState: function () {
                    var t = this._scroll_state();
                    return {
                        x: t.x_pos,
                        y: t.y_pos,
                        inner_width: t.x,
                        inner_height: t.y,
                        width: t.x_inner,
                        height: t.y_inner
                    }
                }
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            delete t.addTaskLayer, delete t.addLinkLayer
        }
    }, function (t, e, n) {
        var i = n(1), r = function (t) {
            return {
                getVerticalScrollbar: function () {
                    return t.$ui.getView("scrollVer")
                }, getHorizontalScrollbar: function () {
                    return t.$ui.getView("scrollHor")
                }, _legacyGridResizerClass: function (t) {
                    for (var e = t.getCellsByType("resizer"), n = 0; n < e.length; n++) {
                        var i = e[n], r = !1, a = i.$parent.getPrevSibling(i.$id);
                        if (a && a.$config && "grid" === a.$config.id) r = !0; else {
                            var o = i.$parent.getNextSibling(i.$id);
                            o && o.$config && "grid" === o.$config.id && (r = !0)
                        }
                        r && (i.$config.css = (i.$config.css ? i.$config.css + " " : "") + "gantt_grid_resize_wrap")
                    }
                }, onCreated: function (e) {
                    var n = !0;
                    this._legacyGridResizerClass(e), e.attachEvent("onBeforeResize", function () {
                        var r = t.$ui.getView("timeline");
                        r && (r.$config.hidden = r.$parent.$config.hidden = !t.config.show_chart);
                        var a = t.$ui.getView("grid");
                        if (a) {
                            var o = t.config.show_grid;
                            if (n) {
                                var s = a._getColsTotalWidth();
                                !1 !== s && (t.config.grid_width = s), o = o && !!t.config.grid_width, t.config.show_grid = o
                            }
                            if (a.$config.hidden = a.$parent.$config.hidden = !o, !a.$config.hidden) {
                                var l = a._getGridWidthLimits();
                                if (l[0] && t.config.grid_width < l[0] && (t.config.grid_width = l[0]), l[1] && t.config.grid_width > l[1] && (t.config.grid_width = l[1]), r && t.config.show_chart) if (a.$config.width = t.config.grid_width - 1, n) a.$parent.$config.width = t.config.grid_width, a.$parent.$config.group && t.$layout._syncCellSizes(a.$parent.$config.group, a.$parent.$config.width); else if (r && !i.isChildOf(r.$task, e.$view)) {
                                    if (!a.$config.original_grid_width) {
                                        var c = t.skins[t.skin];
                                        c && c.config && c.config.grid_width ? a.$config.original_grid_width = c.config.grid_width : a.$config.original_grid_width = 0
                                    }
                                    t.config.grid_width = a.$config.original_grid_width, a.$parent.$config.width = t.config.grid_width
                                } else a.$parent._setContentSize(a.$config.width, null), t.$layout._syncCellSizes(a.$parent.$config.group, t.config.grid_width); else r && i.isChildOf(r.$task, e.$view) && (a.$config.original_grid_width = t.config.grid_width), n || (a.$parent.$config.width = 0)
                            }
                            n = !1
                        }
                    }), this._initScrollStateEvents(e)
                }, _initScrollStateEvents: function (e) {
                    t._getVerticalScrollbar = this.getVerticalScrollbar, t._getHorizontalScrollbar = this.getHorizontalScrollbar;
                    var n = this.getVerticalScrollbar(), i = this.getHorizontalScrollbar();
                    n && n.attachEvent("onScroll", function (e, n, i) {
                        var r = t.getScrollState();
                        t.callEvent("onGanttScroll", [r.x, e, r.x, n])
                    }), i && i.attachEvent("onScroll", function (e, n, i) {
                        var r = t.getScrollState();
                        t.callEvent("onGanttScroll", [e, r.y, n, r.y])
                    }), e.attachEvent("onResize", function () {
                        n && !t.$scroll_ver && (t.$scroll_ver = n.$scroll_ver), i && !t.$scroll_hor && (t.$scroll_hor = i.$scroll_hor)
                    })
                }, _findGridResizer: function (t, e) {
                    for (var n, i = t.getCellsByType("resizer"), r = !0, a = 0; a < i.length; a++) {
                        var o = i[a];
                        o._getSiblings();
                        var s = o._behind, l = o._front;
                        if (s && s.$content === e || s.isChild && s.isChild(e)) {
                            n = o, r = !0;
                            break
                        }
                        if (l && l.$content === e || l.isChild && l.isChild(e)) {
                            n = o, r = !1;
                            break
                        }
                    }
                    return {resizer: n, gridFirst: r}
                }, onInitialized: function (e) {
                    var n = t.$ui.getView("grid"), i = this._findGridResizer(e, n);
                    if (i.resizer) {
                        var r, a = i.gridFirst, o = i.resizer;
                        o.attachEvent("onResizeStart", function (e, n) {
                            var i = t.$ui.getView("grid"), o = i ? i.$parent : null;
                            if (o) {
                                var s = i._getGridWidthLimits();
                                i.$config.scrollable || (o.$config.minWidth = s[0]), o.$config.maxWidth = s[1]
                            }
                            return r = a ? e : n, t.callEvent("onGridResizeStart", [r])
                        }), o.attachEvent("onResize", function (e, n) {
                            var i = a ? e : n;
                            return t.callEvent("onGridResize", [r, i])
                        }), o.attachEvent("onResizeEnd", function (e, n, i, r) {
                            var o = a ? e : n, s = a ? i : r, l = t.$ui.getView("grid"), c = l ? l.$parent : null;
                            c && (c.$config.minWidth = void 0);
                            var u = t.callEvent("onGridResizeEnd", [o, s]);
                            return u && (t.config.grid_width = s), u
                        })
                    }
                }, onDestroyed: function (t) {
                }
            }
        };
        t.exports = r
    }, function (t, e, n) {
        var i = n(1), r = function (t, e) {
            var n, r, a, o, s, l = 10, c = 18;

            function u() {
                return {
                    link_source_id: o,
                    link_target_id: r,
                    link_from_start: s,
                    link_to_start: a,
                    link_landing_area: n
                }
            }

            var d = e.$services, h = d.getService("state"), f = d.getService("dnd");
            h.registerProvider("linksDnD", u);
            var _ = new f(t.$task_bars, {sensitivity: 0, updates_per_second: 60, mousemoveContainer: e.$root});

            function g(n, i, r, a, o) {
                var s = function (n, i, r) {
                    var a = i(n), o = {x: a.left, y: a.top, width: a.width, height: a.height};
                    r.rtl ? (o.xEnd = o.x, o.x = o.xEnd + o.width) : o.xEnd = o.x + o.width;
                    if (o.yEnd = o.y + o.height, e.getTaskType(n.type) == e.config.types.milestone) {
                        var s = function () {
                            var e = t.getItemHeight();
                            return Math.round(Math.sqrt(2 * e * e)) - 2
                        }();
                        o.x += (r.rtl ? 1 : -1) * (s / 2), o.xEnd += (r.rtl ? -1 : 1) * (s / 2), o.width = a.xEnd - a.x
                    }
                    return o
                }(n, function (t) {
                    return e.getTaskPosition(t)
                }, a), l = {x: s.x, y: s.y};
                i || (l.x = s.xEnd), l.y += e.config.row_height / 2;
                var c = function (t) {
                    return e.getTaskType(t.type) == e.config.types.milestone
                }(n) && o ? 2 : 0;
                return r = r || 0, a.rtl && (r *= -1), l.x += (i ? -1 : 1) * r - c, l
            }

            function p(t, n) {
                var i = _.getPosition(t), r = function (t) {
                        var e = 0, n = 0;
                        return t && (e = t.offsetWidth || 0, n = t.offsetHeight || 0), {width: e, height: n}
                    }(n), a = function () {
                        var t = e.$root;
                        return {right: t.offsetWidth, bottom: t.offsetHeight}
                    }(), o = e.config.tooltip_offset_x || l, s = e.config.tooltip_offset_y || l,
                    u = e.config.scroll_size || c,
                    d = {y: i.y + s, x: i.x + o, bottom: i.y + r.height + s + u, right: i.x + r.width + o + u};
                return d.bottom > a.bottom && (d.y = a.bottom - r.height - s), d.right > a.right && (d.x = a.right - r.width - o), d
            }

            function v(t) {
                var n = u(), i = ["gantt_link_tooltip"];
                n.link_source_id && n.link_target_id && (e.isLinkAllowed(n.link_source_id, n.link_target_id, n.link_from_start, n.link_to_start) ? i.push("gantt_allowed_link") : i.push("gantt_invalid_link"));
                var r = e.templates.drag_link_class(n.link_source_id, n.link_from_start, n.link_target_id, n.link_to_start);
                r && i.push(r);
                var a = "<div class='" + r + "'>" + e.templates.drag_link(n.link_source_id, n.link_from_start, n.link_target_id, n.link_to_start) + "</div>";
                t.innerHTML = a
            }

            function m() {
                o = s = r = null, a = !0
            }

            function y(n, i, r, a) {
                var o = function () {
                    _._direction && _._direction.parentNode || (_._direction = document.createElement("div"), t.$task_links.appendChild(_._direction));
                    return _._direction
                }(), s = u(), l = ["gantt_link_direction"];
                e.templates.link_direction_class && l.push(e.templates.link_direction_class(s.link_source_id, s.link_from_start, s.link_target_id, s.link_to_start));
                var c = Math.sqrt(Math.pow(r - n, 2) + Math.pow(a - i, 2));
                if (c = Math.max(0, c - 3)) {
                    o.className = l.join(" ");
                    var d = (a - i) / (r - n), h = Math.atan(d);
                    2 == k(n, r, i, a) ? h += Math.PI : 3 == k(n, r, i, a) && (h -= Math.PI);
                    var f = Math.sin(h), g = Math.cos(h), p = Math.round(i), v = Math.round(n),
                        m = ["-webkit-transform: rotate(" + h + "rad)", "-moz-transform: rotate(" + h + "rad)", "-ms-transform: rotate(" + h + "rad)", "-o-transform: rotate(" + h + "rad)", "transform: rotate(" + h + "rad)", "width:" + Math.round(c) + "px"];
                    if (-1 != window.navigator.userAgent.indexOf("MSIE 8.0")) {
                        m.push('-ms-filter: "' + function (t, e) {
                            return "progid:DXImageTransform.Microsoft.Matrix(M11 = " + e + ",M12 = -" + t + ",M21 = " + t + ",M22 = " + e + ",SizingMethod = 'auto expand')"
                        }(f, g) + '"');
                        var y = Math.abs(Math.round(n - r)), b = Math.abs(Math.round(a - i));
                        switch (k(n, r, i, a)) {
                            case 1:
                                p -= b;
                                break;
                            case 2:
                                v -= y, p -= b;
                                break;
                            case 3:
                                v -= y
                        }
                    }
                    m.push("top:" + p + "px"), m.push("left:" + v + "px"), o.style.cssText = m.join(";")
                }
            }

            function k(t, e, n, i) {
                return e >= t ? i <= n ? 1 : 4 : i <= n ? 2 : 3
            }

            _.attachEvent("onBeforeDragStart", e.bind(function (n, r) {
                var a = r.target || r.srcElement;
                if (m(), e.getState().drag_id) return !1;
                if (i.locateClassName(a, "gantt_link_point")) {
                    i.locateClassName(a, "task_start_date") && (s = !0);
                    var l = e.locate(r);
                    o = l;
                    var c = e.getTask(l);
                    if (e.isReadonly(c)) return m(), !1;
                    return this._dir_start = g(c, !!s, 0, t.$getConfig(), !0), !0
                }
                return !1
            }, this)), _.attachEvent("onAfterDragStart", e.bind(function (t, n) {
                e.config.touch && e.refreshData(), v(_.config.marker)
            }, this)), _.attachEvent("onDragMove", e.bind(function (o, s) {
                var l = _.config, c = p(s, l.marker);
                !function (t, e) {
                    t.style.left = e.x + "px", t.style.top = e.y + "px"
                }(l.marker, c);
                var u = !!i.locateClassName(s, "gantt_link_control"), d = r, h = n, f = a, m = e.locate(s), k = !0;
                if (i.isChildOf(s.target || s.srcElement, e.$root) || (u = !1, m = null), u && (k = !i.locateClassName(s, "task_end_date"), u = !!m), r = m, n = u, a = k, u) {
                    var b = e.getTask(m), w = t.$getConfig(), x = i.locateClassName(s, "gantt_link_control"), $ = 0;
                    x && ($ = Math.floor(x.offsetWidth / 2)), this._dir_end = g(b, !!a, $, w)
                } else this._dir_end = i.getRelativeEventPosition(s, t.$task_data), e.env.isEdge && (this._dir_end.y += window.scrollY);
                var T = !(h == u && d == m && f == k);
                return T && (d && e.refreshTask(d, !1), m && e.refreshTask(m, !1)), T && v(l.marker), y(this._dir_start.x, this._dir_start.y, this._dir_end.x, this._dir_end.y), !0
            }, this)), _.attachEvent("onDragEnd", e.bind(function () {
                var t = u();
                if (t.link_source_id && t.link_target_id && t.link_source_id != t.link_target_id) {
                    var n = e._get_link_type(t.link_from_start, t.link_to_start),
                        i = {source: t.link_source_id, target: t.link_target_id, type: n};
                    i.type && e.isLinkAllowed(i) && e.callEvent("onLinkCreated", [i]) && e.addLink(i)
                }
                m(), e.config.touch ? e.refreshData() : (t.link_source_id && e.refreshTask(t.link_source_id, !1), t.link_target_id && e.refreshTask(t.link_target_id, !1)), _._direction && (_._direction.parentNode && _._direction.parentNode.removeChild(_._direction), _._direction = null)
            }, this)), e.attachEvent("onGanttRender", e.bind(function () {
                _._direction && y(this._dir_start.x, this._dir_start.y, this._dir_end.x, this._dir_end.y)
            }, this))
        };
        t.exports = {
            createLinkDND: function () {
                return {init: r}
            }
        }
    }, function (t, e, n) {
        var i = n(1), r = n(0), a = n(40), o = n(3);
        t.exports = {
            createTaskDND: function () {
                var t;
                return {
                    extend: function (e) {
                        e.roundTaskDates = function (e) {
                            t.round_task_dates(e)
                        }
                    }, init: function (e, n) {
                        return t = function (t, e) {
                            var n = e.$services;
                            return {
                                drag: null,
                                dragMultiple: {},
                                _events: {before_start: {}, before_finish: {}, after_finish: {}},
                                _handlers: {},
                                init: function () {
                                    this._domEvents = e._createDomEventScope(), this.clear_drag_state();
                                    var t = e.config.drag_mode;
                                    this.set_actions(), n.getService("state").registerProvider("tasksDnd", r.bind(function () {
                                        return {
                                            drag_id: this.drag ? this.drag.id : void 0,
                                            drag_mode: this.drag ? this.drag.mode : void 0,
                                            drag_from_start: this.drag ? this.drag.left : void 0
                                        }
                                    }, this));
                                    var i = {
                                        before_start: "onBeforeTaskDrag",
                                        before_finish: "onBeforeTaskChanged",
                                        after_finish: "onAfterTaskDrag"
                                    };
                                    for (var a in this._events) for (var o in t) this._events[a][o] = i[a];
                                    this._handlers[t.move] = this._move, this._handlers[t.resize] = this._resize, this._handlers[t.progress] = this._resize_progress
                                },
                                set_actions: function () {
                                    var n = t.$task_data;
                                    this._domEvents.attach(n, "mousemove", e.bind(function (t) {
                                        this.on_mouse_move(t)
                                    }, this)), this._domEvents.attach(n, "mousedown", e.bind(function (t) {
                                        this.on_mouse_down(t)
                                    }, this)), this._domEvents.attach(e.$root, "mouseup", e.bind(function (t) {
                                        this.on_mouse_up(t)
                                    }, this))
                                },
                                clear_drag_state: function () {
                                    this.drag = {
                                        id: null,
                                        mode: null,
                                        pos: null,
                                        start_x: null,
                                        start_y: null,
                                        obj: null,
                                        left: null
                                    }, this.dragMultiple = {}
                                },
                                _resize: function (n, i, r) {
                                    var a = t.$getConfig(), o = this._drag_task_coords(n, r);
                                    r.left ? (n.start_date = e.dateFromPos(o.start + i), n.start_date || (n.start_date = new Date(e.getState().min_date))) : (n.end_date = e.dateFromPos(o.end + i), n.end_date || (n.end_date = new Date(e.getState().max_date)));
                                    var s = this._calculateMinDuration(a.min_duration, a.duration_unit);
                                    n.end_date - n.start_date < a.min_duration && (r.left ? n.start_date = e.calculateEndDate(n.end_date, -s, a.duration_unit, n) : n.end_date = e.calculateEndDate(n.start_date, s, a.duration_unit, n)), e._init_task_timing(n)
                                },
                                _calculateMinDuration: function (t, e) {
                                    return Math.ceil(t / {
                                        minute: 6e4,
                                        hour: 36e5,
                                        day: 864e5,
                                        week: 6048e5,
                                        month: 24192e5,
                                        year: 31356e6
                                    }[e])
                                },
                                _resize_progress: function (e, n, i) {
                                    var r = this._drag_task_coords(e, i),
                                        a = t.$getConfig().rtl ? r.start - i.pos.x : i.pos.x - r.start,
                                        o = Math.max(0, a);
                                    e.progress = Math.min(1, o / Math.abs(r.end - r.start))
                                },
                                _find_max_shift: function (t, n) {
                                    var i;
                                    for (var r in t) {
                                        var a = t[r], o = e.getTask(a.id), s = this._drag_task_coords(o, a),
                                            l = e.posFromDate(new Date(e.getState().min_date)),
                                            c = e.posFromDate(new Date(e.getState().max_date));
                                        if (s.end + n > c) {
                                            var u = c - s.end;
                                            (u < i || void 0 === i) && (i = u)
                                        } else if (s.start + n < l) {
                                            var d = l - s.start;
                                            (d > i || void 0 === i) && (i = d)
                                        }
                                    }
                                    return i
                                },
                                _move: function (t, n, i) {
                                    var r = this._drag_task_coords(t, i), a = e.dateFromPos(r.start + n),
                                        o = e.dateFromPos(r.end + n);
                                    a ? o ? (t.start_date = a, t.end_date = o) : (t.end_date = new Date(e.getState().max_date), t.start_date = e.dateFromPos(e.posFromDate(t.end_date) - (r.end - r.start))) : (t.start_date = new Date(e.getState().min_date), t.end_date = e.dateFromPos(e.posFromDate(t.start_date) + (r.end - r.start)))
                                },
                                _drag_task_coords: function (t, n) {
                                    return {
                                        start: n.obj_s_x = n.obj_s_x || e.posFromDate(t.start_date),
                                        end: n.obj_e_x = n.obj_e_x || e.posFromDate(t.end_date)
                                    }
                                },
                                _mouse_position_change: function (t, e) {
                                    var n = t.x - e.x, i = t.y - e.y;
                                    return Math.sqrt(n * n + i * i)
                                },
                                _is_number: function (t) {
                                    return !isNaN(parseFloat(t)) && isFinite(t)
                                },
                                on_mouse_move: function (t) {
                                    if (this.drag.start_drag) {
                                        var n = i.getRelativeEventPosition(t, e.$task_data),
                                            r = this.drag.start_drag.start_x, o = this.drag.start_drag.start_y;
                                        (Date.now() - this.drag.timestamp > 50 || this._is_number(r) && this._is_number(o) && this._mouse_position_change({
                                            x: r,
                                            y: o
                                        }, n) > 20) && this._start_dnd(t)
                                    }
                                    if (this.drag.mode) {
                                        if (!a(this, 40)) return;
                                        this._update_on_move(t)
                                    }
                                },
                                _update_item_on_move: function (t, n, i, r, a) {
                                    var o = e.getTask(n), s = e.mixin({}, o), l = e.mixin({}, o);
                                    this._handlers[i].apply(this, [l, t, r]), e.mixin(o, l, !0), e.callEvent("onTaskDrag", [o.id, i, l, s, a]), e.mixin(o, l, !0), e.refreshTask(n)
                                },
                                _update_on_move: function (n) {
                                    var a = this.drag, o = t.$getConfig();
                                    if (a.mode) {
                                        var s = i.getRelativeEventPosition(n, t.$task_data);
                                        if (a.pos && a.pos.x == s.x) return;
                                        a.pos = s;
                                        var l = e.dateFromPos(s.x);
                                        if (!l || isNaN(l.getTime())) return;
                                        var c = s.x - a.start_x, u = e.getTask(a.id);
                                        if (this._handlers[a.mode]) {
                                            if (a.mode === o.drag_mode.move) {
                                                var d = {};
                                                if (this._isMultiselect() && e.getSelectedTasks().indexOf(a.id) >= 0 && (d = this.dragMultiple), e.isSummaryTask(u) && e.config.drag_project) {
                                                    var h = {};
                                                    h[a.id] = r.copy(a), d = r.mixin(h, this.dragMultiple)
                                                }
                                                var f = this._find_max_shift(d, c);
                                                for (var _ in void 0 !== f && (c = f), this._update_item_on_move(c, a.id, a.mode, a, n), d) {
                                                    var g = d[_];
                                                    this._update_item_on_move(c, g.id, g.mode, g, n)
                                                }
                                            } else this._update_item_on_move(c, a.id, a.mode, a, n);
                                            e._update_parents(a.id)
                                        }
                                    }
                                },
                                on_mouse_down: function (n, r) {
                                    if (2 != n.button || void 0 === n.button) {
                                        var a = t.$getConfig(), o = e.locate(n), s = null;
                                        if (e.isTaskExists(o) && (s = e.getTask(o)), !e.isReadonly(s) && !this.drag.mode) {
                                            this.clear_drag_state(), r = r || n.target || n.srcElement;
                                            var l = i.getClassName(r), c = this._get_drag_mode(l, r);
                                            if (!l || !c) return r.parentNode ? this.on_mouse_down(n, r.parentNode) : void 0;
                                            if (c) if (c.mode && c.mode != a.drag_mode.ignore && a["drag_" + c.mode]) {
                                                if (o = e.locate(r), s = e.copy(e.getTask(o) || {}), e.isReadonly(s)) return this.clear_drag_state(), !1;
                                                if (e.isSummaryTask(s) && !a.drag_project && c.mode != a.drag_mode.progress) return void this.clear_drag_state();
                                                c.id = o;
                                                var u = i.getRelativeEventPosition(n, e.$task_data);
                                                c.start_x = u.x, c.start_y = u.y, c.obj = s, this.drag.start_drag = c, this.drag.timestamp = Date.now()
                                            } else this.clear_drag_state(); else if (e.checkEvent("onMouseDown") && e.callEvent("onMouseDown", [l.split(" ")[0]]) && r.parentNode) return this.on_mouse_down(n, r.parentNode)
                                        }
                                    }
                                },
                                _fix_dnd_scale_time: function (n, i) {
                                    var r = t.$getConfig(), a = e.getScale().unit, o = e.getScale().step;

                                    function s(n) {
                                        if (e.config.correct_work_time) {
                                            var i = t.$getConfig();
                                            e.isWorkTime(n.start_date, void 0, n) || (n.start_date = e.calculateEndDate({
                                                start_date: n.start_date,
                                                duration: -1,
                                                unit: i.duration_unit,
                                                task: n
                                            }))
                                        }
                                    }

                                    r.round_dnd_dates || (a = "minute", o = r.time_step), i.mode == r.drag_mode.resize ? i.left ? (n.start_date = e.roundDate({
                                        date: n.start_date,
                                        unit: a,
                                        step: o
                                    }), s(n)) : (n.end_date = e.roundDate({
                                        date: n.end_date,
                                        unit: a,
                                        step: o
                                    }), function (n) {
                                        if (e.config.correct_work_time) {
                                            var i = t.$getConfig();
                                            e.isWorkTime(new Date(n.end_date - 1), void 0, n) || (n.end_date = e.calculateEndDate({
                                                start_date: n.end_date,
                                                duration: 1,
                                                unit: i.duration_unit,
                                                task: n
                                            }))
                                        }
                                    }(n)) : i.mode == r.drag_mode.move && (n.start_date = e.roundDate({
                                        date: n.start_date,
                                        unit: a,
                                        step: o
                                    }), s(n), n.end_date = e.calculateEndDate(n))
                                },
                                _fix_working_times: function (n, i) {
                                    var r = t.$getConfig();
                                    (i = i || {mode: r.drag_mode.move}).mode == r.drag_mode.resize ? i.left ? n.start_date = e.getClosestWorkTime({
                                        date: n.start_date,
                                        dir: "future",
                                        task: n
                                    }) : n.end_date = e.getClosestWorkTime({
                                        date: n.end_date,
                                        dir: "past",
                                        task: n
                                    }) : i.mode == r.drag_mode.move && e.correctTaskWorkTime(n)
                                },
                                _finalize_mouse_up: function (t, n, i, r) {
                                    var a = e.getTask(t);
                                    if (n.work_time && n.correct_work_time && this._fix_working_times(a, i), this._fix_dnd_scale_time(a, i), this._fireEvent("before_finish", i.mode, [t, i.mode, e.copy(i.obj), r])) {
                                        var o = t;
                                        e._init_task_timing(a), this.clear_drag_state(), e.updateTask(a.id), this._fireEvent("after_finish", i.mode, [o, i.mode, r])
                                    } else this.clear_drag_state(), t == i.id && (i.obj._dhx_changed = !1, e.mixin(a, i.obj, !0)), e.refreshTask(a.id)
                                },
                                on_mouse_up: function (n) {
                                    var i = this.drag;
                                    if (i.mode && i.id) {
                                        var r = t.$getConfig(), a = e.getTask(i.id), o = this.dragMultiple;
                                        if (i.mode === r.drag_mode.move && (e.isSummaryTask(a) && r.drag_project || this._isMultiselect())) for (var s in o) this._finalize_mouse_up(o[s].id, r, o[s], n);
                                        this._finalize_mouse_up(i.id, r, i, n)
                                    }
                                    this.clear_drag_state()
                                },
                                _get_drag_mode: function (e, n) {
                                    var i = t.$getConfig().drag_mode, r = {mode: null, left: null};
                                    switch ((e || "").split(" ")[0]) {
                                        case"gantt_task_line":
                                        case"gantt_task_content":
                                            r.mode = i.move;
                                            break;
                                        case"gantt_task_drag":
                                            r.mode = i.resize;
                                            var a = n.getAttribute("data-bind-property");
                                            r.left = "start_date" == a;
                                            break;
                                        case"gantt_task_progress_drag":
                                            r.mode = i.progress;
                                            break;
                                        case"gantt_link_control":
                                        case"gantt_link_point":
                                            r.mode = i.ignore;
                                            break;
                                        default:
                                            r = null
                                    }
                                    return r
                                },
                                _start_dnd: function (n) {
                                    var i = this.drag = this.drag.start_drag;
                                    delete i.start_drag;
                                    var r = t.$getConfig(), a = i.id;
                                    if (r["drag_" + i.mode] && e.callEvent("onBeforeDrag", [a, i.mode, n]) && this._fireEvent("before_start", i.mode, [a, i.mode, n])) {
                                        delete i.start_drag;
                                        var s = e.getTask(a);
                                        if (e.isReadonly(s)) return void this.clear_drag_state();
                                        if (this._isMultiselect()) {
                                            var l = e.getSelectedTasks();
                                            l.indexOf(i.id) >= 0 && o.forEach(l, e.bind(function (t) {
                                                var n = e.getTask(t);
                                                e.isSummaryTask(n) && e.config.drag_project && i.mode == r.drag_mode.move && this._addSubtasksToDragMultiple(n.id), this.dragMultiple[t] = e.mixin({
                                                    id: n.id,
                                                    obj: e.copy(n)
                                                }, this.drag)
                                            }, this))
                                        }
                                        e.isSummaryTask(s) && e.config.drag_project && i.mode == r.drag_mode.move && this._addSubtasksToDragMultiple(s.id), e.callEvent("onTaskDragStart", [])
                                    } else this.clear_drag_state()
                                },
                                _fireEvent: function (t, n, i) {
                                    e.assert(this._events[t], "Invalid stage:{" + t + "}");
                                    var r = this._events[t][n];
                                    return e.assert(r, "Unknown after drop mode:{" + n + "}"), e.assert(i, "Invalid event arguments"), !e.checkEvent(r) || e.callEvent(r, i)
                                },
                                round_task_dates: function (e) {
                                    var n = this.drag, i = t.$getConfig();
                                    n || (n = {mode: i.drag_mode.move}), this._fix_dnd_scale_time(e, n)
                                },
                                destructor: function () {
                                    this._domEvents.detachAll()
                                },
                                _isMultiselect: function () {
                                    return e.config.drag_multiple && !!(e.getSelectedTasks && e.getSelectedTasks().length > 0)
                                },
                                _addSubtasksToDragMultiple: function (t) {
                                    e.eachTask(function (t) {
                                        this.dragMultiple[t.id] = e.mixin({id: t.id, obj: e.copy(t)}, this.drag)
                                    }, t, this)
                                }
                            }
                        }(e, n), e._tasks_dnd = t, t.init(n)
                    }, destructor: function () {
                        t && (t.destructor(), t = null)
                    }
                }
            }
        }
    }, function (t, e, n) {
        var i = n(0), r = n(72), a = n(71), o = n(1), s = function (t) {
            var e = t.$services;
            return {
                onCreated: function (e) {
                    var o = e.$config;
                    o.bind = i.defined(o.bind) ? o.bind : "task", o.bindLinks = i.defined(o.bindLinks) ? o.bindLinks : "link", e._linksDnD = a.createLinkDND(), e._tasksDnD = r.createTaskDND(), e._tasksDnD.extend(e), this._mouseDelegates = n(20)(t)
                }, onInitialized: function (e) {
                    this._attachDomEvents(t), this._attachStateProvider(t, e), e._tasksDnD.init(e, t), e._linksDnD.init(e, t), "timeline" == e.$config.id && this.extendDom(e)
                }, onDestroyed: function (e) {
                    this._clearDomEvents(t), this._clearStateProvider(t), e._tasksDnD && e._tasksDnD.destructor()
                }, extendDom: function (e) {
                    t.$task = e.$task, t.$task_scale = e.$task_scale, t.$task_data = e.$task_data, t.$task_bg = e.$task_bg, t.$task_links = e.$task_links, t.$task_bars = e.$task_bars
                }, _clearDomEvents: function () {
                    this._mouseDelegates.destructor(), this._mouseDelegates = null
                }, _attachDomEvents: function (t) {
                    function e(e, n) {
                        if (e && this.callEvent("onLinkDblClick", [e, n])) {
                            var i = this.getLink(e);
                            if (this.isReadonly(i)) return;
                            var r = this.locale.labels.link + " " + this.templates.link_description(this.getLink(e)) + " " + this.locale.labels.confirm_link_deleting;
                            window.setTimeout(function () {
                                t._dhtmlx_confirm(r, "", function () {
                                    t.deleteLink(e)
                                })
                            }, this.config.touch ? 300 : 1)
                        }
                    }

                    this._mouseDelegates.delegate("click", "gantt_task_link", t.bind(function (t, e) {
                        var n = this.locate(t, this.config.link_attribute);
                        n && this.callEvent("onLinkClick", [n, t])
                    }, t), this.$task), this._mouseDelegates.delegate("click", "gantt_scale_cell", t.bind(function (e, n) {
                        var i = o.getRelativeEventPosition(e, t.$task_data), r = t.dateFromPos(i.x),
                            a = Math.floor(t.columnIndexByDate(r)), s = t.getScale().trace_x[a];
                        t.callEvent("onScaleClick", [e, s])
                    }, t), this.$task), this._mouseDelegates.delegate("doubleclick", "gantt_task_link", t.bind(function (n, i, r) {
                        i = this.locate(n, t.config.link_attribute), e.call(this, i, n)
                    }, t), this.$task), this._mouseDelegates.delegate("doubleclick", "gantt_link_point", t.bind(function (t, n, i) {
                        n = this.locate(t);
                        var r = this.getTask(n), a = null;
                        return i.parentNode && o.getClassName(i.parentNode) && (a = o.getClassName(i.parentNode).indexOf("_left") > -1 ? r.$target[0] : r.$source[0]), a && e.call(this, a, t), !1
                    }, t), this.$task)
                }, _attachStateProvider: function (t, n) {
                    var i = n;
                    e.getService("state").registerProvider("tasksTimeline", function () {
                        return {
                            scale_unit: i._tasks ? i._tasks.unit : void 0,
                            scale_step: i._tasks ? i._tasks.step : void 0
                        }
                    })
                }, _clearStateProvider: function () {
                    e.getService("state").unregisterProvider("tasksTimeline")
                }
            }
        };
        t.exports = s
    }, function (t, e, n) {
        var i = n(1);

        function r(t, e) {
            var n = i.getNodePosition(e.$grid_data);
            return t.x += n.x - e.$grid.scrollLeft, t.y += n.y - e.$grid_data.scrollTop, t
        }

        t.exports = {
            removeLineHighlight: function (t) {
                t.markerLine && t.markerLine.parentNode && t.markerLine.parentNode.removeChild(t.markerLine), t.markerLine = null
            }, highlightPosition: function (t, e, n) {
                var a = function (t, e) {
                    var n = i.getNodePosition(e.$grid_data), r = i.getRelativeEventPosition(t, e.$grid_data),
                        a = e.$config.rowStore, o = n.x, s = r.y - 10, l = e.$getConfig();
                    s < n.y && (s = n.y);
                    var c = a.countVisible() * l.row_height;
                    return s > n.y + c - l.row_height && (s = n.y + c - l.row_height), n.x = o, n.y = s, n
                }(t, n);
                e.marker.style.left = a.x + 9 + "px", e.marker.style.top = a.y + "px";
                var o = e.markerLine;
                o || ((o = document.createElement("div")).className = "gantt_drag_marker gantt_grid_dnd_marker", o.innerHTML = "<div class='gantt_grid_dnd_marker_line'></div>", o.style.pointerEvents = "none", document.body.appendChild(o), e.markerLine = o), t.child ? function (t, e, n) {
                    var i = t.targetParent, a = r({x: 0, y: n.getItemTop(i)}, n);
                    e.innerHTML = "<div class='gantt_grid_dnd_marker_folder'></div>", e.style.width = n.$grid_data.offsetWidth + "px", e.style.top = a.y + "px", e.style.left = a.x + "px", e.style.height = n.getItemHeight(i) + "px"
                }(t, o, n) : function (t, e, n) {
                    var i = function (t, e) {
                        var n = e.$config.rowStore, i = {x: 0, y: 0},
                            a = e.$grid_data.querySelector(".gantt_tree_indent"), o = 15, s = 0;
                        if (a && (o = a.offsetWidth), t.targetId !== n.$getRootId()) {
                            var l = e.getItemTop(t.targetId), c = e.getItemHeight(t.targetId);
                            if (s = n.exists(t.targetId) ? n.calculateItemLevel(n.getItem(t.targetId)) : 0, t.prevSibling) i.y = l; else if (t.nextSibling) {
                                var u = 0;
                                n.eachItem(function (t) {
                                    -1 !== n.getIndexById(t.id) && u++
                                }, t.targetId), i.y = l + c + u * c
                            } else i.y = l + c, s += 1
                        }
                        return i.x = 40 + s * o, i.width = Math.max(e.$grid_data.offsetWidth - i.x, 0), r(i, e)
                    }(t, n);
                    e.innerHTML = "<div class='gantt_grid_dnd_marker_line'></div>", e.style.left = i.x + "px", e.style.height = "4px", e.style.top = i.y - 2 + "px", e.style.width = i.width + "px"
                }(t, o, n)
            }
        }
    }, function (t, e, n) {
        var i = n(15);
        t.exports = function (t, e, n, r, a) {
            var o;
            if (e !== a.$getRootId()) o = n < .25 ? i.prevSiblingTarget(t, e, a) : !(n > .6) || a.hasChild(e) && a.getItem(e).$open ? i.firstChildTarget(t, e, a) : i.nextSiblingTarget(t, e, a); else {
                var s = a.$getRootId();
                o = a.hasChild(s) && r >= 0 ? i.lastChildTarget(t, s, a) : i.firstChildTarget(t, s, a)
            }
            return o
        }
    }, function (t, e, n) {
        var i = n(15);

        function r(t, e, n, r, a) {
            for (var o = e; r.exists(o);) {
                var s = r.calculateItemLevel(r.getItem(o));
                if ((s === n || s === n - 1) && r.getBranchIndex(o) > -1) break;
                o = a ? r.getPrev(o) : r.getNext(o)
            }
            return r.exists(o) ? r.calculateItemLevel(r.getItem(o)) === n ? a ? i.nextSiblingTarget(t, o, r) : i.prevSiblingTarget(t, o, r) : i.firstChildTarget(t, o, r) : null
        }

        function a(t, e, n, i) {
            return r(t, e, n, i, !0)
        }

        function o(t, e, n, i) {
            return r(t, e, n, i, !1)
        }

        t.exports = function (t, e, n, r, s, l) {
            var c;
            if (e !== s.$getRootId()) n < .5 ? s.calculateItemLevel(s.getItem(e)) === l ? c = s.getPrevSibling(e) ? i.nextSiblingTarget(t, s.getPrevSibling(e), s) : i.prevSiblingTarget(t, e, s) : (c = a(t, e, l, s)) && (c = o(t, e, l, s)) : s.calculateItemLevel(s.getItem(e)) === l ? c = i.nextSiblingTarget(t, e, s) : (c = o(t, e, l, s)) && (c = a(t, e, l, s)); else {
                var u = s.$getRootId(), d = s.getChildren(u);
                c = i.createDropTargetObject(), c = d.length && r >= 0 ? a(t, function (t) {
                    for (var e = t.getNext(); t.exists(e);) {
                        var n = t.getNext(e);
                        if (!t.exists(n)) return e;
                        e = n
                    }
                    return null
                }(s), l, s) : o(t, u, l, s)
            }
            return c
        }
    }, function (t, e, n) {
        var i = n(1), r = n(15), a = n(76), o = n(75), s = n(74);
        t.exports = {
            init: function (t, e) {
                var n = t.$services.getService("dnd");
                if (e.$config.bind && t.getDatastore(e.$config.bind)) {
                    var l = new n(e.$grid_data, {updates_per_second: 60});
                    t.defined(e.$getConfig().dnd_sensitivity) && (l.config.sensitivity = e.$getConfig().dnd_sensitivity), l.attachEvent("onBeforeDragStart", t.bind(function (n, r) {
                        var a = c(r);
                        if (!a) return !1;
                        if (t.hideQuickInfo && t._hideQuickInfo(), i.closest(r.target, ".gantt_grid_editor_placeholder")) return !1;
                        var o = a.getAttribute(e.$config.item_attribute), s = e.$config.rowStore.getItem(o);
                        return !t.isReadonly(s) && (l.config.initial_open_state = s.$open, !!t.callEvent("onRowDragStart", [o, r.target || r.srcElement, r]) && void 0)
                    }, t)), l.attachEvent("onAfterDragStart", t.bind(function (t, n) {
                        var i = c(n);
                        l.config.marker.innerHTML = i.outerHTML;
                        var a = l.config.marker.firstChild;
                        a && (l.config.marker.style.opacity = .4, a.style.position = "static", a.style.pointerEvents = "none"), l.config.id = i.getAttribute(e.$config.item_attribute);
                        var o = e.$config.rowStore, s = o.getItem(l.config.id);
                        l.config.level = o.calculateItemLevel(s), l.config.drop_target = r.createDropTargetObject({
                            targetParent: o.getParent(s.id),
                            targetIndex: o.getBranchIndex(s.id),
                            targetId: s.id,
                            nextSibling: !0
                        }), s.$open = !1, s.$transparent = !0, this.refreshData()
                    }, t)), l.attachEvent("onDragMove", t.bind(function (n, i) {
                        var a = u(i);
                        return a && !1 !== t.callEvent("onBeforeRowDragMove", [l.config.id, a.targetParent, a.targetIndex]) || (a = r.createDropTargetObject(l.config.drop_target)), s.highlightPosition(a, l.config, e), l.config.drop_target = a, this.callEvent("onRowDragMove", [l.config.id, a.targetParent, a.targetIndex]), !0
                    }, t)), l.attachEvent("onDragEnd", t.bind(function () {
                        var t = e.$config.rowStore, n = t.getItem(l.config.id);
                        s.removeLineHighlight(l.config), n.$transparent = !1, n.$open = l.config.initial_open_state;
                        var i = l.config.drop_target;
                        !1 === this.callEvent("onBeforeRowDragEnd", [l.config.id, i.targetParent, i.targetIndex]) ? n.$drop_target = null : (t.move(l.config.id, i.targetIndex, i.targetParent), this.callEvent("onRowDragEnd", [l.config.id, i.targetParent, i.targetIndex])), t.refresh(n.id)
                    }, t))
                }

                function c(t) {
                    return i.locateAttribute(t, e.$config.item_attribute)
                }

                function u(t) {
                    var n = function (t) {
                            var n = i.getRelativeEventPosition(t, e.$grid_data).y, r = e.$config.rowStore;
                            if ((n = n || 0) < 0) return r.$getRootId();
                            var a = Math.floor(n / e.getItemHeight());
                            return a > r.countVisible() - 1 ? r.$getRootId() : r.getIdByIndex(a)
                        }(t), r = null, s = e.$config.rowStore, c = !e.$getConfig().order_branch_free,
                        u = i.getRelativeEventPosition(t, e.$grid_data).y;
                    return n !== s.$getRootId() && (r = (u - e.getItemTop(n)) / e.getItemHeight()), c ? a(l.config.id, n, r, u, s, l.config.level) : o(l.config.id, n, r, u, s)
                }
            }
        }
    }, function (t, e, n) {
        var i = n(1);
        t.exports = {
            init: function (t, e) {
                var n = t.$services.getService("dnd");
                if (e.$config.bind && t.getDatastore(e.$config.bind)) {
                    var r = new n(e.$grid_data, {updates_per_second: 60});
                    t.defined(e.$getConfig().dnd_sensitivity) && (r.config.sensitivity = e.$getConfig().dnd_sensitivity), r.attachEvent("onBeforeDragStart", t.bind(function (n, s) {
                        var l = a(s);
                        if (!l) return !1;
                        if (t.hideQuickInfo && t._hideQuickInfo(), i.closest(s.target, ".gantt_grid_editor_placeholder")) return !1;
                        var c = l.getAttribute(e.$config.item_attribute), u = o().getItem(c);
                        return !t.isReadonly(u) && (r.config.initial_open_state = u.$open, !!t.callEvent("onRowDragStart", [c, s.target || s.srcElement, s]) && void 0)
                    }, t)), r.attachEvent("onAfterDragStart", t.bind(function (t, n) {
                        var i = a(n);
                        r.config.marker.innerHTML = i.outerHTML;
                        var s = r.config.marker.firstChild;
                        s && (s.style.position = "static"), r.config.id = i.getAttribute(e.$config.item_attribute);
                        var l = o(), c = l.getItem(r.config.id);
                        r.config.index = l.getBranchIndex(r.config.id), r.config.parent = c.parent, c.$open = !1, c.$transparent = !0, this.refreshData()
                    }, t)), r.lastTaskOfLevel = function (t) {
                        for (var e = null, n = o().getItems(), i = 0, r = n.length; i < r; i++) n[i].$level == t && (e = n[i]);
                        return e ? e.id : null
                    }, r._getGridPos = t.bind(function (t) {
                        var n = i.getNodePosition(e.$grid_data), r = o(), a = n.x, s = t.pos.y - 10, l = e.$getConfig();
                        s < n.y && (s = n.y);
                        var c = r.countVisible() * l.row_height;
                        return s > n.y + c - l.row_height && (s = n.y + c - l.row_height), n.x = a, n.y = s, n
                    }, t), r._getTargetY = t.bind(function (t) {
                        var n = i.getNodePosition(e.$grid_data), r = t.pageY - n.y + (e.$state.scrollTop || 0);
                        return r < 0 && (r = 0), r
                    }, t), r._getTaskByY = t.bind(function (t, n) {
                        var i = e.$getConfig(), r = o();
                        t = t || 0;
                        var a = Math.floor(t / i.row_height);
                        return (a = n < a ? a - 1 : a) > r.countVisible() - 1 ? null : r.getIdByIndex(a)
                    }, t), r.attachEvent("onDragMove", t.bind(function (t, n) {
                        var i = r.config, a = r._getGridPos(n), s = e.$getConfig(), l = o();
                        i.marker.style.left = a.x + 10 + "px", i.marker.style.top = a.y + "px";
                        var c = l.getItem(r.config.id), u = r._getTargetY(n),
                            d = r._getTaskByY(u, l.getIndexById(c.id));

                        function h(t, e) {
                            return !l.isChildOf(f.id, e.id) && (t.$level == e.$level || s.order_branch_free)
                        }

                        if (l.exists(d) || (d = r.lastTaskOfLevel(s.order_branch_free ? c.$level : 0)) == r.config.id && (d = null), l.exists(d)) {
                            var f = l.getItem(d);
                            if (l.getIndexById(f.id) * s.row_height + s.row_height / 2 < u) {
                                var _ = l.getIndexById(f.id), g = l.getNext(f.id), p = l.getItem(g);
                                if (p) {
                                    if (p.id == c.id) return s.order_branch_free && l.isChildOf(c.id, f.id) && 1 == l.getChildren(f.id).length ? void l.move(c.id, l.getBranchIndex(f.id) + 1, l.getParent(f.id)) : void 0;
                                    f = p
                                } else if (g = l.getIdByIndex(_), h(p = l.getItem(g), c) && p.id != c.id) return void l.move(c.id, -1, l.getParent(p.id))
                            } else if (s.order_branch_free && f.id != c.id && h(f, c)) {
                                if (!l.hasChild(f.id)) return f.$open = !0, void l.move(c.id, -1, f.id);
                                if (l.getIndexById(f.id) || s.row_height / 3 < u) return
                            }
                            _ = l.getIndexById(f.id);
                            for (var v = l.getIdByIndex(_ - 1), m = l.getItem(v), y = 1; (!m || m.id == f.id) && _ - y >= 0;) v = l.getIdByIndex(_ - y), m = l.getItem(v), y++;
                            if (c.id == f.id) return;
                            h(f, c) && c.id != f.id ? l.move(c.id, 0, 0, f.id) : f.$level != c.$level - 1 || l.getChildren(f.id).length ? m && h(m, c) && c.id != m.id && l.move(c.id, -1, l.getParent(m.id)) : l.move(c.id, 0, f.id)
                        }
                        return !0
                    }, t)), r.attachEvent("onDragEnd", t.bind(function () {
                        var t = o(), e = t.getItem(r.config.id);
                        e.$transparent = !1, e.$open = r.config.initial_open_state, !1 === this.callEvent("onBeforeRowDragEnd", [r.config.id, r.config.parent, r.config.index]) ? (t.move(r.config.id, r.config.index, r.config.parent), e.$drop_target = null) : this.callEvent("onRowDragEnd", [r.config.id, e.$drop_target]), this.refreshData()
                    }, t))
                }

                function a(t) {
                    return i.locateAttribute(t, e.$config.item_attribute)
                }

                function o() {
                    return t.getDatastore(e.$config.bind)
                }
            }
        }
    }, function (t, e, n) {
        var i = n(0), r = n(78), a = n(77), o = function (t) {
            return {
                onCreated: function (e) {
                    e.$config = i.mixin(e.$config, {bind: "task"}), "grid" == e.$config.id && (this.extendGantt(e), t.ext.inlineEditors = t.ext._inlineEditors.createEditors(e), t.ext.inlineEditors.init()), this._mouseDelegates = n(20)(t)
                }, onInitialized: function (e) {
                    var n = e.$getConfig();
                    n.order_branch && ("marker" == n.order_branch ? a.init(e.$gantt, e) : r.init(e.$gantt, e)), this.initEvents(e, t), "grid" == e.$config.id && this.extendDom(e)
                }, onDestroyed: function (e) {
                    "grid" == e.$config.id && t.ext.inlineEditors.destructor(), this.clearEvents(e, t)
                }, initEvents: function (t, e) {
                    this._mouseDelegates.delegate("click", "gantt_row", e.bind(function (n, i, r) {
                        var a = t.$getConfig();
                        if (null !== i) {
                            var o = this.getTask(i);
                            a.scroll_on_click && !e._is_icon_open_click(n) && this.showDate(o.start_date), e.callEvent("onTaskRowClick", [i, r])
                        }
                    }, e), t.$grid), this._mouseDelegates.delegate("click", "gantt_grid_head_cell", e.bind(function (n, i, r) {
                        var a = r.getAttribute("data-column-id");
                        if (e.callEvent("onGridHeaderClick", [a, n])) {
                            var o = t.$getConfig();
                            if ("add" != a) {
                                if (o.sort) {
                                    for (var s, l = a, c = 0; c < o.columns.length; c++) if (o.columns[c].name == a) {
                                        s = o.columns[c];
                                        break
                                    }
                                    if (s && void 0 !== s.sort && !0 !== s.sort && !(l = s.sort)) return;
                                    var u = this._sort && this._sort.direction && this._sort.name == a ? this._sort.direction : "desc";
                                    u = "desc" == u ? "asc" : "desc", this._sort = {
                                        name: a,
                                        direction: u
                                    }, this.sort(l, "desc" == u)
                                }
                            } else e.$services.getService("mouseEvents").callHandler("click", "gantt_add", t.$grid, [n, o.root_id])
                        }
                    }, e), t.$grid), this._mouseDelegates.delegate("click", "gantt_add", e.bind(function (n, i, r) {
                        if (!t.$getConfig().readonly) return this.createTask({}, i || e.config.root_id), !1
                    }, e), t.$grid)
                }, clearEvents: function (t, e) {
                    this._mouseDelegates.destructor(), this._mouseDelegates = null
                }, extendDom: function (e) {
                    t.$grid = e.$grid, t.$grid_scale = e.$grid_scale, t.$grid_data = e.$grid_data
                }, extendGantt: function (e) {
                    t.getGridColumns = t.bind(e.getGridColumns, e), e.attachEvent("onColumnResizeStart", function () {
                        return t.callEvent("onColumnResizeStart", arguments)
                    }), e.attachEvent("onColumnResize", function () {
                        return t.callEvent("onColumnResize", arguments)
                    }), e.attachEvent("onColumnResizeEnd", function () {
                        return t.callEvent("onColumnResizeEnd", arguments)
                    }), e.attachEvent("onColumnResizeComplete", function (e, n) {
                        t.config.grid_width = n
                    })
                }
            }
        };
        t.exports = o
    }, function (t, e, n) {
        var i = n(18), r = n(6), a = n(17), o = n(16), s = n(26);

        function l(t, e, n, i) {
            var r = 100 * (1 - (1 * t || 0)), a = i.posFromDate(e), o = i.posFromDate(n),
                s = document.createElement("div");
            return s.className = "gantt_histogram_hor_bar", s.style.top = r + "%", s.style.left = a + "px", s.style.width = o - a + 1 + "px", s
        }

        function c(t, e, n) {
            if (t === e) return null;
            var i = 1 - Math.max(t, e), r = Math.abs(t - e), a = document.createElement("div");
            return a.className = "gantt_histogram_vert_bar", a.style.top = 100 * i + "%", a.style.height = 100 * r + "%", a.style.left = n + "px", a
        }

        t.exports = function (t) {
            var e = s(t), n = {}, u = {}, d = {};

            function h(t, e) {
                var i = n[t];
                i && i[e] && i[e].parentNode && i[e].parentNode.removeChild(i[e])
            }

            function f(e, n, i, r, o, s, u) {
                var h = d[e.id];
                h && h.parentNode && h.parentNode.removeChild(h);
                var f = function (e, n, i, r) {
                    for (var o = n.getScale(), s = document.createElement("div"), u = a(o, r), d = u.start; d <= u.end; d++) {
                        var h = o.trace_x[d], f = o.trace_x[d + 1] || t.date.add(h, o.step, o.unit),
                            _ = o.trace_x[d].valueOf(), g = Math.min(e[_] / i, 1) || 0;
                        if (g < 0) return null;
                        var p = Math.min(e[f.valueOf()] / i, 1) || 0, v = l(g, h, f, n);
                        v && s.appendChild(v);
                        var m = c(g, p, n.posFromDate(f));
                        m && s.appendChild(m)
                    }
                    return s
                }(i, o, s, u);
                return f && (f.setAttribute("data-resource-id", e.id), f.setAttribute(o.$config.item_attribute, e.id), f.style.position = "absolute", f.style.top = n.top + 1 + "px", f.style.height = r.row_height - 1 + "px", f.style.left = 0), f
            }

            function _(t, e, n, i, r, a, o) {
                var s = r.histogram_cell_class(a.start_date, a.end_date, t, a.tasks),
                    l = r.histogram_cell_label(a.start_date, a.end_date, t, a.tasks),
                    c = r.histogram_cell_allocated(a.start_date, a.end_date, t, a.tasks);
                if (s || l) {
                    var u = document.createElement("div");
                    return u.className = ["gantt_histogram_cell", s].join(" "), u.setAttribute(o.$config.item_attribute, t.id), u.style.cssText = ["left:" + e.left + "px", "width:" + e.width + "px", "height:" + (i.row_height - 1) + "px", "line-height:" + (i.row_height - 1) + "px", "top:" + (e.top + 1) + "px"].join(";"), l && (l = "<div class='gantt_histogram_label'>" + l + "</div>"), c && (l = "<div class='gantt_histogram_fill' style='height:" + 100 * Math.min(c / n || 0, 1) + "%;'></div>" + l), l && (u.innerHTML = l), u
                }
                return null
            }

            return {
                render: function (i, r, s) {
                    var l = r.$getConfig(), c = r.$getTemplates(), h = r.getScale(),
                        g = e(i, l.resource_property, h, r), p = [], v = {}, m = i.capacity || r.$config.capacity || 24;
                    n[i.id] = {}, u[i.id] = null, d[i.id] = null;
                    for (var y = !!s, k = a(h, s), b = k.start; b <= k.end; b++) {
                        var w = g[b];
                        if (w && (!y || o(b, h, s, t))) {
                            var x = c.histogram_cell_capacity(w.start_date, w.end_date, i, w.tasks);
                            v[w.start_date.valueOf()] = x || 0;
                            var $ = r.getItemPosition(i, w.start_date, w.end_date), T = _(i, $, m, l, c, w, r);
                            T && (p.push(T), n[i.id][b] = T)
                        }
                    }
                    var S = null;
                    if (p.length) {
                        S = document.createElement("div");
                        for (var C = 0; C < p.length; C++) S.appendChild(p[C]);
                        var E = f(i, $, v, l, r, m, s);
                        E && (S.appendChild(E), d[i.id] = E), u[i.id] = S
                    }
                    return S
                }, update: function (i, r, s, l) {
                    var c = s.$getConfig(), u = s.$getTemplates(), g = s.getScale(),
                        p = e(i, c.resource_property, g, s), v = i.capacity || s.$config.capacity || 24, m = {},
                        y = !!l, k = a(g, l), b = {};
                    if (n && n[i.id]) for (var w in n[i.id]) b[w] = w;
                    for (var x = k.start; x <= k.end; x++) {
                        var $ = p[x];
                        if (b[x] = !1, $) {
                            var T = u.histogram_cell_capacity($.start_date, $.end_date, i, $.tasks);
                            m[$.start_date.valueOf()] = T || 0;
                            var S = s.getItemPosition(i, $.start_date, $.end_date);
                            if (!y || o(x, g, l, t)) {
                                var C = n[i.id];
                                if (C && C[x]) C && C[x] && !C[x].parentNode && r.appendChild(C[x]); else {
                                    var E = _(i, S, v, c, u, $, s);
                                    E && (r.appendChild(E), n[i.id][x] = E)
                                }
                            } else h(i.id, x)
                        }
                    }
                    for (var w in b) !1 !== b[w] && h(i.id, w);
                    var D = f(i, S, m, c, s, v, l);
                    D && (r.appendChild(D), d[i.id] = D)
                }, getRectangle: i, getVisibleRange: r
            }
        }
    }, function (t, e, n) {
        var i = n(18), r = n(6), a = n(17), o = n(16), s = n(26);
        t.exports = function (t) {
            var e = s(t), n = {};

            function l(t, e, n, i, r) {
                var a = n.resource_cell_class(e.start_date, e.end_date, t, e.tasks),
                    o = n.resource_cell_value(e.start_date, e.end_date, t, e.tasks);
                if (a || o) {
                    var s = r.getItemPosition(t, e.start_date, e.end_date), l = document.createElement("div");
                    return l.setAttribute(r.$config.item_attribute, t.id), l.className = ["gantt_resource_marker", a].join(" "), l.style.cssText = ["left:" + s.left + "px", "width:" + s.width + "px", "height:" + (i.row_height - 1) + "px", "line-height:" + (i.row_height - 1) + "px", "top:" + s.top + "px"].join(";"), o && (l.innerHTML = o), l
                }
                return null
            }

            function c(t, e) {
                n[t] && n[t][e] && n[t][e].parentNode && n[t][e].parentNode.removeChild(n[t][e])
            }

            return {
                render: function (i, r, s) {
                    var c = r.$getConfig(), u = r.$getTemplates(), d = r.getScale(),
                        h = e(i, c.resource_property, r.getScale(), r), f = !!s, _ = [];
                    n[i.id] = {};
                    for (var g = a(d, s), p = g.start; p <= g.end; p++) {
                        var v = h[p];
                        if (v && (!f || o(p, d, s, t))) {
                            var m = l(i, v, u, c, r);
                            m && (_.push(m), n[i.id][p] = m)
                        }
                    }
                    var y = null;
                    if (_.length) {
                        y = document.createElement("div");
                        for (var k = 0; k < _.length; k++) y.appendChild(_[k])
                    }
                    return y
                }, update: function (i, r, s, u) {
                    var d = s.$getConfig(), h = s.$getTemplates(), f = s.getScale(),
                        _ = e(i, d.resource_property, s.getScale(), s), g = a(f, u), p = {};
                    if (n && n[i.id]) for (var v in n[i.id]) p[v] = v;
                    for (var m = g.start; m <= g.end; m++) {
                        var y = _[m];
                        if (p[m] = !1, y) if (o(m, f, u, t)) if (n[i.id] && n[i.id][m]) n[i.id] && n[i.id][m] && !n[i.id][m].parentNode && r.appendChild(n[i.id][m]); else {
                            var k = l(i, y, h, d, s);
                            k && (r.appendChild(k), n[i.id][m] = k)
                        } else c(i.id, m)
                    }
                    for (var v in p) !1 !== p[v] && c(i.id, v)
                }, getRectangle: i, getVisibleRange: r
            }
        }
    }, function (t, e, n) {
        var i = n(3), r = n(30), a = n(6);
        t.exports = function (t) {
            return {
                render: function (e, n, r) {
                    for (var a = n.getGridColumns(), o = n.$getConfig(), s = n.$getTemplates(), l = n.$config.rowStore, c = [], u = 0; u < a.length; u++) {
                        var d, h, f, _ = u == a.length - 1, g = a[u];
                        "add" == g.name ? (h = "<div " + (b = t._waiAria.gridAddButtonAttrString(g)) + " class='gantt_add'></div>", f = "") : (h = g.template ? g.template(e) : e[g.name], i.isDate(h) && (h = s.date_grid(h, e, g.name)), null !== h && void 0 !== h || (h = ""), f = h, h = "<div class='gantt_tree_content'>" + h + "</div>");
                        var p = "gantt_cell" + (_ ? " gantt_last_cell" : ""), v = [];
                        if (g.tree) {
                            p += " gantt_cell_tree";
                            for (var m = 0; m < e.$level; m++) v.push(s.grid_indent(e));
                            !l.hasChild(e.id) || t.isSplitTask(e) && !t.config.open_split_tasks ? (v.push(s.grid_blank(e)), v.push(s.grid_file(e))) : (v.push(s.grid_open(e)), v.push(s.grid_folder(e)))
                        }
                        var y = "width:" + (g.width - (_ ? 1 : 0)) + "px;";
                        if (this.defined(g.align)) {
                            var k = {right: "flex-end", left: "flex-start", center: "center"}[g.align];
                            y += "text-align:" + g.align + ";justify-content:" + k + ";"
                        }
                        var b = t._waiAria.gridCellAttrString(g, f, e);
                        v.push(h), d = "<div class='" + p + "' data-column-index='" + u + "' data-column-name='" + g.name + "' style='" + y + "' " + b + ">" + v.join("") + "</div>", c.push(d)
                    }
                    if (p = t.getGlobalTaskIndex(e.id) % 2 == 0 ? "" : " odd", p += e.$transparent ? " gantt_transparent" : "", p += e.$dataprocessor_class ? " " + e.$dataprocessor_class : "", s.grid_row_class) {
                        var w = s.grid_row_class.call(t, e.start_date, e.end_date, e);
                        w && (p += " " + w)
                    }
                    l.isSelected(e.id) && (p += " gantt_selected");
                    var x = document.createElement("div");
                    x.className = "gantt_row" + p + " gantt_row_" + t.getTaskType(e.type);
                    var $ = n.getItemHeight();
                    return x.style.height = $ + "px", x.style.lineHeight = $ + "px", o.smart_rendering && (x.style.position = "absolute", x.style.left = "0px", x.style.top = n.getItemTop(e.id) + "px"), n.$config.item_attribute && (x.setAttribute(n.$config.item_attribute, e.id), x.setAttribute(n.$config.bind + "_id", e.id)), t._waiAria.taskRowAttr(e, x), x.innerHTML = c.join(""), x
                }, update: null, getRectangle: r, getVisibleRange: a
            }
        }
    }, function (t, e) {
        t.exports = function (t, e, n, i) {
            var r = n.$gantt.getTask(t.source), a = n.$gantt.getTask(t.target), o = n.$getConfig(),
                s = n.getItemTop(r.id), l = o.row_height, c = n.getItemTop(a.id), u = o.row_height;
            if (e.y > s + l && e.y > c + u) return !1;
            if (e.y_end < c && e.y_end < c + u) return !1;
            var d = n.posFromDate(r.start_date), h = n.posFromDate(r.end_date), f = n.posFromDate(a.start_date),
                _ = n.posFromDate(a.end_date);
            if (d > h) {
                var g = h;
                h = d, d = g
            }
            if (f > _) {
                g = _;
                _ = f, f = g
            }
            return d += -100, h += 100, f += -100, _ += 100, !(e.x > h && e.x > _) && !(e.x_end < d && e.x_end < f)
        }
    }, function (t, e, n) {
        var i = n(83);
        t.exports = function (t) {
            var e = {
                current_pos: null,
                dirs: {left: "left", right: "right", up: "up", down: "down"},
                path: [],
                clear: function () {
                    this.current_pos = null, this.path = []
                },
                point: function (e) {
                    this.current_pos = t.copy(e)
                },
                get_lines: function (t) {
                    this.clear(), this.point(t[0]);
                    for (var e = 1; e < t.length; e++) this.line_to(t[e]);
                    return this.get_path()
                },
                line_to: function (e) {
                    var n = t.copy(e), i = this.current_pos, r = this._get_line(i, n);
                    this.path.push(r), this.current_pos = n
                },
                get_path: function () {
                    return this.path
                },
                get_wrapper_sizes: function (t, e) {
                    var n, i = e.$getConfig(), r = i.link_wrapper_width, a = t.y + (i.row_height - r) / 2;
                    switch (t.direction) {
                        case this.dirs.left:
                            n = {top: a, height: r, lineHeight: r, left: t.x - t.size - r / 2, width: t.size + r};
                            break;
                        case this.dirs.right:
                            n = {top: a, lineHeight: r, height: r, left: t.x - r / 2, width: t.size + r};
                            break;
                        case this.dirs.up:
                            n = {
                                top: a - t.size,
                                lineHeight: t.size + r,
                                height: t.size + r,
                                left: t.x - r / 2,
                                width: r
                            };
                            break;
                        case this.dirs.down:
                            n = {top: a, lineHeight: t.size + r, height: t.size + r, left: t.x - r / 2, width: r}
                    }
                    return n
                },
                get_line_sizes: function (t, e) {
                    var n, i = e.$getConfig(), r = i.link_line_width, a = i.link_wrapper_width, o = t.size + r;
                    switch (t.direction) {
                        case this.dirs.left:
                        case this.dirs.right:
                            n = {height: r, width: o, marginTop: (a - r) / 2, marginLeft: (a - r) / 2};
                            break;
                        case this.dirs.up:
                        case this.dirs.down:
                            n = {height: o, width: r, marginTop: (a - r) / 2, marginLeft: (a - r) / 2}
                    }
                    return n
                },
                render_line: function (t, e, n) {
                    var i = this.get_wrapper_sizes(t, n), r = document.createElement("div");
                    r.style.cssText = ["top:" + i.top + "px", "left:" + i.left + "px", "height:" + i.height + "px", "width:" + i.width + "px"].join(";"), r.className = "gantt_line_wrapper";
                    var a = this.get_line_sizes(t, n), o = document.createElement("div");
                    return o.style.cssText = ["height:" + a.height + "px", "width:" + a.width + "px", "margin-top:" + a.marginTop + "px", "margin-left:" + a.marginLeft + "px"].join(";"), o.className = "gantt_link_line_" + t.direction, r.appendChild(o), r
                },
                _get_line: function (t, e) {
                    var n = this.get_direction(t, e), i = {x: t.x, y: t.y, direction: this.get_direction(t, e)};
                    return n == this.dirs.left || n == this.dirs.right ? i.size = Math.abs(t.x - e.x) : i.size = Math.abs(t.y - e.y), i
                },
                get_direction: function (t, e) {
                    return e.x < t.x ? this.dirs.left : e.x > t.x ? this.dirs.right : e.y > t.y ? this.dirs.down : this.dirs.up
                }
            }, n = {
                path: [], clear: function () {
                    this.path = []
                }, current: function () {
                    return this.path[this.path.length - 1]
                }, point: function (e) {
                    return e ? (this.path.push(t.copy(e)), e) : this.current()
                }, point_to: function (n, i, r) {
                    r = r ? {x: r.x, y: r.y} : t.copy(this.point());
                    var a = e.dirs;
                    switch (n) {
                        case a.left:
                            r.x -= i;
                            break;
                        case a.right:
                            r.x += i;
                            break;
                        case a.up:
                            r.y -= i;
                            break;
                        case a.down:
                            r.y += i
                    }
                    return this.point(r)
                }, get_points: function (n, i) {
                    var r = this.get_endpoint(n, i), a = t.config, o = r.e_y - r.y, s = r.e_x - r.x, l = e.dirs;
                    this.clear(), this.point({x: r.x, y: r.y});
                    var c = 2 * a.link_arrow_size, u = this.get_line_type(n, i.$getConfig()), d = r.e_x > r.x;
                    if (u.from_start && u.to_start) this.point_to(l.left, c), d ? (this.point_to(l.down, o), this.point_to(l.right, s)) : (this.point_to(l.right, s), this.point_to(l.down, o)), this.point_to(l.right, c); else if (!u.from_start && u.to_start) if (d = r.e_x > r.x + 2 * c, this.point_to(l.right, c), d) s -= c, this.point_to(l.down, o), this.point_to(l.right, s); else {
                        s -= 2 * c;
                        var h = o > 0 ? 1 : -1;
                        this.point_to(l.down, h * (a.row_height / 2)), this.point_to(l.right, s), this.point_to(l.down, h * (Math.abs(o) - a.row_height / 2)), this.point_to(l.right, c)
                    } else u.from_start || u.to_start ? u.from_start && !u.to_start && (d = r.e_x > r.x - 2 * c, this.point_to(l.left, c), d ? (s += 2 * c, h = o > 0 ? 1 : -1, this.point_to(l.down, h * (a.row_height / 2)), this.point_to(l.right, s), this.point_to(l.down, h * (Math.abs(o) - a.row_height / 2)), this.point_to(l.left, c)) : (s += c, this.point_to(l.down, o), this.point_to(l.right, s))) : (this.point_to(l.right, c), d ? (this.point_to(l.right, s), this.point_to(l.down, o)) : (this.point_to(l.down, o), this.point_to(l.right, s)), this.point_to(l.left, c));
                    return this.path
                }, get_line_type: function (e, n) {
                    var i = n.links, r = !1, a = !1;
                    return e.type == i.start_to_start ? r = a = !0 : e.type == i.finish_to_finish ? r = a = !1 : e.type == i.finish_to_start ? (r = !1, a = !0) : e.type == i.start_to_finish ? (r = !0, a = !1) : t.assert(!1, "Invalid link type"), n.rtl && (r = !r, a = !a), {
                        from_start: r,
                        to_start: a
                    }
                }, get_endpoint: function (e, n) {
                    var i = n.$getConfig(), a = this.get_line_type(e, i), o = a.from_start, s = a.to_start,
                        l = t.getTask(e.source), c = t.getTask(e.target), u = r(l, n), d = r(c, n);
                    return {x: o ? u.left : u.left + u.width, e_x: s ? d.left : d.left + d.width, y: u.top, e_y: d.top}
                }
            };

            function r(e, n) {
                var i = n.$getConfig(), r = n.getItemPosition(e);
                if (t.getTaskType(e.type) == i.types.milestone) {
                    var a = t.getTaskHeight(), o = Math.sqrt(2 * a * a);
                    r.left -= o / 2, r.width = o
                }
                return r
            }

            return {
                render: function (i, r) {
                    var a = r.$getConfig(), o = n.get_endpoint(i, r), s = o.e_y - o.y;
                    if (!(o.e_x - o.x || s)) return null;
                    var l = n.get_points(i, r), c = e.get_lines(l, r), u = document.createElement("div"),
                        d = "gantt_task_link";
                    i.color && (d += " gantt_link_inline_color");
                    var h = t.templates.link_class ? t.templates.link_class(i) : "";
                    h && (d += " " + h), a.highlight_critical_path && t.isCriticalLink && t.isCriticalLink(i) && (d += " gantt_critical_link"), u.className = d, r.$config.link_attribute && (u.setAttribute(r.$config.link_attribute, i.id), u.setAttribute("link_id", i.id));
                    for (var f = 0; f < c.length; f++) {
                        f == c.length - 1 && (c[f].size -= a.link_arrow_size);
                        var _ = e.render_line(c[f], c[f + 1], r);
                        i.color && (_.firstChild.style.backgroundColor = i.color), u.appendChild(_)
                    }
                    var g = c[c.length - 1].direction, p = function (t, n, i) {
                        var r = i.$getConfig(), a = document.createElement("div"), o = t.y, s = t.x,
                            l = r.link_arrow_size, c = r.row_height, u = "gantt_link_arrow gantt_link_arrow_" + n;
                        switch (n) {
                            case e.dirs.right:
                                o -= (l - c) / 2, s -= l;
                                break;
                            case e.dirs.left:
                                o -= (l - c) / 2;
                                break;
                            case e.dirs.up:
                                s -= l;
                                break;
                            case e.dirs.down:
                                o += 2 * l, s -= l
                        }
                        return a.style.cssText = ["top:" + o + "px", "left:" + s + "px"].join(";"), a.className = u, a
                    }(l[l.length - 1], g, r);
                    return i.color && (p.style.borderColor = i.color), u.appendChild(p), t._waiAria.linkAttr(i, u), u
                }, update: null, isInViewPort: i
            }
        }
    }, function (t, e, n) {
        var i = n(18), r = n(12), a = n(6), o = n(17), s = n(16);
        t.exports = function (t) {
            var e = {}, n = {};

            function l(t, n) {
                return !(!e[t.id][n] || !e[t.id][n].parentNode)
            }

            function c(t, n) {
                e[t] && e[t][n] && e[t][n].parentNode && e[t][n].parentNode.removeChild(e[t][n])
            }

            function u(t) {
                var e, n = t.$getTemplates();
                return void 0 !== n.task_cell_class ? (e = n.task_cell_class, (console.warn || console.log)("gantt.templates.task_cell_class template is deprecated and will be removed soon. Please use gantt.templates.timeline_cell_class instead.")) : e = n.timeline_cell_class, e
            }

            function d(i, r, a, o, l, c, u) {
                var d = i.width[r], h = "";
                if (s(r, i, o, t)) {
                    var f = c(a, i.trace_x[r]);
                    if (u.static_background && (!u.static_background_cells || !f)) return null;
                    if (e[a.id][r]) return n[a.id][r] = r, e[a.id][r];
                    var _ = document.createElement("div");
                    return _.style.width = d + "px", h = "gantt_task_cell" + (r == l - 1 ? " gantt_last_cell" : ""), f && (h += " " + f), _.className = h, _.style.position = "absolute", _.style.left = i.left[r] + "px", e[a.id][r] = _, n[a.id][r] = r, _
                }
                return null
            }

            return {
                render: function (i, a, s) {
                    var l = a.$getConfig(), c = a.$getTemplates(), h = a.getScale(), f = h.count;
                    if (l.static_background && !l.static_background_cells) return null;
                    var _, g = document.createElement("div"), p = u(a);
                    if (_ = s && l.smart_rendering && !r(t) ? o(h, s.x) : {start: 0, end: f - 1}, l.show_task_cells) {
                        e[i.id] = {}, n[i.id] = {};
                        for (var v = _.start; v <= _.end; v++) {
                            var m = d(h, v, i, s, f, p, l);
                            m && g.appendChild(m)
                        }
                    }
                    var y = t.getGlobalTaskIndex(i.id) % 2 != 0, k = c.task_row_class(i.start_date, i.end_date, i),
                        b = "gantt_task_row" + (y ? " odd" : "") + (k ? " " + k : "");
                    return a.$config.rowStore.isSelected(i.id) && (b += " gantt_selected"), g.className = b, l.smart_rendering ? (g.style.position = "absolute", g.style.top = a.getItemTop(i.id) + "px", g.style.width = "100%") : g.style.position = "relative", g.style.height = l.row_height + "px", a.$config.item_attribute && (g.setAttribute(a.$config.item_attribute, i.id), g.setAttribute(a.$config.bind + "_id", i.id)), g
                }, update: function (t, i, r, a) {
                    var s = r.$getConfig(), h = r.getScale(), f = h.count, _ = u(r);
                    if (s.show_task_cells) {
                        e[t.id] || (e[t.id] = {}), n[t.id] || (n[t.id] = {});
                        var g = o(h, a);
                        for (var p in n[t.id]) {
                            var v = n[t.id][p];
                            (Number(v) < g.start || Number(v) > g.end) && c(t.id, v)
                        }
                        n[t.id] = {};
                        for (var m = g.start; m <= g.end; m++) {
                            var y = d(h, m, t, a, f, _, s);
                            !y && l(t, m) ? c(t.id, m) : y && !y.parentNode && i.appendChild(y)
                        }
                    }
                }, getRectangle: i, getVisibleRange: a
            }
        }
    }, function (t, e, n) {
        var i = n(27), r = n(28), a = n(6);
        t.exports = function (t) {
            var e = i(t);
            return {
                render: function (n, i) {
                    if (t.isSplitTask(n) && (t.config.open_split_tasks && !n.$open || !t.config.open_split_tasks)) {
                        for (var r = document.createElement("div"), a = t.getTaskPosition(n), o = t.getChildren(n.id), s = 0; s < o.length; s++) {
                            var l = t.getTask(o[s]), c = e(l, i);
                            if (c) {
                                var u = Math.floor((t.config.row_height - a.height) / 2);
                                c.style.top = a.top + u + "px", c.className += " gantt_split_child", r.appendChild(c)
                            }
                        }
                        return r
                    }
                    return !1
                }, update: null, isInViewPort: r, getVisibleRange: a
            }
        }
    }, function (t, e, n) {
        var i = n(28), r = n(6), a = n(27);
        t.exports = function (t) {
            return {render: a(t), update: null, isInViewPort: i, getVisibleRange: r}
        }
    }, function (t, e) {
        t.exports = function (t) {
            return function (e, n, i) {
                "keepDates" == i ? function (e, n) {
                    "duration" == n ? e.end_date = t.calculateEndDate(e) : "end_date" != n && "start_date" != n || (e.duration = t.calculateDuration(e))
                }(e, n) : "keepDuration" == i ? function (e, n) {
                    "end_date" == n ? e.start_date = t.calculateEndDate({
                        start_date: e.end_date,
                        duration: -e.duration,
                        task: e
                    }) : "start_date" != n && "duration" != n || (e.end_date = t.calculateEndDate(e))
                }(e, n) : function (e, n) {
                    "start_date" == n || "duration" == n ? e.end_date = t.calculateEndDate(e) : "end_date" == n && (e.duration = t.calculateDuration(e))
                }(e, n)
            }
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(7)(t), i = n(0);

            function r() {
                return e.apply(this, arguments) || this
            }

            function a(e) {
                return e.formatter || t.ext.formatters.durationFormatter()
            }

            return n(2)(r, e), i.mixin(r.prototype, {
                show: function (t, e, n, i) {
                    var r = "<div><input type='text' name='" + e.name + "'></div>";
                    i.innerHTML = r
                }, set_value: function (t, e, n, i) {
                    this.get_input(i).value = a(n.editor).format(t)
                }, get_value: function (t, e, n) {
                    return a(e.editor).parse(this.get_input(n).value || "")
                }
            }, !0), r
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(7)(t), i = n(0);

            function r() {
                return e.apply(this, arguments) || this
            }

            function a(e) {
                return e.formatter || t.ext.formatters.linkFormatter()
            }

            function o(t, e) {
                for (var n = (t || "").split(e.delimiter || ","), i = 0; i < n.length; i++) {
                    var r = n[i].trim();
                    r ? n[i] = r : (n.splice(i, 1), i--)
                }
                return n.sort(), n
            }

            function s(t, e, n) {
                for (var i = t.$target, r = [], o = 0; o < i.length; o++) {
                    var s = n.getLink(i[o]);
                    r.push(a(e).format(s))
                }
                return r.join((e.delimiter || ",") + " ")
            }

            function l(t) {
                return t.source + "_" + t.target + "_" + t.type + "_" + (t.lag || 0)
            }

            function c(e, n, i) {
                var r = function (e, n, i) {
                    var r = [];
                    return n.forEach(function (n) {
                        var o = a(i).parse(n);
                        o && (o.target = e, t.isLinkAllowed(o) && r.push(o))
                    }), r
                }(e.id, n, i), o = {};
                e.$target.forEach(function (e) {
                    var n = t.getLink(e);
                    o[l(n)] = n.id
                });
                var s = [];
                r.forEach(function (t) {
                    var e = l(t);
                    o[e] ? delete o[e] : s.push(t)
                });
                var c = [];
                for (var u in o) c.push(o[u]);
                return {add: s, remove: c}
            }

            return n(2)(r, e), i.mixin(r.prototype, {
                show: function (t, e, n, i) {
                    var r = "<div><input type='text' name='" + e.name + "'></div>";
                    i.innerHTML = r
                }, hide: function () {
                }, set_value: function (e, n, i, r) {
                    this.get_input(r).value = s(e, i.editor, t)
                }, get_value: function (t, e, n) {
                    return o(this.get_input(n).value || "", e.editor)
                }, save: function (e, n, i) {
                    var r = c(t.getTask(e), this.get_value(e, n, i), n.editor);
                    (r.add.length || r.remove.length) && t.batchUpdate(function () {
                        r.add.forEach(function (e) {
                            t.addLink(e)
                        }), r.remove.forEach(function (e) {
                            t.deleteLink(e)
                        }), t.autoSchedule && t.autoSchedule()
                    })
                }, is_changed: function (e, n, i, r) {
                    var a = this.get_value(n, i, r), l = o(s(e, i.editor, t), i.editor);
                    return a.join() !== l.join()
                }
            }, !0), r
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(7)(t), i = n(0), r = "%Y-%m-%d", a = null, o = null;

            function s() {
                return e.apply(this, arguments) || this
            }

            return n(2)(s, e), i.mixin(s.prototype, {
                show: function (e, n, i, s) {
                    a || (a = t.date.date_to_str(r)), o || (o = t.date.str_to_date(r));
                    var l = null, c = null;
                    l = "function" == typeof i.min ? i.min(e, n) : i.min, c = "function" == typeof i.max ? i.max(e, n) : i.max;
                    var u = "<div style='width:140px'><input type='date' " + (l ? " min='" + a(l) + "' " : "") + (c ? " max='" + a(c) + "' " : "") + " name='" + n.name + "'></div>";
                    s.innerHTML = u
                }, set_value: function (t, e, n, i) {
                    t && t.getFullYear ? this.get_input(i).value = a(t) : this.get_input(i).value = t
                }, is_valid: function (t, e, n, i) {
                    return !(!t || isNaN(t.getTime()))
                }, get_value: function (t, e, n) {
                    var i;
                    try {
                        i = o(this.get_input(n).value || "")
                    } catch (t) {
                        i = null
                    }
                    return i
                }
            }, !0), s
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(7)(t), i = n(0);

            function r() {
                return e.apply(this, arguments) || this
            }

            return n(2)(r, e), i.mixin(r.prototype, {
                show: function (t, e, n, i) {
                    for (var r = "<div><select name='" + e.name + "'>", a = [], o = n.options || [], s = 0; s < o.length; s++) a.push("<option value='" + n.options[s].key + "'>" + o[s].label + "</option>");
                    r += a.join("") + "</select></div>", i.innerHTML = r
                }, get_input: function (t) {
                    return t.querySelector("select")
                }
            }, !0), r
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(7)(t), i = n(0);

            function r() {
                return e.apply(this, arguments) || this
            }

            return n(2)(r, e), i.mixin(r.prototype, {
                show: function (t, e, n, i) {
                    var r = "<div><input type='number' min='" + (n.min || 0) + "' max='" + (n.max || 100) + "' name='" + e.name + "'></div>";
                    i.innerHTML = r
                }, get_value: function (t, e, n) {
                    return this.get_input(n).value || ""
                }, is_valid: function (t, e, n, i) {
                    return !isNaN(parseInt(t, 10))
                }
            }, !0), r
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(7)(t), i = n(0);

            function r() {
                return e.apply(this, arguments) || this
            }

            return n(2)(r, e), i.mixin(r.prototype, {
                show: function (t, e, n, i) {
                    var r = "<div><input type='text' name='" + e.name + "'></div>";
                    i.innerHTML = r
                }
            }, !0), r
        }
    }, function (t, e) {
        t.exports = {
            init: function (t, e) {
                var n = t, i = e.$gantt, r = null, a = i.ext.keyboardNavigation;
                a.attachEvent("onBeforeFocus", function (e) {
                    var i = t.locateCell(e);
                    if (clearTimeout(r), i) {
                        var a = i.columnName, o = i.id, s = n.getState();
                        if (n.isVisible() && s.id == o && s.columnName === a) return !1
                    }
                    return !0
                }), a.attachEvent("onFocus", function (e) {
                    var i = t.locateCell(e), a = t.getState();
                    return clearTimeout(r), !i || i.id == a.id && i.columnName == a.columnName || n.isVisible() && n.save(), !0
                }), t.attachEvent("onHide", function () {
                    clearTimeout(r)
                }), a.attachEvent("onBlur", function () {
                    return r = setTimeout(function () {
                        n.save()
                    }), !0
                }), i.attachEvent("onTaskDblClick", function (e, n) {
                    var i = t.getState(), r = t.locateCell(n.target);
                    return !r || !t.isVisible() || r.columnName != i.columnName
                }), i.attachEvent("onTaskClick", function (e, n) {
                    if (i._is_icon_open_click(n)) return !0;
                    var r = t.getState(), a = t.locateCell(n.target);
                    return !a || !t.getEditorConfig(a.columnName) || (t.isVisible() && r.id == a.id && r.columnName == a.columnName || t.startEdit(a.id, a.columnName), !1)
                }), i.attachEvent("onEmptyClick", function () {
                    return n.save(), !0
                }), a.attachEvent("onKeyDown", function (e, r) {
                    var o = t.locateCell(r.target), s = !!o && t.getEditorConfig(o.columnName), l = t.getState(),
                        c = i.constants.KEY_CODES, u = r.keyCode, d = !1;
                    switch (u) {
                        case c.ENTER:
                            t.isVisible() ? (t.save(), r.preventDefault(), d = !0) : s && !(r.ctrlKey || r.metaKey || r.shiftKey) && (n.startEdit(o.id, o.columnName), r.preventDefault(), d = !0);
                            break;
                        case c.ESC:
                            t.isVisible() && (t.hide(), r.preventDefault(), d = !0);
                            break;
                        case c.UP:
                        case c.DOWN:
                            break;
                        case c.LEFT:
                        case c.RIGHT:
                            (s && t.isVisible() || "date" === l.editorType) && (d = !0);
                            break;
                        case c.SPACE:
                            t.isVisible() && (d = !0), s && !t.isVisible() && (n.startEdit(o.id, o.columnName), r.preventDefault(), d = !0);
                            break;
                        case c.DELETE:
                            s && !t.isVisible() ? (n.startEdit(o.id, o.columnName), d = !0) : s && t.isVisible() && (d = !0);
                            break;
                        case c.TAB:
                            if (t.isVisible()) {
                                r.shiftKey ? t.editPrevCell(!0) : t.editNextCell(!0);
                                var h = t.getState();
                                h.id && a.focus({
                                    type: "taskCell",
                                    id: h.id,
                                    column: h.columnName
                                }), r.preventDefault(), d = !0
                            }
                            break;
                        default:
                            if (t.isVisible()) d = !0; else if (u >= 48 && u <= 57 || u > 95 && u < 112 || u >= 64 && u <= 91 || u > 185 && u < 193 || u > 218 && u < 223) {
                                var f = e.modifiers, _ = f.alt || f.ctrl || f.meta || f.shift;
                                f.alt || _ && a.getCommandHandler(e, "taskCell") || s && !t.isVisible() && (n.startEdit(o.id, o.columnName), d = !0)
                            }
                    }
                    return !d
                })
            }, onShow: function (t, e, n) {
            }, onHide: function (t, e, n) {
                n.$gantt.focus()
            }, destroy: function () {
            }
        }
    }, function (t, e) {
        t.exports = {
            init: function (t, e) {
                var n = e.$gantt;
                n.attachEvent("onTaskClick", function (e, i) {
                    if (n._is_icon_open_click(i)) return !0;
                    var r = t.getState(), a = t.locateCell(i.target);
                    return !a || !t.getEditorConfig(a.columnName) || (t.isVisible() && r.id == a.id && r.columnName == a.columnName || t.startEdit(a.id, a.columnName), !1)
                }), n.attachEvent("onEmptyClick", function () {
                    return t.isVisible() && t.isChanged() ? t.save() : t.hide(), !0
                }), n.attachEvent("onTaskDblClick", function (e, n) {
                    var i = t.getState(), r = t.locateCell(n.target);
                    return !r || !t.isVisible() || r.columnName != i.columnName || (t.hide(), !1)
                })
            }, onShow: function (t, e, n) {
                var i = n.$gantt;
                i.ext && i.ext.keyboardNavigation && i.ext.keyboardNavigation.attachEvent("onKeyDown", function (e, n) {
                    var r = i.constants.KEY_CODES, a = !1;
                    switch (n.keyCode) {
                        case r.SPACE:
                            t.isVisible() && (a = !0)
                    }
                    return !a
                });
                e.onkeydown = function (e) {
                    e = e || window.event;
                    var n = i.constants.KEY_CODES;
                    if (!(e.defaultPrevented || e.shiftKey && e.keyCode != n.TAB)) {
                        var r = !0;
                        switch (e.keyCode) {
                            case i.keys.edit_save:
                                t.save();
                                break;
                            case i.keys.edit_cancel:
                                t.hide();
                                break;
                            case n.UP:
                            case n.DOWN:
                                t.isVisible() && (t.hide(), r = !1);
                                break;
                            case n.TAB:
                                e.shiftKey ? t.editPrevCell(!0) : t.editNextCell(!0);
                                break;
                            default:
                                r = !1
                        }
                        r && e.preventDefault()
                    }
                }
            }, onHide: function () {
            }, destroy: function () {
            }
        }
    }, function (t, e, n) {
        var i = n(96), r = n(95);
        t.exports = function (t) {
            var e = null;
            return {
                setMapping: function (t) {
                    e = t
                }, getMapping: function () {
                    return e || (t.config.keyboard_navigation_cells ? r : i)
                }
            }
        }
    }, function (t, e, n) {
        var i = n(97), r = n(94), a = n(93), o = n(92), s = n(91), l = n(90), c = n(89), u = n(0), d = n(1), h = n(4),
            f = n(88);

        function _(t) {
            t.config.editor_types = {
                text: new (r(t)),
                number: new (a(t)),
                select: new (o(t)),
                date: new (s(t)),
                predecessor: new (l(t)),
                duration: new (c(t))
            }
        }

        t.exports = function (t) {
            var e = i(t), n = {};
            h(n);
            var r = {
                init: _, createEditors: function (i) {
                    function r(t, e) {
                        var n = function (t, e) {
                            for (var n = i.getItemTop(t), r = i.getItemHeight(t), a = i.getGridColumns(), o = 0, s = 0, l = 0; l < a.length; l++) {
                                if (a[l].name == e) {
                                    s = a[l].width;
                                    break
                                }
                                o += a[l].width
                            }
                            return {top: n, left: o, height: r, width: s}
                        }(t, e), r = document.createElement("div");
                        r.className = "gantt_grid_editor_placeholder", r.setAttribute(i.$config.item_attribute, t), r.setAttribute(i.$config.bind + "_id", t), r.setAttribute("data-column-name", e);
                        var a = function (t, e) {
                            for (var n = t.getGridColumns(), i = 0; i < n.length; i++) if (n[i].name == e) return i;
                            return 0
                        }(i, e);
                        return r.setAttribute("data-column-index", a), r.style.cssText = ["top:" + n.top + "px", "left:" + n.left + "px", "width:" + n.width + "px", "height:" + n.height + "px"].join(";"), r
                    }

                    var a = f(t), o = [], s = null, l = {
                        _itemId: null,
                        _columnName: null,
                        _editor: null,
                        _editorType: null,
                        _placeholder: null,
                        locateCell: function (t) {
                            if (!d.isChildOf(t, i.$grid)) return null;
                            var e = d.locateAttribute(t, i.$config.item_attribute),
                                n = d.locateAttribute(t, "data-column-name");
                            if (n) {
                                var r = n.getAttribute("data-column-name");
                                return {id: e.getAttribute(i.$config.item_attribute), columnName: r}
                            }
                            return null
                        },
                        getEditorConfig: function (t) {
                            return i.getColumn(t).editor
                        },
                        init: function () {
                            var t = e.getMapping();
                            t.init && t.init(this, i), s = i.$gantt.getDatastore(i.$config.bind);
                            var n = this;
                            o.push(s.attachEvent("onIdChange", function (t, e) {
                                n._itemId == t && (n._itemId = e)
                            })), o.push(s.attachEvent("onStoreUpdated", function () {
                                i.$gantt.getState("batchUpdate").batch_update || n.isVisible() && !s.isVisible(n._itemId) && n.hide()
                            })), this.init = function () {
                            }
                        },
                        getState: function () {
                            return {
                                editor: this._editor,
                                editorType: this._editorType,
                                placeholder: this._placeholder,
                                id: this._itemId,
                                columnName: this._columnName
                            }
                        },
                        startEdit: function (e, n) {
                            if (this.isVisible() && this.save(), s.exists(e)) {
                                var i = {id: e, columnName: n};
                                t.isReadonly(s.getItem(e)) ? this.callEvent("onEditPrevent", [i]) : !1 !== this.callEvent("onBeforeEditStart", [i]) ? (this.show(i.id, i.columnName), this.setValue(), this.callEvent("onEditStart", [i])) : this.callEvent("onEditPrevent", [i])
                            }
                        },
                        isVisible: function () {
                            return !(!this._editor || !d.isChildOf(this._placeholder, document.body))
                        },
                        show: function (t, n) {
                            this.isVisible() && this.save();
                            var a = {id: t, columnName: n}, o = i.getColumn(a.columnName),
                                s = this.getEditorConfig(o.name);
                            if (s) {
                                var l = i.$getConfig().editor_types[s.type], c = r(a.id, a.columnName);
                                i.$grid_data.appendChild(c), l.show(a.id, o, s, c), this._editor = l, this._placeholder = c, this._itemId = a.id, this._columnName = a.columnName, this._editorType = s.type;
                                var u = e.getMapping();
                                u.onShow && u.onShow(this, c, i)
                            }
                        },
                        setValue: function () {
                            var t = this.getState(), e = t.id, n = t.columnName, r = i.getColumn(n), a = s.getItem(e),
                                o = this.getEditorConfig(n);
                            if (o) {
                                var l = a[o.map_to];
                                "auto" == o.map_to && (l = s.getItem(e)), this._editor.set_value(l, e, r, this._placeholder), this.focus()
                            }
                        },
                        focus: function () {
                            this._editor.focus(this._placeholder)
                        },
                        getValue: function () {
                            var t = i.getColumn(this._columnName);
                            return this._editor.get_value(this._itemId, t, this._placeholder)
                        },
                        _getItemValue: function () {
                            var e = this.getEditorConfig(this._columnName);
                            if (e) {
                                var n = t.getTask(this._itemId)[e.map_to];
                                return "auto" == e.map_to && (n = s.getItem(this._itemId)), n
                            }
                        },
                        isChanged: function () {
                            var t = i.getColumn(this._columnName), e = this._getItemValue();
                            return this._editor.is_changed(e, this._itemId, t, this._placeholder)
                        },
                        hide: function () {
                            if (this._itemId) {
                                var t = this._itemId, n = this._columnName, r = e.getMapping();
                                r.onHide && r.onHide(this, this._placeholder, i), this._itemId = null, this._columnName = null, this._editorType = null, this._placeholder && (this._editor && this._editor.hide(this._placeholder), this._editor = null, this._placeholder.parentNode && this._placeholder.parentNode.removeChild(this._placeholder), this._placeholder = null, this.callEvent("onEditEnd", [{
                                    id: t,
                                    columnName: n
                                }]))
                            }
                        },
                        save: function () {
                            if (this.isVisible() && s.exists(this._itemId) && this.isChanged()) {
                                var e = this._itemId, n = this._columnName;
                                if (s.exists(e)) {
                                    var r = s.getItem(e), o = this.getEditorConfig(n), l = {
                                        id: e,
                                        columnName: n,
                                        newValue: this.getValue(),
                                        oldValue: this._getItemValue()
                                    };
                                    if (!1 !== this.callEvent("onBeforeSave", [l]) && this._editor.is_valid(l.newValue, l.id, l.columnName, this._placeholder)) {
                                        var c = o.map_to, u = l.newValue;
                                        "auto" != c ? (r[c] = u, a(r, c, t.config.inline_editors_date_processing), s.updateItem(e)) : this._editor.save(e, i.getColumn(n), this._placeholder), this.callEvent("onSave", [l])
                                    }
                                    this.hide()
                                }
                            } else this.hide()
                        },
                        _findEditableCell: function (t, e) {
                            var n = t, r = i.getGridColumns()[n], a = r ? r.name : null;
                            if (a) {
                                for (; a && !this.getEditorConfig(a);) a = this._findEditableCell(t + e, e);
                                return a
                            }
                            return null
                        },
                        getNextCell: function (t) {
                            return this._findEditableCell(i.getColumnIndex(this._columnName) + t, t)
                        },
                        getFirstCell: function () {
                            return this._findEditableCell(0, 1)
                        },
                        getLastCell: function () {
                            return this._findEditableCell(i.getGridColumns().length - 1, -1)
                        },
                        editNextCell: function (t) {
                            var e = this.getNextCell(1);
                            if (e) {
                                var n = this.getNextCell(1);
                                n && this.getEditorConfig(n) && this.startEdit(this._itemId, n)
                            } else if (t && this.moveRow(1)) {
                                var i = this.moveRow(1);
                                (e = this.getFirstCell()) && this.getEditorConfig(e) && this.startEdit(i, e)
                            }
                        },
                        editPrevCell: function (t) {
                            var e = this.getNextCell(-1);
                            if (e) {
                                var n = this.getNextCell(-1);
                                n && this.getEditorConfig(n) && this.startEdit(this._itemId, n)
                            } else if (t && this.moveRow(-1)) {
                                var i = this.moveRow(-1);
                                (e = this.getLastCell()) && this.getEditorConfig(e) && this.startEdit(i, e)
                            }
                        },
                        moveRow: function (e) {
                            for (var n = e > 0 ? t.getNext : t.getPrev, i = (n = t.bind(n, t))(this._itemId); t.isTaskExists(i) && t.isReadonly(t.getTask(i));) i = n(i);
                            return i
                        },
                        editNextRow: function () {
                            var t = this.getNextCell(1);
                            t && this.startEdit(t, this._columnName)
                        },
                        editPrevRow: function () {
                            var t = this.getNextCell(-1);
                            t && this.startEdit(t, this._columnName)
                        },
                        destructor: function () {
                            o.forEach(function (t) {
                                s.detachEvent(t)
                            }), s = null, this.hide(), this.detachAllEvents()
                        }
                    };
                    return u.mixin(l, e), u.mixin(l, n), l
                }
            };
            return u.mixin(r, e), u.mixin(r, n), r
        }
    }, function (t, e) {
        t.exports = {
            create: function () {
                return {
                    render: function () {
                    }, destroy: function () {
                    }
                }
            }
        }
    }, function (t, e, n) {
        var i = n(2), r = n(1), a = n(0), o = n(9), s = function (t) {
            "use strict";
            var e = ["altKey", "shiftKey", "metaKey"];

            function n(e, n, i, r) {
                var o = t.apply(this, arguments) || this;
                this.$config = a.mixin(n, {scroll: "x"}), o._scrollHorizontalHandler = a.bind(o._scrollHorizontalHandler, o), o._scrollVerticalHandler = a.bind(o._scrollVerticalHandler, o), o._outerScrollVerticalHandler = a.bind(o._outerScrollVerticalHandler, o), o._outerScrollHorizontalHandler = a.bind(o._outerScrollHorizontalHandler, o), o._mouseWheelHandler = a.bind(o._mouseWheelHandler, o), this.$config.hidden = !0;
                var s = r.config.scroll_size;
                return r.env.isIE && (s += 1), this._isHorizontal() ? (o.$config.height = s, o.$parent.$config.height = s) : (o.$config.width = s, o.$parent.$config.width = s), this.$config.scrollPosition = 0, o.$name = "scroller", o
            }

            return i(n, t), n.prototype.init = function (t) {
                t.innerHTML = this.$toHTML(), this.$view = t.firstChild, this.$view || this.init(), this._isVertical() ? this._initVertical() : this._initHorizontal(), this._initMouseWheel(), this._initLinkedViews()
            }, n.prototype.$toHTML = function () {
                return "<div class='gantt_layout_cell " + (this._isHorizontal() ? "gantt_hor_scroll" : "gantt_ver_scroll") + "'><div style='" + (this._isHorizontal() ? "width:2000px" : "height:2000px") + "'></div></div>"
            }, n.prototype._getRootParent = function () {
                for (var t = this.$parent; t && t.$parent;) t = t.$parent;
                if (t) return t
            }, n.prototype._eachView = function () {
                var t = [];
                return function t(e, n) {
                    if (n.push(e), e.$cells) for (var i = 0; i < e.$cells.length; i++) t(e.$cells[i], n)
                }(this._getRootParent(), t), t
            }, n.prototype._getLinkedViews = function () {
                for (var t = this._eachView(), e = [], n = 0; n < t.length; n++) t[n].$config && (this._isVertical() && t[n].$config.scrollY == this.$id || this._isHorizontal() && t[n].$config.scrollX == this.$id) && e.push(t[n]);
                return e
            }, n.prototype._initHorizontal = function () {
                this.$scroll_hor = this.$view, this.$domEvents.attach(this.$view, "scroll", this._scrollHorizontalHandler)
            }, n.prototype._initLinkedViews = function () {
                for (var t = this._getLinkedViews(), e = this._isVertical() ? "gantt_layout_outer_scroll gantt_layout_outer_scroll_vertical" : "gantt_layout_outer_scroll gantt_layout_outer_scroll_horizontal", n = 0; n < t.length; n++) r.addClassName(t[n].$view || t[n].getNode(), e)
            }, n.prototype._initVertical = function () {
                this.$scroll_ver = this.$view, this.$domEvents.attach(this.$view, "scroll", this._scrollVerticalHandler)
            }, n.prototype._updateLinkedViews = function () {
            }, n.prototype._initMouseWheel = function () {
                o.isFF ? this.$domEvents.attach(this._getRootParent().$view, "wheel", this._mouseWheelHandler) : this.$domEvents.attach(this._getRootParent().$view, "mousewheel", this._mouseWheelHandler)
            }, n.prototype.scrollHorizontally = function (t) {
                if (!this._scrolling) {
                    this._scrolling = !0, this.$scroll_hor.scrollLeft = t, this.$config.codeScrollLeft = t, t = this.$scroll_hor.scrollLeft;
                    for (var e = this._getLinkedViews(), n = 0; n < e.length; n++) e[n].scrollTo && e[n].scrollTo(t, void 0);
                    var i = this.$config.scrollPosition;
                    this.$config.scrollPosition = t, this.callEvent("onScroll", [i, t, this.$config.scroll]), this._scrolling = !1
                }
            }, n.prototype.scrollVertically = function (t) {
                if (!this._scrolling) {
                    this._scrolling = !0, this.$scroll_ver.scrollTop = t, t = this.$scroll_ver.scrollTop;
                    for (var e = this._getLinkedViews(), n = 0; n < e.length; n++) e[n].scrollTo && e[n].scrollTo(void 0, t);
                    var i = this.$config.scrollPosition;
                    this.$config.scrollPosition = t, this.callEvent("onScroll", [i, t, this.$config.scroll]), this._scrolling = !1
                }
            }, n.prototype._isVertical = function () {
                return "y" == this.$config.scroll
            }, n.prototype._isHorizontal = function () {
                return "x" == this.$config.scroll
            }, n.prototype._scrollHorizontalHandler = function (t) {
                if (!this._isVertical() && !this._scrolling) {
                    if (new Date - (this._wheel_time || 0) < 100) return !0;
                    if (!this.$gantt._touch_scroll_active) {
                        var e = this.$scroll_hor.scrollLeft;
                        this.scrollHorizontally(e), this._oldLeft = this.$scroll_hor.scrollLeft
                    }
                }
            }, n.prototype._outerScrollHorizontalHandler = function (t) {
                this._isVertical()
            }, n.prototype.show = function () {
                this.$parent.show()
            }, n.prototype.hide = function () {
                this.$parent.hide()
            }, n.prototype._getScrollSize = function () {
                for (var t, e = 0, n = 0, i = this._isHorizontal(), r = this._getLinkedViews(), a = i ? "scrollWidth" : "scrollHeight", o = i ? "contentX" : "contentY", s = i ? "x" : "y", l = this._getScrollOffset(), c = 0; c < r.length; c++) if ((t = r[c]) && t.$content && t.$content.getSize && !t.$config.hidden) {
                    var u, d = t.$content.getSize();
                    if (u = d.hasOwnProperty(a) ? d[a] : d[o], l) d[o] > d[s] && d[o] > e && u > d[s] - l + 2 && (e = u + (i ? 0 : 2), n = d[s]); else {
                        var h = Math.max(d[o] - u, 0);
                        (u += h) > Math.max(d[s] - h, 0) && u > e && (e = u, n = d[s])
                    }
                }
                return {outerScroll: n, innerScroll: e}
            }, n.prototype.scroll = function (t) {
                this._isHorizontal() ? this.scrollHorizontally(t) : this.scrollVertically(t)
            }, n.prototype.getScrollState = function () {
                return {
                    visible: this.isVisible(),
                    direction: this.$config.scroll,
                    size: this.$config.outerSize,
                    scrollSize: this.$config.scrollSize || 0,
                    position: this.$config.scrollPosition || 0
                }
            }, n.prototype.setSize = function (e, n) {
                t.prototype.setSize.apply(this, arguments);
                var i = this._getScrollSize(),
                    r = (this._isVertical() ? n : e) - this._getScrollOffset() + (this._isHorizontal() ? 1 : 0);
                i.innerScroll && r > i.outerScroll && (i.innerScroll += r - i.outerScroll), this.$config.scrollSize = i.innerScroll, this.$config.width = e, this.$config.height = n, this._setScrollSize(i.innerScroll)
            }, n.prototype.isVisible = function () {
                return !(!this.$parent || !this.$parent.$view.parentNode)
            }, n.prototype.shouldShow = function () {
                var t = this._getScrollSize();
                return !(!t.innerScroll && this.$parent && this.$parent.$view.parentNode) && !(!t.innerScroll || this.$parent && this.$parent.$view.parentNode)
            }, n.prototype.shouldHide = function () {
                return !(this._getScrollSize().innerScroll || !this.$parent || !this.$parent.$view.parentNode)
            }, n.prototype.toggleVisibility = function () {
                this.shouldHide() ? this.hide() : this.shouldShow() && this.show()
            }, n.prototype._getScaleOffset = function (t) {
                var e = 0;
                return !t || "timeline" != t.$config.view && "grid" != t.$config.view || (e = t.$content.$getConfig().scale_height), e
            }, n.prototype._getScrollOffset = function () {
                var t = 0;
                if (this._isVertical()) {
                    var e = this.$parent.$parent;
                    t = Math.max(this._getScaleOffset(e.getPrevSibling(this.$parent.$id)), this._getScaleOffset(e.getNextSibling(this.$parent.$id)))
                } else for (var n = this._getLinkedViews(), i = 0; i < n.length; i++) {
                    var r = n[i].$parent.$cells, a = r[r.length - 1];
                    if (a && "scrollbar" == a.$config.view && !1 === a.$config.hidden) {
                        t = a.$config.width;
                        break
                    }
                }
                return t || 0
            }, n.prototype._setScrollSize = function (t) {
                var e = this._isHorizontal() ? "width" : "height",
                    n = this._isHorizontal() ? this.$scroll_hor : this.$scroll_ver, i = this._getScrollOffset(),
                    a = n.firstChild;
                i ? this._isVertical() ? (this.$config.outerSize = this.$config.height - i + 3, n.style.height = this.$config.outerSize + "px", n.style.top = i - 1 + "px", r.addClassName(n, this.$parent._borders.top), r.addClassName(n.parentNode, "gantt_task_vscroll")) : (this.$config.outerSize = this.$config.width - i + 1, n.style.width = this.$config.outerSize + "px") : (n.style.top = "auto", r.removeClassName(n, this.$parent._borders.top), r.removeClassName(n.parentNode, "gantt_task_vscroll"), this.$config.outerSize = this.$config.height), a.style[e] = t + "px"
            }, n.prototype._scrollVerticalHandler = function (t) {
                if (!this._scrollHorizontalHandler() && !this._scrolling && !this.$gantt._touch_scroll_active) {
                    var e = this.$scroll_ver.scrollTop;
                    e != this._oldTop && (this.scrollVertically(e), this._oldTop = this.$scroll_ver.scrollTop)
                }
            }, n.prototype._outerScrollVerticalHandler = function (t) {
                this._scrollHorizontalHandler()
            }, n.prototype._checkWheelTarget = function (t) {
                for (var e = this._getLinkedViews().concat(this), n = 0; n < e.length; n++) {
                    var i = e[n].$view;
                    if (r.isChildOf(t, i)) return !0
                }
                return !1
            }, n.prototype._mouseWheelHandler = function (t) {
                var n = t.target || t.srcElement;
                if (this._checkWheelTarget(n)) {
                    this._wheel_time = new Date;
                    var i = {}, r = o.isFF, a = r ? -20 * t.deltaX : 2 * t.wheelDeltaX,
                        s = r ? -40 * t.deltaY : t.wheelDelta, l = this.$gantt.config.horizontal_scroll_key;
                    if (!1 !== l && e.indexOf(l) >= 0 && (!t[l] || t.deltaX || t.wheelDeltaX || (a = 2 * s, s = 0)), a && Math.abs(a) > Math.abs(s)) {
                        if (this._isVertical()) return;
                        if (i.x) return !0;
                        if (!this.$scroll_hor || !this.$scroll_hor.offsetWidth) return !0;
                        var c = a / -40, u = this._oldLeft, d = u + 30 * c;
                        if (this.scrollHorizontally(d), this.$scroll_hor.scrollLeft = d, u == this.$scroll_hor.scrollLeft) return !0;
                        this._oldLeft = this.$scroll_hor.scrollLeft
                    } else {
                        if (this._isHorizontal()) return;
                        if (i.y) return !0;
                        if (!this.$scroll_ver || !this.$scroll_ver.offsetHeight) return !0;
                        c = s / -40;
                        void 0 === s && (c = t.detail);
                        var h = this._oldTop, f = this.$scroll_ver.scrollTop + 30 * c;
                        if (this.scrollVertically(f), this.$scroll_ver.scrollTop = f, h == this.$scroll_ver.scrollTop) return !0;
                        this._oldTop = this.$scroll_ver.scrollTop
                    }
                    return t.preventDefault && t.preventDefault(), t.cancelBubble = !0, !1
                }
            }, n
        }(n(10));
        t.exports = s
    }, function (t, e) {
        t.exports = null
    }, function (t, e, n) {
        var i = n(2), r = n(0), a = function (t) {
            "use strict";

            function e(e, n, i) {
                var a = t.apply(this, arguments) || this;
                if (n.view) {
                    n.id && (this.$id = r.uid());
                    var o = r.copy(n);
                    if (delete o.config, delete o.templates, this.$content = this.$factory.createView(n.view, this, o, this), !this.$content) return !1
                }
                return a.$name = "viewCell", a
            }

            return i(e, t), e.prototype.destructor = function () {
                this.clear(), t.prototype.destructor.call(this)
            }, e.prototype.clear = function () {
                if (this.$initialized = !1, this.$content) {
                    var e = this.$content.unload || this.$content.destructor;
                    e && e.call(this.$content)
                }
                t.prototype.clear.call(this)
            }, e.prototype.scrollTo = function (e, n) {
                this.$content && this.$content.scrollTo ? this.$content.scrollTo(e, n) : t.prototype.scrollTo.call(this, e, n)
            }, e.prototype._setContentSize = function (t, e) {
                var n = this._getBorderSizes();
                if ("number" == typeof t) {
                    var i = t + n.horizontal;
                    this.$config.width = i
                }
                if ("number" == typeof e) {
                    var r = e + n.vertical;
                    this.$config.height = r
                }
            }, e.prototype.setSize = function (e, n) {
                if (t.prototype.setSize.call(this, e, n), !this.$preResize && this.$content && !this.$initialized) {
                    this.$initialized = !0;
                    var i = this.$view.childNodes[0], r = this.$view.childNodes[1];
                    r || (r = i), this.$content.init(r)
                }
            }, e.prototype.setContentSize = function () {
                !this.$preResize && this.$content && this.$initialized && this.$content.setSize(this.$lastSize.contentX, this.$lastSize.contentY)
            }, e.prototype.getContentSize = function () {
                var e = t.prototype.getContentSize.call(this);
                if (this.$content && this.$initialized) {
                    var n = this.$content.getSize();
                    e.width = void 0 === n.contentX ? n.width : n.contentX, e.height = void 0 === n.contentY ? n.height : n.contentY
                }
                var i = this._getBorderSizes();
                return e.width += i.horizontal, e.height += i.vertical, e
            }, e
        }(n(10));
        t.exports = a
    }, function (t, e, n) {
        var i = n(2), r = n(29), a = n(10), o = function (t) {
            "use strict";

            function e(e, n, i) {
                for (var r = t.apply(this, arguments) || this, a = 0; a < r.$cells.length; a++) r.$cells[a].$config.hidden = 0 !== a;
                return r.$cell = r.$cells[0], r.$name = "viewLayout", r
            }

            return i(e, t), e.prototype.cell = function (e) {
                var n = t.prototype.cell.call(this, e);
                return n.$view || this.$fill(null, this), n
            }, e.prototype.moveView = function (t) {
                var e = this.$view;
                this.$cell && (this.$cell.$config.hidden = !0, e.removeChild(this.$cell.$view)), this.$cell = t, e.appendChild(t.$view)
            }, e.prototype.setSize = function (t, e) {
                a.prototype.setSize.call(this, t, e)
            }, e.prototype.setContentSize = function () {
                var t = this.$lastSize;
                this.$cell.setSize(t.contentX, t.contentY)
            }, e.prototype.getSize = function () {
                var e = t.prototype.getSize.call(this);
                if (this.$cell) {
                    var n = this.$cell.getSize();
                    if (this.$config.byMaxSize) for (var i = 0; i < this.$cells.length; i++) {
                        var r = this.$cells[i].getSize();
                        for (var a in n) n[a] = Math.max(n[a], r[a])
                    }
                    for (var o in e) e[o] = e[o] || n[o];
                    e.gravity = Math.max(e.gravity, n.gravity)
                }
                return e
            }, e
        }(r);
        t.exports = o
    }, function (t, e) {
        t.exports = function (t, e) {
            return !!e && (!(e.left > t.x_end || e.left + e.width < t.x) && !(e.top > t.y_end || e.top + e.height < t.y))
        }
    }, function (t, e, n) {
        var i = n(104), r = n(12), a = n(30);
        t.exports = function (t) {
            var e = {}, n = {};

            function o(e) {
                var n = null;
                return "string" == typeof e.view ? n = t.$ui.getView(e.view) : e.view && (n = e.view), n
            }

            function s(s, l, c) {
                if (n[s]) return n[s];
                l.renderer || t.assert(!1, "Invalid renderer call");
                var u = null, d = null, h = null, f = null;
                "function" == typeof l.renderer ? (u = l.renderer, h = a) : (u = l.renderer.render, d = l.renderer.update, l.renderer.isInViewPort ? f = l.renderer.isInViewPort : h = l.renderer.getRectangle, h || null === h || (h = a));
                var _ = l.filter;
                return c && c.setAttribute(t.config.layer_attribute, !0), n[s] = {
                    render_item: function (e, n, a) {
                        if (n = n || c, !_ || _(e)) {
                            var s = o(l), d = a;
                            !d && s && s.$getConfig().smart_rendering && (d = s.getViewPort());
                            var g = null;
                            !r(t) && (h || f) && d ? (f ? f(e, d, s, t) : i(d, h(e, s, t))) && (g = u.call(t, e, s, d)) : g = u.call(t, e, s, d), this.append(e, g, n)
                        } else this.remove_item(e.id)
                    }, clear: function (t) {
                        this.rendered = e[s] = {}, l.append || this.clear_container(t)
                    }, clear_container: function (t) {
                        (t = t || c) && (t.innerHTML = "")
                    }, get_visible_range: function (e) {
                        var n, i = o(l);
                        return i && i.$getConfig().smart_rendering && (n = i.getViewPort()), i && n && l.renderer && l.renderer.getVisibleRange ? l.renderer.getVisibleRange(t, i, e, n) : {
                            start: 0,
                            end: e.count()
                        }
                    }, render_items: function (t, e) {
                        e = e || c;
                        var n = document.createDocumentFragment();
                        this.clear(e);
                        var i = null, r = o(l);
                        r && r.$getConfig().smart_rendering && (i = r.getViewPort());
                        for (var a = 0, s = t.length; a < s; a++) this.render_item(t[a], n, i);
                        e.appendChild(n, e)
                    }, update_items: function (e, n) {
                        var a = o(l);
                        if (a && a.$getConfig().smart_rendering && !r(t) && this.rendered && (h || f)) {
                            n = n || c;
                            var s = document.createDocumentFragment(), u = null;
                            a && (u = a.getViewPort());
                            var _ = {};
                            for (var g in this.rendered) _[g] = !0;
                            g = 0;
                            for (var p = e.length; g < p; g++) {
                                var v = e[g], m = this.rendered[v.id];
                                _[v.id] = !1, m && m.parentNode ? (f ? f(v, u, a, t) : i(u, h(v, a, t))) ? (d && d.call(t, v, m, a, u), this.restore(v, s)) : _[v.id] = !0 : this.render_item(e[g], s, u)
                            }
                            for (var g in _) _[g] && this.hide(g);
                            s.childNodes.length && n.appendChild(s, n)
                        }
                    }, append: function (t, e, n) {
                        this.rendered && (e ? (this.rendered[t.id] && this.rendered[t.id].parentNode ? this.replace_item(t.id, e) : n.appendChild(e), this.rendered[t.id] = e) : this.rendered[t.id] && this.remove_item(t.id))
                    }, replace_item: function (t, e) {
                        var n = this.rendered[t];
                        n && n.parentNode && n.parentNode.replaceChild(e, n), this.rendered[t] = e
                    }, remove_item: function (t) {
                        this.hide(t), delete this.rendered[t]
                    }, hide: function (t) {
                        var e = this.rendered[t];
                        e && e.parentNode && e.parentNode.removeChild(e)
                    }, restore: function (t, e) {
                        var n = this.rendered[t.id];
                        n ? n.parentNode || this.append(t, n, e || c) : this.render_item(t, e || c)
                    }, change_id: function (t, e) {
                        this.rendered[e] = this.rendered[t], delete this.rendered[t]
                    }, rendered: e[s], node: c, destructor: function () {
                        this.clear(), delete n[s], delete e[s]
                    }
                }, n[s]
            }

            return {
                getRenderer: s, clearRenderers: function () {
                    for (var t in n) s(t).destructor()
                }
            }
        }
    }, function (t, e, n) {
        var i = n(105), r = n(0), a = n(1), o = n(12);

        function s(t) {
            return t instanceof Array || (t = Array.prototype.slice.call(arguments, 0)), function (e) {
                for (var n = !0, i = 0, r = t.length; i < r; i++) {
                    var a = t[i];
                    a && (n = n && !1 !== a(e.id, e))
                }
                return n
            }
        }

        t.exports = function (t) {
            var e = i(t);
            return {
                createGroup: function (n, i, l, c) {
                    var u = {
                        tempCollection: [], renderers: {}, container: n, filters: [], getLayers: function () {
                            this._add();
                            var t = [];
                            for (var e in this.renderers) t.push(this.renderers[e]);
                            return t
                        }, getLayer: function (t) {
                            return this.renderers[t]
                        }, _add: function (n) {
                            n && (n.id = n.id || r.uid(), this.tempCollection.push(n));
                            for (var o = this.container(), s = this.tempCollection, l = 0; l < s.length; l++) if (n = s[l], this.container() || n && n.container && a.isChildOf(n.container, document.body)) {
                                var u = n.container, d = n.id, h = n.topmost;
                                if (!u.parentNode) if (h) o.appendChild(u); else {
                                    var f = i ? i() : o.firstChild;
                                    f ? o.insertBefore(u, f) : o.appendChild(u)
                                }
                                this.renderers[d] = e.getRenderer(d, n, u), c && c(n, t), this.tempCollection.splice(l, 1), l--
                            }
                        }, addLayer: function (e) {
                            if (e) {
                                "function" == typeof e && (e = {renderer: e}), void 0 === e.filter ? e.filter = s(l || []) : e.filter instanceof Array && (e.filter.push(l), e.filter = s(e.filter)), e.container || (e.container = document.createElement("div"));
                                var n = this;
                                e.requestUpdate = function () {
                                    t.config.smart_rendering && !o(t) && n.renderers[e.id] && n.onUpdateRequest(n.renderers[e.id])
                                }
                            }
                            return this._add(e), e ? e.id : void 0
                        }, onUpdateRequest: function (t) {
                        }, eachLayer: function (t) {
                            for (var e in this.renderers) t(this.renderers[e])
                        }, removeLayer: function (t) {
                            this.renderers[t] && (this.renderers[t].destructor(), delete this.renderers[t])
                        }, clear: function () {
                            for (var t in this.renderers) this.renderers[t].destructor();
                            this.renderers = {}
                        }
                    };
                    return t.attachEvent("onDestroy", function () {
                        u.clear(), u = null
                    }), u
                }
            }
        }
    }, function (t, e, n) {
        var i = n(106);

        function r(t, e) {
            if (t.view) {
                var n = t.view;
                "string" == typeof n && (n = e.$ui.getView(n)), n && n.attachEvent && n.attachEvent("onScroll", function () {
                    t.requestUpdate && t.requestUpdate()
                })
            }
        }

        t.exports = function (t) {
            var e = i(t);
            return {
                getDataRender: function (e) {
                    return t.$services.getService("layer:" + e) || null
                }, createDataRender: function (n) {
                    var i = n.name, a = n.defaultContainer, o = n.defaultContainerSibling,
                        s = e.createGroup(a, o, function (t, e) {
                            if (!s.filters) return !0;
                            for (var n = 0; n < s.filters.length; n++) if (!1 === s.filters[n](t, e)) return !1
                        }, r);
                    return t.$services.setService("layer:" + i, function () {
                        return s
                    }), t.attachEvent("onGanttReady", function () {
                        s.addLayer()
                    }), s
                }, init: function () {
                    var e = this.createDataRender({
                        name: "task", defaultContainer: function () {
                            return t.$task_data ? t.$task_data : t.$ui.getView("timeline") ? t.$ui.getView("timeline").$task_data : void 0
                        }, defaultContainerSibling: function () {
                            return t.$task_links ? t.$task_links : t.$ui.getView("timeline") ? t.$ui.getView("timeline").$task_links : void 0
                        }, filter: function (t) {
                        }
                    }, t), n = this.createDataRender({
                        name: "link", defaultContainer: function () {
                            return t.$task_data ? t.$task_data : t.$ui.getView("timeline") ? t.$ui.getView("timeline").$task_data : void 0
                        }
                    }, t);
                    return {
                        addTaskLayer: function (t) {
                            return "function" == typeof t && (t = {renderer: t}), t.view = "timeline", e.addLayer(t)
                        }, _getTaskLayers: function () {
                            return e.getLayers()
                        }, removeTaskLayer: function (t) {
                            e.removeLayer(t)
                        }, _clearTaskLayers: function () {
                            e.clear()
                        }, addLinkLayer: function (t) {
                            return "function" == typeof t && (t = {renderer: t}), t.view = "timeline", n.addLayer(t)
                        }, _getLinkLayers: function () {
                            return n.getLayers()
                        }, removeLinkLayer: function (t) {
                            n.removeLayer(t)
                        }, _clearLinkLayers: function () {
                            n.clear()
                        }
                    }
                }
            }
        }
    }, function (t, e, n) {
        var i = function (t) {
            return function (e) {
                var n = {click: {}, doubleclick: {}, contextMenu: {}};

                function i(t, e, i, r) {
                    n[t][e] || (n[t][e] = []), n[t][e].push({handler: i, root: r})
                }

                function r(t) {
                    t = t || window.event;
                    var i = e.locate(t), r = o(t, n.click), a = !0;
                    if (null !== i ? a = !e.checkEvent("onTaskClick") || e.callEvent("onTaskClick", [i, t]) : e.callEvent("onEmptyClick", [t]), a) {
                        if (!s(r, t, i)) return;
                        i && e.getTask(i) && e.config.select_task && !e.config.multiselect && e.selectTask(i)
                    }
                }

                function a(t) {
                    var n = (t = t || window.event).target || t.srcElement, i = e.locate(n),
                        r = e.locate(n, e.config.link_attribute),
                        a = !e.checkEvent("onContextMenu") || e.callEvent("onContextMenu", [i, r, t]);
                    return a || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), a
                }

                function o(e, n) {
                    for (var i = e.target || e.srcElement, r = []; i;) {
                        var a = t.getClassName(i);
                        if (a) {
                            a = a.split(" ");
                            for (var o = 0; o < a.length; o++) if (a[o] && n[a[o]]) for (var s = n[a[o]], l = 0; l < s.length; l++) s[l].root && !t.isChildOf(i, s[l].root) || r.push(s[l].handler)
                        }
                        i = i.parentNode
                    }
                    return r
                }

                function s(t, n, i) {
                    for (var r = !0, a = 0; a < t.length; a++) {
                        var o = t[a].call(e, n, i, n.target || n.srcElement);
                        r = r && !(void 0 !== o && !0 !== o)
                    }
                    return r
                }

                function l(t) {
                    t = t || window.event;
                    var i = e.locate(t), r = o(t, n.doubleclick),
                        a = !e.checkEvent("onTaskDblClick") || null === i || e.callEvent("onTaskDblClick", [i, t]);
                    if (a) {
                        if (!s(r, t, i)) return;
                        null !== i && e.getTask(i) && a && e.config.details_on_dblclick && !e.isReadonly() && e.showLightbox(i)
                    }
                }

                function c(t) {
                    if (e.checkEvent("onMouseMove")) {
                        var n = e.locate(t);
                        e._last_move_event = t, e.callEvent("onMouseMove", [n, t])
                    }
                }

                var u = e._createDomEventScope();

                function d(t) {
                    u.detachAll(), t && (u.attach(t, "click", r), u.attach(t, "dblclick", l), u.attach(t, "mousemove", c), u.attach(t, "contextmenu", a))
                }

                return {
                    reset: d, global: function (t, e, n) {
                        i(t, e, n, null)
                    }, delegate: i, detach: function (t, e, i, r) {
                        if (n[t] && n[t][e]) {
                            for (var a = n[t], o = a[e], s = 0; s < o.length; s++) o[s].root == r && (o.splice(s, 1), s--);
                            o.length || delete a[e]
                        }
                    }, callHandler: function (t, e, i, r) {
                        var a = n[t][e];
                        if (a) for (var o = 0; o < a.length; o++) (i || a[o].root) && a[o].root !== i || a[o].handler.apply(this, r)
                    }, onDoubleClick: l, onMouseMove: c, onContextMenu: a, onClick: r, destructor: function () {
                        d(), n = null, u = null
                    }
                }
            }
        }(n(1));
        t.exports = {init: i}
    }, function (t, e, n) {
        var i = n(0);

        function r(t) {
            i.mixin(this, t, !0)
        }

        function a(t, e) {
            var n = this.$config[t];
            return n ? n instanceof r ? n : (r.prototype = e, this.$config[t] = new r(n), this.$config[t]) : e
        }

        t.exports = function (t, e) {
            i.mixin(t, function (t) {
                var e, n;
                return {
                    $getConfig: function () {
                        return e || (e = t ? t.$getConfig() : this.$gantt.config), this.$config.config ? a.call(this, "config", e) : e
                    }, $getTemplates: function () {
                        return n || (n = t ? t.$getTemplates() : this.$gantt.templates), this.$config.templates ? a.call(this, "templates", n) : n
                    }
                }
            }(e))
        }
    }, function (t, e, n) {
        var i = n(0), r = n(109);
        t.exports = {
            createFactory: function (t) {
                var e = {};
                var n = {};

                function a(a, o, s, l) {
                    var c = e[a];
                    if (!c || !c.create) return !1;
                    "resizer" != a || s.mode || (l.$config.cols ? s.mode = "x" : s.mode = "y"), "viewcell" != a || "scrollbar" != s.view || s.scroll || (l.$config.cols ? s.scroll = "y" : s.scroll = "x"), (s = i.copy(s)).id || n[s.view] || (s.id = s.view), s.id && !s.css && (s.css = s.id + "_cell");
                    var u = new c.create(o, s, this, t);
                    return c.configure && c.configure(u), r(u, l), u.$id || (u.$id = s.id || t.uid()), u.$parent || "object" != typeof o || (u.$parent = o), u.$config || (u.$config = s), n[u.$id] && (u.$id = t.uid()), n[u.$id] = u, u
                }

                return {
                    initUI: function (t, e) {
                        var n = "cell";
                        return t.view ? n = "viewcell" : t.resizer ? n = "resizer" : t.rows || t.cols ? n = "layout" : t.views && (n = "multiview"), a.call(this, n, null, t, e)
                    }, reset: function () {
                        n = {}
                    }, registerView: function (t, n, i) {
                        e[t] = {create: n, configure: i}
                    }, createView: a, getView: function (t) {
                        return n[t]
                    }
                }
            }
        }
    }, function (t, e, n) {
        var i = n(110), r = n(108), a = n(107), o = n(10), s = n(29), l = n(103), c = n(102), u = n(101), d = n(100),
            h = n(19), f = n(21), _ = n(21), g = n(19), p = n(19), v = n(98), m = n(87), y = n(86), k = n(85),
            b = n(84), w = n(82), x = n(81), $ = n(80), T = n(79), S = n(73), C = n(70);
        t.exports = {
            init: function (t) {
                function e(e, n) {
                    var i = n(t);
                    i.onCreated && i.onCreated(e), e.attachEvent("onReady", function () {
                        i.onInitialized && i.onInitialized(e)
                    }), e.attachEvent("onDestroy", function () {
                        i.onDestroyed && i.onDestroyed(e)
                    })
                }

                var n = i.createFactory(t);
                n.registerView("cell", o), n.registerView("resizer", u), n.registerView("scrollbar", d), n.registerView("layout", s, function (t) {
                    "main" === (t.$config ? t.$config.id : null) && e(t, C)
                }), n.registerView("viewcell", c), n.registerView("multiview", l), n.registerView("timeline", h, function (t) {
                    "timeline" !== (t.$config ? t.$config.id : null) && "task" != t.$config.bind || e(t, S)
                }), n.registerView("grid", f, function (t) {
                    "grid" !== (t.$config ? t.$config.id : null) && "task" != t.$config.bind || e(t, T)
                }), n.registerView("resourceGrid", _), n.registerView("resourceTimeline", g), n.registerView("resourceHistogram", p);
                var E = a(t), D = v(t);
                return t.ext.inlineEditors = D, t.ext._inlineEditors = D, D.init(t), {
                    factory: n,
                    mouseEvents: r.init(t),
                    layersApi: E.init(),
                    render: {
                        gridLine: function () {
                            return w(t)
                        }, taskBg: function () {
                            return k(t)
                        }, taskBar: function () {
                            return m(t)
                        }, taskSplitBar: function () {
                            return y(t)
                        }, link: function () {
                            return b(t)
                        }, resourceRow: function () {
                            return x(t)
                        }, resourceHistogram: function () {
                            return $(t)
                        }
                    },
                    layersService: {
                        getDataRender: function (e) {
                            return E.getDataRender(e, t)
                        }, createDataRender: function (e) {
                            return E.createDataRender(e, t)
                        }
                    }
                }
            }
        }
    }, function (t, e, n) {
        var i = n(0), r = n(1);
        t.exports = function (t) {
            var e = "data-dhxbox", n = null;

            function a(t, e) {
                var i = t.callback;
                g.hide(t.box), n = t.box = null, i && i(e)
            }

            function o(t) {
                if (n) {
                    var e = t.which || t.keyCode, i = !1;
                    if (p.keyboard) {
                        if (13 == e || 32 == e) {
                            var o = t.target || t.srcElement;
                            r.getClassName(o).indexOf("gantt_popup_button") > -1 && o.click ? o.click() : (a(n, !0), i = !0)
                        }
                        27 == e && (a(n, !1), i = !0)
                    }
                    return i ? (t.preventDefault && t.preventDefault(), !(t.cancelBubble = !0)) : void 0
                }
            }

            function s(t) {
                s.cover || (s.cover = document.createElement("div"), s.cover.onkeydown = o, s.cover.className = "dhx_modal_cover", document.body.appendChild(s.cover)), s.cover.style.display = t ? "inline-block" : "none"
            }

            function l(e, n, i) {
                var r = t._waiAria.messageButtonAttrString(e), a = n.toLowerCase().replace(/ /g, "_");
                return "<div " + r + " class='gantt_popup_button dhtmlx_popup_button " + ("gantt_" + a + "_button dhtmlx_" + a + "_button") + "' data-result='" + i + "' result='" + i + "' ><div>" + e + "</div></div>"
            }

            function c() {
                for (var t = [].slice.apply(arguments, [0]), e = 0; e < t.length; e++) if (t[e]) return t[e]
            }

            function u(u, d, h) {
                var f = u.tagName ? u : function (o, s, u) {
                    var d = document.createElement("div"), h = i.uid();
                    t._waiAria.messageModalAttr(d, h), d.className = " gantt_modal_box dhtmlx_modal_box gantt-" + o.type + " dhtmlx-" + o.type, d.setAttribute(e, 1);
                    var f = "";
                    if (o.width && (d.style.width = o.width), o.height && (d.style.height = o.height), o.title && (f += '<div class="gantt_popup_title dhtmlx_popup_title">' + o.title + "</div>"), f += '<div class="gantt_popup_text dhtmlx_popup_text" id="' + h + '"><span>' + (o.content ? "" : o.text) + '</span></div><div  class="gantt_popup_controls dhtmlx_popup_controls">', s && (f += l(c(o.ok, t.locale.labels.message_ok, "OK"), "ok", !0)), u && (f += l(c(o.cancel, t.locale.labels.message_cancel, "Cancel"), "cancel", !1)), o.buttons) for (var _ = 0; _ < o.buttons.length; _++) {
                        var g = o.buttons[_];
                        f += "object" == typeof g ? l(g.label, g.css || "gantt_" + g.label.toLowerCase() + "_button dhtmlx_" + g.label.toLowerCase() + "_button", g.value || _) : l(g, g, _)
                    }
                    if (f += "</div>", d.innerHTML = f, o.content) {
                        var p = o.content;
                        "string" == typeof p && (p = document.getElementById(p)), "none" == p.style.display && (p.style.display = ""), d.childNodes[o.title ? 1 : 0].appendChild(p)
                    }
                    return d.onclick = function (t) {
                        var e = t.target || t.srcElement;
                        if (e.className || (e = e.parentNode), r.closest(e, ".gantt_popup_button")) {
                            var n = e.getAttribute("data-result");
                            a(o, n = "true" == n || "false" != n && n)
                        }
                    }, o.box = d, (s || u) && (n = o), d
                }(u, d, h);
                u.hidden || s(!0), document.body.appendChild(f);
                var _ = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - f.offsetWidth) / 2)),
                    p = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - f.offsetHeight) / 2));
                return "top" == u.position ? f.style.top = "-3px" : f.style.top = p + "px", f.style.left = _ + "px", f.onkeydown = o, g.focus(f), u.hidden && g.hide(f), t.callEvent("onMessagePopup", [f]), f
            }

            function d(t) {
                return u(t, !0, !1)
            }

            function h(t) {
                return u(t, !0, !0)
            }

            function f(t) {
                return u(t)
            }

            function _(t, e, n) {
                return "object" != typeof t && ("function" == typeof e && (n = e, e = ""), t = {
                    text: t,
                    type: e,
                    callback: n
                }), t
            }

            t.event(document, "keydown", o, !0);
            var g = function () {
                var t = _.apply(this, arguments);
                return t.type = t.type || "alert", f(t)
            };
            g.hide = function (n) {
                for (; n && n.getAttribute && !n.getAttribute(e);) n = n.parentNode;
                n && (n.parentNode.removeChild(n), s(!1), t.callEvent("onAfterMessagePopup", [n]))
            }, g.focus = function (t) {
                setTimeout(function () {
                    var e = r.getFocusableNodes(t);
                    e.length && e[0].focus && e[0].focus()
                }, 1)
            };
            var p = function (e, n, r, a) {
                switch ((e = function (t, e, n, r) {
                    return "object" != typeof t && (t = {
                        text: t,
                        type: e,
                        expire: n,
                        id: r
                    }), t.id = t.id || i.uid(), t.expire = t.expire || p.expire, t
                }.apply(this, arguments)).type = e.type || "info", e.type.split("-")[0]) {
                    case"alert":
                        return d(e);
                    case"confirm":
                        return h(e);
                    case"modalbox":
                        return f(e);
                    default:
                        return function (e) {
                            p.area || (p.area = document.createElement("div"), p.area.className = "gantt_message_area dhtmlx_message_area", p.area.style[p.position] = "5px", document.body.appendChild(p.area)), p.hide(e.id);
                            var n = document.createElement("div");
                            return n.innerHTML = "<div>" + e.text + "</div>", n.className = "gantt-info dhtmlx-info gantt-" + e.type + " dhtmlx-" + e.type, n.onclick = function () {
                                p.hide(e.id), e = null
                            }, t._waiAria.messageInfoAttr(n), "bottom" == p.position && p.area.firstChild ? p.area.insertBefore(n, p.area.firstChild) : p.area.appendChild(n), e.expire > 0 && (p.timers[e.id] = window.setTimeout(function () {
                                p.hide(e.id)
                            }, e.expire)), p.pull[e.id] = n, n = null, e.id
                        }(e)
                }
            };
            p.seed = (new Date).valueOf(), p.uid = i.uid, p.expire = 4e3, p.keyboard = !0, p.position = "top", p.pull = {}, p.timers = {}, p.hideAll = function () {
                for (var t in p.pull) p.hide(t)
            }, p.hide = function (t) {
                var e = p.pull[t];
                e && e.parentNode && (window.setTimeout(function () {
                    e.parentNode.removeChild(e), e = null
                }, 2e3), e.className += " hidden", p.timers[t] && window.clearTimeout(p.timers[t]), delete p.pull[t])
            };
            var v = [];
            return t.attachEvent("onMessagePopup", function (t) {
                v.push(t)
            }), t.attachEvent("onAfterMessagePopup", function (t) {
                for (var e = 0; e < v.length; e++) v[e] === t && (v.splice(e, 1), e--)
            }), t.attachEvent("onDestroy", function () {
                s.cover && s.cover.parentNode && s.cover.parentNode.removeChild(s.cover);
                for (var t = 0; t < v.length; t++) v[t].parentNode && v[t].parentNode.removeChild(v[t]);
                v = null, p.area && p.area.parentNode && p.area.parentNode.removeChild(p.area), p = null
            }), {
                alert: function () {
                    var t = _.apply(this, arguments);
                    return t.type = t.type || "confirm", d(t)
                }, confirm: function () {
                    var t = _.apply(this, arguments);
                    return t.type = t.type || "alert", h(t)
                }, message: p, modalbox: g
            }
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(0), i = n(9), r = n(8);
            if (!i.isNode) {
                var a = n(1), o = n(3);
                t.utils = {
                    arrayFind: o.arrayFind,
                    dom: {
                        getNodePosition: a.getNodePosition,
                        getRelativeEventPosition: a.getRelativeEventPosition,
                        isChildOf: a.isChildOf,
                        hasClass: a.hasClass,
                        closest: a.closest
                    }
                };
                var s = n(41)();
                t.event = s.attach, t.eventRemove = s.detach, t._eventRemoveAll = s.detachAll, t._createDomEventScope = s.extend, e.mixin(t, n(112)(t));
                var l = n(111).init(t);
                t.$ui = l.factory, t.$ui.layers = l.render, t.$mouseEvents = l.mouseEvents, t.$services.setService("mouseEvents", function () {
                    return t.$mouseEvents
                }), t.mixin(t, l.layersApi), n(69)(t), t.$services.setService("layers", function () {
                    return l.layersService
                });
                var c = n(68);
                t.mixin(t, c()), n(67)(t), n(66)(t), n(65)(t), n(64)(t), n(63)(t), n(62)(t), n(61)(t), n(60)(t), n(59)(t), n(54)(t), n(53)(t), n(43)(t), n(42)(t), t.locate = function (t) {
                    var e = a.getTargetNode(t);
                    if ((a.getClassName(e) || "").indexOf("gantt_task_cell") >= 0) return null;
                    var n = arguments[1] || this.config.task_attribute, i = a.locateAttribute(e, n);
                    return i ? i.getAttribute(n) : null
                }, t._locate_css = function (t, e, n) {
                    return a.locateClassName(t, e, n)
                }, t._locateHTML = function (t, e) {
                    return a.locateAttribute(t, e || this.config.task_attribute)
                }
            }
            t.attachEvent("onParse", function () {
                r(t) || t.attachEvent("onGanttRender", function () {
                    if (t.config.initial_scroll) {
                        var e = t.getTaskByIndex(0), n = e ? e.id : t.config.root_id;
                        t.isTaskExists(n) && t.showTask(n)
                    }
                }, {once: !0})
            }), t.attachEvent("onBeforeGanttReady", function () {
                this.config.scroll_size || (this.config.scroll_size = a.getScrollSize() || 1), r(t) || (this._eventRemoveAll(), this.$mouseEvents.reset(), this.resetLightbox())
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                month_short: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
                day_full: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
                day_short: ["Нед", "Пон", "Вів", "Сер", "Чет", "Птн", "Суб"]
            }, labels: {
                new_task: "Нове завдання",
                icon_save: "Зберегти",
                icon_cancel: "Відміна",
                icon_details: "Деталі",
                icon_edit: "Редагувати",
                icon_delete: "Вилучити",
                confirm_closing: "",
                confirm_deleting: "Подія вилучиться назавжди. Ви впевнені?",
                section_description: "Опис",
                section_time: "Часовий проміжок",
                section_type: "Тип",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Відміна",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                month_short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                day_full: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
                day_short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"]
            }, labels: {
                new_task: "Yeni görev",
                icon_save: "Kaydet",
                icon_cancel: "İptal",
                icon_details: "Detaylar",
                icon_edit: "Düzenle",
                icon_delete: "Sil",
                confirm_closing: "",
                confirm_deleting: "Görev silinecek, emin misiniz?",
                section_description: "Açıklama",
                section_time: "Zaman Aralığı",
                section_type: "Tip",
                column_wbs: "WBS",
                column_text: "Görev Adı",
                column_start_date: "Başlangıç",
                column_duration: "Süre",
                column_add: "",
                link: "Bağlantı",
                confirm_link_deleting: "silinecek",
                link_start: " (başlangıç)",
                link_end: " (bitiş)",
                type_task: "Görev",
                type_project: "Proje",
                type_milestone: "Kilometretaşı",
                minutes: "Dakika",
                hours: "Saat",
                days: "Gün",
                weeks: "Hafta",
                months: "Ay",
                years: "Yıl",
                message_ok: "OK",
                message_cancel: "Ýptal",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                day_full: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                day_short: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
            }, labels: {
                new_task: "Ny uppgift",
                icon_save: "Spara",
                icon_cancel: "Avbryt",
                icon_details: "Detajer",
                icon_edit: "Ändra",
                icon_delete: "Ta bort",
                confirm_closing: "",
                confirm_deleting: "Är du säker på att du vill ta bort händelsen permanent?",
                section_description: "Beskrivning",
                section_time: "Tid",
                section_type: "Typ",
                column_wbs: "WBS",
                column_text: "Uppgiftsnamn",
                column_start_date: "Starttid",
                column_duration: "Varaktighet",
                column_add: "",
                link: "Länk",
                confirm_link_deleting: "kommer tas bort",
                link_start: " (start)",
                link_end: " (slut)",
                type_task: "Uppgift",
                type_project: "Projekt",
                type_milestone: "Milstolpe",
                minutes: "Minuter",
                hours: "Timmar",
                days: "Dagar",
                weeks: "Veckor",
                months: "Månader",
                years: "År",
                message_ok: "OK",
                message_cancel: "Avbryt",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sept", "Okt", "Nov", "Dec"],
                day_full: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
                day_short: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"]
            }, labels: {
                new_task: "Nová úloha",
                icon_save: "Uložiť",
                icon_cancel: "Späť",
                icon_details: "Detail",
                icon_edit: "Edituj",
                icon_delete: "Zmazať",
                confirm_closing: "Vaše zmeny nebudú uložené. Skutočne?",
                confirm_deleting: "Udalosť bude natrvalo vymazaná. Skutočne?",
                section_description: "Poznámky",
                section_time: "Doba platnosti",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Späť",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                day_full: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
                day_short: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
            }, labels: {
                new_task: "Nova naloga",
                icon_save: "Shrani",
                icon_cancel: "Prekliči",
                icon_details: "Podrobnosti",
                icon_edit: "Uredi",
                icon_delete: "Izbriši",
                confirm_closing: "",
                confirm_deleting: "Dogodek bo izbrisan. Želite nadaljevati?",
                section_description: "Opis",
                section_time: "Časovni okvir",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Prekliči",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Январь", "Февраль", "Март", "Апрель", "Maй", "Июнь", "Июль", "Август", "Сентябрь", "Oктябрь", "Ноябрь", "Декабрь"],
                month_short: ["Янв", "Фев", "Maр", "Aпр", "Maй", "Июн", "Июл", "Aвг", "Сен", "Окт", "Ноя", "Дек"],
                day_full: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                day_short: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
            }, labels: {
                new_task: "Новое задание",
                icon_save: "Сохранить",
                icon_cancel: "Отменить",
                icon_details: "Детали",
                icon_edit: "Изменить",
                icon_delete: "Удалить",
                confirm_closing: "",
                confirm_deleting: "Событие будет удалено безвозвратно, продолжить?",
                section_description: "Описание",
                section_time: "Период времени",
                section_type: "Тип",
                column_wbs: "ИСР",
                column_text: "Задача",
                column_start_date: "Начало",
                column_duration: "Длительность",
                column_add: "",
                link: "Связь",
                confirm_link_deleting: "будет удалена",
                link_start: " (начало)",
                link_end: " (конец)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Минута",
                hours: "Час",
                days: "День",
                weeks: "Неделя",
                months: "Месяц",
                years: "Год",
                message_ok: "OK",
                message_cancel: "Отменить",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "начните вводить слово для фильтрации",
                resources_filter_label: "спрятать не установленные"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "November", "December"],
                month_short: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                day_full: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"],
                day_short: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sa"]
            }, labels: {
                new_task: "Sarcina noua",
                icon_save: "Salveaza",
                icon_cancel: "Anuleaza",
                icon_details: "Detalii",
                icon_edit: "Editeaza",
                icon_delete: "Sterge",
                confirm_closing: "Schimbarile nu vor fi salvate, esti sigur?",
                confirm_deleting: "Evenimentul va fi sters permanent, esti sigur?",
                section_description: "Descriere",
                section_time: "Interval",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Anuleaza",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                month_short: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
                day_full: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                day_short: ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"]
            }, labels: {
                new_task: "Nowe zadanie",
                icon_save: "Zapisz",
                icon_cancel: "Anuluj",
                icon_details: "Szczegóły",
                icon_edit: "Edytuj",
                icon_delete: "Usuń",
                confirm_closing: "",
                confirm_deleting: "Zdarzenie zostanie usunięte na zawsze, kontynuować?",
                section_description: "Opis",
                section_time: "Okres czasu",
                section_type: "Typ",
                column_wbs: "WBS",
                column_text: "Nazwa zadania",
                column_start_date: "Początek",
                column_duration: "Czas trwania",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "zostanie usunięty",
                link_start: " (początek)",
                link_end: " (koniec)",
                type_task: "Zadanie",
                type_project: "Projekt",
                type_milestone: "Milestone",
                minutes: "Minuty",
                hours: "Godziny",
                days: "Dni",
                weeks: "Tydzień",
                months: "Miesiące",
                years: "Lata",
                message_ok: "OK",
                message_cancel: "Anuluj",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
                day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
            }, labels: {
                new_task: "Ny oppgave",
                icon_save: "Lagre",
                icon_cancel: "Avbryt",
                icon_details: "Detaljer",
                icon_edit: "Endre",
                icon_delete: "Slett",
                confirm_closing: "Endringer blir ikke lagret, er du sikker?",
                confirm_deleting: "Oppføringen vil bli slettet, er du sikker?",
                section_description: "Beskrivelse",
                section_time: "Tidsperiode",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Avbryt",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
                month_short: ["Jan", "Feb", "mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                day_full: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
                day_short: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]
            }, labels: {
                new_task: "Nieuwe taak",
                icon_save: "Opslaan",
                icon_cancel: "Annuleren",
                icon_details: "Details",
                icon_edit: "Bewerken",
                icon_delete: "Verwijderen",
                confirm_closing: "",
                confirm_deleting: "Item zal permanent worden verwijderd, doorgaan?",
                section_description: "Beschrijving",
                section_time: "Tijd periode",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Taak omschrijving",
                column_start_date: "Startdatum",
                column_duration: "Duur",
                column_add: "",
                link: "Koppeling",
                confirm_link_deleting: "zal worden verwijderd",
                link_start: " (start)",
                link_end: " (eind)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "minuten",
                hours: "uren",
                days: "dagen",
                weeks: "weken",
                months: "maanden",
                years: "jaren",
                message_ok: "OK",
                message_cancel: "Annuleren",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
                day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                day_short: ["Søn", "Mon", "Tir", "Ons", "Tor", "Fre", "Lør"]
            }, labels: {
                new_task: "Ny oppgave",
                icon_save: "Lagre",
                icon_cancel: "Avbryt",
                icon_details: "Detaljer",
                icon_edit: "Rediger",
                icon_delete: "Slett",
                confirm_closing: "",
                confirm_deleting: "Hendelsen vil bli slettet permanent. Er du sikker?",
                section_description: "Beskrivelse",
                section_time: "Tidsperiode",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Avbryt",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            return function (t) {
                var e = this;
                for (var n in this.addLocale = function (t, n) {
                    e._locales[t] = n
                }, this.getLocale = function (t) {
                    return e._locales[t]
                }, this._locales = {}, t) this._locales[n] = t[n]
            }
        }();
        e.default = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                month_short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                day_full: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                day_short: ["일", "월", "화", "수", "목", "금", "토"]
            },
            labels: {
                new_task: "이름없는 작업",
                icon_save: "저장",
                icon_cancel: "취소",
                icon_details: "세부 사항",
                icon_edit: "수정",
                icon_delete: "삭제",
                confirm_closing: "",
                confirm_deleting: "작업을 삭제하시겠습니까?",
                section_description: "설명",
                section_time: "기간",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "작업명",
                column_start_date: "시작일",
                column_duration: "기간",
                column_add: "",
                link: "전제",
                confirm_link_deleting: "삭제 하시겠습니까?",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "작업",
                type_project: "프로젝트",
                type_milestone: "마일스톤",
                minutes: "분",
                hours: "시간",
                days: "일",
                weeks: "주",
                months: "달",
                years: "년",
                message_ok: "OK",
                message_cancel: "취소",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                day_full: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
                day_short: ["日", "月", "火", "水", "木", "金", "土"]
            }, labels: {
                new_task: "新しい仕事",
                icon_save: "保存",
                icon_cancel: "キャンセル",
                icon_details: "詳細",
                icon_edit: "編集",
                icon_delete: "削除",
                confirm_closing: "",
                confirm_deleting: "イベント完全に削除されます、宜しいですか？",
                section_description: "デスクリプション",
                section_time: "期間",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "キャンセル",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
                day_full: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
                day_short: ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
            }, labels: {
                new_task: "Tugas baru",
                icon_save: "Simpan",
                icon_cancel: "Batal",
                icon_details: "Detail",
                icon_edit: "Edit",
                icon_delete: "Hapus",
                confirm_closing: "",
                confirm_deleting: "Acara akan dihapus",
                section_description: "Keterangan",
                section_time: "Periode",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Batal",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                month_short: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
                day_full: ["Vasárnap", "Hétfõ", "Kedd", "Szerda", "Csütörtök", "Péntek", "szombat"],
                day_short: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"]
            }, labels: {
                new_task: "Új feladat",
                icon_save: "Mentés",
                icon_cancel: "Mégse",
                icon_details: "Részletek",
                icon_edit: "Szerkesztés",
                icon_delete: "Törlés",
                confirm_closing: "",
                confirm_deleting: "Az esemény törölve lesz, biztosan folytatja?",
                section_description: "Leírás",
                section_time: "Idõszak",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Mégse",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                month_short: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
                day_full: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
                day_short: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]
            }, labels: {
                new_task: "Novi Zadatak",
                icon_save: "Spremi",
                icon_cancel: "Odustani",
                icon_details: "Detalji",
                icon_edit: "Izmjeni",
                icon_delete: "Obriši",
                confirm_closing: "",
                confirm_deleting: "Zadatak će biti trajno izbrisan, jeste li sigurni?",
                section_description: "Opis",
                section_time: "Vremenski Period",
                section_type: "Tip",
                column_wbs: "WBS",
                column_text: "Naziv Zadatka",
                column_start_date: "Početno Vrijeme",
                column_duration: "Trajanje",
                column_add: "",
                link: "Poveznica",
                confirm_link_deleting: "će biti izbrisan",
                link_start: " (početak)",
                link_end: " (kraj)",
                type_task: "Zadatak",
                type_project: "Projekt",
                type_milestone: "Milestone",
                minutes: "Minute",
                hours: "Sati",
                days: "Dani",
                weeks: "Tjedni",
                months: "Mjeseci",
                years: "Godine",
                message_ok: "OK",
                message_cancel: "Odustani",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
                month_short: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
                day_full: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
                day_short: ["א", "ב", "ג", "ד", "ה", "ו", "ש"]
            }, labels: {
                new_task: "משימה חדש",
                icon_save: "שמור",
                icon_cancel: "בטל",
                icon_details: "פרטים",
                icon_edit: "ערוך",
                icon_delete: "מחק",
                confirm_closing: "",
                confirm_deleting: "ארוע ימחק סופית.להמשיך?",
                section_description: "הסבר",
                section_time: "תקופה",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "בטל",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                month_short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"],
                day_full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                day_short: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
            }, labels: {
                new_task: "Nouvelle tâche",
                icon_save: "Enregistrer",
                icon_cancel: "Annuler",
                icon_details: "Détails",
                icon_edit: "Modifier",
                icon_delete: "Effacer",
                confirm_closing: "",
                confirm_deleting: "L'événement sera effacé sans appel, êtes-vous sûr ?",
                section_description: "Description",
                section_time: "Période",
                section_type: "Type",
                column_wbs: "OTP",
                column_text: "Nom de la tâche",
                column_start_date: "Date initiale",
                column_duration: "Durée",
                column_add: "",
                link: "Le lien",
                confirm_link_deleting: "sera supprimé",
                link_start: "(début)",
                link_end: "(fin)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Heures",
                days: "Jours",
                weeks: "Semaines",
                months: "Mois",
                years: "Années",
                message_ok: "OK",
                message_cancel: "Annuler",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                month_short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
                day_full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
                day_short: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"]
            }, labels: {
                new_task: "Uusi tehtävä",
                icon_save: "Tallenna",
                icon_cancel: "Peru",
                icon_details: "Tiedot",
                icon_edit: "Muokkaa",
                icon_delete: "Poista",
                confirm_closing: "",
                confirm_deleting: "Haluatko varmasti poistaa tapahtuman?",
                section_description: "Kuvaus",
                section_time: "Aikajakso",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Peru",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
                month_short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                day_full: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
                day_short: ["ی", "د", "س", "چ", "پ", "ج", "ش"]
            }, labels: {
                new_task: "وظیفه جدید",
                icon_save: "ذخیره",
                icon_cancel: "لغو",
                icon_details: "جزییات",
                icon_edit: "ویرایش",
                icon_delete: "حذف",
                confirm_closing: "تغییرات شما ازدست خواهد رفت، آیا مطمئن هستید؟",
                confirm_deleting: "این مورد برای همیشه حذف خواهد شد، آیا مطمئن هستید؟",
                section_description: "توضیحات",
                section_time: "مدت زمان",
                section_type: "نوع",
                column_wbs: "WBS",
                column_text: "عنوان",
                column_start_date: "زمان شروع",
                column_duration: "مدت",
                column_add: "",
                link: "ارتباط",
                confirm_link_deleting: "حذف خواهد شد",
                link_start: " (آغاز)",
                link_end: " (پایان)",
                type_task: "وظیفه",
                type_project: "پروژه",
                type_milestone: "نگارش",
                minutes: "دقایق",
                hours: "ساعات",
                days: "روزها",
                weeks: "هفته",
                months: "ماه‌ها",
                years: "سال‌ها",
                message_ok: "تایید",
                message_cancel: "لغو",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                month_short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                day_full: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                day_short: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
            }, labels: {
                new_task: "Nueva tarea",
                icon_save: "Guardar",
                icon_cancel: "Cancelar",
                icon_details: "Detalles",
                icon_edit: "Editar",
                icon_delete: "Eliminar",
                confirm_closing: "",
                confirm_deleting: "El evento se borrará definitivamente, ¿continuar?",
                section_description: "Descripción",
                section_time: "Período",
                section_type: "Tipo",
                column_wbs: "EDT",
                column_text: "Tarea",
                column_start_date: "Inicio",
                column_duration: "Duración",
                column_add: "",
                link: "Enlace",
                confirm_link_deleting: "será borrada",
                link_start: " (inicio)",
                link_end: " (fin)",
                type_task: "Tarea",
                type_project: "Proyecto",
                type_milestone: "Hito",
                minutes: "Minutos",
                hours: "Horas",
                days: "Días",
                weeks: "Semanas",
                months: "Meses",
                years: "Años",
                message_ok: "OK",
                message_cancel: "Cancelar",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                day_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                day_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            }, labels: {
                new_task: "New task",
                icon_save: "Save",
                icon_cancel: "Cancel",
                icon_details: "Details",
                icon_edit: "Edit",
                icon_delete: "Delete",
                confirm_closing: "",
                confirm_deleting: "Task will be deleted permanently, are you sure?",
                section_description: "Description",
                section_responsible: "Responsible",
                section_time: "Time period",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Cancel",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                month_short: ["ΙΑΝ", "ΦΕΒ", "ΜΑΡ", "ΑΠΡ", "ΜΑΙ", "ΙΟΥΝ", "ΙΟΥΛ", "ΑΥΓ", "ΣΕΠ", "ΟΚΤ", "ΝΟΕ", "ΔΕΚ"],
                day_full: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Κυριακή"],
                day_short: ["ΚΥ", "ΔΕ", "ΤΡ", "ΤΕ", "ΠΕ", "ΠΑ", "ΣΑ"]
            }, labels: {
                new_task: "Νέα εργασία",
                icon_save: "Αποθήκευση",
                icon_cancel: "Άκυρο",
                icon_details: "Λεπτομέρειες",
                icon_edit: "Επεξεργασία",
                icon_delete: "Διαγραφή",
                confirm_closing: "",
                confirm_deleting: "Το έργο θα διαγραφεί οριστικά. Θέλετε να συνεχίσετε;",
                section_description: "Περιγραφή",
                section_time: "Χρονική περίοδος",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Άκυρο",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: [" Januar", " Februar", " März ", " April", " Mai", " Juni", " Juli", " August", " September ", " Oktober", " November ", " Dezember"],
                month_short: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                day_full: ["Sonntag", "Montag", "Dienstag", " Mittwoch", " Donnerstag", "Freitag", "Samstag"],
                day_short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
            }, labels: {
                new_task: "Neue Aufgabe",
                icon_save: "Speichern",
                icon_cancel: "Abbrechen",
                icon_details: "Details",
                icon_edit: "Ändern",
                icon_delete: "Löschen",
                confirm_closing: "",
                confirm_deleting: "Der Eintrag wird gelöscht",
                section_description: "Beschreibung",
                section_time: "Zeitspanne",
                section_type: "Type",
                column_wbs: "PSP",
                column_text: "Task-Namen",
                column_start_date: "Startzeit",
                column_duration: "Dauer",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "werden gelöscht",
                link_start: "(starten)",
                link_end: "(ende)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minuten",
                hours: "Stunden",
                days: "Tage",
                weeks: "Wochen",
                months: "Monate",
                years: "Jahre",
                message_ok: "OK",
                message_cancel: "Abbrechen",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
                month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
            }, labels: {
                new_task: "Ny opgave",
                icon_save: "Gem",
                icon_cancel: "Fortryd",
                icon_details: "Detaljer",
                icon_edit: "Tilret",
                icon_delete: "Slet",
                confirm_closing: "Dine rettelser vil gå tabt.. Er dy sikker?",
                confirm_deleting: "Bigivenheden vil blive slettet permanent. Er du sikker?",
                section_description: "Beskrivelse",
                section_time: "Tidsperiode",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Fortryd",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                month_short: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čec", "Srp", "Září", "Říj", "List", "Pro"],
                day_full: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
                day_short: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
            }, labels: {
                new_task: "Nová práce",
                icon_save: "Uložit",
                icon_cancel: "Zpět",
                icon_details: "Detail",
                icon_edit: "Edituj",
                icon_delete: "Smazat",
                confirm_closing: "",
                confirm_deleting: "Událost bude trvale smazána, opravdu?",
                section_description: "Poznámky",
                section_time: "Doba platnosti",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Zpět",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                day_full: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                day_short: ["日", "一", "二", "三", "四", "五", "六"]
            },
            labels: {
                new_task: "新任務",
                icon_save: "保存",
                icon_cancel: "关闭",
                icon_details: "详细",
                icon_edit: "编辑",
                icon_delete: "删除",
                confirm_closing: "请确认是否撤销修改!",
                confirm_deleting: "是否删除日程?",
                section_description: "描述",
                section_time: "时间范围",
                section_type: "类型",
                column_wbs: "工作分解结构",
                column_text: "任务名",
                column_start_date: "开始时间",
                column_duration: "持续时间",
                column_add: "",
                link: "关联",
                confirm_link_deleting: "将被删除",
                link_start: " (开始)",
                link_end: " (结束)",
                type_task: "任务",
                type_project: "项目",
                type_milestone: "里程碑",
                minutes: "分钟",
                hours: "小时",
                days: "天",
                weeks: "周",
                months: "月",
                years: "年",
                message_ok: "OK",
                message_cancel: "关闭",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                month_short: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
                day_full: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
                day_short: ["Dg", "Dl", "Dm", "Dc", "Dj", "Dv", "Ds"]
            }, labels: {
                new_task: "Nova tasca",
                icon_save: "Guardar",
                icon_cancel: "Cancel·lar",
                icon_details: "Detalls",
                icon_edit: "Editar",
                icon_delete: "Esborrar",
                confirm_closing: "",
                confirm_deleting: "L'esdeveniment s'esborrarà definitivament, continuar ?",
                section_description: "Descripció",
                section_time: "Periode de temps",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "Cancel·lar",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["Студзень", "Люты", "Сакавік", "Красавік", "Maй", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"],
                month_short: ["Студз", "Лют", "Сак", "Крас", "Maй", "Чэр", "Ліп", "Жнів", "Вер", "Каст", "Ліст", "Снеж"],
                day_full: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"],
                day_short: ["Нд", "Пн", "Аўт", "Ср", "Чцв", "Пт", "Сб"]
            }, labels: {
                new_task: "Новае заданне",
                icon_save: "Захаваць",
                icon_cancel: "Адмяніць",
                icon_details: "Дэталі",
                icon_edit: "Змяніць",
                icon_delete: "Выдаліць",
                confirm_closing: "",
                confirm_deleting: "Падзея будзе выдалена незваротна, працягнуць?",
                section_description: "Апісанне",
                section_time: "Перыяд часу",
                section_type: "Тып",
                column_wbs: "ІСР",
                column_text: "Задача",
                column_start_date: "Пачатак",
                column_duration: "Працяг",
                column_add: "",
                link: "Сувязь",
                confirm_link_deleting: "будзе выдалена",
                link_start: "(пачатак)",
                link_end: "(канец)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Хвiлiна",
                hours: "Гадзiна",
                days: "Дзень",
                weeks: "Тыдзень",
                months: "Месяц",
                years: "Год",
                message_ok: "OK",
                message_cancel: "Адмяніць",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = {
            date: {
                month_full: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                month_short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                day_full: ["الأحد", "الأثنين", "ألثلاثاء", "الأربعاء", "ألحميس", "ألجمعة", "السبت"],
                day_short: ["احد", "اثنين", "ثلاثاء", "اربعاء", "خميس", "جمعة", "سبت"]
            }, labels: {
                new_task: "مهمة جديد",
                icon_save: "اخزن",
                icon_cancel: "الغاء",
                icon_details: "تفاصيل",
                icon_edit: "تحرير",
                icon_delete: "حذف",
                confirm_closing: "التغييرات سوف تضيع, هل انت متأكد؟",
                confirm_deleting: "الحدث سيتم حذفها نهائيا ، هل أنت متأكد؟",
                section_description: "الوصف",
                section_time: "الفترة الزمنية",
                section_type: "Type",
                column_wbs: "WBS",
                column_text: "Task name",
                column_start_date: "Start time",
                column_duration: "Duration",
                column_add: "",
                link: "Link",
                confirm_link_deleting: "will be deleted",
                link_start: " (start)",
                link_end: " (end)",
                type_task: "Task",
                type_project: "Project",
                type_milestone: "Milestone",
                minutes: "Minutes",
                hours: "Hours",
                days: "Days",
                weeks: "Week",
                months: "Months",
                years: "Years",
                message_ok: "OK",
                message_cancel: "الغاء",
                section_constraint: "Constraint",
                constraint_type: "Constraint type",
                constraint_date: "Constraint date",
                asap: "As Soon As Possible",
                alap: "As Late As Possible",
                snet: "Start No Earlier Than",
                snlt: "Start No Later Than",
                fnet: "Finish No Earlier Than",
                fnlt: "Finish No Later Than",
                mso: "Must Start On",
                mfo: "Must Finish On",
                resources_filter_placeholder: "type to filter",
                resources_filter_label: "hide empty"
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(144), r = n(143), a = n(142), o = n(141), s = n(140), l = n(139), c = n(138), u = n(137), d = n(136),
            h = n(135), f = n(134), _ = n(133), g = n(132), p = n(131), v = n(130), m = n(129), y = n(128), k = n(127),
            b = n(126), w = n(125), x = n(124), $ = n(123), T = n(122), S = n(121), C = n(120), E = n(119), D = n(118),
            A = n(117), N = n(116), M = n(115), I = n(114);
        e.default = function () {
            return new w.default({
                en: d.default,
                ar: i.default,
                be: r.default,
                ca: a.default,
                cn: o.default,
                cs: s.default,
                da: l.default,
                de: c.default,
                el: u.default,
                es: h.default,
                fa: f.default,
                fi: _.default,
                fr: g.default,
                he: p.default,
                hr: v.default,
                hu: m.default,
                id: y.default,
                jp: k.default,
                kr: b.default,
                nb: x.default,
                nl: $.default,
                no: T.default,
                pl: S.default,
                ro: C.default,
                ru: E.default,
                si: D.default,
                sk: A.default,
                sv: N.default,
                tr: M.default,
                ua: I.default
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function () {
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.destructor = function () {
                for (var e in t.callEvent("onDestroy", []), this.clearAll(), this.$root && delete this.$root.gantt, this._eventRemoveAll(), this.$layout && this.$layout.destructor(), this.resetLightbox(), this._dp && this._dp.destructor && this._dp.destructor(), this.$services.destructor(), this.detachAllEvents(), this) 0 === e.indexOf("$") && delete this[e];
                t.$destroyed = !0
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            return function (e, n) {
                e || t.config.show_errors && !1 !== t.callEvent("onError", [n]) && t.message({
                    type: "error",
                    text: n,
                    expire: -1
                })
            }
        }
    }, function (t, e) {
        function n(t, e) {
            var n;
            t.event(e, "resize", function () {
                clearTimeout(n), n = setTimeout(function () {
                    t.render()
                }, 300)
            })
        }

        t.exports = function (t) {
            "static" == window.getComputedStyle(t.$root).getPropertyValue("position") && (t.$root.style.position = "relative");
            var e = document.createElement("iframe");
            e.className = "gantt_container_resize_watcher", e.tabIndex = -1, t.config.wai_aria_attributes && (e.setAttribute("role", "none"), e.setAttribute("aria-hidden", !0)), t.$root.appendChild(e), e.contentWindow ? n(t, e.contentWindow) : (t.$root.removeChild(e), n(t, window))
        }
    }, function (t, e, n) {
        var i = n(1), r = n(3), a = n(8), o = n(149);
        t.exports = function (t) {
            var e = n(35);
            t.assert = n(148)(t), t.init = function (t, e, n) {
                e && n && (this.config.start_date = this._min_date = new Date(e), this.config.end_date = this._max_date = new Date(n)), this.date.init(), this.init = function (t) {
                    this.$container && this.$container.parentNode && (this.$container.parentNode.removeChild(this.$container), this.$container = null), this.$layout && this.$layout.clear(), this._reinit(t)
                }, this._reinit(t)
            };
            var s = function () {
                this._clearTaskLayers && this._clearTaskLayers(), this._clearLinkLayers && this._clearLinkLayers(), this.$layout && (this.$layout.destructor(), this.$layout = null, this.$ui.reset())
            }.bind(t), l = function () {
                a(t) || (this.$root.innerHTML = "", this.$root.gantt = this, e(this), this.config.layout.id = "main", this.$layout = this.$ui.createView("layout", this.$root, this.config.layout), this.$layout.attachEvent("onBeforeResize", function () {
                    for (var e = t.$services.getService("datastores"), n = 0; n < e.length; n++) t.getDatastore(e[n]).filter()
                }), this.$layout.attachEvent("onResize", function () {
                    t.refreshData()
                }), this.callEvent("onGanttLayoutReady", []), this.$layout.render(), this.$container = this.$layout.$container.firstChild, o(this))
            }.bind(t);
            t.resetLayout = function () {
                s(), l(), this.render()
            }, t._reinit = function (t) {
                this.callEvent("onBeforeGanttReady", []), this._update_flags(), this.$services.getService("templateLoader").initTemplates(this), s(), t && (this.$root = i.toNode(t), l(), this.$mouseEvents.reset(this.$root)), this.callEvent("onTemplatesReady", []), this.callEvent("onGanttReady", []), this.render()
            }, t.$click = {
                buttons: {
                    edit: function (e) {
                        t.isReadonly(t.getTask(e)) || t.showLightbox(e)
                    }, delete: function (e) {
                        var n = t.getTask(e);
                        if (!t.isReadonly(n)) {
                            var i = t.locale.labels.confirm_deleting, r = t.locale.labels.confirm_deleting_title;
                            t._dhtmlx_confirm(i, r, function () {
                                t.isTaskExists(e) ? (n.$new ? (t.silent(function () {
                                    t.deleteTask(e, !0)
                                }), t.refreshData()) : t.deleteTask(e), t.hideLightbox()) : t.hideLightbox()
                            })
                        }
                    }
                }
            }, t.render = function () {
                var n;
                if (this.callEvent("onBeforeGanttRender", []), !a(t)) {
                    !this.config.sort && this._sort && (this._sort = void 0), this.$root && (this.config.rtl ? this.$root.classList.add("gantt_rtl") : this.$root.classList.remove("gantt_rtl"));
                    var i = this.getScrollState(), r = i ? i.x : 0;
                    if (this._getHorizontalScrollbar()) r = this._getHorizontalScrollbar().$config.codeScrollLeft || r || 0;
                    n = null, r && (n = t.dateFromPos(r + this.config.task_scroll_offset))
                }
                if (e(this), a(t)) t.refreshData(); else if (this.$layout.$config.autosize = this.config.autosize, this.$layout.resize(), this.config.preserve_scroll && i && r) {
                    var o = t.getScrollState();
                    +n == +t.dateFromPos(o.x) && o.y == i.y || (n && this.showDate(n), i.y && t.scrollTo(void 0, i.y))
                }
                this.callEvent("onGanttRender", [])
            }, t.setSizes = t.render, t.getTaskRowNode = function (t) {
                for (var e = this.$grid_data.childNodes, n = this.config.task_attribute, i = 0; i < e.length; i++) {
                    if (e[i].getAttribute) if (e[i].getAttribute(n) == t) return e[i]
                }
                return null
            }, t.changeLightboxType = function (e) {
                if (this.getLightboxType() == e) return !0;
                t._silent_redraw_lightbox(e)
            }, t._get_link_type = function (e, n) {
                var i = null;
                return e && n ? i = t.config.links.start_to_start : !e && n ? i = t.config.links.finish_to_start : e || n ? e && !n && (i = t.config.links.start_to_finish) : i = t.config.links.finish_to_finish, i
            }, t.isLinkAllowed = function (t, e, n, i) {
                var r = null;
                if (!(r = "object" == typeof t ? t : {
                    source: t,
                    target: e,
                    type: this._get_link_type(n, i)
                })) return !1;
                if (!(r.source && r.target && r.type)) return !1;
                if (r.source == r.target) return !1;
                var a = !0;
                return this.checkEvent("onLinkValidation") && (a = this.callEvent("onLinkValidation", [r])), a
            }, t._correct_dst_change = function (e, n, i, a) {
                var o = r.getSecondsInUnit(a) * i;
                if (o > 3600 && o < 86400) {
                    var s = e.getTimezoneOffset() - n;
                    s && (e = t.date.add(e, s, "minute"))
                }
                return e
            }, t.isSplitTask = function (e) {
                return t.assert(e && e instanceof Object, "Invalid argument <b>task</b>=" + e + " of gantt.isSplitTask. Task object was expected"), this.$data.tasksStore._isSplitItem(e)
            }, t._is_icon_open_click = function (t) {
                if (!t) return !1;
                var e = t.target || t.srcElement;
                if (!e || !e.className) return !1;
                var n = i.getClassName(e);
                return -1 !== n.indexOf("gantt_tree_icon") && (-1 !== n.indexOf("gantt_close") || -1 !== n.indexOf("gantt_open"))
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            function e() {
                return t._cached_functions.update_if_changed(t), t._cached_functions.active || t._cached_functions.activate(), !0
            }

            t._cached_functions = {
                cache: {}, mode: !1, critical_path_mode: !1, wrap_methods: function (t, e) {
                    if (e._prefetch_originals) for (var n in e._prefetch_originals) e[n] = e._prefetch_originals[n];
                    e._prefetch_originals = {};
                    for (n = 0; n < t.length; n++) this.prefetch(t[n], e)
                }, prefetch: function (t, e) {
                    var n = e[t];
                    if (n) {
                        var i = this;
                        e._prefetch_originals[t] = n, e[t] = function () {
                            for (var e = new Array(arguments.length), r = 0, a = arguments.length; r < a; r++) e[r] = arguments[r];
                            if (i.active) {
                                var o = i.get_arguments_hash(Array.prototype.slice.call(e));
                                i.cache[t] || (i.cache[t] = {});
                                var s = i.cache[t];
                                if (i.has_cached_value(s, o)) return i.get_cached_value(s, o);
                                var l = n.apply(this, e);
                                return i.cache_value(s, o, l), l
                            }
                            return n.apply(this, e)
                        }
                    }
                    return n
                }, cache_value: function (t, e, n) {
                    this.is_date(n) && (n = new Date(n)), t[e] = n
                }, has_cached_value: function (t, e) {
                    return t.hasOwnProperty(e)
                }, get_cached_value: function (t, e) {
                    var n = t[e];
                    return this.is_date(n) && (n = new Date(n)), n
                }, is_date: function (t) {
                    return t && t.getUTCDate
                }, get_arguments_hash: function (t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(this.stringify_argument(t[n]));
                    return "(" + e.join(";") + ")"
                }, stringify_argument: function (t) {
                    return (t.id ? t.id : this.is_date(t) ? t.valueOf() : t) + ""
                }, activate: function () {
                    this.clear(), this.active = !0
                }, deactivate: function () {
                    this.clear(), this.active = !1
                }, clear: function () {
                    this.cache = {}
                }, setup: function (t) {
                    var e = [], n = ["_isProjectEnd", "_getProjectEnd", "_getSlack"];
                    "auto" == this.mode ? t.config.highlight_critical_path && (e = n) : !0 === this.mode && (e = n), this.wrap_methods(e, t)
                }, update_if_changed: function (t) {
                    (this.critical_path_mode != t.config.highlight_critical_path || this.mode !== t.config.optimize_render) && (this.critical_path_mode = t.config.highlight_critical_path, this.mode = t.config.optimize_render, this.setup(t))
                }
            }, t.attachEvent("onBeforeGanttRender", e), t.attachEvent("onBeforeDataRender", e), t.attachEvent("onBeforeSmartRender", function () {
                e()
            }), t.attachEvent("onBeforeParse", e), t.attachEvent("onDataRender", function () {
                t._cached_functions.deactivate()
            });
            var n = null;
            t.attachEvent("onSmartRender", function () {
                n && clearTimeout(n), n = setTimeout(function () {
                    t._cached_functions.deactivate()
                }, 1e3)
            }), t.attachEvent("onBeforeGanttReady", function () {
                return t._cached_functions.update_if_changed(t), !0
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.getTaskType = function (e) {
                var n = e;
                for (var i in e && "object" == typeof e && (n = e.type), this.config.types) if (this.config.types[i] == n) return n;
                return t.config.types.task
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function () {
        }
    }, function (t, e, n) {
        var i = n(3);
        t.exports = function (t) {
            t.isUnscheduledTask = function (e) {
                return t.assert(e && e instanceof Object, "Invalid argument <b>task</b>=" + e + " of gantt.isUnscheduledTask. Task object was expected"), !!e.unscheduled || !e.start_date
            }, t._isAllowedUnscheduledTask = function (e) {
                return !(!e.unscheduled || !t.config.show_unscheduled)
            }, t._isTaskInTimelineLimits = function (t) {
                var e = t.start_date ? t.start_date.valueOf() : null, n = t.end_date ? t.end_date.valueOf() : null;
                return !!(e && n && e <= this._max_date.valueOf() && n >= this._min_date.valueOf())
            }, t.isTaskVisible = function (t) {
                if (!this.isTaskExists(t)) return !1;
                var e = this.getTask(t);
                return !(!this._isAllowedUnscheduledTask(e) && !this._isTaskInTimelineLimits(e)) && !!(this.getGlobalTaskIndex(t) >= 0)
            }, t._getProjectEnd = function () {
                if (t.config.project_end) return t.config.project_end;
                var e = t.getTaskByTime();
                return (e = e.sort(function (t, e) {
                    return +t.end_date > +e.end_date ? 1 : -1
                })).length ? e[e.length - 1].end_date : null
            }, t._getProjectStart = function () {
                if (t.config.project_start) return t.config.project_start;
                if (t.config.start_date) return t.config.start_date;
                if (t.getState().min_date) return t.getState().min_date;
                var e = t.getTaskByTime();
                return (e = e.sort(function (t, e) {
                    return +t.start_date > +e.start_date ? 1 : -1
                })).length ? e[0].start_date : null
            };
            var e = function (e, n) {
                var i = !(!n || n == t.config.root_id) && t.getTask(n), r = null;
                if (i) r = t.config.schedule_from_end ? t.calculateEndDate({
                    start_date: i.end_date,
                    duration: -t.config.duration_step,
                    task: e
                }) : i.start_date; else if (t.config.schedule_from_end) r = t.calculateEndDate({
                    start_date: t._getProjectEnd(),
                    duration: -t.config.duration_step,
                    task: e
                }); else {
                    var a = t.getTaskByIndex(0);
                    r = a ? a.start_date ? a.start_date : a.end_date ? t.calculateEndDate({
                        start_date: a.end_date,
                        duration: -t.config.duration_step,
                        task: e
                    }) : null : t.config.start_date || t.getState().min_date
                }
                return t.assert(r, "Invalid dates"), new Date(r)
            };
            t._set_default_task_timing = function (n) {
                n.start_date = n.start_date || e(n, t.getParent(n)), n.duration = n.duration || t.config.duration_step, n.end_date = n.end_date || t.calculateEndDate(n)
            }, t.createTask = function (n, i, r) {
                (n = n || {}, t.defined(n.id) || (n.id = t.uid()), n.start_date || (n.start_date = e(n, i)), void 0 === n.text && (n.text = t.locale.labels.new_task), void 0 === n.duration && (n.duration = 1), this.isTaskExists(i)) && (this.setParent(n, i, !0), this.getTask(i).$open = !0);
                return this.callEvent("onTaskCreated", [n]) ? (this.config.details_on_create ? (n.$new = !0, this.silent(function () {
                    t.$data.tasksStore.addItem(n, r)
                }), this.selectTask(n.id), this.refreshData(), this.showLightbox(n.id)) : this.addTask(n, i, r) && (this.showTask(n.id), this.selectTask(n.id)), n.id) : null
            }, t._update_flags = function (e, n) {
                var i = t.$data.tasksStore;
                void 0 === e ? (this._lightbox_id = null, i.silent(function () {
                    i.unselect()
                }), this._tasks_dnd && this._tasks_dnd.drag && (this._tasks_dnd.drag.id = null)) : (this._lightbox_id == e && (this._lightbox_id = n), i.getSelectedId() == e && i.silent(function () {
                    i.unselect(e), i.select(n)
                }), this._tasks_dnd && this._tasks_dnd.drag && this._tasks_dnd.drag.id == e && (this._tasks_dnd.drag.id = n))
            };
            var n = function (e, n) {
                var i = t.getTaskType(e.type), r = {type: i, $no_start: !1, $no_end: !1};
                return n || i != e.$rendered_type ? (i == t.config.types.project ? r.$no_end = r.$no_start = !0 : i != t.config.types.milestone && (r.$no_end = !(e.end_date || e.duration), r.$no_start = !e.start_date, t._isAllowedUnscheduledTask(e) && (r.$no_end = r.$no_start = !1)), r) : (r.$no_start = e.$no_start, r.$no_end = e.$no_end, r)
            };

            function r(e) {
                e.$effective_calendar = t.getTaskCalendar(e).id, e.start_date = t.getClosestWorkTime({
                    dir: "future",
                    date: e.start_date,
                    unit: t.config.duration_unit,
                    task: e
                }), e.end_date = t.calculateEndDate(e)
            }

            t._init_task_timing = function (t) {
                var e = n(t, !0), i = t.$rendered_type != e.type, a = e.type;
                i && (t.$no_start = e.$no_start, t.$no_end = e.$no_end, t.$rendered_type = e.type), i && a != this.config.types.milestone && a == this.config.types.project && this._set_default_task_timing(t), a == this.config.types.milestone && (t.end_date = t.start_date), t.start_date && t.end_date && (t.duration = this.calculateDuration(t)), t.end_date || (t.end_date = t.start_date), t.duration = t.duration || 0;
                var o = this.getTaskCalendar(t);
                t.$effective_calendar && t.$effective_calendar !== o.id && (r(t), this.config.inherit_calendar && this.isSummaryTask(t) && this.eachTask(function (t) {
                    r(t)
                }, t.id)), t.$effective_calendar = o.id
            }, t.isSummaryTask = function (e) {
                t.assert(e && e instanceof Object, "Invalid argument <b>task</b>=" + e + " of gantt.isSummaryTask. Task object was expected");
                var i = n(e);
                return !(!i.$no_end && !i.$no_start)
            }, t.resetProjectDates = function (t) {
                var i = n(t);
                if (i.$no_end || i.$no_start) {
                    var r = this.getSubtaskDates(t.id);
                    (function (t, i, r) {
                        var a = n(t);
                        a.$no_start && (t.start_date = i && i != 1 / 0 ? new Date(i) : e(t, this.getParent(t)));
                        a.$no_end && (t.end_date = r && r != -1 / 0 ? new Date(r) : this.calculateEndDate({
                            start_date: t.start_date,
                            duration: this.config.duration_step,
                            task: t
                        }));
                        (a.$no_start || a.$no_end) && this._init_task_timing(t)
                    }).call(this, t, r.start_date, r.end_date)
                }
            }, t.getSubtaskDuration = function (e) {
                var n = 0, i = void 0 !== e ? e : t.config.root_id;
                return this.eachTask(function (e) {
                    this.getTaskType(e.type) == t.config.types.project || this.isUnscheduledTask(e) || (n += e.duration)
                }, i), n
            }, t.getSubtaskDates = function (e) {
                var n = null, i = null, r = void 0 !== e ? e : t.config.root_id;
                return this.eachTask(function (e) {
                    this.getTaskType(e.type) == t.config.types.project || this.isUnscheduledTask(e) || (e.start_date && !e.$no_start && (!n || n > e.start_date.valueOf()) && (n = e.start_date.valueOf()), e.end_date && !e.$no_end && (!i || i < e.end_date.valueOf()) && (i = e.end_date.valueOf()))
                }, r), {start_date: n ? new Date(n) : null, end_date: i ? new Date(i) : null}
            }, t._update_parents = function (e, i) {
                if (e) {
                    var r = this.getTask(e), a = this.getParent(r), o = n(r), s = !0;
                    if (o.$no_start || o.$no_end) {
                        var l = r.start_date.valueOf(), c = r.end_date.valueOf();
                        t.resetProjectDates(r), l == r.start_date.valueOf() && c == r.end_date.valueOf() && (s = !1), s && !i && this.refreshTask(r.id, !0)
                    }
                    s && a && this.isTaskExists(a) && this._update_parents(a, i)
                }
            }, t.roundDate = function (e) {
                var n = t.getScale();
                i.isDate(e) && (e = {
                    date: e,
                    unit: n ? n.unit : t.config.duration_unit,
                    step: n ? n.step : t.config.duration_step
                });
                var r, a, o, s = e.date, l = e.step, c = e.unit;
                if (!n) return s;
                if (c == n.unit && l == n.step && +s >= +n.min_date && +s <= +n.max_date) o = Math.floor(t.columnIndexByDate(s)), n.trace_x[o] || (o -= 1, n.rtl && (o = 0)), a = new Date(n.trace_x[o]), r = t.date.add(a, l, c); else {
                    for (o = Math.floor(t.columnIndexByDate(s)), r = t.date[c + "_start"](new Date(n.min_date)), n.trace_x[o] && (r = t.date[c + "_start"](n.trace_x[o])); +r < +s;) {
                        var u = (r = t.date[c + "_start"](t.date.add(r, l, c))).getTimezoneOffset();
                        r = t._correct_dst_change(r, u, r, c), t.date[c + "_start"] && (r = t.date[c + "_start"](r))
                    }
                    a = t.date.add(r, -1 * l, c)
                }
                return e.dir && "future" == e.dir ? r : e.dir && "past" == e.dir ? a : Math.abs(s - a) < Math.abs(r - s) ? a : r
            }, t.correctTaskWorkTime = function (e) {
                t.config.work_time && t.config.correct_work_time && (this.isWorkTime(e.start_date, void 0, e) ? this.isWorkTime(new Date(+e.end_date - 1), void 0, e) || (e.end_date = this.calculateEndDate(e)) : (e.start_date = this.getClosestWorkTime({
                    date: e.start_date,
                    dir: "future",
                    task: e
                }), e.end_date = this.calculateEndDate(e)))
            }, t.attachEvent("onBeforeTaskUpdate", function (e, n) {
                return t._init_task_timing(n), !0
            }), t.attachEvent("onBeforeTaskAdd", function (e, n) {
                return t._init_task_timing(n), !0
            }), t.attachEvent("onAfterTaskMove", function (e, n, i) {
                return t._init_task_timing(t.getTask(e)), !0
            })
        }
    }, function (t, e, n) {
        var i = n(0);
        t.exports = {
            create: function (t, e) {
                return {
                    getWorkHours: function (t) {
                        return e.getWorkHours(t)
                    },
                    setWorkTime: function (t) {
                        return e.setWorkTime(t)
                    },
                    unsetWorkTime: function (t) {
                        e.unsetWorkTime(t)
                    },
                    isWorkTime: function (t, n, i) {
                        return e.isWorkTime(t, n, i)
                    },
                    getClosestWorkTime: function (t) {
                        return e.getClosestWorkTime(t)
                    },
                    calculateDuration: function (t, n, i) {
                        return e.calculateDuration(t, n, i)
                    },
                    _hasDuration: function (t, n, i) {
                        return e.hasDuration(t, n, i)
                    },
                    calculateEndDate: function (t, n, i, r) {
                        return e.calculateEndDate(t, n, i, r)
                    },
                    mergeCalendars: i.bind(t.mergeCalendars, t),
                    createCalendar: i.bind(t.createCalendar, t),
                    addCalendar: i.bind(t.addCalendar, t),
                    getCalendar: i.bind(t.getCalendar, t),
                    getCalendars: i.bind(t.getCalendars, t),
                    getResourceCalendar: i.bind(t.getResourceCalendar, t),
                    getTaskCalendar: i.bind(t.getTaskCalendar, t),
                    deleteCalendar: i.bind(t.deleteCalendar, t)
                }
            }
        }
    }, function (t, e) {
        function n(t, e) {
            this.argumentsHelper = e, this.$gantt = t
        }

        n.prototype = {
            getWorkHours: function () {
                return [0, 24]
            }, setWorkTime: function () {
                return !0
            }, unsetWorkTime: function () {
                return !0
            }, isWorkTime: function () {
                return !0
            }, getClosestWorkTime: function (t) {
                return this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper, arguments).date
            }, calculateDuration: function () {
                var t = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments),
                    e = t.start_date, n = t.end_date, i = t.unit, r = t.step;
                return this._calculateDuration(e, n, i, r)
            }, _calculateDuration: function (t, e, n, i) {
                var r = this.$gantt.date, a = {week: 6048e5, day: 864e5, hour: 36e5, minute: 6e4}, o = 0;
                if (a[n]) o = Math.round((e - t) / (i * a[n])); else {
                    for (var s = new Date(t), l = new Date(e); s.valueOf() < l.valueOf();) o += 1, s = r.add(s, i, n);
                    s.valueOf() != e.valueOf() && (o += (l - s) / (r.add(s, i, n) - s))
                }
                return Math.round(o)
            }, hasDuration: function () {
                var t = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments),
                    e = t.start_date, n = t.end_date;
                return !!t.unit && (e = new Date(e), n = new Date(n), e.valueOf() < n.valueOf())
            }, hasWorkTime: function () {
                return !0
            }, equals: function (t) {
                return t instanceof n
            }, calculateEndDate: function () {
                var t = this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper, arguments),
                    e = t.start_date, n = t.duration, i = t.unit, r = t.step;
                return this.$gantt.date.add(e, r * n, i)
            }
        }, t.exports = n
    }, function (t, e, n) {
        var i = n(31), r = n(156);

        function a(t) {
            this.$gantt = t.$gantt, this.argumentsHelper = i(this.$gantt), this.calendarManager = t, this.$disabledCalendar = new r(this.$gantt, this.argumentsHelper)
        }

        a.prototype = {
            _getCalendar: function (t) {
                var e;
                if (this.$gantt.config.work_time) {
                    var n = this.calendarManager;
                    t.task ? e = n.getTaskCalendar(t.task) : t.id ? e = n.getTaskCalendar(t) : t.calendar && (e = t.calendar), e || (e = n.getTaskCalendar())
                } else e = this.$disabledCalendar;
                return e
            }, getWorkHours: function (t) {
                return t = this.argumentsHelper.getWorkHoursArguments.apply(this.argumentsHelper, arguments), this._getCalendar(t).getWorkHours(t.date)
            }, setWorkTime: function (t, e) {
                return t = this.argumentsHelper.setWorkTimeArguments.apply(this.argumentsHelper, arguments), e || (e = this.calendarManager.getCalendar()), e.setWorkTime(t)
            }, unsetWorkTime: function (t, e) {
                return t = this.argumentsHelper.unsetWorkTimeArguments.apply(this.argumentsHelper, arguments), e || (e = this.calendarManager.getCalendar()), e.unsetWorkTime(t)
            }, isWorkTime: function (t, e, n, i) {
                var r = this.argumentsHelper.isWorkTimeArguments.apply(this.argumentsHelper, arguments);
                return this._getCalendar(r).isWorkTime(r)
            }, getClosestWorkTime: function (t) {
                return t = this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper, arguments), this._getCalendar(t).getClosestWorkTime(t)
            }, calculateDuration: function () {
                var t = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments);
                return this._getCalendar(t).calculateDuration(t)
            }, hasDuration: function () {
                var t = this.argumentsHelper.hasDurationArguments.apply(this.argumentsHelper, arguments);
                return this._getCalendar(t).hasDuration(t)
            }, calculateEndDate: function (t) {
                t = this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper, arguments);
                return this._getCalendar(t).calculateEndDate(t)
            }
        }, t.exports = a
    }, function (t, e) {
        t.exports = function () {
            var t = {};
            return {
                getCalendarIdFromMultipleResources: function (e, n) {
                    var i = function (t) {
                        return t.map(function (t) {
                            return t && t.resource_id ? t.resource_id : t
                        }).sort().join("-")
                    }(e);
                    if (e.length) {
                        if (1 === e.length) return n.getResourceCalendar(i).id;
                        if (t[i]) return t[i].id;
                        var r = function (t, e) {
                            return e.mergeCalendars(t.map(function (t) {
                                var n = t && t.resource_id ? t.resource_id : t;
                                return e.getResourceCalendar(n)
                            }))
                        }(e, n);
                        return t[i] = r, n.addCalendar(r)
                    }
                    return null
                }
            }
        }
    }, function (t, e) {
        t.exports = {
            isLegacyResourceCalendarFormat: function (t) {
                if (!t) return !1;
                for (var e in t) if (t[e] && "object" == typeof t[e]) return !0;
                return !1
            }, getResourceProperty: function (t) {
                var e = t.resource_calendars, n = t.resource_property;
                if (this.isLegacyResourceCalendarFormat(e)) for (var i in t) {
                    n = i;
                    break
                }
                return n
            }, getCalendarIdFromLegacyConfig: function (t, e) {
                if (e) for (var n in e) {
                    var i = e[n];
                    if (t[n]) {
                        var r = i[t[n]];
                        if (r) return r
                    }
                }
                return null
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t() {
                this.clear()
            }

            return t.prototype.getItem = function (t, e) {
                var n = this._cache;
                if (n && n[t]) {
                    var i = n[t];
                    if (void 0 !== i[e]) return i[e]
                }
                return -1
            }, t.prototype.setItem = function (t, e, n) {
                if (t && e) {
                    var i = this._cache;
                    i && (i[t] || (i[t] = {}), i[t][e] = n)
                }
            }, t.prototype.clear = function () {
                this._cache = {}
            }, t
        }();
        e.WorkUnitsObjectCache = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t() {
                this.clear()
            }

            return t.prototype.getItem = function (t, e) {
                if (this._cache.has(t)) {
                    var n = this._cache.get(t);
                    if (n.has(e)) return n.get(e)
                }
                return -1
            }, t.prototype.setItem = function (t, e, n) {
                if (t && e) {
                    var i, r = this._cache;
                    r.has(t) ? i = r.get(t) : (i = new Map, r.set(t, i)), i.set(e, n)
                }
            }, t.prototype.clear = function () {
                this._cache = new Map
            }, t
        }();
        e.WorkUnitsMapCache = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(161), r = n(160);
        e.createCacheObject = function () {
            return "undefined" != typeof Map ? new i.WorkUnitsMapCache : new r.WorkUnitsObjectCache
        }
    }, function (t, e, n) {
        var i = n(162), r = n(0);

        function a(t, e) {
            this.argumentsHelper = e, this.$gantt = t, this._workingUnitsCache = i.createCacheObject(), this._worktime = null
        }

        a.prototype = {
            units: ["year", "month", "week", "day", "hour", "minute"], _getUnitOrder: function (t) {
                for (var e = 0, n = this.units.length; e < n; e++) if (this.units[e] == t) return e
            }, _timestamp: function (t) {
                var e = null;
                return t.day || 0 === t.day ? e = t.day : t.date && (e = Date.UTC(t.date.getFullYear(), t.date.getMonth(), t.date.getDate())), e
            }, _checkIfWorkingUnit: function (t, e, n) {
                return void 0 === n && (n = this._getUnitOrder(e)), void 0 === n || !(n && !this._isWorkTime(t, this.units[n - 1], n - 1)) && (!this["_is_work_" + e] || this["_is_work_" + e](t))
            }, _is_work_day: function (t) {
                var e = this._getWorkHours(t);
                return !!Array.isArray(e) && e.length > 0
            }, _is_work_hour: function (t) {
                for (var e = this._getWorkHours(t), n = t.getHours(), i = 0; i < e.length; i++) if (n >= e[i].startHour && n < e[i].endHour) return !0;
                return !1
            }, _getTimeOfDayStamp: function (t) {
                return 60 * t.getHours() * 60 + 60 * t.getMinutes()
            }, _is_work_minute: function (t) {
                for (var e = this._getWorkHours(t), n = this._getTimeOfDayStamp(t), i = 0; i < e.length; i++) if (n >= e[i].start && n < e[i].end) return !0;
                return !1
            }, _internDatesPull: {}, _nextDate: function (t, e, n) {
                return this.$gantt.date.add(t, n, e)
            }, _getWorkUnitsBetweenGeneric: function (t, e, n, i) {
                var r = this.$gantt.date, a = new Date(t), o = new Date(e);
                i = i || 1;
                var s, l, c = 0, u = null, d = !1;
                (s = r[n + "_start"](new Date(a))).valueOf() != a.valueOf() && (d = !0);
                var h = !1;
                (l = r[n + "_start"](new Date(e))).valueOf() != e.valueOf() && (h = !0);
                for (var f = !1; a.valueOf() < o.valueOf();) f = (u = this._nextDate(a, n, i)).valueOf() > o.valueOf(), this._isWorkTime(a, n) && ((d || h && f) && (s = r[n + "_start"](new Date(a)), l = r.add(s, i, n)), d ? (d = !1, u = this._nextDate(s, n, i), c += (l.valueOf() - a.valueOf()) / (l.valueOf() - s.valueOf())) : h && f ? (h = !1, c += (o.valueOf() - a.valueOf()) / (l.valueOf() - s.valueOf())) : c++), a = u;
                return c
            }, _getMinutesPerHour: function (t) {
                for (var e = this._getTimeOfDayStamp(t), n = this._getTimeOfDayStamp(this._nextDate(t, "hour", 1)), i = this._getWorkHours(t), r = 0; r < i.length; r++) {
                    var a = i[r];
                    if (e >= a.start && n <= a.end) return 60;
                    if (e < a.end && n > a.start) return (Math.min(n, a.end) - Math.max(e, a.start)) / 60
                }
                return 0
            }, _getMinutesPerDay: function (t) {
                var e = 0;
                return this._getWorkHours(t).forEach(function (t) {
                    e += t.durationMinutes
                }), e
            }, getHoursPerDay: function (t) {
                var e = 0;
                return this._getWorkHours(t).forEach(function (t) {
                    e += t.durationHours
                }), e
            }, _getWorkUnitsForRange: function (t, e, n, i) {
                var a, o = 0, s = new Date(t), l = new Date(e);
                for (a = "minute" == n ? r.bind(this._getMinutesPerDay, this) : r.bind(this.getHoursPerDay, this); s.valueOf() < l.valueOf();) this._isWorkTime(s, "day") && (o += a(s)), s = this._nextDate(s, "day", 1);
                return o / i
            }, _getWorkUnitsBetweenQuick: function (t, e, n, i) {
                var r = new Date(t), a = new Date(e);
                i = i || 1;
                var o = new Date(r), s = this.$gantt.date.add(this.$gantt.date.day_start(new Date(r)), 1, "day");
                if (a.valueOf() <= s.valueOf()) return this._getWorkUnitsBetweenGeneric(t, e, n, i);
                var l = this.$gantt.date.day_start(new Date(a)), c = a,
                    u = this._getWorkUnitsBetweenGeneric(o, s, n, i), d = this._getWorkUnitsBetweenGeneric(l, c, n, i);
                return u + this._getWorkUnitsForRange(s, l, n, i) + d
            }, getConfig: function () {
                return this._worktime
            }, _setConfig: function (t) {
                this._worktime = t, this._parseSettings(), this._workingUnitsCache.clear()
            }, _parseSettings: function () {
                var t = this.getConfig();
                for (var e in t.parsed = {
                    dates: {},
                    hours: null
                }, t.parsed.hours = this._parseHours(t.hours), t.dates) t.parsed.dates[e] = this._parseHours(t.dates[e])
            }, _tryChangeCalendarSettings: function (t) {
                var e = JSON.stringify(this.getConfig());
                return t(), !!this.hasWorkTime() || (this._setConfig(JSON.parse(e)), this._workingUnitsCache.clear(), !1)
            }, _arraysEqual: function (t, e) {
                if (t === e) return !0;
                if (!t || !e) return !1;
                if (t.length != e.length) return !1;
                for (var n = 0; n < t.length; ++n) if (t[n] !== e[n]) return !1;
                return !0
            }, equals: function (t) {
                if (!(t instanceof a)) return !1;
                var e = this.getConfig(), n = t.getConfig();
                if (!this._arraysEqual(e.hours, n.hours)) return !1;
                var i = Object.keys(e.dates), r = Object.keys(n.dates);
                if (i.sort(), r.sort(), !this._arraysEqual(i, r)) return !1;
                for (var o = 0; o < i.length; o++) {
                    var s = i[o], l = e.dates[s], c = e.dates[s];
                    if (l !== c && !(Array.isArray(l) && Array.isArray(c) && this._arraysEqual(l, c))) return !1
                }
                return !0
            }, getWorkHours: function () {
                var t = this.argumentsHelper.getWorkHoursArguments.apply(this.argumentsHelper, arguments);
                return this._getWorkHours(t.date, !1)
            }, _getWorkHours: function (t, e) {
                var n = this.getConfig();
                if (!1 !== e && (n = n.parsed), !t) return n.hours;
                var i = this._timestamp({date: t}), r = !0;
                return void 0 !== n.dates[i] ? r = n.dates[i] : void 0 !== n.dates[t.getDay()] && (r = n.dates[t.getDay()]), !0 === r ? n.hours : r || []
            }, _parseHours: function (t) {
                if (Array.isArray(t)) {
                    var e = [];
                    t.forEach(function (t) {
                        "number" == typeof t ? e.push(60 * t * 60) : "string" == typeof t && t.split("-").map(function (t) {
                            return t.trim()
                        }).forEach(function (t) {
                            var n = t.split(":").map(function (t) {
                                return t.trim()
                            }), i = parseInt(60 * n[0] * 60);
                            n[1] && (i += parseInt(60 * n[1])), n[2] && (i += parseInt(n[2])), e.push(i)
                        })
                    });
                    for (var n = [], i = 0; i < e.length; i += 2) {
                        var r = e[i], a = e[i + 1], o = a - r;
                        n.push({
                            start: r,
                            end: a,
                            startHour: Math.floor(r / 3600),
                            endHour: Math.ceil(a / 3600),
                            durationSeconds: o,
                            durationMinutes: o / 60,
                            durationHours: o / 3600
                        })
                    }
                    return n
                }
                return t
            }, setWorkTime: function (t) {
                return this._tryChangeCalendarSettings(r.bind(function () {
                    var e = void 0 === t.hours || t.hours, n = this._timestamp(t), i = this.getConfig();
                    null !== n ? i.dates[n] = e : i.hours = e, this._parseSettings(), this._workingUnitsCache.clear()
                }, this))
            }, unsetWorkTime: function (t) {
                return this._tryChangeCalendarSettings(r.bind(function () {
                    if (t) {
                        var e = this._timestamp(t);
                        null !== e && delete this.getConfig().dates[e]
                    } else this.reset_calendar();
                    this._workingUnitsCache.clear()
                }, this))
            }, _isWorkTime: function (t, e, n) {
                var i = String(t.valueOf()), r = -1;
                return this._workingUnitsCache.getItem(e, i), -1 == r && (r = this._checkIfWorkingUnit(t, e, n)), r
            }, isWorkTime: function () {
                var t = this.argumentsHelper.isWorkTimeArguments.apply(this.argumentsHelper, arguments);
                return this._isWorkTime(t.date, t.unit)
            }, calculateDuration: function () {
                var t = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments);
                return !!t.unit && this._calculateDuration(t.start_date, t.end_date, t.unit, t.step)
            }, _calculateDuration: function (t, e, n, i) {
                var r = 0;
                return r = "hour" == n || "minute" == n ? this._getWorkUnitsBetweenQuick(t, e, n, i) : this._getWorkUnitsBetweenGeneric(t, e, n, i), Math.round(r)
            }, hasDuration: function () {
                var t = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments),
                    e = t.start_date, n = t.end_date, i = t.unit, r = t.step;
                if (!i) return !1;
                var a = new Date(e), o = new Date(n);
                for (r = r || 1; a.valueOf() < o.valueOf();) {
                    if (this._isWorkTime(a, i)) return !0;
                    a = this._nextDate(a, i, r)
                }
                return !1
            }, calculateEndDate: function () {
                var t = this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper, arguments),
                    e = t.start_date, n = t.duration, i = t.unit, r = t.step;
                if (!i) return !1;
                var a = t.duration >= 0 ? 1 : -1;
                return n = Math.abs(1 * n), this._calculateEndDate(e, n, i, r * a)
            }, _calculateEndDate: function (t, e, n, i) {
                return !!n && (1 == i && "minute" == n ? this._calculateMinuteEndDate(t, e, i) : 1 == i && "hour" == n ? this._calculateHourEndDate(t, e, i) : this._addInterval(t, e, n, i, null).end)
            }, _addInterval: function (t, e, n, i, r) {
                for (var a = 0, o = t; a < e && (!r || !r(o));) {
                    var s = this._nextDate(o, n, i);
                    this._isWorkTime(i > 0 ? new Date(s.valueOf() - 1) : new Date(s.valueOf() + 1), n) && a++, o = s
                }
                return {end: o, start: t, added: a}
            }, _calculateHourEndDate: function (t, e, n) {
                var i = new Date(t), r = 0;
                n = n || 1, e = Math.abs(1 * e);
                var a = this._addInterval(i, e, "hour", n, function (t) {
                    return !(t.getHours() || t.getMinutes() || t.getSeconds() || t.getMilliseconds())
                });
                if (r = a.added, i = a.end, (c = e - r) && c > 24) {
                    for (var o = i; r < e;) {
                        var s = this._nextDate(o, "day", n);
                        if (s.setHours(0), s.setMinutes(0), s.setSeconds(0), this._isWorkTime(n > 0 ? new Date(s.valueOf() - 1) : new Date(s.valueOf() + 1), "day")) {
                            var l = this.getHoursPerDay(o);
                            if (r + l >= e) break;
                            r += l
                        }
                        o = s
                    }
                    i = o
                }
                if (r < e) {
                    var c = e - r;
                    i = (a = this._addInterval(i, c, "hour", n, null)).end
                }
                return i
            }, _calculateMinuteEndDate: function (t, e, n) {
                var i = new Date(t), r = 0;
                n = n || 1, e = Math.abs(1 * e);
                var a = this._addInterval(i, e, "minute", n, function (t) {
                    return !(t.getMinutes() || t.getSeconds() || t.getMilliseconds())
                });
                for (r = a.added, i = a.end; r < e;) {
                    var o = e - r;
                    if (this._isWorkTime(i, "hour")) {
                        var s = this._getMinutesPerHour(i);
                        if (!(s <= o)) break;
                        r += s, i = this._nextDate(i, "hour", n)
                    } else i = this._getClosestWorkTimeFuture(i, "hour")
                }
                if (r < e) {
                    var l = e - r;
                    i = (a = this._addInterval(i, l, "minute", n, null)).end
                }
                return i
            }, getClosestWorkTime: function () {
                var t = this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper, arguments);
                return this._getClosestWorkTime(t.date, t.unit, t.dir)
            }, _getClosestWorkTime: function (t, e, n) {
                var i = new Date(t);
                if (this._isWorkTime(i, e)) return i;
                if (i = this.$gantt.date[e + "_start"](i), "any" != n && n) i = "past" == n ? this._getClosestWorkTimePast(i, e) : this._getClosestWorkTimeFuture(i, e); else {
                    var r = this._getClosestWorkTimeFuture(i, e), a = this._getClosestWorkTimePast(i, e);
                    i = Math.abs(r - t) <= Math.abs(t - a) ? r : a
                }
                return i
            }, _getClosestWorkTimeFuture: function (t, e) {
                return this._getClosestWorkTimeGeneric(t, e, 1)
            }, _getClosestWorkTimePast: function (t, e) {
                var n = this._getClosestWorkTimeGeneric(t, e, -1);
                return this.$gantt.date.add(n, 1, e)
            }, _getClosestWorkTimeGeneric: function (t, e, n) {
                for (var i = this._getUnitOrder(e), r = this.units[i - 1], a = t, o = 0; !this._isWorkTime(a, e) && (!r || this._isWorkTime(a, r) || (a = n > 0 ? this._getClosestWorkTimeFuture(a, r) : this._getClosestWorkTimePast(a, r), !this._isWorkTime(a, e)));) {
                    if (++o > 3e3) return this.$gantt.assert(!1, "Invalid working time check"), !1;
                    var s = a.getTimezoneOffset();
                    a = this.$gantt.date.add(a, n, e), a = this.$gantt._correct_dst_change(a, s, n, e), this.$gantt.date[e + "_start"] && (a = this.$gantt.date[e + "_start"](a))
                }
                return a
            }, hasWorkTime: function () {
                var t = this.getConfig(), e = t.dates, n = [];
                for (var i in t.dates) Number(i) > 6 && n.push(Number(i));
                var r = this._checkWorkHours(t.hours), a = !1;
                return [0, 1, 2, 3, 4, 5, 6].forEach(function (t) {
                    if (!a) {
                        var n = e[t];
                        !0 === n ? a = r : Array.isArray(n) && (a = this._checkWorkHours(n))
                    }
                }), a
            }, _checkWorkHours: function (t) {
                if (0 === t.length) return !1;
                for (var e = !1, n = 0; n < t.length; n += 2) t[n] !== t[n + 1] && (e = !0);
                return e
            }
        }, t.exports = a
    }, function (t, e, n) {
        var i = n(0);

        function r() {
        }

        r.prototype = {
            _getIntervals: function (t) {
                for (var e = [], n = 0; n < t.length; n += 2) e.push({start: t[n], end: t[n + 1]});
                return e
            }, _toHoursArray: function (t) {
                var e = [];

                function n(t) {
                    var e = Math.floor(t / 3600), n = t - 60 * e * 60;
                    return e + ":" + function (t) {
                        var e = String(t);
                        return e.length < 2 && (e = "0" + e), e
                    }(Math.floor(n / 60))
                }

                for (var i = 0; i < t.length; i++) e.push(n(t[i].start) + "-" + n(t[i].end));
                return e
            }, _intersectHourRanges: function (t, e) {
                var n = [], i = t.length > e.length ? t : e, r = t === i ? e : t;
                i = i.slice(), r = r.slice();
                n = [];
                for (var a = 0; a < i.length; a++) for (var o = i[a], s = 0; s < r.length; s++) {
                    var l = r[s];
                    l.start < o.end && l.end > o.start && (n.push({
                        start: Math.max(o.start, l.start),
                        end: Math.min(o.end, l.end)
                    }), o.end > l.end && (r.splice(s, 1), s--, a--))
                }
                return n
            }, _mergeAdjacentIntervals: function (t) {
                var e = t.slice();
                e.sort(function (t, e) {
                    return t.start - e.start
                });
                for (var n = e[0], i = 1; i < e.length; i++) {
                    var r = e[i];
                    r.start <= n.end ? (r.end > n.end && (n.end = r.end), e.splice(i, 1), i--) : n = r
                }
                return e
            }, _mergeHoursConfig: function (t, e) {
                return this._mergeAdjacentIntervals(this._intersectHourRanges(t, e))
            }, merge: function (t, e) {
                var n = i.copy(t.getConfig().parsed), r = i.copy(e.getConfig().parsed),
                    a = {hours: this._toHoursArray(this._mergeHoursConfig(n.hours, r.hours)), dates: {}};
                for (var o in n.dates) {
                    var s = n.dates[o], l = r.dates[o];
                    if (s && l) if (Array.isArray(s) || Array.isArray(l)) {
                        var c = Array.isArray(s) ? s : n.hours, u = Array.isArray(l) ? l : r.hours;
                        a.dates[o] = this._toHoursArray(this._mergeHoursConfig(c, u))
                    } else a.dates[o] = !0; else a.dates[o] = !1
                }
                return a
            }
        }, t.exports = r
    }, function (t, e, n) {
        var i = n(0), r = n(31), a = n(164), o = n(163), s = n(159), l = n(158)();

        function c(t) {
            this.$gantt = t, this._calendars = {}
        }

        c.prototype = {
            _calendars: {},
            _convertWorkTimeSettings: function (t) {
                var e = t.days;
                if (e && !t.dates) {
                    t.dates = t.dates || {};
                    for (var n = 0; n < e.length; n++) t.dates[n] = e[n], e[n] instanceof Array || (t.dates[n] = !!e[n])
                }
                return delete t.days, t
            },
            mergeCalendars: function () {
                var t = [], e = arguments;
                if (Array.isArray(e[0])) t = e[0].slice(); else for (var n = 0; n < arguments.length; n++) t.push(arguments[n]);
                var i, r = new a;
                return t.forEach(function (t) {
                    i = i ? this._createCalendarFromConfig(r.merge(i, t)) : t
                }.bind(this)), this.createCalendar(i)
            },
            _createCalendarFromConfig: function (t) {
                var e = new o(this.$gantt, r(this.$gantt));
                return e.id = String(i.uid()), e._setConfig(this._convertWorkTimeSettings(t)), e
            },
            createCalendar: function (t) {
                var e;
                t || (t = {}), e = t.getConfig ? i.copy(t.getConfig()) : t.worktime ? i.copy(t.worktime) : i.copy(t);
                var n = i.copy(this.defaults.fulltime.worktime);
                return i.mixin(e, n), this._createCalendarFromConfig(e)
            },
            getCalendar: function (t) {
                return t = t || "global", this.createDefaultCalendars(), this._calendars[t]
            },
            getCalendars: function () {
                var t = [];
                for (var e in this._calendars) t.push(this.getCalendar(e));
                return t
            },
            _getOwnCalendar: function (t) {
                var e = this.$gantt.config;
                if (t[e.calendar_property]) return this.getCalendar(t[e.calendar_property]);
                if (e.resource_calendars) {
                    var n = s.getResourceProperty(e);
                    if (Array.isArray(t[n])) e.dynamic_resource_calendars && (i = l.getCalendarIdFromMultipleResources(t[n], this)); else if (s.isLegacyResourceCalendarFormat(e.resource_calendars)) var i = s.getCalendarIdFromLegacyConfig(t, e.resource_calendars); else if (n && t[n] && e.resource_calendars[t[n]]) var r = this.getResourceCalendar(t[n]);
                    if (i && (r = this.getCalendar(i)), r) return r
                }
                return null
            },
            getResourceCalendar: function (t) {
                if (null === t || void 0 === t) return this.getCalendar();
                var e = null;
                e = "number" == typeof t || "string" == typeof t ? t : t.id || t.key;
                var n = this.$gantt.config.resource_calendars, i = null;
                if (n) {
                    if (s.isLegacyResourceCalendarFormat(n)) {
                        for (var r in n) if (n[r][e]) {
                            i = n[r][e];
                            break
                        }
                    } else i = n[e];
                    if (i) return this.getCalendar(i)
                }
                return this.getCalendar()
            },
            getTaskCalendar: function (t) {
                var e, n = this.$gantt;
                if (null === t || void 0 === t) return this.getCalendar();
                if (!(e = "number" != typeof t && "string" != typeof t || !n.isTaskExists(t) ? t : n.getTask(t))) return this.getCalendar();
                var i = this._getOwnCalendar(e);
                if (!i && n.config.inherit_calendar && n.isTaskExists(e.parent)) {
                    var r = !1;
                    n.eachParent(function (t) {
                        r || n.isSummaryTask(t) && (i = this._getOwnCalendar(t)) && (r = !0)
                    }, e.id, this)
                }
                return i || this.getCalendar()
            },
            addCalendar: function (t) {
                if (!this.isCalendar(t)) {
                    var e = t.id;
                    (t = this.createCalendar(t)).id = e
                }
                if (t._tryChangeCalendarSettings(function () {
                })) {
                    var n = this.$gantt.config;
                    return t.id = t.id || i.uid(), this._calendars[t.id] = t, n.worktimes || (n.worktimes = {}), n.worktimes[t.id] = t.getConfig(), t.id
                }
                return this.$gantt.callEvent("onCalendarError", [{message: "Invalid calendar settings, no worktime available"}, t]), null
            },
            deleteCalendar: function (t) {
                var e = this.$gantt.config;
                return !!t && (!!this._calendars[t] && (delete this._calendars[t], e.worktimes && e.worktimes[t] && delete e.worktimes[t], !0))
            },
            restoreConfigCalendars: function (t) {
                for (var e in t) if (!this._calendars[e]) {
                    var n = t[e], i = this.createCalendar(n);
                    i.id = e, this.addCalendar(i)
                }
            },
            defaults: {
                global: {id: "global", worktime: {hours: [8, 12, 13, 17], days: [0, 1, 1, 1, 1, 1, 0]}},
                fulltime: {id: "fulltime", worktime: {hours: [0, 24], days: [1, 1, 1, 1, 1, 1, 1]}}
            },
            createDefaultCalendars: function () {
                var t = this.$gantt.config;
                this.restoreConfigCalendars(this.defaults), this.restoreConfigCalendars(t.worktimes)
            },
            isCalendar: function (t) {
                return [t.isWorkTime, t.setWorkTime, t.getWorkHours, t.unsetWorkTime, t.getClosestWorkTime, t.calculateDuration, t.hasDuration, t.calculateEndDate].every(function (t) {
                    return t instanceof Function
                })
            }
        }, t.exports = c
    }, function (t, e, n) {
        var i = n(165), r = n(157), a = n(155), o = n(0);
        t.exports = function (t) {
            var e = new i(t), n = new r(e), s = a.create(e, n);
            o.mixin(t, s)
        }
    }, function (t, e, n) {
        var i = n(3);
        t.exports = function (t) {
            function e(e) {
                throw t.assert(!1, "Can't parse data: incorrect value of gantt.parse or gantt.load method. Actual argument value: " + JSON.stringify(e)), new Error("Invalid argument for gantt.parse or gantt.load. An object or a JSON string of format https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#json is expected. Actual argument value: " + JSON.stringify(e))
            }

            t.load = function (e, n, i) {
                this._load_url = e, this.assert(arguments.length, "Invalid load arguments");
                var r = "json", a = null;
                return arguments.length >= 3 ? (r = n, a = i) : "string" == typeof arguments[1] ? r = arguments[1] : "function" == typeof arguments[1] && (a = arguments[1]), this._load_type = r, this.callEvent("onLoadStart", [e, r]), this.ajax.get(e, t.bind(function (t) {
                    this.on_load(t, r), this.callEvent("onLoadEnd", [e, r]), "function" == typeof a && a.call(this)
                }, this))
            }, t.parse = function (t, e) {
                this.on_load({xmlDoc: {responseText: t}}, e)
            }, t.serialize = function (t) {
                return this[t = t || "json"].serialize()
            }, t.on_load = function (t, e) {
                if (t.xmlDoc && 404 === t.xmlDoc.status) this.assert(!1, "Failed to load the data from <a href='" + t.xmlDoc.responseURL + "' target='_blank'>" + t.xmlDoc.responseURL + "</a>, server returns 404"); else {
                    this.callEvent("onBeforeParse", []), e || (e = "json"), this.assert(this[e], "Invalid data type:'" + e + "'");
                    var n = t.xmlDoc.responseText, i = this[e].parse(n, t);
                    this._process_loading(i)
                }
            }, t._process_loading = function (t) {
                t.collections && this._load_collections(t.collections), this.$data.tasksStore.parse(t.data || t.tasks);
                var e = t.links || (t.collections ? t.collections.links : []);
                this.$data.linksStore.parse(e), this.callEvent("onParse", []), this.render()
            }, t._load_collections = function (t) {
                var e = !1;
                for (var n in t) if (t.hasOwnProperty(n)) {
                    e = !0;
                    var i = t[n], r = this.serverList[n];
                    if (!r) continue;
                    r.splice(0, r.length);
                    for (var a = 0; a < i.length; a++) {
                        var o = i[a], s = this.copy(o);
                        for (var l in s.key = s.value, o) if (o.hasOwnProperty(l)) {
                            if ("value" == l || "label" == l) continue;
                            s[l] = o[l]
                        }
                        r.push(s)
                    }
                }
                e && this.callEvent("onOptionsLoad", [])
            }, t.attachEvent("onBeforeTaskDisplay", function (t, e) {
                return !e.$ignore
            }), t.json = {
                parse: function (n) {
                    if (n || e(n), "string" == typeof n) if (void 0 != typeof JSON) try {
                        n = JSON.parse(n)
                    } catch (t) {
                        e(n)
                    } else t.assert(!1, "JSON is not supported");
                    return n.data || n.tasks || e(n), n.dhx_security && (t.security_key = n.dhx_security), n
                }, serializeTask: function (t) {
                    return this._copyObject(t)
                }, serializeLink: function (t) {
                    return this._copyLink(t)
                }, _copyLink: function (t) {
                    var e = {};
                    for (var n in t) e[n] = t[n];
                    return e
                }, _copyObject: function (e) {
                    var n = {};
                    for (var r in e) "$" != r.charAt(0) && (n[r] = e[r], i.isDate(n[r]) && (n[r] = t.defined(t.templates.xml_format) ? t.templates.xml_format(n[r]) : t.templates.format_date(n[r])));
                    return n
                }, serialize: function () {
                    var e = [], n = [];
                    t.eachTask(function (n) {
                        t.resetProjectDates(n), e.push(this.serializeTask(n))
                    }, t.config.root_id, this);
                    for (var i = t.getLinks(), r = 0; r < i.length; r++) n.push(this.serializeLink(i[r]));
                    return {data: e, links: n}
                }
            }, t.xml = {
                _xmlNodeToJSON: function (t, e) {
                    for (var n = {}, i = 0; i < t.attributes.length; i++) n[t.attributes[i].name] = t.attributes[i].value;
                    if (!e) {
                        for (i = 0; i < t.childNodes.length; i++) {
                            var r = t.childNodes[i];
                            1 == r.nodeType && (n[r.tagName] = r.firstChild ? r.firstChild.nodeValue : "")
                        }
                        n.text || (n.text = t.firstChild ? t.firstChild.nodeValue : "")
                    }
                    return n
                }, _getCollections: function (e) {
                    for (var n = {}, i = t.ajax.xpath("//coll_options", e), r = 0; r < i.length; r++) for (var a = n[i[r].getAttribute("for")] = [], o = t.ajax.xpath(".//item", i[r]), s = 0; s < o.length; s++) {
                        for (var l = o[s].attributes, c = {
                            key: o[s].getAttribute("value"),
                            label: o[s].getAttribute("label")
                        }, u = 0; u < l.length; u++) {
                            var d = l[u];
                            "value" != d.nodeName && "label" != d.nodeName && (c[d.nodeName] = d.nodeValue)
                        }
                        a.push(c)
                    }
                    return n
                }, _getXML: function (e, n, i) {
                    i = i || "data", n.getXMLTopNode || (n = t.ajax.parse(n));
                    var r = t.ajax.xmltop(i, n.xmlDoc);
                    r && r.tagName == i || function (e) {
                        throw t.assert(!1, "Can't parse data: incorrect value of gantt.parse or gantt.load method. Actual argument value: " + JSON.stringify(e)), new Error("Invalid argument for gantt.parse or gantt.load. An XML of format https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#xmldhtmlxgantt20 is expected. Actual argument value: " + JSON.stringify(e))
                    }(e);
                    var a = r.getAttribute("dhx_security");
                    return a && (t.security_key = a), r
                }, parse: function (e, n) {
                    n = this._getXML(e, n);
                    for (var i = {}, r = i.data = [], a = t.ajax.xpath("//task", n), o = 0; o < a.length; o++) r[o] = this._xmlNodeToJSON(a[o]);
                    return i.collections = this._getCollections(n), i
                }, _copyLink: function (t) {
                    return "<item id='" + t.id + "' source='" + t.source + "' target='" + t.target + "' type='" + t.type + "' />"
                }, _copyObject: function (t) {
                    return "<task id='" + t.id + "' parent='" + (t.parent || "") + "' start_date='" + t.start_date + "' duration='" + t.duration + "' open='" + !!t.open + "' progress='" + t.progress + "' end_date='" + t.end_date + "'><![CDATA[" + t.text + "]]></task>"
                }, serialize: function () {
                    for (var e = [], n = [], i = t.json.serialize(), r = 0, a = i.data.length; r < a; r++) e.push(this._copyObject(i.data[r]));
                    for (r = 0, a = i.links.length; r < a; r++) n.push(this._copyLink(i.links[r]));
                    return "<data>" + e.join("") + "<coll_options for='links'>" + n.join("") + "</coll_options></data>"
                }
            }, t.oldxml = {
                parse: function (e, n) {
                    n = t.xml._getXML(e, n, "projects");
                    for (var i = {collections: {links: []}}, r = i.data = [], a = t.ajax.xpath("//task", n), o = 0; o < a.length; o++) {
                        r[o] = t.xml._xmlNodeToJSON(a[o]);
                        var s = a[o].parentNode;
                        "project" == s.tagName ? r[o].parent = "project-" + s.getAttribute("id") : r[o].parent = s.parentNode.getAttribute("id")
                    }
                    a = t.ajax.xpath("//project", n);
                    for (o = 0; o < a.length; o++) {
                        (l = t.xml._xmlNodeToJSON(a[o], !0)).id = "project-" + l.id, r.push(l)
                    }
                    for (o = 0; o < r.length; o++) {
                        var l;
                        (l = r[o]).start_date = l.startdate || l.est, l.end_date = l.enddate, l.text = l.name, l.duration = l.duration / 8, l.open = 1, l.duration || l.end_date || (l.duration = 1), l.predecessortasks && i.collections.links.push({
                            target: l.id,
                            source: l.predecessortasks,
                            type: t.config.links.finish_to_start
                        })
                    }
                    return i
                }, serialize: function () {
                    t.message("Serialization to 'old XML' is not implemented")
                }
            }, t.serverList = function (t, e) {
                return e ? this.serverList[t] = e.slice(0) : this.serverList[t] || (this.serverList[t] = []), this.serverList[t]
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.isReadonly = function (t) {
                return (!t || !t[this.config.editable_property]) && (t && t[this.config.readonly_property] || this.config.readonly)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.getGridColumn = function (e) {
                for (var n = t.config.columns, i = 0; i < n.length; i++) if (n[i].name == e) return n[i];
                return null
            }, t.getGridColumns = function () {
                return t.config.columns.slice()
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t) {
                this._scrollOrder = 0;
                var e = t.gantt, n = t.grid, i = t.dnd, r = t.getCurrentX;
                this.$gantt = e, this.$grid = n, this._dnd = i, this.getCurrentX = r, this._scrollView = this.$gantt.$ui.getView(this.$grid.$config.scrollX), this.attachEvents()
            }

            return t.prototype.attachEvents = function () {
                var t = this;
                this.isScrollable() && (this._dnd.attachEvent("onDragMove", function (e, n) {
                    var i = t.$grid.$grid.getBoundingClientRect(), r = i.right, a = i.left,
                        o = t.getCurrentX(n.clientX);
                    return o >= r - 20 && (t.autoscrollRight(), t.autoscrollStart()), o <= a + 20 && (t.autoscrollLeft(), t.autoscrollStart()), o < r - 20 && o > a + 20 && t.autoscrollStop(), !0
                }), this._dnd.attachEvent("onDragEnd", function () {
                    t.autoscrollStop()
                }))
            }, t.prototype.autoscrollStart = function () {
                var t = this;
                if (0 !== this._scrollOrder) {
                    var e = 10 * this._scrollOrder, n = this._scrollView.getScrollState();
                    this._scrollView.scrollTo(n.position + e), setTimeout(function () {
                        t.autoscrollStart()
                    }, 50)
                }
            }, t.prototype.autoscrollRight = function () {
                this._scrollOrder = 1
            }, t.prototype.autoscrollLeft = function () {
                this._scrollOrder = -1
            }, t.prototype.autoscrollStop = function () {
                this._scrollOrder = 0
            }, t.prototype.getCorrection = function () {
                return this.isScrollable() ? this._scrollView.getScrollState().position : 0
            }, t.prototype.isScrollable = function () {
                return !!this._scrollView
            }, t
        }();
        e.default = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(1), r = n(170), a = function () {
            function t(t, e) {
                var n = this;
                this._targetMarker = null, this.calculateCurrentPosition = function (t) {
                    var e = n.$grid.$grid.getBoundingClientRect(), i = e.right, r = e.left, a = t;
                    return a > i && (a = i), a < r && (a = r), a
                }, this.$gantt = t, this.$grid = e
            }

            return t.prototype.init = function () {
                var t = this.$gantt.$services.getService("dnd");
                this._dnd = new t(this.$grid.$grid_scale, {updates_per_second: 60}), this._scrollableGrid = new r.default({
                    gantt: this.$gantt,
                    grid: this.$grid,
                    dnd: this._dnd,
                    getCurrentX: this.calculateCurrentPosition
                }), this.attachEvents()
            }, t.prototype.attachEvents = function () {
                var t = this;
                this._dnd.attachEvent("onBeforeDragStart", function (e, n) {
                    return t._gridConfig = t.$grid.$getConfig(), t._originAutoscroll = t.$gantt.config.autoscroll, t.$gantt.config.autoscroll = !1, t._draggedCell = t.$gantt.utils.dom.closest(n.target, ".gantt_grid_head_cell"), !!t._draggedCell
                }), this._dnd.attachEvent("onAfterDragStart", function (e, n) {
                    t._dnd.config.column = t._draggedCell.getAttribute("data-column-id"), t._dnd.config.marker.innerHTML = t._draggedCell.outerHTML, t._dnd.config.marker.classList.add("gantt_column_drag_marker"), t._dnd.config.marker.style.height = t._gridConfig.scale_height + "px", t._dnd.config.marker.style.lineHeight = t._gridConfig.scale_height + "px", t._draggedCell.classList.add("gantt_grid_head_cell_dragged")
                }), this._dnd.attachEvent("onDragMove", function (e, n) {
                    t._dragX = n.clientX;
                    var i = t.calculateCurrentPosition(n.clientX);
                    return t.setMarkerPosition(i), t.drawTargetMarker(t.findColumnsIndexes()), !0
                }), this._dnd.attachEvent("onDragEnd", function () {
                    t.$gantt.config.autoscroll = t._originAutoscroll, t._draggedCell.classList.remove("gantt_grid_head_cell_dragged"), t.cleanTargetMarker(), t.reorderColumns()
                })
            }, t.prototype.reorderColumns = function () {
                var t = this.findColumnsIndexes(), e = t.targetIndex, n = t.draggedIndex;
                if (e !== n) {
                    var i = this.$grid.$getConfig().columns, r = i[n], a = i[e];
                    !1 !== this.$grid.callEvent("onBeforeColumnReorder", [{
                        draggedColumn: r,
                        targetColumn: a,
                        draggedIndex: n,
                        targetIndex: e
                    }]) && (i.splice(n, 1), i.splice(e, 0, r), this.$gantt.render(), this.$grid.callEvent("onAfterColumnReorder", [{
                        draggedColumn: r,
                        targetColumn: a,
                        draggedIndex: n,
                        targetIndex: e
                    }]))
                }
            }, t.prototype.findColumnsIndexes = function () {
                var t, e, n, i, r, a = this._dnd.config.column, o = this.$grid.$getConfig().columns,
                    s = {startX: 0, endX: 0}, l = 0, c = o.length - 1, u = function (t, e) {
                        return t <= e
                    }, d = function (t) {
                        return ++t
                    };
                this.$gantt.config.rtl && (l = o.length - 1, c = 0, u = function (t, e) {
                    return t >= e
                }, d = function (t) {
                    return --t
                });
                for (var h = this._dragX - this.$grid.$grid.getBoundingClientRect().left + this._scrollableGrid.getCorrection(), f = l; u(f, c) && (void 0 === t || void 0 === e); f = d(f)) s.startX = s.endX, s.endX += o[f].width, h >= s.startX && h <= s.endX && (t = f, n = s.startX, i = s.endX, r = (h - s.startX) / (s.endX - s.startX)), a === o[f].name && (e = f);
                return {targetIndex: t, draggedIndex: e, xBefore: n, xAfter: i, columnRelativePos: r}
            }, t.prototype.setMarkerPosition = function (t, e) {
                void 0 === e && (e = 10);
                var n = this._dnd.config.marker, i = this._dnd._obj.getBoundingClientRect();
                n.style.top = i.y + e + "px", n.style.left = t + "px"
            }, t.prototype.drawTargetMarker = function (t) {
                var e, n = t.targetIndex, r = t.draggedIndex, a = t.xBefore, o = t.xAfter, s = t.columnRelativePos;
                this._targetMarker || (this._targetMarker = document.createElement("div"), i.addClassName(this._targetMarker, "gantt_grid_target_marker"), this._targetMarker.style.display = "none", this._targetMarker.style.height = this._gridConfig.scale_height + "px"), this._targetMarker.parentNode || this.$grid.$grid_scale.appendChild(this._targetMarker), e = n > r ? o : n < r ? a : s > .5 ? o : a, this._targetMarker.style.left = e + "px", this._targetMarker.style.display = "block"
            }, t.prototype.cleanTargetMarker = function () {
                this._targetMarker && this._targetMarker.parentNode && this.$grid.$grid_scale.removeChild(this._targetMarker), this._targetMarker = null
            }, t
        }();
        e.default = a
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                init: function () {
                }, doOnRender: function () {
                }
            }
        }
    }, function (t, e, n) {
        var i = n(21);
        t.exports = function (t) {
            n(169)(t), i.prototype.getGridColumns = function () {
                for (var t = this.$getConfig().columns, e = [], n = 0; n < t.length; n++) t[n].hide || e.push(t[n]);
                return e
            }
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(36), i = {};
            t.attachEvent("onClearAll", function () {
                i = {}
            });
            var r = e.prototype.hasChild;
            t.$data.tasksStore.hasChild = function (e) {
                return !!r.apply(this, arguments) || !!this.exists(e) && this.getItem(e)[t.config.branch_loading_property]
            }, t.attachEvent("onTaskOpened", function (e) {
                if (t.config.branch_loading && t._load_url && function (e) {
                    return !(!t.config.branch_loading || !t._load_url || i[e] || t.getChildren(e).length || !t.hasChild(e))
                }(e)) {
                    var n = t._load_url, r = (n = n.replace(/(\?|&)?parent_id=.+&?/, "")).indexOf("?") >= 0 ? "&" : "?",
                        a = t.getScrollState().y || 0,
                        o = {taskId: e, url: n + r + "parent_id=" + encodeURIComponent(e)};
                    if (!1 === t.callEvent("onBeforeBranchLoading", [o])) return;
                    t.load(o.url, this._load_type, function () {
                        a && t.scrollTo(null, a), t.callEvent("onAfterBranchLoading", [o])
                    }), i[e] = !0
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t) {
                var e = this;
                this.format = function (t) {
                    return e._getWBSCode(t.source)
                }, this.canParse = function (t) {
                    return e._linkReg.test(t)
                }, this.parse = function (t) {
                    if (!e.canParse(t)) return null;
                    var n = e._linkReg.exec(t)[0].trim();
                    return {
                        id: void 0,
                        source: e._findSource(n) || null,
                        target: null,
                        type: e._gantt.config.links.finish_to_start,
                        lag: 0
                    }
                }, this._getWBSCode = function (t) {
                    var n = e._gantt.getTask(t);
                    return e._gantt.getWBSCode(n)
                }, this._findSource = function (t) {
                    var n = new RegExp("^[0-9.]+", "i");
                    if (n.exec(t)) {
                        var i = n.exec(t)[0], r = e._gantt.getTaskByWBSCode(i);
                        if (r) return r.id
                    }
                    return null
                }, this._linkReg = /^[0-9\.]+/, this._gantt = t
            }

            return t.create = function (e, n) {
                return void 0 === e && (e = null), new t(n)
            }, t
        }();
        e.default = i
    }, function (t, e, n) {
        var i = n(33).default, r = n(175).default;
        t.exports = function (t) {
            t.ext.formatters = {
                durationFormatter: function (e) {
                    return e || (e = {}), e.store || (e.store = t.config.duration_unit), e.enter || (e.enter = t.config.duration_unit), i.create(e, t)
                }, linkFormatter: function (e) {
                    return r.create(e, t)
                }
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            function e(e) {
                return function () {
                    return !t.config.auto_types || t.getTaskType(t.config.types.project) != t.config.types.project || e.apply(this, arguments)
                }
            }

            function n(e) {
                t.batchUpdate(function () {
                    !function e(n) {
                        !function (e) {
                            e = e.id || e;
                            var n = t.getTask(e), i = a(n);
                            !1 !== i && r(n, i)
                        }(n);
                        var i = t.getParent(n);
                        i != t.config.root_id && e(i)
                    }(e)
                })
            }

            var i;

            function r(e, n) {
                t.getState().group_mode || (e.type = n, t.updateTask(e.id))
            }

            function a(e) {
                var n = t.config.types, i = t.hasChild(e.id), r = t.getTaskType(e.type);
                return i && r === n.task ? n.project : !i && r === n.project && n.task
            }

            var o, s, l = !0;

            function c(e) {
                e != t.config.root_id && t.isTaskExists(e) && n(e)
            }

            t.attachEvent("onParse", e(function () {
                l = !1, t.batchUpdate(function () {
                    t.eachTask(function (t) {
                        var e = a(t);
                        !1 !== e && r(t, e)
                    })
                }), l = !0
            })), t.attachEvent("onAfterTaskAdd", e(function (t) {
                l && n(t)
            })), t.attachEvent("onAfterTaskUpdate", e(function (t) {
                l && n(t)
            })), t.attachEvent("onBeforeTaskDelete", e(function (e, n) {
                return i = t.getParent(e), !0
            })), t.attachEvent("onAfterTaskDelete", e(function (t, e) {
                c(i)
            })), t.attachEvent("onRowDragStart", e(function (e, n, i) {
                return o = t.getParent(e), !0
            })), t.attachEvent("onRowDragEnd", e(function (t, e) {
                c(o), n(t)
            })), t.attachEvent("onBeforeTaskMove", e(function (e, n, i) {
                return s = t.getParent(e), !0
            })), t.attachEvent("onAfterTaskMove", e(function (t, e, i) {
                document.querySelector(".gantt_drag_marker") || (c(s), n(t))
            }))
        }
    }, function (t, e) {
        t.exports = function (t) {
            function e(e) {
                return function () {
                    return !t.config.placeholder_task || e.apply(this, arguments)
                }
            }

            function n() {
                var e = t.getTaskBy("type", t.config.types.placeholder);
                if (!e.length || !t.isTaskExists(e[0].id)) {
                    var n = {
                        unscheduled: !0,
                        type: t.config.types.placeholder,
                        duration: 0,
                        text: t.locale.labels.new_task
                    };
                    if (!1 === t.callEvent("onTaskCreated", [n])) return;
                    t.addTask(n)
                }
            }

            function i(e) {
                var n = t.getTask(e);
                n.type == t.config.types.placeholder && (n.start_date && n.end_date && n.unscheduled && (n.unscheduled = !1), t.batchUpdate(function () {
                    var e = t.copy(n);
                    t.silent(function () {
                        t.deleteTask(n.id)
                    }), delete e["!nativeeditor_status"], e.type = t.config.types.task, e.id = t.uid(), t.addTask(e)
                }))
            }

            t.config.types.placeholder = "placeholder", t.attachEvent("onDataProcessorReady", e(function (n) {
                n && !n._silencedPlaceholder && (n._silencedPlaceholder = !0, n.attachEvent("onBeforeUpdate", e(function (e, i, r) {
                    return r.type != t.config.types.placeholder || (n.setUpdated(e, !1), !1)
                })))
            }));
            var r = !1;

            function a(e) {
                if (t.config.types.placeholder && t.isTaskExists(e) && t.getTask(e).type == t.config.types.placeholder) return !0;
                return !1
            }

            function o(t) {
                return !(!a(t.source) && !a(t.target))
            }

            t.attachEvent("onGanttReady", function () {
                r || (r = !0, t.attachEvent("onAfterTaskUpdate", e(i)), t.attachEvent("onAfterTaskAdd", e(function (e, i) {
                    i.type != t.config.types.placeholder && (t.getTaskBy("type", t.config.types.placeholder).forEach(function (e) {
                        t.silent(function () {
                            t.isTaskExists(e.id) && t.deleteTask(e.id)
                        })
                    }), n())
                })), t.attachEvent("onParse", e(n)))
            }), t.attachEvent("onLinkValidation", function (t) {
                return !o(t)
            }), t.attachEvent("onBeforeLinkAdd", function (t, e) {
                return !o(e)
            }), t.attachEvent("onBeforeUndoStack", function (e) {
                for (var n = 0; n < e.commands.length; n++) {
                    var i = e.commands[n];
                    "task" === i.entity && i.value.type === t.config.types.placeholder && (e.commands.splice(n, 1), n--)
                }
                return !0
            })
        }
    }, function (t, e, n) {
        var i = n(3);

        function r(t) {
            var e = {};
            t.$data.tasksStore.attachEvent("onStoreUpdated", function () {
                e = {}
            });
            var n = String(Math.random());

            function r(t) {
                return null === t ? n + String(t) : String(t)
            }

            function a(n, a) {
                var o, s = a.join("_") + "_" + n, l = {};
                return i.forEach(a, function (t) {
                    l[r(t)] = !0
                }), e[s] ? o = e[s] : (o = e[s] = [], t.eachTask(function (e) {
                    var a;
                    e.type != t.config.types.project && (n in e && (a = i.isArray(e[n]) ? e[n] : [e[n]], i.forEach(a, function (t) {
                        (l[r(t)] || t && l[r(t.resource_id)]) && o.push(e)
                    })))
                })), o
            }

            function o(e, n, i) {
                var r = t.config.resource_property, a = [];
                if (t.getDatastore("task").exists(n)) {
                    var o = t.getTask(n);
                    a = o[r] || []
                }
                Array.isArray(a) || (a = [a]);
                for (var s = 0; s < a.length; s++) a[s].resource_id == e && i.push({
                    task_id: o.id,
                    resource_id: a[s].resource_id,
                    value: a[s].value
                })
            }

            return {
                filterTasks: function (e, n) {
                    return "function" == typeof e ? function (e) {
                        var n = [];
                        return t.eachTask(function (t) {
                            e(t) && n.push(t)
                        }), n
                    }(e) : i.isArray(n) ? a(e, n) : a(e, [n])
                }, getResourceAssignments: function (e, n) {
                    var i = [], r = t.config.resource_property;
                    return void 0 !== n ? o(e, n, i) : t.getTaskBy(r, e).forEach(function (t) {
                        o(e, t.id, i)
                    }), i
                }
            }
        }

        t.exports = function (t) {
            var e = r(t);
            t.getTaskBy = e.filterTasks, t.getResourceAssignments = e.getResourceAssignments, t.config.resource_property = "owner_id", t.config.resource_store = "resource", t.config.resource_render_empty_cells = !1, t.templates.histogram_cell_class = function (t, e, n, i) {
            }, t.templates.histogram_cell_label = function (t, e, n, i) {
                return i.length + "/3"
            }, t.templates.histogram_cell_allocated = function (t, e, n, i) {
                return i.length / 3
            }, t.templates.histogram_cell_capacity = function (t, e, n, i) {
                return 0
            }, t.templates.resource_cell_class = function (t, e, n, i) {
                return i.length <= 1 ? "gantt_resource_marker_ok" : "gantt_resource_marker_overtime"
            }, t.templates.resource_cell_value = function (t, e, n, i) {
                return 8 * i.length
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = function (t) {
                return {
                    _needRecalc: !0, reset: function () {
                        this._needRecalc = !0
                    }, _isRecalcNeeded: function () {
                        return !this._isGroupSort() && this._needRecalc
                    }, _isGroupSort: function () {
                        return !!t.getState().group_mode
                    }, _getWBSCode: function (t) {
                        return t ? (this._isRecalcNeeded() && this._calcWBS(), t.$virtual ? "" : this._isGroupSort() ? t.$wbs || "" : (t.$wbs || (this.reset(), this._calcWBS()), t.$wbs)) : ""
                    }, _setWBSCode: function (t, e) {
                        t.$wbs = e
                    }, getWBSCode: function (t) {
                        return this._getWBSCode(t)
                    }, getByWBSCode: function (e) {
                        for (var n = e.split("."), i = t.config.root_id, r = 0; r < n.length; r++) {
                            var a = t.getChildren(i), o = 1 * n[r] - 1;
                            if (!t.isTaskExists(a[o])) return null;
                            i = a[o]
                        }
                        return t.isTaskExists(i) ? t.getTask(i) : null
                    }, _calcWBS: function () {
                        if (this._isRecalcNeeded()) {
                            var e = !0;
                            t.eachTask(function (n) {
                                if (e) return e = !1, void this._setWBSCode(n, "1");
                                var i = t.getPrevSibling(n.id);
                                if (null !== i) {
                                    var r = t.getTask(i).$wbs;
                                    r && ((r = r.split("."))[r.length - 1]++, this._setWBSCode(n, r.join(".")))
                                } else {
                                    var a = t.getParent(n.id);
                                    this._setWBSCode(n, t.getTask(a).$wbs + ".1")
                                }
                            }, t.config.root_id, this), this._needRecalc = !1
                        }
                    }
                }
            }(t);

            function n() {
                return e.reset(), !0
            }

            t.getWBSCode = function (t) {
                return e.getWBSCode(t)
            }, t.getTaskByWBSCode = function (t) {
                return e.getByWBSCode(t)
            }, t.attachEvent("onAfterTaskMove", n), t.attachEvent("onBeforeParse", n), t.attachEvent("onAfterTaskDelete", n), t.attachEvent("onAfterTaskAdd", n), t.attachEvent("onAfterSort", n)
        }
    }, function (t, e, n) {
        var i = n(14);

        function r(t) {
            var e = {}, n = !1;

            function r(t, n) {
                n = "function" == typeof n ? n : function () {
                }, e[t] || (e[t] = this[t], this[t] = n)
            }

            function a(t) {
                e[t] && (this[t] = e[t], e[t] = null)
            }

            function o() {
                for (var t in e) a.call(this, t)
            }

            function s(t) {
                try {
                    t()
                } catch (t) {
                    i.console.error(t)
                }
            }

            return t.$services.getService("state").registerProvider("batchUpdate", function () {
                return {batch_update: n}
            }, !1), function (t, e) {
                if (n) s(t); else {
                    var i, a = this._dp && "off" != this._dp.updateMode;
                    a && (i = this._dp.updateMode, this._dp.setUpdateMode("off"));
                    var l = {}, c = {
                        render: !0,
                        refreshData: !0,
                        refreshTask: !0,
                        refreshLink: !0,
                        resetProjectDates: function (t) {
                            l[t.id] = t
                        }
                    };
                    for (var u in function (t) {
                        for (var e in t) r.call(this, e, t[e])
                    }.call(this, c), n = !0, this.callEvent("onBeforeBatchUpdate", []), s(t), this.callEvent("onAfterBatchUpdate", []), o.call(this), l) this.resetProjectDates(l[u]);
                    n = !1, e || this.render(), a && (this._dp.setUpdateMode(i), this._dp.setGanttMode("task"), this._dp.sendData(), this._dp.setGanttMode("link"), this._dp.sendData())
                }
            }
        }

        t.exports = function (t) {
            t.batchUpdate = r(t)
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            t.ext || (t.ext = {});
            for (var e = [n(181), n(180), n(179), n(178), n(177), n(176)], i = 0; i < e.length; i++) e[i] && e[i](t)
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(0), r = function () {
            function t() {
                var t = this;
                this.clear = function () {
                    t._storage = {}
                }, this.storeItem = function (e) {
                    t._storage[e.id] = i.copy(e)
                }, this.getStoredItem = function (e) {
                    return t._storage[e] || null
                }, this._storage = {}
            }

            return t.create = function () {
                return new t
            }, t
        }();
        e.default = r
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t, e) {
            t.getUserData = function (t, e) {
                return this.userdata || (this.userdata = {}), this.userdata[t] && this.userdata[t][e] ? this.userdata[t][e] : ""
            }, t.setUserData = function (t, e, n) {
                this.userdata || (this.userdata = {}), this.userdata[t] || (this.userdata[t] = {}), this.userdata[t][e] = n
            }, t._change_id = function (t, e) {
                "task" !== this._dp._ganttMode ? this.changeLinkId(t, e) : this.changeTaskId(t, e)
            }, t._row_style = function (e, n) {
                "task" === this._dp._ganttMode && t.isTaskExists(e) && (t.getTask(e).$dataprocessor_class = n, t.refreshTask(e))
            }, t._delete_task = function (t, e) {
            }, t._sendTaskOrder = function (t, e) {
                e.$drop_target && (this._dp.setGanttMode("task"), this.getTask(t).target = e.$drop_target, this._dp.setUpdated(t, !0, "order"), delete this.getTask(t).$drop_target)
            }, t.setDp = function () {
                this._dp = e
            }, t.setDp()
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(3), r = function () {
            function t(t, e) {
                this.$gantt = t, this.$dp = e, this._dataProcessorHandlers = []
            }

            return t.prototype.attach = function () {
                var t = this.$dp, e = this.$gantt, i = n(34), r = {};

                function a(n) {
                    for (var i = t.updatedRows.slice(), r = !1, a = 0; a < i.length && !t._in_progress[n]; a++) i[a] === n && ("inserted" === e.getUserData(n, "!nativeeditor_status") && (r = !0), t.setUpdated(n, !1));
                    return r
                }

                this._dataProcessorHandlers.push(e.attachEvent("onAfterTaskAdd", function (n, i) {
                    e.isTaskExists(n) && (t.setGanttMode("tasks"), t.setUpdated(n, !0, "inserted"))
                })), this._dataProcessorHandlers.push(e.attachEvent("onAfterTaskUpdate", function (n, i) {
                    e.isTaskExists(n) && (t.setGanttMode("tasks"), t.setUpdated(n, !0), e._sendTaskOrder && e._sendTaskOrder(n, i))
                })), this._dataProcessorHandlers.push(e.attachEvent("onBeforeTaskDelete", function (t, n) {
                    return !e.config.cascade_delete || (r[t] = {
                        tasks: i.getSubtreeTasks(e, t),
                        links: i.getSubtreeLinks(e, t)
                    }, !0)
                })), this._dataProcessorHandlers.push(e.attachEvent("onAfterTaskDelete", function (n, i) {
                    if (t.setGanttMode("tasks"), !a(n)) {
                        if (e.config.cascade_delete && r[n]) {
                            var o = t.updateMode;
                            t.setUpdateMode("off");
                            var s = r[n];
                            for (var l in s.tasks) a(l) || (t.storeItem(s.tasks[l]), t.setUpdated(l, !0, "deleted"));
                            for (var l in t.setGanttMode("links"), s.links) a(l) || (t.storeItem(s.links[l]), t.setUpdated(l, !0, "deleted"));
                            r[n] = null, "off" !== o && t.sendAllData(), t.setGanttMode("tasks"), t.setUpdateMode(o)
                        }
                        t.storeItem(i), t.setUpdated(n, !0, "deleted"), "off" === t.updateMode || t._tSend || t.sendAllData()
                    }
                })), this._dataProcessorHandlers.push(e.attachEvent("onAfterLinkUpdate", function (n, i) {
                    e.isLinkExists(n) && (t.setGanttMode("links"), t.setUpdated(n, !0))
                })), this._dataProcessorHandlers.push(e.attachEvent("onAfterLinkAdd", function (n, i) {
                    e.isLinkExists(n) && (t.setGanttMode("links"), t.setUpdated(n, !0, "inserted"))
                })), this._dataProcessorHandlers.push(e.attachEvent("onAfterLinkDelete", function (e, n) {
                    t.setGanttMode("links"), !a(e) && (t.storeItem(n), t.setUpdated(e, !0, "deleted"))
                })), this._dataProcessorHandlers.push(e.attachEvent("onRowDragEnd", function (t, n) {
                    e._sendTaskOrder(t, e.getTask(t))
                }));
                var o = null, s = null;
                this._dataProcessorHandlers.push(e.attachEvent("onTaskIdChange", function (n, i) {
                    if (t._waitMode) {
                        var r = e.getChildren(i);
                        if (r.length) {
                            o = o || {};
                            for (var a = 0; a < r.length; a++) {
                                var l = this.getTask(r[a]);
                                o[l.id] = l
                            }
                        }
                        var c = function (t) {
                            var e = [];
                            return t.$source && (e = e.concat(t.$source)), t.$target && (e = e.concat(t.$target)), e
                        }(this.getTask(i));
                        if (c.length) {
                            s = s || {};
                            for (a = 0; a < c.length; a++) {
                                var u = this.getLink(c[a]);
                                s[u.id] = u
                            }
                        }
                    }
                })), t.attachEvent("onAfterUpdateFinish", function () {
                    (o || s) && (e.batchUpdate(function () {
                        for (var t in o) e.updateTask(o[t].id);
                        for (var t in s) e.updateLink(s[t].id);
                        o = null, s = null
                    }), o ? e._dp.setGanttMode("tasks") : e._dp.setGanttMode("links"))
                }), t.attachEvent("onBeforeDataSending", function () {
                    if ("CUSTOM" === this._tMode) return !0;
                    var t = this._serverProcessor;
                    if ("REST-JSON" === this._tMode || "REST" === this._tMode) {
                        var n = this._ganttMode;
                        t = t.substring(0, t.indexOf("?") > -1 ? t.indexOf("?") : t.length), this.serverProcessor = t + ("/" === t.slice(-1) ? "" : "/") + n
                    } else {
                        var i = this._ganttMode + "s";
                        this.serverProcessor = t + e.ajax.urlSeparator(t) + "gantt_mode=" + i
                    }
                    return !0
                }), t.attachEvent("insertCallback", function (t, n, i, r) {
                    var a = t.data || e.xml._xmlNodeToJSON(t.firstChild), o = {add: e.addTask, isExist: e.isTaskExists};
                    "links" === r && (o.add = e.addLink, o.isExist = e.isLinkExists), o.isExist.call(e, n) || (a.id = n, o.add.call(e, a))
                }), t.attachEvent("updateCallback", function (t, n) {
                    var i = t.data || e.xml._xmlNodeToJSON(t.firstChild);
                    if (e.isTaskExists(n)) {
                        var r = e.getTask(n);
                        for (var a in i) {
                            var o = i[a];
                            switch (a) {
                                case"id":
                                    continue;
                                case"start_date":
                                case"end_date":
                                    o = e.defined(e.templates.xml_date) ? e.templates.xml_date(o) : e.templates.parse_date(o);
                                    break;
                                case"duration":
                                    r.end_date = e.calculateEndDate({start_date: r.start_date, duration: o, task: r})
                            }
                            r[a] = o
                        }
                        e.updateTask(n), e.refreshData()
                    }
                }), t.attachEvent("deleteCallback", function (t, n, i, r) {
                    var a = {delete: e.deleteTask, isExist: e.isTaskExists};
                    "links" === r && (a.delete = e.deleteLink, a.isExist = e.isLinkExists), a.isExist.call(e, n) && a.delete.call(e, n)
                })
            }, t.prototype.detach = function () {
                var t = this;
                i.forEach(this._dataProcessorHandlers, function (e) {
                    t.$gantt.detachEvent(e)
                }), this._dataProcessorHandlers = []
            }, t
        }();
        e.default = r
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(4), r = n(3), a = n(0), o = n(185), s = n(184), l = n(183);
        e.createDataProcessor = function (t) {
            var e, n;
            t instanceof Function ? e = t : t.hasOwnProperty("router") ? e = t.router : t.hasOwnProperty("link") && t.hasOwnProperty("task") && (e = t), n = e ? "CUSTOM" : t.mode || "REST-JSON";
            var i = new c(t.url);
            return i.init(this), i.setTransactionMode({mode: n, router: e}, t.batchUpdate), i
        };
        var c = function () {
            function t(t) {
                this.serverProcessor = t, this.action_param = "!nativeeditor_status", this.object = null, this.updatedRows = [], this.autoUpdate = !0, this.updateMode = "cell", this._headers = null, this._payload = null, this._postDelim = "_", this._waitMode = 0, this._in_progress = {}, this._storage = l.default.create(), this._invalid = {}, this.messages = [], this.styles = {
                    updated: "font-weight:bold;",
                    inserted: "font-weight:bold;",
                    deleted: "text-decoration : line-through;",
                    invalid: "background-color:FFE0E0;",
                    invalid_cell: "border-bottom:2px solid red;",
                    error: "color:red;",
                    clear: "font-weight:normal;text-decoration:none;"
                }, this.enableUTFencoding(!0), i(this)
            }

            return t.prototype.setTransactionMode = function (t, e) {
                "object" == typeof t ? (this._tMode = t.mode || this._tMode, a.defined(t.headers) && (this._headers = t.headers), a.defined(t.payload) && (this._payload = t.payload)) : (this._tMode = t, this._tSend = e), "REST" === this._tMode && (this._tSend = !1, this._endnm = !0), "JSON" !== this._tMode && "REST-JSON" !== this._tMode || (this._tSend = !1, this._endnm = !0, this._serializeAsJson = !0, this._headers = this._headers || {}, this._headers["Content-type"] = "application/json"), "CUSTOM" === this._tMode && (this._tSend = !1, this._endnm = !0, this._router = t.router)
            }, t.prototype.escape = function (t) {
                return this._utf ? encodeURIComponent(t) : escape(t)
            }, t.prototype.enableUTFencoding = function (t) {
                this._utf = !!t
            }, t.prototype.setDataColumns = function (t) {
                this._columns = "string" == typeof t ? t.split(",") : t
            }, t.prototype.getSyncState = function () {
                return !this.updatedRows.length
            }, t.prototype.enableDataNames = function (t) {
                this._endnm = !!t
            }, t.prototype.enablePartialDataSend = function (t) {
                this._changed = !!t
            }, t.prototype.setUpdateMode = function (t, e) {
                this.autoUpdate = "cell" === t, this.updateMode = t, this.dnd = e
            }, t.prototype.ignore = function (t, e) {
                this._silent_mode = !0, t.call(e || window), this._silent_mode = !1
            }, t.prototype.setUpdated = function (t, e, n) {
                if (!this._silent_mode) {
                    var i = this.findRow(t);
                    n = n || "updated";
                    var r = this.$gantt.getUserData(t, this.action_param);
                    r && "updated" === n && (n = r), e ? (this.set_invalid(t, !1), this.updatedRows[i] = t, this.$gantt.setUserData(t, this.action_param, n), this._in_progress[t] && (this._in_progress[t] = "wait")) : this.is_invalid(t) || (this.updatedRows.splice(i, 1), this.$gantt.setUserData(t, this.action_param, "")), this.markRow(t, e, n), e && this.autoUpdate && this.sendData(t)
                }
            }, t.prototype.markRow = function (t, e, n) {
                var i = "", r = this.is_invalid(t);
                if (r && (i = this.styles[r], e = !0), this.callEvent("onRowMark", [t, e, n, r]) && (i = this.styles[e ? n : "clear"] + i, this.$gantt[this._methods[0]](t, i), r && r.details)) {
                    i += this.styles[r + "_cell"];
                    for (var a = 0; a < r.details.length; a++) r.details[a] && this.$gantt[this._methods[1]](t, a, i)
                }
            }, t.prototype.getActionByState = function (t) {
                return "inserted" === t ? "create" : "updated" === t ? "update" : "deleted" === t ? "delete" : "update"
            }, t.prototype.getState = function (t) {
                return this.$gantt.getUserData(t, this.action_param)
            }, t.prototype.is_invalid = function (t) {
                return this._invalid[t]
            }, t.prototype.set_invalid = function (t, e, n) {
                n && (e = {
                    value: e, details: n, toString: function () {
                        return this.value.toString()
                    }
                }), this._invalid[t] = e
            }, t.prototype.checkBeforeUpdate = function (t) {
                return !0
            }, t.prototype.sendData = function (t) {
                return this.$gantt.editStop && this.$gantt.editStop(), void 0 === t || this._tSend ? this.sendAllData() : !this._in_progress[t] && (this.messages = [], !(!this.checkBeforeUpdate(t) && this.callEvent("onValidationError", [t, this.messages])) && void this._beforeSendData(this._getRowData(t), t))
            }, t.prototype.serialize = function (t, e) {
                if (this._serializeAsJson) return this._serializeAsJSON(t);
                if ("string" == typeof t) return t;
                if (void 0 !== e) return this.serialize_one(t, "");
                var n = [], i = [];
                for (var r in t) t.hasOwnProperty(r) && (n.push(this.serialize_one(t[r], r + this._postDelim)), i.push(r));
                return n.push("ids=" + this.escape(i.join(","))), this.$gantt.security_key && n.push("dhx_security=" + this.$gantt.security_key), n.join("&")
            }, t.prototype.serialize_one = function (t, e) {
                if ("string" == typeof t) return t;
                var n = [], i = "";
                for (var r in t) if (t.hasOwnProperty(r)) {
                    if (("id" === r || r == this.action_param) && "REST" === this._tMode) continue;
                    i = "string" == typeof t[r] || "number" == typeof t[r] ? t[r] : JSON.stringify(t[r]), n.push(this.escape((e || "") + r) + "=" + this.escape(i))
                }
                return n.join("&")
            }, t.prototype.sendAllData = function () {
                if (this.updatedRows.length) {
                    this.messages = [];
                    var t = !0;
                    if (this._forEachUpdatedRow(function (e) {
                        t = t && this.checkBeforeUpdate(e)
                    }), !t && !this.callEvent("onValidationError", ["", this.messages])) return !1;
                    this._tSend ? this._sendData(this._getAllData()) : this._forEachUpdatedRow(function (t) {
                        if (!this._in_progress[t]) {
                            if (this.is_invalid(t)) return;
                            this._beforeSendData(this._getRowData(t), t)
                        }
                    })
                }
            }, t.prototype.findRow = function (t) {
                var e = 0;
                for (e = 0; e < this.updatedRows.length && t != this.updatedRows[e]; e++) ;
                return e
            }, t.prototype.defineAction = function (t, e) {
                this._uActions || (this._uActions = {}), this._uActions[t] = e
            }, t.prototype.afterUpdateCallback = function (t, e, n, i, r) {
                if (this.$gantt) {
                    this.setGanttMode(r);
                    var a = t, o = "error" !== n && "invalid" !== n;
                    if (o || this.set_invalid(t, n), this._uActions && this._uActions[n] && !this._uActions[n](i)) return delete this._in_progress[a];
                    "wait" !== this._in_progress[a] && this.setUpdated(t, !1);
                    var s = t;
                    switch (n) {
                        case"inserted":
                        case"insert":
                            e != t && (this.setUpdated(t, !1), this.$gantt[this._methods[2]](t, e), t = e);
                            break;
                        case"delete":
                        case"deleted":
                            return this.$gantt.setUserData(t, this.action_param, "true_deleted"), this.$gantt[this._methods[3]](t), delete this._in_progress[a], this.callEvent("onAfterUpdate", [t, n, e, i])
                    }
                    "wait" !== this._in_progress[a] ? (o && this.$gantt.setUserData(t, this.action_param, ""), delete this._in_progress[a]) : (delete this._in_progress[a], this.setUpdated(e, !0, this.$gantt.getUserData(t, this.action_param))), this.callEvent("onAfterUpdate", [s, n, e, i])
                }
            }, t.prototype.afterUpdate = function (t, e, n) {
                var i;
                i = 3 === arguments.length ? arguments[1] : arguments[4];
                var r = this.getGanttMode(), a = i.filePath || i.url;
                r = "REST" !== this._tMode && "REST-JSON" !== this._tMode ? -1 !== a.indexOf("gantt_mode=links") ? "link" : "task" : a.indexOf("/link") > a.indexOf("/task") ? "link" : "task", this.setGanttMode(r);
                var o, s = this.$gantt.ajax;
                try {
                    o = JSON.parse(e.xmlDoc.responseText)
                } catch (t) {
                    e.xmlDoc.responseText.length || (o = {})
                }
                if (o) {
                    var l = o.action || this.getState(n) || "updated", c = o.sid || n[0], u = o.tid || n[0];
                    return t.afterUpdateCallback(c, u, l, o, r), t.finalizeUpdate(), void this.setGanttMode(r)
                }
                var d = s.xmltop("data", e.xmlDoc);
                if (!d) return this.cleanUpdate(n);
                var h = s.xpath("//data/action", d);
                if (!h.length) return this.cleanUpdate(n);
                for (var f = 0; f < h.length; f++) {
                    var _ = h[f];
                    l = _.getAttribute("type"), c = _.getAttribute("sid"), u = _.getAttribute("tid");
                    t.afterUpdateCallback(c, u, l, _, r)
                }
                t.finalizeUpdate()
            }, t.prototype.cleanUpdate = function (t) {
                if (t) for (var e = 0; e < t.length; e++) delete this._in_progress[t[e]]
            }, t.prototype.finalizeUpdate = function () {
                this._waitMode && this._waitMode--, this.callEvent("onAfterUpdateFinish", []), this.updatedRows.length || this.callEvent("onFullSync", [])
            }, t.prototype.init = function (t) {
                if (!this._initialized) {
                    this.$gantt = t, this.$gantt._dp_init && this.$gantt._dp_init(this), this._setDefaultTransactionMode(), this.styles = {
                        updated: "gantt_updated",
                        order: "gantt_updated",
                        inserted: "gantt_inserted",
                        deleted: "gantt_deleted",
                        invalid: "gantt_invalid",
                        error: "gantt_error",
                        clear: ""
                    }, this._methods = ["_row_style", "setCellTextStyle", "_change_id", "_delete_task"], s.default(this.$gantt, this);
                    var e = new o.default(this.$gantt, this);
                    e.attach(), this.attachEvent("onDestroy", function () {
                        delete this.setGanttMode, delete this._getRowData, delete this.$gantt._dp, delete this.$gantt._change_id, delete this.$gantt._row_style, delete this.$gantt._delete_task, delete this.$gantt._sendTaskOrder, delete this.$gantt, e.detach()
                    }), this.$gantt.callEvent("onDataProcessorReady", [this]), this._initialized = !0
                }
            }, t.prototype.setOnAfterUpdate = function (t) {
                this.attachEvent("onAfterUpdate", t)
            }, t.prototype.setOnBeforeUpdateHandler = function (t) {
                this.attachEvent("onBeforeDataSending", t)
            }, t.prototype.setAutoUpdate = function (t, e) {
                var n = this;
                t = t || 2e3, this._user = e || (new Date).valueOf(), this._needUpdate = !1, this._updateBusy = !1, this.attachEvent("onAfterUpdate", this.afterAutoUpdate), this.attachEvent("onFullSync", this.fullSync), setInterval(function () {
                    n.loadUpdate()
                }, t)
            }, t.prototype.afterAutoUpdate = function (t, e, n, i) {
                return "collision" !== e || (this._needUpdate = !0, !1)
            }, t.prototype.fullSync = function () {
                return this._needUpdate && (this._needUpdate = !1, this.loadUpdate()), !0
            }, t.prototype.getUpdates = function (t, e) {
                var n = this.$gantt.ajax;
                if (this._updateBusy) return !1;
                this._updateBusy = !0, n.get(t, e)
            }, t.prototype.loadUpdate = function () {
                var t = this, e = this.$gantt.ajax, n = this.$gantt.getUserData(0, "version"),
                    i = this.serverProcessor + e.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + n].join("&");
                i = i.replace("editing=true&", ""), this.getUpdates(i, function (n) {
                    var i = e.xpath("//userdata", n);
                    t.obj.setUserData(0, "version", t._getXmlNodeValue(i[0]));
                    var r = e.xpath("//update", n);
                    if (r.length) {
                        t._silent_mode = !0;
                        for (var a = 0; a < r.length; a++) {
                            var o = r[a].getAttribute("status"), s = r[a].getAttribute("id"),
                                l = r[a].getAttribute("parent");
                            switch (o) {
                                case"inserted":
                                    t.callEvent("insertCallback", [r[a], s, l]);
                                    break;
                                case"updated":
                                    t.callEvent("updateCallback", [r[a], s, l]);
                                    break;
                                case"deleted":
                                    t.callEvent("deleteCallback", [r[a], s, l])
                            }
                        }
                        t._silent_mode = !1
                    }
                    t._updateBusy = !1
                })
            }, t.prototype.destructor = function () {
                this.callEvent("onDestroy", []), this.detachAllEvents(), this.updatedRows = [], this._in_progress = {}, this._invalid = {}, this._storage.clear(), this._storage = null, this._headers = null, this._payload = null, delete this._initialized
            }, t.prototype.setGanttMode = function (t) {
                "tasks" === t ? t = "task" : "links" === t && (t = "link");
                var e = this.modes || {}, n = this.getGanttMode();
                n && (e[n] = {
                    _in_progress: this._in_progress,
                    _invalid: this._invalid,
                    _storage: this._storage,
                    updatedRows: this.updatedRows
                });
                var i = e[t];
                i || (i = e[t] = {
                    _in_progress: {},
                    _invalid: {},
                    _storage: l.default.create(),
                    updatedRows: []
                }), this._in_progress = i._in_progress, this._invalid = i._invalid, this._storage = i._storage, this.updatedRows = i.updatedRows, this.modes = e, this._ganttMode = t
            }, t.prototype.getGanttMode = function () {
                return this._ganttMode
            }, t.prototype.storeItem = function (t) {
                this._storage.storeItem(t)
            }, t.prototype.url = function (t) {
                this.serverProcessor = this._serverProcessor = t
            }, t.prototype._beforeSendData = function (t, e) {
                if (!this.callEvent("onBeforeUpdate", [e, this.getState(e), t])) return !1;
                this._sendData(t, e)
            }, t.prototype._serializeAsJSON = function (t) {
                if ("string" == typeof t) return t;
                var e = a.copy(t);
                return "REST-JSON" === this._tMode && (delete e.id, delete e[this.action_param]), JSON.stringify(e)
            }, t.prototype._applyPayload = function (t) {
                var e = this.$gantt.ajax;
                if (this._payload) for (var n in this._payload) t = t + e.urlSeparator(t) + this.escape(n) + "=" + this.escape(this._payload[n]);
                return t
            }, t.prototype._cleanupArgumentsBeforeSend = function (t) {
                var e;
                if (void 0 === t[this.action_param]) for (var n in e = {}, t) e[n] = this._cleanupArgumentsBeforeSend(t[n]); else e = this._cleanupItemBeforeSend(t);
                return e
            }, t.prototype._cleanupItemBeforeSend = function (t) {
                var e = null;
                return t && ("deleted" === t[this.action_param] ? ((e = {}).id = t.id, e[this.action_param] = t[this.action_param]) : e = t), e
            }, t.prototype._sendData = function (t, e) {
                var n = this;
                if (t) {
                    if (!this.callEvent("onBeforeDataSending", e ? [e, this.getState(e), t] : [null, null, t])) return !1;
                    e && (this._in_progress[e] = (new Date).valueOf());
                    var i = this.$gantt.ajax;
                    if ("CUSTOM" !== this._tMode) {
                        var r;
                        r = {
                            callback: function (i) {
                                var r = [];
                                if (e) r.push(e); else if (t) for (var a in t) r.push(a);
                                return n.afterUpdate(n, i, r)
                            }, headers: this._headers
                        };
                        var a,
                            o = this.serverProcessor + (this._user ? i.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + this.$gantt.getUserData(0, "version")].join("&") : ""),
                            s = this._applyPayload(o);
                        switch (this._tMode) {
                            case"GET":
                                a = this._cleanupArgumentsBeforeSend(t), r.url = s + i.urlSeparator(s) + this.serialize(a, e), r.method = "GET";
                                break;
                            case"POST":
                                a = this._cleanupArgumentsBeforeSend(t), r.url = s, r.method = "POST", r.data = this.serialize(a, e);
                                break;
                            case"JSON":
                                a = {};
                                var l = this._cleanupItemBeforeSend(t);
                                for (var c in l) c !== this.action_param && "id" !== c && "gr_id" !== c && (a[c] = l[c]);
                                r.url = s, r.method = "POST", r.data = JSON.stringify({
                                    id: e,
                                    action: t[this.action_param],
                                    data: a
                                });
                                break;
                            case"REST":
                            case"REST-JSON":
                                switch (s = o.replace(/(&|\?)editing=true/, ""), a = "", this.getState(e)) {
                                    case"inserted":
                                        r.method = "POST", r.data = this.serialize(t, e);
                                        break;
                                    case"deleted":
                                        r.method = "DELETE", s = s + ("/" === s.slice(-1) ? "" : "/") + e;
                                        break;
                                    default:
                                        r.method = "PUT", r.data = this.serialize(t, e), s = s + ("/" === s.slice(-1) ? "" : "/") + e
                                }
                                r.url = this._applyPayload(s)
                        }
                        return this._waitMode++, i.query(r)
                    }
                    var u = this.getState(e), d = this.getActionByState(u), h = this.getGanttMode(), f = function (t) {
                        var i = u || "updated", r = e, a = e;
                        t && (i = t.action || u, r = t.sid || r, a = t.id || t.tid || a), n.afterUpdateCallback(r, a, i, t, h)
                    }, _ = void 0;
                    if (this._router instanceof Function) _ = this._router(h, d, t, e); else if (this._router[h] instanceof Function) _ = this._router[h](d, t, e); else switch (u) {
                        case"inserted":
                            _ = this._router[h].create(t);
                            break;
                        case"deleted":
                            _ = this._router[h].delete(e);
                            break;
                        default:
                            _ = this._router[h].update(t, e)
                    }
                    if (_) {
                        if (!_.then && void 0 === _.id && void 0 === _.tid) throw new Error("Incorrect router return value. A Promise or a response object is expected");
                        _.then ? _.then(f) : f(_)
                    } else f(null)
                }
            }, t.prototype._forEachUpdatedRow = function (t) {
                for (var e = this.updatedRows.slice(), n = 0; n < e.length; n++) {
                    var i = e[n];
                    this.$gantt.getUserData(i, this.action_param) && t.call(this, i)
                }
            }, t.prototype._setDefaultTransactionMode = function () {
                this.serverProcessor && (this.setTransactionMode("POST", !0), this.serverProcessor += (-1 !== this.serverProcessor.indexOf("?") ? "&" : "?") + "editing=true", this._serverProcessor = this.serverProcessor)
            }, t.prototype._getXmlNodeValue = function (t) {
                return t.firstChild ? t.firstChild.nodeValue : ""
            }, t.prototype._getAllData = function () {
                var t = {}, e = !1;
                return this._forEachUpdatedRow(function (n) {
                    if (!this._in_progress[n] && !this.is_invalid(n)) {
                        var i = this._getRowData(n);
                        this.callEvent("onBeforeUpdate", [n, this.getState(n), i]) && (t[n] = i, e = !0, this._in_progress[n] = (new Date).valueOf())
                    }
                }), e ? t : null
            }, t.prototype._prepareDataItem = function (t) {
                var e = {};
                for (var n in t) if ("$" !== n.substr(0, 1)) {
                    var i = t[n];
                    r.isDate(i) ? e[n] = this.$gantt.defined(this.$gantt.templates.xml_format) ? this.$gantt.templates.xml_format(i) : this.$gantt.templates.format_date(i) : e[n] = null === i ? "" : i
                }
                return e[this.action_param] = this.$gantt.getUserData(t.id, this.action_param), e
            }, t.prototype.getStoredItem = function (t) {
                return this._storage.getStoredItem(t)
            }, t.prototype._getRowData = function (t) {
                var e, n = this.$gantt;
                return "task" === this.getGanttMode() ? n.isTaskExists(t) && (e = this.$gantt.getTask(t)) : n.isLinkExists(t) && (e = this.$gantt.getLink(t)), e || (e = this.getStoredItem(t)), e || (e = {id: t}), this._prepareDataItem(e)
            }, t
        }();
        e.DataProcessor = c
    }, function (t, e, n) {
        var i = n(186);
        t.exports = {
            DEPRECATED_api: function (t) {
                return new i.DataProcessor(t)
            }, createDataProcessor: i.createDataProcessor, getDataProcessorModes: i.getAvailableModes
        }
    }, function (t, e, n) {
        var i = n(8);
        t.exports = {
            bindDataStore: function (t, e) {
                var n = e.getDatastore(t), r = function (t, e) {
                    var i = e.getLayers(), r = n.getItem(t);
                    if (r && n.isVisible(t)) for (var a = 0; a < i.length; a++) i[a].render_item(r)
                }, a = function (t) {
                    for (var e = t.getLayers(), i = 0; i < e.length; i++) e[i].clear();
                    var r = n.getVisibleItems(), a = {};
                    for (i = 0; i < e.length; i++) {
                        var o = e[i], s = r;
                        if (o.get_visible_range) {
                            var l = o.get_visible_range(n), c = l.start + " - " + l.end;
                            a[c] ? s = a[c] : (s = n.getIndexRange(l.start, l.end), a[c] = s)
                        }
                        e[i].render_items(s)
                    }
                }, o = function (t) {
                    if (t.update_items) {
                        var e;
                        if (t.get_visible_range) {
                            var i = t.get_visible_range(n);
                            e = n.getIndexRange(i.start, i.end)
                        } else e = n.getVisibleItems();
                        t.update_items(e)
                    }
                };

                function s(t) {
                    return !!t.$services.getService("state").getState("batchUpdate").batch_update
                }

                n.attachEvent("onStoreUpdated", function (n, r, a) {
                    if (i(e)) return !0;
                    var s = e.$services.getService("layers").getDataRender(t);
                    s && (s.onUpdateRequest = function (t) {
                        o(t)
                    })
                }), n.attachEvent("onStoreUpdated", function (t, i, r) {
                    s(e) || (t && "move" != r && "delete" != r ? (n.callEvent("onBeforeRefreshItem", [i.id]), n.callEvent("onAfterRefreshItem", [i.id])) : (n.callEvent("onBeforeRefreshAll", []), n.callEvent("onAfterRefreshAll", [])))
                }), n.attachEvent("onAfterRefreshAll", function () {
                    if (i(e)) return !0;
                    var n = e.$services.getService("layers").getDataRender(t);
                    n && a(n)
                }), n.attachEvent("onAfterRefreshItem", function (n) {
                    if (i(e)) return !0;
                    var a = e.$services.getService("layers").getDataRender(t);
                    a && r(n, a)
                }), n.attachEvent("onItemOpen", function () {
                    if (i(e)) return !0;
                    e.render()
                }), n.attachEvent("onItemClose", function () {
                    if (i(e)) return !0;
                    e.render()
                }), n.attachEvent("onIdChange", function (a, o) {
                    if (i(e)) return !0;
                    if (n.callEvent("onBeforeIdChange", [a, o]), !s(e)) {
                        var l = e.$services.getService("layers").getDataRender(t);
                        !function (t, e, n, i) {
                            for (var r = 0; r < t.length; r++) t[r].change_id(e, n)
                        }(l.getLayers(), a, o, n.getItem(o)), r(o, l)
                    }
                })
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = null, n = t._removeItemInner;

            function i(t) {
                e = null, this.callEvent("onAfterUnselect", [t])
            }

            return t._removeItemInner = function (t) {
                return e == t && i.call(this, t), e && this.eachItem && this.eachItem(function (t) {
                    t.id == e && i.call(this, t.id)
                }, t), n.apply(this, arguments)
            }, t.attachEvent("onIdChange", function (e, n) {
                t.getSelectedId() == e && t.silent(function () {
                    t.unselect(e), t.select(n)
                })
            }), {
                select: function (t) {
                    if (t) {
                        if (e == t) return e;
                        if (!this._skip_refresh && !this.callEvent("onBeforeSelect", [t])) return !1;
                        this.unselect(), e = t, this._skip_refresh || (this.refresh(t), this.callEvent("onAfterSelect", [t]))
                    }
                    return e
                }, getSelectedId: function () {
                    return e
                }, isSelected: function (t) {
                    return t == e
                }, unselect: function (t) {
                    (t = t || e) && (e = null, this._skip_refresh || (this.refresh(t), i.call(this, t)))
                }
            }
        }
    }, function (t, e, n) {
        var i = n(0);
        t.exports = function () {
            return {
                getLinkCount: function () {
                    return this.$data.linksStore.count()
                }, getLink: function (t) {
                    return this.$data.linksStore.getItem(t)
                }, getLinks: function () {
                    return this.$data.linksStore.getItems()
                }, isLinkExists: function (t) {
                    return this.$data.linksStore.exists(t)
                }, addLink: function (t) {
                    return this.$data.linksStore.addItem(t)
                }, updateLink: function (t, e) {
                    i.defined(e) || (e = this.getLink(t)), this.$data.linksStore.updateItem(t, e)
                }, deleteLink: function (t) {
                    return this.$data.linksStore.removeItem(t)
                }, changeLinkId: function (t, e) {
                    return this.$data.linksStore.changeId(t, e)
                }
            }
        }
    }, function (t, e, n) {
        var i = n(0);
        t.exports = function () {
            return {
                getTask: function (t) {
                    this.assert(t, "Invalid argument for gantt.getTask");
                    var e = this.$data.tasksStore.getItem(t);
                    return this.assert(e, "Task not found id=" + t), e
                }, getTaskByTime: function (t, e) {
                    var n = this.$data.tasksStore.getItems(), i = [];
                    if (t || e) {
                        t = +t || -1 / 0, e = +e || 1 / 0;
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            +a.start_date < e && +a.end_date > t && i.push(a)
                        }
                    } else i = n;
                    return i
                }, isTaskExists: function (t) {
                    return !(!this.$data || !this.$data.tasksStore) && this.$data.tasksStore.exists(t)
                }, updateTask: function (t, e) {
                    i.defined(e) || (e = this.getTask(t)), this.$data.tasksStore.updateItem(t, e), this.isTaskExists(t) && this.refreshTask(t)
                }, addTask: function (t, e, n) {
                    return i.defined(t.id) || (t.id = i.uid()), i.defined(e) || (e = this.getParent(t) || 0), this.isTaskExists(e) || (e = this.config.root_id), this.setParent(t, e), this.$data.tasksStore.addItem(t, n, e)
                }, deleteTask: function (t) {
                    return this.$data.tasksStore.removeItem(t)
                }, getTaskCount: function () {
                    return this.$data.tasksStore.count()
                }, getVisibleTaskCount: function () {
                    return this.$data.tasksStore.countVisible()
                }, getTaskIndex: function (t) {
                    return this.$data.tasksStore.getBranchIndex(t)
                }, getGlobalTaskIndex: function (t) {
                    return this.assert(t, "Invalid argument"), this.$data.tasksStore.getIndexById(t)
                }, eachTask: function (t, e, n) {
                    return this.$data.tasksStore.eachItem(i.bind(t, n || this), e)
                }, eachParent: function (t, e, n) {
                    return this.$data.tasksStore.eachParent(i.bind(t, n || this), e)
                }, changeTaskId: function (t, e) {
                    this.$data.tasksStore.changeId(t, e);
                    var n = this.$data.tasksStore.getItem(e), i = [];
                    n.$source && (i = i.concat(n.$source)), n.$target && (i = i.concat(n.$target));
                    for (var r = 0; r < i.length; r++) {
                        var a = this.getLink(i[r]);
                        a.source == t && (a.source = e), a.target == t && (a.target = e)
                    }
                }, calculateTaskLevel: function (t) {
                    return this.$data.tasksStore.calculateItemLevel(t)
                }, getNext: function (t) {
                    return this.$data.tasksStore.getNext(t)
                }, getPrev: function (t) {
                    return this.$data.tasksStore.getPrev(t)
                }, getParent: function (t) {
                    return this.$data.tasksStore.getParent(t)
                }, setParent: function (t, e, n) {
                    return this.$data.tasksStore.setParent(t, e, n)
                }, getSiblings: function (t) {
                    return this.$data.tasksStore.getSiblings(t).slice()
                }, getNextSibling: function (t) {
                    return this.$data.tasksStore.getNextSibling(t)
                }, getPrevSibling: function (t) {
                    return this.$data.tasksStore.getPrevSibling(t)
                }, getTaskByIndex: function (t) {
                    var e = this.$data.tasksStore.getIdByIndex(t);
                    return this.isTaskExists(e) ? this.getTask(e) : null
                }, getChildren: function (t) {
                    return this.hasChild(t) ? this.$data.tasksStore.getChildren(t).slice() : []
                }, hasChild: function (t) {
                    return this.$data.tasksStore.hasChild(t)
                }, open: function (t) {
                    this.$data.tasksStore.open(t)
                }, close: function (t) {
                    this.$data.tasksStore.close(t)
                }, moveTask: function (t, e, n) {
                    return this.$data.tasksStore.move.apply(this.$data.tasksStore, arguments)
                }, sort: function (t, e, n, i) {
                    var r = !i;
                    this.$data.tasksStore.sort(t, e, n), this.callEvent("onAfterSort", [t, e, n]), r && this.render()
                }
            }
        }
    }, function (t, e, n) {
        var i = n(0), r = n(191), a = n(190), o = n(38), s = n(36), l = n(189), c = n(188), u = n(8);

        function d() {
            for (var t = this.$services.getService("datastores"), e = [], n = 0; n < t.length; n++) e.push(this.getDatastore(t[n]));
            return e
        }

        o.default && (o = o.default);
        var h = function () {
            return {
                createDatastore: function (t) {
                    var e = "treedatastore" == (t.type || "").toLowerCase() ? s : o;
                    if (t) {
                        var n = this;
                        t.openInitially = function () {
                            return n.config.open_tree_initially
                        }
                    }
                    var i = new e(t);
                    if (this.mixin(i, l(i)), t.name) {
                        this.$services.dropService("datastore:" + t.name), this.$services.setService("datastore:" + t.name, function () {
                            return i
                        });
                        var r = this.$services.getService("datastores");
                        r ? r.indexOf(t.name) < 0 && r.push(t.name) : (r = [], this.$services.setService("datastores", function () {
                            return r
                        }), r.push(t.name)), c.bindDataStore(t.name, this)
                    }
                    return i
                }, getDatastore: function (t) {
                    return this.$services.getService("datastore:" + t)
                }, refreshData: function () {
                    var t;
                    u(this) || (t = this.getScrollState()), this.callEvent("onBeforeDataRender", []);
                    for (var e = d.call(this), n = 0; n < e.length; n++) e[n].refresh();
                    u(this) || !t.x && !t.y || this.scrollTo(t.x, t.y), this.callEvent("onDataRender", [])
                }, isChildOf: function (t, e) {
                    return this.$data.tasksStore.isChildOf(t, e)
                }, refreshTask: function (t, e) {
                    var n = this.getTask(t);
                    if (n && this.isTaskVisible(t)) {
                        if (this.$data.tasksStore.refresh(t, !!this.getState().drag_id), void 0 !== e && !e) return;
                        for (var i = 0; i < n.$source.length; i++) this.refreshLink(n.$source[i]);
                        for (i = 0; i < n.$target.length; i++) this.refreshLink(n.$target[i])
                    } else this.isTaskExists(t) && this.isTaskExists(this.getParent(t)) && this.refreshTask(this.getParent(t))
                }, refreshLink: function (t) {
                    this.$data.linksStore.refresh(t, !!this.getState().drag_id)
                }, silent: function (t) {
                    var e = this;
                    e.$data.tasksStore.silent(function () {
                        e.$data.linksStore.silent(function () {
                            t()
                        })
                    })
                }, clearAll: function () {
                    for (var t = d.call(this), e = 0; e < t.length; e++) t[e].clearAll();
                    this._update_flags(), this.userdata = {}, this.callEvent("onClear", []), this.render()
                }, _clear_data: function () {
                    this.$data.tasksStore.clearAll(), this.$data.linksStore.clearAll(), this._update_flags(), this.userdata = {}
                }, selectTask: function (t) {
                    var e = this.$data.tasksStore;
                    return !!this.config.select_task && (t && e.select(t), e.getSelectedId())
                }, unselectTask: function (t) {
                    this.$data.tasksStore.unselect(t)
                }, isSelectedTask: function (t) {
                    return this.$data.tasksStore.isSelected(t)
                }, getSelectedId: function () {
                    return this.$data.tasksStore.getSelectedId()
                }
            }
        };
        t.exports = {
            create: function () {
                var t = i.mixin({}, h());
                return i.mixin(t, r()), i.mixin(t, a()), t
            }
        }
    }, function (t, e, n) {
        var i = n(0), r = n(192), a = n(35);
        t.exports = function (t) {
            var e = r.create();
            i.mixin(t, e);
            var o = t.createDatastore({
                name: "task", type: "treeDatastore", rootId: function () {
                    return t.config.root_id
                }, initItem: i.bind(function (e) {
                    this.defined(e.id) || (e.id = this.uid()), e.start_date && (e.start_date = t.date.parseDate(e.start_date, "parse_date")), e.end_date && (e.end_date = t.date.parseDate(e.end_date, "parse_date"));
                    var n = null;
                    (e.duration || 0 === e.duration) && (e.duration = n = 1 * e.duration), n && (e.start_date && !e.end_date ? e.end_date = this.calculateEndDate(e) : !e.start_date && e.end_date && (e.start_date = this.calculateEndDate({
                        start_date: e.end_date,
                        duration: -e.duration,
                        task: e
                    }))), e.progress = Number(e.progress) || 0, this._isAllowedUnscheduledTask(e) && this._set_default_task_timing(e), this._init_task_timing(e), e.start_date && e.end_date && this.correctTaskWorkTime(e), e.$source = [], e.$target = [];
                    var r = this.$data.tasksStore.getItem(e.id);
                    return r && !i.defined(e.open) && (e.$open = r.$open), void 0 === e.parent && (e.parent = this.config.root_id), e
                }, t), getConfig: function () {
                    return t.config
                }
            }), s = t.createDatastore({
                name: "link", initItem: i.bind(function (t) {
                    return this.defined(t.id) || (t.id = this.uid()), t
                }, t)
            });

            function l(e) {
                var n = t.isTaskVisible(e);
                if (!n && t.isTaskExists(e)) {
                    var i = t.getParent(e);
                    t.isTaskExists(i) && t.isTaskVisible(i) && (i = t.getTask(i), t.isSplitTask(i) && (n = !0))
                }
                return n
            }

            function c(e) {
                if (t.isTaskExists(e.source)) {
                    var n = t.getTask(e.source);
                    n.$source = n.$source || [], n.$source.push(e.id)
                }
                if (t.isTaskExists(e.target)) {
                    var i = t.getTask(e.target);
                    i.$target = i.$target || [], i.$target.push(e.id)
                }
            }

            function u(e) {
                if (t.isTaskExists(e.source)) for (var n = t.getTask(e.source), i = 0; i < n.$source.length; i++) if (n.$source[i] == e.id) {
                    n.$source.splice(i, 1);
                    break
                }
                if (t.isTaskExists(e.target)) {
                    var r = t.getTask(e.target);
                    for (i = 0; i < r.$target.length; i++) if (r.$target[i] == e.id) {
                        r.$target.splice(i, 1);
                        break
                    }
                }
            }

            function d() {
                for (var e = null, n = t.$data.tasksStore.getItems(), i = 0, r = n.length; i < r; i++) (e = n[i]).$source = [], e.$target = [];
                var a = t.$data.linksStore.getItems();
                for (i = 0, r = a.length; i < r; i++) c(a[i])
            }

            function h(t) {
                var e = t.source, n = t.target;
                for (var i in t.events) !function (t, i) {
                    e.attachEvent(t, function () {
                        return n.callEvent(i, Array.prototype.slice.call(arguments))
                    }, i)
                }(i, t.events[i])
            }

            t.attachEvent("onDestroy", function () {
                o.destructor(), s.destructor()
            }), o.attachEvent("onBeforeRefreshAll", function () {
                for (var e = o.getVisibleItems(), n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.$index = n, t.resetProjectDates(i)
                }
            }), o.attachEvent("onFilterItem", function (e, n) {
                if (t.config.show_tasks_outside_timescale) return !0;
                var i = null, r = null;
                if (t.config.start_date && t.config.end_date) {
                    if (t._isAllowedUnscheduledTask(n)) return !0;
                    if (i = t.config.start_date.valueOf(), r = t.config.end_date.valueOf(), +n.start_date > r || +n.end_date < +i) return !1
                }
                return !0
            }), o.attachEvent("onIdChange", function (e, n) {
                t._update_flags(e, n)
            }), o.attachEvent("onAfterUpdate", function (e) {
                if (t._update_parents(e), t.getState("batchUpdate").batch_update) return !0;
                for (var n = o.getItem(e), i = 0; i < n.$source.length; i++) s.refresh(n.$source[i]);
                for (i = 0; i < n.$target.length; i++) s.refresh(n.$target[i])
            }), o.attachEvent("onAfterItemMove", function (e, n, i) {
                var r = t.getTask(e);
                null !== this.getNextSibling(e) ? r.$drop_target = this.getNextSibling(e) : null !== this.getPrevSibling(e) ? r.$drop_target = "next:" + this.getPrevSibling(e) : r.$drop_target = "next:null"
            }), o.attachEvent("onStoreUpdated", function (e, n, i) {
                if ("delete" == i && t._update_flags(e, null), !t.$services.getService("state").getState("batchUpdate").batch_update) {
                    if (t.config.fit_tasks && "paint" !== i) {
                        var r = t.getState();
                        a(t);
                        var o = t.getState();
                        if (+r.min_date != +o.min_date || +r.max_date != +o.max_date) return t.render(), t.callEvent("onScaleAdjusted", []), !0
                    }
                    "add" == i || "move" == i || "delete" == i ? t.$layout.resize() : e || s.refresh()
                }
            }), s.attachEvent("onAfterAdd", function (t, e) {
                c(e)
            }), s.attachEvent("onAfterUpdate", function (t, e) {
                d()
            }), s.attachEvent("onAfterDelete", function (t, e) {
                u(e)
            }), s.attachEvent("onBeforeIdChange", function (e, n) {
                u(t.mixin({id: e}, t.$data.linksStore.getItem(n))), c(t.$data.linksStore.getItem(n))
            }), s.attachEvent("onFilterItem", function (e, n) {
                if (!t.config.show_links) return !1;
                var i = l(n.source), r = l(n.target);
                return !(!i || !r || t._isAllowedUnscheduledTask(t.getTask(n.source)) || t._isAllowedUnscheduledTask(t.getTask(n.target))) && t.callEvent("onBeforeLinkDisplay", [e, n])
            }), function () {
                var e = n(34), i = {};
                t.attachEvent("onBeforeTaskDelete", function (n, r) {
                    return i[n] = e.getSubtreeLinks(t, n), !0
                }), t.attachEvent("onAfterTaskDelete", function (e, n) {
                    i[e] && t.$data.linksStore.silent(function () {
                        for (var n in i[e]) t.$data.linksStore.removeItem(n), u(i[e][n]);
                        i[e] = null
                    })
                })
            }(), t.attachEvent("onAfterLinkDelete", function (e, n) {
                t.refreshTask(n.source), t.refreshTask(n.target)
            }), t.attachEvent("onParse", d), h({
                source: s,
                target: t,
                events: {
                    onItemLoading: "onLinkLoading",
                    onBeforeAdd: "onBeforeLinkAdd",
                    onAfterAdd: "onAfterLinkAdd",
                    onBeforeUpdate: "onBeforeLinkUpdate",
                    onAfterUpdate: "onAfterLinkUpdate",
                    onBeforeDelete: "onBeforeLinkDelete",
                    onAfterDelete: "onAfterLinkDelete",
                    onIdChange: "onLinkIdChange"
                }
            }), h({
                source: o,
                target: t,
                events: {
                    onItemLoading: "onTaskLoading",
                    onBeforeAdd: "onBeforeTaskAdd",
                    onAfterAdd: "onAfterTaskAdd",
                    onBeforeUpdate: "onBeforeTaskUpdate",
                    onAfterUpdate: "onAfterTaskUpdate",
                    onBeforeDelete: "onBeforeTaskDelete",
                    onAfterDelete: "onAfterTaskDelete",
                    onIdChange: "onTaskIdChange",
                    onBeforeItemMove: "onBeforeTaskMove",
                    onAfterItemMove: "onAfterTaskMove",
                    onFilterItem: "onBeforeTaskDisplay",
                    onItemOpen: "onTaskOpened",
                    onItemClose: "onTaskClosed",
                    onBeforeSelect: "onBeforeTaskSelected",
                    onAfterSelect: "onTaskSelected",
                    onAfterUnselect: "onTaskUnselected"
                }
            }), t.$data = {tasksStore: o, linksStore: s}
        }
    }, function (t, e, n) {
        (function (t, e) {
            !function (t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var i, r = 1, a = {}, o = !1, s = t.document, l = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    l = l && l.setTimeout ? l : t, "[object process]" === {}.toString.call(t.process) ? i = function (t) {
                        e.nextTick(function () {
                            u(t)
                        })
                    } : function () {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0, n = t.onmessage;
                            return t.onmessage = function () {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? function () {
                        var e = "setImmediate$" + Math.random() + "$", n = function (n) {
                            n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && u(+n.data.slice(e.length))
                        };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), i = function (n) {
                            t.postMessage(e + n, "*")
                        }
                    }() : t.MessageChannel ? function () {
                        var t = new MessageChannel;
                        t.port1.onmessage = function (t) {
                            u(t.data)
                        }, i = function (e) {
                            t.port2.postMessage(e)
                        }
                    }() : s && "onreadystatechange" in s.createElement("script") ? function () {
                        var t = s.documentElement;
                        i = function (e) {
                            var n = s.createElement("script");
                            n.onreadystatechange = function () {
                                u(e), n.onreadystatechange = null, t.removeChild(n), n = null
                            }, t.appendChild(n)
                        }
                    }() : i = function (t) {
                        setTimeout(u, 0, t)
                    }, l.setImmediate = function (t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var o = {callback: t, args: e};
                        return a[r] = o, i(r), r++
                    }, l.clearImmediate = c
                }

                function c(t) {
                    delete a[t]
                }

                function u(t) {
                    if (o) setTimeout(u, 0, t); else {
                        var e = a[t];
                        if (e) {
                            o = !0;
                            try {
                                !function (t) {
                                    var e = t.callback, i = t.args;
                                    switch (i.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(i[0]);
                                            break;
                                        case 2:
                                            e(i[0], i[1]);
                                            break;
                                        case 3:
                                            e(i[0], i[1], i[2]);
                                            break;
                                        default:
                                            e.apply(n, i)
                                    }
                                }(e)
                            } finally {
                                c(t), o = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(this, n(13), n(39))
    }, function (t, e, n) {
        (function (t) {
            var i = void 0 !== t && t || "undefined" != typeof self && self || window, r = Function.prototype.apply;

            function a(t, e) {
                this._id = t, this._clearFn = e
            }

            e.setTimeout = function () {
                return new a(r.call(setTimeout, i, arguments), clearTimeout)
            }, e.setInterval = function () {
                return new a(r.call(setInterval, i, arguments), clearInterval)
            }, e.clearTimeout = e.clearInterval = function (t) {
                t && t.close()
            }, a.prototype.unref = a.prototype.ref = function () {
            }, a.prototype.close = function () {
                this._clearFn.call(i, this._id)
            }, e.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e
            }, e.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
            }, e._unrefActive = e.active = function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                    t._onTimeout && t._onTimeout()
                }, e))
            }, n(194), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
        }).call(this, n(13))
    }, function (t, e, n) {
        (function (e, n, i) {
            t.exports = function () {
                var t, r, a;
                return function t(e, n, i) {
                    function r(o, s) {
                        if (!n[o]) {
                            if (!e[o]) {
                                var l = "function" == typeof _dereq_ && _dereq_;
                                if (!s && l) return l(o, !0);
                                if (a) return a(o, !0);
                                var c = new Error("Cannot find module '" + o + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var u = n[o] = {exports: {}};
                            e[o][0].call(u.exports, function (t) {
                                var n = e[o][1][t];
                                return r(n || t)
                            }, u, u.exports, t, e, n, i)
                        }
                        return n[o].exports
                    }

                    for (var a = "function" == typeof _dereq_ && _dereq_, o = 0; o < i.length; o++) r(i[o]);
                    return r
                }({
                    1: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t) {
                            var e = t._SomePromiseArray;

                            function n(t) {
                                var n = new e(t), i = n.promise();
                                return n.setHowMany(1), n.setUnwrap(), n.init(), i
                            }

                            t.any = function (t) {
                                return n(t)
                            }, t.prototype.any = function () {
                                return n(this)
                            }
                        }
                    }, {}], 2: [function (t, n, i) {
                        "use strict";
                        var r;
                        try {
                            throw new Error
                        } catch (t) {
                            r = t
                        }
                        var a = t("./schedule"), o = t("./queue"), s = t("./util");

                        function l() {
                            this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new o(16), this._normalQueue = new o(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
                            var t = this;
                            this.drainQueues = function () {
                                t._drainQueues()
                            }, this._schedule = a
                        }

                        function c(t, e, n) {
                            this._lateQueue.push(t, e, n), this._queueTick()
                        }

                        function u(t, e, n) {
                            this._normalQueue.push(t, e, n), this._queueTick()
                        }

                        function d(t) {
                            this._normalQueue._pushOne(t), this._queueTick()
                        }

                        function h(t) {
                            for (; t.length() > 0;) f(t)
                        }

                        function f(t) {
                            var e = t.shift();
                            if ("function" != typeof e) e._settlePromises(); else {
                                var n = t.shift(), i = t.shift();
                                e.call(n, i)
                            }
                        }

                        l.prototype.setScheduler = function (t) {
                            var e = this._schedule;
                            return this._schedule = t, this._customScheduler = !0, e
                        }, l.prototype.hasCustomScheduler = function () {
                            return this._customScheduler
                        }, l.prototype.enableTrampoline = function () {
                            this._trampolineEnabled = !0
                        }, l.prototype.disableTrampolineIfNecessary = function () {
                            s.hasDevTools && (this._trampolineEnabled = !1)
                        }, l.prototype.haveItemsQueued = function () {
                            return this._isTickUsed || this._haveDrainedQueues
                        }, l.prototype.fatalError = function (t, n) {
                            n ? (e.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), e.exit(2)) : this.throwLater(t)
                        }, l.prototype.throwLater = function (t, e) {
                            if (1 === arguments.length && (e = t, t = function () {
                                throw e
                            }), "undefined" != typeof setTimeout) setTimeout(function () {
                                t(e)
                            }, 0); else try {
                                this._schedule(function () {
                                    t(e)
                                })
                            } catch (t) {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                            }
                        }, s.hasDevTools ? (l.prototype.invokeLater = function (t, e, n) {
                            this._trampolineEnabled ? c.call(this, t, e, n) : this._schedule(function () {
                                setTimeout(function () {
                                    t.call(e, n)
                                }, 100)
                            })
                        }, l.prototype.invoke = function (t, e, n) {
                            this._trampolineEnabled ? u.call(this, t, e, n) : this._schedule(function () {
                                t.call(e, n)
                            })
                        }, l.prototype.settlePromises = function (t) {
                            this._trampolineEnabled ? d.call(this, t) : this._schedule(function () {
                                t._settlePromises()
                            })
                        }) : (l.prototype.invokeLater = c, l.prototype.invoke = u, l.prototype.settlePromises = d), l.prototype._drainQueues = function () {
                            h(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, h(this._lateQueue)
                        }, l.prototype._queueTick = function () {
                            this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
                        }, l.prototype._reset = function () {
                            this._isTickUsed = !1
                        }, n.exports = l, n.exports.firstLineError = r
                    }, {"./queue": 26, "./schedule": 29, "./util": 36}], 3: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t, e, n, i) {
                            var r = !1, a = function (t, e) {
                                this._reject(e)
                            }, o = function (t, e) {
                                e.promiseRejectionQueued = !0, e.bindingPromise._then(a, a, null, this, t)
                            }, s = function (t, e) {
                                0 == (50397184 & this._bitField) && this._resolveCallback(e.target)
                            }, l = function (t, e) {
                                e.promiseRejectionQueued || this._reject(t)
                            };
                            t.prototype.bind = function (a) {
                                r || (r = !0, t.prototype._propagateFrom = i.propagateFromFunction(), t.prototype._boundValue = i.boundValueFunction());
                                var c = n(a), u = new t(e);
                                u._propagateFrom(this, 1);
                                var d = this._target();
                                if (u._setBoundTo(c), c instanceof t) {
                                    var h = {promiseRejectionQueued: !1, promise: u, target: d, bindingPromise: c};
                                    d._then(e, o, void 0, u, h), c._then(s, l, void 0, u, h), u._setOnCancel(c)
                                } else u._resolveCallback(d);
                                return u
                            }, t.prototype._setBoundTo = function (t) {
                                void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField
                            }, t.prototype._isBound = function () {
                                return 2097152 == (2097152 & this._bitField)
                            }, t.bind = function (e, n) {
                                return t.resolve(n).bind(e)
                            }
                        }
                    }, {}], 4: [function (t, e, n) {
                        "use strict";
                        var i;
                        "undefined" != typeof Promise && (i = Promise);
                        var r = t("./promise")();
                        r.noConflict = function () {
                            try {
                                Promise === r && (Promise = i)
                            } catch (t) {
                            }
                            return r
                        }, e.exports = r
                    }, {"./promise": 22}], 5: [function (t, e, n) {
                        "use strict";
                        var i = Object.create;
                        if (i) {
                            var r = i(null), a = i(null);
                            r[" size"] = a[" size"] = 0
                        }
                        e.exports = function (e) {
                            var n = t("./util"), i = n.canEvaluate;

                            function r(t) {
                                var i = this.pop(), r = function (t, i) {
                                    var r;
                                    if (null != t && (r = t[i]), "function" != typeof r) {
                                        var a = "Object " + n.classString(t) + " has no method '" + n.toString(i) + "'";
                                        throw new e.TypeError(a)
                                    }
                                    return r
                                }(t, i);
                                return r.apply(t, this)
                            }

                            function a(t) {
                                return t[this]
                            }

                            function o(t) {
                                var e = +this;
                                return e < 0 && (e = Math.max(0, e + t.length)), t[e]
                            }

                            n.isIdentifier, e.prototype.call = function (t) {
                                var e = [].slice.call(arguments, 1);
                                return e.push(t), this._then(r, void 0, void 0, e, void 0)
                            }, e.prototype.get = function (t) {
                                var e, n = "number" == typeof t;
                                if (n) e = o; else if (i) {
                                    var r = (void 0)(t);
                                    e = null !== r ? r : a
                                } else e = a;
                                return this._then(e, void 0, void 0, t, void 0)
                            }
                        }
                    }, {"./util": 36}], 6: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r) {
                            var a = t("./util"), o = a.tryCatch, s = a.errorObj, l = e._async;
                            e.prototype.break = e.prototype.cancel = function () {
                                if (!r.cancellation()) return this._warn("cancellation is disabled");
                                for (var t = this, e = t; t._isCancellable();) {
                                    if (!t._cancelBy(e)) {
                                        e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                                        break
                                    }
                                    var n = t._cancellationParent;
                                    if (null == n || !n._isCancellable()) {
                                        t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                                        break
                                    }
                                    t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = n
                                }
                            }, e.prototype._branchHasCancelled = function () {
                                this._branchesRemainingToCancel--
                            }, e.prototype._enoughBranchesHaveCancelled = function () {
                                return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                            }, e.prototype._cancelBy = function (t) {
                                return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
                            }, e.prototype._cancelBranched = function () {
                                this._enoughBranchesHaveCancelled() && this._cancel()
                            }, e.prototype._cancel = function () {
                                this._isCancellable() && (this._setCancelled(), l.invoke(this._cancelPromises, this, void 0))
                            }, e.prototype._cancelPromises = function () {
                                this._length() > 0 && this._settlePromises()
                            }, e.prototype._unsetOnCancel = function () {
                                this._onCancelField = void 0
                            }, e.prototype._isCancellable = function () {
                                return this.isPending() && !this._isCancelled()
                            }, e.prototype.isCancellable = function () {
                                return this.isPending() && !this.isCancelled()
                            }, e.prototype._doInvokeOnCancel = function (t, e) {
                                if (a.isArray(t)) for (var n = 0; n < t.length; ++n) this._doInvokeOnCancel(t[n], e); else if (void 0 !== t) if ("function" == typeof t) {
                                    if (!e) {
                                        var i = o(t).call(this._boundValue());
                                        i === s && (this._attachExtraTrace(i.e), l.throwLater(i.e))
                                    }
                                } else t._resultCancelled(this)
                            }, e.prototype._invokeOnCancel = function () {
                                var t = this._onCancel();
                                this._unsetOnCancel(), l.invoke(this._doInvokeOnCancel, this, t)
                            }, e.prototype._invokeInternalOnCancel = function () {
                                this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
                            }, e.prototype._resultCancelled = function () {
                                this.cancel()
                            }
                        }
                    }, {"./util": 36}], 7: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e) {
                            var n = t("./util"), i = t("./es5").keys, r = n.tryCatch, a = n.errorObj;
                            return function (t, o, s) {
                                return function (l) {
                                    var c = s._boundValue();
                                    t:for (var u = 0; u < t.length; ++u) {
                                        var d = t[u];
                                        if (d === Error || null != d && d.prototype instanceof Error) {
                                            if (l instanceof d) return r(o).call(c, l)
                                        } else if ("function" == typeof d) {
                                            var h = r(d).call(c, l);
                                            if (h === a) return h;
                                            if (h) return r(o).call(c, l)
                                        } else if (n.isObject(l)) {
                                            for (var f = i(d), _ = 0; _ < f.length; ++_) {
                                                var g = f[_];
                                                if (d[g] != l[g]) continue t
                                            }
                                            return r(o).call(c, l)
                                        }
                                    }
                                    return e
                                }
                            }
                        }
                    }, {"./es5": 13, "./util": 36}], 8: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t) {
                            var e = !1, n = [];

                            function i() {
                                this._trace = new i.CapturedTrace(r())
                            }

                            function r() {
                                var t = n.length - 1;
                                if (t >= 0) return n[t]
                            }

                            return t.prototype._promiseCreated = function () {
                            }, t.prototype._pushContext = function () {
                            }, t.prototype._popContext = function () {
                                return null
                            }, t._peekContext = t.prototype._peekContext = function () {
                            }, i.prototype._pushContext = function () {
                                void 0 !== this._trace && (this._trace._promiseCreated = null, n.push(this._trace))
                            }, i.prototype._popContext = function () {
                                if (void 0 !== this._trace) {
                                    var t = n.pop(), e = t._promiseCreated;
                                    return t._promiseCreated = null, e
                                }
                                return null
                            }, i.CapturedTrace = null, i.create = function () {
                                if (e) return new i
                            }, i.deactivateLongStackTraces = function () {
                            }, i.activateLongStackTraces = function () {
                                var n = t.prototype._pushContext, a = t.prototype._popContext, o = t._peekContext,
                                    s = t.prototype._peekContext, l = t.prototype._promiseCreated;
                                i.deactivateLongStackTraces = function () {
                                    t.prototype._pushContext = n, t.prototype._popContext = a, t._peekContext = o, t.prototype._peekContext = s, t.prototype._promiseCreated = l, e = !1
                                }, e = !0, t.prototype._pushContext = i.prototype._pushContext, t.prototype._popContext = i.prototype._popContext, t._peekContext = t.prototype._peekContext = r, t.prototype._promiseCreated = function () {
                                    var t = this._peekContext();
                                    t && null == t._promiseCreated && (t._promiseCreated = this)
                                }
                            }, i
                        }
                    }, {}], 9: [function (t, n, i) {
                        "use strict";
                        n.exports = function (n, i) {
                            var r, a, o, s = n._getDomain, l = n._async, c = t("./errors").Warning, u = t("./util"),
                                d = t("./es5"), h = u.canAttachTrace,
                                f = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                                _ = /\((?:timers\.js):\d+:\d+\)/, g = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, p = null,
                                v = null, m = !1, y = !(0 == u.env("BLUEBIRD_DEBUG")),
                                k = !(0 == u.env("BLUEBIRD_WARNINGS") || !y && !u.env("BLUEBIRD_WARNINGS")),
                                b = !(0 == u.env("BLUEBIRD_LONG_STACK_TRACES") || !y && !u.env("BLUEBIRD_LONG_STACK_TRACES")),
                                w = 0 != u.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (k || !!u.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                            n.prototype.suppressUnhandledRejections = function () {
                                var t = this._target();
                                t._bitField = -1048577 & t._bitField | 524288
                            }, n.prototype._ensurePossibleRejectionHandled = function () {
                                if (0 == (524288 & this._bitField)) {
                                    this._setRejectionIsUnhandled();
                                    var t = this;
                                    setTimeout(function () {
                                        t._notifyUnhandledRejection()
                                    }, 1)
                                }
                            }, n.prototype._notifyUnhandledRejectionIsHandled = function () {
                                U("rejectionHandled", r, void 0, this)
                            }, n.prototype._setReturnedNonUndefined = function () {
                                this._bitField = 268435456 | this._bitField
                            }, n.prototype._returnedNonUndefined = function () {
                                return 0 != (268435456 & this._bitField)
                            }, n.prototype._notifyUnhandledRejection = function () {
                                if (this._isRejectionUnhandled()) {
                                    var t = this._settledValue();
                                    this._setUnhandledRejectionIsNotified(), U("unhandledRejection", a, t, this)
                                }
                            }, n.prototype._setUnhandledRejectionIsNotified = function () {
                                this._bitField = 262144 | this._bitField
                            }, n.prototype._unsetUnhandledRejectionIsNotified = function () {
                                this._bitField = -262145 & this._bitField
                            }, n.prototype._isUnhandledRejectionNotified = function () {
                                return (262144 & this._bitField) > 0
                            }, n.prototype._setRejectionIsUnhandled = function () {
                                this._bitField = 1048576 | this._bitField
                            }, n.prototype._unsetRejectionIsUnhandled = function () {
                                this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
                            }, n.prototype._isRejectionUnhandled = function () {
                                return (1048576 & this._bitField) > 0
                            }, n.prototype._warn = function (t, e, n) {
                                return z(t, e, n || this)
                            }, n.onPossiblyUnhandledRejection = function (t) {
                                var e = s();
                                a = "function" == typeof t ? null === e ? t : u.domainBind(e, t) : void 0
                            }, n.onUnhandledRejectionHandled = function (t) {
                                var e = s();
                                r = "function" == typeof t ? null === e ? t : u.domainBind(e, t) : void 0
                            };
                            var x = function () {
                            };
                            n.longStackTraces = function () {
                                if (l.haveItemsQueued() && !Z.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                if (!Z.longStackTraces && G()) {
                                    var t = n.prototype._captureStackTrace, e = n.prototype._attachExtraTrace,
                                        r = n.prototype._dereferenceTrace;
                                    Z.longStackTraces = !0, x = function () {
                                        if (l.haveItemsQueued() && !Z.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                        n.prototype._captureStackTrace = t, n.prototype._attachExtraTrace = e, n.prototype._dereferenceTrace = r, i.deactivateLongStackTraces(), l.enableTrampoline(), Z.longStackTraces = !1
                                    }, n.prototype._captureStackTrace = R, n.prototype._attachExtraTrace = F, n.prototype._dereferenceTrace = H, i.activateLongStackTraces(), l.disableTrampolineIfNecessary()
                                }
                            }, n.hasLongStackTraces = function () {
                                return Z.longStackTraces && G()
                            };
                            var $ = function () {
                                try {
                                    if ("function" == typeof CustomEvent) {
                                        var t = new CustomEvent("CustomEvent");
                                        return u.global.dispatchEvent(t), function (t, e) {
                                            var n = {detail: e, cancelable: !0};
                                            d.defineProperty(n, "promise", {value: e.promise}), d.defineProperty(n, "reason", {value: e.reason});
                                            var i = new CustomEvent(t.toLowerCase(), n);
                                            return !u.global.dispatchEvent(i)
                                        }
                                    }
                                    if ("function" == typeof Event) {
                                        var t = new Event("CustomEvent");
                                        return u.global.dispatchEvent(t), function (t, e) {
                                            var n = new Event(t.toLowerCase(), {cancelable: !0});
                                            return n.detail = e, d.defineProperty(n, "promise", {value: e.promise}), d.defineProperty(n, "reason", {value: e.reason}), !u.global.dispatchEvent(n)
                                        }
                                    }
                                    var t = document.createEvent("CustomEvent");
                                    return t.initCustomEvent("testingtheevent", !1, !0, {}), u.global.dispatchEvent(t), function (t, e) {
                                        var n = document.createEvent("CustomEvent");
                                        return n.initCustomEvent(t.toLowerCase(), !1, !0, e), !u.global.dispatchEvent(n)
                                    }
                                } catch (t) {
                                }
                                return function () {
                                    return !1
                                }
                            }(), T = u.isNode ? function () {
                                return e.emit.apply(e, arguments)
                            } : u.global ? function (t) {
                                var e = "on" + t.toLowerCase(), n = u.global[e];
                                return !!n && (n.apply(u.global, [].slice.call(arguments, 1)), !0)
                            } : function () {
                                return !1
                            };

                            function S(t, e) {
                                return {promise: e}
                            }

                            var C = {
                                promiseCreated: S,
                                promiseFulfilled: S,
                                promiseRejected: S,
                                promiseResolved: S,
                                promiseCancelled: S,
                                promiseChained: function (t, e, n) {
                                    return {promise: e, child: n}
                                },
                                warning: function (t, e) {
                                    return {warning: e}
                                },
                                unhandledRejection: function (t, e, n) {
                                    return {reason: e, promise: n}
                                },
                                rejectionHandled: S
                            }, E = function (t) {
                                var e = !1;
                                try {
                                    e = T.apply(null, arguments)
                                } catch (t) {
                                    l.throwLater(t), e = !0
                                }
                                var n = !1;
                                try {
                                    n = $(t, C[t].apply(null, arguments))
                                } catch (t) {
                                    l.throwLater(t), n = !0
                                }
                                return n || e
                            };

                            function D() {
                                return !1
                            }

                            function A(t, e, n) {
                                var i = this;
                                try {
                                    t(e, n, function (t) {
                                        if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + u.toString(t));
                                        i._attachCancellationCallback(t)
                                    })
                                } catch (t) {
                                    return t
                                }
                            }

                            function N(t) {
                                if (!this._isCancellable()) return this;
                                var e = this._onCancel();
                                void 0 !== e ? u.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t)
                            }

                            function M() {
                                return this._onCancelField
                            }

                            function I(t) {
                                this._onCancelField = t
                            }

                            function P() {
                                this._cancellationParent = void 0, this._onCancelField = void 0
                            }

                            function L(t, e) {
                                if (0 != (1 & e)) {
                                    this._cancellationParent = t;
                                    var n = t._branchesRemainingToCancel;
                                    void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1
                                }
                                0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                            }

                            n.config = function (t) {
                                if ("longStackTraces" in (t = Object(t)) && (t.longStackTraces ? n.longStackTraces() : !t.longStackTraces && n.hasLongStackTraces() && x()), "warnings" in t) {
                                    var e = t.warnings;
                                    Z.warnings = !!e, w = Z.warnings, u.isObject(e) && "wForgottenReturn" in e && (w = !!e.wForgottenReturn)
                                }
                                if ("cancellation" in t && t.cancellation && !Z.cancellation) {
                                    if (l.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                                    n.prototype._clearCancellationData = P, n.prototype._propagateFrom = L, n.prototype._onCancel = M, n.prototype._setOnCancel = I, n.prototype._attachCancellationCallback = N, n.prototype._execute = A, O = L, Z.cancellation = !0
                                }
                                return "monitoring" in t && (t.monitoring && !Z.monitoring ? (Z.monitoring = !0, n.prototype._fireEvent = E) : !t.monitoring && Z.monitoring && (Z.monitoring = !1, n.prototype._fireEvent = D)), n
                            }, n.prototype._fireEvent = D, n.prototype._execute = function (t, e, n) {
                                try {
                                    t(e, n)
                                } catch (t) {
                                    return t
                                }
                            }, n.prototype._onCancel = function () {
                            }, n.prototype._setOnCancel = function (t) {
                            }, n.prototype._attachCancellationCallback = function (t) {
                            }, n.prototype._captureStackTrace = function () {
                            }, n.prototype._attachExtraTrace = function () {
                            }, n.prototype._dereferenceTrace = function () {
                            }, n.prototype._clearCancellationData = function () {
                            }, n.prototype._propagateFrom = function (t, e) {
                            };
                            var O = function (t, e) {
                                0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                            };

                            function j() {
                                var t = this._boundTo;
                                return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value() : void 0 : t
                            }

                            function R() {
                                this._trace = new X(this._peekContext())
                            }

                            function F(t, e) {
                                if (h(t)) {
                                    var n = this._trace;
                                    if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t); else if (!t.__stackCleaned__) {
                                        var i = V(t);
                                        u.notEnumerableProp(t, "stack", i.message + "\n" + i.stack.join("\n")), u.notEnumerableProp(t, "__stackCleaned__", !0)
                                    }
                                }
                            }

                            function H() {
                                this._trace = void 0
                            }

                            function z(t, e, i) {
                                if (Z.warnings) {
                                    var r, a = new c(t);
                                    if (e) i._attachExtraTrace(a); else if (Z.longStackTraces && (r = n._peekContext())) r.attachExtraTrace(a); else {
                                        var o = V(a);
                                        a.stack = o.message + "\n" + o.stack.join("\n")
                                    }
                                    E("warning", a) || W(a, "", !0)
                                }
                            }

                            function B(t) {
                                for (var e = [], n = 0; n < t.length; ++n) {
                                    var i = t[n], r = "    (No stack trace)" === i || p.test(i), a = r && K(i);
                                    r && !a && (m && " " !== i.charAt(0) && (i = "    " + i), e.push(i))
                                }
                                return e
                            }

                            function V(t) {
                                var e = t.stack, n = t.toString();
                                return e = "string" == typeof e && e.length > 0 ? function (t) {
                                    for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
                                        var i = e[n];
                                        if ("    (No stack trace)" === i || p.test(i)) break
                                    }
                                    return n > 0 && "SyntaxError" != t.name && (e = e.slice(n)), e
                                }(t) : ["    (No stack trace)"], {message: n, stack: "SyntaxError" == t.name ? e : B(e)}
                            }

                            function W(t, e, n) {
                                if ("undefined" != typeof console) {
                                    var i;
                                    if (u.isObject(t)) {
                                        var r = t.stack;
                                        i = e + v(r, t)
                                    } else i = e + String(t);
                                    "function" == typeof o ? o(i, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(i)
                                }
                            }

                            function U(t, e, n, i) {
                                var r = !1;
                                try {
                                    "function" == typeof e && (r = !0, "rejectionHandled" === t ? e(i) : e(n, i))
                                } catch (t) {
                                    l.throwLater(t)
                                }
                                "unhandledRejection" === t ? E(t, n, i) || r || W(n, "Unhandled rejection ") : E(t, i)
                            }

                            function q(t) {
                                var e;
                                if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]"; else {
                                    if (e = t && "function" == typeof t.toString ? t.toString() : u.toString(t), /\[object [a-zA-Z0-9$_]+\]/.test(e)) try {
                                        var n = JSON.stringify(t);
                                        e = n
                                    } catch (t) {
                                    }
                                    0 === e.length && (e = "(empty array)")
                                }
                                return "(<" + function (t) {
                                    return t.length < 41 ? t : t.substr(0, 38) + "..."
                                }(e) + ">, no stack trace)"
                            }

                            function G() {
                                return "function" == typeof Q
                            }

                            var K = function () {
                                return !1
                            }, Y = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;

                            function J(t) {
                                var e = t.match(Y);
                                if (e) return {fileName: e[1], line: parseInt(e[2], 10)}
                            }

                            function X(t) {
                                this._parent = t, this._promisesCreated = 0;
                                var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                                Q(this, X), e > 32 && this.uncycle()
                            }

                            u.inherits(X, Error), i.CapturedTrace = X, X.prototype.uncycle = function () {
                                var t = this._length;
                                if (!(t < 2)) {
                                    for (var e = [], n = {}, i = 0, r = this; void 0 !== r; ++i) e.push(r), r = r._parent;
                                    for (var i = (t = this._length = i) - 1; i >= 0; --i) {
                                        var a = e[i].stack;
                                        void 0 === n[a] && (n[a] = i)
                                    }
                                    for (var i = 0; i < t; ++i) {
                                        var o = e[i].stack, s = n[o];
                                        if (void 0 !== s && s !== i) {
                                            s > 0 && (e[s - 1]._parent = void 0, e[s - 1]._length = 1), e[i]._parent = void 0, e[i]._length = 1;
                                            var l = i > 0 ? e[i - 1] : this;
                                            s < t - 1 ? (l._parent = e[s + 1], l._parent.uncycle(), l._length = l._parent._length + 1) : (l._parent = void 0, l._length = 1);
                                            for (var c = l._length + 1, u = i - 2; u >= 0; --u) e[u]._length = c, c++;
                                            return
                                        }
                                    }
                                }
                            }, X.prototype.attachExtraTrace = function (t) {
                                if (!t.__stackCleaned__) {
                                    this.uncycle();
                                    for (var e = V(t), n = e.message, i = [e.stack], r = this; void 0 !== r;) i.push(B(r.stack.split("\n"))), r = r._parent;
                                    !function (t) {
                                        for (var e = t[0], n = 1; n < t.length; ++n) {
                                            for (var i = t[n], r = e.length - 1, a = e[r], o = -1, s = i.length - 1; s >= 0; --s) if (i[s] === a) {
                                                o = s;
                                                break
                                            }
                                            for (var s = o; s >= 0; --s) {
                                                var l = i[s];
                                                if (e[r] !== l) break;
                                                e.pop(), r--
                                            }
                                            e = i
                                        }
                                    }(i), function (t) {
                                        for (var e = 0; e < t.length; ++e) (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--)
                                    }(i), u.notEnumerableProp(t, "stack", function (t, e) {
                                        for (var n = 0; n < e.length - 1; ++n) e[n].push("From previous event:"), e[n] = e[n].join("\n");
                                        return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n")
                                    }(n, i)), u.notEnumerableProp(t, "__stackCleaned__", !0)
                                }
                            };
                            var Q = function () {
                                var t = /^\s*at\s*/, e = function (t, e) {
                                    return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : q(e)
                                };
                                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                    Error.stackTraceLimit += 6, p = t, v = e;
                                    var n = Error.captureStackTrace;
                                    return K = function (t) {
                                        return f.test(t)
                                    }, function (t, e) {
                                        Error.stackTraceLimit += 6, n(t, e), Error.stackTraceLimit -= 6
                                    }
                                }
                                var i, r = new Error;
                                if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return p = /@/, v = e, m = !0, function (t) {
                                    t.stack = (new Error).stack
                                };
                                try {
                                    throw new Error
                                } catch (t) {
                                    i = "stack" in t
                                }
                                return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (v = function (t, e) {
                                    return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? q(e) : e.toString()
                                }, null) : (p = t, v = e, function (t) {
                                    Error.stackTraceLimit += 6;
                                    try {
                                        throw new Error
                                    } catch (e) {
                                        t.stack = e.stack
                                    }
                                    Error.stackTraceLimit -= 6
                                })
                            }();
                            "undefined" != typeof console && void 0 !== console.warn && (o = function (t) {
                                console.warn(t)
                            }, u.isNode && e.stderr.isTTY ? o = function (t, e) {
                                var n = e ? "[33m" : "[31m";
                                console.warn(n + t + "[0m\n")
                            } : u.isNode || "string" != typeof (new Error).stack || (o = function (t, e) {
                                console.warn("%c" + t, e ? "color: darkorange" : "color: red")
                            }));
                            var Z = {warnings: k, longStackTraces: !1, cancellation: !1, monitoring: !1};
                            return b && n.longStackTraces(), {
                                longStackTraces: function () {
                                    return Z.longStackTraces
                                }, warnings: function () {
                                    return Z.warnings
                                }, cancellation: function () {
                                    return Z.cancellation
                                }, monitoring: function () {
                                    return Z.monitoring
                                }, propagateFromFunction: function () {
                                    return O
                                }, boundValueFunction: function () {
                                    return j
                                }, checkForgottenReturns: function (t, e, n, i, r) {
                                    if (void 0 === t && null !== e && w) {
                                        if (void 0 !== r && r._returnedNonUndefined()) return;
                                        if (0 == (65535 & i._bitField)) return;
                                        n && (n += " ");
                                        var a = "", o = "";
                                        if (e._trace) {
                                            for (var s = e._trace.stack.split("\n"), l = B(s), c = l.length - 1; c >= 0; --c) {
                                                var u = l[c];
                                                if (!_.test(u)) {
                                                    var d = u.match(g);
                                                    d && (a = "at " + d[1] + ":" + d[2] + ":" + d[3] + " ");
                                                    break
                                                }
                                            }
                                            if (l.length > 0) for (var h = l[0], c = 0; c < s.length; ++c) if (s[c] === h) {
                                                c > 0 && (o = "\n" + s[c - 1]);
                                                break
                                            }
                                        }
                                        var f = "a promise was created in a " + n + "handler " + a + "but was not returned from it, see http://goo.gl/rRqMUw" + o;
                                        i._warn(f, !0, e)
                                    }
                                }, setBounds: function (t, e) {
                                    if (G()) {
                                        for (var n, i, r = t.stack.split("\n"), a = e.stack.split("\n"), o = -1, s = -1, l = 0; l < r.length; ++l) {
                                            var c = J(r[l]);
                                            if (c) {
                                                n = c.fileName, o = c.line;
                                                break
                                            }
                                        }
                                        for (var l = 0; l < a.length; ++l) {
                                            var c = J(a[l]);
                                            if (c) {
                                                i = c.fileName, s = c.line;
                                                break
                                            }
                                        }
                                        o < 0 || s < 0 || !n || !i || n !== i || o >= s || (K = function (t) {
                                            if (f.test(t)) return !0;
                                            var e = J(t);
                                            return !!(e && e.fileName === n && o <= e.line && e.line <= s)
                                        })
                                    }
                                }, warn: z, deprecated: function (t, e) {
                                    var n = t + " is deprecated and will be removed in a future version.";
                                    return e && (n += " Use " + e + " instead."), z(n)
                                }, CapturedTrace: X, fireDomEvent: $, fireGlobalEvent: T
                            }
                        }
                    }, {"./errors": 12, "./es5": 13, "./util": 36}], 10: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t) {
                            function e() {
                                return this.value
                            }

                            function n() {
                                throw this.reason
                            }

                            t.prototype.return = t.prototype.thenReturn = function (n) {
                                return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, {value: n}, void 0)
                            }, t.prototype.throw = t.prototype.thenThrow = function (t) {
                                return this._then(n, void 0, void 0, {reason: t}, void 0)
                            }, t.prototype.catchThrow = function (t) {
                                if (arguments.length <= 1) return this._then(void 0, n, void 0, {reason: t}, void 0);
                                var e = arguments[1];
                                return this.caught(t, function () {
                                    throw e
                                })
                            }, t.prototype.catchReturn = function (n) {
                                if (arguments.length <= 1) return n instanceof t && n.suppressUnhandledRejections(), this._then(void 0, e, void 0, {value: n}, void 0);
                                var i = arguments[1];
                                return i instanceof t && i.suppressUnhandledRejections(), this.caught(n, function () {
                                    return i
                                })
                            }
                        }
                    }, {}], 11: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t, e) {
                            var n = t.reduce, i = t.all;

                            function r() {
                                return i(this)
                            }

                            t.prototype.each = function (t) {
                                return n(this, t, e, 0)._then(r, void 0, void 0, this, void 0)
                            }, t.prototype.mapSeries = function (t) {
                                return n(this, t, e, e)
                            }, t.each = function (t, i) {
                                return n(t, i, e, 0)._then(r, void 0, void 0, t, void 0)
                            }, t.mapSeries = function (t, i) {
                                return n(t, i, e, e)
                            }
                        }
                    }, {}], 12: [function (t, e, n) {
                        "use strict";
                        var i, r, a = t("./es5"), o = a.freeze, s = t("./util"), l = s.inherits,
                            c = s.notEnumerableProp;

                        function u(t, e) {
                            function n(i) {
                                if (!(this instanceof n)) return new n(i);
                                c(this, "message", "string" == typeof i ? i : e), c(this, "name", t), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
                            }

                            return l(n, Error), n
                        }

                        var d = u("Warning", "warning"), h = u("CancellationError", "cancellation error"),
                            f = u("TimeoutError", "timeout error"), _ = u("AggregateError", "aggregate error");
                        try {
                            i = TypeError, r = RangeError
                        } catch (t) {
                            i = u("TypeError", "type error"), r = u("RangeError", "range error")
                        }
                        for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), p = 0; p < g.length; ++p) "function" == typeof Array.prototype[g[p]] && (_.prototype[g[p]] = Array.prototype[g[p]]);
                        a.defineProperty(_.prototype, "length", {
                            value: 0,
                            configurable: !1,
                            writable: !0,
                            enumerable: !0
                        }), _.prototype.isOperational = !0;
                        var v = 0;

                        function m(t) {
                            if (!(this instanceof m)) return new m(t);
                            c(this, "name", "OperationalError"), c(this, "message", t), this.cause = t, this.isOperational = !0, t instanceof Error ? (c(this, "message", t.message), c(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
                        }

                        _.prototype.toString = function () {
                            var t = Array(4 * v + 1).join(" "), e = "\n" + t + "AggregateError of:\n";
                            v++, t = Array(4 * v + 1).join(" ");
                            for (var n = 0; n < this.length; ++n) {
                                for (var i = this[n] === this ? "[Circular AggregateError]" : this[n] + "", r = i.split("\n"), a = 0; a < r.length; ++a) r[a] = t + r[a];
                                i = r.join("\n"), e += i + "\n"
                            }
                            return v--, e
                        }, l(m, Error);
                        var y = Error.__BluebirdErrorTypes__;
                        y || (y = o({
                            CancellationError: h,
                            TimeoutError: f,
                            OperationalError: m,
                            RejectionError: m,
                            AggregateError: _
                        }), a.defineProperty(Error, "__BluebirdErrorTypes__", {
                            value: y,
                            writable: !1,
                            enumerable: !1,
                            configurable: !1
                        })), e.exports = {
                            Error: Error,
                            TypeError: i,
                            RangeError: r,
                            CancellationError: y.CancellationError,
                            OperationalError: y.OperationalError,
                            TimeoutError: y.TimeoutError,
                            AggregateError: y.AggregateError,
                            Warning: d
                        }
                    }, {"./es5": 13, "./util": 36}], 13: [function (t, e, n) {
                        var i = function () {
                            "use strict";
                            return void 0 === this
                        }();
                        if (i) e.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            getDescriptor: Object.getOwnPropertyDescriptor,
                            keys: Object.keys,
                            names: Object.getOwnPropertyNames,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: i,
                            propertyIsWritable: function (t, e) {
                                var n = Object.getOwnPropertyDescriptor(t, e);
                                return !(n && !n.writable && !n.set)
                            }
                        }; else {
                            var r = {}.hasOwnProperty, a = {}.toString, o = {}.constructor.prototype, s = function (t) {
                                var e = [];
                                for (var n in t) r.call(t, n) && e.push(n);
                                return e
                            };
                            e.exports = {
                                isArray: function (t) {
                                    try {
                                        return "[object Array]" === a.call(t)
                                    } catch (t) {
                                        return !1
                                    }
                                }, keys: s, names: s, defineProperty: function (t, e, n) {
                                    return t[e] = n.value, t
                                }, getDescriptor: function (t, e) {
                                    return {value: t[e]}
                                }, freeze: function (t) {
                                    return t
                                }, getPrototypeOf: function (t) {
                                    try {
                                        return Object(t).constructor.prototype
                                    } catch (t) {
                                        return o
                                    }
                                }, isES5: i, propertyIsWritable: function () {
                                    return !0
                                }
                            }
                        }
                    }, {}], 14: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t, e) {
                            var n = t.map;
                            t.prototype.filter = function (t, i) {
                                return n(this, t, i, e)
                            }, t.filter = function (t, i, r) {
                                return n(t, i, r, e)
                            }
                        }
                    }, {}], 15: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i) {
                            var r = t("./util"), a = e.CancellationError, o = r.errorObj, s = t("./catch_filter")(i);

                            function l(t, e, n) {
                                this.promise = t, this.type = e, this.handler = n, this.called = !1, this.cancelPromise = null
                            }

                            function c(t) {
                                this.finallyHandler = t
                            }

                            function u(t, e) {
                                return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0)
                            }

                            function d() {
                                return f.call(this, this.promise._target()._settledValue())
                            }

                            function h(t) {
                                if (!u(this, t)) return o.e = t, o
                            }

                            function f(t) {
                                var r = this.promise, s = this.handler;
                                if (!this.called) {
                                    this.called = !0;
                                    var l = this.isFinallyHandler() ? s.call(r._boundValue()) : s.call(r._boundValue(), t);
                                    if (l === i) return l;
                                    if (void 0 !== l) {
                                        r._setReturnedNonUndefined();
                                        var f = n(l, r);
                                        if (f instanceof e) {
                                            if (null != this.cancelPromise) {
                                                if (f._isCancelled()) {
                                                    var _ = new a("late cancellation observer");
                                                    return r._attachExtraTrace(_), o.e = _, o
                                                }
                                                f.isPending() && f._attachCancellationCallback(new c(this))
                                            }
                                            return f._then(d, h, void 0, this, void 0)
                                        }
                                    }
                                }
                                return r.isRejected() ? (u(this), o.e = t, o) : (u(this), t)
                            }

                            return l.prototype.isFinallyHandler = function () {
                                return 0 === this.type
                            }, c.prototype._resultCancelled = function () {
                                u(this.finallyHandler)
                            }, e.prototype._passThrough = function (t, e, n, i) {
                                return "function" != typeof t ? this.then() : this._then(n, i, void 0, new l(this, e, t), void 0)
                            }, e.prototype.lastly = e.prototype.finally = function (t) {
                                return this._passThrough(t, 0, f, f)
                            }, e.prototype.tap = function (t) {
                                return this._passThrough(t, 1, f)
                            }, e.prototype.tapCatch = function (t) {
                                var n = arguments.length;
                                if (1 === n) return this._passThrough(t, 1, void 0, f);
                                var i, a = new Array(n - 1), o = 0;
                                for (i = 0; i < n - 1; ++i) {
                                    var l = arguments[i];
                                    if (!r.isObject(l)) return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + r.classString(l)));
                                    a[o++] = l
                                }
                                a.length = o;
                                var c = arguments[i];
                                return this._passThrough(s(a, c, this), 1, void 0, f)
                            }, l
                        }
                    }, {"./catch_filter": 7, "./util": 36}], 16: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r, a, o) {
                            var s = t("./errors"), l = s.TypeError, c = t("./util"), u = c.errorObj, d = c.tryCatch,
                                h = [];

                            function f(t, n, r, a) {
                                if (o.cancellation()) {
                                    var s = new e(i), l = this._finallyPromise = new e(i);
                                    this._promise = s.lastly(function () {
                                        return l
                                    }), s._captureStackTrace(), s._setOnCancel(this)
                                } else {
                                    var c = this._promise = new e(i);
                                    c._captureStackTrace()
                                }
                                this._stack = a, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof r ? [r].concat(h) : h, this._yieldedPromise = null, this._cancellationPhase = !1
                            }

                            c.inherits(f, a), f.prototype._isResolved = function () {
                                return null === this._promise
                            }, f.prototype._cleanup = function () {
                                this._promise = this._generator = null, o.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
                            }, f.prototype._promiseCancelled = function () {
                                if (!this._isResolved()) {
                                    var t, n = void 0 !== this._generator.return;
                                    if (n) this._promise._pushContext(), t = d(this._generator.return).call(this._generator, void 0), this._promise._popContext(); else {
                                        var i = new e.CancellationError("generator .return() sentinel");
                                        e.coroutine.returnSentinel = i, this._promise._attachExtraTrace(i), this._promise._pushContext(), t = d(this._generator.throw).call(this._generator, i), this._promise._popContext()
                                    }
                                    this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t)
                                }
                            }, f.prototype._promiseFulfilled = function (t) {
                                this._yieldedPromise = null, this._promise._pushContext();
                                var e = d(this._generator.next).call(this._generator, t);
                                this._promise._popContext(), this._continue(e)
                            }, f.prototype._promiseRejected = function (t) {
                                this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();
                                var e = d(this._generator.throw).call(this._generator, t);
                                this._promise._popContext(), this._continue(e)
                            }, f.prototype._resultCancelled = function () {
                                if (this._yieldedPromise instanceof e) {
                                    var t = this._yieldedPromise;
                                    this._yieldedPromise = null, t.cancel()
                                }
                            }, f.prototype.promise = function () {
                                return this._promise
                            }, f.prototype._run = function () {
                                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0)
                            }, f.prototype._continue = function (t) {
                                var n = this._promise;
                                if (t === u) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);
                                var i = t.value;
                                if (!0 === t.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(i);
                                var a = r(i, this._promise);
                                if (a instanceof e || null !== (a = function (t, n, i) {
                                    for (var a = 0; a < n.length; ++a) {
                                        i._pushContext();
                                        var o = d(n[a])(t);
                                        if (i._popContext(), o === u) {
                                            i._pushContext();
                                            var s = e.reject(u.e);
                                            return i._popContext(), s
                                        }
                                        var l = r(o, i);
                                        if (l instanceof e) return l
                                    }
                                    return null
                                }(a, this._yieldHandlers, this._promise))) {
                                    var o = (a = a._target())._bitField;
                                    0 == (50397184 & o) ? (this._yieldedPromise = a, a._proxy(this, null)) : 0 != (33554432 & o) ? e._async.invoke(this._promiseFulfilled, this, a._value()) : 0 != (16777216 & o) ? e._async.invoke(this._promiseRejected, this, a._reason()) : this._promiseCancelled()
                                } else this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(i)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")))
                            }, e.coroutine = function (t, e) {
                                if ("function" != typeof t) throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                var n = Object(e).yieldHandler, i = f, r = (new Error).stack;
                                return function () {
                                    var e = t.apply(this, arguments), a = new i(void 0, void 0, n, r), o = a.promise();
                                    return a._generator = e, a._promiseFulfilled(void 0), o
                                }
                            }, e.coroutine.addYieldHandler = function (t) {
                                if ("function" != typeof t) throw new l("expecting a function but got " + c.classString(t));
                                h.push(t)
                            }, e.spawn = function (t) {
                                if (o.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                                var i = new f(t, this), r = i.promise();
                                return i._run(e.spawn), r
                            }
                        }
                    }, {"./errors": 12, "./util": 36}], 17: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r, a, o) {
                            var s = t("./util");
                            s.canEvaluate, s.tryCatch, s.errorObj, e.join = function () {
                                var t, e = arguments.length - 1;
                                e > 0 && "function" == typeof arguments[e] && (t = arguments[e]);
                                var i = [].slice.call(arguments);
                                t && i.pop();
                                var r = new n(i).promise();
                                return void 0 !== t ? r.spread(t) : r
                            }
                        }
                    }, {"./util": 36}], 18: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r, a, o) {
                            var s = e._getDomain, l = t("./util"), c = l.tryCatch, u = l.errorObj, d = e._async;

                            function h(t, e, n, i) {
                                this.constructor$(t), this._promise._captureStackTrace();
                                var r = s();
                                this._callback = null === r ? e : l.domainBind(r, e), this._preservedValues = i === a ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], d.invoke(this._asyncInit, this, void 0)
                            }

                            function f(t, n, r, a) {
                                if ("function" != typeof n) return i("expecting a function but got " + l.classString(n));
                                var o = 0;
                                if (void 0 !== r) {
                                    if ("object" != typeof r || null === r) return e.reject(new TypeError("options argument must be an object but it is " + l.classString(r)));
                                    if ("number" != typeof r.concurrency) return e.reject(new TypeError("'concurrency' must be a number but it is " + l.classString(r.concurrency)));
                                    o = r.concurrency
                                }
                                return o = "number" == typeof o && isFinite(o) && o >= 1 ? o : 0, new h(t, n, o, a).promise()
                            }

                            l.inherits(h, n), h.prototype._asyncInit = function () {
                                this._init$(void 0, -2)
                            }, h.prototype._init = function () {
                            }, h.prototype._promiseFulfilled = function (t, n) {
                                var i = this._values, a = this.length(), s = this._preservedValues, l = this._limit;
                                if (n < 0) {
                                    if (i[n = -1 * n - 1] = t, l >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0
                                } else {
                                    if (l >= 1 && this._inFlight >= l) return i[n] = t, this._queue.push(n), !1;
                                    null !== s && (s[n] = t);
                                    var d = this._promise, h = this._callback, f = d._boundValue();
                                    d._pushContext();
                                    var _ = c(h).call(f, t, n, a), g = d._popContext();
                                    if (o.checkForgottenReturns(_, g, null !== s ? "Promise.filter" : "Promise.map", d), _ === u) return this._reject(_.e), !0;
                                    var p = r(_, this._promise);
                                    if (p instanceof e) {
                                        var v = (p = p._target())._bitField;
                                        if (0 == (50397184 & v)) return l >= 1 && this._inFlight++, i[n] = p, p._proxy(this, -1 * (n + 1)), !1;
                                        if (0 == (33554432 & v)) return 0 != (16777216 & v) ? (this._reject(p._reason()), !0) : (this._cancel(), !0);
                                        _ = p._value()
                                    }
                                    i[n] = _
                                }
                                var m = ++this._totalResolved;
                                return m >= a && (null !== s ? this._filter(i, s) : this._resolve(i), !0)
                            }, h.prototype._drainQueue = function () {
                                for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
                                    if (this._isResolved()) return;
                                    var i = t.pop();
                                    this._promiseFulfilled(n[i], i)
                                }
                            }, h.prototype._filter = function (t, e) {
                                for (var n = e.length, i = new Array(n), r = 0, a = 0; a < n; ++a) t[a] && (i[r++] = e[a]);
                                i.length = r, this._resolve(i)
                            }, h.prototype.preservedValues = function () {
                                return this._preservedValues
                            }, e.prototype.map = function (t, e) {
                                return f(this, t, e, null)
                            }, e.map = function (t, e, n, i) {
                                return f(t, e, n, i)
                            }
                        }
                    }, {"./util": 36}], 19: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r, a) {
                            var o = t("./util"), s = o.tryCatch;
                            e.method = function (t) {
                                if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + o.classString(t));
                                return function () {
                                    var i = new e(n);
                                    i._captureStackTrace(), i._pushContext();
                                    var r = s(t).apply(this, arguments), o = i._popContext();
                                    return a.checkForgottenReturns(r, o, "Promise.method", i), i._resolveFromSyncValue(r), i
                                }
                            }, e.attempt = e.try = function (t) {
                                if ("function" != typeof t) return r("expecting a function but got " + o.classString(t));
                                var i, l = new e(n);
                                if (l._captureStackTrace(), l._pushContext(), arguments.length > 1) {
                                    a.deprecated("calling Promise.try with more than 1 argument");
                                    var c = arguments[1], u = arguments[2];
                                    i = o.isArray(c) ? s(t).apply(u, c) : s(t).call(u, c)
                                } else i = s(t)();
                                var d = l._popContext();
                                return a.checkForgottenReturns(i, d, "Promise.try", l), l._resolveFromSyncValue(i), l
                            }, e.prototype._resolveFromSyncValue = function (t) {
                                t === o.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0)
                            }
                        }
                    }, {"./util": 36}], 20: [function (t, e, n) {
                        "use strict";
                        var i = t("./util"), r = i.maybeWrapAsError, a = t("./errors"), o = a.OperationalError,
                            s = t("./es5"), l = /^(?:name|message|stack|cause)$/;

                        function c(t) {
                            var e;
                            if (function (t) {
                                return t instanceof Error && s.getPrototypeOf(t) === Error.prototype
                            }(t)) {
                                (e = new o(t)).name = t.name, e.message = t.message, e.stack = t.stack;
                                for (var n = s.keys(t), r = 0; r < n.length; ++r) {
                                    var a = n[r];
                                    l.test(a) || (e[a] = t[a])
                                }
                                return e
                            }
                            return i.markAsOriginatingFromRejection(t), t
                        }

                        e.exports = function (t, e) {
                            return function (n, i) {
                                if (null !== t) {
                                    if (n) {
                                        var a = c(r(n));
                                        t._attachExtraTrace(a), t._reject(a)
                                    } else if (e) {
                                        var o = [].slice.call(arguments, 1);
                                        t._fulfill(o)
                                    } else t._fulfill(i);
                                    t = null
                                }
                            }
                        }
                    }, {"./errors": 12, "./es5": 13, "./util": 36}], 21: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e) {
                            var n = t("./util"), i = e._async, r = n.tryCatch, a = n.errorObj;

                            function o(t, e) {
                                if (!n.isArray(t)) return s.call(this, t, e);
                                var o = r(e).apply(this._boundValue(), [null].concat(t));
                                o === a && i.throwLater(o.e)
                            }

                            function s(t, e) {
                                var n = this._boundValue(),
                                    o = void 0 === t ? r(e).call(n, null) : r(e).call(n, null, t);
                                o === a && i.throwLater(o.e)
                            }

                            function l(t, e) {
                                if (!t) {
                                    var n = new Error(t + "");
                                    n.cause = t, t = n
                                }
                                var o = r(e).call(this._boundValue(), t);
                                o === a && i.throwLater(o.e)
                            }

                            e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
                                if ("function" == typeof t) {
                                    var n = s;
                                    void 0 !== e && Object(e).spread && (n = o), this._then(n, l, void 0, this, t)
                                }
                                return this
                            }
                        }
                    }, {"./util": 36}], 22: [function (t, n, i) {
                        "use strict";
                        n.exports = function () {
                            var i = function () {
                                return new _("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                            }, r = function () {
                                return new D.PromiseInspection(this._target())
                            }, a = function (t) {
                                return D.reject(new _(t))
                            };

                            function o() {
                            }

                            var s, l = {}, c = t("./util");
                            s = c.isNode ? function () {
                                var t = e.domain;
                                return void 0 === t && (t = null), t
                            } : function () {
                                return null
                            }, c.notEnumerableProp(D, "_getDomain", s);
                            var u = t("./es5"), d = t("./async"), h = new d;
                            u.defineProperty(D, "_async", {value: h});
                            var f = t("./errors"), _ = D.TypeError = f.TypeError;
                            D.RangeError = f.RangeError;
                            var g = D.CancellationError = f.CancellationError;
                            D.TimeoutError = f.TimeoutError, D.OperationalError = f.OperationalError, D.RejectionError = f.OperationalError, D.AggregateError = f.AggregateError;
                            var p = function () {
                                }, v = {}, m = {}, y = t("./thenables")(D, p), k = t("./promise_array")(D, p, y, a, o),
                                b = t("./context")(D), w = b.create, x = t("./debuggability")(D, b),
                                $ = (x.CapturedTrace, t("./finally")(D, y, m)), T = t("./catch_filter")(m),
                                S = t("./nodeback"), C = c.errorObj, E = c.tryCatch;

                            function D(t) {
                                t !== p && function (t, e) {
                                    if (null == t || t.constructor !== D) throw new _("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                                    if ("function" != typeof e) throw new _("expecting a function but got " + c.classString(e))
                                }(this, t), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(t), this._promiseCreated(), this._fireEvent("promiseCreated", this)
                            }

                            function A(t) {
                                this.promise._resolveCallback(t)
                            }

                            function N(t) {
                                this.promise._rejectCallback(t, !1)
                            }

                            function M(t) {
                                var e = new D(p);
                                e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t
                            }

                            return D.prototype.toString = function () {
                                return "[object Promise]"
                            }, D.prototype.caught = D.prototype.catch = function (t) {
                                var e = arguments.length;
                                if (e > 1) {
                                    var n, i = new Array(e - 1), r = 0;
                                    for (n = 0; n < e - 1; ++n) {
                                        var o = arguments[n];
                                        if (!c.isObject(o)) return a("Catch statement predicate: expecting an object but got " + c.classString(o));
                                        i[r++] = o
                                    }
                                    return i.length = r, t = arguments[n], this.then(void 0, T(i, t, this))
                                }
                                return this.then(void 0, t)
                            }, D.prototype.reflect = function () {
                                return this._then(r, r, void 0, this, void 0)
                            }, D.prototype.then = function (t, e) {
                                if (x.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                                    var n = ".then() only accepts functions but was passed: " + c.classString(t);
                                    arguments.length > 1 && (n += ", " + c.classString(e)), this._warn(n)
                                }
                                return this._then(t, e, void 0, void 0, void 0)
                            }, D.prototype.done = function (t, e) {
                                var n = this._then(t, e, void 0, void 0, void 0);
                                n._setIsFinal()
                            }, D.prototype.spread = function (t) {
                                return "function" != typeof t ? a("expecting a function but got " + c.classString(t)) : this.all()._then(t, void 0, void 0, v, void 0)
                            }, D.prototype.toJSON = function () {
                                var t = {
                                    isFulfilled: !1,
                                    isRejected: !1,
                                    fulfillmentValue: void 0,
                                    rejectionReason: void 0
                                };
                                return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t
                            }, D.prototype.all = function () {
                                return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new k(this).promise()
                            }, D.prototype.error = function (t) {
                                return this.caught(c.originatesFromRejection, t)
                            }, D.getNewLibraryCopy = n.exports, D.is = function (t) {
                                return t instanceof D
                            }, D.fromNode = D.fromCallback = function (t) {
                                var e = new D(p);
                                e._captureStackTrace();
                                var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, i = E(t)(S(e, n));
                                return i === C && e._rejectCallback(i.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e
                            }, D.all = function (t) {
                                return new k(t).promise()
                            }, D.cast = function (t) {
                                var e = y(t);
                                return e instanceof D || ((e = new D(p))._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t), e
                            }, D.resolve = D.fulfilled = D.cast, D.reject = D.rejected = function (t) {
                                var e = new D(p);
                                return e._captureStackTrace(), e._rejectCallback(t, !0), e
                            }, D.setScheduler = function (t) {
                                if ("function" != typeof t) throw new _("expecting a function but got " + c.classString(t));
                                return h.setScheduler(t)
                            }, D.prototype._then = function (t, e, n, i, r) {
                                var a = void 0 !== r, o = a ? r : new D(p), l = this._target(), u = l._bitField;
                                a || (o._propagateFrom(this, 3), o._captureStackTrace(), void 0 === i && 0 != (2097152 & this._bitField) && (i = 0 != (50397184 & u) ? this._boundValue() : l === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, o));
                                var d = s();
                                if (0 != (50397184 & u)) {
                                    var f, _, v = l._settlePromiseCtx;
                                    0 != (33554432 & u) ? (_ = l._rejectionHandler0, f = t) : 0 != (16777216 & u) ? (_ = l._fulfillmentHandler0, f = e, l._unsetRejectionIsUnhandled()) : (v = l._settlePromiseLateCancellationObserver, _ = new g("late cancellation observer"), l._attachExtraTrace(_), f = e), h.invoke(v, l, {
                                        handler: null === d ? f : "function" == typeof f && c.domainBind(d, f),
                                        promise: o,
                                        receiver: i,
                                        value: _
                                    })
                                } else l._addCallbacks(t, e, o, i, d);
                                return o
                            }, D.prototype._length = function () {
                                return 65535 & this._bitField
                            }, D.prototype._isFateSealed = function () {
                                return 0 != (117506048 & this._bitField)
                            }, D.prototype._isFollowing = function () {
                                return 67108864 == (67108864 & this._bitField)
                            }, D.prototype._setLength = function (t) {
                                this._bitField = -65536 & this._bitField | 65535 & t
                            }, D.prototype._setFulfilled = function () {
                                this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this)
                            }, D.prototype._setRejected = function () {
                                this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this)
                            }, D.prototype._setFollowing = function () {
                                this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this)
                            }, D.prototype._setIsFinal = function () {
                                this._bitField = 4194304 | this._bitField
                            }, D.prototype._isFinal = function () {
                                return (4194304 & this._bitField) > 0
                            }, D.prototype._unsetCancelled = function () {
                                this._bitField = -65537 & this._bitField
                            }, D.prototype._setCancelled = function () {
                                this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this)
                            }, D.prototype._setWillBeCancelled = function () {
                                this._bitField = 8388608 | this._bitField
                            }, D.prototype._setAsyncGuaranteed = function () {
                                h.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
                            }, D.prototype._receiverAt = function (t) {
                                var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
                                if (e !== l) return void 0 === e && this._isBound() ? this._boundValue() : e
                            }, D.prototype._promiseAt = function (t) {
                                return this[4 * t - 4 + 2]
                            }, D.prototype._fulfillmentHandlerAt = function (t) {
                                return this[4 * t - 4 + 0]
                            }, D.prototype._rejectionHandlerAt = function (t) {
                                return this[4 * t - 4 + 1]
                            }, D.prototype._boundValue = function () {
                            }, D.prototype._migrateCallback0 = function (t) {
                                t._bitField;
                                var e = t._fulfillmentHandler0, n = t._rejectionHandler0, i = t._promise0,
                                    r = t._receiverAt(0);
                                void 0 === r && (r = l), this._addCallbacks(e, n, i, r, null)
                            }, D.prototype._migrateCallbackAt = function (t, e) {
                                var n = t._fulfillmentHandlerAt(e), i = t._rejectionHandlerAt(e), r = t._promiseAt(e),
                                    a = t._receiverAt(e);
                                void 0 === a && (a = l), this._addCallbacks(n, i, r, a, null)
                            }, D.prototype._addCallbacks = function (t, e, n, i, r) {
                                var a = this._length();
                                if (a >= 65531 && (a = 0, this._setLength(0)), 0 === a) this._promise0 = n, this._receiver0 = i, "function" == typeof t && (this._fulfillmentHandler0 = null === r ? t : c.domainBind(r, t)), "function" == typeof e && (this._rejectionHandler0 = null === r ? e : c.domainBind(r, e)); else {
                                    var o = 4 * a - 4;
                                    this[o + 2] = n, this[o + 3] = i, "function" == typeof t && (this[o + 0] = null === r ? t : c.domainBind(r, t)), "function" == typeof e && (this[o + 1] = null === r ? e : c.domainBind(r, e))
                                }
                                return this._setLength(a + 1), a
                            }, D.prototype._proxy = function (t, e) {
                                this._addCallbacks(void 0, void 0, e, t, null)
                            }, D.prototype._resolveCallback = function (t, e) {
                                if (0 == (117506048 & this._bitField)) {
                                    if (t === this) return this._rejectCallback(i(), !1);
                                    var n = y(t, this);
                                    if (!(n instanceof D)) return this._fulfill(t);
                                    e && this._propagateFrom(n, 2);
                                    var r = n._target();
                                    if (r !== this) {
                                        var a = r._bitField;
                                        if (0 == (50397184 & a)) {
                                            var o = this._length();
                                            o > 0 && r._migrateCallback0(this);
                                            for (var s = 1; s < o; ++s) r._migrateCallbackAt(this, s);
                                            this._setFollowing(), this._setLength(0), this._setFollowee(r)
                                        } else if (0 != (33554432 & a)) this._fulfill(r._value()); else if (0 != (16777216 & a)) this._reject(r._reason()); else {
                                            var l = new g("late cancellation observer");
                                            r._attachExtraTrace(l), this._reject(l)
                                        }
                                    } else this._reject(i())
                                }
                            }, D.prototype._rejectCallback = function (t, e, n) {
                                var i = c.ensureErrorObject(t), r = i === t;
                                if (!r && !n && x.warnings()) {
                                    var a = "a promise was rejected with a non-error: " + c.classString(t);
                                    this._warn(a, !0)
                                }
                                this._attachExtraTrace(i, !!e && r), this._reject(t)
                            }, D.prototype._resolveFromExecutor = function (t) {
                                if (t !== p) {
                                    var e = this;
                                    this._captureStackTrace(), this._pushContext();
                                    var n = !0, i = this._execute(t, function (t) {
                                        e._resolveCallback(t)
                                    }, function (t) {
                                        e._rejectCallback(t, n)
                                    });
                                    n = !1, this._popContext(), void 0 !== i && e._rejectCallback(i, !0)
                                }
                            }, D.prototype._settlePromiseFromHandler = function (t, e, n, i) {
                                var r = i._bitField;
                                if (0 == (65536 & r)) {
                                    var a;
                                    i._pushContext(), e === v ? n && "number" == typeof n.length ? a = E(t).apply(this._boundValue(), n) : (a = C).e = new _("cannot .spread() a non-array: " + c.classString(n)) : a = E(t).call(e, n);
                                    var o = i._popContext();
                                    0 == (65536 & (r = i._bitField)) && (a === m ? i._reject(n) : a === C ? i._rejectCallback(a.e, !1) : (x.checkForgottenReturns(a, o, "", i, this), i._resolveCallback(a)))
                                }
                            }, D.prototype._target = function () {
                                for (var t = this; t._isFollowing();) t = t._followee();
                                return t
                            }, D.prototype._followee = function () {
                                return this._rejectionHandler0
                            }, D.prototype._setFollowee = function (t) {
                                this._rejectionHandler0 = t
                            }, D.prototype._settlePromise = function (t, e, n, i) {
                                var a = t instanceof D, s = this._bitField, l = 0 != (134217728 & s);
                                0 != (65536 & s) ? (a && t._invokeInternalOnCancel(), n instanceof $ && n.isFinallyHandler() ? (n.cancelPromise = t, E(e).call(n, i) === C && t._reject(C.e)) : e === r ? t._fulfill(r.call(n)) : n instanceof o ? n._promiseCancelled(t) : a || t instanceof k ? t._cancel() : n.cancel()) : "function" == typeof e ? a ? (l && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, n, i, t)) : e.call(n, i, t) : n instanceof o ? n._isResolved() || (0 != (33554432 & s) ? n._promiseFulfilled(i, t) : n._promiseRejected(i, t)) : a && (l && t._setAsyncGuaranteed(), 0 != (33554432 & s) ? t._fulfill(i) : t._reject(i))
                            }, D.prototype._settlePromiseLateCancellationObserver = function (t) {
                                var e = t.handler, n = t.promise, i = t.receiver, r = t.value;
                                "function" == typeof e ? n instanceof D ? this._settlePromiseFromHandler(e, i, r, n) : e.call(i, r, n) : n instanceof D && n._reject(r)
                            }, D.prototype._settlePromiseCtx = function (t) {
                                this._settlePromise(t.promise, t.handler, t.receiver, t.value)
                            }, D.prototype._settlePromise0 = function (t, e, n) {
                                var i = this._promise0, r = this._receiverAt(0);
                                this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(i, t, r, e)
                            }, D.prototype._clearCallbackDataAtIndex = function (t) {
                                var e = 4 * t - 4;
                                this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0
                            }, D.prototype._fulfill = function (t) {
                                var e = this._bitField;
                                if (!((117506048 & e) >>> 16)) {
                                    if (t === this) {
                                        var n = i();
                                        return this._attachExtraTrace(n), this._reject(n)
                                    }
                                    this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 != (134217728 & e) ? this._settlePromises() : h.settlePromises(this), this._dereferenceTrace())
                                }
                            }, D.prototype._reject = function (t) {
                                var e = this._bitField;
                                if (!((117506048 & e) >>> 16)) {
                                    if (this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal()) return h.fatalError(t, c.isNode);
                                    (65535 & e) > 0 ? h.settlePromises(this) : this._ensurePossibleRejectionHandled()
                                }
                            }, D.prototype._fulfillPromises = function (t, e) {
                                for (var n = 1; n < t; n++) {
                                    var i = this._fulfillmentHandlerAt(n), r = this._promiseAt(n),
                                        a = this._receiverAt(n);
                                    this._clearCallbackDataAtIndex(n), this._settlePromise(r, i, a, e)
                                }
                            }, D.prototype._rejectPromises = function (t, e) {
                                for (var n = 1; n < t; n++) {
                                    var i = this._rejectionHandlerAt(n), r = this._promiseAt(n),
                                        a = this._receiverAt(n);
                                    this._clearCallbackDataAtIndex(n), this._settlePromise(r, i, a, e)
                                }
                            }, D.prototype._settlePromises = function () {
                                var t = this._bitField, e = 65535 & t;
                                if (e > 0) {
                                    if (0 != (16842752 & t)) {
                                        var n = this._fulfillmentHandler0;
                                        this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n)
                                    } else {
                                        var i = this._rejectionHandler0;
                                        this._settlePromise0(this._fulfillmentHandler0, i, t), this._fulfillPromises(e, i)
                                    }
                                    this._setLength(0)
                                }
                                this._clearCancellationData()
                            }, D.prototype._settledValue = function () {
                                var t = this._bitField;
                                return 0 != (33554432 & t) ? this._rejectionHandler0 : 0 != (16777216 & t) ? this._fulfillmentHandler0 : void 0
                            }, D.defer = D.pending = function () {
                                x.deprecated("Promise.defer", "new Promise");
                                var t = new D(p);
                                return {promise: t, resolve: A, reject: N}
                            }, c.notEnumerableProp(D, "_makeSelfResolutionError", i), t("./method")(D, p, y, a, x), t("./bind")(D, p, y, x), t("./cancel")(D, k, a, x), t("./direct_resolve")(D), t("./synchronous_inspection")(D), t("./join")(D, k, y, p, h, s), D.Promise = D, D.version = "3.5.4", t("./map.js")(D, k, a, y, p, x), t("./call_get.js")(D), t("./using.js")(D, a, y, w, p, x), t("./timers.js")(D, p, x), t("./generators.js")(D, a, p, y, o, x), t("./nodeify.js")(D), t("./promisify.js")(D, p), t("./props.js")(D, k, y, a), t("./race.js")(D, p, y, a), t("./reduce.js")(D, k, a, y, p, x), t("./settle.js")(D, k, x), t("./some.js")(D, k, a), t("./filter.js")(D, p), t("./each.js")(D, p), t("./any.js")(D), c.toFastProperties(D), c.toFastProperties(D.prototype), M({a: 1}), M({b: 2}), M({c: 3}), M(1), M(function () {
                            }), M(void 0), M(!1), M(new D(p)), x.setBounds(d.firstLineError, c.lastLineError), D
                        }
                    }, {
                        "./any.js": 1,
                        "./async": 2,
                        "./bind": 3,
                        "./call_get.js": 5,
                        "./cancel": 6,
                        "./catch_filter": 7,
                        "./context": 8,
                        "./debuggability": 9,
                        "./direct_resolve": 10,
                        "./each.js": 11,
                        "./errors": 12,
                        "./es5": 13,
                        "./filter.js": 14,
                        "./finally": 15,
                        "./generators.js": 16,
                        "./join": 17,
                        "./map.js": 18,
                        "./method": 19,
                        "./nodeback": 20,
                        "./nodeify.js": 21,
                        "./promise_array": 23,
                        "./promisify.js": 24,
                        "./props.js": 25,
                        "./race.js": 27,
                        "./reduce.js": 28,
                        "./settle.js": 30,
                        "./some.js": 31,
                        "./synchronous_inspection": 32,
                        "./thenables": 33,
                        "./timers.js": 34,
                        "./using.js": 35,
                        "./util": 36
                    }], 23: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r, a) {
                            var o = t("./util");

                            function s(t) {
                                var i = this._promise = new e(n);
                                t instanceof e && i._propagateFrom(t, 3), i._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
                            }

                            return o.isArray, o.inherits(s, a), s.prototype.length = function () {
                                return this._length
                            }, s.prototype.promise = function () {
                                return this._promise
                            }, s.prototype._init = function t(n, a) {
                                var s = i(this._values, this._promise);
                                if (s instanceof e) {
                                    var l = (s = s._target())._bitField;
                                    if (this._values = s, 0 == (50397184 & l)) return this._promise._setAsyncGuaranteed(), s._then(t, this._reject, void 0, this, a);
                                    if (0 == (33554432 & l)) return 0 != (16777216 & l) ? this._reject(s._reason()) : this._cancel();
                                    s = s._value()
                                }
                                if (null !== (s = o.asArray(s))) 0 !== s.length ? this._iterate(s) : -5 === a ? this._resolveEmptyArray() : this._resolve(function (t) {
                                    switch (t) {
                                        case-2:
                                            return [];
                                        case-3:
                                            return {};
                                        case-6:
                                            return new Map
                                    }
                                }(a)); else {
                                    var c = r("expecting an array or an iterable object but got " + o.classString(s)).reason();
                                    this._promise._rejectCallback(c, !1)
                                }
                            }, s.prototype._iterate = function (t) {
                                var n = this.getActualLength(t.length);
                                this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                                for (var r = this._promise, a = !1, o = null, s = 0; s < n; ++s) {
                                    var l = i(t[s], r);
                                    l instanceof e ? (l = l._target(), o = l._bitField) : o = null, a ? null !== o && l.suppressUnhandledRejections() : null !== o ? 0 == (50397184 & o) ? (l._proxy(this, s), this._values[s] = l) : a = 0 != (33554432 & o) ? this._promiseFulfilled(l._value(), s) : 0 != (16777216 & o) ? this._promiseRejected(l._reason(), s) : this._promiseCancelled(s) : a = this._promiseFulfilled(l, s)
                                }
                                a || r._setAsyncGuaranteed()
                            }, s.prototype._isResolved = function () {
                                return null === this._values
                            }, s.prototype._resolve = function (t) {
                                this._values = null, this._promise._fulfill(t)
                            }, s.prototype._cancel = function () {
                                !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
                            }, s.prototype._reject = function (t) {
                                this._values = null, this._promise._rejectCallback(t, !1)
                            }, s.prototype._promiseFulfilled = function (t, e) {
                                this._values[e] = t;
                                var n = ++this._totalResolved;
                                return n >= this._length && (this._resolve(this._values), !0)
                            }, s.prototype._promiseCancelled = function () {
                                return this._cancel(), !0
                            }, s.prototype._promiseRejected = function (t) {
                                return this._totalResolved++, this._reject(t), !0
                            }, s.prototype._resultCancelled = function () {
                                if (!this._isResolved()) {
                                    var t = this._values;
                                    if (this._cancel(), t instanceof e) t.cancel(); else for (var n = 0; n < t.length; ++n) t[n] instanceof e && t[n].cancel()
                                }
                            }, s.prototype.shouldCopyValues = function () {
                                return !0
                            }, s.prototype.getActualLength = function (t) {
                                return t
                            }, s
                        }
                    }, {"./util": 36}], 24: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n) {
                            var i = {}, r = t("./util"), a = t("./nodeback"), o = r.withAppended,
                                s = r.maybeWrapAsError, l = r.canEvaluate, c = t("./errors").TypeError,
                                u = {__isPromisified__: !0},
                                d = new RegExp("^(?:" + ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"].join("|") + ")$"),
                                h = function (t) {
                                    return r.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t
                                };

                            function f(t) {
                                return !d.test(t)
                            }

                            function _(t) {
                                try {
                                    return !0 === t.__isPromisified__
                                } catch (t) {
                                    return !1
                                }
                            }

                            function g(t, e, n) {
                                var i = r.getDataPropertyOrDefault(t, e + n, u);
                                return !!i && _(i)
                            }

                            function p(t, e, n, i) {
                                for (var a = r.inheritedDataKeys(t), o = [], s = 0; s < a.length; ++s) {
                                    var l = a[s], u = t[l], d = i === h || h(l, u, t);
                                    "function" != typeof u || _(u) || g(t, l, e) || !i(l, u, t, d) || o.push(l, u)
                                }
                                return function (t, e, n) {
                                    for (var i = 0; i < t.length; i += 2) {
                                        var r = t[i];
                                        if (n.test(r)) for (var a = r.replace(n, ""), o = 0; o < t.length; o += 2) if (t[o] === a) throw new c("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e))
                                    }
                                }(o, e, n), o
                            }

                            var v = function (t) {
                                return t.replace(/([$])/, "\\$")
                            }, m = l ? void 0 : function (t, l, c, u, d, h) {
                                var f = function () {
                                    return this
                                }(), _ = t;

                                function g() {
                                    var r = l;
                                    l === i && (r = this);
                                    var c = new e(n);
                                    c._captureStackTrace();
                                    var u = "string" == typeof _ && this !== f ? this[_] : t, d = a(c, h);
                                    try {
                                        u.apply(r, o(arguments, d))
                                    } catch (t) {
                                        c._rejectCallback(s(t), !0, !0)
                                    }
                                    return c._isFateSealed() || c._setAsyncGuaranteed(), c
                                }

                                return "string" == typeof _ && (t = u), r.notEnumerableProp(g, "__isPromisified__", !0), g
                            };

                            function y(t, e, n, a, o) {
                                for (var s = new RegExp(v(e) + "$"), l = p(t, e, s, n), c = 0, u = l.length; c < u; c += 2) {
                                    var d = l[c], h = l[c + 1], f = d + e;
                                    if (a === m) t[f] = m(d, i, d, h, e, o); else {
                                        var _ = a(h, function () {
                                            return m(d, i, d, h, e, o)
                                        });
                                        r.notEnumerableProp(_, "__isPromisified__", !0), t[f] = _
                                    }
                                }
                                return r.toFastProperties(t), t
                            }

                            e.promisify = function (t, e) {
                                if ("function" != typeof t) throw new c("expecting a function but got " + r.classString(t));
                                if (_(t)) return t;
                                var n = void 0 === (e = Object(e)).context ? i : e.context, a = !!e.multiArgs,
                                    o = function (t, e, n) {
                                        return m(t, e, void 0, t, null, n)
                                    }(t, n, a);
                                return r.copyDescriptors(t, o, f), o
                            }, e.promisifyAll = function (t, e) {
                                if ("function" != typeof t && "object" != typeof t) throw new c("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                                var n = !!(e = Object(e)).multiArgs, i = e.suffix;
                                "string" != typeof i && (i = "Async");
                                var a = e.filter;
                                "function" != typeof a && (a = h);
                                var o = e.promisifier;
                                if ("function" != typeof o && (o = m), !r.isIdentifier(i)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                                for (var s = r.inheritedDataKeys(t), l = 0; l < s.length; ++l) {
                                    var u = t[s[l]];
                                    "constructor" !== s[l] && r.isClass(u) && (y(u.prototype, i, a, o, n), y(u, i, a, o, n))
                                }
                                return y(t, i, a, o, n)
                            }
                        }
                    }, {"./errors": 12, "./nodeback": 20, "./util": 36}], 25: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r) {
                            var a, o = t("./util"), s = o.isObject, l = t("./es5");
                            "function" == typeof Map && (a = Map);
                            var c = function () {
                                var t = 0, e = 0;

                                function n(n, i) {
                                    this[t] = n, this[t + e] = i, t++
                                }

                                return function (i) {
                                    e = i.size, t = 0;
                                    var r = new Array(2 * i.size);
                                    return i.forEach(n, r), r
                                }
                            }();

                            function u(t) {
                                var e, n = !1;
                                if (void 0 !== a && t instanceof a) e = c(t), n = !0; else {
                                    var i = l.keys(t), r = i.length;
                                    e = new Array(2 * r);
                                    for (var o = 0; o < r; ++o) {
                                        var s = i[o];
                                        e[o] = t[s], e[o + r] = s
                                    }
                                }
                                this.constructor$(e), this._isMap = n, this._init$(void 0, n ? -6 : -3)
                            }

                            function d(t) {
                                var n, a = i(t);
                                return s(a) ? (n = a instanceof e ? a._then(e.props, void 0, void 0, void 0, void 0) : new u(a).promise(), a instanceof e && n._propagateFrom(a, 2), n) : r("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
                            }

                            o.inherits(u, n), u.prototype._init = function () {
                            }, u.prototype._promiseFulfilled = function (t, e) {
                                this._values[e] = t;
                                var n = ++this._totalResolved;
                                if (n >= this._length) {
                                    var i;
                                    if (this._isMap) i = function (t) {
                                        for (var e = new a, n = t.length / 2 | 0, i = 0; i < n; ++i) {
                                            var r = t[n + i], o = t[i];
                                            e.set(r, o)
                                        }
                                        return e
                                    }(this._values); else {
                                        i = {};
                                        for (var r = this.length(), o = 0, s = this.length(); o < s; ++o) i[this._values[o + r]] = this._values[o]
                                    }
                                    return this._resolve(i), !0
                                }
                                return !1
                            }, u.prototype.shouldCopyValues = function () {
                                return !1
                            }, u.prototype.getActualLength = function (t) {
                                return t >> 1
                            }, e.prototype.props = function () {
                                return d(this)
                            }, e.props = function (t) {
                                return d(t)
                            }
                        }
                    }, {"./es5": 13, "./util": 36}], 26: [function (t, e, n) {
                        "use strict";

                        function i(t) {
                            this._capacity = t, this._length = 0, this._front = 0
                        }

                        i.prototype._willBeOverCapacity = function (t) {
                            return this._capacity < t
                        }, i.prototype._pushOne = function (t) {
                            var e = this.length();
                            this._checkCapacity(e + 1);
                            var n = this._front + e & this._capacity - 1;
                            this[n] = t, this._length = e + 1
                        }, i.prototype.push = function (t, e, n) {
                            var i = this.length() + 3;
                            if (this._willBeOverCapacity(i)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
                            var r = this._front + i - 3;
                            this._checkCapacity(i);
                            var a = this._capacity - 1;
                            this[r + 0 & a] = t, this[r + 1 & a] = e, this[r + 2 & a] = n, this._length = i
                        }, i.prototype.shift = function () {
                            var t = this._front, e = this[t];
                            return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
                        }, i.prototype.length = function () {
                            return this._length
                        }, i.prototype._checkCapacity = function (t) {
                            this._capacity < t && this._resizeTo(this._capacity << 1)
                        }, i.prototype._resizeTo = function (t) {
                            var e = this._capacity;
                            this._capacity = t;
                            var n = this._front, i = this._length, r = n + i & e - 1;
                            !function (t, e, n, i, r) {
                                for (var a = 0; a < r; ++a) n[a + i] = t[a + e], t[a + e] = void 0
                            }(this, 0, this, e, r)
                        }, e.exports = i
                    }, {}], 27: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r) {
                            var a = t("./util"), o = function (t) {
                                return t.then(function (e) {
                                    return s(e, t)
                                })
                            };

                            function s(t, s) {
                                var l = i(t);
                                if (l instanceof e) return o(l);
                                if (null === (t = a.asArray(t))) return r("expecting an array or an iterable object but got " + a.classString(t));
                                var c = new e(n);
                                void 0 !== s && c._propagateFrom(s, 3);
                                for (var u = c._fulfill, d = c._reject, h = 0, f = t.length; h < f; ++h) {
                                    var _ = t[h];
                                    (void 0 !== _ || h in t) && e.cast(_)._then(u, d, void 0, c, null)
                                }
                                return c
                            }

                            e.race = function (t) {
                                return s(t, void 0)
                            }, e.prototype.race = function () {
                                return s(this, void 0)
                            }
                        }
                    }, {"./util": 36}], 28: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r, a, o) {
                            var s = e._getDomain, l = t("./util"), c = l.tryCatch;

                            function u(t, n, i, r) {
                                this.constructor$(t);
                                var o = s();
                                this._fn = null === o ? n : l.domainBind(o, n), void 0 !== i && (i = e.resolve(i))._attachCancellationCallback(this), this._initialValue = i, this._currentCancellable = null, this._eachValues = r === a ? Array(this._length) : 0 === r ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5)
                            }

                            function d(t, e) {
                                this.isFulfilled() ? e._resolve(t) : e._reject(t)
                            }

                            function h(t, e, n, r) {
                                if ("function" != typeof e) return i("expecting a function but got " + l.classString(e));
                                var a = new u(t, e, n, r);
                                return a.promise()
                            }

                            function f(t) {
                                this.accum = t, this.array._gotAccum(t);
                                var n = r(this.value, this.array._promise);
                                return n instanceof e ? (this.array._currentCancellable = n, n._then(_, void 0, void 0, this, void 0)) : _.call(this, n)
                            }

                            function _(t) {
                                var n, i = this.array, r = i._promise, a = c(i._fn);
                                r._pushContext(), (n = void 0 !== i._eachValues ? a.call(r._boundValue(), t, this.index, this.length) : a.call(r._boundValue(), this.accum, t, this.index, this.length)) instanceof e && (i._currentCancellable = n);
                                var s = r._popContext();
                                return o.checkForgottenReturns(n, s, void 0 !== i._eachValues ? "Promise.each" : "Promise.reduce", r), n
                            }

                            l.inherits(u, n), u.prototype._gotAccum = function (t) {
                                void 0 !== this._eachValues && null !== this._eachValues && t !== a && this._eachValues.push(t)
                            }, u.prototype._eachComplete = function (t) {
                                return null !== this._eachValues && this._eachValues.push(t), this._eachValues
                            }, u.prototype._init = function () {
                            }, u.prototype._resolveEmptyArray = function () {
                                this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                            }, u.prototype.shouldCopyValues = function () {
                                return !1
                            }, u.prototype._resolve = function (t) {
                                this._promise._resolveCallback(t), this._values = null
                            }, u.prototype._resultCancelled = function (t) {
                                if (t === this._initialValue) return this._cancel();
                                this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel())
                            }, u.prototype._iterate = function (t) {
                                var n, i;
                                this._values = t;
                                var r = t.length;
                                if (void 0 !== this._initialValue ? (n = this._initialValue, i = 0) : (n = e.resolve(t[0]), i = 1), this._currentCancellable = n, !n.isRejected()) for (; i < r; ++i) {
                                    var a = {accum: null, value: t[i], index: i, length: r, array: this};
                                    n = n._then(f, void 0, void 0, a, void 0)
                                }
                                void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(d, d, void 0, n, this)
                            }, e.prototype.reduce = function (t, e) {
                                return h(this, t, e, null)
                            }, e.reduce = function (t, e, n, i) {
                                return h(t, e, n, i)
                            }
                        }
                    }, {"./util": 36}], 29: [function (t, r, a) {
                        "use strict";
                        var o, s = t("./util"), l = s.getNativePromise();
                        if (s.isNode && "undefined" == typeof MutationObserver) {
                            var c = n.setImmediate, u = e.nextTick;
                            o = s.isRecentNode ? function (t) {
                                c.call(n, t)
                            } : function (t) {
                                u.call(e, t)
                            }
                        } else if ("function" == typeof l && "function" == typeof l.resolve) {
                            var d = l.resolve();
                            o = function (t) {
                                d.then(t)
                            }
                        } else o = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== i ? function (t) {
                            i(t)
                        } : "undefined" != typeof setTimeout ? function (t) {
                            setTimeout(t, 0)
                        } : function () {
                            throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                        } : function () {
                            var t = document.createElement("div"), e = {attributes: !0}, n = !1,
                                i = document.createElement("div"), r = new MutationObserver(function () {
                                    t.classList.toggle("foo"), n = !1
                                });
                            return r.observe(i, e), function (r) {
                                var a = new MutationObserver(function () {
                                    a.disconnect(), r()
                                });
                                a.observe(t, e), n || (n = !0, i.classList.toggle("foo"))
                            }
                        }();
                        r.exports = o
                    }, {"./util": 36}], 30: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i) {
                            var r = e.PromiseInspection, a = t("./util");

                            function o(t) {
                                this.constructor$(t)
                            }

                            a.inherits(o, n), o.prototype._promiseResolved = function (t, e) {
                                this._values[t] = e;
                                var n = ++this._totalResolved;
                                return n >= this._length && (this._resolve(this._values), !0)
                            }, o.prototype._promiseFulfilled = function (t, e) {
                                var n = new r;
                                return n._bitField = 33554432, n._settledValueField = t, this._promiseResolved(e, n)
                            }, o.prototype._promiseRejected = function (t, e) {
                                var n = new r;
                                return n._bitField = 16777216, n._settledValueField = t, this._promiseResolved(e, n)
                            }, e.settle = function (t) {
                                return i.deprecated(".settle()", ".reflect()"), new o(t).promise()
                            }, e.prototype.settle = function () {
                                return e.settle(this)
                            }
                        }
                    }, {"./util": 36}], 31: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i) {
                            var r = t("./util"), a = t("./errors").RangeError, o = t("./errors").AggregateError,
                                s = r.isArray, l = {};

                            function c(t) {
                                this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                            }

                            function u(t, e) {
                                if ((0 | e) !== e || e < 0) return i("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                                var n = new c(t), r = n.promise();
                                return n.setHowMany(e), n.init(), r
                            }

                            r.inherits(c, n), c.prototype._init = function () {
                                if (this._initialized) if (0 !== this._howMany) {
                                    this._init$(void 0, -5);
                                    var t = s(this._values);
                                    !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                                } else this._resolve([])
                            }, c.prototype.init = function () {
                                this._initialized = !0, this._init()
                            }, c.prototype.setUnwrap = function () {
                                this._unwrap = !0
                            }, c.prototype.howMany = function () {
                                return this._howMany
                            }, c.prototype.setHowMany = function (t) {
                                this._howMany = t
                            }, c.prototype._promiseFulfilled = function (t) {
                                return this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0)
                            }, c.prototype._promiseRejected = function (t) {
                                return this._addRejected(t), this._checkOutcome()
                            }, c.prototype._promiseCancelled = function () {
                                return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(l), this._checkOutcome())
                            }, c.prototype._checkOutcome = function () {
                                if (this.howMany() > this._canPossiblyFulfill()) {
                                    for (var t = new o, e = this.length(); e < this._values.length; ++e) this._values[e] !== l && t.push(this._values[e]);
                                    return t.length > 0 ? this._reject(t) : this._cancel(), !0
                                }
                                return !1
                            }, c.prototype._fulfilled = function () {
                                return this._totalResolved
                            }, c.prototype._rejected = function () {
                                return this._values.length - this.length()
                            }, c.prototype._addRejected = function (t) {
                                this._values.push(t)
                            }, c.prototype._addFulfilled = function (t) {
                                this._values[this._totalResolved++] = t
                            }, c.prototype._canPossiblyFulfill = function () {
                                return this.length() - this._rejected()
                            }, c.prototype._getRangeError = function (t) {
                                var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
                                return new a(e)
                            }, c.prototype._resolveEmptyArray = function () {
                                this._reject(this._getRangeError(0))
                            }, e.some = function (t, e) {
                                return u(t, e)
                            }, e.prototype.some = function (t) {
                                return u(this, t)
                            }, e._SomePromiseArray = c
                        }
                    }, {"./errors": 12, "./util": 36}], 32: [function (t, e, n) {
                        "use strict";
                        e.exports = function (t) {
                            function e(t) {
                                void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0)
                            }

                            e.prototype._settledValue = function () {
                                return this._settledValueField
                            };
                            var n = e.prototype.value = function () {
                                if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                                return this._settledValue()
                            }, i = e.prototype.error = e.prototype.reason = function () {
                                if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                                return this._settledValue()
                            }, r = e.prototype.isFulfilled = function () {
                                return 0 != (33554432 & this._bitField)
                            }, a = e.prototype.isRejected = function () {
                                return 0 != (16777216 & this._bitField)
                            }, o = e.prototype.isPending = function () {
                                return 0 == (50397184 & this._bitField)
                            }, s = e.prototype.isResolved = function () {
                                return 0 != (50331648 & this._bitField)
                            };
                            e.prototype.isCancelled = function () {
                                return 0 != (8454144 & this._bitField)
                            }, t.prototype.__isCancelled = function () {
                                return 65536 == (65536 & this._bitField)
                            }, t.prototype._isCancelled = function () {
                                return this._target().__isCancelled()
                            }, t.prototype.isCancelled = function () {
                                return 0 != (8454144 & this._target()._bitField)
                            }, t.prototype.isPending = function () {
                                return o.call(this._target())
                            }, t.prototype.isRejected = function () {
                                return a.call(this._target())
                            }, t.prototype.isFulfilled = function () {
                                return r.call(this._target())
                            }, t.prototype.isResolved = function () {
                                return s.call(this._target())
                            }, t.prototype.value = function () {
                                return n.call(this._target())
                            }, t.prototype.reason = function () {
                                var t = this._target();
                                return t._unsetRejectionIsUnhandled(), i.call(t)
                            }, t.prototype._value = function () {
                                return this._settledValue()
                            }, t.prototype._reason = function () {
                                return this._unsetRejectionIsUnhandled(), this._settledValue()
                            }, t.PromiseInspection = e
                        }
                    }, {}], 33: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n) {
                            var i = t("./util"), r = i.errorObj, a = i.isObject, o = {}.hasOwnProperty;
                            return function (t, s) {
                                if (a(t)) {
                                    if (t instanceof e) return t;
                                    var l = function (t) {
                                        try {
                                            return function (t) {
                                                return t.then
                                            }(t)
                                        } catch (t) {
                                            return r.e = t, r
                                        }
                                    }(t);
                                    if (l === r) {
                                        s && s._pushContext();
                                        var c = e.reject(l.e);
                                        return s && s._popContext(), c
                                    }
                                    if ("function" == typeof l) {
                                        if (function (t) {
                                            try {
                                                return o.call(t, "_promise0")
                                            } catch (t) {
                                                return !1
                                            }
                                        }(t)) {
                                            var c = new e(n);
                                            return t._then(c._fulfill, c._reject, void 0, c, null), c
                                        }
                                        return function (t, a, o) {
                                            var s = new e(n), l = s;
                                            o && o._pushContext(), s._captureStackTrace(), o && o._popContext();
                                            var c = !0, u = i.tryCatch(a).call(t, function (t) {
                                                s && (s._resolveCallback(t), s = null)
                                            }, function (t) {
                                                s && (s._rejectCallback(t, c, !0), s = null)
                                            });
                                            return c = !1, s && u === r && (s._rejectCallback(u.e, !0, !0), s = null), l
                                        }(t, l, s)
                                    }
                                }
                                return t
                            }
                        }
                    }, {"./util": 36}], 34: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i) {
                            var r = t("./util"), a = e.TimeoutError;

                            function o(t) {
                                this.handle = t
                            }

                            o.prototype._resultCancelled = function () {
                                clearTimeout(this.handle)
                            };
                            var s = function (t) {
                                return l(+this).thenReturn(t)
                            }, l = e.delay = function (t, r) {
                                var a, l;
                                return void 0 !== r ? (a = e.resolve(r)._then(s, null, null, t, void 0), i.cancellation() && r instanceof e && a._setOnCancel(r)) : (a = new e(n), l = setTimeout(function () {
                                    a._fulfill()
                                }, +t), i.cancellation() && a._setOnCancel(new o(l)), a._captureStackTrace()), a._setAsyncGuaranteed(), a
                            };

                            function c(t) {
                                return clearTimeout(this.handle), t
                            }

                            function u(t) {
                                throw clearTimeout(this.handle), t
                            }

                            e.prototype.delay = function (t) {
                                return l(t, this)
                            }, e.prototype.timeout = function (t, e) {
                                var n, s;
                                t = +t;
                                var l = new o(setTimeout(function () {
                                    n.isPending() && function (t, e, n) {
                                        var i;
                                        i = "string" != typeof e ? e instanceof Error ? e : new a("operation timed out") : new a(e), r.markAsOriginatingFromRejection(i), t._attachExtraTrace(i), t._reject(i), null != n && n.cancel()
                                    }(n, e, s)
                                }, t));
                                return i.cancellation() ? (s = this.then(), (n = s._then(c, u, void 0, l, void 0))._setOnCancel(l)) : n = this._then(c, u, void 0, l, void 0), n
                            }
                        }
                    }, {"./util": 36}], 35: [function (t, e, n) {
                        "use strict";
                        e.exports = function (e, n, i, r, a, o) {
                            var s = t("./util"), l = t("./errors").TypeError, c = t("./util").inherits, u = s.errorObj,
                                d = s.tryCatch, h = {};

                            function f(t) {
                                setTimeout(function () {
                                    throw t
                                }, 0)
                            }

                            function _(t, n) {
                                var r = 0, o = t.length, s = new e(a);
                                return function a() {
                                    if (r >= o) return s._fulfill();
                                    var l = function (t) {
                                        var e = i(t);
                                        return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e
                                    }(t[r++]);
                                    if (l instanceof e && l._isDisposable()) {
                                        try {
                                            l = i(l._getDisposer().tryDispose(n), t.promise)
                                        } catch (t) {
                                            return f(t)
                                        }
                                        if (l instanceof e) return l._then(a, f, null, null, null)
                                    }
                                    a()
                                }(), s
                            }

                            function g(t, e, n) {
                                this._data = t, this._promise = e, this._context = n
                            }

                            function p(t, e, n) {
                                this.constructor$(t, e, n)
                            }

                            function v(t) {
                                return g.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
                            }

                            function m(t) {
                                this.length = t, this.promise = null, this[t - 1] = null
                            }

                            g.prototype.data = function () {
                                return this._data
                            }, g.prototype.promise = function () {
                                return this._promise
                            }, g.prototype.resource = function () {
                                return this.promise().isFulfilled() ? this.promise().value() : h
                            }, g.prototype.tryDispose = function (t) {
                                var e = this.resource(), n = this._context;
                                void 0 !== n && n._pushContext();
                                var i = e !== h ? this.doDispose(e, t) : null;
                                return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, i
                            }, g.isDisposer = function (t) {
                                return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
                            }, c(p, g), p.prototype.doDispose = function (t, e) {
                                var n = this.data();
                                return n.call(t, t, e)
                            }, m.prototype._resultCancelled = function () {
                                for (var t = this.length, n = 0; n < t; ++n) {
                                    var i = this[n];
                                    i instanceof e && i.cancel()
                                }
                            }, e.using = function () {
                                var t = arguments.length;
                                if (t < 2) return n("you must pass at least 2 arguments to Promise.using");
                                var r, a = arguments[t - 1];
                                if ("function" != typeof a) return n("expecting a function but got " + s.classString(a));
                                var l = !0;
                                2 === t && Array.isArray(arguments[0]) ? (r = arguments[0], t = r.length, l = !1) : (r = arguments, t--);
                                for (var c = new m(t), h = 0; h < t; ++h) {
                                    var f = r[h];
                                    if (g.isDisposer(f)) {
                                        var p = f;
                                        (f = f.promise())._setDisposable(p)
                                    } else {
                                        var y = i(f);
                                        y instanceof e && (f = y._then(v, null, null, {resources: c, index: h}, void 0))
                                    }
                                    c[h] = f
                                }
                                for (var k = new Array(c.length), h = 0; h < k.length; ++h) k[h] = e.resolve(c[h]).reflect();
                                var b = e.all(k).then(function (t) {
                                    for (var e = 0; e < t.length; ++e) {
                                        var n = t[e];
                                        if (n.isRejected()) return u.e = n.error(), u;
                                        if (!n.isFulfilled()) return void b.cancel();
                                        t[e] = n.value()
                                    }
                                    w._pushContext(), a = d(a);
                                    var i = l ? a.apply(void 0, t) : a(t), r = w._popContext();
                                    return o.checkForgottenReturns(i, r, "Promise.using", w), i
                                }), w = b.lastly(function () {
                                    var t = new e.PromiseInspection(b);
                                    return _(c, t)
                                });
                                return c.promise = w, w._setOnCancel(c), w
                            }, e.prototype._setDisposable = function (t) {
                                this._bitField = 131072 | this._bitField, this._disposer = t
                            }, e.prototype._isDisposable = function () {
                                return (131072 & this._bitField) > 0
                            }, e.prototype._getDisposer = function () {
                                return this._disposer
                            }, e.prototype._unsetDisposable = function () {
                                this._bitField = -131073 & this._bitField, this._disposer = void 0
                            }, e.prototype.disposer = function (t) {
                                if ("function" == typeof t) return new p(t, this, r());
                                throw new l
                            }
                        }
                    }, {"./errors": 12, "./util": 36}], 36: [function (t, i, r) {
                        "use strict";
                        var a = t("./es5"), o = "undefined" == typeof navigator, s = {e: {}}, l,
                            c = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : void 0 !== this ? this : null;

                        function u() {
                            try {
                                var t = l;
                                return l = null, t.apply(this, arguments)
                            } catch (t) {
                                return s.e = t, s
                            }
                        }

                        function d(t) {
                            return l = t, u
                        }

                        var h = function (t, e) {
                            var n = {}.hasOwnProperty;

                            function i() {
                                for (var i in this.constructor = t, this.constructor$ = e, e.prototype) n.call(e.prototype, i) && "$" !== i.charAt(i.length - 1) && (this[i + "$"] = e.prototype[i])
                            }

                            return i.prototype = e.prototype, t.prototype = new i, t.prototype
                        };

                        function f(t) {
                            return null == t || !0 === t || !1 === t || "string" == typeof t || "number" == typeof t
                        }

                        function _(t) {
                            return "function" == typeof t || "object" == typeof t && null !== t
                        }

                        function g(t) {
                            return f(t) ? new Error(C(t)) : t
                        }

                        function p(t, e) {
                            var n, i = t.length, r = new Array(i + 1);
                            for (n = 0; n < i; ++n) r[n] = t[n];
                            return r[n] = e, r
                        }

                        function v(t, e, n) {
                            if (!a.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                            var i = Object.getOwnPropertyDescriptor(t, e);
                            return null != i ? null == i.get && null == i.set ? i.value : n : void 0
                        }

                        function m(t, e, n) {
                            if (f(t)) return t;
                            var i = {value: n, configurable: !0, enumerable: !1, writable: !0};
                            return a.defineProperty(t, e, i), t
                        }

                        function y(t) {
                            throw t
                        }

                        var k = function () {
                            var t = [Array.prototype, Object.prototype, Function.prototype], e = function (e) {
                                for (var n = 0; n < t.length; ++n) if (t[n] === e) return !0;
                                return !1
                            };
                            if (a.isES5) {
                                var n = Object.getOwnPropertyNames;
                                return function (t) {
                                    for (var i = [], r = Object.create(null); null != t && !e(t);) {
                                        var o;
                                        try {
                                            o = n(t)
                                        } catch (t) {
                                            return i
                                        }
                                        for (var s = 0; s < o.length; ++s) {
                                            var l = o[s];
                                            if (!r[l]) {
                                                r[l] = !0;
                                                var c = Object.getOwnPropertyDescriptor(t, l);
                                                null != c && null == c.get && null == c.set && i.push(l)
                                            }
                                        }
                                        t = a.getPrototypeOf(t)
                                    }
                                    return i
                                }
                            }
                            var i = {}.hasOwnProperty;
                            return function (n) {
                                if (e(n)) return [];
                                var r = [];
                                t:for (var a in n) if (i.call(n, a)) r.push(a); else {
                                    for (var o = 0; o < t.length; ++o) if (i.call(t[o], a)) continue t;
                                    r.push(a)
                                }
                                return r
                            }
                        }(), b = /this\s*\.\s*\S+\s*=/;

                        function w(t) {
                            try {
                                if ("function" == typeof t) {
                                    var e = a.names(t.prototype), n = a.isES5 && e.length > 1,
                                        i = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
                                        r = b.test(t + "") && a.names(t).length > 0;
                                    if (n || i || r) return !0
                                }
                                return !1
                            } catch (t) {
                                return !1
                            }
                        }

                        function x(t) {
                            function e() {
                            }

                            e.prototype = t;
                            var n = new e;

                            function i() {
                                return typeof n.foo
                            }

                            return i(), i(), t
                        }

                        var $ = /^[a-z$_][a-z$_0-9]*$/i;

                        function T(t) {
                            return $.test(t)
                        }

                        function S(t, e, n) {
                            for (var i = new Array(t), r = 0; r < t; ++r) i[r] = e + r + n;
                            return i
                        }

                        function C(t) {
                            try {
                                return t + ""
                            } catch (t) {
                                return "[no string representation]"
                            }
                        }

                        function E(t) {
                            return t instanceof Error || null !== t && "object" == typeof t && "string" == typeof t.message && "string" == typeof t.name
                        }

                        function D(t) {
                            try {
                                m(t, "isOperational", !0)
                            } catch (t) {
                            }
                        }

                        function A(t) {
                            return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === t.isOperational)
                        }

                        function N(t) {
                            return E(t) && a.propertyIsWritable(t, "stack")
                        }

                        var M = "stack" in new Error ? function (t) {
                            return N(t) ? t : new Error(C(t))
                        } : function (t) {
                            if (N(t)) return t;
                            try {
                                throw new Error(C(t))
                            } catch (t) {
                                return t
                            }
                        };

                        function I(t) {
                            return {}.toString.call(t)
                        }

                        function P(t, e, n) {
                            for (var i = a.names(t), r = 0; r < i.length; ++r) {
                                var o = i[r];
                                if (n(o)) try {
                                    a.defineProperty(e, o, a.getDescriptor(t, o))
                                } catch (t) {
                                }
                            }
                        }

                        var L = function (t) {
                            return a.isArray(t) ? t : null
                        };
                        if ("undefined" != typeof Symbol && Symbol.iterator) {
                            var O = "function" == typeof Array.from ? function (t) {
                                return Array.from(t)
                            } : function (t) {
                                for (var e, n = [], i = t[Symbol.iterator](); !(e = i.next()).done;) n.push(e.value);
                                return n
                            };
                            L = function (t) {
                                return a.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? O(t) : null
                            }
                        }
                        var j = void 0 !== e && "[object process]" === I(e).toLowerCase(),
                            R = void 0 !== e && void 0 !== e.env;

                        function F(t) {
                            return R ? e.env[t] : void 0
                        }

                        function H() {
                            if ("function" == typeof Promise) try {
                                var t = new Promise(function () {
                                });
                                if ("[object Promise]" === {}.toString.call(t)) return Promise
                            } catch (t) {
                            }
                        }

                        function z(t, e) {
                            return t.bind(e)
                        }

                        var B = {
                            isClass: w,
                            isIdentifier: T,
                            inheritedDataKeys: k,
                            getDataPropertyOrDefault: v,
                            thrower: y,
                            isArray: a.isArray,
                            asArray: L,
                            notEnumerableProp: m,
                            isPrimitive: f,
                            isObject: _,
                            isError: E,
                            canEvaluate: o,
                            errorObj: s,
                            tryCatch: d,
                            inherits: h,
                            withAppended: p,
                            maybeWrapAsError: g,
                            toFastProperties: x,
                            filledRange: S,
                            toString: C,
                            canAttachTrace: N,
                            ensureErrorObject: M,
                            originatesFromRejection: A,
                            markAsOriginatingFromRejection: D,
                            classString: I,
                            copyDescriptors: P,
                            hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                            isNode: j,
                            hasEnvVariables: R,
                            env: F,
                            global: c,
                            getNativePromise: H,
                            domainBind: z
                        };
                        B.isRecentNode = B.isNode && function () {
                            var t;
                            return e.versions && e.versions.node ? t = e.versions.node.split(".").map(Number) : e.version && (t = e.version.split(".").map(Number)), 0 === t[0] && t[1] > 10 || t[0] > 0
                        }(), B.isNode && B.toFastProperties(e);
                        try {
                            throw new Error
                        } catch (t) {
                            B.lastLineError = t
                        }
                        i.exports = B
                    }, {"./es5": 13}]
                }, {}, [4])(4)
            }(), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
        }).call(this, n(39), n(13), n(195).setImmediate)
    }, function (t, e, n) {
        t.exports = n(196)
    }, function (t, e, n) {
        var i = n(0);
        t.exports = function () {
            var t = {};
            return {
                getState: function (e) {
                    if (e) return t[e].method();
                    var n = {};
                    for (var r in t) t[r].internal || i.mixin(n, t[r].method(), !0);
                    return n
                }, registerProvider: function (e, n, i) {
                    t[e] = {method: n, internal: i}
                }, unregisterProvider: function (e) {
                    delete t[e]
                }
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = {};

            function n(n, i, r) {
                r = r || n;
                var a = t.config, o = t.templates;
                t.config[n] && e[r] != a[n] && (i && o[r] || (o[r] = t.date.date_to_str(a[n]), e[r] = a[n]))
            }

            return {
                initTemplates: function () {
                    var e = t.locale.labels;
                    e.gantt_save_btn = e.icon_save, e.gantt_cancel_btn = e.icon_cancel, e.gantt_delete_btn = e.icon_delete;
                    var i = t.date, r = i.date_to_str, a = t.config, o = r(a.xml_date || a.date_format, a.server_utc),
                        s = i.str_to_date(a.xml_date || a.date_format, a.server_utc);
                    n("date_scale", !0, void 0, t.config, t.templates), n("date_grid", !0, "grid_date_format", t.config, t.templates), n("task_date", !0, void 0, t.config, t.templates), t.mixin(t.templates, {
                        xml_format: void 0,
                        format_date: o,
                        xml_date: void 0,
                        parse_date: s,
                        progress_text: function (t, e, n) {
                            return ""
                        },
                        grid_header_class: function (t, e) {
                            return ""
                        },
                        task_text: function (t, e, n) {
                            return n.text
                        },
                        task_class: function (t, e, n) {
                            return ""
                        },
                        task_end_date: function (e) {
                            return t.templates.task_date(e)
                        },
                        grid_row_class: function (t, e, n) {
                            return ""
                        },
                        task_row_class: function (t, e, n) {
                            return ""
                        },
                        timeline_cell_class: function (t, e) {
                            return ""
                        },
                        scale_cell_class: function (t) {
                            return ""
                        },
                        scale_row_class: function (t) {
                            return ""
                        },
                        grid_indent: function (t) {
                            return "<div class='gantt_tree_indent'></div>"
                        },
                        grid_folder: function (t) {
                            return "<div class='gantt_tree_icon gantt_folder_" + (t.$open ? "open" : "closed") + "'></div>"
                        },
                        grid_file: function (t) {
                            return "<div class='gantt_tree_icon gantt_file'></div>"
                        },
                        grid_open: function (t) {
                            return "<div class='gantt_tree_icon gantt_" + (t.$open ? "close" : "open") + "'></div>"
                        },
                        grid_blank: function (t) {
                            return "<div class='gantt_tree_icon gantt_blank'></div>"
                        },
                        date_grid: function (e, n, i) {
                            return n && t.isUnscheduledTask(n) && t.config.show_unscheduled ? t.templates.task_unscheduled_time(n) : t.templates.grid_date_format(e, i)
                        },
                        task_time: function (e, n, i) {
                            return t.isUnscheduledTask(i) && t.config.show_unscheduled ? t.templates.task_unscheduled_time(i) : t.templates.task_date(e) + " - " + t.templates.task_end_date(n)
                        },
                        task_unscheduled_time: function (t) {
                            return ""
                        },
                        time_picker: r(a.time_picker),
                        link_class: function (t) {
                            return ""
                        },
                        link_description: function (e) {
                            var n = t.getTask(e.source), i = t.getTask(e.target);
                            return "<b>" + n.text + "</b> &ndash;  <b>" + i.text + "</b>"
                        },
                        drag_link: function (e, n, i, r) {
                            e = t.getTask(e);
                            var a = t.locale.labels,
                                o = "<b>" + e.text + "</b> " + (n ? a.link_start : a.link_end) + "<br/>";
                            return i && (o += "<b> " + (i = t.getTask(i)).text + "</b> " + (r ? a.link_start : a.link_end) + "<br/>"), o
                        },
                        drag_link_class: function (e, n, i, r) {
                            var a = "";
                            return e && i && (a = " " + (t.isLinkAllowed(e, i, n, r) ? "gantt_link_allow" : "gantt_link_deny")), "gantt_link_tooltip" + a
                        },
                        tooltip_date_format: i.date_to_str("%Y-%m-%d"),
                        tooltip_text: function (e, n, i) {
                            return "<b>Task:</b> " + i.text + "<br/><b>Start date:</b> " + t.templates.tooltip_date_format(e) + "<br/><b>End date:</b> " + t.templates.tooltip_date_format(n)
                        }
                    })
                }, initTemplate: n
            }
        }
    }, function (t, e, n) {
        var i = n(4), r = n(0), a = n(40), o = n(14);
        t.exports = function (t) {
            function e(t) {
                return {
                    target: t.target || t.srcElement,
                    pageX: t.pageX,
                    pageY: t.pageY,
                    clientX: t.clientX,
                    clientY: t.clientY,
                    metaKey: t.metaKey,
                    shiftKey: t.shiftKey,
                    ctrlKey: t.ctrlKey,
                    altKey: t.altKey
                }
            }

            function n(n, a) {
                this._obj = n, this._settings = a || {}, i(this);
                var o = this.getInputMethods();
                this._drag_start_timer = null, t.attachEvent("onGanttScroll", r.bind(function (t, e) {
                    this.clearDragTimer()
                }, this));
                for (var s = 0; s < o.length; s++) r.bind(function (i) {
                    t.event(n, i.down, r.bind(function (a) {
                        i.accessor(a) && (this._settings.original_target = e(a), t.config.touch ? (this.clearDragTimer(), this._drag_start_timer = setTimeout(r.bind(function () {
                            this.dragStart(n, a, i)
                        }, this), t.config.touch_drag)) : this.dragStart(n, a, i))
                    }, this)), t.event(document.body, i.up, r.bind(function (t) {
                        i.accessor(t) && this.clearDragTimer()
                    }, this))
                }, this)(o[s])
            }

            return n.prototype = {
                traceDragEvents: function (e, n) {
                    var i = r.bind(function (t) {
                        return this.dragMove(e, t, n.accessor)
                    }, this);
                    r.bind(function (t) {
                        return this.dragScroll(e, t)
                    }, this);
                    var o = r.bind(function (t) {
                        if (!this.config.started || !r.defined(this.config.updates_per_second) || a(this, this.config.updates_per_second)) {
                            var e = i(t);
                            return e && (t && t.preventDefault && t.preventDefault(), t.cancelBubble = !0), e
                        }
                    }, this), s = this.config.mousemoveContainer || document.body, l = r.bind(function (i) {
                        return t.eventRemove(s, n.move, o), t.eventRemove(document.body, n.up, l), this.dragEnd(e)
                    }, this);
                    t.event(s, n.move, o), t.event(document.body, n.up, l)
                }, checkPositionChange: function (t) {
                    var e = t.x - this.config.pos.x, n = t.y - this.config.pos.y;
                    return Math.sqrt(Math.pow(Math.abs(e), 2) + Math.pow(Math.abs(n), 2)) > this.config.sensitivity
                }, initDnDMarker: function () {
                    var t = this.config.marker = document.createElement("div");
                    t.className = "gantt_drag_marker", t.innerHTML = "Dragging object", document.body.appendChild(t)
                }, backupEventTarget: function (n, i) {
                    if (t.config.touch) {
                        var r = i(n), a = r.target || r.srcElement, o = a.cloneNode(!0);
                        this.config.original_target = e(r), this.config.original_target.target = o, this.config.backup_element = a, a.parentNode.appendChild(o), a.style.display = "none", document.body.appendChild(a)
                    }
                }, getInputMethods: function () {
                    var e = [];
                    if (e.push({
                        move: "mousemove", down: "mousedown", up: "mouseup", accessor: function (t) {
                            return t
                        }
                    }), t.config.touch) {
                        var n = !0;
                        try {
                            document.createEvent("TouchEvent")
                        } catch (t) {
                            n = !1
                        }
                        n ? e.push({
                            move: "touchmove", down: "touchstart", up: "touchend", accessor: function (t) {
                                return t.touches && t.touches.length > 1 ? null : t.touches[0] ? {
                                    target: document.elementFromPoint(t.touches[0].clientX, t.touches[0].clientY),
                                    pageX: t.touches[0].pageX,
                                    pageY: t.touches[0].pageY,
                                    clientX: t.touches[0].clientX,
                                    clientY: t.touches[0].clientY
                                } : t
                            }
                        }) : o.navigator.pointerEnabled ? e.push({
                            move: "pointermove",
                            down: "pointerdown",
                            up: "pointerup",
                            accessor: function (t) {
                                return "mouse" == t.pointerType ? null : t
                            }
                        }) : o.navigator.msPointerEnabled && e.push({
                            move: "MSPointerMove",
                            down: "MSPointerDown",
                            up: "MSPointerUp",
                            accessor: function (t) {
                                return t.pointerType == t.MSPOINTER_TYPE_MOUSE ? null : t
                            }
                        })
                    }
                    return e
                }, clearDragTimer: function () {
                    this._drag_start_timer && (clearTimeout(this._drag_start_timer), this._drag_start_timer = null)
                }, dragStart: function (e, n, i) {
                    this.config && this.config.started || (this.config = {
                        obj: e,
                        marker: null,
                        started: !1,
                        pos: this.getPosition(n),
                        sensitivity: 4
                    }, this._settings && r.mixin(this.config, this._settings, !0), this.traceDragEvents(e, i), t._prevent_touch_scroll = !0, document.body.className += " gantt_noselect", t.config.touch && this.dragMove(e, n, i.accessor))
                }, dragMove: function (e, n, i) {
                    var r = i(n);
                    if (!r) return !1;
                    if (!this.config.marker && !this.config.started) {
                        var a = this.getPosition(r);
                        if (t.config.touch || this.checkPositionChange(a)) {
                            if (this.config.started = !0, this.config.ignore = !1, !1 === this.callEvent("onBeforeDragStart", [e, this.config.original_target])) return this.config.ignore = !0, !1;
                            this.backupEventTarget(n, i), this.initDnDMarker(), t._touch_feedback(), this.callEvent("onAfterDragStart", [e, this.config.original_target])
                        } else this.config.ignore = !0
                    }
                    return !this.config.ignore && (r.pos = this.getPosition(r), this.config.marker.style.left = r.pos.x + "px", this.config.marker.style.top = r.pos.y + "px", this.callEvent("onDragMove", [e, r]), !0)
                }, dragEnd: function (e) {
                    var n = this.config.backup_element;
                    n && n.parentNode && n.parentNode.removeChild(n), t._prevent_touch_scroll = !1, this.config.marker && (this.config.marker.parentNode.removeChild(this.config.marker), this.config.marker = null, this.callEvent("onDragEnd", [])), this.config.started = !1, document.body.className = document.body.className.replace(" gantt_noselect", "")
                }, getPosition: function (t) {
                    var e = 0, n = 0;
                    return t.pageX || t.pageY ? (e = t.pageX, n = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                        x: e,
                        y: n
                    }
                }
            }, n
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = {
            date_to_str: function (t, e, n) {
                return function (i) {
                    t.replace(/%[a-zA-Z]/g, function (t) {
                        switch (t) {
                            case"%d":
                                return e ? n.date.to_fixed(i.getUTCDate()) : n.date.to_fixed(i.getDate());
                            case"%m":
                                return e ? n.date.to_fixed(i.getUTCMonth() + 1) : n.date.to_fixed(i.getMonth() + 1);
                            case"%j":
                                return e ? i.getUTCDate() : i.getDate();
                            case"%n":
                                return e ? i.getUTCMonth() + 1 : i.getMonth() + 1;
                            case"%y":
                                return e ? n.date.to_fixed(i.getUTCFullYear() % 100) : n.date.to_fixed(i.getFullYear() % 100);
                            case"%Y":
                                return e ? i.getUTCFullYear() : i.getFullYear();
                            case"%D":
                                return e ? n.locale.date.day_short[i.getUTCDay()] : n.locale.date.day_short[i.getDay()];
                            case"%l":
                                return e ? n.locale.date.day_full[i.getUTCDay()] : n.locale.date.day_full[i.getDay()];
                            case"%M":
                                return e ? n.locale.date.month_short[i.getUTCMonth()] : n.locale.date.month_short[i.getMonth()];
                            case"%F":
                                return e ? n.locale.date.month_full[i.getUTCMonth()] : n.locale.date.month_full[i.getMonth()];
                            case"%h":
                                return e ? n.date.to_fixed((i.getUTCHours() + 11) % 12 + 1) : n.date.to_fixed((i.getHours() + 11) % 12 + 1);
                            case"%g":
                                return e ? (i.getUTCHours() + 11) % 12 + 1 : (i.getHours() + 11) % 12 + 1;
                            case"%G":
                                return e ? i.getUTCHours() : i.getHours();
                            case"%H":
                                return e ? n.date.to_fixed(i.getUTCHours()) : n.date.to_fixed(i.getHours());
                            case"%i":
                                return e ? n.date.to_fixed(i.getUTCMinutes()) : n.date.to_fixed(i.getMinutes());
                            case"%a":
                                return e ? i.getUTCHours() > 11 ? "pm" : "am" : i.getHours() > 11 ? "pm" : "am";
                            case"%A":
                                return e ? i.getUTCHours() > 11 ? "PM" : "AM" : i.getHours() > 11 ? "PM" : "AM";
                            case"%s":
                                return e ? n.date.to_fixed(i.getUTCSeconds()) : n.date.to_fixed(i.getSeconds());
                            case"%W":
                                return e ? n.date.to_fixed(n.date.getUTCISOWeek(i)) : n.date.to_fixed(n.date.getISOWeek(i));
                            default:
                                return t
                        }
                    })
                }
            }, str_to_date: function (t, e, n) {
                return function (i) {
                    for (var r = [0, 0, 1, 0, 0, 0], a = i.match(/[a-zA-Z]+|[0-9]+/g), o = t.match(/%[a-zA-Z]/g), s = 0; s < o.length; s++) switch (o[s]) {
                        case"%j":
                        case"%d":
                            r[2] = a[s] || 1;
                            break;
                        case"%n":
                        case"%m":
                            r[1] = (a[s] || 1) - 1;
                            break;
                        case"%y":
                            r[0] = 1 * a[s] + (a[s] > 50 ? 1900 : 2e3);
                            break;
                        case"%g":
                        case"%G":
                        case"%h":
                        case"%H":
                            r[3] = a[s] || 0;
                            break;
                        case"%i":
                            r[4] = a[s] || 0;
                            break;
                        case"%Y":
                            r[0] = a[s] || 0;
                            break;
                        case"%a":
                        case"%A":
                            r[3] = r[3] % 12 + ("am" === (a[s] || "").toLowerCase() ? 0 : 12);
                            break;
                        case"%s":
                            r[5] = a[s] || 0;
                            break;
                        case"%M":
                            r[1] = n.locale.date.month_short_hash[a[s]] || 0;
                            break;
                        case"%F":
                            r[1] = n.locale.date.month_full_hash[a[s]] || 0
                    }
                    return e ? new Date(Date.UTC(r[0], r[1], r[2], r[3], r[4], r[5])) : new Date(r[0], r[1], r[2], r[3], r[4], r[5])
                }
            }
        };
        e.default = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = {
            date_to_str: function (t, e, n) {
                t = t.replace(/%[a-zA-Z]/g, function (t) {
                    switch (t) {
                        case"%d":
                            return '"+to_fixed(date.get' + (e ? "UTC" : "") + 'Date())+"';
                        case"%m":
                            return '"+to_fixed((date.get' + (e ? "UTC" : "") + 'Month()+1))+"';
                        case"%j":
                            return '"+date.get' + (e ? "UTC" : "") + 'Date()+"';
                        case"%n":
                            return '"+(date.get' + (e ? "UTC" : "") + 'Month()+1)+"';
                        case"%y":
                            return '"+to_fixed(date.get' + (e ? "UTC" : "") + 'FullYear()%100)+"';
                        case"%Y":
                            return '"+date.get' + (e ? "UTC" : "") + 'FullYear()+"';
                        case"%D":
                            return '"+locale.date.day_short[date.get' + (e ? "UTC" : "") + 'Day()]+"';
                        case"%l":
                            return '"+locale.date.day_full[date.get' + (e ? "UTC" : "") + 'Day()]+"';
                        case"%M":
                            return '"+locale.date.month_short[date.get' + (e ? "UTC" : "") + 'Month()]+"';
                        case"%F":
                            return '"+locale.date.month_full[date.get' + (e ? "UTC" : "") + 'Month()]+"';
                        case"%h":
                            return '"+to_fixed((date.get' + (e ? "UTC" : "") + 'Hours()+11)%12+1)+"';
                        case"%g":
                            return '"+((date.get' + (e ? "UTC" : "") + 'Hours()+11)%12+1)+"';
                        case"%G":
                            return '"+date.get' + (e ? "UTC" : "") + 'Hours()+"';
                        case"%H":
                            return '"+to_fixed(date.get' + (e ? "UTC" : "") + 'Hours())+"';
                        case"%i":
                            return '"+to_fixed(date.get' + (e ? "UTC" : "") + 'Minutes())+"';
                        case"%a":
                            return '"+(date.get' + (e ? "UTC" : "") + 'Hours()>11?"pm":"am")+"';
                        case"%A":
                            return '"+(date.get' + (e ? "UTC" : "") + 'Hours()>11?"PM":"AM")+"';
                        case"%s":
                            return '"+to_fixed(date.get' + (e ? "UTC" : "") + 'Seconds())+"';
                        case"%W":
                            return '"+to_fixed(getISOWeek(date))+"';
                        case"%w":
                            return '"+to_fixed(getWeek(date))+"';
                        default:
                            return t
                    }
                });
                var i = new Function("date", "to_fixed", "locale", "getISOWeek", "getWeek", 'return "' + t + '";');
                return function (t) {
                    return i(t, n.date.to_fixed, n.locale, n.date.getISOWeek, n.date.getWeek)
                }
            }, str_to_date: function (t, e, n) {
                for (var i = "var temp=date.match(/[a-zA-Z]+|[0-9]+/g);", r = t.match(/%[a-zA-Z]/g), a = 0; a < r.length; a++) switch (r[a]) {
                    case"%j":
                    case"%d":
                        i += "set[2]=temp[" + a + "]||1;";
                        break;
                    case"%n":
                    case"%m":
                        i += "set[1]=(temp[" + a + "]||1)-1;";
                        break;
                    case"%y":
                        i += "set[0]=temp[" + a + "]*1+(temp[" + a + "]>50?1900:2000);";
                        break;
                    case"%g":
                    case"%G":
                    case"%h":
                    case"%H":
                        i += "set[3]=temp[" + a + "]||0;";
                        break;
                    case"%i":
                        i += "set[4]=temp[" + a + "]||0;";
                        break;
                    case"%Y":
                        i += "set[0]=temp[" + a + "]||0;";
                        break;
                    case"%a":
                    case"%A":
                        i += "set[3]=set[3]%12+((temp[" + a + "]||'').toLowerCase()=='am'?0:12);";
                        break;
                    case"%s":
                        i += "set[5]=temp[" + a + "]||0;";
                        break;
                    case"%M":
                        i += "set[1]=locale.date.month_short_hash[temp[" + a + "]]||0;";
                        break;
                    case"%F":
                        i += "set[1]=locale.date.month_full_hash[temp[" + a + "]]||0;"
                }
                var o = "set[0],set[1],set[2],set[3],set[4],set[5]";
                e && (o = " Date.UTC(" + o + ")");
                var s = new Function("date", "locale", "var set=[0,0,1,0,0,0]; " + i + " return new Date(" + o + ");");
                return function (t) {
                    return s(t, n.locale)
                }
            }
        };
        e.default = i
    }, function (t, e, n) {
        var i = n(202).default, r = n(201).default;
        t.exports = function (t) {
            function e() {
                var e = !1;
                if ("auto" === t.config.csp) try {
                    new Function("result = false;")
                } catch (t) {
                    e = !0
                } else e = t.config.csp;
                return e
            }

            return {
                init: function () {
                    for (var e = t.locale, n = e.date.month_short, i = e.date.month_short_hash = {}, r = 0; r < n.length; r++) i[n[r]] = r;
                    for (n = e.date.month_full, i = e.date.month_full_hash = {}, r = 0; r < n.length; r++) i[n[r]] = r
                }, date_part: function (t) {
                    var e = new Date(t);
                    return t.setHours(0), this.hour_start(t), t.getHours() && (t.getDate() < e.getDate() || t.getMonth() < e.getMonth() || t.getFullYear() < e.getFullYear()) && t.setTime(t.getTime() + 36e5 * (24 - t.getHours())), t
                }, time_part: function (t) {
                    return (t.valueOf() / 1e3 - 60 * t.getTimezoneOffset()) % 86400
                }, week_start: function (e) {
                    var n = e.getDay();
                    return t.config.start_on_monday && (0 === n ? n = 6 : n--), this.date_part(this.add(e, -1 * n, "day"))
                }, month_start: function (t) {
                    return t.setDate(1), this.date_part(t)
                }, quarter_start: function (t) {
                    this.month_start(t);
                    var e, n = t.getMonth();
                    return e = n >= 9 ? 9 : n >= 6 ? 6 : n >= 3 ? 3 : 0, t.setMonth(e), t
                }, year_start: function (t) {
                    return t.setMonth(0), this.month_start(t)
                }, day_start: function (t) {
                    return this.date_part(t)
                }, hour_start: function (t) {
                    return t.getMinutes() && t.setMinutes(0), this.minute_start(t), t
                }, minute_start: function (t) {
                    return t.getSeconds() && t.setSeconds(0), t.getMilliseconds() && t.setMilliseconds(0), t
                }, _add_days: function (t, e) {
                    var n = new Date(t.valueOf());
                    return n.setDate(n.getDate() + e), e >= 0 && !t.getHours() && n.getHours() && (n.getDate() <= t.getDate() || n.getMonth() < t.getMonth() || n.getFullYear() < t.getFullYear()) && n.setTime(n.getTime() + 36e5 * (24 - n.getHours())), n
                }, add: function (t, e, n) {
                    var i = new Date(t.valueOf());
                    switch (n) {
                        case"day":
                            i = this._add_days(i, e);
                            break;
                        case"week":
                            i = this._add_days(i, 7 * e);
                            break;
                        case"month":
                            i.setMonth(i.getMonth() + e);
                            break;
                        case"year":
                            i.setYear(i.getFullYear() + e);
                            break;
                        case"hour":
                            i.setTime(i.getTime() + 60 * e * 60 * 1e3);
                            break;
                        case"minute":
                            i.setTime(i.getTime() + 60 * e * 1e3);
                            break;
                        default:
                            return this["add_" + n](t, e, n)
                    }
                    return i
                }, add_quarter: function (t, e) {
                    return this.add(t, 3 * e, "month")
                }, to_fixed: function (t) {
                    return t < 10 ? "0" + t : t
                }, copy: function (t) {
                    return new Date(t.valueOf())
                }, date_to_str: function (n, a) {
                    var o = i;
                    return e() && (o = r), o.date_to_str(n, a, t)
                }, str_to_date: function (n, a) {
                    var o = i;
                    return e() && (o = r), o.str_to_date(n, a, t)
                }, getISOWeek: function (e) {
                    return t.date._getWeekNumber(e, !0)
                }, _getWeekNumber: function (t, e) {
                    if (!t) return !1;
                    var n = t.getDay();
                    e && 0 === n && (n = 7);
                    var i = new Date(t.valueOf());
                    i.setDate(t.getDate() + (4 - n));
                    var r = i.getFullYear(), a = Math.round((i.getTime() - new Date(r, 0, 1).getTime()) / 864e5);
                    return 1 + Math.floor(a / 7)
                }, getWeek: function (e) {
                    return t.date._getWeekNumber(e, t.config.start_on_monday)
                }, getUTCISOWeek: function (e) {
                    return t.date.getISOWeek(e)
                }, convert_to_utc: function (t) {
                    return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds())
                }, parseDate: function (e, n) {
                    return e && !e.getFullYear && ("function" != typeof n && (n = "string" == typeof n ? "parse_date" === n || "xml_date" === n ? t.defined(t.templates.xml_date) ? t.templates.xml_date : t.templates.parse_date : t.defined(t.templates[n]) ? t.templates[n] : t.date.str_to_date(n) : t.defined(t.templates.xml_date) ? t.templates.xml_date : t.templates.parse_date), e = e ? n(e) : null), e
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
            if ("string" == typeof t || "number" == typeof t) return t;
            var e = "";
            for (var n in t) {
                var i = "";
                t.hasOwnProperty(n) && (i = n + "=" + (i = "string" == typeof t[n] ? encodeURIComponent(t[n]) : "number" == typeof t[n] ? t[n] : encodeURIComponent(JSON.stringify(t[n]))), e.length && (i = "&" + i), e += i)
            }
            return e
        }
    }, function (t, e, n) {
        var i = n(9), r = n(14), a = n(204).default;

        function o(t, e) {
            var n = {method: t};
            if (0 === e.length) throw new Error("Arguments list of query is wrong.");
            if (1 === e.length) return "string" == typeof e[0] ? (n.url = e[0], n.async = !0) : (n.url = e[0].url, n.async = e[0].async || !0, n.callback = e[0].callback, n.headers = e[0].headers), e[0].data ? "string" != typeof e[0].data ? n.data = a(e[0].data) : n.data = e[0].data : n.data = "", n;
            switch (n.url = e[0], t) {
                case"GET":
                case"DELETE":
                    n.callback = e[1], n.headers = e[2];
                    break;
                case"POST":
                case"PUT":
                    e[1] ? "string" != typeof e[1] ? n.data = a(e[1]) : n.data = e[1] : n.data = "", n.callback = e[2], n.headers = e[3]
            }
            return n
        }

        t.exports = function (t) {
            return {
                cache: !0, method: "get", parse: function (t) {
                    return "string" != typeof t ? t : (t = t.replace(/^[\s]+/, ""), "undefined" == typeof DOMParser || i.isIE ? void 0 !== r.ActiveXObject && ((e = new r.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e);
                    var e
                }, xmltop: function (e, n, i) {
                    if (void 0 === n.status || n.status < 400) {
                        var r = n.responseXML ? n.responseXML || n : this.parse(n.responseText || n);
                        if (r && null !== r.documentElement && !r.getElementsByTagName("parsererror").length) return r.getElementsByTagName(e)[0]
                    }
                    return -1 !== i && t.callEvent("onLoadXMLError", ["Incorrect XML", arguments[1], i]), document.createElement("DIV")
                }, xpath: function (t, e) {
                    if (e.nodeName || (e = e.responseXML || e), i.isIE) return e.selectNodes(t) || [];
                    for (var n, r = [], a = (e.ownerDocument || e).evaluate(t, e, null, XPathResult.ANY_TYPE, null); n = a.iterateNext();) r.push(n);
                    return r
                }, query: function (t) {
                    return this._call(t.method || "GET", t.url, t.data || "", t.async || !0, t.callback, t.headers)
                }, get: function (t, e, n) {
                    var i = o("GET", arguments);
                    return this.query(i)
                }, getSync: function (t, e) {
                    var n = o("GET", arguments);
                    return n.async = !1, this.query(n)
                }, put: function (t, e, n, i) {
                    var r = o("PUT", arguments);
                    return this.query(r)
                }, del: function (t, e, n) {
                    var i = o("DELETE", arguments);
                    return this.query(i)
                }, post: function (t, e, n, i) {
                    1 == arguments.length ? e = "" : 2 == arguments.length && "function" == typeof e && (e, e = "");
                    var r = o("POST", arguments);
                    return this.query(r)
                }, postSync: function (t, e, n) {
                    e = null === e ? "" : String(e);
                    var i = o("POST", arguments);
                    return i.async = !1, this.query(i)
                }, _call: function (e, n, a, o, s, l) {
                    return new t.Promise(function (c, u) {
                        var d = void 0 === typeof XMLHttpRequest || i.isIE ? new r.ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest,
                            h = null !== navigator.userAgent.match(/AppleWebKit/) && null !== navigator.userAgent.match(/Qt/) && null !== navigator.userAgent.match(/Safari/);
                        if (o && (d.onreadystatechange = function () {
                            if (4 == d.readyState || h && 3 == d.readyState) {
                                if ((200 != d.status || "" === d.responseText) && !t.callEvent("onAjaxError", [d])) return;
                                setTimeout(function () {
                                    "function" == typeof s && s.apply(r, [{
                                        xmlDoc: d,
                                        filePath: n
                                    }]), c(d), "function" == typeof s && (s = null, d = null)
                                }, 0)
                            }
                        }), "GET" != e || this.cache || (n += (n.indexOf("?") >= 0 ? "&" : "?") + "dhxr" + (new Date).getTime() + "=1"), d.open(e, n, o), l) for (var f in l) d.setRequestHeader(f, l[f]); else "POST" == e.toUpperCase() || "PUT" == e || "DELETE" == e ? d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") : "GET" == e && (a = null);
                        if (d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.send(a), !o) return {
                            xmlDoc: d,
                            filePath: n
                        }
                    })
                }, urlSeparator: function (t) {
                    return -1 != t.indexOf("?") ? "&" : "?"
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), t.exports = function () {
            return {
                layout: {
                    css: "gantt_container",
                    rows: [{
                        cols: [{view: "grid", scrollX: "scrollHor", scrollY: "scrollVer"}, {
                            resizer: !0,
                            width: 1
                        }, {view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer"}, {
                            view: "scrollbar",
                            id: "scrollVer"
                        }]
                    }, {view: "scrollbar", id: "scrollHor", height: 20}]
                },
                links: {finish_to_start: "0", start_to_start: "1", finish_to_finish: "2", start_to_finish: "3"},
                types: {task: "task", project: "project", milestone: "milestone"},
                auto_types: !1,
                duration_unit: "day",
                work_time: !1,
                correct_work_time: !1,
                skip_off_time: !1,
                cascade_delete: !0,
                autosize: !1,
                autosize_min_width: 0,
                autoscroll: !0,
                autoscroll_speed: 30,
                show_links: !0,
                show_task_cells: !0,
                static_background: !1,
                static_background_cells: !0,
                branch_loading: !1,
                branch_loading_property: "$has_child",
                show_loading: !1,
                show_chart: !0,
                show_grid: !0,
                min_duration: 36e5,
                date_format: "%d-%m-%Y %H:%i",
                xml_date: void 0,
                start_on_monday: !0,
                server_utc: !1,
                show_progress: !0,
                fit_tasks: !1,
                select_task: !0,
                scroll_on_click: !0,
                smart_rendering: !0,
                preserve_scroll: !0,
                readonly: !1,
                date_grid: "%Y-%m-%d",
                drag_links: !0,
                drag_progress: !0,
                drag_resize: !0,
                drag_project: !1,
                drag_move: !0,
                drag_mode: {resize: "resize", progress: "progress", move: "move", ignore: "ignore"},
                round_dnd_dates: !0,
                link_wrapper_width: 20,
                root_id: 0,
                autofit: !1,
                columns: [{name: "text", tree: !0, width: "*", resize: !0}, {
                    name: "start_date",
                    align: "center",
                    resize: !0
                }, {name: "duration", align: "center"}, {name: "add", width: 44}],
                scale_offset_minimal: !0,
                inherit_scale_class: !1,
                scales: [{unit: "day", step: 1, date: "%d %M"}],
                time_step: 60,
                duration_step: 1,
                task_date: "%d %F %Y",
                time_picker: "%H:%i",
                task_attribute: "data-task-id",
                link_attribute: "data-link-id",
                layer_attribute: "data-layer",
                buttons_left: ["gantt_save_btn", "gantt_cancel_btn"],
                _migrate_buttons: {
                    dhx_save_btn: "gantt_save_btn",
                    dhx_cancel_btn: "gantt_cancel_btn",
                    dhx_delete_btn: "gantt_delete_btn"
                },
                buttons_right: ["gantt_delete_btn"],
                lightbox: {
                    sections: [{
                        name: "description",
                        height: 70,
                        map_to: "text",
                        type: "textarea",
                        focus: !0
                    }, {name: "time", type: "duration", map_to: "auto"}],
                    project_sections: [{
                        name: "description",
                        height: 70,
                        map_to: "text",
                        type: "textarea",
                        focus: !0
                    }, {name: "type", type: "typeselect", map_to: "type"}, {
                        name: "time",
                        type: "duration",
                        readonly: !0,
                        map_to: "auto"
                    }],
                    milestone_sections: [{
                        name: "description",
                        height: 70,
                        map_to: "text",
                        type: "textarea",
                        focus: !0
                    }, {name: "type", type: "typeselect", map_to: "type"}, {
                        name: "time",
                        type: "duration",
                        single_date: !0,
                        map_to: "auto"
                    }]
                },
                drag_lightbox: !0,
                sort: !1,
                details_on_create: !0,
                details_on_dblclick: !0,
                initial_scroll: !0,
                task_scroll_offset: 100,
                order_branch: !1,
                order_branch_free: !1,
                task_height: "full",
                min_column_width: 70,
                min_grid_column_width: 70,
                grid_resizer_column_attribute: "data-column-index",
                keep_grid_width: !1,
                grid_resize: !1,
                grid_elastic_columns: !1,
                show_tasks_outside_timescale: !1,
                show_unscheduled: !0,
                readonly_property: "readonly",
                editable_property: "editable",
                calendar_property: "calendar_id",
                resource_calendars: {},
                dynamic_resource_calendars: !1,
                inherit_calendar: !1,
                type_renderers: {},
                open_tree_initially: !1,
                optimize_render: !0,
                prevent_default_scroll: !1,
                show_errors: !0,
                wai_aria_attributes: !0,
                smart_scales: !0,
                rtl: !1,
                placeholder_task: !1,
                horizontal_scroll_key: "shiftKey",
                drag_timeline: {useKey: void 0, ignore: ".gantt_task_line, .gantt_task_link"},
                drag_multiple: !0,
                csp: "auto"
            }
        }
    }, function (t, e) {
        t.exports = function () {
            var t = {};
            return {
                services: {}, setService: function (e, n) {
                    t[e] = n
                }, getService: function (e) {
                    return t[e] ? t[e]() : null
                }, dropService: function (e) {
                    t[e] && delete t[e]
                }, destructor: function () {
                    for (var e in t) if (t[e]) {
                        var n = t[e];
                        n && n.destructor && n.destructor()
                    }
                    t = null
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            return function (t) {
                var e = this;
                for (var n in this.addExtension = function (t, n) {
                    e._extensions[t] = n
                }, this.getExtension = function (t) {
                    return e._extensions[t]
                }, this._extensions = {}, t) this._extensions[n] = t[n]
            }
        }();
        e.default = i
    }, function (t, e) {
        t.exports = {
            KEY_CODES: {
                UP: 38,
                DOWN: 40,
                LEFT: 37,
                RIGHT: 39,
                SPACE: 32,
                ENTER: 13,
                DELETE: 46,
                ESC: 27,
                TAB: 9
            }
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = new function () {
                this.constants = n(209), this.version = "7.0.0", this.license = "gpl", this.templates = {}, this.ext = {}, this.keys = {
                    edit_save: this.constants.KEY_CODES.ENTER,
                    edit_cancel: this.constants.KEY_CODES.ESC
                }
            }, i = new (0, n(208).default)(t);
            e.plugins = function (t) {
                for (var n in t) {
                    var r = i.getExtension(n);
                    r && r(e)
                }
            }, e.$services = n(207)(), e.config = n(206)(), e.ajax = n(205)(e), e.date = n(203)(e);
            var r = n(200)(e);
            e.$services.setService("dnd", function () {
                return r
            });
            var a = n(199)(e);
            e.$services.setService("templateLoader", function () {
                return a
            }), n(4)(e);
            var o = new (n(198));
            o.registerProvider("global", function () {
                var t = {min_date: e._min_date, max_date: e._max_date, selected_task: null};
                return e.$data && e.$data.tasksStore && (t.selected_task = e.$data.tasksStore.getSelectedId()), t
            }), e.getState = o.getState, e.$services.setService("state", function () {
                return o
            });
            var s = n(0);
            s.mixin(e, s), e.Promise = n(197), e.env = n(9), n(193)(e);
            var l = n(187);
            e.dataProcessor = l.DEPRECATED_api, e.createDataProcessor = l.createDataProcessor, n(182)(e), n(174)(e), n(173)(e), n(168)(e), n(167)(e), n(166)(e), n(154)(e), n(153).default(e), n(152)(e), n(151)(e), n(150)(e), n(147)(e), n(146).default(e);
            var c = n(145).default();
            return e.i18n = {
                addLocale: c.addLocale, setLocale: function (t) {
                    if ("string" == typeof t) {
                        var n = c.getLocale(t);
                        n || (n = c.getLocale("en")), e.locale = n
                    } else if (t) if (e.locale) for (var i in t) t[i] && "object" == typeof t[i] ? (e.locale[i] || (e.locale[i] = {}), e.mixin(e.locale[i], t[i], !0)) : e.locale[i] = t[i]; else e.locale = t
                }, getLocale: c.getLocale
            }, e.i18n.setLocale("en"), e
        }
    }, function (t, e, n) {
        n(24);
        var i = n(210);
        t.exports = function (t) {
            var e = i(t);
            return e.env.isNode || n(113)(e), e
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = 10, r = function () {
            function t() {
                var t = this;
                this.maxSteps = i, this.undoEnabled = !0, this.redoEnabled = !0, this.action = {
                    create: function (t) {
                        return {commands: t ? t.slice() : []}
                    }, invert: function (e) {
                        for (var n, i = gantt.copy(e), r = t.command, a = 0; a < e.commands.length; a++) {
                            var o = i.commands[a] = r.invert(i.commands[a]);
                            o.type !== r.type.update && o.type !== r.type.move || (n = [o.oldValue, o.value], o.value = n[0], o.oldValue = n[1])
                        }
                        return i
                    }
                }, this.command = {
                    entity: null, type: null, create: function (t, e, n, i) {
                        return {entity: i, type: n, value: gantt.copy(t), oldValue: gantt.copy(e || t)}
                    }, invert: function (t) {
                        var e = gantt.copy(t);
                        return e.type = this.inverseCommands(t.type), e
                    }, inverseCommands: function (t) {
                        switch (t) {
                            case this.type.update:
                                return this.type.update;
                            case this.type.remove:
                                return this.type.add;
                            case this.type.add:
                                return this.type.remove;
                            case this.type.move:
                                return this.type.move;
                            default:
                                return gantt.assert(!1, "Invalid command " + t), null
                        }
                    }
                }, this._undoStack = [], this._redoStack = []
            }

            return t.prototype.getUndoStack = function () {
                return this._undoStack
            }, t.prototype.getRedoStack = function () {
                return this._redoStack
            }, t.prototype.clearUndoStack = function () {
                this._undoStack = []
            }, t.prototype.clearRedoStack = function () {
                this._redoStack = []
            }, t.prototype.updateConfigs = function () {
                this.maxSteps = gantt.config.undo_steps || i, this.command.entity = gantt.config.undo_types, this.command.type = gantt.config.undo_actions, this.undoEnabled = !!gantt.config.undo, this.redoEnabled = !!gantt.config.undo && !!gantt.config.redo
            }, t.prototype.undo = function () {
                if (this.updateConfigs(), this.undoEnabled) {
                    var t = this._pop(this._undoStack);
                    if (t && this._reorderCommands(t), !1 !== gantt.callEvent("onBeforeUndo", [t]) && t) return this._applyAction(this.action.invert(t)), this._push(this._redoStack, gantt.copy(t)), void gantt.callEvent("onAfterUndo", [t]);
                    gantt.callEvent("onAfterUndo", [null])
                }
            }, t.prototype.redo = function () {
                if (this.updateConfigs(), this.redoEnabled) {
                    var t = this._pop(this._redoStack);
                    if (t && this._reorderCommands(t), !1 !== gantt.callEvent("onBeforeRedo", [t]) && t) return this._applyAction(t), this._push(this._undoStack, gantt.copy(t)), void gantt.callEvent("onAfterRedo", [t]);
                    gantt.callEvent("onAfterRedo", [null])
                }
            }, t.prototype.logAction = function (t) {
                this._push(this._undoStack, t), this._redoStack = []
            }, t.prototype._push = function (t, e) {
                if (e.commands.length) {
                    var n = t === this._undoStack ? "onBeforeUndoStack" : "onBeforeRedoStack";
                    if (!1 !== gantt.callEvent(n, [e]) && e.commands.length) {
                        for (t.push(e); t.length > this.maxSteps;) t.shift();
                        return e
                    }
                }
            }, t.prototype._pop = function (t) {
                return t.pop()
            }, t.prototype._reorderCommands = function (t) {
                var e = {any: 0, link: 1, task: 2}, n = {move: 1, any: 0};
                t.commands.sort(function (t, i) {
                    if ("task" === t.entity && "task" === i.entity) return t.type !== i.type ? (n[i.type] || 0) - (n[t.type] || 0) : "move" === t.type && t.oldValue && i.oldValue && i.oldValue.parent === t.oldValue.parent ? t.oldValue.$index - i.oldValue.$index : 0;
                    var r = e[t.entity] || e.any;
                    return (e[i.entity] || e.any) - r
                })
            }, t.prototype._applyAction = function (t) {
                var e = null, n = this.command.entity, i = this.command.type, r = {};
                r[n.task] = {
                    add: "addTask",
                    get: "getTask",
                    update: "updateTask",
                    remove: "deleteTask",
                    move: "moveTask",
                    isExists: "isTaskExists"
                }, r[n.link] = {
                    add: "addLink",
                    get: "getLink",
                    update: "updateLink",
                    remove: "deleteLink",
                    isExists: "isLinkExists"
                }, gantt.batchUpdate(function () {
                    for (var n = 0; n < t.commands.length; n++) {
                        e = t.commands[n];
                        var a = r[e.entity][e.type], o = r[e.entity].get, s = r[e.entity].isExists;
                        if (e.type === i.add) gantt[a](e.oldValue, e.oldValue.parent, e.oldValue.$index); else if (e.type === i.remove) gantt[s](e.value.id) && gantt[a](e.value.id); else if (e.type === i.update) {
                            var l = gantt[o](e.value.id);
                            for (var c in e.value) c.startsWith("$") || c.startsWith("_") || (l[c] = e.value[c]);
                            gantt[a](e.value.id)
                        } else e.type === i.move && gantt[a](e.value.id, e.value.$index, e.value.parent)
                    }
                })
            }, t
        }();
        e.Undo = r
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = {onBeforeUndo: "onAfterUndo", onBeforeRedo: "onAfterRedo"},
            r = ["onTaskDragStart", "onAfterTaskUpdate", "onAfterTaskDelete", "onBeforeBatchUpdate"], a = function () {
                function t(t) {
                    this._batchAction = null, this._batchMode = !1, this._ignore = !1, this._ignoreMoveEvents = !1, this._initialTasks = {}, this._initialLinks = {}, this._nestedTasks = {}, this._nestedLinks = {}, this._undo = t, this._attachEvents()
                }

                return t.prototype.store = function (t, e, n) {
                    return void 0 === n && (n = !1), e === gantt.config.undo_types.task ? this._storeTask(t, n) : e === gantt.config.undo_types.link && this._storeLink(t, n)
                }, t.prototype.isMoveEventsIgnored = function () {
                    return this._ignoreMoveEvents
                }, t.prototype.toggleIgnoreMoveEvents = function (t) {
                    this._ignoreMoveEvents = t || !1
                }, t.prototype.startIgnore = function () {
                    this._ignore = !0
                }, t.prototype.stopIgnore = function () {
                    this._ignore = !1
                }, t.prototype.startBatchAction = function () {
                    var t = this;
                    this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function () {
                        t.stopBatchAction()
                    }, 10), this._ignore || this._batchMode || (this._batchMode = !0, this._batchAction = this._undo.action.create())
                }, t.prototype.stopBatchAction = function () {
                    if (!this._ignore) {
                        var t = this._undo;
                        this._batchAction && t.logAction(this._batchAction), this._batchMode = !1, this._batchAction = null
                    }
                }, t.prototype.onTaskAdded = function (t) {
                    this._ignore || this._storeTaskCommand(t, this._undo.command.type.add)
                }, t.prototype.onTaskUpdated = function (t) {
                    this._ignore || this._storeTaskCommand(t, this._undo.command.type.update)
                }, t.prototype.onTaskMoved = function (t) {
                    this._ignore || this._storeEntityCommand(t, this.getInitialTask(t.id), this._undo.command.type.move, this._undo.command.entity.task)
                }, t.prototype.onTaskDeleted = function (t) {
                    if (!this._ignore) {
                        if (this._storeTaskCommand(t, this._undo.command.type.remove), this._nestedTasks[t.id]) for (var e = this._nestedTasks[t.id], n = 0; n < e.length; n++) this._storeTaskCommand(e[n], this._undo.command.type.remove);
                        if (this._nestedLinks[t.id]) {
                            var i = this._nestedLinks[t.id];
                            for (n = 0; n < i.length; n++) this._storeLinkCommand(i[n], this._undo.command.type.remove)
                        }
                    }
                }, t.prototype.onLinkAdded = function (t) {
                    this._ignore || this._storeLinkCommand(t, this._undo.command.type.add)
                }, t.prototype.onLinkUpdated = function (t) {
                    this._ignore || this._storeLinkCommand(t, this._undo.command.type.update)
                }, t.prototype.onLinkDeleted = function (t) {
                    this._ignore || this._storeLinkCommand(t, this._undo.command.type.remove)
                }, t.prototype.setNestedTasks = function (t, e) {
                    for (var n = null, i = [], r = this._getLinks(gantt.getTask(t)), a = 0; a < e.length; a++) n = this.setInitialTask(e[a]), r = r.concat(this._getLinks(n)), i.push(n);
                    var o = {};
                    for (a = 0; a < r.length; a++) o[r[a]] = !0;
                    var s = [];
                    for (var a in o) s.push(this.setInitialLink(a));
                    this._nestedTasks[t] = i, this._nestedLinks[t] = s
                }, t.prototype.setInitialTask = function (t, e) {
                    if (e || !this._initialTasks[t] || !this._batchMode) {
                        var n = gantt.copy(gantt.getTask(t));
                        n.$index = gantt.getTaskIndex(t), this.setInitialTaskObject(t, n)
                    }
                    return this._initialTasks[t]
                }, t.prototype.getInitialTask = function (t) {
                    return this._initialTasks[t]
                }, t.prototype.clearInitialTasks = function () {
                    this._initialTasks = {}
                }, t.prototype.setInitialTaskObject = function (t, e) {
                    this._initialTasks[t] = e
                }, t.prototype.setInitialLink = function (t, e) {
                    return this._initialLinks[t] && this._batchMode || (this._initialLinks[t] = gantt.copy(gantt.getLink(t))), this._initialLinks[t]
                }, t.prototype.getInitialLink = function (t) {
                    return this._initialLinks[t]
                }, t.prototype.clearInitialLinks = function () {
                    this._initialLinks = {}
                }, t.prototype._attachEvents = function () {
                    var t = this, e = null, n = function () {
                        e || (e = setTimeout(function () {
                            e = null
                        }), t.clearInitialTasks(), gantt.eachTask(function (e) {
                            t.setInitialTask(e.id)
                        }), t.clearInitialLinks(), gantt.getLinks().forEach(function (e) {
                            t.setInitialLink(e.id)
                        }))
                    }, a = function (t) {
                        return gantt.copy(gantt.getTask(t))
                    };
                    for (var o in i) gantt.attachEvent(o, function () {
                        return t.startIgnore(), !0
                    }), gantt.attachEvent(i[o], function () {
                        return t.stopIgnore(), !0
                    });
                    for (o = 0; o < r.length; o++) gantt.attachEvent(r[o], function () {
                        return t.startBatchAction(), !0
                    });
                    gantt.attachEvent("onParse", function () {
                        t._undo.clearUndoStack(), t._undo.clearRedoStack(), n()
                    }), gantt.attachEvent("onAfterTaskAdd", function (e, n) {
                        t.setInitialTask(e, !0), t.onTaskAdded(n)
                    }), gantt.attachEvent("onAfterTaskUpdate", function (e, n) {
                        t.onTaskUpdated(n)
                    }), gantt.attachEvent("onAfterTaskDelete", function (e, n) {
                        t.onTaskDeleted(n)
                    }), gantt.attachEvent("onAfterLinkAdd", function (e, n) {
                        t.setInitialLink(e, !0), t.onLinkAdded(n)
                    }), gantt.attachEvent("onAfterLinkUpdate", function (e, n) {
                        t.onLinkUpdated(n)
                    }), gantt.attachEvent("onAfterLinkDelete", function (e, n) {
                        t.onLinkDeleted(n)
                    }), gantt.attachEvent("onRowDragEnd", function (e, n) {
                        return t.onTaskMoved(a(e)), t.toggleIgnoreMoveEvents(), !0
                    }), gantt.attachEvent("onBeforeTaskDelete", function (e) {
                        t.store(e, gantt.config.undo_types.task);
                        var i = [];
                        return n(), gantt.eachTask(function (t) {
                            i.push(t.id)
                        }, e), t.setNestedTasks(e, i), !0
                    });
                    var s = gantt.getDatastore("task");
                    s.attachEvent("onBeforeItemMove", function (e, i, r) {
                        return t.isMoveEventsIgnored() || n(), !0
                    }), s.attachEvent("onAfterItemMove", function (e, n, i) {
                        return t.isMoveEventsIgnored() || t.onTaskMoved(a(e)), !0
                    }), gantt.attachEvent("onRowDragStart", function (e, i, r) {
                        return t.toggleIgnoreMoveEvents(!0), n(), !0
                    }), gantt.attachEvent("onBeforeTaskDrag", function (e) {
                        return t.store(e, gantt.config.undo_types.task)
                    }), gantt.attachEvent("onLightbox", function (e) {
                        return t.store(e, gantt.config.undo_types.task)
                    }), gantt.attachEvent("onBeforeTaskAutoSchedule", function (e) {
                        return t.store(e.id, gantt.config.undo_types.task), !0
                    }), gantt.ext.inlineEditors && gantt.ext.inlineEditors.attachEvent("onEditStart", function (e) {
                        t.store(e.id, gantt.config.undo_types.task)
                    })
                }, t.prototype._storeCommand = function (t) {
                    var e = this._undo;
                    if (e.updateConfigs(), e.undoEnabled) if (this._batchMode) this._batchAction.commands.push(t); else {
                        var n = e.action.create([t]);
                        e.logAction(n)
                    }
                }, t.prototype._storeEntityCommand = function (t, e, n, i) {
                    var r = this._undo.command.create(t, e, n, i);
                    this._storeCommand(r)
                }, t.prototype._storeTaskCommand = function (t, e) {
                    this._storeEntityCommand(t, this.getInitialTask(t.id), e, this._undo.command.entity.task)
                }, t.prototype._storeLinkCommand = function (t, e) {
                    this._storeEntityCommand(t, this.getInitialLink(t.id), e, this._undo.command.entity.link)
                }, t.prototype._getLinks = function (t) {
                    return t.$source.concat(t.$target)
                }, t.prototype._storeTask = function (t, e) {
                    var n = this;
                    return void 0 === e && (e = !1), this.setInitialTask(t, e), gantt.eachTask(function (t) {
                        n.setInitialTask(t.id)
                    }, t), !0
                }, t.prototype._storeLink = function (t, e) {
                    return void 0 === e && (e = !1), this.setInitialLink(t, e), !0
                }, t
            }();
        e.Monitor = a
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(213), r = n(212);
        e.default = function (t) {
            var e = new r.Undo, n = new i.Monitor(e);

            function a(t, e, n) {
                t && (t.id === e && (t.id = n), t.parent === e && (t.parent = n))
            }

            function o(t, e, n) {
                a(t.value, e, n), a(t.oldValue, e, n)
            }

            function s(t, e, n) {
                t && (t.source === e && (t.source = n), t.target === e && (t.target = n))
            }

            function l(t, e, n) {
                s(t.value, e, n), s(t.oldValue, e, n)
            }

            function c(t, n, i) {
                for (var r = e, a = 0; a < t.length; a++) for (var s = t[a], c = 0; c < s.commands.length; c++) s.commands[c].entity === r.command.entity.task ? o(s.commands[c], n, i) : s.commands[c].entity === r.command.entity.link && l(s.commands[c], n, i)
            }

            function u(t, n, i) {
                for (var r = e, a = 0; a < t.length; a++) for (var o = t[a], s = 0; s < o.commands.length; s++) {
                    var l = o.commands[s];
                    l.entity === r.command.entity.link && (l.value && l.value.id === n && (l.value.id = i), l.oldValue && l.oldValue.id === n && (l.oldValue.id = i))
                }
            }

            t.config.undo = !0, t.config.redo = !0, t.config.undo_types = {
                link: "link",
                task: "task"
            }, t.config.undo_actions = {
                update: "update",
                remove: "remove",
                add: "add",
                move: "move"
            }, t.ext || (t.ext = {}), t.ext.undo = {
                undo: function () {
                    return e.undo()
                }, redo: function () {
                    return e.redo()
                }, getUndoStack: function () {
                    return e.getUndoStack()
                }, getRedoStack: function () {
                    return e.getRedoStack()
                }, clearUndoStack: function () {
                    return e.clearUndoStack()
                }, clearRedoStack: function () {
                    return e.clearRedoStack()
                }, saveState: function (t, e) {
                    return n.store(t, e, !0)
                }
            }, t.undo = t.ext.undo.undo, t.redo = t.ext.undo.redo, t.getUndoStack = t.ext.undo.getUndoStack, t.getRedoStack = t.ext.undo.getRedoStack, t.clearUndoStack = t.ext.undo.clearUndoStack, t.clearRedoStack = t.ext.undo.clearRedoStack, t.attachEvent("onTaskIdChange", function (t, n) {
                var i = e;
                c(i.getUndoStack(), t, n), c(i.getRedoStack(), t, n)
            }), t.attachEvent("onLinkIdChange", function (t, n) {
                var i = e;
                u(i.getUndoStack(), t, n), u(i.getRedoStack(), t, n)
            }), t.attachEvent("onGanttReady", function () {
                e.updateConfigs()
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(1), r = function () {
            function t() {
            }

            return t.prototype.getNode = function () {
                return this._tooltipNode || (this._tooltipNode = document.createElement("div"), this._tooltipNode.className = "gantt_tooltip", gantt._waiAria.tooltipAttr(this._tooltipNode)), this._tooltipNode
            }, t.prototype.setViewport = function (t) {
                return this._root = t, this
            }, t.prototype.show = function (t, e) {
                var n = document.body, r = this.getNode();
                if (i.isChildOf(r, n) || (this.hide(), n.appendChild(r)), this._isLikeMouseEvent(t)) {
                    var a = this._calculateTooltipPosition(t);
                    e = a.top, t = a.left
                }
                return r.style.top = e + "px", r.style.left = t + "px", gantt._waiAria.tooltipVisibleAttr(r), this
            }, t.prototype.hide = function () {
                var t = this.getNode();
                return t && t.parentNode && t.parentNode.removeChild(t), gantt._waiAria.tooltipHiddenAttr(t), this
            }, t.prototype.setContent = function (t) {
                return this.getNode().innerHTML = t, this
            }, t.prototype._isLikeMouseEvent = function (t) {
                return !(!t || "object" != typeof t) && ("clientX" in t && "clientY" in t)
            }, t.prototype._getViewPort = function () {
                return this._root || document.body
            }, t.prototype._calculateTooltipPosition = function (t) {
                var e = this._getViewPortSize(), n = this.getNode(),
                    r = {top: 0, left: 0, width: n.offsetWidth, height: n.offsetHeight, bottom: 0, right: 0},
                    a = gantt.config.tooltip_offset_x, o = gantt.config.tooltip_offset_y, s = document.body,
                    l = i.getRelativeEventPosition(t, s), c = i.getNodePosition(s);
                l.y += c.y, r.top = l.y, r.left = l.x, r.top += o, r.left += a, r.bottom = r.top + r.height, r.right = r.left + r.width;
                var u = window.scrollY + s.scrollTop;
                return r.top < e.top - u ? (r.top = e.top, r.bottom = r.top + r.height) : r.bottom > e.bottom && (r.bottom = e.bottom, r.top = r.bottom - r.height), r.left < e.left ? (r.left = e.left, r.right = e.left + r.width) : r.right > e.right && (r.right = e.right, r.left = r.right - r.width), l.x >= r.left && l.x <= r.right && (r.left = l.x - r.width - a, r.right = r.left + r.width), l.y >= r.top && l.y <= r.bottom && (r.top = l.y - r.height - o, r.bottom = r.top + r.height), r
            }, t.prototype._getViewPortSize = function () {
                var t, e = this._getViewPort(), n = e, r = window.scrollY + document.body.scrollTop,
                    a = window.scrollX + document.body.scrollLeft;
                return e === gantt.$task_data ? (n = gantt.$task, r = 0, a = 0, t = i.getNodePosition(gantt.$task)) : t = i.getNodePosition(n), {
                    left: t.x + a,
                    top: t.y + r,
                    width: t.width,
                    height: t.height,
                    bottom: t.y + t.height + r,
                    right: t.x + t.width + a
                }
            }, t
        }();
        e.Tooltip = r
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(41), r = n(1), a = n(3), o = n(215), s = function () {
            function t() {
                this.tooltip = new o.Tooltip, this._listeners = {}, this._domEvents = i(), this._initDelayedFunctions()
            }

            return t.prototype.destructor = function () {
                this.tooltip.hide(), this._domEvents.detachAll()
            }, t.prototype.hideTooltip = function () {
                this.delayHide()
            }, t.prototype.attach = function (t) {
                var e = this, n = document.body;
                t.global || (n = gantt.$root);
                var i = null, a = function (n) {
                    var a = r.getTargetNode(n), o = r.closest(a, t.selector);
                    if (!r.isChildOf(a, e.tooltip.getNode())) {
                        var s = function () {
                            i = o, t.onmouseenter(n, o)
                        };
                        i ? o && o === i ? t.onmousemove(n, o) : (t.onmouseleave(n, i), i = null, o && o !== i && s()) : o && s()
                    }
                };
                this.detach(t.selector), this._domEvents.attach(n, "mousemove", a), this._listeners[t.selector] = {
                    node: n,
                    handler: a
                }
            }, t.prototype.detach = function (t) {
                var e = this._listeners[t];
                e && this._domEvents.detach(e.node, "mousemove", e.handler)
            }, t.prototype.tooltipFor = function (t) {
                var e = this, n = function (t) {
                    var e = t;
                    return document.createEventObject && !document.createEvent && (e = document.createEventObject(t)), e
                };
                this._initDelayedFunctions(), this.attach({
                    selector: t.selector,
                    global: t.global,
                    onmouseenter: function (i, r) {
                        var a = t.html(i, r);
                        a && e.delayShow(n(i), a)
                    },
                    onmousemove: function (i, r) {
                        var a = t.html(i, r);
                        a ? e.delayShow(n(i), a) : (e.delayShow.$cancelTimeout(), e.delayHide())
                    },
                    onmouseleave: function () {
                        e.delayShow.$cancelTimeout(), e.delayHide()
                    }
                })
            }, t.prototype._initDelayedFunctions = function () {
                var t = this;
                this.delayShow && this.delayShow.$cancelTimeout(), this.delayHide && this.delayHide.$cancelTimeout(), this.tooltip.hide(), this.delayShow = a.delay(function (e, n) {
                    !1 === gantt.callEvent("onBeforeTooltip", [e]) ? t.tooltip.hide() : (t.tooltip.setContent(n), t.tooltip.show(e))
                }, gantt.config.tooltip_timeout || 1), this.delayHide = a.delay(function () {
                    t.delayShow.$cancelTimeout(), t.tooltip.hide()
                }, gantt.config.tooltip_hide_timeout || 1)
            }, t
        }();
        e.TooltipManager = s
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(216);
        e.default = function (t) {
            t.config.tooltip_timeout = 30, t.config.tooltip_offset_y = 20, t.config.tooltip_offset_x = 10, t.config.tooltip_hide_timeout = 30;
            var e = new i.TooltipManager;
            t.ext.tooltips = e, t.attachEvent("onGanttReady", function () {
                e.tooltipFor({
                    selector: "[" + t.config.task_attribute + "]:not(.gantt_task_row)", html: function (e) {
                        if (!t.config.touch || t.config.touch_tooltip) {
                            var n = t.locate(e);
                            if (t.isTaskExists(n)) {
                                var i = t.getTask(n);
                                return t.templates.tooltip_text(i.start_date, i.end_date, i)
                            }
                            return null
                        }
                    }, global: !1
                })
            }), t.attachEvent("onDestroy", function () {
                e.destructor()
            }), t.attachEvent("onLightbox", function () {
                e.hideTooltip()
            }), t.attachEvent("onBeforeTooltip", function () {
                if (t.getState().link_source_id) return !1
            }), t.attachEvent("onGanttScroll", function () {
                e.hideTooltip()
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t) {
                var e = this;
                this.show = function (t, n) {
                    void 0 === n ? e._showForTask(t) : e._showAtCoordinates(t, n)
                }, this.hide = function (t) {
                    var n = e._gantt, i = e._quickInfoBox;
                    e._quickInfoBoxId = 0;
                    var r = e._quickInfoTask;
                    if (e._quickInfoTask = null, i && i.parentNode) {
                        if (n.config.quick_info_detached) return n.callEvent("onAfterQuickInfo", [r]), i.parentNode.removeChild(i);
                        i.className += " gantt_qi_hidden", "auto" === i.style.right ? i.style.left = "-350px" : i.style.right = "-350px", t && (i.style.left = i.style.right = "", i.parentNode.removeChild(i)), n.callEvent("onAfterQuickInfo", [r])
                    }
                }, this.getNode = function () {
                    return e._quickInfoBox ? e._quickInfoBox : null
                }, this.setContainer = function (t) {
                    t && (e._container = "string" == typeof t ? document.getElementById(t) : t)
                }, this.setContent = function (t) {
                    var n = e._gantt, i = {
                        taskId: null,
                        header: {title: "", date: ""},
                        content: "",
                        buttons: n.config.quickinfo_buttons
                    };
                    t || (t = i), t.taskId || (t.taskId = i.taskId), t.header || (t.header = i.header), t.header.title || (t.header.title = i.header.title), t.header.date || (t.header.date = i.header.date), t.content || (t.content = i.content), t.buttons || (t.buttons = i.buttons);
                    var r = e.getNode();
                    r || (r = e._createQuickInfoElement()), t.taskId && (e._quickInfoBoxId = t.taskId);
                    var a = r.querySelector(".gantt_cal_qi_title"), o = a.querySelector(".gantt_cal_qi_tcontent"),
                        s = a.querySelector(".gantt_cal_qi_tdate"), l = r.querySelector(".gantt_cal_qi_content"),
                        c = r.querySelector(".gantt_cal_qi_controls");
                    n._waiAria.quickInfoHeader(r, [t.header.title, t.header.date].join(" ")), o.innerHTML = t.header.title, s.innerHTML = t.header.date, t.header.title || t.header.date ? a.style.display = "" : a.style.display = "none", l.innerHTML = t.content;
                    var u = t.buttons;
                    u.length ? c.style.display = "" : c.style.display = "none";
                    for (var d = "", h = 0; h < u.length; h++) {
                        var f = n._waiAria.quickInfoButtonAttrString(n.locale.labels[u[h]]);
                        d += '<div class="gantt_qi_big_icon ' + u[h] + '" title="' + n.locale.labels[u[h]] + '" ' + f + "><div class='gantt_menu_icon " + u[h] + "'></div><div>" + n.locale.labels[u[h]] + "</div></div>"
                    }
                    c.innerHTML = d, n.eventRemove(r, "click", e._qiButtonClickHandler), n.eventRemove(r, "keypress", e._qiKeyPressHandler), n.event(r, "click", e._qiButtonClickHandler), n.event(r, "keypress", e._qiKeyPressHandler)
                }, this._qiButtonClickHandler = function (t) {
                    t = t || event, e._qi_button_click(t.target || t.srcElement)
                }, this._qiKeyPressHandler = function (t) {
                    var n = (t = t || event).which || event.keyCode;
                    13 !== n && 32 !== n || setTimeout(function () {
                        e._qi_button_click(t.target || t.srcElement)
                    }, 1)
                }, this._gantt = t
            }

            return t.prototype._showAtCoordinates = function (t, e) {
                this.hide(!0), this._quickInfoBoxId = 0, this._quickInfoTask = null, this._quickInfoBox || (this._createQuickInfoElement(), this.setContent()), this._appendAtCoordinates(t, e), this._gantt.callEvent("onQuickInfo", [null])
            }, t.prototype._showForTask = function (t) {
                var e = this._gantt;
                if ((t !== this._quickInfoBoxId || !e.utils.dom.isChildOf(this._quickInfoBox, document.body)) && e.config.show_quick_info) {
                    this.hide(!0);
                    var n = this._getContainer(), i = this._get_event_counter_part(t, 6, n.xViewport, n.yViewport);
                    i && (this._quickInfoBox = this._init_quick_info(t), this._quickInfoTask = t, this._quickInfoBox.className = this._prepare_quick_info_classname(t), this._fill_quick_data(t), this._show_quick_info(i, 6), e.callEvent("onQuickInfo", [t]))
                }
            }, t.prototype._get_event_counter_part = function (t, e, n, i) {
                var r = this._gantt, a = r.getTaskNode(t);
                if (!a && !(a = r.getTaskRowNode(t))) return null;
                var o = 0, s = e + a.offsetTop + a.offsetHeight, l = a;
                if (r.utils.dom.isChildOf(l, n)) for (; l && l !== n;) o += l.offsetLeft, l = l.offsetParent;
                var c = r.getScrollState();
                return l ? {
                    left: o,
                    top: s,
                    dx: o + a.offsetWidth / 2 - c.x > n.offsetWidth / 2 ? 1 : 0,
                    dy: s + a.offsetHeight / 2 - c.y > i.offsetHeight / 2 ? 1 : 0,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                } : null
            }, t.prototype._createQuickInfoElement = function () {
                var t = this, e = this._gantt, n = document.createElement("div");
                n.className += "gantt_cal_quick_info", e._waiAria.quickInfoAttr(n);
                var i = '<div class="gantt_cal_qi_title" ' + e._waiAria.quickInfoHeaderAttrString() + '><div class="gantt_cal_qi_tcontent"></div><div  class="gantt_cal_qi_tdate"></div></div><div class="gantt_cal_qi_content"></div>';
                if (i += '<div class="gantt_cal_qi_controls">', i += "</div>", n.innerHTML = i, e.config.quick_info_detached) {
                    var r = this._getContainer();
                    e.event(r.parent, "scroll", function () {
                        t.hide()
                    })
                }
                return this._quickInfoBox = n, n
            }, t.prototype._init_quick_info = function (t) {
                var e = this._gantt, n = e.getTask(t);
                return "boolean" == typeof this._quickInfoReadonly && e.isReadonly(n) !== this._quickInfoReadonly && (this.hide(!0), this._quickInfoBox = null), this._quickInfoReadonly = e.isReadonly(n), this._quickInfoBox || (this._quickInfoBox = this._createQuickInfoElement()), this._quickInfoBox
            }, t.prototype._prepare_quick_info_classname = function (t) {
                var e = this._gantt, n = e.getTask(t), i = "gantt_cal_quick_info",
                    r = e.templates.quick_info_class(n.start_date, n.end_date, n);
                return r && (i += " " + r), i
            }, t.prototype._fill_quick_data = function (t) {
                var e = this._gantt, n = e.getTask(t);
                this._quickInfoBoxId = t;
                var i = null;
                if (this._quickInfoReadonly) for (var r = e.config.quickinfo_buttons, a = {
                    icon_delete: !0,
                    icon_edit: !0
                }, o = 0; o < r.length; o++) this._quickInfoReadonly && a[r[o]] || i.push(r[o]); else i = e.config.quickinfo_buttons;
                this.setContent({
                    header: {
                        title: e.templates.quick_info_title(n.start_date, n.end_date, n),
                        date: e.templates.quick_info_date(n.start_date, n.end_date, n)
                    }, content: e.templates.quick_info_content(n.start_date, n.end_date, n), buttons: i
                })
            }, t.prototype._appendAtCoordinates = function (t, e) {
                var n = this._quickInfoBox, i = this._getContainer();
                n.parentNode && "#document-fragment" !== n.parentNode.nodeName.toLowerCase() || i.parent.appendChild(n), n.style.left = t + "px", n.style.top = e + "px"
            }, t.prototype._show_quick_info = function (t, e) {
                var n = this._gantt, i = this._quickInfoBox;
                if (n.config.quick_info_detached) {
                    var r = this._getContainer();
                    i.parentNode && "#document-fragment" !== i.parentNode.nodeName.toLowerCase() || r.parent.appendChild(i);
                    var a = i.offsetWidth, o = i.offsetHeight, s = n.getScrollState(), l = r.xViewport, c = r.yViewport,
                        u = l.offsetWidth + s.x - a, d = t.top - s.y + o, h = t.top;
                    d > c.offsetHeight / 2 && (h = t.top - (o + t.height + 2 * e)) < s.y && d <= c.offsetHeight && (h = t.top), h < s.y && (h = s.y);
                    var f = Math.min(Math.max(s.x, t.left - t.dx * (a - t.width)), u), _ = h;
                    this._appendAtCoordinates(f, _)
                } else i.style.top = "20px", 1 === t.dx ? (i.style.right = "auto", i.style.left = "-300px", setTimeout(function () {
                    i.style.left = "10px"
                }, 1)) : (i.style.left = "auto", i.style.right = "-300px", setTimeout(function () {
                    i.style.right = "10px"
                }, 1)), i.className += " gantt_qi_" + (1 === t.dx ? "left" : "right"), n.$root.appendChild(i)
            }, t.prototype._qi_button_click = function (t) {
                var e = this._gantt, n = this._quickInfoBox;
                if (t && t !== n) {
                    var i = t.className;
                    if (-1 !== i.indexOf("_icon")) {
                        var r = this._quickInfoBoxId;
                        e.$click.buttons[i.split(" ")[1].replace("icon_", "")](r)
                    } else this._qi_button_click(t.parentNode)
                }
            }, t.prototype._getContainer = function () {
                var t = this._gantt, e = this._container ? this._container : t.$task_data;
                return e && e.offsetHeight && e.offsetWidth ? {
                    parent: e,
                    xViewport: t.$task,
                    yViewport: t.$task_data
                } : (e = this._container ? this._container : t.$grid_data) && e.offsetHeight && e.offsetWidth ? {
                    parent: e,
                    xViewport: t.$grid,
                    yViewport: t.$grid_data
                } : {parent: this._container ? this._container : t.$layout, xViewport: t.$layout, yViewport: t.$layout}
            }, t
        }();
        e.QuickInfo = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(218);
        e.default = function (t) {
            t.ext || (t.ext = {}), t.ext.quickInfo = new i.QuickInfo(t), t.config.quickinfo_buttons = ["icon_delete", "icon_edit"], t.config.quick_info_detached = !0, t.config.show_quick_info = !0, t.templates.quick_info_title = function (t, e, n) {
                return n.text.substr(0, 50)
            }, t.templates.quick_info_content = function (t, e, n) {
                return n.details || n.text
            }, t.templates.quick_info_date = function (e, n, i) {
                return t.templates.task_time(e, n, i)
            }, t.templates.quick_info_class = function (t, e, n) {
                return ""
            }, t.attachEvent("onTaskClick", function (e) {
                return setTimeout(function () {
                    t.ext.quickInfo.show(e)
                }, 0), !0
            });
            for (var e = ["onEmptyClick", "onViewChange", "onLightbox", "onBeforeTaskDelete", "onBeforeDrag"], n = function () {
                return t.ext.quickInfo.hide(), !0
            }, r = 0; r < e.length; r++) t.attachEvent(e[r], n);

            function a() {
                return t.ext.quickInfo.hide(), t.ext.quickInfo._quickInfoBox = null, !0
            }

            t.attachEvent("onGanttReady", a), t.attachEvent("onDestroy", a), t.event(window, "keydown", function (e) {
                27 === e.keyCode && t.ext.quickInfo.hide()
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.config.multiselect = !0, t.config.multiselect_one_level = !1, t._multiselect = {
                _selected: {},
                _one_level: !1,
                _active: !0,
                _first_selected_when_shift: null,
                getDefaultSelected: function () {
                    var t = this.getSelected();
                    return t.length ? t[t.length - 1] : null
                },
                setFirstSelected: function (t) {
                    this._first_selected_when_shift = t
                },
                getFirstSelected: function () {
                    return this._first_selected_when_shift
                },
                isActive: function () {
                    return this.updateState(), this._active
                },
                updateState: function () {
                    this._one_level = t.config.multiselect_one_level;
                    var e = this._active;
                    this._active = t.config.multiselect, this._active != e && this.reset()
                },
                reset: function () {
                    this._selected = {}
                },
                setLastSelected: function (e) {
                    t.$data.tasksStore.silent(function () {
                        var n = t.$data.tasksStore;
                        e ? n.select(e + "") : n.unselect(null)
                    })
                },
                getLastSelected: function () {
                    var e = t.$data.tasksStore.getSelectedId();
                    return e && t.isTaskExists(e) ? e : null
                },
                select: function (e, n) {
                    return !!(e && t.callEvent("onBeforeTaskMultiSelect", [e, !0, n]) && t.callEvent("onBeforeTaskSelected", [e])) && (this._selected[e] = !0, this.setLastSelected(e), this.afterSelect(e), t.callEvent("onTaskMultiSelect", [e, !0, n]), t.callEvent("onTaskSelected", [e]), !0)
                },
                toggle: function (t, e) {
                    this._selected[t] ? this.unselect(t, e) : this.select(t, e)
                },
                unselect: function (e, n) {
                    e && t.callEvent("onBeforeTaskMultiSelect", [e, !1, n]) && (this._selected[e] = !1, this.getLastSelected() == e && this.setLastSelected(this.getDefaultSelected()), this.afterSelect(e), t.callEvent("onTaskMultiSelect", [e, !1, n]), t.callEvent("onTaskUnselected", [e]))
                },
                isSelected: function (e) {
                    return !(!t.isTaskExists(e) || !this._selected[e])
                },
                getSelected: function () {
                    var e = [];
                    for (var n in this._selected) this._selected[n] && t.isTaskExists(n) ? e.push(n) : this._selected[n] = !1;
                    return e.sort(function (e, n) {
                        return t.getGlobalTaskIndex(e) > t.getGlobalTaskIndex(n) ? 1 : -1
                    }), e
                },
                forSelected: function (t) {
                    for (var e = this.getSelected(), n = 0; n < e.length; n++) t(e[n])
                },
                isSameLevel: function (e) {
                    if (!this._one_level) return !0;
                    var n = this.getLastSelected();
                    return !n || (!t.isTaskExists(n) || !t.isTaskExists(e) || !(t.calculateTaskLevel(t.getTask(n)) != t.calculateTaskLevel(t.getTask(e))))
                },
                afterSelect: function (e) {
                    t.isTaskExists(e) && t.refreshTask(e)
                },
                doSelection: function (e) {
                    if (!this.isActive()) return !1;
                    if (t._is_icon_open_click(e)) return !1;
                    var n = t.locate(e);
                    if (!n) return !1;
                    if (!t.callEvent("onBeforeMultiSelect", [e])) return !1;
                    var i = this.getSelected(), r = this.getFirstSelected(), a = !1, o = this.getLastSelected();
                    if (e.shiftKey ? t.isTaskExists(this.getFirstSelected()) && null !== this.getFirstSelected() || this.setFirstSelected(n) : (e.ctrlKey || e.metaKey) && this.isSelected(n) || this.setFirstSelected(n), e.ctrlKey || e.metaKey) n && this.toggle(n, e); else if (e.shiftKey && i.length) if (o) {
                        if (n) {
                            for (var s = t.getGlobalTaskIndex(this.getFirstSelected()), l = t.getGlobalTaskIndex(n), c = t.getGlobalTaskIndex(o), u = o; t.getGlobalTaskIndex(u) !== s;) this.unselect(u, e), u = s > c ? t.getNext(u) : t.getPrev(u);
                            for (u = n; t.getGlobalTaskIndex(u) !== s;) this.select(u, e) && !a && (a = !0, r = u), u = s > l ? t.getNext(u) : t.getPrev(u)
                        }
                    } else o = n; else {
                        this.isSelected(n) || this.select(n, e), i = this.getSelected();
                        for (var d = 0; d < i.length; d++) i[d] !== n && this.unselect(i[d], e)
                    }
                    return this.isSelected(n) ? this.setLastSelected(n) : r ? n == o && this.setLastSelected(e.shiftKey ? r : this.getDefaultSelected()) : this.setLastSelected(null), this.getSelected().length || this.setLastSelected(null), this.getLastSelected() && this.isSelected(this.getFirstSelected()) || this.setFirstSelected(this.getLastSelected()), !0
                }
            }, function () {
                var e = t.selectTask;
                t.selectTask = function (n) {
                    if (!n) return !1;
                    var i = t._multiselect, r = n;
                    return i.isActive() ? (i.select(n, null) && i.setLastSelected(n), i.setFirstSelected(i.getLastSelected())) : r = e.call(this, n), r
                };
                var n = t.unselectTask;
                t.unselectTask = function (e) {
                    var i = t._multiselect, r = i.isActive();
                    (e = e || i.getLastSelected()) && r && (i.unselect(e, null), e == i.getLastSelected() && i.setLastSelected(null), t.refreshTask(e), i.setFirstSelected(i.getLastSelected()));
                    var a = e;
                    return r || (a = n.call(this, e)), a
                }, t.toggleTaskSelection = function (e) {
                    var n = t._multiselect;
                    e && n.isActive() && (n.toggle(e), n.setFirstSelected(n.getLastSelected()))
                }, t.getSelectedTasks = function () {
                    var e = t._multiselect;
                    return e.isActive(), e.getSelected()
                }, t.eachSelectedTask = function (t) {
                    return this._multiselect.forSelected(t)
                }, t.isSelectedTask = function (t) {
                    return this._multiselect.isSelected(t)
                }, t.getLastSelectedTask = function () {
                    return this._multiselect.getLastSelected()
                }, t.attachEvent("onGanttReady", function () {
                    var e = t.$data.tasksStore.isSelected;
                    t.$data.tasksStore.isSelected = function (n) {
                        return t._multiselect.isActive() ? t._multiselect.isSelected(n) : e.call(this, n)
                    }
                })
            }(), t.attachEvent("onTaskIdChange", function (e, n) {
                var i = t._multiselect;
                if (!i.isActive()) return !0;
                t.isSelectedTask(e) && (i.unselect(e, null), i.select(n, null))
            }), t.attachEvent("onAfterTaskDelete", function (e, n) {
                var i = t._multiselect;
                if (!i.isActive()) return !0;
                i._selected[e] && (i.unselect(e, null), i._selected[e] = !1, i.setLastSelected(i.getDefaultSelected())), i.forSelected(function (e) {
                    t.isTaskExists(e) || i.unselect(e, null)
                })
            }), t.attachEvent("onBeforeTaskMultiSelect", function (e, n, i) {
                var r = t._multiselect;
                return !(n && r.isActive() && r._one_level) || r.isSameLevel(e)
            }), t.attachEvent("onTaskClick", function (e, n) {
                return t._multiselect.doSelection(n) && t.callEvent("onMultiSelect", [n]), !0
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            function e(e) {
                if (!t.config.show_markers) return !1;
                if (!e.start_date) return !1;
                var n = t.getState();
                if (!(+e.start_date > +n.max_date || (!e.end_date || +e.end_date < +n.min_date) && +e.start_date < +n.min_date)) {
                    var i = document.createElement("div");
                    i.setAttribute("data-marker-id", e.id);
                    var r = "gantt_marker";
                    t.templates.marker_class && (r += " " + t.templates.marker_class(e)), e.css && (r += " " + e.css), e.title && (i.title = e.title), i.className = r;
                    var a = t.posFromDate(e.start_date);
                    if (i.style.left = a + "px", i.style.height = Math.max(t.getRowTop(t.getVisibleTaskCount()), 0) + "px", e.end_date) {
                        var o = t.posFromDate(e.end_date);
                        i.style.width = Math.max(o - a, 0) + "px"
                    }
                    return e.text && (i.innerHTML = "<div class='gantt_marker_content' >" + e.text + "</div>"), i
                }
            }

            function n() {
                if (t.$task_data) {
                    var e = document.createElement("div");
                    e.className = "gantt_marker_area", t.$task_data.appendChild(e), t.$marker_area = e
                }
            }

            t._markers || (t._markers = t.createDatastore({
                name: "marker", initItem: function (e) {
                    return e.id = e.id || t.uid(), e
                }
            })), t.config.show_markers = !0, t.attachEvent("onBeforeGanttRender", function () {
                t.$marker_area || n()
            }), t.attachEvent("onDataRender", function () {
                t.$marker_area || (n(), t.renderMarkers())
            }), t.attachEvent("onGanttReady", function () {
                n(), t.$services.getService("layers").createDataRender({
                    name: "marker", defaultContainer: function () {
                        return t.$marker_area
                    }
                }).addLayer(e)
            }), t.getMarker = function (t) {
                return this._markers ? this._markers.getItem(t) : null
            }, t.addMarker = function (t) {
                return this._markers.addItem(t)
            }, t.deleteMarker = function (t) {
                return !!this._markers.exists(t) && (this._markers.removeItem(t), !0)
            }, t.updateMarker = function (t) {
                this._markers.refresh(t)
            }, t._getMarkers = function () {
                return this._markers.getItems()
            }, t.renderMarkers = function () {
                this._markers.refresh()
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.$keyboardNavigation.dispatcher = {
                isActive: !1, activeNode: null, globalNode: new t.$keyboardNavigation.GanttNode, enable: function () {
                    this.isActive = !0, this.globalNode.enable(), this.setActiveNode(this.getActiveNode())
                }, disable: function () {
                    this.isActive = !1, this.globalNode.disable()
                }, isEnabled: function () {
                    return !!this.isActive
                }, getDefaultNode: function () {
                    var e;
                    return (e = t.config.keyboard_navigation_cells ? new t.$keyboardNavigation.TaskCell : new t.$keyboardNavigation.TaskRow).isValid() || (e = e.fallback()), e
                }, setDefaultNode: function () {
                    this.setActiveNode(this.getDefaultNode())
                }, getActiveNode: function () {
                    var t = this.activeNode;
                    return t && !t.isValid() && (t = t.fallback()), t
                }, fromDomElement: function (e) {
                    for (var n = [t.$keyboardNavigation.TaskRow, t.$keyboardNavigation.TaskCell, t.$keyboardNavigation.HeaderCell], i = 0; i < n.length; i++) if (n[i].prototype.fromDomElement) {
                        var r = n[i].prototype.fromDomElement(e);
                        if (r) return r
                    }
                    return null
                }, focusGlobalNode: function () {
                    this.blurNode(this.globalNode), this.focusNode(this.globalNode)
                }, setActiveNode: function (t) {
                    var e = !0;
                    this.activeNode && this.activeNode.compareTo(t) && (e = !1), this.isEnabled() && (e && this.blurNode(this.activeNode), this.activeNode = t, this.focusNode(this.activeNode, !e))
                }, focusNode: function (t, e) {
                    t && t.focus && t.focus(e)
                }, blurNode: function (t) {
                    t && t.blur && t.blur()
                }, keyDownHandler: function (e) {
                    if (!t.$keyboardNavigation.isModal() && this.isEnabled() && !e.defaultPrevented) {
                        var n = this.globalNode, i = t.$keyboardNavigation.shortcuts.getCommandFromEvent(e),
                            r = this.getActiveNode();
                        !1 !== t.$keyboardNavigation.facade.callEvent("onKeyDown", [i, e]) && (r ? r.findHandler(i) ? r.doAction(i, e) : n.findHandler(i) && n.doAction(i, e) : this.setDefaultNode())
                    }
                }, _timeout: null, awaitsFocus: function () {
                    return null !== this._timeout
                }, delay: function (e, n) {
                    clearTimeout(this._timeout), this._timeout = setTimeout(t.bind(function () {
                        this._timeout = null, e()
                    }, this), n || 1)
                }, clearDelay: function () {
                    clearTimeout(this._timeout)
                }
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            !function () {
                var e = [];

                function n() {
                    return !!e.length
                }

                function i(e) {
                    setTimeout(function () {
                        n() || t.focus()
                    }, 1)
                }

                function r(n) {
                    t.eventRemove(n, "keydown", o), t.event(n, "keydown", o), e.push(n)
                }

                function a() {
                    var n = e.pop();
                    n && t.eventRemove(n, "keydown", o), i()
                }

                function o(n) {
                    var i = n.currentTarget;
                    (function (t) {
                        return t == e[e.length - 1]
                    })(i) && t.$keyboardNavigation.trapFocus(i, n)
                }

                function s() {
                    r(t.getLightbox())
                }

                t.attachEvent("onLightbox", s), t.attachEvent("onAfterLightbox", a), t.attachEvent("onLightboxChange", function () {
                    a(), s()
                }), t.attachEvent("onAfterQuickInfo", function () {
                    i()
                }), t.attachEvent("onMessagePopup", function (t) {
                    l = document.activeElement, r(t)
                }), t.attachEvent("onAfterMessagePopup", function () {
                    a(), setTimeout(function () {
                        l && (l.focus(), l = null)
                    }, 1)
                });
                var l = null;
                t.$keyboardNavigation.isModal = n
            }()
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(1);
            t.$keyboardNavigation.TaskCell = function (e, n) {
                if (!e) {
                    var i = t.getChildren(t.config.root_id);
                    i[0] && (e = i[0])
                }
                this.taskId = e, this.columnIndex = n || 0, t.isTaskExists(this.taskId) && (this.index = t.getTaskIndex(this.taskId))
            }, t.$keyboardNavigation.TaskCell.prototype = t._compose(t.$keyboardNavigation.TaskRow, {
                _handlers: null, isValid: function () {
                    return t.$keyboardNavigation.TaskRow.prototype.isValid.call(this) && !!t.getGridColumns()[this.columnIndex]
                }, fallback: function () {
                    var e = t.$keyboardNavigation.TaskRow.prototype.fallback.call(this), n = e;
                    if (e instanceof t.$keyboardNavigation.TaskRow) {
                        for (var i = t.getGridColumns(), r = this.columnIndex; r >= 0 && !i[r];) r--;
                        i[r] && (n = new t.$keyboardNavigation.TaskCell(e.taskId, r))
                    }
                    return n
                }, fromDomElement: function (n) {
                    if (!t.config.keyboard_navigation_cells) return null;
                    var i = t.locate(n);
                    if (t.isTaskExists(i)) {
                        var r = 0, a = e.locateAttribute(n, "data-column-index");
                        return a && (r = 1 * a.getAttribute("data-column-index")), new t.$keyboardNavigation.TaskCell(i, r)
                    }
                    return null
                }, getNode: function () {
                    if (t.isTaskExists(this.taskId) && t.isTaskVisible(this.taskId)) {
                        if (t.config.show_grid) {
                            var e = t.$grid.querySelector(".gantt_row[" + t.config.task_attribute + "='" + this.taskId + "']");
                            return e ? e.querySelector("[data-column-index='" + this.columnIndex + "']") : null
                        }
                        return t.getTaskNode(this.taskId)
                    }
                }, keys: {
                    up: function () {
                        var e = null, n = t.getPrev(this.taskId);
                        e = n ? new t.$keyboardNavigation.TaskCell(n, this.columnIndex) : new t.$keyboardNavigation.HeaderCell(this.columnIndex), this.moveTo(e)
                    }, down: function () {
                        var e = t.getNext(this.taskId);
                        e && this.moveTo(new t.$keyboardNavigation.TaskCell(e, this.columnIndex))
                    }, left: function () {
                        this.columnIndex > 0 && this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId, this.columnIndex - 1))
                    }, right: function () {
                        var e = t.getGridColumns();
                        this.columnIndex < e.length - 1 && this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId, this.columnIndex + 1))
                    }, end: function () {
                        var e = t.getGridColumns();
                        this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId, e.length - 1))
                    }, home: function () {
                        this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId, 0))
                    }, pagedown: function () {
                        t.getVisibleTaskCount() && this.moveTo(new t.$keyboardNavigation.TaskCell(t.getTaskByIndex(t.getVisibleTaskCount() - 1).id, this.columnIndex))
                    }, pageup: function () {
                        t.getVisibleTaskCount() && this.moveTo(new t.$keyboardNavigation.TaskCell(t.getTaskByIndex(0).id, this.columnIndex))
                    }
                }
            }), t.$keyboardNavigation.TaskCell.prototype.bindAll(t.$keyboardNavigation.TaskRow.prototype.keys), t.$keyboardNavigation.TaskCell.prototype.bindAll(t.$keyboardNavigation.TaskCell.prototype.keys)
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.$keyboardNavigation.TaskRow = function (e) {
                if (!e) {
                    var n = t.getChildren(t.config.root_id);
                    n[0] && (e = n[0])
                }
                this.taskId = e, t.isTaskExists(this.taskId) && (this.index = t.getTaskIndex(this.taskId))
            }, t.$keyboardNavigation.TaskRow.prototype = t._compose(t.$keyboardNavigation.KeyNavNode, {
                _handlers: null, isValid: function () {
                    return t.isTaskExists(this.taskId) && t.getTaskIndex(this.taskId) > -1
                }, fallback: function () {
                    if (!t.getVisibleTaskCount()) {
                        var e = new t.$keyboardNavigation.HeaderCell;
                        return e.isValid() ? e : null
                    }
                    var n = -1;
                    if (t.getTaskByIndex(this.index - 1)) n = this.index - 1; else if (t.getTaskByIndex(this.index + 1)) n = this.index + 1; else for (var i = this.index; i >= 0;) {
                        if (t.getTaskByIndex(i)) {
                            n = i;
                            break
                        }
                        i--
                    }
                    if (n > -1) return new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(n).id)
                }, fromDomElement: function (e) {
                    if (t.config.keyboard_navigation_cells) return null;
                    var n = t.locate(e);
                    return t.isTaskExists(n) ? new t.$keyboardNavigation.TaskRow(n) : null
                }, getNode: function () {
                    if (t.isTaskExists(this.taskId) && t.isTaskVisible(this.taskId)) return t.config.show_grid ? t.$grid.querySelector(".gantt_row[" + t.config.task_attribute + "='" + this.taskId + "']") : t.getTaskNode(this.taskId)
                }, focus: function (e) {
                    if (!e) {
                        var n, i, r = t.getTaskPosition(t.getTask(this.taskId)), a = t.config.row_height,
                            o = t.getScrollState();
                        n = t.$task ? t.$task.offsetWidth : o.inner_width, i = t.$grid_data || t.$task_data ? (t.$grid_data || t.$task_data).offsetHeight : o.inner_height, r.top < o.y || r.top + a > o.y + i ? t.scrollTo(null, r.top - 5 * a) : t.config.show_chart && (r.left < o.x || r.left > o.x + n) && t.scrollTo(r.left - t.config.task_scroll_offset)
                    }
                    t.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this, [e])
                }, keys: {
                    pagedown: function () {
                        t.getVisibleTaskCount() && this.moveTo(new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(t.getVisibleTaskCount() - 1).id))
                    }, pageup: function () {
                        t.getVisibleTaskCount() && this.moveTo(new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(0).id))
                    }, up: function () {
                        var e = null, n = t.getPrev(this.taskId);
                        e = n ? new t.$keyboardNavigation.TaskRow(n) : new t.$keyboardNavigation.HeaderCell, this.moveTo(e)
                    }, down: function () {
                        var e = t.getNext(this.taskId);
                        e && this.moveTo(new t.$keyboardNavigation.TaskRow(e))
                    }, "shift+down": function () {
                        t.hasChild(this.taskId) && !t.getTask(this.taskId).$open && t.open(this.taskId)
                    }, "shift+up": function () {
                        t.hasChild(this.taskId) && t.getTask(this.taskId).$open && t.close(this.taskId)
                    }, "shift+right": function () {
                        if (!t.isReadonly(this)) {
                            var e = t.getPrevSibling(this.taskId);
                            if (t.isTaskExists(e) && !t.isChildOf(this.taskId, e)) t.getTask(e).$open = !0, !1 !== t.moveTask(this.taskId, -1, e) && t.updateTask(this.taskId)
                        }
                    }, "shift+left": function () {
                        if (!t.isReadonly(this)) {
                            var e = t.getParent(this.taskId);
                            if (t.isTaskExists(e)) !1 !== t.moveTask(this.taskId, t.getTaskIndex(e) + 1, t.getParent(e)) && t.updateTask(this.taskId)
                        }
                    }, space: function (e) {
                        t.isSelectedTask(this.taskId) ? t.unselectTask(this.taskId) : t.selectTask(this.taskId)
                    }, "ctrl+left": function (e) {
                        t.close(this.taskId)
                    }, "ctrl+right": function (e) {
                        t.open(this.taskId)
                    }, delete: function (e) {
                        t.isReadonly(this) || t.$click.buttons.delete(this.taskId)
                    }, enter: function () {
                        t.isReadonly(this) || t.showLightbox(this.taskId)
                    }, "ctrl+enter": function () {
                        t.isReadonly(this) || t.createTask({}, this.taskId)
                    }
                }
            }), t.$keyboardNavigation.TaskRow.prototype.bindAll(t.$keyboardNavigation.TaskRow.prototype.keys)
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(1);
            t.$keyboardNavigation.HeaderCell = function (t) {
                this.index = t || 0
            }, t.$keyboardNavigation.HeaderCell.prototype = t._compose(t.$keyboardNavigation.KeyNavNode, {
                _handlers: null, isValid: function () {
                    return !(!t.config.show_grid && t.getVisibleTaskCount()) && (!!t.getGridColumns()[this.index] || !t.getVisibleTaskCount())
                }, fallback: function () {
                    if (!t.config.show_grid) return t.getVisibleTaskCount() ? new t.$keyboardNavigation.TaskRow : null;
                    for (var e = t.getGridColumns(), n = this.index; n >= 0 && !e[n];) n--;
                    return e[n] ? new t.$keyboardNavigation.HeaderCell(n) : null
                }, fromDomElement: function (n) {
                    var i = e.locateClassName(n, "gantt_grid_head_cell");
                    if (i) {
                        for (var r = 0; i && i.previousSibling;) i = i.previousSibling, r += 1;
                        return new t.$keyboardNavigation.HeaderCell(r)
                    }
                    return null
                }, getNode: function () {
                    return t.$grid_scale.childNodes[this.index]
                }, keys: {
                    left: function () {
                        this.index > 0 && this.moveTo(new t.$keyboardNavigation.HeaderCell(this.index - 1))
                    }, right: function () {
                        var e = t.getGridColumns();
                        this.index < e.length - 1 && this.moveTo(new t.$keyboardNavigation.HeaderCell(this.index + 1))
                    }, down: function () {
                        var e, n = t.getChildren(t.config.root_id);
                        n[0] && (e = n[0]), e && (t.config.keyboard_navigation_cells ? this.moveTo(new t.$keyboardNavigation.TaskCell(e, this.index)) : this.moveTo(new t.$keyboardNavigation.TaskRow(e)))
                    }, end: function () {
                        var e = t.getGridColumns();
                        this.moveTo(new t.$keyboardNavigation.HeaderCell(e.length - 1))
                    }, home: function () {
                        this.moveTo(new t.$keyboardNavigation.HeaderCell(0))
                    }, "enter, space": function () {
                        document.activeElement.click()
                    }, "ctrl+enter": function () {
                        t.isReadonly(this) || t.createTask({}, this.taskId)
                    }
                }
            }), t.$keyboardNavigation.HeaderCell.prototype.bindAll(t.$keyboardNavigation.HeaderCell.prototype.keys)
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.$keyboardNavigation.KeyNavNode = function () {
            }, t.$keyboardNavigation.KeyNavNode.prototype = t._compose(t.$keyboardNavigation.EventHandler, {
                isValid: function () {
                    return !0
                }, fallback: function () {
                    return null
                }, moveTo: function (e) {
                    t.$keyboardNavigation.dispatcher.setActiveNode(e)
                }, compareTo: function (t) {
                    if (!t) return !1;
                    for (var e in this) {
                        if (!!this[e] != !!t[e]) return !1;
                        var n = !(!this[e] || !this[e].toString), i = !(!t[e] || !t[e].toString);
                        if (i != n) return !1;
                        if (i && n) {
                            if (t[e].toString() != this[e].toString()) return !1
                        } else if (t[e] != this[e]) return !1
                    }
                    return !0
                }, getNode: function () {
                }, focus: function () {
                    var e = this.getNode();
                    if (e) {
                        var n = t.$keyboardNavigation.facade;
                        !1 !== n.callEvent("onBeforeFocus", [e]) && e && (e.setAttribute("tabindex", "-1"), e.$eventAttached || (e.$eventAttached = !0, t.event(e, "focus", function (t) {
                            return t.preventDefault(), !1
                        }, !1)), e.focus && e.focus(), n.callEvent("onFocus", [this.getNode()]))
                    }
                }, blur: function () {
                    var e = this.getNode();
                    e && (t.$keyboardNavigation.facade.callEvent("onBlur", [e]), e.setAttribute("tabindex", "-1"))
                }
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.$keyboardNavigation.GanttNode = function () {
            }, t.$keyboardNavigation.GanttNode.prototype = t._compose(t.$keyboardNavigation.EventHandler, {
                focus: function () {
                    t.focus()
                }, blur: function () {
                }, disable: function () {
                    t.$container.setAttribute("tabindex", "0")
                }, enable: function () {
                    t.$container && t.$container.removeAttribute("tabindex")
                }, isEnabled: function () {
                    return t.$container.hasAttribute("tabindex")
                }, scrollHorizontal: function (e) {
                    var n = t.dateFromPos(t.getScrollState().x), i = t.getScale(), r = e < 0 ? -i.step : i.step;
                    n = t.date.add(n, r, i.unit), t.scrollTo(t.posFromDate(n))
                }, scrollVertical: function (e) {
                    var n = t.getScrollState().y, i = t.config.row_height;
                    t.scrollTo(null, n + (e < 0 ? -1 : 1) * i)
                }, keys: {
                    "alt+left": function (t) {
                        this.scrollHorizontal(-1)
                    }, "alt+right": function (t) {
                        this.scrollHorizontal(1)
                    }, "alt+up": function (t) {
                        this.scrollVertical(-1)
                    }, "alt+down": function (t) {
                        this.scrollVertical(1)
                    }, "ctrl+z": function () {
                        t.undo && t.undo()
                    }, "ctrl+r": function () {
                        t.redo && t.redo()
                    }
                }
            }), t.$keyboardNavigation.GanttNode.prototype.bindAll(t.$keyboardNavigation.GanttNode.prototype.keys)
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            !function () {
                var e = n(1);
                t.$keyboardNavigation.getFocusableNodes = e.getFocusableNodes, t.$keyboardNavigation.trapFocus = function (e, n) {
                    if (9 != n.keyCode) return !1;
                    for (var i = t.$keyboardNavigation.getFocusableNodes(e), r = document.activeElement, a = -1, o = 0; o < i.length; o++) if (i[o] == r) {
                        a = o;
                        break
                    }
                    if (n.shiftKey) {
                        if (a <= 0) {
                            var s = i[i.length - 1];
                            if (s) return s.focus(), n.preventDefault(), !0
                        }
                    } else if (a >= i.length - 1) {
                        var l = i[0];
                        if (l) return l.focus(), n.preventDefault(), !0
                    }
                    return !1
                }
            }()
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.$keyboardNavigation.EventHandler = {
                _handlers: null, findHandler: function (e) {
                    this._handlers || (this._handlers = {});
                    var n = t.$keyboardNavigation.shortcuts.getHash(e);
                    return this._handlers[n]
                }, doAction: function (e, n) {
                    var i = this.findHandler(e);
                    if (i) {
                        if (!1 === t.$keyboardNavigation.facade.callEvent("onBeforeAction", [e, n])) return;
                        i.call(this, n), n.preventDefault ? n.preventDefault() : n.returnValue = !1
                    }
                }, bind: function (e, n) {
                    this._handlers || (this._handlers = {});
                    for (var i = t.$keyboardNavigation.shortcuts, r = i.parse(e), a = 0; a < r.length; a++) this._handlers[i.getHash(r[a])] = n
                }, unbind: function (e) {
                    for (var n = t.$keyboardNavigation.shortcuts, i = n.parse(e), r = 0; r < i.length; r++) this._handlers[n.getHash(i[r])] && delete this._handlers[n.getHash(i[r])]
                }, bindAll: function (t) {
                    for (var e in t) this.bind(e, t[e])
                }, initKeys: function () {
                    this._handlers || (this._handlers = {}), this.keys && this.bindAll(this.keys)
                }
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.$keyboardNavigation.shortcuts = {
                createCommand: function () {
                    return {modifiers: {shift: !1, alt: !1, ctrl: !1, meta: !1}, keyCode: null}
                },
                parse: function (t) {
                    for (var e = [], n = this.getExpressions(this.trim(t)), i = 0; i < n.length; i++) {
                        for (var r = this.getWords(n[i]), a = this.createCommand(), o = 0; o < r.length; o++) this.commandKeys[r[o]] ? a.modifiers[r[o]] = !0 : this.specialKeys[r[o]] ? a.keyCode = this.specialKeys[r[o]] : a.keyCode = r[o].charCodeAt(0);
                        e.push(a)
                    }
                    return e
                },
                getCommandFromEvent: function (t) {
                    var e = this.createCommand();
                    e.modifiers.shift = !!t.shiftKey, e.modifiers.alt = !!t.altKey, e.modifiers.ctrl = !!t.ctrlKey, e.modifiers.meta = !!t.metaKey, e.keyCode = t.which || t.keyCode, e.keyCode >= 96 && e.keyCode <= 105 && (e.keyCode -= 48);
                    var n = String.fromCharCode(e.keyCode);
                    return n && (e.keyCode = n.toLowerCase().charCodeAt(0)), e
                },
                getHashFromEvent: function (t) {
                    return this.getHash(this.getCommandFromEvent(t))
                },
                getHash: function (t) {
                    var e = [];
                    for (var n in t.modifiers) t.modifiers[n] && e.push(n);
                    return e.push(t.keyCode), e.join(this.junctionChar)
                },
                getExpressions: function (t) {
                    return t.split(this.junctionChar)
                },
                getWords: function (t) {
                    return t.split(this.combinationChar)
                },
                trim: function (t) {
                    return t.replace(/\s/g, "")
                },
                junctionChar: ",",
                combinationChar: "+",
                commandKeys: {shift: 16, alt: 18, ctrl: 17, meta: !0},
                specialKeys: {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    esc: 27,
                    space: 32,
                    up: 38,
                    down: 40,
                    left: 37,
                    right: 39,
                    home: 36,
                    end: 35,
                    pageup: 33,
                    pagedown: 34,
                    delete: 46,
                    insert: 45,
                    plus: 107,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                }
            }
        }
    }, function (t, e, n) {
        t.exports = function (t) {
            var e = n(4);
            !function (t) {
                t.config.keyboard_navigation = !0, t.config.keyboard_navigation_cells = !1, t.$keyboardNavigation = {}, t._compose = function () {
                    for (var t = Array.prototype.slice.call(arguments, 0), e = {}, n = 0; n < t.length; n++) {
                        var i = t[n];
                        for (var r in "function" == typeof i && (i = new i), i) e[r] = i[r]
                    }
                    return e
                }, n(231)(t), n(230)(t), n(229)(t), n(228)(t), n(227)(t), n(226)(t), n(225)(t), n(224)(t), n(223)(t), n(222)(t);
                var i = n(1);
                !function () {
                    var n = t.$keyboardNavigation.dispatcher;
                    n.isTaskFocused = function (e) {
                        var i = n.activeNode;
                        return (i instanceof t.$keyboardNavigation.TaskRow || i instanceof t.$keyboardNavigation.TaskCell) && i.taskId == e
                    };
                    var r = function (e) {
                        if (t.config.keyboard_navigation) return n.keyDownHandler(e)
                    }, a = function (e) {
                        if (n.$preventDefault) return e.preventDefault(), t.$container.blur(), !1;
                        n.awaitsFocus() || n.focusGlobalNode()
                    }, o = function () {
                        if (n.isEnabled()) {
                            var t = n.getActiveNode();
                            if (t) {
                                var e, i, r = t.getNode();
                                r && r.parentNode && (e = r.parentNode.scrollTop, i = r.parentNode.scrollLeft), t.focus(!0), r && r.parentNode && (r.parentNode.scrollTop = e, r.parentNode.scrollLeft = i)
                            }
                        }
                    };

                    function s(e) {
                        if (!t.config.keyboard_navigation) return !0;
                        var r, a = n.fromDomElement(e);
                        a && (n.activeNode instanceof t.$keyboardNavigation.TaskCell && i.isChildOf(e.target, t.$task) && (a = new t.$keyboardNavigation.TaskCell(a.taskId, n.activeNode.columnIndex)), r = a), r ? n.isEnabled() ? n.delay(function () {
                            n.setActiveNode(r)
                        }) : n.activeNode = r : (n.$preventDefault = !0, setTimeout(function () {
                            n.$preventDefault = !1
                        }, 300))
                    }

                    t.attachEvent("onDataRender", function () {
                        t.config.keyboard_navigation && o()
                    }), t.attachEvent("onGanttRender", function () {
                        t.eventRemove(document, "keydown", r), t.eventRemove(t.$container, "focus", a), t.eventRemove(t.$container, "mousedown", s), t.config.keyboard_navigation ? (t.event(document, "keydown", r), t.event(t.$container, "focus", a), t.event(t.$container, "mousedown", s), t.$container.setAttribute("tabindex", "0")) : t.$container.removeAttribute("tabindex")
                    });
                    var l = t.attachEvent("onGanttReady", function () {
                        if (t.detachEvent(l), t.$data.tasksStore.attachEvent("onStoreUpdated", function (e) {
                            if (t.config.keyboard_navigation && n.isEnabled()) {
                                var i = n.getActiveNode();
                                i && i.taskId == e && o()
                            }
                        }), t._smart_render) {
                            var e = t._smart_render._redrawTasks;
                            t._smart_render._redrawTasks = function (i, r) {
                                if (t.config.keyboard_navigation && n.isEnabled()) {
                                    var a = n.getActiveNode();
                                    if (a && void 0 !== a.taskId) {
                                        for (var o = !1, s = 0; s < r.length; s++) if (r[s].id == a.taskId && r[s].start_date) {
                                            o = !0;
                                            break
                                        }
                                        o || r.push(t.getTask(a.taskId))
                                    }
                                }
                                return e.apply(this, arguments)
                            }
                        }
                    });
                    t.attachEvent("onAfterTaskAdd", function (e, i) {
                        if (!t.config.keyboard_navigation) return !0;
                        if (n.isEnabled()) {
                            var r = 0, a = n.activeNode;
                            a instanceof t.$keyboardNavigation.TaskCell && (r = a.columnIndex);
                            var o = t.config.keyboard_navigation_cells ? t.$keyboardNavigation.TaskCell : t.$keyboardNavigation.TaskRow;
                            n.setActiveNode(new o(e, r))
                        }
                    }), t.attachEvent("onTaskIdChange", function (e, i) {
                        if (!t.config.keyboard_navigation) return !0;
                        var r = n.activeNode;
                        return n.isTaskFocused(e) && (r.taskId = i), !0
                    });
                    var c = setInterval(function () {
                        if (t.config.keyboard_navigation) {
                            var e, i = function () {
                                var t = document.activeElement;
                                return t === document.body && document.getSelection && (t = document.getSelection().focusNode || document.body), t
                            }(), r = t.$container;
                            if (!i || t._locate_css(i, "gantt_cal_quick_info")) e = !1; else {
                                for (; i != r && i;) i = i.parentNode;
                                e = i == r
                            }
                            e && !n.isEnabled() ? n.enable() : !e && n.isEnabled() && n.disable()
                        }
                    }, 500);

                    function u(e) {
                        var n = {
                            gantt: t.$keyboardNavigation.GanttNode,
                            headerCell: t.$keyboardNavigation.HeaderCell,
                            taskRow: t.$keyboardNavigation.TaskRow,
                            taskCell: t.$keyboardNavigation.TaskCell
                        };
                        return n[e] || n.gantt
                    }

                    function d(e) {
                        for (var n = t.getGridColumns(), i = 0; i < n.length; i++) if (n[i].name == e) return i;
                        return 0
                    }

                    t.attachEvent("onDestroy", function () {
                        clearInterval(c)
                    });
                    var h = {};
                    e(h), t.mixin(h, {
                        addShortcut: function (t, e, n) {
                            var i = u(n);
                            i && i.prototype.bind(t, e)
                        }, getShortcutHandler: function (e, n) {
                            var i = t.$keyboardNavigation.shortcuts.parse(e);
                            if (i.length) return h.getCommandHandler(i[0], n)
                        }, getCommandHandler: function (t, e) {
                            var n = u(e);
                            if (n && t) return n.prototype.findHandler(t)
                        }, removeShortcut: function (t, e) {
                            var n = u(e);
                            n && n.prototype.unbind(t)
                        }, focus: function (t) {
                            var e, i = t ? t.type : null, r = u(i);
                            switch (i) {
                                case"taskCell":
                                    e = new r(t.id, d(t.column));
                                    break;
                                case"taskRow":
                                    e = new r(t.id);
                                    break;
                                case"headerCell":
                                    e = new r(d(t.column))
                            }
                            n.delay(function () {
                                e ? n.setActiveNode(e) : (n.enable(), n.getActiveNode() ? n.awaitsFocus() || n.enable() : n.setDefaultNode())
                            })
                        }, getActiveNode: function () {
                            if (n.isEnabled()) {
                                var e = n.getActiveNode(), i = function (e) {
                                    return e instanceof t.$keyboardNavigation.GanttNode ? "gantt" : e instanceof t.$keyboardNavigation.HeaderCell ? "headerCell" : e instanceof t.$keyboardNavigation.TaskRow ? "taskRow" : e instanceof t.$keyboardNavigation.TaskCell ? "taskCell" : null
                                }(e), r = t.getGridColumns();
                                switch (i) {
                                    case"taskCell":
                                        return {type: "taskCell", id: e.taskId, column: r[e.columnIndex].name};
                                    case"taskRow":
                                        return {type: "taskRow", id: e.taskId};
                                    case"headerCell":
                                        return {type: "headerCell", column: r[e.index].name}
                                }
                            }
                            return null
                        }
                    }), t.$keyboardNavigation.facade = h, t.ext.keyboardNavigation = h, t.focus = function () {
                        h.focus()
                    }, t.addShortcut = h.addShortcut, t.getShortcutHandler = h.getShortcutHandler, t.removeShortcut = h.removeShortcut
                }()
            }(t)
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
            function e() {
                var t = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                return !(!t || t !== document.body)
            }

            t.$services.getService("state").registerProvider("fullscreen", function () {
                return {fullscreen: e()}
            });
            var n = {
                    overflow: null,
                    padding: null,
                    paddingTop: null,
                    paddingRight: null,
                    paddingBottom: null,
                    paddingLeft: null
                }, i = {width: null, height: null, top: null, left: null, position: null, zIndex: null, modified: !1},
                r = null;

            function a(t, e) {
                e.width = t.width, e.height = t.height, e.top = t.top, e.left = t.left, e.position = t.position, e.zIndex = t.zIndex
            }

            var o = !1;

            function s() {
                var s;
                t.$container && (e() ? o && (s = "onExpand", function () {
                    var e = t.ext.fullscreen.getFullscreenElement(), o = document.body;
                    a(e.style, i), n = {
                        overflow: o.style.overflow,
                        padding: o.style.padding ? o.style.padding : null,
                        paddingTop: o.style.paddingTop ? o.style.paddingTop : null,
                        paddingRight: o.style.paddingRight ? o.style.paddingRight : null,
                        paddingBottom: o.style.paddingBottom ? o.style.paddingBottom : null,
                        paddingLeft: o.style.paddingLeft ? o.style.paddingLeft : null
                    }, o.style.padding && (o.style.padding = "0"), o.style.paddingTop && (o.style.paddingTop = "0"), o.style.paddingRight && (o.style.paddingRight = "0"), o.style.paddingBottom && (o.style.paddingBottom = "0"), o.style.paddingLeft && (o.style.paddingLeft = "0"), o.style.overflow = "hidden", e.style.width = "100vw", e.style.height = "100vh", e.style.top = "0px", e.style.left = "0px", e.style.position = "absolute", e.style.zIndex = 1, i.modified = !0, r = function (t) {
                        for (var e = t.parentNode, n = []; e && e.style;) n.push({
                            element: e,
                            originalPositioning: e.style.position
                        }), e.style.position = "static", e = e.parentNode;
                        return n
                    }(e)
                }()) : o && (o = !1, s = "onCollapse", function () {
                    var e = t.ext.fullscreen.getFullscreenElement(), o = document.body;
                    i.modified && (n.padding && (o.style.padding = n.padding), n.paddingTop && (o.style.paddingTop = n.paddingTop), n.paddingRight && (o.style.paddingRight = n.paddingRight), n.paddingBottom && (o.style.paddingBottom = n.paddingBottom), n.paddingLeft && (o.style.paddingLeft = n.paddingLeft), o.style.overflow = n.overflow, n = {
                        overflow: null,
                        padding: null,
                        paddingTop: null,
                        paddingRight: null,
                        paddingBottom: null,
                        paddingLeft: null
                    }, a(i, e.style), i.modified = !1), function (t) {
                        t.forEach(function (t) {
                            t.element.style.position = t.originalPositioning
                        })
                    }(r), r = null
                }()), setTimeout(function () {
                    t.render()
                }), setTimeout(function () {
                    t.callEvent(s, [t.ext.fullscreen.getFullscreenElement()])
                }))
            }

            function l() {
                return !(t.$container && t.ext.fullscreen.getFullscreenElement() && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || ((console.warning || console.log)("The `fullscreen` feature not being allowed, or full-screen mode not being supported"), 0)))
            }

            t.ext.fullscreen = {
                expand: function () {
                    if (!l() && !e() && t.callEvent("onBeforeExpand", [this.getFullscreenElement()])) {
                        o = !0;
                        var n = document.body, i = n.webkitRequestFullscreen ? [Element.ALLOW_KEYBOARD_INPUT] : [],
                            r = n.msRequestFullscreen || n.mozRequestFullScreen || n.webkitRequestFullscreen || n.requestFullscreen;
                        r && r.apply(n, i)
                    }
                }, collapse: function () {
                    if (!l() && e() && t.callEvent("onBeforeCollapse", [this.getFullscreenElement()])) {
                        var n = document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.exitFullscreen;
                        n && n.apply(document)
                    }
                }, toggle: function () {
                    l() || (e() ? this.collapse() : this.expand())
                }, getFullscreenElement: function () {
                    return t.$root
                }
            }, t.expand = function () {
                t.ext.fullscreen.expand()
            }, t.collapse = function () {
                t.ext.fullscreen.collapse()
            }, t.attachEvent("onGanttReady", function () {
                t.event(document, "webkitfullscreenchange", s), t.event(document, "mozfullscreenchange", s), t.event(document, "MSFullscreenChange", s), t.event(document, "fullscreenChange", s), t.event(document, "fullscreenchange", s)
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t() {
                var t = this;
                this._mouseDown = !1, this._calculateDirectionVector = function () {
                    if (t._trace.length >= 10) {
                        for (var e = t._trace.slice(t._trace.length - 10), n = [], i = 1; i < e.length; i++) n.push({
                            x: e[i].x - e[i - 1].x,
                            y: e[i].y - e[i - 1].y
                        });
                        var r = {x: 0, y: 0};
                        return n.forEach(function (t) {
                            r.x += t.x, r.y += t.y
                        }), {
                            magnitude: Math.sqrt(r.x * r.x + r.y * r.y),
                            angleDegrees: 180 * Math.atan2(Math.abs(r.y), Math.abs(r.x)) / Math.PI
                        }
                    }
                    return null
                }, this._applyDndReadyStyles = function () {
                    t._timeline.$task.classList.add("gantt_timeline_move_available")
                }, this._clearDndReadyStyles = function () {
                    t._timeline.$task.classList.remove("gantt_timeline_move_available")
                }, this._getScrollPosition = function (t) {
                    return {
                        x: gantt.$ui.getView(t.$config.scrollX).getScrollState().position,
                        y: gantt.$ui.getView(t.$config.scrollY).getScrollState().position
                    }
                }, this._countNewScrollPosition = function (e) {
                    var n = t._calculateDirectionVector(), i = t._startPoint.x - e.x, r = t._startPoint.y - e.y;
                    return n && (n.angleDegrees < 15 ? r = 0 : n.angleDegrees > 75 && (i = 0)), {
                        x: t._scrollState.x + i,
                        y: t._scrollState.y + r
                    }
                }, this._setScrollPosition = function (t, e) {
                    requestAnimationFrame(function () {
                        gantt.$ui.getView(t.$config.scrollX).scroll(e.x), gantt.$ui.getView(t.$config.scrollY).scroll(e.y)
                    })
                }, this._stopDrag = function (e) {
                    if (t._trace = [], gantt.$root.classList.remove("gantt_noselect"), void 0 !== t._originalReadonly && (gantt.config.readonly = t._originalReadonly), void 0 !== t._originAutoscroll && (gantt.config.autoscroll = t._originAutoscroll), gantt.config.drag_timeline) {
                        var n = gantt.config.drag_timeline.useKey;
                        if (n && !0 !== e[n]) return
                    }
                    t._mouseDown = !1
                }, this._startDrag = function (e) {
                    t._originAutoscroll = gantt.config.autoscroll, gantt.config.autoscroll = !1, gantt.$root.classList.add("gantt_noselect"), t._originalReadonly = gantt.config.readonly, gantt.config.readonly = !0, t._trace = [], t._mouseDown = !0;
                    var n = t._getScrollPosition(t._timeline), i = n.x, r = n.y;
                    t._scrollState = {x: i, y: r}, t._startPoint = {
                        x: e.clientX,
                        y: e.clientY
                    }, t._trace.push(t._startPoint)
                }, this._domEvents = gantt._createDomEventScope(), this._trace = []
            }

            return t.create = function () {
                return new t
            }, t.prototype.destructor = function () {
                this._domEvents.detachAll()
            }, t.prototype.attach = function (t) {
                var e = this;
                this._timeline = t, this._domEvents.attach(t.$task, "mousedown", function (t) {
                    if (gantt.config.drag_timeline) {
                        var n = gantt.config.drag_timeline, i = n.useKey, r = n.ignore;
                        if (!1 !== n.enabled) {
                            var a = ".gantt_task_line, .gantt_task_link";
                            void 0 !== r && (a = r instanceof Array ? r.join(", ") : r), a && gantt.utils.dom.closest(t.target, a) || i && !0 !== t[i] || e._startDrag(t)
                        }
                    }
                }), this._domEvents.attach(document, "keydown", function (t) {
                    if (gantt.config.drag_timeline) {
                        var n = gantt.config.drag_timeline.useKey;
                        n && !0 === t[n] && e._applyDndReadyStyles()
                    }
                }), this._domEvents.attach(document, "keyup", function (t) {
                    if (gantt.config.drag_timeline) {
                        var n = gantt.config.drag_timeline.useKey;
                        n && !1 === t[n] && (e._clearDndReadyStyles(), e._stopDrag(t))
                    }
                }), this._domEvents.attach(document, "mouseup", function (t) {
                    e._stopDrag(t)
                }), this._domEvents.attach(gantt.$root, "mouseup", function (t) {
                    e._stopDrag(t)
                }), this._domEvents.attach(document, "mouseleave", function (t) {
                    e._stopDrag(t)
                }), this._domEvents.attach(gantt.$root, "mouseleave", function (t) {
                    e._stopDrag(t)
                }), this._domEvents.attach(gantt.$root, "mousemove", function (n) {
                    if (gantt.config.drag_timeline) {
                        var i = gantt.config.drag_timeline.useKey;
                        if ((!i || !0 === n[i]) && !0 === e._mouseDown) {
                            e._trace.push({x: n.clientX, y: n.clientY});
                            var r = e._countNewScrollPosition({x: n.clientX, y: n.clientY});
                            e._setScrollPosition(t, r), e._scrollState = r, e._startPoint = {x: n.clientX, y: n.clientY}
                        }
                    }
                })
            }, t
        }();
        e.EventsManager = i
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(234);
        e.default = function (t) {
            t.ext || (t.ext = {}), t.ext.dragTimeline = {
                create: function () {
                    return i.EventsManager.create()
                }
            }, t.config.drag_timeline = {enabled: !0}
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(4), r = n(3);

        function a(t, e) {
            var n = t - e;
            return n >= 0 ? n : -n
        }

        var o = function () {
            function t(t) {
                var e = this;
                this._el = document.createElement("div"), this._viewPort = t.viewPort, this._el.classList.add(t.className), "function" == typeof t.callback && (this._callback = t.callback), "function" == typeof t.render && (this.render = function () {
                    e._el = t.render(e._startPoint, e._endPoint), "" !== t.className && e._el.classList.add(t.className), e.draw()
                }), r.isEventable(this._viewPort) || i(this._viewPort), this._singleRow = t.singleRow, this._useRequestAnimationFrame = t.useRequestAnimationFrame
            }

            return t.prototype.setStyles = function () {
                if (this._singleRow) {
                    var t = gantt.config.row_height;
                    this._el.style.height = t + "px", this._el.style.top = (Math.ceil(this._positionPoint.relative.top / t) - 1) * t + "px"
                } else this._el.style.height = a(this._endPoint.relative.top, this._startPoint.relative.top) + "px", this._el.style.top = this._positionPoint.relative.top + "px";
                this._el.style.width = a(this._endPoint.relative.left, this._startPoint.relative.left) + "px", this._el.style.left = this._positionPoint.relative.left + "px"
            }, t.prototype.render = function () {
                this.setStyles(), this.draw()
            }, t.prototype.draw = function () {
                var t = this;
                if (this._useRequestAnimationFrame) return requestAnimationFrame(function () {
                    t._viewPort.appendChild(t.getElement())
                });
                this._viewPort.appendChild(this.getElement())
            }, t.prototype.clear = function () {
                var t = this;
                if (this._useRequestAnimationFrame) return requestAnimationFrame(function () {
                    t._el.parentNode && t._viewPort.removeChild(t._el)
                });
                this._el.parentNode && this._viewPort.removeChild(this._el)
            }, t.prototype.getElement = function () {
                return this._el
            }, t.prototype.getViewPort = function () {
                return this._viewPort
            }, t.prototype.setStart = function (t) {
                this._startPoint = t, this._startDate = gantt.dateFromPos(this._startPoint.relative.left), this._viewPort.callEvent("onBeforeDrag", [this._startPoint])
            }, t.prototype.setEnd = function (t) {
                if (this._endPoint = t, this._singleRow) {
                    var e = gantt.config.row_height;
                    this._endPoint.relative.top = Math.ceil(this._startPoint.relative.top / e) * e
                }
                this._endDate = gantt.dateFromPos(this._endPoint.relative.left), this._startPoint.relative.left > this._endPoint.relative.left && (this._positionPoint = {
                    relative: {
                        left: this._endPoint.relative.left,
                        top: this._positionPoint.relative.top
                    }, absolute: {left: this._endPoint.absolute.left, top: this._positionPoint.absolute.top}
                }), this._startPoint.relative.top > this._endPoint.relative.top && (this._positionPoint = {
                    relative: {
                        left: this._positionPoint.relative.left,
                        top: this._endPoint.relative.top
                    }, absolute: {left: this._positionPoint.absolute.left, top: this._endPoint.absolute.top}
                }), this._viewPort.callEvent("onDrag", [this._startPoint, this._endPoint])
            }, t.prototype.setPosition = function (t) {
                this._positionPoint = t
            }, t.prototype.dragEnd = function (t) {
                var e;
                t.relative.left < 0 && (t.relative.left = 0), this._viewPort.callEvent("onBeforeDragEnd", [this._startPoint, t]), this.setEnd(t), this._startDate.valueOf() > this._endDate.valueOf() && (e = [this._endDate, this._startDate], this._startDate = e[0], this._endDate = e[1]), this.clear();
                var n = gantt.getTaskByTime(this._startDate, this._endDate),
                    i = this._getTasksByTop(this._startPoint.relative.top, this._endPoint.relative.top);
                this._viewPort.callEvent("onDragEnd", [this._startPoint, this._endPoint]), this._callback && this._callback(this._startPoint, this._endPoint, this._startDate, this._endDate, n, i)
            }, t.prototype.getInBounds = function () {
                return this._singleRow
            }, t.prototype._getTasksByTop = function (t, e) {
                var n = t, i = e;
                t > e && (n = e, i = t);
                for (var r = gantt.config.row_height, a = Math.ceil(n / r) - 1, o = Math.ceil(i / r) - 1, s = [], l = a; l <= o; l++) {
                    gantt.getTaskByIndex(l) && s.push(gantt.getTaskByIndex(l))
                }
                return s
            }, t
        }();
        e.SelectedRegion = o
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t() {
                this._mouseDown = !1, this._domEvents = gantt._createDomEventScope()
            }

            return t.prototype.attach = function (t, e) {
                var n = this, i = t.getViewPort();
                this._originPosition = window.getComputedStyle(i).display, this._restoreOriginPosition = function () {
                    i.style.position = n._originPosition
                }, "static" === this._originPosition && (i.style.position = "relative");
                var r = gantt.$services.getService("state");
                r.registerProvider("clickDrag", function () {
                    return {autoscroll: !1}
                });
                var a = null;
                this._domEvents.attach(i, "mousedown", function (i) {
                    a = null, gantt.utils.dom.closest(i.target, ".gantt_task_line, .gantt_task_link") || (r.registerProvider("clickDrag", function () {
                        return {autoscroll: n._mouseDown}
                    }), e && !0 !== i[e] || (a = n._getCoordinates(i, t)))
                }), this._domEvents.attach(document.body, "mouseup", function (i) {
                    if (a = null, (!e || !0 === i[e]) && !0 === n._mouseDown) {
                        n._mouseDown = !1;
                        var r = n._getCoordinates(i, t);
                        t.dragEnd(r)
                    }
                }), this._domEvents.attach(i, "mousemove", function (i) {
                    if (!e || !0 === i[e]) {
                        var r = null;
                        if (!n._mouseDown && a) return r = n._getCoordinates(i, t), void (Math.abs(a.relative.left - r.relative.left) > 5 && a && (n._mouseDown = !0, t.setStart(a), t.setPosition(a), t.setEnd(a), a = null));
                        !0 === n._mouseDown && (r = n._getCoordinates(i, t), t.setEnd(r), t.render())
                    }
                })
            }, t.prototype.detach = function () {
                this._domEvents.detachAll(), this._restoreOriginPosition && this._restoreOriginPosition(), gantt.$services.getService("state").unregisterProvider("clickDrag")
            }, t.prototype.destructor = function () {
                this.detach()
            }, t.prototype._getCoordinates = function (t, e) {
                var n = e.getViewPort(), i = n.getBoundingClientRect(), r = t.clientX, a = t.clientY;
                return {
                    absolute: {left: r, top: a},
                    relative: {left: r - i.left + n.scrollLeft, top: a - i.top + n.scrollTop}
                }
            }, t
        }();
        e.EventsManager = i
    }, function (t, e, n) {
        "use strict";
        var i = this && this.__assign || function () {
            return (i = Object.assign || function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++) for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = n(237), a = n(236);
        e.default = function (t) {
            t.ext || (t.ext = {});
            var e = {className: "gantt_click_drag_rect", useRequestAnimationFrame: !0, callback: void 0, singleRow: !1},
                n = new r.EventsManager;
            t.ext.clickDrag = n, t.attachEvent("onGanttReady", function () {
                var n = i({viewPort: t.$task_data}, e);
                if (t.config.click_drag) {
                    var r = t.config.click_drag;
                    n.render = r.render || e.render, n.className = r.className || e.className, n.callback = r.callback || e.callback, n.viewPort = r.viewPort || t.$task_data, n.useRequestAnimationFrame = void 0 === r.useRequestAnimationFrame ? e.useRequestAnimationFrame : r.useRequestAnimationFrame, n.singleRow = void 0 === r.singleRow ? e.singleRow : r.singleRow;
                    var o = new a.SelectedRegion(n);
                    t.ext.clickDrag.attach(o, r.useKey)
                }
            }), t.attachEvent("onDestroy", function () {
                n.destructor()
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(238), r = n(235), a = n(233), o = n(232), s = n(221), l = n(220), c = n(219), u = n(217), d = n(214);
        e.default = {
            click_drag: i.default,
            drag_timeline: r.default,
            fullscreen: a.default,
            keyboard_navigation: o,
            quick_info: c.default,
            tooltip: u.default,
            undo: d.default,
            marker: s,
            multiselect: l
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(239), r = n(211), a = n(14).gantt = r(i.default);
        e.gantt = a, e.default = a
    }])
});
//# sourceMappingURL=dhtmlxgantt.js.map