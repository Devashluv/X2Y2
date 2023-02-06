(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4487], {
        6686: function(n, t, e) {
            "use strict";
            e.d(t, {
                Dj: function() {
                    return nn
                },
                f9: function() {
                    return J
                },
                _z: function() {
                    return Q
                },
                Kd: function() {
                    return tn
                }
            });
            var r = e(47568),
                o = e(26042),
                c = e(69396),
                a = e(20414),
                i = e(85893),
                u = e(92684),
                l = e(97375),
                s = e(86010),
                d = e(61744),
                f = e(57218),
                v = e(30902),
                p = e(23641),
                k = e(67294),
                m = e(36429),
                h = e(5936),
                _ = e(50826),
                y = e(86809),
                w = e.n(y),
                b = e(42474),
                g = e.n(b),
                C = e(48764).Buffer,
                P = "erugbzsd-bbfe-9783-zcy2-oiw9ey98vy85",
                I = function() {
                    var n = Math.floor(Date.now() / 1e3),
                        t = function(n) {
                            var t = ";&".concat(n % 2 !== 0 ? "#-" : "\u2013#o", ";"),
                                e = g().createHash("sha256"),
                                r = "".concat(P).concat(t).concat(n).concat(t);
                            return e.update(C.from(r)), e.digest("hex")
                        }(n);
                    return {
                        path: "/uniapi/ws/socket.io/",
                        transports: ["websocket"],
                        query: {
                            nonce: n,
                            api_key: P,
                            sig: t
                        },
                        timestampRequests: !0
                    }
                },
                T = null,
                S = 0,
                M = function(n) {
                    var t = (0, k.useState)(null),
                        e = t[0],
                        r = t[1];
                    return (0, k.useEffect)((function() {
                        if (n) {
                            var t = function() {
                                    var n;
                                    null === T && (T = w()(null !== (n = "https://api.x2y2.io") ? n : "", I())), S += 1;
                                    var t = !1;
                                    return {
                                        socket: T,
                                        release: function() {
                                            t || (0 === (S -= 1) && null !== T && (T.disconnect(), T = null), t = !0)
                                        }
                                    }
                                }(),
                                e = t.socket,
                                o = t.release;
                            return r(e), o
                        }
                        r(null)
                    }), [n]), e
                },
                E = "connect",
                G = "collection_transaction_pending",
                Z = function(n) {
                    var t = (0, k.useState)(new Set),
                        e = t[0],
                        r = t[1],
                        o = (0, k.useRef)({}),
                        c = (0, k.useCallback)((function(n) {
                            r((function(t) {
                                var e = parseInt(n.transfer.id).toString(),
                                    c = new Set(t);
                                return c.add(e),
                                    function(n) {
                                        o.current[n] && clearTimeout(o.current[n]), o.current[n] = setTimeout((function() {
                                            r((function(t) {
                                                var e = new Set(t);
                                                return e.delete(n), e
                                            })), delete o.current[n]
                                        }), 6e4)
                                    }(e), c
                            }))
                        }), []),
                        a = M(_.yd && null !== n),
                        i = (0, k.useCallback)((function() {
                            return null === a || void 0 === a ? void 0 : a.emit("subscribe_collection_transaction_pending", [n])
                        }), [a, n]);
                    return (0, k.useEffect)((function() {
                        if (_.yd && a) return a.on(G, c), a.connected && i(), a.on(E, i),
                            function() {
                                a.off(G, c), a.off(E, i)
                            }
                    }), [c, a, i, n]), {
                        tokensInPending: e
                    }
                },
                j = e(92212),
                x = e(83560),
                R = e(88886),
                z = e(30365),
                F = e(27001),
                O = e(87974),
                B = e(79948),
                D = e(89997),
                K = e(23351),
                Y = e(62),
                q = e(34895),
                N = e(41278),
                V = e(54765),
                A = e(93224),
                L = e(71325),
                U = e(16531),
                W = e(76913),
                $ = e(35539),
                X = e(11379),
                H = e(44560),
                J = function() {
                    var n = (0, r.Z)((function(n) {
                        var t, e;
                        return (0, a.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n ? [4, (0, Y.cE)(n)()] : [3, 2];
                                case 1:
                                    return e = r.sent(), [3, 3];
                                case 2:
                                    e = z.t$(null), r.label = 3;
                                case 3:
                                    return t = e, [2, z.tO(t) ? t.right : 0]
                            }
                        }))
                    }));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }(),
                Q = function(n, t, e) {
                    return (0, v.pipe)(F.record(F.number).decode(t), z.fS((function() {
                        return {}
                    })), (function(t) {
                        return (0, R.TR)(t, e, n)
                    }))
                },
                nn = k.memo((function(n) {
                    var t, e = n.pageType,
                        d = n.tokenContract,
                        f = n.items,
                        v = n.showFloorPrice,
                        _ = void 0 !== v && v,
                        y = n.showRarity,
                        w = void 0 !== y && y,
                        b = n.enableInstantBuy,
                        g = void 0 !== b && b,
                        C = n.enableAddToCart,
                        P = void 0 !== C && C,
                        I = n.enableClickToCart,
                        T = void 0 !== I && I,
                        S = n.onMouseEnter,
                        M = n.onMouseLeave,
                        E = (0, p.$G)().t,
                        G = (0, h.ZP)().rates,
                        z = null !== (t = (0, u.Sx)({
                            base: !1,
                            md: !0
                        })) && void 0 !== t && t,
                        F = Z("collectionItems" === e && null !== d && void 0 !== d ? d : null).tokensInPending,
                        O = (0, H.jD)(),
                        D = (0, j.eX)().requireRegisteredUser,
                        Y = (0, A.oS)(),
                        q = (0, m.dd)(U.zD),
                        L = (0, l.qY)(),
                        nn = (0, k.useState)(null),
                        en = nn[0],
                        rn = nn[1],
                        on = (0, m.dd)(U.km),
                        cn = tn(on),
                        an = cn.handlePressInstantBuy,
                        un = cn.buyModalComponent,
                        ln = (0, W.Y3)();
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            className: (0, s.Z)("grid w-full grid-cols-nft-compact gap-6", "normal" === Y.value.gridStyle ? "md:grid-cols-nft-normal" : "md:grid-cols-nft-compact"),
                            onMouseEnter: S,
                            onMouseLeave: M,
                            children: [f.map((function(n, t) {
                                return (0, i.jsx)(W.jw, {
                                    pageType: e,
                                    hasPendingTransactions: F.has(n.nft.token_id),
                                    cellWidth: ln.width,
                                    showRarity: w,
                                    contract: n.contract,
                                    nft: n.nft,
                                    order: n.order,
                                    popover: z ? n.popover : null,
                                    security: n.security,
                                    enableInstantBuy: g,
                                    onPressInstantBuy: function() {
                                        return an(n)
                                    },
                                    enableAddToCart: P,
                                    enableClickToCart: T,
                                    itemInCart: void 0 !== n.order && O.itemInCart(n.order.id),
                                    onPressAddToCart: function() {
                                        var t = (0, r.Z)((function(t) {
                                            var e;
                                            return (0, a.__generator)(this, (function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return (e = n.order) ? O.itemInCart(e.id) ? [3, 2] : (function(n) {
                                                            var t, e = n.order;
                                                            if (!e) throw new Error("There should be order here");
                                                            var r = {
                                                                id: e.id,
                                                                price: e.price,
                                                                currency: e.currency,
                                                                contract: n.contract.contract,
                                                                contractName: (0, R.E0)(n.contract),
                                                                contractVerified: n.contract.verified,
                                                                tokenId: n.nft.token_id,
                                                                tokenStandard: (0, N.fP)(n.contract.erc_type),
                                                                meta: (0, K.PK)(null === (t = n.nft.metadata) || void 0 === t ? void 0 : t.meta)
                                                            };
                                                            O.addItem(r)
                                                        }(n), [4, t()]) : [2];
                                                    case 1:
                                                        return r.sent(), O.animationSubject.next(void 0), [3, 3];
                                                    case 2:
                                                        O.removeItem(e.id), r.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(n) {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    onPressMakeOffer: function() {
                                        return function(n) {
                                            return D(function() {
                                                var t = (0, r.Z)((function(t) {
                                                    return (0, a.__generator)(this, (function(e) {
                                                        return [2, (0, V._)(t, n.contract.network_id, (0, r.Z)((function() {
                                                            var e, r, o, c, i, u, l, s;
                                                            return (0, a.__generator)(this, (function(a) {
                                                                switch (a.label) {
                                                                    case 0:
                                                                        return r = n.contract, o = r.network_id, (c = n.nft.owner) && (0, x.Wr)(t.meta.address, c) ? [2] : [4, J(null !== (i = n.contract.slug) && void 0 !== i ? i : null)];
                                                                    case 1:
                                                                        return u = a.sent(), l = Q(o, null === (e = n.contract.stats) || void 0 === e ? void 0 : e.floor_price, G), q.onOpen({
                                                                            user: t,
                                                                            bundle: (0, X.KK)([n]),
                                                                            sellOrder: null !== (s = n.order) && void 0 !== s ? s : null,
                                                                            floorPrice: l,
                                                                            osFloorPrice: u,
                                                                            approveTokenModal: on
                                                                        }), [2]
                                                                }
                                                            }))
                                                        })), (0, V.V)(E))]
                                                    }))
                                                }));
                                                return function(n) {
                                                    return t.apply(this, arguments)
                                                }
                                            }())
                                        }(n)
                                    },
                                    onPressMakeCollectionOffer: function() {
                                        return function(n) {
                                            return D((function(t) {
                                                return (0, V._)(t, n.contract.network_id, (0, r.Z)((function() {
                                                    var t, e, r, o, c, i, u, l;
                                                    return (0, a.__generator)(this, (function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                return e = n.contract, r = e.network_id, o = e.contract, [4, J(null !== (c = n.contract.slug) && void 0 !== c ? c : null)];
                                                            case 1:
                                                                return i = a.sent(), u = Q(r, null === (t = n.contract.stats) || void 0 === t ? void 0 : t.floor_price, G), rn({
                                                                    networkId: r,
                                                                    tokenKind: null !== (l = (0, R.Cs)(n.contract.erc_type)) && void 0 !== l ? l : B.Ez,
                                                                    tokenContract: o,
                                                                    contract: n.contract,
                                                                    itemCount: 0,
                                                                    osFloorPrice: i,
                                                                    floorPrice: u
                                                                }), L.onOpen(), [2]
                                                        }
                                                    }))
                                                })), (0, V.V)(E))
                                            }))
                                        }(n)
                                    },
                                    size: Y.value.gridStyle,
                                    showFloorPrice: _
                                }, t)
                            })), f.length > 0 && ln.component]
                        }), un, q.component, en && (0, i.jsx)($.Fv, (0, c.Z)((0, o.Z)({}, en), {
                            disclosure: L,
                            approveTokenModal: on
                        })), on.component]
                    })
                })),
                tn = function(n) {
                    var t = (0, p.$G)().t,
                        e = (0, j.eX)().requireRegisteredUser,
                        r = (0, m.dd)(U.zY);
                    return {
                        handlePressInstantBuy: (0, k.useCallback)((function(o) {
                            var c = o.order;
                            if (!c) throw new Error("There should be order here");
                            e((function(e) {
                                return (0, V._)(e, o.contract.network_id, (function() {
                                    var t = (0, v.pipe)(O.Do, O.ak("user", (function() {
                                        return O.G(e)
                                    })), O.ak("currency", (function() {
                                        return O.G(c.currency)
                                    })), O.ak("price", (function(n) {
                                        var t = n.currency,
                                            e = (0, q.L)(o.contract.network_id, t).decimals;
                                        return O.Y3((function() {
                                            return d.parseUnits(c.price, e)
                                        }))
                                    })), O.ak("royaltyFee", (function() {
                                        return O.G(c.royalty_fee)
                                    })), O.ak("isPrivate", (function() {
                                        return O.G(c.is_private)
                                    })), O.ak("orderId", (function() {
                                        return O.G(c.id)
                                    })), O.ak("bundle", (function() {
                                        var n, t, e, r, c = (0, R.Cs)(o.contract.erc_type);
                                        if (!c) return O.YP;
                                        var a = [{
                                            tokenPair: {
                                                token: o.contract.contract,
                                                tokenId: o.nft.token_id,
                                                amount: 1,
                                                kind: c,
                                                mintData: f.R
                                            },
                                            info: {
                                                asset: (0, K.YZ)(null === (n = o.nft.metadata) || void 0 === n ? void 0 : n.meta, o.contract.display_options),
                                                creator: (0, R.E0)(o.contract),
                                                verified: o.contract.verified,
                                                name: (0, D.G)((0, K.PK)(null === (t = o.nft.metadata) || void 0 === t ? void 0 : t.meta), o.contract, o.nft.token_id),
                                                networkId: o.contract.network_id
                                            },
                                            meta: null !== (r = null === (e = o.nft.metadata) || void 0 === e ? void 0 : e.meta) && void 0 !== r ? r : {}
                                        }];
                                        return O.G(a)
                                    })), O.ak("contractMeta", (function() {
                                        var n, t = o.contract.twitter;
                                        return O.G({
                                            twitter: t && null !== (n = (0, L.cv)(t)) && void 0 !== n ? n : null
                                        })
                                    })), O.ak("approveTokenModal", (function() {
                                        return O.G(n)
                                    })), O.WG);
                                    t && r.onOpen(t)
                                }), (0, V.V)(t))
                            }))
                        }), [n, r, e, t]),
                        buyModalComponent: r.component
                    }
                }
        },
        77020: function() {}
    }
]);
//# sourceMappingURL=4487-d05168b50e4bfbfa.js.map