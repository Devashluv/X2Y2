"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2447], {
        8007: function(e, r, n) {
            n.d(r, {
                u: function() {
                    return v
                }
            });
            var t, s = n(26042),
                a = n(69396),
                o = n(99534),
                l = n(85893),
                c = n(67294),
                i = n(68527),
                d = n(10894),
                u = n(23641),
                f = n(36429),
                x = n(21645);
            ! function(e) {
                e[e.Current = 0] = "Current", e[e.LowEllipsis = 1] = "LowEllipsis", e[e.HighEllipsis = 2] = "HighEllipsis", e[e.LowEnd = 3] = "LowEnd", e[e.HighEnd = 4] = "HighEnd", e[e.Standard = 5] = "Standard"
            }(t || (t = {}));
            var h = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return {
                        page: r,
                        position: e
                    }
                },
                p = n(34557),
                m = function(e) {
                    var r = e.children,
                        n = e.onButtonClick,
                        t = e.urlFor,
                        c = e.page,
                        d = e.disabled,
                        u = void 0 !== d && d,
                        f = (0, o.Z)(e, ["children", "onButtonClick", "urlFor", "page", "disabled"]);
                    return u ? (0, l.jsx)(i.kC, (0, a.Z)((0, s.Z)({
                        as: "span",
                        color: "text.lv4",
                        cursor: "not-allowed"
                    }, f), {
                        children: r
                    })) : t ? (0, l.jsx)(i.kC, (0, a.Z)((0, s.Z)({
                        as: p.Z
                    }, f), {
                        href: t(c),
                        onClick: n,
                        children: r
                    })) : (0, l.jsx)(i.kC, (0, a.Z)((0, s.Z)({}, f), {
                        onClick: n,
                        cursor: "pointer",
                        children: r
                    }))
                },
                v = function(e) {
                    var r = e.total,
                        n = e.page,
                        p = e.limit,
                        v = e.urlFor,
                        j = e.onPageChange,
                        g = (0, o.Z)(e, ["total", "page", "limit", "urlFor", "onPageChange"]),
                        y = (0, u.$G)().t,
                        N = (0, f._B)(),
                        b = {
                            textStyle: "button_2",
                            color: N.gray500,
                            px: [4, 5],
                            py: 3,
                            lineHeight: 4,
                            userSelect: "none"
                        },
                        w = (0, c.useCallback)((function(e) {
                            return {
                                color: e ? N.gray300 : N.gray500,
                                boxSize: 5
                            }
                        }), [N]);
                    if (r <= p) return null;
                    var k = function(e, r, n, s, a) {
                            var o = e >= 1 ? e : 1,
                                l = r >= 0 ? r : 0,
                                c = n >= 0 ? n : 0,
                                i = s >= 0 ? s : 0,
                                d = a >= 1 ? a : 1,
                                u = Math.floor(c / o) + (c % o === 0 ? 0 : 1),
                                f = Math.floor(l / o) + 1,
                                x = f <= 1 ? 0 : f - 1,
                                p = f >= u ? 0 : f + 1,
                                m = [];
                            m.push(h(t.LowEnd, x));
                            for (var v = f - i - Math.max(i + f - u, 0) - 1, j = 1 + d, g = 1; g < f; g++) {
                                if (!(g < j)) {
                                    m.push(g === j && g < v ? h(t.LowEllipsis) : h(t.Standard, g));
                                    for (var y = Math.max(g, v) + 1; y < f; y++) m.push(h(t.Standard, y));
                                    break
                                }
                                m.push(h(t.Standard, g))
                            }
                            m.push(h(t.Current, f));
                            for (var N = f + i + Math.max(i - f + 1, 0) + 1, b = u - d, w = f + 1; w <= u; w++) {
                                if (!(w < N)) {
                                    m.push(w === N && w < b ? h(t.HighEllipsis) : h(t.Standard, w));
                                    for (var k = Math.max(w, b) + 1; k <= u; k++) m.push(h(t.Standard, k));
                                    break
                                }
                                m.push(h(t.Standard, w))
                            }
                            return m.push(h(t.HighEnd, p)), m
                        }(p, (n - 1) * p, r, 1, 1),
                        Z = k.map((function(e, r) {
                            var n = e.page,
                                t = e.position,
                                o = 3 === t ? y("Previous page") : 4 === t ? y("Next page") : "".concat(y("Page"), " ").concat(n),
                                u = 0 === n;
                            switch (t) {
                                case 0:
                                    return (0, c.createElement)(i.kC, (0, a.Z)((0, s.Z)({
                                        as: "span"
                                    }, b), {
                                        bg: "text.lv1",
                                        color: N.gray800,
                                        key: r
                                    }), n);
                                case 1:
                                case 2:
                                    return (0, l.jsx)(d.JO, {
                                        as: x.kkd,
                                        color: N.gray300
                                    }, r);
                                case 3:
                                case 4:
                                    return (0, l.jsxs)(m, {
                                        onButtonClick: function(e) {
                                            return null === j || void 0 === j ? void 0 : j(e, n)
                                        },
                                        urlFor: v,
                                        disabled: u,
                                        "aria-label": o,
                                        px: 2,
                                        page: n,
                                        children: [3 === t && (0, l.jsx)(d.JO, (0, s.Z)({
                                            as: x.SUf
                                        }, w(u))), 4 === t && (0, l.jsx)(d.JO, (0, s.Z)({
                                            as: x.txy
                                        }, w(u)))]
                                    }, r);
                                case 5:
                                    return (0, l.jsx)(m, (0, a.Z)((0, s.Z)({}, b), {
                                        onButtonClick: function(e) {
                                            return null === j || void 0 === j ? void 0 : j(e, n)
                                        },
                                        urlFor: v,
                                        disabled: u,
                                        "aria-label": o,
                                        page: n,
                                        children: n
                                    }), r);
                                default:
                                    return null
                            }
                        }));
                    return (0, l.jsx)(i.kC, (0, a.Z)((0, s.Z)({
                        w: "full",
                        align: "center",
                        justify: "center",
                        wrap: "wrap"
                    }, g), {
                        children: (0, l.jsx)(i.Ug, {
                            px: [3, 5],
                            spacing: 0,
                            rounded: "full",
                            borderWidth: "2px",
                            borderColor: N.gray300,
                            children: Z
                        })
                    }))
                }
        },
        43076: function(e, r, n) {
            n.d(r, {
                Y: function() {
                    return Z
                },
                y: function() {
                    return k
                }
            });
            var t = n(47568),
                s = n(20414),
                a = n(85893),
                o = n(57870),
                l = n(61744),
                c = n(2593),
                i = n(23641),
                d = n(33128),
                u = n(36429),
                f = n(5936),
                x = n(24717),
                h = n(92212),
                p = n(55967),
                m = n(79948),
                v = n(64412),
                j = n(64286),
                g = n(34895),
                y = n(54765),
                N = n(68663),
                b = n(16531),
                w = n(78454),
                k = function(e, r, n) {
                    var t = (0, g.L)(e, n),
                        s = t.symbol,
                        a = t.decimals,
                        o = "ETH" === s || "WETH" === s ? "\u039e" : s;
                    return "".concat((0, p.tX)(parseFloat(l.formatUnits(r, a))), " ").concat(o)
                },
                Z = function(e) {
                    var r = e.offers,
                        n = e.bundle,
                        Z = e.isOwner,
                        P = e.owner,
                        _ = e.sellOrder,
                        S = e.invalidOfferIds,
                        C = e.showWarning,
                        O = e.floorPrice,
                        T = e.osFloorPrice,
                        E = e.setLoadOffers,
                        A = (0, i.$G)().t,
                        F = n[0].info,
                        R = F.networkId,
                        $ = F.creator,
                        D = "RemoteSuccess" === r._tag ? C ? r.value.filter((function(e) {
                            return !e.is_collection_offer
                        }))[0] : r.value[0] : null,
                        I = (0, u.dd)(b.zD),
                        L = (0, u.dd)(b.VD),
                        H = (0, u.dd)(b.$5),
                        z = (0, u.dd)(b.LZ),
                        M = (0, u.dd)(b.km),
                        W = (0, u.r$)().reloadPage,
                        B = (0, h.eX)().requireRegisteredUser,
                        G = (0, f.ZP)().fmtCoinNumber,
                        Q = function(e) {
                            return (0, g.L)(R, e).symbol
                        },
                        U = function(e) {
                            return "".concat((0, p.tX)(parseFloat(e.price)), " ").concat(Q(e.currency))
                        },
                        J = function(e) {
                            return G(parseFloat(e.price), Q(e.currency))
                        },
                        V = n[0].tokenPair,
                        Y = V.token,
                        K = V.tokenId,
                        X = V.kind,
                        q = Z && P,
                        ee = function(e, r) {
                            z.onOpen({
                                user: e,
                                bundle: n,
                                price: r.price,
                                currency: r.currency,
                                onAction: function(n) {
                                    L.onOpen({
                                        provider: e.web3Provider,
                                        networkId: R,
                                        tokenKind: X,
                                        contracts: [{
                                            name: $,
                                            contract: Y
                                        }],
                                        title: A("Accept Offer"),
                                        subtitle: A("Accept the offer"),
                                        desc: A("Confirm the transaction to accept the offer for your item(s).", {
                                            count: 1
                                        }),
                                        loadingText: A("Waiting for transaction\u2026"),
                                        actionText: A("Accept"),
                                        doneText: A("You accepted the offer"),
                                        onAction: re(e, r, n)
                                    })
                                }
                            })
                        },
                        re = function(e, r, n) {
                            return function() {
                                var a = (0, t.Z)((function(t, a) {
                                    var o;
                                    return (0, s.__generator)(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                t(!0), s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 5, 6, 7]), [4, (0, m.sw)({
                                                    networkId: R,
                                                    user: e,
                                                    contract: Y,
                                                    tokenId: K,
                                                    currency: r.currency,
                                                    price: r.price,
                                                    maker: r.maker,
                                                    isCollection: !1,
                                                    orderId: r.id,
                                                    royalty: n,
                                                    handleWarning: function(e) {
                                                        console.warn("Something's wrong", e), (0, j.Z)({
                                                            status: "warning",
                                                            title: A("Something's wrong")
                                                        })
                                                    }
                                                })];
                                            case 2:
                                                return [4, s.sent().wait()];
                                            case 3:
                                                return s.sent(), [4, W()];
                                            case 4:
                                                return s.sent(), a(), [3, 7];
                                            case 5:
                                                return o = s.sent(), console.error(o), (0, m.RC)(o) && (0, v.L)(e, [r.id]), ne(e, o), [3, 7];
                                            case 6:
                                                return t(!1), [7];
                                            case 7:
                                                return [2]
                                        }
                                    }))
                                }));
                                return function(e, r) {
                                    return a.apply(this, arguments)
                                }
                            }()
                        },
                        ne = function(e, r) {
                            var n = (0, m.e$)(A, r);
                            (0, j.Z)({
                                status: "error",
                                title: (0, a.jsx)(d.Z, {
                                    user: e.web3Provider.getSigner(),
                                    networkId: R,
                                    tokenContract: Y,
                                    tokenId: K,
                                    error: n
                                })
                            })
                        },
                        te = function(e, r) {
                            var n = function() {
                                return ee(e, r)
                            };
                            _ && (0, w.v8)(r.currency) !== (0, w.v8)(_.currency) ? H.onOpen({
                                sellOrder: _,
                                offer: r,
                                fmtCurrency: Q,
                                fmtPrice: U,
                                fmtPriceUsd: J,
                                onContinue: n
                            }) : n()
                        };
                    return (0, a.jsxs)(o.p, {
                        as: "section",
                        className: "flex flex-col overflow-hidden rounded-xl border",
                        defaultOpen: Z,
                        children: [(0, a.jsx)(o.p.Button, {
                            children: (0, a.jsxs)("header", {
                                className: "flex items-center bg-gray-100 p-6",
                                children: [(0, a.jsx)("h2", {
                                    className: "ts-button-2 lg:ts-button-1 truncate",
                                    children: A("Offers")
                                }), D && !q && (0, a.jsxs)("p", {
                                    className: "ts-hairline-2 ml-2 truncate text-gray-500",
                                    children: ["~", k(R, c.O$.from(D.price), D.currency)]
                                }), (0, a.jsx)("div", {
                                    className: "flex-1"
                                }), !q && (0, a.jsxs)("div", {
                                    className: "GA-make-offer ".concat(N.TF.text, " text-primary-1 hover:opacity-50"),
                                    onClick: function(e) {
                                        e.stopPropagation(), B((function(e) {
                                            return (0, y._)(e, R, (function() {
                                                return I.onOpen({
                                                    user: e,
                                                    bundle: n,
                                                    sellOrder: _,
                                                    floorPrice: O,
                                                    osFloorPrice: T,
                                                    approveTokenModal: M
                                                })
                                            }), (0, y.V)(A))
                                        }))
                                    },
                                    children: [(0, a.jsx)(x.Q_s, {
                                        className: "mr-1 h-4 w-4"
                                    }), A("Make offer")]
                                }), q && D && (0, a.jsxs)("div", {
                                    className: "GA-make-offer ".concat(N.TF.text, " text-primary-1 hover:opacity-50"),
                                    onClick: function(e) {
                                        if (!D.maker) return null;
                                        var r = {
                                            id: D.id,
                                            currency: D.currency,
                                            maker: D.maker.address,
                                            price: l.formatEther(D.price)
                                        };
                                        e.stopPropagation(), B((function(e) {
                                            return (0, y._)(e, R, (function() {
                                                return te(e, r)
                                            }), (0, y.V)(A))
                                        }))
                                    },
                                    children: [(0, a.jsx)(x.WcW, {
                                        className: "mr-1 h-4 w-4"
                                    }), A("Accept highest:"), " ", k(R, c.O$.from(D.price), D.currency)]
                                }), (0, a.jsx)(x.DJW, {
                                    className: "ml-2 h-6 w-6 text-gray-500 ui-open:rotate-180 motion-safe:duration-200"
                                })]
                            })
                        }), (0, a.jsx)(o.p.Panel, {
                            className: "border-t p-6",
                            children: (0, a.jsx)(w.w_, {
                                offers: r,
                                bundle: n,
                                isOwner: Z,
                                sellOrder: _,
                                invalidOfferIds: S,
                                showWarning: C,
                                setLoadOffers: E,
                                fmtCurrency: Q,
                                fmtPrice: U,
                                fmtPriceUsd: J,
                                acceptAndApprove: ee,
                                onAccept: re,
                                handleError: ne,
                                acceptOffer: te
                            })
                        }), H.component, z.component, M.component, L.component, I.component]
                    })
                }
        },
        35770: function(e, r, n) {
            n.d(r, {
                k: function() {
                    return c
                }
            });
            var t = n(85893),
                s = n(23641),
                a = n(24717),
                o = n(6650),
                l = n(46243),
                c = function(e) {
                    var r = e.showLearnMore,
                        n = void 0 === r || r,
                        c = (0, s.$G)().t;
                    return (0, t.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, t.jsx)(o.Z, {}), n && (0, t.jsxs)(l.Z, {
                            className: "ts-button-2 flex items-center self-center text-primary-1",
                            hoverStyle: "opacity",
                            href: "https://docs.x2y2.io/category/borrowlend-eth-via-nft-loans",
                            isExternal: !0,
                            children: [(0, t.jsx)(a.lPH, {
                                className: "mr-1 h-4 w-4"
                            }), (0, t.jsx)("span", {
                                children: c("Learn more about the NFT Loan")
                            })]
                        })]
                    })
                }
        },
        55851: function(e, r, n) {
            n.d(r, {
                F: function() {
                    return Q
                }
            });
            var t = n(47568),
                s = n(14924),
                a = n(26042),
                o = n(69396),
                l = n(828),
                c = n(29815),
                i = n(20414),
                d = n(85893),
                u = n(47398),
                f = n(86010),
                x = n(2593),
                h = n(23641),
                p = n(67294),
                m = n(8100),
                v = n(46243),
                j = n(36429),
                g = n(21645),
                y = n(43654),
                N = n(92212),
                b = n(83560),
                w = n(88886),
                k = n(55967),
                Z = n(87974),
                P = n(73923),
                _ = n(12799),
                S = n(64286),
                C = n(79737),
                O = n(26473),
                T = n(31182),
                E = n(16869),
                A = n(54765),
                F = n(47077),
                R = n(68663),
                $ = n(16531),
                D = n(8007),
                I = n(95433),
                L = n(6650),
                H = n(21387),
                z = n(35770),
                M = n(91425),
                W = n(40974),
                B = function(e) {
                    var r = e.pageType,
                        n = e.fetchQuery,
                        t = e.dispatchFetchQueryAction,
                        s = (0, h.$G)().t,
                        l = (0, j._B)(),
                        c = function(e, t) {
                            return "userProfile" === r ? void 0 : n.order === e && n.sort === t ? "#3B82F6" : l.gray400
                        },
                        i = function(e) {
                            return "userProfile" !== r && (0, d.jsxs)("div", {
                                className: "float-right ml-1 flex flex-col",
                                children: [(0, d.jsx)(g.Kl$, {
                                    boxSize: 5,
                                    color: c(e, "asc")
                                }), (0, d.jsx)(g.b4K, {
                                    className: "-mt-3",
                                    boxSize: 5,
                                    color: c(e, "desc")
                                })]
                            })
                        };
                    return (0, d.jsx)("div", {
                        className: (0, f.Z)("link-box flex flex-col", "loanPage" === r ? "min-w-[950px]" : "min-w-[1150px]"),
                        children: (0, d.jsx)("div", {
                            className: "mt-3 flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2",
                            children: (0, d.jsxs)("div", {
                                className: "ts-caption-2 flex flex-1 items-center space-x-2 font-bold text-gray-500",
                                children: ["userProfile" !== r && (0, d.jsx)("div", {
                                    className: (0, f.Z)("min-w-0 flex-1 truncate", "loanPage" === r && "grow-[1.25]"),
                                    children: s("From")
                                }), "userProfile" === r && (0, d.jsx)("div", {
                                    className: "flex-1 grow-[1.75]",
                                    children: s("Project/Contract")
                                }), (0, d.jsx)("div", {
                                    className: "flex-1 grow-[1.25]",
                                    children: (0, d.jsxs)("div", (0, o.Z)((0, a.Z)({
                                        className: (0, f.Z)("flex items-center", "userProfile" !== r && "cursor-pointer")
                                    }, "userProfile" !== r && {
                                        onClick: function() {
                                            return t({
                                                type: "SET_ORDER_AND_SORT",
                                                payload: {
                                                    order: "amount"
                                                }
                                            })
                                        }
                                    }), {
                                        children: [(0, d.jsx)("span", {
                                            children: s("Loan value")
                                        }), (0, d.jsx)("div", {
                                            className: "float-right ml-1 flex flex-col",
                                            children: i("amount")
                                        })]
                                    }))
                                }), (0, d.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, d.jsxs)("div", (0, o.Z)((0, a.Z)({
                                        className: (0, f.Z)("flex items-center", "userProfile" !== r && "cursor-pointer")
                                    }, "userProfile" !== r && {
                                        onClick: function() {
                                            return t({
                                                type: "SET_ORDER_AND_SORT",
                                                payload: {
                                                    order: "repayment"
                                                }
                                            })
                                        }
                                    }), {
                                        children: [(0, d.jsx)("span", {
                                            children: s("Repayment")
                                        }), i("repayment")]
                                    }))
                                }), (0, d.jsx)("div", {
                                    className: "flex-1",
                                    children: s("Interest")
                                }), (0, d.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, d.jsxs)("div", (0, o.Z)((0, a.Z)({
                                        className: (0, f.Z)("flex items-center", "userProfile" !== r && "cursor-pointer")
                                    }, "userProfile" !== r && {
                                        onClick: function() {
                                            return t({
                                                type: "SET_ORDER_AND_SORT",
                                                payload: {
                                                    order: "apr"
                                                }
                                            })
                                        }
                                    }), {
                                        children: [(0, d.jsx)("span", {
                                            children: s("APR")
                                        }), i("apr")]
                                    }))
                                }), (0, d.jsx)("div", {
                                    className: "flex-1",
                                    children: s("Duration")
                                }), (0, d.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, d.jsxs)("div", (0, o.Z)((0, a.Z)({
                                        className: (0, f.Z)("flex items-center", "userProfile" !== r && "cursor-pointer")
                                    }, "userProfile" !== r && {
                                        onClick: function() {
                                            return t({
                                                type: "SET_ORDER_AND_SORT",
                                                payload: {
                                                    order: "createdAt"
                                                }
                                            })
                                        }
                                    }), {
                                        children: [(0, d.jsx)("span", {
                                            children: s("Created at")
                                        }), i("createdAt")]
                                    }))
                                }), (0, d.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, d.jsx)("span", {
                                        className: (0, f.Z)({
                                            "float-right": "loanPage" === r
                                        }),
                                        children: s("Expire")
                                    })
                                }), "loanPage" !== r && (0, d.jsx)("div", {
                                    className: (0, f.Z)("flex-1", "userProfile" === r ? "grow-[2]" : "grow-[1.75]"),
                                    children: (0, d.jsx)("span", {
                                        className: "float-right",
                                        children: s("Action")
                                    })
                                })]
                            })
                        })
                    })
                },
                G = function(e) {
                    var r, n = e.pageType,
                        t = e.showWarning,
                        s = e.isSelected,
                        l = e.onSelect,
                        c = e.isUserCurrentNftOwner,
                        i = e.userAddress,
                        m = e.lenderBalance,
                        N = e.item,
                        Z = e.onBorrow,
                        _ = e.onAdjust,
                        S = e.onCancelOffer,
                        T = (0, h.$G)().t,
                        E = (0, j._B)(),
                        A = !!i && (0, b.Wr)(i, N.lender),
                        F = (0, C.pG)(N.lender),
                        $ = (0, j.ah)(),
                        D = (0, j.Fj)(),
                        L = N.amount ? x.O$.from(N.amount) : null,
                        H = N.repayment ? x.O$.from(N.repayment) : null,
                        z = (0, P.Ug)(N.repayment, N.amount),
                        M = void 0 !== m && null !== L && L.gt(m),
                        B = (0, y.$)(),
                        G = (0, P.Zu)(N, B),
                        Q = N.collection && !N.nft,
                        U = (0, p.useState)(!1),
                        J = U[0],
                        V = U[1],
                        Y = 20 === N.status,
                        K = (0, p.useMemo)((function() {
                            return (0, d.jsx)(I.$, {
                                className: "h-[1em] w-[1em] shrink-0 text-primary-1"
                            })
                        }), []);
                    return (0, d.jsxs)("div", (0, o.Z)((0, a.Z)({
                        className: (0, f.Z)("link-box group flex flex-col", "loanPage" === n ? "min-w-[950px]" : "min-w-[1150px]")
                    }, "loanPage" === n && {
                        onClick: function() {
                            return !Y && !M && l({
                                isDisabled: A,
                                offer: N,
                                onBorrow: Z
                            })
                        }
                    }), {
                        children: [(0, d.jsx)("div", {
                            className: "flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2 group-hover:bg-gray-200",
                            children: (0, d.jsxs)("div", {
                                className: (0, f.Z)("flex h-10 min-w-0 flex-1 items-center space-x-2", {
                                    "text-gray-400": M || "loanPage" === n && Y
                                }),
                                children: ["userProfile" !== n && (0, d.jsxs)("div", {
                                    className: (0, f.Z)("ts-body-2 flex min-w-0 flex-1 items-center truncate font-bold", "loanPage" === n && "grow-[1.25]"),
                                    children: ["loanPage" === n && (0, d.jsx)(W.J, {
                                        className: "mr-4",
                                        isChecked: s
                                    }), (0, d.jsx)(v.Z, {
                                        href: F,
                                        target: "_blank",
                                        children: A ? T("You") : (0, k.P5)(N.lender, !0)
                                    })]
                                }), "userProfile" === n && (0, d.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 grow-[1.75] items-center space-x-3",
                                    children: [(0, d.jsx)(v.Z, {
                                        className: (0, f.Z)("h-10 w-10 flex-shrink-0 overflow-hidden bg-gray-300", Q && "rounded-full"),
                                        hoverStyle: "opacity",
                                        href: G.url,
                                        target: "_blank",
                                        children: G.image
                                    }), (0, d.jsxs)("div", {
                                        className: "flex min-w-0 flex-1 flex-col",
                                        children: [(0, d.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0, d.jsx)(v.Z, {
                                                className: "ts-body-2 truncate font-bold",
                                                href: G.url,
                                                target: "_blank",
                                                children: G.title
                                            }), G.verified && (0, d.jsx)(g.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        }), G.collection && (0, d.jsxs)("div", {
                                            className: "flex items-center space-x-1 overflow-hidden",
                                            children: [(0, d.jsx)(v.Z, {
                                                className: "ts-caption-3 overflow-hidden break-all text-gray-500 line-clamp-1",
                                                href: (0, C.ec)({
                                                    tab: "items",
                                                    slug: null !== (r = G.collection.slug) && void 0 !== r ? r : (0, O.P8)(G.collection.contract)
                                                }),
                                                target: "_blank",
                                                children: (0, w.E0)(G.collection)
                                            }), G.collection.verified && (0, d.jsx)(g.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        })]
                                    })]
                                }), (0, d.jsx)("div", {
                                    className: "ts-body-2 flex-1 grow-[1.25] overflow-hidden font-bold",
                                    children: (0, d.jsx)("p", {
                                        className: "flex flex-row items-center space-x-2 overflow-hidden",
                                        children: L ? (0, d.jsxs)(d.Fragment, {
                                            children: [(0, d.jsx)("span", {
                                                className: "truncate",
                                                children: (0, P.xH)(L)
                                            }), (0, d.jsx)("span", {
                                                className: "!ml-0.5",
                                                children: "\u039e"
                                            }), !N.nft && N.collection && (0, d.jsx)(u.u, {
                                                label: T("Collection offer"),
                                                placement: "top",
                                                hasArrow: !0,
                                                children: (0, d.jsx)(g.IeJ, {
                                                    boxSize: 4,
                                                    color: E.gray500,
                                                    zIndex: 1
                                                })
                                            }), M && (0, d.jsx)(u.u, {
                                                width: 266,
                                                label: T(A ? "You don't have enough wETH or may have revoked wETH approval." : "The offer's creator doesn't have enough wETH or may have revoked wETH approval."),
                                                placement: "top",
                                                hasArrow: !0,
                                                children: (0, d.jsx)(g.BRb, {
                                                    boxSize: 4,
                                                    color: "primary_3.500",
                                                    zIndex: 1
                                                })
                                            }), "loanPage" === n && Y && K]
                                        }) : (0, d.jsx)("span", {
                                            children: "-"
                                        })
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "ts-body-2 flex-1 overflow-hidden font-bold",
                                    children: H ? (0, d.jsxs)("p", {
                                        className: "flex flex-row items-center overflow-hidden",
                                        children: [(0, d.jsx)("span", {
                                            className: "truncate",
                                            children: (0, P.xH)(H)
                                        }), (0, d.jsx)("span", {
                                            className: "ml-0.5",
                                            children: "\u039e"
                                        })]
                                    }) : (0, d.jsx)("span", {
                                        children: "-"
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "ts-body-2 flex-1 font-bold",
                                    children: z ? (0, d.jsx)("p", {
                                        children: (0, k.cW)(100 * z, 2)
                                    }) : (0, d.jsx)("span", {
                                        children: "-"
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "ts-body-2 flex-1 font-bold",
                                    children: (0, d.jsx)("p", {
                                        children: (0, k.cW)(N.apr / 100, 2)
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "ts-body-2 flex-1 font-bold",
                                    children: (0, d.jsx)("p", {
                                        children: (0, k.Y)(T, N.duration)
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "ts-body-2 min-w-0 flex-1 font-bold",
                                    children: (0, d.jsx)("p", {
                                        children: $(1e3 * N.createdAt).format("M/D HH:mm")
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "ts-body-2 min-w-0 flex-1 font-bold",
                                    children: (0, d.jsx)("p", {
                                        className: (0, f.Z)({
                                            "float-right": "loanPage" === n
                                        }),
                                        children: D(1e3 * N.expireTime)
                                    })
                                }), "loanPage" !== n && (0, d.jsx)("div", {
                                    className: (0, f.Z)("ts-body-2 flex-1 font-bold", "userProfile" === n ? "grow-[2]" : "grow-[1.75]"),
                                    children: (0, d.jsx)("p", {
                                        className: "float-right flex items-center space-x-4",
                                        children: Y ? K : A ? (0, d.jsxs)(d.Fragment, {
                                            children: [(0, d.jsx)(R.zx, {
                                                isDisabled: M,
                                                variant: "outline",
                                                size: "sm",
                                                onClick: _,
                                                children: T("Adjust")
                                            }), (0, d.jsx)(R.zx, {
                                                isDisabled: M,
                                                isLoading: J,
                                                variant: "outline",
                                                colorScheme: "primary-1",
                                                size: "sm",
                                                onClick: function() {
                                                    null === S || void 0 === S || S(V)
                                                },
                                                children: T("Cancel")
                                            })]
                                        }) : !t && c ? (0, d.jsx)(R.zx, {
                                            isDisabled: M,
                                            variant: "outline",
                                            colorScheme: "primary-1",
                                            size: "sm",
                                            onClick: Z,
                                            children: T("Borrow")
                                        }) : null
                                    })
                                })]
                            })
                        }), (0, d.jsx)("hr", {
                            className: "mx-4 w-auto"
                        })]
                    }))
                },
                Q = function(e) {
                    var r, n = e.showWarning,
                        u = e.pageType,
                        f = e.isOwner,
                        v = e.selectedOfferId,
                        g = e.onSelect,
                        y = e.item,
                        b = e.isFetching,
                        w = e.fetchQuery,
                        k = e.fetchResp,
                        C = e.fetchError,
                        O = e.refetch,
                        R = e.dispatchFetchQueryAction,
                        I = e.showLearnMore,
                        W = void 0 === I || I,
                        Q = (0, h.$G)().t,
                        U = (0, p.useMemo)((function() {
                            return null !== (r = null === k || void 0 === k ? void 0 : k.data) && void 0 !== r ? r : []
                        }), [null === k || void 0 === k ? void 0 : k.data]),
                        J = (0, N.eX)().requireRegisteredUser,
                        V = (0, j.dd)(M.j8),
                        Y = (0, j.dd)($.VD),
                        K = (0, j.dd)(M.Fu),
                        X = (0, j.dd)($.km),
                        q = "userProfile" === u ? E.Kc : y.info.networkId,
                        ee = (0, N.aC)().user,
                        re = Z.WG((0, N.JQ)(ee)),
                        ne = "nftDetail" === u && f,
                        te = (0, p.useState)([]),
                        se = te[0],
                        ae = te[1];
                    (0, p.useEffect)((function() {
                        ae((function(e) {
                            return Array.from(new Set((0, c.Z)(e).concat((0, c.Z)(U.map((function(e) {
                                return "".concat(e.lender, "-").concat(e.erc20Address)
                            }))))))
                        }))
                    }), [U]);
                    var oe, le = (0, m.ZP)({
                            key: "fetchLenderWethBalance",
                            len: se.length
                        }, function() {
                            var e = (0, t.Z)((function(e) {
                                var r, n;
                                return (0, i.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return 0 !== e.len ? [3, 1] : [2, {}];
                                        case 1:
                                            return r = se.map((function(e) {
                                                var r = (0, l.Z)(e.split("-"), 2),
                                                    n = r[0];
                                                return {
                                                    address: r[1],
                                                    name: "balanceOf",
                                                    params: [n]
                                                }
                                            })), [4, (0, _.A)(q, F, r)];
                                        case 2:
                                            return n = t.sent(), [2, (0, a.Z)({}, ce, se.reduce((function(e, r, t) {
                                                return (0, o.Z)((0, a.Z)({}, e), (0, s.Z)({}, r, x.O$.from(n[t].toString())))
                                            }), {}))];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }(), {
                            revalidateOnFocus: !1,
                            revalidateOnReconnect: !1,
                            refreshInterval: 6e4
                        }),
                        ce = le.data,
                        ie = b ? (0, d.jsx)(H.Z, {
                            h: "loanPage" === u ? "152px" : "800px"
                        }) : C ? (0, d.jsx)(L.Z, {
                            label: C
                        }) : 0 === U.length ? (0, d.jsx)(z.k, {
                            showLearnMore: W
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsxs)("div", {
                                className: "overflow-x-auto",
                                children: [(0, d.jsx)(B, (0, a.Z)({}, {
                                    pageType: u,
                                    fetchQuery: w,
                                    dispatchFetchQueryAction: R
                                })), U.map((function(e) {
                                    return (0, d.jsx)(G, (0, a.Z)({}, (0, a.Z)({
                                        key: e.offerId,
                                        pageType: u,
                                        showWarning: n,
                                        isUserCurrentNftOwner: ne,
                                        userAddress: re,
                                        lenderBalance: null === ce || void 0 === ce ? void 0 : ce["".concat(e.lender, "-").concat(e.erc20Address)],
                                        item: e
                                    }, "loanPage" === u && {
                                        onSelect: g,
                                        isSelected: v === e.offerId
                                    }, "userProfile" !== u && {
                                        onBorrow: function() {
                                            return J((function(r) {
                                                return (0, A._)(r, q, (function() {
                                                    return V.onOpen({
                                                        user: r,
                                                        item: y,
                                                        offer: e,
                                                        approveNftModal: Y,
                                                        onComplete: O
                                                    })
                                                }), (0, A.V)(Q))
                                            }))
                                        }
                                    }, "loanPage" !== u && {
                                        onAdjust: function() {
                                            var r = e.collection,
                                                n = e.nft;
                                            if (r) {
                                                var t = n ? {
                                                    type: "item",
                                                    item: (0, P.sw)({
                                                        collection: r,
                                                        nft: n
                                                    })
                                                } : {
                                                    type: "collection",
                                                    contract: (0, P.w3)({
                                                        collection: r
                                                    })
                                                };
                                                J((function(r) {
                                                    return (0, A._)(r, q, (function() {
                                                        return K.onOpen({
                                                            isAdjust: !0,
                                                            user: r,
                                                            options: [t],
                                                            offer: e,
                                                            approveTokenModal: X,
                                                            onSuccess: O
                                                        })
                                                    }), (0, A.V)(Q))
                                                }))
                                            }
                                        },
                                        onCancelOffer: function(r) {
                                            J((function(n) {
                                                return (0, A._)(n, q, (0, t.Z)((function() {
                                                    return (0, i.__generator)(this, (function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                r(!0), t.label = 1;
                                                            case 1:
                                                                return t.trys.push([1, 3, 4, 5]), [4, (0, T.x0)(q, n, {
                                                                    nonce: e.nonce
                                                                })];
                                                            case 2:
                                                                return t.sent(), O(), [3, 5];
                                                            case 3:
                                                                return t.sent(), (0, S.Z)({
                                                                    status: "error",
                                                                    title: Q("Something's wrong")
                                                                }), [3, 5];
                                                            case 4:
                                                                return r(!1), [7];
                                                            case 5:
                                                                return [2]
                                                        }
                                                    }))
                                                })), (0, A.V)(Q))
                                            }))
                                        }
                                    })))
                                }))]
                            }), (0, d.jsx)(D.u, {
                                mt: 8,
                                limit: w.pageSize,
                                page: w.page,
                                total: null !== (oe = null === k || void 0 === k ? void 0 : k.total) && void 0 !== oe ? oe : 0,
                                onPageChange: function(e, r) {
                                    R({
                                        type: "SET_PAGE",
                                        payload: r
                                    })
                                }
                            })]
                        });
                    return (0, d.jsxs)(d.Fragment, {
                        children: [ie, V.component, Y.component, K.component, X.component]
                    })
                }
        },
        642: function(e, r, n) {
            n.d(r, {
                G: function() {
                    return l
                }
            });
            var t = n(85893),
                s = n(86010),
                a = n(23641),
                o = n(24717),
                l = function(e) {
                    var r = e.className,
                        n = (0, a.$G)().t;
                    return (0, t.jsxs)("p", {
                        className: (0, s.Z)("ts-caption flex items-center space-x-3 bg-red-bg px-3 py-3 lg:px-8", r),
                        children: [(0, t.jsx)(o.xlq, {
                            className: "h-6 w-6 self-start text-primary-3"
                        }), (0, t.jsx)("span", {
                            children: n("NFT that is marked on OpenSea can not be used as Loan collateral.")
                        })]
                    })
                }
        },
        40974: function(e, r, n) {
            n.d(r, {
                J: function() {
                    return a
                }
            });
            var t = n(85893),
                s = n(21645),
                a = function(e) {
                    var r = e.className,
                        n = e.isChecked;
                    return (0, t.jsx)("span", {
                        className: r,
                        children: n ? (0, t.jsx)(s.Cr$, {
                            color: "primary_1.500",
                            fontSize: "3xl"
                        }) : (0, t.jsx)("span", {
                            className: "float-right m-0.5 inline-block h-[26px] w-[26px] rounded-full border-2 border-gray-300 bg-gray-200"
                        })
                    })
                }
        },
        98914: function(e, r, n) {
            n.d(r, {
                _: function() {
                    return H
                },
                f: function() {
                    return z
                }
            });
            var t = n(47568),
                s = n(29815),
                a = n(20414),
                o = n(85893),
                l = n(38152),
                c = n(86010),
                i = n(2593),
                d = n(30902),
                u = n(23641),
                f = n(67294),
                x = n(46243),
                h = n(36429),
                p = n(21645),
                m = n(43654),
                v = n(92212),
                j = n(83560),
                g = n(88886),
                y = n(55967),
                N = n(87974),
                b = n(73923),
                w = n(79948),
                k = n(64286),
                Z = n(79737),
                P = n(26473),
                _ = n(31182),
                S = n(16869),
                C = n(54765),
                O = n(68663),
                T = n(16531),
                E = n(8007),
                A = n(6650),
                F = n(21387),
                R = n(35770),
                $ = n(91425),
                D = function(e, r) {
                    return e ? [r[1], r[0]] : r
                },
                I = function(e) {
                    var r = e.loanType,
                        n = e.dataType,
                        t = (0, u.$G)().t;
                    return (0, o.jsx)("div", {
                        className: "link-box flex min-w-[1180px] flex-col",
                        children: (0, o.jsx)("div", {
                            className: "mt-3 flex flex-row items-center space-x-8 space-y-0 rounded-xl px-4 py-2",
                            children: (0, o.jsxs)("div", {
                                className: "ts-caption-2 flex flex-1 items-center space-x-2 font-bold text-gray-500",
                                children: [(0, o.jsx)("div", {
                                    className: "flex-1 basis-20",
                                    children: t("Item")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: t("lend" === r ? "Borrower" : "From")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: t("Loan value")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: t("Repayment")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: t("Interest")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: t("APR")
                                }), "lend" === r && (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: t("Created at")
                                }), D("history" === n, [(0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: t("Due")
                                }), (0, o.jsx)("div", {
                                    className: "flex flex-1",
                                    children: (0, o.jsx)("span", {
                                        className: (0, c.Z)({
                                            "ml-auto": "lend" === r && "current" === n
                                        }),
                                        children: t("history" === n ? "Duration" : "Duration (days)")
                                    })
                                })]), "borrow" === r && "current" === n && (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, o.jsx)("span", {
                                        className: "float-right ",
                                        children: t("Action")
                                    })
                                }), "history" === n && (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, o.jsx)("span", {
                                        className: "float-right",
                                        children: t("Status")
                                    })
                                })]
                            })
                        })
                    })
                },
                L = function(e) {
                    var r, n = e.loanType,
                        t = e.dataType,
                        s = e.item,
                        a = e.onRepay,
                        w = e.onRedempt,
                        k = (0, u.$G)().t,
                        _ = (0, v.aC)().user,
                        S = (0, h.ah)(),
                        C = (0, m.$)(),
                        T = (0, d.pipe)((0, v.JQ)(_), N.g_((function() {
                            return !1
                        }), (function(e) {
                            return (0, j.Wr)(e, s.borrower)
                        }))),
                        E = (0, d.pipe)((0, v.JQ)(_), N.g_((function() {
                            return !1
                        }), (function(e) {
                            return (0, j.Wr)(e, s.lender)
                        }))),
                        A = (0, Z.pG)(T ? s.lender : s.borrower),
                        F = (0, b.Zu)(s, C),
                        R = s.collection && !s.nft,
                        $ = (0, b.Ug)(s.repayment, s.amount),
                        I = Math.floor(s.duration / 3600 / 24),
                        L = (0, d.pipe)(S().diff(S(1e3 * s.createdAt - 756e5), "days"), N.DT((function(e) {
                            return e <= I
                        })), N.fS((function() {
                            return I
                        }))),
                        H = s.status,
                        z = (0, f.useState)(!1),
                        M = z[0],
                        W = z[1];
                    return (0, o.jsxs)("div", {
                        className: "link-box group flex min-w-[1180px] flex-col",
                        children: [(0, o.jsx)("div", {
                            className: "flex flex-row items-center space-x-8 space-y-0 rounded-xl px-4 py-2 group-hover:bg-gray-200",
                            children: (0, o.jsxs)("div", {
                                className: "flex min-w-0 flex-1 items-center space-x-2",
                                children: [(0, o.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 basis-20 items-center space-x-3",
                                    children: [(0, o.jsx)(x.Z, {
                                        className: (0, c.Z)("h-10 w-10 flex-shrink-0 overflow-hidden bg-gray-300", R && "rounded-full"),
                                        hoverStyle: "opacity",
                                        href: F.url,
                                        children: F.image
                                    }), (0, o.jsxs)("div", {
                                        className: "flex min-w-0 flex-1 flex-col",
                                        children: [(0, o.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0, o.jsx)(x.Z, {
                                                className: "ts-body-2 truncate font-bold",
                                                href: F.url,
                                                children: F.title
                                            }), F.verified && (0, o.jsx)(p.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        }), F.collection && (0, o.jsxs)("div", {
                                            className: "flex items-center space-x-1 overflow-hidden",
                                            children: [(0, o.jsx)(x.Z, {
                                                className: "ts-caption-3 overflow-hidden break-all text-gray-500 line-clamp-1",
                                                href: (0, Z.ec)({
                                                    tab: "items",
                                                    slug: null !== (r = F.collection.slug) && void 0 !== r ? r : (0, P.P8)(F.collection.contract)
                                                }),
                                                children: (0, g.E0)(F.collection)
                                            }), F.collection.verified && (0, o.jsx)(p.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        })]
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 overflow-hidden",
                                    children: (0, o.jsx)(x.Z, {
                                        className: "ts-body-2 font-bold",
                                        href: A,
                                        children: s.borrower.slice(0, 6)
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 overflow-hidden",
                                    children: (0, o.jsxs)("p", {
                                        className: "ts-body-2 flex items-center space-x-1 overflow-hidden font-bold",
                                        children: [(0, o.jsx)("span", {
                                            className: "truncate",
                                            children: (0, b.xH)(i.O$.from(s.amount))
                                        }), (0, o.jsx)("span", {
                                            children: "\u039e"
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 overflow-hidden",
                                    children: (0, o.jsxs)("p", {
                                        className: "ts-body-2 flex items-center space-x-1 overflow-hidden font-bold",
                                        children: [(0, o.jsx)("span", {
                                            className: "truncate",
                                            children: (0, b.xH)(i.O$.from(s.repayment))
                                        }), (0, o.jsx)("span", {
                                            children: "\u039e"
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: $ ? (0, o.jsx)("p", {
                                        className: "ts-body-2 font-bold",
                                        children: (0, y.cW)(100 * $, 2)
                                    }) : (0, o.jsx)("span", {
                                        children: "-"
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, o.jsx)("p", {
                                        className: "ts-body-2 font-bold",
                                        children: (0, y.cW)(s.apr / 100, 2)
                                    })
                                }), "lend" === n && (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, o.jsx)("p", {
                                        className: "ts-body-2 font-bold",
                                        children: S(1e3 * s.createdAt).format("M/D HH:mm")
                                    })
                                }), D("history" === t, [(0, o.jsx)("div", {
                                    className: "min-w-0 flex-1",
                                    children: (0, o.jsxs)("p", {
                                        className: "flex flex-col",
                                        children: [(0, o.jsx)("span", {
                                            className: (0, c.Z)("ts-body-2 font-bold", 50 === H && "lend" === n && "text-primary-3"),
                                            children: S(1e3 * s.dueTime).format("M/D HH:mm")
                                        }), "lend" === n && 50 === H && (0, o.jsx)("span", {
                                            className: (0, c.Z)("ts-caption-2", "text-primary-3"),
                                            children: k("Defaulted")
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, o.jsx)("p", {
                                        className: (0, c.Z)("ts-body-2 font-bold", {
                                            "float-right": "lend" === n && "current" === t
                                        }),
                                        children: "history" === t ? (0, o.jsx)("span", {
                                            children: (0, y.Y)(k, s.duration)
                                        }) : (0, o.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [(0, o.jsx)(l.D8, {
                                                size: 5,
                                                value: 100 * L / I,
                                                color: "primary_3.500",
                                                trackColor: "primary_3.100",
                                                thickness: "18px"
                                            }), (0, o.jsxs)("span", {
                                                className: "ml-1.5",
                                                children: [L, " / ", I]
                                            })]
                                        })
                                    })
                                })]), "borrow" === n && "current" === t && (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, o.jsx)("p", {
                                        className: "ts-body-2 float-right",
                                        children: 30 === H && a && T ? (0, o.jsx)(O.zx, {
                                            className: "float-right",
                                            variant: "outline",
                                            colorScheme: "primary-1",
                                            size: "sm",
                                            onClick: a,
                                            children: k("Repay")
                                        }) : (0, o.jsx)("span", {
                                            className: "float-right font-bold",
                                            children: "-"
                                        })
                                    })
                                }), "history" === t && (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, o.jsxs)("p", {
                                        className: "ts-body-2",
                                        children: [40 === H && (0, o.jsx)("span", {
                                            className: "float-right font-bold text-primary-4",
                                            children: k("Repaid")
                                        }), 50 === H && ("borrow" === n ? (0, o.jsx)("span", {
                                            className: "float-right font-bold text-primary-3",
                                            children: k("Defaulted")
                                        }) : w && E ? (0, o.jsx)(O.zx, {
                                            isLoading: M,
                                            className: "float-right",
                                            variant: "outline",
                                            colorScheme: "primary-1",
                                            size: "sm",
                                            onClick: function() {
                                                w(W)
                                            },
                                            children: k("Redeemed")
                                        }) : (0, o.jsx)("span", {
                                            className: "float-right font-bold",
                                            children: "-"
                                        })), 60 === H && ("borrow" === n ? (0, o.jsx)("span", {
                                            className: "float-right font-bold text-primary-3",
                                            children: k("Defaulted")
                                        }) : (0, o.jsx)("span", {
                                            className: "float-right font-bold text-primary-3",
                                            children: k("Redeemed")
                                        }))]
                                    })
                                })]
                            })
                        }), (0, o.jsx)("hr", {
                            className: "mx-4 w-auto"
                        })]
                    })
                },
                H = function() {
                    var e = (0, t.Z)((function(e, r, n, t, o, l) {
                        var c, i, d;
                        return (0, a.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    o(!0), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 5, 6, 7]), c = [r.web3Provider.getSigner(), n, t], [4, _.xr.apply(void 0, (0, s.Z)(c))];
                                case 2:
                                    return a.sent() ? [4, _.BO.apply(void 0, (0, s.Z)(c))] : ((0, k.Z)({
                                        status: "error",
                                        title: e("The loan is not available for redemption.")
                                    }), [2]);
                                case 3:
                                    return [4, a.sent().wait()];
                                case 4:
                                    return a.sent(), l(), [3, 7];
                                case 5:
                                    return i = a.sent(), "string" === typeof(d = (0, w.e$)(e, i)) ? (0, k.Z)({
                                        status: "error",
                                        title: d
                                    }) : (console.error(i), (0, k.Z)({
                                        status: "error",
                                        title: e("Something's wrong")
                                    })), [3, 7];
                                case 6:
                                    return o(!1), [7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }));
                    return function(r, n, t, s, a, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                z = function(e) {
                    var r, n, t = e.loanType,
                        s = e.dataType,
                        a = e.isFetching,
                        l = e.fetchQuery,
                        c = e.fetchResp,
                        i = e.fetchError,
                        d = e.refetch,
                        f = e.dispatchFetchQueryAction,
                        x = e.showLearnMore,
                        p = void 0 === x || x,
                        m = (0, u.$G)().t,
                        j = (0, h.dd)($.cy),
                        g = (0, h.dd)(T.km),
                        y = (0, v.eX)().requireRegisteredUser,
                        N = null !== (r = null === c || void 0 === c ? void 0 : c.data) && void 0 !== r ? r : [];
                    return a ? (0, o.jsx)(F.Z, {}) : i ? (0, o.jsx)(A.Z, {
                        label: i
                    }) : 0 === N.length ? (0, o.jsx)(R.k, {
                        showLearnMore: p
                    }) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)("div", {
                            className: "overflow-x-auto",
                            children: [(0, o.jsx)(I, {
                                loanType: t,
                                dataType: s
                            }), N.map((function(e) {
                                var r = e.collection,
                                    n = e.nft,
                                    a = S.Kc,
                                    l = r && n ? function(n) {
                                        y((function(t) {
                                            return (0, C._)(t, r.networkId, (function() {
                                                return H(m, t, r.networkId, e.loanId, n, d)
                                            }), (0, C.V)(m))
                                        }))
                                    } : null;
                                return (0, o.jsx)(L, {
                                    loanType: t,
                                    dataType: s,
                                    item: e,
                                    onRepay: function() {
                                        return y((function(r) {
                                            return (0, C._)(r, a, (function() {
                                                return j.onOpen({
                                                    user: r,
                                                    networkId: a,
                                                    order: e,
                                                    approveTokenModal: g,
                                                    onSuccess: d
                                                })
                                            }), (0, C.V)(m))
                                        }))
                                    },
                                    onRedempt: l
                                }, e.loanId)
                            }))]
                        }), (0, o.jsx)(E.u, {
                            mt: 8,
                            limit: l.pageSize,
                            page: l.page,
                            total: null !== (n = null === c || void 0 === c ? void 0 : c.total) && void 0 !== n ? n : 0,
                            onPageChange: function(e, r) {
                                f({
                                    type: "SET_PAGE",
                                    payload: r
                                })
                            }
                        }), j.component, g.component]
                    })
                }
        },
        78752: function(e, r, n) {
            n.d(r, {
                x: function() {
                    return l
                }
            });
            var t = n(47568),
                s = n(20414),
                a = n(67294),
                o = n(62),
                l = function(e) {
                    var r = e.tokenContract,
                        n = e.tokenId,
                        l = (0, a.useState)(!1),
                        c = l[0],
                        i = l[1];
                    return (0, a.useEffect)((function() {
                        var e = function() {
                            var e = (0, t.Z)((function() {
                                var e;
                                return (0, s.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return i(!1), r && n ? [4, (0, o.PG)(r, n)] : [3, 2];
                                        case 1:
                                            e = t.sent(), i(!e), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [r, n]), c
                }
        },
        64412: function(e, r, n) {
            n.d(r, {
                L: function() {
                    return l
                },
                _: function() {
                    return c
                }
            });
            var t = n(47568),
                s = n(20414),
                a = n(86275),
                o = n(41278),
                l = function() {
                    var e = (0, t.Z)((function(e, r) {
                        var n;
                        return (0, s.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, a.d.post("/api/offers/recheck", {
                                        order_ids: r
                                    }, (0, o.v2)(e.token))];
                                case 1:
                                    return t.sent(), [3, 3];
                                case 2:
                                    return n = t.sent(), console.error(n), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function(r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, t.Z)((function(e) {
                        return (0, s.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, a.d.post("/api/offers/revalidate", {}, (0, o.v2)(e.token))];
                                case 1:
                                    return r.sent(), [2]
                            }
                        }))
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }()
        }
    }
]);
//# sourceMappingURL=2447-d2e176671c742ea4.js.map