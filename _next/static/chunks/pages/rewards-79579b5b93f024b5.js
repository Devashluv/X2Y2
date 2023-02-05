(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8177], {
        62197: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/rewards", function() {
                return t(41118)
            }])
        },
        41118: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                __N_SSP: function() {
                    return je
                },
                default: function() {
                    return ye
                }
            });
            var n = t(26042),
                s = t(85893),
                a = t(33729),
                i = t(61744),
                l = t(23641),
                o = t(61608),
                c = t.n(o),
                u = t(11163),
                d = t(67294),
                h = t(68663),
                x = t(43788),
                m = t(33128),
                f = t(47568),
                p = t(828),
                j = t(20414),
                y = t(79762),
                g = t(4612),
                v = t(26723),
                b = t(21046),
                _ = t(59433),
                w = t(46243),
                N = t(5936),
                Y = t(92212),
                k = t(55967),
                S = t(60159),
                E = t(47850),
                X = t(16869),
                I = t(49296),
                P = t(47398),
                C = t(21645),
                T = function(e) {
                    var r = e.className,
                        t = e.items;
                    return (0, s.jsx)("div", {
                        className: r,
                        children: t.map((function(e, r) {
                            return (0, s.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0, s.jsx)("p", {
                                    className: "ts-hairline-2 flex-1 truncate text-gray-500",
                                    children: e.label
                                }), (0, s.jsx)("p", {
                                    className: "ts-body-3 truncate",
                                    children: e.value
                                })]
                            }, r)
                        }))
                    })
                },
                Z = function(e) {
                    var r = e.children,
                        t = e.title,
                        n = e.tooltip,
                        a = e.items;
                    return (0, s.jsxs)(_.l0, {
                        className: "flex flex-col space-y-3 rounded-xl border p-6 lg:p-8",
                        children: [(0, s.jsx)(P.u, {
                            label: n,
                            placement: "top",
                            hasArrow: !0,
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center space-x-1",
                                children: [(0, s.jsx)("p", {
                                    className: "ts-body-3 font-bold",
                                    children: t
                                }), n && (0, s.jsx)(C.OHs, {
                                    className: "!text-gray-500"
                                })]
                            })
                        }), r, a && (0, s.jsx)(T, {
                            items: a
                        })]
                    })
                },
                A = function(e) {
                    var r = e.children;
                    return (0, s.jsx)("div", {
                        className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
                        children: r
                    })
                },
                R = function(e) {
                    var r = e.title,
                        t = e.desc,
                        n = e.tooltip,
                        a = e.children;
                    return (0, s.jsxs)("div", {
                        className: "flex flex-col space-y-6 lg:space-y-8",
                        children: [(0, s.jsx)(P.u, {
                            label: n,
                            placement: "top",
                            hasArrow: !0,
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col space-y-1 self-start lg:flex-row lg:space-x-2 lg:space-y-0",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center space-x-2",
                                    children: [(0, s.jsx)("p", {
                                        className: "ts-headline-5 lg:ts-headline-4",
                                        children: r
                                    }), n && (0, s.jsx)(C.q4m, {
                                        className: "!h-6 !w-6 !text-gray-500"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "lg:self-end",
                                    children: t
                                })]
                            })
                        }), d.Children.map(a, (function(e) {
                            return (0, s.jsx)("p", {
                                className: "ts-caption-2 lg:ts-caption text-gray-500 [&_strong]:text-gray-800",
                                children: e
                            })
                        }))]
                    })
                },
                H = function(e) {
                    var r = e.user,
                        t = e.handleError,
                        n = e.fmtBigNumber,
                        a = (0, l.$G)().t,
                        o = (0, N.ZP)().rates,
                        c = (0, d.useState)({
                            fsStakingAPR: {
                                WETH: 0,
                                X2Y2: 0
                            }
                        }),
                        u = c[0],
                        h = c[1],
                        x = (0, d.useState)({
                            userInfo: {
                                tokensClaimed: b._Y,
                                rewardDebt: b._Y,
                                hasShare: !1
                            },
                            tokensPerShare: b._Y,
                            totalStaked: b._Y,
                            pendingTokens: b._Y,
                            pendingReward: b._Y
                        }),
                        m = x[0],
                        P = x[1],
                        C = (0, d.useState)(!1),
                        T = C[0],
                        H = C[1],
                        W = m.userInfo.hasShare ? m.pendingReward : b._Y,
                        B = m.userInfo.hasShare ? m.userInfo.rewardDebt : b._Y,
                        O = [{
                            label: a("Harvested"),
                            value: "".concat(n(B), " WETH")
                        }],
                        L = m.userInfo.hasShare ? m.pendingTokens : b._Y,
                        V = m.userInfo.hasShare ? L.add(m.userInfo.tokensClaimed) : b._Y,
                        F = m.userInfo.hasShare ? m.tokensPerShare.sub(V) : b._Y,
                        z = [{
                            label: a("Total Unlocked"),
                            value: "".concat(n(V), " X2Y2")
                        }, {
                            label: a("Locked"),
                            value: "".concat(n(F), " X2Y2")
                        }],
                        U = (0, d.useState)(0),
                        $ = U[0],
                        G = U[1],
                        K = function() {
                            return G((function(e) {
                                return e + 1
                            }))
                        };
                    (0, d.useEffect)((function() {
                        var e = function() {
                            var e = (0, f.Z)((function() {
                                var e, t, n, s, a, i, l;
                                return (0, j.__generator)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return o.trys.push([0, 2, , 3]), [4, Promise.all([E.eY(r), E.lF(X.Kc), E.bP(X.Kc), E.lf(r), E.T0(r)])];
                                        case 1:
                                            return e = p.Z.apply(void 0, [o.sent(), 5]), t = e[0], n = e[1], s = e[2], a = e[3], i = e[4], P({
                                                userInfo: t,
                                                tokensPerShare: n,
                                                totalStaked: s,
                                                pendingTokens: a,
                                                pendingReward: i
                                            }), [3, 3];
                                        case 2:
                                            return l = o.sent(), console.error(l), [3, 3];
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
                    }), [r, $]), (0, d.useEffect)((function() {
                        var e = function() {
                            var e = (0, f.Z)((function() {
                                var e, r;
                                return (0, j.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, S.NA(X.Kc, o)];
                                        case 1:
                                            return e = t.sent(), h({
                                                fsStakingAPR: e
                                            }), [3, 3];
                                        case 2:
                                            return r = t.sent(), console.error(r), [3, 3];
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
                    }), [o]);
                    var q = (0, Y.eX)().requireRegisteredUser;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(R, {
                            title: "".concat(m.totalStaked.lte(0) || 0 === u.fsStakingAPR.WETH ? "0%" : (0, k.cW)(u.fsStakingAPR.WETH), " ").concat(a("APR")),
                            desc: a("(REWARDS)"),
                            children: (0, s.jsxs)(l.cC, {
                                t: a,
                                children: ["ILO users ", (0, s.jsx)("strong", {
                                    children: "bootstrapped"
                                }), " the X2Y2/ETH liqudity pool on Uniswap and are the very first batch of X2Y2 rebels. Their X2Y2 tokens are linearly unlocked in 360 days and they share a cut from the market fee.", " ", (0, s.jsx)(w.Z, {
                                    className: "text-primary-1",
                                    href: "https://docs.x2y2.io/tokens/initial-liquidity-offer",
                                    isExternal: !0,
                                    children: "Read the docs for more details."
                                })]
                            })
                        }), (0, s.jsxs)(A, {
                            children: [(0, s.jsx)(_.J9, {
                                initialValues: {
                                    fee: ""
                                },
                                onSubmit: function() {
                                    return q(function() {
                                        var e = (0, f.Z)((function(e) {
                                            var r;
                                            return (0, j.__generator)(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        H(!0), n.label = 1;
                                                    case 1:
                                                        return n.trys.push([1, 3, 4, 5]), [4, E.gL(e)];
                                                    case 2:
                                                        return n.sent(), K(), [3, 5];
                                                    case 3:
                                                        return r = n.sent(), t(e, r), [3, 5];
                                                    case 4:
                                                        return H(!1), [7];
                                                    case 5:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(r) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: a("Harvestable WETH"),
                                    items: O,
                                    children: [(0, s.jsx)(_.gN, {
                                        name: "fee",
                                        children: function(e) {
                                            var r = e.form;
                                            return (0, s.jsxs)(y.NI, {
                                                id: "fee",
                                                isInvalid: !(!r.errors.fee || !r.touched.fee),
                                                children: [(0, s.jsx)(g.II, {
                                                    h: [10, 12],
                                                    value: i.formatEther(W),
                                                    isDisabled: !0
                                                }), r.errors.fee && (0, s.jsx)(I.Q6, {
                                                    isError: !0,
                                                    children: r.errors.fee
                                                })]
                                            })
                                        }
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        disabled: W.lte(0),
                                        isLoading: T,
                                        children: a("Harvest")
                                    })]
                                })
                            }), (0, s.jsx)(_.J9, {
                                initialValues: {
                                    amount: ""
                                },
                                onSubmit: function() {
                                    return q(function() {
                                        var e = (0, f.Z)((function(e) {
                                            var r;
                                            return (0, j.__generator)(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        H(!0), n.label = 1;
                                                    case 1:
                                                        return n.trys.push([1, 3, 4, 5]), [4, E.XW(e)];
                                                    case 2:
                                                        return n.sent(), K(), [3, 5];
                                                    case 3:
                                                        return r = n.sent(), t(e, r), [3, 5];
                                                    case 4:
                                                        return H(!1), [7];
                                                    case 5:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(r) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: a("Withdrawable X2Y2"),
                                    tooltip: a("Only tokens left in the ILO staking pool can enjoy the WETH rewards."),
                                    items: z,
                                    children: [(0, s.jsx)(_.gN, {
                                        name: "amount",
                                        children: function(e) {
                                            var r = e.form;
                                            return (0, s.jsxs)(y.NI, {
                                                id: "amount",
                                                isInvalid: !(!r.errors.amount || !r.touched.amount),
                                                children: [(0, s.jsx)(g.II, {
                                                    h: [10, 12],
                                                    value: i.formatEther(L),
                                                    isDisabled: !0
                                                }), r.errors.amount && (0, s.jsx)(I.Q6, {
                                                    isError: !0,
                                                    children: r.errors.amount
                                                })]
                                            })
                                        }
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        disabled: L.lte(0),
                                        isLoading: T,
                                        children: a("Withdraw")
                                    })]
                                })
                            })]
                        })]
                    })
                },
                W = t(69396),
                B = t(57457),
                O = t(24165),
                L = t(50879),
                V = t(83526),
                F = function(e) {
                    var r = e.field,
                        t = e.value,
                        n = (0, l.$G)().t,
                        a = (0, _.u6)().setFieldValue;
                    return (0, s.jsx)("button", {
                        className: "ts-button-2 lg:ts-button-1 cursor-pointer text-primary-1 hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
                        type: "button",
                        disabled: t.isZero(),
                        onClick: function() {
                            return a(r, i.formatEther(t))
                        },
                        children: n("Max")
                    })
                },
                z = t(33482),
                U = t(68527),
                $ = t(97375),
                G = t(91857),
                K = function(e) {
                    var r = e.disclosure,
                        t = e.action,
                        n = (0, l.$G)().t;
                    return (0, s.jsxs)(z.u_, {
                        onClose: r.onClose,
                        isOpen: r.isOpen,
                        isCentered: !0,
                        preserveScrollBarGap: !0,
                        children: [(0, s.jsx)(z.ZA, {}), (0, s.jsxs)(z.hz, {
                            children: [(0, s.jsx)(z.xB, {
                                children: n("Confirm")
                            }), (0, s.jsx)(G.o, {}), (0, s.jsxs)(z.fe, {
                                as: U.Kq,
                                spacing: [6, 8],
                                children: [(0, s.jsx)("p", {
                                    className: "ts-body-2 text-gray-700",
                                    children: (0, s.jsx)(l.cC, {
                                        t: n,
                                        children: "Your market fee rewards (WETH) will be automatically withdrawn to your wallet everytime you Stake or Unstake your X2Y2 tokens."
                                    })
                                }), (0, s.jsxs)(U.Ug, {
                                    spacing: 3,
                                    children: [(0, s.jsx)(v.zx, {
                                        flex: 1,
                                        colorScheme: "primary_1",
                                        onClick: function() {
                                            r.onClose(), t()
                                        },
                                        children: n("Continue")
                                    }), (0, s.jsx)(v.zx, {
                                        flex: 1,
                                        variant: "outline",
                                        onClick: r.onClose,
                                        children: n("Cancel")
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                q = L.Xz[X.Kc],
                D = L.s[X.Kc],
                J = L.Vf[X.Kc],
                Q = function(e) {
                    var r = e.user,
                        t = e.handleError,
                        a = e.fmtBigNumber,
                        o = (0, l.$G)().t,
                        c = (0, N.ZP)().rates,
                        u = (0, d.useState)({
                            fsStakingAPR: {
                                WETH: 0,
                                X2Y2: 0
                            }
                        }),
                        h = u[0],
                        x = u[1],
                        m = (0, d.useState)({
                            sharesValueInX2Y2: b._Y,
                            pendingReward: b._Y,
                            x2y2Balance: b._Y,
                            x2y2Allowance: b._Y
                        }),
                        E = m[0],
                        P = m[1],
                        C = (0, d.useState)({
                            sharesValueInX2Y2: b._Y,
                            x2y2Balance: b._Y,
                            x2y2Allowance: b._Y
                        }),
                        T = C[0],
                        H = C[1],
                        L = (0, d.useState)(!0),
                        z = L[0],
                        U = L[1],
                        G = (0, d.useState)(!0),
                        Q = G[0],
                        M = G[1],
                        ee = (0, d.useState)(!1),
                        re = ee[0],
                        te = ee[1],
                        ne = function() {
                            var e = (0, $.qY)(),
                                r = (0, d.useState)((function() {
                                    return function() {}
                                })),
                                t = r[0],
                                n = r[1];
                            return {
                                open: function(r) {
                                    n((function() {
                                        return r
                                    })), e.onOpen()
                                },
                                component: (0, s.jsx)(K, {
                                    disclosure: e,
                                    action: t
                                })
                            }
                        }(),
                        se = (0, d.useState)(0),
                        ae = se[0],
                        ie = se[1],
                        le = function() {
                            return ie((function(e) {
                                return e + 1
                            }))
                        };
                    (0, d.useEffect)((function() {
                        var e = function() {
                            var e = (0, f.Z)((function() {
                                var e, t, n, s, a, i, l, o, c, u;
                                return (0, j.__generator)(this, (function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return d.trys.push([0, 2, , 3]), e = (0, X.TI)(X.Kc), t = B.w6.connect(q, e), [4, Promise.all([S.rO(r), S.T0(r), V.rO(r), t.balanceOf(r.meta.address), t.allowance(r.meta.address, D), t.allowance(r.meta.address, J)])];
                                        case 1:
                                            return n = p.Z.apply(void 0, [d.sent(), 6]), s = n[0], a = n[1], i = n[2], l = n[3], o = n[4], c = n[5], P({
                                                sharesValueInX2Y2: s,
                                                pendingReward: a,
                                                x2y2Balance: l,
                                                x2y2Allowance: o
                                            }), H({
                                                sharesValueInX2Y2: i,
                                                x2y2Balance: l,
                                                x2y2Allowance: c
                                            }), U(!0), M(!0), [3, 3];
                                        case 2:
                                            return u = d.sent(), console.error(u), [3, 3];
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
                    }), [r, ae]), (0, d.useEffect)((function() {
                        var e = function() {
                            var e = (0, f.Z)((function() {
                                var e, r;
                                return (0, j.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, S.NA(X.Kc, c)];
                                        case 1:
                                            return e = t.sent(), x({
                                                fsStakingAPR: e
                                            }), [3, 3];
                                        case 2:
                                            return r = t.sent(), console.error(r), [3, 3];
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
                    }), [c]);
                    var oe = (0, Y.eX)().requireRegisteredUser,
                        ce = V.tH(h.fsStakingAPR),
                        ue = function(e) {
                            if (e) return (0, O.ls)(o, 18)(e)
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0, s.jsxs)("div", {
                                className: "space-y-1",
                                children: [(0, s.jsx)("h2", {
                                    className: "ts-body-2 lg:ts-headline-6 font-bold",
                                    children: o("X2Y2 Compounder")
                                }), (0, s.jsxs)("p", {
                                    className: "ts-caption-2",
                                    children: [o("Stake X2Y2"), (0, s.jsx)("span", {
                                        className: "mx-2",
                                        children: "|"
                                    }), o("Earn X2Y2")]
                                })]
                            }), (0, s.jsx)(R, {
                                title: "".concat((0, k.cW)(ce.totalAPY), " ").concat(o("APY")),
                                tooltip: (0, s.jsxs)("div", {
                                    className: "ts-caption-2 space-y-2 [&_strong]:text-gray-100",
                                    children: [(0, s.jsx)("p", {
                                        children: (0, s.jsx)(l.cC, {
                                            t: o,
                                            children: "The total APY for X2Y2 compounder includes X2Y2 staking rewards and market fee rewards (WETH) auto compounded.(Since 00:00 UTC)"
                                        })
                                    }), (0, s.jsxs)("p", {
                                        children: [o("X2Y2 APR"), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                            children: (0, k.cW)(h.fsStakingAPR.X2Y2)
                                        })]
                                    }), (0, s.jsxs)("p", {
                                        children: [o("WETH APR"), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                            children: (0, k.cW)(h.fsStakingAPR.WETH)
                                        })]
                                    }), (0, s.jsxs)("p", {
                                        children: [o("WETH APY"), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                            children: (0, k.cW)(ce.wethAPY)
                                        })]
                                    }), (0, s.jsxs)("p", {
                                        children: [o("Total APY = (1 + X2Y2 APR) * (1 + WETH APY) - 1"), (0, s.jsx)("br", {}), (0, s.jsx)("strong", {
                                            children: (0, k.cW)(ce.totalAPY)
                                        })]
                                    })]
                                }),
                                children: (0, s.jsxs)(l.cC, {
                                    t: o,
                                    children: ["Market fee rewards ", (0, s.jsx)("strong", {
                                        children: "WETH auto compound into X2Y2"
                                    }), " ", "tokens on the basis of X2Y2 staking pool rewards.", " ", (0, s.jsx)(w.Z, {
                                        className: "text-primary-1",
                                        href: "https://docs.x2y2.io/tokens/rewards/staking-rewards#x2y2-compounder",
                                        isExternal: !0,
                                        children: "Read the docs for more details."
                                    })]
                                })
                            })]
                        }), (0, s.jsxs)(A, {
                            children: [(0, s.jsx)(_.J9, {
                                initialValues: {
                                    amount: ""
                                },
                                validate: function(e) {
                                    try {
                                        var r = i.parseEther(e.amount);
                                        M(r.lte(T.x2y2Allowance))
                                    } catch (t) {}
                                },
                                onSubmit: function(e, r) {
                                    var n = r.resetForm;
                                    e.amount && oe(function() {
                                        var r = (0, f.Z)((function(r) {
                                            var s, a;
                                            return (0, j.__generator)(this, (function(l) {
                                                switch (l.label) {
                                                    case 0:
                                                        s = i.parseEther(e.amount), te(!0), l.label = 1;
                                                    case 1:
                                                        return l.trys.push([1, 7, 8, 9]), Q ? [4, V._6(r, s)] : [3, 3];
                                                    case 2:
                                                        return l.sent(), n(), [3, 6];
                                                    case 3:
                                                        return [4, B.w6.connect(q, r.web3Provider.getSigner()).approve(J, i.parseEther("100000000"))];
                                                    case 4:
                                                        return [4, l.sent().wait()];
                                                    case 5:
                                                        l.sent(), l.label = 6;
                                                    case 6:
                                                        return le(), [3, 9];
                                                    case 7:
                                                        return a = l.sent(), t(r, a), [3, 9];
                                                    case 8:
                                                        return te(!1), [7];
                                                    case 9:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: o("X2Y2 Balance: {{amount}}", {
                                        amount: a(E.x2y2Balance)
                                    }),
                                    children: [(0, s.jsx)(_.gN, {
                                        name: "amount",
                                        validate: ue,
                                        children: function(e) {
                                            var r = e.field,
                                                t = e.form;
                                            return (0, s.jsxs)(y.NI, {
                                                id: "amount",
                                                isInvalid: !(!t.errors.amount || !t.touched.amount),
                                                children: [(0, s.jsxs)(g.BZ, {
                                                    children: [(0, s.jsx)(g.II, (0, W.Z)((0, n.Z)({
                                                        h: [10, 12],
                                                        placeholder: "0.0"
                                                    }, r), {
                                                        autoComplete: "off"
                                                    })), (0, s.jsx)(g.xH, {
                                                        h: "full",
                                                        justifyContent: "start",
                                                        children: (0, s.jsx)(F, {
                                                            field: "amount",
                                                            value: T.x2y2Balance
                                                        })
                                                    })]
                                                }), t.errors.amount && (0, s.jsx)(I.Q6, {
                                                    isError: !0,
                                                    children: t.errors.amount
                                                })]
                                            })
                                        }
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        isLoading: re,
                                        children: o(Q ? "Stake" : "Approve")
                                    })]
                                })
                            }), (0, s.jsx)(_.J9, {
                                initialValues: {
                                    amount: ""
                                },
                                onSubmit: function(e, r) {
                                    var n = r.resetForm;
                                    e.amount && oe(function() {
                                        var r = (0, f.Z)((function(r) {
                                            var s, a;
                                            return (0, j.__generator)(this, (function(l) {
                                                switch (l.label) {
                                                    case 0:
                                                        s = i.parseEther(e.amount), te(!0), l.label = 1;
                                                    case 1:
                                                        return l.trys.push([1, 6, 7, 8]), s.eq(T.sharesValueInX2Y2) ? [4, V.BL(r)] : [3, 3];
                                                    case 2:
                                                        return l.sent(), [3, 5];
                                                    case 3:
                                                        return [4, V.XW(r, s)];
                                                    case 4:
                                                        l.sent(), l.label = 5;
                                                    case 5:
                                                        return n(), le(), [3, 8];
                                                    case 6:
                                                        return a = l.sent(), t(r, a), [3, 8];
                                                    case 7:
                                                        return te(!1), [7];
                                                    case 8:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: o("Staked X2Y2 (Comp): {{amount}}", {
                                        amount: a(T.sharesValueInX2Y2)
                                    }),
                                    children: [(0, s.jsx)(_.gN, {
                                        name: "amount",
                                        validate: ue,
                                        children: function(e) {
                                            var r = e.field,
                                                t = e.form;
                                            return (0, s.jsxs)(y.NI, {
                                                id: "amount",
                                                isInvalid: !(!t.errors.amount || !t.touched.amount),
                                                children: [(0, s.jsxs)(g.BZ, {
                                                    children: [(0, s.jsx)(g.II, (0, W.Z)((0, n.Z)({
                                                        h: [10, 12],
                                                        placeholder: "0.0"
                                                    }, r), {
                                                        autoComplete: "off"
                                                    })), (0, s.jsx)(g.xH, {
                                                        h: "full",
                                                        justifyContent: "start",
                                                        children: (0, s.jsx)(F, {
                                                            field: "amount",
                                                            value: T.sharesValueInX2Y2
                                                        })
                                                    })]
                                                }), t.errors.amount && (0, s.jsx)(I.Q6, {
                                                    isError: !0,
                                                    children: t.errors.amount
                                                })]
                                            })
                                        }
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        isLoading: re,
                                        children: o("Unstake")
                                    })]
                                })
                            })]
                        }), (0, s.jsx)("hr", {}), (0, s.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0, s.jsxs)("div", {
                                className: "space-y-1",
                                children: [(0, s.jsx)("h2", {
                                    className: "ts-body-2 lg:ts-headline-6 font-bold",
                                    children: o("X2Y2 Staking")
                                }), (0, s.jsxs)("p", {
                                    className: "ts-caption-2",
                                    children: [o("Stake X2Y2"), (0, s.jsx)("span", {
                                        className: "mx-2",
                                        children: "|"
                                    }), o("Earn X2Y2 & WETH")]
                                })]
                            }), (0, s.jsxs)(R, {
                                title: "".concat((0, k.cW)(h.fsStakingAPR.X2Y2 + h.fsStakingAPR.WETH), " ").concat(o("APR")),
                                desc: o("(X2Y2: {{x2y2}} + WETH: {{weth}})", {
                                    x2y2: (0, k.cW)(h.fsStakingAPR.X2Y2),
                                    weth: (0, k.cW)(h.fsStakingAPR.WETH)
                                }),
                                children: [(0, s.jsxs)(l.cC, {
                                    t: o,
                                    children: ["You earn market fee rewards in ", (0, s.jsx)("strong", {
                                        children: "WETH and X2Y2"
                                    }), " ", "tokens. 100% of the market fees are allocated to the X2Y2 staking pool, and 20% of the total X2Y2 supply will be rewarded within 720 days.", " ", (0, s.jsx)(w.Z, {
                                        className: "text-primary-1",
                                        href: "https://docs.x2y2.io/tokens/rewards/staking-rewards",
                                        isExternal: !0,
                                        children: "Read the docs for more details."
                                    })]
                                }), (0, s.jsx)(l.cC, {
                                    t: o,
                                    children: "Your market fee rewards (WETH) will be automatically withdrawn to your wallet everytime you Stake or Unstake your X2Y2 tokens."
                                })]
                            })]
                        }), (0, s.jsxs)(A, {
                            children: [(0, s.jsx)(_.J9, {
                                initialValues: {
                                    amount: ""
                                },
                                validate: function(e) {
                                    try {
                                        var r = i.parseEther(e.amount);
                                        U(r.lte(E.x2y2Allowance))
                                    } catch (t) {}
                                },
                                onSubmit: function(e, r) {
                                    var n = r.resetForm;
                                    e.amount && oe(function() {
                                        var r = (0, f.Z)((function(r) {
                                            var s, a, l;
                                            return (0, j.__generator)(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return s = i.parseEther(e.amount), z ? (a = function() {
                                                            var e = (0, f.Z)((function() {
                                                                var e;
                                                                return (0, j.__generator)(this, (function(a) {
                                                                    switch (a.label) {
                                                                        case 0:
                                                                            te(!0), a.label = 1;
                                                                        case 1:
                                                                            return a.trys.push([1, 3, 4, 5]), [4, S._6(r, s, !0)];
                                                                        case 2:
                                                                            return a.sent(), n(), le(), [3, 5];
                                                                        case 3:
                                                                            return e = a.sent(), t(r, e), [3, 5];
                                                                        case 4:
                                                                            return te(!1), [7];
                                                                        case 5:
                                                                            return [2]
                                                                    }
                                                                }))
                                                            }));
                                                            return function() {
                                                                return e.apply(this, arguments)
                                                            }
                                                        }(), ne.open(a), [3, 7]) : [3, 1];
                                                    case 1:
                                                        te(!0), o.label = 2;
                                                    case 2:
                                                        return o.trys.push([2, 5, 6, 7]), [4, B.w6.connect(q, r.web3Provider.getSigner()).approve(D, i.parseEther("100000000"))];
                                                    case 3:
                                                        return [4, o.sent().wait()];
                                                    case 4:
                                                        return o.sent(), le(), [3, 7];
                                                    case 5:
                                                        return l = o.sent(), t(r, l), [3, 7];
                                                    case 6:
                                                        return te(!1), [7];
                                                    case 7:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: o("X2Y2 Balance: {{amount}}", {
                                        amount: a(E.x2y2Balance)
                                    }),
                                    children: [(0, s.jsx)(_.gN, {
                                        name: "amount",
                                        validate: ue,
                                        children: function(e) {
                                            var r = e.field,
                                                t = e.form;
                                            return (0, s.jsxs)(y.NI, {
                                                id: "amount",
                                                isInvalid: !(!t.errors.amount || !t.touched.amount),
                                                children: [(0, s.jsxs)(g.BZ, {
                                                    children: [(0, s.jsx)(g.II, (0, W.Z)((0, n.Z)({
                                                        h: [10, 12],
                                                        placeholder: "0.0"
                                                    }, r), {
                                                        autoComplete: "off"
                                                    })), (0, s.jsx)(g.xH, {
                                                        h: "full",
                                                        justifyContent: "start",
                                                        children: (0, s.jsx)(F, {
                                                            field: "amount",
                                                            value: E.x2y2Balance
                                                        })
                                                    })]
                                                }), t.errors.amount && (0, s.jsx)(I.Q6, {
                                                    isError: !0,
                                                    children: t.errors.amount
                                                })]
                                            })
                                        }
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        isLoading: re,
                                        children: o(z ? "Stake" : "Approve")
                                    })]
                                })
                            }), (0, s.jsx)(_.J9, {
                                initialValues: {
                                    amount: ""
                                },
                                onSubmit: function(e, r) {
                                    var n = r.resetForm;
                                    e.amount && oe(function() {
                                        var r = (0, f.Z)((function(r) {
                                            var s, a;
                                            return (0, j.__generator)(this, (function(l) {
                                                return s = i.parseEther(e.amount), a = function() {
                                                    var e = (0, f.Z)((function() {
                                                        var e;
                                                        return (0, j.__generator)(this, (function(a) {
                                                            switch (a.label) {
                                                                case 0:
                                                                    te(!0), a.label = 1;
                                                                case 1:
                                                                    return a.trys.push([1, 6, 7, 8]), s.eq(E.sharesValueInX2Y2) ? [4, S.BL(r, !0)] : [3, 3];
                                                                case 2:
                                                                    return a.sent(), [3, 5];
                                                                case 3:
                                                                    return [4, S.XW(r, s, !0)];
                                                                case 4:
                                                                    a.sent(), a.label = 5;
                                                                case 5:
                                                                    return n(), le(), [3, 8];
                                                                case 6:
                                                                    return e = a.sent(), t(r, e), [3, 8];
                                                                case 7:
                                                                    return te(!1), [7];
                                                                case 8:
                                                                    return [2]
                                                            }
                                                        }))
                                                    }));
                                                    return function() {
                                                        return e.apply(this, arguments)
                                                    }
                                                }(), ne.open(a), [2]
                                            }))
                                        }));
                                        return function(e) {
                                            return r.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: o("Staked X2Y2: {{amount}}", {
                                        amount: a(E.sharesValueInX2Y2)
                                    }),
                                    children: [(0, s.jsx)(_.gN, {
                                        name: "amount",
                                        validate: ue,
                                        children: function(e) {
                                            var r = e.field,
                                                t = e.form;
                                            return (0, s.jsxs)(y.NI, {
                                                id: "amount",
                                                isInvalid: !(!t.errors.amount || !t.touched.amount),
                                                children: [(0, s.jsxs)(g.BZ, {
                                                    children: [(0, s.jsx)(g.II, (0, W.Z)((0, n.Z)({
                                                        h: [10, 12],
                                                        placeholder: "0.0"
                                                    }, r), {
                                                        autoComplete: "off"
                                                    })), (0, s.jsx)(g.xH, {
                                                        h: "full",
                                                        justifyContent: "start",
                                                        children: (0, s.jsx)(F, {
                                                            field: "amount",
                                                            value: E.sharesValueInX2Y2
                                                        })
                                                    })]
                                                }), t.errors.amount && (0, s.jsx)(I.Q6, {
                                                    isError: !0,
                                                    children: t.errors.amount
                                                })]
                                            })
                                        }
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        isLoading: re,
                                        children: o("Unstake")
                                    })]
                                })
                            }), (0, s.jsx)(_.J9, {
                                initialValues: {
                                    fee: ""
                                },
                                onSubmit: function() {
                                    return oe(function() {
                                        var e = (0, f.Z)((function(e) {
                                            var r;
                                            return (0, j.__generator)(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        te(!0), n.label = 1;
                                                    case 1:
                                                        return n.trys.push([1, 3, 4, 5]), [4, S.gL(e)];
                                                    case 2:
                                                        return n.sent(), le(), [3, 5];
                                                    case 3:
                                                        return r = n.sent(), t(e, r), [3, 5];
                                                    case 4:
                                                        return te(!1), [7];
                                                    case 5:
                                                        return [2]
                                                }
                                            }))
                                        }));
                                        return function(r) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: "".concat(o("Shared Market Fee"), " (WETH)"),
                                    children: [(0, s.jsx)(_.gN, {
                                        name: "fee",
                                        children: function(e) {
                                            var r = e.form;
                                            return (0, s.jsxs)(y.NI, {
                                                id: "fee",
                                                isInvalid: !(!r.errors.fee || !r.touched.fee),
                                                children: [(0, s.jsx)(g.II, {
                                                    h: [10, 12],
                                                    value: i.formatEther(E.pendingReward),
                                                    isDisabled: !0
                                                }), r.errors.fee && (0, s.jsx)(I.Q6, {
                                                    isError: !0,
                                                    children: r.errors.fee
                                                })]
                                            })
                                        }
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        isLoading: re,
                                        children: o("Harvest")
                                    })]
                                })
                            })]
                        }), ne.component]
                    })
                },
                M = t(86010),
                ee = t(2593),
                re = t(40721),
                te = t(36429),
                ne = t(1574),
                se = t(79737),
                ae = function(e) {
                    var r = e.disclosure,
                        t = e.isLoading,
                        n = e.action,
                        a = (0, l.$G)().t;
                    return (0, s.jsxs)(z.u_, {
                        isOpen: r.isOpen,
                        onClose: r.onClose,
                        preserveScrollBarGap: !0,
                        isCentered: !0,
                        size: "sm",
                        children: [(0, s.jsx)(z.ZA, {}), (0, s.jsxs)(z.hz, {
                            children: [(0, s.jsx)(z.xB, {
                                children: a("Ready to claim!")
                            }), (0, s.jsx)(G.o, {}), (0, s.jsxs)(z.fe, {
                                children: [(0, s.jsx)("p", {
                                    className: "ts-body-3",
                                    children: (0, s.jsxs)(l.cC, {
                                        t: a,
                                        children: ["You can stake the claimed $X2Y2 token directly without depositing into your wallet, to earn a", " ", (0, s.jsx)("strong", {
                                            children: "double token ($X2Y2 + $WETH) reward"
                                        }), "."]
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "mt-6 flex flex-col space-y-3",
                                    children: [(0, s.jsx)(v.zx, {
                                        colorScheme: "primary_1",
                                        isLoading: t,
                                        onClick: function() {
                                            return n(!0)
                                        },
                                        children: a("Claim & stake")
                                    }), (0, s.jsx)(v.zx, {
                                        colorScheme: "primary_1",
                                        variant: "outline",
                                        isLoading: t,
                                        onClick: function() {
                                            return n(!1)
                                        },
                                        children: a("Claim")
                                    }), (0, s.jsxs)(w.Z, {
                                        className: "ts-button-2 text-primary-1",
                                        href: se._j,
                                        isExternal: !0,
                                        children: [(0, s.jsx)(C.lPH, {
                                            className: "-mt-1 mr-1 !h-4 !w-4"
                                        }), a("More about the airdrop & tokenomics")]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                ie = function(e) {
                    var r = e.className,
                        t = e.label,
                        n = e.value,
                        a = e.icon,
                        i = e.tooltip,
                        l = e.hint;
                    return (0, s.jsxs)("div", {
                        className: (0, M.Z)(r, "flex min-w-0 flex-col text-gray-500"),
                        children: [(0, s.jsx)("p", {
                            className: "ts-caption-2",
                            children: t
                        }), (0, s.jsxs)("div", {
                            className: "mt-0.5 flex items-center space-x-1",
                            children: [a, (0, s.jsx)("p", {
                                className: "ts-body-2 truncate font-bold text-gray-700",
                                children: n
                            }), i && (0, s.jsx)(P.u, {
                                label: i,
                                hasArrow: !0,
                                children: (0, s.jsx)(C.OHs, {})
                            })]
                        }), l && (0, s.jsx)("p", {
                            className: "ts-caption-3",
                            children: l
                        })]
                    })
                },
                le = function(e) {
                    var r = e.user,
                        t = e.handleError,
                        a = e.fmtBigNumber,
                        o = (0, l.$G)().t,
                        c = (0, te.ah)(),
                        u = (0, te.Fj)(),
                        h = (0, N.ZP)().fmtCoinNumber,
                        x = (0, d.useState)({
                            claimable: b._Y,
                            pending: b._Y,
                            claimed: b._Y
                        }),
                        m = x[0],
                        p = x[1],
                        w = (0, d.useState)(0),
                        S = w[0],
                        E = w[1];
                    (0, d.useEffect)((function() {
                        var e = function() {
                            var e = (0, f.Z)((function() {
                                var e, t;
                                return (0, j.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, ne.lP(r)];
                                        case 1:
                                            return e = n.sent(), p(e), [3, 3];
                                        case 2:
                                            return t = n.sent(), console.error(t), [3, 3];
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
                    }), [r, S]);
                    var X = (0, d.useState)({
                            total_rewards_x2y2: "0",
                            user_est_rewards_x2y2: "0",
                            total_market_fee: "0",
                            user_market_fee: "0",
                            total_buyer_points: 0,
                            user_est_buyer_rewards_x2y2: "0",
                            user_buyer_points: 0,
                            last_update: 0,
                            next_distribution: 0
                        }),
                        I = X[0],
                        P = X[1];
                    (0, d.useEffect)((function() {
                        var e = function() {
                            var e = (0, f.Z)((function() {
                                var e;
                                return (0, j.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, ne.U2(r.meta.address)];
                                        case 1:
                                            return (e = t.sent()) && P(e), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [r]);
                    var C = (0, Y.eX)().requireRegisteredUser,
                        T = (0, te.r$)(),
                        R = T.isLoading,
                        H = T.setLoading,
                        W = function(e) {
                            var r = e.isLoading,
                                t = (0, $.qY)(),
                                n = (0, d.useState)((function() {
                                    return function() {}
                                })),
                                a = n[0],
                                i = n[1],
                                l = (0, s.jsx)(ae, {
                                    disclosure: t,
                                    isLoading: r,
                                    action: a
                                });
                            return {
                                open: function(e) {
                                    i((function() {
                                        return e
                                    })), t.onOpen()
                                },
                                close: t.onClose,
                                component: l
                            }
                        }({
                            isLoading: R
                        }),
                        B = ee.O$.from(I.user_est_rewards_x2y2).add(I.user_est_buyer_rewards_x2y2),
                        O = [{
                            label: o("Trading Fee"),
                            value: a(I.user_market_fee),
                            icon: (0, s.jsx)(re.T, {
                                className: "h-5 w-5 shrink-0",
                                symbol: "ETH"
                            }),
                            tooltip: (0, s.jsxs)(l.cC, {
                                t: o,
                                children: ["Total trading fee so far this round:", " ", (0, s.jsx)("strong", {
                                    className: "text-gray-100",
                                    children: {
                                        value: "".concat(a(I.total_market_fee), " ETH")
                                    }
                                })]
                            }),
                            hint: h(parseFloat(i.formatEther(ee.O$.from(I.user_market_fee))), "ETH")
                        }, {
                            label: o("Buyer Points"),
                            value: (0, k.tX)(I.user_buyer_points),
                            tooltip: (0, s.jsxs)(l.cC, {
                                t: o,
                                children: ["Purchase with price\u22650.01 ETH can earn buyer points. Up to", " ", (0, s.jsx)("strong", {
                                    className: "text-gray-100",
                                    children: "20 pt"
                                }), " per address per day. Total buyer points so far this round:", " ", (0, s.jsxs)("strong", {
                                    className: "text-gray-100",
                                    children: [{
                                        points: "".concat((0, k.tX)(I.total_buyer_points))
                                    }, " ", "pt"]
                                })]
                            })
                        }, {
                            label: o("Est. Trading Rewards"),
                            value: a(B),
                            icon: (0, s.jsx)(re.T, {
                                className: "h-5 w-5 shrink-0",
                                symbol: "X2Y2"
                            }),
                            tooltip: (0, s.jsxs)(l.cC, {
                                t: o,
                                children: ["Trading Rewards (", (0, s.jsxs)("strong", {
                                    className: "text-gray-100",
                                    children: [{
                                        a: a(I.user_est_rewards_x2y2)
                                    }, " X2Y2"]
                                }), ") = Your trading fee (", (0, s.jsxs)("strong", {
                                    className: "text-gray-100",
                                    children: [{
                                        b: a(I.user_market_fee)
                                    }, " ETH"]
                                }), ") / Total trading fee today (", (0, s.jsxs)("strong", {
                                    className: "text-gray-100",
                                    children: [{
                                        c: a(I.total_market_fee)
                                    }, " ETH"]
                                }), ") * Daily X2Y2 trading rewards (", (0, s.jsx)("strong", {
                                    className: "text-gray-100",
                                    children: "380,000.00 X2Y2"
                                }), ")", (0, s.jsx)("br", {}), "Buyer Reward (", (0, s.jsxs)("strong", {
                                    className: "text-gray-100",
                                    children: [{
                                        d: a(I.user_est_buyer_rewards_x2y2)
                                    }, " X2Y2"]
                                }), ") = Your buyer points (", (0, s.jsx)("strong", {
                                    className: "text-gray-100",
                                    children: {
                                        e: (0, k.tX)(I.user_buyer_points)
                                    }
                                }), ") / Total buyer points today (", (0, s.jsx)("strong", {
                                    className: "text-gray-100",
                                    children: {
                                        f: (0, k.tX)(I.total_buyer_points)
                                    }
                                }), ") * Daily buyer rewards (", (0, s.jsx)("strong", {
                                    className: "text-gray-100",
                                    children: "20,000 X2Y2"
                                }), ")"]
                            }),
                            hint: h(parseFloat(i.formatEther(B)), "X2Y2")
                        }, {
                            label: o("Next Distribution"),
                            value: 0 === I.next_distribution ? "-" : function(e) {
                                var r = c(e).diff(void 0, "minute"),
                                    t = Math.floor(r / 60);
                                return o("{{hours}}h {{minutes}}m", {
                                    hours: t,
                                    minutes: r % 60
                                })
                            }(1e3 * I.next_distribution),
                            hint: o("Last Updated: {{time}}", {
                                time: 0 === I.last_update ? "-" : I.last_update ? u(1e3 * I.last_update) : o("Just now")
                            })
                        }];
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "space-y-6 md:space-y-8",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-1 flex-col divide-y rounded-lg border border-gray-300 p-4 md:flex-row md:divide-x md:divide-y-0 lg:p-8",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 divide-x pb-2 md:pb-0 md:pr-2 lg:pr-4",
                                    children: [(0, s.jsx)(ie, (0, n.Z)({
                                        className: "flex-1 pr-2 lg:pr-4"
                                    }, O[0])), (0, s.jsx)(ie, (0, n.Z)({
                                        className: "flex-1 pl-2 lg:pl-4"
                                    }, O[1]))]
                                }), (0, s.jsxs)("div", {
                                    className: "flex min-w-0 flex-1 divide-x pt-2 md:pt-0 md:pl-2 lg:pl-4",
                                    children: [(0, s.jsx)(ie, (0, n.Z)({
                                        className: "flex-1 pr-2 lg:pr-4"
                                    }, O[2])), (0, s.jsx)(ie, (0, n.Z)({
                                        className: "flex-1 pl-2 lg:pl-4"
                                    }, O[3]))]
                                })]
                            }), (0, s.jsx)("p", {
                                className: "ts-caption-2 lg:ts-caption text-gray-500",
                                children: (0, s.jsxs)(l.cC, {
                                    t: o,
                                    children: ["Every sale with trading fees on X2Y2 gets counted every 10 minutes.", (0, s.jsx)("br", {}), "Each round of trading rewards starts everyday at 0:00am UTC+0, and becomes available for claim within 12 hours after review.", (0, s.jsx)("br", {}), "Previous gas rebates in April are included in the numbers below."]
                                })
                            })]
                        }), (0, s.jsx)(A, {
                            children: (0, s.jsx)(_.J9, {
                                initialValues: {
                                    fee: ""
                                },
                                onSubmit: function() {
                                    C(function() {
                                        var e = (0, f.Z)((function(e) {
                                            var r;
                                            return (0, j.__generator)(this, (function(n) {
                                                return r = function() {
                                                    var r = (0, f.Z)((function(r) {
                                                        var n;
                                                        return (0, j.__generator)(this, (function(s) {
                                                            switch (s.label) {
                                                                case 0:
                                                                    H(!0), s.label = 1;
                                                                case 1:
                                                                    return s.trys.push([1, 3, 4, 5]), [4, ne.QS(e, r)];
                                                                case 2:
                                                                    return s.sent(), E((function(e) {
                                                                        return e + 1
                                                                    })), W.close(), [3, 5];
                                                                case 3:
                                                                    return n = s.sent(), t(e, n), [3, 5];
                                                                case 4:
                                                                    return H(!1), [7];
                                                                case 5:
                                                                    return [2]
                                                            }
                                                        }))
                                                    }));
                                                    return function(e) {
                                                        return r.apply(this, arguments)
                                                    }
                                                }(), W.open(r), [2]
                                            }))
                                        }));
                                        return function(r) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                },
                                children: (0, s.jsxs)(Z, {
                                    title: o("Rewarded X2Y2"),
                                    items: [{
                                        label: o("Under Review:"),
                                        value: "".concat(a(m.pending), " X2Y2")
                                    }, {
                                        label: o("Rewards Collected:"),
                                        value: "".concat(a(m.claimed), " X2Y2")
                                    }],
                                    children: [(0, s.jsx)(y.NI, {
                                        id: "fee",
                                        children: (0, s.jsx)(g.II, {
                                            h: [10, 12],
                                            value: i.formatEther(m.claimable),
                                            isDisabled: !0
                                        })
                                    }), (0, s.jsx)(v.zx, {
                                        h: [10, 12],
                                        rounded: "r8",
                                        textStyle: ["button_2", "button_1"],
                                        variant: "outline",
                                        colorScheme: "primary_1",
                                        type: "submit",
                                        disabled: m.claimable.lte(0),
                                        children: o("Collect")
                                    })]
                                })
                            })
                        }), W.component]
                    })
                },
                oe = t(76875),
                ce = t(34071),
                ue = t(28987),
                de = t(24717),
                he = {
                    src: "/_next/static/media/Rewards.dc5667da.svg",
                    height: 272,
                    width: 408
                },
                xe = t(79948),
                me = t(64286),
                fe = function(e) {
                    return (0, k.tX)(parseFloat(i.formatEther(e)), {
                        max: 4
                    })
                },
                pe = function(e) {
                    var r = e.user,
                        t = (0, l.$G)().t,
                        i = "airdrop" === (0, u.useRouter)().asPath.split("#")[1] ? 3 : 0,
                        o = (0, d.useState)(i),
                        x = o[0],
                        f = o[1];
                    (0, d.useEffect)((function() {
                        r.web3Provider.network && r.web3Provider.network.chainId !== X.Kc && (0, me.Z)({
                            status: "warning",
                            title: t("Please switch to {{network}} network to proceed.", {
                                network: X.Kc === ue.Sj ? "Ethereum" : "Ethereum Goerli testnet"
                            })
                        })
                    }), [t, r]);
                    var p = {
                        user: r,
                        handleError: function(e, r) {
                            console.error(r);
                            var n = (0, xe.e$)(t, r);
                            (0, me.Z)({
                                status: "error",
                                title: (0, s.jsx)(m.Z, {
                                    user: e.web3Provider.getSigner(),
                                    networkId: X.Kc,
                                    tokenContract: "",
                                    tokenId: "",
                                    error: n
                                })
                            })
                        },
                        fmtBigNumber: fe
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("header", {
                            className: "bg-blue-bg",
                            children: (0, s.jsxs)("div", {
                                className: "mx-auto flex w-full flex-col md:flex-row-reverse xl:max-w-[1120px]",
                                children: [(0, s.jsx)(c(), {
                                    src: he,
                                    alt: "rewards",
                                    style: {
                                        objectFit: "cover"
                                    }
                                }), (0, s.jsxs)("div", {
                                    className: "flex-1 px-6 py-8 md:py-16 xl:px-0",
                                    children: [(0, s.jsx)("h1", {
                                        className: "ts-headline-4 xl:ts-headline-3 text-gray-900",
                                        children: t("X2Y2 Rewards")
                                    }), (0, s.jsx)("p", {
                                        className: "ts-caption-2 xl:ts-caption text-gray-500",
                                        children: t("X2Y2 shares 100% of its profit to X2Y2 token holders.")
                                    }), (0, s.jsxs)("div", {
                                        className: "mt-4 flex space-x-6 xl:mt-6",
                                        children: [(0, s.jsxs)(h.ZP, {
                                            className: "md:h-12",
                                            colorScheme: "primary-1",
                                            size: "sm",
                                            href: "https://app.uniswap.org/#/swap?outputCurrency=0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9&chain=mainnet",
                                            isExternal: !0,
                                            children: [(0, s.jsx)(de.yPv, {
                                                className: "mr-1 h-4 w-4"
                                            }), t("Buy X2Y2")]
                                        }), (0, s.jsxs)("button", {
                                            className: "ts-button-2 flex items-center text-primary-1 hover:underline",
                                            onClick: Y.WO,
                                            children: [(0, s.jsx)(de.vdc, {
                                                className: "mr-1 h-4 w-4"
                                            }), (0, s.jsx)("span", {
                                                children: t("Add to wallet")
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), (0, s.jsx)("section", {
                            className: "mx-auto w-full px-6 py-8 xl:max-w-[1120px] xl:px-0 xl:py-16",
                            children: (0, s.jsxs)(a.O.Group, {
                                selectedIndex: x,
                                onChange: f,
                                children: [(0, s.jsxs)(ce.t, {
                                    children: [(0, s.jsx)(ce.Y, {
                                        children: t("Trading / Gas")
                                    }), (0, s.jsx)(ce.Y, {
                                        children: t("Compounder / Staking")
                                    }), (0, s.jsx)(ce.Y, {
                                        children: t("ILO")
                                    })]
                                }), (0, s.jsxs)(a.O.Panels, {
                                    children: [(0, s.jsx)(a.O.Panel, {
                                        className: "space-y-8 pt-8",
                                        children: (0, s.jsx)(le, (0, n.Z)({}, p))
                                    }), (0, s.jsx)(a.O.Panel, {
                                        className: "space-y-8 pt-8",
                                        children: (0, s.jsx)(Q, (0, n.Z)({}, p))
                                    }), (0, s.jsx)(a.O.Panel, {
                                        className: "space-y-8 pt-8",
                                        children: (0, s.jsx)(H, (0, n.Z)({}, p))
                                    })]
                                })]
                            })
                        })]
                    })
                },
                je = !0,
                ye = function() {
                    var e = (0, l.$G)().t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(oe.p, {
                            title: e("X2Y2 Rewards")
                        }), (0, s.jsx)(x.j, {
                            children: (0, s.jsx)(Y.nw, {
                                children: function(e) {
                                    return (0, s.jsx)(pe, {
                                        user: e
                                    })
                                }
                            })
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [6826, 3788, 1967, 9774, 2888, 179], (function() {
            return r = 62197, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);
//# sourceMappingURL=rewards-79579b5b93f024b5.js.map