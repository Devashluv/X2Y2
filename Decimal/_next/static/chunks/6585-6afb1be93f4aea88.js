(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6585], {
        33587: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_SIZE = 8, t.DEFAULT_SCALE = 4
        },
        67809: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = n(63237);

            function o(e, t) {
                var n, r, o, s, a;
                const l = i.parseOptions(e || {});
                let u = i.createImageData(l.size),
                    c = Math.sqrt(u.length);
                t.width = t.height = l.size * l.scale;
                let p = t.getContext("2d");
                null === (n = p) || void 0 === n || (n.fillStyle = l.bgcolor), null === (r = p) || void 0 === r || r.fillRect(0, 0, t.width, t.height), null === (o = p) || void 0 === o || (o.fillStyle = l.color);
                for (let i = 0; i < u.length; i++)
                    if (u[i]) {
                        let e = Math.floor(i / c),
                            t = i % c;
                        null === (s = p) || void 0 === s || (s.fillStyle = 1 === u[i] ? l.color : l.spotcolor), null === (a = p) || void 0 === a || a.fillRect(t * l.scale, e * l.scale, l.scale, l.scale)
                    }
                return t
            }

            function s(e) {
                let t = document.createElement("canvas");
                return o(e, t), t
            }
            t.render = o, t.create = s, r(n(63237)), r(n(33587)), t.default = {
                create: s,
                render: o
            }
        },
        36719: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randArr = new Array(4), t.seedRandomness = function(e) {
                let n;
                for (n = 0; n < t.randArr.length; n++) t.randArr[n] = 0;
                for (n = 0; n < e.length; n++) t.randArr[n % 4] = (t.randArr[n % 4] << 5) - t.randArr[n % 4] + e.charCodeAt(n)
            }, t.random = function() {
                let e = t.randArr[0] ^ t.randArr[0] << 11;
                return t.randArr[0] = t.randArr[1], t.randArr[1] = t.randArr[2], t.randArr[2] = t.randArr[3], t.randArr[3] = t.randArr[3] ^ t.randArr[3] >> 19 ^ e ^ e >> 8, (t.randArr[3] >>> 0) / (1 << 31 >>> 0)
            }
        },
        63237: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(36719),
                i = n(33587);

            function o() {
                return "hsl(" + Math.floor(360 * r.random()) + "," + (60 * r.random() + 40 + "%") + "," + (25 * (r.random() + r.random() + r.random() + r.random()) + "%") + ")"
            }
            t.createColor = o, t.createImageData = function(e) {
                let t = e,
                    n = e,
                    i = Math.ceil(t / 2),
                    o = t - i,
                    s = [];
                for (let a = 0; a < n; a++) {
                    let e = [];
                    for (let n = 0; n < i; n++) e[n] = Math.floor(2.3 * r.random());
                    let t = e.slice(0, o);
                    t.reverse(), e = e.concat(t);
                    for (let n = 0; n < e.length; n++) s.push(e[n])
                }
                return s
            }, t.parseOptions = function(e) {
                const t = e.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);
                return r.seedRandomness(t), {
                    seed: t,
                    size: e.size || i.DEFAULT_SIZE,
                    scale: e.scale || i.DEFAULT_SCALE,
                    color: e.color || o(),
                    bgcolor: e.bgcolor || o(),
                    spotcolor: e.spotcolor || o()
                }
            }
        },
        94184: function(e, t) {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var o = typeof n;
                            if ("string" === o || "number" === o) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var s = i.apply(null, n);
                                    s && e.push(s)
                                }
                            } else if ("object" === o)
                                if (n.toString === Object.prototype.toString)
                                    for (var a in n) r.call(n, a) && n[a] && e.push(a);
                                else e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                    return i
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        16703: function() {},
        86995: function(e, t, n) {
            var r, i, o;
            i = [t, n(8532)], r = function(e, t) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = r(t);

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.default = n.default
            }, void 0 === (o = "function" === typeof r ? r.apply(t, i) : r) || (e.exports = o)
        },
        8532: function(e, t, n) {
            var r, i, o;
            i = [t, n(67294), n(43072)], r = function(e, t, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.setHasSupportToCaptureOption = d;
                var r = o(t),
                    i = o(n);

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };

                function a(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }

                function l(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var u = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

                function c(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }

                function p(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                var f = !1;

                function d(e) {
                    f = e
                }
                try {
                    addEventListener("test", null, Object.defineProperty({}, "capture", {
                        get: function() {
                            d(!0)
                        }
                    }))
                } catch (y) {}

                function h() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        capture: !0
                    };
                    return f ? e : e.capture
                }

                function m(e) {
                    if ("touches" in e) {
                        var t = e.touches[0];
                        return {
                            x: t.pageX,
                            y: t.pageY
                        }
                    }
                    return {
                        x: e.screenX,
                        y: e.screenY
                    }
                }
                var v = function(e) {
                    function t() {
                        var e;
                        l(this, t);
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        var o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)));
                        return o._handleSwipeStart = o._handleSwipeStart.bind(o), o._handleSwipeMove = o._handleSwipeMove.bind(o), o._handleSwipeEnd = o._handleSwipeEnd.bind(o), o._onMouseDown = o._onMouseDown.bind(o), o._onMouseMove = o._onMouseMove.bind(o), o._onMouseUp = o._onMouseUp.bind(o), o._setSwiperRef = o._setSwiperRef.bind(o), o
                    }
                    return p(t, e), u(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, h({
                                capture: !0,
                                passive: !1
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, h({
                                capture: !0,
                                passive: !1
                            }))
                        }
                    }, {
                        key: "_onMouseDown",
                        value: function(e) {
                            this.props.allowMouseEvents && (this.mouseDown = !0, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(e))
                        }
                    }, {
                        key: "_onMouseMove",
                        value: function(e) {
                            this.mouseDown && this._handleSwipeMove(e)
                        }
                    }, {
                        key: "_onMouseUp",
                        value: function(e) {
                            this.mouseDown = !1, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(e)
                        }
                    }, {
                        key: "_handleSwipeStart",
                        value: function(e) {
                            var t = m(e),
                                n = t.x,
                                r = t.y;
                            this.moveStart = {
                                x: n,
                                y: r
                            }, this.props.onSwipeStart(e)
                        }
                    }, {
                        key: "_handleSwipeMove",
                        value: function(e) {
                            if (this.moveStart) {
                                var t = m(e),
                                    n = t.x,
                                    r = t.y,
                                    i = n - this.moveStart.x,
                                    o = r - this.moveStart.y;
                                this.moving = !0, this.props.onSwipeMove({
                                    x: i,
                                    y: o
                                }, e) && e.cancelable && e.preventDefault(), this.movePosition = {
                                    deltaX: i,
                                    deltaY: o
                                }
                            }
                        }
                    }, {
                        key: "_handleSwipeEnd",
                        value: function(e) {
                            this.props.onSwipeEnd(e);
                            var t = this.props.tolerance;
                            this.moving && this.movePosition && (this.movePosition.deltaX < -t ? this.props.onSwipeLeft(1, e) : this.movePosition.deltaX > t && this.props.onSwipeRight(1, e), this.movePosition.deltaY < -t ? this.props.onSwipeUp(1, e) : this.movePosition.deltaY > t && this.props.onSwipeDown(1, e)), this.moveStart = null, this.moving = !1, this.movePosition = null
                        }
                    }, {
                        key: "_setSwiperRef",
                        value: function(e) {
                            this.swiper = e, this.props.innerRef(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.tagName, e.className),
                                n = e.style,
                                i = e.children,
                                o = (e.allowMouseEvents, e.onSwipeUp, e.onSwipeDown, e.onSwipeLeft, e.onSwipeRight, e.onSwipeStart, e.onSwipeMove, e.onSwipeEnd, e.innerRef, e.tolerance, a(e, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]));
                            return r.default.createElement(this.props.tagName, s({
                                ref: this._setSwiperRef,
                                onMouseDown: this._onMouseDown,
                                onTouchStart: this._handleSwipeStart,
                                onTouchEnd: this._handleSwipeEnd,
                                className: t,
                                style: n
                            }, o), i)
                        }
                    }]), t
                }(t.Component);
                v.displayName = "ReactSwipe", v.propTypes = {
                    tagName: i.default.string,
                    className: i.default.string,
                    style: i.default.object,
                    children: i.default.node,
                    allowMouseEvents: i.default.bool,
                    onSwipeUp: i.default.func,
                    onSwipeDown: i.default.func,
                    onSwipeLeft: i.default.func,
                    onSwipeRight: i.default.func,
                    onSwipeStart: i.default.func,
                    onSwipeMove: i.default.func,
                    onSwipeEnd: i.default.func,
                    innerRef: i.default.func,
                    tolerance: i.default.number.isRequired
                }, v.defaultProps = {
                    tagName: "div",
                    allowMouseEvents: !1,
                    onSwipeUp: function() {},
                    onSwipeDown: function() {},
                    onSwipeLeft: function() {},
                    onSwipeRight: function() {},
                    onSwipeStart: function() {},
                    onSwipeMove: function() {},
                    onSwipeEnd: function() {},
                    innerRef: function() {},
                    tolerance: 0
                }, e.default = v
            }, void 0 === (o = "function" === typeof r ? r.apply(t, i) : r) || (e.exports = o)
        },
        41216: function(e, t, n) {
            "use strict";
            var r = n(10490);

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, o, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        43072: function(e, t, n) {
            e.exports = n(41216)()
        },
        10490: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        12751: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = function(e, t, n) {
                var r = 0 === e ? e : e + t;
                return "translate3d" + ("(" + ("horizontal" === n ? [r, 0, 0] : [0, r, 0]).join(",") + ")")
            }
        },
        94954: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fadeAnimationHandler = t.slideStopSwipingHandler = t.slideSwipeAnimationHandler = t.slideAnimationHandler = void 0;
            var r, i = n(67294),
                o = (r = n(12751)) && r.__esModule ? r : {
                    default: r
                },
                s = n(98918);

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        u(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            t.slideAnimationHandler = function(e, t) {
                var n = {},
                    r = t.selectedItem,
                    a = r,
                    u = i.Children.count(e.children) - 1;
                if (e.infiniteLoop && (r < 0 || r > u)) return a < 0 ? e.centerMode && e.centerSlidePercentage && "horizontal" === e.axis ? n.itemListStyle = (0, s.setPosition)(-(u + 2) * e.centerSlidePercentage - (100 - e.centerSlidePercentage) / 2, e.axis) : n.itemListStyle = (0, s.setPosition)(100 * -(u + 2), e.axis) : a > u && (n.itemListStyle = (0, s.setPosition)(0, e.axis)), n;
                var c = (0, s.getPosition)(r, e),
                    p = (0, o.default)(c, "%", e.axis),
                    f = e.transitionTime + "ms";
                return n.itemListStyle = {
                    WebkitTransform: p,
                    msTransform: p,
                    OTransform: p,
                    transform: p
                }, t.swiping || (n.itemListStyle = l(l({}, n.itemListStyle), {}, {
                    WebkitTransitionDuration: f,
                    MozTransitionDuration: f,
                    OTransitionDuration: f,
                    transitionDuration: f,
                    msTransitionDuration: f
                })), n
            };
            t.slideSwipeAnimationHandler = function(e, t, n, r) {
                var o = {},
                    a = "horizontal" === t.axis,
                    l = i.Children.count(t.children),
                    u = (0, s.getPosition)(n.selectedItem, t),
                    c = t.infiniteLoop ? (0, s.getPosition)(l - 1, t) - 100 : (0, s.getPosition)(l - 1, t),
                    p = a ? e.x : e.y,
                    f = p;
                0 === u && p > 0 && (f = 0), u === c && p < 0 && (f = 0);
                var d = u + 100 / (n.itemSize / f),
                    h = Math.abs(p) > t.swipeScrollTolerance;
                return t.infiniteLoop && h && (0 === n.selectedItem && d > -100 ? d -= 100 * l : n.selectedItem === l - 1 && d < 100 * -l && (d += 100 * l)), (!t.preventMovementUntilSwipeScrollTolerance || h || n.swipeMovementStarted) && (n.swipeMovementStarted || r({
                    swipeMovementStarted: !0
                }), o.itemListStyle = (0, s.setPosition)(d, t.axis)), h && !n.cancelClick && r({
                    cancelClick: !0
                }), o
            };
            t.slideStopSwipingHandler = function(e, t) {
                var n = (0, s.getPosition)(t.selectedItem, e);
                return {
                    itemListStyle: (0, s.setPosition)(n, e.axis)
                }
            };
            t.fadeAnimationHandler = function(e, t) {
                var n = e.transitionTime + "ms",
                    r = "ease-in-out",
                    i = {
                        position: "absolute",
                        display: "block",
                        zIndex: -2,
                        minHeight: "100%",
                        opacity: 0,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        transitionTimingFunction: r,
                        msTransitionTimingFunction: r,
                        MozTransitionTimingFunction: r,
                        WebkitTransitionTimingFunction: r,
                        OTransitionTimingFunction: r
                    };
                return t.swiping || (i = l(l({}, i), {}, {
                    WebkitTransitionDuration: n,
                    MozTransitionDuration: n,
                    OTransitionDuration: n,
                    transitionDuration: n,
                    msTransitionDuration: n
                })), {
                    slideStyle: i,
                    selectedStyle: l(l({}, i), {}, {
                        opacity: 1,
                        position: "relative"
                    }),
                    prevStyle: l({}, i)
                }
            }
        },
        18684: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== d(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(67294)),
                i = p(n(86995)),
                o = p(n(25702)),
                s = p(n(45040)),
                a = p(n(16513)),
                l = p(n(885)),
                u = n(98918),
                c = n(94954);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function d(e) {
                return d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }

            function h() {
                return h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, h.apply(this, arguments)
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        O(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function b(e, t) {
                return b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, b(e, t)
            }

            function w(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = P(e);
                    if (t) {
                        var i = P(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }

            function S(e, t) {
                return !t || "object" !== d(t) && "function" !== typeof t ? g(e) : t
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, P(e)
            }

            function O(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var T = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && b(e, t)
                }(d, e);
                var t, n, p, f = w(d);

                function d(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), O(g(t = f.call(this, e)), "thumbsRef", void 0), O(g(t), "carouselWrapperRef", void 0), O(g(t), "listRef", void 0), O(g(t), "itemsRef", void 0), O(g(t), "timer", void 0), O(g(t), "animationHandler", void 0), O(g(t), "setThumbsRef", (function(e) {
                        t.thumbsRef = e
                    })), O(g(t), "setCarouselWrapperRef", (function(e) {
                        t.carouselWrapperRef = e
                    })), O(g(t), "setListRef", (function(e) {
                        t.listRef = e
                    })), O(g(t), "setItemsRef", (function(e, n) {
                        t.itemsRef || (t.itemsRef = []), t.itemsRef[n] = e
                    })), O(g(t), "autoPlay", (function() {
                        r.Children.count(t.props.children) <= 1 || (t.clearAutoPlay(), t.props.autoPlay && (t.timer = setTimeout((function() {
                            t.increment()
                        }), t.props.interval)))
                    })), O(g(t), "clearAutoPlay", (function() {
                        t.timer && clearTimeout(t.timer)
                    })), O(g(t), "resetAutoPlay", (function() {
                        t.clearAutoPlay(), t.autoPlay()
                    })), O(g(t), "stopOnHover", (function() {
                        t.setState({
                            isMouseEntered: !0
                        }, t.clearAutoPlay)
                    })), O(g(t), "startOnLeave", (function() {
                        t.setState({
                            isMouseEntered: !1
                        }, t.autoPlay)
                    })), O(g(t), "isFocusWithinTheCarousel", (function() {
                        return !!t.carouselWrapperRef && !((0, a.default)().activeElement !== t.carouselWrapperRef && !t.carouselWrapperRef.contains((0, a.default)().activeElement))
                    })), O(g(t), "navigateWithKeyboard", (function(e) {
                        if (t.isFocusWithinTheCarousel()) {
                            var n = "horizontal" === t.props.axis,
                                r = n ? 37 : 38;
                            (n ? 39 : 40) === e.keyCode ? t.increment() : r === e.keyCode && t.decrement()
                        }
                    })), O(g(t), "updateSizes", (function() {
                        if (t.state.initialized && t.itemsRef && 0 !== t.itemsRef.length) {
                            var e = "horizontal" === t.props.axis,
                                n = t.itemsRef[0];
                            if (n) {
                                var r = e ? n.clientWidth : n.clientHeight;
                                t.setState({
                                    itemSize: r
                                }), t.thumbsRef && t.thumbsRef.updateSizes()
                            }
                        }
                    })), O(g(t), "setMountState", (function() {
                        t.setState({
                            hasMount: !0
                        }), t.updateSizes()
                    })), O(g(t), "handleClickItem", (function(e, n) {
                        0 !== r.Children.count(t.props.children) && (t.state.cancelClick ? t.setState({
                            cancelClick: !1
                        }) : (t.props.onClickItem(e, n), e !== t.state.selectedItem && t.setState({
                            selectedItem: e
                        })))
                    })), O(g(t), "handleOnChange", (function(e, n) {
                        r.Children.count(t.props.children) <= 1 || t.props.onChange(e, n)
                    })), O(g(t), "handleClickThumb", (function(e, n) {
                        t.props.onClickThumb(e, n), t.moveTo(e)
                    })), O(g(t), "onSwipeStart", (function(e) {
                        t.setState({
                            swiping: !0
                        }), t.props.onSwipeStart(e)
                    })), O(g(t), "onSwipeEnd", (function(e) {
                        t.setState({
                            swiping: !1,
                            cancelClick: !1,
                            swipeMovementStarted: !1
                        }), t.props.onSwipeEnd(e), t.clearAutoPlay(), t.state.autoPlay && t.autoPlay()
                    })), O(g(t), "onSwipeMove", (function(e, n) {
                        t.props.onSwipeMove(n);
                        var r = t.props.swipeAnimationHandler(e, t.props, t.state, t.setState.bind(g(t)));
                        return t.setState(v({}, r)), !!Object.keys(r).length
                    })), O(g(t), "decrement", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        t.moveTo(t.state.selectedItem - ("number" === typeof e ? e : 1))
                    })), O(g(t), "increment", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        t.moveTo(t.state.selectedItem + ("number" === typeof e ? e : 1))
                    })), O(g(t), "moveTo", (function(e) {
                        if ("number" === typeof e) {
                            var n = r.Children.count(t.props.children) - 1;
                            e < 0 && (e = t.props.infiniteLoop ? n : 0), e > n && (e = t.props.infiniteLoop ? 0 : n), t.selectItem({
                                selectedItem: e
                            }), t.state.autoPlay && !1 === t.state.isMouseEntered && t.resetAutoPlay()
                        }
                    })), O(g(t), "onClickNext", (function() {
                        t.increment(1)
                    })), O(g(t), "onClickPrev", (function() {
                        t.decrement(1)
                    })), O(g(t), "onSwipeForward", (function() {
                        t.increment(1), t.props.emulateTouch && t.setState({
                            cancelClick: !0
                        })
                    })), O(g(t), "onSwipeBackwards", (function() {
                        t.decrement(1), t.props.emulateTouch && t.setState({
                            cancelClick: !0
                        })
                    })), O(g(t), "changeItem", (function(e) {
                        return function(n) {
                            (0, u.isKeyboardEvent)(n) && "Enter" !== n.key || t.moveTo(e)
                        }
                    })), O(g(t), "selectItem", (function(e) {
                        t.setState(v({
                            previousItem: t.state.selectedItem
                        }, e), (function() {
                            t.setState(t.animationHandler(t.props, t.state))
                        })), t.handleOnChange(e.selectedItem, r.Children.toArray(t.props.children)[e.selectedItem])
                    })), O(g(t), "getInitialImage", (function() {
                        var e = t.props.selectedItem,
                            n = t.itemsRef && t.itemsRef[e];
                        return (n && n.getElementsByTagName("img") || [])[0]
                    })), O(g(t), "getVariableItemHeight", (function(e) {
                        var n = t.itemsRef && t.itemsRef[e];
                        if (t.state.hasMount && n && n.children.length) {
                            var r = n.children[0].getElementsByTagName("img") || [];
                            if (r.length > 0) {
                                var i = r[0];
                                if (!i.complete) {
                                    i.addEventListener("load", (function e() {
                                        t.forceUpdate(), i.removeEventListener("load", e)
                                    }))
                                }
                            }
                            var o = (r[0] || n.children[0]).clientHeight;
                            return o > 0 ? o : null
                        }
                        return null
                    }));
                    var n = {
                        initialized: !1,
                        previousItem: e.selectedItem,
                        selectedItem: e.selectedItem,
                        hasMount: !1,
                        isMouseEntered: !1,
                        autoPlay: e.autoPlay,
                        swiping: !1,
                        swipeMovementStarted: !1,
                        cancelClick: !1,
                        itemSize: 1,
                        itemListStyle: {},
                        slideStyle: {},
                        selectedStyle: {},
                        prevStyle: {}
                    };
                    return t.animationHandler = "function" === typeof e.animationHandler && e.animationHandler || "fade" === e.animationHandler && c.fadeAnimationHandler || c.slideAnimationHandler, t.state = v(v({}, n), t.animationHandler(e, n)), t
                }
                return t = d, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.children && this.setupCarousel()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        e.children || !this.props.children || this.state.initialized || this.setupCarousel(), !e.autoFocus && this.props.autoFocus && this.forceFocus(), t.swiping && !this.state.swiping && this.setState(v({}, this.props.stopSwipingHandler(this.props, this.state))), e.selectedItem === this.props.selectedItem && e.centerMode === this.props.centerMode || (this.updateSizes(), this.moveTo(this.props.selectedItem)), e.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
                            autoPlay: this.props.autoPlay
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyCarousel()
                    }
                }, {
                    key: "setupCarousel",
                    value: function() {
                        var e = this;
                        this.bindEvents(), this.state.autoPlay && r.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
                            initialized: !0
                        }, (function() {
                            var t = e.getInitialImage();
                            t && !t.complete ? t.addEventListener("load", e.setMountState) : e.setMountState()
                        }))
                    }
                }, {
                    key: "destroyCarousel",
                    value: function() {
                        this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay())
                    }
                }, {
                    key: "setupAutoPlay",
                    value: function() {
                        this.autoPlay();
                        var e = this.carouselWrapperRef;
                        this.props.stopOnHover && e && (e.addEventListener("mouseenter", this.stopOnHover), e.addEventListener("mouseleave", this.startOnLeave))
                    }
                }, {
                    key: "destroyAutoPlay",
                    value: function() {
                        this.clearAutoPlay();
                        var e = this.carouselWrapperRef;
                        this.props.stopOnHover && e && (e.removeEventListener("mouseenter", this.stopOnHover), e.removeEventListener("mouseleave", this.startOnLeave))
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        (0, l.default)().addEventListener("resize", this.updateSizes), (0, l.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, a.default)().addEventListener("keydown", this.navigateWithKeyboard)
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        (0, l.default)().removeEventListener("resize", this.updateSizes), (0, l.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
                        var e = this.getInitialImage();
                        e && e.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, a.default)().removeEventListener("keydown", this.navigateWithKeyboard)
                    }
                }, {
                    key: "forceFocus",
                    value: function() {
                        var e;
                        null === (e = this.carouselWrapperRef) || void 0 === e || e.focus()
                    }
                }, {
                    key: "renderItems",
                    value: function(e) {
                        var t = this;
                        return this.props.children ? r.Children.map(this.props.children, (function(n, i) {
                            var s = i === t.state.selectedItem,
                                a = i === t.state.previousItem,
                                l = s && t.state.selectedStyle || a && t.state.prevStyle || t.state.slideStyle || {};
                            t.props.centerMode && "horizontal" === t.props.axis && (l = v(v({}, l), {}, {
                                minWidth: t.props.centerSlidePercentage + "%"
                            })), t.state.swiping && t.state.swipeMovementStarted && (l = v(v({}, l), {}, {
                                pointerEvents: "none"
                            }));
                            var u = {
                                ref: function(e) {
                                    return t.setItemsRef(e, i)
                                },
                                key: "itemKey" + i + (e ? "clone" : ""),
                                className: o.default.ITEM(!0, i === t.state.selectedItem, i === t.state.previousItem),
                                onClick: t.handleClickItem.bind(t, i, n),
                                style: l
                            };
                            return r.default.createElement("li", u, t.props.renderItem(n, {
                                isSelected: i === t.state.selectedItem,
                                isPrevious: i === t.state.previousItem
                            }))
                        })) : []
                    }
                }, {
                    key: "renderControls",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.showIndicators,
                            i = t.labels,
                            o = t.renderIndicator,
                            s = t.children;
                        return n ? r.default.createElement("ul", {
                            className: "control-dots"
                        }, r.Children.map(s, (function(t, n) {
                            return o && o(e.changeItem(n), n === e.state.selectedItem, n, i.item)
                        }))) : null
                    }
                }, {
                    key: "renderStatus",
                    value: function() {
                        return this.props.showStatus ? r.default.createElement("p", {
                            className: "carousel-status"
                        }, this.props.statusFormatter(this.state.selectedItem + 1, r.Children.count(this.props.children))) : null
                    }
                }, {
                    key: "renderThumbs",
                    value: function() {
                        return this.props.showThumbs && this.props.children && 0 !== r.Children.count(this.props.children) ? r.default.createElement(s.default, {
                            ref: this.setThumbsRef,
                            onSelectItem: this.handleClickThumb,
                            selectedItem: this.state.selectedItem,
                            transitionTime: this.props.transitionTime,
                            thumbWidth: this.props.thumbWidth,
                            labels: this.props.labels,
                            emulateTouch: this.props.emulateTouch
                        }, this.props.renderThumbs(this.props.children)) : null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (!this.props.children || 0 === r.Children.count(this.props.children)) return null;
                        var t = this.props.swipeable && r.Children.count(this.props.children) > 1,
                            n = "horizontal" === this.props.axis,
                            s = this.props.showArrows && r.Children.count(this.props.children) > 1,
                            a = s && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1,
                            l = s && (this.state.selectedItem < r.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1,
                            u = this.renderItems(!0),
                            c = u.shift(),
                            p = u.pop(),
                            f = {
                                className: o.default.SLIDER(!0, this.state.swiping),
                                onSwipeMove: this.onSwipeMove,
                                onSwipeStart: this.onSwipeStart,
                                onSwipeEnd: this.onSwipeEnd,
                                style: this.state.itemListStyle,
                                tolerance: this.props.swipeScrollTolerance
                            },
                            d = {};
                        if (n) {
                            if (f.onSwipeLeft = this.onSwipeForward, f.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
                                var m = this.getVariableItemHeight(this.state.selectedItem);
                                d.height = m || "auto"
                            }
                        } else f.onSwipeUp = "natural" === this.props.verticalSwipe ? this.onSwipeBackwards : this.onSwipeForward, f.onSwipeDown = "natural" === this.props.verticalSwipe ? this.onSwipeForward : this.onSwipeBackwards, f.style = v(v({}, f.style), {}, {
                            height: this.state.itemSize
                        }), d.height = this.state.itemSize;
                        return r.default.createElement("div", {
                            "aria-label": this.props.ariaLabel,
                            className: o.default.ROOT(this.props.className),
                            ref: this.setCarouselWrapperRef,
                            tabIndex: this.props.useKeyboardArrows ? 0 : void 0
                        }, r.default.createElement("div", {
                            className: o.default.CAROUSEL(!0),
                            style: {
                                width: this.props.width
                            }
                        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, a, this.props.labels.leftArrow), r.default.createElement("div", {
                            className: o.default.WRAPPER(!0, this.props.axis),
                            style: d
                        }, t ? r.default.createElement(i.default, h({
                            tagName: "ul",
                            innerRef: this.setListRef
                        }, f, {
                            allowMouseEvents: this.props.emulateTouch
                        }), this.props.infiniteLoop && p, this.renderItems(), this.props.infiniteLoop && c) : r.default.createElement("ul", {
                            className: o.default.SLIDER(!0, this.state.swiping),
                            ref: function(t) {
                                return e.setListRef(t)
                            },
                            style: this.state.itemListStyle || {}
                        }, this.props.infiniteLoop && p, this.renderItems(), this.props.infiniteLoop && c)), this.props.renderArrowNext(this.onClickNext, l, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs())
                    }
                }]) && y(t.prototype, n), p && y(t, p), d
            }(r.default.Component);
            t.default = T, O(T, "displayName", "Carousel"), O(T, "defaultProps", {
                ariaLabel: void 0,
                axis: "horizontal",
                centerSlidePercentage: 80,
                interval: 3e3,
                labels: {
                    leftArrow: "previous slide / item",
                    rightArrow: "next slide / item",
                    item: "slide item"
                },
                onClickItem: u.noop,
                onClickThumb: u.noop,
                onChange: u.noop,
                onSwipeStart: function() {},
                onSwipeEnd: function() {},
                onSwipeMove: function() {
                    return !1
                },
                preventMovementUntilSwipeScrollTolerance: !1,
                renderArrowPrev: function(e, t, n) {
                    return r.default.createElement("button", {
                        type: "button",
                        "aria-label": n,
                        className: o.default.ARROW_PREV(!t),
                        onClick: e
                    })
                },
                renderArrowNext: function(e, t, n) {
                    return r.default.createElement("button", {
                        type: "button",
                        "aria-label": n,
                        className: o.default.ARROW_NEXT(!t),
                        onClick: e
                    })
                },
                renderIndicator: function(e, t, n, i) {
                    return r.default.createElement("li", {
                        className: o.default.DOT(t),
                        onClick: e,
                        onKeyDown: e,
                        value: n,
                        key: n,
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "".concat(i, " ").concat(n + 1)
                    })
                },
                renderItem: function(e) {
                    return e
                },
                renderThumbs: function(e) {
                    var t = r.Children.map(e, (function(e) {
                        var t = e;
                        if ("img" !== e.type && (t = r.Children.toArray(e.props.children).find((function(e) {
                                return "img" === e.type
                            }))), t) return t
                    }));
                    return 0 === t.filter((function(e) {
                        return e
                    })).length ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : t
                },
                statusFormatter: u.defaultStatusFormatter,
                selectedItem: 0,
                showArrows: !0,
                showIndicators: !0,
                showStatus: !0,
                showThumbs: !0,
                stopOnHover: !0,
                swipeScrollTolerance: 5,
                swipeable: !0,
                transitionTime: 350,
                verticalSwipe: "standard",
                width: "100%",
                animationHandler: "slide",
                swipeAnimationHandler: c.slideSwipeAnimationHandler,
                stopSwipingHandler: c.slideStopSwipingHandler
            })
        },
        50629: function() {},
        98918: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setPosition = t.getPosition = t.isKeyboardEvent = t.defaultStatusFormatter = t.noop = void 0;
            var r, i = n(67294),
                o = (r = n(12751)) && r.__esModule ? r : {
                    default: r
                };
            t.noop = function() {};
            t.defaultStatusFormatter = function(e, t) {
                return "".concat(e, " of ").concat(t)
            };
            t.isKeyboardEvent = function(e) {
                return !!e && e.hasOwnProperty("key")
            };
            t.getPosition = function(e, t) {
                if (t.infiniteLoop && ++e, 0 === e) return 0;
                var n = i.Children.count(t.children);
                if (t.centerMode && "horizontal" === t.axis) {
                    var r = -e * t.centerSlidePercentage,
                        o = n - 1;
                    return e && (e !== o || t.infiniteLoop) ? r += (100 - t.centerSlidePercentage) / 2 : e === o && (r += 100 - t.centerSlidePercentage), r
                }
                return 100 * -e
            };
            t.setPosition = function(e, t) {
                var n = {};
                return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function(r) {
                    n[r] = (0, o.default)(e, "%", t)
                })), n
            }
        },
        45040: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== p(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(67294)),
                i = u(n(25702)),
                o = n(74528),
                s = u(n(12751)),
                a = u(n(86995)),
                l = u(n(885));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function p(e) {
                return p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function f() {
                return f = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, f.apply(this, arguments)
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t) {
                return h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function m(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }

            function v(e, t) {
                return !t || "object" !== p(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var S = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && h(e, t)
                }(p, e);
                var t, n, u, c = m(p);

                function p(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), w(y(t = c.call(this, e)), "itemsWrapperRef", void 0), w(y(t), "itemsListRef", void 0), w(y(t), "thumbsRef", void 0), w(y(t), "setItemsWrapperRef", (function(e) {
                        t.itemsWrapperRef = e
                    })), w(y(t), "setItemsListRef", (function(e) {
                        t.itemsListRef = e
                    })), w(y(t), "setThumbsRef", (function(e, n) {
                        t.thumbsRef || (t.thumbsRef = []), t.thumbsRef[n] = e
                    })), w(y(t), "updateSizes", (function() {
                        if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                            var e = r.Children.count(t.props.children),
                                n = t.itemsWrapperRef.clientWidth,
                                i = t.props.thumbWidth ? t.props.thumbWidth : (0, o.outerWidth)(t.thumbsRef[0]),
                                s = Math.floor(n / i),
                                a = s < e,
                                l = a ? e - s : 0;
                            t.setState((function(e, n) {
                                return {
                                    itemSize: i,
                                    visibleItems: s,
                                    firstItem: a ? t.getFirstItem(n.selectedItem) : 0,
                                    lastPosition: l,
                                    showArrows: a
                                }
                            }))
                        }
                    })), w(y(t), "handleClickItem", (function(e, n, r) {
                        if (! function(e) {
                                return e.hasOwnProperty("key")
                            }(r) || "Enter" === r.key) {
                            var i = t.props.onSelectItem;
                            "function" === typeof i && i(e, n)
                        }
                    })), w(y(t), "onSwipeStart", (function() {
                        t.setState({
                            swiping: !0
                        })
                    })), w(y(t), "onSwipeEnd", (function() {
                        t.setState({
                            swiping: !1
                        })
                    })), w(y(t), "onSwipeMove", (function(e) {
                        var n = e.x;
                        if (!t.state.itemSize || !t.itemsWrapperRef || !t.state.visibleItems) return !1;
                        var i = r.Children.count(t.props.children),
                            o = -100 * t.state.firstItem / t.state.visibleItems;
                        0 === o && n > 0 && (n = 0), o === 100 * -Math.max(i - t.state.visibleItems, 0) / t.state.visibleItems && n < 0 && (n = 0);
                        var a = o + 100 / (t.itemsWrapperRef.clientWidth / n);
                        return t.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function(e) {
                            t.itemsListRef.style[e] = (0, s.default)(a, "%", t.props.axis)
                        })), !0
                    })), w(y(t), "slideRight", (function(e) {
                        t.moveTo(t.state.firstItem - ("number" === typeof e ? e : 1))
                    })), w(y(t), "slideLeft", (function(e) {
                        t.moveTo(t.state.firstItem + ("number" === typeof e ? e : 1))
                    })), w(y(t), "moveTo", (function(e) {
                        e = (e = e < 0 ? 0 : e) >= t.state.lastPosition ? t.state.lastPosition : e, t.setState({
                            firstItem: e
                        })
                    })), t.state = {
                        selectedItem: e.selectedItem,
                        swiping: !1,
                        showArrows: !1,
                        firstItem: 0,
                        visibleItems: 0,
                        lastPosition: 0
                    }, t
                }
                return t = p, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.setupThumbs()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.props.selectedItem !== this.state.selectedItem && this.setState({
                            selectedItem: this.props.selectedItem,
                            firstItem: this.getFirstItem(this.props.selectedItem)
                        }), this.props.children !== e.children && this.updateSizes()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyThumbs()
                    }
                }, {
                    key: "setupThumbs",
                    value: function() {
                        (0, l.default)().addEventListener("resize", this.updateSizes), (0, l.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes()
                    }
                }, {
                    key: "destroyThumbs",
                    value: function() {
                        (0, l.default)().removeEventListener("resize", this.updateSizes), (0, l.default)().removeEventListener("DOMContentLoaded", this.updateSizes)
                    }
                }, {
                    key: "getFirstItem",
                    value: function(e) {
                        var t = e;
                        return e >= this.state.lastPosition && (t = this.state.lastPosition), e < this.state.firstItem + this.state.visibleItems && (t = this.state.firstItem), e < this.state.firstItem && (t = e), t
                    }
                }, {
                    key: "renderItems",
                    value: function() {
                        var e = this;
                        return this.props.children.map((function(t, n) {
                            var o = i.default.ITEM(!1, n === e.state.selectedItem),
                                s = {
                                    key: n,
                                    ref: function(t) {
                                        return e.setThumbsRef(t, n)
                                    },
                                    className: o,
                                    onClick: e.handleClickItem.bind(e, n, e.props.children[n]),
                                    onKeyDown: e.handleClickItem.bind(e, n, e.props.children[n]),
                                    "aria-label": "".concat(e.props.labels.item, " ").concat(n + 1),
                                    style: {
                                        width: e.props.thumbWidth
                                    }
                                };
                            return r.default.createElement("li", f({}, s, {
                                role: "button",
                                tabIndex: 0
                            }), t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (!this.props.children) return null;
                        var t, n = r.Children.count(this.props.children) > 1,
                            o = this.state.showArrows && this.state.firstItem > 0,
                            l = this.state.showArrows && this.state.firstItem < this.state.lastPosition,
                            u = -this.state.firstItem * (this.state.itemSize || 0),
                            c = (0, s.default)(u, "px", this.props.axis),
                            p = this.props.transitionTime + "ms";
                        return t = {
                            WebkitTransform: c,
                            MozTransform: c,
                            MsTransform: c,
                            OTransform: c,
                            transform: c,
                            msTransform: c,
                            WebkitTransitionDuration: p,
                            MozTransitionDuration: p,
                            MsTransitionDuration: p,
                            OTransitionDuration: p,
                            transitionDuration: p,
                            msTransitionDuration: p
                        }, r.default.createElement("div", {
                            className: i.default.CAROUSEL(!1)
                        }, r.default.createElement("div", {
                            className: i.default.WRAPPER(!1),
                            ref: this.setItemsWrapperRef
                        }, r.default.createElement("button", {
                            type: "button",
                            className: i.default.ARROW_PREV(!o),
                            onClick: function() {
                                return e.slideRight()
                            },
                            "aria-label": this.props.labels.leftArrow
                        }), n ? r.default.createElement(a.default, {
                            tagName: "ul",
                            className: i.default.SLIDER(!1, this.state.swiping),
                            onSwipeLeft: this.slideLeft,
                            onSwipeRight: this.slideRight,
                            onSwipeMove: this.onSwipeMove,
                            onSwipeStart: this.onSwipeStart,
                            onSwipeEnd: this.onSwipeEnd,
                            style: t,
                            innerRef: this.setItemsListRef,
                            allowMouseEvents: this.props.emulateTouch
                        }, this.renderItems()) : r.default.createElement("ul", {
                            className: i.default.SLIDER(!1, this.state.swiping),
                            ref: function(t) {
                                return e.setItemsListRef(t)
                            },
                            style: t
                        }, this.renderItems()), r.default.createElement("button", {
                            type: "button",
                            className: i.default.ARROW_NEXT(!l),
                            onClick: function() {
                                return e.slideLeft()
                            },
                            "aria-label": this.props.labels.rightArrow
                        })))
                    }
                }]) && d(t.prototype, n), u && d(t, u), p
            }(r.Component);
            t.default = S, w(S, "displayName", "Thumbs"), w(S, "defaultProps", {
                axis: "horizontal",
                labels: {
                    leftArrow: "previous slide / item",
                    rightArrow: "next slide / item",
                    item: "slide item"
                },
                selectedItem: 0,
                thumbWidth: 80,
                transitionTime: 350
            })
        },
        25702: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(94184)) && r.__esModule ? r : {
                default: r
            };
            var o = {
                ROOT: function(e) {
                    return (0, i.default)(function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({
                        "carousel-root": !0
                    }, e || "", !!e))
                },
                CAROUSEL: function(e) {
                    return (0, i.default)({
                        carousel: !0,
                        "carousel-slider": e
                    })
                },
                WRAPPER: function(e, t) {
                    return (0, i.default)({
                        "thumbs-wrapper": !e,
                        "slider-wrapper": e,
                        "axis-horizontal": "horizontal" === t,
                        "axis-vertical": "horizontal" !== t
                    })
                },
                SLIDER: function(e, t) {
                    return (0, i.default)({
                        thumbs: !e,
                        slider: e,
                        animated: !t
                    })
                },
                ITEM: function(e, t, n) {
                    return (0, i.default)({
                        thumb: !e,
                        slide: e,
                        selected: t,
                        previous: n
                    })
                },
                ARROW_PREV: function(e) {
                    return (0, i.default)({
                        "control-arrow control-prev": !0,
                        "control-disabled": e
                    })
                },
                ARROW_NEXT: function(e) {
                    return (0, i.default)({
                        "control-arrow control-next": !0,
                        "control-disabled": e
                    })
                },
                DOT: function(e) {
                    return (0, i.default)({
                        dot: !0,
                        selected: e
                    })
                }
            };
            t.default = o
        },
        74528: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.outerWidth = void 0;
            t.outerWidth = function(e) {
                var t = e.offsetWidth,
                    n = getComputedStyle(e);
                return t += parseInt(n.marginLeft) + parseInt(n.marginRight)
            }
        },
        10615: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "lr", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = s(n(18684)),
                i = n(50629),
                o = s(n(45040));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        16513: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = function() {
                return document
            }
        },
        885: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = function() {
                return window
            }
        },
        33729: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return C
                }
            });
            var r = n(67294),
                i = n(12351),
                o = n(54203),
                s = n(32984),
                a = n(61363),
                l = n(84575),
                u = n(16723),
                c = n(23784),
                p = n(14157),
                f = n(3855),
                d = n(46045);

            function h({
                onFocus: e
            }) {
                let [t, n] = (0, r.useState)(!0);
                return t ? r.createElement(d._, {
                    as: "button",
                    type: "button",
                    features: d.A.Focusable,
                    onFocus: t => {
                        t.preventDefault();
                        let r, i = 50;
                        r = requestAnimationFrame((function t() {
                            if (!(i-- <= 0)) return e() ? (n(!1), void cancelAnimationFrame(r)) : void(r = requestAnimationFrame(t));
                            r && cancelAnimationFrame(r)
                        }))
                    }
                }) : null
            }
            var m = n(73781);
            var v, y = ((v = y || {})[v.SetSelectedIndex = 0] = "SetSelectedIndex", v[v.RegisterTab = 1] = "RegisterTab", v[v.UnregisterTab = 2] = "UnregisterTab", v[v.RegisterPanel = 3] = "RegisterPanel", v[v.UnregisterPanel = 4] = "UnregisterPanel", v);
            let b = {
                    0(e, t) {
                        let n = e.tabs.filter((e => {
                            var t;
                            return !(null != (t = e.current) && t.hasAttribute("disabled"))
                        }));
                        if (t.index < 0) return { ...e,
                            selectedIndex: e.tabs.indexOf(n[0])
                        };
                        if (t.index > e.tabs.length) return { ...e,
                            selectedIndex: e.tabs.indexOf(n[n.length - 1])
                        };
                        let r = e.tabs.slice(0, t.index),
                            i = [...e.tabs.slice(t.index), ...r].find((e => n.includes(e)));
                        return i ? { ...e,
                            selectedIndex: e.tabs.indexOf(i)
                        } : e
                    },
                    1(e, t) {
                        var n;
                        if (e.tabs.includes(t.tab)) return e;
                        let r = e.tabs[e.selectedIndex],
                            i = (0, l.z2)([...e.tabs, t.tab], (e => e.current)),
                            o = null != (n = i.indexOf(r)) ? n : e.selectedIndex;
                        return -1 === o && (o = e.selectedIndex), { ...e,
                            tabs: i,
                            selectedIndex: o
                        }
                    },
                    2: (e, t) => ({ ...e,
                        tabs: e.tabs.filter((e => e !== t.tab))
                    }),
                    3: (e, t) => e.panels.includes(t.panel) ? e : { ...e,
                        panels: (0, l.z2)([...e.panels, t.panel], (e => e.current))
                    },
                    4: (e, t) => ({ ...e,
                        panels: e.panels.filter((e => e !== t.panel))
                    })
                },
                w = (0, r.createContext)(null);

            function S(e) {
                let t = (0, r.useContext)(w);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, S), t
                }
                return t
            }
            w.displayName = "TabsSSRContext";
            let g = (0, r.createContext)(null);

            function P(e) {
                let t = (0, r.useContext)(g);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, P), t
                }
                return t
            }
            g.displayName = "TabsDataContext";
            let O = (0, r.createContext)(null);

            function T(e) {
                let t = (0, r.useContext)(O);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, T), t
                }
                return t
            }

            function E(e, t) {
                return (0, s.E)(t.type, b, e, t)
            }
            O.displayName = "TabsActionsContext";
            let I = r.Fragment,
                R = (0, i.yV)((function(e, t) {
                    let {
                        defaultIndex: n = 0,
                        vertical: o = !1,
                        manual: s = !1,
                        onChange: a,
                        selectedIndex: l = null,
                        ...p
                    } = e;
                    const d = o ? "vertical" : "horizontal",
                        m = s ? "manual" : "auto";
                    let v = null !== l,
                        y = (0, c.T)(t),
                        [b, S] = (0, r.useReducer)(E, {
                            selectedIndex: null != l ? l : n,
                            tabs: [],
                            panels: []
                        }),
                        P = (0, r.useMemo)((() => ({
                            selectedIndex: b.selectedIndex
                        })), [b.selectedIndex]),
                        T = (0, f.E)(a || (() => {})),
                        R = (0, f.E)(b.tabs),
                        M = (0, r.useMemo)((() => ({
                            orientation: d,
                            activation: m,
                            ...b
                        })), [d, m, b]),
                        _ = (0, f.E)(v ? e.selectedIndex : b.selectedIndex),
                        k = (0, r.useMemo)((() => ({
                            registerTab: e => (S({
                                type: 1,
                                tab: e
                            }), () => S({
                                type: 2,
                                tab: e
                            })),
                            registerPanel: e => (S({
                                type: 3,
                                panel: e
                            }), () => S({
                                type: 4,
                                panel: e
                            })),
                            change(e) {
                                _.current !== e && T.current(e), v || S({
                                    type: 0,
                                    index: e
                                })
                            }
                        })), [S, v]);
                    (0, u.e)((() => {
                        S({
                            type: 0,
                            index: null != l ? l : n
                        })
                    }), [l]);
                    let A = (0, r.useRef)({
                            tabs: [],
                            panels: []
                        }),
                        x = {
                            ref: y
                        };
                    return r.createElement(w.Provider, {
                        value: A
                    }, r.createElement(O.Provider, {
                        value: k
                    }, r.createElement(g.Provider, {
                        value: M
                    }, M.tabs.length <= 0 && r.createElement(h, {
                        onFocus: () => {
                            var e, t;
                            for (let n of R.current)
                                if (0 === (null == (e = n.current) ? void 0 : e.tabIndex)) return null == (t = n.current) || t.focus(), !0;
                            return !1
                        }
                    }), (0, i.sY)({
                        ourProps: x,
                        theirProps: p,
                        slot: P,
                        defaultTag: I,
                        name: "Tabs"
                    }))))
                })),
                M = (0, i.yV)((function(e, t) {
                    let {
                        orientation: n,
                        selectedIndex: r
                    } = P("Tab.List"), o = (0, c.T)(t);
                    return (0, i.sY)({
                        ourProps: {
                            ref: o,
                            role: "tablist",
                            "aria-orientation": n
                        },
                        theirProps: e,
                        slot: {
                            selectedIndex: r
                        },
                        defaultTag: "div",
                        name: "Tabs.List"
                    })
                })),
                _ = (0, i.yV)((function(e, t) {
                    var n, f;
                    let d = `headlessui-tabs-tab-${(0,o.M)()}`,
                        {
                            orientation: h,
                            activation: v,
                            selectedIndex: y,
                            tabs: b,
                            panels: w
                        } = P("Tab"),
                        g = T("Tab"),
                        O = S("Tab"),
                        E = (0, r.useRef)(null),
                        I = (0, c.T)(E, t);
                    (0, u.e)((() => g.registerTab(E)), [g, E]);
                    let R = O.current.tabs.indexOf(d); - 1 === R && (R = O.current.tabs.push(d) - 1);
                    let M = b.indexOf(E); - 1 === M && (M = R);
                    let _ = M === y,
                        k = (0, m.z)((e => {
                            let t = b.map((e => e.current)).filter(Boolean);
                            if (e.key === a.R.Space || e.key === a.R.Enter) return e.preventDefault(), e.stopPropagation(), void g.change(M);
                            switch (e.key) {
                                case a.R.Home:
                                case a.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), (0, l.jA)(t, l.TO.First);
                                case a.R.End:
                                case a.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), (0, l.jA)(t, l.TO.Last)
                            }
                            return (0, s.E)(h, {
                                vertical: () => e.key === a.R.ArrowUp ? (0, l.jA)(t, l.TO.Previous | l.TO.WrapAround) : e.key === a.R.ArrowDown ? (0, l.jA)(t, l.TO.Next | l.TO.WrapAround) : void 0,
                                horizontal: () => e.key === a.R.ArrowLeft ? (0, l.jA)(t, l.TO.Previous | l.TO.WrapAround) : e.key === a.R.ArrowRight ? (0, l.jA)(t, l.TO.Next | l.TO.WrapAround) : void 0
                            }) ? e.preventDefault() : void 0
                        })),
                        A = (0, m.z)((() => {
                            var e;
                            null == (e = E.current) || e.focus()
                        })),
                        x = (0, r.useRef)(!1),
                        C = (0, m.z)((() => {
                            var e, t;
                            x.current || (x.current = !0, null == (e = E.current) || e.focus(), g.change(M), t = () => {
                                x.current = !1
                            }, "function" == typeof queueMicrotask ? queueMicrotask(t) : Promise.resolve().then(t).catch((e => setTimeout((() => {
                                throw e
                            })))))
                        })),
                        L = (0, m.z)((e => {
                            e.preventDefault()
                        })),
                        j = (0, r.useMemo)((() => ({
                            selected: _
                        })), [_]),
                        D = e,
                        W = {
                            ref: I,
                            onKeyDown: k,
                            onFocus: "manual" === v ? A : C,
                            onMouseDown: L,
                            onClick: C,
                            id: d,
                            role: "tab",
                            type: (0, p.f)(e, E),
                            "aria-controls": null == (f = null == (n = w[M]) ? void 0 : n.current) ? void 0 : f.id,
                            "aria-selected": _,
                            tabIndex: _ ? 0 : -1
                        };
                    return (0, i.sY)({
                        ourProps: W,
                        theirProps: D,
                        slot: j,
                        defaultTag: "button",
                        name: "Tabs.Tab"
                    })
                })),
                k = (0, i.yV)((function(e, t) {
                    let {
                        selectedIndex: n
                    } = P("Tab.Panels"), o = (0, c.T)(t), s = (0, r.useMemo)((() => ({
                        selectedIndex: n
                    })), [n]);
                    return (0, i.sY)({
                        ourProps: {
                            ref: o
                        },
                        theirProps: e,
                        slot: s,
                        defaultTag: "div",
                        name: "Tabs.Panels"
                    })
                })),
                A = i.AN.RenderStrategy | i.AN.Static,
                x = (0, i.yV)((function(e, t) {
                    var n, s, a;
                    let {
                        selectedIndex: l,
                        tabs: p,
                        panels: f
                    } = P("Tab.Panel"), h = T("Tab.Panel"), m = S("Tab.Panel"), v = `headlessui-tabs-panel-${(0,o.M)()}`, y = (0, r.useRef)(null), b = (0, c.T)(y, t);
                    (0, u.e)((() => h.registerPanel(y)), [h, y]);
                    let w = m.current.panels.indexOf(v); - 1 === w && (w = m.current.panels.push(v) - 1);
                    let g = f.indexOf(y); - 1 === g && (g = w);
                    let O = g === l,
                        E = (0, r.useMemo)((() => ({
                            selected: O
                        })), [O]),
                        I = e,
                        R = {
                            ref: b,
                            id: v,
                            role: "tabpanel",
                            "aria-labelledby": null == (s = null == (n = p[g]) ? void 0 : n.current) ? void 0 : s.id,
                            tabIndex: O ? 0 : -1
                        };
                    return O || null != (a = e.unmount) && !a ? (0, i.sY)({
                        ourProps: R,
                        theirProps: I,
                        slot: E,
                        defaultTag: "div",
                        features: A,
                        visible: O,
                        name: "Tabs.Panel"
                    }) : r.createElement(d._, {
                        as: "span",
                        ...R
                    })
                })),
                C = Object.assign(_, {
                    Group: R,
                    List: M,
                    Panels: k,
                    Panel: x
                })
        }
    }
]);
//# sourceMappingURL=6585-6afb1be93f4aea88.js.map