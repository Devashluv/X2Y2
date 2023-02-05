"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8915, 6029], {
        33587: function(e, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.DEFAULT_SIZE = 8, r.DEFAULT_SCALE = 4
        },
        67809: function(e, r, t) {
            function n(e) {
                for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            const a = t(63237);

            function u(e, r) {
                var t, n, u, l, o;
                const c = a.parseOptions(e || {});
                let i = a.createImageData(c.size),
                    s = Math.sqrt(i.length);
                r.width = r.height = c.size * c.scale;
                let d = r.getContext("2d");
                null === (t = d) || void 0 === t || (t.fillStyle = c.bgcolor), null === (n = d) || void 0 === n || n.fillRect(0, 0, r.width, r.height), null === (u = d) || void 0 === u || (u.fillStyle = c.color);
                for (let a = 0; a < i.length; a++)
                    if (i[a]) {
                        let e = Math.floor(a / s),
                            r = a % s;
                        null === (l = d) || void 0 === l || (l.fillStyle = 1 === i[a] ? c.color : c.spotcolor), null === (o = d) || void 0 === o || o.fillRect(r * c.scale, e * c.scale, c.scale, c.scale)
                    }
                return r
            }

            function l(e) {
                let r = document.createElement("canvas");
                return u(e, r), r
            }
            r.render = u, r.create = l, n(t(63237)), n(t(33587)), r.default = {
                create: l,
                render: u
            }
        },
        36719: function(e, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.randArr = new Array(4), r.seedRandomness = function(e) {
                let t;
                for (t = 0; t < r.randArr.length; t++) r.randArr[t] = 0;
                for (t = 0; t < e.length; t++) r.randArr[t % 4] = (r.randArr[t % 4] << 5) - r.randArr[t % 4] + e.charCodeAt(t)
            }, r.random = function() {
                let e = r.randArr[0] ^ r.randArr[0] << 11;
                return r.randArr[0] = r.randArr[1], r.randArr[1] = r.randArr[2], r.randArr[2] = r.randArr[3], r.randArr[3] = r.randArr[3] ^ r.randArr[3] >> 19 ^ e ^ e >> 8, (r.randArr[3] >>> 0) / (1 << 31 >>> 0)
            }
        },
        63237: function(e, r, t) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            const n = t(36719),
                a = t(33587);

            function u() {
                return "hsl(" + Math.floor(360 * n.random()) + "," + (60 * n.random() + 40 + "%") + "," + (25 * (n.random() + n.random() + n.random() + n.random()) + "%") + ")"
            }
            r.createColor = u, r.createImageData = function(e) {
                let r = e,
                    t = e,
                    a = Math.ceil(r / 2),
                    u = r - a,
                    l = [];
                for (let o = 0; o < t; o++) {
                    let e = [];
                    for (let t = 0; t < a; t++) e[t] = Math.floor(2.3 * n.random());
                    let r = e.slice(0, u);
                    r.reverse(), e = e.concat(r);
                    for (let t = 0; t < e.length; t++) l.push(e[t])
                }
                return l
            }, r.parseOptions = function(e) {
                const r = e.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);
                return n.seedRandomness(r), {
                    seed: r,
                    size: e.size || a.DEFAULT_SIZE,
                    scale: e.scale || a.DEFAULT_SCALE,
                    color: e.color || u(),
                    bgcolor: e.bgcolor || u(),
                    spotcolor: e.spotcolor || u()
                }
            }
        },
        47753: function(e, r, t) {
            t.d(r, {
                T: function() {
                    return a
                }
            });
            var n = t(94975);

            function a(e) {
                return (0, n.h)((function(r, t) {
                    return e <= t
                }))
            }
        },
        85769: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return l
                }
            });
            var n = t(67294);

            function a(e, r) {
                return e === r
            }

            function u(e) {
                return "function" === typeof e ? function() {
                    return e
                } : e
            }

            function l(e, r, t) {
                var l = t && t.equalityFn || a,
                    o = function(e) {
                        var r = (0, n.useState)(u(e)),
                            t = r[0],
                            a = r[1];
                        return [t, (0, n.useCallback)((function(e) {
                            return a(u(e))
                        }), [])]
                    }(e),
                    c = o[0],
                    i = o[1],
                    s = function(e, r, t) {
                        var a = this,
                            u = (0, n.useRef)(null),
                            l = (0, n.useRef)(0),
                            o = (0, n.useRef)(null),
                            c = (0, n.useRef)([]),
                            i = (0, n.useRef)(),
                            s = (0, n.useRef)(),
                            d = (0, n.useRef)(e),
                            f = (0, n.useRef)(!0);
                        d.current = e;
                        var p = !r && 0 !== r && "undefined" !== typeof window;
                        if ("function" !== typeof e) throw new TypeError("Expected a function");
                        r = +r || 0;
                        var b = !!(t = t || {}).leading,
                            v = !("trailing" in t) || !!t.trailing,
                            m = "maxWait" in t,
                            h = m ? Math.max(+t.maxWait || 0, r) : null;
                        (0, n.useEffect)((function() {
                            return f.current = !0,
                                function() {
                                    f.current = !1
                                }
                        }), []);
                        var T = (0, n.useMemo)((function() {
                            var e = function(e) {
                                    var r = c.current,
                                        t = i.current;
                                    return c.current = i.current = null, l.current = e, s.current = d.current.apply(t, r)
                                },
                                t = function(e, r) {
                                    p && cancelAnimationFrame(o.current), o.current = p ? requestAnimationFrame(e) : setTimeout(e, r)
                                },
                                n = function(e) {
                                    if (!f.current) return !1;
                                    var t = e - u.current,
                                        n = e - l.current;
                                    return !u.current || t >= r || t < 0 || m && n >= h
                                },
                                T = function(r) {
                                    return o.current = null, v && c.current ? e(r) : (c.current = i.current = null, s.current)
                                },
                                g = function() {
                                    var e = Date.now();
                                    if (n(e)) return T(e);
                                    if (f.current) {
                                        var a = e - u.current,
                                            o = e - l.current,
                                            c = r - a,
                                            i = m ? Math.min(c, h - o) : c;
                                        t(g, i)
                                    }
                                },
                                x = function() {
                                    for (var d = [], p = 0; p < arguments.length; p++) d[p] = arguments[p];
                                    var v = Date.now(),
                                        h = n(v);
                                    if (c.current = d, i.current = a, u.current = v, h) {
                                        if (!o.current && f.current) return l.current = u.current, t(g, r), b ? e(u.current) : s.current;
                                        if (m) return t(g, r), e(u.current)
                                    }
                                    return o.current || t(g, r), s.current
                                };
                            return x.cancel = function() {
                                o.current && (p ? cancelAnimationFrame(o.current) : clearTimeout(o.current)), l.current = 0, c.current = u.current = i.current = o.current = null
                            }, x.isPending = function() {
                                return !!o.current
                            }, x.flush = function() {
                                return o.current ? T(Date.now()) : s.current
                            }, x
                        }), [b, m, r, h, v, p]);
                        return T
                    }((0, n.useCallback)((function(e) {
                        return i(e)
                    }), [i]), r, t),
                    d = (0, n.useRef)(e);
                return l(d.current, e) || (s(e), d.current = e), [c, {
                    cancel: s.cancel,
                    isPending: s.isPending,
                    flush: s.flush
                }]
            }
        },
        33729: function(e, r, t) {
            t.d(r, {
                O: function() {
                    return D
                }
            });
            var n = t(67294),
                a = t(12351),
                u = t(54203),
                l = t(32984),
                o = t(61363),
                c = t(84575),
                i = t(16723),
                s = t(23784),
                d = t(14157),
                f = t(3855),
                p = t(46045);

            function b({
                onFocus: e
            }) {
                let [r, t] = (0, n.useState)(!0);
                return r ? n.createElement(p._, {
                    as: "button",
                    type: "button",
                    features: p.A.Focusable,
                    onFocus: r => {
                        r.preventDefault();
                        let n, a = 50;
                        n = requestAnimationFrame((function r() {
                            if (!(a-- <= 0)) return e() ? (t(!1), void cancelAnimationFrame(n)) : void(n = requestAnimationFrame(r));
                            n && cancelAnimationFrame(n)
                        }))
                    }
                }) : null
            }
            var v = t(73781);
            var m, h = ((m = h || {})[m.SetSelectedIndex = 0] = "SetSelectedIndex", m[m.RegisterTab = 1] = "RegisterTab", m[m.UnregisterTab = 2] = "UnregisterTab", m[m.RegisterPanel = 3] = "RegisterPanel", m[m.UnregisterPanel = 4] = "UnregisterPanel", m);
            let T = {
                    0(e, r) {
                        let t = e.tabs.filter((e => {
                            var r;
                            return !(null != (r = e.current) && r.hasAttribute("disabled"))
                        }));
                        if (r.index < 0) return { ...e,
                            selectedIndex: e.tabs.indexOf(t[0])
                        };
                        if (r.index > e.tabs.length) return { ...e,
                            selectedIndex: e.tabs.indexOf(t[t.length - 1])
                        };
                        let n = e.tabs.slice(0, r.index),
                            a = [...e.tabs.slice(r.index), ...n].find((e => t.includes(e)));
                        return a ? { ...e,
                            selectedIndex: e.tabs.indexOf(a)
                        } : e
                    },
                    1(e, r) {
                        var t;
                        if (e.tabs.includes(r.tab)) return e;
                        let n = e.tabs[e.selectedIndex],
                            a = (0, c.z2)([...e.tabs, r.tab], (e => e.current)),
                            u = null != (t = a.indexOf(n)) ? t : e.selectedIndex;
                        return -1 === u && (u = e.selectedIndex), { ...e,
                            tabs: a,
                            selectedIndex: u
                        }
                    },
                    2: (e, r) => ({ ...e,
                        tabs: e.tabs.filter((e => e !== r.tab))
                    }),
                    3: (e, r) => e.panels.includes(r.panel) ? e : { ...e,
                        panels: (0, c.z2)([...e.panels, r.panel], (e => e.current))
                    },
                    4: (e, r) => ({ ...e,
                        panels: e.panels.filter((e => e !== r.panel))
                    })
                },
                g = (0, n.createContext)(null);

            function x(e) {
                let r = (0, n.useContext)(g);
                if (null === r) {
                    let r = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(r, x), r
                }
                return r
            }
            g.displayName = "TabsSSRContext";
            let A = (0, n.createContext)(null);

            function y(e) {
                let r = (0, n.useContext)(A);
                if (null === r) {
                    let r = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(r, y), r
                }
                return r
            }
            A.displayName = "TabsDataContext";
            let P = (0, n.createContext)(null);

            function E(e) {
                let r = (0, n.useContext)(P);
                if (null === r) {
                    let r = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(r, E), r
                }
                return r
            }

            function R(e, r) {
                return (0, l.E)(r.type, T, e, r)
            }
            P.displayName = "TabsActionsContext";
            let w = n.Fragment,
                I = (0, a.yV)((function(e, r) {
                    let {
                        defaultIndex: t = 0,
                        vertical: u = !1,
                        manual: l = !1,
                        onChange: o,
                        selectedIndex: c = null,
                        ...d
                    } = e;
                    const p = u ? "vertical" : "horizontal",
                        v = l ? "manual" : "auto";
                    let m = null !== c,
                        h = (0, s.T)(r),
                        [T, x] = (0, n.useReducer)(R, {
                            selectedIndex: null != c ? c : t,
                            tabs: [],
                            panels: []
                        }),
                        y = (0, n.useMemo)((() => ({
                            selectedIndex: T.selectedIndex
                        })), [T.selectedIndex]),
                        E = (0, f.E)(o || (() => {})),
                        I = (0, f.E)(T.tabs),
                        O = (0, n.useMemo)((() => ({
                            orientation: p,
                            activation: v,
                            ...T
                        })), [p, v, T]),
                        M = (0, f.E)(m ? e.selectedIndex : T.selectedIndex),
                        S = (0, n.useMemo)((() => ({
                            registerTab: e => (x({
                                type: 1,
                                tab: e
                            }), () => x({
                                type: 2,
                                tab: e
                            })),
                            registerPanel: e => (x({
                                type: 3,
                                panel: e
                            }), () => x({
                                type: 4,
                                panel: e
                            })),
                            change(e) {
                                M.current !== e && E.current(e), m || x({
                                    type: 0,
                                    index: e
                                })
                            }
                        })), [x, m]);
                    (0, i.e)((() => {
                        x({
                            type: 0,
                            index: null != c ? c : t
                        })
                    }), [c]);
                    let k = (0, n.useRef)({
                            tabs: [],
                            panels: []
                        }),
                        C = {
                            ref: h
                        };
                    return n.createElement(g.Provider, {
                        value: k
                    }, n.createElement(P.Provider, {
                        value: S
                    }, n.createElement(A.Provider, {
                        value: O
                    }, O.tabs.length <= 0 && n.createElement(b, {
                        onFocus: () => {
                            var e, r;
                            for (let t of I.current)
                                if (0 === (null == (e = t.current) ? void 0 : e.tabIndex)) return null == (r = t.current) || r.focus(), !0;
                            return !1
                        }
                    }), (0, a.sY)({
                        ourProps: C,
                        theirProps: d,
                        slot: y,
                        defaultTag: w,
                        name: "Tabs"
                    }))))
                })),
                O = (0, a.yV)((function(e, r) {
                    let {
                        orientation: t,
                        selectedIndex: n
                    } = y("Tab.List"), u = (0, s.T)(r);
                    return (0, a.sY)({
                        ourProps: {
                            ref: u,
                            role: "tablist",
                            "aria-orientation": t
                        },
                        theirProps: e,
                        slot: {
                            selectedIndex: n
                        },
                        defaultTag: "div",
                        name: "Tabs.List"
                    })
                })),
                M = (0, a.yV)((function(e, r) {
                    var t, f;
                    let p = `headlessui-tabs-tab-${(0,u.M)()}`,
                        {
                            orientation: b,
                            activation: m,
                            selectedIndex: h,
                            tabs: T,
                            panels: g
                        } = y("Tab"),
                        A = E("Tab"),
                        P = x("Tab"),
                        R = (0, n.useRef)(null),
                        w = (0, s.T)(R, r);
                    (0, i.e)((() => A.registerTab(R)), [A, R]);
                    let I = P.current.tabs.indexOf(p); - 1 === I && (I = P.current.tabs.push(p) - 1);
                    let O = T.indexOf(R); - 1 === O && (O = I);
                    let M = O === h,
                        S = (0, v.z)((e => {
                            let r = T.map((e => e.current)).filter(Boolean);
                            if (e.key === o.R.Space || e.key === o.R.Enter) return e.preventDefault(), e.stopPropagation(), void A.change(O);
                            switch (e.key) {
                                case o.R.Home:
                                case o.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), (0, c.jA)(r, c.TO.First);
                                case o.R.End:
                                case o.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), (0, c.jA)(r, c.TO.Last)
                            }
                            return (0, l.E)(b, {
                                vertical: () => e.key === o.R.ArrowUp ? (0, c.jA)(r, c.TO.Previous | c.TO.WrapAround) : e.key === o.R.ArrowDown ? (0, c.jA)(r, c.TO.Next | c.TO.WrapAround) : void 0,
                                horizontal: () => e.key === o.R.ArrowLeft ? (0, c.jA)(r, c.TO.Previous | c.TO.WrapAround) : e.key === o.R.ArrowRight ? (0, c.jA)(r, c.TO.Next | c.TO.WrapAround) : void 0
                            }) ? e.preventDefault() : void 0
                        })),
                        k = (0, v.z)((() => {
                            var e;
                            null == (e = R.current) || e.focus()
                        })),
                        C = (0, n.useRef)(!1),
                        D = (0, v.z)((() => {
                            var e, r;
                            C.current || (C.current = !0, null == (e = R.current) || e.focus(), A.change(O), r = () => {
                                C.current = !1
                            }, "function" == typeof queueMicrotask ? queueMicrotask(r) : Promise.resolve().then(r).catch((e => setTimeout((() => {
                                throw e
                            })))))
                        })),
                        F = (0, v.z)((e => {
                            e.preventDefault()
                        })),
                        _ = (0, n.useMemo)((() => ({
                            selected: M
                        })), [M]),
                        z = e,
                        j = {
                            ref: w,
                            onKeyDown: S,
                            onFocus: "manual" === m ? k : D,
                            onMouseDown: F,
                            onClick: D,
                            id: p,
                            role: "tab",
                            type: (0, d.f)(e, R),
                            "aria-controls": null == (f = null == (t = g[O]) ? void 0 : t.current) ? void 0 : f.id,
                            "aria-selected": M,
                            tabIndex: M ? 0 : -1
                        };
                    return (0, a.sY)({
                        ourProps: j,
                        theirProps: z,
                        slot: _,
                        defaultTag: "button",
                        name: "Tabs.Tab"
                    })
                })),
                S = (0, a.yV)((function(e, r) {
                    let {
                        selectedIndex: t
                    } = y("Tab.Panels"), u = (0, s.T)(r), l = (0, n.useMemo)((() => ({
                        selectedIndex: t
                    })), [t]);
                    return (0, a.sY)({
                        ourProps: {
                            ref: u
                        },
                        theirProps: e,
                        slot: l,
                        defaultTag: "div",
                        name: "Tabs.Panels"
                    })
                })),
                k = a.AN.RenderStrategy | a.AN.Static,
                C = (0, a.yV)((function(e, r) {
                    var t, l, o;
                    let {
                        selectedIndex: c,
                        tabs: d,
                        panels: f
                    } = y("Tab.Panel"), b = E("Tab.Panel"), v = x("Tab.Panel"), m = `headlessui-tabs-panel-${(0,u.M)()}`, h = (0, n.useRef)(null), T = (0, s.T)(h, r);
                    (0, i.e)((() => b.registerPanel(h)), [b, h]);
                    let g = v.current.panels.indexOf(m); - 1 === g && (g = v.current.panels.push(m) - 1);
                    let A = f.indexOf(h); - 1 === A && (A = g);
                    let P = A === c,
                        R = (0, n.useMemo)((() => ({
                            selected: P
                        })), [P]),
                        w = e,
                        I = {
                            ref: T,
                            id: m,
                            role: "tabpanel",
                            "aria-labelledby": null == (l = null == (t = d[A]) ? void 0 : t.current) ? void 0 : l.id,
                            tabIndex: P ? 0 : -1
                        };
                    return P || null != (o = e.unmount) && !o ? (0, a.sY)({
                        ourProps: I,
                        theirProps: w,
                        slot: R,
                        defaultTag: "div",
                        features: k,
                        visible: P,
                        name: "Tabs.Panel"
                    }) : n.createElement(p._, {
                        as: "span",
                        ...I
                    })
                })),
                D = Object.assign(M, {
                    Group: I,
                    List: O,
                    Panels: S,
                    Panel: C
                })
        }
    }
]);
//# sourceMappingURL=8915-3dcc3898938e8721.js.map