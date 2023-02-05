(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9854], {
        91568: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/loan", function() {
                return n(25053)
            }])
        },
        94231: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/LoanCollections.3643ebec.svg",
                height: 218,
                width: 440
            }
        },
        39622: function(e, t, n) {
            "use strict";
            var r = n(85893),
                s = n(33729),
                o = n(34071);
            t.Z = function(e) {
                var t = e.options,
                    n = e.selected,
                    l = e.onSelect;
                return (0, r.jsx)(s.O.Group, {
                    selectedIndex: t.findIndex((function(e) {
                        return e.key === n
                    })),
                    onChange: function(e) {
                        return l(t[e].key)
                    },
                    children: (0, r.jsx)(o.t, {
                        children: t.map((function(e, t) {
                            var n = e.title;
                            return (0, r.jsx)(o.Y, {
                                children: n
                            }, t)
                        }))
                    })
                })
            }
        },
        99490: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return d
                }
            });
            var r = n(85893),
                s = n(68527),
                o = n(23641),
                l = n(11163),
                a = n(67294),
                i = n(21645),
                c = n(79737),
                d = function(e) {
                    var t = e.isShow,
                        n = (0, o.$G)().t,
                        d = (0, l.useRouter)(),
                        u = (0, a.useState)(t),
                        x = u[0],
                        f = u[1];
                    return (0, a.useEffect)((function() {
                        return f(t)
                    }), [t]), x ? (0, r.jsxs)("div", {
                        className: "flex items-center bg-blue-bg py-3 px-3 text-sm lg:px-6",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-1 items-center space-x-3",
                            children: [(0, r.jsx)(i.BRb, {
                                boxSize: 6,
                                color: "primary_1.500"
                            }), (0, r.jsx)(s.xu, {
                                flex: 1,
                                cursor: "pointer",
                                onClick: function() {
                                    return d.push((0, c.P1)("notification"))
                                },
                                _hover: {
                                    opacity: .7
                                },
                                children: (0, r.jsxs)(o.cC, {
                                    t: n,
                                    children: ["Enable", " ", (0, r.jsx)(s.xu, {
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
                            "aria-label": n("Close"),
                            onClick: function() {
                                return f(!1)
                            },
                            children: (0, r.jsx)(i.OhS, {})
                        })]
                    }) : null
                }
        },
        14905: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return c
                },
                h: function() {
                    return i
                }
            });
            var r = n(26042),
                s = n(85893),
                o = n(86010),
                l = n(93224),
                a = n(36429),
                i = function(e) {
                    var t = e.className,
                        n = e.children,
                        r = e.forceOpen,
                        a = void 0 !== r && r,
                        i = (0, l.oS)();
                    return a || i.value.showSidePanel ? (0, s.jsx)("div", {
                        className: (0, o.Z)("sticky top-20 hidden h-[calc(100vh-80px)] w-[375px] flex-shrink-0 flex-col overflow-auto border-r py-6 px-8 lg:flex", t),
                        children: n
                    }) : null
                },
                c = function() {
                    var e = (0, a._B)();
                    return {
                        sectionStyle: function(t) {
                            var n = t.isTop,
                                s = void 0 !== n && n,
                                o = t.reducedPt,
                                l = void 0 !== o && o;
                            return (0, r.Z)({
                                pb: 6
                            }, s ? void 0 : {
                                pt: l ? 3 : 6,
                                borderTopColor: e.gray300,
                                borderTopWidth: 1
                            })
                        }
                    }
                }
        },
        59206: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return a
                },
                _: function() {
                    return i
                }
            });
            var r = n(47568),
                s = n(20414),
                o = n(86275),
                l = n(41278),
                a = "/api/users/me/service",
                i = function() {
                    var e = (0, r.Z)((function(e) {
                        var t;
                        return (0, s.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, o.d.get(a, (0, l.v2)(e))];
                                case 1:
                                    return 200 === (t = n.sent()).status ? [2, t.data] : [2]
                            }
                        }))
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        25053: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return It
                },
                default: function() {
                    return Ot
                }
            });
            var r = n(26042),
                s = n(69396),
                o = n(85893),
                l = n(68527),
                a = n(23641),
                i = n(11163),
                c = n.n(i),
                d = n(67294),
                u = n(8100),
                x = n(61608),
                f = n.n(x),
                m = n(24717),
                h = n(94231),
                p = "/_next/static/media/LoanHeaderBg.8249e2e1.svg",
                v = n(55967),
                g = n(73923),
                j = n(31182),
                y = n(46243),
                w = function() {
                    var e = (0, a.$G)().t,
                        t = (0, u.ZP)(g.cw, j.lF).data,
                        n = [{
                            label: e("Total borrowed"),
                            value: (null === t || void 0 === t ? void 0 : t.totalBorrowed) ? (0, v.tX)(t.totalBorrowed, {
                                max: 2
                            }) : "-",
                            showNumSymbol: !0
                        }, {
                            label: e("Loans num"),
                            value: (null === t || void 0 === t ? void 0 : t.loanNum) ? (0, v.tX)(t.loanNum) : "-",
                            showNumSymbol: !1
                        }, {
                            label: e("Recent APR"),
                            value: (null === t || void 0 === t ? void 0 : t.avgAPR) ? (0, v.cW)(t.avgAPR / 100, 2) : "-",
                            showNumSymbol: !1
                        }, {
                            label: e("Accrued interest"),
                            value: (null === t || void 0 === t ? void 0 : t.totalInterest) ? (0, v.tX)(t.totalInterest, {
                                max: 2
                            }) : "-",
                            showNumSymbol: !0
                        }];
                    return (0, o.jsx)("header", {
                        className: "w-full bg-cover bg-right",
                        style: {
                            backgroundImage: "url('".concat(p, "')")
                        },
                        children: (0, o.jsxs)("div", {
                            className: "mx-auto flex max-w-[1600px] flex-col items-center px-6 py-8 sm:px-8 sm:py-16 md:px-12 lg:flex-row lg:px-24 xl:px-36",
                            children: [(0, o.jsxs)("div", {
                                className: "flex flex-1 flex-col",
                                children: [(0, o.jsxs)("div", {
                                    className: "flex items-center space-x-2",
                                    children: [(0, o.jsx)("h1", {
                                        className: "ts-headline-5 lg:ts-headline-3",
                                        children: e("NFT Loan")
                                    }), (0, o.jsx)("span", {
                                        className: "ts-button-2 lg:ts-button-1 rounded-full bg-secondary-1 px-2 py-1.5 text-button-text",
                                        children: e("0% Fee")
                                    })]
                                }), (0, o.jsx)("p", {
                                    className: "ts-body-3 lg:ts-body-1 mt-2 font-normal text-gray-700 lg:font-light",
                                    children: e("A new way to leverage your assets")
                                }), (0, o.jsxs)(y.Z, {
                                    className: "ts-caption-3 mt-2 flex items-center self-start rounded-full bg-blue-bg px-2 py-1 font-medium text-primary-1",
                                    hoverStyle: "opacity",
                                    href: "https://docs.x2y2.io/assets/files/X2Y2_NFT_Lending_Report-7dfe991023b2fbd18c647d384fc333e1.pdf",
                                    isExternal: !0,
                                    children: [(0, o.jsx)("span", {
                                        children: e("Audited by SlowMist")
                                    }), (0, o.jsx)(m.yPv, {
                                        className: "ml-1 h-4 w-4"
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "mt-2 flex flex-wrap lg:mt-6",
                                    children: n.map((function(e, t) {
                                        return (0, o.jsxs)(d.Fragment, {
                                            children: [t > 0 && (t % 2 === 0 ? (0, o.jsx)("div", {
                                                className: "w-full"
                                            }) : (0, o.jsx)("hr", {
                                                className: "mx-12 mt-4 h-auto border-l"
                                            })), (0, o.jsxs)("div", {
                                                className: "mt-4 min-w-0 flex-1 basis-1/3",
                                                children: [(0, o.jsx)("div", {
                                                    className: "flex items-center",
                                                    children: (0, o.jsx)("p", {
                                                        className: "ts-hairline-3 truncate leading-4 text-gray-500",
                                                        children: e.label
                                                    })
                                                }), (0, o.jsxs)("p", {
                                                    className: "ts-headline-6 lg:ts-headline-4 mt-1 truncate text-gray-700",
                                                    children: [e.value, e.showNumSymbol && (0, o.jsx)("span", {
                                                        className: "ml-1",
                                                        children: "\u039e"
                                                    })]
                                                })]
                                            })]
                                        }, t)
                                    }))
                                })]
                            }), (0, o.jsx)("div", {
                                className: "mt-4 w-full max-w-[440px] lg:ml-12 lg:mt-0 [&>div]:float-right",
                                children: (0, o.jsx)(f(), {
                                    src: h.Z,
                                    alt: "LoanCollections"
                                })
                            })]
                        })
                    })
                },
                b = n(86010),
                N = n(30902),
                k = n(49770),
                S = n(68663),
                _ = n(86365),
                C = n(36429),
                Z = n(78752),
                L = n(21645),
                T = {
                    src: "/_next/static/media/AllCollections.41974d52.svg",
                    height: 48,
                    width: 48
                },
                E = n(43654),
                I = n(92212),
                O = n(1885),
                P = n(98617),
                F = n(642),
                G = n(14924),
                M = n(20949),
                A = n(57870),
                $ = n(3735),
                B = {
                    src: "/_next/static/media/LoanGuideBorrow01Dark.598753f6.svg",
                    height: 200,
                    width: 314
                },
                R = {
                    src: "/_next/static/media/LoanGuideBorrow01Light.b5de71c6.svg",
                    height: 200,
                    width: 314
                },
                z = {
                    src: "/_next/static/media/LoanGuideBorrow02Dark.f5d43015.svg",
                    height: 200,
                    width: 314
                },
                D = {
                    src: "/_next/static/media/LoanGuideBorrow02Light.9a1596fe.svg",
                    height: 200,
                    width: 314
                },
                U = {
                    src: "/_next/static/media/LoanGuideBorrow03Dark.6fa13e44.svg",
                    height: 200,
                    width: 314
                },
                W = {
                    src: "/_next/static/media/LoanGuideBorrow03Light.1ff3808a.svg",
                    height: 200,
                    width: 314
                },
                H = {
                    src: "/_next/static/media/LoanGuideLend01Dark.3900c22b.svg",
                    height: 200,
                    width: 314
                },
                Y = {
                    src: "/_next/static/media/LoanGuideLend01Light.9b705fd3.svg",
                    height: 200,
                    width: 314
                },
                q = {
                    src: "/_next/static/media/LoanGuideLend02Dark.4e094c45.svg",
                    height: 200,
                    width: 314
                },
                X = {
                    src: "/_next/static/media/LoanGuideLend02Light.be343efd.svg",
                    height: 200,
                    width: 314
                },
                Q = {
                    src: "/_next/static/media/LoanGuideLend03Dark.65294114.svg",
                    height: 200,
                    width: 314
                },
                V = {
                    src: "/_next/static/media/LoanGuideLend03Light.d38bc179.svg",
                    height: 200,
                    width: 314
                },
                K = n(87974),
                J = n(30365),
                ee = n(88166),
                te = function(e) {
                    var t = e.className;
                    return (0, o.jsx)("svg", {
                        className: t,
                        width: "40",
                        height: "16",
                        viewBox: "0 0 40 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, o.jsx)("path", {
                            d: "M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM1 9H39V7H1V9Z",
                            fill: "currentColor"
                        })
                    })
                },
                ne = function(e) {
                    var t = e.className;
                    return (0, o.jsx)("svg", {
                        className: t,
                        width: "16",
                        height: "24",
                        viewBox: "0 0 16 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, o.jsx)("path", {
                            d: "M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 1L7 23H9L9 1L7 1Z",
                            fill: "currentColor"
                        })
                    })
                },
                re = function(e) {
                    var t = e.type,
                        n = (0, a.$G)().t,
                        l = (0, d.useMemo)((function() {
                            return (0, $.zG)(ee.U_.get(), K.Uo, K.tS((function(e) {
                                return K.ij(e[t])
                            })), K.pF((function() {
                                return !0
                            })))
                        }), [t]),
                        i = (0, d.useCallback)((function(e) {
                            var n = ee.U_.get();
                            ee.U_.set((0, s.Z)((0, r.Z)({}, (0, $.zG)(n, J.pF((function() {
                                return {}
                            })))), (0, G.Z)({}, t, e)))()
                        }), [t]),
                        c = function(e, t, n) {
                            return (0, o.jsxs)("div", {
                                className: "flex flex-1 flex-col items-center lg:self-start",
                                children: [(0, o.jsx)(f(), {
                                    src: e,
                                    alt: t
                                }), (0, o.jsx)("span", {
                                    className: "ts-body-3 mt-1 text-center text-gray-700",
                                    children: n
                                })]
                            })
                        },
                        u = (0, o.jsxs)("div", {
                            className: "mx-6 my-4 flex items-center text-gray-700 lg:h-[168px]",
                            children: [(0, o.jsx)(te, {
                                className: "hidden lg:block"
                            }), (0, o.jsx)(ne, {
                                className: "lg:hidden"
                            })]
                        }),
                        x = (0, M.ff)(!1, !0);
                    return (0, o.jsxs)(A.p, {
                        as: "section",
                        className: "flex flex-col overflow-hidden rounded-xl border",
                        defaultOpen: l,
                        children: [(0, o.jsxs)(A.p.Button, {
                            className: "ts-body-3 lg:ts-body-2 flex bg-gray-100 p-6 text-left font-bold",
                            onClick: function() {
                                return i(!l)
                            },
                            children: [(0, o.jsx)(m.Yt, {
                                className: "h-6 w-6 text-secondary-3"
                            }), (0, o.jsx)("span", {
                                className: "ml-2 flex-1",
                                children: n("borrow" === t ? "How to borrow ETH using my NFTs" : "How to lend ETH and earn yields")
                            }), (0, o.jsx)(m.DJW, {
                                className: "ml-6 h-6 w-6 text-gray-500 ui-open:rotate-180 motion-safe:duration-200"
                            })]
                        }), (0, o.jsxs)(A.p.Panel, {
                            className: "border-t p-6",
                            children: [(0, o.jsx)("div", {
                                className: "flex flex-col items-center lg:flex-row lg:items-start",
                                children: "borrow" === t ? (0, o.jsxs)(o.Fragment, {
                                    children: [c(x ? B : R, "LoanGuideBorrowImage01", n("Pick a loan offer with best terms for you, accept it.")), u, c(x ? z : D, "LoanGuideBorrowImage02", n("Receive ETH from the lender, and your NFT gets locked on X2Y2 until you pay off.")), u, c(x ? U : W, "LoanGuideBorrowImage03", n("Repay the loan before due, then your NFT returns to you."))]
                                }) : (0, o.jsxs)(o.Fragment, {
                                    children: [c(x ? H : Y, "LoanGuideLendImage01", n("Make loan offers to collections or single items.")), u, c(x ? q : X, "LoanGuideLendImage02", n("When a borrower accepts your offer, your ETH gets transferred to him, and you receive a promissory note NFT.")), u, c(x ? Q : V, "LoanGuideLendImage03", n("The borrow pays off the loan to you before due, and your promissory note NFT gets burned."))]
                                })
                            }), (0, o.jsx)("footer", {
                                className: "mt-2 flex justify-end",
                                children: (0, o.jsxs)(y.Z, {
                                    className: "ts-button-2 flex items-center text-primary-1",
                                    hoverStyle: "opacity",
                                    href: "borrow" === t ? "https://docs.x2y2.io/guides/borrow-or-lend-eth-with-nft-loan/borrow-eth-with-nfts" : "https://docs.x2y2.io/guides/borrow-or-lend-eth-with-nft-loan/lend-eth",
                                    isExternal: !0,
                                    children: [(0, o.jsx)(m.lPH, {
                                        className: "mr-1 h-4 w-4"
                                    }), (0, o.jsx)("span", {
                                        children: n("Learn more about the Loan")
                                    })]
                                })
                            })]
                        })]
                    })
                },
                se = n(47568),
                oe = n(20414),
                le = n(47398),
                ae = n(2593),
                ie = n(57218),
                ce = n(43076),
                de = n(34557),
                ue = n(76913),
                xe = n(8007),
                fe = n(6650),
                me = n(21387),
                he = n(99700),
                pe = n(88886),
                ve = n(79948),
                ge = n(89997),
                je = n(23351),
                ye = n(64286),
                we = n(79737),
                be = n(54765),
                Ne = n(91425),
                ke = n(40974),
                Se = function() {
                    var e = (0, a.$G)().t;
                    return (0, o.jsx)("div", {
                        className: "link-box flex min-w-[1100px] flex-col",
                        children: (0, o.jsx)("div", {
                            className: "mt-4 flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2",
                            children: (0, o.jsxs)("div", {
                                className: "ts-caption-2 flex flex-1 items-center space-x-2 font-bold text-gray-500",
                                children: [(0, o.jsx)("div", {
                                    className: "flex-1 grow-[1.25]",
                                    children: e("Token")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5]",
                                    children: e("Highest Offer")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: e("Collection")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5]",
                                    children: e("Rarity")
                                }), (0, o.jsxs)("div", {
                                    className: "flex flex-1 grow-[0.5] items-center space-x-1",
                                    children: [(0, he.S3)(e), (0, o.jsx)("span", {
                                        children: e("Valuation")
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5]",
                                    children: e("Last Sale")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[1.25] text-right",
                                    children: e("Desired Terms")
                                })]
                            })
                        })
                    })
                },
                _e = function(e) {
                    var t = e.item,
                        n = e.highestOffer,
                        l = e.termInfo,
                        i = e.estPrice,
                        c = e.isSelected,
                        d = e.onSelect,
                        u = e.onSetTerms,
                        x = e.onCancelTerms,
                        f = (0, a.$G)().t,
                        h = (0, C.ah)(),
                        p = (0, C._B)(),
                        j = t.collection,
                        y = j.contract,
                        w = j.displayOptions,
                        b = j.verified,
                        k = t.nft,
                        _ = k.tokenId,
                        Z = k.networkId,
                        T = k.meta,
                        E = k.rank,
                        I = k.lastPrice,
                        O = t.rarity,
                        P = (0, g.k5)(t),
                        F = (0, we.ND)({
                            networkId: Z,
                            tokenContract: y,
                            tokenId: _
                        }),
                        G = (0, N.pipe)(K.ij(l), K.UI((function(e) {
                            var t = e.amount,
                                n = e.erc20Address,
                                r = e.duration;
                            return {
                                valueLabel: t && "0" !== t && n ? (0, ce.y)(Z, ae.O$.from(t), n) : null,
                                durationLabel: r ? (0, v.Y)(f, r) : null
                            }
                        })), K.UI((function(e) {
                            var t = e.valueLabel,
                                n = e.durationLabel;
                            return (0, o.jsxs)("span", {
                                className: "flex items-center space-x-1",
                                children: [t || n ? (0, o.jsxs)(o.Fragment, {
                                    children: [t && (0, o.jsx)("span", {
                                        className: "truncate",
                                        children: t
                                    }), t && n && (0, o.jsxs)("span", {
                                        children: [" ", " / "]
                                    }), n && (0, o.jsx)("span", {
                                        className: "shrink-0 truncate",
                                        children: n
                                    })]
                                }) : (0, o.jsx)("span", {
                                    children: f("Any")
                                }), (0, o.jsx)(m.OhS, {
                                    className: "!ml-2 h-6 w-6 cursor-pointer rounded-full bg-gray-200 p-1 text-gray-500",
                                    onClick: function(e) {
                                        e.stopPropagation(), x()
                                    }
                                })]
                            })
                        })), K.pF((function() {
                            return null
                        }))),
                        M = "number" === typeof E ? (0, o.jsxs)("p", {
                            className: "flex w-min items-center space-x-1",
                            children: [(0, o.jsx)(m.crJ, {
                                className: "h-4 w-4"
                            }), (0, o.jsx)("span", {
                                className: "ts-body-2 truncate bg-gradient-to-r from-[#3772FF] to-[#9757D7] bg-clip-text font-bold text-transparent",
                                children: (0, o.jsx)("span", {
                                    children: "".concat(E)
                                })
                            })]
                        }) : null,
                        A = (0, N.pipe)(K.ij(O), K.UI((function(e) {
                            return e <= 50 ? f("Top {{percent}}", {
                                percent: "".concat(e.toFixed(2), "%")
                            }) : f("Bottom {{percent}}", {
                                percent: "".concat((100 - e).toFixed(2), "%")
                            })
                        })), K.WG);
                    return (0, o.jsxs)("div", {
                        className: "link-box group flex min-w-[1100px] flex-col",
                        onClick: d,
                        children: [(0, o.jsx)("div", {
                            className: "flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2 group-hover:bg-gray-200",
                            children: (0, o.jsxs)("div", {
                                className: "flex h-10 min-w-0 flex-1 items-center space-x-2",
                                children: [(0, o.jsxs)("div", {
                                    className: "flex flex-1 grow-[1.25] items-center",
                                    children: [(0, o.jsx)(ke.J, {
                                        className: "mr-4",
                                        isChecked: c
                                    }), (0, o.jsx)(ue.Dp, (0, s.Z)((0, r.Z)({}, (0, N.pipe)((0, je.YZ)(T, w), ue.KO)), {
                                        tokenAddress: y,
                                        tokenId: _,
                                        imageAlt: P,
                                        boxSize: 12,
                                        minW: 12
                                    })), (0, o.jsx)(de.Z, {
                                        className: "ml-2",
                                        href: F,
                                        target: "_blank",
                                        color: p.gray700,
                                        textStyle: "body_2_bold",
                                        noOfLines: 1,
                                        wordBreak: "break-all",
                                        children: P
                                    }), b && (0, o.jsx)(L.SN$, {
                                        ml: 1,
                                        boxSize: 4,
                                        color: "primary_1.500"
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5] overflow-hidden font-bold",
                                    children: n && (0, o.jsxs)("p", {
                                        className: "ts-body-2 flex flex-row items-center overflow-hidden",
                                        children: [(0, o.jsx)("span", {
                                            className: "truncate",
                                            children: (0, g.xH)(ae.O$.from(n))
                                        }), (0, o.jsx)("span", {
                                            className: "ml-0.5",
                                            children: "\u039e"
                                        })]
                                    })
                                }), (0, o.jsxs)("div", {
                                    className: "flex flex-1 items-center overflow-hidden",
                                    children: [(0, o.jsx)("span", {
                                        className: "ts-body-2 truncate font-bold text-gray-700",
                                        children: (0, pe.E0)(t.collection)
                                    }), b && (0, o.jsx)(L.SN$, {
                                        ml: 1,
                                        boxSize: 4,
                                        color: "primary_1.500"
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5] items-center overflow-hidden",
                                    children: "number" === typeof E && (A ? (0, o.jsx)(le.u, {
                                        label: (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)("p", {
                                                children: f("X2Y2 Rarity")
                                            }), (0, o.jsx)("p", {
                                                children: A
                                            })]
                                        }),
                                        placement: "top",
                                        hasArrow: !0,
                                        children: M
                                    }) : M)
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5] overflow-hidden font-bold",
                                    children: i && i.estimateEth ? (0, o.jsx)(le.u, {
                                        label: i.processAt ? f("Estimated at {{time}}", {
                                            time: h(1e3 * i.processAt).format("MMM D HH:mm")
                                        }) : f("Estimated by NFTBank"),
                                        placement: "top",
                                        hasArrow: !0,
                                        children: (0, o.jsxs)("p", {
                                            className: "ts-body-2 flex w-min flex-row items-center overflow-hidden",
                                            children: [(0, o.jsx)("span", {
                                                className: "truncate",
                                                children: (0, v.tX)(parseFloat(i.estimateEth))
                                            }), (0, o.jsx)("span", {
                                                className: "ml-0.5",
                                                children: "\u039e"
                                            })]
                                        })
                                    }) : "-"
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5] overflow-hidden font-bold",
                                    children: I && (0, o.jsxs)("p", {
                                        className: "ts-body-2 flex flex-row items-center overflow-hidden",
                                        children: [(0, o.jsx)("span", {
                                            className: "truncate",
                                            children: (0, v.tX)(parseFloat(I))
                                        }), (0, o.jsx)("span", {
                                            className: "ml-0.5",
                                            children: "\u039e"
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "min-w-0 flex-1 grow-[1.25] overflow-hidden",
                                    children: (0, o.jsx)("p", {
                                        className: "ts-body-2 float-right max-w-full font-bold",
                                        children: G || (0, o.jsx)(S.zx, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: function(e) {
                                                e.stopPropagation(), u()
                                            },
                                            children: f("Set terms")
                                        })
                                    })
                                })]
                            })
                        }), (0, o.jsx)("hr", {
                            className: "mx-4 w-auto"
                        })]
                    })
                },
                Ce = function(e) {
                    var t = e.user,
                        n = e.isFetching,
                        s = e.items,
                        l = e.currentItem,
                        i = e.onSelect,
                        c = (0, a.$G)().t,
                        x = (0, C.dd)(Ne.D2),
                        f = (0, d.useState)(1),
                        m = f[0],
                        h = f[1];
                    (0, d.useEffect)((function() {
                        h(1)
                    }), [s]);
                    var p = (0, d.useMemo)((function() {
                            return s.slice(5 * (m - 1), 5 * m)
                        }), [s, m]),
                        v = (0, u.ZP)(p.length > 0 && {
                            key: g.lb,
                            params: p.map((function(e) {
                                return {
                                    contract: e.collection.contract,
                                    token_id: e.nft.tokenId
                                }
                            }))
                        }, (function(e) {
                            var t = e.params;
                            return (0, j.e8)(t)
                        }), {
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        y = v.data,
                        w = void 0 === y ? [] : y,
                        b = (0, d.useMemo)((function() {
                            return w.reduce((function(e, t) {
                                return (0, r.Z)({}, e, void 0 !== t.contract && void 0 !== t.tokenId && void 0 !== t.value && (0, G.Z)({}, "".concat(t.contract, "-").concat(t.tokenId), t.value))
                            }), {})
                        }), [w]),
                        N = (0, u.ZP)(p.length > 0 && {
                            key: g.XX,
                            params: p.map((function(e) {
                                return {
                                    contract: e.collection.contract,
                                    token_id: e.nft.tokenId
                                }
                            }))
                        }, (function(e) {
                            var t = e.params;
                            return (0, j.kr)({
                                extra: !1,
                                q: t
                            })
                        }), {
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        k = N.data,
                        S = void 0 === k ? [] : k,
                        _ = N.mutate,
                        Z = (0, d.useMemo)((function() {
                            return S.reduce((function(e, t) {
                                return (0, r.Z)({}, e, void 0 !== t.collectionAddress && void 0 !== t.tokenId && (0, G.Z)({}, "".concat(t.collectionAddress, "-").concat(t.tokenId), t))
                            }), {})
                        }), [S]),
                        L = (0, he.G8)(p.map((function(e) {
                            return {
                                address: e.collection.contract,
                                tokenId: e.nft.tokenId
                            }
                        }))).itemEstPriceMap;
                    return n ? (0, o.jsx)(me.Z, {
                        h: "152px"
                    }) : 0 === s.length ? (0, o.jsx)(fe.Z, {}) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)("div", {
                            className: "overflow-x-auto",
                            children: [(0, o.jsx)(Se, {}), p.map((function(e) {
                                var n, r = e.collection,
                                    s = r.contract,
                                    a = r.ercType,
                                    d = r.name,
                                    u = r.nameOverride,
                                    f = r.verified,
                                    m = e.nft,
                                    h = m.tokenId,
                                    p = m.networkId,
                                    v = m.meta,
                                    g = "".concat(s, "-").concat(h),
                                    y = {
                                        name: d,
                                        name_override: u
                                    },
                                    w = [{
                                        tokenPair: {
                                            token: s,
                                            tokenId: h,
                                            amount: 1,
                                            kind: null !== (n = (0, pe.Cs)(a)) && void 0 !== n ? n : ve.Ez,
                                            mintData: ie.R
                                        },
                                        info: {
                                            asset: (0, je.YZ)(v),
                                            creator: (0, pe.E0)(y),
                                            verified: f,
                                            name: (0, ge.G)((0, je.PK)(v), y, h),
                                            networkId: p
                                        }
                                    }];
                                return (0, o.jsx)(_e, {
                                    item: e,
                                    highestOffer: b[g],
                                    termInfo: Z[g],
                                    estPrice: L[g],
                                    isSelected: !!l && (l.collection.contract === s && l.nft.tokenId === h),
                                    onSelect: function() {
                                        return i(e)
                                    },
                                    onSetTerms: function() {
                                        (0, be._)(t, p, (function() {
                                            return x.onOpen({
                                                user: t,
                                                bundle: w,
                                                doesSupportSetTerm: e.nft.properties.supportSetTerm,
                                                onSuccess: _
                                            })
                                        }), (0, be.V)(c))
                                    },
                                    onCancelTerms: function() {
                                        (0, be._)(t, p, (0, se.Z)((function() {
                                            var e, n;
                                            return (0, oe.__generator)(this, (function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return r.trys.push([0, 2, , 3]), [4, (0, j.n4)(t, {
                                                            contract: s,
                                                            token_id: h
                                                        })];
                                                    case 1:
                                                        return r.sent(), _(), [3, 3];
                                                    case 2:
                                                        return e = r.sent(), "string" === typeof(n = (0, ve.e$)(c, e)) ? (0, ye.Z)({
                                                            status: "error",
                                                            title: n
                                                        }) : (console.error(e), (0, ye.Z)({
                                                            status: "error",
                                                            title: c("Something's wrong")
                                                        })), [3, 3];
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        })), (0, be.V)(c))
                                    }
                                }, g)
                            }))]
                        }), (0, o.jsx)(xe.u, {
                            mt: 8,
                            limit: 5,
                            page: m,
                            total: s.length,
                            onPageChange: function(e, t) {
                                h(t)
                            }
                        }), x.component]
                    })
                },
                Ze = n(82670),
                Le = n(828),
                Te = n(89880),
                Ee = n(54767),
                Ie = n(98316),
                Oe = n(68123),
                Pe = n(55851),
                Fe = function(e) {
                    var t, n = e.nft,
                        s = e.onSelect,
                        l = e.selectedOfferId,
                        i = n.collection,
                        c = i.contract,
                        u = i.ercType,
                        x = i.displayOptions,
                        f = i.verified,
                        m = n.nft,
                        h = m.networkId,
                        p = m.tokenId,
                        v = m.meta,
                        y = (0, a.$G)().t,
                        w = (0, d.useReducer)(g.VR, {
                            duration: 0,
                            page: 1,
                            pageSize: 5,
                            sort: "desc",
                            order: "createdAt"
                        }),
                        b = w[0],
                        k = w[1],
                        S = (0, d.useState)(0),
                        _ = S[0],
                        C = S[1],
                        Z = (0, d.useCallback)((function() {
                            return C(N.increment)
                        }), []),
                        L = (0, d.useMemo)((function() {
                            return [K.G(Ee.Y3((0, se.Z)((function() {
                                var e;
                                return (0, oe.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, (0, j.yw)((0, r.Z)({
                                                contractAddress: c,
                                                tokenId: p
                                            }, b))];
                                        case 1:
                                            return [2, t.sent()];
                                        case 2:
                                            if (e = t.sent(), (0, Ze.Z)(e, Oe.ED) && e.message === Oe.N0) throw (0, Oe.gr)(y)[e.message];
                                            return console.error(e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            })), (function(e) {
                                return "string" === typeof e ? e : y("Something's wrong")
                            }))), _]
                        }), [b, _, y, c, p])[0],
                        T = (0, Le.Z)((0, Te.Z)(L, {
                            skipPending: !0
                        }), 1)[0],
                        E = Ie.hx(T) ? T.error : null,
                        I = (0, pe.E0)(n.collection),
                        O = {
                            tokenPair: {
                                token: c,
                                tokenId: p,
                                amount: 1,
                                kind: null !== (t = (0, pe.Cs)(u)) && void 0 !== t ? t : ve.Ez,
                                mintData: ie.R
                            },
                            info: {
                                asset: (0, je.YZ)(v, x),
                                creator: I,
                                verified: f,
                                name: "".concat(I, " #").concat(p),
                                networkId: h
                            }
                        };
                    return (0, o.jsx)("div", {
                        className: "mt-4",
                        children: (0, o.jsx)(Pe.F, {
                            pageType: "loanPage",
                            selectedOfferId: l,
                            onSelect: s,
                            refetch: Z,
                            item: O,
                            isFetching: Ie.zR(T),
                            fetchQuery: b,
                            fetchResp: Ie.WG(T),
                            fetchError: E,
                            dispatchFetchQueryAction: k,
                            showLearnMore: !1
                        })
                    })
                },
                Ge = function() {
                    var e = (0, a.$G)().t;
                    return (0, o.jsxs)("div", {
                        className: "space-y-8 pt-8",
                        children: [(0, o.jsx)(re, {
                            type: "borrow"
                        }), (0, o.jsx)(I.$J, {
                            connectWalletBtnText: e("Connect wallet to proceed"),
                            connectWalletBtnProps: {
                                variant: "solid",
                                colorScheme: "primary_1"
                            },
                            children: function(e) {
                                return (0, o.jsx)(Me, {
                                    user: e
                                })
                            }
                        })]
                    })
                },
                Me = function(e) {
                    var t, n, r, s = e.user,
                        l = s.meta.address,
                        i = (0, a.$G)().t,
                        c = (0, k.Z)(g.qf, (function() {
                            return (0, j.YP)()
                        }), {
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        x = c.data,
                        m = c.error,
                        h = (0, u.ZP)(g.et, (function() {
                            return (0, j.RM)(l)
                        }), {
                            revalidateOnFocus: !1,
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        p = h.data,
                        v = h.error,
                        y = !x && !m || !p && !v,
                        w = (0, d.useMemo)((function() {
                            return null !== x && void 0 !== x ? x : []
                        }), [x]),
                        I = (0, d.useMemo)((function() {
                            return (null !== p && void 0 !== p ? p : []).filter((function(e) {
                                return void 0 !== e.collection && void 0 !== e.nft
                            }))
                        }), [p]),
                        G = (0, E.$)(),
                        M = (0, d.useCallback)((function(e, t, n) {
                            var r = (0, g.Zu)({
                                collection: null !== t && void 0 !== t ? t : void 0
                            }, G);
                            return (0, o.jsxs)("div", {
                                className: "flex h-14 flex-1 items-center space-x-3",
                                children: [(0, o.jsx)("div", {
                                    className: "h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-300 hover:opacity-50 lg:h-12 lg:w-12",
                                    children: e ? (0, o.jsx)(f(), {
                                        src: T,
                                        alt: "allCollections"
                                    }) : r.image
                                }), (0, o.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 flex-col",
                                    children: [(0, o.jsxs)("div", {
                                        className: "flex items-center space-x-1",
                                        children: [(0, o.jsx)("span", {
                                            className: "ts-body-3 lg:ts-body-2 truncate font-bold text-gray-800",
                                            children: e ? i("All Whitelisted Collections") : r.title
                                        }), r.verified && (0, o.jsx)(L.SN$, {
                                            color: "primary_1.500"
                                        })]
                                    }), (0, o.jsx)("span", {
                                        className: "ts-caption-2 lg:ts-caption text-left font-normal text-gray-500",
                                        children: i("{{count}} Items", {
                                            count: n
                                        })
                                    })]
                                })]
                            })
                        }), [i, G]),
                        A = (0, d.useMemo)((function() {
                            return (0, N.pipe)(I, O.vM((function(e) {
                                return e.collection.contract
                            })), P.UI((function(e) {
                                return e.length
                            })), (function(e) {
                                return [{
                                    title: M(!0, null, I.length),
                                    value: ""
                                }].concat(w.map((function(n) {
                                    return {
                                        title: M(!1, n, null !== (t = e[n.contract]) && void 0 !== t ? t : 0),
                                        value: n.contract
                                    }
                                })))
                            }))
                        }), [M, w, I]),
                        $ = (0, d.useState)(""),
                        B = $[0],
                        R = $[1],
                        z = (0, d.useMemo)((function() {
                            return I.filter((function(e) {
                                return !B || B === e.collection.contract
                            }))
                        }), [B, I]),
                        D = (0, d.useState)(null),
                        U = D[0],
                        W = D[1];
                    (0, d.useEffect)((function() {
                        W(null)
                    }), [B]);
                    var H = (0, Z.x)({
                            tokenContract: null !== (n = null === U || void 0 === U ? void 0 : U.collection.contract) && void 0 !== n ? n : null,
                            tokenId: null !== (r = null === U || void 0 === U ? void 0 : U.nft.tokenId) && void 0 !== r ? r : null
                        }),
                        Y = (0, d.useState)(null),
                        q = Y[0],
                        X = Y[1];
                    (0, d.useEffect)((function() {
                        X(null)
                    }), [U]);
                    var Q, V = (0, C._B)().gray300;
                    return (0, o.jsxs)("section", {
                        children: [(0, o.jsx)("h2", {
                            className: "ts-headline-6 lg:ts-headline-5",
                            children: i("Step 1: Select an NFT Collateral")
                        }), (0, o.jsx)("p", {
                            className: "ts-body-3 lg:ts-body-2 mt-2 text-gray-500",
                            children: i("Choose the NFT item that you want to use as collateral to establish a loan.")
                        }), (0, o.jsx)(_.Z, {
                            buttonProps: {
                                h: ["76px", null, 20],
                                mt: 6,
                                rounded: "r12",
                                pr: 6,
                                pl: 6
                            },
                            dropDownProps: {
                                rounded: "r12",
                                p: 0,
                                borderWidth: 1,
                                borderColor: V
                            },
                            rowInDropDownProps: {
                                rounded: "none",
                                widthOffset: -2,
                                px: 6
                            },
                            items: A,
                            value: B,
                            onChange: function(e) {
                                R(null !== e && void 0 !== e ? e : "")
                            }
                        }), (0, o.jsx)(Ce, {
                            user: s,
                            isFetching: y,
                            items: z,
                            currentItem: U,
                            onSelect: W
                        }), (0, o.jsxs)("div", {
                            className: (0, b.Z)({
                                "opacity-50": !U
                            }),
                            children: [(0, o.jsx)("h2", {
                                className: "ts-headline-6 lg:ts-headline-5 mt-12",
                                children: i("Step 2: Select a loan offer")
                            }), (0, o.jsx)("p", {
                                className: "ts-body-3 lg:ts-body-2 mt-2 text-gray-500",
                                children: i("Pick a loan offer that matches your need. Read the figures carefully before accept any offers.")
                            })]
                        }), U && (H ? (0, o.jsx)(F.G, {
                            className: "mt-4"
                        }) : (0, o.jsx)(Fe, {
                            nft: U,
                            onSelect: X,
                            selectedOfferId: null !== (Q = null === q || void 0 === q ? void 0 : q.offer.offerId) && void 0 !== Q ? Q : null
                        })), !(U && q) && (0, o.jsxs)("div", {
                            className: "ts-caption-2 lg:ts-caption mt-7 rounded-xl bg-blue-bg px-6 py-5 text-gray-700",
                            children: [!U && (0, o.jsx)("p", {
                                children: i("Choose one NFT token which you want to use as collateral.")
                            }), !q && (0, o.jsx)("p", {
                                children: i("Choose one offer you want to borrow with.")
                            })]
                        }), (0, o.jsx)(S.zx, {
                            className: "mt-6 w-full md:w-60",
                            colorScheme: "primary-1",
                            isDisabled: null === q || q.isDisabled,
                            onClick: null === q || void 0 === q ? void 0 : q.onBorrow,
                            children: i("Borrow")
                        })]
                    })
                },
                Ae = n(16531),
                $e = n(5884),
                Be = n(26723),
                Re = n(88429),
                ze = n(33482),
                De = n(97375),
                Ue = n(14905),
                We = n(26591),
                He = n(29815),
                Ye = n(4612),
                qe = n(34651),
                Xe = n(85769),
                Qe = n(51126),
                Ve = function(e) {
                    var t, n, r = e.collections,
                        s = e.currentCollection,
                        i = e.setCurrentCollection,
                        c = (0, a.$G)().t,
                        u = (0, C._B)(),
                        x = (0, d.useState)(""),
                        f = x[0],
                        m = x[1],
                        h = (0, Le.Z)((0, Xe.Z)(f, 300), 1)[0],
                        p = (0, d.useMemo)((function() {
                            return r.filter((function(e) {
                                return (null !== (n = null !== (t = e.nameOverride) && void 0 !== t ? t : e.name) && void 0 !== n ? n : "").toLowerCase().indexOf(h.toLowerCase()) >= 0
                            }))
                        }), [r, h]);
                    return (0, o.jsxs)(l.Kq, {
                        spacing: 0,
                        children: [(0, o.jsxs)(Ye.BZ, {
                            mb: 3,
                            children: [(0, o.jsx)(Ye.Z8, {
                                children: (0, o.jsx)(L.nVt, {
                                    boxSize: 5,
                                    color: u.gray500
                                })
                            }), (0, o.jsx)(Ye.II, {
                                value: f,
                                onChange: function(e) {
                                    return m(e.target.value)
                                },
                                placeholder: c("Filter")
                            })]
                        }), [null].concat((0, He.Z)(p)).map((function(e, t) {
                            return (0, o.jsx)(Ke, {
                                item: e,
                                selected: (null === e || void 0 === e ? void 0 : e.contract) === (null === s || void 0 === s ? void 0 : s.contract),
                                onClick: function() {
                                    return i(e)
                                }
                            }, t)
                        }))]
                    })
                },
                Ke = function(e) {
                    var t, n, r = e.item,
                        s = e.selected,
                        i = e.onClick,
                        c = (0, a.$G)().t,
                        d = (0, E.$)(),
                        u = (0, C._B)();
                    return (0, o.jsx)(l.Ug, {
                        h: 14,
                        minH: 14,
                        rounded: 12,
                        bg: s ? u.modalSectionBg : void 0,
                        children: (0, o.jsxs)(l.Ug, {
                            onClick: i,
                            flex: 1,
                            spacing: 3,
                            px: 4,
                            cursor: "pointer",
                            userSelect: "none",
                            _hover: {
                                opacity: .7
                            },
                            children: [r ? (0, o.jsx)(qe.Ei, {
                                boxSize: 8,
                                src: (0, Qe.VB)(null !== (t = r.iconUrl) && void 0 !== t ? t : d, 128),
                                rounded: "full"
                            }) : (0, o.jsx)(f(), {
                                className: "h-8 w-8",
                                src: T,
                                alt: "allCollections"
                            }), (0, o.jsx)(l.xu, {
                                flex: 1,
                                children: (0, o.jsxs)(l.Ug, {
                                    spacing: 1,
                                    children: [(0, o.jsx)(l.xu, {
                                        textStyle: "input_2",
                                        noOfLines: 1,
                                        wordBreak: "break-all",
                                        children: r ? null !== (n = r.nameOverride) && void 0 !== n ? n : r.name : c("All collections")
                                    }), r && r.verified && (0, o.jsx)(L.SN$, {
                                        boxSize: 4,
                                        minW: 4,
                                        color: "primary_1.500"
                                    })]
                                })
                            })]
                        })
                    })
                },
                Je = function(e) {
                    return (0, o.jsx)(Ve, (0, r.Z)({}, e), "CollectionSelect")
                },
                et = function(e) {
                    var t = e.collections,
                        n = e.currentCollection,
                        i = e.setCurrentCollection,
                        c = e.onPressClose,
                        d = (0, a.$G)().t,
                        u = (0, C._B)(),
                        x = (0, Ue.K)().sectionStyle;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [c && (0, o.jsxs)(l.Ug, (0, s.Z)((0, r.Z)({
                            justify: "space-between"
                        }, x({
                            isTop: !0
                        })), {
                            children: [(0, o.jsxs)(l.Ug, {
                                color: u.gray900,
                                children: [(0, o.jsx)(L.ZF6, {
                                    boxSize: 5
                                }), (0, o.jsx)(l.xu, {
                                    textStyle: "headline_6",
                                    children: d("Choose collection")
                                })]
                            }), (0, o.jsx)(Be.hU, {
                                onClick: c,
                                variant: "ghost",
                                size: "sm",
                                color: u.gray500,
                                icon: (0, o.jsx)(L.OhS, {
                                    boxSize: 6
                                }),
                                "aria-label": d("Close"),
                                isRound: !0
                            })]
                        })), (0, o.jsx)(l.Kq, (0, s.Z)((0, r.Z)({
                            spacing: 4
                        }, x({
                            isTop: !c
                        })), {
                            children: (0, o.jsx)(Re.UQ, {
                                variant: "sub",
                                defaultIndex: [0],
                                children: (0, o.jsxs)(Re.Qd, {
                                    children: [(0, o.jsxs)(Re.KF, {
                                        children: [(0, o.jsx)(L.fSU, {
                                            boxSize: 4,
                                            mr: 2
                                        }), (0, o.jsx)(l.xu, {
                                            flex: 1,
                                            textStyle: "hairline_2",
                                            children: d("Collections")
                                        })]
                                    }), (0, o.jsx)(Re.Hk, {
                                        borderBottomWidth: 0,
                                        children: (0, o.jsx)(Je, {
                                            collections: t,
                                            currentCollection: n,
                                            setCurrentCollection: i
                                        })
                                    })]
                                })
                            })
                        }))]
                    })
                },
                tt = function(e) {
                    var t = e.collections,
                        n = e.currentCollection,
                        l = e.setCurrentCollection,
                        a = e.disclosure;
                    return (0, o.jsxs)(ze.u_, {
                        preserveScrollBarGap: !0,
                        size: "full",
                        isOpen: a.isOpen,
                        onClose: a.onClose,
                        scrollBehavior: "inside",
                        children: [(0, o.jsx)(ze.ZA, {}), (0, o.jsx)(ze.hz, (0, s.Z)((0, r.Z)({}, We.L), {
                            children: (0, o.jsx)(ze.fe, {
                                p: 6,
                                children: (0, o.jsx)(et, {
                                    collections: t,
                                    currentCollection: n,
                                    setCurrentCollection: function(e) {
                                        l(e), a.onClose()
                                    },
                                    onPressClose: function() {
                                        return a.onClose()
                                    }
                                })
                            })
                        }))]
                    })
                },
                nt = n(83560),
                rt = n(26473),
                st = n(16869),
                ot = n(35770),
                lt = function() {
                    var e = (0, a.$G)().t;
                    return (0, o.jsx)("div", {
                        className: "link-box flex min-w-[700px] flex-col",
                        children: (0, o.jsx)("div", {
                            className: "mt-3 flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2",
                            children: (0, o.jsxs)("div", {
                                className: "ts-caption-2 flex flex-1 items-center space-x-2 font-bold text-gray-500",
                                children: [(0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: e("Item")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: e("Terms")
                                }), (0, o.jsxs)("div", {
                                    className: "flex flex-1 grow-[0.5] items-center space-x-1",
                                    children: [(0, he.S3)(e), (0, o.jsx)("span", {
                                        children: e("Valuation")
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.75] text-right",
                                    children: e("Action")
                                })]
                            })
                        })
                    })
                },
                at = function(e) {
                    var t, n = e.isOwner,
                        r = e.networkId,
                        s = e.item,
                        l = e.estPrice,
                        i = e.onMakeOffer,
                        c = (0, a.$G)().t,
                        d = (0, C.ah)(),
                        u = (0, E.$)(),
                        x = (0, g.Zu)(s, u),
                        f = s.collection && !s.nft,
                        m = (0, N.pipe)(K.G(s), K.UI((function(e) {
                            var t = e.amount,
                                n = e.erc20Address,
                                s = e.duration;
                            return {
                                valueLabel: t && "0" !== t && n ? (0, ce.y)(r, ae.O$.from(t), n) : null,
                                durationLabel: s ? (0, v.Y)(c, s) : null
                            }
                        })), K.UI((function(e) {
                            var t = e.valueLabel,
                                n = e.durationLabel;
                            return (0, o.jsx)("span", {
                                className: "flex items-center space-x-1",
                                children: t || n ? (0, o.jsxs)(o.Fragment, {
                                    children: [t && (0, o.jsx)("span", {
                                        className: "truncate",
                                        children: t
                                    }), t && n && (0, o.jsxs)("span", {
                                        children: [" ", " / "]
                                    }), n && (0, o.jsx)("span", {
                                        className: "shrink-0 truncate",
                                        children: n
                                    })]
                                }) : (0, o.jsx)("span", {
                                    children: c("Any")
                                })
                            })
                        })), K.WG);
                    return (0, o.jsxs)("div", {
                        className: "link-box group flex min-w-[700px] flex-col",
                        children: [(0, o.jsx)("div", {
                            className: "flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2 group-hover:bg-gray-200",
                            children: (0, o.jsxs)("div", {
                                className: "flex h-10 min-w-0 flex-1 items-center space-x-2",
                                children: [(0, o.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 items-center space-x-3",
                                    children: [(0, o.jsx)(y.Z, {
                                        className: (0, b.Z)("h-10 w-10 flex-shrink-0 overflow-hidden bg-gray-300", f && "rounded-full"),
                                        hoverStyle: "opacity",
                                        href: x.url,
                                        target: "_blank",
                                        children: x.image
                                    }), (0, o.jsxs)("div", {
                                        className: "flex min-w-0 flex-1 flex-col",
                                        children: [(0, o.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0, o.jsx)(y.Z, {
                                                className: "ts-body-2 truncate font-bold",
                                                href: x.url,
                                                target: "_blank",
                                                children: s.nft ? x.title : "-"
                                            }), x.verified && (0, o.jsx)(L.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        }), x.collection && (0, o.jsxs)("div", {
                                            className: "flex items-center space-x-1 overflow-hidden",
                                            children: [(0, o.jsx)(y.Z, {
                                                className: "ts-caption-3 overflow-hidden break-all text-gray-500 line-clamp-1",
                                                href: (0, we.ec)({
                                                    tab: "items",
                                                    slug: null !== (t = x.collection.slug) && void 0 !== t ? t : (0, rt.P8)(x.collection.contract)
                                                }),
                                                target: "_blank",
                                                children: (0, pe.E0)(x.collection)
                                            }), x.collection.verified && (0, o.jsx)(L.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        })]
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    children: (0, o.jsx)("p", {
                                        className: "ts-body-2 max-w-full font-bold",
                                        children: m
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.5] overflow-hidden font-bold",
                                    children: l && l.estimateEth ? (0, o.jsx)(le.u, {
                                        label: l.processAt ? c("Estimated at {{time}}", {
                                            time: d(1e3 * l.processAt).format("MMM D HH:mm")
                                        }) : c("Estimated by NFTBank"),
                                        placement: "top",
                                        hasArrow: !0,
                                        children: (0, o.jsxs)("p", {
                                            className: "ts-body-2 flex w-min flex-row items-center overflow-hidden",
                                            children: [(0, o.jsx)("span", {
                                                className: "truncate",
                                                children: (0, v.tX)(parseFloat(l.estimateEth))
                                            }), (0, o.jsx)("span", {
                                                className: "ml-0.5",
                                                children: "\u039e"
                                            })]
                                        })
                                    }) : "-"
                                }), (0, o.jsx)("div", {
                                    className: "min-w-0 flex-1 grow-[0.75] overflow-hidden",
                                    children: (0, o.jsx)("p", {
                                        className: "float-right",
                                        children: n ? (0, o.jsx)("span", {
                                            className: "ts-body-2 font-bold",
                                            children: c("Your item")
                                        }) : (0, o.jsxs)(o.Fragment, {
                                            children: [s.userOfferNum && s.userOfferNum > 0 ? (0, o.jsx)(le.u, {
                                                label: c("You've made {{count}} offers to this item.", {
                                                    count: s.userOfferNum
                                                }),
                                                placement: "top",
                                                hasArrow: !0,
                                                children: (0, o.jsx)("span", {
                                                    className: "ts-caption-3 mr-2 inline-block min-w-[16px] rounded-full bg-primary-4 px-1 text-center font-bold text-button-text",
                                                    children: s.userOfferNum
                                                })
                                            }) : null, (0, o.jsx)(S.zx, {
                                                colorScheme: "primary-1",
                                                variant: "outline",
                                                size: "sm",
                                                onClick: i,
                                                children: c("Make offer")
                                            })]
                                        })
                                    })
                                })]
                            })
                        }), (0, o.jsx)("hr", {
                            className: "mx-4 w-auto"
                        })]
                    })
                },
                it = function(e) {
                    var t = e.collection,
                        n = (0, a.$G)().t,
                        s = (0, I.aC)().user,
                        l = K.FS((0, I.JQ)(s)),
                        i = (0, d.useState)(1),
                        c = i[0],
                        x = i[1];
                    (0, d.useEffect)((function() {
                        return x(1)
                    }), [t]);
                    var f, m = (0, u.ZP)({
                            key: g.kg,
                            query: {
                                collection: null === t || void 0 === t ? void 0 : t.contract,
                                pageSize: 15,
                                page: c,
                                userAddress: l
                            }
                        }, function() {
                            var e = (0, se.Z)((function(e) {
                                var t, r;
                                return (0, oe.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            t = e.query, s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, (0, j.P_)(t)];
                                        case 2:
                                            return [2, s.sent()];
                                        case 3:
                                            if (r = s.sent(), (0, Ze.Z)(r, Oe.ED) && r.message === Oe.N0) throw (0, Oe.gr)(n)[r.message];
                                            return console.error(r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        h = m.data,
                        p = m.error,
                        v = m.mutate,
                        y = p ? "string" === typeof p ? p : n("Something's wrong") : null,
                        w = (0, d.useState)(),
                        b = w[0],
                        N = w[1];
                    (0, d.useEffect)((function() {
                        h && N(h)
                    }), [h]);
                    var k, S, _, Z = (0, d.useMemo)((function() {
                            return (null !== (f = null === b || void 0 === b ? void 0 : b.data) && void 0 !== f ? f : []).filter((function(e) {
                                return void 0 !== e.collectionAddress && void 0 !== e.tokenId
                            }))
                        }), [null === b || void 0 === b ? void 0 : b.data]),
                        L = (0, he.G8)(Z.map((function(e) {
                            return {
                                address: e.collectionAddress,
                                tokenId: e.tokenId
                            }
                        }))).itemEstPriceMap,
                        T = (0, I.eX)().requireRegisteredUser,
                        E = (0, C.dd)(Ne.Fu),
                        O = (0, C.dd)(Ae.km),
                        P = y ? (0, o.jsx)(fe.Z, {
                            label: y
                        }) : 0 === Z.length ? (0, o.jsx)(ot.k, {
                            showLearnMore: !1
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("div", {
                                className: "overflow-x-auto",
                                children: [(0, o.jsx)(lt, {}), Z.map((function(e) {
                                    var t, s;
                                    return (0, o.jsx)(at, {
                                        isOwner: !!l && (0, nt.Wr)(null !== (k = null === (t = e.nft) || void 0 === t ? void 0 : t.owner) && void 0 !== k ? k : "", l),
                                        networkId: null !== (S = null === (s = e.collection) || void 0 === s ? void 0 : s.networkId) && void 0 !== S ? S : st.Kc,
                                        item: e,
                                        estPrice: L["".concat(e.collectionAddress, "-").concat(e.tokenId)],
                                        onMakeOffer: function() {
                                            var t = e.collection,
                                                s = e.nft,
                                                o = t && s && (0, g.sw)({
                                                    collection: t,
                                                    nft: s
                                                });
                                            o && T((function(s) {
                                                var l, a;
                                                (0, nt.Wr)(null !== (a = null === (l = e.nft) || void 0 === l ? void 0 : l.owner) && void 0 !== a ? a : "", s.meta.address) ? (0, ye.Z)({
                                                    status: "warning",
                                                    title: n("This item is yours")
                                                }) : (0, be._)(s, t.networkId, (function() {
                                                    var n = t.networkId,
                                                        l = t.contract,
                                                        a = t.verified,
                                                        i = t.iconUrl,
                                                        c = t.disableCollectionOffer,
                                                        d = [{
                                                            type: "item",
                                                            item: o
                                                        }];
                                                    c || d.push({
                                                        type: "collection",
                                                        contract: {
                                                            contract: l,
                                                            name: o.info.creator,
                                                            network_id: n,
                                                            verified: a,
                                                            icon_url: i
                                                        }
                                                    });
                                                    var u = e.amount,
                                                        x = e.erc20Address,
                                                        f = e.duration;
                                                    E.onOpen({
                                                        user: s,
                                                        options: d,
                                                        offer: (0, r.Z)({}, u && "0" !== u && {
                                                            amount: u
                                                        }, x && {
                                                            erc20Address: x.toLowerCase()
                                                        }, f && {
                                                            duration: f
                                                        }),
                                                        approveTokenModal: O,
                                                        onSuccess: function() {
                                                            return v()
                                                        }
                                                    })
                                                }), (0, be.V)(n))
                                            }))
                                        }
                                    }, e.termId)
                                }))]
                            }), (0, o.jsx)(xe.u, {
                                mt: 8,
                                limit: 15,
                                page: c,
                                total: null !== (_ = null === b || void 0 === b ? void 0 : b.total) && void 0 !== _ ? _ : 0,
                                onPageChange: function(e, t) {
                                    return x(t)
                                }
                            })]
                        });
                    return (0, o.jsxs)(o.Fragment, {
                        children: [P, E.component, O.component]
                    })
                },
                ct = n(38152),
                dt = function() {
                    var e = (0, a.$G)().t;
                    return (0, o.jsx)("div", {
                        className: "link-box flex min-w-[650px] flex-col",
                        children: (0, o.jsx)("div", {
                            className: "mt-3 flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2",
                            children: (0, o.jsxs)("div", {
                                className: "ts-caption-2 flex flex-1 items-center space-x-2 font-bold text-gray-500",
                                children: [(0, o.jsx)("div", {
                                    className: "flex-1 basis-12",
                                    children: e("Item")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: e("Loan value")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1",
                                    children: e("Repayment")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.75]",
                                    children: e("APR")
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.75]",
                                    children: (0, o.jsx)("span", {
                                        className: "float-right",
                                        children: e("Status")
                                    })
                                })]
                            })
                        })
                    })
                },
                ut = function(e) {
                    var t, n = e.item,
                        r = (0, a.$G)().t,
                        s = (0, C.ah)(),
                        l = (0, E.$)(),
                        i = (0, g.Zu)(n, l),
                        c = n.collection && !n.nft,
                        u = n.status,
                        x = (0, d.useMemo)((function() {
                            if (30 === u) {
                                var e = Math.floor(n.duration / 3600 / 24),
                                    t = (0, N.pipe)(s().diff(s(1e3 * n.createdAt - 756e5), "days"), K.DT((function(t) {
                                        return t <= e
                                    })), K.fS((function() {
                                        return e
                                    })));
                                return (0, o.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0, o.jsx)(ct.D8, {
                                        size: 5,
                                        value: 100 * t / e,
                                        color: "primary_3.500",
                                        trackColor: "primary_3.100",
                                        thickness: "18px"
                                    }), (0, o.jsxs)("span", {
                                        className: "ml-1.5",
                                        children: [t, " / ", e]
                                    })]
                                })
                            }
                            return null
                        }), [s, n.createdAt, n.duration, u]);
                    return (0, o.jsxs)("div", {
                        className: "link-box group flex min-w-[650px] flex-col",
                        children: [(0, o.jsx)("div", {
                            className: "flex flex-row items-center space-y-0 space-x-8 rounded-xl px-4 py-2 group-hover:bg-gray-200",
                            children: (0, o.jsxs)("div", {
                                className: "flex h-10 min-w-0 flex-1 items-center space-x-2",
                                children: [(0, o.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 basis-12 items-center space-x-3",
                                    children: [(0, o.jsx)(y.Z, {
                                        className: (0, b.Z)("h-10 w-10 flex-shrink-0 overflow-hidden bg-gray-300", c && "rounded-full"),
                                        hoverStyle: "opacity",
                                        href: i.url,
                                        target: "_blank",
                                        children: i.image
                                    }), (0, o.jsxs)("div", {
                                        className: "flex min-w-0 flex-1 flex-col",
                                        children: [(0, o.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0, o.jsx)(y.Z, {
                                                className: "ts-body-2 truncate font-bold",
                                                href: i.url,
                                                target: "_blank",
                                                children: n.nft ? i.title : "-"
                                            }), i.verified && (0, o.jsx)(L.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        }), i.collection && (0, o.jsxs)("div", {
                                            className: "flex items-center space-x-1 overflow-hidden",
                                            children: [(0, o.jsx)(y.Z, {
                                                className: "ts-caption-3 overflow-hidden break-all text-gray-500 line-clamp-1",
                                                href: (0, we.ec)({
                                                    tab: "items",
                                                    slug: null !== (t = i.collection.slug) && void 0 !== t ? t : (0, rt.P8)(i.collection.contract)
                                                }),
                                                target: "_blank",
                                                children: (0, pe.E0)(i.collection)
                                            }), i.collection.verified && (0, o.jsx)(L.SN$, {
                                                color: "primary_1.500"
                                            })]
                                        })]
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 overflow-hidden",
                                    children: (0, o.jsxs)("p", {
                                        className: "ts-body-2 flex items-center space-x-1 overflow-hidden font-bold",
                                        children: [(0, o.jsx)("span", {
                                            className: "truncate",
                                            children: (0, g.xH)(ae.O$.from(n.amount))
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
                                            children: (0, g.xH)(ae.O$.from(n.repayment))
                                        }), (0, o.jsx)("span", {
                                            children: "\u039e"
                                        })]
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.75]",
                                    children: (0, o.jsx)("p", {
                                        className: "ts-body-2 font-bold",
                                        children: (0, v.cW)(n.apr / 100, 2)
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "flex-1 grow-[0.75]",
                                    children: (0, o.jsx)("p", {
                                        className: "ts-body-2 float-right font-bold",
                                        children: 30 === u ? x : 40 === u ? (0, o.jsx)("span", {
                                            className: "text-primary-4",
                                            children: r("Repaid")
                                        }) : 50 === u ? (0, o.jsx)("span", {
                                            className: "text-primary-3",
                                            children: r("Defaulted")
                                        }) : 60 === u ? (0, o.jsx)("span", {
                                            className: "text-primary-3",
                                            children: r("Redeemed")
                                        }) : null
                                    })
                                })]
                            })
                        }), (0, o.jsx)("hr", {
                            className: "mx-4 w-auto"
                        })]
                    })
                },
                xt = function(e) {
                    var t = e.collection,
                        n = (0, a.$G)().t,
                        r = (0, d.useState)(1),
                        s = r[0],
                        l = r[1];
                    (0, d.useEffect)((function() {
                        return l(1)
                    }), [t]);
                    var i, c = (0, u.ZP)({
                            key: g.YJ,
                            query: {
                                collection: null === t || void 0 === t ? void 0 : t.contract,
                                pageSize: 15,
                                page: s
                            }
                        }, function() {
                            var e = (0, se.Z)((function(e) {
                                var t, r;
                                return (0, oe.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            t = e.query, s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, (0, j.cu)(t)];
                                        case 2:
                                            return [2, s.sent()];
                                        case 3:
                                            if (r = s.sent(), (0, Ze.Z)(r, Oe.ED) && r.message === Oe.N0) throw (0, Oe.gr)(n)[r.message];
                                            return console.error(r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        x = c.data,
                        f = c.error,
                        m = f ? "string" === typeof f ? f : n("Something's wrong") : null,
                        h = (0, d.useState)(),
                        p = h[0],
                        v = h[1];
                    (0, d.useEffect)((function() {
                        x && v(x)
                    }), [x]);
                    var y, w = (0, d.useMemo)((function() {
                        return null !== (i = null === p || void 0 === p ? void 0 : p.data) && void 0 !== i ? i : []
                    }), [null === p || void 0 === p ? void 0 : p.data]);
                    return m ? (0, o.jsx)(fe.Z, {
                        label: m
                    }) : 0 === w.length ? (0, o.jsx)(ot.k, {
                        showLearnMore: !1
                    }) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)("div", {
                            className: "overflow-x-auto",
                            children: [(0, o.jsx)(dt, {}), w.map((function(e) {
                                return (0, o.jsx)(ut, {
                                    item: e
                                }, e.loanId)
                            }))]
                        }), (0, o.jsx)(xe.u, {
                            mt: 8,
                            limit: 15,
                            page: s,
                            total: null !== (y = null === p || void 0 === p ? void 0 : p.total) && void 0 !== y ? y : 0,
                            onPageChange: function(e, t) {
                                return l(t)
                            }
                        })]
                    })
                },
                ft = function(e) {
                    var t, n = e.query,
                        l = (0, a.$G)().t,
                        c = (0, i.useRouter)(),
                        u = (0, k.Z)(g.qf, (function() {
                            return (0, j.YP)()
                        }), {
                            onError: function(e) {
                                return console.error(e)
                            }
                        }).data,
                        x = void 0 === u ? [] : u,
                        f = (0, d.useState)(null),
                        m = f[0],
                        h = f[1],
                        p = function(e) {
                            var t = (0, d.useMemo)((function() {
                                    return (0, o.jsx)(Ue.h, {
                                        className: "w-[343px] pl-0",
                                        forceOpen: !0,
                                        children: (0, o.jsx)(et, (0, r.Z)({}, e))
                                    })
                                }), [e]),
                                n = (0, De.qY)(),
                                l = (0, d.useMemo)((function() {
                                    return (0, o.jsx)(tt, (0, s.Z)((0, r.Z)({}, e), {
                                        disclosure: n
                                    }))
                                }), [e, n]);
                            return {
                                disclosure: n,
                                panel: t,
                                panelModal: l
                            }
                        }({
                            collections: x,
                            currentCollection: m,
                            setCurrentCollection: h
                        }),
                        v = p.panel,
                        y = p.panelModal,
                        w = p.disclosure,
                        N = (0, d.useCallback)((function(e) {
                            c.push((0, g.iO)(e), void 0, {
                                scroll: !1
                            })
                        }), [c]),
                        _ = null !== (t = n.list) && void 0 !== t ? t : "terms",
                        Z = (0, d.useMemo)((function() {
                            return [{
                                text: l("NFTs with terms"),
                                list: "terms"
                            }, {
                                text: l("Recent loans"),
                                list: "loans"
                            }].map((function(e, t) {
                                var r = e.text,
                                    s = e.list;
                                return (0, o.jsx)("button", {
                                    className: (0, b.Z)("ts-button-2 rounded-lg px-3 py-2", _ === s ? "bg-gray-300 text-gray-700" : "text-gray-600 lg:hover:opacity-50"),
                                    onClick: function() {
                                        N({
                                            category: n.category,
                                            list: s
                                        })
                                    },
                                    children: (0, o.jsx)("span", {
                                        children: r
                                    })
                                }, t)
                            }))
                        }), [l, _, N, n.category]),
                        L = (0, I.eX)().requireRegisteredUser,
                        T = (0, C.dd)(Ne.Fu),
                        E = (0, C.dd)(Ae.km);
                    return (0, o.jsxs)("div", {
                        className: "flex w-full items-start",
                        children: [v, (0, o.jsxs)("div", {
                            className: "flex-1 overflow-hidden px-0 pt-8 pb-24 lg:pl-9 lg:pr-0 lg:pt-6",
                            children: [(0, o.jsxs)("div", {
                                className: "mb-1 flex flex-wrap justify-between gap-4 ",
                                children: [(0, o.jsx)("div", {
                                    className: "flex overflow-x-auto",
                                    children: (0, o.jsx)("div", {
                                        className: "inline-block shrink-0 space-x-3 rounded-xl border-2 p-0.5 font-bold",
                                        children: Z
                                    })
                                }), m && !m.disableCollectionOffer && (0, o.jsx)(S.zx, {
                                    className: "float-right w-full sm:w-auto",
                                    variant: "outline",
                                    colorScheme: "primary-1",
                                    size: "sm",
                                    onClick: function() {
                                        return e = m, void L((function(t) {
                                            (0, be._)(t, e.networkId, (function() {
                                                var n = e.networkId,
                                                    r = e.contract,
                                                    s = e.verified,
                                                    o = e.iconUrl;
                                                T.onOpen({
                                                    user: t,
                                                    options: [{
                                                        type: "collection",
                                                        contract: {
                                                            contract: r,
                                                            name: (0, pe.E0)({
                                                                name: e.name,
                                                                name_override: e.nameOverride
                                                            }),
                                                            network_id: n,
                                                            verified: s,
                                                            icon_url: o
                                                        }
                                                    }],
                                                    approveTokenModal: E
                                                })
                                            }), (0, be.V)(l))
                                        }));
                                        var e
                                    },
                                    children: l("Collection offer")
                                })]
                            }), "terms" === _ && (0, o.jsx)(it, {
                                collection: m
                            }), "loans" === _ && (0, o.jsx)(xt, {
                                collection: m
                            })]
                        }), (0, o.jsx)($e.nn, {
                            breakPoint: "lg",
                            onClick: w.onOpen,
                            count: 0,
                            label: l("Choose collection")
                        }), T.component, E.component, y]
                    })
                },
                mt = n(18434),
                ht = function(e) {
                    var t = e.data,
                        n = e.onOffer,
                        r = (0, a.$G)().t,
                        s = t.coverUrl,
                        l = t.slug,
                        i = t.contract,
                        c = t.name,
                        d = t.nameOverride,
                        u = t.verified,
                        x = t.totalSupply,
                        f = t.floorPrice,
                        h = t.disableCollectionOffer,
                        p = s && (0, o.jsx)(mt.Z, {
                            cdnSrc: {
                                path: s,
                                width: 0,
                                height: 0,
                                format: "jpg"
                            },
                            sizes: ["100vw"]
                        }),
                        g = (0, we.ec)({
                            tab: "items",
                            slug: null !== l && void 0 !== l ? l : (0, rt.P8)(i)
                        });
                    return (0, o.jsxs)("li", {
                        className: "link-box overflow-hidden rounded-xl border",
                        children: [(0, o.jsx)("div", {
                            className: "absolute inset-0",
                            children: p
                        }), (0, o.jsx)("div", {
                            className: "aspect-w-2 aspect-h-1",
                            children: p
                        }), (0, o.jsxs)("div", {
                            className: "h-65 isolate flex flex-col bg-black/40 p-6 text-button-text backdrop-blur-2xl",
                            children: [(0, o.jsxs)(y.Z, {
                                className: "link-overlay flex items-center",
                                hoverStyle: "none",
                                href: g,
                                children: [(0, o.jsx)("p", {
                                    className: "ts-body-3 lg:ts-body-2 truncate font-bold",
                                    children: (0, pe.E0)({
                                        name: c,
                                        name_override: d
                                    })
                                }), u && (0, o.jsx)(m.SN$, {
                                    className: "ml-2 h-4 w-4 text-primary-1 lg:h-6 lg:w-6"
                                })]
                            }), (0, o.jsxs)("p", {
                                className: "ts-caption-2 lg:ts-caption pointer-events-none mt-0.5 opacity-[64%]",
                                children: [x ? r("{{count}} items", {
                                    count: x
                                }) : "-", " \xb7", " ", f ? r("{{price}} floor", {
                                    price: "".concat((0, v.tX)(f), "\u039e")
                                }) : "-"]
                            }), (0, o.jsx)(S.zx, {
                                className: (0, b.Z)("mt-4", h && "invisible"),
                                colorScheme: "primary-1",
                                onClick: n,
                                children: r("Offer to the collection")
                            }), (0, o.jsx)(S.ZP, {
                                className: "mt-4 border-button-text/[64%] text-button-text hover:border-button-text hover:bg-transparent",
                                variant: "outline",
                                href: g,
                                children: r("Browse & offer to single item")
                            })]
                        })]
                    })
                },
                pt = function() {
                    var e = (0, a.$G)().t,
                        t = (0, k.Z)("/xy3/v1/collections/support", (function() {
                            return (0, j.YP)()
                        }), {
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        n = t.data,
                        l = t.error,
                        i = (0, C.dd)(Ne.Fu),
                        c = (0, C.dd)(Ae.km),
                        d = (0, I.eX)().requireRegisteredUser;
                    return (0, o.jsxs)("div", {
                        className: "space-y-8 py-8",
                        children: [(0, o.jsx)(re, {
                            type: "lend"
                        }), (0, o.jsxs)("section", {
                            children: [(0, o.jsx)("h2", {
                                className: "ts-headline-6 lg:ts-headline-5",
                                children: e("Supported Collections")
                            }), (0, o.jsx)("p", {
                                className: "ts-body-3 lg:ts-body-2 mt-2 text-gray-500 [&_a]:font-bold [&_a]:text-primary-1",
                                children: (0, o.jsxs)(a.cC, {
                                    t: e,
                                    children: ["Only whitelisted collections are open for loans at the moment, and more collections will be added soon.", (0, o.jsx)("br", {}), "You can submit your collections to the whitelist via", " ", (0, o.jsx)(y.Z, {
                                        href: "https://form.nativeforms.com/x2y2-loan-whitelist-apply",
                                        isExternal: !0,
                                        children: "here"
                                    }), "."]
                                })
                            }), (0, o.jsx)("div", {
                                className: "mt-4 lg:mt-6",
                                children: n ? (0, o.jsx)("ol", {
                                    className: "grid grid-cols-1 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3",
                                    children: n.map((function(t) {
                                        return (0, o.jsx)(ht, {
                                            data: t,
                                            onOffer: function() {
                                                return d((function(n) {
                                                    return (0, be._)(n, t.networkId, (function() {
                                                        return i.onOpen({
                                                            user: n,
                                                            options: [{
                                                                type: "collection",
                                                                contract: (0, s.Z)((0, r.Z)({}, t), {
                                                                    network_id: t.networkId,
                                                                    name: (0, pe.E0)({
                                                                        name: t.name,
                                                                        name_override: t.nameOverride
                                                                    }),
                                                                    icon_url: t.iconUrl
                                                                })
                                                            }],
                                                            approveTokenModal: c
                                                        })
                                                    }), (0, be.V)(e))
                                                }))
                                            }
                                        }, t.id)
                                    }))
                                }) : l ? (0, o.jsx)(fe.Z, {
                                    label: e("Something's wrong")
                                }) : null
                            })]
                        }), i.component, c.component]
                    })
                },
                vt = n(82056),
                gt = n(47753),
                jt = n(29127),
                yt = function(e) {
                    var t = (0, a.$G)().t;
                    return (0, o.jsx)("div", {
                        className: "space-y-8 pt-8",
                        children: (0, o.jsx)(I.$J, {
                            connectWalletBtnText: t("Connect wallet to proceed"),
                            connectWalletBtnProps: {
                                variant: "solid",
                                colorScheme: "primary_1"
                            },
                            children: function(t) {
                                return (0, o.jsx)(bt, (0, r.Z)({
                                    user: t
                                }, e))
                            }
                        })
                    })
                },
                wt = function(e, t) {
                    var n = t.type,
                        o = t.payload;
                    switch (n) {
                        case "SET_PAGE":
                            return (0, s.Z)((0, r.Z)({}, e), {
                                page: o
                            });
                        case "SET_DATA_TYPE":
                            return (0, s.Z)((0, r.Z)({}, e), {
                                page: 1,
                                dataType: o
                            });
                        case "RESET":
                            return (0, r.Z)({}, e, o)
                    }
                },
                bt = function(e) {
                    var t, n = e.user,
                        r = e.query,
                        s = null !== (t = r.offer) && void 0 !== t ? t : "collection",
                        l = st.Kc,
                        c = (0, a.$G)().t,
                        x = (0, i.useRouter)(),
                        f = (0, C.dd)(Ne.vQ),
                        m = (0, d.useReducer)(wt, {
                            loanType: "offers",
                            dataType: s,
                            page: 1,
                            pageSize: 10
                        }),
                        h = m[0],
                        p = m[1],
                        v = (0, u.ZP)({
                            key: "getUserOfferList",
                            fetchQuery: h
                        }, function() {
                            var e = (0, se.Z)((function(e) {
                                var t, r;
                                return (0, oe.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            t = e.fetchQuery, s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, (0, j.Sx)(n.meta.address, t)];
                                        case 2:
                                            return [2, s.sent()];
                                        case 3:
                                            if (r = s.sent(), (0, Ze.Z)(r, Oe.ED) && r.message === Oe.N0) throw (0, Oe.gr)(c)[r.message];
                                            return console.error(r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        y = v.data,
                        w = v.error,
                        N = v.mutate,
                        k = !w && !y,
                        _ = w ? "string" === typeof w ? w : c("Something's wrong") : null,
                        Z = (0, d.useCallback)((function(e) {
                            x.push((0, g.iO)(e), void 0, {
                                scroll: !1
                            })
                        }), [x]);
                    (0, vt.m)((function(e, t) {
                        return t.pipe(gt.T(1), jt.U((function(e) {
                            var t = (0, Le.Z)(e, 1)[0];
                            return p({
                                type: "RESET",
                                payload: {
                                    dataType: t.offer
                                }
                            }), null
                        })))
                    }), null, [r]);
                    var L = (0, d.useMemo)((function() {
                        return [{
                            text: c("Offers to Item"),
                            offer: "offer"
                        }, {
                            text: c("Offers to Collection"),
                            offer: "collection"
                        }].map((function(e, t) {
                            var n = e.text,
                                l = e.offer;
                            return (0, o.jsx)("button", {
                                className: (0, b.Z)("ts-button-2 rounded-lg px-3 py-2", s === l ? "bg-gray-300 text-gray-700" : "text-gray-600 lg:hover:opacity-50"),
                                onClick: function() {
                                    Z({
                                        category: r.category,
                                        offer: l
                                    })
                                },
                                children: (0, o.jsx)("span", {
                                    children: n
                                })
                            }, t)
                        }))
                    }), [r.category, Z, s, c]);
                    return (0, o.jsxs)("div", {
                        children: [(0, o.jsxs)("div", {
                            className: "mb-1 flex flex-col justify-between space-y-5 sm:flex-row sm:items-center sm:space-y-0",
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)("div", {
                                    className: "inline-block space-x-3 rounded-xl border-2 p-0.5 font-bold",
                                    children: L
                                })
                            }), (0, o.jsx)(S.zx, {
                                className: "float-right",
                                variant: "outline",
                                colorScheme: "primary-1",
                                size: "sm",
                                onClick: function() {
                                    return (0, be._)(n, l, (function() {
                                        return f.onOpen({
                                            user: n,
                                            networkId: l,
                                            onSuccess: N
                                        })
                                    }), (0, be.V)(c))
                                },
                                children: c("Cancel All")
                            })]
                        }), (0, o.jsx)(Pe.F, {
                            refetch: N,
                            pageType: "userProfile",
                            isFetching: k,
                            fetchQuery: h,
                            fetchResp: y,
                            fetchError: _,
                            dispatchFetchQueryAction: p,
                            showLearnMore: !1
                        }), f.component]
                    })
                },
                Nt = n(98914),
                kt = function(e) {
                    var t = (0, a.$G)().t;
                    return (0, o.jsx)("div", {
                        className: "space-y-8 pt-8",
                        children: (0, o.jsx)(I.$J, {
                            connectWalletBtnText: t("Connect wallet to proceed"),
                            connectWalletBtnProps: {
                                variant: "solid",
                                colorScheme: "primary_1"
                            },
                            children: function(t) {
                                return (0, o.jsx)(_t, (0, r.Z)({
                                    user: t
                                }, e))
                            }
                        })
                    })
                },
                St = function(e, t) {
                    var n = t.type,
                        o = t.payload;
                    switch (n) {
                        case "SET_LOAN_TYPE":
                            return (0, s.Z)((0, r.Z)({}, e), {
                                page: 1,
                                loanType: o
                            });
                        case "SET_DATA_TYPE":
                            return (0, s.Z)((0, r.Z)({}, e), {
                                page: 1,
                                dataType: o
                            });
                        case "SET_PAGE":
                            return (0, s.Z)((0, r.Z)({}, e), {
                                page: o
                            });
                        case "RESET":
                            return (0, r.Z)({}, e, o)
                    }
                },
                _t = function(e) {
                    var t, n, r = e.user,
                        s = e.query,
                        l = null !== (t = s.loan) && void 0 !== t ? t : "borrow",
                        c = null !== (n = s.status) && void 0 !== n ? n : "current",
                        x = (0, a.$G)().t,
                        f = (0, C._B)(),
                        m = (0, i.useRouter)(),
                        h = (0, d.useReducer)(St, {
                            loanType: l,
                            dataType: c,
                            page: 1,
                            pageSize: 10
                        }),
                        p = h[0],
                        v = h[1],
                        y = (0, u.ZP)({
                            key: "getUserOrderList",
                            fetchQuery: p
                        }, function() {
                            var e = (0, se.Z)((function(e) {
                                var t, n;
                                return (0, oe.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            t = e.fetchQuery, s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, (0, j.Ej)(r.meta.address, t)];
                                        case 2:
                                            return [2, s.sent()];
                                        case 3:
                                            if (n = s.sent(), (0, Ze.Z)(n, Oe.ED) && n.message === Oe.N0) throw (0, Oe.gr)(x)[n.message];
                                            return console.error(n), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        w = y.data,
                        N = y.error,
                        k = y.mutate,
                        S = !N && !w,
                        _ = N ? "string" === typeof N ? N : x("Something's wrong") : null,
                        Z = (0, d.useCallback)((function(e) {
                            m.push((0, g.iO)(e), void 0, {
                                scroll: !1
                            })
                        }), [m]);
                    (0, vt.m)((function(e, t) {
                        return t.pipe(gt.T(1), jt.U((function(e) {
                            var t = (0, Le.Z)(e, 1)[0];
                            return v({
                                type: "RESET",
                                payload: {
                                    loanType: t.loan,
                                    dataType: t.status
                                }
                            }), null
                        })))
                    }), null, [s]);
                    var T = (0, d.useMemo)((function() {
                            return [{
                                text: x("Borrow"),
                                loan: "borrow",
                                icon: (0, o.jsx)(L.FIU, {})
                            }, {
                                text: x("Lend"),
                                loan: "lend",
                                icon: (0, o.jsx)(L.xvp, {})
                            }].map((function(e, t) {
                                var n = e.text,
                                    r = e.loan,
                                    a = e.icon,
                                    i = l === r;
                                return (0, o.jsx)(Be.zx, {
                                    w: "109px",
                                    onClick: function() {
                                        Z({
                                            category: s.category,
                                            loan: r,
                                            status: c
                                        })
                                    },
                                    variant: "outline",
                                    size: "sm",
                                    px: 4,
                                    py: 3,
                                    leftIcon: a,
                                    textStyle: "button_2",
                                    color: i ? f.gray100 : void 0,
                                    bg: i ? f.gray700 : void 0,
                                    borderColor: i ? f.gray700 : void 0,
                                    children: n
                                }, t)
                            }))
                        }), [l, s.category, Z, c, x, f.gray100, f.gray700]),
                        E = (0, d.useMemo)((function() {
                            return [{
                                text: x("Current Loans"),
                                status: "current"
                            }, {
                                text: x("Previous Loans"),
                                status: "history"
                            }].map((function(e, t) {
                                var n = e.text,
                                    r = e.status;
                                return (0, o.jsx)("button", {
                                    className: (0, b.Z)("ts-button-2 rounded-lg px-3 py-2", c === r ? "bg-gray-300 text-gray-700" : "text-gray-600 lg:hover:opacity-50"),
                                    onClick: function() {
                                        Z({
                                            category: s.category,
                                            loan: l,
                                            status: r
                                        })
                                    },
                                    children: (0, o.jsx)("span", {
                                        children: n
                                    })
                                }, t)
                            }))
                        }), [l, s.category, Z, c, x]);
                    return (0, o.jsxs)("div", {
                        children: [(0, o.jsxs)("div", {
                            className: "mb-1 flex flex-col justify-between space-y-5 md:flex-row md:items-center md:space-y-0",
                            children: [(0, o.jsx)("div", {
                                className: "space-x-4",
                                children: T
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)("div", {
                                    className: "inline-block space-x-3 rounded-xl border-2 p-0.5 font-bold",
                                    children: E
                                })
                            })]
                        }), (0, o.jsx)(Nt.f, {
                            refetch: k,
                            loanType: p.loanType,
                            dataType: p.dataType,
                            isFetching: S,
                            fetchQuery: p,
                            fetchResp: w,
                            fetchError: _,
                            dispatchFetchQueryAction: v,
                            showLearnMore: !1
                        })]
                    })
                },
                Ct = n(99490),
                Zt = n(43788),
                Lt = n(76875),
                Tt = n(39622),
                Et = n(59206),
                It = !0,
                Ot = function(e) {
                    var t = e.query,
                        n = (0, a.$G)().t,
                        i = n("NFT Loan"),
                        x = n("A new way to unlock value from your NFTs. You can use your blue-chip NFTs as collateral to borrow more ETH, or lend your ETH to others and earn yields easily."),
                        f = (0, I.aC)().user,
                        m = (0, u.ZP)("registered" === f._tag && {
                            key: Et.R,
                            token: f.token
                        }, (function(e) {
                            var t = e.token;
                            return (0, Et._)(t)
                        }), {
                            revalidateOnMount: !0,
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        h = m.data,
                        p = (0, d.useMemo)((function() {
                            var e, t, n;
                            return !1 === (null === h || void 0 === h || null === (e = h.data) || void 0 === e ? void 0 : e.telegram) && !1 === (null === h || void 0 === h || null === (t = h.data) || void 0 === t ? void 0 : t.blockscan) && !1 === (null === h || void 0 === h || null === (n = h.data) || void 0 === n ? void 0 : n.email)
                        }), [null === h || void 0 === h ? void 0 : h.data]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(Lt.p, {
                            title: i,
                            description: x
                        }), (0, o.jsxs)(Zt._z, {
                            maxW: "none",
                            px: 0,
                            hideFooter: "lend" === t.category,
                            children: [(0, o.jsx)(Ct.d, {
                                isShow: p
                            }), (0, o.jsx)(w, {}), (0, o.jsxs)(l.W2, {
                                d: "flex",
                                flexDir: "column",
                                flex: 1,
                                pb: "lend" === t.category ? void 0 : [12, 16],
                                maxW: "container-2xl",
                                px: [6, 8, 12, 24, 36],
                                children: [(0, o.jsx)("div", {
                                    className: "flex flex-col space-y-4 md:flex-row md:items-end md:space-y-0 md:space-x-6",
                                    children: (0, o.jsx)("div", {
                                        className: "flex-1 overflow-x-auto",
                                        children: (0, o.jsx)(Tt.Z, {
                                            options: [{
                                                key: "borrow",
                                                title: n("Borrow")
                                            }, {
                                                key: "lend",
                                                title: n("Lend")
                                            }, {
                                                key: "supported",
                                                title: n("Collections")
                                            }, {
                                                key: "offers",
                                                title: n("My Offers")
                                            }, {
                                                key: "loans",
                                                title: n("My Loans")
                                            }],
                                            selected: t.category,
                                            onSelect: function(e) {
                                                c().push((0, we.qM)((0, s.Z)((0, r.Z)({}, t), {
                                                    category: e
                                                })), void 0, {
                                                    scroll: !1
                                                })
                                            }
                                        })
                                    })
                                }), "borrow" === t.category && (0, o.jsx)(Ge, {}), "lend" === t.category && (0, o.jsx)(ft, {
                                    query: t
                                }), "supported" === t.category && (0, o.jsx)(pt, {}), "offers" === t.category && (0, o.jsx)(yt, {
                                    query: t
                                }), "loans" === t.category && (0, o.jsx)(kt, {
                                    query: t
                                })]
                            })]
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [8915, 3788, 5884, 1425, 2447, 9774, 2888, 179], (function() {
            return t = 91568, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
//# sourceMappingURL=loan-bb32cd480ab7d77e.js.map