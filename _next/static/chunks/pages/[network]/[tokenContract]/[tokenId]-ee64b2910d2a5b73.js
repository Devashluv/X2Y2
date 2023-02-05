(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3481], {
        61145: function(e, r, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[network]/[tokenContract]/[tokenId]", function() {
                return n(96842)
            }])
        },
        65033: function(e, r, n) {
            "use strict";
            n.d(r, {
                g: function() {
                    return o
                }
            });
            var t = n(85893),
                a = n(86010),
                s = n(23641),
                o = function(e) {
                    var r = e.className,
                        n = (0, s.$G)().t;
                    return (0, t.jsx)("span", {
                        className: (0, a.Z)(r, "ts-hairline-3 rounded-xl bg-secondary-1 px-2 py-1.5 font-bold text-button-text"),
                        children: n("NEW")
                    })
                }
        },
        96842: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                __N_SSP: function() {
                    return $r
                },
                default: function() {
                    return Br
                }
            });
            var t = n(26042),
                a = n(85893),
                s = n(9279),
                o = n(3735),
                i = n(23641),
                c = n(11163),
                l = n(67294),
                d = n(69396),
                u = n(97375),
                m = n(34651),
                f = n(47398),
                x = n(33729),
                p = n(86010),
                h = n(57218),
                g = n(46243),
                v = n(36429),
                j = n(47190),
                y = n(47568),
                k = n(20414),
                w = n(8100),
                b = n(91425),
                N = n(92212),
                C = n(73923),
                I = n(79948),
                _ = n(64286),
                S = n(31182),
                P = n(54765),
                Z = n(78752),
                O = n(24717),
                L = n(83560),
                M = n(51126),
                G = n(88886),
                A = n(15222),
                F = n(50826),
                T = n(55967),
                R = n(87974),
                z = n(98316),
                U = n(36349),
                W = n(89997),
                E = n(64412),
                D = n(79737),
                $ = n(5812),
                B = n(36088),
                Y = n(71325),
                X = n(10322),
                q = n(35539),
                V = n(41677),
                H = n(34071),
                Q = n(20888),
                K = n(71386),
                J = n(61744),
                ee = n(68663),
                re = n(33128),
                ne = n(97338),
                te = n(1885),
                ae = n(47674),
                se = n(34895),
                oe = n(41278),
                ie = n(43238),
                ce = n(33482),
                le = n(68527),
                de = n(79762),
                ue = n(49296),
                me = n(91857),
                fe = n(86365),
                xe = n(74594),
                pe = n(63623),
                he = n(79530),
                ge = function(e) {
                    var r = e.disclosure,
                        n = e.bundle,
                        t = (0, i.$G)().t,
                        s = (0, ie.pm)(),
                        o = t("Traverse token"),
                        c = (0, N.eX)().requireWeb3RegisteredUser,
                        d = (0, v.r$)(),
                        u = d.isLoading,
                        m = d.setLoading,
                        f = d.reloadPage,
                        x = d.guardLoading,
                        p = n[0].tokenPair,
                        h = p.token,
                        g = p.tokenId,
                        j = n[0].info.networkId,
                        w = xe.Fo.concat(xe.z_).filter((function(e) {
                            return e.networkId === j && e.contract.toLowerCase() === h.toLowerCase()
                        })).length > 0,
                        b = I.Rf.map((function(e) {
                            return e.networkId
                        })).filter((function(e) {
                            return e !== j || w
                        })),
                        C = (0, l.useState)(b[0]),
                        _ = C[0],
                        S = C[1],
                        P = function() {
                            var e = (0, y.Z)((function(e) {
                                var n, o, i, c;
                                return (0, k.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (!(o = null === (n = I.Rf.find((function(e) {
                                                    return e.networkId === _
                                                }))) || void 0 === n ? void 0 : n.chainId)) return [2];
                                            m(!0), l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 4, , 5]), [4, (0, I.sh)(j, e.web3Provider.getSigner(), o, h, g)];
                                        case 2:
                                            return l.sent(), [4, f()];
                                        case 3:
                                            return l.sent(), m(!1), r.onClose(), s({
                                                status: "success",
                                                title: t("You\u2019ve successfully traversed the NFT.")
                                            }), [3, 5];
                                        case 4:
                                            return i = l.sent(), m(!1), console.error(i), c = (0, I.e$)(t, i), s({
                                                status: "error",
                                                title: (0, a.jsx)(re.Z, {
                                                    user: e.web3Provider.getSigner(),
                                                    networkId: j,
                                                    tokenContract: h,
                                                    tokenId: g,
                                                    error: c
                                                })
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.jsxs)(ce.u_, {
                        isOpen: r.isOpen,
                        onClose: x(r.onClose),
                        preserveScrollBarGap: !0,
                        children: [(0, a.jsx)(ce.ZA, {}), (0, a.jsxs)(ce.hz, {
                            overflow: "hidden",
                            children: [(0, a.jsx)(ce.xB, {
                                children: o
                            }), (0, a.jsx)(me.o, {}), (0, a.jsxs)(ce.fe, {
                                as: le.Kq,
                                spacing: [6, 8],
                                children: [n.map((function(e, r) {
                                    return (0, a.jsx)(he.g9, {
                                        item: e,
                                        price: null,
                                        currency: null
                                    }, r)
                                })), (0, a.jsxs)(de.NI, {
                                    id: "address",
                                    children: [(0, a.jsx)(ue.lX, {
                                        children: t("Destination chain")
                                    }), (0, a.jsx)(fe.Z, {
                                        items: b.map((function(e) {
                                            return {
                                                key: e.toString(),
                                                value: e,
                                                title: (0, pe.US)(e).long,
                                                icon: (0, pe.HY)(e)
                                            }
                                        })),
                                        value: _,
                                        onChange: S,
                                        buttonProps: {
                                            h: 12,
                                            textStyle: "input_1"
                                        }
                                    }), (0, a.jsx)(ue.Q6, {
                                        className: "[&_span]:text-gray-800",
                                        children: (0, a.jsxs)(i.cC, {
                                            t: t,
                                            children: ["Your item will show up in your wallet on", " ", (0, a.jsx)("span", {
                                                children: {
                                                    network: (0, pe.US)(_).long
                                                }
                                            }), ". Unused gas will be refunded to your wallet."]
                                        })
                                    })]
                                }), (0, a.jsx)(ee.zx, {
                                    colorScheme: "primary-1",
                                    isLoading: u,
                                    onClick: function() {
                                        return c(P)
                                    },
                                    children: t("Traverse")
                                })]
                            })]
                        })]
                    })
                },
                ve = n(16531),
                je = n(5936),
                ye = n(30902),
                ke = n(828),
                we = n(52289),
                be = n(45114),
                Ne = n(54767),
                Ce = n(89880),
                Ie = n(28987),
                _e = function(e) {
                    switch (e) {
                        case "FR":
                            return "french";
                        case "JA":
                            return "japanese";
                        case "ZH-HANS":
                            return "chinese";
                        case "ZH-HANT":
                            return "chineseT";
                        case "KO":
                            return "korean";
                        default:
                            return "EN"
                    }
                },
                Se = (0, l.forwardRef)((function(e, r) {
                    var n, t = e.networkId,
                        s = e.tokenContract,
                        o = e.tokenId,
                        c = e.showModal,
                        d = e.setShowModal,
                        u = (0, i.$G)().i18n,
                        m = (0, N.aF)(),
                        f = "registered" == m._tag ? m.meta.address : void 0,
                        x = function(e) {
                            var r, n = (0, l.useMemo)((function() {
                                    return e && "registered" === e._tag ? R.G((0, ye.pipe)(ne.PY({}, e.token), Ne.UI((function(e) {
                                        return e.email
                                    })))) : R.YP
                                }), [e]),
                                t = (0, ke.Z)((0, Ce.Z)(n), 1)[0];
                            return null !== (r = z.FS(t)) && void 0 !== r ? r : void 0
                        }(m);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [F.fu && (0, a.jsx)("div", {
                            className: "hidden",
                            ref: r,
                            children: (0, a.jsx)(we.O, {
                                clientId: null !== (n = "5d5e4551-d492-46ea-82d2-5caa83e99334") ? n : "",
                                environment: t == Ie.Sj ? "production" : "staging",
                                mintConfig: {
                                    type: "x2y2-secondary-eth",
                                    contractAddress: s,
                                    tokenId: o
                                }
                            })
                        }), (0, a.jsx)(be.Z, {
                            showModal: "Winter" == c,
                            walletAddress: f,
                            email: x,
                            contractAddress: s,
                            tokenId: o,
                            production: t == Ie.Sj,
                            orderSource: "x2y2.io",
                            fillSource: "x2y2.io",
                            language: _e(u.language.toUpperCase()),
                            onClose: function() {
                                return d("")
                            }
                        })]
                    })
                })),
                Pe = [{
                    icon: O.WIA,
                    label: "Crossmint",
                    fee: "~5%"
                }, {
                    icon: O.uje,
                    label: "Winter",
                    fee: "5%"
                }],
                Ze = function(e) {
                    var r = e.disclosure,
                        n = e.bundle,
                        s = e.price,
                        o = e.currency,
                        c = (0, i.$G)().t,
                        u = (0, l.useRef)(null),
                        m = n[0].tokenPair,
                        f = m.token,
                        x = m.tokenId,
                        h = n[0].info.networkId,
                        g = (0, se.L)(h, o).decimals,
                        j = (0, v.r$)().guardLoading,
                        y = (0, l.useState)("Crossmint"),
                        k = y[0],
                        w = y[1],
                        b = (0, l.useState)(""),
                        N = b[0],
                        C = b[1];
                    return (0, l.useEffect)((function() {
                        r.isOpen
                    }), [f, x, r.isOpen]), (0, l.useEffect)((function() {
                        var e, r;
                        "Crossmint" == N && F.fu && (null === (r = null === (e = u.current) || void 0 === e ? void 0 : e.firstChild) || void 0 === r || r.click(), C(""))
                    }), [N]), (0, a.jsxs)(ce.u_, {
                        isOpen: r.isOpen,
                        onClose: j(r.onClose),
                        preserveScrollBarGap: !0,
                        returnFocusOnClose: !1,
                        children: [(0, a.jsx)(ce.ZA, {}), (0, a.jsxs)(ce.hz, {
                            children: [(0, a.jsx)(ce.xB, {
                                children: c("Buy with credit card")
                            }), (0, a.jsx)(me.o, {}), (0, a.jsxs)(ce.fe, {
                                className: "flex flex-col",
                                children: [(0, a.jsx)(he.M6, {
                                    bundle: (0, ye.pipe)(n, te.UI((function(e) {
                                        return (0, d.Z)((0, t.Z)({}, e), {
                                            price: J.formatUnits(s, g),
                                            currency: o
                                        })
                                    })))
                                }), (0, a.jsxs)("div", {
                                    className: "mt-8 flex flex-col space-y-3",
                                    children: [(0, a.jsx)(ue.A0, {
                                        className: "mr-auto",
                                        children: c("Pay via")
                                    }), Pe.map((function(e, r) {
                                        var n = e.label,
                                            t = e.icon,
                                            s = e.fee;
                                        return (0, a.jsxs)("div", {
                                            onClick: function() {
                                                return w(n)
                                            },
                                            className: (0, p.Z)("flex h-14 cursor-pointer items-center gap-4 self-stretch rounded-lg border-2 border-gray-300 py-4 px-6 text-gray-700 hover:border-2 hover:border-gray-700 hover:bg-gray-700 hover:text-gray-100", k == n && "border-2 border-gray-700 bg-gray-700 text-gray-100"),
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex h-6 grow items-center",
                                                children: [(0, a.jsx)(t, {
                                                    className: "h-6 w-6"
                                                }), (0, a.jsx)("p", {
                                                    className: "ts-button-2 lg:ts-button-1 ml-3 h-4",
                                                    children: n
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "flex items-center justify-end gap-1 text-right",
                                                children: [(0, a.jsx)("p", {
                                                    className: "ts-body-3 lg:ts-body-2 font-bold",
                                                    children: s
                                                }), (0, a.jsx)("p", {
                                                    className: "ts-caption-3 lg:ts-caption-2",
                                                    children: c("Fee")
                                                })]
                                            })]
                                        }, r)
                                    }))]
                                }), (0, a.jsx)("hr", {
                                    className: "my-6 border-gray-300 lg:my-8"
                                }), (0, a.jsxs)(ee.zx, {
                                    className: "h-12 gap-3 py-4 px-6",
                                    colorScheme: "primary-1",
                                    onClick: function() {
                                        return C(k)
                                    },
                                    children: [(0, a.jsx)(O.mJ4, {
                                        className: "h-4 w-4"
                                    }), c("Buy")]
                                }), (0, a.jsx)(Se, {
                                    ref: u,
                                    networkId: h,
                                    tokenContract: f,
                                    tokenId: x,
                                    showModal: N,
                                    setShowModal: C
                                })]
                            })]
                        })]
                    })
                },
                Oe = function(e) {
                    var r = e.price,
                        n = e.token,
                        s = e.currency,
                        c = e.bundle,
                        u = e.meta,
                        m = e.verified,
                        x = (0, i.$G)().t,
                        p = (0, je.ZP)().getUSDNumber,
                        h = (0, l.useState)(""),
                        g = h[0],
                        j = h[1],
                        y = (0, l.useRef)(null),
                        k = c[0].tokenPair,
                        w = k.token,
                        b = k.tokenId,
                        N = c[0].info.networkId,
                        C = r ? p(parseFloat(J.formatUnits(r, n.decimals)), n.symbol) : 0,
                        _ = 4e3,
                        S = 5e3,
                        P = (0, I.Do)(w),
                        Z = C > 0 && C < _,
                        L = C > 0 && C < S && m && F.fu && !P,
                        M = Z || L,
                        G = Z && L,
                        A = (0, v.dd)(Ze),
                        T = Z ? "Winter" : "Crossmint";
                    return M ? (0, a.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, a.jsx)(O.mdQ, {
                            className: "mr-2 h-4 w-4 text-primary-1"
                        }), (0, a.jsx)(ee.zx, {
                            variant: "text",
                            colorScheme: "primary-1",
                            onClick: function() {
                                var e, n;
                                G ? A.onOpen({
                                    bundle: (0, o.zG)(c, te.UI((function(e) {
                                        return (0, d.Z)((0, t.Z)({}, e), {
                                            meta: null !== u && void 0 !== u ? u : {}
                                        })
                                    }))),
                                    price: r,
                                    currency: s
                                }) : Z ? j(T) : null === (n = null === (e = y.current) || void 0 === e ? void 0 : e.firstChild) || void 0 === n || n.click()
                            },
                            children: x("Buy with credit card")
                        }), !G && (0, a.jsx)(f.u, {
                            label: x("Provided by {{service}}", {
                                service: T
                            }),
                            placement: "top",
                            hasArrow: !0,
                            children: (0, a.jsx)(O.OHs, {
                                className: "ml-2 h-4 w-4 text-gray-500"
                            })
                        }), A.component, !G && (0, a.jsx)(Se, {
                            ref: y,
                            networkId: N,
                            tokenContract: w,
                            tokenId: b,
                            showModal: g,
                            setShowModal: j
                        })]
                    }) : null
                },
                Le = function(e) {
                    var r = e.children;
                    return (0, a.jsx)("section", {
                        className: "-mx-6 space-y-3 border bg-gray-100 p-6 md:mx-0 md:rounded-xl lg:space-y-4",
                        children: r
                    })
                },
                Me = function(e) {
                    var r = e.className,
                        n = e.children;
                    return (0, a.jsx)("p", {
                        className: (0, p.Z)(r, "ts-caption-2 lg:ts-caption text-gray-500 [&_strong]:text-gray-900 [&_a]:text-primary-1"),
                        children: n
                    })
                },
                Ge = n(44560),
                Ae = function(e) {
                    var r = e.item,
                        n = (0, i.$G)().t,
                        t = (0, Ge.jD)(),
                        s = t.itemInCart(r.id),
                        o = s ? O.URG : O.bcl;
                    return (0, a.jsx)(ee.zx, {
                        className: (0, p.Z)(!s && "GA-add-to-cart"),
                        variant: "outline",
                        colorScheme: s ? "primary-3" : "primary-1",
                        leftIcon: (0, a.jsx)(o, {
                            className: "h-4 w-4"
                        }),
                        onClick: function() {
                            return s ? t.removeItem(r.id) : t.addItem(r)
                        },
                        children: n(s ? "Remove" : "Add to cart")
                    })
                },
                Fe = n(40721),
                Te = function(e) {
                    var r = e.price,
                        n = e.token,
                        t = e.desc,
                        s = e.extra,
                        o = (0, i.$G)().t,
                        c = (0, je.ZP)().fmtCoinNumber,
                        l = r ? (0, T.tX)(parseFloat(J.formatUnits(r, n.decimals))) : null;
                    return (0, a.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0, a.jsx)("p", {
                            className: "ts-hairline-3 lg:ts-hairline-2 text-gray-500",
                            children: t
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center",
                            children: [r && (0, a.jsx)(Fe.T, {
                                className: "mr-1 h-5 w-5",
                                symbol: n.symbol
                            }), (0, a.jsx)("p", {
                                className: "ts-headline-6 lg:ts-headline-5 truncate",
                                children: null !== l && void 0 !== l ? l : o("N/A")
                            }), (0, a.jsxs)("p", {
                                className: "ts-caption-2 lg:ts-caption ml-3 truncate text-gray-500",
                                children: ["(", l ? c(parseFloat(l), n.symbol) : o("not listed"), ")"]
                            })]
                        }), s]
                    })
                },
                Re = function(e) {
                    var r = e.label,
                        n = e.value;
                    return (0, a.jsxs)("li", {
                        className: "ts-caption-2 flex rounded-full bg-gray-200 px-2 py-0.5",
                        children: [(0, a.jsx)("p", {
                            className: "text-gray-500",
                            children: r
                        }), (0, a.jsx)("p", {
                            className: "ml-1 text-gray-700",
                            children: n
                        })]
                    })
                },
                ze = function(e) {
                    var r = e.networkId,
                        n = e.lastPrice,
                        t = e.floorPrice,
                        s = e.osFloorPrice,
                        o = e.feeRate,
                        c = (0, i.$G)().t,
                        l = t ? (0, he.ZH)(t, s) : null;
                    return (0, a.jsxs)("ul", {
                        className: "flex flex-wrap gap-2",
                        children: [(0, a.jsx)(Re, {
                            label: c("Last Sale"),
                            value: n ? "".concat(J.formatUnits(n.value, (0, se.L)(r, n.currency).decimals), " \u039e") : c("N/A")
                        }), (0, a.jsx)(Re, {
                            label: c("Floor"),
                            value: l ? "".concat((0, T.tX)(l.value), " \u039e") : c("N/A")
                        }), (0, a.jsx)(Re, {
                            label: c("Royalty"),
                            value: o > 0 ? "".concat((0, T.tX)(o), "%") : c("Not Set")
                        })]
                    })
                },
                Ue = function(e) {
                    var r = e.data,
                        n = e.bundle,
                        s = e.contract,
                        c = e.meta,
                        u = e.isOwner,
                        m = e.owner,
                        x = e.ownerOnChain,
                        p = e.lastPrice,
                        h = e.floorPrice,
                        g = e.osFloorPrice,
                        j = e.feeRate,
                        w = e.contractMeta,
                        b = e.approveNftModal,
                        C = e.onChangePrice,
                        S = e.onSend,
                        Z = e.setNeedPreloadOffers,
                        M = e.showTermsGuide,
                        G = e.onSetTerms,
                        A = e.onScrollIntoLoans,
                        T = (0, i.$G)().t,
                        R = (0, v.ah)(),
                        z = (0, N.eX)(),
                        U = z.requireRegisteredUser,
                        W = z.requireWeb3RegisteredUser,
                        E = n[0].tokenPair,
                        D = E.token,
                        $ = E.tokenId,
                        B = E.kind,
                        Y = n[0].info,
                        X = Y.networkId,
                        q = Y.creator,
                        V = Y.verified,
                        H = (0, v.r$)(),
                        Q = H.isLoading,
                        ie = H.setLoading,
                        ce = H.reloadPage,
                        le = (0, v.dd)(ve.aX),
                        de = (0, v.dd)(ve.mu),
                        ue = (0, v.dd)(ve.fG),
                        me = (0, v.dd)(ve.zY),
                        fe = (0, v.dd)(ve.km),
                        xe = (0, v.dd)(ge),
                        pe = (0, N.aC)().user,
                        je = (0, N.LU)(pe),
                        ye = function() {
                            var e = (0, y.Z)((function(e) {
                                var t;
                                return (0, k.__generator)(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, (0, I.e)(X, D, B, n.map((function(e) {
                                                return e.tokenPair.tokenId
                                            })), x || m)];
                                        case 1:
                                            if (a.sent()) return [3, 5];
                                            if ((0, _.Z)({
                                                    status: "warning",
                                                    title: T("Can't estimate gas spense. The purchase could fail.")
                                                }), "buy" !== r.tag) return [3, 5];
                                            a.label = 2;
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), [4, ne.uN({
                                                id: r.orderId
                                            })()];
                                        case 3:
                                            return a.sent(), [3, 5];
                                        case 4:
                                            return t = a.sent(), console.error(t), [3, 5];
                                        case 5:
                                            return e(), [2]
                                    }
                                }))
                            }));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ke = function(e, r, n) {
                            return (0, P._)(e, r, n, (0, P.V)(T))
                        },
                        we = function() {
                            var e = (0, y.Z)((function(e, r) {
                                var n;
                                return (0, k.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            ie(!0), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 4, , 5]), [4, (0, I.sl)({
                                                networkId: X,
                                                user: e,
                                                items: [{
                                                    orderId: r
                                                }],
                                                handleErrors: void 0
                                            })];
                                        case 2:
                                            return t.sent(), [4, ce()];
                                        case 3:
                                            return t.sent(), ie(!1), [3, 5];
                                        case 4:
                                            return n = t.sent(), console.error(n), ie(!1),
                                                function(e, r) {
                                                    var n = (0, I.e$)(T, r);
                                                    (0, _.Z)({
                                                        status: "error",
                                                        title: (0, a.jsx)(re.Z, {
                                                            user: e.web3Provider.getSigner(),
                                                            networkId: X,
                                                            tokenContract: D,
                                                            tokenId: $,
                                                            error: n
                                                        })
                                                    })
                                                }(e, n), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(r, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        be = "offer" === r.tag;
                    (0, l.useEffect)((function() {
                        null === Z || void 0 === Z || Z(be)
                    }), [be, Z]);
                    return (0, a.jsxs)(Le, {
                        children: ["sell" === r.tag ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(Me, {
                                children: (0, a.jsx)(i.cC, {
                                    t: T,
                                    children: "Sell at fixed price, or transfer to another wallet."
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex space-x-6",
                                children: [(0, a.jsx)(ee.zx, {
                                    className: "GA-fixed-price",
                                    colorScheme: "primary-1",
                                    leftIcon: (0, a.jsx)(O.WcW, {
                                        className: "h-4 w-4"
                                    }),
                                    onClick: function() {
                                        return U((function(e) {
                                            return ke(e, X, (function() {
                                                return le.onOpen({
                                                    user: e,
                                                    bundle: n,
                                                    floorPrice: h,
                                                    osFloorPrice: g,
                                                    approveNftModal: b,
                                                    floorWarningModal: ue
                                                })
                                            }))
                                        }))
                                    },
                                    children: T("Sell")
                                }), S && (0, a.jsx)(ee.zx, {
                                    className: "GA-transfer-text",
                                    variant: "outline",
                                    colorScheme: "primary-1",
                                    leftIcon: (0, a.jsx)(O.dg3, {
                                        className: "h-4 w-4"
                                    }),
                                    onClick: S,
                                    children: T("Transfer")
                                })]
                            }), (0, a.jsx)(ze, {
                                networkId: X,
                                lastPrice: p,
                                floorPrice: h,
                                osFloorPrice: g,
                                feeRate: j
                            }), S && (0, ae.XF)(X, D) && (0, a.jsx)("p", {
                                className: "ts-caption text-gray-500",
                                children: (0, a.jsxs)(i.cC, {
                                    t: T,
                                    children: ["You can", " ", (0, a.jsx)(ee.zx, {
                                        variant: "text",
                                        colorScheme: "primary-1",
                                        leftIcon: (0, a.jsx)(O.TIr, {
                                            className: "h-4 w-4"
                                        }),
                                        onClick: function() {
                                            return W((function(e) {
                                                return ke(e, X, (function() {
                                                    return xe.onOpen({
                                                        bundle: n
                                                    })
                                                }))
                                            }))
                                        },
                                        children: "Traverse"
                                    }), " ", "it to another chain."]
                                })
                            })]
                        }) : "offer" === r.tag ? (0, a.jsx)(Te, (0, d.Z)((0, t.Z)({}, p ? {
                            price: p.value,
                            token: (0, se.L)(X, p.currency),
                            desc: T("Last Price")
                        } : {
                            token: (0, se.L)(X, ""),
                            desc: T("Price")
                        }), {
                            royalty: null
                        })) : (0, a.jsxs)(a.Fragment, {
                            children: [r.endAt && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)("p", {
                                    className: "ts-hairline-2 text-gray-500",
                                    children: [T("Sale ends at"), (0, a.jsx)("span", {
                                        className: "ml-1 text-gray-700",
                                        children: R(r.endAt).format("LL HH:mm")
                                    })]
                                }), (0, a.jsx)("hr", {})]
                            }), (0, a.jsx)(Te, {
                                price: r.price,
                                token: (0, se.L)(X, r.currency),
                                desc: T("Fixed Price"),
                                royalty: {
                                    fee: r.royaltyFee,
                                    isMaker: u
                                },
                                extra: h && (0, a.jsx)(he.my, {
                                    floorPrice: h,
                                    osFloorPrice: g
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex space-x-4",
                                children: u ? (0, a.jsxs)(a.Fragment, {
                                    children: [C && (0, a.jsx)(ee.zx, {
                                        variant: "outline",
                                        colorScheme: "primary-1",
                                        isLoading: Q,
                                        onClick: C,
                                        children: T("Change price")
                                    }), (0, a.jsx)(ee.zx, {
                                        variant: "outline",
                                        isLoading: Q,
                                        onClick: function() {
                                            return U((function(e) {
                                                return ke(e, X, (function() {
                                                    return we(e, r.orderId)
                                                }))
                                            }))
                                        },
                                        children: T("Cancel")
                                    })]
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [function(e) {
                                        var r = e.isPrivate ? O.$uN : O.WcW,
                                            s = !!(e.isPrivate && e.taker && je) && !(0, L.Wr)(e.taker, je);
                                        return (0, a.jsx)(f.u, {
                                            label: e.isPrivate && je ? T(s ? "The private sale is not available to you." : "This is a private sale reserved for you. Buy now to earn more buyer rewards.") : T("Buy now to earn more buyer rewards."),
                                            placement: "top",
                                            hasArrow: !0,
                                            shouldWrapChildren: !0,
                                            children: (0, a.jsx)(ee.zx, {
                                                className: "GA-buy-now",
                                                colorScheme: "primary-1",
                                                leftIcon: (0, a.jsx)(r, {
                                                    className: "h-4 w-4"
                                                }),
                                                isDisabled: s,
                                                isLoading: Q,
                                                onClick: function() {
                                                    return r = function() {
                                                        return ye((function() {
                                                            return U((function(r) {
                                                                return ke(r, X, (function() {
                                                                    e.isPrivate && e.taker && !(0, L.Wr)(e.taker, r.meta.address) || me.onOpen({
                                                                        user: r,
                                                                        bundle: (0, o.zG)(n, te.UI((function(e) {
                                                                            return (0, d.Z)((0, t.Z)({}, e), {
                                                                                meta: null !== c && void 0 !== c ? c : {}
                                                                            })
                                                                        }))),
                                                                        orderId: e.orderId,
                                                                        price: e.price,
                                                                        currency: e.currency,
                                                                        royaltyFee: e.royaltyFee,
                                                                        isPrivate: e.isPrivate,
                                                                        contractMeta: w,
                                                                        approveTokenModal: fe
                                                                    })
                                                                }))
                                                            }))
                                                        }))
                                                    }, void(V ? r() : de.onOpen({
                                                        networkId: X,
                                                        tokenContract: D,
                                                        contractName: q,
                                                        action: r
                                                    }));
                                                    var r
                                                },
                                                children: T("Buy now")
                                            })
                                        })
                                    }(r), !r.isPrivate && c && (0, a.jsx)(Ae, {
                                        item: {
                                            id: r.orderId,
                                            price: J.formatEther(r.price),
                                            currency: r.currency,
                                            contract: s.contract,
                                            contractName: s.name,
                                            contractVerified: s.verified,
                                            tokenId: $,
                                            tokenStandard: (0, oe.fP)(s.erc_type),
                                            meta: c
                                        }
                                    })]
                                })
                            }), F.pN && !u && (0, a.jsx)(Oe, {
                                bundle: n,
                                price: r.price,
                                token: (0, se.L)(X, r.currency),
                                currency: r.currency,
                                meta: c,
                                verified: V
                            }), r.isPrivate && (0, a.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [r.taker && (0, a.jsx)("p", {
                                    className: "ts-caption mr-auto truncate text-gray-500",
                                    children: (0, a.jsxs)(i.cC, {
                                        t: T,
                                        children: ["Only for", " ", (0, a.jsx)(K.m, {
                                            className: "text-gray-700",
                                            networkId: X,
                                            address: r.taker,
                                            nickname: null
                                        }), "."]
                                    })
                                }), (0, a.jsx)("p", {
                                    className: "ts-hairline-3 whitespace-nowrap rounded border-2 border-primary-3 px-1.5 py-1 font-bold text-primary-3",
                                    children: "Private Sale"
                                }), (0, a.jsx)(f.u, {
                                    label: T("Listings marked as Private Sales are reserved for specific buyers. 0 fees and royalties are charged for Private Sales."),
                                    placement: "top",
                                    hasArrow: !0,
                                    children: (0, a.jsx)(O.q4m, {
                                        className: "h-4 w-4 text-gray-500 lg:h-6 lg:w-6"
                                    })
                                })]
                            })]
                        }), M && u && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("hr", {}), (0, a.jsxs)("p", {
                                className: "ts-caption text-gray-500",
                                children: [(0, a.jsxs)(i.cC, {
                                    t: T,
                                    children: ["You can also", " ", (0, a.jsx)(ee.zx, {
                                        variant: "text",
                                        colorScheme: "primary-1",
                                        onClick: A,
                                        children: "Browse loan offers"
                                    }), " ", "to borrow ETH with this item, or", " ", (0, a.jsx)(ee.zx, {
                                        variant: "text",
                                        colorScheme: "primary-1",
                                        onClick: G,
                                        children: "Set your desired terms"
                                    })]
                                }), (0, a.jsx)(f.u, {
                                    label: T("NFT with terms shows your willingness to receive and borrow from loan offers. Lenders could make offers based on the terms you set."),
                                    placement: "top",
                                    hasArrow: !0,
                                    children: (0, a.jsx)(O.OHs, {
                                        className: "ml-1 inline-block h-4 w-4 align-text-top text-gray-500"
                                    })
                                }), " ", T(".")]
                            })]
                        }), le.component, ue.component, de.component, me.component, fe.component, xe.component]
                    })
                },
                We = n(2593),
                Ee = function(e) {
                    var r = e.endAt,
                        n = (0, i.$G)().t,
                        t = (0, v.ah)();
                    return (0, a.jsxs)("p", {
                        className: "ts-hairline-2 text-gray-500",
                        children: [n("Sale ends at"), (0, a.jsx)("span", {
                            className: "ml-1 text-gray-700",
                            children: t.unix(r).format("LL HH:mm")
                        })]
                    })
                },
                De = function(e) {
                    var r = e.bundle,
                        n = e.sellOrder,
                        s = e.balance,
                        o = e.contract,
                        c = e.meta,
                        l = e.lastPrice,
                        u = e.floorPrice,
                        m = e.osFloorPrice,
                        f = e.feeRate,
                        x = e.contractMeta,
                        p = e.approveNftModal,
                        h = e.buyModal,
                        g = e.approveTokenModal,
                        j = e.onSend,
                        w = (0, i.$G)().t,
                        b = (0, N.eX)().requireRegisteredUser,
                        C = r[0].tokenPair,
                        S = C.token,
                        Z = C.tokenId,
                        M = C.kind,
                        G = r[0].info,
                        A = G.networkId,
                        F = G.creator,
                        T = G.verified,
                        R = (0, v.r$)(),
                        z = R.isLoading,
                        U = R.setLoading,
                        W = R.reloadPage,
                        E = (0, v.dd)(ve.aX),
                        D = (0, v.dd)(ve.mu),
                        $ = (0, v.dd)(ve.fG),
                        B = (0, v.dd)(ve.zD),
                        Y = (0, v.dd)(ve.rC),
                        X = (0, v.dd)(ve.o2),
                        q = (0, N.aC)().user,
                        V = (0, N.LU)(q),
                        H = function() {
                            var e = (0, y.Z)((function(e, n) {
                                var t;
                                return (0, k.__generator)(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, (0, I.e)(A, S, M, r.map((function(e) {
                                                return e.tokenPair.tokenId
                                            })), e.maker.address)];
                                        case 1:
                                            if (a.sent()) return [3, 5];
                                            (0, _.Z)({
                                                status: "warning",
                                                title: w("Can't estimate gas spense. The purchase could fail.")
                                            }), a.label = 2;
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), [4, ne.uN({
                                                id: e.id
                                            })()];
                                        case 3:
                                            return a.sent(), [3, 5];
                                        case 4:
                                            return t = a.sent(), console.error(t), [3, 5];
                                        case 5:
                                            return n(), [2]
                                    }
                                }))
                            }));
                            return function(r, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Q = function() {
                            return b((function(e) {
                                return (0, P._)(e, A, (function() {
                                    return E.onOpen({
                                        user: e,
                                        bundle: r,
                                        floorPrice: u,
                                        osFloorPrice: m,
                                        approveNftModal: p,
                                        floorWarningModal: $
                                    })
                                }), (0, P.V)(w))
                            }))
                        },
                        K = function(e) {
                            return n = function() {
                                return H(e, (function() {
                                    return b((function(n) {
                                        return (0, P._)(n, A, (function() {
                                            h.onOpen({
                                                user: n,
                                                bundle: r,
                                                orderId: e.id,
                                                price: We.O$.from(e.price),
                                                currency: e.currency,
                                                royaltyFee: e.royalty_fee,
                                                isPrivate: e.is_private,
                                                contractMeta: x,
                                                approveTokenModal: g
                                            })
                                        }), (0, P.V)(w))
                                    }))
                                }))
                            }, void(T ? n() : D.onOpen({
                                networkId: A,
                                tokenContract: S,
                                contractName: F,
                                action: n
                            }));
                            var n
                        },
                        te = function() {
                            var e = (0, y.Z)((function(e, r) {
                                var n;
                                return (0, k.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            U(!0), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 4, 5, 6]), [4, (0, I.sl)({
                                                networkId: A,
                                                user: e,
                                                items: [{
                                                    orderId: r
                                                }],
                                                handleErrors: void 0
                                            })];
                                        case 2:
                                            return t.sent(), [4, W()];
                                        case 3:
                                            return t.sent(), [3, 6];
                                        case 4:
                                            return n = t.sent(), console.error(n),
                                                function(e, r) {
                                                    var n = (0, I.e$)(w, r);
                                                    (0, _.Z)({
                                                        status: "error",
                                                        title: (0, a.jsx)(re.Z, {
                                                            user: e.web3Provider.getSigner(),
                                                            networkId: A,
                                                            tokenContract: S,
                                                            tokenId: Z,
                                                            error: n
                                                        })
                                                    })
                                                }(e, n), [3, 6];
                                        case 5:
                                            return U(!1), [7];
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(r, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ae = Boolean(V && n && (0, L.Wr)(V, n.maker.address));
                    return (0, a.jsxs)(Le, {
                        children: [n ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(Ee, {
                                endAt: n.end_at
                            }), (0, a.jsx)("hr", {
                                className: "border-gray-300"
                            }), (0, a.jsx)(Te, {
                                price: We.O$.from(n.price),
                                token: (0, se.L)(A, n.currency),
                                desc: w("Fixed Price"),
                                royalty: {
                                    fee: n.royalty_fee,
                                    isMaker: ae
                                },
                                extra: u && (0, a.jsx)(he.my, {
                                    floorPrice: u,
                                    osFloorPrice: m
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex space-x-6",
                                children: ae ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(ee.zx, {
                                        variant: "outline",
                                        colorScheme: "primary-1",
                                        isLoading: z,
                                        onClick: function() {
                                            return function(e) {
                                                return b((function(n) {
                                                    return (0, P._)(n, A, (function() {
                                                        return Y.onOpen({
                                                            user: n,
                                                            bundle: r,
                                                            orderId: e.id,
                                                            price: J.formatEther(e.price),
                                                            currency: e.currency,
                                                            isPrivate: !1,
                                                            taker: null,
                                                            royaltyFee: e.royalty_fee,
                                                            deadline: e.end_at,
                                                            floorPrice: u,
                                                            relistModal: X,
                                                            floorWarningModal: $
                                                        })
                                                    }), (0, P.V)(w))
                                                }))
                                            }(n)
                                        },
                                        children: w("Change price")
                                    }), (0, a.jsx)(ee.zx, {
                                        variant: "outline",
                                        isLoading: z,
                                        onClick: function() {
                                            return e = n.id, b((function(r) {
                                                return (0, P._)(r, A, (function() {
                                                    return te(r, e)
                                                }), (0, P.V)(w))
                                            }));
                                            var e
                                        },
                                        children: w("Cancel")
                                    })]
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(ee.zx, {
                                        className: "GA-buy-now",
                                        colorScheme: "primary-1",
                                        leftIcon: (0, a.jsx)(O.WcW, {
                                            className: "h-4 w-4"
                                        }),
                                        onClick: function() {
                                            return K(n)
                                        },
                                        children: w("Buy now")
                                    }), !n.is_private && c && (0, a.jsx)(Ae, {
                                        item: {
                                            id: n.id,
                                            price: J.formatEther(n.price),
                                            currency: n.currency,
                                            contract: o.contract,
                                            contractName: o.name,
                                            contractVerified: o.verified,
                                            tokenId: Z,
                                            tokenStandard: (0, oe.fP)(o.erc_type),
                                            meta: c
                                        }
                                    })]
                                })
                            }), s > 0 && (ae ? (0, a.jsx)("p", {
                                className: "ts-caption text-gray-500",
                                children: (0, a.jsxs)(i.cC, {
                                    t: w,
                                    children: ["Or,", " ", (0, a.jsx)(ee.zx, {
                                        variant: "text",
                                        colorScheme: "primary-1",
                                        leftIcon: (0, a.jsx)(O.wUq, {
                                            className: "h-4 w-4"
                                        }),
                                        onClick: Q,
                                        children: "List"
                                    }), " ", "another item."]
                                })
                            }) : (0, a.jsx)("p", {
                                className: "ts-caption text-gray-500",
                                children: (0, a.jsxs)(i.cC, {
                                    t: w,
                                    children: ["Or,", " ", (0, a.jsx)(ee.zx, {
                                        variant: "text",
                                        colorScheme: "primary-1",
                                        leftIcon: (0, a.jsx)(O.wUq, {
                                            className: "h-4 w-4"
                                        }),
                                        onClick: Q,
                                        children: "List"
                                    }), " ", "your own item."]
                                })
                            }))]
                        }) : s > 0 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(Me, {
                                children: (0, a.jsx)(i.cC, {
                                    t: w,
                                    children: "Sell at fixed price, or transfer to another wallet."
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex space-x-4",
                                children: [(0, a.jsx)(ee.zx, {
                                    className: "GA-fixed-price",
                                    colorScheme: "primary-1",
                                    leftIcon: (0, a.jsx)(O.WcW, {
                                        className: "h-4 w-4"
                                    }),
                                    onClick: Q,
                                    children: w("Sell")
                                }), j && (0, a.jsx)(ee.zx, {
                                    className: "GA-transfer-text",
                                    variant: "outline",
                                    colorScheme: "primary-1",
                                    leftIcon: (0, a.jsx)(O.dg3, {
                                        className: "h-4 w-4"
                                    }),
                                    onClick: j,
                                    children: w("Transfer")
                                })]
                            }), (0, a.jsx)(ze, {
                                networkId: A,
                                lastPrice: l,
                                floorPrice: u,
                                osFloorPrice: m,
                                feeRate: f
                            })]
                        }) : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(Te, (0, d.Z)((0, t.Z)({}, l ? {
                                price: l.value,
                                token: (0, se.L)(A, l.currency),
                                desc: w("Last Price")
                            } : {
                                token: (0, se.L)(A, ""),
                                desc: w("Price")
                            }), {
                                royalty: null
                            }))
                        }), E.component, $.component, D.component, B.component, Y.component, X.component]
                    })
                },
                $e = n(98914),
                Be = n(6650),
                Ye = n(21387),
                Xe = function(e) {
                    var r = e.networkId,
                        n = e.order,
                        t = (0, i.$G)().t,
                        s = (0, v.ah)(),
                        o = n.erc20Address.toLowerCase(),
                        c = (0, se.L)(r, o),
                        l = c.symbol,
                        d = c.decimals,
                        u = s.unix(n.dueTime),
                        m = u.isBefore(s()) ? t("Defaulted") : u.toNow(!0),
                        f = (0, N.aC)().user,
                        x = (0, N.LU)(f),
                        p = x && (0, L.Wr)(x, n.borrower),
                        h = x && (0, L.Wr)(x, n.lender),
                        j = (0, v.dd)(b.cy),
                        y = (0, v.dd)(ve.km),
                        k = (0, N.eX)().requireRegisteredUser,
                        w = (0, v.r$)(),
                        C = w.isLoading,
                        I = w.setLoading,
                        _ = w.reloadPage;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, a.jsx)("p", {
                                className: "ts-hairline-3 lg:ts-hairline-2 text-gray-500",
                                children: t("Repayment")
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, a.jsx)(Fe.T, {
                                    className: "mr-1 h-5 w-5",
                                    symbol: l
                                }), (0, a.jsx)("p", {
                                    className: "ts-headline-6 lg:ts-headline-5 truncate",
                                    children: J.formatUnits(n.repayment)
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center text-gray-500",
                                children: [(0, a.jsx)(O.Kpq, {
                                    className: "h-4 w-4"
                                }), (0, a.jsxs)("p", {
                                    className: "ts-caption-2 ml-1",
                                    children: [u.format("LL HH:mm"), " (", m, ")"]
                                })]
                            })]
                        }), (0, a.jsxs)("ul", {
                            className: "flex flex-wrap gap-2",
                            children: [(0, a.jsx)(Re, {
                                label: t("Borrower"),
                                value: (0, a.jsx)(g.Z, {
                                    href: (0, D.pG)(n.borrower),
                                    children: (0, T.P5)(n.borrower, !0)
                                })
                            }), (0, a.jsx)(Re, {
                                label: t("Lender"),
                                value: (0, a.jsx)(g.Z, {
                                    href: (0, D.pG)(n.lender),
                                    children: (0, T.P5)(n.lender, !0)
                                })
                            }), (0, a.jsx)(Re, {
                                label: t("Loan value"),
                                value: "".concat(J.formatUnits(n.amount, d), " \u039e")
                            })]
                        }), 30 === n.status && p && (0, a.jsx)(ee.zx, {
                            colorScheme: "primary-1",
                            onClick: function() {
                                return k((function(e) {
                                    return (0, P._)(e, r, (function() {
                                        return j.onOpen({
                                            user: e,
                                            networkId: r,
                                            order: n,
                                            approveTokenModal: y,
                                            onSuccess: _
                                        })
                                    }), (0, P.V)(t))
                                }))
                            },
                            children: t("Repay")
                        }), 50 === n.status && h && (0, a.jsx)(ee.zx, {
                            colorScheme: "primary-1",
                            isLoading: C,
                            onClick: function() {
                                return k((function(e) {
                                    return (0, P._)(e, r, (function() {
                                        return (0, $e._)(t, e, r, n.loanId, I, _)
                                    }), (0, P.V)(t))
                                }))
                            },
                            children: t("Redeem")
                        }), j.component, y.component]
                    })
                },
                qe = function(e) {
                    var r = e.networkId,
                        n = e.tokenContract,
                        t = e.tokenId,
                        s = (0, i.$G)().t,
                        o = (0, w.ZP)({
                            key: "/xy3/v1/orders/latest",
                            contract: n,
                            token_id: t
                        }, (function(e) {
                            var r = e.contract,
                                n = e.token_id;
                            return (0, S.uV)({
                                contract: r,
                                token_id: n
                            })
                        }), {
                            onError: function(e) {
                                return console.error(e)
                            }
                        }),
                        c = o.data,
                        l = o.error;
                    return (0, a.jsxs)(Le, {
                        children: [(0, a.jsx)("h2", {
                            className: "ts-hairline-3 lg:ts-hairline-2 text-gray-500",
                            children: s("Secured as Loan Collateral")
                        }), (0, a.jsx)("hr", {}), l ? (0, a.jsx)(Be.Z, {
                            label: s("Something's wrong")
                        }) : c ? (0, a.jsx)(Xe, {
                            networkId: r,
                            order: c
                        }) : (0, a.jsx)(Ye.Z, {
                            size: "md"
                        })]
                    })
                },
                Ve = n(82670),
                He = n(29815),
                Qe = n(82649),
                Ke = n(49770),
                Je = n(68123),
                er = n(55851),
                rr = n(642),
                nr = n(65033),
                tr = new Qe.x,
                ar = (0, l.forwardRef)((function(e, r) {
                    var n = e.showWarning,
                        t = e.isCollectionOfferDisabled,
                        s = e.bundle,
                        o = e.collectionIcon,
                        c = e.isOwner,
                        d = e.owner,
                        u = e.onSetTerms,
                        m = (0, i.$G)().t,
                        f = (0, v.dd)(b.Fu),
                        h = (0, v.dd)(ve.km),
                        g = (0, N.eX)().requireRegisteredUser,
                        j = s[0].tokenPair,
                        w = j.token,
                        I = j.tokenId,
                        Z = s[0].info,
                        O = Z.creator,
                        M = Z.networkId,
                        G = Z.verified,
                        A = (0, l.useState)("valid"),
                        F = A[0],
                        T = A[1],
                        U = (0, l.useMemo)((function() {
                            return (0, a.jsx)("div", {
                                className: "w-max space-x-3 rounded-xl border-2 p-0.5 font-bold",
                                children: [{
                                    text: m("Valid"),
                                    tab: "valid"
                                }, {
                                    text: m("All"),
                                    tab: "all"
                                }].map((function(e, r) {
                                    var n = e.text,
                                        t = e.tab;
                                    return (0, a.jsx)("button", {
                                        className: (0, p.Z)("ts-button-2 rounded-lg px-3 py-2", F === t ? "bg-gray-300 text-gray-700" : "text-gray-600 lg:hover:opacity-50"),
                                        onClick: function() {
                                            return T(t)
                                        },
                                        children: (0, a.jsx)("span", {
                                            children: n
                                        })
                                    }, r)
                                }))
                            })
                        }), [F, m]),
                        W = (0, l.useReducer)(C.VR, {
                            contractAddress: w,
                            tokenId: I,
                            duration: 0,
                            page: 1,
                            pageSize: 10,
                            sort: "desc",
                            order: "createdAt",
                            isSufficient: "valid" === F ? 1 : 0
                        }),
                        E = W[0],
                        D = W[1],
                        $ = (0, N.aC)().user,
                        B = R.FS((0, N.JQ)($));
                    (0, l.useEffect)((function() {
                        return D({
                            type: "SET_USER_ADDRESS_AND_ISSUFFICIENT",
                            payload: "valid" === F ? {
                                userAddress: B,
                                isSufficient: 1
                            } : {
                                userAddress: void 0,
                                isSufficient: 0
                            }
                        })
                    }), [F, B]);
                    var Y = (0, l.useState)(0),
                        X = Y[0],
                        q = Y[1],
                        V = (0, l.useCallback)((function() {
                            return q(ye.increment)
                        }), []);
                    (0, l.useEffect)((function() {
                        var e = tr.subscribe({
                            next: V
                        });
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [V]);
                    var Q = (0, l.useMemo)((function() {
                            return [R.G(Ne.Y3((0, y.Z)((function() {
                                var e;
                                return (0, k.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, (0, S.yw)(E)];
                                        case 1:
                                            return [2, r.sent()];
                                        case 2:
                                            if (e = r.sent(), (0, Ve.Z)(e, Je.ED) && e.message === Je.N0) throw (0, Je.gr)(m)[e.message];
                                            return console.error(e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            })), (function(e) {
                                return "string" === typeof e ? e : m("Something's wrong")
                            }))), X]
                        }), [E, X, m])[0],
                        K = (0, ke.Z)((0, Ce.Z)(Q, {
                            skipPending: !0
                        }), 1)[0],
                        J = z.hx(K) ? K.error : null,
                        re = (0, Ke.Z)("params", (function() {
                            return (0, S.e3)()
                        })).data,
                        ne = (void 0 === re ? {} : re).duration,
                        te = void 0 === ne ? [] : ne;
                    return (0, a.jsxs)("section", {
                        className: "mx-auto w-full max-w-[1376px] pt-8 lg:px-8 lg:pt-16",
                        children: [(0, a.jsxs)(x.O.Group, {
                            as: "div",
                            className: "mx-6 space-y-4 lg:mx-0",
                            ref: r,
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6",
                                children: [(0, a.jsx)(x.O.List, {
                                    className: "flex-1 space-x-1 border-b lg:space-x-2",
                                    children: (0, a.jsx)(H.Y, {
                                        children: m("Loans")
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center space-x-2",
                                    children: [!n && (c ? (0, a.jsx)(ee.zx, {
                                        className: "flex-1",
                                        variant: "outline",
                                        size: "sm",
                                        colorScheme: "primary-1",
                                        onClick: u,
                                        children: m("Set terms")
                                    }) : (0, a.jsxs)("div", {
                                        className: "relative flex flex-1 pr-2.5 lg:pr-7",
                                        children: [(0, a.jsx)(ee.zx, {
                                            className: "flex-1",
                                            variant: "outline",
                                            colorScheme: "primary-1",
                                            size: "sm",
                                            onClick: function() {
                                                return g((function(e) {
                                                    (0, L.Wr)(d, e.meta.address) ? (0, _.Z)({
                                                        status: "warning",
                                                        title: m("This item is yours")
                                                    }) : (0, P._)(e, M, (function() {
                                                        var r = [{
                                                            type: "item",
                                                            item: s[0]
                                                        }];
                                                        t || r.push({
                                                            type: "collection",
                                                            contract: {
                                                                contract: w,
                                                                name: O,
                                                                network_id: M,
                                                                verified: G,
                                                                icon_url: o
                                                            }
                                                        }), f.onOpen({
                                                            user: e,
                                                            options: r,
                                                            approveTokenModal: h,
                                                            onSuccess: V
                                                        })
                                                    }), (0, P.V)(m))
                                                }))
                                            },
                                            children: m("Make Loan Offer")
                                        }), (0, a.jsx)(nr.g, {
                                            className: "absolute right-0 top-0 -translate-y-1/3"
                                        })]
                                    })), (0, a.jsx)(ee.ZP, {
                                        variant: "outline",
                                        size: "sm",
                                        href: "https://docs.x2y2.io/category/borrowlend-eth-via-nft-loans",
                                        isExternal: !0,
                                        children: m("Tutorial")
                                    })]
                                }), !n && (0, a.jsx)(fe.Z, {
                                    buttonProps: {
                                        w: ["full", null, "200px"]
                                    },
                                    items: [0].concat((0, He.Z)(te)).map((function(e) {
                                        return {
                                            title: (0, C.lo)(m, e),
                                            value: e
                                        }
                                    })),
                                    value: E.duration,
                                    onChange: function(e) {
                                        D({
                                            type: "SET_DURATION",
                                            payload: e
                                        })
                                    }
                                }), !n && U]
                            }), (0, a.jsx)(x.O.Panels, {
                                children: (0, a.jsx)(x.O.Panel, {
                                    className: "flex flex-col",
                                    children: n ? (0, a.jsx)(rr.G, {}) : (0, a.jsx)(er.F, {
                                        showWarning: n,
                                        pageType: "nftDetail",
                                        isOwner: c,
                                        refetch: V,
                                        item: s[0],
                                        isFetching: z.zR(K),
                                        fetchQuery: E,
                                        fetchResp: z.WG(K),
                                        fetchError: J,
                                        dispatchFetchQueryAction: D
                                    })
                                })
                            })]
                        }), f.component, h.component]
                    })
                })),
                sr = function(e) {
                    var r, n = e.termInfo,
                        s = e.isOwner,
                        o = e.bundle,
                        c = e.onSetTerms,
                        d = e.onCancelTerms,
                        u = e.owner,
                        m = (0, i.$G)().t,
                        f = o[0].tokenPair.token.toLowerCase(),
                        x = o[0].info,
                        p = x.creator,
                        g = x.networkId,
                        j = x.verified,
                        y = n.amount,
                        k = n.erc20Address,
                        w = n.duration,
                        C = null !== (r = null === k || void 0 === k ? void 0 : k.toLowerCase()) && void 0 !== r ? r : h.R,
                        I = (0, se.L)(g, C),
                        S = I.symbol,
                        Z = I.decimals,
                        O = "".concat(y && "0" !== y ? (0, T.tX)(parseFloat(J.formatUnits(We.O$.from(y), Z))) : m("Any"), " ").concat("ETH" === S || "WETH" === S ? "wETH" : S),
                        M = w ? (0, T.Y)(m, w) : m("Any days"),
                        G = (0, N.eX)().requireRegisteredUser,
                        A = (0, l.useState)(!1),
                        F = A[0],
                        R = A[1],
                        z = (0, v.dd)(b.Fu),
                        U = (0, v.dd)(ve.km);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("ul", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [(0, a.jsx)("span", {
                                className: "ts-caption-2 text-gray-500",
                                children: m("Expected Terms")
                            }), (0, a.jsx)(Re, {
                                label: m("For"),
                                value: O
                            }), (0, a.jsx)(Re, {
                                label: m("Over"),
                                value: M
                            })]
                        }), (0, a.jsx)("div", {
                            className: "flex space-x-6",
                            children: s ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(ee.zx, {
                                    colorScheme: "primary-1",
                                    onClick: c,
                                    children: m("Adjust")
                                }), (0, a.jsx)(ee.zx, {
                                    colorScheme: "primary-1",
                                    onClick: function() {
                                        return d(R)
                                    },
                                    variant: "outline",
                                    isLoading: F,
                                    children: m("Cancel")
                                })]
                            }) : (0, a.jsx)(ee.zx, {
                                colorScheme: "primary-1",
                                onClick: function() {
                                    return G((function(e) {
                                        if ((0, L.Wr)(u, e.meta.address))(0, _.Z)({
                                            status: "warning",
                                            title: m("This item is yours")
                                        });
                                        else {
                                            var r, a = [{
                                                type: "item",
                                                item: o[0]
                                            }];
                                            n.collection && !n.collection.disableCollectionOffer && a.push({
                                                type: "collection",
                                                contract: {
                                                    contract: f,
                                                    name: p,
                                                    network_id: g,
                                                    verified: j,
                                                    icon_url: null === (r = n.collection) || void 0 === r ? void 0 : r.iconUrl
                                                }
                                            }), (0, P._)(e, g, (function() {
                                                return z.onOpen({
                                                    user: e,
                                                    options: a,
                                                    offer: (0, t.Z)({}, y && "0" !== y && {
                                                        amount: y
                                                    }, k && {
                                                        erc20Address: k.toLowerCase()
                                                    }, w && {
                                                        duration: w
                                                    }),
                                                    approveTokenModal: U,
                                                    onSuccess: function() {
                                                        return tr.next()
                                                    }
                                                })
                                            }), (0, P.V)(m))
                                        }
                                    }))
                                },
                                children: m("Make loan offer")
                            })
                        }), z.component, U.component]
                    })
                },
                or = function(e) {
                    var r = e.termInfo,
                        n = e.onSetTerms,
                        t = e.onCancelTerms,
                        s = e.isOwner,
                        o = e.owner,
                        c = e.bundle,
                        l = e.onScrollIntoLoans,
                        d = (0, i.$G)().t;
                    return (0, a.jsxs)(Le, {
                        children: [(0, a.jsx)("h2", {
                            className: "ts-hairline-3 lg:ts-hairline-2 text-gray-500",
                            children: d("Waiting for Loan Offer")
                        }), (0, a.jsx)("hr", {}), (0, a.jsx)(sr, {
                            termInfo: r,
                            onSetTerms: n,
                            onCancelTerms: t,
                            isOwner: s,
                            bundle: c,
                            owner: o
                        }), (0, a.jsx)("p", {
                            className: "ts-caption text-gray-500",
                            children: (0, a.jsxs)(i.cC, {
                                t: d,
                                children: ["You can also", " ", (0, a.jsx)(ee.zx, {
                                    variant: "text",
                                    colorScheme: "primary-1",
                                    onClick: l,
                                    children: "Browse loan offers"
                                }), " ."]
                            })
                        })]
                    })
                },
                ir = n(27484),
                cr = n.n(ir),
                lr = n(56371),
                dr = n(98973),
                ur = n(8007),
                mr = n(55829),
                fr = n(7209),
                xr = n(24011),
                pr = n(83962),
                hr = (0, ye.pipe)(fr.Uz((function(e) {
                    return cr()(e.created_at).valueOf()
                }))(xr.Df), fr.GY),
                gr = function(e) {
                    var r = e.nft,
                        n = e.contract,
                        s = (0, l.useMemo)((function() {
                            return (0, ye.pipe)(Ne.Do, Ne.ak("x2y2Activities", (function() {
                                return (0, ye.pipe)(ne.Q3({
                                    filters: {
                                        nft: r.id
                                    },
                                    limit: 500
                                }), Ne.UI((function(e) {
                                    return e.data
                                })))
                            })), Ne.ak("otherActivities", (function() {
                                return (0, ye.pipe)(ne._O({
                                    network_id: n.network_id,
                                    token: n.contract,
                                    token_id: r.token_id,
                                    size: 500
                                }), Ne.UI((0, ye.flow)(pr.hX((function(e) {
                                    return 0 !== e.platform_id
                                })), pr.UI((function(e) {
                                    return {
                                        type: "new_sale",
                                        created_at: cr()(1e3 * e.timestamp).toLocaleString(),
                                        price: (0, lr.formatUnits)(e.price, (0, se.L)(n.network_id, e.currency).decimals),
                                        from_address: e.from,
                                        to_address: e.to,
                                        tx: e.tx,
                                        nft: (0, d.Z)((0, t.Z)({}, r), {
                                            contract: n
                                        }),
                                        contract: n,
                                        order: {
                                            amount: 1,
                                            currency: e.currency
                                        }
                                    }
                                })))))
                            })), Ne.UI((function(e) {
                                var r = e.x2y2Activities,
                                    n = e.otherActivities;
                                return pr.DY(hr)((0, He.Z)(n).concat((0, He.Z)(r)))
                            })), R.G)
                        }), [r, n]);
                    return (0, v.bQ)(s, (function(e) {
                        return (0, a.jsx)(vr, {
                            items: e
                        })
                    }), {
                        skipPending: !0
                    })
                },
                vr = function(e) {
                    var r = e.items,
                        n = (0, i.$G)().t,
                        s = (0, l.useState)(!1),
                        o = s[0],
                        c = s[1],
                        u = (0, l.useState)({
                            page: 1,
                            category: "sale"
                        }),
                        m = u[0],
                        f = u[1],
                        p = (0, l.useMemo)((function() {
                            var e = (0, He.Z)(r);
                            if ("all" === m.category);
                            else {
                                var n = m.category;
                                e = e.filter((function(e) {
                                    return e.type === (0, mr.hc)(n)
                                }))
                            }
                            return e
                        }), [m, r]),
                        h = p.length,
                        g = (0, l.useMemo)((function() {
                            return p.slice(8 * (m.page - 1), 8 * m.page)
                        }), [m, p]);
                    return (0, a.jsx)("section", {
                        className: "mx-auto w-full max-w-[1376px] border-t border-gray-300 pt-8 lg:px-8 lg:pt-16",
                        children: (0, a.jsxs)(x.O.Group, {
                            as: "div",
                            className: "mx-6 space-y-4 lg:mx-0",
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6",
                                children: [(0, a.jsx)(x.O.List, {
                                    className: "flex-1 space-x-3 border-b-2 border-gray-300",
                                    children: (0, a.jsx)(H.Y, {
                                        children: n("Activities")
                                    })
                                }), (0, a.jsx)(fe.Z, {
                                    buttonProps: {
                                        w: ["full", null, "200px"]
                                    },
                                    items: [{
                                        title: n("All"),
                                        value: "all"
                                    }].concat((0, He.Z)(mr.m2.map((function(e) {
                                        return {
                                            title: (0, mr.ng)(n, e),
                                            value: e
                                        }
                                    })))),
                                    value: m.category,
                                    onChange: function(e) {
                                        return f((function(r) {
                                            return (0, d.Z)((0, t.Z)({}, r), {
                                                page: 1,
                                                category: e
                                            })
                                        }))
                                    }
                                })]
                            }), (0, a.jsx)(x.O.Panels, {
                                children: (0, a.jsxs)(x.O.Panel, {
                                    className: "flex flex-col",
                                    children: [0 === g.length && (0, a.jsx)(Be.Z, {}), g.length > 0 && (0, a.jsx)(dr.b, {
                                        items: o ? g : g.slice(0, 1)
                                    }), o && (0, a.jsx)(ur.u, {
                                        mt: 8,
                                        limit: 8,
                                        page: m.page,
                                        total: h,
                                        onPageChange: function(e, r) {
                                            f((function(e) {
                                                return (0, d.Z)((0, t.Z)({}, e), {
                                                    page: r
                                                })
                                            }))
                                        }
                                    }), g.length > 1 && !o && (0, a.jsx)(ee.zx, {
                                        className: "mt-4 self-center lg:mt-6",
                                        variant: "outline",
                                        size: "sm",
                                        rightIcon: (0, a.jsx)(O.B6N, {
                                            className: "h-4 w-4"
                                        }),
                                        onClick: function() {
                                            return c(!0)
                                        },
                                        children: n("Show more")
                                    })]
                                })
                            })]
                        })
                    })
                },
                jr = n(65857),
                yr = function(e) {
                    var r = e.className,
                        n = e.imageProps,
                        s = e.muted,
                        o = e.isSuspicious,
                        c = (0, i.$G)().t;
                    return (0, a.jsxs)("div", {
                        className: (0, p.Z)("relative z-[2]", r),
                        children: [o && (0, a.jsx)(le.xu, {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                            p: 4,
                            rounded: "r16",
                            border: "4px solid",
                            borderColor: "red.500",
                            color: "red.500",
                            children: (0, a.jsxs)(i.cC, {
                                t: c,
                                children: [(0, a.jsx)(le.xv, {
                                    textStyle: ["headline_5", null, null, "headline_4"],
                                    children: "possibly"
                                }), (0, a.jsx)(le.xv, {
                                    textStyle: ["headline_1", null, null, "headline_0"],
                                    children: "fake"
                                })]
                            })
                        }), (0, a.jsx)(V.D, (0, d.Z)((0, t.Z)({
                            w: "full",
                            opacity: o ? .2 : 1
                        }, n), {
                            muted: s,
                            videoAutoPlay: !0,
                            autoAspectRatio: !0,
                            imageSizes: ["100vw", "80vw", "50vw"]
                        }))]
                    })
                },
                kr = n(43076),
                wr = n(18638),
                br = n(86269),
                Nr = n(17218),
                Cr = function(e) {
                    var r = e.className,
                        n = e.tokenContract,
                        t = e.tokenId,
                        s = e.rarity,
                        o = (0, i.$G)().t,
                        c = (0, wr.N8)(n, {
                            token_id: t
                        }).data,
                        l = (0, wr.Oe)(n, {
                            token_id: t
                        }).data,
                        d = [c ? {
                            className: "group hover:bg-[#5B03C4] hover:border-[#5B03C4] hover:text-button-text",
                            lalel: o("Trait Sniper Ranking"),
                            icon: (0, a.jsx)(O.XRz, {
                                className: "h-4 w-4 text-[#5B03C4] group-hover:text-button-text",
                                viewBox: "0 0 32 32"
                            }),
                            rank: c.rank,
                            url: c.url
                        } : null, l ? {
                            className: "hover:bg-[#FC7139] hover:border-[#FC7139] hover:text-button-text",
                            lalel: o("Rarity Sniper Ranking"),
                            icon: (0, a.jsx)(O.fAc, {
                                className: "h-4 w-4",
                                viewBox: "0 0 32 32"
                            }),
                            rank: l.rank,
                            url: l.url
                        } : null].filter(br.C);
                    return (0, a.jsxs)("ul", {
                        className: (0, p.Z)(r, "flex flex-wrap gap-2.5"),
                        children: [(0, a.jsx)(f.u, {
                            placement: "top",
                            hasArrow: !0,
                            label: s ? o("#{{rank}} out of {{total}}, by X2Y2 rarity rank.", {
                                rank: s.rank,
                                total: s.meta.total_count
                            }) : void 0,
                            children: (0, a.jsxs)("li", {
                                className: (0, p.Z)("flex items-center space-x-2 rounded-lg py-1 px-3 text-button-text", s ? (0, Nr.p)(s.rank, s.meta.total_count) : "hidden"),
                                children: [(0, a.jsx)(O.akV, {
                                    className: "h-4 w-4"
                                }), (0, a.jsx)("p", {
                                    className: "ts-caption-2 font-bold",
                                    children: s ? "".concat(s.rank) : o("N/A")
                                })]
                            })
                        }), d.map((function(e, r) {
                            return (0, a.jsx)(f.u, {
                                placement: "top",
                                hasArrow: !0,
                                label: e.lalel,
                                children: (0, a.jsx)("li", {
                                    children: (0, a.jsxs)(g.Z, {
                                        className: (0, p.Z)(e.className, "flex items-center space-x-2 rounded-lg border-2 border-gray-300 py-0.5 px-2.5 text-gray-700"),
                                        hoverStyle: "none",
                                        href: e.url,
                                        isExternal: !0,
                                        children: [e.icon, (0, a.jsx)("p", {
                                            className: "ts-caption-2 font-bold",
                                            children: e.rank
                                        })]
                                    })
                                })
                            }, r)
                        }))]
                    })
                },
                Ir = n(78454),
                _r = function(e) {
                    var r, n, o, J = e.query,
                        ee = e.data,
                        re = e.meta,
                        ne = e.asset,
                        te = e.ownerMeta,
                        ae = e.title,
                        se = e.ownerInDb,
                        oe = e.ownerOnChain,
                        ie = e.floorPrice,
                        ce = e.rarityMeta,
                        le = e.esMapping,
                        de = e.viewCount,
                        ue = e.security,
                        me = e.timestamp,
                        fe = (0, i.$G)().t,
                        xe = (0, c.useRouter)(),
                        pe = (0, v.dd)(ve.VD),
                        ge = ee.contract,
                        je = ge.network_id,
                        ye = (0, D.PQ)(ge),
                        ke = (0, G.E0)(ge),
                        we = (0, N.aF)(),
                        be = R.WG((0, N.JQ)(we)),
                        Ne = !!be && (0, L.Wr)(ee.owner, be),
                        Ce = (0, l.useState)(ee.likes_count),
                        Ie = Ce[0],
                        _e = Ce[1],
                        Se = ee.last_price ? {
                            value: (0, A.tG)(je, {
                                price: ee.last_price,
                                currency: s.d
                            }),
                            currency: s.d
                        } : null,
                        Pe = ee.sellOrder.length > 0 && (!ee.sellOrder[0].end_at || new Date(ee.sellOrder[0].end_at).valueOf() > (new Date).valueOf()) ? ee.sellOrder[0] : null,
                        Ze = (0, l.useState)(!1),
                        Oe = Ze[0],
                        Le = Ze[1],
                        Me = (0, Ir.F1)({
                            nftId: ee.id,
                            load: Oe,
                            nonce: me
                        }),
                        Ge = (0, l.useMemo)((function() {
                            return z.d6(Me) ? Me.value : null
                        }), [Me]),
                        Ae = (0, d.Z)((0, t.Z)({}, (0, V.K)(ne, "detailed")), {
                            tokenAddress: ee.contract.contract,
                            tokenId: J.tokenId
                        }),
                        Fe = [{
                            tokenPair: {
                                token: J.tokenContract,
                                tokenId: J.tokenId,
                                amount: 1,
                                kind: I.Ez,
                                mintData: h.R
                            },
                            info: {
                                asset: ne,
                                creator: ke,
                                verified: ge.verified,
                                name: (0, W.G)(re, ge, J.tokenId),
                                networkId: je
                            }
                        }],
                        Te = {
                            twitter: ge.twitter && null !== (n = (0, Y.cv)(ge.twitter)) && void 0 !== n ? n : null
                        },
                        Re = (0, u.qY)({
                            defaultIsOpen: !0
                        }),
                        ze = (0, u.qY)(),
                        We = (0, j.rN)({
                            networkId: je,
                            sellOrder: Pe,
                            isOwner: Ne
                        }),
                        Ee = (0, q.Lx)({
                            suspicious: ee.suspicious || ge.suspicious,
                            listPriceChanged: We
                        }),
                        De = (0, Z.x)({
                            tokenContract: J.tokenContract,
                            tokenId: J.tokenId
                        }),
                        $e = 1 === ee.status || De,
                        Be = (0, j.hC)({
                            networkId: je,
                            offers: Ge
                        });
                    (0, l.useEffect)((function() {
                        "registered" === we._tag && 0 !== Be.size && (0, E.L)(we, Array.from(Be))
                    }), [we, Be]);
                    var Ye, Xe, Ve, He, Qe = (0, j.M)(null !== (o = ge.opensea_slug) && void 0 !== o ? o : null),
                        Ke = (0, j.ol)({
                            nftId: ee.id,
                            bundle: Fe,
                            sellOrder: Pe && "sell" === Pe.type ? Pe : null,
                            isOwner: Ne,
                            floorPrice: ie,
                            approveNftModal: pe
                        }),
                        Je = (0, I.wU)(ee.contract.contract, null !== (Ye = re.description) && void 0 !== Ye ? Ye : ""),
                        er = (0, U.L)(ge.contract),
                        rr = er.isInWhitelist,
                        nr = er.isCollectionOfferDisabled,
                        tr = function(e) {
                            var r = e.isInWhiteList,
                                n = e.isMarked,
                                a = e.bundle,
                                s = e.doesSupportSetTerm,
                                o = (0, i.$G)().t,
                                c = a[0].tokenPair,
                                u = c.token,
                                m = c.tokenId,
                                f = u.toLowerCase(),
                                x = a[0].info.networkId,
                                p = (0, w.ZP)(r && !n && {
                                    key: C.XX,
                                    params: [{
                                        contract: f,
                                        token_id: m
                                    }]
                                }, (function(e) {
                                    var r = e.params;
                                    return (0, S.kr)({
                                        extra: !0,
                                        q: r
                                    })
                                }), {
                                    onError: function(e) {
                                        return console.error(e)
                                    }
                                }),
                                h = p.data,
                                g = void 0 === h ? [] : h,
                                j = p.mutate,
                                Z = (0, l.useMemo)((function() {
                                    return g.length > 0 && g[0].collectionAddress && g[0].tokenId ? g[0] : null
                                }), [g]),
                                O = (0, v.dd)(b.D2),
                                L = (0, N.eX)().requireRegisteredUser,
                                M = (0, l.useCallback)((function() {
                                    L((function(e) {
                                        return (0, P._)(e, x, (function() {
                                            return O.onOpen((0, d.Z)((0, t.Z)({
                                                user: e,
                                                bundle: a,
                                                doesSupportSetTerm: s
                                            }, Z && {
                                                termInfo: Z
                                            }), {
                                                onSuccess: j
                                            }))
                                        }), (0, P.V)(o))
                                    }))
                                }), [a, s, O, j, x, L, o, Z]);
                            return {
                                termInfo: Z,
                                onSetTerms: M,
                                onCancelTerms: function(e) {
                                    return L((function(r) {
                                        return (0, P._)(r, x, (0, y.Z)((function() {
                                            var n, t;
                                            return (0, k.__generator)(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        e(!0), a.label = 1;
                                                    case 1:
                                                        return a.trys.push([1, 3, , 4]), [4, (0, S.n4)(r, {
                                                            contract: f,
                                                            token_id: m
                                                        })];
                                                    case 2:
                                                        return a.sent(), j(), [3, 4];
                                                    case 3:
                                                        return n = a.sent(), "string" === typeof(t = (0, I.e$)(o, n)) ? (0, _.Z)({
                                                            status: "error",
                                                            title: t
                                                        }) : (console.error(n), (0, _.Z)({
                                                            status: "error",
                                                            title: o("Something's wrong")
                                                        })), e(!1), [3, 4];
                                                    case 4:
                                                        return [2]
                                                }
                                            }))
                                        })), (0, P.V)(o))
                                    }))
                                },
                                setTermsModalComponent: O.component
                            }
                        }({
                            isInWhiteList: rr,
                            isMarked: $e,
                            bundle: Fe,
                            doesSupportSetTerm: (0, U.n)(ge.contract, J.tokenId).doesSupportSetTerm
                        }),
                        sr = tr.termInfo,
                        ir = tr.onSetTerms,
                        cr = tr.onCancelTerms,
                        lr = tr.setTermsModalComponent,
                        dr = (0, l.useRef)(null),
                        ur = (0, l.useCallback)((function() {
                            dr.current && window.scrollTo({
                                top: window.scrollY + dr.current.getBoundingClientRect().top - 90,
                                behavior: "smooth"
                            })
                        }), []),
                        mr = (0, L.Wr)(ee.owner, (0, S.ny)(je)),
                        fr = (0, l.useMemo)((function() {
                            return [J.tokenContract]
                        }), [J]),
                        xr = null === (r = (0, j.zy)({
                            isActive: !0,
                            user: L.Wi,
                            networkId: je,
                            contracts: fr
                        }).paymentInfo) || void 0 === r ? void 0 : r[J.tokenContract],
                        pr = (0, ve.I2)(null !== (Xe = null === xr || void 0 === xr ? void 0 : xr.royalty_fee_rate) && void 0 !== Xe ? Xe : 0),
                        hr = (0, B.C)(ge.info);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: (0, p.Z)("mx-auto w-full max-w-[1376px]", 'grid grid-cols-[minmax(0,1fr)] grid-rows-[min-content,1fr] [grid-template-areas:"A"_"B"_"C"]', 'lg:grid-cols-[minmax(0,480px),minmax(0,1fr)] lg:[grid-template-areas:"A_B"_"C_B"]'),
                            children: [(0, a.jsxs)("header", {
                                className: "space-y-2 p-6 [grid-area:A] lg:space-y-3 lg:px-8 lg:pt-12 lg:pb-8",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [(0, a.jsx)(g.Z, {
                                        hoverStyle: "opacity",
                                        "aria-label": fe("Back"),
                                        onClick: function() {
                                            return xe.back()
                                        },
                                        href: ye,
                                        children: (0, a.jsx)(O.SUf, {
                                            className: "h-6 w-6"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex min-w-0 items-center space-x-2",
                                        children: [ge.icon_url && ge.verified && (0, a.jsx)(m.Ee, {
                                            className: "h-6 w-6 rounded-full",
                                            src: (0, M.VB)(ge.icon_url, 128),
                                            alt: ke
                                        }), (0, a.jsx)(g.Z, {
                                            className: "body-2 lg:body-1 truncate break-all",
                                            href: ye,
                                            children: ke
                                        }), (0, a.jsx)(X.t, (0, t.Z)({
                                            className: "!h-6 !w-6",
                                            hasLink: !0
                                        }, ue))]
                                    })]
                                }), (0, a.jsxs)("h1", {
                                    className: "ts-headline-5 lg:ts-headline-3 line-clamp-3",
                                    children: [ae, Je && (0, a.jsx)(f.u, {
                                        label: Je,
                                        placement: "top",
                                        hasArrow: !0,
                                        children: (0, a.jsx)(O.Rrw, {
                                            className: "ml-2 inline h-6 w-6 text-secondary-3 lg:h-10 lg:w-10"
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "ts-body-3 lg:ts-body-2 flex items-center space-x-6 text-gray-500",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex flex-1 items-center",
                                        children: [(0, a.jsx)("p", {
                                            children: (0, a.jsxs)(i.cC, {
                                                t: fe,
                                                children: ["Owned by", " ", (0, a.jsx)(K.m, {
                                                    className: "text-gray-800",
                                                    networkId: je,
                                                    address: ee.owner,
                                                    nickname: te.nickname
                                                })]
                                            })
                                        }), te.verified && (0, a.jsx)(Q.Z, {
                                            boxSize: 5,
                                            ml: .5,
                                            pb: .5
                                        }), !Ne && (0, a.jsx)(f.u, {
                                            label: fe("Send a direct message to owner via Blockscan Chat"),
                                            placement: "top",
                                            hasArrow: !0,
                                            children: (0, a.jsx)("a", {
                                                href: "https://chat.blockscan.com/index?a=".concat(ee.owner),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "p-2 text-gray-700 hover:text-gray-500",
                                                children: (0, a.jsx)(O.CR7, {
                                                    className: "h-4 w-4"
                                                })
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center space-x-6",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex min-w-0 items-center space-x-2",
                                            children: [(0, a.jsx)(O.m9i, {
                                                className: "h-3 w-3 lg:h-4 lg:w-4"
                                            }), (0, a.jsx)("p", {
                                                className: "truncate",
                                                children: (0, T.tX)(Ie)
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex min-w-0 items-center space-x-2",
                                            children: [(0, a.jsx)(O.xNu, {
                                                className: "h-3 w-3 lg:h-4 lg:w-4"
                                            }), (0, a.jsx)("p", {
                                                className: "truncate",
                                                children: (0, T.tX)(de)
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsx)(Cr, {
                                    tokenContract: J.tokenContract,
                                    tokenId: J.tokenId,
                                    rarity: ge.show_rarity && ee.rank && ce ? {
                                        rank: ee.rank,
                                        meta: ce
                                    } : null
                                }), $e && (0, a.jsx)("div", {
                                    className: "flex",
                                    children: (0, a.jsx)(he.C6, {})
                                })]
                            }), (0, a.jsx)("section", {
                                className: "border-gray-300 [grid-area:B] lg:space-y-8 lg:border-l lg:bg-modal-bg lg:py-16",
                                children: (0, a.jsxs)("div", {
                                    className: "sticky top-36 space-y-6",
                                    children: [(0, a.jsx)(yr, {
                                        className: "mx-auto max-w-[640px]",
                                        imageProps: Ae,
                                        muted: Re.isOpen,
                                        isSuspicious: ee.suspicious || ge.suspicious
                                    }), (0, a.jsx)(q.o8, {
                                        className: "mx-auto w-[min-content]",
                                        nftId: ee.id,
                                        meta: re,
                                        likes: Ie,
                                        setLikes: _e,
                                        muteDisclosure: "video" === Ae.srcType ? Re : void 0,
                                        galleryDisclosure: ze,
                                        isOwnerInDb: !!be && (0, L.Wr)(se, be),
                                        onChangePrice: Ke.onChangePrice,
                                        onSend: Ke.onSend,
                                        onRefreshMetadata: Ke.onRefreshMetadata,
                                        onReport: Ke.onReport
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "space-y-6 p-6 [grid-area:C] lg:space-y-8 lg:px-8 lg:pt-0",
                                children: [F.Lk && mr ? (0, a.jsx)(qe, (0, d.Z)((0, t.Z)({}, J), {
                                    networkId: je
                                })) : (0, a.jsx)(Ue, {
                                    bundle: Fe,
                                    contract: ge,
                                    meta: re,
                                    isOwner: Ne,
                                    ownerOnChain: oe,
                                    lastPrice: Se,
                                    floorPrice: ie,
                                    osFloorPrice: Qe,
                                    feeRate: pr,
                                    contractMeta: Te,
                                    approveNftModal: pe,
                                    showTermsGuide: !mr && rr && !$e && null === sr,
                                    onSetTerms: ir,
                                    onScrollIntoLoans: ur,
                                    data: Pe ? {
                                        tag: "buy",
                                        orderId: Pe.id,
                                        price: (0, A.tG)(je, Pe),
                                        currency: Pe.currency,
                                        endAt: Pe.end_at ? new Date(Pe.end_at) : null,
                                        isPrivate: Pe.is_private,
                                        taker: null !== (Ve = Pe.taker) && void 0 !== Ve ? Ve : null,
                                        royaltyFee: Pe.royalty_fee
                                    } : Ne ? {
                                        tag: "sell"
                                    } : {
                                        tag: "offer"
                                    },
                                    owner: ee.owner,
                                    onChangePrice: Ke.onChangePrice,
                                    onSend: Ke.onSend,
                                    setNeedPreloadOffers: Le
                                }), !mr && sr && !$e && (0, a.jsx)(or, {
                                    isOwner: Ne,
                                    bundle: Fe,
                                    owner: ee.owner,
                                    onScrollIntoLoans: ur,
                                    termInfo: sr,
                                    onSetTerms: ir,
                                    onCancelTerms: cr
                                }), (0, a.jsx)(kr.Y, {
                                    offers: Me,
                                    bundle: Fe,
                                    isOwner: Ne,
                                    owner: ee.owner,
                                    sellOrder: Pe,
                                    invalidOfferIds: Be,
                                    showWarning: $e,
                                    floorPrice: ie,
                                    osFloorPrice: Qe,
                                    setLoadOffers: Le
                                }), (0, a.jsx)("div", {
                                    className: "space-y-3",
                                    children: (0, a.jsxs)(x.O.Group, {
                                        children: [(0, a.jsxs)(H.t, {
                                            children: [(0, a.jsx)(H.Y, {
                                                children: fe("Properties")
                                            }), (0, a.jsx)(H.Y, {
                                                children: fe("Description")
                                            }), (0, a.jsx)(H.Y, {
                                                children: fe("Info")
                                            })]
                                        }), (0, a.jsxs)(x.O.Panels, {
                                            children: [(0, a.jsx)(x.O.Panel, {
                                                children: (0, a.jsx)(Ir.p0, {
                                                    meta: re,
                                                    esMapping: le,
                                                    contract: ge,
                                                    rarity: ge.show_rarity && ee.rank && ce ? {
                                                        rank: ee.rank,
                                                        meta: ce
                                                    } : null
                                                })
                                            }), (0, a.jsxs)(x.O.Panel, {
                                                children: [(0, a.jsx)(jr.d, {
                                                    text: re.description
                                                }), (0, a.jsx)($.a, {
                                                    contract: ge,
                                                    info: hr,
                                                    contractName: ke,
                                                    networkId: je,
                                                    tokenContract: J.tokenContract,
                                                    floorPrice: ie,
                                                    osFloorPrice: Qe,
                                                    inDetailPage: !0
                                                })]
                                            }), (0, a.jsx)(x.O.Panel, {
                                                children: (0, a.jsx)(Ir.p8, {
                                                    networkId: je,
                                                    tokenKind: I.Ez,
                                                    tokenContract: J.tokenContract,
                                                    tokenId: J.tokenId,
                                                    tokenUri: ee.tokenUri,
                                                    feeRate: pr
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, a.jsx)(gr, {
                            nft: (0, l.useMemo)((function() {
                                return (0, d.Z)((0, t.Z)({}, ee), {
                                    network_id: ee.contract.network_id,
                                    nft_contract: J.tokenContract.toLowerCase(),
                                    token_id: J.tokenId,
                                    metadata: {
                                        meta: re
                                    }
                                })
                            }), [ee, J, re]),
                            contract: ee.contract
                        }), rr && (0, a.jsx)(ar, {
                            ref: dr,
                            showWarning: $e,
                            isCollectionOfferDisabled: nr,
                            bundle: Fe,
                            collectionIcon: null !== (He = ge.icon_url) && void 0 !== He ? He : null,
                            isOwner: Ne,
                            owner: ee.owner,
                            onSetTerms: ir
                        }), (0, a.jsx)(q.hJ, {
                            disclosure: ze,
                            imageProps: Ae,
                            muted: Re.isOpen
                        }), pe.component, Ee.component, Ke.component, lr]
                    })
                },
                Sr = n(27364),
                Pr = n(34048),
                Zr = n(27001),
                Or = (0, ye.pipe)(Zr.array(Zr.struct({
                    type: Zr.string,
                    es_key: Zr.string,
                    name: Zr.string
                })), Zr.map(pr.DZ((function(e) {
                    return (0, ye.pipe)(Zr.union(Zr.literal("text"), Zr.literal("double"), Zr.literal("date")).decode(e.type), R.Uo, R.UI((function(r) {
                        return (0, d.Z)((0, t.Z)({}, e), {
                            type: r
                        })
                    })))
                })))),
                Lr = n(30365),
                Mr = n(23351),
                Gr = n(86088),
                Ar = n(16869),
                Fr = n(76913),
                Tr = n(76875),
                Rr = n(28989),
                zr = function(e) {
                    return e > 1 ? e - 1 : 0
                },
                Ur = function(e) {
                    var r = e.className,
                        n = e.nftId,
                        t = e.meta,
                        s = e.setLikes,
                        c = e.onSend,
                        d = e.onRefreshMetadata,
                        u = e.onReport,
                        m = e.mute,
                        x = (0, i.$G)().t,
                        h = function(e) {
                            var r, n = e.nftId,
                                t = e.user,
                                a = e.setLikes,
                                s = (0, i.$G)().t,
                                c = (0, l.useMemo)((function() {
                                    return "anonymous" !== t._tag && n ? R.G((0, o.zG)(ne.FT({
                                        nftId: n,
                                        userId: t.meta.id
                                    }), Ne.UI((function(e) {
                                        return pr.Od(e.user_like_nft)
                                    })))) : R.YP
                                }), [t, n]),
                                d = (0, ke.Z)((0, Ce.Z)(c), 2),
                                u = d[0],
                                m = d[1],
                                f = null !== (r = z.FS(u)) && void 0 !== r && r,
                                x = (0, l.useState)(!1),
                                p = x[0],
                                h = x[1],
                                g = (0, N.eX)().requireRegisteredUser;
                            return {
                                isLike: f,
                                isLoading: p || z.zR(u),
                                onToggle: function() {
                                    n && g(function() {
                                        var e = (0, y.Z)((function(e) {
                                            var r, t, i;
                                            return (0, k.__generator)(this, (function(c) {
                                                switch (c.label) {
                                                    case 0:
                                                        return h(!0), f ? [4, (0, I.U$)(e.token, n)] : [3, 2];
                                                    case 1:
                                                        return t = c.sent(), [3, 4];
                                                    case 2:
                                                        return [4, (0, I.Lj)(e.token, n)];
                                                    case 3:
                                                        t = c.sent(), c.label = 4;
                                                    case 4:
                                                        return (r = t) ? (0, _.Z)({
                                                            status: "error",
                                                            title: null !== (i = (0, I.Qj)(s)[r]) && void 0 !== i ? i : r
                                                        }) : (m(), a(f ? zr : o.nP)), h(!1), [2]
                                                }
                                            }))
                                        }));
                                        return function(r) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }
                            }
                        }({
                            nftId: n,
                            user: (0, N.aF)(),
                            setLikes: s
                        }),
                        g = t.external_url,
                        v = [g ? {
                            title: x("Open external URL"),
                            icon: O.sf7,
                            onClick: function(e) {
                                window.open(g, "_blank"), e()
                            }
                        } : null, {
                            className: "GA-report",
                            title: x("Report"),
                            icon: O.g7S,
                            onClick: u
                        }].filter(br.C),
                        j = function() {
                            var e = (0, y.Z)((function() {
                                var e;
                                return (0, k.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!navigator.share) return [3, 5];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, navigator.share({
                                                title: document.title,
                                                url: window.location.href
                                            })];
                                        case 2:
                                            return r.sent(), [3, 4];
                                        case 3:
                                            return e = r.sent(), console.log(e), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            ! function(e, r) {
                                                var n = new URL(e);
                                                n.searchParams.append("text", document.title), n.searchParams.append("url", window.location.href), r && Object.entries(r).forEach((function(e) {
                                                    var r = (0, ke.Z)(e, 2),
                                                        t = r[0],
                                                        a = r[1];
                                                    n.searchParams.append(t, a)
                                                })), window.open(n.toString())
                                            }("https://twitter.com/intent/tweet"), r.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        w = [{
                            className: "GA-share",
                            title: x("Share"),
                            icon: O.sf7,
                            onClick: j
                        }, {
                            className: (0, p.Z)(h.isLike ? "text-primary-3" : "GA-like"),
                            title: h.isLike ? x("Liked") : x("Like"),
                            icon: h.isLike ? O.m9i : O.L75,
                            isLoading: h.isLoading,
                            onClick: h.onToggle
                        }, c ? {
                            className: "GA-transfer-icon",
                            title: x("Send token"),
                            icon: O.Amq,
                            onClick: c
                        } : null, m ? {
                            title: m.isMuted ? x("Unmute") : x("Mute"),
                            icon: m.isMuted ? O.IM6 : O.nvr,
                            onClick: function() {
                                return m.setMuted((function(e) {
                                    return !e
                                }))
                            }
                        } : null, {
                            className: "GA-refresh-metadata",
                            title: x("Refresh metadata"),
                            icon: O.r6_,
                            onClick: function() {
                                return d((function() {}))
                            }
                        }].filter(br.C),
                        b = (0, q.$Q)((0, a.jsx)(Rr.h, {
                            className: "h-9 w-9 sm:h-12 sm:w-12 md:h-9 md:w-9 lg:h-12 lg:w-12",
                            variant: "toolbar",
                            icon: (0, a.jsx)(O.kkd, {
                                className: "h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 lg:h-6 lg:w-6"
                            }),
                            "aria-label": x("more"),
                            isDisabled: 0 === v.length
                        }), v);
                    return (0, a.jsxs)("div", {
                        className: (0, p.Z)(r, "flex space-x-4 rounded-xl border border-gray-300 bg-bg px-3 py-2 lg:space-x-6 lg:px-4 lg:py-3"),
                        children: [w.map((function(e, r) {
                            return (0, a.jsx)(f.u, {
                                label: e.title,
                                placement: "top",
                                hasArrow: !0,
                                shouldWrapChildren: e.isDisabled,
                                children: (0, a.jsx)(Rr.h, {
                                    className: (0, p.Z)(e.className, "h-9 w-9 sm:h-12 sm:w-12 md:h-9 md:w-9 lg:h-12 lg:w-12"),
                                    variant: "toolbar",
                                    icon: (0, a.jsx)(e.icon, {
                                        className: "h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 lg:h-6 lg:w-6"
                                    }),
                                    "aria-label": e.title,
                                    isLoading: e.isLoading,
                                    isDisabled: e.isDisabled,
                                    onClick: e.onClick
                                })
                            }, r)
                        })), b]
                    })
                },
                Wr = function(e) {
                    var r, n, u, f, w, b, C = e.nft,
                        _ = e.viewCount,
                        S = e.timestamp,
                        P = (0, i.$G)().t,
                        F = (0, c.useRouter)(),
                        U = (0, je.ZP)().rates,
                        E = (0, v.dd)(ve.VD),
                        V = (0, v.dd)(ve.zY),
                        Q = (0, v.dd)(ve.km),
                        K = C.contract,
                        ee = C.tokenId,
                        re = K.network_id,
                        ne = K.contract,
                        te = K.es_mapping,
                        ae = (0, D.PQ)(K),
                        se = (0, G.E0)(K),
                        oe = {
                            contract: K.contract,
                            x2y2: {
                                verified: K.verified
                            },
                            goPlus: null
                        },
                        ie = (0, l.useMemo)((function() {
                            var e;
                            return (0, Mr.PK)(null === (e = C.metadata) || void 0 === e ? void 0 : e.meta)
                        }), [C]),
                        ce = (0, Mr.YZ)(ie, C.contract.display_options),
                        le = ie.name || "".concat(se, " #").concat(ee),
                        de = (0, d.Z)((0, t.Z)({}, (0, Fr.KO)(ce, "detailed")), {
                            tokenAddress: ne,
                            tokenId: ee
                        }),
                        ue = C.last_price ? {
                            value: (0, A.tG)(re, {
                                price: C.last_price,
                                currency: s.d
                            }),
                            currency: s.d
                        } : null,
                        me = (0, o.zG)(Zr.record(Zr.number).decode(null === (r = K.stats) || void 0 === r ? void 0 : r.floor_price), Lr.fS((function() {
                            return {}
                        })), (function(e) {
                            return (0, G.TR)(e, U, re)
                        })),
                        fe = (0, j.M)(null !== (w = K.opensea_slug) && void 0 !== w ? w : null),
                        xe = null !== (b = (0, o.zG)(Or.decode(te), R.Uo, R.WG)) && void 0 !== b ? b : [],
                        pe = (0, l.useState)(0),
                        ge = pe[0],
                        ye = pe[1],
                        ke = (0, l.useState)(C.likes_count),
                        we = ke[0],
                        be = ke[1],
                        Ne = (0, l.useState)(!0),
                        Ce = Ne[0],
                        Ie = Ne[1],
                        _e = (0, l.useState)(0),
                        Se = _e[0],
                        Pe = _e[1],
                        Ze = (0, N.aC)().user;
                    (0, l.useEffect)((function() {
                        if ((0, L.lt)(Ze)) {
                            var e = function() {
                                var e = (0, y.Z)((function() {
                                    var e, r, n, t;
                                    return (0, k.__generator)(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return a.trys.push([0, 2, , 3]), e = (0, Ar.TI)(re), r = Ze.meta.address, [4, (0, I.d8)(e, ne, ee, r)];
                                            case 1:
                                                return n = a.sent(), Pe(n.toNumber()), [3, 3];
                                            case 2:
                                                return t = a.sent(), console.error(t), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                            e()
                        }
                    }), [re, ne, ee, Ze]);
                    var Oe, Le = (0, Ir.Jn)({
                            nftId: C.id,
                            nonce: S
                        }),
                        Me = null !== (Oe = null === (n = z.WG(Le)) || void 0 === n ? void 0 : n[0]) && void 0 !== Oe ? Oe : null,
                        Ge = (0, l.useState)(!1),
                        Ae = Ge[0],
                        Fe = Ge[1];
                    (0, l.useEffect)((function() {
                        z.d6(Le) && (Le.value.length > 0 || Fe(!0))
                    }), [Le]);
                    var Te = (0, Ir.F1)({
                            nftId: C.id,
                            load: Ae,
                            nonce: S
                        }),
                        Re = (0, l.useMemo)((function() {
                            return z.d6(Te) ? Te.value : null
                        }), [Te]),
                        ze = (0, j.hC)({
                            networkId: re,
                            offers: Re
                        });
                    (0, j.rN)({
                        networkId: re,
                        sellOrder: Me ? (0, d.Z)((0, t.Z)({}, Me), {
                            type: "sell"
                        }) : null,
                        isOwner: !1
                    });
                    var Ue, We, Ee, $e = (0, q.Lx)({
                            suspicious: C.suspicious || K.suspicious,
                            listPriceChanged: null
                        }),
                        Be = (0, Z.x)({
                            tokenContract: ne,
                            tokenId: ee
                        }),
                        Ye = 1 === C.status || Be,
                        Xe = [{
                            tokenPair: {
                                token: ne,
                                tokenId: ee,
                                amount: 1,
                                kind: I.GZ,
                                mintData: h.R
                            },
                            info: {
                                asset: ce,
                                creator: (0, G.E0)(K),
                                verified: K.verified,
                                name: (0, W.G)(ie, K, ee),
                                networkId: re
                            },
                            meta: ie
                        }],
                        qe = {
                            twitter: K.twitter && null !== (Ue = (0, Y.cv)(K.twitter)) && void 0 !== Ue ? Ue : null
                        },
                        Ve = (0, j.Mr)({
                            nftId: C.id,
                            bundle: Xe,
                            balance: Se,
                            approveNftModal: E
                        }),
                        He = (0, Gr.n)([ie.description && ie.description.length > 0 ? ie.description : null, ie.attributes && ie.attributes.length > 0 ? ie.attributes.map((function(e) {
                            var r = e.trait_type,
                                n = e.value;
                            return "".concat((0, Mr.V2)(r), ": ").concat(n)
                        })).join(", ") : null].filter(br.C).join(P(". ")), 250),
                        Qe = (0, l.useMemo)((function() {
                            return [ne]
                        }), [ne]),
                        Ke = null === (u = (0, j.zy)({
                            isActive: !0,
                            user: L.Wi,
                            networkId: re,
                            contracts: Qe
                        }).paymentInfo) || void 0 === u ? void 0 : u[ne],
                        Je = (0, ve.I2)(null !== (We = null === Ke || void 0 === Ke ? void 0 : Ke.royalty_fee_rate) && void 0 !== We ? We : 0),
                        er = (0, B.C)(K.info);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(Tr.p, {
                            title: le,
                            description: He,
                            image: (0, o.zG)(ce, (function(e) {
                                var r = e.image,
                                    n = e.video;
                                return (0, o.zG)(R.ij(r), R.wp((function() {
                                    return (0, o.zG)(R.ij(n), R.UI((function(e) {
                                        return (0, Sr.Q)(e, 1440, "jpg")
                                    })))
                                })))
                            }), R.FS),
                            canonical: Pr.Z.siteUrl + F.asPath.split("?")[0]
                        }), (0, a.jsxs)("div", {
                            className: (0, p.Z)("mx-auto w-full max-w-[1376px]", 'grid grid-cols-[minmax(0,1fr)] grid-rows-[min-content,1fr] [grid-template-areas:"A"_"B"_"C"]', 'lg:grid-cols-[minmax(0,480px),minmax(0,1fr)] lg:[grid-template-areas:"A_B"_"C_B"]'),
                            children: [(0, a.jsxs)("header", {
                                className: "space-y-2 p-6 [grid-area:A] lg:space-y-3 lg:px-8 lg:pt-12 lg:pb-8",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [(0, a.jsx)(g.Z, {
                                        hoverStyle: "opacity",
                                        "aria-label": P("Back"),
                                        onClick: function() {
                                            return F.back()
                                        },
                                        href: ae,
                                        children: (0, a.jsx)(O.SUf, {
                                            className: "h-6 w-6"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex min-w-0 items-center space-x-2",
                                        children: [K.icon_url && K.verified && (0, a.jsx)(m.Ee, {
                                            className: "h-6 w-6 rounded-full",
                                            src: (0, M.VB)(K.icon_url, 128),
                                            alt: se
                                        }), (0, a.jsx)(g.Z, {
                                            className: "body-2 lg:body-1 truncate break-all",
                                            href: ae,
                                            children: se
                                        }), (0, a.jsx)(X.t, (0, t.Z)({
                                            className: "!h-6 !w-6",
                                            hasLink: !0
                                        }, oe))]
                                    })]
                                }), (0, a.jsx)("h1", {
                                    className: "ts-headline-5 lg:ts-headline-3 line-clamp-3",
                                    children: le
                                }), (0, a.jsxs)("div", {
                                    className: "ts-body-3 lg:ts-body-2 flex items-center space-x-6 text-gray-500",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex min-w-0 items-center space-x-2",
                                        children: [(0, a.jsx)(O.B1n, {
                                            className: "h-3 w-3 lg:h-4 lg:w-4"
                                        }), (0, a.jsx)("p", {
                                            className: "truncate",
                                            children: P("You own {{count}}", {
                                                count: Se
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex min-w-0 items-center space-x-2",
                                        children: [(0, a.jsx)(O.L75, {
                                            className: "h-3 w-3 lg:h-4 lg:w-4"
                                        }), (0, a.jsx)("p", {
                                            className: "truncate",
                                            children: (0, T.tX)(we)
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex min-w-0 items-center space-x-2",
                                        children: [(0, a.jsx)(O.xNu, {
                                            className: "h-3 w-3 lg:h-4 lg:w-4"
                                        }), (0, a.jsx)("p", {
                                            className: "truncate",
                                            children: (0, T.tX)(_)
                                        })]
                                    })]
                                }), Ye && (0, a.jsx)("div", {
                                    className: "flex",
                                    children: (0, a.jsx)(he.C6, {})
                                })]
                            }), (0, a.jsx)("section", {
                                className: "border-gray-300 [grid-area:B] lg:space-y-8 lg:border-l lg:bg-modal-bg lg:py-16",
                                children: (0, a.jsxs)("div", {
                                    className: "sticky top-36 space-y-6",
                                    children: [(0, a.jsx)(yr, {
                                        className: "mx-auto max-w-[640px]",
                                        imageProps: de,
                                        muted: Ce,
                                        isSuspicious: C.suspicious || K.suspicious
                                    }), (0, a.jsx)(Ur, {
                                        className: "mx-auto w-[min-content]",
                                        nftId: C.id,
                                        meta: ie,
                                        likes: we,
                                        setLikes: be,
                                        mute: "video" === de.srcType ? {
                                            isMuted: Ce,
                                            setMuted: Ie
                                        } : void 0,
                                        onSend: Ve.onSend,
                                        onRefreshMetadata: Ve.onRefreshMetadata,
                                        onReport: Ve.onReport
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "space-y-6 p-6 [grid-area:C] lg:space-y-8 lg:px-8 lg:pt-0",
                                children: [(0, a.jsx)(De, {
                                    bundle: Xe,
                                    sellOrder: Me,
                                    balance: Se,
                                    contract: K,
                                    meta: ie,
                                    floorPrice: me,
                                    osFloorPrice: fe,
                                    feeRate: Je,
                                    contractMeta: qe,
                                    lastPrice: ue,
                                    approveNftModal: E,
                                    buyModal: V,
                                    approveTokenModal: Q,
                                    onSend: Ve.onSend
                                }), (0, a.jsx)(kr.Y, {
                                    offers: Te,
                                    bundle: Xe,
                                    isOwner: Se > 0,
                                    owner: null,
                                    sellOrder: Me ? {
                                        id: Me.id,
                                        price: J.formatEther(Me.price),
                                        currency: Me.currency,
                                        maker: Me.maker.address
                                    } : null,
                                    invalidOfferIds: ze,
                                    showWarning: Ye,
                                    floorPrice: me,
                                    osFloorPrice: fe,
                                    setLoadOffers: Fe
                                }), (0, a.jsx)("div", {
                                    className: "space-y-3",
                                    children: (0, a.jsxs)(x.O.Group, {
                                        selectedIndex: ge,
                                        onChange: ye,
                                        children: [(0, a.jsxs)(H.t, {
                                            children: [(0, a.jsx)(H.Y, {
                                                children: P("Properties")
                                            }), (0, a.jsx)(H.Y, {
                                                children: P("Listings")
                                            }), (0, a.jsx)(H.Y, {
                                                children: P("Description")
                                            }), (0, a.jsx)(H.Y, {
                                                children: P("Info")
                                            })]
                                        }), (0, a.jsxs)(x.O.Panels, {
                                            children: [(0, a.jsx)(x.O.Panel, {
                                                children: (0, a.jsx)(Ir.p0, {
                                                    meta: ie,
                                                    esMapping: xe,
                                                    contract: K,
                                                    rarity: null
                                                })
                                            }), (0, a.jsx)(x.O.Panel, {
                                                children: (0, a.jsx)(Ir.ZJ, {
                                                    listings: Le,
                                                    bundle: Xe,
                                                    contractMeta: qe,
                                                    floorPrice: me,
                                                    buyModal: V,
                                                    approveTokenModal: Q
                                                })
                                            }), (0, a.jsxs)(x.O.Panel, {
                                                children: [(0, a.jsx)(jr.d, {
                                                    text: ie.description
                                                }), (0, a.jsx)($.a, {
                                                    contract: K,
                                                    info: er,
                                                    contractName: se,
                                                    networkId: re,
                                                    tokenContract: ne,
                                                    floorPrice: me,
                                                    osFloorPrice: fe,
                                                    inDetailPage: !0
                                                })]
                                            }), (0, a.jsx)(x.O.Panel, {
                                                children: (0, a.jsx)(Ir.p8, {
                                                    networkId: re,
                                                    tokenKind: I.GZ,
                                                    tokenContract: ne,
                                                    tokenId: ee,
                                                    tokenUri: null !== (Ee = null === (f = C.metadata) || void 0 === f ? void 0 : f.token_uri) && void 0 !== Ee ? Ee : null,
                                                    feeRate: Je
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, a.jsx)(gr, {
                            nft: (0, l.useMemo)((function() {
                                return (0, d.Z)((0, t.Z)({}, C), {
                                    network_id: re,
                                    nft_contract: ne,
                                    token_id: ee,
                                    metadata: {
                                        meta: ie
                                    }
                                })
                            }), [C, re, ne, ee, ie]),
                            contract: K
                        }), Ve.component, E.component, V.component, Q.component, $e.component]
                    })
                },
                Er = n(43788),
                Dr = function(e) {
                    var r, n = e.query,
                        t = e.data,
                        d = e.meta,
                        u = e.timestamp,
                        m = e.ownerMeta,
                        f = e.ownerInDb,
                        x = e.ownerOnChain,
                        p = e.esMapping,
                        h = e.viewCount,
                        g = e.goPlus,
                        v = (0, i.$G)().t,
                        j = (0, je.ZP)().rates,
                        y = (0, l.useMemo)((function() {
                            var e = (0, G.E0)(t.contract);
                            return d.name ? "".concat(d.name, " - ").concat(e) : "".concat(e, " #").concat(n.tokenId)
                        }), [n, t, d]),
                        k = (0, l.useMemo)((function() {
                            var e, r, n = [(0, o.zG)(R.ij(null !== (e = t.sellOrder[0]) && void 0 !== e ? e : t.last_price ? {
                                price: t.last_price,
                                currency: s.d
                            } : null), R.UI((function(e) {
                                var r = (0, se.L)(t.contract.network_id, e.currency).symbol;
                                return "".concat(e.price, " ").concat(r)
                            })), R.WG), d.description && d.description.length > 0 ? d.description : null, v("Owner: {{address}}", {
                                address: (0, T.P5)(t.owner)
                            }), (0, o.zG)((null !== (r = d.attributes) && void 0 !== r ? r : []).map((function(e) {
                                var r = e.trait_type,
                                    n = e.value;
                                return "".concat((0, Mr.V2)(r), ": ").concat(n)
                            })), te.nI, R.UI((function(e) {
                                return e.join(", ")
                            })), R.WG)].filter(br.C).join(v(". "));
                            return (0, Gr.n)(n, 250)
                        }), [v, t, d]),
                        w = (0, o.zG)(G.k9.decode(t.contract.rarity_meta), R.Uo, R.WG),
                        b = (0, Mr.YZ)(d, t.contract.display_options),
                        N = (0, o.zG)(Zr.record(Zr.number).decode(null === (r = t.contract.stats) || void 0 === r ? void 0 : r.floor_price), Lr.fS((function() {
                            return {}
                        })), (function(e) {
                            return (0, G.TR)(e, j, t.contract.network_id)
                        })),
                        C = [n.network, n.tokenContract, n.tokenId].join("-"),
                        I = (0, c.useRouter)();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(Tr.p, {
                            title: y,
                            description: k,
                            image: (0, o.zG)(b, (function(e) {
                                var r = e.image,
                                    n = e.video;
                                return (0, o.zG)(R.ij(r), R.wp((function() {
                                    return (0, o.zG)(R.ij(n), R.UI((function(e) {
                                        return (0, Sr.Q)(e, 1440, "jpg")
                                    })))
                                })))
                            }), R.FS),
                            canonical: Pr.Z.siteUrl + I.asPath.split("?")[0]
                        }), (0, a.jsx)(Er.kw, {
                            className: "pb-10",
                            children: (0, a.jsx)(_r, {
                                query: n,
                                data: t,
                                meta: d,
                                asset: b,
                                ownerMeta: m,
                                ownerOnChain: x,
                                title: d.name || "".concat((0, G.E0)(t.contract), " #").concat(n.tokenId),
                                ownerInDb: f,
                                floorPrice: N,
                                rarityMeta: w,
                                esMapping: p,
                                viewCount: h,
                                security: {
                                    contract: t.contract.contract,
                                    x2y2: {
                                        verified: t.contract.verified
                                    },
                                    goPlus: g
                                },
                                timestamp: u
                            }, C)
                        })]
                    })
                },
                $r = !0,
                Br = function(e) {
                    var r = e.query,
                        n = e.props;
                    return "erc1155" === n.type ? (0, a.jsx)(Er.kw, {
                        children: (0, a.jsx)(Wr, (0, t.Z)({}, n))
                    }) : (0, a.jsx)(Dr, (0, t.Z)({
                        query: r
                    }, n))
                }
        }
    },
    function(e) {
        e.O(0, [6826, 1577, 3638, 3788, 5539, 1425, 6088, 8973, 2447, 9774, 2888, 179], (function() {
            return r = 61145, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);
//# sourceMappingURL=[tokenId]-ee64b2910d2a5b73.js.map