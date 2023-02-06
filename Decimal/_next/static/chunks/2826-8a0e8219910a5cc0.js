"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2826], {
        1083: function(e, n, t) {
            t.d(n, {
                q: function() {
                    return c
                }
            });
            var r = t(85893),
                l = t(20640),
                i = t.n(l),
                o = t(23641),
                s = t(24717),
                a = t(64286),
                c = function(e) {
                    var n = e.text,
                        t = e.title,
                        l = (0, o.$G)().t;
                    return (0, r.jsxs)("button", {
                        className: "ts-caption-3 flex items-center truncate rounded-full border-2 py-0.5 px-2 text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-100",
                        onClick: function() {
                            i()(n), (0, a.Z)({
                                status: "success",
                                title: l("Copied!")
                            })
                        },
                        "aria-label": l("Copy to clipboard"),
                        children: [null !== t && void 0 !== t ? t : n, (0, r.jsx)(s.P6h, {
                            className: "ml-1 h-4 w-4"
                        })]
                    })
                }
        },
        68662: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return c
                }
            });
            var r = t(85893),
                l = t(33729),
                i = t(86010),
                o = t(67294),
                s = t(46243),
                a = t(34071),
                c = function(e) {
                    var n = e.className,
                        t = e.options,
                        c = e.selected,
                        u = e.href,
                        d = e.scrollPageOnChange,
                        x = (0, o.useState)(t.findIndex((function(e) {
                            return e.key === c
                        }))),
                        f = x[0],
                        h = x[1];
                    return (0, r.jsx)(l.O.Group, {
                        selectedIndex: f,
                        onChange: function(e) {
                            return h(e)
                        },
                        children: (0, r.jsx)(a.t, {
                            className: (0, i.Z)(n, "px-6 lg:px-8"),
                            children: t.map((function(e, n) {
                                var t = e.key,
                                    i = e.title,
                                    a = e.badge,
                                    c = f === n;
                                return (0, r.jsx)(l.O, {
                                    as: o.Fragment,
                                    children: function(e) {
                                        var n = e.selected;
                                        return (0, r.jsxs)(s.Z, {
                                            className: "ts-button-2 lg:ts-button-1 relative shrink-0 px-3 py-3 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ui-not-selected:text-gray-500 lg:px-4 lg:py-3",
                                            hoverStyle: "none",
                                            href: u(t),
                                            scroll: d,
                                            children: [i, a && !c && (0, r.jsx)("span", {
                                                className: "absolute top-0.5 right-0 h-2 w-2 rounded-full bg-primary-4"
                                            }), n && (0, r.jsx)("div", {
                                                className: "absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
                                            })]
                                        })
                                    }
                                }, n)
                            }))
                        })
                    })
                }
        },
        99490: function(e, n, t) {
            t.d(n, {
                d: function() {
                    return u
                }
            });
            var r = t(85893),
                l = t(68527),
                i = t(23641),
                o = t(11163),
                s = t(67294),
                a = t(21645),
                c = t(79737),
                u = function(e) {
                    var n = e.isShow,
                        t = (0, i.$G)().t,
                        u = (0, o.useRouter)(),
                        d = (0, s.useState)(n),
                        x = d[0],
                        f = d[1];
                    return (0, s.useEffect)((function() {
                        return f(n)
                    }), [n]), x ? (0, r.jsxs)("div", {
                        className: "flex items-center bg-blue-bg py-3 px-3 text-sm lg:px-6",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-1 items-center space-x-3",
                            children: [(0, r.jsx)(a.BRb, {
                                boxSize: 6,
                                color: "primary_1.500"
                            }), (0, r.jsx)(l.xu, {
                                flex: 1,
                                cursor: "pointer",
                                onClick: function() {
                                    return u.push((0, c.P1)("notification"))
                                },
                                _hover: {
                                    opacity: .7
                                },
                                children: (0, r.jsxs)(i.cC, {
                                    t: t,
                                    children: ["Enable", " ", (0, r.jsx)(l.xu, {
                                        as: "span",
                                        color: "primary_1.500",
                                        textStyle: "button_2",
                                        pt: .5,
                                        whiteSpace: "nowrap",
                                        children: "Notification"
                                    }), " in ", (0, r.jsx)("span", {
                                        className: "text-gray-700",
                                        children: "Settings"
                                    }), " for better trading experience."]
                                })
                            })]
                        }), (0, r.jsx)("button", {
                            "aria-label": t("Close"),
                            onClick: function() {
                                return f(!1)
                            },
                            children: (0, r.jsx)(a.OhS, {})
                        })]
                    }) : null
                }
        },
        66235: function(e, n, t) {
            t.d(n, {
                m: function() {
                    return P
                }
            });
            var r = t(85893),
                l = t(68527),
                i = t(67294),
                o = t(8100),
                s = t(43788),
                a = t(26042),
                c = t(47398),
                u = t(26723),
                d = t(10894),
                x = t(30902),
                f = t(23641),
                h = t(83440),
                p = t(34557),
                v = t(36429),
                m = t(21645),
                g = t(92212),
                j = t(83560),
                b = t(55967),
                y = t(87974),
                C = t(83962),
                S = t(1885),
                _ = t(79737),
                k = t(96702),
                w = t(1083),
                I = t(69396),
                O = t(33482),
                Z = t(97375),
                z = t(91857),
                N = function(e) {
                    var n = e.disclosure,
                        t = e.title,
                        i = e.desc,
                        o = e.okText,
                        s = e.cancelText,
                        a = e.onOk,
                        c = e.onCancel,
                        d = (0, f.$G)().t;
                    return (0, r.jsxs)(O.u_, {
                        preserveScrollBarGap: !0,
                        isOpen: n.isOpen,
                        onClose: n.onClose,
                        isCentered: !0,
                        children: [(0, r.jsx)(O.ZA, {}), (0, r.jsxs)(O.hz, {
                            children: [(0, r.jsx)(O.xB, {
                                children: t
                            }), (0, r.jsx)(z.o, {}), (0, r.jsx)(O.fe, {
                                children: (0, r.jsxs)(l.gC, {
                                    spacing: 6,
                                    children: [(0, r.jsx)(l.xv, {
                                        textStyle: "body_2",
                                        children: i
                                    }), (0, r.jsxs)(l.Ug, {
                                        alignSelf: "stretch",
                                        children: [(0, r.jsx)(u.zx, {
                                            onClick: function() {
                                                n.onClose(), a()
                                            },
                                            flex: 1,
                                            colorScheme: "primary_1",
                                            h: [10, 12],
                                            children: null !== o && void 0 !== o ? o : d("OK")
                                        }), (0, r.jsx)(u.zx, {
                                            onClick: function() {
                                                n.onClose(), c()
                                            },
                                            flex: 1,
                                            variant: "outline",
                                            h: [10, 12],
                                            children: null !== s && void 0 !== s ? s : d("Cancel")
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                W = function(e) {
                    var n = e.disclosure,
                        t = e.title,
                        i = e.desc,
                        o = (0, f.$G)().t;
                    return (0, r.jsxs)(O.u_, {
                        preserveScrollBarGap: !0,
                        isOpen: n.isOpen,
                        onClose: n.onClose,
                        isCentered: !0,
                        children: [(0, r.jsx)(O.ZA, {}), (0, r.jsxs)(O.hz, {
                            children: [(0, r.jsx)(O.xB, {
                                children: t
                            }), (0, r.jsx)(z.o, {}), (0, r.jsx)(O.fe, {
                                children: (0, r.jsxs)(l.gC, {
                                    spacing: 6,
                                    children: [(0, r.jsx)(l.xv, {
                                        textStyle: "body_2",
                                        children: i
                                    }), (0, r.jsx)(l.Ug, {
                                        alignSelf: "stretch",
                                        children: (0, r.jsx)(u.zx, {
                                            onClick: n.onClose,
                                            flex: 1,
                                            colorScheme: "primary_1",
                                            h: [10, 12],
                                            children: o("Done")
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                U = t(20888),
                E = function(e) {
                    var n = e.address,
                        t = e.profile,
                        o = (0, f.$G)().t,
                        s = (0, g.aC)().user,
                        x = function() {
                            var e = (0, Z.qY)(),
                                n = (0, i.useState)(),
                                t = n[0],
                                l = n[1];
                            return {
                                component: t && (0, r.jsx)(W, (0, a.Z)({
                                    disclosure: (0, I.Z)((0, a.Z)({}, e), {
                                        onClose: function() {
                                            e.onClose(), l(void 0)
                                        }
                                    })
                                }, t)),
                                onOpen: function(n) {
                                    l(n), e.onOpen()
                                }
                            }
                        }(),
                        h = function() {
                            var e = (0, Z.qY)(),
                                n = (0, i.useState)(),
                                t = n[0],
                                l = n[1];
                            return {
                                component: t && (0, r.jsx)(N, (0, a.Z)({
                                    disclosure: (0, I.Z)((0, a.Z)({}, e), {
                                        onClose: function() {
                                            e.onClose(), l(void 0)
                                        }
                                    })
                                }, t)),
                                onOpen: function(n) {
                                    l(n), e.onOpen()
                                }
                            }
                        }(),
                        v = (0, i.useMemo)((function() {
                            return (0, j.lt)(s) && (0, j.Wr)(s.meta.address, n)
                        }), [s, n]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(l.Ug, {
                            spacing: 4,
                            children: [!v && (0, r.jsx)(c.u, {
                                label: o("Send a direct message to account via Blockscan Chat"),
                                placement: "top",
                                hasArrow: !0,
                                children: (0, r.jsx)(u.hU, {
                                    boxSize: [10, 12],
                                    "aria-label": o("Chat"),
                                    variant: "outline",
                                    isRound: !0,
                                    minWidth: [10, 12],
                                    icon: (0, r.jsx)(d.JO, {
                                        fontSize: ["md", "xl"],
                                        as: m.CR7
                                    }),
                                    onClick: function() {
                                        var e = "https://chat.blockscan.com/index?a=".concat(n);
                                        window.open(e, "_blank")
                                    }
                                })
                            }), (0, r.jsx)(u.hU, {
                                boxSize: [10, 12],
                                "aria-label": o("Share on Twitter"),
                                variant: "outline",
                                isRound: !0,
                                minWidth: [10, 12],
                                icon: (0, r.jsx)(d.JO, {
                                    fontSize: ["md", "xl"],
                                    as: m.sf7
                                }),
                                onClick: function(e) {
                                    var r;
                                    e.preventDefault(), (0, k.o)("https://twitter.com/intent/tweet", {}, {
                                        text: "Check ".concat(null !== (r = null === t || void 0 === t ? void 0 : t.nickname) && void 0 !== r ? r : (0, b.P5)(n), "'s profile on #X2Y2 #NFT "),
                                        url: (0, _.qh)((0, _.pG)(n))
                                    })
                                }
                            }), v && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(u.zx, {
                                    as: p.Z,
                                    h: [10, 12],
                                    variant: "outline",
                                    textStyle: ["button_2", "button_1"],
                                    colorScheme: "primary_1",
                                    leftIcon: (0, r.jsx)(d.JO, {
                                        as: m.tJk
                                    }),
                                    href: (0, _.P1)("profile"),
                                    children: o("Settings")
                                }), (0, r.jsx)(u.zx, {
                                    as: p.Z,
                                    h: [10, 12],
                                    variant: "outline",
                                    textStyle: ["button_2", "button_1"],
                                    colorScheme: "primary_1",
                                    leftIcon: (0, r.jsx)(d.JO, {
                                        as: m.Adt
                                    }),
                                    href: _.YS,
                                    children: o("Bulk Listing")
                                })]
                            })]
                        }), x.component, h.component]
                    })
                },
                G = function(e) {
                    var n, t = (0, v._B)(),
                        i = e.address,
                        o = e.profile,
                        s = e.ensDomain;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(l.Kq, {
                            w: "full",
                            spacing: 8,
                            direction: ["column", null, "row"],
                            alignItems: ["center", null, "flex-start"],
                            children: [(0, r.jsx)(h.Z, {
                                data: null !== o && void 0 !== o ? o : {
                                    address: i
                                },
                                boxSize: 32,
                                minW: 32
                            }), (0, r.jsxs)(l.gC, {
                                w: "full",
                                minW: 0,
                                spacing: [3, null, 2],
                                alignItems: ["center", null, "flex-start"],
                                children: [(0, r.jsxs)(l.gC, {
                                    w: "full",
                                    spacing: 1,
                                    alignItems: ["center", "center", "flex-start"],
                                    children: [(0, r.jsx)(l.Kq, {
                                        justify: "space-between",
                                        w: "full",
                                        direction: ["column", "column", "row"],
                                        children: (0, r.jsxs)(l.Ug, {
                                            spacing: 2.5,
                                            minW: 0,
                                            w: "full",
                                            justifyContent: ["center", null, "flex-start"],
                                            children: [(0, r.jsx)(l.xv, {
                                                textStyle: ["headline_4", null, "headline_2"],
                                                color: t.gray800,
                                                noOfLines: 1,
                                                children: null !== (n = null === o || void 0 === o ? void 0 : o.nickname) && void 0 !== n ? n : (0, b.P5)(i)
                                            }), (null === o || void 0 === o ? void 0 : o.verified) && (0, r.jsx)(U.Z, {})]
                                        })
                                    }), (0, r.jsxs)(l.kC, {
                                        w: "full",
                                        direction: ["column", null, "row"],
                                        color: t.gray500,
                                        alignItems: "center",
                                        children: [(0, r.jsx)(w.q, {
                                            text: null !== s && void 0 !== s ? s : i,
                                            title: null !== s && void 0 !== s ? s : (0, b.P5)(i)
                                        }), (0, x.pipe)([(0, x.pipe)(y.ij(null === o || void 0 === o ? void 0 : o.twitter_url), y.UI((function(e) {
                                            return {
                                                url: e,
                                                icon: m.OH2,
                                                label: "Twitter"
                                            }
                                        }))), (0, x.pipe)(y.ij(null === o || void 0 === o ? void 0 : o.youtube_url), y.UI((function(e) {
                                            return {
                                                url: e,
                                                icon: m.TiE,
                                                label: "Youtube"
                                            }
                                        }))), (0, x.pipe)(y.ij(null === o || void 0 === o ? void 0 : o.instagram_url), y.UI((function(e) {
                                            return {
                                                url: e,
                                                icon: m.Vnh,
                                                label: "Instagram"
                                            }
                                        }))), (0, x.pipe)(y.ij(null === o || void 0 === o ? void 0 : o.homepage_url), y.UI((function(e) {
                                            return {
                                                url: e,
                                                icon: m.TxT,
                                                label: "Homepage"
                                            }
                                        })))], C.oA, S.nI, y.UI((function(e) {
                                            return (0, r.jsx)(l.Ug, {
                                                mt: [2, null, 0],
                                                ml: [0, null, 5],
                                                spacing: [2, null, 5],
                                                color: t.gray700,
                                                children: e.map((function(e, n) {
                                                    var t = e.icon;
                                                    return (0, r.jsx)(u.hU, {
                                                        as: p.Z,
                                                        href: e.url,
                                                        isExternal: !0,
                                                        size: "xs",
                                                        variant: "ghost",
                                                        isRound: !0,
                                                        "aria-label": e.label,
                                                        icon: (0, r.jsx)(t, {
                                                            boxSize: 6
                                                        })
                                                    }, n)
                                                }))
                                            })
                                        })), y.WG)]
                                    })]
                                }), (0, r.jsx)(l.xv, {
                                    textStyle: "body_2",
                                    textAlign: ["center", null, "left"],
                                    color: t.gray500,
                                    noOfLines: 2,
                                    w: "full",
                                    children: null === o || void 0 === o ? void 0 : o.intro
                                })]
                            }), (0, r.jsx)(E, (0, a.Z)({}, e))]
                        })
                    })
                },
                B = t(59206),
                R = t(99490),
                P = function(e) {
                    var n = e.profile,
                        t = e.children,
                        a = e.address,
                        c = e.ensDomain,
                        u = (0, g.aC)().user,
                        d = (0, o.ZP)("registered" === u._tag && (0, j.Wr)(a, u.meta.address) && {
                            key: B.R,
                            token: u.token
                        }, (function(e) {
                            var n = e.token;
                            return (0, B._)(n)
                        }), {
                            revalidateOnMount: !0,
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        x = d.data,
                        f = (0, i.useMemo)((function() {
                            var e, n, t;
                            return !1 === (null === x || void 0 === x || null === (e = x.data) || void 0 === e ? void 0 : e.telegram) && !1 === (null === x || void 0 === x || null === (n = x.data) || void 0 === n ? void 0 : n.blockscan) && !1 === (null === x || void 0 === x || null === (t = x.data) || void 0 === t ? void 0 : t.email)
                        }), [null === x || void 0 === x ? void 0 : x.data]);
                    return (0, r.jsx)(s._z, {
                        maxW: "unset",
                        px: 0,
                        hideFooter: !0,
                        children: (0, r.jsxs)(l.xu, {
                            w: "full",
                            children: [(0, r.jsx)(R.d, {
                                isShow: f
                            }), (0, r.jsx)(l.W2, {
                                maxW: "container-2xl",
                                px: [6, 8, 12, 24, 36],
                                py: [12, 12, 16],
                                children: (0, r.jsx)(G, {
                                    address: a,
                                    profile: n,
                                    ensDomain: c
                                })
                            }), (0, r.jsx)(l.xu, {
                                children: t
                            })]
                        })
                    })
                }
        },
        7435: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return c
                }
            });
            var r = t(11163),
                l = t(67294),
                i = t(92212),
                o = t(83560),
                s = "prev_address",
                a = "prev_on_self_page",
                c = function(e) {
                    var n = (0, i.aC)().user,
                        t = (0, r.useRouter)(),
                        c = (0, l.useState)(!1),
                        u = c[0],
                        d = c[1];
                    return (0, l.useEffect)((function() {
                        if ((0, o.lt)(n)) {
                            var e = localStorage.getItem(s);
                            e ? (0, o.Wr)(e, n.meta.address) || d(!0) : localStorage.setItem(s, n.meta.address)
                        }
                    }), [n]), (0, l.useEffect)((function() {
                        if ((0, o.lt)(n) && e) return (0, o.Wr)(n.meta.address, e) && localStorage.setItem(a, "1"),
                            function() {
                                localStorage.removeItem(a)
                            }
                    }), [n, e]), (0, l.useEffect)((function() {
                        if ((0, o.lt)(n) && e && u && localStorage.getItem(a)) {
                            var r = t.pathname;
                            (0, o.Wr)(n.meta.address, e) || (localStorage.setItem(s, n.meta.address), localStorage.removeItem(a), t.push(r.replace("[address]", n.meta.address)))
                        }
                    }), [n, e, t, u]), null
                }
        },
        59206: function(e, n, t) {
            t.d(n, {
                R: function() {
                    return s
                },
                _: function() {
                    return a
                }
            });
            var r = t(47568),
                l = t(20414),
                i = t(86275),
                o = t(41278),
                s = "/api/users/me/service",
                a = function() {
                    var e = (0, r.Z)((function(e) {
                        var n;
                        return (0, l.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i.d.get(s, (0, o.v2)(e))];
                                case 1:
                                    return 200 === (n = t.sent()).status ? [2, n.data] : [2]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        }
    }
]);
//# sourceMappingURL=2826-8a0e8219910a5cc0.js.map