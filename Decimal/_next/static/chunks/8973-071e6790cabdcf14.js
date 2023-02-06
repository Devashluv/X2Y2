"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8973], {
        98973: function(e, s, l) {
            l.d(s, {
                b: function() {
                    return L
                }
            });
            var t = l(26042),
                n = l(69396),
                a = l(85893),
                r = l(34651),
                c = l(47398),
                o = l(92684),
                i = l(86010),
                d = l(9279),
                x = l(23641),
                m = l(67294),
                f = l(46243),
                u = l(36429),
                h = l(5936),
                p = l(21645),
                v = l(43654),
                j = l(92212),
                g = l(51126),
                w = l(88886),
                y = l(55967),
                N = l(23351),
                b = l(34895),
                k = l(79737),
                _ = l(16869),
                I = l(51823),
                Z = l(76913),
                C = l(40721),
                S = l(71386),
                E = function(e) {
                    var s, l, o, E, L, P, T, A, U = e.item,
                        z = e.showContractPopover,
                        M = (0, x.$G)().t,
                        $ = (0, h.ZP)().fmtCoinNumber,
                        q = (0, v.$)(),
                        D = (0, u.Fj)(),
                        F = (0, u.ah)(),
                        J = (0, m.useState)(!1),
                        Q = J[0],
                        B = J[1],
                        G = function() {
                            switch (U.type) {
                                case "offer_listing":
                                    return {
                                        title: M("Listing"),
                                        Icon: p.wUq
                                    };
                                case "new_sale":
                                    return {
                                        title: M("Sale"),
                                        Icon: p.mJ4
                                    };
                                case "new_buy_offer":
                                    return {
                                        title: M("Offer"),
                                        Icon: p.Q_s
                                    };
                                case "transfer":
                                    return {
                                        title: M("Transfer"),
                                        Icon: p.TJN
                                    };
                                case "sell_cancel":
                                case "buy_offer_cancel":
                                    return {
                                        title: M("Cancel"),
                                        Icon: p.wUq
                                    };
                                default:
                                    return {
                                        title: M("N/A"),
                                        Icon: p.q4m
                                    }
                            }
                        }(),
                        H = G.title,
                        O = G.Icon,
                        K = !U.nft,
                        V = function(e, s) {
                            var l, c, o;
                            if (!e.nft) {
                                if (!e.contract) throw new Error("This should never happen");
                                var i, d = e.contract;
                                return {
                                    networkId: d.network_id,
                                    url: (0, k.PQ)(d),
                                    title: (0, w.E0)(d),
                                    verified: d.verified,
                                    image: (0, a.jsx)(r.Ei, {
                                        className: "rounded-full",
                                        src: (0, g.VB)(null !== (i = d.icon_url) && void 0 !== i ? i : s, 128)
                                    }),
                                    contract: null
                                }
                            }
                            var x = e.nft,
                                m = x.network_id;
                            return {
                                networkId: m,
                                url: (0, k.ND)({
                                    networkId: m,
                                    tokenContract: x.contract.contract,
                                    tokenId: x.token_id
                                }),
                                title: (null === (l = x.metadata) || void 0 === l || null === (c = l.meta) || void 0 === c ? void 0 : c.name) || "#" + x.token_id,
                                verified: !1,
                                image: (0, a.jsx)(Z.Dp, (0, n.Z)((0, t.Z)({
                                    w: "full"
                                }, (0, Z.KO)((0, N.YZ)(null === (o = x.metadata) || void 0 === o ? void 0 : o.meta, x.contract.display_options))), {
                                    tokenAddress: x.contract.contract,
                                    tokenId: x.token_id,
                                    imageSizes: ["64px"]
                                })),
                                contract: x.contract
                            }
                        }(U, q),
                        W = U.price ? parseFloat(U.price) : null,
                        X = null !== (L = null === (s = U.order) || void 0 === s ? void 0 : s.amount) && void 0 !== L ? L : 1,
                        Y = (0, b.L)(V.networkId, null !== (P = null === (l = U.order) || void 0 === l ? void 0 : l.currency) && void 0 !== P ? P : d.d).symbol,
                        R = (0, j.aC)().user,
                        ee = (0, j.LU)(R),
                        se = (0, a.jsx)(c.u, {
                            label: F(U.created_at).format("LL HH:mm"),
                            hasArrow: !0,
                            placement: "top",
                            children: D(U.created_at)
                        });
                    return (0, a.jsxs)("div", {
                        className: "link-box group flex flex-col lg:min-w-[1000px]",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col space-y-4 rounded-xl px-4 py-4 group-hover:bg-gray-200 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0",
                            children: [(0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-1 flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [O && (0, a.jsx)(O, {
                                        boxSize: [4, 5]
                                    }), (0, a.jsx)("div", {
                                        className: "ml-2 flex min-w-[80px] space-x-2 lg:ml-3 lg:flex-col lg:space-x-0",
                                        children: (0, a.jsx)("p", {
                                            className: "ts-caption-2 lg:ts-body-2 font-bold",
                                            children: H
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 items-center space-x-2 lg:space-x-3",
                                    children: [(0, a.jsx)(f.Z, {
                                        className: (0, i.Z)("h-10 w-10 flex-shrink-0 overflow-hidden bg-gray-300 lg:h-12 lg:w-12", K ? "rounded-full" : "rounded-none"),
                                        hoverStyle: "opacity",
                                        href: V.url,
                                        children: V.image
                                    }), (0, a.jsxs)("div", {
                                        className: "flex min-w-0 flex-1 flex-col space-y-0.5",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0, a.jsx)(c.u, {
                                                label: z && !V.contract && U.contract ? (0, a.jsx)(I.e, (0, t.Z)({}, U.contract)) : void 0,
                                                placement: "top",
                                                hasArrow: !0,
                                                children: (0, a.jsx)(f.Z, {
                                                    className: "ts-body-3 lg:ts-body-2 truncate font-bold",
                                                    href: V.url,
                                                    children: V.title
                                                })
                                            }), V.verified && (0, a.jsx)(p.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        }), V.contract && (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-1 overflow-hidden",
                                            children: [(0, a.jsx)(c.u, {
                                                label: z && U.contract ? (0, a.jsx)(I.e, (0, t.Z)({}, U.contract)) : void 0,
                                                placement: "top",
                                                hasArrow: !0,
                                                children: (0, a.jsx)(f.Z, {
                                                    className: "ts-caption-3 lg:ts-caption-2 overflow-hidden break-all text-gray-500 line-clamp-1",
                                                    href: (0, k.PQ)(V.contract),
                                                    children: (0, w.E0)(V.contract)
                                                })
                                            }), V.contract.verified && (0, a.jsx)(p.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        })]
                                    }), W && (0, a.jsxs)("div", {
                                        className: "flex flex-col items-end",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0, a.jsx)(C.T, {
                                                className: "z-10 h-4 w-4 lg:h-5 lg:w-5",
                                                symbol: Y
                                            }), (0, a.jsx)("p", {
                                                className: "ts-body-3 lg:ts-body-2 font-bold",
                                                children: (0, y.tX)(W)
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "ts-caption-3 lg:ts-caption-2 flex space-x-2 text-gray-500",
                                            children: [(0, a.jsx)("p", {
                                                children: $(W, Y)
                                            }), X > 1 && (0, a.jsxs)("div", {
                                                className: "flex items-center space-x-1",
                                                children: [(0, a.jsx)(p.B1n, {
                                                    w: 3,
                                                    h: 3
                                                }), (0, a.jsx)("div", {
                                                    children: X
                                                })]
                                            })]
                                        })]
                                    }), (0, a.jsx)("button", {
                                        className: "link-overlay text-gray-500 lg:hidden",
                                        onClick: function() {
                                            return B((function(e) {
                                                return !e
                                            }))
                                        },
                                        children: (0, a.jsx)(p.DJW, {
                                            className: (0, i.Z)("!h-6 !w-6 transition-transform", !Q && "rotate-180")
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: (0, i.Z)("min-w-0 flex-1 items-center space-x-2 lg:flex", Q ? "flex" : "hidden"),
                                children: [(0, a.jsxs)("div", {
                                    className: "min-w-0 flex-1 space-y-0.5 overflow-hidden truncate",
                                    children: [U.from_address ? (0, a.jsx)(S.m, {
                                        className: "ts-body-3 lg:ts-body-2",
                                        networkId: V.networkId,
                                        address: U.from_address,
                                        nickname: null !== (T = null === (o = U.from_user) || void 0 === o ? void 0 : o.nickname) && void 0 !== T ? T : null,
                                        currentUser: ee
                                    }) : (0, a.jsx)("p", {
                                        className: "ts-body-3 lg:ts-body-2",
                                        children: "-"
                                    }), (0, a.jsx)("p", {
                                        className: "ts-caption-3 lg:ts-caption-2 text-gray-500",
                                        children: M("From")
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "min-w-0 flex-1 space-y-0.5 overflow-hidden truncate",
                                    children: [U.to_address ? (0, a.jsx)(S.m, {
                                        className: "ts-body-3 lg:ts-body-2",
                                        networkId: V.networkId,
                                        address: U.to_address,
                                        nickname: null !== (A = null === (E = U.to_user) || void 0 === E ? void 0 : E.nickname) && void 0 !== A ? A : null,
                                        currentUser: ee
                                    }) : (0, a.jsx)("p", {
                                        className: "ts-body-3 lg:ts-body-2",
                                        children: "-"
                                    }), (0, a.jsx)("p", {
                                        className: "ts-caption-3 lg:ts-caption-2 text-gray-500",
                                        children: M("To")
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "min-w-0 flex-1 space-y-0.5 overflow-hidden truncate",
                                    children: [U.tx ? (0, a.jsxs)(f.Z, {
                                        className: "flex items-center space-x-1",
                                        href: (0, _.SG)(U.tx, V.networkId),
                                        isExternal: !0,
                                        children: [(0, a.jsx)("span", {
                                            className: "ts-body-3 lg:ts-body-2",
                                            children: se
                                        }), (0, a.jsx)(p.yPv, {
                                            className: "!text-gray-500",
                                            boxSize: [3, 4]
                                        })]
                                    }) : (0, a.jsx)("p", {
                                        className: "ts-body-3 lg:ts-body-2",
                                        children: se
                                    }), (0, a.jsx)("p", {
                                        className: "ts-caption-3 lg:ts-caption-2 text-gray-500",
                                        children: U.tx ? M("Tx") : M("Time")
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("hr", {
                            className: "mx-4 w-auto"
                        }), (0, a.jsx)(f.Z, {
                            className: "link-overlay hidden lg:block",
                            href: V.url
                        })]
                    })
                },
                L = function(e) {
                    var s, l = e.className,
                        t = e.items,
                        n = e.showContractPopover,
                        r = void 0 !== n && n,
                        c = e.onMouseEnter,
                        d = e.onMouseLeave,
                        x = null !== (s = (0, o.Sx)({
                            base: !1,
                            md: !0
                        })) && void 0 !== s && s;
                    return (0, a.jsx)("div", {
                        className: (0, i.Z)(l, "-mx-3 overflow-x-auto md:mx-0"),
                        onMouseEnter: c,
                        onMouseLeave: d,
                        children: t.map((function(e, s) {
                            return (0, a.jsx)(E, {
                                item: e,
                                showContractPopover: r && x
                            }, s)
                        }))
                    })
                }
        }
    }
]);
//# sourceMappingURL=8973-071e6790cabdcf14.js.map