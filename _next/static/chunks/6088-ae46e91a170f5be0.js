"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6088], {
        1083: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return c
                }
            });
            var r = n(85893),
                o = n(20640),
                l = n.n(o),
                i = n(23641),
                a = n(24717),
                s = n(64286),
                c = function(e) {
                    var t = e.text,
                        n = e.title,
                        o = (0, i.$G)().t;
                    return (0, r.jsxs)("button", {
                        className: "ts-caption-3 flex items-center truncate rounded-full border-2 py-0.5 px-2 text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-100",
                        onClick: function() {
                            l()(t), (0, s.Z)({
                                status: "success",
                                title: o("Copied!")
                            })
                        },
                        "aria-label": o("Copy to clipboard"),
                        children: [null !== n && void 0 !== n ? n : t, (0, r.jsx)(a.P6h, {
                            className: "ml-1 h-4 w-4"
                        })]
                    })
                }
        },
        5812: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return X
                }
            });
            var r = n(26042),
                o = n(69396),
                l = n(85893),
                i = n(47398),
                a = n(86010),
                s = n(23641),
                c = n(67294),
                d = n(18434),
                u = n(65857),
                f = n(47190),
                m = n(24717),
                x = n(83560),
                h = n(88886),
                p = n(55967),
                v = n(79737),
                g = n(86269),
                y = n(16869),
                b = n(1083),
                w = n(16531),
                j = n(79530),
                N = n(46243),
                _ = n(828),
                k = n(3735),
                C = n(89880),
                S = n(97338),
                E = n(92212),
                F = n(87974),
                Z = n(98316),
                I = n(54767),
                P = n(28989),
                G = function(e) {
                    var t = e.contractId,
                        n = (0, s.$G)().t,
                        r = (0, E.aC)().user,
                        o = (0, E.eX)().requireRegisteredUser,
                        i = (0, c.useState)(!1),
                        a = i[0],
                        d = i[1],
                        u = (0, c.useMemo)((function() {
                            return (0, k.zG)((0, E.n5)(r), F.UI((function(e) {
                                return S.LH({
                                    contractId: t,
                                    userId: e
                                })
                            })))
                        }), [r, t]),
                        f = (0, _.Z)((0, C.Z)(u), 1)[0];
                    (0, c.useEffect)((function() {
                        Z.d6(f) && d(f.value)
                    }), [f]);
                    var x = (0, c.useState)(F.YP),
                        h = x[0],
                        p = x[1],
                        v = (0, _.Z)((0, C.Z)(h), 1)[0],
                        g = a ? m.m9i : m.L75;
                    return (0, l.jsx)(P.h, {
                        className: "GA-fav-collection",
                        colorScheme: "primary-3",
                        icon: (0, l.jsx)(g, {
                            className: "h-4 w-4 lg:h-6 lg:w-6"
                        }),
                        "aria-label": n("Like"),
                        isLoading: Z.zR(f) || Z.zR(v),
                        onClick: function() {
                            o((function(e) {
                                var n = a,
                                    r = (0, k.zG)(S.b({
                                        contractId: t,
                                        like: !n
                                    }, e.token), I.UI((function() {
                                        d(!n)
                                    })), F.G);
                                p(r)
                            }))
                        }
                    })
                },
                z = n(99534),
                A = n(97375),
                T = n(36429),
                D = n(36349),
                O = n(54765),
                R = n(68663),
                B = n(91425),
                $ = n(35539),
                L = function(e) {
                    var t = e.inDetailPage,
                        n = (0, z.Z)(e, ["inDetailPage"]),
                        a = (0, s.$G)().t,
                        c = (0, A.qY)(),
                        d = (0, T.dd)(B.Fu),
                        u = (0, T.dd)(w.km),
                        f = (0, E.eX)().requireRegisteredUser,
                        x = (0, D.L)(n.contract.contract),
                        h = x.isInWhitelist,
                        p = x.isCollectionOfferDisabled,
                        v = function() {
                            return f((function(e) {
                                return (0, O._)(e, n.networkId, (function() {
                                    return c.onOpen()
                                }), (0, O.V)(a))
                            }))
                        };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [t ? (0, l.jsx)(R.zx, {
                            className: "text-base",
                            variant: "outline",
                            colorScheme: "primary-1",
                            onClick: v,
                            children: a("Make Collection Offer")
                        }) : (0, l.jsx)(i.u, {
                            label: (0, l.jsx)(s.cC, {
                                t: a,
                                children: "A collection offer is an offer that applies to every item in a collection. If someone accepts your collection offer on one item, offers on all the other items in the collection will be cancelled."
                            }),
                            placement: "top",
                            hasArrow: !0,
                            children: (0, l.jsx)(R.zx, {
                                className: "GA-make-collection-offer",
                                variant: "text",
                                colorScheme: "primary-1",
                                leftIcon: (0, l.jsx)(m.Q_s, {
                                    className: "h-4 w-4 lg:h-5 lg:w-5"
                                }),
                                onClick: v,
                                children: a("Collection Offer")
                            })
                        }), h && !p && (0, l.jsx)(R.zx, {
                            variant: "text",
                            colorScheme: "primary-1",
                            leftIcon: (0, l.jsx)(m.xvp, {
                                className: "h-4 w-4 lg:h-5 lg:w-5"
                            }),
                            onClick: function() {
                                return f((function(e) {
                                    return (0, O._)(e, n.networkId, (function() {
                                        return d.onOpen({
                                            user: e,
                                            options: [{
                                                type: "collection",
                                                contract: (0, o.Z)((0, r.Z)({}, n.contract), {
                                                    contract: n.tokenContract,
                                                    network_id: n.networkId
                                                })
                                            }],
                                            approveTokenModal: u
                                        })
                                    }), (0, O.V)(a))
                                }))
                            },
                            children: a("Loan Offer")
                        }), (0, l.jsx)($.Fv, (0, o.Z)((0, r.Z)({}, n), {
                            disclosure: c,
                            approveTokenModal: u
                        })), u.component, d.component]
                    })
                },
                M = n(71325),
                W = function(e) {
                    var t = e.className,
                        n = e.path,
                        r = e.sizes;
                    return (0, l.jsx)("div", {
                        className: (0, a.Z)(t, "shrink-0 overflow-hidden rounded-full"),
                        children: (0, l.jsx)(d.Z, {
                            bg: "gray.100",
                            cdnSrc: {
                                path: n,
                                width: 0,
                                height: 0,
                                format: "jpg"
                            },
                            sizes: r
                        })
                    })
                },
                X = function(e) {
                    var t, n, d, _, k, C, S = e.contract,
                        E = e.owner,
                        F = e.info,
                        Z = e.contractName,
                        I = e.networkId,
                        P = e.tokenContract,
                        z = e.floorPrice,
                        A = e.osFloorPrice,
                        T = e.inDetailPage,
                        D = (0, s.$G)().t,
                        O = [{
                            title: D("Items"),
                            value: (null === (t = S.stats) || void 0 === t ? void 0 : t.total_supply) ? (0, p.Kn)(S.stats.total_supply) : D("N/A")
                        }, {
                            title: D("Owners"),
                            value: (null === (n = S.stats) || void 0 === n ? void 0 : n.owner_count) ? (0, p.Kn)(S.stats.owner_count) : D("N/A")
                        }, {
                            title: D("Vol."),
                            value: (0, p.Kn)(parseFloat(null !== (k = null === (d = S.stats) || void 0 === d ? void 0 : d.total_vol) && void 0 !== k ? k : "0")),
                            symbol: (0, y.dK)(I)
                        }, {
                            title: D("Floor"),
                            value: z ? (0, p.tX)((0, j.ZH)(z, A).value) : D("N/A"),
                            symbol: (0, y.dK)(I),
                            tooltip: z ? (0, l.jsx)(j.ON, {
                                floorPrice: z,
                                osFloorPrice: A
                            }) : void 0
                        }],
                        R = (0, c.useMemo)((function() {
                            return [P]
                        }), [P]),
                        B = (0, f.zy)({
                            isActive: !0,
                            user: x.Wi,
                            networkId: I,
                            contracts: R
                        }),
                        $ = B.isPaymentInfoFetching,
                        X = B.paymentInfo,
                        Y = (0, w.I2)(null !== (C = null === X || void 0 === X ? void 0 : X[P].royalty_fee_rate) && void 0 !== C ? C : 0);
                    !$ && (0, g.C)(X) && O.push({
                        title: D("Royalty"),
                        value: Y > 0 ? "".concat((0, p.tX)(Y, {
                            max: 2
                        }), "%") : (0, l.jsxs)("div", {
                            className: "flex items-center space-x-1 lg:space-x-2",
                            children: [(0, l.jsx)("span", {
                                children: D("Not set")
                            }), (0, l.jsx)(m.q4m, {
                                className: "h-4 w-4 cursor-pointer text-gray-500 lg:h-6 lg:w-6",
                                onClick: function() {
                                    window.open("https://docs.x2y2.io/guides/collection-management/manage-your-collection", "_blank")
                                }
                            })]
                        })
                    });
                    var q, U = (0, h.Cs)(S.erc_type);
                    return (0, l.jsxs)("div", {
                        className: (0, a.Z)("flex flex-1 flex-col ", T && "border-1 mt-4 space-y-4 rounded-xl border bg-gray-100 p-4 lg:p-6"),
                        children: [T ? (0, l.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center",
                                children: [S.icon_url && (0, l.jsx)(W, {
                                    className: "mr-3 h-12 w-12 lg:block",
                                    path: S.icon_url,
                                    sizes: ["48px"]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, l.jsx)("div", {
                                        className: "flex flex-wrap items-center gap-x-4 gap-y-1",
                                        children: (0, l.jsxs)("h1", {
                                            className: "ts-body-3 font-bold",
                                            children: [Z, S.verified && (0, l.jsx)(m.SN$, {
                                                className: "ml-2 mb-1 inline h-3.5 w-3.5 text-primary-1"
                                            })]
                                        })
                                    }), (0, l.jsxs)(N.Z, {
                                        className: "ts-caption-3 flex items-center text-[#777E91]",
                                        href: "/collection/".concat(P, "/items"),
                                        children: [(0, p.P5)(P), (0, l.jsx)(m.yPv, {
                                            className: "ml-1 h-3 w-3"
                                        })]
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                className: "mt-4 flex flex-wrap gap-2",
                                children: (0, l.jsx)(M.WG, {
                                    links: (0, o.Z)((0, r.Z)({}, null === F || void 0 === F ? void 0 : F.links), {
                                        etherscan: (0, y.y4)(P, I)
                                    }),
                                    inDetailPage: T
                                })
                            })]
                        }) : (0, l.jsxs)("div", {
                            className: "flex items-center",
                            children: [S.icon_url && (0, l.jsx)(W, {
                                className: "mr-8 hidden h-32 w-32 lg:block",
                                path: S.icon_url,
                                sizes: ["256px"]
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex",
                                    children: [S.icon_url && (0, l.jsx)(W, {
                                        className: "mr-6 h-16 w-16 lg:hidden",
                                        path: S.icon_url,
                                        sizes: ["128px"]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-wrap items-center gap-x-4 gap-y-1",
                                        children: [(0, l.jsxs)("h1", {
                                            className: "ts-headline-5 lg:ts-headline-3 line-clamp-2",
                                            children: [Z, S.verified && (0, l.jsx)(m.SN$, {
                                                className: "ml-2 mb-1 inline h-6 w-6 text-primary-1 lg:h-8 lg:w-8"
                                            })]
                                        }), E && (0, l.jsx)("p", {
                                            className: "ts-body-3 lg:ts-body-2",
                                            children: (0, l.jsxs)(s.cC, {
                                                t: D,
                                                children: ["By", " ", (0, l.jsx)(N.Z, {
                                                    className: "ts-button-2 lg:ts-button-1",
                                                    href: (0, v.pG)(E),
                                                    children: {
                                                        owner: (0, p.P5)(E)
                                                    }
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "mt-4 flex flex-wrap items-center gap-4",
                                    children: [(0, l.jsx)(b.q, {
                                        text: P,
                                        title: (0, p.P5)(P)
                                    }), (0, l.jsx)(M.WG, {
                                        links: (0, o.Z)((0, r.Z)({}, null === F || void 0 === F ? void 0 : F.links), {
                                            etherscan: (0, y.y4)(P, I)
                                        })
                                    }), (0, l.jsx)(G, {
                                        contractId: S.id
                                    })]
                                })]
                            })]
                        }), (null === F || void 0 === F ? void 0 : F.desc) && !T && (0, l.jsx)(u.d, {
                            className: "mt-4 lg:mt-6",
                            text: F.desc,
                            maxLength: 230
                        }), (0, l.jsx)("div", {
                            className: "overflow-hidden",
                            children: (0, l.jsx)("ul", {
                                className: "mt-2 ml-[-1px] flex flex-wrap lg:mt-4",
                                children: O.map((function(e, t) {
                                    return (0, l.jsx)(c.Fragment, {
                                        children: (0, l.jsx)(i.u, {
                                            label: e.tooltip,
                                            placement: "top",
                                            hasArrow: !0,
                                            children: (0, l.jsxs)("li", {
                                                className: "mt-2 flex min-w-[100px] flex-col space-y-1 border-l px-2 lg:min-w-0 lg:px-6",
                                                children: [(0, l.jsx)("p", {
                                                    className: (0, a.Z)("truncate text-gray-500", T ? "font-ubuntu text-[10px] font-medium uppercase text-[#777E91]" : "ts-hairline-3 "),
                                                    children: e.title
                                                }), (0, l.jsxs)("p", {
                                                    className: (0, a.Z)("truncate text-gray-700", T ? "ts-body-2 font-bold" : "ts-headline-6 lg:ts-headline-4 "),
                                                    children: [e.value, e.symbol && " ".concat("ETH" === e.symbol ? "\u039e" : e.symbol)]
                                                })]
                                            })
                                        })
                                    }, t)
                                }))
                            })
                        }), (0, l.jsx)("div", {
                            className: "mt-4 flex flex-wrap items-center space-x-6 lg:mt-6",
                            children: U && (0, l.jsx)(L, {
                                networkId: I,
                                tokenContract: P,
                                tokenKind: U,
                                floorPrice: z,
                                osFloorPrice: A,
                                inDetailPage: T,
                                contract: {
                                    contract: P,
                                    name: Z,
                                    verified: S.verified,
                                    icon_url: S.icon_url
                                },
                                itemCount: null !== (q = null === (_ = S.stats) || void 0 === _ ? void 0 : _.total_supply) && void 0 !== q ? q : 0
                            })
                        })]
                    })
                }
        },
        36088: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return W
                },
                C: function() {
                    return M
                }
            });
            var r = n(47568),
                o = n(20414),
                l = n(85893),
                i = n(9279),
                a = n(3735),
                s = n(23641),
                c = n(67294),
                d = n(43788),
                u = n(76875),
                f = n(47190),
                m = n(5936),
                x = n(24717),
                h = n(83560),
                p = n(11923),
                v = n(86275),
                g = n(64286),
                y = n(41278),
                b = p.Qb ? ["0xDC43b25f3AbF65825E52b73441E47F2Ce0F9c47D", "0x026657125481828f38D1B5ae542cB19e9C04A157"] : ["0xe2FFB9879111f8313706850F04EB0D3fd494b890"],
                w = function(e) {
                    return !!(0, h.lt)(e) && b.some((function(t) {
                        return (0, h.Wr)(t, e.meta.address)
                    }))
                },
                j = function() {
                    var e = (0, r.Z)((function(e, t, n, r) {
                        var l;
                        return (0, o.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, v.d.post("/api/admin/cmd", {
                                        cmd: t,
                                        network_id: n,
                                        contract: r
                                    }, (0, y.v2)(e.token))];
                                case 1:
                                    return o.sent(), (0, g.Z)({
                                        status: "success",
                                        title: "Done"
                                    }), [3, 3];
                                case 2:
                                    return l = o.sent(), console.error(l), (0, g.Z)({
                                        status: "error",
                                        title: "Failed"
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = n(92212),
                _ = n(18638),
                k = n(88886),
                C = n(57457),
                S = n(87974),
                E = n(27001),
                F = n(30365),
                Z = n(79737),
                I = n(26473),
                P = n(16869),
                G = n(68663),
                z = n(92684),
                A = n(86010),
                T = n(1577),
                D = n(46243),
                O = n(36429),
                R = n(55967),
                B = function(e) {
                    var t = encodeURIComponent(e);
                    return "image://data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_17005_82736)'%3E%3Ccircle cx='18' cy='10' r='10' fill='%23FCFCFD'/%3E%3C/g%3E%3Ccircle cx='18' cy='10' r='6' fill='".concat(t, "'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_17005_82736' x='0' y='0' width='36' height='36' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeMorphology radius='8' operator='erode' in='SourceAlpha' result='effect1_dropShadow_17005_82736'/%3E%3CfeOffset dy='8'/%3E%3CfeGaussianBlur stdDeviation='8'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.2 0'/%3E%3CfeBlend mode='multiply' in2='BackgroundImageFix' result='effect1_dropShadow_17005_82736'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_17005_82736' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A")
                },
                $ = function(e) {
                    var t, n = e.className,
                        r = e.data,
                        o = (0, s.$G)().t,
                        i = (0, O.ah)(),
                        a = (0, c.useRef)(null),
                        d = null !== (t = (0, z.Sx)({
                            base: !1,
                            md: !0
                        })) && void 0 !== t && t;
                    return (0, c.useEffect)((function() {
                        var e = a.current;
                        if (e) {
                            var t = T.S1(e),
                                n = r.x.length - 1,
                                l = function(e) {
                                    return "".concat((0, R.tX)(e), " \u039e")
                                },
                                s = r.y[n] < r.y[0] ? "#FF6838" : "#58BD7D",
                                c = d ? 16 : 10.9,
                                u = d ? 20 : 16,
                                f = d ? 14 : 12,
                                m = Number.POSITIVE_INFINITY,
                                x = r.y.reduce((function(e, t) {
                                    return t < e ? t : e
                                }), m),
                                h = r.y.reduce((function(e, t) {
                                    return t > e ? t : e
                                }), 0),
                                p = h - x,
                                v = function(e) {
                                    return h - e < .2 * p
                                };
                            t.setOption({
                                grid: [{
                                    top: .5 * c,
                                    bottom: .5 * c,
                                    left: c,
                                    right: c
                                }],
                                tooltip: {
                                    trigger: "axis",
                                    padding: 0,
                                    borderWidth: 0,
                                    borderRadius: 8,
                                    formatter: function(e) {
                                        var t = e[0],
                                            n = i(1e3 * parseInt(t.axisValue)).format("lll"),
                                            r = (0, R.tX)(t.value);
                                        return '<div class="p-2 bg-gray-900 text-gray-100 rounded-lg">\n            <span class="ts-body-3 font-bold">'.concat(n, '</span>\n            <br />\n            <span class="ts-caption-2 text-gray-500">').concat(o("Floor Price"), '</span>\n            <span class="ts-body-3 pl-2 font-bold">').concat(r, " \u039e</span>\n          </div>")
                                    }
                                },
                                xAxis: {
                                    data: r.x,
                                    show: !1,
                                    axisLabel: {
                                        show: !1
                                    },
                                    axisPointer: {
                                        z: 0,
                                        lineStyle: {
                                            color: s,
                                            width: 2 * c,
                                            opacity: .12
                                        }
                                    }
                                },
                                yAxis: {
                                    show: !1
                                },
                                series: [{
                                    data: r.y,
                                    type: "line",
                                    symbol: B(s),
                                    symbolSize: d ? 36 : 28.8,
                                    symbolOffset: [0, d ? 8 : 6.4],
                                    itemStyle: {
                                        color: s
                                    },
                                    lineStyle: {
                                        width: 4,
                                        color: s,
                                        join: "miter"
                                    },
                                    areaStyle: {
                                        color: {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: "".concat(s, "77")
                                            }, {
                                                offset: 1,
                                                color: "".concat(s, "00")
                                            }]
                                        },
                                        opacity: 1
                                    },
                                    markPoint: {
                                        symbol: "rect",
                                        symbolSize: [2 * c, u + 2 * f],
                                        itemStyle: {
                                            color: "transparent"
                                        },
                                        label: {
                                            color: "#777E90",
                                            fontSize: f,
                                            distance: 0
                                        },
                                        data: [{
                                            coord: [0, r.y[0]],
                                            value: l(r.y[0]),
                                            label: {
                                                position: v(r.y[0]) ? "insideBottomLeft" : "insideTopLeft"
                                            }
                                        }, {
                                            coord: [n, r.y[n]],
                                            value: l(r.y[n]),
                                            label: {
                                                position: v(r.y[n]) ? "insideBottomRight" : "insideTopRight"
                                            }
                                        }]
                                    }
                                }]
                            });
                            var g = new ResizeObserver((function() {
                                t.resize()
                            }));
                            return g.observe(e),
                                function() {
                                    g.unobserve(e), t.dispose()
                                }
                        }
                    }), [o, i, d, r]), (0, l.jsxs)("div", {
                        className: (0, A.Z)(n, "flex flex-col"),
                        children: [(0, l.jsx)("div", {
                            className: "h-[100px] lg:h-[150px]",
                            ref: a
                        }), (0, l.jsx)("p", {
                            className: "ts-caption-3 lg:ts-caption-2 text-right text-gray-500",
                            children: (0, l.jsxs)(s.cC, {
                                t: o,
                                children: ["Floor chart, data by", " ", (0, l.jsx)(D.Z, {
                                    className: "underline",
                                    hoverStyle: "opacity",
                                    href: "https://nftgo.io/",
                                    isExternal: !0,
                                    children: "NFTGo"
                                })]
                            })
                        })]
                    })
                },
                L = n(5812),
                M = function(e) {
                    return (0, a.zG)(k.wG.decode(e), S.Uo, S.WG)
                },
                W = function(e) {
                    var t, n, p = e.tab,
                        v = e.contract,
                        g = e.hideFooter,
                        y = void 0 !== g && g,
                        b = e.children,
                        S = (0, s.$G)().t,
                        z = (0, m.ZP)().rates,
                        A = v.network_id,
                        T = v.contract,
                        D = v.creator,
                        O = (0, a.zG)(E.record(E.number).decode(null === (t = v.stats) || void 0 === t ? void 0 : t.floor_price), F.fS((function() {
                            return {}
                        })), (function(e) {
                            return (0, k.TR)(e, z, A)
                        })),
                        R = (0, f.M)(null !== (n = v.opensea_slug) && void 0 !== n ? n : null),
                        B = (0, _.rt)(T).data,
                        W = M(v.info),
                        X = (0, c.useState)(!1),
                        Y = X[0],
                        q = X[1],
                        U = (0, c.useState)(null),
                        H = U[0],
                        K = U[1],
                        V = (0, N.aC)().user;
                    (0, c.useEffect)((function() {
                        var e = function() {
                            var e = (0, r.Z)((function() {
                                var e, t, n, r, l;
                                return (0, o.__generator)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            e = (0, h.lt)(V) ? V.meta.address : "", o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), t = (0, P.TI)(A), [4, C.T9.connect(T, t).owner()];
                                        case 2:
                                            if ((n = o.sent()) === i.d) throw Error("invalid owner");
                                            return r = (0, h.Wr)(n, e), q(r), K(n), [3, 4];
                                        case 3:
                                            return l = o.sent(), console.error(l), K(null), !!D && (0, h.Wr)(D, e) && q(!0), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [A, T, D, V]);
                    var Q, J = (0, N.eX)().requireRegisteredUser,
                        ee = (0, k.E0)(v),
                        te = {
                            contract: ee
                        };
                    return (0, l.jsxs)(l.Fragment, {
                        children: ["items" === p && (0, l.jsx)(u.p, {
                            title: S("{{contract}} items", te),
                            description: null === W || void 0 === W ? void 0 : W.desc
                        }), "activities" === p && (0, l.jsx)(u.p, {
                            title: S("{{contract}} activities", te),
                            description: S("Activities of {{contract}} on X2Y2.", te)
                        }), "data" === p && (0, l.jsx)(u.p, {
                            title: S("{{contract}} analytics", te),
                            description: S("Analytics of {{contract}} on X2Y2.", te)
                        }), "holders" === p && (0, l.jsx)(u.p, {
                            title: S("{{contract}} holders", te),
                            description: S("Holders of {{contract}} on X2Y2.", te)
                        }), "governance" === p && (0, l.jsx)(u.p, {
                            title: S("{{contract}} governance", te),
                            description: S("Governance of {{contract}} on X2Y2.", te)
                        }), (0, l.jsxs)(d.j, {
                            hideFooter: y,
                            children: [(0, l.jsxs)("header", {
                                className: "flex flex-col gap-8 px-6 py-12 lg:flex-row lg:px-8",
                                children: [(0, l.jsx)(L.a, {
                                    contract: v,
                                    owner: H,
                                    info: W,
                                    contractName: ee,
                                    networkId: A,
                                    tokenContract: T,
                                    floorPrice: O,
                                    osFloorPrice: R
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col lg:min-w-[400px] xl:min-w-[500px]",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-wrap items-center space-x-6 lg:justify-end",
                                        children: [Y && (0, l.jsxs)(G.ZP, {
                                            variant: "text",
                                            colorScheme: "primary-1",
                                            href: (0, Z.ec)({
                                                slug: null !== (Q = v.slug) && void 0 !== Q ? Q : (0, I.P8)(T),
                                                tab: "edit"
                                            }),
                                            children: [(0, l.jsx)(x.ebN, {
                                                className: "mr-1 h-4 w-4"
                                            }), S("Customization & Royalty")]
                                        }), w(V) && (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(G.zx, {
                                                variant: "text",
                                                onClick: function() {
                                                    return J((function(e) {
                                                        return j(e, "resync_opensea", A, T)
                                                    }))
                                                },
                                                children: "\u2699\ufe0f Resync OpenSea"
                                            }), (0, l.jsx)(G.zx, {
                                                variant: "text",
                                                onClick: function() {
                                                    return J((function(e) {
                                                        return j(e, "refresh_floor_price", A, T)
                                                    }))
                                                },
                                                children: "\u2699\ufe0f Refresh floor price"
                                            })]
                                        })]
                                    }), B && (0, l.jsx)($, {
                                        className: "mt-8 flex-1 justify-center",
                                        data: B
                                    })]
                                })]
                            }), b]
                        })]
                    })
                }
        },
        71325: function(e, t, n) {
            n.d(t, {
                WG: function() {
                    return d
                },
                cv: function() {
                    return c
                }
            });
            var r = n(85893),
                o = n(46243),
                l = n(24717),
                i = n(79737),
                a = n(86269),
                s = /(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?:#!\/)?@?([^\/\?\s]*)/,
                c = function(e) {
                    var t;
                    return null === (t = e.match(s)) || void 0 === t ? void 0 : t[1]
                },
                d = function(e) {
                    var t = e.links,
                        n = e.inDetailPage,
                        s = function(e) {
                            return [e.twitter ? {
                                icon: l.OH2,
                                title: "Twitter",
                                href: e.twitter
                            } : null, e.telegram ? {
                                icon: l.$FZ,
                                title: "Telegram",
                                href: e.telegram
                            } : null, e.facebook ? {
                                icon: l.JMA,
                                title: "Facebook",
                                href: e.facebook
                            } : null, e.discord ? {
                                icon: l.Yx1,
                                title: "Discord",
                                href: e.discord
                            } : null, e.youtube ? {
                                icon: l.TiE,
                                title: "Youtube",
                                href: e.youtube
                            } : null, e.instagram ? {
                                icon: l.Vnh,
                                title: "Instagram",
                                href: e.instagram
                            } : null, e.medium ? {
                                icon: l.Ere,
                                title: "Medium",
                                href: e.medium
                            } : null, e.reddit ? {
                                icon: l.o0N,
                                title: "Reddit",
                                href: e.reddit
                            } : null, e.homepage ? {
                                icon: l.TxT,
                                title: "Website",
                                href: e.homepage
                            } : null, e.etherscan ? {
                                icon: l.qFX,
                                title: "Etherscan",
                                href: e.etherscan
                            } : null].filter(a.C)
                        }(t);
                    return (0, r.jsx)(r.Fragment, {
                        children: s.map((function(e, t) {
                            var l = e.title,
                                a = e.icon,
                                s = e.href;
                            return (0, r.jsx)(o.Z, {
                                className: "flex text-gray-700",
                                hoverStyle: "opacity",
                                "aria-label": l,
                                href: (0, i.Y3)(s, {
                                    campaign: "collection"
                                }),
                                isExternal: !0,
                                children: (0, r.jsx)(a, {
                                    className: n ? "h-5 w-5" : "h-5 w-5 lg:h-6 lg:w-6"
                                })
                            }, t)
                        }))
                    })
                }
        },
        65857: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return m
                }
            });
            var r = n(85893),
                o = n(86010),
                l = n(23641),
                i = n(67294),
                a = n(828),
                s = function(e, t) {
                    var n = t.trim();
                    return /^<\/?(ul|ol|li|h|p|bl)/.test(n) ? "\n" + t + "\n" : n.length > 0 ? "<p>".concat(t.trim(), "</p>") : ""
                },
                c = function(e, t, n) {
                    var r = /^http(s)?:\/\//.test(n) ? ' rel="nofollow noopener noreferrer"' : "";
                    return '<a href="'.concat(n, '"').concat(r, ">").concat(t, "</a>")
                },
                d = [
                    [/\[([^[]+)\]\(([^)]+)\)/g, c],
                    [/(\*\*|__)([^*_]*?)\1/g, "<strong>$2</strong>"],
                    [/(\*|_)([^>]*?)\1/g, "<em>$2</em>"],
                    [/([^\n]+)\n([^\n])/g, "$1<br/>$2"],
                    [/([^\n]+)\n{2,}/g, s]
                ],
                u = function(e) {
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;")
                },
                f = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d,
                        r = "\n" + e + "\n\n";
                    t && (r = u(r));
                    var o = !0,
                        l = !1,
                        i = void 0;
                    try {
                        for (var s, c = n[Symbol.iterator](); !(o = (s = c.next()).done); o = !0) {
                            var f = (0, a.Z)(s.value, 2),
                                m = f[0],
                                x = f[1];
                            r = r.replace(m, x)
                        }
                    } catch (h) {
                        l = !0, i = h
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                    return r
                },
                m = function(e) {
                    var t = e.className,
                        n = e.text,
                        a = e.maxLength,
                        s = void 0 === a ? 1e3 : a,
                        c = (0, l.$G)().t,
                        d = !!n && n.length > s,
                        u = (0, i.useState)(!0),
                        m = u[0],
                        x = u[1];
                    if (!n) return null;
                    var h = f(n);
                    return (0, r.jsxs)("div", {
                        className: (0, o.Z)(t, "ts-body-3 lg:ts-body-2 break-word w-full text-gray-500"),
                        children: [(0, r.jsx)("p", {
                            className: (0, o.Z)("slimd", m && "clipped break-all", m && (s > 500 ? "line-clamp-[20]" : "line-clamp-2")),
                            dangerouslySetInnerHTML: {
                                __html: h
                            }
                        }), d && (0, r.jsx)("button", {
                            className: "font-bold text-primary-1",
                            onClick: function() {
                                return x(!m)
                            },
                            children: c(m ? "Show more" : "Show less")
                        })]
                    })
                }
        },
        36349: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return i
                },
                n: function() {
                    return a
                }
            });
            var r = n(8100),
                o = n(31182),
                l = n(46734),
                i = function(e) {
                    var t, n, i = (0, r.ZP)({
                        key: l.pe,
                        contractAddress: e
                    }, (function(e) {
                        var t = e.contractAddress;
                        return (0, o.t2)(t)
                    })).data;
                    return {
                        isInWhitelist: null !== (t = null === i || void 0 === i ? void 0 : i.in_whitelist) && void 0 !== t && t,
                        isCollectionOfferDisabled: null === (n = null === i || void 0 === i ? void 0 : i.disableCollectionOffer) || void 0 === n || n
                    }
                },
                a = function(e, t) {
                    var n, i = (0, r.ZP)({
                        key: l.kv,
                        contractAddress: e,
                        tokenId: t
                    }, (function(e) {
                        var t = e.contractAddress,
                            n = e.tokenId;
                        return (0, o.BB)(t, n)
                    })).data;
                    return {
                        doesSupportSetTerm: null !== (n = null === i || void 0 === i ? void 0 : i.supportSetTerm) && void 0 !== n && n
                    }
                }
        }
    }
]);
//# sourceMappingURL=6088-ae46e91a170f5be0.js.map