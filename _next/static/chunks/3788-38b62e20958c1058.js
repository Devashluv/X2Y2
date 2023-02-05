"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3788], {
        83440: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = s(26042),
                r = s(69396),
                a = s(99534),
                l = s(85893),
                i = s(67294),
                o = s(23351),
                c = s(34651),
                d = s(68527),
                u = s(67809),
                x = function(e) {
                    var t = e.seed,
                        s = e.alt,
                        o = (0, a.Z)(e, ["seed", "alt"]),
                        x = (0, i.useState)(""),
                        h = x[0],
                        f = x[1];
                    return (0, i.useEffect)((function() {
                        return f(u.create({
                            seed: t,
                            scale: 16
                        }).toDataURL())
                    }), [t]), h ? (0, l.jsx)(c.Ei, (0, r.Z)((0, n.Z)({
                        rounded: "full"
                    }, o), {
                        src: h,
                        alt: "".concat(s, "'s user avatar")
                    })) : (0, l.jsx)(d.xu, (0, n.Z)({
                        rounded: "full"
                    }, o))
                },
                h = s(76913),
                f = function(e) {
                    var t = e.data,
                        s = (0, a.Z)(e, ["data"]);
                    if (t.avatar_nft) {
                        var i, c = (0, o.YZ)(null === (i = t.avatar_nft.metadata) || void 0 === i ? void 0 : i.meta, t.avatar_nft.contract.display_options);
                        if (c.image || c.video) return (0, l.jsx)(h.Dp, (0, n.Z)((0, r.Z)((0, n.Z)({}, (0, h.KO)(c)), {
                            tokenAddress: t.avatar_nft.nft_contract,
                            tokenId: t.avatar_nft.token_id,
                            overflow: "hidden",
                            objectFit: "cover",
                            sx: {
                                maskImage: 'url("/mask.svg")',
                                maskSize: "100%",
                                maskPosition: "center"
                            }
                        }), s))
                    }
                    return (0, l.jsx)(x, (0, n.Z)({
                        seed: t.address,
                        alt: t.nickname || ""
                    }, s))
                }
        },
        28989: function(e, t, s) {
            s.d(t, {
                h: function() {
                    return x
                }
            });
            var n = s(26042),
                r = s(69396),
                a = s(99534),
                l = s(85893),
                i = s(86010),
                o = s(67294),
                c = s(95433),
                d = {
                    solid: "inline-flex relative justify-center items-center rounded-lg disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
                    outline: "inline-flex relative justify-center items-center border-2 disabled:opacity-40 disabled:cursor-not-allowed",
                    ghost: "inline-flex relative justify-center items-center rounded-full disabled:cursor-not-allowed",
                    toolbar: "inline-flex relative justify-center items-center rounded-full disabled:cursor-not-allowed"
                },
                u = {
                    solid: {
                        "primary-1": "bg-primary-1 text-button-text hover:enabled:bg-primary-1-600"
                    },
                    outline: {
                        gray: "text-gray-700 hover:text-gray-100 hover:bg-gray-800 hover:border-gray-800 disabled:text-gray-100 disabled:bg-gray-800 disabled:border-gray-800"
                    },
                    ghost: {
                        gray: "hover:enabled:opacity-50 disabled:text-gray-500",
                        "primary-1": "text-primary-1 hover:enabled:opacity-50",
                        "primary-3": "text-primary-3 hover:enabled:opacity-50"
                    },
                    toolbar: {
                        gray: "hover:enabled:bg-modal-section-bg disabled:text-gray-500"
                    }
                },
                x = (0, o.forwardRef)((function(e, t) {
                    var s = e.className,
                        o = e.variant,
                        x = void 0 === o ? "ghost" : o,
                        h = e.colorScheme,
                        f = void 0 === h ? "gray" : h,
                        m = e.icon,
                        p = e.isLoading,
                        g = e.isDisabled,
                        j = (0, a.Z)(e, ["className", "variant", "colorScheme", "icon", "isLoading", "isDisabled"]);
                    return (0, l.jsxs)("button", (0, r.Z)((0, n.Z)({
                        className: (0, i.Z)(s, d[x], u[x][f]),
                        ref: t,
                        disabled: g || p
                    }, j), {
                        children: [p && (0, l.jsx)("span", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (0, l.jsx)(c.$, {
                                className: "h-[1em] w-[1em]"
                            })
                        }), p ? (0, l.jsx)("span", {
                            className: "opacity-0",
                            children: m
                        }) : m]
                    }))
                }));
            x.displayName = "IconButton"
        },
        34557: function(e, t, s) {
            var n = s(26042),
                r = s(69396),
                a = s(99534),
                l = s(85893),
                i = s(68527),
                o = s(41664),
                c = s.n(o),
                d = (0, s(67294).forwardRef)((function(e, t) {
                    var s = e.href,
                        o = e.as,
                        d = e.replace,
                        u = e.scroll,
                        x = void 0 === u || u,
                        h = e.shallow,
                        f = e.prefetch,
                        m = e.locale,
                        p = e.children,
                        g = e.onClick,
                        j = (0, a.Z)(e, ["href", "as", "replace", "scroll", "shallow", "prefetch", "locale", "children", "onClick"]);
                    return (0, l.jsx)(c(), {
                        passHref: !0,
                        href: s,
                        as: o,
                        replace: d,
                        scroll: x,
                        shallow: h,
                        prefetch: f,
                        locale: m,
                        children: (0, l.jsx)(i.rU, (0, r.Z)((0, n.Z)({
                            ref: t,
                            onClick: function(e) {
                                g && g(e)
                            }
                        }, j), {
                            children: p
                        }))
                    })
                }));
            t.Z = d
        },
        43788: function(e, t, s) {
            s.d(t, {
                _z: function() {
                    return lt
                },
                j: function() {
                    return it
                },
                kw: function() {
                    return ot
                }
            });
            var n = s(26042),
                r = s(69396),
                a = s(99534),
                l = s(85893),
                i = s(68527),
                o = s(86010),
                c = s(23641),
                d = s(11923),
                u = s(24717),
                x = s(46243),
                h = function() {
                    var e = (0, c.$G)().t;
                    return (0, l.jsx)("div", {
                        className: "flex items-center bg-gradient-to-r from-[#3772FF] to-[#9757D7] py-3 px-3 text-sm text-button-text lg:px-6",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-1 items-center",
                            children: [(0, l.jsx)(u.BRb, {
                                className: "mr-3 hidden h-5 w-5 lg:flex"
                            }), (0, l.jsx)("div", {
                                className: "text-button-text text-opacity-80",
                                children: d.Qb ? (0, l.jsxs)(c.cC, {
                                    t: e,
                                    children: ["The only official domain for X2Y2 is", " ", (0, l.jsx)(x.Z, {
                                        className: "font-bold text-button-text",
                                        href: "https://x2y2.io",
                                        children: "https://x2y2.io"
                                    })]
                                }) : (0, l.jsxs)(c.cC, {
                                    t: e,
                                    children: ["You are on the X2Y2 Goerli test network (", {
                                        site: d.TV ? "staging.x2y2.io" : "goerli.x2y2.io"
                                    }, ")"]
                                })
                            })]
                        })
                    })
                },
                f = s(92212),
                m = s(47568),
                p = s(828),
                g = s(20414),
                j = s(20949),
                v = s(92684),
                b = s(97375),
                y = s(46513),
                C = s(64315),
                N = s(67294),
                k = s(1604),
                w = s(83440),
                _ = s(21387),
                Z = s(36429),
                S = s(45081),
                E = s(83560),
                H = s(79737),
                P = s(66812),
                T = s(28989),
                I = s(44560),
                L = s(8100),
                U = s(86275),
                F = function() {
                    var e = (0, L.ZP)("/uniapi/eth/gas", (function(e) {
                        return U.d.get(e, {
                            baseURL: "https://api.x2y2.io"
                        })
                    }), {
                        refreshInterval: 15e3
                    }).data;
                    if (!e) return null;
                    var t = e.data;
                    return (0, l.jsxs)("button", {
                        className: "ts-button-1 flex h-10 items-center space-x-2 px-2 text-gray-500",
                        disabled: !0,
                        children: [(0, l.jsx)(u.RLm, {
                            className: "h-6 w-6"
                        }), (0, l.jsx)("span", {
                            children: t.normal.toFixed(0)
                        })]
                    })
                },
                R = s(64737),
                O = s(26723),
                G = s(33729),
                B = s(11163),
                z = s.n(B),
                M = s(34557),
                Y = s(5936),
                A = s(50027),
                W = s(34071),
                D = ["en", "fr", "ja", "zh-Hans", "zh-Hant", "ko"],
                $ = {
                    en: "English",
                    fr: "Fran\xe7ais",
                    ja: "\u65e5\u672c\u8a9e",
                    "zh-Hans": "\u7b80\u4f53\u4e2d\u6587",
                    "zh-Hant": "\u7e41\u4f53\u4e2d\u6587",
                    ko: "\ud55c\uad6d\uc5b4"
                },
                X = ["USD", "CNY", "JPY", "KRW", "EUR", "GBP", "HKD", "IDR", "INR", "RUB"],
                V = function(e) {
                    var t = e.isMobile,
                        s = void 0 !== t && t,
                        o = (0, a.Z)(e, ["isMobile"]),
                        d = (0, B.useRouter)(),
                        x = (0, b.qY)(),
                        h = (0, c.$G)(),
                        f = h.t,
                        m = h.i18n,
                        p = (0, Y.ZP)(),
                        g = p.currency,
                        v = p.setCurrency,
                        y = (0, j.ff)("light_1", "dark_1"),
                        C = (0, Z._B)(),
                        N = "".concat(m.language.toUpperCase(), "\u30fb").concat(g);
                    return (0, Z.BV)({
                        base: !1,
                        lg: !0
                    }, x.onClose), (0, l.jsxs)(R.J2, {
                        gutter: 30,
                        modifiers: [A.Y],
                        placement: s ? "top" : void 0,
                        returnFocusOnClose: !1,
                        isOpen: x.isOpen,
                        onClose: x.onClose,
                        isLazy: !0,
                        children: [(0, l.jsx)(R.xo, {
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)(O.hU, (0, r.Z)((0, n.Z)({
                                    color: C.gray500
                                }, o), {
                                    "aria-label": N,
                                    variant: s ? "outline" : "ghost",
                                    isRound: !0,
                                    size: s ? "md" : "sm",
                                    icon: (0, l.jsx)(u.CNI, {
                                        className: "h-6 w-6"
                                    }),
                                    onClick: x.onToggle
                                }))
                            })
                        }), (0, l.jsx)(R.yk, {
                            children: (0, l.jsx)(R.b, {
                                px: 4,
                                pt: 5,
                                pb: 0,
                                rounded: "r12",
                                shadow: y,
                                children: (0, l.jsxs)(G.O.Group, {
                                    children: [(0, l.jsxs)(W.t, {
                                        className: "justify-center",
                                        children: [(0, l.jsx)(W.Y, {
                                            compact: !0,
                                            children: f("Language")
                                        }), (0, l.jsx)(W.Y, {
                                            compact: !0,
                                            children: f("Currency")
                                        })]
                                    }), (0, l.jsxs)(G.O.Panels, {
                                        children: [(0, l.jsx)(G.O.Panel, {
                                            className: "py-4",
                                            children: (0, l.jsx)(i.MI, {
                                                columns: 2,
                                                spacing: 0,
                                                children: D.map((function(e) {
                                                    return (0, l.jsx)(M.Z, {
                                                        minW: "124px",
                                                        maxW: "124px",
                                                        px: 4,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        h: 14,
                                                        rounded: "full",
                                                        color: e === m.language ? C.gray800 : C.gray500,
                                                        _hover: {
                                                            bg: C.modalSectionBg
                                                        },
                                                        isTruncated: !0,
                                                        textStyle: "button_2",
                                                        href: d.asPath,
                                                        locale: e,
                                                        children: $[e]
                                                    }, e)
                                                }))
                                            })
                                        }), (0, l.jsx)(G.O.Panel, {
                                            className: "py-4",
                                            children: (0, l.jsx)(i.MI, {
                                                columns: 2,
                                                spacing: 0,
                                                children: X.map((function(e) {
                                                    return (0, l.jsxs)(O.zx, {
                                                        minW: "124px",
                                                        maxW: "124px",
                                                        px: 4,
                                                        h: 14,
                                                        rounded: "full",
                                                        color: e === g ? C.gray800 : C.gray500,
                                                        _hover: {
                                                            bg: C.modalSectionBg
                                                        },
                                                        variant: "ghost",
                                                        isTruncated: !0,
                                                        textStyle: "button_2",
                                                        justifyContent: "flex-start",
                                                        onClick: function() {
                                                            v(e), x.onClose()
                                                        },
                                                        children: [e, " - ", (0, Y.Yu)(e)]
                                                    }, e)
                                                }))
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                q = s(33482),
                K = s(10894),
                J = s(20640),
                Q = s.n(J),
                ee = s(21046),
                te = s(56371),
                se = s(30902),
                ne = s(49770),
                re = s(80478),
                ae = s(89880),
                le = s(21645),
                ie = s(3181),
                oe = s(97338),
                ce = s(55967),
                de = s(87974),
                ue = s(54767),
                xe = s(98316),
                he = s(64286),
                fe = s(1574),
                me = s(16869),
                pe = s(40721),
                ge = s(4612),
                je = s(2593),
                ve = s(61744),
                be = s(91857),
                ye = s(24165),
                Ce = s(79948),
                Ne = s(54765),
                ke = s(49296),
                we = s(86365),
                _e = re.TN.slice(0, 2),
                Ze = function(e) {
                    var t, s = e.balance,
                        n = e.onClick,
                        r = (0, Z._B)(),
                        a = (0, c.$G)().t,
                        d = (0, Y.ZP)().fmtCoinNumber;
                    return (0, l.jsxs)(i.Ug, {
                        spacing: 1,
                        children: [(0, l.jsx)(i.xu, {
                            textStyle: "caption_2",
                            color: r.gray500,
                            children: a("Balance:")
                        }), (0, l.jsx)(i.xu, {
                            boxSize: 4,
                            children: (0, l.jsx)(pe.T, {
                                symbol: null !== (t = null === s || void 0 === s ? void 0 : s.symbol) && void 0 !== t ? t : ""
                            })
                        }), (0, l.jsx)("p", {
                            className: (0, o.Z)("ts-caption-2 font-bold text-gray-800", n && "cursor-pointer hover:underline"),
                            onClick: n,
                            children: s ? (0, ce.tX)(parseFloat((0, te.formatUnits)(s.balance, s.digits))) : "-"
                        }), (0, l.jsxs)(i.xu, {
                            textStyle: "caption_2",
                            color: r.gray500,
                            children: ["(", s ? d(parseFloat((0, te.formatUnits)(null === s || void 0 === s ? void 0 : s.balance, s.digits)), s.symbol) : "-", ")"]
                        })]
                    })
                },
                Se = function(e) {
                    var t = e.disclosure,
                        s = e.balance,
                        r = e.refresh,
                        a = (0, c.$G)().t,
                        o = (0, Z._B)(),
                        d = (0, f.eX)().requireRegisteredUser,
                        x = (0, N.useState)("ETH"),
                        h = x[0],
                        m = x[1],
                        p = (0, N.useState)(""),
                        g = p[0],
                        j = p[1],
                        v = (0, N.useState)(null),
                        b = v[0],
                        y = v[1],
                        C = (0, N.useState)(!1),
                        k = C[0],
                        w = C[1];
                    (0, N.useEffect)((function() {
                        var e = s.find((function(e) {
                            return e.symbol === h
                        }));
                        e && (g ? (0, ye.ls)(a, e.digits)(g) || (0, ye.gB)(a, e.digits, e.balance)(g) ? y(!1) : y(!0) : y(null))
                    }), [g, s, h, a]);
                    var _ = (0, N.useMemo)((function() {
                            return s.find((function(e) {
                                return "ETH" === e.symbol
                            }))
                        }), [s]),
                        S = (0, N.useMemo)((function() {
                            return s.find((function(e) {
                                return "WETH" === e.symbol
                            }))
                        }), [s]),
                        E = (0, N.useCallback)((function() {
                            var e = me.Kc,
                                s = "ETH" === h ? S : _;
                            s && b && d((function(l) {
                                return (0, Ne._)(l, e, (function() {
                                    w(!0), (0, Ce.LF)((0, n.Z)({
                                        networkId: e,
                                        user: l.web3Provider.getSigner()
                                    }, "ETH" === h ? {
                                        amountToEth: je.O$.from(0),
                                        amountToWeth: ve.parseUnits(g, s.digits)
                                    } : {
                                        amountToEth: ve.parseUnits(g, s.digits),
                                        amountToWeth: je.O$.from(0)
                                    })).then((function() {
                                        return t.onClose()
                                    })).finally((function() {
                                        w(!1), r()
                                    }))
                                }), (0, Ne.V)(a))
                            }))
                        }), [S, _, h, g, b, t, a, r, d]),
                        H = a("Swap");
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)(q.u_, {
                            isOpen: t.isOpen,
                            onClose: t.onClose,
                            isCentered: !0,
                            preserveScrollBarGap: !0,
                            children: [(0, l.jsx)(q.ZA, {}), (0, l.jsxs)(q.hz, {
                                children: [(0, l.jsx)(q.xB, {
                                    children: H
                                }), (0, l.jsx)(be.o, {}), (0, l.jsxs)(q.fe, {
                                    as: i.gC,
                                    spacing: 3,
                                    children: [(0, l.jsxs)(i.gC, {
                                        spacing: 1,
                                        w: "full",
                                        alignItems: "flex-start",
                                        children: [(0, l.jsxs)(i.gC, {
                                            spacing: 0,
                                            w: "full",
                                            alignItems: "flex-start",
                                            children: [(0, l.jsx)(ke.lX, {
                                                children: a("From")
                                            }), (0, l.jsxs)(i.Ug, {
                                                w: "full",
                                                spacing: 4,
                                                children: [(0, l.jsxs)(ge.BZ, {
                                                    children: [(0, l.jsx)(ge.II, {
                                                        placeholder: "0.0",
                                                        autoComplete: "off",
                                                        value: g,
                                                        onChange: function(e) {
                                                            return j(e.target.value)
                                                        },
                                                        borderColor: !0 === b ? "green.500" : !1 === b ? "red.500" : void 0,
                                                        disabled: k
                                                    }), !0 === b && (0, l.jsx)(ge.xH, {
                                                        pointerEvents: "none",
                                                        w: "auto",
                                                        pr: 4,
                                                        children: (0, l.jsx)(u.gYJ, {
                                                            className: "h-6 w-6 text-primary-4"
                                                        })
                                                    })]
                                                }), (0, l.jsx)(we.Z, {
                                                    buttonProps: {
                                                        maxW: "100px",
                                                        minH: 12
                                                    },
                                                    items: _e.map((function(e) {
                                                        return {
                                                            title: e.symbol,
                                                            value: e.symbol
                                                        }
                                                    })),
                                                    value: h,
                                                    onChange: m
                                                })]
                                            })]
                                        }), (0, l.jsx)(Ze, {
                                            balance: "ETH" === h ? _ : S,
                                            onClick: function() {
                                                var e = "ETH" === h ? _ : S;
                                                e && j(ve.formatUnits(e.balance, e.digits))
                                            }
                                        })]
                                    }), (0, l.jsx)(i.gC, {
                                        children: (0, l.jsx)("button", {
                                            className: "flex text-gray-500 hover:text-gray-700",
                                            "aria-label": "",
                                            onClick: function() {
                                                return m("ETH" === h ? "WETH" : "ETH")
                                            },
                                            children: (0, l.jsx)(u.dg3, {
                                                className: "h-6 w-6 rotate-90"
                                            })
                                        })
                                    }), (0, l.jsxs)(i.gC, {
                                        spacing: 1,
                                        w: "full",
                                        alignItems: "flex-start",
                                        children: [(0, l.jsxs)(i.gC, {
                                            spacing: 0,
                                            w: "full",
                                            alignItems: "flex-start",
                                            children: [(0, l.jsx)(ke.lX, {
                                                children: a("To")
                                            }), (0, l.jsxs)(ge.BZ, {
                                                children: [(0, l.jsx)(ge.II, {
                                                    placeholder: "0.0",
                                                    autoComplete: "off",
                                                    value: g,
                                                    onChange: function(e) {
                                                        return j(e.target.value)
                                                    },
                                                    borderColor: !0 === b ? "green.500" : !1 === b ? "red.500" : void 0,
                                                    disabled: k
                                                }), (0, l.jsx)(ge.xH, {
                                                    pointerEvents: "none",
                                                    w: "auto",
                                                    pr: 4,
                                                    children: (0, l.jsxs)(i.xu, {
                                                        textStyle: "input_1",
                                                        color: o.gray500,
                                                        children: [!0 === b && (0, l.jsx)(u.gYJ, {
                                                            className: "inline h-6 w-6 text-primary-4"
                                                        }), "ETH" === h ? "WETH" : "ETH"]
                                                    })
                                                })]
                                            })]
                                        }), (0, l.jsx)(Ze, {
                                            balance: "WETH" === h ? _ : S
                                        })]
                                    }), (0, l.jsx)(ke.Q6, {
                                        className: "mt-3",
                                        children: a("You will receive same amount {{symbol}} after the swap. No fee is charged and the only cost is transaction gas.", {
                                            symbol: "ETH" === h ? "WETH" : "ETH"
                                        })
                                    }), (0, l.jsx)(i.xu, {
                                        w: "full",
                                        children: (0, l.jsx)(O.zx, {
                                            w: "full",
                                            mt: 3,
                                            h: 12,
                                            colorScheme: "primary_1",
                                            leftIcon: (0, l.jsx)(u.Q_s, {
                                                className: "h-4 w-4"
                                            }),
                                            iconSpacing: 3,
                                            type: "submit",
                                            isLoading: k,
                                            disabled: !b,
                                            onClick: E,
                                            children: H
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                },
                Ee = function(e) {
                    var t = e.disclosure,
                        s = e.user,
                        a = (0, c.$G)().t,
                        i = (0, B.useRouter)(),
                        d = (0, f.aC)().signOut,
                        u = s.meta.address,
                        h = (0, P.n)(),
                        j = h.offer,
                        v = h.activity,
                        y = (0, Z._B)(),
                        C = (0, re.h1)(),
                        k = C.balance,
                        _ = C.refresh,
                        S = function(e) {
                            var t = e.user,
                                s = e.isActive,
                                n = (0, N.useState)(ee._Y),
                                r = n[0],
                                a = n[1];
                            return (0, N.useEffect)((function() {
                                if (s) {
                                    var e = function() {
                                        var e = (0, m.Z)((function() {
                                            var e, s;
                                            return (0, g.__generator)(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return n.trys.push([0, 2, , 3]), [4, fe.lP(t)];
                                                    case 1:
                                                        return e = n.sent(), a(e.claimable), [3, 3];
                                                    case 2:
                                                        return s = n.sent(), console.error(s), [3, 3];
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
                            }), [t, s]), {
                                rewards: [{
                                    symbol: "X2Y2",
                                    digits: 18,
                                    name: "X2Y2 Token",
                                    amount: r
                                }]
                            }
                        }({
                            user: s,
                            isActive: t.isOpen
                        }).rewards,
                        E = (0, Y.ZP)().fmtCoinNumber,
                        T = (0, b.qY)();
                    (0, N.useEffect)((function() {
                        t.isOpen && _()
                    }), [t.isOpen, _]);
                    var I, L, U = (0, N.useMemo)((function() {
                            return t.isOpen ? (0, se.pipe)(oe.ff({
                                address: s.meta.address
                            }), ue.UI((function(e) {
                                return e > 0
                            })), de.G) : de.YP
                        }), [t.isOpen, s.meta.address]),
                        F = (0, p.Z)((0, ae.Z)(U, {
                            skipPending: !0
                        }), 1)[0],
                        R = (0, ne.Z)({
                            key: "ens-lookup",
                            address: u
                        }, function() {
                            var e = (0, m.Z)((function(e) {
                                var t;
                                return (0, g.__generator)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return t = e.address, [4, (0, me.TI)(me.Kc).lookupAddress(t)];
                                        case 1:
                                            return [2, s.sent()]
                                    }
                                }))
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        G = R.data,
                        z = [{
                            title: a("My Items"),
                            icon: le.PRO,
                            href: (0, H.pG)(u, {
                                tab: "items"
                            }),
                            match: (0, H.bp)(u, {
                                tab: "items"
                            }),
                            gaLabel: "GA-sidebar-my-items"
                        }, {
                            title: a("Favorites"),
                            icon: le.L75,
                            href: (0, H.pG)(u, {
                                tab: "favorites"
                            }),
                            match: (0, H.bp)(u, {
                                tab: "favorites"
                            }),
                            gaLabel: "GA-sidebar-favorites"
                        }, {
                            title: a("Offers"),
                            icon: le.Q_s,
                            href: (0, H.pG)(u, {
                                tab: "offers"
                            }),
                            match: (0, H.bp)(u, {
                                tab: "offers"
                            }),
                            dot: j,
                            gaLabel: "GA-sidebar-offers"
                        }, {
                            title: a("Activities"),
                            icon: le.PTN,
                            href: (0, H.pG)(u, {
                                tab: "activities"
                            }),
                            match: (0, H.bp)(u, {
                                tab: "activities"
                            }),
                            dot: v,
                            gaLabel: "GA-sidebar-activities"
                        }, {
                            title: a("Bulk Listing"),
                            icon: le.Adt,
                            href: H.YS,
                            match: /^\/tools\/bulk-listing$/,
                            gaLabel: "GA-sidebar-bulk-listing"
                        }, {
                            title: a("Settings"),
                            icon: le.iAI,
                            href: (0, H.P1)("profile"),
                            match: /^\/settings\/profile$/,
                            gaLabel: "GA-sidebar-settings"
                        }, {
                            title: a("Chat"),
                            icon: le.CR7,
                            href: "https://chat.blockscan.com/",
                            isExternal: !0,
                            dot: xe.d6(F) && F.value,
                            gaLabel: "GA-sidebar-chat"
                        }];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(q.dy, (0, r.Z)((0, n.Z)({}, t), {
                            placement: "right",
                            children: [(0, l.jsx)(q.P1, {
                                backdropFilter: "blur(4px)"
                            }), (0, l.jsxs)(q.sc, {
                                maxW: ["full", "375px"],
                                backgroundColor: y.modalBg,
                                children: [(0, l.jsx)("header", {
                                    className: "flex justify-end p-6 pb-3",
                                    children: (0, l.jsx)(O.hU, {
                                        fontSize: "2xl",
                                        "aria-label": a("Close Menu"),
                                        variant: "ghost",
                                        isRound: !0,
                                        icon: (0, l.jsx)(le.OhS, {}),
                                        onClick: t.onClose
                                    })
                                }), (0, l.jsxs)(q.Ng, {
                                    pb: 10,
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, l.jsx)(w.Z, {
                                            data: s.meta,
                                            boxSize: 10
                                        }), (0, l.jsxs)("div", {
                                            className: "ml-4 flex flex-col",
                                            children: [(0, l.jsx)("p", {
                                                className: "ts-headline-6",
                                                children: null !== (L = null !== (I = s.meta.nickname) && void 0 !== I ? I : G) && void 0 !== L ? L : (0, ce.P5)(u)
                                            }), (0, l.jsxs)("div", {
                                                className: "ts-caption-3 mt-0.5 flex cursor-pointer items-center font-medium text-gray-500",
                                                onClick: function() {
                                                    Q()(u), (0, he.Z)({
                                                        status: "success",
                                                        title: a("Copied!")
                                                    })
                                                },
                                                children: [(0, l.jsx)("span", {
                                                    children: (0, ce.P5)(u)
                                                }), (0, l.jsx)(le.P6h, {
                                                    className: "ml-1",
                                                    boxSize: 3
                                                })]
                                            })]
                                        }), (0, l.jsx)(O.hU, {
                                            className: "ml-auto",
                                            "aria-label": a("Logout"),
                                            variant: "outline",
                                            isRound: !0,
                                            icon: (0, l.jsx)(le.RIm, {
                                                fontSize: "2xl",
                                                transform: "auto",
                                                rotate: 180
                                            }),
                                            onClick: function() {
                                                t.onClose(), d()
                                            }
                                        })]
                                    }), (0, l.jsx)("div", {
                                        className: "mt-6 grid grid-cols-2 gap-y-2",
                                        children: z.map((function(e, t) {
                                            var s, n, r = null === (s = e.match) || void 0 === s ? void 0 : s.test(i.asPath);
                                            return (0, l.jsxs)(x.Z, {
                                                className: (0, o.Z)(e.gaLabel, "flex items-center space-x-2.5 rounded-full px-4 py-3 hover:bg-modal-section-bg hover:no-underline", r ? "text-gray-800" : "text-gray-500"),
                                                href: e.href,
                                                isExternal: null !== (n = e.isExternal) && void 0 !== n && n,
                                                children: [(0, l.jsx)(e.icon, {
                                                    fontSize: "2xl"
                                                }), (0, l.jsx)("span", {
                                                    className: "ts-button-2",
                                                    children: e.title
                                                }), e.dot && (0, l.jsx)("span", {
                                                    className: "h-2 w-2 rounded bg-primary-4"
                                                })]
                                            }, t)
                                        }))
                                    }), (0, l.jsxs)("div", {
                                        className: "mt-10 hidden rounded-xl bg-emerald-50 p-3",
                                        children: [(0, l.jsx)("p", {
                                            className: "ts-caption text-gray-500 [&_strong]:text-gray-900",
                                            children: (0, l.jsxs)(c.cC, {
                                                t: a,
                                                children: ["There are ", (0, l.jsxs)("strong", {
                                                    children: [{
                                                        amount: (0, ce.tX)(1e3)
                                                    }, " X2Y2"]
                                                }), " ", "tokens waiting for you without ", (0, l.jsx)("strong", {
                                                    children: "expiration"
                                                }), "."]
                                            })
                                        }), (0, l.jsxs)("button", {
                                            className: "mt-3 flex items-center py-1 text-primary-4 hover:opacity-50",
                                            children: [(0, l.jsx)(le.lPH, {}), (0, l.jsx)("span", {
                                                className: "ts-button-2 ml-1",
                                                children: a("Claim")
                                            })]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "mt-10 rounded-xl border border-gray-300 px-4 pt-3.5 pb-3",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex flex-row border-b border-gray-300 pb-3 leading-6",
                                            children: [(0, l.jsx)("div", {
                                                className: "ts-hairline-2 flex-1 font-bold",
                                                children: a("Wallet")
                                            }), (0, l.jsxs)("div", {
                                                className: "ts-button-2 flex cursor-pointer flex-row justify-center text-primary-1 hover:underline",
                                                onClick: T.onOpen,
                                                children: [(0, l.jsx)("div", {
                                                    className: "mr-1 h-4 w-4",
                                                    children: (0, l.jsx)(K.JO, {
                                                        as: ie.Z
                                                    })
                                                }), (0, l.jsx)("div", {
                                                    children: a("Swap ETH / WETH")
                                                })]
                                            })]
                                        }), k.map((function(e) {
                                            return (0, l.jsxs)("div", {
                                                className: "flex flex-row justify-center py-2.5",
                                                children: [(0, l.jsx)(pe.T, {
                                                    symbol: e.symbol,
                                                    className: "h-8 w-8 self-center"
                                                }), (0, l.jsxs)("div", {
                                                    className: "ml-3 flex flex-1 flex-col",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "ts-body-2 font-bold",
                                                        children: e.symbol
                                                    }), (0, l.jsx)("div", {
                                                        className: "ts-caption-2 flex flex-col text-gray-500",
                                                        children: e.name
                                                    })]
                                                }), (0, l.jsxs)("div", {
                                                    className: "ml-3 flex flex-col text-right",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "ts-body-2 font-bold",
                                                        children: (0, ce.OA)(parseFloat((0, te.formatUnits)(e.balance, e.digits)))
                                                    }), (0, l.jsx)("div", {
                                                        className: "ts-caption-2 flex flex-col text-gray-500",
                                                        children: E(parseFloat((0, te.formatUnits)(e.balance, e.digits)), e.symbol)
                                                    })]
                                                })]
                                            }, e.symbol)
                                        }))]
                                    }), (0, l.jsxs)("div", {
                                        className: "mt-10 rounded-xl border border-gray-300 px-4 pt-3.5 pb-3",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex border-b border-gray-300 pb-3 leading-6",
                                            children: [(0, l.jsx)("div", {
                                                className: "ts-hairline-2 flex-1 font-bold",
                                                children: a("Rewards")
                                            }), (0, l.jsxs)(x.Z, {
                                                className: "ts-button-2 flex justify-center text-primary-1",
                                                href: (0, H.yX)({}),
                                                children: [(0, l.jsx)(le.tZN, {
                                                    className: "mr-1 !h-4 !w-4"
                                                }), (0, l.jsx)("span", {
                                                    children: a("Collect")
                                                })]
                                            })]
                                        }), S.map((function(e) {
                                            return (0, l.jsxs)("div", {
                                                className: "flex justify-center py-2.5",
                                                children: [(0, l.jsx)(pe.T, {
                                                    symbol: e.symbol,
                                                    className: "h-8 w-8 self-center"
                                                }), (0, l.jsxs)("div", {
                                                    className: "ml-3 flex flex-1 flex-col",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "ts-body-2 font-bold",
                                                        children: e.symbol
                                                    }), (0, l.jsx)("div", {
                                                        className: "ts-caption-2 flex flex-col text-gray-500",
                                                        children: e.name
                                                    })]
                                                }), (0, l.jsxs)("div", {
                                                    className: "ml-3 flex flex-col text-right",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "ts-body-2 font-bold",
                                                        children: e.amount.lt(0) ? "-" : (0, ce.OA)(parseFloat((0, te.formatUnits)(e.amount, e.digits)))
                                                    }), (0, l.jsx)("div", {
                                                        className: "ts-caption-2 flex flex-col text-gray-500",
                                                        children: e.amount.lt(0) ? "-" : E(parseFloat((0, te.formatUnits)(e.amount, e.digits)), e.symbol)
                                                    })]
                                                })]
                                            }, e.symbol)
                                        }))]
                                    })]
                                })]
                            })]
                        })), (0, l.jsx)(Se, {
                            disclosure: T,
                            balance: k,
                            refresh: _
                        })]
                    })
                },
                He = function(e) {
                    var t = e.links,
                        s = (0, a.Z)(e, ["links"]),
                        c = (0, B.useRouter)();
                    return (0, l.jsx)(i.Ug, (0, r.Z)((0, n.Z)({
                        d: ["none", null, null, "flex"],
                        fontWeight: "bold",
                        css: {
                            "button + span": {
                                marginInlineStart: 0
                            }
                        }
                    }, s), {
                        spacing: 0,
                        children: t.map((function(e, t) {
                            var s, n, r = (0, l.jsx)(x.Z, {
                                className: (0, o.Z)(e.gaLabel, "ts-button-1 rounded-full px-6 py-4 hover:bg-modal-section-bg hover:no-underline", !(0, Z.iH)(c.asPath, [
                                    [e]
                                ]) && "text-gray-500"),
                                href: e.href,
                                onClick: e.onClick,
                                children: e.title
                            }, t);
                            return null !== (n = null === (s = e.featurePromptCardRenderFunc) || void 0 === s ? void 0 : s.call(e, r)) && void 0 !== n ? n : r
                        }))
                    }))
                },
                Pe = (0, K.IU)({
                    viewBox: "0 0 134 40",
                    path: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M52 30L56.0652 20.2266L52 10.17H57.085L60.2011 18.5127H60.6261L63.7989 10.17H68.8839L64.7762 20.2266L68.8839 30H63.7989L60.6261 21.8839H60.2153L57.085 30H52Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M72.318 30V26.6714C72.6012 26.4636 72.979 26.1804 73.4511 25.8215C73.9232 25.4627 74.452 25.0472 75.0375 24.5751C75.623 24.0935 76.2226 23.5788 76.8364 23.0312C77.4596 22.4835 78.0592 21.9122 78.6352 21.3173C79.2207 20.7129 79.7448 20.118 80.2075 19.5326C80.6702 18.9377 81.0385 18.3569 81.3123 17.7904C81.5861 17.2238 81.7231 16.695 81.7231 16.204C81.7231 15.7318 81.6664 15.3258 81.5531 14.9858C81.4398 14.6459 81.2745 14.372 81.0573 14.1643C80.8496 13.9471 80.5994 13.7866 80.3066 13.6827C80.0233 13.5788 79.7023 13.5269 79.3435 13.5269C78.7769 13.5269 78.2764 13.6969 77.842 14.0368C77.4171 14.3768 77.063 14.797 76.7797 15.2974C76.5059 15.7885 76.3123 16.2748 76.199 16.7564L72.1763 15.0283C72.4313 13.9896 72.9081 13.0925 73.6069 12.3371C74.3057 11.5817 75.1508 11.0057 76.1423 10.6091C77.1433 10.203 78.215 10 79.3576 10C80.3774 10 81.3217 10.1086 82.1905 10.3258C83.0592 10.5335 83.8147 10.8782 84.4568 11.3598C85.1083 11.8319 85.6135 12.4599 85.9724 13.2436C86.3406 14.0274 86.5248 15 86.5248 16.1615C86.5248 16.8791 86.3548 17.6204 86.0148 18.3853C85.6749 19.1407 85.2264 19.8914 84.6692 20.6374C84.1215 21.3739 83.5267 22.0774 82.8845 22.7479C82.2519 23.4089 81.6286 24.0132 81.0148 24.5609C80.4011 25.0992 79.8581 25.5477 79.3859 25.9065C78.9232 26.2559 78.5975 26.492 78.4086 26.6147H86.284V30H72.318Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M96.8286 30V23.6119L90.9787 10.17H95.7804L99.1515 19.3343L102.523 10.17H107.324L101.503 23.6119V30H96.8286Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M111.056 30V26.6714C111.339 26.4636 111.717 26.1804 112.189 25.8215C112.661 25.4627 113.19 25.0472 113.775 24.5751C114.361 24.0935 114.96 23.5788 115.574 23.0312C116.198 22.4835 116.797 21.9122 117.373 21.3173C117.959 20.7129 118.483 20.118 118.945 19.5326C119.408 18.9377 119.776 18.3569 120.05 17.7904C120.324 17.2238 120.461 16.695 120.461 16.204C120.461 15.7318 120.404 15.3258 120.291 14.9858C120.178 14.6459 120.012 14.372 119.795 14.1643C119.587 13.9471 119.337 13.7866 119.045 13.6827C118.761 13.5788 118.44 13.5269 118.081 13.5269C117.515 13.5269 117.014 13.6969 116.58 14.0368C116.155 14.3768 115.801 14.797 115.518 15.2974C115.244 15.7885 115.05 16.2748 114.937 16.7564L110.914 15.0283C111.169 13.9896 111.646 13.0925 112.345 12.3371C113.044 11.5817 113.889 11.0057 114.88 10.6091C115.881 10.203 116.953 10 118.096 10C119.115 10 120.06 10.1086 120.928 10.3258C121.797 10.5335 122.553 10.8782 123.195 11.3598C123.846 11.8319 124.351 12.4599 124.71 13.2436C125.079 14.0274 125.263 15 125.263 16.1615C125.263 16.8791 125.093 17.6204 124.753 18.3853C124.413 19.1407 123.964 19.8914 123.407 20.6374C122.859 21.3739 122.265 22.0774 121.622 22.7479C120.99 23.4089 120.367 24.0132 119.753 24.5609C119.139 25.0992 118.596 25.5477 118.124 25.9065C117.661 26.2559 117.335 26.492 117.147 26.6147H125.022V30H111.056Z",
                            fill: "currentColor"
                        }), (0, l.jsx)("path", {
                            d: "M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z",
                            fill: "white"
                        }), (0, l.jsx)("path", {
                            d: "M32.7041 10.2721C30.2524 7.87643 26.8986 6.4 23.2 6.4C15.6889 6.4 9.6 12.4889 9.6 20C9.6 27.5111 15.6889 33.6 23.2 33.6C26.8986 33.6 30.2524 32.1236 32.7041 29.7279C29.7796 33.5413 25.1769 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C25.1769 4 29.7796 6.45869 32.7041 10.2721Z",
                            fill: "url(#paint0_linear_13610_53694)"
                        }), (0, l.jsx)("path", {
                            d: "M13.0366 27.7824C14.998 29.6989 17.681 30.88 20.6399 30.88C26.6488 30.88 31.5199 26.0089 31.5199 20C31.5199 13.9911 26.6488 9.12001 20.6399 9.12001C17.681 9.12001 14.998 10.3011 13.0366 12.2176C15.3762 9.16696 19.0583 7.20001 23.1999 7.20001C30.2691 7.20001 35.9999 12.9308 35.9999 20C35.9999 27.0692 30.2691 32.8 23.1999 32.8C19.0583 32.8 15.3762 30.833 13.0366 27.7824Z",
                            fill: "url(#paint1_linear_13610_53694)"
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M29.5999 20C29.5999 25.3019 25.3018 29.6 19.9999 29.6C14.698 29.6 10.3999 25.3019 10.3999 20C10.3999 14.6981 14.698 10.4 19.9999 10.4C25.3018 10.4 29.5999 14.6981 29.5999 20ZM26.3999 20C26.3999 23.5346 23.5345 26.4 19.9999 26.4C16.4653 26.4 13.5999 23.5346 13.5999 20C13.5999 16.4654 16.4653 13.6 19.9999 13.6C23.5345 13.6 26.3999 16.4654 26.3999 20Z",
                            fill: "url(#paint2_linear_13610_53694)"
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("linearGradient", {
                                id: "paint0_linear_13610_53694",
                                x1: "4",
                                y1: "19.4483",
                                x2: "36",
                                y2: "19.4483",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#00E0FF"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#562EC8"
                                })]
                            }), (0, l.jsxs)("linearGradient", {
                                id: "paint1_linear_13610_53694",
                                x1: "3.99992",
                                y1: "19.4483",
                                x2: "35.9999",
                                y2: "19.4483",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#00E0FF"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#562EC8"
                                })]
                            }), (0, l.jsxs)("linearGradient", {
                                id: "paint2_linear_13610_53694",
                                x1: "3.9999",
                                y1: "19.4483",
                                x2: "35.9999",
                                y2: "19.4483",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, l.jsx)("stop", {
                                    stopColor: "#00E0FF"
                                }), (0, l.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#562EC8"
                                })]
                            })]
                        })]
                    }),
                    defaultProps: {
                        w: "auto",
                        h: 8
                    }
                }),
                Te = function(e) {
                    var t = (0, Z._B)(),
                        s = (0, j.ff)("url(#paint0)", "url(#paint1)");
                    return (0, l.jsx)(Pe, {
                        className: e.className,
                        color: t.gray900,
                        css: {
                            ".logo-path": {
                                fill: s
                            }
                        }
                    })
                },
                Ie = s(26591),
                Le = function(e) {
                    var t, s = e.link,
                        i = e.onClose,
                        c = (0, a.Z)(e, ["link", "onClose"]),
                        d = (0, B.useRouter)();
                    return (0, l.jsx)(x.Z, (0, r.Z)((0, n.Z)({
                        className: (0, o.Z)(s.gaLabel, "ts-button-1 py-4 pl-12 hover:bg-modal-section-bg hover:no-underline", (null === (t = s.match) || void 0 === t ? void 0 : t.test(d.asPath)) ? null : "text-gray-500"),
                        isExternal: (0, H.b9)(s.href),
                        href: s.href,
                        onClick: i
                    }, c), {
                        children: s.title
                    }))
                },
                Ue = function(e) {
                    var t = e.links,
                        s = e.onClose,
                        c = (0, a.Z)(e, ["links", "onClose"]),
                        d = (0, B.useRouter)(),
                        u = (0, Z._B)();
                    return (0, l.jsx)(i.xu, (0, r.Z)((0, n.Z)({}, c), {
                        children: t.map((function(e, t) {
                            var n;
                            return "link" === e.type ? (0, l.jsx)(x.Z, {
                                className: (0, o.Z)("ts-headline-6 px-8 py-3 hover:bg-modal-section-bg hover:no-underline", (null === (n = e.link.match) || void 0 === n ? void 0 : n.test(d.asPath)) ? void 0 : "text-gray-500"),
                                href: e.link.href,
                                onClick: s,
                                children: e.link.title
                            }, t) : (0, l.jsxs)(N.Fragment, {
                                children: [(0, l.jsx)(O.zx, {
                                    px: 8,
                                    py: 3,
                                    justifyContent: "start",
                                    rounded: "none",
                                    variant: "ghost",
                                    color: (0, Z.iH)(d.asPath, [e.links]) ? void 0 : u.gray500,
                                    children: (0, l.jsx)("span", {
                                        className: "ts-headline-6",
                                        children: e.title
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "flex flex-col",
                                    children: e.links.map((function(e, t) {
                                        return (0, l.jsx)(Le, {
                                            link: e,
                                            onClose: s
                                        }, t)
                                    }))
                                })]
                            }, t)
                        }))
                    }))
                },
                Fe = function(e) {
                    var t = e.disclosure,
                        s = e.links,
                        a = (0, c.$G)().t,
                        i = (0, Z._B)(),
                        o = (0, j.If)().toggleColorMode,
                        d = (0, j.ff)(a("Switch to dark mode"), a("Switch to light mode")),
                        u = (0, j.ff)(le.W6_, le.Jsy),
                        x = (0, v.Sx)({
                            base: !0,
                            lg: !1
                        }),
                        h = t.onClose;
                    return (0, N.useEffect)((function() {
                        0 == x && h()
                    }), [x, h]), (0, l.jsxs)(q.u_, (0, r.Z)((0, n.Z)({
                        preserveScrollBarGap: !0,
                        size: "full",
                        scrollBehavior: "inside",
                        motionPreset: "slideInRight"
                    }, t), {
                        children: [(0, l.jsx)(q.ZA, {}), (0, l.jsxs)(q.hz, (0, r.Z)((0, n.Z)({}, Ie.L), {
                            children: [(0, l.jsxs)(q.xB, {
                                mt: 0,
                                mx: [5, 6],
                                minH: "96px",
                                d: "flex",
                                alignItems: "center",
                                children: [(0, l.jsx)(V, {
                                    mr: 4,
                                    isMobile: !0
                                }), (0, l.jsx)(O.hU, {
                                    color: i.gray500,
                                    "aria-label": d,
                                    variant: "outline",
                                    isRound: !0,
                                    icon: (0, l.jsx)(u, {
                                        fontSize: "2xl"
                                    }),
                                    onClick: o
                                })]
                            }), (0, l.jsx)(O.hU, {
                                pos: "absolute",
                                top: 6,
                                right: 4,
                                fontSize: "2xl",
                                "aria-label": a("Close Menu"),
                                variant: "ghost",
                                isRound: !0,
                                icon: (0, l.jsx)(le.OhS, {}),
                                onClick: t.onClose
                            }), (0, l.jsx)(q.fe, {
                                p: 0,
                                d: "flex",
                                flexDirection: "column",
                                children: (0, l.jsx)(Ue, {
                                    mb: 10,
                                    links: [{
                                        type: "group",
                                        title: a("Marketplace"),
                                        links: s
                                    }],
                                    onClose: t.onClose
                                })
                            })]
                        }))]
                    }))
                },
                Re = s(14924),
                Oe = s(29815),
                Ge = s(34651),
                Be = s(6650),
                ze = s(20888),
                Me = s(43654),
                Ye = s(51126),
                Ae = s(88886),
                We = s(30365),
                De = s(89997),
                $e = s(23351),
                Xe = s(88166),
                Ve = s(26473),
                qe = s(76913),
                Ke = function(e) {
                    var t = e.vm,
                        s = (0, c.$G)().t,
                        a = (0, Z._B)(),
                        o = (0, N.useState)(""),
                        d = o[0],
                        x = o[1],
                        h = t.active,
                        f = t.setActive,
                        m = t.likedContractsResp,
                        g = t.likedContractIds,
                        j = (0, N.useMemo)((function() {
                            return (0, se.pipe)(de.G(d), de.hX((function(e) {
                                return "" !== e.trim()
                            })), de.UI((function(e) {
                                return oe.Kf({
                                    keyword: e
                                })
                            })))
                        }), [d]),
                        v = (0, p.Z)((0, ae.Z)(j, {
                            resetOnNone: !0,
                            skipPending: !0
                        }), 1)[0],
                        b = (0, N.useCallback)((function(e) {
                            var t;
                            return (0, H.ec)({
                                slug: null !== (t = e.slug) && void 0 !== t ? t : (0, Ve.P8)(e.contract),
                                tab: "items"
                            })
                        }), []),
                        y = (0, N.useMemo)((function() {
                            return (0, se.pipe)(Xe.kq.get(), de.Uo, de.tS((function(e) {
                                return de.ij(e[me.Kc])
                            })), de.pF((function() {
                                return []
                            })))
                        }), []),
                        C = (0, N.useCallback)((function(e) {
                            var t, s, a, l, i, o = Xe.kq.get();
                            Xe.kq.set((0, r.Z)((0, n.Z)({}, (0, se.pipe)(o, We.pF((function() {
                                return {}
                            })))), (0, Re.Z)({}, e.network_id, [{
                                network_id: e.network_id,
                                id: e.id,
                                icon_url: null !== (s = e.icon_url) && void 0 !== s ? s : null,
                                contract: e.contract,
                                verified: e.verified,
                                stats: {
                                    total_supply: null !== (a = null === (t = e.stats) || void 0 === t ? void 0 : t.total_supply) && void 0 !== a ? a : 0
                                },
                                name: e.name,
                                name_override: null !== (l = e.name_override) && void 0 !== l ? l : null,
                                slug: null !== (i = e.slug) && void 0 !== i ? i : null
                            }].concat((0, Oe.Z)((0, se.pipe)(o, de.Uo, de.tS((function(t) {
                                return de.ij(t[e.network_id])
                            })), de.pF((function() {
                                return []
                            }))).filter((function(t) {
                                return t.id !== e.id
                            })))).slice(0, 12))))()
                        }), []);
                    return (0, l.jsxs)(i.xu, {
                        flex: 1,
                        position: ["static", "relative"],
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center space-x-4",
                            children: [(0, l.jsxs)(ge.BZ, {
                                variant: "filled",
                                role: "group",
                                children: [(0, l.jsx)(ge.Z8, {
                                    h: "full",
                                    color: a.gray400,
                                    children: (0, l.jsx)(u.nVt, {
                                        className: "h-6 w-6"
                                    })
                                }), (0, l.jsx)(ge.II, {
                                    ref: t.inputRef,
                                    className: "GA-search-bar",
                                    h: 12,
                                    pl: 10,
                                    placeholder: s("Search"),
                                    spellCheck: !1,
                                    value: d,
                                    onChange: function(e) {
                                        x(e.target.value), f(!0)
                                    },
                                    onFocus: function() {
                                        return f(!0)
                                    },
                                    color: a.gray400,
                                    bg: a.gray200,
                                    transitionProperty: "none",
                                    textStyle: "input_1",
                                    rounded: "full",
                                    _placeholder: {
                                        color: a.gray400
                                    },
                                    _focus: {
                                        color: a.gray800,
                                        borderColor: a.gray500
                                    }
                                }), "" !== d && (0, l.jsx)(ge.xH, {
                                    children: (0, l.jsx)(le.OhS, {
                                        className: "cursor-pointer",
                                        fontSize: "xl",
                                        color: "gray.700",
                                        onMouseDown: function(e) {
                                            e.preventDefault(), e.stopPropagation(), x(""), f(!0)
                                        }
                                    })
                                })]
                            }), (0, l.jsx)("span", {
                                className: "ts-button-2 block shrink-0 cursor-pointer text-gray-700 md:hidden",
                                onClick: function() {
                                    return f(!1)
                                },
                                children: s("Cancel")
                            })]
                        }), h && ("" === d.trim() ? xe.d6(m) && m.value.user_like_nft_contract.length > 0 || y.length > 0 ? (0, l.jsxs)(Je, {
                            children: [y.length > 0 && (0, l.jsx)(Qe, {
                                title: s("Recent"),
                                children: (0, l.jsx)("div", {
                                    className: "grid w-full grid-cols-searchbar-result gap-y-2 p-2",
                                    children: y.slice(0, 12).map((function(e) {
                                        return (0, l.jsx)(tt, {
                                            contract: e,
                                            liked: g.has(e.id),
                                            onClick: function() {
                                                C(e);
                                                var t = b(e);
                                                z().push(t), f(!1), x("")
                                            }
                                        })
                                    }))
                                })
                            }), xe.d6(m) && m.value.user_like_nft_contract.length > 0 && (0, l.jsx)(Qe, {
                                title: s("Collections"),
                                children: (0, l.jsx)("div", {
                                    className: "grid w-full grid-cols-searchbar-result gap-y-2 p-2",
                                    children: m.value.user_like_nft_contract.slice(0, 12).map((function(e) {
                                        var t = e.contract;
                                        return (0, l.jsx)(tt, {
                                            contract: t,
                                            liked: g.has(t.id),
                                            onClick: function() {
                                                C(t);
                                                var e = b(t);
                                                z().push(e), f(!1), x("")
                                            }
                                        })
                                    }))
                                })
                            })]
                        }) : null : (0, l.jsx)(Je, {
                            children: xe.d6(v) && (v.value.contracts.length + v.value.users.length + v.value.nfts.length > 0 ? (0, l.jsxs)(i.Kq, {
                                spacing: 0,
                                children: [v.value.contracts.length > 0 && (0, l.jsx)(Qe, {
                                    title: s("Collections"),
                                    children: (0, l.jsx)(et, {
                                        children: v.value.contracts.slice(0, 12).map((function(e) {
                                            return (0, l.jsx)(tt, {
                                                contract: e,
                                                liked: g.has(e.id),
                                                onClick: function() {
                                                    C(e);
                                                    var t = b(e);
                                                    z().push(t), f(!1), x("")
                                                }
                                            })
                                        }))
                                    })
                                }), v.value.users.length > 0 && (0, l.jsx)(Qe, {
                                    title: s("Users"),
                                    children: (0, l.jsx)(et, {
                                        children: v.value.users.map((function(e) {
                                            var t;
                                            return (0, l.jsxs)(i.Ug, {
                                                as: "li",
                                                onClick: function() {
                                                    var t = (0, H.pG)(e.address);
                                                    z().push(t), f(!1), x("")
                                                },
                                                h: 16,
                                                px: 3,
                                                rounded: "full",
                                                spacing: 3,
                                                cursor: "pointer",
                                                userSelect: "none",
                                                _hover: {
                                                    bg: a.gray200
                                                },
                                                children: [(0, l.jsx)(w.Z, {
                                                    data: e,
                                                    boxSize: 10
                                                }), (0, l.jsxs)(i.Ug, {
                                                    minW: 0,
                                                    children: [(0, l.jsx)(i.xu, {
                                                        noOfLines: 1,
                                                        color: a.gray900,
                                                        textStyle: "body_3_bold",
                                                        overflowWrap: "anywhere",
                                                        wordBreak: "break-all",
                                                        children: null !== (t = e.nickname) && void 0 !== t ? t : (0, ce.P5)(e.address)
                                                    }), e.verified && (0, l.jsx)(ze.Z, {
                                                        boxSize: 5
                                                    })]
                                                })]
                                            }, e.id)
                                        }))
                                    })
                                }), v.value.nfts.length > 0 && (0, l.jsx)(Qe, {
                                    title: s("Items"),
                                    children: (0, l.jsx)(et, {
                                        children: v.value.nfts.slice(0, 4).map((function(e) {
                                            return (0, l.jsx)(st, {
                                                nft: e,
                                                onClick: function() {
                                                    var t = (0, H.ND)({
                                                        networkId: e.network_id,
                                                        tokenContract: e.contract.contract,
                                                        tokenId: e.token_id
                                                    });
                                                    z().push(t), f(!1), x("")
                                                }
                                            })
                                        }))
                                    })
                                })]
                            }) : (0, l.jsx)(Be.Z, {
                                label: s("No Results Found")
                            }))
                        }))]
                    })
                },
                Je = function(e) {
                    var t = e.children,
                        s = (0, Z._B)(),
                        n = (0, j.ff)("light_1", "dark_1");
                    return (0, l.jsx)(i.xu, {
                        position: ["fixed", "absolute"],
                        top: ["88px", "72px"],
                        right: [4, 0],
                        left: [4, 0],
                        maxH: "480px",
                        overflowY: "auto",
                        borderRadius: 12,
                        bg: s.modalBg,
                        shadow: n,
                        children: t
                    })
                },
                Qe = function(e) {
                    var t = e.title,
                        s = e.children;
                    return (0, l.jsxs)("section", {
                        className: "flex flex-col",
                        children: [(0, l.jsx)("header", {
                            className: "ts-hairline-3 border-b py-3 px-4 text-gray-500",
                            children: t
                        }), s]
                    })
                },
                et = function(e) {
                    var t = e.children;
                    return (0, l.jsx)("div", {
                        className: "grid w-full grid-cols-searchbar-result gap-y-2 p-2",
                        children: t
                    })
                },
                tt = function(e) {
                    var t, s, n, r = e.contract,
                        a = e.liked,
                        i = e.onClick,
                        o = (0, c.$G)().t,
                        d = (0, Me.$)();
                    return (0, l.jsxs)("li", {
                        className: "flex h-16 cursor-pointer select-none items-center space-x-3 rounded-full px-3 hover:bg-gray-200",
                        onClick: i,
                        children: [(0, l.jsx)(Ge.Ei, {
                            className: "h-10 w-10 shrink-0 rounded-full",
                            src: (0, Ye.VB)(null !== (s = r.icon_url) && void 0 !== s ? s : d, 128)
                        }), (0, l.jsxs)("div", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: [(0, l.jsxs)("div", {
                                className: "flex min-w-0 items-center space-x-1",
                                children: [(0, l.jsx)("p", {
                                    className: "ts-body-3 truncate font-bold text-gray-900",
                                    children: (0, Ae.E0)(r)
                                }), r.verified && (0, l.jsx)(u.SN$, {
                                    className: "h-5 w-5 text-primary-1"
                                }), a && (0, l.jsx)(u.m9i, {
                                    className: "h-4 w-4 text-primary-3"
                                })]
                            }), (0, l.jsx)("p", {
                                className: "ts-caption-2 text-gray-500",
                                children: o("{{count}} items", {
                                    count: null !== (n = null === (t = r.stats) || void 0 === t ? void 0 : t.total_supply) && void 0 !== n ? n : 0
                                })
                            })]
                        })]
                    }, r.id)
                },
                st = function(e) {
                    var t = e.nft,
                        s = t.contract,
                        i = t.metadata,
                        o = e.onClick,
                        c = (0, a.Z)(e.nft, ["contract", "metadata"]),
                        d = (0, $e.PK)(null === i || void 0 === i ? void 0 : i.meta),
                        x = (0, De.G)(d, s, c.token_id);
                    return (0, l.jsxs)("li", {
                        className: "flex h-16 cursor-pointer select-none items-center space-x-3 px-3 hover:bg-gray-200",
                        onClick: o,
                        children: [(0, l.jsx)(qe.Dp, (0, r.Z)((0, n.Z)({
                            className: "h-10 w-10 shrink-0"
                        }, (0, qe.KO)((0, $e.YZ)(d, s.display_options))), {
                            tokenAddress: s.contract,
                            tokenId: c.token_id,
                            imageAlt: x
                        })), (0, l.jsxs)("div", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: [(0, l.jsx)("p", {
                                className: "ts-body-3 truncate font-bold text-gray-900",
                                children: x
                            }), (0, l.jsxs)("div", {
                                className: "flex min-w-0 items-center space-x-1",
                                children: [(0, l.jsx)("p", {
                                    className: "ts-caption-2 truncate text-gray-500",
                                    children: (0, Ae.E0)(s)
                                }), s.verified && (0, l.jsx)(u.SN$, {
                                    className: "h-5 w-5 text-primary-1"
                                })]
                            })]
                        })]
                    }, c.id)
                },
                nt = function(e) {
                    var t = e.className,
                        s = (0, c.$G)().t,
                        n = (0, I.jD)(),
                        r = (0, y.E)(),
                        a = (0, p.Z)((0, S.Y)("cart-animation-opened", k.z.boolean()), 2),
                        i = a[0],
                        d = void 0 !== i && i,
                        x = a[1];
                    return (0, N.useEffect)((function() {
                        var e = n.openDrawer,
                            t = n.animationSubject.subscribe((0, m.Z)((function() {
                                return (0, g.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, r.start({
                                                y: [null, 2, -2, 0],
                                                transition: {
                                                    duration: .7,
                                                    times: [0, .2, .3, .4]
                                                }
                                            })];
                                        case 1:
                                            return t.sent(), d ? [2] : (e(), x(!0), [2])
                                    }
                                }))
                            })));
                        return function() {
                            return t.unsubscribe()
                        }
                    }), [r, n.animationSubject, n.openDrawer, d, x]), (0, l.jsxs)(C.E.div, {
                        className: (0, o.Z)(t, "relative"),
                        animate: r,
                        children: [(0, l.jsx)(T.h, {
                            className: "h-10 w-10",
                            icon: (0, l.jsx)(u.bcl, {
                                className: "h-6 w-6 text-gray-500"
                            }),
                            "aria-label": s("Shopping Cart"),
                            onClick: n.openDrawer
                        }), n.itemCount > 0 && (0, l.jsx)("span", {
                            className: "ts-caption-3 absolute top-0 right-0 min-w-[16px] rounded-full bg-primary-4 px-1 text-center font-bold text-button-text",
                            children: n.itemCount
                        })]
                    })
                },
                rt = function() {
                    var e, t = (0, c.$G)().t,
                        s = (0, j.If)().toggleColorMode,
                        n = null !== (e = (0, v.Sx)({
                            base: !1,
                            lg: !0
                        })) && void 0 !== e && e,
                        r = (0, j.ff)(t("Switch to dark mode"), t("Switch to light mode")),
                        a = (0, j.ff)(u.W6_, u.Jsy),
                        h = (0, b.qY)(),
                        m = (0, b.qY)(),
                        g = function() {
                            var e = (0, N.useState)(!1),
                                t = e[0],
                                s = e[1],
                                n = (0, N.useRef)(null),
                                r = (0, N.useCallback)((function(e) {
                                    s(e), e && setTimeout((function() {
                                        var e;
                                        null === (e = n.current) || void 0 === e || e.focus()
                                    }), 200)
                                }), [s]);
                            (0, N.useEffect)((function() {
                                var e = function() {
                                    r(!1)
                                };
                                return document.addEventListener("click", e),
                                    function() {
                                        return document.removeEventListener("click", e)
                                    }
                            }), [r]);
                            var a = (0, f.aC)().user,
                                l = (0, N.useMemo)((function() {
                                    return t ? (0, se.pipe)((0, f.n5)(a), de.UI((function(e) {
                                        return oe.e_({
                                            userId: e
                                        })
                                    }))) : de.YP
                                }), [t, a]),
                                i = (0, p.Z)((0, ae.Z)(l, {
                                    resetOnNone: !0,
                                    skipPending: !0
                                }), 1)[0],
                                o = (0, N.useMemo)((function() {
                                    return xe.d6(i) ? new Set(i.value.user_like_nft_contract.map((function(e) {
                                        return e.contract.id
                                    }))) : new Set
                                }), [i]);
                            return {
                                active: t,
                                setActive: r,
                                likedContractsResp: i,
                                likedContractIds: o,
                                inputRef: n
                            }
                        }(),
                        y = (0, f.aC)(),
                        C = y.user,
                        k = y.tryWeb3SignIn,
                        S = y.signOut,
                        I = (0, P.n)(),
                        L = I.offer,
                        U = I.activity,
                        R = L || U,
                        O = (0, N.useMemo)((function() {
                            switch (C._tag) {
                                case "anonymous":
                                    return (0, l.jsxs)("div", {
                                        className: "relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-bg bg-clip-padding",
                                        children: [(0, l.jsx)("span", {
                                            className: "absolute inset-0 -z-10 -m-0.5 animate-avatar rounded-full bg-gradient-to-r from-[#3772FF] to-[#9757D7]"
                                        }), (0, l.jsx)(u.PRO, {
                                            className: "h-5 w-5 text-gray-500"
                                        })]
                                    });
                                case "pending":
                                    return (0, l.jsx)("span", {
                                        className: "flex h-10 w-10 items-center justify-center rounded-full border-2",
                                        children: (0, l.jsx)(_.a, {
                                            boxSize: 5
                                        })
                                    });
                                case "web3-registered":
                                case "registered":
                                    return (0, l.jsx)(w.Z, {
                                        data: C.meta,
                                        boxSize: 10
                                    })
                            }
                        }), [C]),
                        G = (0, Z.U1)();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("nav", {
                            className: "sticky top-0 z-[1100] h-[72px] bg-bg/80 shadow-[0px_1px_0px_rgba(0,0,0,0.05)] backdrop-blur-md dark:shadow-[0px_1px_0px_rgba(255,255,255,0.05)] lg:h-[80px]",
                            children: (0, l.jsxs)("div", {
                                className: (0, o.Z)("flex h-full items-center px-4 lg:px-8", g.active ? "space-x-0 md:space-x-6" : "space-x-4 md:space-x-6"),
                                children: [(0, l.jsxs)(x.Z, {
                                    className: (0, o.Z)("relative", g.active && "hidden md:block"),
                                    hoverStyle: "opacity",
                                    href: H.Hl,
                                    children: [(0, l.jsx)(Te, {}), !d.Qb && (0, l.jsx)(i.xu, {
                                        className: "px-1 py-0.5 text-xs",
                                        display: ["none", "inline-block"],
                                        backgroundColor: "#456EF2",
                                        borderRadius: "4px",
                                        color: "white",
                                        children: "Testnet"
                                    })]
                                }), (0, l.jsx)(He, {
                                    links: G.market
                                }), (0, l.jsx)("div", {
                                    className: "hidden flex-1 md:block",
                                    children: (0, l.jsx)(Ke, {
                                        vm: g
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "flex flex-1 justify-end md:hidden",
                                    children: g.active ? (0, l.jsx)(Ke, {
                                        vm: g
                                    }) : (0, l.jsx)(T.h, {
                                        className: "h-10 w-10",
                                        icon: (0, l.jsx)(u.nVt, {
                                            className: "h-6 w-6 text-gray-500"
                                        }),
                                        "aria-label": t("Search"),
                                        onClick: function(e) {
                                            e.stopPropagation(), g.setActive(!0)
                                        }
                                    })
                                }), !g.active && (0, l.jsx)(nt, {
                                    className: "block lg:hidden"
                                }), (0, l.jsxs)("div", {
                                    className: "hidden items-center space-x-3 lg:flex",
                                    children: [n && d.Qb && (0, l.jsx)(F, {}), (0, l.jsx)(V, {}), (0, l.jsx)(T.h, {
                                        className: "h-10 w-10",
                                        icon: (0, l.jsx)(a, {
                                            className: "h-6 w-6 text-gray-500"
                                        }),
                                        "aria-label": r,
                                        onClick: s
                                    }), (0, l.jsx)(nt, {})]
                                }), (0, l.jsxs)("div", {
                                    className: (0, o.Z)("relative", g.active && "hidden md:flex"),
                                    children: [(0, l.jsx)(T.h, {
                                        className: "GA-nav-avatar h-12 w-12 outline-none",
                                        icon: O,
                                        "aria-label": t("Open User Menu"),
                                        onClick: function() {
                                            switch (C._tag) {
                                                case "pending":
                                                    S();
                                                    break;
                                                case "anonymous":
                                                    k();
                                                    break;
                                                case "web3-registered":
                                                case "registered":
                                                    m.onToggle()
                                            }
                                        }
                                    }), R && (0, l.jsx)("span", {
                                        className: "absolute top-1 right-1 h-2 w-2 rounded-full bg-primary-4"
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: (0, o.Z)("lg:hidden", g.active && "hidden md:flex"),
                                    children: (0, l.jsx)(T.h, {
                                        className: "-mr-2 h-12 w-12 text-gray-900",
                                        icon: (0, l.jsx)(u.V4Z, {
                                            className: "h-6 w-6"
                                        }),
                                        "aria-label": t("Open Menu"),
                                        onClick: h.onToggle
                                    })
                                })]
                            })
                        }), (0, l.jsx)(Fe, {
                            disclosure: h,
                            links: G.market
                        }), (0, E.lt)(C) && (0, l.jsx)(Ee, {
                            disclosure: m,
                            user: C
                        })]
                    })
                },
                at = function() {
                    var e = (0, c.$G)().t,
                        t = [{
                            title: "Twitter",
                            icon: u.OH2,
                            href: "https://twitter.com/the_x2y2"
                        }, {
                            title: "Discord",
                            icon: u.Yx1,
                            href: "https://discord.gg/x2y2-io"
                        }, {
                            title: "Mirror",
                            icon: u._qe,
                            href: "https://mirror.xyz/x2y2.eth"
                        }],
                        s = [{
                            title: e("Contact Us"),
                            href: "https://form.nativeforms.com/x2y2-collaboration"
                        }, {
                            title: e("Docs"),
                            href: "https://docs.x2y2.io/"
                        }, {
                            title: e("Audit Report"),
                            href: "https://docs.x2y2.io/assets/files/X2Y2_Protocol_Report-93b524ab7d8e9a000efcfeec12fc4aa4.pdf"
                        }, {
                            title: e("Brand"),
                            href: "https://docs.x2y2.io/about/brands"
                        }, {
                            title: e("Terms"),
                            href: "/page/terms"
                        }, {
                            title: e("Privacy"),
                            href: "/page/privacy"
                        }];
                    return (0, l.jsxs)("footer", {
                        className: "flex flex-col space-y-10 border-t px-6 py-10 lg:flex-row lg:justify-between lg:space-y-0 lg:p-16",
                        children: [(0, l.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, l.jsx)(Te, {
                                    className: "!h-6"
                                }), (0, l.jsx)("p", {
                                    className: "ts-body-3 ml-auto text-gray-500 lg:ml-6",
                                    children: e("\xa9 2022 X2Y2")
                                })]
                            }), (0, l.jsx)("p", {
                                className: "ts-body-3 text-gray-500",
                                children: (0, l.jsxs)(c.cC, {
                                    t: e,
                                    children: [(0, l.jsx)("span", {
                                        className: "text-gray-700",
                                        children: "100% revenue shared"
                                    }), " with X2Y2 token stakers."]
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col space-y-2 lg:items-end",
                            children: [(0, l.jsx)("div", {
                                className: "flex space-x-6 py-1 lg:space-x-8",
                                children: t.map((function(e, t) {
                                    return (0, l.jsx)(x.Z, {
                                        className: "flex",
                                        hoverStyle: "opacity",
                                        "aria-label": e.title,
                                        href: e.href,
                                        isExternal: !0,
                                        children: (0, l.jsx)(e.icon, {
                                            className: "h-5 w-5"
                                        })
                                    }, t)
                                }))
                            }), (0, l.jsx)("div", {
                                className: "flex flex-wrap gap-x-3 gap-y-2 lg:gap-x-5",
                                children: s.map((function(e, t) {
                                    return (0, l.jsx)(x.Z, {
                                        className: "ts-body-3 text-gray-500",
                                        href: e.href,
                                        isExternal: e.href.startsWith("http"),
                                        children: e.title
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                lt = function(e) {
                    var t = e.hideFooter,
                        s = void 0 !== t && t,
                        o = e.children,
                        c = (0, a.Z)(e, ["hideFooter", "children"]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(rt, {}), (0, l.jsx)(h, {}), (0, l.jsxs)(i.W2, (0, r.Z)((0, n.Z)({
                            d: "flex",
                            flexDir: "column",
                            flex: 1,
                            maxW: "6xl"
                        }, c), {
                            children: [o, (0, l.jsx)(i.LZ, {})]
                        })), !s && (0, l.jsx)(at, {})]
                    })
                },
                it = function(e) {
                    var t = e.className,
                        s = e.children,
                        n = e.hideFooter,
                        r = void 0 !== n && n;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(rt, {}), (0, l.jsx)(h, {}), (0, l.jsx)("div", {
                            className: (0, o.Z)("flex flex-1 flex-col", t),
                            children: s
                        }), !r && (0, l.jsx)(at, {})]
                    })
                },
                ot = function(e) {
                    var t = e.className,
                        s = e.children;
                    return (0, l.jsx)(it, {
                        className: t,
                        children: (0, l.jsx)(f.dr, {
                            children: s
                        })
                    })
                }
        },
        34071: function(e, t, s) {
            s.d(t, {
                Y: function() {
                    return i
                },
                t: function() {
                    return l
                }
            });
            var n = s(85893),
                r = s(33729),
                a = s(86010),
                l = function(e) {
                    var t = e.children,
                        s = e.className;
                    return (0, n.jsx)(r.O.List, {
                        className: "overflow-x-auto overflow-y-hidden",
                        children: (0, n.jsx)("div", {
                            className: (0, a.Z)(s, "flex w-full min-w-max space-x-1 border-b border-gray-300 lg:space-x-2"),
                            children: t
                        })
                    })
                },
                i = function(e) {
                    var t = e.children,
                        s = e.disabled,
                        l = e.compact,
                        i = void 0 !== l && l;
                    return (0, n.jsx)(r.O, {
                        className: (0, a.Z)("ts-button-2 relative shrink-0 px-3 py-2 text-gray-500 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent ui-selected:text-gray-900", !i && "lg:ts-button-1 lg:px-4 lg:py-3"),
                        disabled: s,
                        children: function(e) {
                            var s = e.selected;
                            return (0, n.jsxs)(n.Fragment, {
                                children: [t, s && (0, n.jsx)("div", {
                                    className: "absolute inset-x-0 -bottom-px h-0.5 bg-gray-700"
                                })]
                            })
                        }
                    })
                }
        },
        20888: function(e, t, s) {
            var n = s(26042),
                r = s(85893),
                a = s(47398),
                l = s(23641),
                i = s(21645);
            t.Z = function(e) {
                var t = (0, l.$G)().t;
                return (0, r.jsx)(a.u, {
                    label: t("This account is verified because it\u2019s notable in art, entertainment, or another designated category."),
                    placement: "top",
                    hasArrow: !0,
                    variant: "invert",
                    children: (0, r.jsx)(i.SN$, (0, n.Z)({
                        color: "primary_1.500",
                        boxSize: 8
                    }, e))
                })
            }
        },
        26591: function(e, t, s) {
            s.d(t, {
                L: function() {
                    return n
                }
            });
            var n = {
                minH: "unset",
                maxH: "unset",
                h: "100%",
                containerProps: {
                    minH: "unset",
                    maxH: "unset"
                }
            }
        }
    }
]);
//# sourceMappingURL=3788-38b62e20958c1058.js.map