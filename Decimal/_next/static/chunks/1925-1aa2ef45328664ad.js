"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1925], {
        8653: function(e, t, r) {
            r.d(t, {
                P: function() {
                    return w
                }
            });
            var n = r(14924),
                a = r(26042),
                l = r(69396),
                s = r(29815),
                i = r(85893),
                o = r(67294),
                c = r(86010),
                u = r(23641),
                d = r(6650),
                f = r(21387),
                m = r(24717),
                h = r(34651),
                x = r(46243),
                p = r(43654),
                v = r(51126),
                g = r(88886),
                y = r(55967),
                _ = r(79737),
                b = r(26473),
                j = function(e) {
                    var t = e.data,
                        r = e.scope,
                        n = e.headerMap,
                        a = e.isOverall,
                        l = e.isCompact,
                        o = (0, u.$G)().t,
                        d = t.collection,
                        f = d.contract,
                        j = d.slug,
                        w = d.iconUrl,
                        N = d.name,
                        Z = d.nameOverride,
                        k = d.verified,
                        z = function(e) {
                            var r, a, l = null !== (r = n[e]) && void 0 !== r ? r : null;
                            return null !== l && null !== (a = t.data[l]) && void 0 !== a ? a : null
                        },
                        E = (0, s.Z)(a ? [{
                            type: "eth",
                            field: "floor",
                            maxFracDigits: 4
                        }, {
                            type: "change",
                            field: "floor_1d_diff"
                        }, {
                            type: "change",
                            field: "floor_7d_diff",
                            hidden: l
                        }] : []).concat([{
                            type: "eth",
                            field: "volume_".concat(r),
                            extra: "volume_".concat(r, "_diff")
                        }, {
                            type: "num",
                            field: "sales_".concat(r),
                            extra: "sales_".concat(r, "_diff")
                        }, {
                            type: "num",
                            field: "holders"
                        }, {
                            type: "num",
                            field: "items"
                        }]),
                        S = [{
                            title: o("Floor"),
                            type: "eth",
                            field: "floor",
                            maxFracDigits: 4
                        }, {
                            title: o("Sales"),
                            type: "num",
                            field: "sales_".concat(r)
                        }],
                        C = (0, p.$)(),
                        O = function(e) {
                            return e > 0 ? "text-primary-4" : e < 0 ? "text-primary-3" : void 0
                        },
                        B = function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                            return null === e ? "-" : "eth" === t ? "".concat((0, y.tX)(e / 1e18, {
                                max: r
                            }), " \u039e") : "change" === t ? (0, y.j5)(100 * e) : (0, y.Kn)(e)
                        };
                    return (0, i.jsxs)("li", {
                        className: "link-box flex items-center space-x-4 rounded-xl py-4 px-3 hover:bg-gray-200 lg:px-4",
                        children: [(0, i.jsxs)("div", {
                            className: "flex flex-1 grow-[3] items-center overflow-hidden",
                            children: [(0, i.jsx)("p", {
                                className: "ts-caption-2 w-7 shrink-0 font-bold text-gray-500 lg:w-9 lg:text-sm",
                                children: t.rank
                            }), (0, i.jsx)(h.Ei, {
                                className: "h-10 w-10 shrink-0 overflow-hidden rounded-full",
                                src: (0, v.VB)(null !== w && void 0 !== w ? w : C, 128)
                            }), (0, i.jsxs)("div", {
                                className: "ml-3 flex min-w-0 flex-1 flex-col",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, i.jsx)(x.Z, {
                                        className: "GA-hot-collections ts-body-3 lg:ts-body-2 link-overlay truncate break-all font-bold text-gray-900",
                                        hoverStyle: "none",
                                        href: (0, _.ec)({
                                            tab: "items",
                                            slug: null !== j && void 0 !== j ? j : (0, b.P8)(f)
                                        }),
                                        children: (0, g.E0)({
                                            name: N,
                                            name_override: Z
                                        })
                                    }), k && (0, i.jsx)(m.SN$, {
                                        className: "ml-1 h-4 w-4 text-primary-1 lg:h-6 lg:w-6"
                                    }), (0, i.jsxs)("p", {
                                        className: "ts-caption-2 ml-auto shrink-0 truncate pl-3 text-gray-500 lg:hidden",
                                        children: [o("Vol."), " ", (0, i.jsx)("strong", {
                                            className: "text-gray-700",
                                            children: B(z("volume_".concat(r)), "eth")
                                        })]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "mt-1 flex flex-1 items-center justify-between gap-4 lg:hidden",
                                    children: S.map((function(e, t) {
                                        var r = e.field ? z(e.field) : null;
                                        return (0, i.jsxs)("div", {
                                            className: "ts-caption-2 flex items-center gap-1 overflow-hidden",
                                            children: [(0, i.jsx)("p", {
                                                className: "truncate text-gray-500",
                                                children: e.title
                                            }), (0, i.jsx)("p", {
                                                className: "truncate text-gray-700",
                                                children: B(r, e.type, e.maxFracDigits)
                                            })]
                                        }, t)
                                    }))
                                })]
                            })]
                        }), E.map((function(e, t) {
                            var r = z(e.field),
                                n = e.extra ? z(e.extra) : null;
                            return (0, i.jsxs)("div", {
                                className: (0, c.Z)("hidden flex-1 flex-col overflow-hidden text-right", !e.hidden && "lg:flex"),
                                children: [(0, i.jsx)("p", {
                                    className: (0, c.Z)("ts-body-3 truncate font-bold", null === r ? "text-gray-500" : "change" === e.type ? O(r) : "text-gray-700"),
                                    children: B(r, e.type, e.maxFracDigits)
                                }), null !== r && e.extra && (0, i.jsx)("p", {
                                    className: (0, c.Z)("ts-caption-2 truncate", null === n ? "text-gray-700" : O(n)),
                                    children: B(n, "change")
                                })]
                            }, t)
                        }))]
                    })
                },
                w = function(e) {
                    var t, r, h = e.className,
                        x = e.children,
                        p = e.query,
                        v = e.data,
                        g = e.error,
                        y = e.isValidating,
                        _ = e.isOverall,
                        b = e.isCompact,
                        w = void 0 !== b && b,
                        N = e.setOrderBy,
                        Z = (0, u.$G)().t,
                        k = p.order.split("_")[1],
                        z = (null !== (r = null === v || void 0 === v || null === (t = v.data) || void 0 === t ? void 0 : t.header) && void 0 !== r ? r : []).reduce((function(e, t, r) {
                            return (0, l.Z)((0, a.Z)({}, e), (0, n.Z)({}, t, r))
                        }), {}),
                        E = (0, s.Z)(_ ? [{
                            title: Z("Floor Price")
                        }, {
                            title: Z("1D Change")
                        }, {
                            title: Z("7D Change"),
                            hidden: w
                        }] : []).concat([{
                            title: Z("Volume"),
                            order: "volume"
                        }, {
                            title: Z("Sales"),
                            order: "sales"
                        }, {
                            title: Z("Owners")
                        }, {
                            title: Z("Items")
                        }]),
                        S = function(e, t) {
                            return p.order === e && p.sort === t ? "text-primary-1" : "text-gray-400"
                        },
                        C = function(e) {
                            return (0, i.jsxs)("span", {
                                className: "ml-1 mb-0.5 inline-flex flex-col align-text-bottom",
                                children: [(0, i.jsx)(m.Kl$, {
                                    className: (0, c.Z)("-mt-0.5 h-4 w-4", S(e, "asc"))
                                }), (0, i.jsx)(m.b4K, {
                                    className: (0, c.Z)("-mt-2.5 -mb-1 h-4 w-4", S(e, "desc"))
                                })]
                            })
                        };
                    return (0, i.jsxs)("section", {
                        className: (0, c.Z)(h, "flex flex-col"),
                        children: [(0, i.jsxs)("header", {
                            className: "ts-caption-2 sticky top-20 z-10 hidden items-center space-x-4 bg-bg px-4 text-right font-bold text-gray-500 lg:flex",
                            children: [(0, i.jsx)("div", {
                                className: "flex-1 grow-[3] overflow-hidden text-left",
                                children: Z("Collection")
                            }), E.map((function(e, t) {
                                var r = e.title,
                                    n = e.order,
                                    a = e.hidden,
                                    l = (0, c.Z)("flex-1 overflow-hidden", a ? "hidden" : "flex");
                                return n ? (0, i.jsxs)("button", {
                                    className: (0, c.Z)(l, "items-center text-right"),
                                    onClick: function() {
                                        return N("".concat(n, "_").concat(k))
                                    },
                                    children: [(0, i.jsx)("span", {
                                        className: "flex-1 truncate",
                                        children: r
                                    }), C("".concat(n, "_").concat(k))]
                                }, t) : (0, i.jsx)("div", {
                                    className: (0, c.Z)(l, "justify-end truncate"),
                                    children: r
                                }, t)
                            }))]
                        }), y ? (0, i.jsx)(f.Z, {}) : g ? (0, i.jsx)(d.Z, {
                            label: Z("Something's wrong")
                        }) : (null === v || void 0 === v ? void 0 : v.data) && 0 !== v.data.items.length ? (0, i.jsx)("ul", {
                            children: v.data.items.map((function(e, t) {
                                return (0, i.jsxs)(o.Fragment, {
                                    children: [t > 0 && (0, i.jsx)("hr", {
                                        className: "mx-3 lg:mx-4"
                                    }), (0, o.createElement)(j, {
                                        data: e,
                                        scope: k,
                                        headerMap: z,
                                        isOverall: _,
                                        isCompact: w,
                                        key: t
                                    })]
                                }, t)
                            }))
                        }) : (0, i.jsx)(d.Z, {}), x]
                    })
                }
        },
        18638: function(e, t, r) {
            r.d(t, {
                dN: function() {
                    return _
                },
                rt: function() {
                    return h
                },
                m9: function() {
                    return y
                },
                Oe: function() {
                    return g
                },
                N8: function() {
                    return p
                }
            });
            var n = r(47568),
                a = r(26042),
                l = r(69396),
                s = r(99534),
                i = r(20414),
                o = r(49770),
                c = r(1604),
                u = r(11923),
                d = r(31182),
                f = r(68123),
                m = c.z.object({
                    last_updated: c.z.number(),
                    x: c.z.number().array(),
                    y: c.z.number().array()
                }),
                h = function(e) {
                    return (0, o.Z)(u.Qb && "/collection/v1/{address}/chart/floor-price".replace("{address}", e), function() {
                        var e = (0, n.Z)((function(e) {
                            var t, r, n, o, c, u, f, h;
                            return (0, i.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, (0, d.U2)(e, {}, null)];
                                    case 1:
                                        if (200 !== (t = i.sent()).status || 0 !== t.data.code) throw Error("not ok");
                                        return r = m.parse(t.data.data), n = r.x, o = r.y, c = (0, s.Z)(r, ["x", "y"]), 0 === n.length ? [2, null] : -1 === (u = o.findIndex((function(e) {
                                            return e > 0
                                        }))) ? [2, null] : (f = n.slice(u), h = o.slice(u), f.length < 2 ? [2, null] : [2, (0, l.Z)((0, a.Z)({}, c), {
                                            x: f,
                                            y: h
                                        })])
                                }
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), {
                        onError: function(e) {
                            return console.error(e)
                        }
                    })
                },
                x = c.z.object({
                    rank: c.z.number(),
                    url: c.z.string()
                }).nullish(),
                p = function(e, t) {
                    return (0, o.Z)(u.Qb && {
                        url: "/collection/v1/{address}/rank/ts".replace("{address}", e),
                        query: t
                    }, function() {
                        var e = (0, n.Z)((function(e) {
                            var t, r, n;
                            return (0, i.__generator)(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return t = e.url, r = e.query, [4, (0, d.U2)(t, r, null)];
                                    case 1:
                                        if (200 !== (n = a.sent()).status || 0 !== n.data.code) throw Error("not ok");
                                        return [2, x.parse(n.data.data)]
                                }
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), {
                        onError: function(e) {
                            return console.error(e)
                        }
                    })
                },
                v = c.z.object({
                    rank: c.z.number(),
                    url: c.z.string()
                }).nullish(),
                g = function(e, t) {
                    return (0, o.Z)(u.Qb && {
                        url: "/collection/v1/{address}/rank/rs".replace("{address}", e),
                        query: t
                    }, function() {
                        var e = (0, n.Z)((function(e) {
                            var t, r, n;
                            return (0, i.__generator)(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return t = e.url, r = e.query, [4, (0, d.U2)(t, r, null)];
                                    case 1:
                                        if (200 !== (n = a.sent()).status || 0 !== n.data.code) throw Error("not ok");
                                        return [2, v.parse(n.data.data)]
                                }
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), {
                        onError: function(e) {
                            return console.error(e)
                        }
                    })
                },
                y = function(e) {
                    var t = e.platform,
                        r = e.orderBy,
                        a = e.page,
                        l = e.pageSize;
                    return (0, o.Z)({
                        url: "/collection/v1/ranking2/{platform}".replace("{platform}", t),
                        orderBy: r,
                        page: a,
                        pageSize: l
                    }, function() {
                        var e = (0, n.Z)((function(e) {
                            var t, r, n, a, l;
                            return (0, i.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t = e.url, r = e.orderBy, n = e.page, a = e.pageSize, [4, (0, d.U2)(t, {
                                            orderBy: r,
                                            page: n,
                                            pageSize: a
                                        }, null)];
                                    case 1:
                                        if (200 !== (l = s.sent()).status || 0 !== l.data.code) throw Error("not ok");
                                        return [2, l.data.data]
                                }
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                },
                _ = function() {
                    var e = (0, n.Z)((function(e) {
                        var t, r, n, a;
                        return (0, i.__generator)(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, (0, d.HF)("/collection/v1/nft/estimate/bulk", {}, e)];
                                case 1:
                                    if (200 === (t = l.sent()).status && 0 === t.data.code) return [2, null !== (r = t.data.data) && void 0 !== r ? r : []];
                                    throw new f.ED(null !== (a = null === (n = t.data.code) || void 0 === n ? void 0 : n.toString()) && void 0 !== a ? a : f.md)
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, n.Z)((function(e, t) {
                    var r, n, a;
                    return (0, i.__generator)(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, (0, d.U2)("/collection/v1/{address}/{tokenId}/estimate".replace(/{address}/, e).replace(/{tokenId}/, t), {}, null)];
                            case 1:
                                if (200 === (r = l.sent()).status && 0 === r.data.code) return [2, r.data.data];
                                throw new f.ED(null !== (a = null === (n = r.data.code) || void 0 === n ? void 0 : n.toString()) && void 0 !== a ? a : f.md)
                        }
                    }))
                }))
            }()
        },
        40568: function(e, t, r) {
            r.d(t, {
                _: function() {
                    return c
                }
            });
            var n, a, l = r(67294),
                s = r(1604),
                i = r(93224),
                o = (n = s.z.enum(["volume_5m", "volume_15m", "volume_1h", "volume_1d", "volume_7d", "sales_5m", "sales_15m", "sales_1h", "sales_1d", "sales_7d"]), a = "volume_1d", s.z.preprocess((function(e) {
                    return n.safeParse(e).success ? e : a
                }), s.z.custom((function() {
                    return !0
                })))),
                c = function() {
                    var e = (0, i.oS)(),
                        t = e.value,
                        r = e.set;
                    return [o.parse(t.rankingOrderBy), (0, l.useCallback)((function(e) {
                        return r({
                            rankingOrderBy: e
                        })
                    }), [r])]
                }
        }
    }
]);
//# sourceMappingURL=1925-1aa2ef45328664ad.js.map