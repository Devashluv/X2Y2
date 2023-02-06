(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9564], {
        33587: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_SIZE = 8, t.DEFAULT_SCALE = 4
        },
        67809: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const a = r(63237);

            function l(e, t) {
                var r, n, l, o, s;
                const i = a.parseOptions(e || {});
                let c = a.createImageData(i.size),
                    u = Math.sqrt(c.length);
                t.width = t.height = i.size * i.scale;
                let d = t.getContext("2d");
                null === (r = d) || void 0 === r || (r.fillStyle = i.bgcolor), null === (n = d) || void 0 === n || n.fillRect(0, 0, t.width, t.height), null === (l = d) || void 0 === l || (l.fillStyle = i.color);
                for (let a = 0; a < c.length; a++)
                    if (c[a]) {
                        let e = Math.floor(a / u),
                            t = a % u;
                        null === (o = d) || void 0 === o || (o.fillStyle = 1 === c[a] ? i.color : i.spotcolor), null === (s = d) || void 0 === s || s.fillRect(t * i.scale, e * i.scale, i.scale, i.scale)
                    }
                return t
            }

            function o(e) {
                let t = document.createElement("canvas");
                return l(e, t), t
            }
            t.render = l, t.create = o, n(r(63237)), n(r(33587)), t.default = {
                create: o,
                render: l
            }
        },
        36719: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randArr = new Array(4), t.seedRandomness = function(e) {
                let r;
                for (r = 0; r < t.randArr.length; r++) t.randArr[r] = 0;
                for (r = 0; r < e.length; r++) t.randArr[r % 4] = (t.randArr[r % 4] << 5) - t.randArr[r % 4] + e.charCodeAt(r)
            }, t.random = function() {
                let e = t.randArr[0] ^ t.randArr[0] << 11;
                return t.randArr[0] = t.randArr[1], t.randArr[1] = t.randArr[2], t.randArr[2] = t.randArr[3], t.randArr[3] = t.randArr[3] ^ t.randArr[3] >> 19 ^ e ^ e >> 8, (t.randArr[3] >>> 0) / (1 << 31 >>> 0)
            }
        },
        63237: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(36719),
                a = r(33587);

            function l() {
                return "hsl(" + Math.floor(360 * n.random()) + "," + (60 * n.random() + 40 + "%") + "," + (25 * (n.random() + n.random() + n.random() + n.random()) + "%") + ")"
            }
            t.createColor = l, t.createImageData = function(e) {
                let t = e,
                    r = e,
                    a = Math.ceil(t / 2),
                    l = t - a,
                    o = [];
                for (let s = 0; s < r; s++) {
                    let e = [];
                    for (let r = 0; r < a; r++) e[r] = Math.floor(2.3 * n.random());
                    let t = e.slice(0, l);
                    t.reverse(), e = e.concat(t);
                    for (let r = 0; r < e.length; r++) o.push(e[r])
                }
                return o
            }, t.parseOptions = function(e) {
                const t = e.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);
                return n.seedRandomness(t), {
                    seed: t,
                    size: e.size || a.DEFAULT_SIZE,
                    scale: e.scale || a.DEFAULT_SCALE,
                    color: e.color || l(),
                    bgcolor: e.bgcolor || l(),
                    spotcolor: e.spotcolor || l()
                }
            }
        },
        54673: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/collections", function() {
                return r(3782)
            }])
        },
        68662: function(e, t, r) {
            "use strict";
            r.d(t, {
                A: function() {
                    return c
                }
            });
            var n = r(85893),
                a = r(33729),
                l = r(86010),
                o = r(67294),
                s = r(46243),
                i = r(34071),
                c = function(e) {
                    var t = e.className,
                        r = e.options,
                        c = e.selected,
                        u = e.href,
                        d = e.scrollPageOnChange,
                        p = (0, o.useState)(r.findIndex((function(e) {
                            return e.key === c
                        }))),
                        f = p[0],
                        b = p[1];
                    return (0, n.jsx)(a.O.Group, {
                        selectedIndex: f,
                        onChange: function(e) {
                            return b(e)
                        },
                        children: (0, n.jsx)(i.t, {
                            className: (0, l.Z)(t, "px-6 lg:px-8"),
                            children: r.map((function(e, t) {
                                var r = e.key,
                                    l = e.title,
                                    i = e.badge,
                                    c = f === t;
                                return (0, n.jsx)(a.O, {
                                    as: o.Fragment,
                                    children: function(e) {
                                        var t = e.selected;
                                        return (0, n.jsxs)(s.Z, {
                                            className: "ts-button-2 lg:ts-button-1 relative shrink-0 px-3 py-3 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ui-not-selected:text-gray-500 lg:px-4 lg:py-3",
                                            hoverStyle: "none",
                                            href: u(r),
                                            scroll: d,
                                            children: [l, i && !c && (0, n.jsx)("span", {
                                                className: "absolute top-0.5 right-0 h-2 w-2 rounded-full bg-primary-4"
                                            }), t && (0, n.jsx)("div", {
                                                className: "absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
                                            })]
                                        })
                                    }
                                }, t)
                            }))
                        })
                    })
                }
        },
        3782: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return y
                },
                default: function() {
                    return T
                }
            });
            var n = r(828),
                a = r(85893),
                l = r(23641),
                o = r(67294),
                s = r(8653),
                i = r(49296),
                c = r(68662),
                u = r(43788),
                d = r(76875),
                p = r(86010),
                f = r(24717),
                b = function(e) {
                    var t = e.className,
                        r = e.page,
                        n = e.pageSize,
                        l = e.total,
                        o = e.buttonTitle,
                        s = e.onPageChange,
                        i = Math.floor((l + n - 1) / n),
                        c = function(e, t) {
                            return (0, a.jsxs)("button", {
                                className: "ts-button-2 flex items-center gap-2 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-200",
                                onClick: function() {
                                    return s(e)
                                },
                                children: ["left" === t && (0, a.jsx)(f.bZH, {
                                    className: "-ml-2 h-6 w-6"
                                }), o(e), "right" === t && (0, a.jsx)(f.kSI, {
                                    className: "-mr-2 h-6 w-6"
                                })]
                            })
                        };
                    return (0, a.jsxs)("nav", {
                        className: (0, p.Z)(t, "flex flex-wrap gap-4"),
                        children: [r > 1 && c(r - 1, "left"), r < i && c(r + 1, "right")]
                    })
                },
                g = r(90862),
                m = r(51126),
                x = r(18638),
                h = r(40568),
                v = function(e) {
                    var t, r = e.platform,
                        n = e.orderBy,
                        l = e.isOverall,
                        i = e.setOrderBy,
                        c = (0, o.useState)(1),
                        u = c[0],
                        d = c[1],
                        p = 100,
                        f = (0, x.m9)({
                            platform: r,
                            orderBy: n,
                            page: u,
                            pageSize: p
                        }),
                        g = f.data,
                        m = f.error,
                        h = f.isValidating;
                    return (0, a.jsx)(s.P, {
                        className: "px-3 py-4 lg:p-8",
                        query: {
                            order: n,
                            sort: "desc"
                        },
                        data: g,
                        error: m,
                        isValidating: h,
                        isOverall: l,
                        setOrderBy: i,
                        children: (0, a.jsx)(b, {
                            className: "mt-6 justify-center",
                            page: u,
                            pageSize: p,
                            total: null !== (t = null === g || void 0 === g ? void 0 : g.total) && void 0 !== t ? t : 0,
                            buttonTitle: function(e) {
                                return "".concat((e - 1) * p + 1, "~").concat(e * p)
                            },
                            onPageChange: function(e) {
                                window.scrollTo({
                                    top: 0
                                }), d(e)
                            }
                        })
                    })
                },
                y = !0,
                T = function(e) {
                    var t = e.query,
                        r = (0, l.$G)().t,
                        o = r("Collections"),
                        s = r("With trading volume, floor price and etc., you can find the most trending NFTs here."),
                        p = [{
                            key: "top",
                            title: r("Top")
                        }, {
                            key: "x2y2",
                            title: "X2Y2"
                        }, {
                            key: "opensea",
                            title: "OpenSea"
                        }, {
                            key: "looksrare",
                            title: "LooksRare"
                        }],
                        f = "top" === t.tab,
                        b = f ? "overall" : t.tab,
                        x = (0, n.Z)((0, h._)(), 2),
                        y = x[0],
                        T = x[1],
                        A = (0, n.Z)(y.split("_"), 2),
                        P = A[0],
                        O = A[1];
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(d.p, {
                            title: o,
                            description: s,
                            image: (0, m.VB)(g.c1.og, 1440)
                        }), (0, a.jsxs)(u.j, {
                            children: [(0, a.jsxs)("header", {
                                className: "px-6 py-8 lg:px-8",
                                children: [(0, a.jsx)("h1", {
                                    className: "ts-headline-5 lg:ts-headline-3",
                                    children: o
                                }), (0, a.jsx)("p", {
                                    className: "ts-body-3 lg:ts-body-2 mt-4 text-gray-500",
                                    children: s
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "grid grid-cols-1 gap-6 px-6 lg:grid-cols-[minmax(0,1fr)_min-content] lg:px-8",
                                children: [(0, a.jsx)(c.A, {
                                    className: "!px-0",
                                    options: p,
                                    selected: t.tab,
                                    href: function(e) {
                                        return "/collections" + ("top" === e ? "" : "?tab=".concat(e))
                                    }
                                }), (0, a.jsx)(i.X$, {
                                    options: ["5m", "15m", "1h", "1d", "7d"],
                                    selected: O,
                                    onSelect: function(e) {
                                        return T("".concat(P, "_").concat(e))
                                    }
                                })]
                            }), (0, a.jsx)(v, {
                                platform: b,
                                orderBy: y,
                                setOrderBy: T,
                                isOverall: f
                            }, t.tab)]
                        })]
                    })
                }
        },
        33729: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return R
                }
            });
            var n = r(67294),
                a = r(12351),
                l = r(54203),
                o = r(32984),
                s = r(61363),
                i = r(84575),
                c = r(16723),
                u = r(23784),
                d = r(14157),
                p = r(3855),
                f = r(46045);

            function b({
                onFocus: e
            }) {
                let [t, r] = (0, n.useState)(!0);
                return t ? n.createElement(f._, {
                    as: "button",
                    type: "button",
                    features: f.A.Focusable,
                    onFocus: t => {
                        t.preventDefault();
                        let n, a = 50;
                        n = requestAnimationFrame((function t() {
                            if (!(a-- <= 0)) return e() ? (r(!1), void cancelAnimationFrame(n)) : void(n = requestAnimationFrame(t));
                            n && cancelAnimationFrame(n)
                        }))
                    }
                }) : null
            }
            var g = r(73781);
            var m, x = ((m = x || {})[m.SetSelectedIndex = 0] = "SetSelectedIndex", m[m.RegisterTab = 1] = "RegisterTab", m[m.UnregisterTab = 2] = "UnregisterTab", m[m.RegisterPanel = 3] = "RegisterPanel", m[m.UnregisterPanel = 4] = "UnregisterPanel", m);
            let h = {
                    0(e, t) {
                        let r = e.tabs.filter((e => {
                            var t;
                            return !(null != (t = e.current) && t.hasAttribute("disabled"))
                        }));
                        if (t.index < 0) return { ...e,
                            selectedIndex: e.tabs.indexOf(r[0])
                        };
                        if (t.index > e.tabs.length) return { ...e,
                            selectedIndex: e.tabs.indexOf(r[r.length - 1])
                        };
                        let n = e.tabs.slice(0, t.index),
                            a = [...e.tabs.slice(t.index), ...n].find((e => r.includes(e)));
                        return a ? { ...e,
                            selectedIndex: e.tabs.indexOf(a)
                        } : e
                    },
                    1(e, t) {
                        var r;
                        if (e.tabs.includes(t.tab)) return e;
                        let n = e.tabs[e.selectedIndex],
                            a = (0, i.z2)([...e.tabs, t.tab], (e => e.current)),
                            l = null != (r = a.indexOf(n)) ? r : e.selectedIndex;
                        return -1 === l && (l = e.selectedIndex), { ...e,
                            tabs: a,
                            selectedIndex: l
                        }
                    },
                    2: (e, t) => ({ ...e,
                        tabs: e.tabs.filter((e => e !== t.tab))
                    }),
                    3: (e, t) => e.panels.includes(t.panel) ? e : { ...e,
                        panels: (0, i.z2)([...e.panels, t.panel], (e => e.current))
                    },
                    4: (e, t) => ({ ...e,
                        panels: e.panels.filter((e => e !== t.panel))
                    })
                },
                v = (0, n.createContext)(null);

            function y(e) {
                let t = (0, n.useContext)(v);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, y), t
                }
                return t
            }
            v.displayName = "TabsSSRContext";
            let T = (0, n.createContext)(null);

            function A(e) {
                let t = (0, n.useContext)(T);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, A), t
                }
                return t
            }
            T.displayName = "TabsDataContext";
            let P = (0, n.createContext)(null);

            function O(e) {
                let t = (0, n.useContext)(P);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, O), t
                }
                return t
            }

            function E(e, t) {
                return (0, o.E)(t.type, h, e, t)
            }
            P.displayName = "TabsActionsContext";
            let j = n.Fragment,
                S = (0, a.yV)((function(e, t) {
                    let {
                        defaultIndex: r = 0,
                        vertical: l = !1,
                        manual: o = !1,
                        onChange: s,
                        selectedIndex: i = null,
                        ...d
                    } = e;
                    const f = l ? "vertical" : "horizontal",
                        g = o ? "manual" : "auto";
                    let m = null !== i,
                        x = (0, u.T)(t),
                        [h, y] = (0, n.useReducer)(E, {
                            selectedIndex: null != i ? i : r,
                            tabs: [],
                            panels: []
                        }),
                        A = (0, n.useMemo)((() => ({
                            selectedIndex: h.selectedIndex
                        })), [h.selectedIndex]),
                        O = (0, p.E)(s || (() => {})),
                        S = (0, p.E)(h.tabs),
                        w = (0, n.useMemo)((() => ({
                            orientation: f,
                            activation: g,
                            ...h
                        })), [f, g, h]),
                        I = (0, p.E)(m ? e.selectedIndex : h.selectedIndex),
                        _ = (0, n.useMemo)((() => ({
                            registerTab: e => (y({
                                type: 1,
                                tab: e
                            }), () => y({
                                type: 2,
                                tab: e
                            })),
                            registerPanel: e => (y({
                                type: 3,
                                panel: e
                            }), () => y({
                                type: 4,
                                panel: e
                            })),
                            change(e) {
                                I.current !== e && O.current(e), m || y({
                                    type: 0,
                                    index: e
                                })
                            }
                        })), [y, m]);
                    (0, c.e)((() => {
                        y({
                            type: 0,
                            index: null != i ? i : r
                        })
                    }), [i]);
                    let k = (0, n.useRef)({
                            tabs: [],
                            panels: []
                        }),
                        N = {
                            ref: x
                        };
                    return n.createElement(v.Provider, {
                        value: k
                    }, n.createElement(P.Provider, {
                        value: _
                    }, n.createElement(T.Provider, {
                        value: w
                    }, w.tabs.length <= 0 && n.createElement(b, {
                        onFocus: () => {
                            var e, t;
                            for (let r of S.current)
                                if (0 === (null == (e = r.current) ? void 0 : e.tabIndex)) return null == (t = r.current) || t.focus(), !0;
                            return !1
                        }
                    }), (0, a.sY)({
                        ourProps: N,
                        theirProps: d,
                        slot: A,
                        defaultTag: j,
                        name: "Tabs"
                    }))))
                })),
                w = (0, a.yV)((function(e, t) {
                    let {
                        orientation: r,
                        selectedIndex: n
                    } = A("Tab.List"), l = (0, u.T)(t);
                    return (0, a.sY)({
                        ourProps: {
                            ref: l,
                            role: "tablist",
                            "aria-orientation": r
                        },
                        theirProps: e,
                        slot: {
                            selectedIndex: n
                        },
                        defaultTag: "div",
                        name: "Tabs.List"
                    })
                })),
                I = (0, a.yV)((function(e, t) {
                    var r, p;
                    let f = `headlessui-tabs-tab-${(0,l.M)()}`,
                        {
                            orientation: b,
                            activation: m,
                            selectedIndex: x,
                            tabs: h,
                            panels: v
                        } = A("Tab"),
                        T = O("Tab"),
                        P = y("Tab"),
                        E = (0, n.useRef)(null),
                        j = (0, u.T)(E, t);
                    (0, c.e)((() => T.registerTab(E)), [T, E]);
                    let S = P.current.tabs.indexOf(f); - 1 === S && (S = P.current.tabs.push(f) - 1);
                    let w = h.indexOf(E); - 1 === w && (w = S);
                    let I = w === x,
                        _ = (0, g.z)((e => {
                            let t = h.map((e => e.current)).filter(Boolean);
                            if (e.key === s.R.Space || e.key === s.R.Enter) return e.preventDefault(), e.stopPropagation(), void T.change(w);
                            switch (e.key) {
                                case s.R.Home:
                                case s.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), (0, i.jA)(t, i.TO.First);
                                case s.R.End:
                                case s.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), (0, i.jA)(t, i.TO.Last)
                            }
                            return (0, o.E)(b, {
                                vertical: () => e.key === s.R.ArrowUp ? (0, i.jA)(t, i.TO.Previous | i.TO.WrapAround) : e.key === s.R.ArrowDown ? (0, i.jA)(t, i.TO.Next | i.TO.WrapAround) : void 0,
                                horizontal: () => e.key === s.R.ArrowLeft ? (0, i.jA)(t, i.TO.Previous | i.TO.WrapAround) : e.key === s.R.ArrowRight ? (0, i.jA)(t, i.TO.Next | i.TO.WrapAround) : void 0
                            }) ? e.preventDefault() : void 0
                        })),
                        k = (0, g.z)((() => {
                            var e;
                            null == (e = E.current) || e.focus()
                        })),
                        N = (0, n.useRef)(!1),
                        R = (0, g.z)((() => {
                            var e, t;
                            N.current || (N.current = !0, null == (e = E.current) || e.focus(), T.change(w), t = () => {
                                N.current = !1
                            }, "function" == typeof queueMicrotask ? queueMicrotask(t) : Promise.resolve().then(t).catch((e => setTimeout((() => {
                                throw e
                            })))))
                        })),
                        C = (0, g.z)((e => {
                            e.preventDefault()
                        })),
                        M = (0, n.useMemo)((() => ({
                            selected: I
                        })), [I]),
                        F = e,
                        D = {
                            ref: j,
                            onKeyDown: _,
                            onFocus: "manual" === m ? k : R,
                            onMouseDown: C,
                            onClick: R,
                            id: f,
                            role: "tab",
                            type: (0, d.f)(e, E),
                            "aria-controls": null == (p = null == (r = v[w]) ? void 0 : r.current) ? void 0 : p.id,
                            "aria-selected": I,
                            tabIndex: I ? 0 : -1
                        };
                    return (0, a.sY)({
                        ourProps: D,
                        theirProps: F,
                        slot: M,
                        defaultTag: "button",
                        name: "Tabs.Tab"
                    })
                })),
                _ = (0, a.yV)((function(e, t) {
                    let {
                        selectedIndex: r
                    } = A("Tab.Panels"), l = (0, u.T)(t), o = (0, n.useMemo)((() => ({
                        selectedIndex: r
                    })), [r]);
                    return (0, a.sY)({
                        ourProps: {
                            ref: l
                        },
                        theirProps: e,
                        slot: o,
                        defaultTag: "div",
                        name: "Tabs.Panels"
                    })
                })),
                k = a.AN.RenderStrategy | a.AN.Static,
                N = (0, a.yV)((function(e, t) {
                    var r, o, s;
                    let {
                        selectedIndex: i,
                        tabs: d,
                        panels: p
                    } = A("Tab.Panel"), b = O("Tab.Panel"), g = y("Tab.Panel"), m = `headlessui-tabs-panel-${(0,l.M)()}`, x = (0, n.useRef)(null), h = (0, u.T)(x, t);
                    (0, c.e)((() => b.registerPanel(x)), [b, x]);
                    let v = g.current.panels.indexOf(m); - 1 === v && (v = g.current.panels.push(m) - 1);
                    let T = p.indexOf(x); - 1 === T && (T = v);
                    let P = T === i,
                        E = (0, n.useMemo)((() => ({
                            selected: P
                        })), [P]),
                        j = e,
                        S = {
                            ref: h,
                            id: m,
                            role: "tabpanel",
                            "aria-labelledby": null == (o = null == (r = d[T]) ? void 0 : r.current) ? void 0 : o.id,
                            tabIndex: P ? 0 : -1
                        };
                    return P || null != (s = e.unmount) && !s ? (0, a.sY)({
                        ourProps: S,
                        theirProps: j,
                        slot: E,
                        defaultTag: "div",
                        features: k,
                        visible: P,
                        name: "Tabs.Panel"
                    }) : n.createElement(f._, {
                        as: "span",
                        ...S
                    })
                })),
                R = Object.assign(I, {
                    Group: S,
                    List: w,
                    Panels: _,
                    Panel: N
                })
        }
    },
    function(e) {
        e.O(0, [3788, 1925, 9774, 2888, 179], (function() {
            return t = 54673, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=collections-f7a99db0f5717808.js.map