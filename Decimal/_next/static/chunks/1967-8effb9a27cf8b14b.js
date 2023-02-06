"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1967], {
        83526: function(e, r, t) {
            t.d(r, {
                BL: function() {
                    return p
                },
                XW: function() {
                    return d
                },
                _6: function() {
                    return w
                },
                rO: function() {
                    return v
                },
                tH: function() {
                    return b
                }
            });
            var n = t(47568),
                a = t(20414),
                s = t(21046),
                u = t(57457),
                c = t(80148),
                i = t(16869),
                o = t(79948),
                l = t(68098),
                h = t(60159),
                f = t(41278),
                w = function() {
                    var e = (0, n.Z)((function(e, r) {
                        var t, n, s, i, h, w, d;
                        return (0, a.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (t = e.web3Provider, n = t.network.chainId, s = c.Vf[n], (0, f.oR)(s)) throw new o.Gl(l.fH);
                                    i = u.Dd.connect(s, t.getSigner()), h = {}, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, i.estimateGas.deposit(r)];
                                case 2:
                                    return w = a.sent(), h.gasLimit = w.mul(3).div(2), [3, 4];
                                case 3:
                                    return a.sent(), [3, 4];
                                case 4:
                                    return [4, i.deposit(r, h)];
                                case 5:
                                    return [4, (d = a.sent()).wait()];
                                case 6:
                                    return a.sent(), [2, d.hash]
                            }
                        }))
                    }));
                    return function(r, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, n.Z)((function(e, r) {
                        var t, n, s, i, h, w, d, p, v, b;
                        return (0, a.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (t = e.web3Provider, n = t.network.chainId, s = c.Vf[n], (0, f.oR)(s)) throw new o.Gl(l.fH);
                                    return [4, (i = u.Dd.connect(s, t.getSigner())).calculateSharePriceInX2Y2()];
                                case 1:
                                    h = a.sent(), w = h.div(Math.pow(10, 9)), d = r.div(w).mul(Math.pow(10, 9)), p = {}, a.label = 2;
                                case 2:
                                    return a.trys.push([2, 4, , 5]), [4, i.estimateGas.withdraw(d)];
                                case 3:
                                    return v = a.sent(), p.gasLimit = v.mul(3).div(2), [3, 5];
                                case 4:
                                    return a.sent(), [3, 5];
                                case 5:
                                    return [4, i.withdraw(d, p)];
                                case 6:
                                    return [4, (b = a.sent()).wait()];
                                case 7:
                                    return a.sent(), [2, b.hash]
                            }
                        }))
                    }));
                    return function(r, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, n.Z)((function(e) {
                        var r, t, n, s, i, h, w;
                        return (0, a.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (r = e.web3Provider, t = r.network.chainId, n = c.Vf[t], (0, f.oR)(n)) throw new o.Gl(l.fH);
                                    s = u.Dd.connect(n, r.getSigner()), i = {}, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, s.estimateGas.withdrawAll()];
                                case 2:
                                    return h = a.sent(), i.gasLimit = h.mul(3).div(2), [3, 4];
                                case 3:
                                    return a.sent(), [3, 4];
                                case 4:
                                    return [4, s.withdrawAll(i)];
                                case 5:
                                    return [4, (w = a.sent()).wait()];
                                case 6:
                                    return a.sent(), [2, w.hash]
                            }
                        }))
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = (0, n.Z)((function(e) {
                        var r, t, n, o, l, h;
                        return (0, a.__generator)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (r = e.web3Provider, t = r.network.chainId, n = c.Vf[t], (0, f.oR)(n)) return [3, 5];
                                    a.label = 1;
                                case 1:
                                    return a.trys.push([1, 4, , 5]), o = (0, i.TI)(t), l = u.Dd.connect(n, o), [4, r.getSigner().getAddress()];
                                case 2:
                                    return h = a.sent(), [4, l.calculateSharesValueInX2Y2(h)];
                                case 3:
                                    return [2, a.sent()];
                                case 4:
                                    return a.sent(), [3, 5];
                                case 5:
                                    return [2, s._Y]
                            }
                        }))
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function(e) {
                    var r = e.WETH,
                        t = e.X2Y2,
                        n = 100 * Math.pow(1 + r / h._G / 100, h._G) - 100;
                    return {
                        wethAPY: n,
                        x2y2APR: t,
                        totalAPY: (100 + n) * (100 + t) / 100 - 100
                    }
                }
        },
        60159: function(e, r, t) {
            t.d(r, {
                BL: function() {
                    return P
                },
                NA: function() {
                    return T
                },
                T0: function() {
                    return _
                },
                XW: function() {
                    return m
                },
                _6: function() {
                    return g
                },
                _G: function() {
                    return v
                },
                gL: function() {
                    return y
                },
                rO: function() {
                    return k
                }
            });
            var n = t(47568),
                a = t(828),
                s = t(20414),
                u = t(8198),
                c = t(21046),
                i = t(61744),
                o = t(57457),
                l = t(80148),
                h = t(16869),
                f = t(79948),
                w = t(68098),
                d = t(83526),
                p = t(41278),
                v = 365,
                b = new u.vU([{
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "numberBlocks",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "rewardPerBlock",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "reward",
                        type: "uint256"
                    }],
                    name: "NewRewardPeriod",
                    type: "event"
                }]),
                g = function() {
                    var e = (0, n.Z)((function(e, r, t) {
                        var n, a, u, c, i, h, d;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (n = e.web3Provider, a = n.network.chainId, u = l.s[a], (0, p.oR)(u)) throw new f.Gl(w.fH);
                                    c = o.pT.connect(u, n.getSigner()), i = {}, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, c.estimateGas.deposit(r, t)];
                                case 2:
                                    return h = s.sent(), i.gasLimit = h.mul(3).div(2), [3, 4];
                                case 3:
                                    return s.sent(), [3, 4];
                                case 4:
                                    return [4, c.deposit(r, t, i)];
                                case 5:
                                    return [4, (d = s.sent()).wait()];
                                case 6:
                                    return s.sent(), [2, d.hash]
                            }
                        }))
                    }));
                    return function(r, t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var e = (0, n.Z)((function(e) {
                        var r, t, n, a, u, c, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (r = e.web3Provider, t = r.network.chainId, n = l.s[t], (0, p.oR)(n)) throw new f.Gl(w.fH);
                                    a = o.pT.connect(n, r.getSigner()), u = {}, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, a.estimateGas.harvest()];
                                case 2:
                                    return c = s.sent(), u.gasLimit = c.mul(3).div(2), [3, 4];
                                case 3:
                                    return s.sent(), [3, 4];
                                case 4:
                                    return [4, a.harvest(u)];
                                case 5:
                                    return [4, (i = s.sent()).wait()];
                                case 6:
                                    return s.sent(), [2, i.hash]
                            }
                        }))
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = (0, n.Z)((function(e, r, t) {
                        var n, a, u, c, i, h, d, v, b, g;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (n = e.web3Provider, a = n.network.chainId, u = l.s[a], (0, p.oR)(u)) throw new f.Gl(w.fH);
                                    return [4, (c = o.pT.connect(u, n.getSigner())).calculateSharePriceInX2Y2()];
                                case 1:
                                    i = s.sent(), h = i.div(Math.pow(10, 9)), d = r.div(h).mul(Math.pow(10, 9)), v = {}, s.label = 2;
                                case 2:
                                    return s.trys.push([2, 4, , 5]), [4, c.estimateGas.withdraw(d, t)];
                                case 3:
                                    return b = s.sent(), v.gasLimit = b.mul(3).div(2), [3, 5];
                                case 4:
                                    return s.sent(), [3, 5];
                                case 5:
                                    return [4, c.withdraw(d, t, v)];
                                case 6:
                                    return [4, (g = s.sent()).wait()];
                                case 7:
                                    return s.sent(), [2, g.hash]
                            }
                        }))
                    }));
                    return function(r, t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                P = function() {
                    var e = (0, n.Z)((function(e, r) {
                        var t, n, a, u, c, i, h;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (t = e.web3Provider, n = t.network.chainId, a = l.s[n], (0, p.oR)(a)) throw new f.Gl(w.fH);
                                    u = o.pT.connect(a, t.getSigner()), c = {}, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, u.estimateGas.withdrawAll(r)];
                                case 2:
                                    return i = s.sent(), c.gasLimit = i.mul(3).div(2), [3, 4];
                                case 3:
                                    return s.sent(), [3, 4];
                                case 4:
                                    return [4, u.withdrawAll(r, c)];
                                case 5:
                                    return [4, (h = s.sent()).wait()];
                                case 6:
                                    return s.sent(), [2, h.hash]
                            }
                        }))
                    }));
                    return function(r, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = (0, n.Z)((function(e) {
                        var r, t, n, a, u, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (r = e.web3Provider, t = r.network.chainId, n = l.s[t], (0, p.oR)(n)) return [3, 5];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 4, , 5]), a = (0, h.TI)(t), u = o.pT.connect(n, a), [4, r.getSigner().getAddress()];
                                case 2:
                                    return i = s.sent(), [4, u.calculateSharesValueInX2Y2(i)];
                                case 3:
                                    return [2, s.sent()];
                                case 4:
                                    return s.sent(), [3, 5];
                                case 5:
                                    return [2, c._Y]
                            }
                        }))
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    var e = (0, n.Z)((function(e) {
                        var r, t, n, a, u, i;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (r = e.web3Provider, t = r.network.chainId, n = l.s[t], (0, p.oR)(n)) return [3, 5];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 4, , 5]), a = (0, h.TI)(t), u = o.pT.connect(n, a), [4, r.getSigner().getAddress()];
                                case 2:
                                    return i = s.sent(), [4, u.calculatePendingRewards(i)];
                                case 3:
                                    return [2, s.sent()];
                                case 4:
                                    return s.sent(), [3, 5];
                                case 5:
                                    return [2, c._Y]
                            }
                        }))
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function(e) {
                    var r = 0,
                        t = 0;
                    return e.forEach((function(e) {
                        t += e.numberBlocks, r += e.reward
                    })), r / t
                },
                S = function() {
                    var e = (0, n.Z)((function(e, r) {
                        var t, n, u, c, o, l, h, f, w;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, e.getBlockNumber()];
                                case 1:
                                    return t = s.sent(), [4, e.getLogs({
                                        fromBlock: t - 3e4,
                                        address: r.address,
                                        topics: ["0x55b4fa63fe43865f67b4f2c4a4df1cf9e6c1f85767211b44b45cf4649b2c2b51"]
                                    })];
                                case 2:
                                    return (n = s.sent()).length > 0 ? (u = n.map((function(e) {
                                        var r = b.parseLog(e);
                                        return {
                                            block: e.blockNumber,
                                            numberBlocks: parseInt(r.args.numberBlocks.toString()),
                                            reward: Number(i.formatEther(r.args.reward))
                                        }
                                    })), c = u[0].block, o = u.length > 1 ? u[u.length - 1].block : t, [4, Promise.all([e.getBlock(c), e.getBlock(o)])]) : [3, 4];
                                case 3:
                                    return l = a.Z.apply(void 0, [s.sent(), 2]), h = l[0], f = l[1], [2, {
                                        blockPerDay: Math.ceil(86400 * (o - c) / (f.timestamp - h.timestamp)),
                                        currentRewardPerBlock: R(u)
                                    }];
                                case 4:
                                    return [4, r.currentRewardPerBlock()];
                                case 5:
                                    return w = s.sent(), [2, {
                                        blockPerDay: 7160,
                                        currentRewardPerBlock: Number(i.formatEther(w))
                                    }];
                                case 6:
                                    return [2]
                            }
                        }))
                    }));
                    return function(r, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var e = (0, n.Z)((function(e, r) {
                        var t, n, u, c, f, w, d, b, g, y, m, P, k, _, R, T;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (t = l.v2[e], n = l.s[e], (0, p.oR)(t) || (0, p.oR)(n)) return [3, 5];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 4, , 5]), u = (0, h.TI)(e), c = o.JY.connect(t, u), f = o.pT.connect(n, u), [4, S(u, f)];
                                case 2:
                                    return w = s.sent(), [4, Promise.all([c.rewardPerBlockForStaking(), c.totalAmountStaked()])];
                                case 3:
                                    return d = a.Z.apply(void 0, [s.sent(), 2]), b = d[0], g = d[1], y = w.currentRewardPerBlock * w.blockPerDay, m = Number(i.formatEther(b.mul(w.blockPerDay))), P = Number(i.formatEther(g)), _ = null !== (k = r.WETH) && void 0 !== k ? k : 0, T = null !== (R = r.X2Y2) && void 0 !== R ? R : 0, [2, {
                                        WETH: (0 === _ || 0 === T ? 0 : y * _ * 100 / (P * T)) * v,
                                        X2Y2: 100 * m / P * v,
                                        dailyWethPer10000x2y2: 1e4 * y / P,
                                        dailyUSDPer10000x2y2: y * _ * 1e4 / P
                                    }];
                                case 4:
                                    return s.sent(), [3, 5];
                                case 5:
                                    return [2, {
                                        WETH: 0,
                                        X2Y2: 0,
                                        dailyWethPer10000x2y2: 0,
                                        dailyUSDPer10000x2y2: 0
                                    }]
                            }
                        }))
                    }));
                    return function(r, t) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, n.Z)((function(e, r) {
                    var t, n;
                    return (0, s.__generator)(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, T(e, r)];
                            case 1:
                                return t = a.sent(), [4, (0, d.tH)(t)];
                            case 2:
                                return n = a.sent(), [2, {
                                    x2y2APR: t.X2Y2,
                                    wethAPR: t.WETH,
                                    wethAPY: n.wethAPY,
                                    estimateAPR: t.X2Y2 + t.WETH,
                                    estimateAPY: n.totalAPY,
                                    dailyWethPer10000x2y2: t.dailyWethPer10000x2y2,
                                    dailyUSDPer10000x2y2: t.dailyUSDPer10000x2y2
                                }]
                        }
                    }))
                }))
            }()
        }
    }
]);
//# sourceMappingURL=1967-8effb9a27cf8b14b.js.map