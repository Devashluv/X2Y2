"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5539], {
        35539: function(e, n, r) {
            r.d(n, {
                qu: function() {
                    return w
                },
                De: function() {
                    return N
                },
                Fv: function() {
                    return T
                },
                hJ: function() {
                    return q
                },
                o8: function() {
                    return se
                },
                $Q: function() {
                    return oe
                },
                Lx: function() {
                    return pe
                }
            });
            var t = r(47568),
                i = r(828),
                o = r(20414),
                s = r(85893),
                l = r(33482),
                a = r(61744),
                c = r(23641),
                u = r(67294),
                d = r(68663),
                p = r(16531),
                f = r(91857),
                h = r(33128),
                x = r(36429),
                m = r(47190),
                g = r(24717),
                v = r(92212),
                k = r(83560),
                j = r(55967),
                b = r(79948),
                y = r(64286),
                C = r(79530),
                w = function(e) {
                    var n, r = e.disclosure,
                        w = e.user,
                        _ = e.bundle,
                        S = e.onDone,
                        Z = (0, c.$G)().t,
                        I = _[0].tokenPair,
                        N = I.token,
                        P = I.tokenId,
                        L = _[0].info.networkId,
                        O = (0, x.r$)(),
                        A = O.isLoading,
                        z = O.setLoading,
                        F = O.guardLoading,
                        U = (0, v.eX)().requireRegisteredUser,
                        G = (0, u.useMemo)((function() {
                            return Array.from(new Set(_.map((function(e) {
                                return e.tokenPair.token
                            }))))
                        }), [_]),
                        B = (0, m.zy)({
                            isActive: r.isOpen,
                            user: w,
                            networkId: L,
                            contracts: G
                        }).paymentInfo,
                        D = null === B || void 0 === B ? void 0 : B[N],
                        R = (0, m.pr)(),
                        $ = function() {
                            var e = (0, t.Z)((function(e) {
                                var n, t, i, l, c, u;
                                return (0, o.__generator)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            n = _[0].currency, z(!0), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), i = _.map((function(e) {
                                                var n;
                                                return {
                                                    tokens: [e.tokenPair],
                                                    price: a.parseEther(e.price),
                                                    royalty: null !== (t = null === B || void 0 === B || null === (n = B[e.tokenPair.token]) || void 0 === n ? void 0 : n.royalty_fee_rate) && void 0 !== t ? t : 0
                                                }
                                            })), l = R.value, [4, (0, b.Hk)({
                                                networkId: L,
                                                user: e,
                                                deadline: l,
                                                currency: n,
                                                items: i,
                                                isBundle: !1,
                                                bundleName: "",
                                                bundleDesc: "",
                                                isPrivate: !1,
                                                taker: ""
                                            })];
                                        case 2:
                                            return o.sent(), S(), z(!1), r.onClose(), (0, y.Z)({
                                                title: Z("Your item is ready"),
                                                status: "success"
                                            }), [3, 4];
                                        case 3:
                                            return c = o.sent(), console.error(c), z(!1), u = (0, b.e$)(Z, c), (0, y.Z)({
                                                status: "error",
                                                title: (0, s.jsx)(h.Z, {
                                                    user: e.web3Provider.getSigner(),
                                                    networkId: L,
                                                    tokenContract: N,
                                                    tokenId: P,
                                                    error: u
                                                })
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        M = D ? (0, p.I2)(D.market_fee_rate) : null;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)(l.u_, {
                            isOpen: r.isOpen,
                            onClose: F(r.onClose),
                            preserveScrollBarGap: !0,
                            children: [(0, s.jsx)(l.ZA, {}), (0, s.jsxs)(l.hz, {
                                mt: _.length > 2 ? 10 : _.length > 1 ? "100px" : "160px",
                                children: [(0, s.jsx)(l.xB, {
                                    children: Z("Bulk List")
                                }), (0, s.jsx)(f.o, {}), (0, s.jsx)("form", {
                                    onSubmit: function(e) {
                                        e.preventDefault(), U($)
                                    },
                                    children: (0, s.jsxs)(l.fe, {
                                        className: "flex flex-col space-y-6 lg:space-y-8",
                                        children: [(0, s.jsx)(C.M6, {
                                            bundle: _
                                        }), R.control, (0, s.jsx)(C.$w, {
                                            lines: [{
                                                label: Z("Market Fee"),
                                                tip: Z("Fee to X2Y2"),
                                                percent: M
                                            }, {
                                                label: Z("Creator Royalty"),
                                                tip: Z("Fee to the creator of the NFT"),
                                                percent: null,
                                                detail: B ? Object.entries(B).map((function(e) {
                                                    var r, t = (0, i.Z)(e, 2),
                                                        o = t[0],
                                                        s = t[1];
                                                    return {
                                                        label: null !== (n = null === (r = _.find((function(e) {
                                                            return (0, k.Wr)(e.tokenPair.token, o)
                                                        }))) || void 0 === r ? void 0 : r.info.creator) && void 0 !== n ? n : (0, j.P5)(o),
                                                        percent: (0, p.I2)(s.royalty_fee_rate)
                                                    }
                                                })) : void 0
                                            }]
                                        }), (0, s.jsx)(d.zx, {
                                            colorScheme: "primary-1",
                                            leftIcon: (0, s.jsx)(g.wUq, {
                                                className: "h-4 w-4"
                                            }),
                                            isLoading: A,
                                            type: "submit",
                                            children: Z("List")
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                _ = r(68527),
                S = r(26723),
                Z = r(59433),
                I = r(49296),
                N = function(e) {
                    var n = e.disclosure,
                        r = e.user,
                        i = e.bundle,
                        u = e.onDone,
                        d = (0, c.$G)().t,
                        p = i[0].tokenPair,
                        g = p.token,
                        v = p.tokenId,
                        k = i[0].info.networkId,
                        j = i[0].currency,
                        w = (0, x.r$)(),
                        N = w.isLoading,
                        P = w.setLoading,
                        L = w.guardLoading,
                        O = (0, m.pr)(),
                        A = function() {
                            var e = (0, t.Z)((function() {
                                var e, t, l, c;
                                return (0, o.__generator)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            P(!0), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), e = O.value, t = i.map((function(e) {
                                                return {
                                                    tokens: [e.tokenPair],
                                                    price: a.parseEther(e.price),
                                                    orderId: e.orderId
                                                }
                                            })), [4, (0, b.xV)({
                                                networkId: k,
                                                user: r,
                                                deadline: e,
                                                currency: j,
                                                items: t,
                                                isBundle: !1,
                                                isPrivate: !1,
                                                taker: ""
                                            })];
                                        case 2:
                                            return o.sent(), null === u || void 0 === u || u(), P(!1), n.onClose(), (0, y.Z)({
                                                title: d("The price is changed."),
                                                status: "success"
                                            }), [3, 4];
                                        case 3:
                                            return l = o.sent(), console.error(l), P(!1), c = (0, b.e$)(d, l), (0, y.Z)({
                                                status: "error",
                                                title: (0, s.jsx)(h.Z, {
                                                    user: r.web3Provider.getSigner(),
                                                    networkId: k,
                                                    tokenContract: g,
                                                    tokenId: v,
                                                    error: c
                                                })
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, s.jsxs)(l.u_, {
                        isOpen: n.isOpen,
                        onClose: L(n.onClose),
                        preserveScrollBarGap: !0,
                        children: [(0, s.jsx)(l.ZA, {}), (0, s.jsxs)(l.hz, {
                            mt: i.length > 2 ? 10 : i.length > 1 ? "100px" : "160px",
                            children: [(0, s.jsx)(l.xB, {
                                children: d("Change price")
                            }), (0, s.jsx)(f.o, {}), (0, s.jsx)(Z.J9, {
                                initialValues: {
                                    price: ""
                                },
                                onSubmit: function() {
                                    A()
                                },
                                children: (0, s.jsx)(Z.l0, {
                                    children: (0, s.jsxs)(l.fe, {
                                        as: _.Kq,
                                        spacing: [6, 8],
                                        children: [(0, s.jsx)(C.M6, {
                                            bundle: i
                                        }), O.control, (0, s.jsx)(I.Q6, {
                                            children: d("Changing the price of items will update their expiration date as well.")
                                        }), (0, s.jsx)(S.zx, {
                                            h: 12,
                                            colorScheme: "primary_1",
                                            isLoading: N,
                                            type: "submit",
                                            children: d("Update")
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                },
                P = r(26042),
                L = r(69396),
                O = r(34651),
                A = r(79762),
                z = r(47398),
                F = r(4612),
                U = r(9279),
                G = r(86365),
                B = r(40721),
                D = r(21645),
                R = r(51126),
                $ = r(24165),
                M = r(34895),
                T = function(e) {
                    var n, r, i = e.disclosure,
                        d = e.networkId,
                        g = e.tokenKind,
                        k = e.tokenContract,
                        j = e.contract,
                        w = e.itemCount,
                        N = e.floorPrice,
                        T = e.osFloorPrice,
                        E = e.approveTokenModal,
                        q = (0, c.$G)().t,
                        W = (0, x.dd)(p.PE),
                        Y = (0, u.useState)(null),
                        H = Y[0],
                        X = Y[1],
                        K = (0, M.L)(d, null !== H && void 0 !== H ? H : "").decimals,
                        Q = (0, x.r$)(),
                        V = Q.isLoading,
                        J = Q.setLoading,
                        ee = Q.guardLoading,
                        ne = Q.reloadPage,
                        re = (0, v.eX)().requireRegisteredUser,
                        te = (0, v.aC)().user,
                        ie = (0, u.useMemo)((function() {
                            return [k]
                        }), [k]),
                        oe = null === (n = (0, m.zy)({
                            isActive: i.isOpen,
                            user: te,
                            networkId: d,
                            contracts: ie
                        }).paymentInfo) || void 0 === n ? void 0 : n[k],
                        se = (0, u.useMemo)((function() {
                            return null !== (r = null === oe || void 0 === oe ? void 0 : oe.supported_tokens[b.rQ]) && void 0 !== r ? r : []
                        }), [oe]);
                    (0, u.useEffect)((function() {
                        var e;
                        0 !== se.length && X(null !== (e = se[0]) && void 0 !== e ? e : null)
                    }), [se]);
                    var le = (0, m.pr)(),
                        ae = N ? (0, C.ZH)(N, T) : null,
                        ce = function(e, n, r) {
                            return function() {
                                var l = (0, t.Z)((function(t) {
                                    var l, a, c, u;
                                    return (0, o.__generator)(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                if (!H) return [2];
                                                n(!0), o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 4, , 5]), l = le.value, a = k, [4, (0, b.b3)({
                                                    networkId: d,
                                                    user: t,
                                                    items: [{
                                                        tokens: [{
                                                            token: a,
                                                            tokenId: 0,
                                                            amount: 1,
                                                            kind: g
                                                        }],
                                                        price: e
                                                    }],
                                                    isCollection: !0,
                                                    isBundle: !1,
                                                    orderId: 0,
                                                    currency: H,
                                                    deadline: l
                                                })];
                                            case 2:
                                                return o.sent(), [4, ne()];
                                            case 3:
                                                return o.sent(), n(!1), null === r || void 0 === r || r(), i.onClose(), (0, y.Z)({
                                                    title: q("Your offer is made."),
                                                    status: "success"
                                                }), [3, 5];
                                            case 4:
                                                return c = o.sent(), console.error(c), n(!1), u = (0, b.e$)(q, c), (0, y.Z)({
                                                    status: "error",
                                                    title: (0, s.jsx)(h.Z, {
                                                        user: t.web3Provider.getSigner(),
                                                        networkId: d,
                                                        tokenContract: k,
                                                        tokenId: "0",
                                                        error: u
                                                    })
                                                }), [3, 5];
                                            case 5:
                                                return [2]
                                        }
                                    }))
                                }));
                                return function(e) {
                                    return l.apply(this, arguments)
                                }
                            }()
                        },
                        ue = q("Offer to collection");
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(l.u_, {
                            isOpen: i.isOpen,
                            onClose: ee(i.onClose),
                            isCentered: !0,
                            preserveScrollBarGap: !0,
                            children: [(0, s.jsx)(l.ZA, {}), (0, s.jsxs)(l.hz, {
                                children: [(0, s.jsx)(l.xB, {
                                    children: ue
                                }), (0, s.jsx)(f.o, {}), (0, s.jsx)(Z.J9, {
                                    initialValues: {
                                        price: ""
                                    },
                                    onSubmit: function(e) {
                                        if (H) {
                                            var n = a.parseUnits(e.price, K);
                                            re(H === U.d ? ce(n, J) : function(r) {
                                                var t = function() {
                                                    i.onClose(), E.onOpen({
                                                        provider: r.web3Provider,
                                                        networkId: d,
                                                        currency: H,
                                                        amount: n,
                                                        title: q("Make Collection Offer"),
                                                        subtitle: q("Complete signing"),
                                                        desc: q("Click the Sign button to create a collection offer."),
                                                        loadingText: q("Waiting for signature\u2026"),
                                                        stayWhenDone: !1,
                                                        actionText: q("Sign"),
                                                        onAction: function(e, r) {
                                                            return re(ce(n, e, r))
                                                        }
                                                    })
                                                };
                                                ae && parseFloat(e.price) > ae.value ? W.onOpen({
                                                    title: q("High Price Alert"),
                                                    desc: (0, s.jsx)(c.cC, {
                                                        t: q,
                                                        children: "The price you offered is higher than the collection\u2019s floor price, which means you could just buy from all listings. Are you sure to continue?"
                                                    }),
                                                    action: q("Continue"),
                                                    onContinue: t
                                                }) : t()
                                            })
                                        }
                                    },
                                    children: function(e) {
                                        var n = e.values;
                                        return (0, s.jsx)(Z.l0, {
                                            children: (0, s.jsxs)(l.fe, {
                                                as: _.Kq,
                                                spacing: [6, 8],
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex w-full min-w-0 items-center space-x-3",
                                                    children: [j.icon_url && j.verified && (0, s.jsx)(O.Ee, {
                                                        src: (0, R.VB)(j.icon_url, 128),
                                                        boxSize: 12,
                                                        rounded: "full",
                                                        alt: j.name
                                                    }), (0, s.jsxs)("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [(0, s.jsxs)("div", {
                                                            className: "flex items-center space-x-1",
                                                            children: [(0, s.jsx)("p", {
                                                                className: "ts-body-3 truncate break-all font-bold",
                                                                children: j.name
                                                            }), j.verified && (0, s.jsx)(D.SN$, {
                                                                color: "primary_1.500"
                                                            })]
                                                        }), (0, s.jsx)("p", {
                                                            className: "ts-caption-2 truncate break-all text-gray-500",
                                                            children: q("{{count}} items", {
                                                                count: w
                                                            })
                                                        })]
                                                    }), ae && (0, s.jsxs)("div", {
                                                        children: [(0, s.jsxs)("div", {
                                                            className: "flex items-center space-x-1",
                                                            children: [(0, s.jsx)(B.T, {
                                                                className: "h-4 w-4",
                                                                symbol: ae.symbol
                                                            }), (0, s.jsx)("p", {
                                                                className: "ts-body-2 font-bold",
                                                                children: ae.value
                                                            })]
                                                        }), (0, s.jsx)("p", {
                                                            className: "ts-caption-2 text-right text-gray-500",
                                                            children: q("Floor")
                                                        })]
                                                    })]
                                                }), (0, s.jsx)(Z.gN, {
                                                    name: "price",
                                                    validate: (0, $.ls)(q, K),
                                                    children: function(e) {
                                                        var r = e.field,
                                                            t = e.form.errors.price || (ae && parseFloat(n.price) > ae.value ? q("You can buy directly at the floor. Don't make a collection offer above the floor.") : null);
                                                        return (0, s.jsxs)(A.NI, {
                                                            id: "price",
                                                            isInvalid: !!t,
                                                            children: [(0, s.jsx)(I.lX, {
                                                                htmlFor: "price",
                                                                children: q("Price")
                                                            }), (0, s.jsxs)(_.Ug, {
                                                                spacing: 4,
                                                                children: [(0, s.jsx)(z.u, {
                                                                    isOpen: !!t,
                                                                    label: t,
                                                                    variant: "error",
                                                                    placement: "top",
                                                                    hasArrow: !0,
                                                                    children: (0, s.jsx)(F.II, (0, L.Z)((0, P.Z)({
                                                                        placeholder: "0.0"
                                                                    }, r), {
                                                                        isDisabled: 0 === se.length,
                                                                        autoComplete: "off"
                                                                    }))
                                                                }), (0, s.jsx)(G.Z, {
                                                                    buttonProps: {
                                                                        maxW: "100px",
                                                                        minH: 12
                                                                    },
                                                                    items: se.map((function(e) {
                                                                        return {
                                                                            key: e,
                                                                            title: (0, M.L)(d, e).symbol,
                                                                            value: e
                                                                        }
                                                                    })),
                                                                    value: null !== H && void 0 !== H ? H : "",
                                                                    onChange: X
                                                                })]
                                                            }), N && (0, s.jsx)(C.my, {
                                                                className: "mt-1",
                                                                floorPrice: N,
                                                                osFloorPrice: T
                                                            })]
                                                        })
                                                    }
                                                }), le.control, (0, s.jsx)(S.zx, {
                                                    h: 12,
                                                    colorScheme: "primary_1",
                                                    leftIcon: (0, s.jsx)(D.Q_s, {}),
                                                    iconSpacing: 3,
                                                    isLoading: V,
                                                    isDisabled: !!ae && parseFloat(n.price) > 1.5 * ae.value,
                                                    type: "submit",
                                                    children: ue
                                                })]
                                            })
                                        })
                                    }
                                })]
                            })]
                        }), W.component]
                    })
                },
                E = r(41677),
                q = function(e) {
                    var n = e.disclosure,
                        r = e.imageProps,
                        t = e.muted;
                    return (0, s.jsxs)(l.u_, {
                        preserveScrollBarGap: !0,
                        isOpen: n.isOpen,
                        onClose: n.onClose,
                        size: "full",
                        scrollBehavior: "inside",
                        motionPreset: "slideInBottom",
                        returnFocusOnClose: !1,
                        children: [(0, s.jsx)(l.ZA, {}), (0, s.jsxs)(l.hz, {
                            bg: "transparent",
                            pointerEvents: "none",
                            children: [(0, s.jsx)(l.ol, {
                                className: "pointer-events-auto z-10 text-gray-500",
                                boxSize: 12,
                                top: [4, 12],
                                right: [4, 12],
                                variant: "ghost",
                                _hover: {
                                    opacity: .5
                                },
                                children: (0, s.jsx)(g.OhS, {
                                    className: "h-8 w-8 lg:h-12 lg:w-12"
                                })
                            }), (0, s.jsx)(E.D, (0, L.Z)((0, P.Z)({
                                m: [0, null, 8],
                                h: ["100vh", null, "calc(100vh - 64px)"],
                                d: "flex",
                                objectFit: "contain",
                                sx: {
                                    "> div": {
                                        boxSize: "full",
                                        maxH: "full"
                                    }
                                }
                            }, r), {
                                muted: t,
                                videoAutoPlay: !0,
                                autoAspectRatio: !0,
                                skipVideoObjectFit: !0,
                                imageSizes: ["100vw"]
                            }))]
                        })]
                    })
                },
                W = r(20949),
                Y = r(86010),
                H = r(3735),
                X = r(89880),
                K = r(50027),
                Q = r(97338),
                V = r(87974),
                J = r(54767),
                ee = r(83962),
                ne = r(98316),
                re = r(30365),
                te = r(86269),
                ie = function(e) {
                    return e > 1 ? e - 1 : 0
                },
                oe = function(e, n) {
                    var r = (0, x._B)(),
                        t = (0, W.ff)("light_1", "dark_1");
                    return (0, K.Z)({
                        button: e,
                        body: function(e) {
                            var i = e.onClose;
                            return (0, s.jsx)(_.xu, {
                                minW: "296px",
                                rounded: "r12",
                                overflowY: "auto",
                                shadow: t,
                                children: (0, s.jsx)(_.kC, {
                                    minW: "240px",
                                    flexDir: "column",
                                    children: n.map((function(e, n) {
                                        return (0, s.jsx)(S.zx, {
                                            className: e.className,
                                            h: "52px",
                                            px: 4,
                                            justifyContent: "start",
                                            textStyle: "caption",
                                            fontWeight: "medium",
                                            _hover: {
                                                bg: r.modalSectionBg
                                            },
                                            _focus: {
                                                bg: r.modalSectionBg
                                            },
                                            variant: "ghost",
                                            iconSpacing: 2.5,
                                            leftIcon: (0, s.jsx)(e.icon, {
                                                className: "h-6 w-6"
                                            }),
                                            onClick: function() {
                                                return e.onClick(i)
                                            },
                                            children: e.title
                                        }, n)
                                    }))
                                })
                            })
                        },
                        gutter: 24,
                        hideArrow: !0,
                        placement: "top"
                    })
                },
                se = function(e) {
                    var n = e.className,
                        r = e.nftId,
                        l = e.meta,
                        a = e.setLikes,
                        d = e.muteDisclosure,
                        p = e.galleryDisclosure,
                        f = e.isOwnerInDb,
                        h = e.onChangePrice,
                        x = e.onSend,
                        m = e.onRefreshMetadata,
                        k = e.onReport,
                        j = (0, c.$G)().t,
                        C = (0, v.aF)(),
                        w = (0, v.aC)().reloadMeta,
                        _ = {
                            boxSize: [9, 12, 9, 12],
                            fontSize: ["xl", "2xl", "xl", "2xl"],
                            minW: "unset"
                        },
                        Z = function(e) {
                            var n, r = e.nftId,
                                s = e.user,
                                l = e.setLikes,
                                a = (0, c.$G)().t,
                                d = (0, u.useMemo)((function() {
                                    return "anonymous" !== s._tag && r ? V.G((0, H.zG)(Q.FT({
                                        nftId: r,
                                        userId: s.meta.id
                                    }), J.UI((function(e) {
                                        return ee.Od(e.user_like_nft)
                                    })))) : V.YP
                                }), [s, r]),
                                p = (0, i.Z)((0, X.Z)(d), 2),
                                f = p[0],
                                h = p[1],
                                x = null !== (n = ne.FS(f)) && void 0 !== n && n,
                                m = (0, u.useState)(!1),
                                g = m[0],
                                k = m[1],
                                j = (0, v.eX)().requireRegisteredUser;
                            return {
                                isLike: x,
                                isLoading: g || ne.zR(f),
                                onToggle: function() {
                                    r && j(function() {
                                        var e = (0, t.Z)((function(e) {
                                            var n, t, i;
                                            return (0, o.__generator)(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return k(!0), x ? [4, (0, b.U$)(e.token, r)] : [3, 2];
                                                    case 1:
                                                        return t = o.sent(), [3, 4];
                                                    case 2:
                                                        return [4, (0, b.Lj)(e.token, r)];
                                                    case 3:
                                                        t = o.sent(), o.label = 4;
                                                    case 4:
                                                        return (n = t) ? (0, y.Z)({
                                                            status: "error",
                                                            title: null !== (i = (0, b.Qj)(a)[n]) && void 0 !== i ? i : n
                                                        }) : (h(), l(x ? ie : H.nP)), k(!1), [2]
                                                }
                                            }))
                                        }));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }
                            }
                        }({
                            nftId: r,
                            user: C,
                            setLikes: a
                        }),
                        I = (0, v.eX)().requireRegisteredUser,
                        N = l.external_url,
                        O = [h ? {
                            title: j("Change price"),
                            icon: g.ebN,
                            onClick: h
                        } : null, {
                            className: "GA-full-screen",
                            title: j("Fullscreen"),
                            icon: g.lz9,
                            onClick: p.onOpen
                        }, N ? {
                            title: j("Open external URL"),
                            icon: g.sf7,
                            onClick: function(e) {
                                window.open(N, "_blank"), e()
                            }
                        } : null, {
                            className: "GA-report",
                            title: j("Report"),
                            icon: g.g7S,
                            onClick: k
                        }].filter(te.C),
                        A = function() {
                            var e = (0, t.Z)((function() {
                                var e;
                                return (0, o.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!navigator.share) return [3, 5];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, navigator.share({
                                                title: document.title,
                                                url: window.location.href
                                            })];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return e = n.sent(), console.log(e), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            ! function(e, n) {
                                                var r = new URL(e);
                                                r.searchParams.append("text", document.title), r.searchParams.append("url", window.location.href), n && Object.entries(n).forEach((function(e) {
                                                    var n = (0, i.Z)(e, 2),
                                                        t = n[0],
                                                        o = n[1];
                                                    r.searchParams.append(t, o)
                                                })), window.open(r.toString())
                                            }("https://twitter.com/intent/tweet"), n.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        F = [{
                            className: "GA-share",
                            title: j("Share"),
                            icon: D.sf7,
                            onClick: A
                        }, {
                            className: (0, Y.Z)(Z.isLike ? "text-primary-3" : "GA-like"),
                            title: Z.isLike ? j("Liked") : j("Like"),
                            icon: Z.isLike ? D.m9i : D.L75,
                            isLoading: Z.isLoading,
                            onClick: Z.onToggle
                        }, x ? {
                            className: "GA-transfer-icon",
                            title: j("Send token"),
                            icon: D.Amq,
                            onClick: x
                        } : null, d ? {
                            title: d.isOpen ? j("Unmute") : j("Mute"),
                            icon: d.isOpen ? D.IM6 : D.nvr,
                            onClick: d.onToggle
                        } : f ? {
                            className: "GA-set-as-avatar",
                            title: j("Set as my avatar"),
                            icon: D.fSU,
                            onClick: function() {
                                return I((e = function() {}, function() {
                                    var n = (0, t.Z)((function(n) {
                                        var t;
                                        return (0, o.__generator)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return e(), [4, Q.n1(r, n.token)()];
                                                case 1:
                                                    return t = i.sent(), re.nM(t) ? (console.error(t.left), (0, y.Z)({
                                                        status: "error",
                                                        title: j("Something's wrong")
                                                    })) : w(), [2]
                                            }
                                        }))
                                    }));
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }()));
                                var e
                            }
                        } : null, {
                            className: "GA-refresh-metadata",
                            title: j("Refresh metadata"),
                            icon: D.r6_,
                            onClick: function() {
                                return m((function() {}))
                            }
                        }].filter(te.C);
                    return (0, s.jsxs)("div", {
                        className: (0, Y.Z)(n, "flex space-x-4 rounded-xl border border-gray-300 bg-bg px-3 py-2 lg:space-x-6 lg:px-4 lg:py-3"),
                        children: [F.map((function(e, n) {
                            return (0, s.jsx)(z.u, {
                                label: e.title,
                                placement: "top",
                                hasArrow: !0,
                                children: (0, s.jsx)(S.hU, (0, L.Z)((0, P.Z)({}, _), {
                                    className: e.className,
                                    "aria-label": e.title,
                                    variant: "rounded-ghost",
                                    isRound: !0,
                                    icon: (0, s.jsx)(e.icon, {}),
                                    isLoading: e.isLoading,
                                    onClick: e.onClick
                                }))
                            }, n)
                        })), oe((0, s.jsx)(S.hU, (0, L.Z)((0, P.Z)({}, _), {
                            "aria-label": j("more"),
                            variant: "rounded-ghost",
                            isRound: !0,
                            icon: (0, s.jsx)(D.kkd, {}),
                            isDisabled: 0 === O.length
                        })), O)]
                    })
                },
                le = r(97375),
                ae = r(11163),
                ce = r(5936),
                ue = r(79737),
                de = function(e) {
                    var n = e.disclosure,
                        r = e.reason,
                        t = (0, c.$G)().t,
                        i = (0, ae.useRouter)(),
                        o = function() {
                            window.history.length > 1 ? i.back() : i.push(ue.Hl)
                        };
                    return (0, s.jsxs)(l.u_, {
                        preserveScrollBarGap: !0,
                        isOpen: n.isOpen,
                        onClose: o,
                        closeOnOverlayClick: !1,
                        closeOnEsc: !1,
                        isCentered: !0,
                        children: [(0, s.jsx)(l.ZA, {}), (0, s.jsxs)(l.hz, {
                            children: [(0, s.jsx)(f.o, {}), (0, s.jsxs)(l.fe, {
                                as: _.Kq,
                                spacing: [6, 8],
                                children: [(0, s.jsxs)(_.Kq, {
                                    pt: 10,
                                    spacing: 3,
                                    children: [(0, s.jsx)(_.xv, {
                                        textStyle: ["headline_3", "headline_2"],
                                        textAlign: "center",
                                        children: "suspicious" === r.type ? t("Possibly Scam") : t("Price Changed")
                                    }), (0, s.jsx)(_.xv, {
                                        textStyle: ["body_3", "body_2"],
                                        textAlign: "center",
                                        children: "suspicious" === r.type ? t("This item is flagged as inappropriate for selling or buying. Do you want to continue to view the page?") : t("The price of this NFT has been changed to {{price}} ({{priceUsd}}). Please be careful before you continue.", {
                                            price: r.price,
                                            priceUsd: r.priceUsd
                                        })
                                    })]
                                }), (0, s.jsxs)(_.Ug, {
                                    spacing: 2.5,
                                    children: [(0, s.jsx)(S.zx, {
                                        flex: 1,
                                        colorScheme: "primary_3",
                                        onClick: n.onClose,
                                        children: t("Continue")
                                    }), (0, s.jsx)(S.zx, {
                                        flex: 1,
                                        variant: "outline",
                                        onClick: o,
                                        children: t("Cancel")
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                pe = function(e) {
                    var n = e.suspicious,
                        r = e.listPriceChanged,
                        t = (0, le.qY)(),
                        i = t.onOpen,
                        o = t.onClose,
                        l = (0, u.useState)(n),
                        c = l[0],
                        d = l[1],
                        p = Boolean(r);
                    (0, u.useEffect)((function() {
                        (c || p) && i()
                    }), [c, p, i]);
                    var f = (0, ce.ZP)().fmtCoinNumber;
                    return {
                        component: (0, s.jsx)(de, {
                            disclosure: (0, L.Z)((0, P.Z)({}, t), {
                                onClose: function() {
                                    c && d(!1), o()
                                }
                            }),
                            reason: c ? {
                                type: "suspicious"
                            } : r ? {
                                type: "list-price-changed",
                                price: "".concat(a.formatEther(r.price), " ").concat(r.symbol),
                                priceUsd: f(parseFloat(a.formatEther(r.price)), r.symbol)
                            } : {
                                type: "suspicious"
                            }
                        })
                    }
                }
        }
    }
]);
//# sourceMappingURL=5539-9b4588a5b33fadc2.js.map