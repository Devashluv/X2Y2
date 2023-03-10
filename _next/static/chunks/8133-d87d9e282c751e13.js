"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8133], {
        68133: function(e, n, a) {
            a.d(n, {
                O: function() {
                    return D
                },
                XZ: function() {
                    return M
                },
                cO: function() {
                    return p
                }
            });
            var t = a(19703),
                i = a(26450),
                o = a(67294),
                r = a(44697),
                c = a(97375),
                l = a(23256),
                s = a(64315),
                u = a(21190),
                d = a(79762),
                h = a(1358);

            function v() {
                return v = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var a = arguments[n];
                        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                    }
                    return e
                }, v.apply(this, arguments)
            }
            var f = (0, i.kr)({
                    name: "CheckboxGroupContext",
                    strict: !1
                }),
                k = f[0],
                b = f[1],
                p = function(e) {
                    var n = e.colorScheme,
                        a = e.size,
                        i = e.variant,
                        l = e.children,
                        s = e.isDisabled,
                        u = function(e) {
                            void 0 === e && (e = {});
                            var n = e,
                                a = n.defaultValue,
                                i = n.value,
                                l = n.onChange,
                                s = n.isDisabled,
                                u = n.isNative,
                                d = (0, r.u)(l),
                                h = (0, c.Tx)({
                                    value: i,
                                    defaultValue: a || [],
                                    onChange: d
                                }),
                                f = h[0],
                                k = h[1],
                                b = (0, o.useCallback)((function(e) {
                                    if (f) {
                                        var n = (0, t.kA)(e) ? e.target.checked : !f.includes(e),
                                            a = (0, t.kA)(e) ? e.target.value : e,
                                            i = n ? (0, t.jX)(f, a) : f.filter((function(e) {
                                                return String(e) !== String(a)
                                            }));
                                        k(i)
                                    }
                                }), [k, f]),
                                p = (0, o.useCallback)((function(e) {
                                    var n;
                                    return void 0 === e && (e = {}), v({}, e, ((n = {})[u ? "checked" : "isChecked"] = f.some((function(n) {
                                        return String(e.value) === String(n)
                                    })), n.onChange = b, n))
                                }), [b, u, f]);
                            return {
                                value: f,
                                isDisabled: s,
                                onChange: b,
                                setValue: k,
                                getCheckboxProps: p
                            }
                        }(e),
                        d = u.value,
                        h = u.onChange,
                        f = o.useMemo((function() {
                            return {
                                size: a,
                                onChange: h,
                                colorScheme: n,
                                value: d,
                                variant: i,
                                isDisabled: s
                            }
                        }), [a, h, n, d, i, s]);
                    return o.createElement(k, {
                        value: f
                    }, l)
                };

            function m(e, n) {
                if (null == e) return {};
                var a, t, i = {},
                    o = Object.keys(e);
                for (t = 0; t < o.length; t++) a = o[t], n.indexOf(a) >= 0 || (i[a] = e[a]);
                return i
            }
            t.Ts && (p.displayName = "CheckboxGroup");
            var C = ["isIndeterminate", "isChecked"];
            var g = function(e) {
                    var n = s.E;
                    return "custom" in n && "function" === typeof n.custom ? n.custom(e) : n(e)
                }(l.m$.svg),
                y = function(e) {
                    return o.createElement(g, v({
                        width: "1.2em",
                        viewBox: "0 0 12 10",
                        variants: {
                            unchecked: {
                                opacity: 0,
                                strokeDashoffset: 16
                            },
                            checked: {
                                opacity: 1,
                                strokeDashoffset: 0,
                                transition: {
                                    duration: .2
                                }
                            }
                        },
                        style: {
                            fill: "none",
                            strokeWidth: 2,
                            stroke: "currentColor",
                            strokeDasharray: 16
                        }
                    }, e), o.createElement("polyline", {
                        points: "1.5 6 4.5 9 10.5 1"
                    }))
                },
                P = function(e) {
                    return o.createElement(g, v({
                        width: "1.2em",
                        viewBox: "0 0 24 24",
                        variants: {
                            unchecked: {
                                scaleX: .65,
                                opacity: 0
                            },
                            checked: {
                                scaleX: 1,
                                opacity: 1,
                                transition: {
                                    scaleX: {
                                        duration: 0
                                    },
                                    opacity: {
                                        duration: .02
                                    }
                                }
                            }
                        },
                        style: {
                            stroke: "currentColor",
                            strokeWidth: 4
                        }
                    }, e), o.createElement("line", {
                        x1: "21",
                        x2: "3",
                        y1: "12",
                        y2: "12"
                    }))
                },
                x = function(e) {
                    var n = e.open,
                        a = e.children;
                    return o.createElement(u.M, {
                        initial: !1
                    }, n && o.createElement(s.E.div, {
                        variants: {
                            unchecked: {
                                scale: .5
                            },
                            checked: {
                                scale: 1
                            }
                        },
                        initial: "unchecked",
                        animate: "checked",
                        exit: "unchecked",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%"
                        }
                    }, a))
                },
                I = function(e) {
                    var n = e.isIndeterminate,
                        a = e.isChecked,
                        t = m(e, C),
                        i = n ? P : y;
                    return o.createElement(x, {
                        open: a || n
                    }, o.createElement(i, t))
                },
                B = ["defaultIsChecked", "defaultChecked", "isChecked", "isFocusable", "onChange", "isIndeterminate", "name", "value", "tabIndex", "aria-label", "aria-labelledby", "aria-invalid"];

            function D(e) {
                void 0 === e && (e = {});
                var n = (0, d.Kn)(e),
                    a = n.isDisabled,
                    l = n.isReadOnly,
                    s = n.isRequired,
                    u = n.isInvalid,
                    f = n.id,
                    k = n.onBlur,
                    b = n.onFocus,
                    p = n["aria-describedby"],
                    C = e,
                    g = C.defaultIsChecked,
                    y = C.defaultChecked,
                    P = void 0 === y ? g : y,
                    x = C.isChecked,
                    I = C.isFocusable,
                    D = C.onChange,
                    _ = C.isIndeterminate,
                    S = C.name,
                    w = C.value,
                    M = C.tabIndex,
                    N = void 0 === M ? void 0 : M,
                    O = C["aria-label"],
                    R = C["aria-labelledby"],
                    L = C["aria-invalid"],
                    T = m(C, B),
                    j = (0, t.CE)(T, ["isDisabled", "isReadOnly", "isRequired", "isInvalid", "id", "onBlur", "onFocus", "aria-describedby"]),
                    F = (0, r.u)(D),
                    q = (0, r.u)(k),
                    A = (0, r.u)(b),
                    K = (0, c.kt)(),
                    z = K[0],
                    X = K[1],
                    U = (0, c.kt)(),
                    $ = U[0],
                    G = U[1],
                    V = (0, c.kt)(),
                    W = V[0],
                    Z = V[1],
                    H = (0, o.useRef)(null),
                    Y = (0, o.useState)(!0),
                    J = Y[0],
                    Q = Y[1],
                    ee = (0, o.useState)(!!P),
                    ne = ee[0],
                    ae = ee[1],
                    te = (0, c.pY)(x, ne),
                    ie = te[0],
                    oe = te[1];
                (0, t.ZK)({
                    condition: !!g,
                    message: 'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'
                });
                var re = (0, o.useCallback)((function(e) {
                    l || a ? e.preventDefault() : (ie || ae(oe ? e.target.checked : !!_ || e.target.checked), null == F || F(e))
                }), [l, a, oe, ie, _, F]);
                (0, r.a)((function() {
                    H.current && (H.current.indeterminate = Boolean(_))
                }), [_]), (0, c.rf)((function() {
                    a && X.off()
                }), [a, X]);
                var ce = a && !I,
                    le = (0, o.useCallback)((function(e) {
                        " " === e.key && Z.on()
                    }), [Z]),
                    se = (0, o.useCallback)((function(e) {
                        " " === e.key && Z.off()
                    }), [Z]);
                (0, r.a)((function() {
                    H.current && (H.current.checked !== oe && ae(H.current.checked))
                }), [H.current]);
                var ue = (0, o.useCallback)((function(e, n) {
                        void 0 === e && (e = {}), void 0 === n && (n = null);
                        return v({}, e, {
                            ref: n,
                            "data-active": (0, t.PB)(W),
                            "data-hover": (0, t.PB)($),
                            "data-checked": (0, t.PB)(oe),
                            "data-focus": (0, t.PB)(z),
                            "data-indeterminate": (0, t.PB)(_),
                            "data-disabled": (0, t.PB)(a),
                            "data-invalid": (0, t.PB)(u),
                            "data-readonly": (0, t.PB)(l),
                            "aria-hidden": !0,
                            onMouseDown: (0, t.v0)(e.onMouseDown, (function(e) {
                                e.preventDefault(), Z.on()
                            })),
                            onMouseUp: (0, t.v0)(e.onMouseUp, Z.off),
                            onMouseEnter: (0, t.v0)(e.onMouseEnter, G.on),
                            onMouseLeave: (0, t.v0)(e.onMouseLeave, G.off)
                        })
                    }), [W, oe, a, z, $, _, u, l, Z, G.off, G.on]),
                    de = (0, o.useCallback)((function(e, n) {
                        return void 0 === e && (e = {}), void 0 === n && (n = null), v({}, j, e, {
                            ref: (0, i.lq)(n, (function(e) {
                                e && Q("LABEL" === e.tagName)
                            })),
                            onClick: (0, t.v0)(e.onClick, (function() {
                                var e;
                                J || (null == (e = H.current) || e.click(), (0, t.T_)(H.current, {
                                    nextTick: !0
                                }))
                            })),
                            "data-disabled": (0, t.PB)(a),
                            "data-checked": (0, t.PB)(oe),
                            "data-invalid": (0, t.PB)(u)
                        })
                    }), [j, a, oe, u, J]),
                    he = (0, o.useCallback)((function(e, n) {
                        return void 0 === e && (e = {}), void 0 === n && (n = null), v({}, e, {
                            ref: (0, i.lq)(H, n),
                            type: "checkbox",
                            name: S,
                            value: w,
                            id: f,
                            tabIndex: N,
                            onChange: (0, t.v0)(e.onChange, re),
                            onBlur: (0, t.v0)(e.onBlur, q, X.off),
                            onFocus: (0, t.v0)(e.onFocus, A, X.on),
                            onKeyDown: (0, t.v0)(e.onKeyDown, le),
                            onKeyUp: (0, t.v0)(e.onKeyUp, se),
                            required: s,
                            checked: oe,
                            disabled: ce,
                            readOnly: l,
                            "aria-label": O,
                            "aria-labelledby": R,
                            "aria-invalid": L ? Boolean(L) : u,
                            "aria-describedby": p,
                            "aria-disabled": a,
                            style: h.NL
                        })
                    }), [S, w, f, re, X.off, X.on, q, A, le, se, s, oe, ce, l, O, R, L, u, p, a, N]),
                    ve = (0, o.useCallback)((function(e, n) {
                        return void 0 === e && (e = {}), void 0 === n && (n = null), v({}, e, {
                            ref: n,
                            onMouseDown: (0, t.v0)(e.onMouseDown, E),
                            onTouchStart: (0, t.v0)(e.onTouchStart, E),
                            "data-disabled": (0, t.PB)(a),
                            "data-checked": (0, t.PB)(oe),
                            "data-invalid": (0, t.PB)(u)
                        })
                    }), [oe, a, u]);
                return {
                    state: {
                        isInvalid: u,
                        isFocused: z,
                        isChecked: oe,
                        isActive: W,
                        isHovered: $,
                        isIndeterminate: _,
                        isDisabled: a,
                        isReadOnly: l,
                        isRequired: s
                    },
                    getRootProps: de,
                    getCheckboxProps: ue,
                    getInputProps: he,
                    getLabelProps: ve,
                    htmlProps: j
                }
            }

            function E(e) {
                e.preventDefault(), e.stopPropagation()
            }
            var _ = ["spacing", "className", "children", "iconColor", "iconSize", "icon", "isChecked", "isDisabled", "onChange", "inputProps"],
                S = (0, l.m$)("span", {
                    baseStyle: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        verticalAlign: "top",
                        userSelect: "none",
                        flexShrink: 0
                    }
                }),
                w = (0, l.m$)("label", {
                    baseStyle: {
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        verticalAlign: "top",
                        position: "relative"
                    }
                }),
                M = (0, l.Gp)((function(e, n) {
                    var a = b(),
                        i = v({}, a, e),
                        r = (0, l.jC)("Checkbox", i),
                        c = (0, l.Lr)(e),
                        s = c.spacing,
                        u = void 0 === s ? "0.5rem" : s,
                        d = c.className,
                        h = c.children,
                        f = c.iconColor,
                        k = c.iconSize,
                        p = c.icon,
                        C = void 0 === p ? o.createElement(I, null) : p,
                        g = c.isChecked,
                        y = c.isDisabled,
                        P = void 0 === y ? null == a ? void 0 : a.isDisabled : y,
                        x = c.onChange,
                        B = c.inputProps,
                        E = m(c, _),
                        M = g;
                    null != a && a.value && c.value && (M = a.value.includes(c.value));
                    var N = x;
                    null != a && a.onChange && c.value && (N = (0, t.PP)(a.onChange, x));
                    var O = D(v({}, E, {
                            isDisabled: P,
                            isChecked: M,
                            onChange: N
                        })),
                        R = O.state,
                        L = O.getInputProps,
                        T = O.getCheckboxProps,
                        j = O.getLabelProps,
                        F = O.getRootProps,
                        q = o.useMemo((function() {
                            return v({
                                opacity: R.isChecked || R.isIndeterminate ? 1 : 0,
                                transform: R.isChecked || R.isIndeterminate ? "scale(1)" : "scale(0.95)",
                                fontSize: k,
                                color: f
                            }, r.icon)
                        }), [f, k, R.isChecked, R.isIndeterminate, r.icon]),
                        A = o.cloneElement(C, {
                            __css: q,
                            isIndeterminate: R.isIndeterminate,
                            isChecked: R.isChecked
                        });
                    return o.createElement(w, v({
                        __css: r.container,
                        className: (0, t.cx)("chakra-checkbox", d)
                    }, F()), o.createElement("input", v({
                        className: "chakra-checkbox__input"
                    }, L(B, n))), o.createElement(S, v({
                        __css: r.control,
                        className: "chakra-checkbox__control"
                    }, T()), A), h && o.createElement(l.m$.span, v({
                        className: "chakra-checkbox__label"
                    }, j(), {
                        __css: v({
                            marginStart: u
                        }, r.label)
                    }), h))
                }));
            t.Ts && (M.displayName = "Checkbox")
        }
    }
]);
//# sourceMappingURL=8133-d87d9e282c751e13.js.map