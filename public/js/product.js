var a, b, cp, gp, cq, dq, tB, uB, lB, mB, cB, dB, TA, UA, Qz, Rz, wz, xz, lz, mz, Ru, Su, Ot, Pt, ts, us, Mr, Nr, LD;
a = this, b = function (t, e, c) {
		"use strict";

		function n(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}

		function a(t, e, i) {
			return e && n(t.prototype, e), i && n(t, i), t
		}

		function h() {
			return (h = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
				}
				return t
			}).apply(this, arguments)
		}
		e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
		var o, i, s, r, l, d, u, p, f, m, g, v, w, y, b, _, x, T, k, C, S, z, I, L, E, O, A, P, D, W, M, H, F, R, j, $, N, B, X, Y, q, U, J, Q, V, Z, G, K, tt, et, it, nt, ot, st, at, rt, lt, dt, ct, ht, ut, pt, ft, mt, gt, vt, wt, yt, bt, _t, xt, Tt, kt, Ct, St, zt, It, Lt, Et, Ot, At, Pt, Dt, Wt, Mt, Ht, Ft, Rt, jt, $t, Nt, Bt, Xt, Yt, qt, Ut, Jt, Qt, Vt, Zt, Gt, Kt, te, ee, ie, ne, oe, se, ae, re, le, de, ce, he, ue, pe, fe, me, ge, ve, we, ye, be, _e, xe, Te, ke, Ce, Se, ze, Ie, Le, Ee, Oe, Ae, Pe, De, We, Me, He, Fe, Re, je, $e = (Fe = e, Re = !1, je = {
				TRANSITION_END: "bsTransitionEnd",
				getUID: function (t) {
					for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
					return t
				},
				getSelectorFromElement: function (t) {
					var e, i = t.getAttribute("data-target");
					i && "#" !== i || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && (e = i, i = e = "function" == typeof Fe.escapeSelector ? Fe.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
					try {
						return 0 < Fe(document).find(i).length ? i : null
					} catch (t) {
						return null
					}
				},
				reflow: function (t) {
					return t.offsetHeight
				},
				triggerTransitionEnd: function (t) {
					Fe(t).trigger(Re.end)
				},
				supportsTransitionEnd: function () {
					return Boolean(Re)
				},
				isElement: function (t) {
					return (t[0] || t).nodeType
				},
				typeCheckConfig: function (t, e, i) {
					for (var n in i)
						if (Object.prototype.hasOwnProperty.call(i, n)) {
							var o = i[n],
								s = e[n],
								a = s && je.isElement(s) ? "element" : (r = s, {}.toString.call(r).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
							if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + o + '".')
						}
					var r
				}
			}, Re = ("undefined" == typeof window || !window.QUnit) && {
				end: "transitionend"
			}, Fe.fn.emulateTransitionEnd = function (t) {
				var e = this,
					i = !1;
				return Fe(this).one(je.TRANSITION_END, function () {
					i = !0
				}), setTimeout(function () {
					i || je.triggerTransitionEnd(e)
				}, t), this
			}, je.supportsTransitionEnd() && (Fe.event.special[je.TRANSITION_END] = {
				bindType: Re.end,
				delegateType: Re.end,
				handle: function (t) {
					if (Fe(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
				}
			}), je),
			Ne = (i = "alert", r = "." + (s = "bs.alert"), l = (o = e).fn[i], d = {
				CLOSE: "close" + r,
				CLOSED: "closed" + r,
				CLICK_DATA_API: "click" + r + ".data-api"
			}, "alert", "fade", "show", u = function () {
				function n(t) {
					this._element = t
				}
				var t = n.prototype;
				return t.close = function (t) {
					t = t || this._element;
					var e = this._getRootElement(t);
					this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
				}, t.dispose = function () {
					o.removeData(this._element, s), this._element = null
				}, t._getRootElement = function (t) {
					var e = $e.getSelectorFromElement(t),
						i = !1;
					return e && (i = o(e)[0]), i || (i = o(t).closest(".alert")[0]), i
				}, t._triggerCloseEvent = function (t) {
					var e = o.Event(d.CLOSE);
					return o(t).trigger(e), e
				}, t._removeElement = function (e) {
					var i = this;
					o(e).removeClass("show"), $e.supportsTransitionEnd() && o(e).hasClass("fade") ? o(e).one($e.TRANSITION_END, function (t) {
						return i._destroyElement(e, t)
					}).emulateTransitionEnd(150) : this._destroyElement(e)
				}, t._destroyElement = function (t) {
					o(t).detach().trigger(d.CLOSED).remove()
				}, n._jQueryInterface = function (i) {
					return this.each(function () {
						var t = o(this),
							e = t.data(s);
						e || (e = new n(this), t.data(s, e)), "close" === i && e[i](this)
					})
				}, n._handleDismiss = function (e) {
					return function (t) {
						t && t.preventDefault(), e.close(this)
					}
				}, a(n, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}]), n
			}(), o(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', u._handleDismiss(new u)), o.fn[i] = u._jQueryInterface, o.fn[i].Constructor = u, o.fn[i].noConflict = function () {
				return o.fn[i] = l, u._jQueryInterface
			}, u),
			Be = (f = "button", g = "." + (m = "bs.button"), v = ".data-api", w = (p = e).fn[f], y = "active", "btn", b = '[data-toggle^="button"]', '[data-toggle="buttons"]', "input", ".active", _ = ".btn", x = {
				CLICK_DATA_API: "click" + g + v,
				FOCUS_BLUR_DATA_API: "focus" + g + v + " blur" + g + v
			}, T = function () {
				function i(t) {
					this._element = t
				}
				var t = i.prototype;
				return t.toggle = function () {
					var t = !0,
						e = !0,
						i = p(this._element).closest('[data-toggle="buttons"]')[0];
					if (i) {
						var n = p(this._element).find("input")[0];
						if (n) {
							if ("radio" === n.type)
								if (n.checked && p(this._element).hasClass(y)) t = !1;
								else {
									var o = p(i).find(".active")[0];
									o && p(o).removeClass(y)
								}
							if (t) {
								if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
								n.checked = !p(this._element).hasClass(y), p(n).trigger("change")
							}
							n.focus(), e = !1
						}
					}
					e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(y)), t && p(this._element).toggleClass(y)
				}, t.dispose = function () {
					p.removeData(this._element, m), this._element = null
				}, i._jQueryInterface = function (e) {
					return this.each(function () {
						var t = p(this).data(m);
						t || (t = new i(this), p(this).data(m, t)), "toggle" === e && t[e]()
					})
				}, a(i, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}]), i
			}(), p(document).on(x.CLICK_DATA_API, b, function (t) {
				t.preventDefault();
				var e = t.target;
				p(e).hasClass("btn") || (e = p(e).closest(_)), T._jQueryInterface.call(p(e), "toggle")
			}).on(x.FOCUS_BLUR_DATA_API, b, function (t) {
				var e = p(t.target).closest(_)[0];
				p(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
			}), p.fn[f] = T._jQueryInterface, p.fn[f].Constructor = T, p.fn[f].noConflict = function () {
				return p.fn[f] = w, T._jQueryInterface
			}, T),
			Xe = (be = "carousel", xe = "." + (_e = "bs.carousel"), Te = (ye = e).fn[be], ke = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0
			}, Ce = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean"
			}, Se = "next", ze = "prev", Ie = {
				SLIDE: "slide" + xe,
				SLID: "slid" + xe,
				KEYDOWN: "keydown" + xe,
				MOUSEENTER: "mouseenter" + xe,
				MOUSELEAVE: "mouseleave" + xe,
				TOUCHEND: "touchend" + xe,
				LOAD_DATA_API: "load" + xe + ".data-api",
				CLICK_DATA_API: "click" + xe + ".data-api"
			}, Le = "active", Ee = ".active", Oe = ".active.carousel-item", Ae = ".carousel-item", Pe = ".carousel-item-next, .carousel-item-prev", De = ".carousel-indicators", We = "[data-slide], [data-slide-to]", Me = '[data-ride="carousel"]', He = function () {
				function s(t, e) {
					this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = ye(t)[0], this._indicatorsElement = ye(this._element).find(De)[0], this._addEventListeners()
				}
				var t = s.prototype;
				return t.next = function () {
					this._isSliding || this._slide(Se)
				}, t.nextWhenVisible = function () {
					!document.hidden && ye(this._element).is(":visible") && "hidden" !== ye(this._element).css("visibility") && this.next()
				}, t.prev = function () {
					this._isSliding || this._slide(ze)
				}, t.pause = function (t) {
					t || (this._isPaused = !0), ye(this._element).find(Pe)[0] && $e.supportsTransitionEnd() && ($e.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
				}, t.cycle = function (t) {
					t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
				}, t.to = function (t) {
					var e = this;
					this._activeElement = ye(this._element).find(Oe)[0];
					var i = this._getItemIndex(this._activeElement);
					if (!(t > this._items.length - 1 || t < 0))
						if (this._isSliding) ye(this._element).one(Ie.SLID, function () {
							return e.to(t)
						});
						else {
							if (i === t) return this.pause(), void this.cycle();
							var n = i < t ? Se : ze;
							this._slide(n, this._items[t])
						}
				}, t.dispose = function () {
					ye(this._element).off(xe), ye.removeData(this._element, _e), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
				}, t._getConfig = function (t) {
					return t = h({}, ke, t), $e.typeCheckConfig(be, t, Ce), t
				}, t._addEventListeners = function () {
					var e = this;
					this._config.keyboard && ye(this._element).on(Ie.KEYDOWN, function (t) {
						return e._keydown(t)
					}), "hover" === this._config.pause && (ye(this._element).on(Ie.MOUSEENTER, function (t) {
						return e.pause(t)
					}).on(Ie.MOUSELEAVE, function (t) {
						return e.cycle(t)
					}), "ontouchstart" in document.documentElement && ye(this._element).on(Ie.TOUCHEND, function () {
						e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
							return e.cycle(t)
						}, 500 + e._config.interval)
					}))
				}, t._keydown = function (t) {
					if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
						case 37:
							t.preventDefault(), this.prev();
							break;
						case 39:
							t.preventDefault(), this.next()
					}
				}, t._getItemIndex = function (t) {
					return this._items = ye.makeArray(ye(t).parent().find(Ae)), this._items.indexOf(t)
				}, t._getItemByDirection = function (t, e) {
					var i = t === Se,
						n = t === ze,
						o = this._getItemIndex(e),
						s = this._items.length - 1;
					if ((n && 0 === o || i && o === s) && !this._config.wrap) return e;
					var a = (o + (t === ze ? -1 : 1)) % this._items.length;
					return -1 === a ? this._items[this._items.length - 1] : this._items[a]
				}, t._triggerSlideEvent = function (t, e) {
					var i = this._getItemIndex(t),
						n = this._getItemIndex(ye(this._element).find(Oe)[0]),
						o = ye.Event(Ie.SLIDE, {
							relatedTarget: t,
							direction: e,
							from: n,
							to: i
						});
					return ye(this._element).trigger(o), o
				}, t._setActiveIndicatorElement = function (t) {
					if (this._indicatorsElement) {
						ye(this._indicatorsElement).find(Ee).removeClass(Le);
						var e = this._indicatorsElement.children[this._getItemIndex(t)];
						e && ye(e).addClass(Le)
					}
				}, t._slide = function (t, e) {
					var i, n, o, s = this,
						a = ye(this._element).find(Oe)[0],
						r = this._getItemIndex(a),
						l = e || a && this._getItemByDirection(t, a),
						d = this._getItemIndex(l),
						c = Boolean(this._interval);
					if (o = t === Se ? (i = "carousel-item-left", n = "carousel-item-next", "left") : (i = "carousel-item-right", n = "carousel-item-prev", "right"), l && ye(l).hasClass(Le)) this._isSliding = !1;
					else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && a && l) {
						this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
						var h = ye.Event(Ie.SLID, {
							relatedTarget: l,
							direction: o,
							from: r,
							to: d
						});
						$e.supportsTransitionEnd() && ye(this._element).hasClass("slide") ? (ye(l).addClass(n), $e.reflow(l), ye(a).addClass(i), ye(l).addClass(i), ye(a).one($e.TRANSITION_END, function () {
							ye(l).removeClass(i + " " + n).addClass(Le), ye(a).removeClass(Le + " " + n + " " + i), s._isSliding = !1, setTimeout(function () {
								return ye(s._element).trigger(h)
							}, 0)
						}).emulateTransitionEnd(600)) : (ye(a).removeClass(Le), ye(l).addClass(Le), this._isSliding = !1, ye(this._element).trigger(h)), c && this.cycle()
					}
				}, s._jQueryInterface = function (n) {
					return this.each(function () {
						var t = ye(this).data(_e),
							e = h({}, ke, ye(this).data());
						"object" == typeof n && (e = h({}, e, n));
						var i = "string" == typeof n ? n : e.slide;
						if (t || (t = new s(this, e), ye(this).data(_e, t)), "number" == typeof n) t.to(n);
						else if ("string" == typeof i) {
							if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
							t[i]()
						} else e.interval && (t.pause(), t.cycle())
					})
				}, s._dataApiClickHandler = function (t) {
					var e = $e.getSelectorFromElement(this);
					if (e) {
						var i = ye(e)[0];
						if (i && ye(i).hasClass("carousel")) {
							var n = h({}, ye(i).data(), ye(this).data()),
								o = this.getAttribute("data-slide-to");
							o && (n.interval = !1), s._jQueryInterface.call(ye(i), n), o && ye(i).data(_e).to(o), t.preventDefault()
						}
					}
				}, a(s, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function () {
						return ke
					}
				}]), s
			}(), ye(document).on(Ie.CLICK_DATA_API, We, He._dataApiClickHandler), ye(window).on(Ie.LOAD_DATA_API, function () {
				ye(Me).each(function () {
					var t = ye(this);
					He._jQueryInterface.call(t, t.data())
				})
			}), ye.fn[be] = He._jQueryInterface, ye.fn[be].Constructor = He, ye.fn[be].noConflict = function () {
				return ye.fn[be] = Te, He._jQueryInterface
			}, He),
			Ye = (se = "collapse", re = "." + (ae = "bs.collapse"), le = (oe = e).fn[se], de = {
				toggle: !0,
				parent: ""
			}, ce = {
				toggle: "boolean",
				parent: "(string|element)"
			}, he = {
				SHOW: "show" + re,
				SHOWN: "shown" + re,
				HIDE: "hide" + re,
				HIDDEN: "hidden" + re,
				CLICK_DATA_API: "click" + re + ".data-api"
			}, ue = "show", pe = "collapse", fe = "collapsing", me = "collapsed", ge = ".show, .collapsing", ve = '[data-toggle="collapse"]', we = function () {
				function r(t, e) {
					this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(oe('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
					for (var i = oe(ve), n = 0; n < i.length; n++) {
						var o = i[n],
							s = $e.getSelectorFromElement(o);
						null !== s && 0 < oe(s).filter(t).length && (this._selector = s, this._triggerArray.push(o))
					}
					this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
				}
				var t = r.prototype;
				return t.toggle = function () {
					oe(this._element).hasClass(ue) ? this.hide() : this.show()
				}, t.show = function () {
					var t, e, i = this;
					if (!(this._isTransitioning || oe(this._element).hasClass(ue) || (this._parent && 0 === (t = oe.makeArray(oe(this._parent).find(ge).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (e = oe(t).not(this._selector).data(ae)) && e._isTransitioning))) {
						var n = oe.Event(he.SHOW);
						if (oe(this._element).trigger(n), !n.isDefaultPrevented()) {
							t && (r._jQueryInterface.call(oe(t).not(this._selector), "hide"), e || oe(t).data(ae, null));
							var o = this._getDimension();
							oe(this._element).removeClass(pe).addClass(fe), (this._element.style[o] = 0) < this._triggerArray.length && oe(this._triggerArray).removeClass(me).attr("aria-expanded", !0), this.setTransitioning(!0);
							var s = function () {
								oe(i._element).removeClass(fe).addClass(pe).addClass(ue), i._element.style[o] = "", i.setTransitioning(!1), oe(i._element).trigger(he.SHOWN)
							};
							if ($e.supportsTransitionEnd()) {
								var a = "scroll" + (o[0].toUpperCase() + o.slice(1));
								oe(this._element).one($e.TRANSITION_END, s).emulateTransitionEnd(600), this._element.style[o] = this._element[a] + "px"
							} else s()
						}
					}
				}, t.hide = function () {
					var t = this;
					if (!this._isTransitioning && oe(this._element).hasClass(ue)) {
						var e = oe.Event(he.HIDE);
						if (oe(this._element).trigger(e), !e.isDefaultPrevented()) {
							var i = this._getDimension();
							if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", $e.reflow(this._element), oe(this._element).addClass(fe).removeClass(pe).removeClass(ue), 0 < this._triggerArray.length)
								for (var n = 0; n < this._triggerArray.length; n++) {
									var o = this._triggerArray[n],
										s = $e.getSelectorFromElement(o);
									null !== s && (oe(s).hasClass(ue) || oe(o).addClass(me).attr("aria-expanded", !1))
								}
							this.setTransitioning(!0);
							var a = function () {
								t.setTransitioning(!1), oe(t._element).removeClass(fe).addClass(pe).trigger(he.HIDDEN)
							};
							this._element.style[i] = "", $e.supportsTransitionEnd() ? oe(this._element).one($e.TRANSITION_END, a).emulateTransitionEnd(600) : a()
						}
					}
				}, t.setTransitioning = function (t) {
					this._isTransitioning = t
				}, t.dispose = function () {
					oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
				}, t._getConfig = function (t) {
					return (t = h({}, de, t)).toggle = Boolean(t.toggle), $e.typeCheckConfig(se, t, ce), t
				}, t._getDimension = function () {
					return oe(this._element).hasClass("width") ? "width" : "height"
				}, t._getParent = function () {
					var i = this,
						t = null;
					$e.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = oe(this._config.parent)[0];
					var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
					return oe(t).find(e).each(function (t, e) {
						i._addAriaAndCollapsedClass(r._getTargetFromElement(e), [e])
					}), t
				}, t._addAriaAndCollapsedClass = function (t, e) {
					if (t) {
						var i = oe(t).hasClass(ue);
						0 < e.length && oe(e).toggleClass(me, !i).attr("aria-expanded", i)
					}
				}, r._getTargetFromElement = function (t) {
					var e = $e.getSelectorFromElement(t);
					return e ? oe(e)[0] : null
				}, r._jQueryInterface = function (n) {
					return this.each(function () {
						var t = oe(this),
							e = t.data(ae),
							i = h({}, de, t.data(), "object" == typeof n && n);
						if (!e && i.toggle && /show|hide/.test(n) && (i.toggle = !1), e || (e = new r(this, i), t.data(ae, e)), "string" == typeof n) {
							if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
							e[n]()
						}
					})
				}, a(r, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function () {
						return de
					}
				}]), r
			}(), oe(document).on(he.CLICK_DATA_API, ve, function (t) {
				"A" === t.currentTarget.tagName && t.preventDefault();
				var i = oe(this),
					e = $e.getSelectorFromElement(this);
				oe(e).each(function () {
					var t = oe(this),
						e = t.data(ae) ? "toggle" : i.data();
					we._jQueryInterface.call(t, e)
				})
			}), oe.fn[se] = we._jQueryInterface, oe.fn[se].Constructor = we, oe.fn[se].noConflict = function () {
				return oe.fn[se] = le, we._jQueryInterface
			}, we),
			qe = (Bt = "dropdown", Yt = "." + (Xt = "bs.dropdown"), qt = ".data-api", Ut = (Nt = e).fn[Bt], Jt = new RegExp("38|40|27"), Qt = {
				HIDE: "hide" + Yt,
				HIDDEN: "hidden" + Yt,
				SHOW: "show" + Yt,
				SHOWN: "shown" + Yt,
				CLICK: "click" + Yt,
				CLICK_DATA_API: "click" + Yt + qt,
				KEYDOWN_DATA_API: "keydown" + Yt + qt,
				KEYUP_DATA_API: "keyup" + Yt + qt
			}, Vt = "disabled", Zt = "show", Gt = "dropdown-menu-right", Kt = '[data-toggle="dropdown"]', te = ".dropdown-menu", ee = {
				offset: 0,
				flip: !0,
				boundary: "scrollParent"
			}, ie = {
				offset: "(number|string|function)",
				flip: "boolean",
				boundary: "(string|element)"
			}, ne = function () {
				function l(t, e) {
					this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
				}
				var t = l.prototype;
				return t.toggle = function () {
					if (!this._element.disabled && !Nt(this._element).hasClass(Vt)) {
						var t = l._getParentFromElement(this._element),
							e = Nt(this._menu).hasClass(Zt);
						if (l._clearMenus(), !e) {
							var i = {
									relatedTarget: this._element
								},
								n = Nt.Event(Qt.SHOW, i);
							if (Nt(t).trigger(n), !n.isDefaultPrevented()) {
								if (!this._inNavbar) {
									if (void 0 === c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
									var o = this._element;
									Nt(t).hasClass("dropup") && (Nt(this._menu).hasClass("dropdown-menu-left") || Nt(this._menu).hasClass(Gt)) && (o = t), "scrollParent" !== this._config.boundary && Nt(t).addClass("position-static"), this._popper = new c(o, this._menu, this._getPopperConfig())
								}
								"ontouchstart" in document.documentElement && 0 === Nt(t).closest(".navbar-nav").length && Nt("body").children().on("mouseover", null, Nt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Nt(this._menu).toggleClass(Zt), Nt(t).toggleClass(Zt).trigger(Nt.Event(Qt.SHOWN, i))
							}
						}
					}
				}, t.dispose = function () {
					Nt.removeData(this._element, Xt), Nt(this._element).off(Yt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
				}, t.update = function () {
					this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
				}, t._addEventListeners = function () {
					var e = this;
					Nt(this._element).on(Qt.CLICK, function (t) {
						t.preventDefault(), t.stopPropagation(), e.toggle()
					})
				}, t._getConfig = function (t) {
					return t = h({}, this.constructor.Default, Nt(this._element).data(), t), $e.typeCheckConfig(Bt, t, this.constructor.DefaultType), t
				}, t._getMenuElement = function () {
					if (!this._menu) {
						var t = l._getParentFromElement(this._element);
						this._menu = Nt(t).find(te)[0]
					}
					return this._menu
				}, t._getPlacement = function () {
					var t = Nt(this._element).parent(),
						e = "bottom-start";
					return t.hasClass("dropup") ? (e = "top-start", Nt(this._menu).hasClass(Gt) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : Nt(this._menu).hasClass(Gt) && (e = "bottom-end"), e
				}, t._detectNavbar = function () {
					return 0 < Nt(this._element).closest(".navbar").length
				}, t._getPopperConfig = function () {
					var e = this,
						t = {};
					return "function" == typeof this._config.offset ? t.fn = function (t) {
						return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t
					} : t.offset = this._config.offset, {
						placement: this._getPlacement(),
						modifiers: {
							offset: t,
							flip: {
								enabled: this._config.flip
							},
							preventOverflow: {
								boundariesElement: this._config.boundary
							}
						}
					}
				}, l._jQueryInterface = function (e) {
					return this.each(function () {
						var t = Nt(this).data(Xt);
						if (t || (t = new l(this, "object" == typeof e ? e : null), Nt(this).data(Xt, t)), "string" == typeof e) {
							if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
							t[e]()
						}
					})
				}, l._clearMenus = function (t) {
					if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
						for (var e = Nt.makeArray(Nt(Kt)), i = 0; i < e.length; i++) {
							var n = l._getParentFromElement(e[i]),
								o = Nt(e[i]).data(Xt),
								s = {
									relatedTarget: e[i]
								};
							if (o) {
								var a = o._menu;
								if (Nt(n).hasClass(Zt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && Nt.contains(n, t.target))) {
									var r = Nt.Event(Qt.HIDE, s);
									Nt(n).trigger(r), r.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Nt("body").children().off("mouseover", null, Nt.noop), e[i].setAttribute("aria-expanded", "false"), Nt(a).removeClass(Zt), Nt(n).removeClass(Zt).trigger(Nt.Event(Qt.HIDDEN, s)))
								}
							}
						}
				}, l._getParentFromElement = function (t) {
					var e, i = $e.getSelectorFromElement(t);
					return i && (e = Nt(i)[0]), e || t.parentNode
				}, l._dataApiKeydownHandler = function (t) {
					if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || Nt(t.target).closest(te).length)) : Jt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !Nt(this).hasClass(Vt))) {
						var e = l._getParentFromElement(this),
							i = Nt(e).hasClass(Zt);
						if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
							var n = Nt(e).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
							if (0 !== n.length) {
								var o = n.indexOf(t.target);
								38 === t.which && 0 < o && o--, 40 === t.which && o < n.length - 1 && o++, o < 0 && (o = 0), n[o].focus()
							}
						} else {
							if (27 === t.which) {
								var s = Nt(e).find(Kt)[0];
								Nt(s).trigger("focus")
							}
							Nt(this).trigger("click")
						}
					}
				}, a(l, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function () {
						return ee
					}
				}, {
					key: "DefaultType",
					get: function () {
						return ie
					}
				}]), l
			}(), Nt(document).on(Qt.KEYDOWN_DATA_API, Kt, ne._dataApiKeydownHandler).on(Qt.KEYDOWN_DATA_API, te, ne._dataApiKeydownHandler).on(Qt.CLICK_DATA_API + " " + Qt.KEYUP_DATA_API, ne._clearMenus).on(Qt.CLICK_DATA_API, Kt, function (t) {
				t.preventDefault(), t.stopPropagation(), ne._jQueryInterface.call(Nt(this), "toggle")
			}).on(Qt.CLICK_DATA_API, ".dropdown form", function (t) {
				t.stopPropagation()
			}), Nt.fn[Bt] = ne._jQueryInterface, Nt.fn[Bt].Constructor = ne, Nt.fn[Bt].noConflict = function () {
				return Nt.fn[Bt] = Ut, ne._jQueryInterface
			}, ne),
			Ue = (zt = "." + (St = "bs.modal"), It = (Ct = e).fn.modal, Lt = {
				backdrop: !0,
				keyboard: !0,
				focus: !0,
				show: !0
			}, Et = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
				show: "boolean"
			}, Ot = {
				HIDE: "hide" + zt,
				HIDDEN: "hidden" + zt,
				SHOW: "show" + zt,
				SHOWN: "shown" + zt,
				FOCUSIN: "focusin" + zt,
				RESIZE: "resize" + zt,
				CLICK_DISMISS: "click.dismiss" + zt,
				KEYDOWN_DISMISS: "keydown.dismiss" + zt,
				MOUSEUP_DISMISS: "mouseup.dismiss" + zt,
				MOUSEDOWN_DISMISS: "mousedown.dismiss" + zt,
				CLICK_DATA_API: "click" + zt + ".data-api"
			}, At = "modal-open", Pt = "fade", Dt = "show", Wt = ".modal-dialog", Mt = '[data-toggle="modal"]', Ht = '[data-dismiss="modal"]', Ft = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Rt = ".sticky-top", jt = ".navbar-toggler", $t = function () {
				function o(t, e) {
					this._config = this._getConfig(e), this._element = t, this._dialog = Ct(t).find(Wt)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
				}
				var t = o.prototype;
				return t.toggle = function (t) {
					return this._isShown ? this.hide() : this.show(t)
				}, t.show = function (t) {
					var e = this;
					if (!this._isTransitioning && !this._isShown) {
						$e.supportsTransitionEnd() && Ct(this._element).hasClass(Pt) && (this._isTransitioning = !0);
						var i = Ct.Event(Ot.SHOW, {
							relatedTarget: t
						});
						Ct(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Ct(document.body).addClass(At), this._setEscapeEvent(), this._setResizeEvent(), Ct(this._element).on(Ot.CLICK_DISMISS, Ht, function (t) {
							return e.hide(t)
						}), Ct(this._dialog).on(Ot.MOUSEDOWN_DISMISS, function () {
							Ct(e._element).one(Ot.MOUSEUP_DISMISS, function (t) {
								Ct(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
							})
						}), this._showBackdrop(function () {
							return e._showElement(t)
						}))
					}
				}, t.hide = function (t) {
					var e = this;
					if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
						var i = Ct.Event(Ot.HIDE);
						if (Ct(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
							this._isShown = !1;
							var n = $e.supportsTransitionEnd() && Ct(this._element).hasClass(Pt);
							n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Ct(document).off(Ot.FOCUSIN), Ct(this._element).removeClass(Dt), Ct(this._element).off(Ot.CLICK_DISMISS), Ct(this._dialog).off(Ot.MOUSEDOWN_DISMISS), n ? Ct(this._element).one($e.TRANSITION_END, function (t) {
								return e._hideModal(t)
							}).emulateTransitionEnd(300) : this._hideModal()
						}
					}
				}, t.dispose = function () {
					Ct.removeData(this._element, St), Ct(window, document, this._element, this._backdrop).off(zt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
				}, t.handleUpdate = function () {
					this._adjustDialog()
				}, t._getConfig = function (t) {
					return t = h({}, Lt, t), $e.typeCheckConfig("modal", t, Et), t
				}, t._showElement = function (t) {
					var e = this,
						i = $e.supportsTransitionEnd() && Ct(this._element).hasClass(Pt);
					this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && $e.reflow(this._element), Ct(this._element).addClass(Dt), this._config.focus && this._enforceFocus();
					var n = Ct.Event(Ot.SHOWN, {
							relatedTarget: t
						}),
						o = function () {
							e._config.focus && e._element.focus(), e._isTransitioning = !1, Ct(e._element).trigger(n)
						};
					i ? Ct(this._dialog).one($e.TRANSITION_END, o).emulateTransitionEnd(300) : o()
				}, t._enforceFocus = function () {
					var e = this;
					Ct(document).off(Ot.FOCUSIN).on(Ot.FOCUSIN, function (t) {
						document !== t.target && e._element !== t.target && 0 === Ct(e._element).has(t.target).length && e._element.focus()
					})
				}, t._setEscapeEvent = function () {
					var e = this;
					this._isShown && this._config.keyboard ? Ct(this._element).on(Ot.KEYDOWN_DISMISS, function (t) {
						27 === t.which && (t.preventDefault(), e.hide())
					}) : this._isShown || Ct(this._element).off(Ot.KEYDOWN_DISMISS)
				}, t._setResizeEvent = function () {
					var e = this;
					this._isShown ? Ct(window).on(Ot.RESIZE, function (t) {
						return e.handleUpdate(t)
					}) : Ct(window).off(Ot.RESIZE)
				}, t._hideModal = function () {
					var t = this;
					this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
						Ct(document.body).removeClass(At), t._resetAdjustments(), t._resetScrollbar(), Ct(t._element).trigger(Ot.HIDDEN)
					})
				}, t._removeBackdrop = function () {
					this._backdrop && (Ct(this._backdrop).remove(), this._backdrop = null)
				}, t._showBackdrop = function (t) {
					var e = this,
						i = Ct(this._element).hasClass(Pt) ? Pt : "";
					if (this._isShown && this._config.backdrop) {
						var n = $e.supportsTransitionEnd() && i;
						if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && Ct(this._backdrop).addClass(i), Ct(this._backdrop).appendTo(document.body), Ct(this._element).on(Ot.CLICK_DISMISS, function (t) {
								e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
							}), n && $e.reflow(this._backdrop), Ct(this._backdrop).addClass(Dt), !t) return;
						if (!n) return void t();
						Ct(this._backdrop).one($e.TRANSITION_END, t).emulateTransitionEnd(150)
					} else if (!this._isShown && this._backdrop) {
						Ct(this._backdrop).removeClass(Dt);
						var o = function () {
							e._removeBackdrop(), t && t()
						};
						$e.supportsTransitionEnd() && Ct(this._element).hasClass(Pt) ? Ct(this._backdrop).one($e.TRANSITION_END, o).emulateTransitionEnd(150) : o()
					} else t && t()
				}, t._adjustDialog = function () {
					var t = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
				}, t._resetAdjustments = function () {
					this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
				}, t._checkScrollbar = function () {
					var t = document.body.getBoundingClientRect();
					this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
				}, t._setScrollbar = function () {
					var o = this;
					if (this._isBodyOverflowing) {
						Ct(Ft).each(function (t, e) {
							var i = Ct(e)[0].style.paddingRight,
								n = Ct(e).css("padding-right");
							Ct(e).data("padding-right", i).css("padding-right", parseFloat(n) + o._scrollbarWidth + "px")
						}), Ct(Rt).each(function (t, e) {
							var i = Ct(e)[0].style.marginRight,
								n = Ct(e).css("margin-right");
							Ct(e).data("margin-right", i).css("margin-right", parseFloat(n) - o._scrollbarWidth + "px")
						}), Ct(jt).each(function (t, e) {
							var i = Ct(e)[0].style.marginRight,
								n = Ct(e).css("margin-right");
							Ct(e).data("margin-right", i).css("margin-right", parseFloat(n) + o._scrollbarWidth + "px")
						});
						var t = document.body.style.paddingRight,
							e = Ct("body").css("padding-right");
						Ct("body").data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
					}
				}, t._resetScrollbar = function () {
					Ct(Ft).each(function (t, e) {
						var i = Ct(e).data("padding-right");
						void 0 !== i && Ct(e).css("padding-right", i).removeData("padding-right")
					}), Ct(Rt + ", " + jt).each(function (t, e) {
						var i = Ct(e).data("margin-right");
						void 0 !== i && Ct(e).css("margin-right", i).removeData("margin-right")
					});
					var t = Ct("body").data("padding-right");
					void 0 !== t && Ct("body").css("padding-right", t).removeData("padding-right")
				}, t._getScrollbarWidth = function () {
					var t = document.createElement("div");
					t.className = "modal-scrollbar-measure", document.body.appendChild(t);
					var e = t.getBoundingClientRect().width - t.clientWidth;
					return document.body.removeChild(t), e
				}, o._jQueryInterface = function (i, n) {
					return this.each(function () {
						var t = Ct(this).data(St),
							e = h({}, o.Default, Ct(this).data(), "object" == typeof i && i);
						if (t || (t = new o(this, e), Ct(this).data(St, t)), "string" == typeof i) {
							if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
							t[i](n)
						} else e.show && t.show(n)
					})
				}, a(o, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function () {
						return Lt
					}
				}]), o
			}(), Ct(document).on(Ot.CLICK_DATA_API, Mt, function (t) {
				var e, i = this,
					n = $e.getSelectorFromElement(this);
				n && (e = Ct(n)[0]);
				var o = Ct(e).data(St) ? "toggle" : h({}, Ct(e).data(), Ct(this).data());
				"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
				var s = Ct(e).one(Ot.SHOW, function (t) {
					t.isDefaultPrevented() || s.one(Ot.HIDDEN, function () {
						Ct(i).is(":visible") && i.focus()
					})
				});
				$t._jQueryInterface.call(Ct(e), o, this)
			}), Ct.fn.modal = $t._jQueryInterface, Ct.fn.modal.Constructor = $t, Ct.fn.modal.noConflict = function () {
				return Ct.fn.modal = It, $t._jQueryInterface
			}, $t),
			Je = (ct = "tooltip", ut = "." + (ht = "bs.tooltip"), pt = (dt = e).fn[ct], ft = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), vt = {
				animation: !0,
				template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !(gt = {
					AUTO: "auto",
					TOP: "top",
					RIGHT: "right",
					BOTTOM: "bottom",
					LEFT: "left"
				}),
				selector: !(mt = {
					animation: "boolean",
					template: "string",
					title: "(string|element|function)",
					trigger: "string",
					delay: "(number|object)",
					html: "boolean",
					selector: "(string|boolean)",
					placement: "(string|function)",
					offset: "(number|string)",
					container: "(string|element|boolean)",
					fallbackPlacement: "(string|array)",
					boundary: "(string|element)"
				}),
				placement: "top",
				offset: 0,
				container: !1,
				fallbackPlacement: "flip",
				boundary: "scrollParent"
			}, yt = {
				HIDE: "hide" + ut,
				HIDDEN: "hidden" + ut,
				SHOW: (wt = "show") + ut,
				SHOWN: "shown" + ut,
				INSERTED: "inserted" + ut,
				CLICK: "click" + ut,
				FOCUSIN: "focusin" + ut,
				FOCUSOUT: "focusout" + ut,
				MOUSEENTER: "mouseenter" + ut,
				MOUSELEAVE: "mouseleave" + ut
			}, bt = "fade", _t = "show", xt = "hover", Tt = "focus", kt = function () {
				function d(t, e) {
					if (void 0 === c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
					this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
				}
				var t = d.prototype;
				return t.enable = function () {
					this._isEnabled = !0
				}, t.disable = function () {
					this._isEnabled = !1
				}, t.toggleEnabled = function () {
					this._isEnabled = !this._isEnabled
				}, t.toggle = function (t) {
					if (this._isEnabled)
						if (t) {
							var e = this.constructor.DATA_KEY,
								i = dt(t.currentTarget).data(e);
							i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), dt(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
						} else {
							if (dt(this.getTipElement()).hasClass(_t)) return void this._leave(null, this);
							this._enter(null, this)
						}
				}, t.dispose = function () {
					clearTimeout(this._timeout), dt.removeData(this.element, this.constructor.DATA_KEY), dt(this.element).off(this.constructor.EVENT_KEY), dt(this.element).closest(".modal").off("hide.bs.modal"), this.tip && dt(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
				}, t.show = function () {
					var e = this;
					if ("none" === dt(this.element).css("display")) throw new Error("Please use show on visible elements");
					var t = dt.Event(this.constructor.Event.SHOW);
					if (this.isWithContent() && this._isEnabled) {
						dt(this.element).trigger(t);
						var i = dt.contains(this.element.ownerDocument.documentElement, this.element);
						if (t.isDefaultPrevented() || !i) return;
						var n = this.getTipElement(),
							o = $e.getUID(this.constructor.NAME);
						n.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && dt(n).addClass(bt);
						var s = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
							a = this._getAttachment(s);
						this.addAttachmentClass(a);
						var r = !1 === this.config.container ? document.body : dt(this.config.container);
						dt(n).data(this.constructor.DATA_KEY, this), dt.contains(this.element.ownerDocument.documentElement, this.tip) || dt(n).appendTo(r), dt(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, n, {
							placement: a,
							modifiers: {
								offset: {
									offset: this.config.offset
								},
								flip: {
									behavior: this.config.fallbackPlacement
								},
								arrow: {
									element: ".arrow"
								},
								preventOverflow: {
									boundariesElement: this.config.boundary
								}
							},
							onCreate: function (t) {
								t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
							},
							onUpdate: function (t) {
								e._handlePopperPlacementChange(t)
							}
						}), dt(n).addClass(_t), "ontouchstart" in document.documentElement && dt("body").children().on("mouseover", null, dt.noop);
						var l = function () {
							e.config.animation && e._fixTransition();
							var t = e._hoverState;
							e._hoverState = null, dt(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
						};
						$e.supportsTransitionEnd() && dt(this.tip).hasClass(bt) ? dt(this.tip).one($e.TRANSITION_END, l).emulateTransitionEnd(d._TRANSITION_DURATION) : l()
					}
				}, t.hide = function (t) {
					var e = this,
						i = this.getTipElement(),
						n = dt.Event(this.constructor.Event.HIDE),
						o = function () {
							e._hoverState !== wt && i.parentNode && i.parentNode.removeChild(i), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), dt(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
						};
					dt(this.element).trigger(n), n.isDefaultPrevented() || (dt(i).removeClass(_t), "ontouchstart" in document.documentElement && dt("body").children().off("mouseover", null, dt.noop), this._activeTrigger.click = !1, this._activeTrigger[Tt] = !1, this._activeTrigger[xt] = !1, $e.supportsTransitionEnd() && dt(this.tip).hasClass(bt) ? dt(i).one($e.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
				}, t.update = function () {
					null !== this._popper && this._popper.scheduleUpdate()
				}, t.isWithContent = function () {
					return Boolean(this.getTitle())
				}, t.addAttachmentClass = function (t) {
					dt(this.getTipElement()).addClass("bs-tooltip-" + t)
				}, t.getTipElement = function () {
					return this.tip = this.tip || dt(this.config.template)[0], this.tip
				}, t.setContent = function () {
					var t = dt(this.getTipElement());
					this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(bt + " " + _t)
				}, t.setElementContent = function (t, e) {
					var i = this.config.html;
					"object" == typeof e && (e.nodeType || e.jquery) ? i ? dt(e).parent().is(t) || t.empty().append(e) : t.text(dt(e).text()) : t[i ? "html" : "text"](e)
				}, t.getTitle = function () {
					var t = this.element.getAttribute("data-original-title");
					return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
				}, t._getAttachment = function (t) {
					return gt[t.toUpperCase()]
				}, t._setListeners = function () {
					var n = this;
					this.config.trigger.split(" ").forEach(function (t) {
						if ("click" === t) dt(n.element).on(n.constructor.Event.CLICK, n.config.selector, function (t) {
							return n.toggle(t)
						});
						else if ("manual" !== t) {
							var e = t === xt ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
								i = t === xt ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
							dt(n.element).on(e, n.config.selector, function (t) {
								return n._enter(t)
							}).on(i, n.config.selector, function (t) {
								return n._leave(t)
							})
						}
						dt(n.element).closest(".modal").on("hide.bs.modal", function () {
							return n.hide()
						})
					}), this.config.selector ? this.config = h({}, this.config, {
						trigger: "manual",
						selector: ""
					}) : this._fixTitle()
				}, t._fixTitle = function () {
					var t = typeof this.element.getAttribute("data-original-title");
					(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
				}, t._enter = function (t, e) {
					var i = this.constructor.DATA_KEY;
					(e = e || dt(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), dt(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? Tt : xt] = !0), dt(e.getTipElement()).hasClass(_t) || e._hoverState === wt ? e._hoverState = wt : (clearTimeout(e._timeout), e._hoverState = wt, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
						e._hoverState === wt && e.show()
					}, e.config.delay.show) : e.show())
				}, t._leave = function (t, e) {
					var i = this.constructor.DATA_KEY;
					(e = e || dt(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), dt(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? Tt : xt] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
						"out" === e._hoverState && e.hide()
					}, e.config.delay.hide) : e.hide())
				}, t._isWithActiveTrigger = function () {
					for (var t in this._activeTrigger)
						if (this._activeTrigger[t]) return !0;
					return !1
				}, t._getConfig = function (t) {
					return "number" == typeof (t = h({}, this.constructor.Default, dt(this.element).data(), t)).delay && (t.delay = {
						show: t.delay,
						hide: t.delay
					}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), $e.typeCheckConfig(ct, t, this.constructor.DefaultType), t
				}, t._getDelegateConfig = function () {
					var t = {};
					if (this.config)
						for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
					return t
				}, t._cleanTipClass = function () {
					var t = dt(this.getTipElement()),
						e = t.attr("class").match(ft);
					null !== e && 0 < e.length && t.removeClass(e.join(""))
				}, t._handlePopperPlacementChange = function (t) {
					this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
				}, t._fixTransition = function () {
					var t = this.getTipElement(),
						e = this.config.animation;
					null === t.getAttribute("x-placement") && (dt(t).removeClass(bt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
				}, d._jQueryInterface = function (i) {
					return this.each(function () {
						var t = dt(this).data(ht),
							e = "object" == typeof i && i;
						if ((t || !/dispose|hide/.test(i)) && (t || (t = new d(this, e), dt(this).data(ht, t)), "string" == typeof i)) {
							if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
							t[i]()
						}
					})
				}, a(d, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function () {
						return vt
					}
				}, {
					key: "NAME",
					get: function () {
						return ct
					}
				}, {
					key: "DATA_KEY",
					get: function () {
						return ht
					}
				}, {
					key: "Event",
					get: function () {
						return yt
					}
				}, {
					key: "EVENT_KEY",
					get: function () {
						return ut
					}
				}, {
					key: "DefaultType",
					get: function () {
						return mt
					}
				}]), d
			}(), dt.fn[ct] = kt._jQueryInterface, dt.fn[ct].Constructor = kt, dt.fn[ct].noConflict = function () {
				return dt.fn[ct] = pt, kt._jQueryInterface
			}, kt),
			Qe = (tt = "popover", it = "." + (et = "bs.popover"), nt = (K = e).fn[tt], ot = new RegExp("(^|\\s)bs-popover\\S+", "g"), st = h({}, Je.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
			}), at = h({}, Je.DefaultType, {
				content: "(string|element|function)"
			}), rt = {
				HIDE: "hide" + it,
				HIDDEN: "hidden" + it,
				SHOW: "show" + it,
				SHOWN: "shown" + it,
				INSERTED: "inserted" + it,
				CLICK: "click" + it,
				FOCUSIN: "focusin" + it,
				FOCUSOUT: "focusout" + it,
				MOUSEENTER: "mouseenter" + it,
				MOUSELEAVE: "mouseleave" + it
			}, lt = function (t) {
				var e, i;

				function n() {
					return t.apply(this, arguments) || this
				}
				i = t, (e = n).prototype = Object.create(i.prototype), (e.prototype.constructor = e).__proto__ = i;
				var o = n.prototype;
				return o.isWithContent = function () {
					return this.getTitle() || this._getContent()
				}, o.addAttachmentClass = function (t) {
					K(this.getTipElement()).addClass("bs-popover-" + t)
				}, o.getTipElement = function () {
					return this.tip = this.tip || K(this.config.template)[0], this.tip
				}, o.setContent = function () {
					var t = K(this.getTipElement());
					this.setElementContent(t.find(".popover-header"), this.getTitle());
					var e = this._getContent();
					"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
				}, o._getContent = function () {
					return this.element.getAttribute("data-content") || this.config.content
				}, o._cleanTipClass = function () {
					var t = K(this.getTipElement()),
						e = t.attr("class").match(ot);
					null !== e && 0 < e.length && t.removeClass(e.join(""))
				}, n._jQueryInterface = function (i) {
					return this.each(function () {
						var t = K(this).data(et),
							e = "object" == typeof i ? i : null;
						if ((t || !/destroy|hide/.test(i)) && (t || (t = new n(this, e), K(this).data(et, t)), "string" == typeof i)) {
							if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
							t[i]()
						}
					})
				}, a(n, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function () {
						return st
					}
				}, {
					key: "NAME",
					get: function () {
						return tt
					}
				}, {
					key: "DATA_KEY",
					get: function () {
						return et
					}
				}, {
					key: "Event",
					get: function () {
						return rt
					}
				}, {
					key: "EVENT_KEY",
					get: function () {
						return it
					}
				}, {
					key: "DefaultType",
					get: function () {
						return at
					}
				}]), n
			}(Je), K.fn[tt] = lt._jQueryInterface, K.fn[tt].Constructor = lt, K.fn[tt].noConflict = function () {
				return K.fn[tt] = nt, lt._jQueryInterface
			}, lt),
			Ve = (D = "scrollspy", M = "." + (W = "bs.scrollspy"), H = (P = e).fn[D], F = {
				offset: 10,
				method: "auto",
				target: ""
			}, R = {
				offset: "number",
				method: "string",
				target: "(string|element)"
			}, j = {
				ACTIVATE: "activate" + M,
				SCROLL: "scroll" + M,
				LOAD_DATA_API: "load" + M + ".data-api"
			}, $ = "active", N = '[data-spy="scroll"]', B = ".active", X = ".nav, .list-group", Y = ".nav-link", q = ".nav-item", U = ".list-group-item", J = ".dropdown", Q = ".dropdown-item", V = ".dropdown-toggle", Z = "position", G = function () {
				function i(t, e) {
					var i = this;
					this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Y + "," + this._config.target + " " + U + "," + this._config.target + " " + Q, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, P(this._scrollElement).on(j.SCROLL, function (t) {
						return i._process(t)
					}), this.refresh(), this._process()
				}
				var t = i.prototype;
				return t.refresh = function () {
					var e = this,
						t = this._scrollElement === this._scrollElement.window ? "offset" : Z,
						o = "auto" === this._config.method ? t : this._config.method,
						s = o === Z ? this._getScrollTop() : 0;
					this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), P.makeArray(P(this._selector)).map(function (t) {
						var e, i = $e.getSelectorFromElement(t);
						if (i && (e = P(i)[0]), e) {
							var n = e.getBoundingClientRect();
							if (n.width || n.height) return [P(e)[o]().top + s, i]
						}
						return null
					}).filter(function (t) {
						return t
					}).sort(function (t, e) {
						return t[0] - e[0]
					}).forEach(function (t) {
						e._offsets.push(t[0]), e._targets.push(t[1])
					})
				}, t.dispose = function () {
					P.removeData(this._element, W), P(this._scrollElement).off(M), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
				}, t._getConfig = function (t) {
					if ("string" != typeof (t = h({}, F, t)).target) {
						var e = P(t.target).attr("id");
						e || (e = $e.getUID(D), P(t.target).attr("id", e)), t.target = "#" + e
					}
					return $e.typeCheckConfig(D, t, R), t
				}, t._getScrollTop = function () {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
				}, t._getScrollHeight = function () {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}, t._getOffsetHeight = function () {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
				}, t._process = function () {
					var t = this._getScrollTop() + this._config.offset,
						e = this._getScrollHeight(),
						i = this._config.offset + e - this._getOffsetHeight();
					if (this._scrollHeight !== e && this.refresh(), i <= t) {
						var n = this._targets[this._targets.length - 1];
						this._activeTarget !== n && this._activate(n)
					} else {
						if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
						for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
					}
				}, t._activate = function (e) {
					this._activeTarget = e, this._clear();
					var t = this._selector.split(",");
					t = t.map(function (t) {
						return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
					});
					var i = P(t.join(","));
					i.hasClass("dropdown-item") ? (i.closest(J).find(V).addClass($), i.addClass($)) : (i.addClass($), i.parents(X).prev(Y + ", " + U).addClass($), i.parents(X).prev(q).children(Y).addClass($)), P(this._scrollElement).trigger(j.ACTIVATE, {
						relatedTarget: e
					})
				}, t._clear = function () {
					P(this._selector).filter(B).removeClass($)
				}, i._jQueryInterface = function (e) {
					return this.each(function () {
						var t = P(this).data(W);
						if (t || (t = new i(this, "object" == typeof e && e), P(this).data(W, t)), "string" == typeof e) {
							if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
							t[e]()
						}
					})
				}, a(i, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}, {
					key: "Default",
					get: function () {
						return F
					}
				}]), i
			}(), P(window).on(j.LOAD_DATA_API, function () {
				for (var t = P.makeArray(P(N)), e = t.length; e--;) {
					var i = P(t[e]);
					G._jQueryInterface.call(i, i.data())
				}
			}), P.fn[D] = G._jQueryInterface, P.fn[D].Constructor = G, P.fn[D].noConflict = function () {
				return P.fn[D] = H, G._jQueryInterface
			}, G),
			Ze = (S = "." + (C = "bs.tab"), z = (k = e).fn.tab, I = {
				HIDE: "hide" + S,
				HIDDEN: "hidden" + S,
				SHOW: "show" + S,
				SHOWN: "shown" + S,
				CLICK_DATA_API: "click.bs.tab.data-api"
			}, L = "active", E = ".active", O = "> li > .active", A = function () {
				function n(t) {
					this._element = t
				}
				var t = n.prototype;
				return t.show = function () {
					var i = this;
					if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && k(this._element).hasClass(L) || k(this._element).hasClass("disabled"))) {
						var t, n, e = k(this._element).closest(".nav, .list-group")[0],
							o = $e.getSelectorFromElement(this._element);
						if (e) {
							var s = "UL" === e.nodeName ? O : E;
							n = (n = k.makeArray(k(e).find(s)))[n.length - 1]
						}
						var a = k.Event(I.HIDE, {
								relatedTarget: this._element
							}),
							r = k.Event(I.SHOW, {
								relatedTarget: n
							});
						if (n && k(n).trigger(a), k(this._element).trigger(r), !r.isDefaultPrevented() && !a.isDefaultPrevented()) {
							o && (t = k(o)[0]), this._activate(this._element, e);
							var l = function () {
								var t = k.Event(I.HIDDEN, {
										relatedTarget: i._element
									}),
									e = k.Event(I.SHOWN, {
										relatedTarget: n
									});
								k(n).trigger(t), k(i._element).trigger(e)
							};
							t ? this._activate(t, t.parentNode, l) : l()
						}
					}
				}, t.dispose = function () {
					k.removeData(this._element, C), this._element = null
				}, t._activate = function (t, e, i) {
					var n = this,
						o = ("UL" === e.nodeName ? k(e).find(O) : k(e).children(E))[0],
						s = i && $e.supportsTransitionEnd() && o && k(o).hasClass("fade"),
						a = function () {
							return n._transitionComplete(t, o, i)
						};
					o && s ? k(o).one($e.TRANSITION_END, a).emulateTransitionEnd(150) : a()
				}, t._transitionComplete = function (t, e, i) {
					if (e) {
						k(e).removeClass("show " + L);
						var n = k(e.parentNode).find("> .dropdown-menu .active")[0];
						n && k(n).removeClass(L), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
					}
					if (k(t).addClass(L), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), $e.reflow(t), k(t).addClass("show"), t.parentNode && k(t.parentNode).hasClass("dropdown-menu")) {
						var o = k(t).closest(".dropdown")[0];
						o && k(o).find(".dropdown-toggle").addClass(L), t.setAttribute("aria-expanded", !0)
					}
					i && i()
				}, n._jQueryInterface = function (i) {
					return this.each(function () {
						var t = k(this),
							e = t.data(C);
						if (e || (e = new n(this), t.data(C, e)), "string" == typeof i) {
							if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
							e[i]()
						}
					})
				}, a(n, null, [{
					key: "VERSION",
					get: function () {
						return "4.0.0"
					}
				}]), n
			}(), k(document).on(I.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
				t.preventDefault(), A._jQueryInterface.call(k(this), "show")
			}), k.fn.tab = A._jQueryInterface, k.fn.tab.Constructor = A, k.fn.tab.noConflict = function () {
				return k.fn.tab = z, A._jQueryInterface
			}, A);
		! function (t) {
			if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
			var e = t.fn.jquery.split(" ")[0].split(".");
			if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
		}(e), t.Util = $e, t.Alert = Ne, t.Button = Be, t.Carousel = Xe, t.Collapse = Ye, t.Dropdown = qe, t.Modal = Ue, t.Popover = Qe, t.Scrollspy = Ve, t.Tab = Ze, t.Tooltip = Je, Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, "object" == typeof exports && "undefined" != typeof module ? b(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], b) : b(a.bootstrap = {}, a.jQuery, a.Popper),
	function (t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function (d) {
		"use strict";
		var o, a = window.Slick || {};
		o = 0, (a = function (t, e) {
			var i, n = this;
			n.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: d(t),
				appendDots: d(t),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (t, e) {
					return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, n.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, d.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = d(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = d(t).data("slick") || {}, n.options = d.extend({}, n.defaults, i, e), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = d.proxy(n.autoPlay, n), n.autoPlayClear = d.proxy(n.autoPlayClear, n), n.changeSlide = d.proxy(n.changeSlide, n), n.clickHandler = d.proxy(n.clickHandler, n), n.selectHandler = d.proxy(n.selectHandler, n), n.setPosition = d.proxy(n.setPosition, n), n.swipeHandler = d.proxy(n.swipeHandler, n), n.dragHandler = d.proxy(n.dragHandler, n), n.keyHandler = d.proxy(n.keyHandler, n), n.autoPlayIterator = d.proxy(n.autoPlayIterator, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
		}).prototype.addSlide = a.prototype.slickAdd = function (t, e, i) {
			var n = this;
			if ("boolean" == typeof e) i = e, e = null;
			else if (e < 0 || e >= n.slideCount) return !1;
			n.unload(), "number" == typeof e ? 0 === e && 0 === n.$slides.length ? d(t).appendTo(n.$slideTrack) : i ? d(t).insertBefore(n.$slides.eq(e)) : d(t).insertAfter(n.$slides.eq(e)) : !0 === i ? d(t).prependTo(n.$slideTrack) : d(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (t, e) {
				d(e).attr("data-slick-index", t)
			}), n.$slidesCache = n.$slides, n.reinit()
		}, a.prototype.animateHeight = function () {
			var t = this;
			if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
				var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
				t.$list.animate({
					height: e
				}, t.options.speed)
			}
		}, a.prototype.animateSlide = function (t, e) {
			var i = {},
				n = this;
			n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
				left: t
			}, n.options.speed, n.options.easing, e) : n.$slideTrack.animate({
				top: t
			}, n.options.speed, n.options.easing, e) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), d({
				animStart: n.currentLeft
			}).animate({
				animStart: t
			}, {
				duration: n.options.speed,
				easing: n.options.easing,
				step: function (t) {
					t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate(" + t + "px, 0px)" : i[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(i)
				},
				complete: function () {
					e && e.call()
				}
			})) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), e && setTimeout(function () {
				n.disableTransition(), e.call()
			}, n.options.speed))
		}, a.prototype.asNavFor = function (e) {
			var t = this.options.asNavFor;
			t && null !== t && (t = d(t).not(this.$slider)), null !== t && "object" == typeof t && t.each(function () {
				var t = d(this).slick("getSlick");
				t.unslicked || t.slideHandler(e, !0)
			})
		}, a.prototype.applyTransition = function (t) {
			var e = this,
				i = {};
			!1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
		}, a.prototype.autoPlay = function () {
			var t = this;
			t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && !0 !== t.paused && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
		}, a.prototype.autoPlayClear = function () {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, a.prototype.autoPlayIterator = function () {
			var t = this;
			!1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
		}, a.prototype.buildArrows = function () {
			var t = this;
			!0 === t.options.arrows && (t.$prevArrow = d(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = d(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, a.prototype.buildDots = function () {
			var t, e, i = this;
			if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
				for (e = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) e += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
				e += "</ul>", i.$dots = d(e).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}, a.prototype.buildOut = function () {
			var t = this;
			t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
				d(e).attr("data-slick-index", t).data("originalStyling", d(e).attr("style") || "")
			}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? d('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), d("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
		}, a.prototype.buildRows = function () {
			var t, e, i, n, o, s, a, r = this;
			if (n = document.createDocumentFragment(), s = r.$slider.children(), 1 < r.options.rows) {
				for (a = r.options.slidesPerRow * r.options.rows, o = Math.ceil(s.length / a), t = 0; t < o; t++) {
					var l = document.createElement("div");
					for (e = 0; e < r.options.rows; e++) {
						var d = document.createElement("div");
						for (i = 0; i < r.options.slidesPerRow; i++) {
							var c = t * a + (e * r.options.slidesPerRow + i);
							s.get(c) && d.appendChild(s.get(c))
						}
						l.appendChild(d)
					}
					n.appendChild(l)
				}
				r.$slider.html(n), r.$slider.children().children().children().css({
					width: 100 / r.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, a.prototype.checkResponsive = function (t, e) {
			var i, n, o, s = this,
				a = !1,
				r = s.$slider.width(),
				l = window.innerWidth || d(window).width();
			if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = r : "min" === s.respondTo && (o = Math.min(l, r)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
				for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
				null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || e) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = n), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
			}
		}, a.prototype.changeSlide = function (t, e) {
			var i, n, o = this,
				s = d(t.target);
			switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
				case "previous":
					n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, e);
					break;
				case "next":
					n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, e);
					break;
				case "index":
					var a = 0 === t.data.index ? 0 : t.data.index || s.index() * o.options.slidesToScroll;
					o.slideHandler(o.checkNavigable(a), !1, e), s.children().trigger("focus");
					break;
				default:
					return
			}
		}, a.prototype.checkNavigable = function (t) {
			var e, i;
			if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
			else
				for (var n in e) {
					if (t < e[n]) {
						t = i;
						break
					}
					i = e[n]
				}
			return t
		}, a.prototype.cleanUpEvents = function () {
			var t = this;
			t.options.dots && null !== t.$dots && (d("li", t.$dots).off("click.slick", t.changeSlide), !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && d("li", t.$dots).off("mouseenter.slick", d.proxy(t.setPaused, t, !0)).off("mouseleave.slick", d.proxy(t.setPaused, t, !1))), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), d(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", d.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", d.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().off("click.slick", t.selectHandler), d(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), d(window).off("resize.slick.slick-" + t.instanceUid, t.resize), d("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), d(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), d(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, a.prototype.cleanUpRows = function () {
			var t;
			1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.html(t))
		}, a.prototype.clickHandler = function (t) {
			!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
		}, a.prototype.destroy = function (t) {
			var e = this;
			e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), d(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
				d(this).attr("style", d(this).data("originalStyling"))
			}), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
		}, a.prototype.disableTransition = function (t) {
			var e = {};
			e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
		}, a.prototype.fadeSlide = function (t, e) {
			var i = this;
			!1 === i.cssTransitions ? (i.$slides.eq(t).css({
				zIndex: i.options.zIndex
			}), i.$slides.eq(t).animate({
				opacity: 1
			}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
				opacity: 1,
				zIndex: i.options.zIndex
			}), e && setTimeout(function () {
				i.disableTransition(t), e.call()
			}, i.options.speed))
		}, a.prototype.fadeSlideOut = function (t) {
			var e = this;
			!1 === e.cssTransitions ? e.$slides.eq(t).animate({
				opacity: 0,
				zIndex: e.options.zIndex - 2
			}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
				opacity: 0,
				zIndex: e.options.zIndex - 2
			}))
		}, a.prototype.filterSlides = a.prototype.slickFilter = function (t) {
			var e = this;
			null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
		}, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function () {
			return this.currentSlide
		}, a.prototype.getDotCount = function () {
			var t = this,
				e = 0,
				i = 0,
				n = 0;
			if (!0 === t.options.infinite)
				for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			else if (!0 === t.options.centerMode) n = t.slideCount;
			else
				for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return n - 1
		}, a.prototype.getLeft = function (t) {
			var e, i, n, o = this,
				s = 0;
			return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (s = t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
		}, a.prototype.getOption = a.prototype.slickGetOption = function (t) {
			return this.options[t]
		}, a.prototype.getNavigableIndexes = function () {
			var t, e = this,
				i = 0,
				n = 0,
				o = [];
			for (t = !1 === e.options.infinite ? e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			return o
		}, a.prototype.getSlick = function () {
			return this
		}, a.prototype.getSlideCount = function () {
			var i, n, o = this;
			return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (t, e) {
				return e.offsetLeft - n + d(e).outerWidth() / 2 > -1 * o.swipeLeft ? (i = e, !1) : void 0
			}), Math.abs(d(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
		}, a.prototype.goTo = a.prototype.slickGoTo = function (t, e) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(t)
				}
			}, e)
		}, a.prototype.init = function (t) {
			var e = this;
			d(e.$slider).hasClass("slick-initialized") || (d(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA()
		}, a.prototype.initArrowEvents = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
				message: "previous"
			}, t.changeSlide), t.$nextArrow.on("click.slick", {
				message: "next"
			}, t.changeSlide))
		}, a.prototype.initDotEvents = function () {
			var t = this;
			!0 === t.options.dots && t.slideCount > t.options.slidesToShow && d("li", t.$dots).on("click.slick", {
				message: "index"
			}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && d("li", t.$dots).on("mouseenter.slick", d.proxy(t.setPaused, t, !0)).on("mouseleave.slick", d.proxy(t.setPaused, t, !1))
		}, a.prototype.initializeEvents = function () {
			var t = this;
			t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), d(document).on(t.visibilityChange, d.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", d.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", d.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler), d(window).on("orientationchange.slick.slick-" + t.instanceUid, d.proxy(t.orientationChange, t)), d(window).on("resize.slick.slick-" + t.instanceUid, d.proxy(t.resize, t)), d("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), d(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), d(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, a.prototype.initUI = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), !0 === t.options.autoplay && t.autoPlay()
		}, a.prototype.keyHandler = function (t) {
			t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
				data: {
					message: "previous"
				}
			}) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
				data: {
					message: "next"
				}
			}))
		}, a.prototype.lazyLoad = function () {
			function t(t) {
				d("img[data-lazy]", t).each(function () {
					var t = d(this),
						e = d(this).attr("data-lazy"),
						i = document.createElement("img");
					i.onload = function () {
						t.animate({
							opacity: 0
						}, 100, function () {
							t.attr("src", e).animate({
								opacity: 1
							}, 200, function () {
								t.removeAttr("data-lazy").removeClass("slick-loading")
							})
						})
					}, i.src = e
				})
			}
			var e, i, n = this;
			!0 === n.options.centerMode ? i = !0 === n.options.infinite ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (i = (e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide) + n.options.slidesToShow, !0 === n.options.fade && (0 < e && e--, i <= n.slideCount && i++)), t(n.$slider.find(".slick-slide").slice(e, i)), n.slideCount <= n.options.slidesToShow ? t(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? t(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && t(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
		}, a.prototype.loadSlider = function () {
			var t = this;
			t.setPosition(), t.$slideTrack.css({
				opacity: 1
			}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
		}, a.prototype.next = a.prototype.slickNext = function () {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, a.prototype.orientationChange = function () {
			this.checkResponsive(), this.setPosition()
		}, a.prototype.pause = a.prototype.slickPause = function () {
			this.autoPlayClear(), this.paused = !0
		}, a.prototype.play = a.prototype.slickPlay = function () {
			this.paused = !1, this.autoPlay()
		}, a.prototype.postSlide = function (t) {
			var e = this;
			e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), !(e.swipeLeft = null) === e.options.autoplay && !1 === e.paused && e.autoPlay(), !0 === e.options.accessibility && e.initADA()
		}, a.prototype.prev = a.prototype.slickPrev = function () {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, a.prototype.preventDefault = function (t) {
			t.preventDefault()
		}, a.prototype.progressiveLazyLoad = function () {
			var t, e = this;
			0 < d("img[data-lazy]", e.$slider).length && ((t = d("img[data-lazy]", e.$slider).first()).attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function () {
				t.removeAttr("data-lazy"), e.progressiveLazyLoad(), !0 === e.options.adaptiveHeight && e.setPosition()
			}).error(function () {
				t.removeAttr("data-lazy"), e.progressiveLazyLoad()
			}))
		}, a.prototype.refresh = function (t) {
			var e, i, n = this;
			i = n.slideCount - n.options.slidesToShow, n.options.infinite || (n.slideCount <= n.options.slidesToShow ? n.currentSlide = 0 : n.currentSlide > i && (n.currentSlide = i)), e = n.currentSlide, n.destroy(!0), d.extend(n, n.initials, {
				currentSlide: e
			}), n.init(), t || n.changeSlide({
				data: {
					message: "index",
					index: e
				}
			}, !1)
		}, a.prototype.registerBreakpoints = function () {
			var t, e, i, n = this,
				o = n.options.responsive || null;
			if ("array" === d.type(o) && o.length) {
				for (t in n.respondTo = n.options.respondTo || "window", o)
					if (i = n.breakpoints.length - 1, e = o[t].breakpoint, o.hasOwnProperty(t)) {
						for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === e && n.breakpoints.splice(i, 1), i--;
						n.breakpoints.push(e), n.breakpointSettings[e] = o[t].settings
					}
				n.breakpoints.sort(function (t, e) {
					return n.options.mobileFirst ? t - e : e - t
				})
			}
		}, a.prototype.reinit = function () {
			var t = this;
			t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && d(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), !0 === t.options.autoplay && t.focusHandler()
		}, a.prototype.resize = function () {
			var t = this;
			d(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
				t.windowWidth = d(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
			}, 50))
		}, a.prototype.removeSlide = a.prototype.slickRemove = function (t, e, i) {
			var n = this;
			return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
		}, a.prototype.setCSS = function (t) {
			var e, i, n = this,
				o = {};
			!0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + e + ", " + i + ")" : o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(o)
		}, a.prototype.setDimensions = function () {
			var t = this;
			!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
				padding: "0px " + t.options.centerPadding
			}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
				padding: t.options.centerPadding + " 0px"
			})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
			var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
			!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
		}, a.prototype.setFade = function () {
			var i, n = this;
			n.$slides.each(function (t, e) {
				i = n.slideWidth * t * -1, !0 === n.options.rtl ? d(e).css({
					position: "relative",
					right: i,
					top: 0,
					zIndex: n.options.zIndex - 2,
					opacity: 0
				}) : d(e).css({
					position: "relative",
					left: i,
					top: 0,
					zIndex: n.options.zIndex - 2,
					opacity: 0
				})
			}), n.$slides.eq(n.currentSlide).css({
				zIndex: n.options.zIndex - 1,
				opacity: 1
			})
		}, a.prototype.setHeight = function () {
			var t = this;
			if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
				var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
				t.$list.css("height", e)
			}
		}, a.prototype.setOption = a.prototype.slickSetOption = function (t, e, i) {
			var n, o, s = this;
			if ("responsive" === t && "array" === d.type(e))
				for (o in e)
					if ("array" !== d.type(s.options.responsive)) s.options.responsive = [e[o]];
					else {
						for (n = s.options.responsive.length - 1; 0 <= n;) s.options.responsive[n].breakpoint === e[o].breakpoint && s.options.responsive.splice(n, 1), n--;
						s.options.responsive.push(e[o])
					}
			else s.options[t] = e;
			!0 === i && (s.unload(), s.reinit())
		}, a.prototype.setPosition = function () {
			var t = this;
			t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
		}, a.prototype.setProps = function () {
			var t = this,
				e = document.body.style;
			t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
		}, a.prototype.setSlideClasses = function (t) {
			var e, i, n, o, s = this;
			i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= t && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
		}, a.prototype.setupInfinite = function () {
			var t, e, i, n = this;
			if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (e = null, n.slideCount > n.options.slidesToShow)) {
				for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) e = t - 1, d(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
				for (t = 0; t < i; t += 1) e = t, d(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
				n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					d(this).attr("id", "")
				})
			}
		}, a.prototype.setPaused = function (t) {
			var e = this;
			!0 === e.options.autoplay && !0 === e.options.pauseOnHover && ((e.paused = t) ? e.autoPlayClear() : e.autoPlay())
		}, a.prototype.selectHandler = function (t) {
			var e = this,
				i = d(t.target).is(".slick-slide") ? d(t.target) : d(t.target).parents(".slick-slide"),
				n = parseInt(i.attr("data-slick-index"));
			return n || (n = 0), e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(n), void e.asNavFor(n)) : void e.slideHandler(n)
		}, a.prototype.slideHandler = function (t, e, i) {
			var n, o, s, a, r = null,
				l = this;
			return e = e || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === e && l.asNavFor(t), n = t, r = l.getLeft(n), a = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (t < 0 || t > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(a, function () {
				l.postSlide(n)
			}) : l.postSlide(n))) : !1 === l.options.infinite && !0 === l.options.centerMode && (t < 0 || t > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(a, function () {
				l.postSlide(n)
			}) : l.postSlide(n))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = n < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== i ? (l.fadeSlideOut(s), l.fadeSlide(o, function () {
				l.postSlide(o)
			})) : l.postSlide(o), void l.animateHeight()) : void(!0 !== i ? l.animateSlide(r, function () {
				l.postSlide(o)
			}) : l.postSlide(o))))
		}, a.prototype.startLoad = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
		}, a.prototype.swipeDirection = function () {
			var t, e, i, n, o = this;
			return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "left" : "right" : "vertical"
		}, a.prototype.swipeEnd = function (t) {
			var e, i = this;
			if (i.dragging = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
			if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
				case "left":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.slideHandler(e), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [i, "left"]);
					break;
				case "right":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.slideHandler(e), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [i, "right"])
			} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
		}, a.prototype.swipeHandler = function (t) {
			var e = this;
			if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
				case "start":
					e.swipeStart(t);
					break;
				case "move":
					e.swipeMove(t);
					break;
				case "end":
					e.swipeEnd(t)
			}
		}, a.prototype.swipeMove = function (t) {
			var e, i, n, o, s, a = this;
			return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (i = a.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && t.preventDefault(), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
		}, a.prototype.swipeStart = function (t) {
			var e, i = this;
			return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
		}, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function () {
			var t = this;
			null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
		}, a.prototype.unload = function () {
			var t = this;
			d(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, a.prototype.unslick = function (t) {
			this.$slider.trigger("unslick", [this, t]), this.destroy()
		}, a.prototype.updateArrows = function () {
			var t = this;
			Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, a.prototype.updateDots = function () {
			var t = this;
			null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
		}, a.prototype.visibility = function () {
			var t = this;
			document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : !0 === t.options.autoplay && (t.paused = !1, t.autoPlay())
		}, a.prototype.initADA = function () {
			var e = this;
			e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
				d(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + e.instanceUid + t
				})
			}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (t) {
				d(this).attr({
					role: "presentation",
					"aria-selected": "false",
					"aria-controls": "navigation" + e.instanceUid + t,
					id: "slick-slide" + e.instanceUid + t
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
		}, a.prototype.activateADA = function () {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, a.prototype.focusHandler = function () {
			var i = this;
			i.$slider.on("focus.slick blur.slick", "*", function (t) {
				t.stopImmediatePropagation();
				var e = d(this);
				setTimeout(function () {
					i.isPlay && (e.is(":focus") ? (i.autoPlayClear(), i.paused = !0) : (i.paused = !1, i.autoPlay()))
				}, 0)
			})
		}, d.fn.slick = function () {
			var t, e, i = this,
				n = arguments[0],
				o = Array.prototype.slice.call(arguments, 1),
				s = i.length;
			for (t = 0; t < s; t++)
				if ("object" == typeof n || void 0 === n ? i[t].slick = new a(i[t], n) : e = i[t].slick[n].apply(i[t].slick, o), void 0 !== e) return e;
			return i
		}
	}), "function" != typeof Object.create && (Object.create = function (t) {
		function e() {}
		return e.prototype = t, new e
	}), cp = jQuery, window, document, gp = {
		init: function (t, e) {
			var i = this;
			i.elem = e, i.$elem = cp(e), i.imageSrc = i.$elem.data("zoom-image") ? i.$elem.data("zoom-image") : i.$elem.attr("src"), i.options = cp.extend({}, cp.fn.elevateZoom.options, t), i.options.tint && (i.options.lensColour = "none", i.options.lensOpacity = "1"), "inner" == i.options.zoomType && (i.options.showLens = !1), i.$elem.parent().removeAttr("title").removeAttr("alt"), i.zoomImage = i.imageSrc, i.refresh(1), cp("#" + i.options.gallery + " a").click(function (t) {
				return i.options.galleryActiveClass && (cp("#" + i.options.gallery + " a").removeClass(i.options.galleryActiveClass), cp(this).addClass(i.options.galleryActiveClass)), t.preventDefault(), cp(this).data("zoom-image") ? i.zoomImagePre = cp(this).data("zoom-image") : i.zoomImagePre = cp(this).data("image"), i.swaptheimage(cp(this).data("image"), i.zoomImagePre), !1
			})
		},
		refresh: function (t) {
			var e = this;
			setTimeout(function () {
				e.fetch(e.imageSrc)
			}, t || e.options.refresh)
		},
		fetch: function (t) {
			var e = this,
				i = new Image;
			i.onload = function () {
				e.largeWidth = i.width, e.largeHeight = i.height, e.startZoom(), e.currentImage = e.imageSrc, e.options.onZoomedImageLoaded(e.$elem)
			}, i.src = t
		},
		startZoom: function () {
			var i = this;
			if (i.nzWidth = i.$elem.width(), i.nzHeight = i.$elem.height(), i.isWindowActive = !1, i.isLensActive = !1, i.isTintActive = !1, i.overWindow = !1, i.options.imageCrossfade && (i.zoomWrap = i.$elem.wrap('<div style="height:' + i.nzHeight + "px;width:" + i.nzWidth + 'px;" class="zoomWrapper" />'), i.$elem.css("position", "absolute")), i.zoomLock = 1, i.scrollingLock = !1, i.changeBgSize = !1, i.currentZoomLevel = i.options.zoomLevel, i.nzOffset = i.$elem.offset(), i.widthRatio = i.largeWidth / i.currentZoomLevel / i.nzWidth, i.heightRatio = i.largeHeight / i.currentZoomLevel / i.nzHeight, "window" == i.options.zoomType && (i.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(i.options.zoomWindowBgColour) + ";width: " + String(i.options.zoomWindowWidth) + "px;height: " + String(i.options.zoomWindowHeight) + "px;float: left;background-size: " + i.largeWidth / i.currentZoomLevel + "px " + i.largeHeight / i.currentZoomLevel + "px;display: none;z-index:100;border: " + String(i.options.borderSize) + "px solid " + i.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == i.options.zoomType) {
				var t = i.$elem.css("border-left-width");
				i.zoomWindowStyle = "overflow: hidden;margin-left: " + String(t) + ";margin-top: " + String(t) + ";background-position: 0px 0px;width: " + String(i.nzWidth) + "px;height: " + String(i.nzHeight) + "px;float: left;display: none;cursor:" + i.options.cursor + ";px solid " + i.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
			}
			"window" == i.options.zoomType && (lensHeight = i.nzHeight < i.options.zoomWindowWidth / i.widthRatio ? i.nzHeight : String(i.options.zoomWindowHeight / i.heightRatio), lensWidth = i.largeWidth < i.options.zoomWindowWidth ? i.nzWidth : i.options.zoomWindowWidth / i.widthRatio, i.lensStyle = "background-position: 0px 0px;width: " + String(i.options.zoomWindowWidth / i.widthRatio) + "px;height: " + String(i.options.zoomWindowHeight / i.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + i.options.lensOpacity + ";filter: alpha(opacity = " + 100 * i.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + i.options.lensColour + ";cursor:" + i.options.cursor + ";border: " + i.options.lensBorderSize + "px solid " + i.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), i.tintStyle = "display: block;position: absolute;background-color: " + i.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + i.nzWidth + "px;height: " + i.nzHeight + "px;", i.lensRound = "", "lens" == i.options.zoomType && (i.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(i.options.borderSize) + "px solid " + i.options.borderColour + ";width:" + String(i.options.lensSize) + "px;height:" + String(i.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == i.options.lensShape && (i.lensRound = "border-top-left-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-top-right-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-bottom-left-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;border-bottom-right-radius: " + String(i.options.lensSize / 2 + i.options.borderSize) + "px;"), i.zoomContainer = cp('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + i.nzOffset.left + "px;top:" + i.nzOffset.top + "px;height:" + i.nzHeight + "px;width:" + i.nzWidth + 'px;"></div>'), cp("body").append(i.zoomContainer), i.options.containLensZoom && "lens" == i.options.zoomType && i.zoomContainer.css("overflow", "hidden"), "inner" != i.options.zoomType && (i.zoomLens = cp("<div class='zoomLens' style='" + i.lensStyle + i.lensRound + "'>&nbsp;</div>").appendTo(i.zoomContainer).click(function () {
				i.$elem.trigger("click")
			}), i.options.tint && (i.tintContainer = cp("<div/>").addClass("tintContainer"), i.zoomTint = cp("<div class='zoomTint' style='" + i.tintStyle + "'></div>"), i.zoomLens.wrap(i.tintContainer), i.zoomTintcss = i.zoomLens.after(i.zoomTint), i.zoomTintImage = cp('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + i.nzWidth + "px; height: " + i.nzHeight + 'px;" src="' + i.imageSrc + '">').appendTo(i.zoomLens).click(function () {
				i.$elem.trigger("click")
			}))), isNaN(i.options.zoomWindowPosition) ? i.zoomWindow = cp("<div style='z-index:999;left:" + i.windowOffsetLeft + "px;top:" + i.windowOffsetTop + "px;" + i.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
				i.$elem.trigger("click")
			}) : i.zoomWindow = cp("<div style='z-index:999;left:" + i.windowOffsetLeft + "px;top:" + i.windowOffsetTop + "px;" + i.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(i.zoomContainer).click(function () {
				i.$elem.trigger("click")
			}), i.zoomWindowContainer = cp("<div/>").addClass("zoomWindowContainer").css("width", i.options.zoomWindowWidth), i.zoomWindow.wrap(i.zoomWindowContainer), "lens" == i.options.zoomType && i.zoomLens.css({
				backgroundImage: "url('" + i.imageSrc + "')"
			}), "window" == i.options.zoomType && i.zoomWindow.css({
				backgroundImage: "url('" + i.imageSrc + "')"
			}), "inner" == i.options.zoomType && i.zoomWindow.css({
				backgroundImage: "url('" + i.imageSrc + "')"
			}), i.$elem.bind("touchmove", function (t) {
				t.preventDefault(), i.setPosition(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
			}), i.zoomContainer.bind("touchmove", function (t) {
				"inner" == i.options.zoomType && i.showHideWindow("show"), t.preventDefault(), i.setPosition(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
			}), i.zoomContainer.bind("touchend", function (t) {
				i.showHideWindow("hide"), i.options.showLens && i.showHideLens("hide"), i.options.tint && "inner" != i.options.zoomType && i.showHideTint("hide")
			}), i.$elem.bind("touchend", function (t) {
				i.showHideWindow("hide"), i.options.showLens && i.showHideLens("hide"), i.options.tint && "inner" != i.options.zoomType && i.showHideTint("hide")
			}), i.options.showLens && (i.zoomLens.bind("touchmove", function (t) {
				t.preventDefault(), i.setPosition(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
			}), i.zoomLens.bind("touchend", function (t) {
				i.showHideWindow("hide"), i.options.showLens && i.showHideLens("hide"), i.options.tint && "inner" != i.options.zoomType && i.showHideTint("hide")
			})), i.$elem.bind("mousemove", function (t) {
				0 == i.overWindow && i.setElements("show"), i.lastX === t.clientX && i.lastY === t.clientY || (i.setPosition(t), i.currentLoc = t), i.lastX = t.clientX, i.lastY = t.clientY
			}), i.zoomContainer.bind("mousemove", function (t) {
				0 == i.overWindow && i.setElements("show"), i.lastX === t.clientX && i.lastY === t.clientY || (i.setPosition(t), i.currentLoc = t), i.lastX = t.clientX, i.lastY = t.clientY
			}), "inner" != i.options.zoomType && i.zoomLens.bind("mousemove", function (t) {
				i.lastX === t.clientX && i.lastY === t.clientY || (i.setPosition(t), i.currentLoc = t), i.lastX = t.clientX, i.lastY = t.clientY
			}), i.options.tint && "inner" != i.options.zoomType && i.zoomTint.bind("mousemove", function (t) {
				i.lastX === t.clientX && i.lastY === t.clientY || (i.setPosition(t), i.currentLoc = t), i.lastX = t.clientX, i.lastY = t.clientY
			}), "inner" == i.options.zoomType && i.zoomWindow.bind("mousemove", function (t) {
				i.lastX === t.clientX && i.lastY === t.clientY || (i.setPosition(t), i.currentLoc = t), i.lastX = t.clientX, i.lastY = t.clientY
			}), i.zoomContainer.add(i.$elem).mouseenter(function () {
				0 == i.overWindow && i.setElements("show")
			}).mouseleave(function () {
				i.scrollLock || i.setElements("hide")
			}), "inner" != i.options.zoomType && i.zoomWindow.mouseenter(function () {
				i.overWindow = !0, i.setElements("hide")
			}).mouseleave(function () {
				i.overWindow = !1
			}), i.minZoomLevel = i.options.minZoomLevel ? i.options.minZoomLevel : 2 * i.options.scrollZoomIncrement, i.options.scrollZoom && i.zoomContainer.add(i.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (t) {
				i.scrollLock = !0, clearTimeout(cp.data(this, "timer")), cp.data(this, "timer", setTimeout(function () {
					i.scrollLock = !1
				}, 250));
				var e = t.originalEvent.wheelDelta || -1 * t.originalEvent.detail;
				return t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), 0 < e / 120 ? i.currentZoomLevel >= i.minZoomLevel && i.changeZoomLevel(i.currentZoomLevel - i.options.scrollZoomIncrement) : i.options.maxZoomLevel ? i.currentZoomLevel <= i.options.maxZoomLevel && i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement) : i.changeZoomLevel(parseFloat(i.currentZoomLevel) + i.options.scrollZoomIncrement), !1
			})
		},
		setElements: function (t) {
			if (!this.options.zoomEnabled) return !1;
			"show" == t && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show")), "hide" == t && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"), this.options.tint && this.showHideTint("hide"))
		},
		setPosition: function (t) {
			if (!this.options.zoomEnabled) return !1;
			this.nzHeight = this.$elem.height(), this.nzWidth = this.$elem.width(), this.nzOffset = this.$elem.offset(), this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({
				top: 0
			}), this.zoomTint.css({
				left: 0
			})), this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({
				width: String(this.options.lensSize) + "px",
				height: String(this.options.lensSize) + "px"
			})), this.zoomContainer.css({
				top: this.nzOffset.top
			}), this.zoomContainer.css({
				left: this.nzOffset.left
			}), this.mouseLeft = parseInt(t.pageX - this.nzOffset.left), this.mouseTop = parseInt(t.pageY - this.nzOffset.top), "window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize), "inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize), this.mouseLeft <= 0 || this.mouseTop < 0 || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0), this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)), "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((t.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((t.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({
				backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px"
			}), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({
				"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"
			}), this.zoomWindow.css({
				"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"
			})) : ("lens" == this.options.zoomType && this.zoomLens.css({
				"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"
			}), this.zoomWindow.css({
				"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"
			})), this.changeBgSize = !1), this.setWindowPostition(t)), this.options.tint && "inner" != this.options.zoomType && this.setTintPosition(t), "window" == this.options.zoomType && this.setWindowPostition(t), "inner" == this.options.zoomType && this.setWindowPostition(t), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({
				left: this.lensLeftPos + "px",
				top: this.lensTopPos + "px"
			})))
		},
		showHideWindow: function (t) {
			"show" != t || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive = !0), "hide" == t && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1)
		},
		showHideLens: function (t) {
			"show" != t || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0), "hide" == t && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(), this.isLensActive = !1)
		},
		showHideTint: function (t) {
			"show" != t || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({
				opacity: this.options.tintOpacity
			}).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({
				opacity: this.options.tintOpacity
			}).animate(), this.zoomTint.show()), this.isTintActive = !0), "hide" == t && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1)
		},
		setLensPostition: function (t) {},
		setWindowPostition: function (t) {
			var e = this;
			if (isNaN(e.options.zoomWindowPosition)) e.externalContainer = cp("#" + e.options.zoomWindowPosition), e.externalContainerWidth = e.externalContainer.width(), e.externalContainerHeight = e.externalContainer.height(), e.externalContainerOffset = e.externalContainer.offset(), e.windowOffsetTop = e.externalContainerOffset.top, e.windowOffsetLeft = e.externalContainerOffset.left;
			else switch (e.options.zoomWindowPosition) {
				case 1:
					e.windowOffsetTop = e.options.zoomWindowOffety, e.windowOffsetLeft = +e.nzWidth;
					break;
				case 2:
					e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2), e.windowOffsetLeft = e.nzWidth);
					break;
				case 3:
					e.windowOffsetTop = e.nzHeight - e.zoomWindow.height() - 2 * e.options.borderSize, e.windowOffsetLeft = e.nzWidth;
					break;
				case 4:
					e.windowOffsetTop = e.nzHeight, e.windowOffsetLeft = e.nzWidth;
					break;
				case 5:
					e.windowOffsetTop = e.nzHeight, e.windowOffsetLeft = e.nzWidth - e.zoomWindow.width() - 2 * e.options.borderSize;
					break;
				case 6:
					e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = e.nzHeight, e.windowOffsetLeft = -1 * (e.options.zoomWindowWidth / 2 - e.nzWidth / 2 + 2 * e.options.borderSize));
					break;
				case 7:
					e.windowOffsetTop = e.nzHeight, e.windowOffsetLeft = 0;
					break;
				case 8:
					e.windowOffsetTop = e.nzHeight, e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
					break;
				case 9:
					e.windowOffsetTop = e.nzHeight - e.zoomWindow.height() - 2 * e.options.borderSize, e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
					break;
				case 10:
					e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2), e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
					break;
				case 11:
					e.windowOffsetTop = e.options.zoomWindowOffety, e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
					break;
				case 12:
					e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize), e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize);
					break;
				case 13:
					e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize), e.windowOffsetLeft = 0;
					break;
				case 14:
					e.options.zoomWindowHeight > e.nzHeight && (e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize), e.windowOffsetLeft = -1 * (e.options.zoomWindowWidth / 2 - e.nzWidth / 2 + 2 * e.options.borderSize));
					break;
				case 15:
					e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize), e.windowOffsetLeft = e.nzWidth - e.zoomWindow.width() - 2 * e.options.borderSize;
					break;
				case 16:
					e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize), e.windowOffsetLeft = e.nzWidth;
					break;
				default:
					e.windowOffsetTop = e.options.zoomWindowOffety, e.windowOffsetLeft = e.nzWidth
			}
			e.isWindowSet = !0, e.windowOffsetTop += e.options.zoomWindowOffety, e.windowOffsetLeft += e.options.zoomWindowOffetx, e.zoomWindow.css({
				top: e.windowOffsetTop
			}), e.zoomWindow.css({
				left: e.windowOffsetLeft
			}), "inner" == e.options.zoomType && (e.zoomWindow.css({
				top: 0
			}), e.zoomWindow.css({
				left: 0
			})), e.windowLeftPos = String(-1 * ((t.pageX - e.nzOffset.left) * e.widthRatio - e.zoomWindow.width() / 2)), e.windowTopPos = String(-1 * ((t.pageY - e.nzOffset.top) * e.heightRatio - e.zoomWindow.height() / 2)), e.Etoppos && (e.windowTopPos = 0), e.Eloppos && (e.windowLeftPos = 0), e.Eboppos && (e.windowTopPos = -1 * (e.largeHeight / e.currentZoomLevel - e.zoomWindow.height())), e.Eroppos && (e.windowLeftPos = -1 * (e.largeWidth / e.currentZoomLevel - e.zoomWindow.width())), e.fullheight && (e.windowTopPos = 0), e.fullwidth && (e.windowLeftPos = 0), "window" != e.options.zoomType && "inner" != e.options.zoomType || (1 == e.zoomLock && (e.widthRatio <= 1 && (e.windowLeftPos = 0), e.heightRatio <= 1 && (e.windowTopPos = 0)), e.largeHeight < e.options.zoomWindowHeight && (e.windowTopPos = 0), e.largeWidth < e.options.zoomWindowWidth && (e.windowLeftPos = 0), e.options.easing ? (e.xp || (e.xp = 0), e.yp || (e.yp = 0), e.loop || (e.loop = setInterval(function () {
				e.xp += (e.windowLeftPos - e.xp) / e.options.easingAmount, e.yp += (e.windowTopPos - e.yp) / e.options.easingAmount, e.scrollingLock ? (clearInterval(e.loop), e.xp = e.windowLeftPos, e.yp = e.windowTopPos, e.xp = -1 * ((t.pageX - e.nzOffset.left) * e.widthRatio - e.zoomWindow.width() / 2), e.yp = -1 * ((t.pageY - e.nzOffset.top) * e.heightRatio - e.zoomWindow.height() / 2), e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
					"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
				}), e.zoomWindow.css({
					"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
				})) : ("lens" != e.options.zoomType && e.zoomLens.css({
					"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvalueheight + "px"
				}), e.zoomWindow.css({
					"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
				})), e.changeBgSize = !1), e.zoomWindow.css({
					backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"
				}), e.scrollingLock = !1, e.loop = !1) : (e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
					"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
				}), e.zoomWindow.css({
					"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
				})) : ("lens" != e.options.zoomType && e.zoomLens.css({
					"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
				}), e.zoomWindow.css({
					"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
				})), e.changeBgSize = !1), e.zoomWindow.css({
					backgroundPosition: e.xp + "px " + e.yp + "px"
				}))
			}, 16))) : (e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
				"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
			}), e.zoomWindow.css({
				"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
			})) : ("lens" == e.options.zoomType && e.zoomLens.css({
				"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
			}), e.largeHeight / e.newvaluewidth < e.options.zoomWindowHeight ? e.zoomWindow.css({
				"background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
			}) : e.zoomWindow.css({
				"background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
			})), e.changeBgSize = !1), e.zoomWindow.css({
				backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"
			})))
		},
		setTintPosition: function (t) {
			this.nzOffset = this.$elem.offset(), this.tintpos = String(-1 * (t.pageX - this.nzOffset.left - this.zoomLens.width() / 2)), this.tintposy = String(-1 * (t.pageY - this.nzOffset.top - this.zoomLens.height() / 2)), this.Etoppos && (this.tintposy = 0), this.Eloppos && (this.tintpos = 0), this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize)), this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({
				left: this.tintpos + "px"
			}), this.zoomTintImage.css({
				top: this.tintposy + "px"
			}))
		},
		swaptheimage: function (t, e) {
			var i = this,
				n = new Image;
			i.options.loadingIcon && (i.spinner = cp("<div style=\"background: url('" + i.options.loadingIcon + "') no-repeat center;height:" + i.nzHeight + "px;width:" + i.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), i.$elem.after(i.spinner)), i.options.onImageSwap(i.$elem), n.onload = function () {
				i.largeWidth = n.width, i.largeHeight = n.height, i.zoomImage = e, i.zoomWindow.css({
					"background-size": i.largeWidth + "px " + i.largeHeight + "px"
				}), i.zoomWindow.css({
					"background-size": i.largeWidth + "px " + i.largeHeight + "px"
				}), i.swapAction(t, e)
			}, n.src = e
		},
		swapAction: function (t, e) {
			var i = this,
				n = new Image;
			if (n.onload = function () {
					i.nzHeight = n.height, i.nzWidth = n.width, i.options.onImageSwapComplete(i.$elem), i.doneCallback()
				}, n.src = t, i.currentZoomLevel = i.options.zoomLevel, i.options.maxZoomLevel = !1, "lens" == i.options.zoomType && i.zoomLens.css({
					backgroundImage: "url('" + e + "')"
				}), "window" == i.options.zoomType && i.zoomWindow.css({
					backgroundImage: "url('" + e + "')"
				}), "inner" == i.options.zoomType && i.zoomWindow.css({
					backgroundImage: "url('" + e + "')"
				}), i.currentImage = e, i.options.imageCrossfade) {
				var o = i.$elem,
					s = o.clone();
				i.$elem.attr("src", t), i.$elem.after(s), s.stop(!0).fadeOut(i.options.imageCrossfade, function () {
					cp(this).remove()
				}), i.$elem.width("auto").removeAttr("width"), i.$elem.height("auto").removeAttr("height"), o.fadeIn(i.options.imageCrossfade), i.options.tint && "inner" != i.options.zoomType && (s = (o = i.zoomTintImage).clone(), i.zoomTintImage.attr("src", e), i.zoomTintImage.after(s), s.stop(!0).fadeOut(i.options.imageCrossfade, function () {
					cp(this).remove()
				}), o.fadeIn(i.options.imageCrossfade), i.zoomTint.css({
					height: i.$elem.height()
				}), i.zoomTint.css({
					width: i.$elem.width()
				})), i.zoomContainer.css("height", i.$elem.height()), i.zoomContainer.css("width", i.$elem.width()), "inner" != i.options.zoomType || i.options.constrainType || (i.zoomWrap.parent().css("height", i.$elem.height()), i.zoomWrap.parent().css("width", i.$elem.width()), i.zoomWindow.css("height", i.$elem.height()), i.zoomWindow.css("width", i.$elem.width()))
			} else i.$elem.attr("src", t), i.options.tint && (i.zoomTintImage.attr("src", e), i.zoomTintImage.attr("height", i.$elem.height()), i.zoomTintImage.css({
				height: i.$elem.height()
			}), i.zoomTint.css({
				height: i.$elem.height()
			})), i.zoomContainer.css("height", i.$elem.height()), i.zoomContainer.css("width", i.$elem.width());
			i.options.imageCrossfade && (i.zoomWrap.css("height", i.$elem.height()), i.zoomWrap.css("width", i.$elem.width())), i.options.constrainType && ("height" == i.options.constrainType && (i.zoomContainer.css("height", i.options.constrainSize), i.zoomContainer.css("width", "auto"), i.options.imageCrossfade ? (i.zoomWrap.css("height", i.options.constrainSize), i.zoomWrap.css("width", "auto"), i.constwidth = i.zoomWrap.width()) : (i.$elem.css("height", i.options.constrainSize), i.$elem.css("width", "auto"), i.constwidth = i.$elem.width()), "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.options.constrainSize), i.zoomWrap.parent().css("width", i.constwidth), i.zoomWindow.css("height", i.options.constrainSize), i.zoomWindow.css("width", i.constwidth)), i.options.tint && (i.tintContainer.css("height", i.options.constrainSize), i.tintContainer.css("width", i.constwidth), i.zoomTint.css("height", i.options.constrainSize), i.zoomTint.css("width", i.constwidth), i.zoomTintImage.css("height", i.options.constrainSize), i.zoomTintImage.css("width", i.constwidth))), "width" == i.options.constrainType && (i.zoomContainer.css("height", "auto"), i.zoomContainer.css("width", i.options.constrainSize), i.options.imageCrossfade ? (i.zoomWrap.css("height", "auto"), i.zoomWrap.css("width", i.options.constrainSize), i.constheight = i.zoomWrap.height()) : (i.$elem.css("height", "auto"), i.$elem.css("width", i.options.constrainSize), i.constheight = i.$elem.height()), "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.constheight), i.zoomWrap.parent().css("width", i.options.constrainSize), i.zoomWindow.css("height", i.constheight), i.zoomWindow.css("width", i.options.constrainSize)), i.options.tint && (i.tintContainer.css("height", i.constheight), i.tintContainer.css("width", i.options.constrainSize), i.zoomTint.css("height", i.constheight), i.zoomTint.css("width", i.options.constrainSize), i.zoomTintImage.css("height", i.constheight), i.zoomTintImage.css("width", i.options.constrainSize))))
		},
		doneCallback: function () {
			this.options.loadingIcon && this.spinner.hide(), this.nzOffset = this.$elem.offset(), this.nzWidth = this.$elem.width(), this.nzHeight = this.$elem.height(), this.currentZoomLevel = this.options.zoomLevel, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight)))
		},
		getCurrentImage: function () {
			return this.zoomImage
		},
		getGalleryList: function () {
			var e = this;
			return e.gallerylist = [], e.options.gallery ? cp("#" + e.options.gallery + " a").each(function () {
				var t = "";
				cp(this).data("zoom-image") ? t = cp(this).data("zoom-image") : cp(this).data("image") && (t = cp(this).data("image")), t == e.zoomImage ? e.gallerylist.unshift({
					href: "" + t,
					title: cp(this).find("img").attr("title")
				}) : e.gallerylist.push({
					href: "" + t,
					title: cp(this).find("img").attr("title")
				})
			}) : e.gallerylist.push({
				href: "" + e.zoomImage,
				title: cp(this).find("img").attr("title")
			}), e.gallerylist
		},
		changeZoomLevel: function (t) {
			this.scrollingLock = !0, this.newvalue = parseFloat(t).toFixed(2), newvalue = parseFloat(t).toFixed(2), maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight), maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth), "inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1))), "inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)), scrcontinue = !1, "inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0))), "inner" != this.options.zoomType && (scrcontinue = !0), scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight && (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({
				height: String(this.options.zoomWindowHeight / this.heightRatio) + "px"
			})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({
				width: String(this.options.zoomWindowWidth / this.widthRatio) + "px"
			})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth))), this.setPosition(this.currentLoc)
		},
		closeAll: function () {
			self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide()
		},
		changeState: function (t) {
			"enable" == t && (this.options.zoomEnabled = !0), "disable" == t && (this.options.zoomEnabled = !1)
		}
	}, cp.fn.elevateZoom = function (e) {
		return this.each(function () {
			var t = Object.create(gp);
			t.init(e, this), cp.data(this, "elevateZoom", t)
		})
	}, cp.fn.elevateZoom.options = {
		zoomActivation: "hover",
		zoomEnabled: !0,
		preloading: 1,
		zoomLevel: 1,
		scrollZoom: !1,
		scrollZoomIncrement: .1,
		minZoomLevel: !1,
		maxZoomLevel: !1,
		easing: !1,
		easingAmount: 12,
		lensSize: 200,
		zoomWindowWidth: 400,
		zoomWindowHeight: 400,
		zoomWindowOffetx: 0,
		zoomWindowOffety: 0,
		zoomWindowPosition: 1,
		zoomWindowBgColour: "#fff",
		lensFadeIn: !1,
		lensFadeOut: !1,
		debug: !1,
		zoomWindowFadeIn: !1,
		zoomWindowFadeOut: !1,
		zoomWindowAlwaysShow: !1,
		zoomTintFadeIn: !1,
		zoomTintFadeOut: !1,
		borderSize: 4,
		showLens: !0,
		borderColour: "#888",
		lensBorderSize: 1,
		lensBorderColour: "#000",
		lensShape: "square",
		zoomType: "window",
		containLensZoom: !1,
		lensColour: "white",
		lensOpacity: .4,
		lenszoom: !1,
		tint: !1,
		tintColour: "#333",
		tintOpacity: .4,
		gallery: !1,
		galleryActiveClass: "zoomGalleryActive",
		imageCrossfade: !1,
		constrainType: !1,
		constrainSize: !1,
		loadingIcon: !1,
		cursor: "default",
		responsive: !0,
		onComplete: cp.noop,
		onZoomedImageLoaded: function () {},
		onImageSwap: cp.noop,
		onImageSwapComplete: cp.noop
	}, cq = "undefined" != typeof window ? window : this, dq = function () {
		function t() {}
		var e = t.prototype;
		return e.on = function (t, e) {
			if (t && e) {
				var i = this._events = this._events || {},
					n = i[t] = i[t] || [];
				return -1 == n.indexOf(e) && n.push(e), this
			}
		}, e.once = function (t, e) {
			if (t && e) {
				this.on(t, e);
				var i = this._onceEvents = this._onceEvents || {};
				return (i[t] = i[t] || {})[e] = !0, this
			}
		}, e.off = function (t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				var n = i.indexOf(e);
				return -1 != n && i.splice(n, 1), this
			}
		}, e.emitEvent = function (t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				i = i.slice(0), e = e || [];
				for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
					var s = i[o];
					n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
				}
				return this
			}
		}, e.allOff = function () {
			delete this._events, delete this._onceEvents
		}, t
	}, "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", dq) : "object" == typeof module && module.exports ? module.exports = dq() : cq.EvEmitter = dq(),
	function (e, i) {
		"use strict";
		"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (t) {
			return i(e, t)
		}) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
	}("undefined" != typeof window ? window : this, function (e, t) {
		var s = e.jQuery,
			a = e.console;

		function r(t, e) {
			for (var i in e) t[i] = e[i];
			return t
		}
		var l = Array.prototype.slice;

		function d(t, e, i) {
			if (!(this instanceof d)) return new d(t, e, i);
			var n, o = t;
			("string" == typeof t && (o = document.querySelectorAll(t)), o) ? (this.elements = (n = o, Array.isArray(n) ? n : "object" == typeof n && "number" == typeof n.length ? l.call(n) : [n]), this.options = r({}, this.options), "function" == typeof e ? i = e : r(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))) : a.error("Bad element for imagesLoaded " + (o || t))
		}(d.prototype = Object.create(t.prototype)).options = {}, d.prototype.getImages = function () {
			this.images = [], this.elements.forEach(this.addElementImages, this)
		}, d.prototype.addElementImages = function (t) {
			"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
			var e = t.nodeType;
			if (e && c[e]) {
				for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
					var o = i[n];
					this.addImage(o)
				}
				if ("string" == typeof this.options.background) {
					var s = t.querySelectorAll(this.options.background);
					for (n = 0; n < s.length; n++) {
						var a = s[n];
						this.addElementBackgroundImages(a)
					}
				}
			}
		};
		var c = {
			1: !0,
			9: !0,
			11: !0
		};

		function i(t) {
			this.img = t
		}

		function n(t, e) {
			this.url = t, this.element = e, this.img = new Image
		}
		return d.prototype.addElementBackgroundImages = function (t) {
			var e = getComputedStyle(t);
			if (e)
				for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
					var o = n && n[2];
					o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
				}
		}, d.prototype.addImage = function (t) {
			var e = new i(t);
			this.images.push(e)
		}, d.prototype.addBackground = function (t, e) {
			var i = new n(t, e);
			this.images.push(i)
		}, d.prototype.check = function () {
			var n = this;

			function e(t, e, i) {
				setTimeout(function () {
					n.progress(t, e, i)
				})
			}
			this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
				t.once("progress", e), t.check()
			}) : this.complete()
		}, d.prototype.progress = function (t, e, i) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
		}, d.prototype.complete = function () {
			var t = this.hasAnyBroken ? "fail" : "done";
			if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
				var e = this.hasAnyBroken ? "reject" : "resolve";
				this.jqDeferred[e](this)
			}
		}, (i.prototype = Object.create(t.prototype)).check = function () {
			this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
		}, i.prototype.getIsImageComplete = function () {
			return this.img.complete && this.img.naturalWidth
		}, i.prototype.confirm = function (t, e) {
			this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
		}, i.prototype.handleEvent = function (t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, i.prototype.onload = function () {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, i.prototype.onerror = function () {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, i.prototype.unbindEvents = function () {
			this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, (n.prototype = Object.create(i.prototype)).check = function () {
			this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, n.prototype.unbindEvents = function () {
			this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, n.prototype.confirm = function (t, e) {
			this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
		}, d.makeJQueryPlugin = function (t) {
			(t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function (t, e) {
				return new d(this, t, e).jqDeferred.promise(s(this))
			})
		}, d.makeJQueryPlugin(), d
	}), Mr = window, Nr = function (t, e) {
		"use strict";

		function i(d, o, c) {
			(c = c || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function (t) {
				c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
			}), c.fn[d] = function (t) {
				if ("string" != typeof t) return n = t, this.each(function (t, e) {
					var i = c.data(e, d);
					i ? (i.option(n), i._init()) : (i = new o(e, n), c.data(e, d, i))
				}), this;
				var e, s, a, r, l, n, i = h.call(arguments, 1);
				return a = i, l = "$()." + d + '("' + (s = t) + '")', (e = this).each(function (t, e) {
					var i = c.data(e, d);
					if (i) {
						var n = i[s];
						if (n && "_" != s.charAt(0)) {
							var o = n.apply(i, a);
							r = void 0 === r ? o : r
						} else u(l + " is not a valid method")
					} else u(d + " not initialized. Cannot call methods, i.e. " + l)
				}), void 0 !== r ? r : e
			}, n(c))
		}

		function n(t) {
			!t || t && t.bridget || (t.bridget = i)
		}
		var h = Array.prototype.slice,
			o = t.console,
			u = void 0 === o ? function () {} : function (t) {
				o.error(t)
			};
		return n(e || t.jQuery), i
	}, "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
		return Nr(Mr, t)
	}) : "object" == typeof module && module.exports ? module.exports = Nr(Mr, require("jquery")) : Mr.jQueryBridget = Nr(Mr, Mr.jQuery), ts = "undefined" != typeof window ? window : this, us = function () {
		function t() {}
		var e = t.prototype;
		return e.on = function (t, e) {
			if (t && e) {
				var i = this._events = this._events || {},
					n = i[t] = i[t] || [];
				return -1 == n.indexOf(e) && n.push(e), this
			}
		}, e.once = function (t, e) {
			if (t && e) {
				this.on(t, e);
				var i = this._onceEvents = this._onceEvents || {};
				return (i[t] = i[t] || {})[e] = !0, this
			}
		}, e.off = function (t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				var n = i.indexOf(e);
				return -1 != n && i.splice(n, 1), this
			}
		}, e.emitEvent = function (t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				i = i.slice(0), e = e || [];
				for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
					var s = i[o];
					n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
				}
				return this
			}
		}, e.allOff = function () {
			delete this._events, delete this._onceEvents
		}, t
	}, "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", us) : "object" == typeof module && module.exports ? module.exports = us() : ts.EvEmitter = us(),
	function (t, e) {
		"use strict";
		"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
			return e()
		}) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
	}(window, function () {
		"use strict";

		function v(t) {
			var e = parseFloat(t);
			return -1 == t.indexOf("%") && !isNaN(e) && e
		}

		function w(t) {
			var e = getComputedStyle(t);
			return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
		}

		function y(t) {
			if (function () {
					if (!T) {
						T = !0;
						var t = document.createElement("div");
						t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
						var e = document.body || document.documentElement;
						e.appendChild(t);
						var i = w(t);
						y.isBoxSizeOuter = b = 200 == v(i.width), e.removeChild(t)
					}
				}(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
				var e = w(t);
				if ("none" == e.display) return function () {
					for (var t = {
							width: 0,
							height: 0,
							innerWidth: 0,
							innerHeight: 0,
							outerWidth: 0,
							outerHeight: 0
						}, e = 0; e < x; e++) t[_[e]] = 0;
					return t
				}();
				var i = {};
				i.width = t.offsetWidth, i.height = t.offsetHeight;
				for (var n = i.isBorderBox = "border-box" == e.boxSizing, o = 0; o < x; o++) {
					var s = _[o],
						a = e[s],
						r = parseFloat(a);
					i[s] = isNaN(r) ? 0 : r
				}
				var l = i.paddingLeft + i.paddingRight,
					d = i.paddingTop + i.paddingBottom,
					c = i.marginLeft + i.marginRight,
					h = i.marginTop + i.marginBottom,
					u = i.borderLeftWidth + i.borderRightWidth,
					p = i.borderTopWidth + i.borderBottomWidth,
					f = n && b,
					m = v(e.width);
				!1 !== m && (i.width = m + (f ? 0 : l + u));
				var g = v(e.height);
				return !1 !== g && (i.height = g + (f ? 0 : d + p)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (d + p), i.outerWidth = i.width + c, i.outerHeight = i.height + h, i
			}
		}
		var b, i = void 0 === console ? function () {} : function (t) {
				console.error(t)
			},
			_ = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			x = _.length,
			T = !1;
		return y
	}),
	function (t, e) {
		"use strict";
		"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
	}(window, function () {
		"use strict";
		var i = function () {
			var t = window.Element.prototype;
			if (t.matches) return "matches";
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
				var n = e[i] + "MatchesSelector";
				if (t[n]) return n
			}
		}();
		return function (t, e) {
			return t[i](e)
		}
	}), Ot = window, Pt = function (d, s) {
		var c = {
				extend: function (t, e) {
					for (var i in e) t[i] = e[i];
					return t
				},
				modulo: function (t, e) {
					return (t % e + e) % e
				},
				makeArray: function (t) {
					var e = [];
					if (Array.isArray(t)) e = t;
					else if (t && "object" == typeof t && "number" == typeof t.length)
						for (var i = 0; i < t.length; i++) e.push(t[i]);
					else e.push(t);
					return e
				},
				removeFrom: function (t, e) {
					var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
				},
				getParent: function (t, e) {
					for (; t.parentNode && t != document.body;)
						if (t = t.parentNode, s(t, e)) return t
				},
				getQueryElement: function (t) {
					return "string" == typeof t ? document.querySelector(t) : t
				},
				handleEvent: function (t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				},
				filterFindElements: function (t, n) {
					t = c.makeArray(t);
					var o = [];
					return t.forEach(function (t) {
						if (t instanceof HTMLElement) {
							if (!n) return void o.push(t);
							s(t, n) && o.push(t);
							for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) o.push(e[i])
						}
					}), o
				},
				debounceMethod: function (t, e, n) {
					var o = t.prototype[e],
						s = e + "Timeout";
					t.prototype[e] = function () {
						var t = this[s];
						t && clearTimeout(t);
						var e = arguments,
							i = this;
						this[s] = setTimeout(function () {
							o.apply(i, e), delete i[s]
						}, n || 100)
					}
				},
				docReady: function (t) {
					var e = document.readyState;
					"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
				},
				toDashed: function (t) {
					return t.replace(/(.)([A-Z])/g, function (t, e, i) {
						return e + "-" + i
					}).toLowerCase()
				}
			},
			h = d.console;
		return c.htmlInit = function (r, l) {
			c.docReady(function () {
				var t = c.toDashed(l),
					o = "data-" + t,
					e = document.querySelectorAll("[" + o + "]"),
					i = document.querySelectorAll(".js-" + t),
					n = c.makeArray(e).concat(c.makeArray(i)),
					s = o + "-options",
					a = d.jQuery;
				n.forEach(function (e) {
					var t, i = e.getAttribute(o) || e.getAttribute(s);
					try {
						t = i && JSON.parse(i)
					} catch (t) {
						return void(h && h.error("Error parsing " + o + " on " + e.className + ": " + t))
					}
					var n = new r(e, t);
					a && a.data(e, l, n)
				})
			})
		}, c
	}, "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
		return Pt(Ot, t)
	}) : "object" == typeof module && module.exports ? module.exports = Pt(Ot, require("desandro-matches-selector")) : Ot.fizzyUIUtils = Pt(Ot, Ot.matchesSelector), Ru = window, Su = function (t, e) {
		"use strict";

		function i(t, e) {
			t && (this.element = t, this.layout = e, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}
		var n = document.documentElement.style,
			o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
			s = "string" == typeof n.transform ? "transform" : "WebkitTransform",
			a = {
				WebkitTransition: "webkitTransitionEnd",
				transition: "transitionend"
			}[o],
			r = {
				transform: s,
				transition: o,
				transitionDuration: o + "Duration",
				transitionProperty: o + "Property",
				transitionDelay: o + "Delay"
			},
			l = i.prototype = Object.create(t.prototype);
		l.constructor = i, l._create = function () {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, l.handleEvent = function (t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, l.getSize = function () {
			this.size = e(this.element)
		}, l.css = function (t) {
			var e = this.element.style;
			for (var i in t) {
				e[r[i] || i] = t[i]
			}
		}, l.getPosition = function () {
			var t = getComputedStyle(this.element),
				e = this.layout._getOption("originLeft"),
				i = this.layout._getOption("originTop"),
				n = t[e ? "left" : "right"],
				o = t[i ? "top" : "bottom"],
				s = this.layout.size,
				a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
				r = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
			a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, a -= e ? s.paddingLeft : s.paddingRight, r -= i ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = r
		}, l.layoutPosition = function () {
			var t = this.layout.size,
				e = {},
				i = this.layout._getOption("originLeft"),
				n = this.layout._getOption("originTop"),
				o = i ? "paddingLeft" : "paddingRight",
				s = i ? "left" : "right",
				a = i ? "right" : "left",
				r = this.position.x + t[o];
			e[s] = this.getXValue(r), e[a] = "";
			var l = n ? "paddingTop" : "paddingBottom",
				d = n ? "top" : "bottom",
				c = n ? "bottom" : "top",
				h = this.position.y + t[l];
			e[d] = this.getYValue(h), e[c] = "", this.css(e), this.emitEvent("layout", [this])
		}, l.getXValue = function (t) {
			var e = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
		}, l.getYValue = function (t) {
			var e = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
		}, l._transitionTo = function (t, e) {
			this.getPosition();
			var i = this.position.x,
				n = this.position.y,
				o = parseInt(t, 10),
				s = parseInt(e, 10),
				a = o === this.position.x && s === this.position.y;
			if (this.setPosition(t, e), !a || this.isTransitioning) {
				var r = t - i,
					l = e - n,
					d = {};
				d.transform = this.getTranslate(r, l), this.transition({
					to: d,
					onTransitionEnd: {
						transform: this.layoutPosition
					},
					isCleaning: !0
				})
			} else this.layoutPosition()
		}, l.getTranslate = function (t, e) {
			return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
		}, l.goTo = function (t, e) {
			this.setPosition(t, e), this.layoutPosition()
		}, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
			this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
		}, l._nonTransition = function (t) {
			for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
		}, l.transition = function (t) {
			if (parseFloat(this.layout.options.transitionDuration)) {
				var e = this._transn;
				for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
				for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
				if (t.from) {
					this.css(t.from);
					this.element.offsetHeight;
					null
				}
				this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
			} else this._nonTransition(t)
		};
		var d = "opacity," + s.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		});
		l.enableTransition = function () {
			if (!this.isTransitioning) {
				var t = this.layout.options.transitionDuration;
				t = "number" == typeof t ? t + "ms" : t, this.css({
					transitionProperty: d,
					transitionDuration: t,
					transitionDelay: this.staggerDelay || 0
				}), this.element.addEventListener(a, this, !1)
			}
		}, l.onwebkitTransitionEnd = function (t) {
			this.ontransitionend(t)
		}, l.onotransitionend = function (t) {
			this.ontransitionend(t)
		};
		var c = {
			"-webkit-transform": "transform"
		};
		l.ontransitionend = function (t) {
			if (t.target === this.element) {
				var e = this._transn,
					i = c[t.propertyName] || t.propertyName;
				if (delete e.ingProperties[i], function (t) {
						for (var e in t) return !1;
						return !0
					}(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
				this.emitEvent("transitionEnd", [this])
			}
		}, l.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
		}, l._removeStyles = function (t) {
			var e = {};
			for (var i in t) e[i] = "";
			this.css(e)
		};
		var h = {
			transitionProperty: "",
			transitionDuration: "",
			transitionDelay: ""
		};
		return l.removeTransitionStyles = function () {
			this.css(h)
		}, l.stagger = function (t) {
			t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
		}, l.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, l.remove = function () {
			return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
				this.removeElem()
			}), void this.hide()) : void this.removeElem()
		}, l.reveal = function () {
			delete this.isHidden, this.css({
				display: ""
			});
			var t = this.layout.options,
				e = {};
			e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
				from: t.hiddenStyle,
				to: t.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, l.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, l.getHideRevealTransitionEndProperty = function (t) {
			var e = this.layout.options[t];
			if (e.opacity) return "opacity";
			for (var i in e) return i
		}, l.hide = function () {
			this.isHidden = !0, this.css({
				display: ""
			});
			var t = this.layout.options,
				e = {};
			e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
				from: t.visibleStyle,
				to: t.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, l.onHideTransitionEnd = function () {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, l.destroy = function () {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""

			})
		}, i
	}, "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], Su) : "object" == typeof module && module.exports ? module.exports = Su(require("ev-emitter"), require("get-size")) : (Ru.Outlayer = {}, Ru.Outlayer.Item = Su(Ru.EvEmitter, Ru.getSize)),
	function (o, s) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, n) {
			return s(o, t, e, i, n)
		}) : "object" == typeof module && module.exports ? module.exports = s(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = s(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item)
	}(window, function (t, e, o, s, n) {
		"use strict";

		function a(t, e) {
			var i = s.getQueryElement(t);
			if (i) {
				this.element = i, d && (this.$element = d(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
				var n = ++c;
				this.element.outlayerGUID = n, (h[n] = this)._create(), this._getOption("initLayout") && this.layout()
			} else l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
		}

		function r(t) {
			function e() {
				t.apply(this, arguments)
			}
			return (e.prototype = Object.create(t.prototype)).constructor = e
		}
		var l = t.console,
			d = t.jQuery,
			i = function () {},
			c = 0,
			h = {};
		a.namespace = "outlayer", a.Item = n, a.defaults = {
			containerStyle: {
				position: "relative"
			},
			initLayout: !0,
			originLeft: !0,
			originTop: !0,
			resize: !0,
			resizeContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		};
		var u = a.prototype;
		s.extend(u, e.prototype), u.option = function (t) {
			s.extend(this.options, t)
		}, u._getOption = function (t) {
			var e = this.constructor.compatOptions[t];
			return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
		}, a.compatOptions = {
			initLayout: "isInitLayout",
			horizontal: "isHorizontal",
			layoutInstant: "isLayoutInstant",
			originLeft: "isOriginLeft",
			originTop: "isOriginTop",
			resize: "isResizeBound",
			resizeContainer: "isResizingContainer"
		}, u._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
		}, u.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, u._itemize = function (t) {
			for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
				var s = new i(e[o], this);
				n.push(s)
			}
			return n
		}, u._filterFindItemElements = function (t) {
			return s.filterFindElements(t, this.options.itemSelector)
		}, u.getItemElements = function () {
			return this.items.map(function (t) {
				return t.element
			})
		}, u.layout = function () {
			this._resetLayout(), this._manageStamps();
			var t = this._getOption("layoutInstant"),
				e = void 0 !== t ? t : !this._isLayoutInited;
			this.layoutItems(this.items, e), this._isLayoutInited = !0
		}, u._init = u.layout, u._resetLayout = function () {
			this.getSize()
		}, u.getSize = function () {
			this.size = o(this.element)
		}, u._getMeasurement = function (t, e) {
			var i, n = this.options[t];
			this[t] = n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), i ? o(i)[e] : n) : 0
		}, u.layoutItems = function (t, e) {
			t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
		}, u._getItemsForLayout = function (t) {
			return t.filter(function (t) {
				return !t.isIgnored
			})
		}, u._layoutItems = function (t, i) {
			if (this._emitCompleteOnItems("layout", t), t && t.length) {
				var n = [];
				t.forEach(function (t) {
					var e = this._getItemLayoutPosition(t);
					e.item = t, e.isInstant = i || t.isLayoutInstant, n.push(e)
				}, this), this._processLayoutQueue(n)
			}
		}, u._getItemLayoutPosition = function () {
			return {
				x: 0,
				y: 0
			}
		}, u._processLayoutQueue = function (t) {
			this.updateStagger(), t.forEach(function (t, e) {
				this._positionItem(t.item, t.x, t.y, t.isInstant, e)
			}, this)
		}, u.updateStagger = function () {
			var t = this.options.stagger;
			return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
				if ("number" == typeof t) return t;
				var e = t.match(/(^\d*\.?\d*)(\w*)/),
					i = e && e[1],
					n = e && e[2];
				return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
			}(t), this.stagger)
		}, u._positionItem = function (t, e, i, n, o) {
			n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
		}, u._postLayout = function () {
			this.resizeContainer()
		}, u.resizeContainer = function () {
			if (this._getOption("resizeContainer")) {
				var t = this._getContainerSize();
				t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
			}
		}, u._getContainerSize = i, u._setContainerMeasure = function (t, e) {
			if (void 0 !== t) {
				var i = this.size;
				i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
			}
		}, u._emitCompleteOnItems = function (e, t) {
			function i() {
				o.dispatchEvent(e + "Complete", null, [t])
			}

			function n() {
				++a == s && i()
			}
			var o = this,
				s = t.length;
			if (t && s) {
				var a = 0;
				t.forEach(function (t) {
					t.once(e, n)
				})
			} else i()
		}, u.dispatchEvent = function (t, e, i) {
			var n = e ? [e].concat(i) : i;
			if (this.emitEvent(t, n), d)
				if (this.$element = this.$element || d(this.element), e) {
					var o = d.Event(e);
					o.type = t, this.$element.trigger(o, i)
				} else this.$element.trigger(t, i)
		}, u.ignore = function (t) {
			var e = this.getItem(t);
			e && (e.isIgnored = !0)
		}, u.unignore = function (t) {
			var e = this.getItem(t);
			e && delete e.isIgnored
		}, u.stamp = function (t) {
			(t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
		}, u.unstamp = function (t) {
			(t = this._find(t)) && t.forEach(function (t) {
				s.removeFrom(this.stamps, t), this.unignore(t)
			}, this)
		}, u._find = function (t) {
			if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), s.makeArray(t)
		}, u._manageStamps = function () {
			this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
		}, u._getBoundingRect = function () {
			var t = this.element.getBoundingClientRect(),
				e = this.size;
			this._boundingRect = {
				left: t.left + e.paddingLeft + e.borderLeftWidth,
				top: t.top + e.paddingTop + e.borderTopWidth,
				right: t.right - (e.paddingRight + e.borderRightWidth),
				bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
			}
		}, u._manageStamp = i, u._getElementOffset = function (t) {
			var e = t.getBoundingClientRect(),
				i = this._boundingRect,
				n = o(t);
			return {
				left: e.left - i.left - n.marginLeft,
				top: e.top - i.top - n.marginTop,
				right: i.right - e.right - n.marginRight,
				bottom: i.bottom - e.bottom - n.marginBottom
			}
		}, u.handleEvent = s.handleEvent, u.bindResize = function () {
			t.addEventListener("resize", this), this.isResizeBound = !0
		}, u.unbindResize = function () {
			t.removeEventListener("resize", this), this.isResizeBound = !1
		}, u.onresize = function () {
			this.resize()
		}, s.debounceMethod(a, "onresize", 100), u.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, u.needsResizeLayout = function () {
			var t = o(this.element);
			return this.size && t && t.innerWidth !== this.size.innerWidth
		}, u.addItems = function (t) {
			var e = this._itemize(t);
			return e.length && (this.items = this.items.concat(e)), e
		}, u.appended = function (t) {
			var e = this.addItems(t);
			e.length && (this.layoutItems(e, !0), this.reveal(e))
		}, u.prepended = function (t) {
			var e = this._itemize(t);
			if (e.length) {
				var i = this.items.slice(0);
				this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
			}
		}, u.reveal = function (t) {
			if (this._emitCompleteOnItems("reveal", t), t && t.length) {
				var i = this.updateStagger();
				t.forEach(function (t, e) {
					t.stagger(e * i), t.reveal()
				})
			}
		}, u.hide = function (t) {
			if (this._emitCompleteOnItems("hide", t), t && t.length) {
				var i = this.updateStagger();
				t.forEach(function (t, e) {
					t.stagger(e * i), t.hide()
				})
			}
		}, u.revealItemElements = function (t) {
			var e = this.getItems(t);
			this.reveal(e)
		}, u.hideItemElements = function (t) {
			var e = this.getItems(t);
			this.hide(e)
		}, u.getItem = function (t) {
			for (var e = 0; e < this.items.length; e++) {
				var i = this.items[e];
				if (i.element == t) return i
			}
		}, u.getItems = function (t) {
			t = s.makeArray(t);
			var i = [];
			return t.forEach(function (t) {
				var e = this.getItem(t);
				e && i.push(e)
			}, this), i
		}, u.remove = function (t) {
			var e = this.getItems(t);
			this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
				t.remove(), s.removeFrom(this.items, t)
			}, this)
		}, u.destroy = function () {
			var t = this.element.style;
			t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
				t.destroy()
			}), this.unbindResize();
			var e = this.element.outlayerGUID;
			delete h[e], delete this.element.outlayerGUID, d && d.removeData(this.element, this.constructor.namespace)
		}, a.data = function (t) {
			var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
			return e && h[e]
		}, a.create = function (t, e) {
			var i = r(a);
			return i.defaults = s.extend({}, a.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, a.compatOptions), i.namespace = t, i.data = a.data, i.Item = r(n), s.htmlInit(i, t), d && d.bridget && d.bridget(t, i), i
		};
		var p = {
			ms: 1,
			s: 1e3
		};
		return a.Item = n, a
	}), lz = window, mz = function (t) {
		"use strict";

		function e() {
			t.Item.apply(this, arguments)
		}
		var i = e.prototype = Object.create(t.Item.prototype),
			n = i._create;
		i._create = function () {
			this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
		}, i.updateSortData = function () {
			if (!this.isIgnored) {
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var t = this.layout.options.getSortData,
					e = this.layout._sorters;
				for (var i in t) {
					var n = e[i];
					this.sortData[i] = n(this.element, this)
				}
			}
		};
		var o = i.destroy;
		return i.destroy = function () {
			o.apply(this, arguments), this.css({
				display: ""
			})
		}, e
	}, "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], mz) : "object" == typeof module && module.exports ? module.exports = mz(require("outlayer")) : (lz.Isotope = lz.Isotope || {}, lz.Isotope.Item = mz(lz.Outlayer)), wz = window, xz = function (e, i) {
		"use strict";

		function n(t) {
			(this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
		}
		var o = n.prototype;
		return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
			o[t] = function () {
				return i.prototype[t].apply(this.isotope, arguments)
			}
		}), o.needsVerticalResizeLayout = function () {
			var t = e(this.isotope.element);
			return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
		}, o._getMeasurement = function () {
			this.isotope._getMeasurement.apply(this, arguments)
		}, o.getColumnWidth = function () {
			this.getSegmentSize("column", "Width")
		}, o.getRowHeight = function () {
			this.getSegmentSize("row", "Height")
		}, o.getSegmentSize = function (t, e) {
			var i = t + e,
				n = "outer" + e;
			if (this._getMeasurement(i, n), !this[i]) {
				var o = this.getFirstItemSize();
				this[i] = o && o[n] || this.isotope.size["inner" + e]
			}
		}, o.getFirstItemSize = function () {
			var t = this.isotope.filteredItems[0];
			return t && t.element && e(t.element)
		}, o.layout = function () {
			this.isotope.layout.apply(this.isotope, arguments)
		}, o.getSize = function () {
			this.isotope.getSize(), this.size = this.isotope.size
		}, n.modes = {}, n.create = function (t, e) {
			function i() {
				n.apply(this, arguments)
			}
			return (i.prototype = Object.create(o)).constructor = i, e && (i.options = e), n.modes[i.prototype.namespace = t] = i
		}, n
	}, "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], xz) : "object" == typeof module && module.exports ? module.exports = xz(require("get-size"), require("outlayer")) : (wz.Isotope = wz.Isotope || {}, wz.Isotope.LayoutMode = xz(wz.getSize, wz.Outlayer)), Qz = window, Rz = function (t, d) {
		var e = t.create("masonry");
		e.compatOptions.fitWidth = "isFitWidth";
		var i = e.prototype;
		return i._resetLayout = function () {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
			for (var t = 0; t < this.cols; t++) this.colYs.push(0);
			this.maxY = 0, this.horizontalColIndex = 0
		}, i.measureColumns = function () {
			if (this.getContainerWidth(), !this.columnWidth) {
				var t = this.items[0],
					e = t && t.element;
				this.columnWidth = e && d(e).outerWidth || this.containerWidth
			}
			var i = this.columnWidth += this.gutter,
				n = this.containerWidth + this.gutter,
				o = n / i,
				s = i - n % i;
			o = Math[s && s < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1)
		}, i.getContainerWidth = function () {
			var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
				e = d(t);
			this.containerWidth = e && e.innerWidth
		}, i._getItemLayoutPosition = function (t) {
			t.getSize();
			var e = t.size.outerWidth % this.columnWidth,
				i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
			i = Math.min(i, this.cols);
			for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), o = {
					x: this.columnWidth * n.col,
					y: n.y
				}, s = n.y + t.size.outerHeight, a = i + n.col, r = n.col; r < a; r++) this.colYs[r] = s;
			return o
		}, i._getTopColPosition = function (t) {
			var e = this._getTopColGroup(t),
				i = Math.min.apply(Math, e);
			return {
				col: e.indexOf(i),
				y: i
			}
		}, i._getTopColGroup = function (t) {
			if (t < 2) return this.colYs;
			for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) e[n] = this._getColGroupY(n, t);
			return e
		}, i._getColGroupY = function (t, e) {
			if (e < 2) return this.colYs[t];
			var i = this.colYs.slice(t, t + e);
			return Math.max.apply(Math, i)
		}, i._getHorizontalColPosition = function (t, e) {
			var i = this.horizontalColIndex % this.cols;
			i = 1 < t && i + t > this.cols ? 0 : i;
			var n = e.size.outerWidth && e.size.outerHeight;
			return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
				col: i,
				y: this._getColGroupY(i, t)
			}
		}, i._manageStamp = function (t) {
			var e = d(t),
				i = this._getElementOffset(t),
				n = this._getOption("originLeft") ? i.left : i.right,
				o = n + e.outerWidth,
				s = Math.floor(n / this.columnWidth);
			s = Math.max(0, s);
			var a = Math.floor(o / this.columnWidth);
			a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
			for (var r = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = s; l <= a; l++) this.colYs[l] = Math.max(r, this.colYs[l])
		}, i._getContainerSize = function () {
			this.maxY = Math.max.apply(Math, this.colYs);
			var t = {
				height: this.maxY
			};
			return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
		}, i._getContainerFitWidth = function () {
			for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
			return (this.cols - t) * this.columnWidth - this.gutter
		}, i.needsResizeLayout = function () {
			var t = this.containerWidth;
			return this.getContainerWidth(), t != this.containerWidth
		}, e
	}, "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], Rz) : "object" == typeof module && module.exports ? module.exports = Rz(require("outlayer"), require("get-size")) : Qz.Masonry = Rz(Qz.Outlayer, Qz.getSize), TA = window, UA = function (t, e) {
		"use strict";
		var i = t.create("masonry"),
			n = i.prototype,
			o = {
				_getElementOffset: !0,
				layout: !0,
				_getMeasurement: !0
			};
		for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
		var a = n.measureColumns;
		n.measureColumns = function () {
			this.items = this.isotope.filteredItems, a.call(this)
		};
		var r = n._getOption;
		return n._getOption = function (t) {
			return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
		}, i
	}, "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], UA) : "object" == typeof module && module.exports ? module.exports = UA(require("../layout-mode"), require("masonry-layout")) : UA(TA.Isotope.LayoutMode, TA.Masonry), cB = window, dB = function (t) {
		"use strict";
		var e = t.create("fitRows"),
			i = e.prototype;
		return i._resetLayout = function () {
			this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
		}, i._getItemLayoutPosition = function (t) {
			t.getSize();
			var e = t.size.outerWidth + this.gutter,
				i = this.isotope.size.innerWidth + this.gutter;
			0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
			var n = {
				x: this.x,
				y: this.y
			};
			return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
		}, i._getContainerSize = function () {
			return {
				height: this.maxY
			}
		}, e
	}, "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], dB) : "object" == typeof exports ? module.exports = dB(require("../layout-mode")) : dB(cB.Isotope.LayoutMode), lB = window, mB = function (t) {
		"use strict";
		var e = t.create("vertical", {
				horizontalAlignment: 0
			}),
			i = e.prototype;
		return i._resetLayout = function () {
			this.y = 0
		}, i._getItemLayoutPosition = function (t) {
			t.getSize();
			var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
				i = this.y;
			return this.y += t.size.outerHeight, {
				x: e,
				y: i
			}
		}, i._getContainerSize = function () {
			return {
				height: this.y
			}
		}, e
	}, "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], mB) : "object" == typeof module && module.exports ? module.exports = mB(require("../layout-mode")) : mB(lB.Isotope.LayoutMode), tB = window, uB = function (t, i, e, n, s, o, a) {
		var r = t.jQuery,
			d = String.prototype.trim ? function (t) {
				return t.trim()
			} : function (t) {
				return t.replace(/^\s+|\s+$/g, "")
			},
			c = i.create("isotope", {
				layoutMode: "masonry",
				isJQueryFiltering: !0,
				sortAscending: !0
			});
		c.Item = o, c.LayoutMode = a;
		var l = c.prototype;
		l._create = function () {
			for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], a.modes) this._initLayoutMode(t)
		}, l.reloadItems = function () {
			this.itemGUID = 0, i.prototype.reloadItems.call(this)
		}, l._itemize = function () {
			for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
				t[e].id = this.itemGUID++
			}
			return this._updateItemsSortData(t), t
		}, l._initLayoutMode = function (t) {
			var e = a.modes[t],
				i = this.options[t] || {};
			this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
		}, l.layout = function () {
			return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
		}, l._layout = function () {
			var t = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
		}, l.arrange = function (t) {
			this.option(t), this._getIsInstant();
			var e = this._filter(this.items);
			this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
		}, l._init = l.arrange, l._hideReveal = function (t) {
			this.reveal(t.needReveal), this.hide(t.needHide)
		}, l._getIsInstant = function () {
			var t = this._getOption("layoutInstant"),
				e = void 0 !== t ? t : !this._isLayoutInited;
			return this._isInstant = e
		}, l._bindArrangeComplete = function () {
			function t() {
				e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
			}
			var e, i, n, o = this;
			this.once("layoutComplete", function () {
				e = !0, t()
			}), this.once("hideComplete", function () {
				i = !0, t()
			}), this.once("revealComplete", function () {
				n = !0, t()
			})
		}, l._filter = function (t) {
			var e = this.options.filter;
			e = e || "*";
			for (var i = [], n = [], o = [], s = this._getFilterTest(e), a = 0; a < t.length; a++) {
				var r = t[a];
				if (!r.isIgnored) {
					var l = s(r);
					l && i.push(r), l && r.isHidden ? n.push(r) : l || r.isHidden || o.push(r)
				}
			}
			return {
				matches: i,
				needReveal: n,
				needHide: o
			}
		}, l._getFilterTest = function (e) {
			return r && this.options.isJQueryFiltering ? function (t) {
				return r(t.element).is(e)
			} : "function" == typeof e ? function (t) {
				return e(t.element)
			} : function (t) {
				return n(t.element, e)
			}
		}, l.updateSortData = function (t) {
			var e;
			e = t ? (t = s.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(e)
		}, l._getSorters = function () {
			var t = this.options.getSortData;
			for (var e in t) {
				var i = t[e];
				this._sorters[e] = h(i)
			}
		}, l._updateItemsSortData = function (t) {
			for (var e = t && t.length, i = 0; e && i < e; i++) {
				t[i].updateSortData()
			}
		};
		var h = function (t) {
			if ("string" != typeof t) return t;
			var e, i, n = d(t).split(" "),
				o = n[0],
				s = o.match(/^\[(.+)\]$/),
				a = s && s[1],
				r = (i = o, (e = a) ? function (t) {
					return t.getAttribute(e)
				} : function (t) {
					var e = t.querySelector(i);
					return e && e.textContent
				}),
				l = c.sortDataParsers[n[1]];
			return l ? function (t) {
				return t && l(r(t))
			} : function (t) {
				return t && r(t)
			}
		};
		c.sortDataParsers = {
			parseInt: function (t) {
				return parseInt(t, 10)
			},
			parseFloat: function (t) {
				return parseFloat(t)
			}
		}, l._sort = function () {
			if (this.options.sortBy) {
				var t = s.makeArray(this.options.sortBy);
				this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
				var e = (a = this.sortHistory, r = this.options.sortAscending, function (t, e) {
					for (var i = 0; i < a.length; i++) {
						var n = a[i],
							o = t.sortData[n],
							s = e.sortData[n];
						if (s < o || o < s) return (s < o ? 1 : -1) * ((void 0 !== r[n] ? r[n] : r) ? 1 : -1)
					}
					return 0
				});
				this.filteredItems.sort(e)
			}
			var a, r
		}, l._getIsSameSortBy = function (t) {
			for (var e = 0; e < t.length; e++)
				if (t[e] != this.sortHistory[e]) return !1;
			return !0
		}, l._mode = function () {
			var t = this.options.layoutMode,
				e = this.modes[t];
			if (!e) throw new Error("No layout mode: " + t);
			return e.options = this.options[t], e
		}, l._resetLayout = function () {
			i.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, l._getItemLayoutPosition = function (t) {
			return this._mode()._getItemLayoutPosition(t)
		}, l._manageStamp = function (t) {
			this._mode()._manageStamp(t)
		}, l._getContainerSize = function () {
			return this._mode()._getContainerSize()
		}, l.needsResizeLayout = function () {
			return this._mode().needsResizeLayout()
		}, l.appended = function (t) {
			var e = this.addItems(t);
			if (e.length) {
				var i = this._filterRevealAdded(e);
				this.filteredItems = this.filteredItems.concat(i)
			}
		}, l.prepended = function (t) {
			var e = this._itemize(t);
			if (e.length) {
				this._resetLayout(), this._manageStamps();
				var i = this._filterRevealAdded(e);
				this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
			}
		}, l._filterRevealAdded = function (t) {
			var e = this._filter(t);
			return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
		}, l.insert = function (t) {
			var e = this.addItems(t);
			if (e.length) {
				var i, n, o = e.length;
				for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
				var s = this._filter(e).matches;
				for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
				for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
				this.reveal(s)
			}
		};
		var u = l.remove;
		return l.remove = function (t) {
			t = s.makeArray(t);
			var e = this.getItems(t);
			u.call(this, t);
			for (var i = e && e.length, n = 0; i && n < i; n++) {
				var o = e[n];
				s.removeFrom(this.filteredItems, o)
			}
		}, l.shuffle = function () {
			for (var t = 0; t < this.items.length; t++) {
				this.items[t].sortData.random = Math.random()
			}
			this.options.sortBy = "random", this._sort(), this._layout()
		}, l._noTransition = function (t, e) {
			var i = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var n = t.apply(this, e);
			return this.options.transitionDuration = i, n
		}, l.getFilteredItemElements = function () {
			return this.filteredItems.map(function (t) {
				return t.element
			})
		}, c
	}, "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (t, e, i, n, o, s) {
		return uB(tB, t, 0, i, n, o, s)
	}) : "object" == typeof module && module.exports ? module.exports = uB(tB, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : tB.Isotope = uB(tB, tB.Outlayer, tB.getSize, tB.matchesSelector, tB.fizzyUIUtils, tB.Isotope.Item, tB.Isotope.LayoutMode), LD = function (c) {
		var h, n, u, o, p, e, l = "Close",
			d = "BeforeClose",
			f = "MarkupParse",
			m = "Open",
			g = ".mfp",
			v = "mfp-ready",
			i = "mfp-removing",
			a = "mfp-prevent-close",
			t = function () {},
			r = !!window.jQuery,
			w = c(window),
			y = function (t, e) {
				h.ev.on("mfp" + t + g, e)
			},
			b = function (t, e, i, n) {
				var o = document.createElement("div");
				return o.className = "mfp-" + t, i && (o.innerHTML = i), n ? e && e.appendChild(o) : (o = c(o), e && o.appendTo(e)), o
			},
			_ = function (t, e) {
				h.ev.triggerHandler("mfp" + t, e), h.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), h.st.callbacks[t] && h.st.callbacks[t].apply(h, c.isArray(e) ? e : [e]))
			},
			x = function (t) {
				return t === e && h.currTemplate.closeBtn || (h.currTemplate.closeBtn = c(h.st.closeMarkup.replace("%title%", h.st.tClose)), e = t), h.currTemplate.closeBtn
			},
			s = function () {
				c.magnificPopup.instance || ((h = new t).init(), c.magnificPopup.instance = h)
			};
		t.prototype = {
			constructor: t,
			init: function () {
				var t = navigator.appVersion;
				h.isIE7 = -1 !== t.indexOf("MSIE 7."), h.isIE8 = -1 !== t.indexOf("MSIE 8."), h.isLowIE = h.isIE7 || h.isIE8, h.isAndroid = /android/gi.test(t), h.isIOS = /iphone|ipad|ipod/gi.test(t), h.supportsTransition = function () {
					var t = document.createElement("p").style,
						e = ["ms", "O", "Moz", "Webkit"];
					if (void 0 !== t.transition) return !0;
					for (; e.length;)
						if (e.pop() + "Transition" in t) return !0;
					return !1
				}(), h.probablyMobile = h.isAndroid || h.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), u = c(document), h.popupsCache = {}
			},
			open: function (t) {
				var e;
				if (!1 === t.isObj) {
					h.items = t.items.toArray(), h.index = 0;
					var i, n = t.items;
					for (e = 0; e < n.length; e++)
						if ((i = n[e]).parsed && (i = i.el[0]), i === t.el[0]) {
							h.index = e;
							break
						}
				} else h.items = c.isArray(t.items) ? t.items : [t.items], h.index = t.index || 0;
				if (!h.isOpen) {
					h.types = [], p = "", h.ev = t.mainEl && t.mainEl.length ? t.mainEl.eq(0) : u, t.key ? (h.popupsCache[t.key] || (h.popupsCache[t.key] = {}), h.currTemplate = h.popupsCache[t.key]) : h.currTemplate = {}, h.st = c.extend(!0, {}, c.magnificPopup.defaults, t), h.fixedContentPos = "auto" === h.st.fixedContentPos ? !h.probablyMobile : h.st.fixedContentPos, h.st.modal && (h.st.closeOnContentClick = !1, h.st.closeOnBgClick = !1, h.st.showCloseBtn = !1, h.st.enableEscapeKey = !1), h.bgOverlay || (h.bgOverlay = b("bg").on("click" + g, function () {
						h.close()
					}), h.wrap = b("wrap").attr("tabindex", -1).on("click" + g, function (t) {
						h._checkIfClose(t.target) && h.close()
					}), h.container = b("container", h.wrap)), h.contentContainer = b("content"), h.st.preloader && (h.preloader = b("preloader", h.container, h.st.tLoading));
					var o = c.magnificPopup.modules;
					for (e = 0; e < o.length; e++) {
						var s = o[e];
						s = s.charAt(0).toUpperCase() + s.slice(1), h["init" + s].call(h)
					}
					_("BeforeOpen"), h.st.showCloseBtn && (h.st.closeBtnInside ? (y(f, function (t, e, i, n) {
						i.close_replaceWith = x(n.type)
					}), p += " mfp-close-btn-in") : h.wrap.append(x())), h.st.alignTop && (p += " mfp-align-top"), h.wrap.css(h.fixedContentPos ? {
						overflow: h.st.overflowY,
						overflowX: "hidden",
						overflowY: h.st.overflowY
					} : {
						top: w.scrollTop(),
						position: "absolute"
					}), (!1 === h.st.fixedBgPos || "auto" === h.st.fixedBgPos && !h.fixedContentPos) && h.bgOverlay.css({
						height: u.height(),
						position: "absolute"
					}), h.st.enableEscapeKey && u.on("keyup" + g, function (t) {
						27 === t.keyCode && h.close()
					}), w.on("resize" + g, function () {
						h.updateSize()
					}), h.st.closeOnContentClick || (p += " mfp-auto-cursor"), p && h.wrap.addClass(p);
					var a = h.wH = w.height(),
						r = {};
					if (h.fixedContentPos && h._hasScrollBar(a)) {
						var l = h._getScrollbarSize();
						l && (r.marginRight = l)
					}
					h.fixedContentPos && (h.isIE7 ? c("body, html").css("overflow", "hidden") : r.overflow = "hidden");
					var d = h.st.mainClass;
					return h.isIE7 && (d += " mfp-ie7"), d && h._addClassToMFP(d), h.updateItemHTML(), _("BuildControls"), c("html").css(r), h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo || c(document.body)), h._lastFocusedEl = document.activeElement, setTimeout(function () {
						h.content ? (h._addClassToMFP(v), h._setFocus()) : h.bgOverlay.addClass(v), u.on("focusin" + g, h._onFocusIn)
					}, 16), h.isOpen = !0, h.updateSize(a), _(m), t
				}
				h.updateItemHTML()
			},
			close: function () {
				h.isOpen && (_(d), h.isOpen = !1, h.st.removalDelay && !h.isLowIE && h.supportsTransition ? (h._addClassToMFP(i), setTimeout(function () {
					h._close()
				}, h.st.removalDelay)) : h._close())
			},
			_close: function () {
				_(l);
				var t = i + " " + v + " ";
				if (h.bgOverlay.detach(), h.wrap.detach(), h.container.empty(), h.st.mainClass && (t += h.st.mainClass + " "), h._removeClassFromMFP(t), h.fixedContentPos) {
					var e = {
						marginRight: ""
					};
					h.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "", c("html").css(e)
				}
				u.off("keyup.mfp focusin" + g), h.ev.off(g), h.wrap.attr("class", "mfp-wrap").removeAttr("style"), h.bgOverlay.attr("class", "mfp-bg"), h.container.attr("class", "mfp-container"), !h.st.showCloseBtn || h.st.closeBtnInside && !0 !== h.currTemplate[h.currItem.type] || h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach(), h._lastFocusedEl && c(h._lastFocusedEl).focus(), h.currItem = null, h.content = null, h.currTemplate = null, h.prevHeight = 0, _("AfterClose")
			},
			updateSize: function (t) {
				if (h.isIOS) {
					var e = document.documentElement.clientWidth / window.innerWidth,
						i = window.innerHeight * e;
					h.wrap.css("height", i), h.wH = i
				} else h.wH = t || w.height();
				h.fixedContentPos || h.wrap.css("height", h.wH), _("Resize")
			},
			updateItemHTML: function () {
				var t = h.items[h.index];
				h.contentContainer.detach(), h.content && h.content.detach(), t.parsed || (t = h.parseEl(h.index));
				var e = t.type;
				if (_("BeforeChange", [h.currItem ? h.currItem.type : "", e]), h.currItem = t, !h.currTemplate[e]) {
					var i = !!h.st[e] && h.st[e].markup;
					_("FirstMarkupParse", i), h.currTemplate[e] = !i || c(i)
				}
				o && o !== t.type && h.container.removeClass("mfp-" + o + "-holder");
				var n = h["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, h.currTemplate[e]);
				h.appendContent(n, e), t.preloaded = !0, _("Change", t), o = t.type, h.container.prepend(h.contentContainer), _("AfterChange")
			},
			appendContent: function (t, e) {
				(h.content = t) ? h.st.showCloseBtn && h.st.closeBtnInside && !0 === h.currTemplate[e] ? h.content.find(".mfp-close").length || h.content.append(x()) : h.content = t: h.content = "", _("BeforeAppend"), h.container.addClass("mfp-" + e + "-holder"), h.contentContainer.append(h.content)
			},
			parseEl: function (t) {
				var e, i = h.items[t];
				if ((i = i.tagName ? {
						el: c(i)
					} : (e = i.type, {
						data: i,
						src: i.src
					})).el) {
					for (var n = h.types, o = 0; o < n.length; o++)
						if (i.el.hasClass("mfp-" + n[o])) {
							e = n[o];
							break
						}
					i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
				}
				return i.type = e || h.st.type || "inline", i.index = t, i.parsed = !0, h.items[t] = i, _("ElementParse", i), h.items[t]
			},
			addGroup: function (e, i) {
				var t = function (t) {
					t.mfpEl = this, h._openClick(t, e, i)
				};
				i || (i = {});
				var n = "click.magnificPopup";
				i.mainEl = e, i.items ? (i.isObj = !0, e.off(n).on(n, t)) : (i.isObj = !1, i.delegate ? e.off(n).on(n, i.delegate, t) : (i.items = e).off(n).on(n, t))
			},
			_openClick: function (t, e, i) {
				if ((void 0 !== i.midClick ? i.midClick : c.magnificPopup.defaults.midClick) || 2 !== t.which && !t.ctrlKey && !t.metaKey) {
					var n = void 0 !== i.disableOn ? i.disableOn : c.magnificPopup.defaults.disableOn;
					if (n)
						if (c.isFunction(n)) {
							if (!n.call(h)) return !0
						} else if (w.width() < n) return !0;
					t.type && (t.preventDefault(), h.isOpen && t.stopPropagation()), i.el = c(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), h.open(i)
				}
			},
			updateStatus: function (t, e) {
				if (h.preloader) {
					n !== t && h.container.removeClass("mfp-s-" + n), e || "loading" !== t || (e = h.st.tLoading);
					var i = {
						status: t,
						text: e
					};
					_("UpdateStatus", i), t = i.status, e = i.text, h.preloader.html(e), h.preloader.find("a").on("click", function (t) {
						t.stopImmediatePropagation()
					}), h.container.addClass("mfp-s-" + t), n = t
				}
			},
			_checkIfClose: function (t) {
				if (!c(t).hasClass(a)) {
					var e = h.st.closeOnContentClick,
						i = h.st.closeOnBgClick;
					if (e && i) return !0;
					if (!h.content || c(t).hasClass("mfp-close") || h.preloader && t === h.preloader[0]) return !0;
					if (t === h.content[0] || c.contains(h.content[0], t)) {
						if (e) return !0
					} else if (i && c.contains(document, t)) return !0;
					return !1
				}
			},
			_addClassToMFP: function (t) {
				h.bgOverlay.addClass(t), h.wrap.addClass(t)
			},
			_removeClassFromMFP: function (t) {
				this.bgOverlay.removeClass(t), h.wrap.removeClass(t)
			},
			_hasScrollBar: function (t) {
				return (h.isIE7 ? u.height() : document.body.scrollHeight) > (t || w.height())
			},
			_setFocus: function () {
				(h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus()
			},
			_onFocusIn: function (t) {
				return t.target === h.wrap[0] || c.contains(h.wrap[0], t.target) ? void 0 : (h._setFocus(), !1)
			},
			_parseMarkup: function (o, t, e) {
				var s;
				e.data && (t = c.extend(e.data, t)), _(f, [o, t, e]), c.each(t, function (t, e) {
					if (void 0 === e || !1 === e) return !0;
					if (1 < (s = t.split("_")).length) {
						var i = o.find(g + "-" + s[0]);
						if (0 < i.length) {
							var n = s[1];
							"replaceWith" === n ? i[0] !== e[0] && i.replaceWith(e) : "img" === n ? i.is("img") ? i.attr("src", e) : i.replaceWith('<img src="' + e + '" class="' + i.attr("class") + '" />') : i.attr(s[1], e)
						}
					} else o.find(g + "-" + t).html(e)
				})
			},
			_getScrollbarSize: function () {
				if (void 0 === h.scrollbarSize) {
					var t = document.createElement("div");
					t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), h.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
				}
				return h.scrollbarSize
			}
		}, c.magnificPopup = {
			instance: null,
			proto: t.prototype,
			modules: [],
			open: function (t, e) {
				return s(), (t = t ? c.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
			},
			close: function () {
				return c.magnificPopup.instance && c.magnificPopup.instance.close()
			},
			registerModule: function (t, e) {
				e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t)
			},
			defaults: {
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading..."
			}
		}, c.fn.magnificPopup = function (t) {
			s();
			var e = c(this);
			if ("string" == typeof t)
				if ("open" === t) {
					var i, n = r ? e.data("magnificPopup") : e[0].magnificPopup,
						o = parseInt(arguments[1], 10) || 0;
					i = n.items ? n.items[o] : (i = e, n.delegate && (i = i.find(n.delegate)), i.eq(o)), h._openClick({
						mfpEl: i
					}, e, n)
				} else h.isOpen && h[t].apply(h, Array.prototype.slice.call(arguments, 1));
			else t = c.extend(!0, {}, t), r ? e.data("magnificPopup", t) : e[0].magnificPopup = t, h.addGroup(e, t);
			return e
		};
		var T, k, C, S = "inline",
			z = function () {
				C && (k.after(C.addClass(T)).detach(), C = null)
			};
		c.magnificPopup.registerModule(S, {
			options: {
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found"
			},
			proto: {
				initInline: function () {
					h.types.push(S), y(l + "." + S, function () {
						z()
					})
				},
				getInline: function (t, e) {
					if (z(), t.src) {
						var i = h.st.inline,
							n = c(t.src);
						if (n.length) {
							var o = n[0].parentNode;
							o && o.tagName && (k || (T = i.hiddenClass, k = b(T), T = "mfp-" + T), C = n.after(k).detach().removeClass(T)), h.updateStatus("ready")
						} else h.updateStatus("error", i.tNotFound), n = c("<div>");
						return t.inlineElement = n
					}
					return h.updateStatus("ready"), h._parseMarkup(e, {}, t), e
				}
			}
		});
		var I, L = "ajax",
			E = function () {
				I && c(document.body).removeClass(I)
			},
			O = function () {
				E(), h.req && h.req.abort()
			};
		c.magnificPopup.registerModule(L, {
			options: {
				settings: null,
				cursor: "mfp-ajax-cur",
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			proto: {
				initAjax: function () {
					h.types.push(L), I = h.st.ajax.cursor, y(l + "." + L, O), y("BeforeChange." + L, O)
				},
				getAjax: function (o) {
					I && c(document.body).addClass(I), h.updateStatus("loading");
					var t = c.extend({
						url: o.src,
						success: function (t, e, i) {
							var n = {
								data: t,
								xhr: i
							};
							_("ParseAjax", n), h.appendContent(c(n.data), L), o.finished = !0, E(), h._setFocus(), setTimeout(function () {
								h.wrap.addClass(v)
							}, 16), h.updateStatus("ready"), _("AjaxContentAdded")
						},
						error: function () {
							E(), o.finished = o.loadError = !0, h.updateStatus("error", h.st.ajax.tError.replace("%url%", o.src))
						}
					}, h.st.ajax.settings);
					return h.req = c.ajax(t), ""
				}
			}
		});
		var A;
		c.magnificPopup.registerModule("image", {
			options: {
				markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			proto: {
				initImage: function () {
					var t = h.st.image,
						e = ".image";
					h.types.push("image"), y(m + e, function () {
						"image" === h.currItem.type && t.cursor && c(document.body).addClass(t.cursor)
					}), y(l + e, function () {
						t.cursor && c(document.body).removeClass(t.cursor), w.off("resize" + g)
					}), y("Resize" + e, h.resizeImage), h.isLowIE && y("AfterChange", h.resizeImage)
				},
				resizeImage: function () {
					var t = h.currItem;
					if (t && t.img && h.st.image.verticalFit) {
						var e = 0;
						h.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", h.wH - e)
					}
				},
				_onImageHasSize: function (t) {
					t.img && (t.hasSize = !0, A && clearInterval(A), t.isCheckingImgSize = !1, _("ImageHasSize", t), t.imgHidden && (h.content && h.content.removeClass("mfp-loading"), t.imgHidden = !1))
				},
				findImageSize: function (e) {
					var i = 0,
						n = e.img[0],
						o = function (t) {
							A && clearInterval(A), A = setInterval(function () {
								return 0 < n.naturalWidth ? void h._onImageHasSize(e) : (200 < i && clearInterval(A), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
							}, t)
						};
					o(1)
				},
				getImage: function (t, e) {
					var i = 0,
						n = function () {
							t && (t.img[0].complete ? (t.img.off(".mfploader"), t === h.currItem && (h._onImageHasSize(t), h.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, _("ImageLoadComplete")) : ++i < 200 ? setTimeout(n, 100) : o())
						},
						o = function () {
							t && (t.img.off(".mfploader"), t === h.currItem && (h._onImageHasSize(t), h.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
						},
						s = h.st.image,
						a = e.find(".mfp-img");
					if (a.length) {
						var r = document.createElement("img");
						r.className = "mfp-img", t.el && t.el.find("img").length && (r.alt = t.el.find("img").attr("alt")), t.img = c(r).on("load.mfploader", n).on("error.mfploader", o), r.src = t.src, a.is("img") && (t.img = t.img.clone()), 0 < (r = t.img[0]).naturalWidth ? t.hasSize = !0 : r.width || (t.hasSize = !1)
					}
					return h._parseMarkup(e, {
						title: function (t) {
							if (t.data && void 0 !== t.data.title) return t.data.title;
							var e = h.st.image.titleSrc;
							if (e) {
								if (c.isFunction(e)) return e.call(h, t);
								if (t.el) return t.el.attr(e) || ""
							}
							return ""
						}(t),
						img_replaceWith: t.img
					}, t), h.resizeImage(), t.hasSize ? (A && clearInterval(A), t.loadError ? (e.addClass("mfp-loading"), h.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), h.updateStatus("ready"))) : (h.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), h.findImageSize(t))), e
				}
			}
		});
		var P;
		c.magnificPopup.registerModule("zoom", {
			options: {
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function (t) {
					return t.is("img") ? t : t.find("img")
				}
			},
			proto: {
				initZoom: function () {
					var t, s = h.st.zoom,
						e = ".zoom";
					if (s.enabled && h.supportsTransition) {
						var i, n, o = s.duration,
							a = function (t) {
								var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
									i = "all " + s.duration / 1e3 + "s " + s.easing,
									n = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden"
									},
									o = "transition";
								return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = i, e.css(n), e
							},
							r = function () {
								h.content.css("visibility", "visible")
							};
						y("BuildControls" + e, function () {
							if (h._allowZoom()) {
								if (clearTimeout(i), h.content.css("visibility", "hidden"), !(t = h._getItemToZoom())) return void r();
								(n = a(t)).css(h._getOffset()), h.wrap.append(n), i = setTimeout(function () {
									n.css(h._getOffset(!0)), i = setTimeout(function () {
										r(), setTimeout(function () {
											n.remove(), t = n = null, _("ZoomAnimationEnded")
										}, 16)
									}, o)
								}, 16)
							}
						}), y(d + e, function () {
							if (h._allowZoom()) {
								if (clearTimeout(i), h.st.removalDelay = o, !t) {
									if (!(t = h._getItemToZoom())) return;
									n = a(t)
								}
								n.css(h._getOffset(!0)), h.wrap.append(n), h.content.css("visibility", "hidden"), setTimeout(function () {
									n.css(h._getOffset())
								}, 16)
							}
						}), y(l + e, function () {
							h._allowZoom() && (r(), n && n.remove(), t = null)
						})
					}
				},
				_allowZoom: function () {
					return "image" === h.currItem.type
				},
				_getItemToZoom: function () {
					return !!h.currItem.hasSize && h.currItem.img
				},
				_getOffset: function (t) {
					var e, i = (e = t ? h.currItem.img : h.st.zoom.opener(h.currItem.el || h.currItem)).offset(),
						n = parseInt(e.css("padding-top"), 10),
						o = parseInt(e.css("padding-bottom"), 10);
					i.top -= c(window).scrollTop() - n;
					var s = {
						width: e.width(),
						height: (r ? e.innerHeight() : e[0].offsetHeight) - o - n
					};
					return void 0 === P && (P = void 0 !== document.createElement("p").style.MozTransform), P ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
				}
			}
		});
		var D = "iframe",
			W = function (t) {
				if (h.currTemplate[D]) {
					var e = h.currTemplate[D].find("iframe");
					e.length && (t || (e[0].src = "//about:blank"), h.isIE8 && e.css("display", t ? "block" : "none"))
				}
			};
		c.magnificPopup.registerModule(D, {
			options: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
				srcAction: "iframe_src",
				patterns: {
					youtube: {
						index: "youtube.com",
						id: "v=",
						src: "//www.youtube.com/embed/%id%?autoplay=1"
					},
					vimeo: {
						index: "vimeo.com/",
						id: "/",
						src: "//player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps: {
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				}
			},
			proto: {
				initIframe: function () {
					h.types.push(D), y("BeforeChange", function (t, e, i) {
						e !== i && (e === D ? W() : i === D && W(!0))
					}), y(l + "." + D, function () {
						W()
					})
				},
				getIframe: function (t, e) {
					var i = t.src,
						n = h.st.iframe;
					c.each(n.patterns, function () {
						return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
					});
					var o = {};
					return n.srcAction && (o[n.srcAction] = i), h._parseMarkup(e, o, t), h.updateStatus("ready"), e
				}
			}
		});
		var M = function (t) {
				var e = h.items.length;
				return e - 1 < t ? t - e : t < 0 ? e + t : t
			},
			H = function (t, e, i) {
				return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
			};
		c.magnificPopup.registerModule("gallery", {
			options: {
				enabled: !1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%"
			},
			proto: {
				initGallery: function () {
					var s = h.st.gallery,
						t = ".mfp-gallery",
						o = Boolean(c.fn.mfpFastClick);
					return h.direction = !0, !(!s || !s.enabled) && (p += " mfp-gallery", y(m + t, function () {
						s.navigateByImgClick && h.wrap.on("click" + t, ".mfp-img", function () {
							return 1 < h.items.length ? (h.next(), !1) : void 0
						}), u.on("keydown" + t, function (t) {
							37 === t.keyCode ? h.prev() : 39 === t.keyCode && h.next()
						})
					}), y("UpdateStatus" + t, function (t, e) {
						e.text && (e.text = H(e.text, h.currItem.index, h.items.length))
					}), y(f + t, function (t, e, i, n) {
						var o = h.items.length;
						i.counter = 1 < o ? H(s.tCounter, n.index, o) : ""
					}), y("BuildControls" + t, function () {
						if (1 < h.items.length && s.arrows && !h.arrowLeft) {
							var t = s.arrowMarkup,
								e = h.arrowLeft = c(t.replace(/%title%/gi, s.tPrev).replace(/%dir%/gi, "left")).addClass(a),
								i = h.arrowRight = c(t.replace(/%title%/gi, s.tNext).replace(/%dir%/gi, "right")).addClass(a),
								n = o ? "mfpFastClick" : "click";
							e[n](function () {
								h.prev()
							}), i[n](function () {
								h.next()
							}), h.isIE7 && (b("b", e[0], !1, !0), b("a", e[0], !1, !0), b("b", i[0], !1, !0), b("a", i[0], !1, !0)), h.container.append(e.add(i))
						}
					}), y("Change" + t, function () {
						h._preloadTimeout && clearTimeout(h._preloadTimeout), h._preloadTimeout = setTimeout(function () {
							h.preloadNearbyImages(), h._preloadTimeout = null
						}, 16)
					}), void y(l + t, function () {
						u.off(t), h.wrap.off("click" + t), h.arrowLeft && o && h.arrowLeft.add(h.arrowRight).destroyMfpFastClick(), h.arrowRight = h.arrowLeft = null
					}))
				},
				next: function () {
					h.direction = !0, h.index = M(h.index + 1), h.updateItemHTML()
				},
				prev: function () {
					h.direction = !1, h.index = M(h.index - 1), h.updateItemHTML()
				},
				goTo: function (t) {
					h.direction = t >= h.index, h.index = t, h.updateItemHTML()
				},
				preloadNearbyImages: function () {
					var t, e = h.st.gallery.preload,
						i = Math.min(e[0], h.items.length),
						n = Math.min(e[1], h.items.length);
					for (t = 1; t <= (h.direction ? n : i); t++) h._preloadItem(h.index + t);
					for (t = 1; t <= (h.direction ? i : n); t++) h._preloadItem(h.index - t)
				},
				_preloadItem: function (t) {
					if (t = M(t), !h.items[t].preloaded) {
						var e = h.items[t];
						e.parsed || (e = h.parseEl(t)), _("LazyLoad", e), "image" === e.type && (e.img = c('<img class="mfp-img" />').on("load.mfploader", function () {
							e.hasSize = !0
						}).on("error.mfploader", function () {
							e.hasSize = !0, e.loadError = !0, _("LazyLoadError", e)
						}).attr("src", e.src)), e.preloaded = !0
					}
				}
			}
		});
		var F, R, j, $ = "retina";
		c.magnificPopup.registerModule($, {
			options: {
				replaceSrc: function (t) {
					return t.src.replace(/\.\w+$/, function (t) {
						return "@2x" + t
					})
				},
				ratio: 1
			},
			proto: {
				initRetina: function () {
					if (1 < window.devicePixelRatio) {
						var i = h.st.retina,
							n = i.ratio;
						1 < (n = isNaN(n) ? n() : n) && (y("ImageHasSize." + $, function (t, e) {
							e.img.css({
								"max-width": e.img[0].naturalWidth / n,
								width: "100%"
							})
						}), y("ElementParse." + $, function (t, e) {
							e.src = i.replaceSrc(e, n)
						}))
					}
				}
			}
		}), F = "ontouchstart" in window, R = function () {
			w.off("touchmove" + j + " touchend" + j)
		}, j = ".mfpFastClick", c.fn.mfpFastClick = function (l) {
			return c(this).each(function () {
				var e, i, n, o, s, a, r, t = c(this);
				F && t.on("touchstart" + j, function (t) {
					s = !1, r = 1, a = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], n = a.clientX, o = a.clientY, w.on("touchmove" + j, function (t) {
						a = t.originalEvent ? t.originalEvent.touches : t.touches, r = a.length, a = a[0], (10 < Math.abs(a.clientX - n) || 10 < Math.abs(a.clientY - o)) && (s = !0, R())
					}).on("touchend" + j, function (t) {
						R(), s || 1 < r || (e = !0, t.preventDefault(), clearTimeout(i), i = setTimeout(function () {
							e = !1
						}, 1e3), l())
					})
				}), t.on("click" + j, function () {
					e || l()
				})
			})
		}, c.fn.destroyMfpFastClick = function () {
			c(this).off("touchstart" + j + " click" + j), F && w.off("touchmove" + j + " touchend" + j)
		}, s()
	}, "function" == typeof define && define.amd ? define(["jquery"], LD) : LD("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto),
	function s(a, r, l) {
		function d(i, t) {
			if (!r[i]) {
				if (!a[i]) {
					var e = "function" == typeof require && require;
					if (!t && e) return e(i, !0);
					if (c) return c(i, !0);
					var n = new Error("Cannot find module '" + i + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				var o = r[i] = {
					exports: {}
				};
				a[i][0].call(o.exports, function (t) {
					var e = a[i][1][t];
					return d(e || t)
				}, o, o.exports, s, a, r, l)
			}
			return r[i].exports
		}
		for (var c = "function" == typeof require && require, t = 0; t < l.length; t++) d(l[t]);
		return d
	}({
		1: [function (t, e, i) {
			"use strict";
			var o = t("../main"),
				s = t("../plugin/instances");

			function n(n) {
				n.fn.perfectScrollbar = function (i) {
					return this.each(function () {
						if ("object" == typeof i || void 0 === i) {
							var t = i;
							s.get(this) || o.initialize(this, t)
						} else {
							var e = i;
							"update" === e ? o.update(this) : "destroy" === e && o.destroy(this)
						}
						return n(this)
					})
				}
			}
			if ("function" == typeof define && define.amd) define(["jquery"], n);
			else {
				var a = window.jQuery ? window.jQuery : window.$;
				void 0 !== a && n(a)
			}
			e.exports = n
		}, {
			"../main": 7,
			"../plugin/instances": 18
		}],
		2: [function (t, e, i) {
			"use strict";
			i.add = function (t, e) {
				var i, n, o;
				t.classList ? t.classList.add(e) : (n = e, (o = (i = t).className.split(" ")).indexOf(n) < 0 && o.push(n), i.className = o.join(" "))
			}, i.remove = function (t, e) {
				var i, n, o, s;
				t.classList ? t.classList.remove(e) : (n = e, o = (i = t).className.split(" "), 0 <= (s = o.indexOf(n)) && o.splice(s, 1), i.className = o.join(" "))
			}, i.list = function (t) {
				return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
			}
		}, {}],
		3: [function (t, e, i) {
			"use strict";
			var n = {};
			n.e = function (t, e) {
				var i = document.createElement(t);
				return i.className = e, i
			}, n.appendTo = function (t, e) {
				return e.appendChild(t), t
			}, n.css = function (t, e, i) {
				return "object" == typeof e ? function (t, e) {
					for (var i in e) {
						var n = e[i];
						"number" == typeof n && (n = n.toString() + "px"), t.style[i] = n
					}
					return t
				}(t, e) : void 0 === i ? (a = t, r = e, window.getComputedStyle(a)[r]) : (n = t, o = e, "number" == typeof (s = i) && (s = s.toString() + "px"), n.style[o] = s, n);
				var n, o, s, a, r
			}, n.matches = function (t, e) {
				return void 0 !== t.matches ? t.matches(e) : void 0 !== t.matchesSelector ? t.matchesSelector(e) : void 0 !== t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : void 0 !== t.mozMatchesSelector ? t.mozMatchesSelector(e) : void 0 !== t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
			}, n.remove = function (t) {
				void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
			}, n.queryChildren = function (t, e) {
				return Array.prototype.filter.call(t.childNodes, function (t) {
					return n.matches(t, e)
				})
			}, e.exports = n
		}, {}],
		4: [function (t, e, i) {
			"use strict";
			var n = function (t) {
				this.element = t, this.events = {}
			};
			n.prototype.bind = function (t, e) {
				void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
			}, n.prototype.unbind = function (e, i) {
				var n = void 0 !== i;
				this.events[e] = this.events[e].filter(function (t) {
					return !(!n || t === i) || (this.element.removeEventListener(e, t, !1), !1)
				}, this)
			}, n.prototype.unbindAll = function () {
				for (var t in this.events) this.unbind(t)
			};
			var o = function () {
				this.eventElements = []
			};
			o.prototype.eventElement = function (e) {
				var t = this.eventElements.filter(function (t) {
					return t.element === e
				})[0];
				return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
			}, o.prototype.bind = function (t, e, i) {
				this.eventElement(t).bind(e, i)
			}, o.prototype.unbind = function (t, e, i) {
				this.eventElement(t).unbind(e, i)
			}, o.prototype.unbindAll = function () {
				for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
			}, o.prototype.once = function (t, e, i) {
				var n = this.eventElement(t),
					o = function (t) {
						n.unbind(e, o), i(t)
					};
				n.bind(e, o)
			}, e.exports = o
		}, {}],
		5: [function (t, e, i) {
			"use strict";
			e.exports = function () {
				function t() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
				}
				return function () {
					return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
				}
			}()
		}, {}],
		6: [function (t, e, i) {
			"use strict";
			var o = t("./class"),
				n = t("./dom");
			i.toInt = function (t) {
				return parseInt(t, 10) || 0
			}, i.clone = function (t) {
				if (null === t) return null;
				if ("object" != typeof t) return t;
				var e = {};
				for (var i in t) e[i] = this.clone(t[i]);
				return e
			}, i.extend = function (t, e) {
				var i = this.clone(t);
				for (var n in e) i[n] = this.clone(e[n]);
				return i
			}, i.isEditable = function (t) {
				return n.matches(t, "input,[contenteditable]") || n.matches(t, "select,[contenteditable]") || n.matches(t, "textarea,[contenteditable]") || n.matches(t, "button,[contenteditable]")
			}, i.removePsClasses = function (t) {
				for (var e = o.list(t), i = 0; i < e.length; i++) {
					var n = e[i];
					0 === n.indexOf("ps-") && o.remove(t, n)
				}
			}, i.outerWidth = function (t) {
				return this.toInt(n.css(t, "width")) + this.toInt(n.css(t, "paddingLeft")) + this.toInt(n.css(t, "paddingRight")) + this.toInt(n.css(t, "borderLeftWidth")) + this.toInt(n.css(t, "borderRightWidth"))
			}, i.startScrolling = function (t, e) {
				o.add(t, "ps-in-scrolling"), void 0 !== e ? o.add(t, "ps-" + e) : (o.add(t, "ps-x"), o.add(t, "ps-y"))
			}, i.stopScrolling = function (t, e) {
				o.remove(t, "ps-in-scrolling"), void 0 !== e ? o.remove(t, "ps-" + e) : (o.remove(t, "ps-x"), o.remove(t, "ps-y"))
			}, i.env = {
				isWebKit: "WebkitAppearance" in document.documentElement.style,
				supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
				supportsIePointer: null !== window.navigator.msMaxTouchPoints
			}
		}, {
			"./class": 2,
			"./dom": 3
		}],
		7: [function (t, e, i) {
			"use strict";
			var n = t("./plugin/destroy"),
				o = t("./plugin/initialize"),
				s = t("./plugin/update");
			e.exports = {
				initialize: o,
				update: s,
				destroy: n
			}
		}, {
			"./plugin/destroy": 9,
			"./plugin/initialize": 17,
			"./plugin/update": 21
		}],
		8: [function (t, e, i) {
			"use strict";
			e.exports = {
				maxScrollbarLength: null,
				minScrollbarLength: null,
				scrollXMarginOffset: 0,
				scrollYMarginOffset: 0,
				stopPropagationOnClick: !0,
				suppressScrollX: !1,
				suppressScrollY: !1,
				swipePropagation: !0,
				useBothWheelAxes: !1,
				useKeyboard: !0,
				useSelectionScroll: !1,
				wheelPropagation: !1,
				wheelSpeed: 1,
				theme: "default"
			}
		}, {}],
		9: [function (t, e, i) {
			"use strict";
			var n = t("../lib/dom"),
				o = t("../lib/helper"),
				s = t("./instances");
			e.exports = function (t) {
				var e = s.get(t);
				e && (e.event.unbindAll(), n.remove(e.scrollbarX), n.remove(e.scrollbarY), n.remove(e.scrollbarXRail), n.remove(e.scrollbarYRail), o.removePsClasses(t), s.remove(t))
			}
		}, {
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18
		}],
		10: [function (t, e, i) {
			"use strict";
			var a = t("../../lib/helper"),
				n = t("../instances"),
				r = t("../update-geometry"),
				l = t("../update-scroll");
			e.exports = function (t) {
				! function (n, o) {
					function s(t) {
						return t.getBoundingClientRect()
					}
					var t = window.Event.prototype.stopPropagation.bind;
					o.settings.stopPropagationOnClick && o.event.bind(o.scrollbarY, "click", t), o.event.bind(o.scrollbarYRail, "click", function (t) {
						var e = a.toInt(o.scrollbarYHeight / 2),
							i = o.railYRatio * (t.pageY - window.pageYOffset - s(o.scrollbarYRail).top - e) / (o.railYRatio * (o.railYHeight - o.scrollbarYHeight));
						i < 0 ? i = 0 : 1 < i && (i = 1), l(n, "top", (o.contentHeight - o.containerHeight) * i), r(n), t.stopPropagation()
					}), o.settings.stopPropagationOnClick && o.event.bind(o.scrollbarX, "click", t), o.event.bind(o.scrollbarXRail, "click", function (t) {
						var e = a.toInt(o.scrollbarXWidth / 2),
							i = o.railXRatio * (t.pageX - window.pageXOffset - s(o.scrollbarXRail).left - e) / (o.railXRatio * (o.railXWidth - o.scrollbarXWidth));
						i < 0 ? i = 0 : 1 < i && (i = 1), l(n, "left", (o.contentWidth - o.containerWidth) * i - o.negativeScrollAdjustment), r(n), t.stopPropagation()
					})
				}(t, n.get(t))
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		11: [function (t, e, i) {
			"use strict";
			var r = t("../../lib/dom"),
				l = t("../../lib/helper"),
				n = t("../instances"),
				d = t("../update-geometry"),
				c = t("../update-scroll");

			function o(o, s) {
				var a = null,
					e = null;
				var i = function (t) {
						! function (t) {
							var e = a + t * s.railXRatio,
								i = Math.max(0, s.scrollbarXRail.getBoundingClientRect().left) + s.railXRatio * (s.railXWidth - s.scrollbarXWidth);
							s.scrollbarXLeft = e < 0 ? 0 : i < e ? i : e;
							var n = l.toInt(s.scrollbarXLeft * (s.contentWidth - s.containerWidth) / (s.containerWidth - s.railXRatio * s.scrollbarXWidth)) - s.negativeScrollAdjustment;
							c(o, "left", n)
						}(t.pageX - e), d(o), t.stopPropagation(), t.preventDefault()
					},
					n = function () {
						l.stopScrolling(o, "x"), s.event.unbind(s.ownerDocument, "mousemove", i)
					};
				s.event.bind(s.scrollbarX, "mousedown", function (t) {
					e = t.pageX, a = l.toInt(r.css(s.scrollbarX, "left")) * s.railXRatio, l.startScrolling(o, "x"), s.event.bind(s.ownerDocument, "mousemove", i), s.event.once(s.ownerDocument, "mouseup", n), t.stopPropagation(), t.preventDefault()
				})
			}

			function s(o, s) {
				var a = null,
					e = null;
				var i = function (t) {
						! function (t) {
							var e = a + t * s.railYRatio,
								i = Math.max(0, s.scrollbarYRail.getBoundingClientRect().top) + s.railYRatio * (s.railYHeight - s.scrollbarYHeight);
							s.scrollbarYTop = e < 0 ? 0 : i < e ? i : e;
							var n = l.toInt(s.scrollbarYTop * (s.contentHeight - s.containerHeight) / (s.containerHeight - s.railYRatio * s.scrollbarYHeight));
							c(o, "top", n)
						}(t.pageY - e), d(o), t.stopPropagation(), t.preventDefault()
					},
					n = function () {
						l.stopScrolling(o, "y"), s.event.unbind(s.ownerDocument, "mousemove", i)
					};
				s.event.bind(s.scrollbarY, "mousedown", function (t) {
					e = t.pageY, a = l.toInt(r.css(s.scrollbarY, "top")) * s.railYRatio, l.startScrolling(o, "y"), s.event.bind(s.ownerDocument, "mousemove", i), s.event.once(s.ownerDocument, "mouseup", n), t.stopPropagation(), t.preventDefault()
				})
			}
			e.exports = function (t) {
				var e = n.get(t);
				o(t, e), s(t, e)
			}
		}, {
			"../../lib/dom": 3,
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		12: [function (t, e, i) {
			"use strict";
			var l = t("../../lib/helper"),
				d = t("../../lib/dom"),
				n = t("../instances"),
				c = t("../update-geometry"),
				h = t("../update-scroll");

			function o(s, a) {
				var r = !1;
				a.event.bind(s, "mouseenter", function () {
					r = !0
				}), a.event.bind(s, "mouseleave", function () {
					r = !1
				});
				a.event.bind(a.ownerDocument, "keydown", function (t) {
					if (!t.isDefaultPrevented || !t.isDefaultPrevented()) {
						var e = d.matches(a.scrollbarX, ":focus") || d.matches(a.scrollbarY, ":focus");
						if (r || e) {
							var i = document.activeElement ? document.activeElement : a.ownerDocument.activeElement;
							if (i) {
								for (; i.shadowRoot;) i = i.shadowRoot.activeElement;
								if (l.isEditable(i)) return
							}
							var n = 0,
								o = 0;
							switch (t.which) {
								case 37:
									n = -30;
									break;
								case 38:
									o = 30;
									break;
								case 39:
									n = 30;
									break;
								case 40:
									o = -30;
									break;
								case 33:
									o = 90;
									break;
								case 32:
									o = t.shiftKey ? 90 : -90;
									break;
								case 34:
									o = -90;
									break;
								case 35:
									o = t.ctrlKey ? -a.contentHeight : -a.containerHeight;
									break;
								case 36:
									o = t.ctrlKey ? s.scrollTop : a.containerHeight;
									break;
								default:
									return
							}
							h(s, "top", s.scrollTop - o), h(s, "left", s.scrollLeft + n), c(s),
								function (t, e) {
									var i = s.scrollTop;
									if (0 === t) {
										if (!a.scrollbarYActive) return !1;
										if (0 === i && 0 < e || i >= a.contentHeight - a.containerHeight && e < 0) return !a.settings.wheelPropagation
									}
									var n = s.scrollLeft;
									if (0 === e) {
										if (!a.scrollbarXActive) return !1;
										if (0 === n && t < 0 || n >= a.contentWidth - a.containerWidth && 0 < t) return !a.settings.wheelPropagation
									}
									return !0
								}(n, o) && t.preventDefault()
						}
					}
				})
			}
			e.exports = function (t) {
				o(t, n.get(t))
			}
		}, {
			"../../lib/dom": 3,
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		13: [function (t, e, i) {
			"use strict";
			var n = t("../instances"),
				c = t("../update-geometry"),
				h = t("../update-scroll");

			function o(r, l) {
				var d = !1;

				function t(t) {
					var e, i, n, o = (i = (e = t).deltaX, n = -1 * e.deltaY, void 0 !== i && void 0 !== n || (i = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (i *= 10, n *= 10), i != i && n != n && (i = 0, n = e.wheelDelta), [i, n]),
						s = o[0],
						a = o[1];
					(function (t, e) {
						var i = r.querySelector("textarea:hover");
						if (i) {
							var n = i.scrollHeight - i.clientHeight;
							if (0 < n && !(0 === i.scrollTop && 0 < e || i.scrollTop === n && e < 0)) return !0;
							var o = i.scrollLeft - i.clientWidth;
							if (0 < o && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === o && 0 < t)) return !0
						}
						return !1
					})(s, a) || (d = !1, l.settings.useBothWheelAxes ? l.scrollbarYActive && !l.scrollbarXActive ? (h(r, "top", a ? r.scrollTop - a * l.settings.wheelSpeed : r.scrollTop + s * l.settings.wheelSpeed), d = !0) : l.scrollbarXActive && !l.scrollbarYActive && (h(r, "left", s ? r.scrollLeft + s * l.settings.wheelSpeed : r.scrollLeft - a * l.settings.wheelSpeed), d = !0) : (h(r, "top", r.scrollTop - a * l.settings.wheelSpeed), h(r, "left", r.scrollLeft + s * l.settings.wheelSpeed)), c(r), (d = d || function (t, e) {
						var i = r.scrollTop;
						if (0 === t) {
							if (!l.scrollbarYActive) return !1;
							if (0 === i && 0 < e || i >= l.contentHeight - l.containerHeight && e < 0) return !l.settings.wheelPropagation
						}
						var n = r.scrollLeft;
						if (0 === e) {
							if (!l.scrollbarXActive) return !1;
							if (0 === n && t < 0 || n >= l.contentWidth - l.containerWidth && 0 < t) return !l.settings.wheelPropagation
						}
						return !0
					}(s, a)) && (t.stopPropagation(), t.preventDefault()))
				}
				void 0 !== window.onwheel ? l.event.bind(r, "wheel", t) : void 0 !== window.onmousewheel && l.event.bind(r, "mousewheel", t)
			}
			e.exports = function (t) {
				o(t, n.get(t))
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		14: [function (t, e, i) {
			"use strict";
			var n = t("../instances"),
				o = t("../update-geometry");
			e.exports = function (t) {
				var e, i = n.get(t);
				e = t, i.event.bind(e, "scroll", function () {
					o(e)
				})
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19
		}],
		15: [function (t, e, i) {
			"use strict";
			var u = t("../../lib/helper"),
				p = t("../instances"),
				f = t("../update-geometry"),
				m = t("../update-scroll");

			function n(r, t) {
				var l = null,
					d = {
						top: 0,
						left: 0
					};

				function c() {
					l && (clearInterval(l), l = null), u.stopScrolling(r)
				}
				var h = !1;
				t.event.bind(t.ownerDocument, "selectionchange", function () {
					var t;
					r.contains(0 === (t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "").toString().length ? null : t.getRangeAt(0).commonAncestorContainer) ? h = !0 : (h = !1, c())
				}), t.event.bind(window, "mouseup", function () {
					h && (h = !1, c())
				}), t.event.bind(window, "mousemove", function (t) {
					if (h) {
						var e = t.pageX,
							i = t.pageY,
							n = r.offsetLeft,
							o = r.offsetLeft + r.offsetWidth,
							s = r.offsetTop,
							a = r.offsetTop + r.offsetHeight;
						e < n + 3 ? (d.left = -5, u.startScrolling(r, "x")) : o - 3 < e ? (d.left = 5, u.startScrolling(r, "x")) : d.left = 0, i < s + 3 ? (d.top = s + 3 - i < 5 ? -5 : -20, u.startScrolling(r, "y")) : a - 3 < i ? (d.top = i - a + 3 < 5 ? 5 : 20, u.startScrolling(r, "y")) : d.top = 0, 0 === d.top && 0 === d.left ? c() : l || (l = setInterval(function () {
							p.get(r) ? (m(r, "top", r.scrollTop + d.top), m(r, "left", r.scrollLeft + d.left), f(r)) : clearInterval(l)
						}, 50))
					}
				})
			}
			e.exports = function (t) {
				n(t, p.get(t))
			}
		}, {
			"../../lib/helper": 6,
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		16: [function (t, e, i) {
			"use strict";
			var w = t("../instances"),
				y = t("../update-geometry"),
				b = t("../update-scroll");

			function n(r, l, t, e) {
				function d(t, e) {
					b(r, "top", r.scrollTop - e), b(r, "left", r.scrollLeft - t), y(r)
				}
				var c = {},
					h = 0,
					u = {},
					i = null,
					p = !1,
					f = !1;

				function n() {
					p = !0
				}

				function o() {
					p = !1
				}

				function m(t) {
					return t.targetTouches ? t.targetTouches[0] : t
				}

				function g(t) {
					return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
				}

				function s(t) {
					if (g(t)) {
						f = !0;
						var e = m(t);
						c.pageX = e.pageX, c.pageY = e.pageY, h = (new Date).getTime(), null !== i && clearInterval(i), t.stopPropagation()
					}
				}

				function a(t) {
					if (!p && f && g(t)) {
						var e = m(t),
							i = {
								pageX: e.pageX,
								pageY: e.pageY
							},
							n = i.pageX - c.pageX,
							o = i.pageY - c.pageY;
						d(n, o), c = i;
						var s = (new Date).getTime(),
							a = s - h;
						0 < a && (u.x = n / a, u.y = o / a, h = s),
							function (t, e) {
								var i = r.scrollTop,
									n = r.scrollLeft,
									o = Math.abs(t),
									s = Math.abs(e);
								if (o < s) {
									if (e < 0 && i === l.contentHeight - l.containerHeight || 0 < e && 0 === i) return !l.settings.swipePropagation
								} else if (s < o && (t < 0 && n === l.contentWidth - l.containerWidth || 0 < t && 0 === n)) return !l.settings.swipePropagation;
								return !0
							}(n, o) && (t.stopPropagation(), t.preventDefault())
					}
				}

				function v() {
					!p && f && (f = !1, clearInterval(i), i = setInterval(function () {
						w.get(r) ? Math.abs(u.x) < .01 && Math.abs(u.y) < .01 ? clearInterval(i) : (d(30 * u.x, 30 * u.y), u.x *= .8, u.y *= .8) : clearInterval(i)
					}, 10))
				}
				t && (l.event.bind(window, "touchstart", n), l.event.bind(window, "touchend", o), l.event.bind(r, "touchstart", s), l.event.bind(r, "touchmove", a), l.event.bind(r, "touchend", v)), e && (window.PointerEvent ? (l.event.bind(window, "pointerdown", n), l.event.bind(window, "pointerup", o), l.event.bind(r, "pointerdown", s), l.event.bind(r, "pointermove", a), l.event.bind(r, "pointerup", v)) : window.MSPointerEvent && (l.event.bind(window, "MSPointerDown", n), l.event.bind(window, "MSPointerUp", o), l.event.bind(r, "MSPointerDown", s), l.event.bind(r, "MSPointerMove", a), l.event.bind(r, "MSPointerUp", v)))
			}
			e.exports = function (t, e, i) {
				n(t, w.get(t), e, i)
			}
		}, {
			"../instances": 18,
			"../update-geometry": 19,
			"../update-scroll": 20
		}],
		17: [function (t, e, i) {
			"use strict";
			var n = t("../lib/class"),
				o = t("../lib/helper"),
				s = t("./instances"),
				a = t("./update-geometry"),
				r = t("./handler/click-rail"),
				l = t("./handler/drag-scrollbar"),
				d = t("./handler/keyboard"),
				c = t("./handler/mouse-wheel"),
				h = t("./handler/native-scroll"),
				u = t("./handler/selection"),
				p = t("./handler/touch");
			e.exports = function (t, e) {
				e = "object" == typeof e ? e : {}, n.add(t, "ps-container");
				var i = s.add(t);
				i.settings = o.extend(i.settings, e), n.add(t, "ps-theme-" + i.settings.theme), r(t), l(t), c(t), h(t), i.settings.useSelectionScroll && u(t), (o.env.supportsTouch || o.env.supportsIePointer) && p(t, o.env.supportsTouch, o.env.supportsIePointer), i.settings.useKeyboard && d(t), a(t)
			}
		}, {
			"../lib/class": 2,
			"../lib/helper": 6,
			"./handler/click-rail": 10,
			"./handler/drag-scrollbar": 11,
			"./handler/keyboard": 12,
			"./handler/mouse-wheel": 13,
			"./handler/native-scroll": 14,
			"./handler/selection": 15,
			"./handler/touch": 16,
			"./instances": 18,
			"./update-geometry": 19
		}],
		18: [function (t, e, i) {
			"use strict";
			var a = t("../lib/class"),
				r = t("../lib/dom"),
				l = t("./default-setting"),
				d = t("../lib/event-manager"),
				o = t("../lib/guid"),
				c = t("../lib/helper"),
				s = {};

			function h(t) {
				var e, i, n = this;

				function o() {
					a.add(t, "ps-focus")
				}

				function s() {
					a.remove(t, "ps-focus")
				}
				n.settings = c.clone(l), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === r.css(t, "direction"), n.isNegativeScroll = (i = t.scrollLeft, t.scrollLeft = -1, e = t.scrollLeft < 0, t.scrollLeft = i, e), n.negativeScrollAdjustment = n.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, n.event = new d, n.ownerDocument = t.ownerDocument || document, n.scrollbarXRail = r.appendTo(r.e("div", "ps-scrollbar-x-rail"), t), n.scrollbarX = r.appendTo(r.e("div", "ps-scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", o), n.event.bind(n.scrollbarX, "blur", s), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = c.toInt(r.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom == n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : c.toInt(r.css(n.scrollbarXRail, "top")), n.railBorderXWidth = c.toInt(r.css(n.scrollbarXRail, "borderLeftWidth")) + c.toInt(r.css(n.scrollbarXRail, "borderRightWidth")), r.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = c.toInt(r.css(n.scrollbarXRail, "marginLeft")) + c.toInt(r.css(n.scrollbarXRail, "marginRight")), r.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = r.appendTo(r.e("div", "ps-scrollbar-y-rail"), t), n.scrollbarY = r.appendTo(r.e("div", "ps-scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", o), n.event.bind(n.scrollbarY, "blur", s), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = c.toInt(r.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight == n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : c.toInt(r.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? c.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = c.toInt(r.css(n.scrollbarYRail, "borderTopWidth")) + c.toInt(r.css(n.scrollbarYRail, "borderBottomWidth")), r.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = c.toInt(r.css(n.scrollbarYRail, "marginTop")) + c.toInt(r.css(n.scrollbarYRail, "marginBottom")), r.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null
			}

			function n(t) {
				return void 0 === t.dataset ? t.getAttribute("data-ps-id") : t.dataset.psId
			}
			i.add = function (t) {
				var e, i, n = o();
				return i = n, void 0 === (e = t).dataset ? e.setAttribute("data-ps-id", i) : e.dataset.psId = i, s[n] = new h(t), s[n]
			}, i.remove = function (t) {
				var e;
				delete s[n(t)], void 0 === (e = t).dataset ? e.removeAttribute("data-ps-id") : delete e.dataset.psId
			}, i.get = function (t) {
				return s[n(t)]
			}
		}, {
			"../lib/class": 2,
			"../lib/dom": 3,
			"../lib/event-manager": 4,
			"../lib/guid": 5,
			"../lib/helper": 6,
			"./default-setting": 8
		}],
		19: [function (t, e, i) {
			"use strict";
			var n = t("../lib/class"),
				o = t("../lib/dom"),
				s = t("../lib/helper"),
				a = t("./instances"),
				r = t("./update-scroll");

			function l(t, e) {
				return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
			}
			e.exports = function (t) {
				var e, i = a.get(t);
				i.containerWidth = t.clientWidth, i.containerHeight = t.clientHeight, i.contentWidth = t.scrollWidth, i.contentHeight = t.scrollHeight, t.contains(i.scrollbarXRail) || (0 < (e = o.queryChildren(t, ".ps-scrollbar-x-rail")).length && e.forEach(function (t) {
						o.remove(t)
					}), o.appendTo(i.scrollbarXRail, t)), t.contains(i.scrollbarYRail) || (0 < (e = o.queryChildren(t, ".ps-scrollbar-y-rail")).length && e.forEach(function (t) {
						o.remove(t)
					}), o.appendTo(i.scrollbarYRail, t)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = l(i, s.toInt(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = s.toInt((i.negativeScrollAdjustment + t.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = l(i, s.toInt(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = s.toInt(t.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
					function (t, e) {
						var i = {
							width: e.railXWidth
						};
						e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, o.css(e.scrollbarXRail, i);
						var n = {
							top: t.scrollTop,
							height: e.railYHeight
						};
						e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, o.css(e.scrollbarYRail, n), o.css(e.scrollbarX, {
							left: e.scrollbarXLeft,
							width: e.scrollbarXWidth - e.railBorderXWidth
						}), o.css(e.scrollbarY, {
							top: e.scrollbarYTop,
							height: e.scrollbarYHeight - e.railBorderYWidth
						})
					}(t, i), i.scrollbarXActive ? n.add(t, "ps-active-x") : (n.remove(t, "ps-active-x"), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, r(t, "left", 0)), i.scrollbarYActive ? n.add(t, "ps-active-y") : (n.remove(t, "ps-active-y"), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, r(t, "top", 0))
			}
		}, {
			"../lib/class": 2,
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18,
			"./update-scroll": 20
		}],
		20: [function (t, e, i) {
			"use strict";
			var o, s, a = t("./instances"),
				r = document.createEvent("Event"),
				l = document.createEvent("Event"),
				d = document.createEvent("Event"),
				c = document.createEvent("Event"),
				h = document.createEvent("Event"),
				u = document.createEvent("Event"),
				p = document.createEvent("Event"),
				f = document.createEvent("Event"),
				m = document.createEvent("Event"),
				g = document.createEvent("Event");
			r.initEvent("ps-scroll-up", !0, !0), l.initEvent("ps-scroll-down", !0, !0), d.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), h.initEvent("ps-scroll-y", !0, !0), u.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), m.initEvent("ps-y-reach-start", !0, !0), g.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, i) {
				if (void 0 === t) throw "You must provide an element to the update-scroll function";
				if (void 0 === e) throw "You must provide an axis to the update-scroll function";
				if (void 0 === i) throw "You must provide a value to the update-scroll function";
				"top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(m)), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(p));
				var n = a.get(t);
				"top" === e && i >= n.contentHeight - n.containerHeight && (t.scrollTop = i = n.contentHeight - n.containerHeight, t.dispatchEvent(g)), "left" === e && i >= n.contentWidth - n.containerWidth && (t.scrollLeft = i = n.contentWidth - n.containerWidth, t.dispatchEvent(f)), o || (o = t.scrollTop), s || (s = t.scrollLeft), "top" === e && i < o && t.dispatchEvent(r), "top" === e && o < i && t.dispatchEvent(l), "left" === e && i < s && t.dispatchEvent(d), "left" === e && s < i && t.dispatchEvent(c), "top" === e && (t.scrollTop = o = i, t.dispatchEvent(h)), "left" === e && (t.scrollLeft = s = i, t.dispatchEvent(u))
			}
		}, {
			"./instances": 18
		}],
		21: [function (t, e, i) {
			"use strict";
			var n = t("../lib/dom"),
				o = t("../lib/helper"),
				s = t("./instances"),
				a = t("./update-geometry"),
				r = t("./update-scroll");
			e.exports = function (t) {
				var e = s.get(t);
				e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, n.css(e.scrollbarXRail, "display", "block"), n.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = o.toInt(n.css(e.scrollbarXRail, "marginLeft")) + o.toInt(n.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = o.toInt(n.css(e.scrollbarYRail, "marginTop")) + o.toInt(n.css(e.scrollbarYRail, "marginBottom")), n.css(e.scrollbarXRail, "display", "none"), n.css(e.scrollbarYRail, "display", "none"), a(t), r(t, "top", t.scrollTop), r(t, "left", t.scrollLeft), n.css(e.scrollbarXRail, "display", ""), n.css(e.scrollbarYRail, "display", ""))
			}
		}, {
			"../lib/dom": 3,
			"../lib/helper": 6,
			"./instances": 18,
			"./update-geometry": 19,
			"./update-scroll": 20
		}]
	}, {}, [1]);
var delay_tab = 300,
	delay_show_mm = 300,
	delay_hide_mm = 300,
	jR, kR, lR, AR;

function mm_destroy(t, e) {
	e.remember_state || (t.find(".mmpanel").toggleClass("mmsubopened mmcurrent mmopened", !1).addClass("mmhidden"), t.find("#mm0").addClass("mmopened").addClass("mmcurrent").removeClass("mmhidden")), t.toggleClass("mmhide mmitemopen", !1).hide(), $("body").removeClass("mm-open")
}

function get_mm_parent() {
	return '<div class="mmpanels"></div>'
}

function get_mm_block() {
	return '<div class="mmpanel mmhidden">'
}

function getButtonBack(t, e) {
	return '<li><a href="#" data-target="#" class="mm-prev-level">' + (t = null == t ? e : t) + "</a></li>"
}

function getButtonClose(t, e) {
	return '<li class="mm-close-parent"><a href="#close" data-target="#close" class="mm-close">' + (t = null == t ? e : t) + "</a></li>"
}

function getFullscreenBg() {
	return '<div class="mm-fullscreen-bg"></div>'
}
if ($("body").append(getFullscreenBg()), $.fn.initMM = function () {
		var n = {
			$mobilemenu: $(".panel-menu"),
			mm_close_button: "Close",
			mm_back_button: "Back",
			mm_breakpoint: 768,
			mm_enable_breakpoint: !1,
			mm_mobile_button: !1,
			remember_state: !1,
			second_button: !1,
			init: function (t, e) {
				var i = this;
				if (!i.$mobilemenu.length) return console.log('You not have <nav class="panel-menu mobile-main-menu">menu</nav>. See Documentation'), !1;
				null != e && i.parse_arguments(e), i.$mobilemenu.parse_mm(n), i.$mobilemenu.init_mm(n), i.mm_enable_breakpoint && i.$mobilemenu.check_resolution_mm(n), t.mm_handler(n)
			},
			parse_arguments: function (t) {
				var i = this;
				Object(t).hasOwnProperty("menu_class") && (i.$mobilemenu = $("." + t.menu_class)), $.each(t, function (t, e) {
					switch (t) {
						case "right":
							e && i.$mobilemenu.addClass("mm-right");
							break;
						case "close_button_name":
							i.mm_close_button = e;
							break;
						case "back_button_name":
							i.mm_back_button = e;
							break;
						case "width":
							i.$mobilemenu.css("width", e);
							break;
						case "breakpoint":
							i.mm_breakpoint = e;
							break;
						case "enable_breakpoint":
							i.mm_enable_breakpoint = e;
							break;
						case "mobile_button":
							i.mm_mobile_button = e;
							break;
						case "remember_state":
							i.remember_state = e;
							break;
						case "second_button":
							i.second_button = e
					}
				})
			},
			show_button_in_mobile: function (t) {
				var e = this;
				e.mm_mobile_button && (window.innerWidth > e.mm_breakpoint ? t.hide() : t.show(), $(window).resize(function () {
					window.innerWidth > e.mm_breakpoint ? t.hide() : t.show()
				}))
			}
		};
		n.init($(this), arguments[0]), n.show_button_in_mobile($(this))
	}, $.fn.check_resolution_mm = function (t) {
		var e = $(this);
		$(window).resize(function () {
			if (!$("body").hasClass("mm-open") || !e.hasClass("mmitemopen")) return !1;
			window.innerWidth > t.mm_breakpoint && e.closemm(t)
		})
	}, $.fn.mm_handler = function (e) {
		$(this).click(function (t) {
			t.preventDefault(), e.$mobilemenu.openmm()
		}), 0 != e.second_button && $(e.second_button).click(function (t) {
			t.preventDefault(), e.$mobilemenu.openmm()
		})
	}, $.fn.parse_mm = function (e) {
		var t, i = $(this).clone(),
			n = $(get_mm_parent()),
			o = !1,
			s = 0,
			a = !1,
			r = !1;
		$(this).empty(), i.find("a").each(function () {
			a = $(this), (t = a.parent().find("ul").first()).length && (s++, t.prepend("<li></li>").find("li").first().append(a.clone().addClass("mm-original-link")), a.attr("href", "#mm" + s).attr("data-target", "#mm" + s).addClass("mm-next-level"))
		}), i.find("ul").each(function (t) {
			r = !1, o = $(get_mm_block()).attr("id", "mm" + t).append($(this)), r = 0 == t ? (o.addClass("mmopened").addClass("mmcurrent").removeClass("mmhidden"), getButtonClose(i.find(".mm-closebtn").html(), e.mm_close_button)) : getButtonBack(i.find(".mm-backbtn").html(), e.mm_back_button), o.find("ul").first().prepend(r), n.append(o)
		}), $(this).append(n)
	}, $.fn.init_mm = function (o) {
		var s = $(this);
		s.find("a").each(function () {
			$(this).click(function (t) {
				var e = $(this),
					i = !1,
					n = "";
				return e.hasClass("mm-next-level") ? (t.preventDefault(), n = e.attr("href"), (i = s.find(".mmcurrent")).addClass("mmsubopened").removeClass("mmcurrent"), s.find(n).removeClass("mmhidden"), setTimeout(function () {
					s.find(n).scrollTop(0).addClass("mmcurrent").addClass("mmopened")
				}, 0), setTimeout(function () {
					i.addClass("mmhidden")
				}, delay_tab), !1) : e.hasClass("mm-prev-level") ? (t.preventDefault(), n = e.attr("href"), (i = s.find(".mmcurrent")).removeClass("mmcurrent").removeClass("mmopened"), s.find(".mmsubopened").last().removeClass("mmhidden").scrollTop(0).removeClass("mmsubopened").addClass("mmcurrent"), setTimeout(function () {
					i.addClass("mmhidden")
				}, delay_tab), !1) : e.hasClass("mm-close") ? (s.closemm(o), !1) : void 0
			})
		}), $(".mm-fullscreen-bg").click(function (t) {
			t.preventDefault(), s.closemm(o)
		})
	}, $.fn.openmm = function () {
		var t = $(this);
		t.show(), setTimeout(function () {
			$("body").addClass("mm-open"), t.addClass("mmitemopen"), $(".mm-fullscreen-bg").fadeIn(delay_show_mm)
		}, 0)
	}, $.fn.closemm = function (t) {
		var e = $(this);
		e.addClass("mmhide"), $(".mm-fullscreen-bg").fadeOut(delay_hide_mm), setTimeout(function () {
			mm_destroy(e, t)
		}, delay_hide_mm)
	}, jR = jQuery, kR = {
		host: "https://www.instagram.com/",
		username: "",
		tag: "",
		container: "",
		display_profile: !0,
		display_biography: !0,
		display_gallery: !0,
		display_igtv: !1,
		get_data: !1,
		callback: null,
		styling: !0,
		items: 8,
		items_per_row: 4,
		margin: .5,
		image_size: 640
	}, lR = {
		150: 0,
		240: 1,
		320: 2,
		480: 3,
		640: 4
	}, jR.instagramFeed = function (t) {
		var c = jR.fn.extend({}, kR, t);
		if ("" == c.username && "" == c.tag) return console.error("Instagram Feed: Error, no username or tag found."), !1;
		if (void 0 !== c.get_raw_json && (console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead"), c.get_data = c.get_raw_json), !c.get_data && "" == c.container) return console.error("Instagram Feed: Error, no container found."), !1;
		if (c.get_data && null == c.callback) return console.error("Instagram Feed: Error, no callback defined to get the raw json"), !1;
		var h = "" == c.username;
		return jR.get(h ? c.host + "explore/tags/" + c.tag : c.host + c.username, function (t) {
			if (t = t.split("window._sharedData = ")[1].split("<\/script>")[0], t = (t = (t = JSON.parse(t.substr(0, t.length - 1))).entry_data.ProfilePage || t.entry_data.TagPage)[0].graphql.user || t[0].graphql.hashtag, c.get_data) c.callback(t);
			else {
				var e = "",
					i = "",
					n = "",
					o = "",
					s = "";
				c.styling && (e = " style='text-align:center;'", i = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'", n = " style='font-size:1.2em;'", o = " style='font-size:1em;'", s = " style='margin:" + c.margin + "% " + c.margin + "%;width:" + (100 - 2 * c.margin * c.items_per_row) / c.items_per_row + "%;float:left;'");
				var a = "";
				if (c.display_profile && (a = a + "<div class='instagram_profile'" + e + ">\t<img class='instagram_profile_image' src='" + t.profile_pic_url + "' alt='" + t.name + " profile pic'" + i + " />", a = h ? a + "\t<p class='instagram_tag'" + n + "><a href='https://www.instagram.com/explore/tags/" + c.tag + "' rel='noopener' target='_blank'>#" + c.tag + "</a></p>" : a + "\t<p class='instagram_username'" + n + ">@" + t.full_name + " (<a href='https://www.instagram.com/" + c.username + "' rel='noopener' target='_blank'>@" + c.username + "</a>)</p>", !h && c.display_biography && (a += "\t<p class='instagram_biography'" + o + ">" + t.biography + "</p>"), a += "</div>"), n = void 0 !== lR[c.image_size] ? lR[c.image_size] : lR[640], c.display_gallery)
					if (void 0 !== t.is_private && !0 === t.is_private) a += "<p class='instagram_private'><strong>This profile is private</strong></p>";
					else {
						for (i = (o = (t.edge_owner_to_timeline_media || t.edge_hashtag_to_media).edges).length > c.items ? c.items : o.length, a += "<div class='instagram_gallery'>", e = 0; e < i; e++) {
							var r = "https://www.instagram.com/p/" + o[e].node.shortcode;
							switch (o[e].node.__typename) {
								case "GraphSidecar":
									var l = "sidecar",
										d = o[e].node.thumbnail_resources[n].src;
									break;
								case "GraphVideo":
									l = "video", d = o[e].node.thumbnail_src;
									break;
								default:
									l = "image", d = o[e].node.thumbnail_resources[n].src
							}
							a += "\t<a href='" + r + "' class='instagram-" + l + "' rel='noopener' target='_blank'>", a += "   \t<img src='" + d + "' alt='" + t.name + " instagram image " + e + "'" + s + " />", a += "\t</a>"
						}
						a += "</div>"
					}
				if (c.display_igtv && void 0 !== t.edge_felix_video_timeline && (i = (t = t.edge_felix_video_timeline.edges).length > c.items ? c.items : t.length, 0 < t.length)) {
					for (a += "<div class='instagram_igtv'>", e = 0; e < i; e++) a += "\t<a href='https://www.instagram.com/p/" + t[e].node.shortcode + "' rel='noopener' target='_blank'>", a += "\t\t<img src='" + t[e].node.thumbnail_src + "' alt='" + c.username + " instagram image " + e + "'" + s + " />", a += "\t</a>";
					a += "</div>"
				}
				jR(c.container).html(a)
			}
		}).fail(function (t) {
			console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ", t.status)
		}), !0
	}, AR = function (st) {
		var at = "left",
			rt = "right",
			lt = "up",
			dt = "down",
			ct = "in",
			ht = "out",
			ut = "none",
			pt = "auto",
			ft = "swipe",
			mt = "pinch",
			gt = "tap",
			vt = "doubletap",
			wt = "longtap",
			yt = "horizontal",
			bt = "vertical",
			_t = "all",
			xt = 10,
			Tt = "start",
			kt = "move",
			Ct = "end",
			St = "cancel",
			zt = "ontouchstart" in window,
			It = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
			Lt = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
			Et = "TouchSwipe";

		function n(t, v) {
			var e = zt || Lt || !v.fallbackToMouseEvents,
				i = e ? Lt ? It ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
				n = e ? Lt ? It ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
				o = e ? Lt ? It ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
				s = e ? null : "mouseleave",
				a = Lt ? It ? "MSPointerCancel" : "pointercancel" : "touchcancel",
				w = 0,
				y = null,
				b = 0,
				_ = 0,
				x = 0,
				T = 1,
				k = 0,
				C = 0,
				S = null,
				r = st(t),
				z = "start",
				I = 0,
				L = null,
				l = 0,
				E = 0,
				d = 0,
				c = 0,
				h = 0,
				u = null,
				O = null;
			try {
				r.bind(i, p), r.bind(a, g)
			} catch (t) {
				st.error("events not supported " + i + "," + a + " on jQuery.swipe")
			}

			function p(t) {
				if (!0 !== r.data(Et + "_intouch") && !(0 < st(t.target).closest(v.excludedElements, r).length)) {
					var e, i, n = t.originalEvent ? t.originalEvent : t,
						o = zt ? n.touches[0] : n;
					return z = Tt, zt ? I = n.touches.length : t.preventDefault(), C = y = null, T = 1, k = x = _ = b = w = 0, L = function () {
						for (var t = [], e = 0; e <= 5; e++) t.push({
							start: {
								x: 0,
								y: 0
							},
							end: {
								x: 0,
								y: 0
							},
							identifier: 0
						});
						return t
					}(), (i = {})[at] = et(at), i[rt] = et(rt), i[lt] = et(lt), i[dt] = et(dt), S = i, Q(), !zt || I === v.fingers || v.fingers === _t || $() ? (G(0, o), l = ot(), 2 == I && (G(1, n.touches[1]), _ = x = nt(L[0].start, L[1].start)), (v.swipeStatus || v.pinchStatus) && (e = W(n, z))) : e = !1, !1 === e ? (W(n, z = St), e) : (v.hold && (O = setTimeout(st.proxy(function () {
						r.trigger("hold", [n.target]), v.hold && (e = v.hold.call(r, n, n.target))
					}, this), v.longTapThreshold)), Z(!0), null)
				}
			}

			function f(t) {
				var e = t.originalEvent ? t.originalEvent : t;
				if (z !== Ct && z !== St && !V()) {
					var i, n, o, s, a, r, l, d, c, h, u, p, f = K(zt ? e.touches[0] : e);
					if (E = ot(), zt && (I = e.touches.length), v.hold && clearTimeout(O), z = kt, 2 == I && (0 == _ ? (G(1, e.touches[1]), _ = x = nt(L[0].start, L[1].start)) : (K(e.touches[1]), x = nt(L[0].end, L[1].end), L[0].end, L[1].end, C = T < 1 ? ht : ct), T = (x / _ * 1).toFixed(2), k = Math.abs(_ - x)), I === v.fingers || v.fingers === _t || !zt || $()) {
						if (h = f.start, u = f.end, p = function (t, e) {
								var i = t.x - e.x,
									n = e.y - t.y,
									o = Math.atan2(n, i),
									s = Math.round(180 * o / Math.PI);
								s < 0 && (s = 360 - Math.abs(s));
								return s
							}(h, u), function (t, e) {
								if (v.allowPageScroll === ut || $()) t.preventDefault();
								else {
									var i = v.allowPageScroll === pt;
									switch (e) {
										case at:
											(v.swipeLeft && i || !i && v.allowPageScroll != yt) && t.preventDefault();
											break;
										case rt:
											(v.swipeRight && i || !i && v.allowPageScroll != yt) && t.preventDefault();
											break;
										case lt:
											(v.swipeUp && i || !i && v.allowPageScroll != bt) && t.preventDefault();
											break;
										case dt:
											(v.swipeDown && i || !i && v.allowPageScroll != bt) && t.preventDefault()
									}
								}
							}(t, y = p <= 45 && 0 <= p ? at : p <= 360 && 315 <= p ? at : 135 <= p && p <= 225 ? rt : 45 < p && p < 135 ? dt : lt), d = f.start, c = f.end, w = Math.round(Math.sqrt(Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2))), b = it(), r = y, l = w, l = Math.max(l, tt(r)), S[r].distance = l, (v.swipeStatus || v.pinchStatus) && (i = W(e, z)), !v.triggerOnTouchEnd || v.triggerOnTouchLeave) {
							var m = !0;
							if (v.triggerOnTouchLeave) {
								var g = {
									left: (a = (s = st(s = this)).offset()).left,
									right: a.left + s.outerWidth(),
									top: a.top,
									bottom: a.top + s.outerHeight()
								};
								n = f.end, o = g, m = n.x > o.left && n.x < o.right && n.y > o.top && n.y < o.bottom
							}!v.triggerOnTouchEnd && m ? z = D(kt) : v.triggerOnTouchLeave && !m && (z = D(Ct)), z != St && z != Ct || W(e, z)
						}
					} else W(e, z = St);
					!1 === i && W(e, z = St)
				}
			}

			function m(t) {
				var e = t.originalEvent;
				return zt && 0 < e.touches.length ? (d = ot(), c = event.touches.length + 1, !0) : (V() && (I = c), E = ot(), b = it(), F() || !H() ? W(e, z = St) : v.triggerOnTouchEnd || 0 == v.triggerOnTouchEnd && z === kt ? (t.preventDefault(), W(e, z = Ct)) : !v.triggerOnTouchEnd && q() ? M(e, z = Ct, gt) : z === kt && W(e, z = St), Z(!1), null)
			}

			function g() {
				x = _ = l = E = I = 0, T = 1, Q(), Z(!1)
			}

			function A(t) {
				var e = t.originalEvent;
				v.triggerOnTouchLeave && W(e, z = D(Ct))
			}

			function P() {
				r.unbind(i, p), r.unbind(a, g), r.unbind(n, f), r.unbind(o, m), s && r.unbind(s, A), Z(!1)
			}

			function D(t) {
				var e = t,
					i = R(),
					n = H(),
					o = F();
				return !i || o ? e = St : !n || t != kt || v.triggerOnTouchEnd && !v.triggerOnTouchLeave ? !n && t == Ct && v.triggerOnTouchLeave && (e = St) : e = Ct, e
			}

			function W(t, e) {
				var i = void 0;
				return N() && B() || B() ? i = M(t, e, ft) : (j() && $() || $()) && !1 !== i && (i = M(t, e, mt)), J() && U() && !1 !== i ? i = M(t, e, vt) : b > v.longTapThreshold && w < xt && v.longTap && !1 !== i ? i = M(t, e, wt) : 1 !== I && zt || !(isNaN(w) || w < v.threshold) || !q() || !1 === i || (i = M(t, e, gt)), e === St && g(), e === Ct && (zt ? 0 == t.touches.length && g() : g()), i
			}

			function M(t, e, i) {
				var n = void 0;
				if (i == ft) {
					if (r.trigger("swipeStatus", [e, y || null, w || 0, b || 0, I, L]), v.swipeStatus && !1 === (n = v.swipeStatus.call(r, t, e, y || null, w || 0, b || 0, I, L))) return !1;
					if (e == Ct && N()) {
						if (r.trigger("swipe", [y, w, b, I, L]), v.swipe && !1 === (n = v.swipe.call(r, t, y, w, b, I, L))) return !1;
						switch (y) {
							case at:
								r.trigger("swipeLeft", [y, w, b, I, L]), v.swipeLeft && (n = v.swipeLeft.call(r, t, y, w, b, I, L));
								break;
							case rt:
								r.trigger("swipeRight", [y, w, b, I, L]), v.swipeRight && (n = v.swipeRight.call(r, t, y, w, b, I, L));
								break;
							case lt:
								r.trigger("swipeUp", [y, w, b, I, L]), v.swipeUp && (n = v.swipeUp.call(r, t, y, w, b, I, L));
								break;
							case dt:
								r.trigger("swipeDown", [y, w, b, I, L]), v.swipeDown && (n = v.swipeDown.call(r, t, y, w, b, I, L))
						}
					}
				}
				if (i == mt) {
					if (r.trigger("pinchStatus", [e, C || null, k || 0, b || 0, I, T, L]), v.pinchStatus && !1 === (n = v.pinchStatus.call(r, t, e, C || null, k || 0, b || 0, I, T, L))) return !1;
					if (e == Ct && j()) switch (C) {
						case ct:
							r.trigger("pinchIn", [C || null, k || 0, b || 0, I, T, L]), v.pinchIn && (n = v.pinchIn.call(r, t, C || null, k || 0, b || 0, I, T, L));
							break;
						case ht:
							r.trigger("pinchOut", [C || null, k || 0, b || 0, I, T, L]), v.pinchOut && (n = v.pinchOut.call(r, t, C || null, k || 0, b || 0, I, T, L))
					}
				}
				return i == gt ? e !== St && e !== Ct || (clearTimeout(u), clearTimeout(O), U() && !J() ? (h = ot(), u = setTimeout(st.proxy(function () {
					h = null, r.trigger("tap", [t.target]), v.tap && (n = v.tap.call(r, t, t.target))
				}, this), v.doubleTapThreshold)) : (h = null, r.trigger("tap", [t.target]), v.tap && (n = v.tap.call(r, t, t.target)))) : i == vt ? e !== St && e !== Ct || (clearTimeout(u), h = null, r.trigger("doubletap", [t.target]), v.doubleTap && (n = v.doubleTap.call(r, t, t.target))) : i == wt && (e !== St && e !== Ct || (clearTimeout(u), h = null, r.trigger("longtap", [t.target]), v.longTap && (n = v.longTap.call(r, t, t.target)))), n
			}

			function H() {
				var t = !0;
				return null !== v.threshold && (t = w >= v.threshold), t
			}

			function F() {
				var t = !1;
				return null !== v.cancelThreshold && null !== y && (t = tt(y) - w >= v.cancelThreshold), t
			}

			function R() {
				return !v.maxTimeThreshold || !(b >= v.maxTimeThreshold)
			}

			function j() {
				var t = X(),
					e = Y(),
					i = null === v.pinchThreshold || k >= v.pinchThreshold;
				return t && e && i
			}

			function $() {
				return !!(v.pinchStatus || v.pinchIn || v.pinchOut)
			}

			function N() {
				var t = R(),
					e = H(),
					i = X(),
					n = Y();
				return !F() && n && i && e && t
			}

			function B() {
				return !!(v.swipe || v.swipeStatus || v.swipeLeft || v.swipeRight || v.swipeUp || v.swipeDown)
			}

			function X() {
				return I === v.fingers || v.fingers === _t || !zt
			}

			function Y() {
				return 0 !== L[0].end.x
			}

			function q() {
				return !!v.tap
			}

			function U() {
				return !!v.doubleTap
			}

			function J() {
				if (null == h) return !1;
				var t = ot();
				return U() && t - h <= v.doubleTapThreshold
			}

			function Q() {
				c = d = 0
			}

			function V() {
				var t = !1;
				d && (ot() - d <= v.fingerReleaseThreshold && (t = !0));
				return t
			}

			function Z(t) {
				!0 === t ? (r.bind(n, f), r.bind(o, m), s && r.bind(s, A)) : (r.unbind(n, f, !1), r.unbind(o, m, !1), s && r.unbind(s, A, !1)), r.data(Et + "_intouch", !0 === t)
			}

			function G(t, e) {
				var i = void 0 !== e.identifier ? e.identifier : 0;
				return L[t].identifier = i, L[t].start.x = L[t].end.x = e.pageX || e.clientX, L[t].start.y = L[t].end.y = e.pageY || e.clientY, L[t]
			}

			function K(t) {
				var e = function (t) {
					for (var e = 0; e < L.length; e++)
						if (L[e].identifier == t) return L[e]
				}(void 0 !== t.identifier ? t.identifier : 0);
				return e.end.x = t.pageX || t.clientX, e.end.y = t.pageY || t.clientY, e
			}

			function tt(t) {
				if (S[t]) return S[t].distance
			}

			function et(t) {
				return {
					direction: t,
					distance: 0
				}
			}

			function it() {
				return E - l
			}

			function nt(t, e) {
				var i = Math.abs(t.x - e.x),
					n = Math.abs(t.y - e.y);
				return Math.round(Math.sqrt(i * i + n * n))
			}

			function ot() {
				return (new Date).getTime()
			}
			this.enable = function () {
				return r.bind(i, p), r.bind(a, g), r
			}, this.disable = function () {
				return P(), r
			}, this.destroy = function () {
				return P(), r.data(Et, null), r
			}, this.option = function (t, e) {
				if (void 0 !== v[t]) {
					if (void 0 === e) return v[t];
					v[t] = e
				} else st.error("Option " + t + " does not exist on jQuery.swipe.options");
				return null
			}
		}

		st.fn.swipe = function (t) {
			var e = st(this),
				i = e.data(Et);
			if (i && "string" == typeof t) {
				if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
				st.error("Method " + t + " does not exist on jQuery.swipe")
			} else if (!(i || "object" != typeof t && t)) return function (i) {
				!i || void 0 !== i.allowPageScroll || void 0 === i.swipe && void 0 === i.swipeStatus || (i.allowPageScroll = ut);
				void 0 !== i.click && void 0 === i.tap && (i.tap = i.click);
				i || (i = {});
				return i = st.extend({}, st.fn.swipe.defaults, i), this.each(function () {
					var t = st(this),
						e = t.data(Et);
					e || (e = new n(this, i), t.data(Et, e))
				})
			}.apply(this, arguments);
			return e
		}, st.fn.swipe.defaults = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: "label, button, input, select, textarea, a, .noSwipe"
		}, st.fn.swipe.phases = {
			PHASE_START: Tt,
			PHASE_MOVE: kt,
			PHASE_END: Ct,
			PHASE_CANCEL: St
		}, st.fn.swipe.directions = {
			LEFT: at,
			RIGHT: rt,
			UP: lt,
			DOWN: dt,
			IN: ct,
			OUT: ht
		}, st.fn.swipe.pageScroll = {
			NONE: ut,
			HORIZONTAL: yt,
			VERTICAL: bt,
			AUTO: pt
		}, st.fn.swipe.fingers = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			ALL: _t
		}
	}, "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], AR) : AR(jQuery), void 0 === console) {
	var console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function () {}
}
if (1 == window.tplogs) try {
	console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (t) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try {
	console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
} catch (t) {}! function (u, t) {
	"use strict";
	var e, i, p = u.GreenSockGlobals = u.GreenSockGlobals || u;
	if (!p.TweenLite) {
		var n, o, s, f, m, g = function (t) {
				var e, i = t.split("."),
					n = p;
				for (e = 0; i.length > e; e++) n[i[e]] = n = n[i[e]] || {};
				return n
			},
			h = g("com.greensock"),
			v = 1e-10,
			l = function (t) {
				var e, i = [],
					n = t.length;
				for (e = 0; e !== n; i.push(t[e++]));
				return i
			},
			w = function () {},
			y = (e = Object.prototype.toString, i = e.call([]), function (t) {
				return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
			}),
			b = {},
			_ = function (r, l, d, c) {
				this.sc = b[r] ? b[r].sc : [], (b[r] = this).gsClass = null, this.func = d;
				var h = [];
				this.check = function (t) {
					for (var e, i, n, o, s = l.length, a = s; - 1 < --s;)(e = b[l[s]] || new _(l[s], [])).gsClass ? (h[s] = e.gsClass, a--) : t && e.sc.push(this);
					if (0 === a && d)
						for (n = (i = ("com.greensock." + r).split(".")).pop(), o = g(i.join("."))[n] = this.gsClass = d.apply(d, h), c && (p[n] = o, "function" == typeof define && define.amd ? define((u.GreenSockAMDPath ? u.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
								return o
							}) : "TweenLite" === r && "undefined" != typeof module && module.exports && (module.exports = o)), s = 0; this.sc.length > s; s++) this.sc[s].check()
				}, this.check(!0)
			},
			a = u._gsDefine = function (t, e, i, n) {
				return new _(t, e, i, n)
			},
			x = h._class = function (t, e, i) {
				return e = e || function () {}, a(t, [], function () {
					return e
				}, i), e
			};
		a.globals = p;
		var r = [0, 0, 1, 1],
			T = [],
			c = x("easing.Ease", function (t, e, i, n) {
				this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? r.concat(e) : r
			}, !0),
			k = c.map = {},
			d = c.register = function (t, e, i, n) {
				for (var o, s, a, r, l = e.split(","), d = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --d;)
					for (s = l[d], o = n ? x("easing." + s, null, !0) : h.easing[s] || {}, a = c.length; - 1 < --a;) r = c[a], k[s + "." + r] = k[r + s] = o[r] = t.getRatio ? t : t[r] || new t
			};
		for ((s = c.prototype)._calcEnd = !1, s.getRatio = function (t) {
				if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
				var e = this._type,
					i = this._power,
					n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
				return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
			}, o = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --o;) s = n[o] + ",Power" + o, d(new c(null, null, 1, o), s, "easeOut", !0), d(new c(null, null, 2, o), s, "easeIn" + (0 === o ? ",easeNone" : "")), d(new c(null, null, 3, o), s, "easeInOut");
		k.linear = h.easing.Linear.easeIn, k.swing = h.easing.Quad.easeInOut;
		var C = x("events.EventDispatcher", function (t) {
			this._listeners = {}, this._eventTarget = t || this
		});
		(s = C.prototype).addEventListener = function (t, e, i, n, o) {
			o = o || 0;
			var s, a, r = this._listeners[t],
				l = 0;
			for (null == r && (this._listeners[t] = r = []), a = r.length; - 1 < --a;)(s = r[a]).c === e && s.s === i ? r.splice(a, 1) : 0 === l && o > s.pr && (l = a + 1);
			r.splice(l, 0, {
				c: e,
				s: i,
				up: n,
				pr: o
			}), this !== f || m || f.wake()
		}, s.removeEventListener = function (t, e) {
			var i, n = this._listeners[t];
			if (n)
				for (i = n.length; - 1 < --i;)
					if (n[i].c === e) return void n.splice(i, 1)
		}, s.dispatchEvent = function (t) {
			var e, i, n, o = this._listeners[t];
			if (o)
				for (e = o.length, i = this._eventTarget; - 1 < --e;)(n = o[e]) && (n.up ? n.c.call(n.s || i, {
					type: t,
					target: i
				}) : n.c.call(n.s || i))
		};
		var S = u.requestAnimationFrame,
			z = u.cancelAnimationFrame,
			I = Date.now || function () {
				return (new Date).getTime()
			},
			L = I();
		for (o = (n = ["ms", "moz", "webkit", "o"]).length; - 1 < --o && !S;) S = u[n[o] + "RequestAnimationFrame"], z = u[n[o] + "CancelAnimationFrame"] || u[n[o] + "CancelRequestAnimationFrame"];
		x("Ticker", function (t, e) {
			var o, s, a, r, l, d = this,
				c = I(),
				i = !1 !== e && S,
				h = 500,
				u = 33,
				p = function (t) {
					var e, i, n = I() - L;
					h < n && (c += n - u), L += n, d.time = (L - c) / 1e3, e = d.time - l, (!o || 0 < e || !0 === t) && (d.frame++, l += e + (r <= e ? .004 : r - e), i = !0), !0 !== t && (a = s(p)), i && d.dispatchEvent("tick")
				};
			C.call(d), d.time = d.frame = 0, d.tick = function () {
				p(!0)
			}, d.lagSmoothing = function (t, e) {
				h = t || 1e10, u = Math.min(e, h, 0)
			}, d.sleep = function () {
				null != a && (i && z ? z(a) : clearTimeout(a), s = w, a = null, d === f && (m = !1))
			}, d.wake = function () {
				null !== a ? d.sleep() : 10 < d.frame && (L = I() - h + 5), s = 0 === o ? w : i && S ? S : function (t) {
					return setTimeout(t, 0 | 1e3 * (l - d.time) + 1)
				}, d === f && (m = !0), p(2)
			}, d.fps = function (t) {
				return arguments.length ? (r = 1 / ((o = t) || 60), l = this.time + r, void d.wake()) : o
			}, d.useRAF = function (t) {
				return arguments.length ? (d.sleep(), i = t, void d.fps(o)) : i
			}, d.fps(t), setTimeout(function () {
				i && (!a || d.frame < 5) && d.useRAF(!1)
			}, 1500)
		}), (s = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
		var E = x("core.Animation", function (t, e) {
			if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, X) {
				m || f.wake();
				var i = this.vars.useFrames ? B : X;
				i.add(this, i._time), this.vars.paused && this.paused(!0)
			}
		});
		f = E.ticker = new h.Ticker, (s = E.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
		var O = function () {
			m && 2e3 < I() - L && f.wake(), setTimeout(O, 2e3)
		};
		O(), s.play = function (t, e) {
			return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
		}, s.pause = function (t, e) {
			return null != t && this.seek(t, e), this.paused(!0)
		}, s.resume = function (t, e) {
			return null != t && this.seek(t, e), this.paused(!1)
		}, s.seek = function (t, e) {
			return this.totalTime(Number(t), !1 !== e)
		}, s.restart = function (t, e) {
			return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
		}, s.reverse = function (t, e) {
			return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
		}, s.render = function () {}, s.invalidate = function () {
			return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
		}, s.isActive = function () {
			var t, e = this._timeline,
				i = this._startTime;
			return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
		}, s._enabled = function (t, e) {
			return m || f.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
		}, s._kill = function () {
			return this._enabled(!1, !1)
		}, s.kill = function (t, e) {
			return this._kill(t, e), this
		}, s._uncache = function (t) {
			for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
			return this
		}, s._swapSelfInParams = function (t) {
			for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
			return i
		}, s.eventCallback = function (t, e, i, n) {
			if ("on" === (t || "").substr(0, 2)) {
				var o = this.vars;
				if (1 === arguments.length) return o[t];
				null == e ? delete o[t] : (o[t] = e, o[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, o[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
			}
			return this
		}, s.delay = function (t) {
			return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
		}, s.duration = function (t) {
			return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
		}, s.totalDuration = function (t) {
			return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
		}, s.time = function (t, e) {
			return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
		}, s.totalTime = function (t, e, i) {
			if (m || f.wake(), !arguments.length) return this._totalTime;
			if (this._timeline) {
				if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
					this._dirty && this.totalDuration();
					var n = this._totalDuration,
						o = this._timeline;
					if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? n - t : t) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
						for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
				}
				this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), W.length && Y())
			}
			return this
		}, s.progress = s.totalProgress = function (t, e) {
			return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
		}, s.startTime = function (t) {
			return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
		}, s.endTime = function (t) {
			return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
		}, s.timeScale = function (t) {
			if (!arguments.length) return this._timeScale;
			if (t = t || v, this._timeline && this._timeline.smoothChildTiming) {
				var e = this._pauseTime,
					i = e || 0 === e ? e : this._timeline.totalTime();
				this._startTime = i - (i - this._startTime) * this._timeScale / t
			}
			return this._timeScale = t, this._uncache(!1)
		}, s.reversed = function (t) {
			return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
		}, s.paused = function (t) {
			if (!arguments.length) return this._paused;
			if (t != this._paused && this._timeline) {
				m || t || f.wake();
				var e = this._timeline,
					i = e.rawTime(),
					n = i - this._pauseTime;
				!t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
			}
			return this._gc && !t && this._enabled(!0, !1), this
		};
		var A = x("core.SimpleTimeline", function (t) {
			E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
		});
		(s = A.prototype = new E).constructor = A, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e) {
			var i, n;
			if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
				for (n = t._startTime; i && i._startTime > n;) i = i._prev;
			return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
		}, s._remove = function (t, e) {
			return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
		}, s.render = function (t, e, i) {
			var n, o = this._first;
			for (this._totalTime = this._time = this._rawPrevTime = t; o;) n = o._next, (o._active || t >= o._startTime && !o._paused) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (t - o._startTime) * o._timeScale, e, i) : o.render((t - o._startTime) * o._timeScale, e, i)), o = n
		}, s.rawTime = function () {
			return m || f.wake(), this._totalTime
		};
		var P = x("TweenLite", function (t, e, i) {
				if (E.call(this, e, i), this.render = P.prototype.render, null == t) throw "Cannot tween a null target.";
				this.target = t = "string" != typeof t ? t : P.selector(t) || t;
				var n, o, s, a = t.jquery || t.length && t !== u && t[0] && (t[0] === u || t[0].nodeType && t[0].style && !t.nodeType),
					r = this.vars.overwrite;
				if (this._overwrite = r = null == r ? N[P.defaultOverwrite] : "number" == typeof r ? r >> 0 : N[r], (a || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
					for (this._targets = s = l(t), this._propLookup = [], this._siblings = [], n = 0; s.length > n; n++)(o = s[n]) ? "string" != typeof o ? o.length && o !== u && o[0] && (o[0] === u || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(l(o))) : (this._siblings[n] = q(o, this, !1), 1 === r && 1 < this._siblings[n].length && J(o, this, null, 1, this._siblings[n])) : "string" == typeof (o = s[n--] = P.selector(o)) && s.splice(n + 1, 1) : s.splice(n--, 1);
				else this._propLookup = {}, this._siblings = q(t, this, !1), 1 === r && 1 < this._siblings.length && J(t, this, null, 1, this._siblings);
				(this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -v, this.render(-this._delay))
			}, !0),
			D = function (t) {
				return t && t.length && t !== u && t[0] && (t[0] === u || t[0].nodeType && t[0].style && !t.nodeType)
			};
		(s = P.prototype = new E).constructor = P, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, P.version = "1.14.2", P.defaultEase = s._ease = new c(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = f, P.autoSleep = !0, P.lagSmoothing = function (t, e) {
			f.lagSmoothing(t, e)
		}, P.selector = u.$ || u.jQuery || function (t) {
			var e = u.$ || u.jQuery;
			return e ? (P.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
		};
		var W = [],
			M = {},
			H = P._internals = {
				isArray: y,
				isSelector: D,
				lazyTweens: W
			},
			F = P._plugins = {},
			R = H.tweenLookup = {},
			j = 0,
			$ = H.reservedProps = {
				ease: 1,
				delay: 1,
				overwrite: 1,
				onComplete: 1,
				onCompleteParams: 1,
				onCompleteScope: 1,
				useFrames: 1,
				runBackwards: 1,
				startAt: 1,
				onUpdate: 1,
				onUpdateParams: 1,
				onUpdateScope: 1,
				onStart: 1,
				onStartParams: 1,
				onStartScope: 1,
				onReverseComplete: 1,
				onReverseCompleteParams: 1,
				onReverseCompleteScope: 1,
				onRepeat: 1,
				onRepeatParams: 1,
				onRepeatScope: 1,
				easeParams: 1,
				yoyo: 1,
				immediateRender: 1,
				repeat: 1,
				repeatDelay: 1,
				data: 1,
				paused: 1,
				reversed: 1,
				autoCSS: 1,
				lazy: 1,
				onOverwrite: 1
			},
			N = {
				none: 0,
				all: 1,
				auto: 2,
				concurrent: 3,
				allOnStart: 4,
				preexisting: 5,
				true: 1,
				false: 0
			},
			B = E._rootFramesTimeline = new A,
			X = E._rootTimeline = new A,
			Y = H.lazyRender = function () {
				var t, e = W.length;
				for (M = {}; - 1 < --e;)(t = W[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
				W.length = 0
			};
		X._startTime = f.time, B._startTime = f.frame, X._active = B._active = !0, setTimeout(Y, 1), E._updateRoot = P.render = function () {
			var t, e, i;
			if (W.length && Y(), X.render((f.time - X._startTime) * X._timeScale, !1, !1), B.render((f.frame - B._startTime) * B._timeScale, !1, !1), W.length && Y(), !(f.frame % 120)) {
				for (i in R) {
					for (t = (e = R[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
					0 === e.length && delete R[i]
				}
				if ((!(i = X._first) || i._paused) && P.autoSleep && !B._first && 1 === f._listeners.tick.length) {
					for (; i && i._paused;) i = i._next;
					i || f.sleep()
				}
			}
		}, f.addEventListener("tick", E._updateRoot);
		var q = function (t, e, i) {
				var n, o, s = t._gsTweenID;
				if (R[s || (t._gsTweenID = s = "t" + j++)] || (R[s] = {
						target: t,
						tweens: []
					}), e && ((n = R[s].tweens)[o = n.length] = e, i))
					for (; - 1 < --o;) n[o] === e && n.splice(o, 1);
				return R[s].tweens
			},
			U = function (t, e, i, n) {
				var o, s, a = t.vars.onOverwrite;
				return a && (o = a(t, e, i, n)), (a = P.onOverwrite) && (s = a(t, e, i, n)), !1 !== o && !1 !== s
			},
			J = function (t, e, i, n, o) {
				var s, a, r, l;
				if (1 === n || 4 <= n) {
					for (l = o.length, s = 0; s < l; s++)
						if ((r = o[s]) !== e) r._gc || U(r, e) && r._enabled(!1, !1) && (a = !0);
						else if (5 === n) break;
					return a
				}
				var d, c = e._startTime + v,
					h = [],
					u = 0,
					p = 0 === e._duration;
				for (s = o.length; - 1 < --s;)(r = o[s]) === e || r._gc || r._paused || (r._timeline !== e._timeline ? (d = d || Q(e, 0, p), 0 === Q(r, d, p) && (h[u++] = r)) : c >= r._startTime && r._startTime + r.totalDuration() / r._timeScale > c && ((p || !r._initted) && c - r._startTime <= 2e-10 || (h[u++] = r)));
				for (s = u; - 1 < --s;)
					if (r = h[s], 2 === n && r._kill(i, t, e) && (a = !0), 2 !== n || !r._firstPT && r._initted) {
						if (2 !== n && !U(r, e)) continue;
						r._enabled(!1, !1) && (a = !0)
					}
				return a
			},
			Q = function (t, e, i) {
				for (var n = t._timeline, o = n._timeScale, s = t._startTime; n._timeline;) {
					if (s += n._startTime, o *= n._timeScale, n._paused) return -100;
					n = n._timeline
				}
				return e < (s /= o) ? s - e : i && s === e || !t._initted && s - e < 2 * v ? v : (s += t.totalDuration() / t._timeScale / o) > e + v ? 0 : s - e - v
			};
		s._init = function () {
			var t, e, i, n, o, s = this.vars,
				a = this._overwrittenProps,
				r = this._duration,
				l = !!s.immediateRender,
				d = s.ease;
			if (s.startAt) {
				for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), o = {}, s.startAt) o[n] = s.startAt[n];
				if (o.overwrite = !1, o.immediateRender = !0, o.lazy = l && !1 !== s.lazy, o.startAt = o.delay = null, this._startAt = P.to(this.target, 0, o), l)
					if (0 < this._time) this._startAt = null;
					else if (0 !== r) return
			} else if (s.runBackwards && 0 !== r)
				if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
				else {
					for (n in 0 !== this._time && (l = !1), i = {}, s) $[n] && "autoCSS" !== n || (i[n] = s[n]);
					if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== s.lazy, i.immediateRender = l, this._startAt = P.to(this.target, 0, i), l) {
						if (0 === this._time) return
					} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
				}
			if (this._ease = d = d ? d instanceof c ? d : "function" == typeof d ? new c(d, s.easeParams) : k[d] || P.defaultEase : P.defaultEase, s.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
				for (t = this._targets.length; - 1 < --t;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
			else e = this._initProps(this.target, this._propLookup, this._siblings, a);
			if (e && P._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
				for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
			this._onUpdate = s.onUpdate, this._initted = !0
		}, s._initProps = function (t, e, i, n) {
			var o, s, a, r, l, d;
			if (null == t) return !1;
			for (o in M[t._gsTweenID] && Y(), this.vars.css || t.style && t !== u && t.nodeType && F.css && !1 !== this.vars.autoCSS && function (t, e) {
					var i, n = {};
					for (i in t) $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (n[i] = t[i], delete t[i]);
					t.css = n
				}(this.vars, t), this.vars) {
				if (d = this.vars[o], $[o]) d && (d instanceof Array || d.push && y(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[o] = d = this._swapSelfInParams(d, this));
				else if (F[o] && (r = new F[o])._onInitTween(t, this.vars[o], this)) {
					for (this._firstPT = l = {
							_next: this._firstPT,
							t: r,
							p: "setRatio",
							s: 0,
							c: 1,
							f: !0,
							n: o,
							pg: !0,
							pr: r._priority
						}, s = r._overwriteProps.length; - 1 < --s;) e[r._overwriteProps[s]] = this._firstPT;
					(r._priority || r._onInitAllProps) && (a = !0), (r._onDisable || r._onEnable) && (this._notifyPluginsOfEnabled = !0)
				} else this._firstPT = e[o] = l = {
					_next: this._firstPT,
					t: t,
					p: o,
					f: "function" == typeof t[o],
					n: o,
					pg: !1,
					pr: 0
				}, l.s = l.f ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(t[o]), l.c = "string" == typeof d && "=" === d.charAt(1) ? parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) - l.s || 0;
				l && l._next && (l._next._prev = l)
			}
			return n && this._kill(n, t) ? this._initProps(t, e, i, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && J(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (M[t._gsTweenID] = !0), a)
		}, s.render = function (t, e, i) {
			var n, o, s, a, r = this._time,
				l = this._duration,
				d = this._rawPrevTime;
			if (l <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, o = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || d < 0 || d === v) && d !== t && (i = !0, v < d && (o = "onReverseComplete")), this._rawPrevTime = a = !e || t || d === t ? t : v);
			else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === l && 0 < d && d !== v) && (o = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= d && (i = !0), this._rawPrevTime = a = !e || t || d === t ? t : v)), this._initted || (i = !0);
			else if (this._totalTime = this._time = t, this._easeType) {
				var c = t / l,
					h = this._easeType,
					u = this._easePower;
				(1 === h || 3 === h && .5 <= c) && (c = 1 - c), 3 === h && (c *= 2), 1 === u ? c *= c : 2 === u ? c *= c * c : 3 === u ? c *= c * c * c : 4 === u && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < .5 ? c / 2 : 1 - c / 2
			} else this.ratio = this._ease.getRatio(t / l);
			if (this._time !== r || i) {
				if (!this._initted) {
					if (this._init(), !this._initted || this._gc) return;
					if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = r, this._rawPrevTime = d, W.push(this), void(this._lazy = [t, e]);
					this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
				}
				for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== r && 0 <= t && (this._active = !0), 0 === r && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
				this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== r || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), o && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || T), 0 === l && this._rawPrevTime === v && a !== v && (this._rawPrevTime = 0))
			}
		}, s._kill = function (t, e, i) {
			if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
			var n, o, s, a, r, l, d, c, h;
			if (e = "string" != typeof e ? e || this._targets || this.target : P.selector(e) || e, (y(e) || D(e)) && "number" != typeof e[0])
				for (n = e.length; - 1 < --n;) this._kill(t, e[n]) && (l = !0);
			else {
				if (this._targets) {
					for (n = this._targets.length; - 1 < --n;)
						if (e === this._targets[n]) {
							r = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
							break
						}
				} else {
					if (e !== this.target) return !1;
					r = this._propLookup, o = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
				}
				if (r) {
					if (d = t || r, c = t !== o && "all" !== o && t !== r && ("object" != typeof t || !t._tempKill), i && (P.onOverwrite || this.vars.onOverwrite)) {
						for (s in d) r[s] && (h || (h = []), h.push(s));
						if (!U(this, i, e, h)) return !1
					}
					for (s in d)(a = r[s]) && (a.pg && a.t._kill(d) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete r[s]), c && (o[s] = 1);
					!this._firstPT && this._initted && this._enabled(!1, !1)
				}
			}
			return l
		}, s.invalidate = function () {
			return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(-this._delay)), this
		}, s._enabled = function (t, e) {
			if (m || f.wake(), t && this._gc) {
				var i, n = this._targets;
				if (n)
					for (i = n.length; - 1 < --i;) this._siblings[i] = q(n[i], this, !0);
				else this._siblings = q(this.target, this, !0)
			}
			return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && P._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
		}, P.to = function (t, e, i) {
			return new P(t, e, i)
		}, P.from = function (t, e, i) {
			return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new P(t, e, i)
		}, P.fromTo = function (t, e, i, n) {
			return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new P(t, e, n)
		}, P.delayedCall = function (t, e, i, n, o) {
			return new P(e, 0, {
				delay: t,
				onComplete: e,
				onCompleteParams: i,
				onCompleteScope: n,
				onReverseComplete: e,
				onReverseCompleteParams: i,
				onReverseCompleteScope: n,
				immediateRender: !1,
				useFrames: o,
				overwrite: 0
			})
		}, P.set = function (t, e) {
			return new P(t, 0, e)
		}, P.getTweensOf = function (t, e) {
			if (null == t) return [];
			var i, n, o, s;
			if (t = "string" != typeof t ? t : P.selector(t) || t, (y(t) || D(t)) && "number" != typeof t[0]) {
				for (i = t.length, n = []; - 1 < --i;) n = n.concat(P.getTweensOf(t[i], e));
				for (i = n.length; - 1 < --i;)
					for (s = n[i], o = i; - 1 < --o;) s === n[o] && n.splice(i, 1)
			} else
				for (i = (n = q(t).concat()).length; - 1 < --i;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
			return n
		}, P.killTweensOf = P.killDelayedCallsTo = function (t, e, i) {
			"object" == typeof e && (i = e, e = !1);
			for (var n = P.getTweensOf(t, e), o = n.length; - 1 < --o;) n[o]._kill(i, t)
		};
		var V = x("plugins.TweenPlugin", function (t, e) {
			this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
		}, !0);
		if (s = V.prototype, V.version = "1.10.1", V.API = 2, s._firstPT = null, s._addTween = function (t, e, i, n, o, s) {
				var a, r;
				return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = r = {
					_next: this._firstPT,
					t: t,
					p: e,
					s: i,
					c: a,
					f: "function" == typeof t[e],
					n: o || e,
					r: s
				}, r._next && (r._next._prev = r), r) : void 0
			}, s.setRatio = function (t) {
				for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
			}, s._kill = function (t) {
				var e, i = this._overwriteProps,
					n = this._firstPT;
				if (null != t[this._propName]) this._overwriteProps = [];
				else
					for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
				for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
				return !1
			}, s._roundProps = function (t, e) {
				for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
			}, P._onPluginEvent = function (t, e) {
				var i, n, o, s, a, r = e._firstPT;
				if ("_onInitAllProps" === t) {
					for (; r;) {
						for (a = r._next, n = o; n && n.pr > r.pr;) n = n._next;
						(r._prev = n ? n._prev : s) ? r._prev._next = r: o = r, (r._next = n) ? n._prev = r : s = r, r = a
					}
					r = e._firstPT = o
				}
				for (; r;) r.pg && "function" == typeof r.t[t] && r.t[t]() && (i = !0), r = r._next;
				return i
			}, V.activate = function (t) {
				for (var e = t.length; - 1 < --e;) t[e].API === V.API && (F[(new t[e])._propName] = t[e]);
				return !0
			}, a.plugin = function (t) {
				if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
				var e, i = t.propName,
					n = t.priority || 0,
					o = t.overwriteProps,
					s = {
						init: "_onInitTween",
						set: "setRatio",
						kill: "_kill",
						round: "_roundProps",
						initAll: "_onInitAllProps"
					},
					a = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
						V.call(this, i, n), this._overwriteProps = o || []
					}, !0 === t.global),
					r = a.prototype = new V(i);
				for (e in (r.constructor = a).API = t.API, s) "function" == typeof t[e] && (r[s[e]] = t[e]);
				return a.version = t.version, V.activate([a]), a
			}, n = u._gsQueue) {
			for (o = 0; n.length > o; o++) n[o]();
			for (s in b) b[s].func || u.console.log("GSAP encountered missing dependency: com.greensock." + s)
		}
		m = !1
	}
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (c, h, u) {
			var p = function (t) {
					h.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
					var e, i, n = this.vars;
					for (i in n) e = n[i], g(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
					g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
				},
				f = 1e-10,
				t = u._internals,
				m = t.isSelector,
				g = t.isArray,
				v = t.lazyTweens,
				w = t.lazyRender,
				y = [],
				a = _gsScope._gsDefine.globals,
				b = function (t) {
					var e, i = {};
					for (e in t) i[e] = t[e];
					return i
				},
				o = function (t, e, i, n) {
					var o = t._timeline._totalTime;
					(e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || y), this._forcingPlayhead && t._timeline.seek(o))
				},
				_ = function (t) {
					var e, i = [],
						n = t.length;
					for (e = 0; e !== n; i.push(t[e++]));
					return i
				},
				e = p.prototype = new h;
			return p.version = "1.14.2", e.constructor = p, e.kill()._gc = e._forcingPlayhead = !1, e.to = function (t, e, i, n) {
				var o = i.repeat && a.TweenMax || u;
				return e ? this.add(new o(t, e, i), n) : this.set(t, i, n)
			}, e.from = function (t, e, i, n) {
				return this.add((i.repeat && a.TweenMax || u).from(t, e, i), n)
			}, e.fromTo = function (t, e, i, n, o) {
				var s = n.repeat && a.TweenMax || u;
				return e ? this.add(s.fromTo(t, e, i, n), o) : this.set(t, n, o)
			}, e.staggerTo = function (t, e, i, n, o, s, a, r) {
				var l, d = new p({
					onComplete: s,
					onCompleteParams: a,
					onCompleteScope: r,
					smoothChildTiming: this.smoothChildTiming
				});
				for ("string" == typeof t && (t = u.selector(t) || t), m(t = t || []) && (t = _(t)), (n = n || 0) < 0 && ((t = _(t)).reverse(), n *= -1), l = 0; t.length > l; l++) i.startAt && (i.startAt = b(i.startAt)), d.to(t[l], e, b(i), l * n);
				return this.add(d, o)
			}, e.staggerFrom = function (t, e, i, n, o, s, a, r) {
				return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, o, s, a, r)
			}, e.staggerFromTo = function (t, e, i, n, o, s, a, r, l) {
				return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, o, s, a, r, l)
			}, e.call = function (t, e, i, n) {
				return this.add(u.delayedCall(0, t, e, i), n)
			}, e.set = function (t, e, i) {
				return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new u(t, 0, e), i)
			}, p.exportRoot = function (t, e) {
				null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
				var i, n, o = new p(t),
					s = o._timeline;
				for (null == e && (e = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, i = s._first; i;) n = i._next, e && i instanceof u && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = n;
				return s.add(o, 0), o
			}, e.add = function (t, e, i, n) {
				var o, s, a, r, l, d;
				if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof c)) {
					if (t instanceof Array || t && t.push && g(t)) {
						for (i = i || "normal", n = n || 0, o = e, s = t.length, a = 0; a < s; a++) g(r = t[a]) && (r = new p({
							tweens: r
						})), this.add(r, o), "string" != typeof r && "function" != typeof r && ("sequence" === i ? o = r._startTime + r.totalDuration() / r._timeScale : "start" === i && (r._startTime -= r.delay())), o += n;
						return this._uncache(!0)
					}
					if ("string" == typeof t) return this.addLabel(t, e);
					if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
					t = u.delayedCall(0, t)
				}
				if (h.prototype.add.call(this, t, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
					for (d = (l = this).rawTime() > t._startTime; l._timeline;) d && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
				return this
			}, e.remove = function (t) {
				if (t instanceof c) return this._remove(t, !1);
				if (t instanceof Array || t && t.push && g(t)) {
					for (var e = t.length; - 1 < --e;) this.remove(t[e]);
					return this
				}
				return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
			}, e._remove = function (t, e) {
				h.prototype._remove.call(this, t, e);
				var i = this._last;
				return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
			}, e.append = function (t, e) {
				return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
			}, e.insert = e.insertMultiple = function (t, e, i, n) {
				return this.add(t, e || 0, i, n)
			}, e.appendMultiple = function (t, e, i, n) {
				return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
			}, e.addLabel = function (t, e) {
				return this._labels[t] = this._parseTimeOrLabel(e), this
			}, e.addPause = function (t, e, i, n) {
				return this.call(o, ["{self}", e, i, n], this, t)
			}, e.removeLabel = function (t) {
				return delete this._labels[t], this
			}, e.getLabelTime = function (t) {
				return null != this._labels[t] ? this._labels[t] : -1
			}, e._parseTimeOrLabel = function (t, e, i, n) {
				var o;
				if (n instanceof c && n.timeline === this) this.remove(n);
				else if (n && (n instanceof Array || n.push && g(n)))
					for (o = n.length; - 1 < --o;) n[o] instanceof c && n[o].timeline === this && this.remove(n[o]);
				if ("string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, i);
				if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
				else {
					if (-1 === (o = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
					e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = 1 < o ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : this.duration()
				}
				return Number(t) + e
			}, e.seek = function (t, e) {
				return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
			}, e.stop = function () {
				return this.paused(!0)
			}, e.gotoAndPlay = function (t, e) {
				return this.play(t, e)
			}, e.gotoAndStop = function (t, e) {
				return this.pause(t, e)
			}, e.render = function (t, e, i) {
				this._gc && this._enabled(!0, !1);
				var n, o, s, a, r, l = this._dirty ? this.totalDuration() : this._totalDuration,
					d = this._time,
					c = this._startTime,
					h = this._timeScale,
					u = this._paused;
				if (l <= t ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === f) && this._rawPrevTime !== t && this._first && (r = !0, this._rawPrevTime > f && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : f, t = l + 1e-4) : t < 1e-7 ? (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== f && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (a = "onReverseComplete", o = this._reversed), t < 0 ? (this._active = !1, 0 <= this._rawPrevTime && this._first && (r = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : f, t = 0, this._initted || (r = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== d && this._first || i || r) {
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && 0 < t && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y)), this._time >= d)
						for (n = this._first; n && (s = n._next, !this._paused || u);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
					else
						for (n = this._last; n && (s = n._prev, !this._paused || u);)(n._active || d >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
					this._onUpdate && (e || (v.length && w(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y))), a && (this._gc || (c === this._startTime || h !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (o && (v.length && w(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || y)))
				}
			}, e._hasPausedChild = function () {
				for (var t = this._first; t;) {
					if (t._paused || t instanceof p && t._hasPausedChild()) return !0;
					t = t._next
				}
				return !1
			}, e.getChildren = function (t, e, i, n) {
				n = n || -9999999999;
				for (var o = [], s = this._first, a = 0; s;) n > s._startTime || (s instanceof u ? !1 !== e && (o[a++] = s) : (!1 !== i && (o[a++] = s), !1 !== t && (a = (o = o.concat(s.getChildren(!0, e, i))).length))), s = s._next;
				return o
			}, e.getTweensOf = function (t, e) {
				var i, n, o = this._gc,
					s = [],
					a = 0;
				for (o && this._enabled(!0, !0), n = (i = u.getTweensOf(t)).length; - 1 < --n;)(i[n].timeline === this || e && this._contains(i[n])) && (s[a++] = i[n]);
				return o && this._enabled(!1, !0), s
			}, e.recent = function () {
				return this._recent
			}, e._contains = function (t) {
				for (var e = t.timeline; e;) {
					if (e === this) return !0;
					e = e.timeline
				}
				return !1
			}, e.shiftChildren = function (t, e, i) {
				i = i || 0;
				for (var n, o = this._first, s = this._labels; o;) o._startTime >= i && (o._startTime += t), o = o._next;
				if (e)
					for (n in s) s[n] >= i && (s[n] += t);
				return this._uncache(!0)
			}, e._kill = function (t, e) {
				if (!t && !e) return this._enabled(!1, !1);
				for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, o = !1; - 1 < --n;) i[n]._kill(t, e) && (o = !0);
				return o
			}, e.clear = function (t) {
				var e = this.getChildren(!1, !0, !0),
					i = e.length;
				for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
				return !1 !== t && (this._labels = {}), this._uncache(!0)
			}, e.invalidate = function () {
				for (var t = this._first; t;) t.invalidate(), t = t._next;
				return c.prototype.invalidate.call(this)
			}, e._enabled = function (t, e) {
				if (t === this._gc)
					for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
				return h.prototype._enabled.call(this, t, e)
			}, e.totalTime = function () {
				this._forcingPlayhead = !0;
				var t = c.prototype.totalTime.apply(this, arguments);
				return this._forcingPlayhead = !1, t
			}, e.duration = function (t) {
				return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
			}, e.totalDuration = function (t) {
				if (arguments.length) return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
				if (this._dirty) {
					for (var e, i, n = 0, o = this._last, s = 999999999999; o;) e = o._prev, o._dirty && o.totalDuration(), o._startTime > s && this._sortChildren && !o._paused ? this.add(o, o._startTime - o._delay) : s = o._startTime, o._startTime < 0 && !o._paused && (n -= o._startTime, this._timeline.smoothChildTiming && (this._startTime += o._startTime / this._timeScale), this.shiftChildren(-o._startTime, !1, -9999999999), s = 0), n < (i = o._startTime + o._totalDuration / o._timeScale) && (n = i), o = e;
					this._duration = this._totalDuration = n, this._dirty = !1
				}
				return this._totalDuration
			}, e.usesFrames = function () {
				for (var t = this._timeline; t._timeline;) t = t._timeline;
				return t === c._rootFramesTimeline
			}, e.rawTime = function () {
				return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
			}, p
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (t) {
		"use strict";
		var e = function () {
			return (_gsScope.GreenSockGlobals || _gsScope).TimelineLite
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
	}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
	"use strict";
	_gsScope._gsDefine("easing.Back", ["easing.Ease"], function (g) {
		var e, i, t, n = _gsScope.GreenSockGlobals || _gsScope,
			o = n.com.greensock,
			s = 2 * Math.PI,
			a = Math.PI / 2,
			r = o._class,
			l = function (t, e) {
				var i = r("easing." + t, function () {}, !0),
					n = i.prototype = new g;
				return n.constructor = i, n.getRatio = e, i
			},
			d = g.register || function () {},
			c = function (t, e, i, n) {
				var o = r("easing." + t, {
					easeOut: new e,
					easeIn: new i,
					easeInOut: new n
				}, !0);
				return d(o, t), o
			},
			v = function (t, e, i) {
				this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
			},
			h = function (t, e) {
				var i = r("easing." + t, function (t) {
						this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
					}, !0),
					n = i.prototype = new g;
				return n.constructor = i, n.getRatio = e, n.config = function (t) {
					return new i(t)
				}, i
			},
			u = c("Back", h("BackOut", function (t) {
				return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
			}), h("BackIn", function (t) {
				return t * t * ((this._p1 + 1) * t - this._p1)
			}), h("BackInOut", function (t) {
				return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
			})),
			p = r("easing.SlowMo", function (t, e, i) {
				e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
			}, !0),
			f = p.prototype = new g;
		return f.constructor = p, f.getRatio = function (t) {
			var e = t + (.5 - t) * this._p;
			return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
		}, p.ease = new p(.7, .7), f.config = p.config = function (t, e, i) {
			return new p(t, e, i)
		}, (f = (e = r("easing.SteppedEase", function (t) {
			t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
		}, !0)).prototype = new g).constructor = e, f.getRatio = function (t) {
			return t < 0 ? t = 0 : 1 <= t && (t = .999999999), (this._p2 * t >> 0) * this._p1
		}, f.config = e.config = function (t) {
			return new e(t)
		}, (f = (i = r("easing.RoughEase", function (t) {
			for (var e, i, n, o, s, a, r = (t = t || {}).taper || "none", l = [], d = 0, c = 0 | (t.points || 20), h = c, u = !1 !== t.randomize, p = !0 === t.clamp, f = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --h;) e = u ? Math.random() : 1 / c * h, i = f ? f.getRatio(e) : e, n = "none" === r ? m : "out" === r ? (o = 1 - e) * o * m : "in" === r ? e * e * m : .5 * (o = e < .5 ? 2 * e : 2 * (1 - e)) * o * m, u ? i += Math.random() * n - .5 * n : h % 2 ? i += .5 * n : i -= .5 * n, p && (1 < i ? i = 1 : i < 0 && (i = 0)), l[d++] = {
				x: e,
				y: i
			};
			for (l.sort(function (t, e) {
					return t.x - e.x
				}), a = new v(1, 1, null), h = c; - 1 < --h;) s = l[h], a = new v(s.x, s.y, a);
			this._prev = new v(0, 0, 0 !== a.t ? a : a.next)
		}, !0)).prototype = new g).constructor = i, f.getRatio = function (t) {
			var e = this._prev;
			if (t > e.t) {
				for (; e.next && t >= e.t;) e = e.next;
				e = e.prev
			} else
				for (; e.prev && e.t >= t;) e = e.prev;
			return (this._prev = e).v + (t - e.t) / e.gap * e.c
		}, f.config = function (t) {
			return new i(t)
		}, i.ease = new i, c("Bounce", l("BounceOut", function (t) {
			return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		}), l("BounceIn", function (t) {
			return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
		}), l("BounceInOut", function (t) {
			var e = t < .5;
			return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
		})), c("Circ", l("CircOut", function (t) {
			return Math.sqrt(1 - (t -= 1) * t)
		}), l("CircIn", function (t) {
			return -(Math.sqrt(1 - t * t) - 1)
		}), l("CircInOut", function (t) {
			return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		})), c("Elastic", (t = function (t, e, i) {
			var n = r("easing." + t, function (t, e) {
					this._p1 = t || 1, this._p2 = e || i, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
				}, !0),
				o = n.prototype = new g;
			return o.constructor = n, o.getRatio = e, o.config = function (t, e) {
				return new n(t, e)
			}, n
		})("ElasticOut", function (t) {
			return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
		}, .3), t("ElasticIn", function (t) {
			return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2)
		}, .3), t("ElasticInOut", function (t) {
			return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
		}, .45)), c("Expo", l("ExpoOut", function (t) {
			return 1 - Math.pow(2, -10 * t)
		}), l("ExpoIn", function (t) {
			return Math.pow(2, 10 * (t - 1)) - .001
		}), l("ExpoInOut", function (t) {
			return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
		})), c("Sine", l("SineOut", function (t) {
			return Math.sin(t * a)
		}), l("SineIn", function (t) {
			return 1 - Math.cos(t * a)
		}), l("SineInOut", function (t) {
			return -.5 * (Math.cos(Math.PI * t) - 1)
		})), r("easing.EaseLookup", {
			find: function (t) {
				return g.map[t]
			}
		}, !0), d(n.SlowMo, "SlowMo", "ease,"), d(i, "RoughEase", "ease,"), d(e, "SteppedEase", "ease,"), u
	}, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (s, u) {
			var f, T, G, p, K = function () {
					s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = K.prototype.setRatio
				},
				m = {},
				t = K.prototype = new s("css");
			(t.constructor = K).version = "1.14.2", K.API = 2, K.defaultTransformPerspective = 0, K.defaultSkewType = "compensated", t = "px", K.suffixMap = {
				top: t,
				right: t,
				bottom: t,
				left: t,
				width: t,
				height: t,
				fontSize: t,
				padding: t,
				margin: t,
				perspective: t,
				lineHeight: ""
			};
			var S, g, v, P, w, k, e, i, n, z = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
				I = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
				y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
				c = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,
				C = /(?:\d|\-|\+|=|#|\.)*/g,
				L = /opacity *= *([^)]*)/i,
				b = /opacity:([^;]*)/i,
				a = /alpha\(opacity *=.+?\)/i,
				E = /^(rgb|hsl)/,
				r = /([A-Z])/g,
				l = /-([a-z])/gi,
				_ = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
				d = function (t, e) {
					return e.toUpperCase()
				},
				x = /(?:Left|Right|Width)/i,
				tt = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
				O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
				A = /,(?=[^\)]*(?:\(|$))/gi,
				et = Math.PI / 180,
				it = 180 / Math.PI,
				D = {},
				W = document,
				M = W.createElement("div"),
				H = W.createElement("img"),
				o = K._internals = {
					_specialProps: m
				},
				h = navigator.userAgent,
				F = (i = h.indexOf("Android"), n = W.createElement("div"), v = -1 !== h.indexOf("Safari") && -1 === h.indexOf("Chrome") && (-1 === i || 3 < Number(h.substr(i + 8, 1))), w = v && Number(h.substr(h.indexOf("Version/") + 8, 1)) < 6, P = -1 !== h.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(h) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(h)) && (k = parseFloat(RegExp.$1)), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", !!(e = n.getElementsByTagName("a")[0]) && /^0.55/.test(e.style.opacity)),
				R = function (t) {
					return L.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
				},
				j = function (t) {
					window.console && console.log(t)
				},
				$ = "",
				N = "",
				B = function (t, e) {
					var i, n, o = (e = e || M).style;
					if (void 0 !== o[t]) return t;
					for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === o[i[n] + t];);
					return 0 <= n ? ($ = "-" + (N = 3 === n ? "ms" : i[n]).toLowerCase() + "-", N + t) : null
				},
				X = W.defaultView ? W.defaultView.getComputedStyle : function () {},
				nt = K.getStyle = function (t, e, i, n, o) {
					var s;
					return F || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || X(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(r, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == o || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : o) : R(t)
				},
				Y = o.convertToPixels = function (t, e, i, n, o) {
					if ("px" === n || !n) return i;
					if ("auto" === n || !i) return 0;
					var s, a, r, l = x.test(e),
						d = t,
						c = M.style,
						h = i < 0;
					if (h && (i = -i), "%" === n && -1 !== e.indexOf("border")) s = i / 100 * (l ? t.clientWidth : t.clientHeight);
					else {
						if (c.cssText = "border:0 solid red;position:" + nt(t, "position") + ";line-height:0;", "%" !== n && d.appendChild) c[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
						else {
							if (a = (d = t.parentNode || W.body)._gsCache, r = u.ticker.frame, a && l && a.time === r) return a.width * i / 100;
							c[l ? "width" : "height"] = i + n
						}
						d.appendChild(M), s = parseFloat(M[l ? "offsetWidth" : "offsetHeight"]), d.removeChild(M), l && "%" === n && !1 !== K.cacheWidths && ((a = d._gsCache = d._gsCache || {}).time = r, a.width = s / i * 100), 0 !== s || o || (s = Y(t, e, i, n, !0))
					}
					return h ? -s : s
				},
				q = o.calculateOffset = function (t, e, i) {
					if ("absolute" !== nt(t, "position", i)) return 0;
					var n = "left" === e ? "Left" : "Top",
						o = nt(t, "margin" + n, i);
					return t["offset" + n] - (Y(t, e, parseFloat(o), o.replace(C, "")) || 0)
				},
				U = function (t, e) {
					var i, n, o = {};
					if (e = e || X(t, null))
						if (i = e.length)
							for (; - 1 < --i;) o[e[i].replace(l, d)] = e.getPropertyValue(e[i]);
						else
							for (i in e) o[i] = e[i];
					else if (e = t.currentStyle || t.style)
						for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(l, d)] = e[i]);
					return F || (o.opacity = R(t)), n = Ht(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Et && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
				},
				J = function (t, e, i, n, o) {
					var s, a, r, l = {},
						d = t.style;
					for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || o && o[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(c, "") ? s : 0 : q(t, a), void 0 !== d[a] && (r = new ft(d, a, d[a], r)));
					if (n)
						for (a in n) "className" !== a && (l[a] = n[a]);
					return {
						difs: l,
						firstMPT: r
					}
				},
				Q = {
					width: ["Left", "Right"],
					height: ["Top", "Bottom"]
				},
				V = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
				Z = function (t, e, i) {
					var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
						o = Q[e],
						s = o.length;
					for (i = i || X(t, null); - 1 < --s;) n -= parseFloat(nt(t, "padding" + o[s], i, !0)) || 0, n -= parseFloat(nt(t, "border" + o[s] + "Width", i, !0)) || 0;
					return n
				},
				ot = function (t, e) {
					(null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
					var i = t.split(" "),
						n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
						o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
					return null == o ? o = "0" : "center" === o && (o = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(n.replace(c, "")), e.oy = parseFloat(o.replace(c, ""))), n + " " + o + (2 < i.length ? " " + i[2] : "")
				},
				st = function (t, e) {
					return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
				},
				at = function (t, e) {
					return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
				},
				rt = function (t, e, i, n) {
					var o, s, a, r;
					return (r = null == t ? e : "number" == typeof t ? t : (o = 360, s = t.split("_"), a = Number(s[0].replace(c, "")) * (-1 === t.indexOf("rad") ? 1 : it) - ("=" === t.charAt(1) ? 0 : e), s.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && ((a %= o) !== a % 180 && (a = a < 0 ? a + o : a - o)), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % o - (0 | a / o) * o : -1 !== t.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % o - (0 | a / o) * o)), e + a)) < 1e-6 && -1e-6 < r && (r = 0), r
				},
				lt = {
					aqua: [0, 255, 255],
					lime: [0, 255, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, 255],
					navy: [0, 0, 128],
					white: [255, 255, 255],
					fuchsia: [255, 0, 255],
					olive: [128, 128, 0],
					yellow: [255, 255, 0],
					orange: [255, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [255, 0, 0],
					pink: [255, 192, 203],
					cyan: [0, 255, 255],
					transparent: [255, 255, 255, 0]
				},
				dt = function (t, e, i) {
					return 0 | 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + 6 * (i - e) * t : t < .5 ? i : 3 * t < 2 ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
				},
				ct = K.parseColor = function (t) {
					var e, i, n, o, s, a;
					return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), lt[t] ? lt[t] : "#" === t.charAt(0) ? (4 === t.length && (t = "#" + (e = t.charAt(1)) + e + (i = t.charAt(2)) + i + (n = t.charAt(3)) + n), [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t]) : ("hsl" === t.substr(0, 3) ? (t = t.match(z), o = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, e = 2 * (a = Number(t[2]) / 100) - (i = a <= .5 ? a * (s + 1) : a + s - a * s), 3 < t.length && (t[3] = Number(t[3])), t[0] = dt(o + 1 / 3, e, i), t[1] = dt(o, e, i), t[2] = dt(o - 1 / 3, e, i)) : ((t = t.match(z) || lt.transparent)[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), 3 < t.length && (t[3] = Number(t[3]))), t)) : lt.black
				},
				ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
			for (t in lt) ht += "|" + t + "\\b";
			ht = RegExp(ht + ")", "gi");
			var ut = function (t, e, s, a) {
					if (null == t) return function (t) {
						return t
					};
					var r, l = e ? (t.match(ht) || [""])[0] : "",
						d = t.split(l).join("").match(y) || [],
						c = t.substr(0, t.indexOf(d[0])),
						h = ")" === t.charAt(t.length - 1) ? ")" : "",
						u = -1 !== t.indexOf(" ") ? " " : ",",
						p = d.length,
						f = 0 < p ? d[0].replace(z, "") : "";
					return p ? r = e ? function (t) {
						var e, i, n, o;
						if ("number" == typeof t) t += f;
						else if (a && A.test(t)) {
							for (o = t.replace(A, "|").split("|"), n = 0; o.length > n; n++) o[n] = r(o[n]);
							return o.join(",")
						}
						if (e = (t.match(ht) || [l])[0], n = (i = t.split(e).join("").match(y) || []).length, p > n--)
							for (; p > ++n;) i[n] = s ? i[0 | (n - 1) / 2] : d[n];
						return c + i.join(u) + u + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
					} : function (t) {
						var e, i, n;
						if ("number" == typeof t) t += f;
						else if (a && A.test(t)) {
							for (i = t.replace(A, "|").split("|"), n = 0; i.length > n; n++) i[n] = r(i[n]);
							return i.join(",")
						}
						if (n = (e = t.match(y) || []).length, p > n--)
							for (; p > ++n;) e[n] = s ? e[0 | (n - 1) / 2] : d[n];
						return c + e.join(u) + h
					} : function (t) {
						return t
					}
				},
				pt = function (d) {
					return d = d.split(","),
						function (t, e, i, n, o, s, a) {
							var r, l = (e + "").split(" ");
							for (a = {}, r = 0; r < 4; r++) a[d[r]] = l[r] = l[r] || l[(r - 1) / 2 >> 0];
							return n.parse(t, a, o, s)
						}
				},
				ft = (o._setPluginRatio = function (t) {
					this.plugin.setRatio(t);
					for (var e, i, n, o, s = this.data, a = s.proxy, r = s.firstMPT; r;) e = a[r.v], r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.t[r.p] = e, r = r._next;
					if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t)
						for (r = s.firstMPT; r;) {
							if ((i = r.t).type) {
								if (1 === i.type) {
									for (o = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) o += i["xn" + n] + i["xs" + (n + 1)];
									i.e = o
								}
							} else i.e = i.s + i.xs0;
							r = r._next
						}
				}, function (t, e, i, n, o) {
					this.t = t, this.p = e, this.v = i, this.r = o, n && ((n._prev = this)._next = n)
				}),
				mt = (o._parseToProxy = function (t, e, i, n, o, s) {
					var a, r, l, d, c, h = n,
						u = {},
						p = {},
						f = i._transform,
						m = D;
					for (i._transform = null, D = e, n = c = i.parse(t, e, n, o), D = m, s && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
						if (n.type <= 1 && (p[r = n.p] = n.s + n.c, u[r] = n.s, s || (d = new ft(n, "s", r, d, n.r), n.c = 0), 1 === n.type))
							for (a = n.l; 0 < --a;) l = "xn" + a, p[r = n.p + "_" + l] = n.data[l], u[r] = n[l], s || (d = new ft(n, l, r, d, n.rxp[l]));
						n = n._next
					}
					return {
						proxy: u,
						end: p,
						firstMPT: d,
						pt: c
					}
				}, o.CSSPropTween = function (t, e, i, n, o, s, a, r, l, d, c) {
					this.t = t, this.p = e, this.s = i, this.c = n, this.n = a || e, t instanceof mt || p.push(this.n), this.r = r, this.type = s || 0, l && (this.pr = l, f = !0), this.b = void 0 === d ? i : d, this.e = void 0 === c ? i + n : c, o && ((this._next = o)._prev = this)
				}),
				gt = K.parseComplex = function (t, e, i, n, o, s, a, r, l, d) {
					a = new mt(t, e, 0, 0, a, d ? 2 : 1, null, !1, r, i = i || s || "", n), n += "";
					var c, h, u, p, f, m, g, v, w, y, b, _, x = i.split(", ").join(",").split(" "),
						T = n.split(", ").join(",").split(" "),
						k = x.length,
						C = !1 !== S;
					for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (x = x.join(" ").replace(A, ", ").split(" "), T = T.join(" ").replace(A, ", ").split(" "), k = x.length), k !== T.length && (k = (x = (s || "").split(" ")).length), a.plugin = l, a.setRatio = d, c = 0; c < k; c++)
						if (p = x[c], f = T[c], (v = parseFloat(p)) || 0 === v) a.appendXtra("", v, st(f, v), f.replace(I, ""), C && -1 !== f.indexOf("px"), !0);
						else if (o && ("#" === p.charAt(0) || lt[p] || E.test(p))) _ = "," === f.charAt(f.length - 1) ? ")," : ")", p = ct(p), f = ct(f), (w = 6 < p.length + f.length) && !F && 0 === f[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(T[c]).join("transparent")) : (F || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], w ? "," : _, !0), w && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, _, !1)));
					else if (m = p.match(z)) {
						if (!(g = f.match(I)) || g.length !== m.length) return a;
						for (h = u = 0; m.length > h; h++) b = m[h], y = p.indexOf(b, u), a.appendXtra(p.substr(u, y - u), Number(b), st(g[h], b), "", C && "px" === p.substr(y + b.length, 2), 0 === h), u = y + b.length;
						a["xs" + a.l] += p.substr(u)
					} else a["xs" + a.l] += a.l ? " " + p : p;
					if (-1 !== n.indexOf("=") && a.data) {
						for (_ = a.xs0 + a.data.s, c = 1; a.l > c; c++) _ += a["xs" + c] + a.data["xn" + c];
						a.e = _ + a["xs" + c]
					}
					return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
				},
				vt = 9;
			for ((t = mt.prototype).l = t.pr = 0; 0 < --vt;) t["xn" + vt] = 0, t["xs" + vt] = "";
			t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, i, n, o, s) {
				var a = this,
					r = a.l;
				return a["xs" + r] += s && r ? " " + t : t || "", i || 0 === r || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", 0 < r ? (a.data["xn" + r] = e + i, a.rxp["xn" + r] = o, a["xn" + r] = e, a.plugin || (a.xfirst = new mt(a, "xn" + r, e, i, a.xfirst || a, 0, a.n, o, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
					s: e + i
				}, a.rxp = {}, a.s = e, a.c = i, a.r = o)) : a["xs" + r] += e + (n || ""), a
			};
			var wt = function (t, e) {
					e = e || {}, this.p = e.prefix && B(t) || t, m[t] = m[this.p] = this, this.format = e.formatter || ut(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
				},
				yt = o._registerComplexSpecialProp = function (t, e, i) {
					"object" != typeof e && (e = {
						parser: i
					});
					var n, o = t.split(","),
						s = e.defaultValue;
					for (i = i || [s], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new wt(o[n], e)
				},
				bt = function (t) {
					if (!m[t]) {
						var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
						yt(t, {
							parser: function (t, e, i, n, o, s, a) {
								var r = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[l];
								return r ? (r._cssRegister(), m[i].parse(t, e, i, n, o, s, a)) : (j("Error: " + l + " js file not loaded."), o)
							}
						})
					}
				};
			(t = wt.prototype).parseComplex = function (t, e, i, n, o, s) {
				var a, r, l, d, c, h = this.keyword;
				if (this.multi && (A.test(i) || A.test(e) ? (r = e.replace(A, "|").split("|"), l = i.replace(A, "|").split("|")) : h && (r = [e], l = [i])), l) {
					for (d = l.length > r.length ? l.length : r.length, a = 0; a < d; a++) e = r[a] = r[a] || this.dflt, i = l[a] = l[a] || this.dflt, h && (e.indexOf(h) !== (c = i.indexOf(h)) && ((i = -1 === c ? l : r)[a] += " " + h));
					e = r.join(", "), i = l.join(", ")
				}
				return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, o, s)
			}, t.parse = function (t, e, i, n, o, s) {
				return this.parseComplex(t.style, this.format(nt(t, this.p, G, !1, this.dflt)), this.format(e), o, s)
			}, K.registerSpecialProp = function (t, r, l) {
				yt(t, {
					parser: function (t, e, i, n, o, s) {
						var a = new mt(t, i, 0, 0, o, 2, i, !1, l);
						return a.plugin = s, a.setRatio = r(t, e, n._tween, i), a
					},
					priority: l
				})
			};
			var _t, xt, Tt, kt, Ct, St = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
				zt = B("transform"),
				It = $ + "transform",
				Lt = B("transformOrigin"),
				Et = null !== B("perspective"),
				Ot = o.Transform = function () {
					this.skewY = 0
				},
				At = window.SVGElement,
				Pt = function (t, e, i) {
					var n, o = W.createElementNS("http://www.w3.org/2000/svg", t),
						s = /([a-z])([A-Z])/g;
					for (n in i) o.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
					return e.appendChild(o), o
				},
				Dt = document.documentElement,
				Wt = (Ct = k || /Android/i.test(h) && !window.chrome, W.createElementNS && !Ct && (xt = Pt("svg", Dt), kt = (Tt = Pt("rect", xt, {
					width: 100,
					height: 50,
					x: 100
				})).getBoundingClientRect().left, Tt.style[Lt] = "50% 50%", Tt.style[zt] = "scale(0.5,0.5)", Ct = kt === Tt.getBoundingClientRect().left, Dt.removeChild(xt)), Ct),
				Mt = function (t, e, i) {
					var n = t.getBBox();
					e = ot(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
				},
				Ht = o.getTransform = function (t, e, i, n) {
					if (t._gsTransform && i && !n) return t._gsTransform;
					var o, s, a, r, l, d, c, h, u, p, f, m, g, v = i && t._gsTransform || new Ot,
						w = v.scaleX < 0,
						y = 179.99,
						b = y * et,
						_ = Et && (parseFloat(nt(t, Lt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin) || 0,
						x = parseFloat(K.defaultTransformPerspective) || 0;
					if (zt ? o = nt(t, It, e, !0) : t.currentStyle && (o = (o = t.currentStyle.filter.match(tt)) && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), o && "none" !== o && "matrix(1, 0, 0, 1, 0, 0)" !== o) {
						for (a = (s = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length; - 1 < --a;) r = Number(s[a]), s[a] = (l = r - (r |= 0)) ? (0 | 1e5 * l + (l < 0 ? -.5 : .5)) / 1e5 + r : r;
						if (16 === s.length) {
							var T = s[8],
								k = s[9],
								C = s[10],
								S = s[12],
								z = s[13],
								I = s[14];
							if (v.zOrigin && (S = T * (I = -v.zOrigin) - s[12], z = k * I - s[13], I = C * I + v.zOrigin - s[14]), !i || n || null == v.rotationX) {
								var L, E, O, A, P, D, W, M = s[0],
									H = s[1],
									F = s[2],
									R = s[3],
									j = s[4],
									$ = s[5],
									N = s[6],
									B = s[7],
									X = s[11],
									Y = Math.atan2(N, C),
									q = Y < -b || b < Y;
								v.rotationX = Y * it, Y && (L = j * (A = Math.cos(-Y)) + T * (P = Math.sin(-Y)), E = $ * A + k * P, O = N * A + C * P, T = j * -P + T * A, k = $ * -P + k * A, C = N * -P + C * A, X = B * -P + X * A, j = L, $ = E, N = O), Y = Math.atan2(T, M), v.rotationY = Y * it, Y && (D = Y < -b || b < Y, E = H * (A = Math.cos(-Y)) - k * (P = Math.sin(-Y)), O = F * A - C * P, k = H * P + k * A, C = F * P + C * A, X = R * P + X * A, M = L = M * A - T * P, H = E, F = O), Y = Math.atan2(H, $), v.rotation = Y * it, Y && (W = Y < -b || b < Y, M = M * (A = Math.cos(-Y)) + j * (P = Math.sin(-Y)), E = H * A + $ * P, $ = H * -P + $ * A, N = F * -P + N * A, H = E), W && q ? v.rotation = v.rotationX = 0 : W && D ? v.rotation = v.rotationY = 0 : D && q && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | 1e5 * Math.sqrt(M * M + H * H) + .5) / 1e5, v.scaleY = (0 | 1e5 * Math.sqrt($ * $ + k * k) + .5) / 1e5, v.scaleZ = (0 | 1e5 * Math.sqrt(N * N + C * C) + .5) / 1e5, v.skewX = 0, v.perspective = X ? 1 / (X < 0 ? -X : X) : 0, v.x = S, v.y = z, v.z = I
							}
						} else if (!(Et && !n && s.length && v.x === s[4] && v.y === s[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === nt(t, "display", e))) {
							var U = 6 <= s.length,
								J = U ? s[0] : 1,
								Q = s[1] || 0,
								V = s[2] || 0,
								Z = U ? s[3] : 1;
							v.x = s[4] || 0, v.y = s[5] || 0, d = Math.sqrt(J * J + Q * Q), c = Math.sqrt(Z * Z + V * V), h = J || Q ? Math.atan2(Q, J) * it : v.rotation || 0, u = V || Z ? Math.atan2(V, Z) * it + h : v.skewX || 0, p = d - Math.abs(v.scaleX || 0), f = c - Math.abs(v.scaleY || 0), 90 < Math.abs(u) && Math.abs(u) < 270 && (w ? (d *= -1, u += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (c *= -1, u += u <= 0 ? 180 : -180)), m = (h - v.rotation) % 180, g = (u - v.skewX) % 180, (void 0 === v.skewX || 2e-5 < p || p < -2e-5 || 2e-5 < f || f < -2e-5 || -y < m && m < y && !1 | 1e5 * m || -y < g && g < y && !1 | 1e5 * g) && (v.scaleX = d, v.scaleY = c, v.rotation = h, v.skewX = u), Et && (v.rotationX = v.rotationY = v.z = 0, v.perspective = x, v.scaleZ = 1)
						}
						for (a in v.zOrigin = _, v) v[a] < 2e-5 && -2e-5 < v[a] && (v[a] = 0)
					} else v = {
						x: 0,
						y: 0,
						z: 0,
						scaleX: 1,
						scaleY: 1,
						scaleZ: 1,
						skewX: 0,
						skewY: 0,
						perspective: x,
						rotation: 0,
						rotationX: 0,
						rotationY: 0,
						zOrigin: 0
					};
					return i && (t._gsTransform = v), v.svg = At && t instanceof At && t.parentNode instanceof At, v.svg && (Mt(t, nt(t, Lt, G, !1, "50% 50%") + "", v), _t = K.useSVGTransformAttr || Wt), v.xPercent = v.yPercent = 0, v
				},
				Ft = function (t) {
					var e, i, n = this.data,
						o = -n.rotation * et,
						s = o + n.skewX * et,
						a = (0 | Math.cos(o) * n.scaleX * 1e5) / 1e5,
						r = (0 | Math.sin(o) * n.scaleX * 1e5) / 1e5,
						l = (0 | Math.sin(s) * -n.scaleY * 1e5) / 1e5,
						d = (0 | Math.cos(s) * n.scaleY * 1e5) / 1e5,
						c = this.t.style,
						h = this.t.currentStyle;
					if (h) {
						i = r, r = -l, l = -i, e = h.filter, c.filter = "";
						var u, p, f = this.t.offsetWidth,
							m = this.t.offsetHeight,
							g = "absolute" !== h.position,
							v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + r + ", M21=" + l + ", M22=" + d,
							w = n.x + f * n.xPercent / 100,
							y = n.y + m * n.yPercent / 100;
						if (null != n.ox && (w += (u = (n.oxp ? .01 * f * n.ox : n.ox) - f / 2) - (u * a + (p = (n.oyp ? .01 * m * n.oy : n.oy) - m / 2) * r), y += p - (u * l + p * d)), g ? v += ", Dx=" + ((u = f / 2) - (u * a + (p = m / 2) * r) + w) + ", Dy=" + (p - (u * l + p * d) + y) + ")" : v += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, v) : v + " " + e, (0 === t || 1 === t) && 1 === a && 0 === r && 0 === l && 1 === d && (g && -1 === v.indexOf("Dx=0, Dy=0") || L.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !g) {
							var b, _, x, T = k < 8 ? 1 : -1;
							for (u = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((f - ((a < 0 ? -a : a) * f + (r < 0 ? -r : r) * m)) / 2 + w), n.ieOffsetY = Math.round((m - ((d < 0 ? -d : d) * m + (l < 0 ? -l : l) * f)) / 2 + y), vt = 0; vt < 4; vt++) x = (i = -1 !== (b = h[_ = V[vt]]).indexOf("px") ? parseFloat(b) : Y(this.t, _, parseFloat(b), b.replace(C, "")) || 0) !== n[_] ? vt < 2 ? -n.ieOffsetX : -n.ieOffsetY : vt < 2 ? u - n.ieOffsetX : p - n.ieOffsetY, c[_] = (n[_] = Math.round(i - x * (0 === vt || 2 === vt ? 1 : T))) + "px"
						}
					}
				},
				Rt = o.set3DTransformRatio = function (t) {
					var e, i, n, o, s, a, r, l, d, c, h, u, p, f, m, g, v, w, y, b, _, x, T = this.data,
						k = this.t.style,
						C = T.rotation * et,
						S = T.scaleX,
						z = T.scaleY,
						I = T.scaleZ,
						L = T.x,
						E = T.y,
						O = T.z,
						A = T.perspective;
					if (1 !== t && 0 !== t || "auto" !== T.force3D || T.rotationY || T.rotationX || 1 !== I || A || O) {
						if (P) {
							S < 1e-4 && -1e-4 < S && (S = I = 2e-5), z < 1e-4 && -1e-4 < z && (z = I = 2e-5), !A || T.z || T.rotationX || T.rotationY || (A = 0)
						}
						if (C || T.skewX) e = v = Math.cos(C), s = w = Math.sin(C), T.skewX && (C -= T.skewX * et, v = Math.cos(C), w = Math.sin(C), "simple" === T.skewType && (y = Math.tan(T.skewX * et), v *= y = Math.sqrt(1 + y * y), w *= y)), i = -w, a = v;
						else {
							if (!(T.rotationY || T.rotationX || 1 !== I || A || T.svg)) return void(k[zt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + E + "px," + O + "px)" + (1 !== S || 1 !== z ? " scale(" + S + "," + z + ")" : ""));
							e = a = 1, i = s = 0
						}
						h = 1, n = o = r = l = d = c = u = p = f = 0, m = A ? -1 / A : 0, g = T.zOrigin, 1e5, (C = T.rotationY * et) && (v = Math.cos(C), d = h * -(w = Math.sin(C)), p = m * -w, n = e * w, r = s * w, h *= v, m *= v, e *= v, s *= v), (C = T.rotationX * et) && (y = i * (v = Math.cos(C)) + n * (w = Math.sin(C)), b = a * v + r * w, _ = c * v + h * w, x = f * v + m * w, n = i * -w + n * v, r = a * -w + r * v, h = c * -w + h * v, m = f * -w + m * v, i = y, a = b, c = _, f = x), 1 !== I && (n *= I, r *= I, h *= I, m *= I), 1 !== z && (i *= z, a *= z, c *= z, f *= z), 1 !== S && (e *= S, s *= S, d *= S, p *= S), g && (o = n * (u -= g), l = r * u, u = h * u + g), T.svg && (o += T.xOrigin - (T.xOrigin * e + T.yOrigin * i), l += T.yOrigin - (T.xOrigin * s + T.yOrigin * a)), o = (y = (o += L) - (o |= 0)) ? (0 | 1e5 * y + (y < 0 ? -.5 : .5)) / 1e5 + o : o, l = (y = (l += E) - (l |= 0)) ? (0 | 1e5 * y + (y < 0 ? -.5 : .5)) / 1e5 + l : l, u = (y = (u += O) - (u |= 0)) ? (0 | 1e5 * y + (y < 0 ? -.5 : .5)) / 1e5 + u : u, k[zt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | 1e5 * e) / 1e5, (0 | 1e5 * s) / 1e5, (0 | 1e5 * d) / 1e5, (0 | 1e5 * p) / 1e5, (0 | 1e5 * i) / 1e5, (0 | 1e5 * a) / 1e5, (0 | 1e5 * c) / 1e5, (0 | 1e5 * f) / 1e5, (0 | 1e5 * n) / 1e5, (0 | 1e5 * r) / 1e5, (0 | 1e5 * h) / 1e5, (0 | 1e5 * m) / 1e5, o, l, u, A ? 1 + -u / A : 1].join(",") + ")"
					} else jt.call(this, t)
				},
				jt = o.set2DTransformRatio = function (t) {
					var e, i, n, o, s, a, r, l, d, c = this.data,
						h = this.t,
						u = h.style,
						p = c.x,
						f = c.y;
					return !(c.rotationX || c.rotationY || c.z || !0 === c.force3D || "auto" === c.force3D && 1 !== t && 0 !== t) || c.svg && _t || !Et ? (n = c.scaleX, o = c.scaleY, void(c.rotation || c.skewX || c.svg ? (i = (e = c.rotation * et) - c.skewX * et, 1e5, s = Math.cos(e) * n, a = Math.sin(e) * n, r = Math.sin(i) * -o, l = Math.cos(i) * o, c.svg && ((p += c.xOrigin - (c.xOrigin * s + c.yOrigin * r)) < 1e-6 && -1e-6 < p && (p = 0), (f += c.yOrigin - (c.xOrigin * a + c.yOrigin * l)) < 1e-6 && -1e-6 < f && (f = 0)), d = (0 | 1e5 * s) / 1e5 + "," + (0 | 1e5 * a) / 1e5 + "," + (0 | 1e5 * r) / 1e5 + "," + (0 | 1e5 * l) / 1e5 + "," + p + "," + f + ")", c.svg && _t ? h.setAttribute("transform", "matrix(" + d) : u[zt] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + d) : u[zt] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + n + ",0,0," + o + "," + p + "," + f + ")")) : void(this.setRatio = Rt).call(this, t)
				};
			yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
				parser: function (t, e, i, n, o, s, a) {
					if (n._transform) return o;
					var r, l, d, c, h, u, p, f = n._transform = Ht(t, G, !0, a.parseTransform),
						m = t.style,
						g = St.length,
						v = a,
						w = {};
					if ("string" == typeof v.transform && zt)(d = M.style)[zt] = v.transform, d.display = "block", d.position = "absolute", W.body.appendChild(M), r = Ht(M, null, !1), W.body.removeChild(M);
					else if ("object" == typeof v) {
						if (r = {
								scaleX: at(null != v.scaleX ? v.scaleX : v.scale, f.scaleX),
								scaleY: at(null != v.scaleY ? v.scaleY : v.scale, f.scaleY),
								scaleZ: at(v.scaleZ, f.scaleZ),
								x: at(v.x, f.x),
								y: at(v.y, f.y),
								z: at(v.z, f.z),
								xPercent: at(v.xPercent, f.xPercent),
								yPercent: at(v.yPercent, f.yPercent),
								perspective: at(v.transformPerspective, f.perspective)
							}, null != (p = v.directionalRotation))
							if ("object" == typeof p)
								for (d in p) v[d] = p[d];
							else v.rotation = p;
						"string" == typeof v.x && -1 !== v.x.indexOf("%") && (r.x = 0, r.xPercent = at(v.x, f.xPercent)), "string" == typeof v.y && -1 !== v.y.indexOf("%") && (r.y = 0, r.yPercent = at(v.y, f.yPercent)), r.rotation = rt("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : f.rotation, f.rotation, "rotation", w), Et && (r.rotationX = rt("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : f.rotationX || 0, f.rotationX, "rotationX", w), r.rotationY = rt("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : f.rotationY || 0, f.rotationY, "rotationY", w)), r.skewX = null == v.skewX ? f.skewX : rt(v.skewX, f.skewX), r.skewY = null == v.skewY ? f.skewY : rt(v.skewY, f.skewY), (l = r.skewY - f.skewY) && (r.skewX += l, r.rotation += l)
					}
					for (Et && null != v.force3D && (f.force3D = v.force3D, u = !0), f.skewType = v.skewType || f.skewType || K.defaultSkewType, (h = f.force3D || f.z || f.rotationX || f.rotationY || r.z || r.rotationX || r.rotationY || r.perspective) || null == v.scale || (r.scaleZ = 1); - 1 < --g;)(1e-6 < (c = r[i = St[g]] - f[i]) || c < -1e-6 || null != v[i] || null != D[i]) && (u = !0, o = new mt(f, i, f[i], c, o), i in w && (o.e = w[i]), o.xs0 = 0, o.plugin = s, n._overwriteProps.push(o.n));
					return (c = v.transformOrigin) && f.svg && (Mt(t, c, r), (o = new mt(f, "xOrigin", f.xOrigin, r.xOrigin - f.xOrigin, o, -1, "transformOrigin")).b = f.xOrigin, o.e = o.xs0 = r.xOrigin, (o = new mt(f, "yOrigin", f.yOrigin, r.yOrigin - f.yOrigin, o, -1, "transformOrigin")).b = f.yOrigin, o.e = o.xs0 = r.yOrigin, c = "0px 0px"), (c || Et && h && f.zOrigin) && (zt ? (u = !0, i = Lt, c = (c || nt(t, i, G, !1, "50% 50%")) + "", (o = new mt(m, i, 0, 0, o, -1, "transformOrigin")).b = m[i], o.plugin = s, o.xs0 = o.e = Et ? (d = f.zOrigin, c = c.split(" "), f.zOrigin = (2 < c.length && (0 === d || "0px" !== c[2]) ? parseFloat(c[2]) : d) || 0, o.xs0 = o.e = c[0] + " " + (c[1] || "50%") + " 0px", (o = new mt(f, "zOrigin", 0, 0, o, -1, o.n)).b = d, f.zOrigin) : c) : ot(c + "", f)), u && (n._transformType = f.svg && _t || !h && 3 !== this._transformType ? 2 : 3), o
				},
				prefix: !0
			}), yt("boxShadow", {
				defaultValue: "0px 0px 0px 0px #999",
				prefix: !0,
				color: !0,
				multi: !0,
				keyword: "inset"
			}), yt("borderRadius", {
				defaultValue: "0px",
				parser: function (t, e, i, n, o) {
					e = this.format(e);
					var s, a, r, l, d, c, h, u, p, f, m, g, v, w, y, b, _ = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
						x = t.style;
					for (p = parseFloat(t.offsetWidth), f = parseFloat(t.offsetHeight), s = e.split(" "), a = 0; _.length > a; a++) this.p.indexOf("border") && (_[a] = B(_[a])), -1 !== (d = l = nt(t, _[a], G, !1, "0px")).indexOf(" ") && (d = (l = d.split(" "))[0], l = l[1]), c = r = s[a], h = parseFloat(d), g = d.substr((h + "").length), "" === (m = (v = "=" === c.charAt(1)) ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), c.substr((u + "").length - (u < 0 ? 1 : 0)) || "") : (u = parseFloat(c), c.substr((u + "").length))) && (m = T[i] || g), m !== g && (w = Y(t, "borderLeft", h, g), y = Y(t, "borderTop", h, g), l = "%" === m ? (d = w / p * 100 + "%", y / f * 100 + "%") : "em" === m ? (d = w / (b = Y(t, "borderLeft", 1, "em")) + "em", y / b + "em") : (d = w + "px", y + "px"), v && (c = parseFloat(d) + u + m, r = parseFloat(l) + u + m)), o = gt(x, _[a], d + " " + l, c + " " + r, !1, "0px", o);
					return o
				},
				prefix: !0,
				formatter: ut("0px 0px 0px 0px", !1, !0)
			}), yt("backgroundPosition", {
				defaultValue: "0 0",
				parser: function (t, e, i, n, o, s) {
					var a, r, l, d, c, h, u = "background-position",
						p = G || X(t, null),
						f = this.format((p ? k ? p.getPropertyValue(u + "-x") + " " + p.getPropertyValue(u + "-y") : p.getPropertyValue(u) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
						m = this.format(e);
					if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && ((h = nt(t, "backgroundImage").replace(_, "")) && "none" !== h)) {
						for (a = f.split(" "), r = m.split(" "), H.setAttribute("src", h), l = 2; - 1 < --l;)(d = -1 !== (f = a[l]).indexOf("%")) !== (-1 !== r[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - H.width : t.offsetHeight - H.height, a[l] = d ? parseFloat(f) / 100 * c + "px" : parseFloat(f) / c * 100 + "%");
						f = a.join(" ")
					}
					return this.parseComplex(t.style, f, m, o, s)
				},
				formatter: ot
			}), yt("backgroundSize", {
				defaultValue: "0 0",
				formatter: ot
			}), yt("perspective", {
				defaultValue: "0px",
				prefix: !0
			}), yt("perspectiveOrigin", {
				defaultValue: "50% 50%",
				prefix: !0
			}), yt("transformStyle", {
				prefix: !0
			}), yt("backfaceVisibility", {
				prefix: !0
			}), yt("userSelect", {
				prefix: !0
			}), yt("margin", {
				parser: pt("marginTop,marginRight,marginBottom,marginLeft")
			}), yt("padding", {
				parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
			}), yt("clip", {
				defaultValue: "rect(0px,0px,0px,0px)",
				parser: function (t, e, i, n, o, s) {
					var a, r, l;
					return e = k < 9 ? (r = t.currentStyle, l = k < 8 ? " " : ",", a = "rect(" + r.clipTop + l + r.clipRight + l + r.clipBottom + l + r.clipLeft + ")", this.format(e).split(",").join(l)) : (a = this.format(nt(t, this.p, G, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, a, e, o, s)
				}
			}), yt("textShadow", {
				defaultValue: "0px 0px 0px #999",
				color: !0,
				multi: !0
			}), yt("autoRound,strictUnits", {
				parser: function (t, e, i, n, o) {
					return o
				}
			}), yt("border", {
				defaultValue: "0px solid #000",
				parser: function (t, e, i, n, o, s) {
					return this.parseComplex(t.style, this.format(nt(t, "borderTopWidth", G, !1, "0px") + " " + nt(t, "borderTopStyle", G, !1, "solid") + " " + nt(t, "borderTopColor", G, !1, "#000")), this.format(e), o, s)
				},
				color: !0,
				formatter: function (t) {
					var e = t.split(" ");
					return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
				}
			}), yt("borderWidth", {
				parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
			}), yt("float,cssFloat,styleFloat", {
				parser: function (t, e, i, n, o) {
					var s = t.style,
						a = "cssFloat" in s ? "cssFloat" : "styleFloat";
					return new mt(s, a, 0, 0, o, -1, i, !1, 0, s[a], e)
				}
			});
			var $t = function (t) {
				var e, i = this.t,
					n = i.filter || nt(this.data, "filter") || "",
					o = 0 | this.s + this.c * t;
				100 === o && (e = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), !nt(this.data, "filter")) : (i.filter = n.replace(a, ""), !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + o + ")"), -1 === n.indexOf("pacity") ? 0 === o && this.xn1 || (i.filter = n + " alpha(opacity=" + o + ")") : i.filter = n.replace(L, "opacity=" + o))
			};
			yt("opacity,alpha,autoAlpha", {
				defaultValue: "1",
				parser: function (t, e, i, n, o, s) {
					var a = parseFloat(nt(t, "opacity", G, !1, "1")),
						r = t.style,
						l = "autoAlpha" === i;
					return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), l && 1 === a && "hidden" === nt(t, "visibility", G) && 0 !== e && (a = 0), F ? o = new mt(r, "opacity", a, e - a, o) : ((o = new mt(r, "opacity", 100 * a, 100 * (e - a), o)).xn1 = l ? 1 : 0, r.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = $t), l && ((o = new mt(r, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
				}
			});
			var Nt = function (t, e) {
					e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(r, "-$1").toLowerCase())) : t.removeAttribute(e))
				},
				Bt = function (t) {
					if (this.t._gsClassPT = this, 1 === t || 0 === t) {
						this.t.setAttribute("class", 0 === t ? this.b : this.e);
						for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Nt(i, e.p), e = e._next;
						1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
					} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
				};
			yt("className", {
				parser: function (t, e, i, n, o, s, a) {
					var r, l, d, c, h, u = t.getAttribute("class") || "",
						p = t.style.cssText;
					if ((o = n._classNamePT = new mt(t, i, 0, 0, o, 2)).setRatio = Bt, o.pr = -11, f = !0, o.b = u, l = U(t, G), d = t._gsClassPT) {
						for (c = {}, h = d.data; h;) c[h.p] = 1, h = h._next;
						d.setRatio(1)
					}
					return (t._gsClassPT = o).e = "=" !== e.charAt(1) ? e : u.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", o.e), r = J(t, l, U(t), a, c), t.setAttribute("class", u), o.data = r.firstMPT, t.style.cssText = p, o = o.xfirst = n.parse(t, r.difs, o, s)), o
				}
			});
			var Xt = function (t) {
				if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
					var e, i, n, o, s = this.t.style,
						a = m.transform.parse;
					if ("all" === this.e) o = !(s.cssText = "");
					else
						for (n = (e = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = e[n], m[i] && (m[i].parse === a ? o = !0 : i = "transformOrigin" === i ? Lt : m[i].p), Nt(s, i);
					o && (Nt(s, zt), this.t._gsTransform && delete this.t._gsTransform)
				}
			};
			for (yt("clearProps", {
					parser: function (t, e, i, n, o) {
						return (o = new mt(t, i, 0, 0, o, 2)).setRatio = Xt, o.e = e, o.pr = -10, o.data = n._tween, f = !0, o
					}
				}), t = "bezier,throwProps,physicsProps,physics2D".split(","), vt = t.length; vt--;) bt(t[vt]);
			(t = K.prototype)._firstPT = null, t._onInitTween = function (t, e, i) {
				if (!t.nodeType) return !1;
				this._target = t, this._tween = i, this._vars = e, S = e.autoRound, f = !1, T = e.suffixMap || K.suffixMap, G = X(t, ""), p = this._overwriteProps;
				var n, o, s, a, r, l, d, c, h, u = t.style;
				if (g && "" === u.zIndex && (("auto" === (n = nt(t, "zIndex", G)) || "" === n) && this._addLazySet(u, "zIndex", 0)), "string" == typeof e && (a = u.cssText, n = U(t, G), u.cssText = a + ";" + e, n = J(t, n, U(t)).difs, !F && b.test(e) && (n.opacity = parseFloat(RegExp.$1)), e = n, u.cssText = a), this._firstPT = o = this.parse(t, e, null), this._transformType) {
					for (h = 3 === this._transformType, zt ? v && (g = !0, "" === u.zIndex && (("auto" === (d = nt(t, "zIndex", G)) || "" === d) && this._addLazySet(u, "zIndex", 0)), w && this._addLazySet(u, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : u.zoom = 1, s = o; s && s._next;) s = s._next;
					c = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(c, null, s), c.setRatio = h && Et ? Rt : zt ? jt : Ft, c.data = this._transform || Ht(t, G, !0), p.pop()
				}
				if (f) {
					for (; o;) {
						for (l = o._next, s = a; s && s.pr > o.pr;) s = s._next;
						(o._prev = s ? s._prev : r) ? o._prev._next = o: a = o, (o._next = s) ? s._prev = o : r = o, o = l
					}
					this._firstPT = a
				}
				return !0
			}, t.parse = function (t, e, i, n) {
				var o, s, a, r, l, d, c, h, u, p, f = t.style;
				for (o in e) d = e[o], (s = m[o]) ? i = s.parse(t, d, o, this, i, n, e) : (l = nt(t, o, G) + "", u = "string" == typeof d, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || u && E.test(d) ? (u || (d = (3 < (d = ct(d)).length ? "rgba(" : "rgb(") + d.join(",") + ")"), i = gt(f, o, l, d, !0, "transparent", i, 0, n)) : !u || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (c = (a = parseFloat(l)) || 0 === a ? l.substr((a + "").length) : "", ("" === l || "auto" === l) && (c = "width" === o || "height" === o ? (a = Z(t, o, G), "px") : "left" === o || "top" === o ? (a = q(t, o, G), "px") : (a = "opacity" !== o ? 0 : 1, "")), "" === (h = (p = u && "=" === d.charAt(1)) ? (r = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), r *= parseFloat(d), d.replace(C, "")) : (r = parseFloat(d), u && d.substr((r + "").length) || "")) && (h = o in T ? T[o] : c), d = r || 0 === r ? (p ? r + a : r) + h : e[o], c !== h && "" !== h && (r || 0 === r) && a && (a = Y(t, o, a, c), "%" === h ? (a /= Y(t, o, 100, "%") / 100, !0 !== e.strictUnits && (l = a + "%")) : "em" === h ? a /= Y(t, o, 1, "em") : "px" !== h && (r = Y(t, o, r, h), h = "px"), p && (r || 0 === r) && (d = r + a + h)), p && (r += a), !a && 0 !== a || !r && 0 !== r ? void 0 !== f[o] && (d || "NaN" != d + "" && null != d) ? (i = new mt(f, o, r || a || 0, 0, i, -1, o, !1, 0, l, d)).xs0 = "none" !== d || "display" !== o && -1 === o.indexOf("Style") ? d : l : j("invalid " + o + " tween value: " + e[o]) : (i = new mt(f, o, a, r - a, i, 0, o, !1 !== S && ("px" === h || "zIndex" === o), 0, l, d)).xs0 = h) : i = gt(f, o, l, d, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
				return i
			}, t.setRatio = function (t) {
				var e, i, n, o = this._firstPT;
				if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
					if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
						for (; o;) {
							if (e = o.c * t + o.s, o.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), o.type)
								if (1 === o.type)
									if (2 === (n = o.l)) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2;
									else if (3 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
							else if (4 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4;
							else if (5 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5;
							else {
								for (i = o.xs0 + e + o.xs1, n = 1; o.l > n; n++) i += o["xn" + n] + o["xs" + (n + 1)];
								o.t[o.p] = i
							} else -1 === o.type ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(t);
							else o.t[o.p] = e + o.xs0;
							o = o._next
						} else
							for (; o;) 2 !== o.type ? o.t[o.p] = o.b : o.setRatio(t), o = o._next;
					else
						for (; o;) 2 !== o.type ? o.t[o.p] = o.e : o.setRatio(t), o = o._next
			}, t._enableTransforms = function (t) {
				this._transform = this._transform || Ht(this._target, G, !0), this._transformType = this._transform.svg && _t || !t && 3 !== this._transformType ? 2 : 3
			};
			var Yt = function () {
				this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
			};
			t._addLazySet = function (t, e, i) {
				var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
				n.e = i, n.setRatio = Yt, n.data = this
			}, t._linkCSSP = function (t, e, i, n) {
				return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
			}, t._kill = function (t) {
				var e, i, n, o = t;
				if (t.autoAlpha || t.alpha) {
					for (i in o = {}, t) o[i] = t[i];
					o.opacity = 1, o.autoAlpha && (o.visibility = 1)
				}
				return t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), s.prototype._kill.call(this, o)
			};
			var qt = function (t, e, i) {
				var n, o, s, a;
				if (t.slice)
					for (o = t.length; - 1 < --o;) qt(t[o], e, i);
				else
					for (o = (n = t.childNodes).length; - 1 < --o;) a = (s = n[o]).type, s.style && (e.push(U(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || qt(s, e, i)
			};
			return K.cascadeTo = function (t, e, i) {
				var n, o, s, a = u.to(t, e, i),
					r = [a],
					l = [],
					d = [],
					c = [],
					h = u._internals.reservedProps;
				for (t = a._targets || a.target, qt(t, l, c), a.render(e, !0), qt(t, d), a.render(0, !0), a._enabled(!0), n = c.length; - 1 < --n;)
					if ((o = J(c[n], l[n], d[n])).firstMPT) {
						for (s in o = o.difs, i) h[s] && (o[s] = i[s]);
						r.push(u.to(c[n], e, o))
					}
				return r
			}, s.activate([K]), K
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (t) {
		"use strict";
		var e = function () {
			return (_gsScope.GreenSockGlobals || _gsScope).CSSPlugin
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
	}();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window,
	pka, pCa;
(function (i) {
	"use strict";
	var o = i.GreenSockGlobals || i,
		t = function (t) {
			var e, i = t.split("."),
				n = o;
			for (e = 0; i.length > e; e++) n[i[e]] = n = n[i[e]] || {};
			return n
		}("com.greensock.utils"),
		q = function (t) {
			var e = t.nodeType,
				i = "";
			if (1 === e || 9 === e || 11 === e) {
				if ("string" == typeof t.textContent) return t.textContent;
				for (t = t.firstChild; t; t = t.nextSibling) i += q(t)
			} else if (3 === e || 4 === e) return t.nodeValue;
			return i
		},
		U = document,
		J = U.defaultView ? U.defaultView.getComputedStyle : function () {},
		s = /([A-Z])/g,
		Q = function (t, e, i, n) {
			var o;
			return (i = i || J(t, null)) ? o = (t = i.getPropertyValue(e.replace(s, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (o = (i = t.currentStyle)[e]), n ? o : parseInt(o, 10) || 0
		},
		a = function (t) {
			return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
		},
		V = ")eefec303079ad17405c",
		Z = /(?:<br>|<br\/>|<br \/>)/gi,
		n = "<div style='position:relative;display:inline-block;" + (U.all && !U.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
		G = function (t) {
			var e = -1 !== (t = t || "").indexOf("++"),
				i = 1;
			return e && (t = t.split("++").join("")),
				function () {
					return n + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
				}
		},
		r = t.SplitText = o.SplitText = function (t, e) {
			if ("string" == typeof t && (t = r.selector(t)), !t) throw "cannot split a null element.";
			this.elements = a(t) ? function (t) {
				var e, i, n, o = [],
					s = t.length;
				for (e = 0; e < s; e++)
					if (i = t[e], a(i))
						for (n = i.length, n = 0; i.length > n; n++) o.push(i[n]);
					else o.push(i);
				return o
			}(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
		},
		K = function (t, e, i) {
			var n = t.nodeType;
			if (1 === n || 9 === n || 11 === n)
				for (t = t.firstChild; t; t = t.nextSibling) K(t, e, i);
			else(3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
		},
		tt = function (t, e) {
			for (var i = e.length; - 1 < --i;) t.push(e[i])
		},
		l = function (t, e, i, n, o) {
			Z.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(Z, V));
			var s, a, r, l, d, c, h, u, p, f, m, g, v, w, y = q(t),
				b = e.type || e.split || "chars,words,lines",
				_ = -1 !== b.indexOf("lines") ? [] : null,
				x = -1 !== b.indexOf("words"),
				T = -1 !== b.indexOf("chars"),
				k = "absolute" === e.position || !0 === e.absolute,
				C = k ? "&#173; " : " ",
				S = -999,
				z = J(t),
				I = Q(t, "paddingLeft", z),
				L = Q(t, "borderBottomWidth", z) + Q(t, "borderTopWidth", z),
				E = Q(t, "borderLeftWidth", z) + Q(t, "borderRightWidth", z),
				O = Q(t, "paddingTop", z) + Q(t, "paddingBottom", z),
				A = Q(t, "paddingLeft", z) + Q(t, "paddingRight", z),
				P = Q(t, "textAlign", z, !0),
				D = t.clientHeight,
				W = t.clientWidth,
				M = "</div>",
				H = G(e.wordsClass),
				F = G(e.charsClass),
				R = -1 !== (e.linesClass || "").indexOf("++"),
				j = e.linesClass,
				$ = -1 !== y.indexOf("<"),
				N = !0,
				B = [],
				X = [],
				Y = [];
			for (R && (j = j.split("++").join("")), $ && (y = y.split("<").join("{{LT}}")), s = y.length, l = H(), d = 0; d < s; d++)
				if (")" === (h = y.charAt(d)) && y.substr(d, 20) === V) l += (N ? M : "") + "<BR/>", N = !1, d !== s - 20 && y.substr(d + 20, 20) !== V && (l += " " + H(), N = !0), d += 19;
				else if (" " === h && " " !== y.charAt(d - 1) && d !== s - 1 && y.substr(d - 20, 20) !== V) {
				for (l += N ? M : "", N = !1;
					" " === y.charAt(d + 1);) l += C, d++;
				(")" !== y.charAt(d + 1) || y.substr(d + 1, 20) !== V) && (l += C + H(), N = !0)
			} else l += T && " " !== h ? F() + h + "</div>" : h;
			for (t.innerHTML = l + (N ? M : ""), $ && K(t, "{{LT}}", "<"), s = (c = t.getElementsByTagName("*")).length, u = [], d = 0; d < s; d++) u[d] = c[d];
			if (_ || k)
				for (d = 0; d < s; d++)((r = (p = u[d]).parentNode === t) || k || T && !x) && (f = p.offsetTop, _ && r && f !== S && "BR" !== p.nodeName && (a = [], _.push(a), S = f), k && (p._x = p.offsetLeft, p._y = f, p._w = p.offsetWidth, p._h = p.offsetHeight), _ && (x !== r && T || (a.push(p), p._x -= I), r && d && (u[d - 1]._wordEnd = !0), "BR" === p.nodeName && p.nextSibling && "BR" === p.nextSibling.nodeName && _.push([])));
			for (d = 0; d < s; d++) r = (p = u[d]).parentNode === t, "BR" !== p.nodeName ? (k && (g = p.style, x || r || (p._x += p.parentNode._x, p._y += p.parentNode._y), g.left = p._x + "px", g.top = p._y + "px", g.position = "absolute", g.display = "block", g.width = p._w + 1 + "px", g.height = p._h + "px"), x ? r && "" !== p.innerHTML ? X.push(p) : T && B.push(p) : r ? (t.removeChild(p), u.splice(d--, 1), s--) : !r && T && (f = !_ && !k && p.nextSibling, t.appendChild(p), f || t.appendChild(U.createTextNode(" ")), B.push(p))) : _ || k ? (t.removeChild(p), u.splice(d--, 1), s--) : x || t.appendChild(p);
			if (_) {
				for (k && (m = U.createElement("div"), t.appendChild(m), v = m.offsetWidth + "px", f = m.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(m)), g = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
				for (w = !k || !x && !T, d = 0; _.length > d; d++) {
					for (a = _[d], (m = U.createElement("div")).style.cssText = "display:block;text-align:" + P + ";position:" + (k ? "absolute;" : "relative;"), j && (m.className = j + (R ? d + 1 : "")), Y.push(m), s = a.length, c = 0; c < s; c++) "BR" !== a[c].nodeName && (p = a[c], m.appendChild(p), w && (p._wordEnd || x) && m.appendChild(U.createTextNode(" ")), k && (0 === c && (m.style.top = p._y + "px", m.style.left = I + f + "px"), p.style.top = "0px", f && (p.style.left = p._x - f + "px")));
					0 === s && (m.innerHTML = "&nbsp;"), x || T || (m.innerHTML = q(m).split(String.fromCharCode(160)).join(" ")), k && (m.style.width = v, m.style.height = p._h + "px"), t.appendChild(m)
				}
				t.style.cssText = g
			}
			k && (D > t.clientHeight && (t.style.height = D - O + "px", D > t.clientHeight && (t.style.height = D + L + "px")), W > t.clientWidth && (t.style.width = W - A + "px", W > t.clientWidth && (t.style.width = W + E + "px"))), tt(i, B), tt(n, X), tt(o, Y)
		},
		e = r.prototype;
	e.split = function (t) {
		this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
		for (var e = this.elements.length; - 1 < --e;) this._originals[e] = this.elements[e].innerHTML, l(this.elements[e], this.vars, this.chars, this.words, this.lines);
		return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
	}, e.revert = function () {
		if (!this._originals) throw "revert() call wasn't scoped properly.";
		for (var t = this._originals.length; - 1 < --t;) this.elements[t].innerHTML = this._originals[t];
		return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
	}, r.selector = i.$ || i.jQuery || function (t) {
		var e = i.$ || i.jQuery;
		return e ? (r.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
	}, r.version = "0.3.3"
})(_gsScope),
function (t) {
	"use strict";
	var e = function () {
		return (_gsScope.GreenSockGlobals || _gsScope).SplitText
	};
	"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}();
try {
	window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (t) {}
try {
	window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (t) {}
if (1 == window.tplogs) try {
	console.groupEnd()
} catch (t) {}

function revslider_showDoubleJqueryError(t) {
	var e = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	e += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e = "<span style='font-size:16px;color:#BC0C06;'>" + (e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.") + "</span>", jQuery(t).show().html(e)
}
pka = jQuery, pka.waitForImages = {
		hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
	}, pka.expr[":"].uncached = function (t) {
		var e = document.createElement("img");
		return e.src = t.src, pka(t).is('img[src!=""]') && !e.complete
	}, pka.fn.waitForImages = function (l, d, e) {
		if (pka.isPlainObject(l) && (d = l.each, e = l.waitForAll, l = l.finished), l = l || pka.noop, d = d || pka.noop, e = !!e, !pka.isFunction(l) || !pka.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
		return this.each(function () {
			var n = pka(this),
				s = [];
			if (e) {
				var t = pka.waitForImages.hasImageProperties || [],
					a = /url\((['"]?)(.*?)\1\)/g;
				n.find("*").each(function () {
					var o = pka(this);
					o.is("img:uncached") && s.push({
						src: o.attr("src"),
						element: o[0]
					}), pka.each(t, function (t, e) {
						var i, n = o.css(e);
						if (!n) return !0;
						for (; i = a.exec(n);) s.push({
							src: i[2],
							element: o[0]
						})
					})
				})
			} else n.find("img:uncached").each(function () {
				s.push({
					src: this.src,
					element: this
				})
			});
			var o = s.length,
				r = 0;
			0 == o && l.call(n[0]), pka.each(s, function (t, e) {
				var i = new Image;
				pka(i).bind("load error", function (t) {
					if (r++, d.call(e.element, r, o, "load" == t.type), r == o) return l.call(n[0]), !1
				}), i.src = e.src
			})
		})
	},
	function (rt, lt) {
		function e(e, i) {
			if (e == lt) return !1;
			var t;
			if (e.data("aimg") != lt && ("enabled" == e.data("aie8") && dt(8) || "enabled" == e.data("amobile") && _t()) && e.html('<img class="tp-slider-alternative-image" src="' + e.data("aimg") + '">'), "preview1" != i.navigationStyle && "preview3" != i.navigationStyle && "preview4" != i.navigationStyle || (i.soloArrowLeftHalign = "left", i.soloArrowLeftValign = "center", i.soloArrowLeftHOffset = 0, i.soloArrowLeftVOffset = 0, i.soloArrowRightHalign = "right", i.soloArrowRightValign = "center", i.soloArrowRightHOffset = 0, i.soloArrowRightVOffset = 0, i.navigationArrows = "solo"), "on" == i.simplifyAll && (dt(8) || (t = !1, navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t)) && (e.find(".tp-caption").each(function () {
					var t = rt(this);
					t.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"), t.data("splitin", ""), t.data("speed", 400)
				}), e.find(">ul>li").each(function () {
					var t = rt(this);
					t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), t.find(">img").first().data("kenburns", "off")
				})), i.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != i.fullWidth && "on" != i.fullScreen && (i.autoHeight = "off"), "on" == i.fullScreen && (i.autoHeight = "on"), "on" != i.fullWidth && "on" != i.fullScreen && (forceFulWidth = "off"), "on" == i.fullWidth && "off" == i.autoHeight && e.css({
					maxHeight: i.startheight + "px"
				}), _t() && "on" == i.hideThumbsOnMobile && "thumb" == i.navigationType && (i.navigationType = "none"), _t() && "on" == i.hideBulletsOnMobile && "bullet" == i.navigationType && (i.navigationType = "none"), _t() && "on" == i.hideBulletsOnMobile && "both" == i.navigationType && (i.navigationType = "none"), _t() && "on" == i.hideArrowsOnMobile && (i.navigationArrows = "none"), "on" == i.forceFullWidth && 0 == e.closest(".forcefullwidth_wrapper_tp_banner").length) {
				var n = e.parent().offset().left,
					o = e.parent().css("marginBottom"),
					s = e.parent().css("marginTop");
				o == lt && (o = 0), s == lt && (s = 0), e.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + s + ";margin-bottom:" + o + '" class="forcefullwidth_wrapper_tp_banner"></div>'), e.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + e.height() + 'px"></div>'), e.css({
					backgroundColor: e.parent().css("backgroundColor"),
					backgroundImage: e.parent().css("backgroundImage")
				}), e.parent().css({
					left: 0 - n + "px",
					position: "absolute",
					width: rt(window).width()
				}), i.width = rt(window).width()
			}
			try {
				i.hideThumbsUnderResolution > rt(window).width() && 0 != i.hideThumbsUnderResolution ? e.parent().find(".tp-bullets.tp-thumbs").css({
					display: "none"
				}) : e.parent().find(".tp-bullets.tp-thumbs").css({
					display: "block"
				})
			} catch (t) {}
			if (!e.hasClass("revslider-initialised")) {
				e.addClass("revslider-initialised"), e.attr("id") == lt && e.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), i.firefox13 = !1, i.ie = !rt.support.opacity, i.ie9 = 9 == document.documentMode, i.origcd = i.delay;
				var a = rt.fn.jquery.split("."),
					r = parseFloat(a[0]),
					l = parseFloat(a[1]);
				parseFloat(a[2] || "0");
				1 == r && l < 7 && e.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + a + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), 1 < r && (i.ie = !1), rt.support.transition || (rt.fn.transition = rt.fn.animate), e.find(".caption").each(function () {
					rt(this).addClass("tp-caption")
				}), _t() && e.find(".tp-caption").each(function () {
					var t = rt(this);
					1 != t.data("autoplayonlyfirsttime") && "true" != t.data("autoplayonlyfirsttime") || t.data("autoplayonlyfirsttime", "false"), 1 != t.data("autoplay") && "true" != t.data("autoplay") || t.data("autoplay", !1)
				});
				var d = 0,
					c = 0,
					h = "http";
				if ("https:" === location.protocol && (h = "https"), e.find(".tp-caption").each(function (t) {
						try {
							if ((rt(this).data("ytid") != lt || 0 < rt(this).find("iframe").attr("src").toLowerCase().indexOf("youtube")) && 0 == d) {
								d = 1;
								var e = document.createElement("script");
								e.src = "https://www.youtube.com/iframe_api";
								var i = document.getElementsByTagName("script")[0],
									n = !0;
								rt("head").find("*").each(function () {
									"https://www.youtube.com/iframe_api" == rt(this).attr("src") && (n = !1)
								}), n && i.parentNode.insertBefore(e, i)
							}
						} catch (t) {}
						try {
							if ((rt(this).data("vimeoid") != lt || 0 < rt(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo")) && 0 == c) {
								c = 1;
								var o = document.createElement("script");
								o.src = h + "://a.vimeocdn.com/js/froogaloop2.min.js";
								i = document.getElementsByTagName("script")[0], n = !0;
								rt("head").find("*").each(function () {
									rt(this).attr("src") == h + "://a.vimeocdn.com/js/froogaloop2.min.js" && (n = !1)
								}), n && i.parentNode.insertBefore(o, i)
							}
						} catch (t) {}
						try {
							rt(this).data("videomp4") != lt || rt(this).data("videowebm")
						} catch (t) {}
					}), e.find(".tp-caption video").each(function (t) {
						rt(this).removeClass("video-js").removeClass("vjs-default-skin"), rt(this).attr("preload", ""), rt(this).css({
							display: "none"
						})
					}), e.find(">ul:first-child >li").each(function () {
						var t = rt(this);
						t.data("origindex", t.index())
					}), "on" == i.shuffle) {
					var u = new Object,
						p = e.find(">ul:first-child >li:first-child");
					u.fstransition = p.data("fstransition"), u.fsmasterspeed = p.data("fsmasterspeed"), u.fsslotamount = p.data("fsslotamount");
					for (var f = 0; f < e.find(">ul:first-child >li").length; f++) {
						var m = Math.round(Math.random() * e.find(">ul:first-child >li").length);
						e.find(">ul:first-child >li:eq(" + m + ")").prependTo(e.find(">ul:first-child"))
					}
					var g = e.find(">ul:first-child >li:first-child");
					g.data("fstransition", u.fstransition), g.data("fsmasterspeed", u.fsmasterspeed), g.data("fsslotamount", u.fsslotamount)
				}
				i.slots = 4, i.act = -1, i.next = 0, i.startWithSlide != lt && (i.next = i.startWithSlide);
				var v = T("#")[0];
				if (v.length < 9 && 1 < v.split("slide").length) {
					var w = parseInt(v.split("slide")[1], 0);
					w < 1 && (w = 1), w > e.find(">ul:first >li").length && (w = e.find(">ul:first >li").length), i.next = w - 1
				}
				i.firststart = 1, i.navigationHOffset == lt && (i.navOffsetHorizontal = 0), i.navigationVOffset == lt && (i.navOffsetVertical = 0), e.append('<div class="tp-loader ' + i.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == e.find(".tp-bannertimer").length && e.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
				var y = e.find(".tp-bannertimer");
				if (0 < y.length && y.css({
						width: "0%"
					}), e.addClass("tp-simpleresponsive"), i.container = e, i.slideamount = e.find(">ul:first >li").length, 0 == e.height() && e.height(i.startheight), i.startwidth != lt && 0 != i.startwidth || (i.startwidth = e.width()), i.startheight != lt && 0 != i.startheight || (i.startheight = e.height()), i.width = e.width(), i.height = e.height(), i.bw = i.startwidth / e.width(), i.bh = i.startheight / e.height(), i.width != i.startwidth && (i.height = Math.round(i.startheight * (i.width / i.startwidth)), e.height(i.height)), 0 != i.shadow) {
					e.parent().append('<div class="tp-bannershadow tp-shadow' + i.shadow + '"></div>');
					n = 0;
					"on" == i.forceFullWidth && (n = 0 - i.container.parent().offset().left), e.parent().find(".tp-bannershadow").css({
						width: i.width,
						left: n
					})
				}
				e.find("ul").css({
					display: "none"
				});
				e.find("ul").css({
					display: "block"
				}), O(e, i), "off" != i.parallax && F(e, i), 1 < i.slideamount && C(e, i), 1 < i.slideamount && "thumb" == i.navigationType && R(e, i), 1 < i.slideamount && S(e, i), "on" == i.keyboardNavigation && z(e, i), I(e, i), 0 < i.hideThumbs && L(e, i), setTimeout(function () {
					P(e, i)
				}, i.startDelay), i.startDelay = 0, 1 < i.slideamount && D(e, i), setTimeout(function () {
					e.trigger("revolution.slide.onloaded")
				}, 500), rt("body").data("rs-fullScreenMode", !1), rt(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function () {
					rt("body").data("rs-fullScreenMode", !rt("body").data("rs-fullScreenMode")), rt("body").data("rs-fullScreenMode") && setTimeout(function () {
						rt(window).trigger("resize")
					}, 200)
				});
				var b = "resize.revslider-" + e.attr("id");
				rt(window).on(b, function () {
					if (e == lt) return !1;
					if (0 != rt("body").find(e) && "on" == i.forceFullWidth) {
						var t = i.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
						i.container.parent().css({
							left: 0 - t + "px",
							width: rt(window).width()
						})
					}(e.outerWidth(!0) != i.width || e.is(":hidden")) && k(e, i)
				});
				try {
					0 != i.hideThumbsUnderResoluition && "thumb" == i.navigationType && (i.hideThumbsUnderResoluition > rt(window).width() ? rt(".tp-bullets").css({
						display: "none"
					}) : rt(".tp-bullets").css({
						display: "block"
					}))
				} catch (t) {}
				e.find(".tp-scrollbelowslider").on("click", function () {
					var t = 0;
					try {
						t = rt("body").find(i.fullScreenOffsetContainer).height()
					} catch (t) {}
					try {
						t -= parseInt(rt(this).data("scrolloffset"), 0)
					} catch (t) {}
					rt("body,html").animate({
						scrollTop: e.offset().top + e.find(">ul >li").height() - t + "px"
					}, {
						duration: 400
					})
				});
				var _ = e.parent();
				rt(window).width() < i.hideSliderAtLimit && (e.trigger("stoptimer"), "none" != _.css("display") && _.data("olddisplay", _.css("display")), _.css({
					display: "none"
				})), i.disableFocusListener || "true" == i.disableFocusListener || !0 === i.disableFocusListener || x(e, i)
			}
		}
		rt.fn.extend({
			revolution: function (t) {
				return t = rt.extend({}, {
					delay: 9e3,
					startheight: 500,
					startwidth: 960,
					fullScreenAlignForce: "off",
					autoHeight: "off",
					hideTimerBar: "off",
					hideThumbs: 200,
					hideNavDelayOnMobile: 1500,
					thumbWidth: 100,
					thumbHeight: 50,
					thumbAmount: 3,
					navigationType: "bullet",
					navigationArrows: "solo",
					navigationInGrid: "off",
					hideThumbsOnMobile: "off",
					hideBulletsOnMobile: "off",
					hideArrowsOnMobile: "off",
					hideThumbsUnderResoluition: 0,
					navigationStyle: "round",
					navigationHAlign: "center",
					navigationVAlign: "bottom",
					navigationHOffset: 0,
					navigationVOffset: 20,
					soloArrowLeftHalign: "left",
					soloArrowLeftValign: "center",
					soloArrowLeftHOffset: 20,
					soloArrowLeftVOffset: 0,
					soloArrowRightHalign: "right",
					soloArrowRightValign: "center",
					soloArrowRightHOffset: 20,
					soloArrowRightVOffset: 0,
					keyboardNavigation: "on",
					touchenabled: "on",
					onHoverStop: "on",
					stopAtSlide: -1,
					stopAfterLoops: -1,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLimit: 0,
					hideSliderAtLimit: 0,
					shadow: 0,
					fullWidth: "off",
					fullScreen: "off",
					minFullScreenHeight: 0,
					fullScreenOffsetContainer: "",
					fullScreenOffset: "0",
					dottedOverlay: "none",
					forceFullWidth: "off",
					spinner: "spinner0",
					swipe_treshold: 75,
					swipe_min_touches: 1,
					drag_block_vertical: !1,
					isJoomla: !1,
					parallax: "off",
					parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
					parallaxBgFreeze: "off",
					parallaxOpacity: "on",
					parallaxDisableOnMobile: "off",
					panZoomDisableOnMobile: "off",
					simplifyAll: "on",
					minHeight: 0,
					nextSlideOnWindowFocus: "off",
					disableFocusListener: !0,
					startDelay: 0
				}, t), this.each(function () {
					if (1 == window.tplogs) try {
						console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on " + rt(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(t), console.groupEnd(), console.groupCollapsed("Tween Engine:")
					} catch (t) {}
					if (punchgs.TweenLite == lt) {
						if (1 == window.tplogs) try {
							console.error("GreenSock Engine Does not Exist!")
						} catch (t) {}
						return !1
					}
					if (punchgs.force3D = !0, 1 == window.tplogs) try {
						console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
					} catch (t) {}
					if ("on" == t.simplifyAll || (punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true"), 1 == window.tplogs) try {
						console.groupEnd(), console.groupEnd()
					} catch (t) {}
					e(rt(this), t)
				})
			},
			revscroll: function (e) {
				return this.each(function () {
					var t = rt(this);
					t != lt && 0 < t.length && 0 < rt("body").find("#" + t.attr("id")).length && rt("body,html").animate({
						scrollTop: t.offset().top + t.find(">ul >li").height() - e + "px"
					}, {
						duration: 400
					})
				})
			},
			revredraw: function (t) {
				return this.each(function () {
					var t = rt(this);
					if (t != lt && 0 < t.length && 0 < rt("body").find("#" + t.attr("id")).length) {
						var e = t.parent().find(".tp-bannertimer").data("opt");
						k(t, e)
					}
				})
			},
			revkill: function (t) {
				var e = rt(this);
				if (e != lt && 0 < e.length && 0 < rt("body").find("#" + e.attr("id")).length) {
					e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause");
					var i = e.parent().find(".tp-bannertimer"),
						n = i.data("opt");
					n.bannertimeronpause = !0, e.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(e.find("*"), !1), punchgs.TweenLite.killTweensOf(e, !1), e.unbind("hover, mouseover, mouseenter,mouseleave, resize");
					var o = "resize.revslider-" + e.attr("id");
					rt(window).off(o), e.find("*").each(function () {
						var t = rt(this);
						t.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), t.off("on, hover, mouseenter,mouseleave,mouseover, resize"), t.data("mySplitText", null), t.data("ctl", null), t.data("tween") != lt && t.data("tween").kill(), t.data("kenburn") != lt && t.data("kenburn").kill(), t.remove(), t.empty(), t = null
					}), punchgs.TweenLite.killTweensOf(e.find("*"), !1), punchgs.TweenLite.killTweensOf(e, !1), i.remove();
					try {
						e.closest(".forcefullwidth_wrapper_tp_banner").remove()
					} catch (t) {}
					try {
						e.closest(".rev_slider_wrapper").remove()
					} catch (t) {}
					try {
						e.remove()
					} catch (t) {}
					return e.empty(), e.html(), n = e = null, delete this.container, delete this.opt, !0
				}
				return !1
			},
			revpause: function (t) {
				return this.each(function () {
					var t = rt(this);
					t != lt && 0 < t.length && 0 < rt("body").find("#" + t.attr("id")).length && (t.data("conthover", 1), t.data("conthover-changed", 1), t.trigger("revolution.slide.onpause"), t.parent().find(".tp-bannertimer").data("opt").bannertimeronpause = !0, t.trigger("stoptimer"))
				})
			},
			revresume: function (t) {
				return this.each(function () {
					var t = rt(this);
					t != lt && 0 < t.length && 0 < rt("body").find("#" + t.attr("id")).length && (t.data("conthover", 0), t.data("conthover-changed", 1), t.trigger("revolution.slide.onresume"), t.parent().find(".tp-bannertimer").data("opt").bannertimeronpause = !1, t.trigger("starttimer"))
				})
			},
			revnext: function (t) {
				return this.each(function () {
					var t = rt(this);
					t != lt && 0 < t.length && 0 < rt("body").find("#" + t.attr("id")).length && t.parent().find(".tp-rightarrow").click()
				})
			},
			revprev: function (t) {
				return this.each(function () {
					var t = rt(this);
					t != lt && 0 < t.length && 0 < rt("body").find("#" + t.attr("id")).length && t.parent().find(".tp-leftarrow").click()
				})
			},
			revmaxslide: function (t) {
				return rt(this).find(">ul:first-child >li").length
			},
			revcurrentslide: function (t) {
				var e = rt(this);
				if (e != lt && 0 < e.length && 0 < rt("body").find("#" + e.attr("id")).length) return e.parent().find(".tp-bannertimer").data("opt").act
			},
			revlastslide: function (t) {
				var e = rt(this);
				if (e != lt && 0 < e.length && 0 < rt("body").find("#" + e.attr("id")).length) return e.parent().find(".tp-bannertimer").data("opt").lastslide
			},
			revshowslide: function (e) {
				return this.each(function () {
					var t = rt(this);
					t != lt && 0 < t.length && 0 < rt("body").find("#" + t.attr("id")).length && (t.data("showus", e), t.parent().find(".tp-rightarrow").click())
				})
			}
		});
		! function () {
			var t, e, i = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
			for (t in i)
				if (t in document) {
					e = i[t];
					break
				}
		}();
		var x = function (e, i) {
				var t = document.documentMode === lt,
					n = window.chrome;
				t && !n ? rt(window).on("focusin", function () {
					if (e == lt) return !1;
					setTimeout(function () {
						"on" == i.nextSlideOnWindowFocus && e.revnext(), e.revredraw()
					}, 300)
				}).on("focusout", function () {}) : window.addEventListener ? (window.addEventListener("focus", function (t) {
					if (e == lt) return !1;
					setTimeout(function () {
						"on" == i.nextSlideOnWindowFocus && e.revnext(), e.revredraw()
					}, 300)
				}, !1), window.addEventListener("blur", function (t) {}, !1)) : (window.attachEvent("focus", function (t) {
					setTimeout(function () {
						if (e == lt) return !1;
						"on" == i.nextSlideOnWindowFocus && e.revnext(), e.revredraw()
					}, 300)
				}), window.attachEvent("blur", function (t) {}))
			},
			T = function (t) {
				for (var e, i = [], n = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), o = 0; o < n.length; o++) n[o] = n[o].replace("%3D", "="), e = n[o].split("="), i.push(e[0]), i[e[0]] = e[1];
				return i
			},
			k = function (e, i) {
				if (e == lt) return !1;
				try {
					0 != i.hideThumbsUnderResoluition && "thumb" == i.navigationType && (i.hideThumbsUnderResoluition > rt(window).width() ? rt(".tp-bullets").css({
						display: "none"
					}) : rt(".tp-bullets").css({
						display: "block"
					}))
				} catch (t) {}
				e.find(".defaultimg").each(function (t) {
					E(rt(this), i)
				});
				var t = e.parent();
				rt(window).width() < i.hideSliderAtLimit ? (e.trigger("stoptimer"), "none" != t.css("display") && t.data("olddisplay", t.css("display")), t.css({
					display: "none"
				})) : e.is(":hidden") && (t.data("olddisplay") != lt && "undefined" != t.data("olddisplay") && "none" != t.data("olddisplay") ? t.css({
					display: t.data("olddisplay")
				}) : t.css({
					display: "block"
				}), e.trigger("restarttimer"), setTimeout(function () {
					k(e, i)
				}, 150));
				var n = 0;
				"on" == i.forceFullWidth && (n = 0 - i.container.parent().offset().left);
				try {
					e.parent().find(".tp-bannershadow").css({
						width: i.width,
						left: n
					})
				} catch (t) {}
				var o = e.find(">ul >li:eq(" + i.act + ") .slotholder"),
					s = e.find(">ul >li:eq(" + i.next + ") .slotholder");
				c(e, i, e), punchgs.TweenLite.set(s.find(".defaultimg"), {
					opacity: 0
				}), o.find(".defaultimg").css({
					opacity: 1
				}), s.find(".defaultimg").each(function () {
					var t = rt(this);
					"on" == i.panZoomDisableOnMobile || t.data("kenburn") != lt && (t.data("kenburn").restart(), it(e, i, !0))
				});
				var a = e.find(">ul >li:eq(" + i.next + ")"),
					r = e.parent().find(".tparrows");
				r.hasClass("preview2") && r.css({
					width: parseInt(r.css("minWidth"), 0)
				}), et(a, i, !0), l(e, i)
			},
			dt = function (t, e) {
				var i = rt('<div style="display:none;"/>').appendTo(rt("body"));
				i.html("\x3c!--[if " + (e || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]--\x3e");
				var n = i.find("a").length;
				return i.remove(), n
			},
			d = function (t, e) {
				t.next == e.find(">ul >li").length - 1 && (t.looptogo = t.looptogo - 1, t.looptogo <= 0 && (t.stopLoop = "on")), P(e, t)
			},
			C = function (n, o) {
				var t = "hidebullets";
				0 == o.hideThumbs && (t = ""), "bullet" != o.navigationType && "both" != o.navigationType || n.parent().append('<div class="tp-bullets ' + t + " simplebullets " + o.navigationStyle + '"></div>');
				var e = n.parent().find(".tp-bullets");
				n.find(">ul:first >li").each(function (t) {
					n.find(">ul:first >li:eq(" + t + ") img:first").attr("src");
					e.append('<div class="bullet"></div>');
					e.find(".bullet:first")
				}), e.find(".bullet").each(function (t) {
					var i = rt(this);
					t == o.slideamount - 1 && i.addClass("last"), 0 == t && i.addClass("first"), i.click(function () {
						var t = !1,
							e = i.index();
						"withbullet" != o.navigationArrows && "nexttobullets" != o.navigationArrows || (e = i.index() - 1), e == o.act && (t = !0), 0 != o.transition || t || (o.next = e, d(o, n))
					})
				}), e.append('<div class="tpclear"></div>'), l(n, o)
			},
			S = function (e, t) {
				function i(t) {
					e.parent().append('<div style="' + n + '" class="tp-' + t + "arrow " + o + " tparrows " + s + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
				}
				e.find(".tp-bullets");
				var n = "",
					o = "hidearrows",
					s = t.navigationStyle;
				0 == t.hideThumbs && (o = ""), "none" == t.navigationArrows && (n = "visibility:hidden;display:none"), t.soloArrowStyle = "default " + t.navigationStyle, "none" != t.navigationArrows && "nexttobullets" != t.navigationArrows && (s = t.soloArrowStyle), i("left"), i("right"), e.parent().find(".tp-rightarrow").click(function () {
					0 == t.transition && (e.data("showus") != lt && -1 != e.data("showus") ? t.next = e.data("showus") - 1 : t.next = t.next + 1, e.data("showus", -1), t.next >= t.slideamount && (t.next = 0), t.next < 0 && (t.next = 0), t.act != t.next && d(t, e))
				}), e.parent().find(".tp-leftarrow").click(function () {
					0 == t.transition && (t.next = t.next - 1, t.leftarrowpressed = 1, t.next < 0 && (t.next = t.slideamount - 1), d(t, e))
				}), l(e, t)
			},
			z = function (e, i) {
				rt(document).keydown(function (t) {
					0 == i.transition && 39 == t.keyCode && (e.data("showus") != lt && -1 != e.data("showus") ? i.next = e.data("showus") - 1 : i.next = i.next + 1, e.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && d(i, e)), 0 == i.transition && 37 == t.keyCode && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), d(i, e))
				}), l(e, i)
			},
			I = function (a, r) {
				var l = "vertical";
				"on" == r.touchenabled && (1 == r.drag_block_vertical && (l = "none"), a.swipe({
					allowPageScroll: l,
					fingers: r.swipe_min_touches,
					treshold: r.swipe_treshold,
					swipe: function (t, e, i, n, o, s) {
						switch (e) {
							case "left":
								0 == r.transition && (r.next = r.next + 1, r.next == r.slideamount && (r.next = 0), d(r, a));
								break;
							case "right":
								0 == r.transition && (r.next = r.next - 1, r.leftarrowpressed = 1, r.next < 0 && (r.next = r.slideamount - 1), d(r, a));
								break;
							case "up":
								"none" == l && rt("html, body").animate({
									scrollTop: a.offset().top + a.height() + "px"
								});
								break;
							case "down":
								"none" == l && rt("html, body").animate({
									scrollTop: a.offset().top - rt(window).height() + "px"
								})
						}
					}
				}))
			},
			L = function (t, e) {
				var i = t.parent().find(".tp-bullets"),
					n = t.parent().find(".tparrows");
				if (null == i) {
					t.append('<div class=".tp-bullets"></div>');
					i = t.parent().find(".tp-bullets")
				}
				if (null == n) {
					t.append('<div class=".tparrows"></div>');
					n = t.parent().find(".tparrows")
				}
				if (t.data("hideThumbs", e.hideThumbs), i.addClass("hidebullets"), n.addClass("hidearrows"), _t()) try {
					t.hammer().on("touch", function () {
						t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
					}), t.hammer().on("release", function () {
						t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function () {
							i.addClass("hidebullets"), n.addClass("hidearrows"), t.trigger("starttimer")
						}, e.hideNavDelayOnMobile))
					})
				} catch (t) {} else i.hover(function () {
					e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
				}, function () {
					e.overnav = !1, t.trigger("starttimer"), i.removeClass("hovered"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function () {
						i.addClass("hidebullets"), n.addClass("hidearrows")
					}, e.hideThumbs))
				}), n.hover(function () {
					e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
				}, function () {
					e.overnav = !1, t.trigger("starttimer"), i.removeClass("hovered")
				}), t.on("mouseenter", function () {
					t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
				}), t.on("mouseleave", function () {
					t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function () {
						i.addClass("hidebullets"), n.addClass("hidearrows")
					}, e.hideThumbs))
				})
			},
			l = function (t, e) {
				var i = t.parent(),
					n = i.find(".tp-bullets");
				if ("thumb" == e.navigationType) {
					n.find(".thumb").each(function (t) {
						rt(this).css({
							width: e.thumbWidth * e.bw + "px",
							height: e.thumbHeight * e.bh + "px"
						})
					});
					var o = n.find(".tp-mask");
					o.width(e.thumbWidth * e.thumbAmount * e.bw), o.height(e.thumbHeight * e.bh), o.parent().width(e.thumbWidth * e.thumbAmount * e.bw), o.parent().height(e.thumbHeight * e.bh)
				}
				var s = i.find(".tp-leftarrow"),
					a = i.find(".tp-rightarrow");
				"thumb" == e.navigationType && "nexttobullets" == e.navigationArrows && (e.navigationArrows = "solo"), "nexttobullets" == e.navigationArrows && (s.prependTo(n).css({
					float: "left"
				}), a.insertBefore(n.find(".tpclear")).css({
					float: "left"
				}));
				var r = 0;
				"on" == e.forceFullWidth && (r = 0 - e.container.parent().offset().left);
				var l = 0;
				if ("on" == e.navigationInGrid && (l = t.width() > e.startwidth ? (t.width() - e.startwidth) / 2 : 0, t.height() > e.startheight ? (t.height() - e.startheight) / 2 : 0), "none" != e.navigationArrows && "nexttobullets" != e.navigationArrows) {
					var d = e.soloArrowLeftValign,
						c = e.soloArrowLeftHalign,
						h = e.soloArrowRightValign,
						u = e.soloArrowRightHalign,
						p = e.soloArrowLeftVOffset,
						f = e.soloArrowLeftHOffset,
						m = e.soloArrowRightVOffset,
						g = e.soloArrowRightHOffset;
					s.css({
						position: "absolute"
					}), a.css({
						position: "absolute"
					}), "center" == d ? s.css({
						top: "50%",
						marginTop: p - Math.round(s.innerHeight() / 2) + "px"
					}) : "bottom" == d ? s.css({
						top: "auto",
						bottom: 0 + p + "px"
					}) : "top" == d && s.css({
						bottom: "auto",
						top: 0 + p + "px"
					}), "center" == c ? s.css({
						left: "50%",
						marginLeft: r + f - Math.round(s.innerWidth() / 2) + "px"
					}) : "left" == c ? s.css({
						left: l + f + r + "px"
					}) : "right" == c && s.css({
						right: l + f - r + "px"
					}), "center" == h ? a.css({
						top: "50%",
						marginTop: m - Math.round(a.innerHeight() / 2) + "px"
					}) : "bottom" == h ? a.css({
						top: "auto",
						bottom: 0 + m + "px"
					}) : "top" == h && a.css({
						bottom: "auto",
						top: 0 + m + "px"
					}), "center" == u ? a.css({
						left: "50%",
						marginLeft: r + g - Math.round(a.innerWidth() / 2) + "px"
					}) : "left" == u ? a.css({
						left: l + g + r + "px"
					}) : "right" == u && a.css({
						right: l + g - r + "px"
					}), null != s.position() && s.css({
						top: Math.round(parseInt(s.position().top, 0)) + "px"
					}), null != a.position() && a.css({
						top: Math.round(parseInt(a.position().top, 0)) + "px"
					})
				}
				"none" == e.navigationArrows && (s.css({
					visibility: "hidden"
				}), a.css({
					visibility: "hidden"
				}));
				var v = e.navigationVAlign,
					w = e.navigationHAlign,
					y = e.navigationVOffset * e.bh,
					b = e.navigationHOffset * e.bw;
				"center" == v && n.css({
					top: "50%",
					marginTop: y - Math.round(n.innerHeight() / 2) + "px"
				}), "bottom" == v && n.css({
					bottom: 0 + y + "px"
				}), "top" == v && n.css({
					top: 0 + y + "px"
				}), "center" == w && n.css({
					left: "50%",
					marginLeft: r + b - Math.round(n.innerWidth() / 2) + "px"
				}), "left" == w && n.css({
					left: 0 + b + r + "px"
				}), "right" == w && n.css({
					right: 0 + b - r + "px"
				})
			},
			E = function (t, i) {
				if (i.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
						height: i.container.height()
					}), i.container.closest(".rev_slider_wrapper").css({
						height: i.container.height()
					}), i.width = parseInt(i.container.width(), 0), i.height = parseInt(i.container.height(), 0), i.bw = i.width / i.startwidth, i.bh = i.height / i.startheight, i.bh > i.bw && (i.bh = i.bw), i.bh < i.bw && (i.bw = i.bh), i.bw < i.bh && (i.bh = i.bw), 1 < i.bh && (i.bw = 1, i.bh = 1), 1 < i.bw && (i.bw = 1, i.bh = 1), i.height = Math.round(i.startheight * (i.width / i.startwidth)), i.height > i.startheight && "on" != i.autoHeight && (i.height = i.startheight), "on" == i.fullScreen) {
					i.height = i.bw * i.startheight;
					i.container.parent().width();
					var n = rt(window).height();
					if (i.fullScreenOffsetContainer != lt) {
						try {
							var e = i.fullScreenOffsetContainer.split(",");
							rt.each(e, function (t, e) {
								(n -= rt(e).outerHeight(!0)) < i.minFullScreenHeight && (n = i.minFullScreenHeight)
							})
						} catch (t) {}
						try {
							1 < i.fullScreenOffset.split("%").length && i.fullScreenOffset != lt && 0 < i.fullScreenOffset.length ? n -= rt(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != lt && 0 < i.fullScreenOffset.length && (n -= parseInt(i.fullScreenOffset, 0)), n < i.minFullScreenHeight && (n = i.minFullScreenHeight)
						} catch (t) {}
					}
					i.container.parent().height(n), i.container.closest(".rev_slider_wrapper").height(n), i.container.css({
						height: "100%"
					}), i.height = n, i.minHeight != lt && i.height < i.minHeight && (i.height = i.minHeight)
				} else i.minHeight != lt && i.height < i.minHeight && (i.height = i.minHeight), i.container.height(i.height);
				i.slotw = Math.ceil(i.width / i.slots), "on" == i.fullScreen ? i.sloth = Math.ceil(rt(window).height() / i.slots) : i.sloth = Math.ceil(i.height / i.slots), "on" == i.autoHeight && (i.sloth = Math.ceil(t.height() / i.slots))
			},
			O = function (r, l) {
				r.find(".tp-caption").each(function () {
					rt(this).addClass(rt(this).data("transition")), rt(this).addClass("start")
				}), r.find(">ul:first").css({
					overflow: "hidden",
					width: "100%",
					height: "100%",
					maxHeight: r.parent().css("maxHeight")
				}).addClass("tp-revslider-mainul"), "on" == l.autoHeight && (r.find(">ul:first").css({
					overflow: "hidden",
					width: "100%",
					height: "100%",
					maxHeight: "none"
				}), r.css({
					maxHeight: "none"
				}), r.parent().css({
					maxHeight: "none"
				})), r.find(">ul:first >li").each(function (t) {
					var e = rt(this);
					if (e.addClass("tp-revslider-slidesli"), e.css({
							width: "100%",
							height: "100%",
							overflow: "hidden"
						}), e.data("link") != lt) {
						var i = e.data("link"),
							n = "_self",
							o = 60;
						"back" == e.data("slideindex") && (o = 0);
						var s = checksl = e.data("linktoslide");
						s != lt && "next" != s && "prev" != s && r.find(">ul:first-child >li").each(function () {
							var t = rt(this);
							t.data("origindex") + 1 == checksl && (s = t.index() + 1)
						}), e.data("target") != lt && (n = e.data("target")), "slide" != i && (s = "no");
						var a = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + o + ';" data-x="center" data-y="center" data-linktoslide="' + s + '" data-start="0"><a style="width:100%;height:100%;display:block"';
						"slide" != i && (a = a + ' target="' + n + '" href="' + i + '"'), a += '><span style="width:100%;height:100%;display:block"></span></a></div>', e.append(a)
					}
				}), r.parent().css({
					overflow: "visible"
				}), r.find(">ul:first >li >img").each(function (t) {
					var e = rt(this);
					e.addClass("defaultimg"), e.data("lazyload") != lt && 1 != e.data("lazydone") || E(e, l), dt(8) && e.data("kenburns", "off"), "on" == l.panZoomDisableOnMobile && _t() && (e.data("kenburns", "off"), e.data("bgfit", "cover")), e.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + e.data("duration") + '"data-zoomstart="' + e.data("zoomstart") + '"data-zoomend="' + e.data("zoomend") + '"data-rotationstart="' + e.data("rotationstart") + '"data-rotationend="' + e.data("rotationend") + '"data-ease="' + e.data("ease") + '"data-duration="' + e.data("duration") + '"data-bgpositionend="' + e.data("bgpositionend") + '"data-bgposition="' + e.data("bgposition") + '"data-duration="' + e.data("duration") + '"data-kenburns="' + e.data("kenburns") + '"data-easeme="' + e.data("ease") + '"data-bgfit="' + e.data("bgfit") + '"data-bgfitend="' + e.data("bgfitend") + '"data-owidth="' + e.data("owidth") + '"data-oheight="' + e.data("oheight") + '"></div>'), "none" != l.dottedOverlay && l.dottedOverlay != lt && e.closest(".slotholder").append('<div class="tp-dottedoverlay ' + l.dottedOverlay + '"></div>');
					var i = e.attr("src"),
						n = (e.data("lazyload"), e.data("bgfit")),
						o = e.data("bgrepeat"),
						s = e.data("bgposition");
					n == lt && (n = "cover"), o == lt && (o = "no-repeat"), s == lt && (s = "center center");
					var a = e.closest(".slotholder");
					e.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + e.data("lazyload") + '" data-bgfit="' + n + '"data-bgposition="' + s + '" data-bgrepeat="' + o + '" data-lazydone="' + e.data("lazydone") + '" src="' + i + '" data-src="' + i + '" style="background-color:' + e.css("backgroundColor") + ";background-repeat:" + o + ";background-image:url(" + i + ");background-size:" + n + ";background-position:" + s + ';width:100%;height:100%;"></div>'), dt(8) && (a.find(".tp-bgimg").css({
						backgroundImage: "none",
						"background-image": "none"
					}), a.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + i + '" style="width:100%">')), e.css({
						opacity: 0
					}), e.data("li-id", t)
				})
			},
			K = function (t, e, i, n) {
				var o = t,
					s = o.find(".defaultimg"),
					a = o.data("zoomstart"),
					r = o.data("rotationstart");
				s.data("currotate") != lt && (r = s.data("currotate")), s.data("curscale") != lt && "box" == n ? a = 100 * s.data("curscale") : s.data("curscale") != lt && (a = s.data("curscale")), E(s, e);
				var l = s.data("src"),
					d = s.css("backgroundColor"),
					c = e.width,
					h = e.height,
					u = s.data("fxof");
				"on" == e.autoHeight && (h = e.container.height()), u == lt && (u = 0);
				var p = 0,
					f = s.data("bgfit"),
					m = s.data("bgrepeat"),
					g = s.data("bgposition");
				if (f == lt && (f = "cover"), m == lt && (m = "no-repeat"), g == lt && (g = "center center"), dt(8)) {
					o.data("kenburns", "off");
					var v = l;
					l = ""
				}
				switch (n) {
					case "box":
						var w = 0,
							y = 0,
							b = 0;
						if (w = e.sloth > e.slotw ? e.sloth : e.slotw, !i) p = 0 - w;
						e.slotw = w, e.sloth = w;
						y = 0, b = 0;
						"on" == o.data("kenburns") && (f = a).toString().length < 4 && (f = W(f, o, e));
						for (var _ = 0; _ < e.slots; _++) {
							for (var x = b = 0; x < e.slots; x++) o.append('<div class="slot" style="position:absolute;top:' + (0 + b) + "px;left:" + (u + y) + "px;width:" + w + "px;height:" + w + 'px;overflow:hidden;"><div class="slotslide" data-x="' + y + '" data-y="' + b + '" style="position:absolute;top:0px;left:0px;width:' + w + "px;height:" + w + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - b) + "px;left:" + (0 - y) + "px;width:" + c + "px;height:" + h + "px;background-color:" + d + ";background-image:url(" + l + ");background-repeat:" + m + ";background-size:" + f + ";background-position:" + g + ';"></div></div></div>'), b += w, dt(8) && (o.find(".slot ").last().find(".slotslide").append('<img src="' + v + '">'), A(o, e)), a != lt && r != lt && punchgs.TweenLite.set(o.find(".slot").last(), {
								rotationZ: r
							});
							y += w
						}
						break;
					case "vertical":
					case "horizontal":
						if ("on" == o.data("kenburns") && (f = a).toString().length < 4 && (f = W(f, o, e)), "horizontal" == n) {
							if (!i) p = 0 - e.slotw;
							for (x = 0; x < e.slots; x++) o.append('<div class="slot" style="position:absolute;top:0px;left:' + (u + x * e.slotw) + "px;overflow:hidden;width:" + (e.slotw + .6) + "px;height:" + h + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + p + "px;width:" + (e.slotw + .6) + "px;height:" + h + 'px;overflow:hidden;"><div style="background-color:' + d + ";position:absolute;top:0px;left:" + (0 - x * e.slotw) + "px;width:" + c + "px;height:" + h + "px;background-image:url(" + l + ");background-repeat:" + m + ";background-size:" + f + ";background-position:" + g + ';"></div></div></div>'), a != lt && r != lt && punchgs.TweenLite.set(o.find(".slot").last(), {
								rotationZ: r
							}), dt(8) && (o.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + v + '" style="width:100%;height:auto">'), A(o, e))
						} else {
							if (!i) p = 0 - e.sloth;
							for (x = 0; x < e.slots + 2; x++) o.append('<div class="slot" style="position:absolute;top:' + (0 + x * e.sloth) + "px;left:" + u + "px;overflow:hidden;width:" + c + "px;height:" + e.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + p + "px;left:0px;width:" + c + "px;height:" + e.sloth + 'px;overflow:hidden;"><div style="background-color:' + d + ";position:absolute;top:" + (0 - x * e.sloth) + "px;left:0px;width:" + c + "px;height:" + h + "px;background-image:url(" + l + ");background-repeat:" + m + ";background-size:" + f + ";background-position:" + g + ';"></div></div></div>'), a != lt && r != lt && punchgs.TweenLite.set(o.find(".slot").last(), {
								rotationZ: r
							}), dt(8) && (o.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + v + '" style="width:100%;height:auto;">'), A(o, e))
						}
				}
			},
			A = function (n, o) {
				if (dt(8)) {
					var s = n.find(".ieeightfallbackimage");
					s.width(), s.height();
					o.startwidth / o.startheight < n.data("owidth") / n.data("oheight") ? s.css({
						width: "auto",
						height: "100%"
					}) : s.css({
						width: "100%",
						height: "auto"
					}), setTimeout(function () {
						var t = s.width(),
							e = s.height(),
							i = n.data("bgposition");
						"center center" == i && s.css({
							position: "absolute",
							top: o.height / 2 - e / 2 + "px",
							left: o.width / 2 - t / 2 + "px"
						}), "center top" != i && "top center" != i || s.css({
							position: "absolute",
							top: "0px",
							left: o.width / 2 - t / 2 + "px"
						}), "center bottom" != i && "bottom center" != i || s.css({
							position: "absolute",
							bottom: "0px",
							left: o.width / 2 - t / 2 + "px"
						}), "right top" != i && "top right" != i || s.css({
							position: "absolute",
							top: "0px",
							right: "0px"
						}), "right bottom" != i && "bottom right" != i || s.css({
							position: "absolute",
							bottom: "0px",
							right: "0px"
						}), "right center" != i && "center right" != i || s.css({
							position: "absolute",
							top: o.height / 2 - e / 2 + "px",
							right: "0px"
						}), "left bottom" != i && "bottom left" != i || s.css({
							position: "absolute",
							bottom: "0px",
							left: "0px"
						}), "left center" != i && "center left" != i || s.css({
							position: "absolute",
							top: o.height / 2 - e / 2 + "px",
							left: "0px"
						})
					}, 20)
				}
			},
			c = function (t, e, i) {
				i.find(".slot").each(function () {
					rt(this).remove()
				}), e.transition = 0
			},
			s = function (t, o) {
				t.find("img, .defaultimg").each(function (t) {
					var e, i = rt(this),
						n = i.data("lazyload");
					n != i.attr("src") && o < 3 && n != lt && "undefined" != n ? n != lt && "undefined" != n && (i.attr("src", n), (e = new Image).onload = function (t) {
						i.data("lazydone", 1), i.hasClass("defaultimg") && a(i, e)
					}, e.error = function () {
						i.data("lazydone", 1)
					}, e.src = i.attr("src"), e.complete && (i.hasClass("defaultimg") && a(i, e), i.data("lazydone", 1))) : n !== lt && "undefined" !== n || 1 == i.data("lazydone") || ((e = new Image).onload = function () {
						i.hasClass("defaultimg") && a(i, e), i.data("lazydone", 1)
					}, e.error = function () {
						i.data("lazydone", 1)
					}, i.attr("src") != lt && "undefined" != i.attr("src") ? e.src = i.attr("src") : e.src = i.data("src"), e.complete && (i.hasClass("defaultimg") && a(i, e), i.data("lazydone", 1)))
				})
			},
			a = function (t, e) {
				var i = t.closest("li"),
					n = e.width,
					o = e.height;
				i.data("owidth", n), i.data("oheight", o), i.find(".slotholder").data("owidth", n), i.find(".slotholder").data("oheight", o), i.data("loadeddone", 1)
			},
			t = function (t, i, n) {
				s(t, 0);
				var o = setInterval(function () {
					n.bannertimeronpause = !0, n.container.trigger("stoptimer");
					var e = n.cd = 0;
					t.find("img, .defaultimg").each(function (t) {
						1 != rt(this).data("lazydone") && e++
					}), 0 < e ? s(t, e) : (clearInterval(o), i != lt && i())
				}, 100)
			},
			P = function (i, n) {
				try {
					i.find(">ul:first-child >li:eq(" + n.act + ")")
				} catch (t) {
					i.find(">ul:first-child >li:eq(1)")
				}
				n.lastslide = n.act;
				var o = i.find(">ul:first-child >li:eq(" + n.next + ")"),
					s = o.find(".defaultimg");
				n.bannertimeronpause = !0, i.trigger("stoptimer"), n.cd = 0, s.data("lazyload") != lt && "undefined" != s.data("lazyload") && 1 != s.data("lazydone") ? (dt(8) ? s.attr("src", o.find(".defaultimg").data("lazyload")) : s.css({
					backgroundImage: 'url("' + o.find(".defaultimg").data("lazyload") + '")'
				}), s.data("src", o.find(".defaultimg").data("lazyload")), s.data("lazydone", 0), s.data("orgw", 0), o.data("loadeddone", 1), i.find(".tp-loader").css({
					display: "block"
				}), t(i.find(".tp-static-layers"), function () {
					t(o, function () {
						var t = o.find(".slotholder");
						if ("on" == t.data("kenburns")) var e = setInterval(function () {
							0 <= t.data("owidth") && (clearInterval(e), r(n, s, i))
						}, 10);
						else r(n, s, i)
					}, n)
				}, n)) : o.data("loadeddone") === lt ? (o.data("loadeddone", 1), t(o, function () {
					r(n, s, i)
				}, n)) : r(n, s, i)
			},
			r = function (t, e, i) {
				t.bannertimeronpause = !1, t.cd = 0, i.trigger("nulltimer"), i.find(".tp-loader").css({
					display: "none"
				}), E(e, t), l(i, t), E(e, t), n(i, t)
			},
			n = function (e, t) {
				e.trigger("revolution.slide.onbeforeswap"), t.transition = 1, t.videoplaying = !1;
				try {
					var i = e.find(">ul:first-child >li:eq(" + t.act + ")")
				} catch (t) {
					i = e.find(">ul:first-child >li:eq(1)")
				}
				t.lastslide = t.act;
				var n = e.find(">ul:first-child >li:eq(" + t.next + ")");
				setTimeout(function () {
					! function (t) {
						var e = t.container;
						t.beforli = t.next - 1, t.comingli = t.next + 1, t.beforli < 0 && (t.beforli = t.slideamount - 1), t.comingli >= t.slideamount && (t.comingli = 0);
						var i = e.find(">ul:first-child >li:eq(" + t.comingli + ")"),
							n = e.find(">ul:first-child >li:eq(" + t.beforli + ")"),
							o = n.find(".defaultimg").attr("src"),
							s = i.find(".defaultimg").attr("src");
						t.arr == lt && (t.arr = e.parent().find(".tparrows"), t.rar = e.parent().find(".tp-rightarrow"), t.lar = e.parent().find(".tp-leftarrow"), t.raimg = t.rar.find(".tp-arr-imgholder"), t.laimg = t.lar.find(".tp-arr-imgholder"), t.raimg_b = t.rar.find(".tp-arr-imgholder2"), t.laimg_b = t.lar.find(".tp-arr-imgholder2"), t.ratit = t.rar.find(".tp-arr-titleholder"), t.latit = t.lar.find(".tp-arr-titleholder"));
						var a = t.arr,
							r = t.rar,
							l = t.lar,
							d = t.raimg,
							c = t.laimg,
							h = t.raimg_b,
							u = t.laimg_b,
							p = t.ratit,
							f = t.latit;
						if (i.data("title") != lt && p.html(i.data("title")), n.data("title") != lt && f.html(n.data("title")), r.hasClass("itishovered") && r.width(p.outerWidth(!0) + parseInt(r.css("minWidth"), 0)), l.hasClass("itishovered") && l.width(f.outerWidth(!0) + parseInt(l.css("minWidth"), 0)), a.hasClass("preview2") && !a.hasClass("hashoveralready"))
							if (a.addClass("hashoveralready"), _t()) {
								var m = (a = rt(this)).find(".tp-arr-titleholder");
								m.addClass("alwayshidden"), punchgs.TweenLite.set(m, {
									autoAlpha: 0
								})
							} else a.hover(function () {
								var t = rt(this),
									e = t.find(".tp-arr-titleholder");
								767 < rt(window).width() && t.width(e.outerWidth(!0) + parseInt(t.css("minWidth"), 0)), t.addClass("itishovered")
							}, function () {
								var t = rt(this);
								t.find(".tp-arr-titleholder"), t.css({
									width: parseInt(t.css("minWidth"), 0)
								}), t.removeClass("itishovered")
							});
						n.data("thumb") != lt && (o = n.data("thumb")), i.data("thumb") != lt && (s = i.data("thumb")), a.hasClass("preview4") ? (h.css({
							backgroundImage: "url(" + s + ")"
						}), u.css({
							backgroundImage: "url(" + o + ")"
						}), punchgs.TweenLite.fromTo(h, .8, {
							force3D: punchgs.force3d,
							x: 0
						}, {
							x: -d.width(),
							ease: punchgs.Power3.easeOut,
							delay: 1,
							onComplete: function () {
								d.css({
									backgroundImage: "url(" + s + ")"
								}), punchgs.TweenLite.set(h, {
									x: 0
								})
							}
						}), punchgs.TweenLite.fromTo(u, .8, {
							force3D: punchgs.force3d,
							x: 0
						}, {
							x: d.width(),
							ease: punchgs.Power3.easeOut,
							delay: 1,
							onComplete: function () {
								c.css({
									backgroundImage: "url(" + o + ")"
								}), punchgs.TweenLite.set(u, {
									x: 0
								})
							}
						}), punchgs.TweenLite.fromTo(d, .8, {
							x: 0
						}, {
							force3D: punchgs.force3d,
							x: -d.width(),
							ease: punchgs.Power3.easeOut,
							delay: 1,
							onComplete: function () {
								punchgs.TweenLite.set(d, {
									x: 0
								})
							}
						}), punchgs.TweenLite.fromTo(c, .8, {
							x: 0
						}, {
							force3D: punchgs.force3d,
							x: d.width(),
							ease: punchgs.Power3.easeOut,
							delay: 1,
							onComplete: function () {
								punchgs.TweenLite.set(c, {
									x: 0
								})
							}
						})) : (punchgs.TweenLite.to(d, .5, {
							autoAlpha: 0,
							onComplete: function () {
								d.css({
									backgroundImage: "url(" + s + ")"
								}), c.css({
									backgroundImage: "url(" + o + ")"
								})
							}
						}), punchgs.TweenLite.to(c, .5, {
							autoAlpha: 0,
							onComplete: function () {
								punchgs.TweenLite.to(d, .5, {
									autoAlpha: 1,
									delay: .2
								}), punchgs.TweenLite.to(c, .5, {
									autoAlpha: 1,
									delay: .2
								})
							}
						})), r.hasClass("preview4") && !r.hasClass("hashoveralready") && (r.addClass("hashoveralready"), r.hover(function () {
							var t = rt(this).find(".tp-arr-iwrapper"),
								e = rt(this).find(".tp-arr-allwrapper");
							punchgs.TweenLite.fromTo(t, .4, {
								x: t.width()
							}, {
								x: 0,
								delay: .3,
								ease: punchgs.Power3.easeOut,
								overwrite: "all"
							}), punchgs.TweenLite.to(e, .2, {
								autoAlpha: 1,
								overwrite: "all"
							})
						}, function () {
							var t = rt(this).find(".tp-arr-iwrapper"),
								e = rt(this).find(".tp-arr-allwrapper");
							punchgs.TweenLite.to(t, .4, {
								x: t.width(),
								ease: punchgs.Power3.easeOut,
								delay: .2,
								overwrite: "all"
							}), punchgs.TweenLite.to(e, .2, {
								delay: .6,
								autoAlpha: 0,
								overwrite: "all"
							})
						}), l.hover(function () {
							var t = rt(this).find(".tp-arr-iwrapper"),
								e = rt(this).find(".tp-arr-allwrapper");
							punchgs.TweenLite.fromTo(t, .4, {
								x: 0 - t.width()
							}, {
								x: 0,
								delay: .3,
								ease: punchgs.Power3.easeOut,
								overwrite: "all"
							}), punchgs.TweenLite.to(e, .2, {
								autoAlpha: 1,
								overwrite: "all"
							})
						}, function () {
							var t = rt(this).find(".tp-arr-iwrapper"),
								e = rt(this).find(".tp-arr-allwrapper");
							punchgs.TweenLite.to(t, .4, {
								x: 0 - t.width(),
								ease: punchgs.Power3.easeOut,
								delay: .2,
								overwrite: "all"
							}), punchgs.TweenLite.to(e, .2, {
								delay: .6,
								autoAlpha: 0,
								overwrite: "all"
							})
						}))
					}(t)
				}, 200);
				var o = i.find(".slotholder"),
					s = n.find(".slotholder");
				"on" != s.data("kenburns") && "on" != o.data("kenburns") || (p(e, t), e.find(".kenburnimg").remove()), n.data("delay") != lt ? (t.cd = 0, t.delay = n.data("delay")) : t.delay = t.origcd, 1 == t.firststart && punchgs.TweenLite.set(i, {
					autoAlpha: 0
				}), punchgs.TweenLite.set(i, {
					zIndex: 18
				}), punchgs.TweenLite.set(n, {
					autoAlpha: 0,
					zIndex: 20
				});
				var a = 0;
				i.index() != n.index() && 1 != t.firststart && (a = u(i, t)), "on" != i.data("saveperformance") && (a = 0), setTimeout(function () {
					e.trigger("restarttimer"), h(e, t, n, i, o, s)
				}, a)
			},
			h = function (t, s, e, i, n, o) {
				function a() {
					rt.each(u, function (t, e) {
						e[0] != c && e[8] != c || (r = e[1], h = e[2], m = g), g += 1
					})
				}
				"prepared" == e.data("differentissplayed") && (e.data("differentissplayed", "done"), e.data("transition", e.data("savedtransition")), e.data("slotamount", e.data("savedslotamount")), e.data("masterspeed", e.data("savedmasterspeed"))), e.data("fstransition") != lt && "done" != e.data("differentissplayed") && (e.data("savedtransition", e.data("transition")), e.data("savedslotamount", e.data("slotamount")), e.data("savedmasterspeed", e.data("masterspeed")), e.data("transition", e.data("fstransition")), e.data("slotamount", e.data("fsslotamount")), e.data("masterspeed", e.data("fsmasterspeed")), e.data("differentissplayed", "prepared")), t.find(".active-revslide").removeClass(".active-revslide"), e.addClass("active-revslide"), e.data("transition") == lt && e.data("transition", "random");
				var r = 0,
					l = e.data("transition").split(","),
					d = e.data("nexttransid") == lt ? -1 : e.data("nexttransid");
				"on" == e.data("randomtransition") ? d = Math.round(Math.random() * l.length) : d += 1, d == l.length && (d = 0), e.data("nexttransid", d);
				var c = l[d];
				s.ie && ("boxfade" == c && (c = "boxslide"), "slotfade-vertical" == c && (c = "slotzoom-vertical"), "slotfade-horizontal" == c && (c = "slotzoom-horizontal")), dt(8) && (c = 11);
				var h = 0;
				"scroll" == s.parallax && s.parallaxFirstGo == lt && (s.parallaxFirstGo = !0, nt(t, s), setTimeout(function () {
					nt(t, s)
				}, 210), setTimeout(function () {
					nt(t, s)
				}, 420)), "slidehorizontal" == c && (c = "slideleft", 1 == s.leftarrowpressed && (c = "slideright")), "slidevertical" == c && (c = "slideup", 1 == s.leftarrowpressed && (c = "slidedown")), "parallaxhorizontal" == c && (c = "parallaxtoleft", 1 == s.leftarrowpressed && (c = "parallaxtoright")), "parallaxvertical" == c && (c = "parallaxtotop", 1 == s.leftarrowpressed && (c = "parallaxtobottom"));
				var u = [
						["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
						["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
						["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
						["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
						["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
						["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
						["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
						["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
						["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
						["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
						["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
						["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
						["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
						["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
						["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
						["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
						["papercut", 16, 0, 0, 600, "", null, null, 16],
						["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
						["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
						["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
						["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
						["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
						["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
						["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23],
						["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
						["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
						["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
						["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27],
						["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
						["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
						["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
						["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
						["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
						["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
						["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
						["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
						["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
						["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
						["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
						["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
						["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
						["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
						["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
						["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
						["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
						["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
						["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
					],
					p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
					f = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
					m = (r = 0, h = 1, 0),
					g = 0,
					v = new Array;
				"on" == o.data("kenburns") && ("boxslide" != c && 0 != c && "boxfade" != c && 1 != c && "papercut" != c && 16 != c || (c = 11), it(t, s, !0, !0)), "random" == c && (c = Math.round(Math.random() * u.length - 1), u.length - 1 < c && (c = u.length - 1)), "random-static" == c && (c = Math.round(Math.random() * p.length - 1), p.length - 1 < c && (c = p.length - 1), c = p[c]), "random-premium" == c && (c = Math.round(Math.random() * f.length - 1), f.length - 1 < c && (c = f.length - 1), c = f[c]);
				if (1 == s.isJoomla && window.MooTools != lt && -1 != [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].indexOf(c)) {
					var w = Math.round(Math.random() * (f.length - 2)) + 1;
					f.length - 1 < w && (w = f.length - 1), 0 == w && (w = 1), c = f[w]
				}
				a(), dt(8) && 15 < r && r < 28 && (c = Math.round(Math.random() * p.length - 1), p.length - 1 < c && (c = p.length - 1), c = p[c], g = 0, a());
				var y = -1;
				(1 == s.leftarrowpressed || s.act > s.next) && (y = 1), s.leftarrowpressed = 0, 26 < r && (r = 26), r < 0 && (r = 0);
				var b = 300;
				e.data("masterspeed") != lt && 99 < e.data("masterspeed") && e.data("masterspeed") < s.delay && (b = e.data("masterspeed")), e.data("masterspeed") != lt && e.data("masterspeed") > s.delay && (b = s.delay), v = u[m], t.parent().find(".bullet").each(function () {
					var t = rt(this),
						e = t.index();
					t.removeClass("selected"), "withbullet" != s.navigationArrows && "nexttobullets" != s.navigationArrows || (e = t.index() - 1), e == s.next && t.addClass("selected")
				});
				var _ = new punchgs.TimelineLite({
					onComplete: function () {
						tt(t, s, o, n, e, i, _)
					}
				});
				if (_.add(punchgs.TweenLite.set(o.find(".defaultimg"), {
						opacity: 0
					})), _.pause(), e.data("slotamount") == lt || e.data("slotamount") < 1 ? (s.slots = Math.round(12 * Math.random() + 4), "boxslide" == c ? s.slots = Math.round(6 * Math.random() + 3) : "flyin" == c && (s.slots = Math.round(4 * Math.random() + 1))) : s.slots = e.data("slotamount"), e.data("rotate") == lt ? s.rotate = 0 : 999 == e.data("rotate") ? s.rotate = Math.round(360 * Math.random()) : s.rotate = e.data("rotate"), (!rt.support.transition || s.ie || s.ie9) && (s.rotate = 0), 1 == s.firststart && (s.firststart = 0), b += v[4], (4 == r || 5 == r || 6 == r) && s.slots < 3 && (s.slots = 3), 0 != v[3] && (s.slots = Math.min(s.slots, v[3])), 9 == r && (s.slots = s.width / 20), 10 == r && (s.slots = s.height / 20), null != v[7] && K(n, s, v[7], v[5]), null != v[6] && K(o, s, v[6], v[5]), 0 == r) {
					var x = Math.ceil(s.height / s.sloth),
						T = 0;
					o.find(".slotslide").each(function (t) {
						var e = rt(this);
						(T += 1) == x && (T = 0), _.add(punchgs.TweenLite.from(e, b / 600, {
							opacity: 0,
							top: 0 - s.sloth,
							left: 0 - s.slotw,
							rotation: s.rotate,
							force3D: "auto",
							ease: punchgs.Power2.easeOut
						}), (15 * t + 30 * T) / 1500)
					})
				}
				if (1 == r) {
					var k;
					o.find(".slotslide").each(function (t) {
						var e = rt(this),
							i = Math.random() * b + 300,
							n = 500 * Math.random() + 200;
						k < i + n && (k = n + n, t), _.add(punchgs.TweenLite.from(e, i / 1e3, {
							autoAlpha: 0,
							force3D: "auto",
							rotation: s.rotate,
							ease: punchgs.Power2.easeInOut
						}), n / 1e3)
					})
				}
				if (2 == r) {
					var C = new punchgs.TimelineLite;
					n.find(".slotslide").each(function () {
						var t = rt(this);
						C.add(punchgs.TweenLite.to(t, b / 1e3, {
							left: s.slotw,
							force3D: "auto",
							rotation: 0 - s.rotate
						}), 0), _.add(C, 0)
					}), o.find(".slotslide").each(function () {
						var t = rt(this);
						C.add(punchgs.TweenLite.from(t, b / 1e3, {
							left: 0 - s.slotw,
							force3D: "auto",
							rotation: s.rotate
						}), 0), _.add(C, 0)
					})
				}
				if (3 == r) {
					C = new punchgs.TimelineLite;
					n.find(".slotslide").each(function () {
						var t = rt(this);
						C.add(punchgs.TweenLite.to(t, b / 1e3, {
							top: s.sloth,
							rotation: s.rotate,
							force3D: "auto",
							transformPerspective: 600
						}), 0), _.add(C, 0)
					}), o.find(".slotslide").each(function () {
						var t = rt(this);
						C.add(punchgs.TweenLite.from(t, b / 1e3, {
							top: 0 - s.sloth,
							rotation: s.rotate,
							ease: punchgs.Power2.easeOut,
							force3D: "auto",
							transformPerspective: 600
						}), 0), _.add(C, 0)
					})
				}
				if (4 == r || 5 == r) {
					setTimeout(function () {
						n.find(".defaultimg").css({
							opacity: 0
						})
					}, 100);
					var S = b / 1e3;
					C = new punchgs.TimelineLite;
					n.find(".slotslide").each(function (t) {
						var e = rt(this),
							i = t * S / s.slots;
						5 == r && (i = (s.slots - t - 1) * S / s.slots / 1.5), C.add(punchgs.TweenLite.to(e, 3 * S, {
							transformPerspective: 600,
							force3D: "auto",
							top: 0 + s.height,
							opacity: .5,
							rotation: s.rotate,
							ease: punchgs.Power2.easeInOut,
							delay: i
						}), 0), _.add(C, 0)
					}), o.find(".slotslide").each(function (t) {
						var e = rt(this),
							i = t * S / s.slots;
						5 == r && (i = (s.slots - t - 1) * S / s.slots / 1.5), C.add(punchgs.TweenLite.from(e, 3 * S, {
							top: 0 - s.height,
							opacity: .5,
							rotation: s.rotate,
							force3D: "auto",
							ease: punchgs.Power2.easeInOut,
							delay: i
						}), 0), _.add(C, 0)
					})
				}
				if (6 == r) {
					s.slots < 2 && (s.slots = 2), s.slots % 2 && (s.slots = s.slots + 1);
					C = new punchgs.TimelineLite;
					setTimeout(function () {
						n.find(".defaultimg").css({
							opacity: 0
						})
					}, 100), n.find(".slotslide").each(function (t) {
						var e = rt(this);
						if (t + 1 < s.slots / 2) var i = 90 * (t + 2);
						else i = 90 * (2 + s.slots - t);
						C.add(punchgs.TweenLite.to(e, (b + i) / 1e3, {
							top: 0 + s.height,
							opacity: 1,
							force3D: "auto",
							rotation: s.rotate,
							ease: punchgs.Power2.easeInOut
						}), 0), _.add(C, 0)
					}), o.find(".slotslide").each(function (t) {
						var e = rt(this);
						if (t + 1 < s.slots / 2) var i = 90 * (t + 2);
						else i = 90 * (2 + s.slots - t);
						C.add(punchgs.TweenLite.from(e, (b + i) / 1e3, {
							top: 0 - s.height,
							opacity: 1,
							force3D: "auto",
							rotation: s.rotate,
							ease: punchgs.Power2.easeInOut
						}), 0), _.add(C, 0)
					})
				}
				if (7 == r) {
					(b *= 2) > s.delay && (b = s.delay);
					C = new punchgs.TimelineLite;
					setTimeout(function () {
						n.find(".defaultimg").css({
							opacity: 0
						})
					}, 100), n.find(".slotslide").each(function () {
						var t = rt(this).find("div");
						C.add(punchgs.TweenLite.to(t, b / 1e3, {
							left: 0 - s.slotw / 2 + "px",
							top: 0 - s.height / 2 + "px",
							width: 2 * s.slotw + "px",
							height: 2 * s.height + "px",
							opacity: 0,
							rotation: s.rotate,
							force3D: "auto",
							ease: punchgs.Power2.easeOut
						}), 0), _.add(C, 0)
					}), o.find(".slotslide").each(function (t) {
						var e = rt(this).find("div");
						C.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							left: 0,
							top: 0,
							opacity: 0,
							transformPerspective: 600
						}, {
							left: 0 - t * s.slotw + "px",
							ease: punchgs.Power2.easeOut,
							force3D: "auto",
							top: "0px",
							width: s.width,
							height: s.height,
							opacity: 1,
							rotation: 0,
							delay: .1
						}), 0), _.add(C, 0)
					})
				}
				if (8 == r) {
					(b *= 3) > s.delay && (b = s.delay);
					C = new punchgs.TimelineLite;
					n.find(".slotslide").each(function () {
						var t = rt(this).find("div");
						C.add(punchgs.TweenLite.to(t, b / 1e3, {
							left: 0 - s.width / 2 + "px",
							top: 0 - s.sloth / 2 + "px",
							width: 2 * s.width + "px",
							height: 2 * s.sloth + "px",
							force3D: "auto",
							opacity: 0,
							rotation: s.rotate
						}), 0), _.add(C, 0)
					}), o.find(".slotslide").each(function (t) {
						var e = rt(this).find("div");
						C.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							left: 0,
							top: 0,
							opacity: 0,
							force3D: "auto"
						}, {
							left: "0px",
							top: 0 - t * s.sloth + "px",
							width: o.find(".defaultimg").data("neww") + "px",
							height: o.find(".defaultimg").data("newh") + "px",
							opacity: 1,
							rotation: 0
						}), 0), _.add(C, 0)
					})
				}
				if (9 == r || 10 == r) {
					o.find(".slotslide").each(function (t) {
						var e = rt(this);
						0, _.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							autoAlpha: 0,
							force3D: "auto",
							transformPerspective: 600
						}, {
							autoAlpha: 1,
							ease: punchgs.Power2.easeInOut,
							delay: 5 * t / 1e3
						}), 0)
					})
				}
				if (11 == r || 26 == r) {
					26 == r && (b = 0), o.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.from(e, b / 1e3, {
							autoAlpha: 0,
							force3D: "auto",
							ease: punchgs.Power2.easeInOut
						}), 0)
					})
				}
				if (12 == r || 13 == r || 14 == r || 15 == r) {
					(b = b) > s.delay && (b = s.delay), setTimeout(function () {
						punchgs.TweenLite.set(n.find(".defaultimg"), {
							autoAlpha: 0
						})
					}, 100);
					var z = s.width,
						I = s.height,
						L = o.find(".slotslide"),
						E = 0,
						O = 0,
						A = 1,
						P = 1,
						D = 1,
						W = punchgs.Power2.easeInOut,
						M = punchgs.Power2.easeInOut,
						H = b / 1e3,
						F = H;
					"on" != s.fullWidth && "on" != s.fullScreen || (z = L.width(), I = L.height()), 12 == r ? E = z : 15 == r ? E = 0 - z : 13 == r ? O = I : 14 == r && (O = 0 - I), 1 == h && (A = 0), 2 == h && (A = 0), 3 == h && (W = punchgs.Power2.easeInOut, M = punchgs.Power1.easeInOut, H = b / 1200), 4 != h && 5 != h || (P = .6), 6 == h && (P = 1.4), 5 != h && 6 != h || (D = 1.4, O = E = I = z = A = 0), 6 == h && (D = .6);
					_.add(punchgs.TweenLite.from(L, H, {
						left: E,
						top: O,
						scale: D,
						opacity: A,
						rotation: s.rotate,
						ease: M,
						force3D: "auto"
					}), 0);
					var R = n.find(".slotslide");
					if (4 != h && 5 != h || (I = z = 0), 1 != h) switch (r) {
						case 12:
							_.add(punchgs.TweenLite.to(R, F, {
								left: 0 - z + "px",
								force3D: "auto",
								scale: P,
								opacity: A,
								rotation: s.rotate,
								ease: W
							}), 0);
							break;
						case 15:
							_.add(punchgs.TweenLite.to(R, F, {
								left: z + "px",
								force3D: "auto",
								scale: P,
								opacity: A,
								rotation: s.rotate,
								ease: W
							}), 0);
							break;
						case 13:
							_.add(punchgs.TweenLite.to(R, F, {
								top: 0 - I + "px",
								force3D: "auto",
								scale: P,
								opacity: A,
								rotation: s.rotate,
								ease: W
							}), 0);
							break;
						case 14:
							_.add(punchgs.TweenLite.to(R, F, {
								top: I + "px",
								force3D: "auto",
								scale: P,
								opacity: A,
								rotation: s.rotate,
								ease: W
							}), 0)
					}
				}
				if (16 == r) {
					C = new punchgs.TimelineLite;
					_.add(punchgs.TweenLite.set(i, {
						position: "absolute",
						"z-index": 20
					}), 0), _.add(punchgs.TweenLite.set(e, {
						position: "absolute",
						"z-index": 15
					}), 0), i.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), i.find(".tp-half-one").clone(!0).appendTo(i).addClass("tp-half-two"), i.find(".tp-half-two").removeClass("tp-half-one");
					z = s.width, I = s.height;
					"on" == s.autoHeight && (I = t.height()), i.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + z + "px;height:" + I + 'px;"></div>'), i.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + z + "px;height:" + I + 'px;"></div>'), i.find(".tp-half-two .defaultimg").css({
						position: "absolute",
						top: "-50%"
					}), i.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), _.add(punchgs.TweenLite.set(i.find(".tp-half-two"), {
						width: z,
						height: I,
						overflow: "hidden",
						zIndex: 15,
						position: "absolute",
						top: I / 2,
						left: "0px",
						transformPerspective: 600,
						transformOrigin: "center bottom"
					}), 0), _.add(punchgs.TweenLite.set(i.find(".tp-half-one"), {
						width: z,
						height: I / 2,
						overflow: "visible",
						zIndex: 10,
						position: "absolute",
						top: "0px",
						left: "0px",
						transformPerspective: 600,
						transformOrigin: "center top"
					}), 0);
					i.find(".defaultimg");
					var j = Math.round(20 * Math.random() - 10),
						$ = Math.round(20 * Math.random() - 10),
						N = Math.round(20 * Math.random() - 10),
						B = .4 * Math.random() - .2,
						X = .4 * Math.random() - .2,
						Y = 1 * Math.random() + 1,
						q = 1 * Math.random() + 1,
						U = .3 * Math.random() + .3;
					_.add(punchgs.TweenLite.set(i.find(".tp-half-one"), {
						overflow: "hidden"
					}), 0), _.add(punchgs.TweenLite.fromTo(i.find(".tp-half-one"), b / 800, {
						width: z,
						height: I / 2,
						position: "absolute",
						top: "0px",
						left: "0px",
						force3D: "auto",
						transformOrigin: "center top"
					}, {
						scale: Y,
						rotation: j,
						y: 0 - I - I / 4,
						autoAlpha: 0,
						ease: punchgs.Power2.easeInOut
					}), 0), _.add(punchgs.TweenLite.fromTo(i.find(".tp-half-two"), b / 800, {
						width: z,
						height: I,
						overflow: "hidden",
						position: "absolute",
						top: I / 2,
						left: "0px",
						force3D: "auto",
						transformOrigin: "center bottom"
					}, {
						scale: q,
						rotation: $,
						y: I + I / 4,
						ease: punchgs.Power2.easeInOut,
						autoAlpha: 0,
						onComplete: function () {
							punchgs.TweenLite.set(i, {
								position: "absolute",
								"z-index": 15
							}), punchgs.TweenLite.set(e, {
								position: "absolute",
								"z-index": 20
							}), 0 < i.find(".tp-half-one").length && (i.find(".tp-half-one .defaultimg").unwrap(), i.find(".tp-half-one .slotholder").unwrap()), i.find(".tp-half-two").remove()
						}
					}), 0), C.add(punchgs.TweenLite.set(o.find(".defaultimg"), {
						autoAlpha: 1
					}), 0), null != i.html() && _.add(punchgs.TweenLite.fromTo(e, (b - 200) / 1e3, {
						scale: U,
						x: s.width / 4 * B,
						y: I / 4 * X,
						rotation: N,
						force3D: "auto",
						transformOrigin: "center center",
						ease: punchgs.Power2.easeOut
					}, {
						autoAlpha: 1,
						scale: 1,
						x: 0,
						y: 0,
						rotation: 0
					}), 0), _.add(C, 0)
				}
				if (17 == r && o.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.fromTo(e, b / 800, {
							opacity: 0,
							rotationY: 0,
							scale: .9,
							rotationX: -110,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: "center center"
						}, {
							opacity: 1,
							top: 0,
							left: 0,
							scale: 1,
							rotation: 0,
							rotationX: 0,
							force3D: "auto",
							rotationY: 0,
							ease: punchgs.Power3.easeOut,
							delay: .06 * t
						}), 0)
					}), 18 == r && o.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.fromTo(e, b / 500, {
							autoAlpha: 0,
							rotationY: 310,
							scale: .9,
							rotationX: 10,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: "center center"
						}, {
							autoAlpha: 1,
							top: 0,
							left: 0,
							scale: 1,
							rotation: 0,
							rotationX: 0,
							force3D: "auto",
							rotationY: 0,
							ease: punchgs.Power3.easeOut,
							delay: .06 * t
						}), 0)
					}), 19 == r || 22 == r) {
					C = new punchgs.TimelineLite;
					_.add(punchgs.TweenLite.set(i, {
						zIndex: 20
					}), 0), _.add(punchgs.TweenLite.set(e, {
						zIndex: 20
					}), 0), setTimeout(function () {
						n.find(".defaultimg").css({
							opacity: 0
						})
					}, 100);
					e.css("z-index"), i.css("z-index");
					var J = 90,
						Q = (A = 1, "center center ");
					1 == y && (J = -90), 19 == r ? (Q = Q + "-" + s.height / 2, A = 0) : Q += s.height / 2, punchgs.TweenLite.set(t, {
						transformStyle: "flat",
						backfaceVisibility: "hidden",
						transformPerspective: 600
					}), o.find(".slotslide").each(function (t) {
						var e = rt(this);
						C.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							transformStyle: "flat",
							backfaceVisibility: "hidden",
							left: 0,
							rotationY: s.rotate,
							z: 10,
							top: 0,
							scale: 1,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: Q,
							rotationX: J
						}, {
							left: 0,
							rotationY: 0,
							top: 0,
							z: 0,
							scale: 1,
							force3D: "auto",
							rotationX: 0,
							delay: 50 * t / 1e3,
							ease: punchgs.Power2.easeInOut
						}), 0), C.add(punchgs.TweenLite.to(e, .1, {
							autoAlpha: 1,
							delay: 50 * t / 1e3
						}), 0), _.add(C)
					}), n.find(".slotslide").each(function (t) {
						var e = rt(this),
							i = -90;
						1 == y && (i = 90), C.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							transformStyle: "flat",
							backfaceVisibility: "hidden",
							autoAlpha: 1,
							rotationY: 0,
							top: 0,
							z: 0,
							scale: 1,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: Q,
							rotationX: 0
						}, {
							autoAlpha: 1,
							rotationY: s.rotate,
							top: 0,
							z: 10,
							scale: 1,
							rotationX: i,
							delay: 50 * t / 1e3,
							force3D: "auto",
							ease: punchgs.Power2.easeInOut
						}), 0), _.add(C)
					})
				}
				if (20 == r) {
					setTimeout(function () {
						n.find(".defaultimg").css({
							opacity: 0
						})
					}, 100);
					e.css("z-index"), i.css("z-index");
					if (1 == y) {
						var V = -s.width;
						J = 70, Q = "left center -" + s.height / 2
					} else V = s.width, J = -70, Q = "right center -" + s.height / 2;
					o.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.fromTo(e, b / 1500, {
							left: V,
							rotationX: 40,
							z: -600,
							opacity: A,
							top: 0,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: Q,
							rotationY: J
						}, {
							left: 0,
							delay: 50 * t / 1e3,
							ease: punchgs.Power2.easeInOut
						}), 0), _.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							rotationX: 40,
							z: -600,
							opacity: A,
							top: 0,
							scale: 1,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: Q,
							rotationY: J
						}, {
							rotationX: 0,
							opacity: 1,
							top: 0,
							z: 0,
							scale: 1,
							rotationY: 0,
							delay: 50 * t / 1e3,
							ease: punchgs.Power2.easeInOut
						}), 0), _.add(punchgs.TweenLite.to(e, .1, {
							opacity: 1,
							force3D: "auto",
							delay: 50 * t / 1e3 + b / 2e3
						}), 0)
					}), n.find(".slotslide").each(function (t) {
						var e = rt(this);
						if (1 != y) var i = -s.width,
							n = 70,
							o = "left center -" + s.height / 2;
						else i = s.width, n = -70, o = "right center -" + s.height / 2;
						_.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							opacity: 1,
							rotationX: 0,
							top: 0,
							z: 0,
							scale: 1,
							left: 0,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: o,
							rotationY: 0
						}, {
							opacity: 1,
							rotationX: 40,
							top: 0,
							z: -600,
							left: i,
							force3D: "auto",
							scale: .8,
							rotationY: n,
							delay: 50 * t / 1e3,
							ease: punchgs.Power2.easeInOut
						}), 0), _.add(punchgs.TweenLite.to(e, .1, {
							force3D: "auto",
							opacity: 0,
							delay: 50 * t / 1e3 + (b / 1e3 - b / 1e4)
						}), 0)
					})
				}
				if (21 == r || 25 == r) {
					setTimeout(function () {
						n.find(".defaultimg").css({
							opacity: 0
						})
					}, 100);
					e.css("z-index"), i.css("z-index"), J = 90, V = -s.width;
					var Z = -J;
					if (1 == y)
						if (25 == r) {
							Q = "center top 0";
							J = s.rotate
						} else {
							Q = "left center 0";
							Z = s.rotate
						}
					else if (V = s.width, J = -90, 25 == r) {
						Q = "center bottom 0";
						Z = -J, J = s.rotate
					} else {
						Q = "right center 0";
						Z = s.rotate
					}
					o.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							left: 0,
							transformStyle: "flat",
							rotationX: Z,
							z: 0,
							autoAlpha: 0,
							top: 0,
							scale: 1,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: Q,
							rotationY: J
						}, {
							left: 0,
							rotationX: 0,
							top: 0,
							z: 0,
							autoAlpha: 1,
							scale: 1,
							rotationY: 0,
							force3D: "auto",
							ease: punchgs.Power3.easeInOut
						}), 0)
					}), 1 != y ? (V = -s.width, J = 90, 25 == r ? (Q = "center top 0", Z = -J, J = s.rotate) : (Q = "left center 0", Z = s.rotate)) : (V = s.width, J = -90, 25 == r ? (Q = "center bottom 0", Z = -J, J = s.rotate) : (Q = "right center 0", Z = s.rotate)), n.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							left: 0,
							transformStyle: "flat",
							rotationX: 0,
							z: 0,
							autoAlpha: 1,
							top: 0,
							scale: 1,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: Q,
							rotationY: 0
						}, {
							left: 0,
							rotationX: Z,
							top: 0,
							z: 0,
							autoAlpha: 1,
							force3D: "auto",
							scale: 1,
							rotationY: J,
							ease: punchgs.Power1.easeInOut
						}), 0)
					})
				}
				if (23 == r || 24 == r) {
					setTimeout(function () {
						n.find(".defaultimg").css({
							opacity: 0
						})
					}, 100);
					e.css("z-index"), i.css("z-index"), J = -90, A = 1;
					if (1 == y && (J = 90), 23 == r) {
						Q = "center center -" + s.width / 2;
						A = 0
					} else Q = "center center " + s.width / 2;
					punchgs.TweenLite.set(t, {
						transformStyle: "preserve-3d",
						backfaceVisibility: "hidden",
						perspective: 2500
					}), o.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							left: 0,
							rotationX: s.rotate,
							force3D: "auto",
							opacity: A,
							top: 0,
							scale: 1,
							transformPerspective: 600,
							transformOrigin: Q,
							rotationY: J
						}, {
							left: 0,
							rotationX: 0,
							autoAlpha: 1,
							top: 0,
							z: 0,
							scale: 1,
							rotationY: 0,
							delay: 50 * t / 500,
							ease: punchgs.Power2.easeInOut
						}), 0)
					}), J = 90, 1 == y && (J = -90), n.find(".slotslide").each(function (t) {
						var e = rt(this);
						_.add(punchgs.TweenLite.fromTo(e, b / 1e3, {
							left: 0,
							autoAlpha: 1,
							rotationX: 0,
							top: 0,
							z: 0,
							scale: 1,
							force3D: "auto",
							transformPerspective: 600,
							transformOrigin: Q,
							rotationY: 0
						}, {
							left: 0,
							autoAlpha: 1,
							rotationX: s.rotate,
							top: 0,
							scale: 1,
							rotationY: J,
							delay: 50 * t / 500,
							ease: punchgs.Power2.easeInOut
						}), 0)
					})
				}
				_.pause(), et(e, s, null, _), punchgs.TweenLite.to(e, .001, {
					autoAlpha: 1
				});
				var G = {};
				G.slideIndex = s.next + 1, G.slide = e, t.trigger("revolution.slide.onchange", G), setTimeout(function () {
					t.trigger("revolution.slide.onafterswap")
				}, b), t.trigger("revolution.slide.onvideostop")
			},
			tt = function (t, e, i, n, o, s, a) {
				punchgs.TweenLite.to(i.find(".defaultimg"), .001, {
					autoAlpha: 1,
					onComplete: function () {
						c(t, e, o)
					}
				}), o.index() != s.index() && punchgs.TweenLite.to(s, .2, {
					autoAlpha: 0,
					onComplete: function () {
						c(t, e, s)
					}
				}), e.act = e.next, "thumb" == e.navigationType && f(t), "on" == i.data("kenburns") && it(t, e), t.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), o.addClass("current-sr-slide-visible"), "scroll" != e.parallax && "scroll+mouse" != e.parallax && "mouse+scroll" != e.parallax || nt(t, e), a.clear()
			},
			ct = function (t) {
				var e = t.target.getVideoEmbedCode(),
					i = rt("#" + e.split('id="')[1].split('"')[0]),
					n = i.closest(".tp-simpleresponsive"),
					o = i.parent().data("player");
				if (t.data == YT.PlayerState.PLAYING) {
					var s = n.find(".tp-bannertimer").data("opt");
					"mute" == i.closest(".tp-caption").data("volume") && o.mute(), s.videoplaying = !0, n.trigger("stoptimer"), n.trigger("revolution.slide.onvideoplay")
				} else {
					s = n.find(".tp-bannertimer").data("opt"); - 1 != t.data && 3 != t.data && (s.videoplaying = !1, n.trigger("starttimer"), n.trigger("revolution.slide.onvideostop")), 0 == t.data && 1 == s.nextslideatend ? s.container.revnext() : (s.videoplaying = !1, n.trigger("starttimer"), n.trigger("revolution.slide.onvideostop"))
				}
			},
			ht = function (t, e, i) {
				t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent(e, i, !1)
			},
			ut = function (t, e) {
				var i = e.width(),
					n = e.height(),
					o = t.data("mediaAspect");
				o == lt && (o = 1);
				var s = i / n;
				t.css({
					position: "absolute"
				});
				t.find("video");
				s < o ? punchgs.TweenLite.to(t, 1e-4, {
					width: n * o,
					force3D: "auto",
					top: 0,
					left: 0 - (n * o - i) / 2,
					height: n
				}) : punchgs.TweenLite.to(t, 1e-4, {
					width: i,
					force3D: "auto",
					top: 0 - (i / o - n) / 2,
					left: 0,
					height: i / o
				})
			},
			pt = function () {
				var t = new Object;
				return t.x = 0, t.y = 0, t.rotationX = 0, t.rotationY = 0, t.rotationZ = 0, t.scale = 1, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.opacity = 0, t.transformOrigin = "center, center", t.transformPerspective = 400, t.rotation = 0, t
			},
			ft = function (o, t) {
				var e = t.split(";");
				return rt.each(e, function (t, e) {
					var i = (e = e.split(":"))[0],
						n = e[1];
					"rotationX" == i && (o.rotationX = parseInt(n, 0)), "rotationY" == i && (o.rotationY = parseInt(n, 0)), "rotationZ" == i && (o.rotationZ = parseInt(n, 0)), "rotationZ" == i && (o.rotation = parseInt(n, 0)), "scaleX" == i && (o.scaleX = parseFloat(n)), "scaleY" == i && (o.scaleY = parseFloat(n)), "opacity" == i && (o.opacity = parseFloat(n)), "skewX" == i && (o.skewX = parseInt(n, 0)), "skewY" == i && (o.skewY = parseInt(n, 0)), "x" == i && (o.x = parseInt(n, 0)), "y" == i && (o.y = parseInt(n, 0)), "z" == i && (o.z = parseInt(n, 0)), "transformOrigin" == i && (o.transformOrigin = n.toString()), "transformPerspective" == i && (o.transformPerspective = parseInt(n, 0))
				}), o
			},
			et = function (t, it, nt, e) {
				function ot() {}
				t.data("ctl") == lt && t.data("ctl", new punchgs.TimelineLite);
				var i = t.data("ctl"),
					st = 0,
					at = 0,
					n = t.find(".tp-caption"),
					o = it.container.find(".tp-static-layers").find(".tp-caption");
				i.pause(), rt.each(o, function (t, e) {
					n.push(e)
				}), n.each(function (t) {
					var e = nt,
						i = -1,
						u = rt(this);
					if (u.hasClass("tp-static-layer")) {
						var n = u.data("startslide"),
							o = u.data("endslide"); - 1 != n && "-1" != n || u.data("startslide", 0), -1 != o && "-1" != o || u.data("endslide", it.slideamount), 0 == n && o == it.slideamount - 1 && u.data("endslide", it.slideamount + 1), n = u.data("startslide"), o = u.data("endslide"), i = u.hasClass("tp-is-shown") ? o == it.next || n > it.next || o < it.next ? 2 : 0 : n <= it.next && o >= it.next || n == it.next || o == it.next ? (u.addClass("tp-is-shown"), 1) : 0
					}
					st = it.width / 2 - it.startwidth * it.bw / 2;
					var s = it.bw;
					it.bh;
					"on" == it.fullScreen && (at = it.height / 2 - it.startheight * it.bh / 2), ("on" == it.autoHeight || it.minHeight != lt && 0 < it.minHeight) && (at = it.container.height() / 2 - it.startheight * it.bh / 2), at < 0 && (at = 0);
					var a = 0;
					if (it.width < it.hideCaptionAtLimit && "on" == u.data("captionhidden") ? (u.addClass("tp-hidden-caption"), a = 1) : it.width < it.hideAllCaptionAtLimit || it.width < it.hideAllCaptionAtLilmit ? (u.addClass("tp-hidden-caption"), a = 1) : u.removeClass("tp-hidden-caption"), 0 == a) {
						if (u.data("linktoslide") == lt || u.hasClass("hasclicklistener") || (u.addClass("hasclicklistener"), u.css({
								cursor: "pointer"
							}), "no" != u.data("linktoslide") && u.click(function () {
								var t = rt(this).data("linktoslide");
								"next" != t && "prev" != t ? (it.container.data("showus", t), it.container.parent().find(".tp-rightarrow").click()) : "next" == t ? it.container.parent().find(".tp-rightarrow").click() : "prev" == t && it.container.parent().find(".tp-leftarrow").click()
							})), st < 0 && (st = 0), u.hasClass("tp-videolayer") || 0 < u.find("iframe").length || 0 < u.find("video").length) {
							var p = "iframe" + Math.round(1e5 * Math.random() + 1),
								r = u.data("videowidth"),
								l = u.data("videoheight"),
								d = u.data("videoattributes"),
								c = u.data("ytid"),
								h = u.data("vimeoid"),
								f = u.data("videpreload"),
								m = u.data("videomp4"),
								g = u.data("videowebm"),
								v = u.data("videoogv"),
								w = u.data("videocontrols"),
								y = "http",
								b = "loop" == u.data("videoloop") ? "loop" : "loopandnoslidestop" == u.data("videoloop") ? "loop" : "";
							if (u.data("thumbimage") != lt && u.data("videoposter") == lt && u.data("videoposter", u.data("thumbimage")), c != lt && 1 < String(c).length && 0 == u.find("iframe").length && (y = "https", "none" == w && -1 == (d = d.replace("controls=1", "controls=0")).toLowerCase().indexOf("controls") && (d += "&controls=0"), u.append('<iframe style="visible:hidden" src="' + y + "://www.youtube.com/embed/" + c + "?" + d + '" width="' + r + '" height="' + l + '" style="width:' + r + "px;height:" + l + 'px"></iframe>')), h != lt && 1 < String(h).length && 0 == u.find("iframe").length && ("https:" === location.protocol && (y = "https"), u.append('<iframe style="visible:hidden" src="' + y + "://player.vimeo.com/video/" + h + "?" + d + '" width="' + r + '" height="' + l + '" style="width:' + r + "px;height:" + l + 'px"></iframe>')), (m != lt || g != lt) && 0 == u.find("video").length) {
								"controls" != w && (w = "");
								var _ = '<video style="visible:hidden" class="" ' + b + ' preload="' + f + '" width="' + r + '" height="' + l + '"';
								u.data("videoposter") != lt && u.data("videoposter") != lt && (_ = _ + 'poster="' + u.data("videoposter") + '">'), g != lt && "firefox" == mt().toLowerCase() && (_ = _ + '<source src="' + g + '" type="video/webm" />'), m != lt && (_ = _ + '<source src="' + m + '" type="video/mp4" />'), v != lt && (_ = _ + '<source src="' + v + '" type="video/ogg" />'), _ += "</video>", u.append(_), "controls" == w && u.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')
							}
							var x = !1;
							1 != u.data("autoplayonlyfirsttime") && "true" != u.data("autoplayonlyfirsttime") && 1 != u.data("autoplay") || (u.data("autoplay", !0), x = !0), u.data("videoposter") != lt && 2 < u.data("videoposter").length && 1 != u.data("autoplay") && !e && (0 == u.find(".tp-thumb-image").length ? u.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + u.data("videoposter") + '); background-size:cover; background-position:center center"></div>') : punchgs.TweenLite.set(u.find(".tp-thumb-image"), {
								autoAlpha: 1
							})), u.find("iframe").each(function () {
								var t = rt(this);
								if (punchgs.TweenLite.to(t, .1, {
										autoAlpha: 1,
										zIndex: 0,
										transformStyle: "preserve-3d",
										z: 0,
										rotationX: 0,
										force3D: "auto"
									}), _t()) {
									var e = t.attr("src");
									t.attr("src", ""), t.attr("src", e)
								}
								if (it.nextslideatend = u.data("nextslideatend"), 0 <= t.attr("src").toLowerCase().indexOf("youtube"))
									if (t.hasClass("HasListener")) {
										if (!nt) {
											c = u.data("player");
											"on" != u.data("forcerewind") || _t() || c.seekTo(0), (!_t() && 1 == u.data("autoplay") || x) && u.data("timerplay", setTimeout(function () {
												c.playVideo()
											}, u.data("start")))
										}
									} else try {
										t.attr("id", p);
										var i = setInterval(function () {
											YT != lt && typeof YT.Player != lt && void 0 !== YT.Player && (c = new YT.Player(p, {
												events: {
													onStateChange: ct,
													onReady: function (t) {
														var e = t.target.getVideoEmbedCode(),
															i = rt("#" + e.split('id="')[1].split('"')[0]).closest(".tp-caption"),
															n = i.data("videorate");
														i.data("videostart");
														n != lt && t.target.setPlaybackRate(parseFloat(n)), (!_t() && 1 == i.data("autoplay") || x) && i.data("timerplay", setTimeout(function () {
															t.target.playVideo()
														}, i.data("start"))), i.find(".tp-thumb-image").click(function () {
															punchgs.TweenLite.to(rt(this), .3, {
																autoAlpha: 0,
																force3D: "auto",
																ease: punchgs.Power3.easeInOut
															}), _t() || c.playVideo()
														})
													}
												}
											})), t.addClass("HasListener"), u.data("player", c), clearInterval(i)
										}, 100)
									} catch (t) {} else if (0 <= t.attr("src").toLowerCase().indexOf("vimeo"))
										if (t.hasClass("HasListener")) {
											if (!(nt || _t() || 1 != u.data("autoplay") && "on" != u.data("forcerewind"))) {
												var n = (t = u.find("iframe")).attr("id"),
													o = $f(n);
												"on" == u.data("forcerewind") && o.api("seekTo", 0), u.data("timerplay", setTimeout(function () {
													1 == u.data("autoplay") && o.api("play")
												}, u.data("start")))
											}
										} else {
											t.addClass("HasListener"), t.attr("id", p);
											for (var s, a = t.attr("src"), r = {}, l = a, d = /([^&=]+)=([^&]*)/g; s = d.exec(l);) r[decodeURIComponent(s[1])] = decodeURIComponent(s[2]);
											a = r.player_id != lt ? a.replace(r.player_id, p) : a + "&player_id=" + p;
											try {
												a = a.replace("api=0", "api=1")
											} catch (t) {}
											a += "&api=1", t.attr("src", a);
											var c = u.find("iframe")[0],
												h = setInterval(function () {
													$f != lt && typeof $f(p).api != lt && void 0 !== $f(p).api && ($f(c).addEvent("ready", function () {
														var t, e, i, n, o, s;
														t = p, e = x, i = $f(t), n = rt("#" + t), o = n.closest(".tp-simpleresponsive"), s = n.closest(".tp-caption"), setTimeout(function () {
															i.addEvent("ready", function (t) {
																e && i.api("play"), i.addEvent("play", function (t) {
																	o.find(".tp-bannertimer").data("opt").videoplaying = !0, o.trigger("stoptimer"), "mute" == s.data("volume") && i.api("setVolume", "0")
																}), i.addEvent("finish", function (t) {
																	var e = o.find(".tp-bannertimer").data("opt");
																	e.videoplaying = !1, o.trigger("starttimer"), o.trigger("revolution.slide.onvideoplay"), 1 == e.nextslideatend && e.container.revnext()
																}), i.addEvent("pause", function (t) {
																	o.find(".tp-bannertimer").data("opt").videoplaying = !1, o.trigger("starttimer"), o.trigger("revolution.slide.onvideostop")
																}), s.find(".tp-thumb-image").click(function () {
																	punchgs.TweenLite.to(rt(this), .3, {
																		autoAlpha: 0,
																		force3D: "auto",
																		ease: punchgs.Power3.easeInOut
																	}), i.api("play")
																})
															})
														}, 150)
													}), clearInterval(h))
												}, 100)
										}
							}), (_t() && 1 == u.data("disablevideoonmobile") || dt(8)) && u.find("video").remove(), 0 < u.find("video").length && u.find("video").each(function (t) {
								var r = this,
									l = rt(this);
								l.parent().hasClass("html5vid") || l.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
								var d = l.parent();
								ht(r, "loadedmetadata", void d.data("metaloaded", 1)), clearInterval(d.data("interval")), d.data("interval", setInterval(function () {
									if (1 == d.data("metaloaded") || NaN != r.duration) {
										if (clearInterval(d.data("interval")), !d.hasClass("HasListener")) {
											d.addClass("HasListener"), "none" != u.data("dottedoverlay") && u.data("dottedoverlay") != lt && 1 != u.find(".tp-dottedoverlay").length && d.append('<div class="tp-dottedoverlay ' + u.data("dottedoverlay") + '"></div>'), l.attr("control") == lt && (0 == d.find(".tp-video-play-button").length && d.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), d.parent().find("video, .tp-poster, .tp-thumb-image, .tp-video-play-button").click(function () {
												d.hasClass("videoisplaying") ? r.pause() : (r.play(), punchgs.TweenLite.to(d.parent().find(".tp-poster, .tp-thumb-image"), .2, {
													autoAlpha: 0
												}))
											})), (1 == u.data("forcecover") || u.hasClass("fullscreenvideo")) && (1 == u.data("forcecover") && (ut(d, it.container), d.addClass("fullcoveredvideo"), u.addClass("fullcoveredvideo")), d.css({
												width: "100%",
												height: "100%"
											}));
											var t = u.find(".tp-vid-play-pause")[0],
												e = u.find(".tp-vid-mute")[0],
												i = u.find(".tp-vid-full-screen")[0],
												n = u.find(".tp-seek-bar")[0],
												o = u.find(".tp-volume-bar")[0];
											t != lt && (ht(t, "click", function () {
												1 == r.paused ? r.play() : r.pause()
											}), ht(e, "click", function () {
												0 == r.muted ? (r.muted = !0, e.innerHTML = "Unmute") : (r.muted = !1, e.innerHTML = "Mute")
											}), ht(i, "click", function () {
												r.requestFullscreen ? r.requestFullscreen() : r.mozRequestFullScreen ? r.mozRequestFullScreen() : r.webkitRequestFullscreen && r.webkitRequestFullscreen()
											}), ht(n, "change", function () {
												var t = r.duration * (n.value / 100);
												r.currentTime = t
											}), ht(r, "timeupdate", function () {
												var t = 100 / r.duration * r.currentTime;
												n.value = t
											}), ht(n, "mousedown", function () {
												r.pause()
											}), ht(n, "mouseup", function () {
												r.play()
											}), ht(o, "change", function () {
												r.volume = o.value
											})), ht(r, "play", function () {
												"mute" == u.data("volume") && (r.muted = !0), d.addClass("videoisplaying"), "loopandnoslidestop" == u.data("videoloop") ? (it.videoplaying = !1, it.container.trigger("starttimer"), it.container.trigger("revolution.slide.onvideostop")) : (it.videoplaying = !0, it.container.trigger("stoptimer"), it.container.trigger("revolution.slide.onvideoplay"));
												var t = u.find(".tp-vid-play-pause")[0],
													e = u.find(".tp-vid-mute")[0];
												t != lt && (t.innerHTML = "Pause"), e != lt && r.muted && (e.innerHTML = "Unmute")
											}), ht(r, "pause", function () {
												d.removeClass("videoisplaying"), it.videoplaying = !1, it.container.trigger("starttimer"), it.container.trigger("revolution.slide.onvideostop");
												var t = u.find(".tp-vid-play-pause")[0];
												t != lt && (t.innerHTML = "Play")
											}), ht(r, "ended", function () {
												d.removeClass("videoisplaying"), it.videoplaying = !1, it.container.trigger("starttimer"), it.container.trigger("revolution.slide.onvideostop"), 1 == it.nextslideatend && it.container.revnext()
											})
										}
										var s = !1;
										1 != u.data("autoplayonlyfirsttime") && "true" != u.data("autoplayonlyfirsttime") || (s = !0);
										var a = 16 / 9;
										if ("4:3" == u.data("aspectratio") && (a = 4 / 3), d.data("mediaAspect", a), 1 == d.closest(".tp-caption").data("forcecover") && (ut(d, it.container), d.addClass("fullcoveredvideo")), l.css({
												display: "block"
											}), it.nextslideatend = u.data("nextslideatend"), "on" != u.data("forcerewind") || d.hasClass("videoisplaying") || 0 < r.currentTime && (r.currentTime = 0), 1 != u.data("autoplay") && 1 != s || ("loopandnoslidestop" == u.data("videoloop") ? (it.videoplaying = !1, it.container.trigger("starttimer"), it.container.trigger("revolution.slide.onvideostop")) : (it.videoplaying = !0, it.container.trigger("stoptimer"), it.container.trigger("revolution.slide.onvideoplay")), "on" != u.data("forcerewind") || d.hasClass("videoisplaying") || 0 < r.currentTime && (r.currentTime = 0), "mute" == u.data("volume") && (r.muted = !0), d.data("timerplay", setTimeout(function () {
												"on" != u.data("forcerewind") || d.hasClass("videoisplaying") || 0 < r.currentTime && (r.currentTime = 0), "mute" == u.data("volume") && (r.muted = !0), r.play()
											}, 10 + u.data("start")))), d.data("ww") == lt && d.data("ww", l.attr("width")), d.data("hh") == lt && d.data("hh", l.attr("height")), !u.hasClass("fullscreenvideo") && 1 == u.data("forcecover")) try {
											d.width(d.data("ww") * it.bw), d.height(d.data("hh") * it.bh)
										} catch (t) {}
										clearInterval(d.data("interval"))
									}
								}), 100)
							}), 1 == u.data("autoplay") && (setTimeout(function () {
								"loopandnoslidestop" != u.data("videoloop") && (it.videoplaying = !0, it.container.trigger("stoptimer"))
							}, 200), "loopandnoslidestop" != u.data("videoloop") && (it.videoplaying = !0, it.container.trigger("stoptimer")), 1 != u.data("autoplayonlyfirsttime") && "true" != u.data("autoplayonlyfirsttime") || (u.data("autoplay", !1), u.data("autoplayonlyfirsttime", !1)))
						}
						var T = 0,
							k = 0;
						if (0 < u.find("img").length) {
							0 == (z = u.find("img")).width() && z.css({
								width: "auto"
							}), 0 == z.height() && z.css({
								height: "auto"
							}), z.data("ww") == lt && 0 < z.width() && z.data("ww", z.width()), z.data("hh") == lt && 0 < z.height() && z.data("hh", z.height());
							var C = z.data("ww"),
								S = z.data("hh");
							C == lt && (C = 0), S == lt && (S = 0), z.width(C * it.bw), z.height(S * it.bh), T = z.width(), k = z.height()
						} else if (0 < u.find("iframe").length || 0 < u.find("video").length) {
							var z, I = !1;
							0 == (z = u.find("iframe")).length && (z = u.find("video"), I = !0), z.css({
								display: "block"
							}), u.data("ww") == lt && u.data("ww", z.width()), u.data("hh") == lt && u.data("hh", z.height());
							C = u.data("ww"), S = u.data("hh");
							var L = u;
							L.data("fsize") == lt && L.data("fsize", parseInt(L.css("font-size"), 0) || 0), L.data("pt") == lt && L.data("pt", parseInt(L.css("paddingTop"), 0) || 0), L.data("pb") == lt && L.data("pb", parseInt(L.css("paddingBottom"), 0) || 0), L.data("pl") == lt && L.data("pl", parseInt(L.css("paddingLeft"), 0) || 0), L.data("pr") == lt && L.data("pr", parseInt(L.css("paddingRight"), 0) || 0), L.data("mt") == lt && L.data("mt", parseInt(L.css("marginTop"), 0) || 0), L.data("mb") == lt && L.data("mb", parseInt(L.css("marginBottom"), 0) || 0), L.data("ml") == lt && L.data("ml", parseInt(L.css("marginLeft"), 0) || 0), L.data("mr") == lt && L.data("mr", parseInt(L.css("marginRight"), 0) || 0), L.data("bt") == lt && L.data("bt", parseInt(L.css("borderTop"), 0) || 0), L.data("bb") == lt && L.data("bb", parseInt(L.css("borderBottom"), 0) || 0), L.data("bl") == lt && L.data("bl", parseInt(L.css("borderLeft"), 0) || 0), L.data("br") == lt && L.data("br", parseInt(L.css("borderRight"), 0) || 0), L.data("lh") == lt && L.data("lh", parseInt(L.css("lineHeight"), 0) || 0), "auto" == L.data("lh") && L.data("lh", L.data("fsize") + 4);
							var E = it.width,
								O = it.height;
							if (E > it.startwidth && (E = it.startwidth), O > it.startheight && (O = it.startheight), u.hasClass("fullscreenvideo")) {
								at = st = 0, u.data("x", 0), u.data("y", 0);
								var A = it.height;
								"on" == it.autoHeight && (A = it.container.height()), u.css({
									width: it.width,
									height: A
								})
							} else u.css({
								"font-size": L.data("fsize") * it.bw + "px",
								"padding-top": L.data("pt") * it.bh + "px",
								"padding-bottom": L.data("pb") * it.bh + "px",
								"padding-left": L.data("pl") * it.bw + "px",
								"padding-right": L.data("pr") * it.bw + "px",
								"margin-top": L.data("mt") * it.bh + "px",
								"margin-bottom": L.data("mb") * it.bh + "px",
								"margin-left": L.data("ml") * it.bw + "px",
								"margin-right": L.data("mr") * it.bw + "px",
								"border-top": L.data("bt") * it.bh + "px",
								"border-bottom": L.data("bb") * it.bh + "px",
								"border-left": L.data("bl") * it.bw + "px",
								"border-right": L.data("br") * it.bw + "px",
								"line-height": L.data("lh") * it.bh + "px",
								height: S * it.bh + "px"
							});
							0 == I ? (z.width(C * it.bw), z.height(S * it.bh)) : 1 == u.data("forcecover") || u.hasClass("fullscreenvideo") || (z.width(C * it.bw), z.height(S * it.bh)), T = z.width(), k = z.height()
						} else {
							u.find(".tp-resizeme, .tp-resizeme *").each(function () {
								gt(rt(this), it)
							}), u.hasClass("tp-resizeme") && u.find("*").each(function () {
								gt(rt(this), it)
							}), gt(u, it), k = u.outerHeight(!0), T = u.outerWidth(!0);
							var P = u.outerHeight(),
								D = u.css("backgroundColor");
							u.find(".frontcorner").css({
								borderWidth: P + "px",
								left: 0 - P + "px",
								borderRight: "0px solid transparent",
								borderTopColor: D
							}), u.find(".frontcornertop").css({
								borderWidth: P + "px",
								left: 0 - P + "px",
								borderRight: "0px solid transparent",
								borderBottomColor: D
							}), u.find(".backcorner").css({
								borderWidth: P + "px",
								right: 0 - P + "px",
								borderLeft: "0px solid transparent",
								borderBottomColor: D
							}), u.find(".backcornertop").css({
								borderWidth: P + "px",
								right: 0 - P + "px",
								borderLeft: "0px solid transparent",
								borderTopColor: D
							})
						}
						"on" == it.fullScreenAlignForce && (at = st = 0), u.data("voffset") == lt && u.data("voffset", 0), u.data("hoffset") == lt && u.data("hoffset", 0);
						var W = u.data("voffset") * s,
							M = u.data("hoffset") * s,
							H = it.startwidth * s,
							F = it.startheight * s;
						"on" == it.fullScreenAlignForce && (H = it.container.width(), F = it.container.height()), "center" != u.data("x") && "center" != u.data("xcenter") || (u.data("xcenter", "center"), u.data("x", H / 2 - u.outerWidth(!0) / 2 + M)), "left" != u.data("x") && "left" != u.data("xleft") || (u.data("xleft", "left"), u.data("x", 0 / s + M)), "right" != u.data("x") && "right" != u.data("xright") || (u.data("xright", "right"), u.data("x", (H - u.outerWidth(!0) + M) / s)), "center" != u.data("y") && "center" != u.data("ycenter") || (u.data("ycenter", "center"), u.data("y", F / 2 - u.outerHeight(!0) / 2 + W)), "top" != u.data("y") && "top" != u.data("ytop") || (u.data("ytop", "top"), u.data("y", 0 / it.bh + W)), "bottom" != u.data("y") && "bottom" != u.data("ybottom") || (u.data("ybottom", "bottom"), u.data("y", (F - u.outerHeight(!0) + W) / s)), u.data("start") == lt && u.data("start", 1e3);
						var R = u.data("easing");
						R == lt && (R = "punchgs.Power1.easeOut");
						var j = u.data("start") / 1e3,
							$ = u.data("speed") / 1e3;
						if ("center" == u.data("x") || "center" == u.data("xcenter")) var N = u.data("x") + st;
						else N = s * u.data("x") + st;
						if ("center" == u.data("y") || "center" == u.data("ycenter")) var B = u.data("y") + at;
						else B = it.bh * u.data("y") + at;
						if (punchgs.TweenLite.set(u, {
								top: B,
								left: N,
								overwrite: "auto"
							}), 0 == i && (e = !0), u.data("timeline") == lt || e || (2 != i && u.data("timeline").gotoAndPlay(0), e = !0), !e) {
							u.data("timeline");
							var X = new punchgs.TimelineLite({
								smoothChildTiming: !0,
								onStart: ot
							});
							X.pause(), it.fullScreenAlignForce;
							var Y = u;
							u.data("mySplitText") != lt && u.data("mySplitText").revert(), "chars" != u.data("splitin") && "words" != u.data("splitin") && "lines" != u.data("splitin") && "chars" != u.data("splitout") && "words" != u.data("splitout") && "lines" != u.data("splitout") || (0 < u.find("a").length ? u.data("mySplitText", new punchgs.SplitText(u.find("a"), {
								type: "lines,words,chars",
								charsClass: "tp-splitted",
								wordsClass: "tp-splitted",
								linesClass: "tp-splitted"
							})) : 0 < u.find(".tp-layer-inner-rotation").length ? u.data("mySplitText", new punchgs.SplitText(u.find(".tp-layer-inner-rotation"), {
								type: "lines,words,chars",
								charsClass: "tp-splitted",
								wordsClass: "tp-splitted",
								linesClass: "tp-splitted"
							})) : u.data("mySplitText", new punchgs.SplitText(u, {
								type: "lines,words,chars",
								charsClass: "tp-splitted",
								wordsClass: "tp-splitted",
								linesClass: "tp-splitted"
							})), u.addClass("splitted")), "chars" == u.data("splitin") && (Y = u.data("mySplitText").chars), "words" == u.data("splitin") && (Y = u.data("mySplitText").words), "lines" == u.data("splitin") && (Y = u.data("mySplitText").lines);
							var q = pt(),
								U = pt();
							u.data("repeat") != lt && (repeatV = u.data("repeat")), u.data("yoyo") != lt && (yoyoV = u.data("yoyo")), u.data("repeatdelay") != lt && (repeatdelayV = u.data("repeatdelay"));
							var J = u.attr("class");
							J.match("customin") ? q = ft(q, u.data("customin")) : J.match("randomrotate") ? (q.scale = 3 * Math.random() + 1, q.rotation = Math.round(200 * Math.random() - 100), q.x = Math.round(200 * Math.random() - 100), q.y = Math.round(200 * Math.random() - 100)) : J.match("lfr") || J.match("skewfromright") ? q.x = 15 + it.width : J.match("lfl") || J.match("skewfromleft") ? q.x = -15 - T : J.match("sfl") || J.match("skewfromleftshort") ? q.x = -50 : J.match("sfr") || J.match("skewfromrightshort") ? q.x = 50 : J.match("lft") ? q.y = -25 - k : J.match("lfb") ? q.y = 25 + it.height : J.match("sft") ? q.y = -50 : J.match("sfb") && (q.y = 50), J.match("skewfromright") || u.hasClass("skewfromrightshort") ? q.skewX = -85 : (J.match("skewfromleft") || u.hasClass("skewfromleftshort")) && (q.skewX = 85), (J.match("fade") || J.match("sft") || J.match("sfl") || J.match("sfb") || J.match("skewfromleftshort") || J.match("sfr") || J.match("skewfromrightshort")) && (q.opacity = 0), mt().toLowerCase();
							var Q = u.data("elementdelay") == lt ? 0 : u.data("elementdelay");
							U.ease = q.ease = u.data("easing") == lt ? punchgs.Power1.easeInOut : u.data("easing"), q.data = new Object, q.data.oldx = q.x, q.data.oldy = q.y, U.data = new Object, U.data.oldx = U.x, U.data.oldy = U.y, q.x = q.x * s, q.y = q.y * s;
							var V = new punchgs.TimelineLite;
							if (2 != i)
								if (J.match("customin")) Y != u && X.add(punchgs.TweenLite.set(u, {
									force3D: "auto",
									opacity: 1,
									scaleX: 1,
									scaleY: 1,
									rotationX: 0,
									rotationY: 0,
									rotationZ: 0,
									skewX: 0,
									skewY: 0,
									z: 0,
									x: 0,
									y: 0,
									visibility: "visible",
									delay: 0,
									overwrite: "all"
								})), q.visibility = "hidden", U.visibility = "visible", U.overwrite = "all", U.opacity = 1, U.onComplete = void 0, U.delay = j, U.force3D = "auto", X.add(V.staggerFromTo(Y, $, q, U, Q), "frame0");
								else if (q.visibility = "visible", q.transformPerspective = 600, Y != u && X.add(punchgs.TweenLite.set(u, {
									force3D: "auto",
									opacity: 1,
									scaleX: 1,
									scaleY: 1,
									rotationX: 0,
									rotationY: 0,
									rotationZ: 0,
									skewX: 0,
									skewY: 0,
									z: 0,
									x: 0,
									y: 0,
									visibility: "visible",
									delay: 0,
									overwrite: "all"
								})), U.visibility = "visible", U.delay = j, U.onComplete = void 0, U.opacity = 1, U.force3D = "auto", J.match("randomrotate") && Y != u)
								for (t = 0; t < Y.length; t++) {
									var Z = new Object,
										G = new Object;
									rt.extend(Z, q), rt.extend(G, U), q.scale = 3 * Math.random() + 1, q.rotation = Math.round(200 * Math.random() - 100), q.x = Math.round(200 * Math.random() - 100), q.y = Math.round(200 * Math.random() - 100), 0 != t && (G.delay = j + t * Q), X.append(punchgs.TweenLite.fromTo(Y[t], $, Z, G), "frame0")
								} else X.add(V.staggerFromTo(Y, $, q, U, Q), "frame0");
							u.data("timeline", X);
							new Array;
							if (u.data("frames") != lt) {
								var K = u.data("frames"),
									tt = (K = (K = K.replace(/\s+/g, "")).replace("{", "")).split("}");
								rt.each(tt, function (t, e) {
									if (0 < e.length) {
										var i = function (t) {
											var e = t.split("animation:"),
												o = new Object;
											o.animation = ft(pt(), e[1]);
											var i = e[0].split(";");
											return rt.each(i, function (t, e) {
												var i = (e = e.split(":"))[0],
													n = e[1];
												"typ" == i && (o.typ = n), "speed" == i && (o.speed = parseInt(n, 0) / 1e3), "start" == i && (o.start = parseInt(n, 0) / 1e3), "elementdelay" == i && (o.elementdelay = parseFloat(n)), "ease" == i && (o.ease = n)
											}), o
										}(e);
										yt(u, it, i, "frame" + (t + 10), s)
									}
								})
							}
							X = u.data("timeline"), u.data("end") == lt || -1 != i && 2 != i ? bt(u, it, 999999, q, "frame99", s) : bt(u, it, u.data("end") / 1e3, q, "frame99", s), X = u.data("timeline"), u.data("timeline", X), vt(u, s), X.resume()
						}
					}
					if (e && (wt(u), vt(u, s), u.data("timeline") != lt)) {
						var et = u.data("timeline").getTweensOf();
						rt.each(et, function (t, e) {
							if (e.vars.data != lt) {
								var i = e.vars.data.oldx * s,
									n = e.vars.data.oldy * s;
								if (1 != e.progress() && 0 != e.progress()) try {
									e.vars.x = i, e.vary.y = n
								} catch (t) {} else 1 == e.progress() && punchgs.TweenLite.set(e.target, {
									x: i,
									y: n
								})
							}
						})
					}
				}), rt("body").find("#" + it.container.attr("id")).find(".tp-bannertimer").data("opt", it), e != lt && setTimeout(function () {
					e.resume()
				}, 30)
			},
			mt = function () {
				var t, e = navigator.appName,
					i = navigator.userAgent,
					n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), (n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"])[0]
			},
			gt = function (t, e) {
				t.data("fsize") == lt && t.data("fsize", parseInt(t.css("font-size"), 0) || 0), t.data("pt") == lt && t.data("pt", parseInt(t.css("paddingTop"), 0) || 0), t.data("pb") == lt && t.data("pb", parseInt(t.css("paddingBottom"), 0) || 0), t.data("pl") == lt && t.data("pl", parseInt(t.css("paddingLeft"), 0) || 0), t.data("pr") == lt && t.data("pr", parseInt(t.css("paddingRight"), 0) || 0), t.data("mt") == lt && t.data("mt", parseInt(t.css("marginTop"), 0) || 0), t.data("mb") == lt && t.data("mb", parseInt(t.css("marginBottom"), 0) || 0), t.data("ml") == lt && t.data("ml", parseInt(t.css("marginLeft"), 0) || 0), t.data("mr") == lt && t.data("mr", parseInt(t.css("marginRight"), 0) || 0), t.data("bt") == lt && t.data("bt", parseInt(t.css("borderTopWidth"), 0) || 0), t.data("bb") == lt && t.data("bb", parseInt(t.css("borderBottomWidth"), 0) || 0), t.data("bl") == lt && t.data("bl", parseInt(t.css("borderLeftWidth"), 0) || 0), t.data("br") == lt && t.data("br", parseInt(t.css("borderRightWidth"), 0) || 0), t.data("ls") == lt && t.data("ls", parseInt(t.css("letterSpacing"), 0) || 0), t.data("lh") == lt && t.data("lh", parseInt(t.css("lineHeight"), 0) || "auto"), t.data("minwidth") == lt && t.data("minwidth", parseInt(t.css("minWidth"), 0) || 0), t.data("minheight") == lt && t.data("minheight", parseInt(t.css("minHeight"), 0) || 0), t.data("maxwidth") == lt && t.data("maxwidth", parseInt(t.css("maxWidth"), 0) || "none"), t.data("maxheight") == lt && t.data("maxheight", parseInt(t.css("maxHeight"), 0) || "none"), t.data("wii") == lt && t.data("wii", parseInt(t.css("width"), 0) || 0), t.data("hii") == lt && t.data("hii", parseInt(t.css("height"), 0) || 0), t.data("wan") == lt && t.data("wan", t.css("-webkit-transition")), t.data("moan") == lt && t.data("moan", t.css("-moz-animation-transition")), t.data("man") == lt && t.data("man", t.css("-ms-animation-transition")), t.data("ani") == lt && t.data("ani", t.css("transition")), "auto" == t.data("lh") && t.data("lh", t.data("fsize") + 4), t.hasClass("tp-splitted") || (t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none"), punchgs.TweenLite.set(t, {
					fontSize: Math.round(t.data("fsize") * e.bw) + "px",
					letterSpacing: Math.floor(t.data("ls") * e.bw) + "px",
					paddingTop: Math.round(t.data("pt") * e.bh) + "px",
					paddingBottom: Math.round(t.data("pb") * e.bh) + "px",
					paddingLeft: Math.round(t.data("pl") * e.bw) + "px",
					paddingRight: Math.round(t.data("pr") * e.bw) + "px",
					marginTop: t.data("mt") * e.bh + "px",
					marginBottom: t.data("mb") * e.bh + "px",
					marginLeft: t.data("ml") * e.bw + "px",
					marginRight: t.data("mr") * e.bw + "px",
					borderTopWidth: Math.round(t.data("bt") * e.bh) + "px",
					borderBottomWidth: Math.round(t.data("bb") * e.bh) + "px",
					borderLeftWidth: Math.round(t.data("bl") * e.bw) + "px",
					borderRightWidth: Math.round(t.data("br") * e.bw) + "px",
					lineHeight: Math.round(t.data("lh") * e.bh) + "px",
					minWidth: t.data("minwidth") * e.bw + "px",
					minHeight: t.data("minheight") * e.bh + "px",
					overwrite: "auto"
				}), setTimeout(function () {
					t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani"))
				}, 30), "none" != t.data("maxheight") && t.css({
					maxHeight: t.data("maxheight") * e.bh + "px"
				}), "none" != t.data("maxwidth") && t.css({
					maxWidth: t.data("maxwidth") * e.bw + "px"
				}))
			},
			vt = function (t, r) {
				t.find(".rs-pendulum").each(function () {
					var t = rt(this);
					if (t.data("timeline") == lt) {
						t.data("timeline", new punchgs.TimelineLite);
						var e = t.data("startdeg") == lt ? -20 : t.data("startdeg"),
							i = t.data("enddeg") == lt ? 20 : t.data("enddeg"),
							n = t.data("speed") == lt ? 2 : t.data("speed"),
							o = t.data("origin") == lt ? "50% 50%" : t.data("origin"),
							s = t.data("easing") == lt ? punchgs.Power2.easeInOut : t.data("ease");
						e *= r, i *= r, t.data("timeline").append(new punchgs.TweenLite.fromTo(t, n, {
							force3D: "auto",
							rotation: e,
							transformOrigin: o
						}, {
							rotation: i,
							ease: s
						})), t.data("timeline").append(new punchgs.TweenLite.fromTo(t, n, {
							force3D: "auto",
							rotation: i,
							transformOrigin: o
						}, {
							rotation: e,
							ease: s,
							onComplete: function () {
								t.data("timeline").restart()
							}
						}))
					}
				}), t.find(".rs-rotate").each(function () {
					var t = rt(this);
					if (t.data("timeline") == lt) {
						t.data("timeline", new punchgs.TimelineLite);
						var e = t.data("startdeg") == lt ? 0 : t.data("startdeg"),
							i = t.data("enddeg") == lt ? 360 : t.data("enddeg");
						speed = t.data("speed") == lt ? 2 : t.data("speed"), origin = t.data("origin") == lt ? "50% 50%" : t.data("origin"), easing = t.data("easing") == lt ? punchgs.Power2.easeInOut : t.data("easing"), e *= r, i *= r, t.data("timeline").append(new punchgs.TweenLite.fromTo(t, speed, {
							force3D: "auto",
							rotation: e,
							transformOrigin: origin
						}, {
							rotation: i,
							ease: easing,
							onComplete: function () {
								t.data("timeline").restart()
							}
						}))
					}
				}), t.find(".rs-slideloop").each(function () {
					var t = rt(this);
					if (t.data("timeline") == lt) {
						t.data("timeline", new punchgs.TimelineLite);
						var e = t.data("xs") == lt ? 0 : t.data("xs"),
							i = t.data("ys") == lt ? 0 : t.data("ys"),
							n = t.data("xe") == lt ? 0 : t.data("xe"),
							o = t.data("ye") == lt ? 0 : t.data("ye"),
							s = t.data("speed") == lt ? 2 : t.data("speed"),
							a = t.data("easing") == lt ? punchgs.Power2.easeInOut : t.data("easing");
						e *= r, i *= r, n *= r, o *= r, t.data("timeline").append(new punchgs.TweenLite.fromTo(t, s, {
							force3D: "auto",
							x: e,
							y: i
						}, {
							x: n,
							y: o,
							ease: a
						})), t.data("timeline").append(new punchgs.TweenLite.fromTo(t, s, {
							force3D: "auto",
							x: n,
							y: o
						}, {
							x: e,
							y: i,
							onComplete: function () {
								t.data("timeline").restart()
							}
						}))
					}
				}), t.find(".rs-pulse").each(function () {
					var t = rt(this);
					if (t.data("timeline") == lt) {
						t.data("timeline", new punchgs.TimelineLite);
						var e = t.data("zoomstart") == lt ? 0 : t.data("zoomstart"),
							i = t.data("zoomend") == lt ? 0 : t.data("zoomend"),
							n = t.data("speed") == lt ? 2 : t.data("speed"),
							o = t.data("easing") == lt ? punchgs.Power2.easeInOut : t.data("easing");
						t.data("timeline").append(new punchgs.TweenLite.fromTo(t, n, {
							force3D: "auto",
							scale: e
						}, {
							scale: i,
							ease: o
						})), t.data("timeline").append(new punchgs.TweenLite.fromTo(t, n, {
							force3D: "auto",
							scale: i
						}, {
							scale: e,
							onComplete: function () {
								t.data("timeline").restart()
							}
						}))
					}
				}), t.find(".rs-wave").each(function () {
					var t = rt(this);
					if (t.data("timeline") == lt) {
						t.data("timeline", new punchgs.TimelineLite);
						var e = t.data("angle") == lt ? 10 : t.data("angle"),
							i = t.data("radius") == lt ? 10 : t.data("radius"),
							n = t.data("speed") == lt ? -20 : t.data("speed"),
							o = (t.data("origin") == lt || t.data("origin"), {
								a: 0,
								ang: e *= r,
								element: t,
								unit: i *= r
							});
						t.data("timeline").append(new punchgs.TweenLite.fromTo(o, n, {
							a: 360
						}, {
							a: 0,
							force3D: "auto",
							ease: punchgs.Linear.easeNone,
							onUpdate: function () {
								var t = o.a * (Math.PI / 180);
								punchgs.TweenLite.to(o.element, .1, {
									force3D: "auto",
									x: Math.cos(t) * o.unit,
									y: o.unit * (1 - Math.sin(t))
								})
							},
							onComplete: function () {
								t.data("timeline").restart()
							}
						}))
					}
				})
			},
			wt = function (t) {
				t.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function () {
					var t = rt(this);
					t.data("timeline") != lt && (t.data("timeline").pause(), t.data("timeline", null))
				})
			},
			u = function (t, l) {
				var d = 0,
					i = t.find(".tp-caption"),
					e = l.container.find(".tp-static-layers").find(".tp-caption");
				return rt.each(e, function (t, e) {
					i.push(e)
				}), i.each(function (t) {
					var e = -1,
						i = rt(this);
					if (i.hasClass("tp-static-layer") && (-1 != i.data("startslide") && "-1" != i.data("startslide") || i.data("startslide", 0), -1 != i.data("endslide") && "-1" != i.data("endslide") || i.data("endslide", l.slideamount), i.hasClass("tp-is-shown") ? i.data("startslide") > l.next || i.data("endslide") < l.next ? (e = 2, i.removeClass("tp-is-shown")) : e = 0 : e = 2), 0 != e) {
						if (wt(i), 0 < i.find("iframe").length) {
							punchgs.TweenLite.to(i.find("iframe"), .2, {
								autoAlpha: 0
							}), _t() && i.find("iframe").remove();
							try {
								var n = i.find("iframe").attr("id");
								$f(n).api("pause"), clearTimeout(i.data("timerplay"))
							} catch (t) {}
							try {
								i.data("player").stopVideo(), clearTimeout(i.data("timerplay"))
							} catch (t) {}
						}
						if (0 < i.find("video").length) try {
							i.find("video").each(function (t) {
								var e = rt(this).parent();
								e.attr("id");
								clearTimeout(e.data("timerplay"));
								this.pause()
							})
						} catch (t) {}
						try {
							var o = i.data("timeline"),
								s = o.getLabelTime("frame99");
							if (o.time() < s) {
								var a = o.getTweensOf(i);
								if (rt.each(a, function (t, e) {
										0 != t && e.pause()
									}), 0 != i.css("opacity")) {
									var r = i.data("endspeed") == lt ? i.data("speed") : i.data("endspeed");
									d < r && (d = r), o.play("frame99")
								} else o.progress(1, !1)
							}
						} catch (t) {}
					}
				}), d
			},
			yt = function (t, e, i, n, o) {
				var s = t.data("timeline"),
					a = new punchgs.TimelineLite,
					r = t;
				"chars" == i.typ ? r = t.data("mySplitText").chars : "words" == i.typ ? r = t.data("mySplitText").words : "lines" == i.typ && (r = t.data("mySplitText").lines), i.animation.ease = i.ease, i.animation.rotationZ != lt && (i.animation.rotation = i.animation.rotationZ), i.animation.data = new Object, i.animation.data.oldx = i.animation.x, i.animation.data.oldy = i.animation.y, i.animation.x = i.animation.x * o, i.animation.y = i.animation.y * o, s.add(a.staggerTo(r, i.speed, i.animation, i.elementdelay), i.start), s.addLabel(n, i.start), t.data("timeline", s)
			},
			bt = function (t, e, i, n, o, s) {
				var a = t.data("timeline"),
					r = new punchgs.TimelineLite,
					l = pt(),
					d = t.data("endspeed") == lt ? t.data("speed") : t.data("endspeed"),
					c = t.attr("class");
				if (l.ease = t.data("endeasing") == lt ? punchgs.Power1.easeInOut : t.data("endeasing"), d /= 1e3, c.match("ltr") || c.match("ltl") || c.match("str") || c.match("stl") || c.match("ltt") || c.match("ltb") || c.match("stt") || c.match("stb") || c.match("skewtoright") || c.match("skewtorightshort") || c.match("skewtoleft") || c.match("skewtoleftshort") || c.match("fadeout") || c.match("randomrotateout")) {
					c.match("skewtoright") || c.match("skewtorightshort") ? l.skewX = 35 : (c.match("skewtoleft") || c.match("skewtoleftshort")) && (l.skewX = -35), c.match("ltr") || c.match("skewtoright") ? l.x = e.width + 60 : c.match("ltl") || c.match("skewtoleft") ? l.x = 0 - (e.width + 60) : c.match("ltt") ? l.y = 0 - (e.height + 60) : c.match("ltb") ? l.y = e.height + 60 : c.match("str") || c.match("skewtorightshort") ? (l.x = 50, l.opacity = 0) : c.match("stl") || c.match("skewtoleftshort") ? (l.x = -50, l.opacity = 0) : c.match("stt") ? (l.y = -50, l.opacity = 0) : c.match("stb") ? (l.y = 50, l.opacity = 0) : c.match("randomrotateout") ? (l.x = Math.random() * e.width, l.y = Math.random() * e.height, l.scale = 2 * Math.random() + .3, l.rotation = 360 * Math.random() - 180, l.opacity = 0) : c.match("fadeout") && (l.opacity = 0), c.match("skewtorightshort") ? l.x = 270 : c.match("skewtoleftshort") && (l.x = -270), l.data = new Object, l.data.oldx = l.x, l.data.oldy = l.y, l.x = l.x * s, l.y = l.y * s, l.overwrite = "auto";
					var h = t;
					h = t;
					"chars" == t.data("splitout") ? h = t.data("mySplitText").chars : "words" == t.data("splitout") ? h = t.data("mySplitText").words : "lines" == t.data("splitout") && (h = t.data("mySplitText").lines);
					var u = t.data("endelementdelay") == lt ? 0 : t.data("endelementdelay");
					a.add(r.staggerTo(h, d, l, u), i)
				} else if (t.hasClass("customout")) {
					l = ft(l, t.data("customout"));
					h = t;
					"chars" == t.data("splitout") ? h = t.data("mySplitText").chars : "words" == t.data("splitout") ? h = t.data("mySplitText").words : "lines" == t.data("splitout") && (h = t.data("mySplitText").lines);
					u = t.data("endelementdelay") == lt ? 0 : t.data("endelementdelay");
					l.onStart = function () {
						punchgs.TweenLite.set(t, {
							transformPerspective: l.transformPerspective,
							transformOrigin: l.transformOrigin,
							overwrite: "auto"
						})
					}, l.data = new Object, l.data.oldx = l.x, l.data.oldy = l.y, l.x = l.x * s, l.y = l.y * s, a.add(r.staggerTo(h, d, l, u), i)
				} else n.delay = 0, a.add(punchgs.TweenLite.to(t, d, n), i);
				a.addLabel(o, i), t.data("timeline", a)
			},
			D = function (t, e) {
				if (e.cd = 0, e.loop = 0, e.stopAfterLoops != lt && -1 < e.stopAfterLoops ? e.looptogo = e.stopAfterLoops : e.looptogo = 9999999, e.stopAtSlide != lt && -1 < e.stopAtSlide ? e.lastslidetoshow = e.stopAtSlide : e.lastslidetoshow = 999, e.stopLoop = "off", 0 == e.looptogo && (e.stopLoop = "on"), 1 < e.slideamount && (0 != e.stopAfterLoops || 1 != e.stopAtSlide)) {
					var i = t.find(".tp-bannertimer");
					t.on("stoptimer", function () {
						var t = rt(this).find(".tp-bannertimer");
						t.data("tween").pause(), "on" == e.hideTimerBar && t.css({
							visibility: "hidden"
						})
					}), t.on("starttimer", function () {
						1 != e.conthover && 1 != e.videoplaying && e.width > e.hideSliderAtLimit && 1 != e.bannertimeronpause && 1 != e.overnav && ("on" == e.stopLoop && e.next == e.lastslidetoshow - 1 || 1 == e.noloopanymore ? e.noloopanymore = 1 : (i.css({
							visibility: "visible"
						}), i.data("tween").resume())), "on" == e.hideTimerBar && i.css({
							visibility: "hidden"
						})
					}), t.on("restarttimer", function () {
						var t = rt(this).find(".tp-bannertimer");
						"on" == e.stopLoop && e.next == e.lastslidetoshow - 1 || 1 == e.noloopanymore ? e.noloopanymore = 1 : (t.css({
							visibility: "visible"
						}), t.data("tween").kill(), t.data("tween", punchgs.TweenLite.fromTo(t, e.delay / 1e3, {
							width: "0%"
						}, {
							force3D: "auto",
							width: "100%",
							ease: punchgs.Linear.easeNone,
							onComplete: n,
							delay: 1
						}))), "on" == e.hideTimerBar && t.css({
							visibility: "hidden"
						})
					}), t.on("nulltimer", function () {
						i.data("tween").pause(0), "on" == e.hideTimerBar && i.css({
							visibility: "hidden"
						})
					});
					var n = function () {
						0 == rt("body").find(t).length && (! function (t, e) {
							t.children().each(function () {
								try {
									rt(this).die("click")
								} catch (t) {}
								try {
									rt(this).die("mouseenter")
								} catch (t) {}
								try {
									rt(this).die("mouseleave")
								} catch (t) {}
								try {
									rt(this).unbind("hover")
								} catch (t) {}
							});
							try {
								t.die("click", "mouseenter", "mouseleave")
							} catch (t) {}
							clearInterval(e.cdint), t = null
						}(t, e), clearInterval(e.cdint)), t.trigger("revolution.slide.slideatend"), 1 == t.data("conthover-changed") && (e.conthover = t.data("conthover"), t.data("conthover-changed", 0)), e.act = e.next, e.next = e.next + 1, e.next > t.find(">ul >li").length - 1 && (e.next = 0, e.looptogo = e.looptogo - 1, e.looptogo <= 0 && (e.stopLoop = "on")), "on" == e.stopLoop && e.next == e.lastslidetoshow - 1 ? (t.find(".tp-bannertimer").css({
							visibility: "hidden"
						}), t.trigger("revolution.slide.onstop"), e.noloopanymore = 1) : i.data("tween").restart(), P(t, e)
					};
					i.data("tween", punchgs.TweenLite.fromTo(i, e.delay / 1e3, {
						width: "0%"
					}, {
						force3D: "auto",
						width: "100%",
						ease: punchgs.Linear.easeNone,
						onComplete: n,
						delay: 1
					})), i.data("opt", e), t.hover(function () {
						"on" != e.onHoverStop || _t() || (t.trigger("stoptimer"), t.trigger("revolution.slide.onpause"), t.find(">ul >li:eq(" + e.next + ") .slotholder").find(".defaultimg").each(function () {
							var t = rt(this);
							t.data("kenburn") != lt && t.data("kenburn").pause()
						}))
					}, function () {
						1 != t.data("conthover") && (t.trigger("revolution.slide.onresume"), t.trigger("starttimer"), t.find(">ul >li:eq(" + e.next + ") .slotholder").find(".defaultimg").each(function () {
							var t = rt(this);
							t.data("kenburn") != lt && t.data("kenburn").play()
						}))
					})
				}
			},
			_t = function () {
				var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
					e = !1;
				for (var i in t) 1 < navigator.userAgent.split(t[i]).length && (e = !0);
				return e
			},
			W = function (t, e, i) {
				var n = e.data("owidth"),
					o = e.data("oheight");
				return n / o > i.width / i.height ? (t = t *= 100 / (o * (i.container.width() / n) / i.container.height() * t)) + "% " + 100 + "% 1" : t + "% " + o * (i.container.width() / n) / i.container.height() * t + "%"
			},
			it = function (e, d, t, c) {
				try {
					e.find(">ul:first-child >li:eq(" + d.act + ")")
				} catch (t) {
					e.find(">ul:first-child >li:eq(1)")
				}
				d.lastslide = d.act;
				var h = e.find(">ul:first-child >li:eq(" + d.next + ")").find(".slotholder"),
					u = h.data("bgposition"),
					p = h.data("bgpositionend"),
					i = h.data("zoomstart") / 100,
					n = h.data("zoomend") / 100,
					o = h.data("rotationstart"),
					f = h.data("rotationend"),
					m = h.data("bgfit"),
					g = h.data("bgfitend"),
					v = h.data("easeme"),
					w = h.data("duration") / 1e3,
					s = 100;
				m == lt && (m = 100), g == lt && (g = 100);
				var y = m,
					b = g;
				m = W(m, h, d), g = W(g, h, d), s = W(100, h, d), i == lt && (i = 1), n == lt && (n = 1), o == lt && (o = 0), f == lt && (f = 0), i < 1 && (i = 1), n < 1 && (n = 1);
				var _ = new Object;
				_.w = parseInt(s.split(" ")[0], 0), _.h = parseInt(s.split(" ")[1], 0);
				var x = !1;
				"1" == s.split(" ")[2] && (x = !0), h.find(".defaultimg").each(function () {
					var s = rt(this);
					0 == h.find(".kenburnimg").length ? h.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + s.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + _.w + "%;height:" + _.h + '%;"></div>') : h.find(".kenburnimg img").css({
						width: _.w + "%",
						height: _.h + "%"
					});
					var a = h.find(".kenburnimg img"),
						t = M(d, u, m, a, x),
						e = M(d, p, g, a, x);
					if (x && (t.w = y / 100, e.w = b / 100), c) {
						punchgs.TweenLite.set(a, {
							autoAlpha: 0,
							transformPerspective: 1200,
							transformOrigin: "0% 0%",
							top: 0,
							left: 0,
							scale: t.w,
							x: t.x,
							y: t.y
						});
						var i = t.w,
							n = i * a.width() - d.width,
							o = i * a.height() - d.height,
							r = Math.abs(t.x / n * 100),
							l = Math.abs(t.y / o * 100);
						0 == o && (l = 0), 0 == n && (r = 0), s.data("bgposition", r + "% " + l + "%"), dt(8) || s.data("currotate", H(a)), dt(8) || s.data("curscale", _.w * i + "%  " + _.h * i + "%"), h.find(".kenburnimg").remove()
					} else s.data("kenburn", punchgs.TweenLite.fromTo(a, w, {
						autoAlpha: 1,
						force3D: punchgs.force3d,
						transformOrigin: "0% 0%",
						top: 0,
						left: 0,
						scale: t.w,
						x: t.x,
						y: t.y
					}, {
						autoAlpha: 1,
						rotationZ: f,
						ease: v,
						x: e.x,
						y: e.y,
						scale: e.w,
						onUpdate: function () {
							var t = a[0]._gsTransform.scaleX,
								e = t * a.width() - d.width,
								i = t * a.height() - d.height,
								n = Math.abs(a[0]._gsTransform.x / e * 100),
								o = Math.abs(a[0]._gsTransform.y / i * 100);
							0 == i && (o = 0), 0 == e && (n = 0), s.data("bgposition", n + "% " + o + "%"), dt(8) || s.data("currotate", H(a)), dt(8) || s.data("curscale", _.w * t + "%  " + _.h * t + "%")
						}
					}))
				})
			},
			M = function (t, e, i, n, o) {
				var s = new Object;
				switch (s.w = o ? parseInt(i.split(" ")[1], 0) / 100 : parseInt(i.split(" ")[0], 0) / 100, e) {
					case "left top":
					case "top left":
						s.x = 0, s.y = 0;
						break;
					case "center top":
					case "top center":
						s.x = ((0 - n.width()) * s.w + parseInt(t.width, 0)) / 2, s.y = 0;
						break;
					case "top right":
					case "right top":
						s.x = (0 - n.width()) * s.w + parseInt(t.width, 0), s.y = 0;
						break;
					case "center left":
					case "left center":
						s.x = 0, s.y = ((0 - n.height()) * s.w + parseInt(t.height, 0)) / 2;
						break;
					case "center center":
						s.x = ((0 - n.width()) * s.w + parseInt(t.width, 0)) / 2, s.y = ((0 - n.height()) * s.w + parseInt(t.height, 0)) / 2;
						break;
					case "center right":
					case "right center":
						s.x = (0 - n.width()) * s.w + parseInt(t.width, 0), s.y = ((0 - n.height()) * s.w + parseInt(t.height, 0)) / 2;
						break;
					case "bottom left":
					case "left bottom":
						s.x = 0, s.y = (0 - n.height()) * s.w + parseInt(t.height, 0);
						break;
					case "bottom center":
					case "center bottom":
						s.x = ((0 - n.width()) * s.w + parseInt(t.width, 0)) / 2, s.y = (0 - n.height()) * s.w + parseInt(t.height, 0);
						break;
					case "bottom right":
					case "right bottom":
						s.x = (0 - n.width()) * s.w + parseInt(t.width, 0), s.y = (0 - n.height()) * s.w + parseInt(t.height, 0)
				}
				return s
			},
			H = function (t) {
				var e = t.css("-webkit-transform") || t.css("-moz-transform") || t.css("-ms-transform") || t.css("-o-transform") || t.css("transform");
				if ("none" !== e) var i = e.split("(")[1].split(")")[0].split(","),
					n = i[0],
					o = i[1],
					s = Math.round(Math.atan2(o, n) * (180 / Math.PI));
				else s = 0;
				return s < 0 ? s += 360 : s
			},
			p = function (e, t) {
				try {
					var i = e.find(">ul:first-child >li:eq(" + t.act + ")")
				} catch (t) {
					i = e.find(">ul:first-child >li:eq(1)")
				}
				t.lastslide = t.act;
				var n = e.find(">ul:first-child >li:eq(" + t.next + ")");
				i.find(".slotholder"), n.find(".slotholder");
				e.find(".defaultimg").each(function () {
					var t = rt(this);
					punchgs.TweenLite.killTweensOf(t, !1), punchgs.TweenLite.set(t, {
						scale: 1,
						rotationZ: 0
					}), punchgs.TweenLite.killTweensOf(t.data("kenburn img"), !1), t.data("kenburn") != lt && t.data("kenburn").pause(), t.data("currotate") != lt && t.data("bgposition") != lt && t.data("curscale") != lt && punchgs.TweenLite.set(t, {
						rotation: t.data("currotate"),
						backgroundPosition: t.data("bgposition"),
						backgroundSize: t.data("curscale")
					}), t != lt && t.data("kenburn img") != lt && 0 < t.data("kenburn img").length && punchgs.TweenLite.set(t.data("kenburn img"), {
						autoAlpha: 0
					})
				})
			},
			F = function (l, d) {
				if (_t() && "on" == d.parallaxDisableOnMobile) return !1;
				l.find(">ul:first-child >li").each(function () {
					for (var t = rt(this), e = 1; e <= 10; e++) t.find(".rs-parallaxlevel-" + e).each(function () {
						var t = rt(this);
						t.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + t.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + d.parallaxLevels[e - 1] + '"></div>')
					})
				}), "mouse" != d.parallax && "scroll+mouse" != d.parallax && "mouse+scroll" != d.parallax || (l.mouseenter(function (t) {
					var e = l.find(".current-sr-slide-visible"),
						i = l.offset().top,
						n = l.offset().left,
						o = t.pageX - n,
						s = t.pageY - i;
					e.data("enterx", o), e.data("entery", s)
				}), l.on("mousemove.hoverdir, mouseleave.hoverdir", function (t) {
					var e = l.find(".current-sr-slide-visible");
					switch (t.type) {
						case "mousemove":
							var i = l.offset().top,
								n = l.offset().left,
								o = e.data("enterx"),
								s = e.data("entery"),
								a = o - (t.pageX - n),
								r = s - (t.pageY - i);
							e.find(".tp-parallax-container").each(function () {
								var t = rt(this),
									e = parseInt(t.data("parallaxlevel"), 0) / 100,
									i = a * e,
									n = r * e;
								"scroll+mouse" == d.parallax || "mouse+scroll" == d.parallax ? punchgs.TweenLite.to(t, .4, {
									force3D: "auto",
									x: i,
									ease: punchgs.Power3.easeOut,
									overwrite: "all"
								}) : punchgs.TweenLite.to(t, .4, {
									force3D: "auto",
									x: i,
									y: n,
									ease: punchgs.Power3.easeOut,
									overwrite: "all"
								})
							});
							break;
						case "mouseleave":
							e.find(".tp-parallax-container").each(function () {
								var t = rt(this);
								"scroll+mouse" == d.parallax || "mouse+scroll" == d.parallax ? punchgs.TweenLite.to(t, 1.5, {
									force3D: "auto",
									x: 0,
									ease: punchgs.Power3.easeOut
								}) : punchgs.TweenLite.to(t, 1.5, {
									force3D: "auto",
									x: 0,
									y: 0,
									ease: punchgs.Power3.easeOut
								})
							})
					}
				}), _t() && (window.ondeviceorientation = function (t) {
					var e = Math.round(t.beta || 0),
						i = Math.round(t.gamma || 0),
						n = l.find(".current-sr-slide-visible");
					if (rt(window).width() > rt(window).height()) {
						var o = i;
						i = e, e = o
					}
					var s = 360 / l.width() * i,
						a = 180 / l.height() * e;
					n.find(".tp-parallax-container").each(function () {
						var t = rt(this),
							e = parseInt(t.data("parallaxlevel"), 0) / 100,
							i = s * e,
							n = a * e;
						punchgs.TweenLite.to(t, .2, {
							force3D: "auto",
							x: i,
							y: n,
							ease: punchgs.Power3.easeOut
						})
					})
				})), "scroll" != d.parallax && "scroll+mouse" != d.parallax && "mouse+scroll" != d.parallax || rt(window).on("scroll", function (t) {
					nt(l, d)
				})
			},
			nt = function (t, e) {
				if (_t() && "on" == e.parallaxDisableOnMobile) return !1;
				var i = t.offset().top,
					n = rt(window).scrollTop(),
					o = i + t.height() / 2,
					s = i + t.height() / 2 - n,
					a = rt(window).height() / 2,
					r = a - s;
				o < a && (r -= a - o);
				t.find(".current-sr-slide-visible");
				if (t.find(".tp-parallax-container").each(function (t) {
						var e = rt(this),
							i = parseInt(e.data("parallaxlevel"), 0) / 100,
							n = r * i;
						e.data("parallaxoffset", n), punchgs.TweenLite.to(e, .2, {
							force3D: "auto",
							y: n,
							ease: punchgs.Power3.easeOut
						})
					}), "on" != e.parallaxBgFreeze) {
					var l = e.parallaxLevels[0] / 100,
						d = r * l;
					punchgs.TweenLite.to(t, .2, {
						force3D: "auto",
						y: d,
						ease: punchgs.Power3.easeOut
					})
				}
			},
			R = function (r, o) {
				var t = r.parent();
				"thumb" != o.navigationType && "both" != o.navsecond || t.append('<div class="tp-bullets tp-thumbs ' + o.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
				var s = t.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
					e = s.parent();
				e.width(o.thumbWidth * o.thumbAmount), e.height(o.thumbHeight), e.parent().width(o.thumbWidth * o.thumbAmount), e.parent().height(o.thumbHeight), r.find(">ul:first >li").each(function (t) {
					var e = r.find(">ul:first >li:eq(" + t + ")"),
						i = e.find(".defaultimg").css("backgroundColor");
					if (e.data("thumb") != lt) var n = e.data("thumb");
					else n = e.find("img:first").attr("src");
					s.append('<div class="bullet thumb" style="background-color:' + i + ";position:relative;width:" + o.thumbWidth + "px;height:" + o.thumbHeight + "px;background-image:url(" + n + ') !important;background-size:cover;background-position:center center;"></div>');
					s.find(".bullet:first")
				});
				var i = 10;
				s.find(".bullet").each(function (t) {
					var e = rt(this);
					t == o.slideamount - 1 && e.addClass("last"), 0 == t && e.addClass("first"), e.width(o.thumbWidth), e.height(o.thumbHeight), i < e.outerWidth(!0) && (i = e.outerWidth(!0)), e.click(function () {
						0 == o.transition && e.index() != o.act && (o.next = e.index(), d(o, r))
					})
				});
				var n = i * r.find(">ul:first >li").length,
					a = s.parent().width();
				o.thumbWidth = i, a < n && (rt(document).mousemove(function (t) {
					rt("body").data("mousex", t.pageX)
				}), s.parent().mouseenter(function () {
					var t = rt(this),
						e = t.offset(),
						i = rt("body").data("mousex") - e.left,
						n = t.width(),
						o = t.find(".bullet:first").outerWidth(!0) * r.find(">ul:first >li").length,
						s = (o - n + 15) / n;
					t.addClass("over");
					var a = 0 - (i -= 30) * s;
					0 < a && (a = 0), a < 0 - o + n && (a = 0 - o + n), m(t, a, 200)
				}), s.parent().mousemove(function () {
					var t = rt(this),
						e = t.offset(),
						i = rt("body").data("mousex") - e.left,
						n = t.width(),
						o = t.find(".bullet:first").outerWidth(!0) * r.find(">ul:first >li").length - 1;
					(i -= 3) < 6 && (i = 0), n - 6 < i + 3 && (i = n);
					var s = 0 - i * ((o - n + 15) / n);
					0 < s && (s = 0), s < 0 - o + n && (s = 0 - o + n), m(t, s, 0)
				}), s.parent().mouseleave(function () {
					rt(this).removeClass("over"), f(r)
				}))
			},
			f = function (t) {
				var e = t.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer").parent(),
					i = (e.offset(), e.find(".bullet:first").outerWidth(!0)),
					n = e.find(".bullet.selected").index() * i,
					o = e.width(),
					s = (i = e.find(".bullet:first").outerWidth(!0)) * t.find(">ul:first >li").length,
					a = 0 - n;
				0 < a && (a = 0), a < 0 - s + o && (a = 0 - s + o), e.hasClass("over") || m(e, a, 200)
			},
			m = function (t, e, i) {
				punchgs.TweenLite.to(t.find(".tp-thumbcontainer"), .2, {
					force3D: "auto",
					left: e,
					ease: punchgs.Power3.easeOut,
					overwrite: "auto"
				})
			}
	}(jQuery), pCa = !1, window.JQClass = function () {}, JQClass.classes = {}, JQClass.extend = function t(e) {
		function i() {
			!pCa && this._init && this._init.apply(this, arguments)
		}
		var o = this.prototype;
		pCa = !0;
		var n = new this;
		for (var s in pCa = !1, e) n[s] = "function" == typeof e[s] && "function" == typeof o[s] ? function (i, n) {
			return function () {
				var t = this._super;
				this._super = function (t) {
					return o[i].apply(this, t)
				};
				var e = n.apply(this, arguments);
				return this._super = t, e
			}
		}(s, e[s]) : e[s];
		return ((i.prototype = n).constructor = i).extend = t, i
	},
	function ($) {
		function camelCase(t) {
			return t.replace(/-([a-z])/g, function (t, e) {
				return e.toUpperCase()
			})
		}
		JQClass.classes.JQPlugin = JQClass.extend({
			name: "plugin",
			defaultOptions: {},
			regionalOptions: {},
			_getters: [],
			_getMarker: function () {
				return "is-" + this.name
			},
			_init: function () {
				$.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
				var i = camelCase(this.name);
				$[i] = this, $.fn[i] = function (t) {
					var e = Array.prototype.slice.call(arguments, 1);
					return $[i]._isNotChained(t, e) ? $[i][t].apply($[i], [this[0]].concat(e)) : this.each(function () {
						if ("string" == typeof t) {
							if ("_" === t[0] || !$[i][t]) throw "Unknown method: " + t;
							$[i][t].apply($[i], [this].concat(e))
						} else $[i]._attach(this, t)
					})
				}
			},
			setDefaults: function (t) {
				$.extend(this.defaultOptions, t || {})
			},
			_isNotChained: function (t, e) {
				return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) || -1 < $.inArray(t, this._getters)
			},
			_attach: function (t, e) {
				if (!(t = $(t)).hasClass(this._getMarker())) {
					t.addClass(this._getMarker()), e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
					var i = $.extend({
						name: this.name,
						elem: t,
						options: e
					}, this._instSettings(t, e));
					t.data(this.name, i), this._postAttach(t, i), this.option(t, e)
				}
			},
			_instSettings: function () {
				return {}
			},
			_postAttach: function () {},
			_getMetadata: function (elem) {
				try {
					var data = elem.data(this.name.toLowerCase()) || "";
					for (var name in data = data.replace(/'/g, '"'), data = data.replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
							var n = data.substring(0, i).match(/"/g);
							return n && n.length % 2 != 0 ? e + ":" : '"' + e + '":'
						}), data = $.parseJSON("{" + data + "}"), data) {
						var value = data[name];
						"string" == typeof value && value.match(/^new Date\((.*)\)$/) && (data[name] = eval(value))
					}
					return data
				} catch (t) {
					return {}
				}
			},
			_getInst: function (t) {
				return $(t).data(this.name) || {}
			},
			option: function (t, e, i) {
				var n = (t = $(t)).data(this.name);
				if (!e || "string" == typeof e && null == i) return (o = (n || {}).options) && e ? o[e] : o;
				if (t.hasClass(this._getMarker())) {
					var o = e || {};
					"string" == typeof e && ((o = {})[e] = i), this._optionsChanged(t, n, o), $.extend(n.options, o)
				}
			},
			_optionsChanged: function () {},
			destroy: function (t) {
				(t = $(t)).hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()))
			},
			_preDestroy: function () {}
		}), $.JQPlugin = {
			createPlugin: function (t, e) {
				"object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
				var i = camelCase(e.name);
				JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i]
			}
		}
	}(jQuery),
	function (t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
	}(function (o) {
		"use strict";
		var s = [],
			e = [],
			n = {
				precision: 100,
				elapse: !1,
				defer: !1
			};
		e.push(/^[0-9]*$/.source), e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), e = new RegExp(e.join("|"));
		var g = {
				Y: "years",
				m: "months",
				n: "daysToMonth",
				d: "daysToWeek",
				w: "weeks",
				W: "weeksToMonth",
				H: "hours",
				M: "minutes",
				S: "seconds",
				D: "totalDays",
				I: "totalHours",
				N: "totalMinutes",
				T: "totalSeconds"
			},
			a = function (t, e, i) {
				this.el = t, this.$el = o(t), this.interval = null, this.offset = {}, this.options = o.extend({}, n), this.instanceNumber = s.length, s.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = o.extend({}, n, i)), this.setFinalDate(e), !1 === this.options.defer && this.start()
			};
		o.extend(a.prototype, {
			start: function () {
				null !== this.interval && clearInterval(this.interval);
				var t = this;
				this.update(), this.interval = setInterval(function () {
					t.update.call(t)
				}, this.options.precision)
			},
			stop: function () {
				clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
			},
			toggle: function () {
				this.interval ? this.stop() : this.start()
			},
			pause: function () {
				this.stop()
			},
			resume: function () {
				this.start()
			},
			remove: function () {
				this.stop.call(this), s[this.instanceNumber] = null, delete this.$el.data().countdownInstance
			},
			setFinalDate: function (t) {
				this.finalDate = function (t) {
					if (t instanceof Date) return t;
					if (String(t).match(e)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
					throw new Error("Couldn't cast `" + t + "` to a date object.")
				}(t)
			},
			update: function () {
				if (0 !== this.$el.closest("html").length) {
					var t, e = void 0 !== o._data(this.el, "events"),
						i = new Date;
					t = this.finalDate.getTime() - i.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft !== t && e && (this.totalSecsLeft = t, this.elapsed = i >= this.finalDate, this.offset = {
						seconds: this.totalSecsLeft % 60,
						minutes: Math.floor(this.totalSecsLeft / 60) % 60,
						hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
						days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
						daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
						daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
						weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
						weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
						months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
						years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()),
						totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
						totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
						totalMinutes: Math.floor(this.totalSecsLeft / 60),
						totalSeconds: this.totalSecsLeft
					}, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
				} else this.remove()
			},
			dispatchEvent: function (t) {
				var m, e = o.Event(t + ".countdown");
				e.finalDate = this.finalDate, e.elapsed = this.elapsed, e.offset = o.extend({}, this.offset), e.strftime = (m = this.offset, function (t) {
					var e, i, n, o, s, a, r = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
					if (r)
						for (var l = 0, d = r.length; l < d; ++l) {
							var c = r[l].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
								h = (s = c[0], a = s.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(a)),
								u = c[1] || "",
								p = c[3] || "",
								f = null;
							c = c[2], g.hasOwnProperty(c) && (f = g[c], f = Number(m[f])), null !== f && ("!" === u && (i = f, o = n = void 0, n = "s", o = "", (e = p) && (e = e.replace(/(:|;|\s)/gi, "").split(/\,/), n = 1 === e.length ? e[0] : (o = e[0], e[1])), f = 1 < Math.abs(i) ? n : o), "" === u && f < 10 && (f = "0" + f.toString()), t = t.replace(h, f.toString()))
						}
					return t.replace(/%%/, "%")
				}), this.$el.trigger(e)
			}
		}), o.fn.countdown = function () {
			var n = Array.prototype.slice.call(arguments, 0);
			return this.each(function () {
				var t = o(this).data("countdown-instance");
				if (void 0 !== t) {
					var e = s[t],
						i = n[0];
					a.prototype.hasOwnProperty(i) ? e[i].apply(e, n.slice(1)) : null === String(i).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (e.setFinalDate.call(e, i), e.start()) : o.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, i))
				} else new a(this, n[0], n[1])
			})
		}
	});
var _extends = Object.assign || function (t) {
		for (var e = 1; e < arguments.length; e++) {
			var i = arguments[e];
			for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		}
		return t
	},
	_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
		return typeof t
	} : function (t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	},
	WDa, XDa, rNa, eJa, oWa, oXa, rXa, uXa, sXa;
WDa = this, XDa = function () {
		"use strict";
		var r = function (t, e) {
				return t.getAttribute("data-" + e)
			},
			o = function (t) {
				return t.filter(function (t) {
					return !r(t, "was-processed")
				})
			},
			s = function (t, e) {
				var i, n = new t(e);
				try {
					i = new CustomEvent("LazyLoad::Initialized", {
						detail: {
							instance: n
						}
					})
				} catch (t) {
					(i = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
						instance: n
					})
				}
				window.dispatchEvent(i)
			},
			l = function (t, e) {
				var i = e.data_src,
					n = e.data_srcset,
					o = t.tagName,
					s = r(t, i);
				if ("IMG" === o) {
					! function (t, e) {
						var i = e.data_srcset,
							n = t.parentNode;
						if (n && "PICTURE" === n.tagName)
							for (var o, s = 0; o = n.children[s]; s += 1)
								if ("SOURCE" === o.tagName) {
									var a = r(o, i);
									a && o.setAttribute("srcset", a)
								}
					}(t, e);
					var a = r(t, n);
					return a && t.setAttribute("srcset", a), void(s && t.setAttribute("src", s))
				}
				"IFRAME" !== o ? s && (t.style.backgroundImage = 'url("' + s + '")') : s && t.setAttribute("src", s)
			},
			t = "undefined" != typeof window,
			i = t && "IntersectionObserver" in window,
			a = t && "classList" in document.createElement("p"),
			d = function (t, e) {
				a ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
			},
			c = function (t, e) {
				t && t(e)
			},
			h = function (t, e, i) {
				t.removeEventListener("load", e), t.removeEventListener("error", i)
			},
			u = function (t, e, i) {
				var n, o, s = t.target;
				n = s, o = i.class_loading, a ? n.classList.remove(o) : n.className = n.className.replace(new RegExp("(^|\\s+)" + o + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""), d(s, e ? i.class_loaded : i.class_error), c(e ? i.callback_load : i.callback_error, s)
			},
			p = function (t, e) {
				var i, n, o, s, a, r;
				c(e.callback_enter, t), -1 < ["IMG", "IFRAME"].indexOf(t.tagName) && (s = e, a = function t(e) {
					u(e, !0, s), h(o, t, r)
				}, r = function t(e) {
					u(e, !1, s), h(o, a, t)
				}, (o = t).addEventListener("load", a), o.addEventListener("error", r), d(t, e.class_loading)), l(t, e), i = "was-processed", n = !0, t.setAttribute("data-" + i, n), c(e.callback_set, t)
			},
			e = function (t, e) {
				var i;
				this._settings = (i = {
					elements_selector: "img",
					container: document,
					threshold: 300,
					data_src: "src",
					data_srcset: "srcset",
					class_loading: "loading",
					class_loaded: "loaded",
					class_error: "error",
					callback_load: null,
					callback_error: null,
					callback_set: null,
					callback_enter: null
				}, _extends({}, i, t)), this._setObserver(), this.update(e)
			};
		e.prototype = {
			_setObserver: function () {
				var n = this;
				if (i) {
					var t = this._settings,
						e = {
							root: t.container === document ? null : t.container,
							rootMargin: t.threshold + "px"
						};
					this._observer = new IntersectionObserver(function (t) {
						t.forEach(function (t) {
							if ((i = t).isIntersecting || 0 < i.intersectionRatio) {
								var e = t.target;
								p(e, n._settings), n._observer.unobserve(e)
							}
							var i
						}), n._elements = o(n._elements)
					}, e)
				}
			},
			update: function (t) {
				var e = this,
					i = this._settings,
					n = t || i.container.querySelectorAll(i.elements_selector);
				this._elements = o(Array.prototype.slice.call(n)), this._observer ? this._elements.forEach(function (t) {
					e._observer.observe(t)
				}) : (this._elements.forEach(function (t) {
					p(t, i)
				}), this._elements = o(this._elements))
			},
			destroy: function () {
				var e = this;
				this._observer && (o(this._elements).forEach(function (t) {
					e._observer.unobserve(t)
				}), this._observer = null), this._elements = null, this._settings = null
			}
		};
		var n = window.lazyLoadOptions;
		return t && n && function (t, e) {
			if (e.length)
				for (var i, n = 0; i = e[n]; n += 1) s(t, i);
			else s(t, e)
		}(e, n), e
	}, "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = XDa() : "function" == typeof define && define.amd ? define(XDa) : WDa.LazyLoad = XDa(),
	function (P) {
		"use strict";
		var v = {};
		v.fileapi = void 0 !== P("<input type='file'/>").get(0).files, v.formdata = void 0 !== window.FormData;
		var D = !!P.fn.prop;

		function i(t) {
			var e = t.data;
			t.isDefaultPrevented() || (t.preventDefault(), P(this).ajaxSubmit(e))
		}

		function n(t) {
			var e = t.target,
				i = P(e);
			if (!i.is("[type=submit],[type=image]")) {
				var n = i.closest("[type=submit]");
				if (0 === n.length) return;
				e = n[0]
			}
			var o = this;
			if ("image" == (o.clk = e).type)
				if (void 0 !== t.offsetX) o.clk_x = t.offsetX, o.clk_y = t.offsetY;
				else if ("function" == typeof P.fn.offset) {
				var s = i.offset();
				o.clk_x = t.pageX - s.left, o.clk_y = t.pageY - s.top
			} else o.clk_x = t.pageX - e.offsetLeft, o.clk_y = t.pageY - e.offsetTop;
			setTimeout(function () {
				o.clk = o.clk_x = o.clk_y = null
			}, 100)
		}

		function W() {
			if (P.fn.ajaxSubmit.debug) {
				var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
				window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
			}
		}
		P.fn.attr2 = function () {
			if (!D) return this.attr.apply(this, arguments);
			var t = this.prop.apply(this, arguments);
			return t && t.jquery || "string" == typeof t ? t : this.attr.apply(this, arguments)
		}, P.fn.ajaxSubmit = function (L) {
			if (!this.length) return W("ajaxSubmit: skipping submit process - no element selected"), this;
			var E, t, e, O = this;
			"function" == typeof L && (L = {
				success: L
			}), E = this.attr2("method"), (e = (e = "string" == typeof (t = this.attr2("action")) ? P.trim(t) : "") || window.location.href || "") && (e = (e.match(/^([^#]+)/) || [])[1]), L = P.extend(!0, {
				url: e,
				success: P.ajaxSettings.success,
				type: E || "GET",
				iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
			}, L);
			var i = {};
			if (this.trigger("form-pre-serialize", [this, L, i]), i.veto) return W("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
			if (L.beforeSerialize && !1 === L.beforeSerialize(this, L)) return W("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
			var n = L.traditional;
			void 0 === n && (n = P.ajaxSettings.traditional);
			var o, A = [],
				s = this.formToArray(L.semantic, A);
			if (L.data && (L.extraData = L.data, o = P.param(L.data, n)), L.beforeSubmit && !1 === L.beforeSubmit(s, this, L)) return W("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
			if (this.trigger("form-submit-validate", [s, this, L, i]), i.veto) return W("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
			var a = P.param(s, n);
			o && (a = a ? a + "&" + o : o), "GET" == L.type.toUpperCase() ? (L.url += (0 <= L.url.indexOf("?") ? "&" : "?") + a, L.data = null) : L.data = a;
			var r = [];
			if (L.resetForm && r.push(function () {
					O.resetForm()
				}), L.clearForm && r.push(function () {
					O.clearForm(L.includeHidden)
				}), !L.dataType && L.target) {
				var l = L.success || function () {};
				r.push(function (t) {
					var e = L.replaceTarget ? "replaceWith" : "html";
					P(L.target)[e](t).each(l, arguments)
				})
			} else L.success && r.push(L.success);
			L.success = function (t, e, i) {
				for (var n = L.context || this, o = 0, s = r.length; o < s; o++) r[o].apply(n, [t, e, i || O, O])
			};
			var d = 0 < P('input[type=file]:enabled[value!=""]', this).length,
				c = "multipart/form-data",
				h = O.attr("enctype") == c || O.attr("encoding") == c,
				u = v.fileapi && v.formdata;
			W("fileAPI :" + u);
			var p, f = (d || h) && !u;
			!1 !== L.iframe && (L.iframe || f) ? L.closeKeepAlive ? P.get(L.closeKeepAlive, function () {
				p = g(s)
			}) : p = g(s) : p = (d || h) && u ? function (t) {
				for (var i = new FormData, e = 0; e < t.length; e++) i.append(t[e].name, t[e].value);
				if (L.extraData) {
					var n = function (t) {
						var e, i, n = P.param(t).split("&"),
							o = n.length,
							s = [];
						for (e = 0; e < o; e++) n[e] = n[e].replace(/\+/g, " "), i = n[e].split("="), s.push([decodeURIComponent(i[0]), decodeURIComponent(i[1])]);
						return s
					}(L.extraData);
					for (e = 0; e < n.length; e++) n[e] && i.append(n[e][0], n[e][1])
				}
				L.data = null;
				var o = P.extend(!0, {}, P.ajaxSettings, L, {
					contentType: !1,
					processData: !1,
					cache: !1,
					type: E || "POST"
				});
				L.uploadProgress && (o.xhr = function () {
					var t = jQuery.ajaxSettings.xhr();
					return t.upload && t.upload.addEventListener("progress", function (t) {
						var e = 0,
							i = t.loaded || t.position,
							n = t.total;
						t.lengthComputable && (e = Math.ceil(i / n * 100)), L.uploadProgress(t, i, n, e)
					}, !1), t
				});
				o.data = null;
				var s = o.beforeSend;
				return o.beforeSend = function (t, e) {
					e.data = i, s && s.call(this, t, e)
				}, P.ajax(o)
			}(s) : P.ajax(L), O.removeData("jqxhr").data("jqxhr", p);
			for (var m = 0; m < A.length; m++) A[m] = null;
			return this.trigger("form-submit-notify", [this, L]), this;

			function g(t) {
				var e, i, c, h, o, u, p, f, n, s, m, g, a = O[0],
					v = P.Deferred();
				if (t)
					for (i = 0; i < A.length; i++) e = P(A[i]), D ? e.prop("disabled", !1) : e.removeAttr("disabled");
				if ((c = P.extend(!0, {}, P.ajaxSettings, L)).context = c.context || c, o = "jqFormIO" + (new Date).getTime(), c.iframeTarget ? (s = (u = P(c.iframeTarget)).attr2("name")) ? o = s : u.attr2("name", o) : (u = P('<iframe name="' + o + '" src="' + c.iframeSrc + '" />')).css({
						position: "absolute",
						top: "-1000px",
						left: "-1000px"
					}), p = u[0], f = {
						aborted: 0,
						responseText: null,
						responseXML: null,
						status: 0,
						statusText: "n/a",
						getAllResponseHeaders: function () {},
						getResponseHeader: function () {},
						setRequestHeader: function () {},
						abort: function (t) {
							var e = "timeout" === t ? "timeout" : "aborted";
							W("aborting upload... " + e), this.aborted = 1;
							try {
								p.contentWindow.document.execCommand && p.contentWindow.document.execCommand("Stop")
							} catch (t) {}
							u.attr("src", c.iframeSrc), f.error = e, c.error && c.error.call(c.context, f, e, t), h && P.event.trigger("ajaxError", [f, c, e]), c.complete && c.complete.call(c.context, f, e)
						}
					}, (h = c.global) && 0 == P.active++ && P.event.trigger("ajaxStart"), h && P.event.trigger("ajaxSend", [f, c]), c.beforeSend && !1 === c.beforeSend.call(c.context, f, c)) return c.global && P.active--, v.reject(), v;
				if (f.aborted) return v.reject(), v;
				(n = a.clk) && (s = n.name) && !n.disabled && (c.extraData = c.extraData || {}, c.extraData[s] = n.value, "image" == n.type && (c.extraData[s + ".x"] = a.clk_x, c.extraData[s + ".y"] = a.clk_y));
				var w = 1,
					y = 2;

				function b(e) {
					var i = null;
					try {
						e.contentWindow && (i = e.contentWindow.document)
					} catch (t) {
						W("cannot get iframe.contentWindow document: " + t)
					}
					if (i) return i;
					try {
						i = e.contentDocument ? e.contentDocument : e.document
					} catch (t) {
						W("cannot get iframe.contentDocument: " + t), i = e.document
					}
					return i
				}
				var r = P("meta[name=csrf-token]").attr("content"),
					l = P("meta[name=csrf-param]").attr("content");

				function d() {
					var t = O.attr2("target"),
						e = O.attr2("action");
					a.setAttribute("target", o), E || a.setAttribute("method", "POST"), e != c.url && a.setAttribute("action", c.url), c.skipEncodingOverride || E && !/post/i.test(E) || O.attr({
						encoding: "multipart/form-data",
						enctype: "multipart/form-data"
					}), c.timeout && (g = setTimeout(function () {
						m = !0, C(w)
					}, c.timeout));
					var i = [];
					try {
						if (c.extraData)
							for (var n in c.extraData) c.extraData.hasOwnProperty(n) && (P.isPlainObject(c.extraData[n]) && c.extraData[n].hasOwnProperty("name") && c.extraData[n].hasOwnProperty("value") ? i.push(P('<input type="hidden" name="' + c.extraData[n].name + '">').val(c.extraData[n].value).appendTo(a)[0]) : i.push(P('<input type="hidden" name="' + n + '">').val(c.extraData[n]).appendTo(a)[0]));
						c.iframeTarget || (u.appendTo("body"), p.attachEvent ? p.attachEvent("onload", C) : p.addEventListener("load", C, !1)), setTimeout(function t() {
							try {
								var e = b(p).readyState;
								W("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
							} catch (t) {
								W("Server abort: ", t, " (", t.name, ")"), C(y), g && clearTimeout(g), g = void 0
							}
						}, 15);
						try {
							a.submit()
						} catch (t) {
							document.createElement("form").submit.apply(a)
						}
					} finally {
						a.setAttribute("action", e), t ? a.setAttribute("target", t) : O.removeAttr("target"), P(i).remove()
					}
				}
				l && r && (c.extraData = c.extraData || {}, c.extraData[l] = r), c.forceSync ? d() : setTimeout(d, 10);
				var _, x, T, k = 50;

				function C(t) {
					if (!f.aborted && !T) {
						if ((x = b(p)) || (W("cannot access response document"), t = y), t === w && f) return f.abort("timeout"), void v.reject(f, "timeout");
						if (t == y && f) return f.abort("server abort"), void v.reject(f, "error", "server abort");
						if (x && x.location.href != c.iframeSrc || m) {
							p.detachEvent ? p.detachEvent("onload", C) : p.removeEventListener("load", C, !1);
							var e, i = "success";
							try {
								if (m) throw "timeout";
								var n = "xml" == c.dataType || x.XMLDocument || P.isXMLDoc(x);
								if (W("isXml=" + n), !n && window.opera && (null === x.body || !x.body.innerHTML) && --k) return W("requeing onLoad callback, DOM not available"), void setTimeout(C, 250);
								var o = x.body ? x.body : x.documentElement;
								f.responseText = o ? o.innerHTML : null, f.responseXML = x.XMLDocument ? x.XMLDocument : x, n && (c.dataType = "xml"), f.getResponseHeader = function (t) {
									return {
										"content-type": c.dataType
									}[t]
								}, o && (f.status = Number(o.getAttribute("status")) || f.status, f.statusText = o.getAttribute("statusText") || f.statusText);
								var s = (c.dataType || "").toLowerCase(),
									a = /(json|script|text)/.test(s);
								if (a || c.textarea) {
									var r = x.getElementsByTagName("textarea")[0];
									if (r) f.responseText = r.value, f.status = Number(r.getAttribute("status")) || f.status, f.statusText = r.getAttribute("statusText") || f.statusText;
									else if (a) {
										var l = x.getElementsByTagName("pre")[0],
											d = x.getElementsByTagName("body")[0];
										l ? f.responseText = l.textContent ? l.textContent : l.innerText : d && (f.responseText = d.textContent ? d.textContent : d.innerText)
									}
								} else "xml" == s && !f.responseXML && f.responseText && (f.responseXML = S(f.responseText));
								try {
									_ = I(f, s, c)
								} catch (t) {
									i = "parsererror", f.error = e = t || i
								}
							} catch (t) {
								W("error caught: ", t), i = "error", f.error = e = t || i
							}
							f.aborted && (W("upload aborted"), i = null), f.status && (i = 200 <= f.status && f.status < 300 || 304 === f.status ? "success" : "error"), "success" === i ? (c.success && c.success.call(c.context, _, "success", f), v.resolve(f.responseText, "success", f), h && P.event.trigger("ajaxSuccess", [f, c])) : i && (void 0 === e && (e = f.statusText), c.error && c.error.call(c.context, f, i, e), v.reject(f, "error", e), h && P.event.trigger("ajaxError", [f, c, e])), h && P.event.trigger("ajaxComplete", [f, c]), h && !--P.active && P.event.trigger("ajaxStop"), c.complete && c.complete.call(c.context, f, i), T = !0, c.timeout && clearTimeout(g), setTimeout(function () {
								c.iframeTarget || u.remove(), f.responseXML = null
							}, 100)
						}
					}
				}
				var S = P.parseXML || function (t, e) {
						return window.ActiveXObject ? ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
					},
					z = P.parseJSON || function (t) {
						return window.eval("(" + t + ")")
					},
					I = function (t, e, i) {
						var n = t.getResponseHeader("content-type") || "",
							o = "xml" === e || !e && 0 <= n.indexOf("xml"),
							s = o ? t.responseXML : t.responseText;
						return o && "parsererror" === s.documentElement.nodeName && P.error && P.error("parsererror"), i && i.dataFilter && (s = i.dataFilter(s, e)), "string" == typeof s && ("json" === e || !e && 0 <= n.indexOf("json") ? s = z(s) : ("script" === e || !e && 0 <= n.indexOf("javascript")) && P.globalEval(s)), s
					};
				return v
			}
		}, P.fn.ajaxForm = function (t) {
			if ((t = t || {}).delegation = t.delegation && P.isFunction(P.fn.on), t.delegation || 0 !== this.length) return t.delegation ? (P(document).off("submit.form-plugin", this.selector, i).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, t, i).on("click.form-plugin", this.selector, t, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", t, i).bind("click.form-plugin", t, n);
			var e = {
				s: this.selector,
				c: this.context
			};
			return !P.isReady && e.s ? (W("DOM not ready, queuing ajaxForm"), P(function () {
				P(e.s, e.c).ajaxForm(t)
			})) : W("terminating; zero elements found by selector" + (P.isReady ? "" : " (DOM not ready)")), this
		}, P.fn.ajaxFormUnbind = function () {
			return this.unbind("submit.form-plugin click.form-plugin")
		}, P.fn.formToArray = function (t, e) {
			var i = [];
			if (0 === this.length) return i;
			var n, o, s, a, r, l, d, c = this[0],
				h = t ? c.getElementsByTagName("*") : c.elements;
			if (!h) return i;
			for (n = 0, l = h.length; n < l; n++)
				if ((s = (r = h[n]).name) && !r.disabled)
					if (t && c.clk && "image" == r.type) c.clk == r && (i.push({
						name: s,
						value: P(r).val(),
						type: r.type
					}), i.push({
						name: s + ".x",
						value: c.clk_x
					}, {
						name: s + ".y",
						value: c.clk_y
					}));
					else if ((a = P.fieldValue(r, !0)) && a.constructor == Array)
				for (e && e.push(r), o = 0, d = a.length; o < d; o++) i.push({
					name: s,
					value: a[o]
				});
			else if (v.fileapi && "file" == r.type) {
				e && e.push(r);
				var u = r.files;
				if (u.length)
					for (o = 0; o < u.length; o++) i.push({
						name: s,
						value: u[o],
						type: r.type
					});
				else i.push({
					name: s,
					value: "",
					type: r.type
				})
			} else null != a && (e && e.push(r), i.push({
				name: s,
				value: a,
				type: r.type,
				required: r.required
			}));
			if (!t && c.clk) {
				var p = P(c.clk),
					f = p[0];
				(s = f.name) && !f.disabled && "image" == f.type && (i.push({
					name: s,
					value: p.val()
				}), i.push({
					name: s + ".x",
					value: c.clk_x
				}, {
					name: s + ".y",
					value: c.clk_y
				}))
			}
			return i
		}, P.fn.formSerialize = function (t) {
			return P.param(this.formToArray(t))
		}, P.fn.fieldSerialize = function (o) {
			var s = [];
			return this.each(function () {
				var t = this.name;
				if (t) {
					var e = P.fieldValue(this, o);
					if (e && e.constructor == Array)
						for (var i = 0, n = e.length; i < n; i++) s.push({
							name: t,
							value: e[i]
						});
					else null != e && s.push({
						name: this.name,
						value: e
					})
				}
			}), P.param(s)
		}, P.fn.fieldValue = function (t) {
			for (var e = [], i = 0, n = this.length; i < n; i++) {
				var o = this[i],
					s = P.fieldValue(o, t);
				null == s || s.constructor == Array && !s.length || (s.constructor == Array ? P.merge(e, s) : e.push(s))
			}
			return e
		}, P.fieldValue = function (t, e) {
			var i = t.name,
				n = t.type,
				o = t.tagName.toLowerCase();
			if (void 0 === e && (e = !0), e && (!i || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == o && -1 == t.selectedIndex)) return null;
			if ("select" != o) return P(t).val();
			var s = t.selectedIndex;
			if (s < 0) return null;
			for (var a = [], r = t.options, l = "select-one" == n, d = l ? s + 1 : r.length, c = l ? s : 0; c < d; c++) {
				var h = r[c];
				if (h.selected) {
					var u = h.value;
					if (u || (u = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), l) return u;
					a.push(u)
				}
			}
			return a
		}, P.fn.clearForm = function (t) {
			return this.each(function () {
				P("input,select,textarea", this).clearFields(t)
			})
		}, P.fn.clearFields = P.fn.clearInputs = function (i) {
			var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
			return this.each(function () {
				var t = this.type,
					e = this.tagName.toLowerCase();
				n.test(t) || "textarea" == e ? this.value = "" : "checkbox" == t || "radio" == t ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == t ? /MSIE/.test(navigator.userAgent) ? P(this).replaceWith(P(this).clone(!0)) : P(this).val("") : i && (!0 === i && /hidden/.test(t) || "string" == typeof i && P(this).is(i)) && (this.value = "")
			})
		}, P.fn.resetForm = function () {
			return this.each(function () {
				("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
			})
		}, P.fn.enable = function (t) {
			return void 0 === t && (t = !0), this.each(function () {
				this.disabled = !t
			})
		}, P.fn.selected = function (i) {
			return void 0 === i && (i = !0), this.each(function () {
				var t = this.type;
				if ("checkbox" == t || "radio" == t) this.checked = i;
				else if ("option" == this.tagName.toLowerCase()) {
					var e = P(this).parent("select");
					i && e[0] && "select-one" == e[0].type && e.find("option").selected(!1), this.selected = i
				}
			})
		}, P.fn.ajaxSubmit.debug = !1
	}(jQuery), eJa = jQuery, eJa.extend(eJa.fn, {
		validate: function (t) {
			if (this.length) {
				var i = eJa.data(this[0], "validator");
				return i || (this.attr("novalidate", "novalidate"), i = new eJa.validator(t, this[0]), eJa.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
					i.settings.submitHandler && (i.submitButton = t.target), eJa(t.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== eJa(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
				}), this.submit(function (e) {
					function t() {
						var t;
						return !i.settings.submitHandler || (i.submitButton && (t = eJa("<input type='hidden'/>").attr("name", i.submitButton.name).val(eJa(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && t.remove(), !1)
					}
					return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, t()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : t() : (i.focusInvalid(), !1)
				})), i)
			}
			t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
		},
		valid: function () {
			if (eJa(this[0]).is("form")) return this.validate().form();
			var t = !0,
				e = eJa(this[0].form).validate();
			return this.each(function () {
				t = t && e.element(this)
			}), t
		},
		removeAttrs: function (t) {
			var i = {},
				n = this;
			return eJa.each(t.split(/\s/), function (t, e) {
				i[e] = n.attr(e), n.removeAttr(e)
			}), i
		},
		rules: function (t, e) {
			var i = this[0];
			if (t) {
				var n = eJa.data(i.form, "validator").settings,
					o = n.rules,
					s = eJa.validator.staticRules(i);
				switch (t) {
					case "add":
						eJa.extend(s, eJa.validator.normalizeRule(e)), delete s.messages, o[i.name] = s, e.messages && (n.messages[i.name] = eJa.extend(n.messages[i.name], e.messages));
						break;
					case "remove":
						if (!e) return delete o[i.name], s;
						var a = {};
						return eJa.each(e.split(/\s/), function (t, e) {
							a[e] = s[e], delete s[e]
						}), a
				}
			}
			var r = eJa.validator.normalizeRules(eJa.extend({}, eJa.validator.classRules(i), eJa.validator.attributeRules(i), eJa.validator.dataRules(i), eJa.validator.staticRules(i)), i);
			if (r.required) {
				var l = r.required;
				delete r.required, r = eJa.extend({
					required: l
				}, r)
			}
			return r
		}
	}), eJa.extend(eJa.expr[":"], {
		blank: function (t) {
			return !eJa.trim("" + eJa(t).val())
		},
		filled: function (t) {
			return !!eJa.trim("" + eJa(t).val())
		},
		unchecked: function (t) {
			return !eJa(t).prop("checked")
		}
	}), eJa.validator = function (t, e) {
		this.settings = eJa.extend(!0, {}, eJa.validator.defaults, t), this.currentForm = e, this.init()
	}, eJa.validator.format = function (i, t) {
		return 1 === arguments.length ? function () {
			var t = eJa.makeArray(arguments);
			return t.unshift(i), eJa.validator.format.apply(this, t)
		} : (2 < arguments.length && t.constructor !== Array && (t = eJa.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), eJa.each(t, function (t, e) {
			i = i.replace(RegExp("\\{" + t + "\\}", "g"), function () {
				return e
			})
		}), i)
	}, eJa.extend(eJa.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			validClass: "valid",
			errorElement: "label",
			focusInvalid: !0,
			errorContainer: eJa([]),
			errorLabelContainer: eJa([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (t) {
				this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
			},
			onfocusout: function (t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function (t, e) {
				(9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
			},
			onclick: function (t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function (t, e, i) {
				"radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : eJa(t).addClass(e).removeClass(i)
			},
			unhighlight: function (t, e, i) {
				"radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : eJa(t).removeClass(e).addClass(i)
			}
		},
		setDefaults: function (t) {
			eJa.extend(eJa.validator.defaults, t)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			creditcard: "Please enter a valid credit card number.",
			equalTo: "Please enter the same value again.",
			maxlength: eJa.validator.format("Please enter no more than {0} characters."),
			minlength: eJa.validator.format("Please enter at least {0} characters."),
			rangelength: eJa.validator.format("Please enter a value between {0} and {1} characters long."),
			range: eJa.validator.format("Please enter a value between {0} and {1}."),
			max: eJa.validator.format("Please enter a value less than or equal to {0}."),
			min: eJa.validator.format("Please enter a value greater than or equal to {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function t(t) {
					var e = eJa.data(this[0].form, "validator"),
						i = "on" + t.type.replace(/^validate/, "");
					e.settings[i] && e.settings[i].call(e, this[0], t)
				}
				this.labelContainer = eJa(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || eJa(this.currentForm), this.containers = eJa(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var n = this.groups = {};
				eJa.each(this.settings.groups, function (i, t) {
					"string" == typeof t && (t = t.split(/\s/)), eJa.each(t, function (t, e) {
						n[e] = i
					})
				});
				var i = this.settings.rules;
				eJa.each(i, function (t, e) {
					i[t] = eJa.validator.normalizeRule(e)
				}), eJa(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && eJa(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function () {
				return this.checkForm(), eJa.extend(this.submitted, this.errorMap), this.invalid = eJa.extend({}, this.errorMap), this.valid() || eJa(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function () {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function (t) {
				t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = eJa(t);
				var e = !1 !== this.check(t);
				return e ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
			},
			showErrors: function (e) {
				if (e) {
					for (var t in eJa.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
						message: e[t],
						element: this.findByName(t)[0]
					});
					this.successList = eJa.grep(this.successList, function (t) {
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function () {
				eJa.fn.resetForm && eJa(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
			},
			numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			},
			objectLength: function (t) {
				var e = 0;
				for (var i in t) e++;
				return e
			},
			hideErrors: function () {
				this.addWrapper(this.toHide).hide()
			},
			valid: function () {
				return 0 === this.size()
			},
			size: function () {
				return this.errorList.length
			},
			focusInvalid: function () {
				if (this.settings.focusInvalid) try {
					eJa(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (t) {}
			},
			findLastActive: function () {
				var e = this.lastActive;
				return e && 1 === eJa.grep(this.errorList, function (t) {
					return t.element.name === e.name
				}).length && e
			},
			elements: function () {
				var t = this,
					e = {};
				return eJa(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
					return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in e || !t.objectLength(eJa(this).rules())) && (e[this.name] = !0)
				})
			},
			clean: function (t) {
				return eJa(t)[0]
			},
			errors: function () {
				var t = this.settings.errorClass.replace(" ", ".");
				return eJa(this.settings.errorElement + "." + t, this.errorContext)
			},
			reset: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = eJa([]), this.toHide = eJa([]), this.currentElements = eJa([])
			},
			prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function (t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function (t) {
				var e = eJa(t).attr("type"),
					i = eJa(t).val();
				return "radio" === e || "checkbox" === e ? eJa("input[name='" + eJa(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
			},
			check: function (e) {
				e = this.validationTargetFor(this.clean(e));
				var t, i = eJa(e).rules(),
					n = !1,
					o = this.elementValue(e);
				for (var s in i) {
					var a = {
						method: s,
						parameters: i[s]
					};
					try {
						if ("dependency-mismatch" === (t = eJa.validator.methods[s].call(this, o, e, a.parameters))) {
							n = !0;
							continue
						}
						if (n = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if (!t) return this.formatAndAdd(e, a), !1
					} catch (t) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", t), t
					}
				}
				return n ? void 0 : (this.objectLength(i) && this.successList.push(e), !0)
			},
			customDataMessage: function (t, e) {
				return eJa(t).data("msg-" + e.toLowerCase()) || t.attributes && eJa(t).attr("data-msg-" + e.toLowerCase())
			},
			customMessage: function (t, e) {
				var i = this.settings.messages[t];
				return i && (i.constructor === String ? i : i[e])
			},
			findDefined: function () {
				for (var t = 0; arguments.length > t; t++)
					if (void 0 !== arguments[t]) return arguments[t]
			},
			defaultMessage: function (t, e) {
				return this.findDefined(this.customMessage(t.name, e), this.customDataMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, eJa.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>")
			},
			formatAndAdd: function (t, e) {
				var i = this.defaultMessage(t, e.method),
					n = /\$?\{(\d+)\}/g;
				"function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = eJa.validator.format(i.replace(n, "{$1}"), e.parameters)), this.errorList.push({
					message: i,
					element: t
				}), this.errorMap[t.name] = i, this.submitted[t.name] = i
			},
			addWrapper: function (t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function () {
				var t, e;
				for (t = 0; this.errorList[t]; t++) {
					var i = this.errorList[t];
					this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
				}
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
				if (this.settings.unhighlight)
					for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function () {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function () {
				return eJa(this.errorList).map(function () {
					return this.element
				})
			},
			showLabel: function (t, e) {
				var i = this.errorsFor(t);
				i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(e)) : (i = eJa("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, eJa(t)) : i.insertAfter(t))), !e && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
			},
			errorsFor: function (t) {
				var e = this.idOrName(t);
				return this.errors().filter(function () {
					return eJa(this).attr("for") === e
				})
			},
			idOrName: function (t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			},
			validationTargetFor: function (t) {
				return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
			},
			checkable: function (t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function (t) {
				return eJa(this.currentForm).find("[name='" + t + "']")
			},
			getLength: function (t, e) {
				switch (e.nodeName.toLowerCase()) {
					case "select":
						return eJa("option:selected", e).length;
					case "input":
						if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
				}
				return t.length
			},
			depend: function (t, e) {
				return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
			},
			dependTypes: {
				boolean: function (t) {
					return t
				},
				string: function (t, e) {
					return !!eJa(t, e.form).length
				},
				function: function (t, e) {
					return t(e)
				}
			},
			optional: function (t) {
				var e = this.elementValue(t);
				return !eJa.validator.methods.required.call(this, e, t) && "dependency-mismatch"
			},
			startRequest: function (t) {
				this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
			},
			stopRequest: function (t, e) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (eJa(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (eJa(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function (t) {
				return eJa.data(t, "previousValue") || eJa.data(t, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(t, "remote")
				})
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function (t, e) {
			t.constructor === String ? this.classRuleSettings[t] = e : eJa.extend(this.classRuleSettings, t)
		},
		classRules: function (t) {
			var e = {},
				i = eJa(t).attr("class");
			return i && eJa.each(i.split(" "), function () {
				this in eJa.validator.classRuleSettings && eJa.extend(e, eJa.validator.classRuleSettings[this])
			}), e
		},
		attributeRules: function (t) {
			var e = {},
				i = eJa(t),
				n = i[0].getAttribute("type");
			for (var o in eJa.validator.methods) {
				var s;
				s = "required" === o ? ("" === (s = i.get(0).getAttribute(o)) && (s = !0), !!s) : i.attr(o), /min|max/.test(o) && (null === n || /number|range|text/.test(n)) && (s = Number(s)), s ? e[o] = s : n === o && "range" !== n && (e[o] = !0)
			}
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function (t) {
			var e, i, n = {},
				o = eJa(t);
			for (e in eJa.validator.methods) void 0 !== (i = o.data("rule-" + e.toLowerCase())) && (n[e] = i);
			return n
		},
		staticRules: function (t) {
			var e = {},
				i = eJa.data(t.form, "validator");
			return i.settings.rules && (e = eJa.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
		},
		normalizeRules: function (n, o) {
			return eJa.each(n, function (t, e) {
				if (!1 !== e) {
					if (e.param || e.depends) {
						var i = !0;
						switch (typeof e.depends) {
							case "string":
								i = !!eJa(e.depends, o.form).length;
								break;
							case "function":
								i = e.depends.call(o, o)
						}
						i ? n[t] = void 0 === e.param || e.param : delete n[t]
					}
				} else delete n[t]
			}), eJa.each(n, function (t, e) {
				n[t] = eJa.isFunction(e) ? e(o) : e
			}), eJa.each(["minlength", "maxlength"], function () {
				n[this] && (n[this] = Number(n[this]))
			}), eJa.each(["rangelength", "range"], function () {
				var t;
				n[this] && (eJa.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].split(/[\s,]+/), n[this] = [Number(t[0]), Number(t[1])]))
			}), eJa.validator.autoCreateRanges && (n.min && n.max && (n.range = [n.min, n.max], delete n.min, delete n.max), n.minlength && n.maxlength && (n.rangelength = [n.minlength, n.maxlength], delete n.minlength, delete n.maxlength)), n
		},
		normalizeRule: function (t) {
			if ("string" == typeof t) {
				var e = {};
				eJa.each(t.split(/\s/), function () {
					e[this] = !0
				}), t = e
			}
			return t
		},
		addMethod: function (t, e, i) {
			eJa.validator.methods[t] = e, eJa.validator.messages[t] = void 0 !== i ? i : eJa.validator.messages[t], e.length < 3 && eJa.validator.addClassRules(t, eJa.validator.normalizeRule(t))
		},
		methods: {
			required: function (t, e, i) {
				if (!this.depend(i, e)) return "dependency-mismatch";
				if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < eJa.trim(t).length;
				var n = eJa(e).val();
				return n && 0 < n.length
			},
			email: function (t, e) {
				return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
			},
			url: function (t, e) {
				return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
			},
			date: function (t, e) {
				return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
			},
			dateISO: function (t, e) {
				return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
			},
			number: function (t, e) {
				return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function (t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			},
			creditcard: function (t, e) {
				if (this.optional(e)) return "dependency-mismatch";
				if (/[^0-9 \-]+/.test(t)) return !1;
				for (var i = 0, n = 0, o = !1, s = (t = t.replace(/\D/g, "")).length - 1; 0 <= s; s--) {
					var a = t.charAt(s);
					n = parseInt(a, 10), o && 9 < (n *= 2) && (n -= 9), i += n, o = !o
				}
				return 0 == i % 10
			},
			minlength: function (t, e, i) {
				var n = eJa.isArray(t) ? t.length : this.getLength(eJa.trim(t), e);
				return this.optional(e) || i <= n
			},
			maxlength: function (t, e, i) {
				var n = eJa.isArray(t) ? t.length : this.getLength(eJa.trim(t), e);
				return this.optional(e) || n <= i
			},
			rangelength: function (t, e, i) {
				var n = eJa.isArray(t) ? t.length : this.getLength(eJa.trim(t), e);
				return this.optional(e) || n >= i[0] && i[1] >= n
			},
			min: function (t, e, i) {
				return this.optional(e) || i <= t
			},
			max: function (t, e, i) {
				return this.optional(e) || t <= i
			},
			range: function (t, e, i) {
				return this.optional(e) || t >= i[0] && i[1] >= t
			},
			equalTo: function (t, e, i) {
				var n = eJa(i);
				return this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
					eJa(e).valid()
				}), t === n.val()
			},
			remote: function (s, a, t) {
				if (this.optional(a)) return "dependency-mismatch";
				var r = this.previousValue(a);
				if (this.settings.messages[a.name] || (this.settings.messages[a.name] = {}), r.originalMessage = this.settings.messages[a.name].remote, this.settings.messages[a.name].remote = r.message, t = "string" == typeof t && {
						url: t
					} || t, r.old === s) return r.valid;
				r.old = s;
				var l = this;
				this.startRequest(a);
				var e = {};
				return e[a.name] = s, eJa.ajax(eJa.extend(!0, {
					url: t,
					mode: "abort",
					port: "validate" + a.name,
					dataType: "json",
					data: e,
					success: function (t) {
						l.settings.messages[a.name].remote = r.originalMessage;
						var e = !0 === t || "true" === t;
						if (e) {
							var i = l.formSubmitted;
							l.prepareElement(a), l.formSubmitted = i, l.successList.push(a), delete l.invalid[a.name], l.showErrors()
						} else {
							var n = {},
								o = t || l.defaultMessage(a, "remote");
							n[a.name] = r.message = eJa.isFunction(o) ? o(s) : o, l.invalid[a.name] = !0, l.showErrors(n)
						}
						r.valid = e, l.stopRequest(a, e)
					}
				}, t)), "pending"
			}
		}
	}), eJa.format = eJa.validator.format,
	function (n) {
		var o = {};
		if (n.ajaxPrefilter) n.ajaxPrefilter(function (t, e, i) {
			var n = t.port;
			"abort" === t.mode && (o[n] && o[n].abort(), o[n] = i)
		});
		else {
			var s = n.ajax;
			n.ajax = function (t) {
				var e = ("mode" in t ? t : n.ajaxSettings).mode,
					i = ("port" in t ? t : n.ajaxSettings).port;
				return "abort" === e ? (o[i] && o[i].abort(), o[i] = s.apply(this, arguments), o[i]) : s.apply(this, arguments)
			}
		}
	}(jQuery), rNa = jQuery, rNa.extend(rNa.fn, {
		validateDelegate: function (i, t, n) {
			return this.bind(t, function (t) {
				var e = rNa(t.target);
				return e.is(i) ? n.apply(e, arguments) : void 0
			})
		}
	}), jQuery(function (e) {
		e("#contactform").validate({
			rules: {
				name: {
					required: !0,
					minlength: 2
				},
				email: {
					required: !0,
					email: !0
				},
				message: {
					required: !0
				}
			},
			messages: {
				name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters"
				},
				email: {
					required: "Please enter your email"
				},
				message: {
					required: "Please enter your message"
				}
			},
			submitHandler: function (t) {
				e(t).ajaxSubmit({
					type: "POST",
					data: e(t).serialize(),
					url: "external/form/contact-form.php",
					success: function () {
						e("#success").fadeIn(), e("#contactform").each(function () {
							this.reset()
						})
					},
					error: function () {
						e("#contactform").fadeTo("slow", 1, function () {
							e("#error").fadeIn()
						})
					}
				})
			}
		}), e("#newsletterform").validate({
			rules: {
				email: {
					required: !0,
					email: !0
				}
			},
			submitHandler: function (t) {
				e(t).ajaxSubmit({
					type: "POST",
					data: e(t).serialize(),
					url: "external/form/newsletter-form.php",
					success: function () {
						e("#success").fadeIn(), e("#newsletterform").each(function () {
							this.reset()
						})
					},
					error: function () {
						e("#newsletterform").fadeTo("slow", 1, function () {
							e("#error").fadeIn()
						})
					}
				})
			}
		})
	}),
	function (v) {
		"use strict";
		var t, e = v(document),
			c = v(window),
			p = v("body"),
			s = v("html"),
			i = v("#tt-pageContent"),
			n = v("#tt-footer"),
			a = v("#tt-header"),
			o = 200,
			d = 200,
			r = v("#js-tt-top-panel"),
			l = v("#js-tt-stuck-nav"),
			h = a.find(".tt-desctop-menu:not(#tt-desctop-menu__icon)"),
			u = a.find(".tt-desctop-menu"),
			f = a.find(".tt-desctop-parent-menu"),
			m = a.find(".tt-mobile-parent-menu"),
			g = m.children(),
			w = a.find(".tt-stuck-parent-menu"),
			y = v("#tt-desctop-menu__icon"),
			b = v("#tt-desctop-parent-menu__icon"),
			_ = v("#tt-stuck-parent-menu-icons"),
			x = a.find(".tt-search"),
			T = a.find(".tt-desctop-parent-search"),
			k = a.find(".tt-mobile-parent-search"),
			C = a.find(".tt-stuck-parent-search"),
			S = x.find(".tt-search-input"),
			z = x.find(".search-results"),
			I = a.find(".tt-cart"),
			L = a.find(".tt-desctop-parent-cart"),
			E = a.find(".tt-mobile-parent-cart"),
			O = a.find(".tt-stuck-parent-cart"),
			A = a.find(".tt-account"),
			P = a.find(".tt-desctop-parent-account"),
			D = a.find(".tt-mobile-parent-account"),
			W = a.find(".tt-stuck-parent-account"),
			M = a.find(".tt-multi-obj"),
			H = a.find(".tt-desctop-parent-multi"),
			F = a.find(".tt-mobile-parent-multi"),
			R = a.find(".tt-stuck-parent-multi"),
			j = {
				ttProductMasonry: i.find(".tt-product-listing-masonry"),
				ttLookBookMasonry: i.find(".tt-lookbook-masonry"),
				ttInputCounter: v(".tt-input-counter"),
				modalAddToCart: v("#modalAddToCartProduct"),
				ttMobileProductSlider: v(".tt-mobile-product-slider"),
				ttCountdown: i.find(".tt-countdown"),
				ttBtnAddProduct: i.find(".tt_product_showmore"),
				ttOptionsSwatch: i.find(".tt-options-swatch"),
				ttProductItem: i.find(".tt-product, .tt-product-design02"),
				ttProductDesign02: i.find(".tt-product-design02"),
				ttProductDesign01: i.find(".tt-product"),
				ttLookbook: i.find(".tt-lookbook"),
				ttfooterMobileCollapse: n.find(".tt-collapse-title"),
				ttBackToTop: v("#js-back-to-top"),
				ttHeaderDropdown: a.find(".tt-dropdown-obj"),
				mobileMenuToggle: v("#js-menu-toggle"),
				ttCarouselProducts: i.find(".tt-carousel-products"),
				sliderRevolution: i.find(".slider-revolution"),
				ttItemsCategories: i.find(".tt-items-categories"),
				ttDotsAbsolute: i.find(".tt-dots-absolute"),
				ttAlignmentImg: i.find(".tt-alignment-img"),
				ttModalQuickView: v("#ModalquickView"),
				ttPromoFixed: v("#js-tt-promo-fixed"),
				jsMobileSlider: v("#js-mobile-slider")
			},
			$ = window.innerWidth || c.width();
		i.find("[data-slick]").slick(), v("#tt-pageContent [data-bg]").each(function () {
			var t = v(this),
				e = t.attr("data-bg");
			t.css({
				"background-image": "url(" + e + ")"
			})
		}), j.jsMobileSlider.length && (t = {
			autoplay: !0,
			infinite: !1,
			arrows: !1,
			cssEase: "linear",
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		}, c.on("load resize", function () {
			c.width() < 790 ? j.jsMobileSlider.not(".slick-initialized").slick(t) : j.jsMobileSlider.hasClass("slick-initialized") && j.jsMobileSlider.slick("unslick")
		}));
		var N, B, X, Y = v("#tt-boxedbutton");
		if (Y.length && (Y.on("click", ".rtlbutton", function (t) {
				t.preventDefault;
				t.target;
				var e = v("<link>", {
					rel: "stylesheet",
					href: "css/rtl.css",
					class: "rtl"
				});
				v(this).hasClass("external-link") || v(this).toggleClass("active"), v(this).hasClass("boxbutton-js") && (s.toggleClass("tt-boxed"), j.ttProductMasonry.length && lt(), j.ttLookBookMasonry.length && dt(), j.ttLookbook.length && st($), v(".slick-slider").slick("refresh")), v(this).hasClass("rtlbutton-js") && v(this).hasClass("active") ? e.appendTo("head") : v(this).hasClass("rtlbutton-js") && !v(this).hasClass("active") && v("link.rtl").remove()
			}), Y.on("click", ".rtlbutton-color li", function (t) {
				v('link[href^="css/theme-"]').remove();
				var e = v(this).attr("data-color");
				v('link[href^="css/theme-"]');
				if (!v(this).hasClass("active")) return v(this).toggleClass("active").siblings().removeClass("active"), null != e ? v("head").append('<link rel="stylesheet" href="css/theme-' + e + '.css" rel="stylesheet">') : v("head").append('<link rel="stylesheet" href="css/theme.css" rel="stylesheet">'), !1
			})), new LazyLoad, new LazyLoad({
				elements_selector: "iframe"
			}), new LazyLoad({
				elements_selector: "video"
			}), S.length && z.length && (x.on("input", function (t) {
				v(t.target).val() && z.fadeIn("200")
			}), S.blur(function () {
				z.fadeOut("200")
			})), j.sliderRevolution.length && function () {
				function t() {
					var t = v(this),
						e = t.find("li video");
					e.length && (e.on("play", function () {
						var t = v(this).parents("li").find(".video-play");
						t.addClass("pause"), v(this).parents(".tp-caption.fullscreenvideo").addClass("click-video")
					}), e.on("pause ended", function () {
						var t = v(this).parents("li").find(".video-play");
						t.removeClass("pause")
					}), t.find(".video-play").on("click", function (t) {
						var e = v(this).parents("li").find("video");
						return e.trigger("click"), t.preventDefault(), t.stopPropagation(), !1
					}), t.on("revolution.slide.onbeforeswap", function (t, e) {
						v(this).find(".tp-caption.fullscreenvideo").removeClass("click-video")
					}))
				}

				function e(t) {
					var e = v(this);
					e.each(function () {
						var r = v(this),
							t = function () {
								r.on("revolution.slide.onchange", function (t, e) {
									var i = v(this),
										n = i.find("li").eq(e.slideIndex - 1),
										o = n.find("video"),
										s = n.find(".tp-caption").attr("data-autoplay");
									if (o.length && "true" === s) {
										var a = o.get(0);
										a.currentTime = 0, r.one("revolution.slide.onafterswap", function (t, e) {
											a.paused && a.play()
										})
									}
								})
							};
						r.hasClass("revslider-initialised") ? t() : r.one("revolution.slide.onloaded", function () {
							t()
						})
					})
				}
				v.fn.resizeRevolution = function (p, t, f) {
					if (!v(this).length || !v(p.slider).length || !p.breakpoints) return !1;
					var e = p.slider,
						n = p.breakpoints,
						m = p.fullscreen_BP || !1,
						t = t || {},
						f = f || [],
						g = {
							dottedOverlay: "true",
							delay: 4600,
							startwidth: 1920,
							hideThumbs: 200,
							hideTimerBar: "on",
							thumbWidth: 100,
							thumbHeight: 50,
							thumbAmount: 5,
							navigationArrows: "none",
							touchenabled: "on",
							onHoverStop: "on",
							swipe_velocity: .7,
							swipe_min_touches: 1,
							swipe_max_touches: 1,
							drag_block_vertical: !1,
							parallax: "mouse",
							parallaxBgFreeze: "on",
							parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
							keyboardNavigation: "off",
							navigationHAlign: "center",
							navigationVAlign: "bottom",
							navigationHOffset: 0,
							navigationVOffset: 20,
							soloArrowLeftHalign: "left",
							soloArrowLeftValign: "center",
							soloArrowLeftHOffset: 20,
							soloArrowLeftVOffset: 0,
							soloArrowRightHalign: "right",
							soloArrowRightValign: "center",
							soloArrowRightHOffset: 20,
							soloArrowRightVOffset: 0,
							shadow: 0,
							spinner: "",
							h_align: "left",
							stopLoop: "off",
							stopAfterLoops: -1,
							stopAtSlide: -1,
							shuffle: "off",
							autoHeight: "off",
							forceFullWidth: "off",
							hideThumbsOnMobile: "off",
							hideNavDelayOnMobile: 1500,
							hideBulletsOnMobile: "off",
							hideArrowsOnMobile: "off",
							hideThumbsUnderResolution: 0,
							hideSliderAtLimit: 0,
							hideCaptionAtLimit: 0,
							hideAllCaptionAtLilmit: 0,
							startWithSlide: 0,
							fullScreenOffsetContainer: !1
						};
					v.extend(g, t);
					var d = function (t) {
							return t.find(e)
						},
						c = function () {
							for (var t = window.innerWidth, e = 0; e < n.length; e++) {
								var i = n[e];
								if (!n.length) return !1;
								if (t <= i) {
									if (0 === e) return i;
									if (i > n[e - 1]) return i
								} else if (i < t && e === n.length - 1) return 1 / 0
							}
							return !1
						},
						i = v(this);
					i.each(function () {
						var o = v(this),
							s = d(o),
							a = o.clone(),
							r = c();
						if (!s.length) return !1;
						var l = function (t, e) {
							var i = window.innerWidth,
								n = {},
								o = {},
								s = {};
							if (m) {
								var a = m <= i ? "off" : "on",
									r = m <= i ? "on" : "off";
								o = {
									fullWidth: a,
									fullScreen: r
								}
							}
							if (f.length)
								for (var l = 0; l < f.length; l++) {
									var d = f[l];
									if (d.bp && 2 === d.bp.length && d.bp[0] < d.bp[1]) {
										var c = d.bp[0],
											h = d.bp[1];
										if (c <= e && e <= h)
											for (var u in d) "bp" !== u && (n[u] = d[u])
									}
								}
							v.extend(s, g, n, o), v(t).show().revolution(s), v(p.functions).each(function () {
								this.call(t)
							})
						};
						l(s, r);
						v(window).on("resize", function () {
							var e, i, n;
							e = function () {
								var t = c();
								t !== r && function (t) {
									if (!v(s).hasClass("revslider-initialised")) return;
									r = t || 0, s.revkill(), o.replaceWith(a), a = (o = a).clone(), s = d(o), l(s, r)
								}(t)
							}, n = window.innerWidth, i = setInterval(function () {
								var t = window.innerWidth;
								n === t && setTimeout(function () {
									e()
								}, 200), clearInterval(i)
							}, 100)
						})
					})
				};
				var i = v(".slider-revolution.revolution-default"),
					n = "false" != i.attr("data-fullscreen") && 768,
					o = i.attr("data-width"),
					s = i.attr("data-height");
				v(".slider-revolution.revolution-default").resizeRevolution({
					slider: ".tp-banner",
					breakpoints: [414, 789, 1025],
					fullscreen_BP: n,
					functions: [t, e]
				}, {
					fullScreenOffsetContainer: "header, .tt-add-full-screen",
					navigationArrows: "true",
					startwidth: o || 1920,
					startheight: s || 800
				}, [{
					bp: [0, 790],
					startheight: s || 1200
				}]), v(".slider-revolution.revolution-static").resizeRevolution({
					slider: ".tp-banner",
					breakpoints: [414, 789, 1025],
					fullscreen_BP: 790,
					functions: [t, e]
				}, {
					fullScreenOffsetContainer: "header-static"
				}, [{
					bp: [0, 790],
					startheight: 1300
				}, {
					bp: [0, 1025],
					fullScreenOffsetContainer: "header"
				}])
			}(), j.ttItemsCategories.length && j.ttItemsCategories.on("hover", function () {
				v(this).toggleClass("active")
			}), j.modalAddToCart.length && j.modalAddToCart.on("click", ".btn-close-popup", function (t) {
				return v(this).closest(".modal-content").find(".modal-header .close").trigger("click"), !1
			}), j.mobileMenuToggle.length && j.mobileMenuToggle.initMM({
				enable_breakpoint: !0,
				mobile_button: !0,
				breakpoint: 1025,
				menu_class: "mobile-main-menu"
			}), v(".mobile-toggle-icon-js").length && v(".mobile-toggle-icon-js").initMM({
				enable_breakpoint: !0,
				mobile_button: !0,
				breakpoint: 1025,
				menu_class: "mobile-icon-menu"
			}), r.length && r.on("click", function (t) {
				t.preventDefault;
				var e = t.target;
				v(".tt-btn-close").is(e) && v(this).slideUp(200)
			}), j.ttBackToTop.length && (j.ttBackToTop.on("click", function (t) {
				return v("html, body").animate({
					scrollTop: 0
				}, 500), !1
			}), c.scroll(function () {
				500 < c.scrollTop() ? j.ttBackToTop.stop((!0).false).addClass("tt-show") : j.ttBackToTop.stop((!0).false).removeClass("tt-show")
			})), j.ttBtnAddProduct.length && (N = v(".tt_product_showmore .btn"), B = v(".tt-product-listing"), N.length && B.length && N.on("click", function (t) {
				return t.preventDefault(), v.ajax({
					url: "ajax-content/ajax_product.html",
					success: function (t) {
						var e, i = v(t);
						B.append(i), it(), e = B.children().last().children().offset().top - 80, v(p, s).animate({
							scrollTop: e
						}, 500)
					}
				}), !1
			})), j.ttProductItem.length) {
			var q = j.ttProductItem.find(".tt-btn-wishlist"),
				U = j.ttProductItem.find(".tt-btn-compare");
			q.length && q.on("click", function () {
				return v(this).toggleClass("active"), !1
			}), U.length && U.on("click", function () {
				return v(this).toggleClass("active"), !1
			})
		}
		j.ttCountdown.length && (X = (X = !0) || !1, j.ttCountdown.each(function () {
				var t = v(this),
					e = t.data("date"),
					i = (t.data("year"), t.data("month"), t.data("week"), t.data("day") || "Day"),
					o = t.data("hour") || "Hrs",
					s = t.data("minute") || "Min",
					a = t.data("second") || "Sec";
				(e = e.split("-")) && (e = e.join("/"), t.countdown(e, function (t) {
					var n = '<span class="countdown-row">';

					function e(t, e, i) {
						(0 !== e || i) && t(n)
					}
					e(function () {
						n += '<span class="countdown-section"><span class="countdown-amount">' + t.offset.totalDays + '</span><span class="countdown-period">' + i + "</span></span>"
					}, t.offset.totalDays, X), e(function () {
						n += '<span class="countdown-section"><span class="countdown-amount">' + t.offset.hours + '</span><span class="countdown-period">' + o + "</span></span>"
					}, t.offset.hours, X), e(function () {
						n += '<span class="countdown-section"><span class="countdown-amount">' + t.offset.minutes + '</span><span class="countdown-period">' + s + "</span></span>"
					}, t.offset.minutes, X), e(function () {
						n += '<span class="countdown-section"><span class="countdown-amount">' + t.offset.seconds + '</span><span class="countdown-period">' + a + "</span></span>"
					}, t.offset.seconds, X), n += "</span>", v(this).html(n)
				}))
			})), -1 !== rt() && s.addClass("ie"), j.ttInputCounter.length && (j.ttInputCounter.find(".minus-btn, .plus-btn").on("click", function (t) {
				var e = v(this).parent().find("input"),
					i = parseInt(e.val(), 10) + parseInt("plus-btn" === t.currentTarget.className ? 1 : -1, 10);
				e.val(i).change()
			}), j.ttInputCounter.find("input").change(function () {
				var t = v(this),
					e = parseInt(t.val(), 10),
					i = parseInt(t.attr("size"), 10);
				e = Math.min(e, i), e = Math.max(e, 1), t.val(e)
			}).on("keypress", function (t) {
				13 === t.keyCode && t.preventDefault()
			})),
			function (t) {
				if (l.hasClass("disabled")) return;
				var t = t || !1,
					e = -1 !== rt();
				if ("off" === t) return;
				c.scroll(function () {
					var t = v("header").innerHeight();
					if (c.scrollTop() > t) {
						if (l.hasClass("stuck")) return !1;
						l.hide(), l.addClass("stuck"), window.innerWidth < 1025 ? w.append(g.detach()) : w.append(h.detach()), O.append(I.detach()), R.append(M.detach()), W.append(A.detach()), C.append(x.detach()), window.innerWidth < 1025 ? b.append(y.detach()) : _.append(y.detach()), l.find(".tt-stuck-cart-parent > .tt-cart > .dropdown").hasClass("open") || e ? l.stop().show() : l.stop().fadeIn(300)
					} else {
						if (!l.hasClass("stuck")) return !1;
						if (l.hide(), l.removeClass("stuck"), window.innerWidth < 1025) return m.append(g.detach()), E.append(I.detach()), F.append(M.detach()), D.append(A.detach()), k.append(x.detach()), !1;
						f.append(h.detach()), b.append(y.detach()), L.append(I.detach()), H.append(M.detach()), P.append(A.detach()), T.append(x.detach())
					}
				}), c.resize(function () {
					if (l.hasClass("stuck") && _.append(y.detach()), !l.hasClass("stuck")) return !1;
					window.innerWidth < 1025 ? (f.append(h.detach()), w.append(g.detach())) : (m.append(g.detach()), w.append(h.detach()))
				})
			}(), T.length && ct(), I.length && ht(), P.length && ut(), H.length && pt(), j.ttProductDesign01.length && e.on("mouseenter mouseleave click", "#tt-pageContent .tt-product:not(.tt-view)", function (t) {
				var e = v(this),
					i = window.innerWidth,
					n = e.find(".tt-description"),
					o = e.find(".tt-product-inside-hover"),
					s = o.height(),
					a = e.find(".tt-countdown_box");
				t.target, e.hasClass("product-nohover") || ("mouseenter" === t.type && 1024 < i ? (e.stop().css({
					height: e.innerHeight()
				}).addClass("hovered"), n.stop().animate({
					top: "-" + s
				}, 200), o.stop().animate({
					opacity: 1
				}, 400), a.stop().animate({
					bottom: s
				}, 200)) : "mouseleave" === t.type && t.relatedTarget && 1024 < i && (e.stop().removeClass("hovered").removeAttr("style"), n.stop().animate({
					top: "0"
				}, 200, function () {
					v(this).removeAttr("style")
				}), o.stop().animate({
					opacity: 0
				}, 100, function () {
					v(this).removeAttr("style")
				}), a.stop().animate({
					bottom: 0
				}, 200, function () {
					v(this).removeAttr("style")
				})))
			}), j.ttfooterMobileCollapse.length && j.ttfooterMobileCollapse.on("click", function (t) {
				t.preventDefault, v(this).toggleClass("tt-open")
			}), j.ttLookbook.length && st($), j.ttCarouselProducts.length && j.ttCarouselProducts.each(function () {
				var t = v(this),
					e = v(this).data("item");
				t.slick({
					dots: !1,
					arrows: !0,
					infinite: !0,
					speed: 300,
					slidesToShow: e || 4,
					slidesToScroll: e || 4,
					lazyLoad: "ondemand",
					adaptiveHeight: !0,
					responsive: [{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					}, {
						breakpoint: 791,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}]
				})
			}), j.ttMobileProductSlider.length && (j.ttMobileProductSlider.slick({
				dots: !0,
				arrows: !1,
				infinite: !0,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: !0,
				lazyLoad: "progressive"
			}), s.hasClass("ie") && j.ttModalQuickView.each(function () {
				j.ttMobileProductSlider.slick("slickSetOption", "infinite", !1)
			})), j.ttDotsAbsolute.length && et(), j.ttHeaderDropdown.length && function () {
				v(".header-popup-bg").length || p.append('<div class="header-popup-bg"></div>');
				v("header").on("click", ".tt-dropdown-obj", function (n) {
					var t, e = window.innerWidth || c.width(),
						i = v(this),
						o = n.target,
						s = v(".tt-search"),
						a = s.find(".tt-search-input");
					if (i.hasClass("tt-search") && v(".tt-dropdown-toggle").is(o) && (i.addClass("active"), a.focus()), s.find(".tt-btn-close").is(o)) return i.removeClass("active"), a.blur(), !1;

					function r() {
						return v(".tt-dropdown-obj.active").removeClass("active"), p.removeClass("tt-popup-dropdown"), !1
					}!v(this).hasClass("tt-search") && v(".tt-dropdown-toggle").is(o) && (e <= 1024 ? (t = i, v("header").find(".tt-dropdown-obj.active").removeClass("active"), t.toggleClass("active").find(".tt-dropdown-menu").removeAttr("style"), p.toggleClass("tt-popup-dropdown")) : function (t) {
						var e = t,
							i = n.target;
						if (e.hasClass("active")) return e.toggleClass("active").find(".tt-dropdown-menu").slideToggle(200);
						v(".tt-desktop-header .tt-dropdown-obj").each(function () {
							var t = v(this);
							t.hasClass("active") && t.removeClass("active").find(".tt-dropdown-menu").css("display", "none")
						}), v(".tt-dropdown-toggle").is(i) && e.toggleClass("active").find(".tt-dropdown-menu").slideToggle(200)
					}(i)), v(document).mouseup(function (t) {
						var e = window.innerWidth || c.width();
						i.is(t.target) || 0 !== i.has(t.target).length || i.each(function () {
							i.hasClass("active") && i.hasClass("tt-search") && s.find(".tt-btn-close").trigger("click"), i.hasClass("active") && !i.hasClass("tt-search") && (e <= 1024 ? r() : v(".tt-dropdown-obj").each(function () {
								v(this).hasClass("active") && v(this).removeClass("active").find(".tt-dropdown-menu").css("display", "none")
							}))
						}), i.find(".tt-mobile-add .tt-close").is(t.target) && r()
					})
				})
			}(), setTimeout(function () {
				p.addClass("loaded")
			}, 1500), c.on("load", function () {
				window.innerWidth || c.width();
				p.length && p.addClass("loaded"), j.ttProductItem.length && it(), j.ttProductDesign02.length && at(), j.ttAlignmentImg.length && ot(), j.ttProductMasonry.length && lt(), j.ttLookBookMasonry.length && dt(), j.ttPromoFixed.length && (setTimeout(function () {
					j.ttPromoFixed.fadeTo("90", 1)
				}, 1e3), j.ttPromoFixed.on("click", ".tt-btn-close", function () {
					v(this).closest(".tt-promo-fixed").hide()
				})), j.ttOptionsSwatch.length && j.ttOptionsSwatch.each(function () {
					var t = v(this),
						i = t.hasClass("js-change-img");
					t.find(".options-color-img"), t.on("click", "li", function (t) {
						var e = v(this);
						return e.addClass("active").siblings().removeClass("active"), i && function (t) {
							var e = t.find(".options-color-img"),
								i = e.attr("data-src"),
								n = e.attr("data-src-hover") || !1,
								o = t.closest(".tt-product").find(".tt-image-box"),
								s = o.find(".tt-img img"),
								a = o.find(".tt-img-roll-over img");
							if (i.length && s.attr("src", i), i.length) {
								var r = a.closest(".tt-img-roll-over");
								a.attr("src", n), r.hasClass("disable") && r.removeClass("disable")
							}!1 === n && a.closest(".tt-img-roll-over").addClass("disable")
						}(e), !1
					})
				}), J.init()
			});
		var J = {
				html_i: "#tt-tooltip-popup",
				html_s: '<div id="tt-tooltip-popup"><span>',
				html_e: "</span><i></i></div>",
				tp_attr: "[data-tooltip]",
				tp_mod: !1,
				init: function () {
					if (this.tp_mod = this.get_tp_mod(), !this.tp_mod.length || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return !1;
					this.handler()
				},
				get_tp_attr: function () {
					return this.tp_attr
				},
				get_tp_mod: function () {
					return v(this.get_tp_attr())
				},
				get_w_width: function () {
					return window.innerWidth || c.width()
				},
				get_html_obj: function (t) {
					return this.html_s + t + this.html_e
				},
				check_pr_page_swatches: function (t) {
					var e = t.closest(".tt-swatches-container"),
						i = t.closest(".tt-search"),
						n = t.closest(".tt-btn-quickview"),
						o = t.closest(".tt-collapse-content"),
						s = t.closest(".wlbutton-js");
					return !!(e.length || i.length || n.length || o.length || s.length)
				},
				handler: function () {
					var e = this;
					v("body").on("mouseenter mouseleave", this.get_tp_attr(), function (t) {
						if (e.get_w_width() <= 1024) return !1;
						"mouseenter" === t.type && e.onHover(v(this)), "mouseleave" === t.type && e.offHover(v(this))
					})
				},
				onHover: function (t) {
					var e = this,
						i = t.attr("data-tooltip"),
						n = v(this.get_html_obj(i)),
						o = t.attr("data-tposition"),
						s = t.attr("data-findtag");
					if ("" == i) return !1;
					p.append(n);
					var a = void 0 !== s ? t.find(s).first() : t,
						r = n.innerHeight(),
						l = n.innerWidth(),
						d = a.innerHeight(),
						c = a.innerWidth(),
						h = a.offset().top,
						u = a.offset().left;
					if ("top" == (o = void 0 !== o ? o : "top") && (h += -r - 20, u += parseInt((c - l) / 2)), "bottom" == o && (h += d + 24, u += parseInt((c - l) / 2)), "left" == o && (h += parseInt((d - r) / 2), u += -l - 24), "right" == o && (h += parseInt((d - r) / 2), u += c + 24), this.showTooltip(n, u, h, o), !this.check_pr_page_swatches(t)) return !1;
					t.on("click.closeTooltip", function () {
						e.offHover(v(this)), v(this).unbind("click.closeTooltip")
					})
				},
				offHover: function (t) {
					if (p.find(this.html_i).remove(), !this.check_pr_page_swatches(t)) return !1;
					t.unbind("click.closeTooltip")
				},
				showTooltip: function (t, e, i, n) {
					var o = {
							opacity: 1
						},
						s = n;
					"bottom" == s && (s = "top"), "right" == s && (s = "left"), o[s] = "bottom" == n || "right" == n ? "-=10px" : "+=10px", t.css({
						top: i,
						left: e
					}).addClass("tooltip-" + n).animate(o, 200)
				}
			},
			Q = v("#js-include-desktop-menu");

		function V(t) {
			var e = window.innerWidth || c.width(),
				i = 0 == v("#js-include-desktop-menu").children().length;
			1024 < e && i && v.ajax({
				url: "ajax-content/ajax_desktop_menu.html",
				success: function (t) {
					var e = v(t);
					v("#js-include-desktop-menu").append(e), new LazyLoad, ft()
				}
			})
		}
		Q.length && V();
		var Z = c.width();
		c.on("resize", function () {
			var t = c.width();
			if (t !== Z) {
				Z = t;
				window.innerWidth || c.width();
				j.ttProductItem.length && it(), j.ttProductDesign02.length && at(), T.length && ct(), I.length && ht(), P.length && ut(), H.length && pt(), j.ttDotsAbsolute.length && et(), Q.length && V(), j.ttAlignmentImg.length && ot()
			}
		});
		G = navigator.userAgent.toLowerCase(), K = function (t) {
			return -1 != G.indexOf(t)
		}, s.addClass([!/opera|webtv/i.test(G) && /msie (\d)/.test(G) ? "ie ie" + RegExp.$1 : K("firefox/2") ? "gecko ff2" : K("firefox/3") ? "gecko ff3" : K("gecko/") ? "gecko" : K("opera/9") ? "opera opera9" : /opera (\d)/.test(G) ? "opera opera" + RegExp.$1 : K("konqueror") ? "konqueror" : K("applewebkit/") ? "webkit safari" : K("mozilla/") ? "gecko" : "", K("x11") || K("linux") ? " linux" : K("mac") ? " mac" : K("win") ? " win" : ""].join(""));
		var G, K, tt = a.find(".js-currency-changevalue");

		function et() {
			j.ttDotsAbsolute.each(function () {
				var t = v(this).find(".slick-dots");
				if (t.is(":visible")) {
					var e = t.closest("[class ^= container]");
					e.length && e.css({
						paddingBottom: parseInt(t.height(), 10) + parseInt(t.css("marginTop"), 10)
					})
				}
			})
		}

		function it() {
			var t = parseInt(j.ttProductItem.width(), 10),
				e = v(".tt-product-design02");
			t <= 210 ? e.addClass("tt-small") : e.removeClass("tt-small")
		}

		function nt(i, n) {
			var o;
			n = n || 500;
			return function () {
				var t = this,
					e = arguments;
				clearTimeout(o), o = setTimeout(function () {
					i.apply(t, Array.prototype.slice.call(e))
				}, n)
			}
		}

		function ot() {
			1024 < (window.innerWidth || c.width()) ? setTimeout(function () {
				v("#tt-pageContent .tt-alignment-img").each(function () {
					v(this).find(".slick-arrow").removeAttr("style")
				})
			}, 225) : setTimeout(function () {
				v("#tt-pageContent .tt-alignment-img").each(function () {
					var t = v(this),
						e = t.find(".slick-arrow");
					if (0 != t.find(".tt-image-box").length && 0 != e.length) {
						var i = t.find(".tt-image-box").first();
						e.css({
							top: i.findHeight() - e.findHeight() - parseInt(t.css("marginTop"), 10) + "px"
						}), t.find(".tt-product").length && it()
					}
				})
			}, 325)
		}

		function st(t) {
			v(".tt-lookbook-popup").length || p.append('<div class="tt-lookbook-popup"><div class="tt-lookbook-container"></div></div>'), j.ttLookbook.on("click", ".tt-hotspot", function (t) {
				var e, i, n, s = v(this),
					a = (t.target, v(".tt-hotspot"), window.innerWidth || c.width()),
					o = v(".tt-btn").innerHeight() / 2,
					r = v(".tt-hotspot-content").innerWidth();
				if (a <= 789 ? (i = (e = s).attr("data-top") + "%", n = e.attr("data-left") + "%", e.find(".tt-btn").css({
						top: i,
						left: n
					}), e.css({
						top: "0px",
						left: "0px",
						width: "100%",
						height: "100%"
					}), e.addClass("active").siblings().removeClass("active"), e.find(".tt-content-parent").fadeIn(200)) : function (t) {
						if (t.hasClass("active")) return;
						var e = t.offset().top + o,
							i = t.offset().left,
							n = t.find(".tt-hotspot-content").detach();
						0 < v(".tt-lookbook-container").children().size() && (a <= 789 ? d() : l());
						! function (t, e, i) {
							a / 2 < i ? (o = i - r - 7, v(".tt-lookbook-popup").css({
								top: e,
								left: o,
								display: "block"
							}, 300).animate({
								marginLeft: "26px",
								opacity: 1
							}, 300)) : (n = i + 45, v(".tt-lookbook-popup").css({
								top: e,
								left: n,
								display: "block"
							}).animate({
								marginLeft: "-26px",
								opacity: 1
							}));
							var n;
							var o;
							v(".tt-lookbook-popup").find(".tt-lookbook-container").append(t), s.addClass("active").siblings().removeClass("active")
						}(n, e, i)
					}(s), a <= 789) {
					if (v(".tt-btn-close").is(t.target)) return d(), !1;
					v(".tt-hotspot").is(t.target) && d(), v(document).mouseup(function (t) {
						v(".tt-lookbook-popup").is(t.target) || 0 !== v(".tt-lookbook-popup").has(t.target).length || v(".tt-hotspot").is(t.target) || 0 !== v(".tt-hotspot").has(t.target).length || l()
					})
				}

				function l() {
					var t = v(".tt-lookbook-popup").removeAttr("style").find(".tt-hotspot-content").detach();
					v(".tt-hotspot.active").removeClass("active").find(".tt-content-parent").append(t)
				}

				function d() {
					if (v(".tt-lookbook-container").is(":has(div)")) {
						var t = v(".tt-lookbook-container").find(".tt-hotspot-content").detach();
						v(".tt-hotspot.active").find(".tt-content-parent").append(t)
					}
					v(".tt-lookbook").find(".tt-hotspot.active").each(function (t) {
						var e = v(this),
							i = e.attr("data-top") + "%",
							n = e.attr("data-left") + "%";
						e.removeClass("active").removeAttr("style").css({
							top: i,
							left: n
						}).find(".tt-btn").removeAttr("style").next().removeAttr("style")
					})
				}
				789 < a && v(document).mouseup(function (t) {
					window.innerWidth || c.width();
					if (v(".tt-btn-close").is(t.target)) return l(), !1;
					v(".tt-lookbook-popup").is(t.target) || 0 !== v(".tt-lookbook-popup").has(t.target).length || v(".tt-hotspot").is(t.target) || 0 !== v(".tt-hotspot").has(t.target).length || l()
				}), v(window).resize(nt(function (t) {
					(window.innerWidth || c.width()) <= 789 ? d() : (l(), v(".tt-hotspot").find(".tt-content-parent").each(function () {
						var t = v(this);
						if ("block" == t.css("display")) {
							var e = t.closest(".tt-hotspot"),
								i = e.attr("data-top") + "%",
								n = e.attr("data-left") + "%";
							t.removeAttr("style").prev().removeAttr("style"), e.removeAttr("style").css({
								top: i,
								left: n
							})
						}
					}))
				}))
			})
		}

		function at() {
			j.ttProductDesign02.on("mouseenter", function () {
				if (!(window.innerWidth < 1024)) {
					var t = v(this).find(".tt-image-box").height(),
						e = v(this).find(".tt-description");
					e.height();
					e.find(".tt-row").height() + e.find(".tt-title").height() + e.find(".tt-price").height() + e.find(".tt-option-block").height() + e.find(".tt-product-inside-hover").height() + 60 < t || (v(this).addClass("tt-small"), e.height(t).perfectScrollbar())
				}
			}).on("mouseleave", function () {
				window.innerWidth < 1024 || v(this).removeClass("tt-small").find(".tt-description").removeAttr("style").perfectScrollbar("destroy")
			})
		}

		function rt() {
			var t = -1;
			if ("Microsoft Internet Explorer" === navigator.appName) {
				var e = navigator.userAgent;
				null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
			} else if ("Netscape" === navigator.appName) {
				e = navigator.userAgent;
				null != new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
			}
			return t
		}

		function lt() {
			var n = j.ttProductMasonry.find(".tt-product-init").isotope({
				itemSelector: ".element-item",
				layoutMode: "masonry"
			});
			n.imagesLoaded().progress(function () {
				n.isotope("layout")
			});
			var t = j.ttProductMasonry.find(".tt-filter-nav");
			if (t.length) {
				var e = {
					ium: function () {
						return v(this).find(".name").text().match(/ium$/)
					}
				};
				t.on("click", ".button", function () {
					var t = v(this).attr("data-filter");
					t = e[t] || t, n.isotope({
						filter: t
					}), v(this).addClass("active").siblings().removeClass("active")
				})
			}
			var i = v(".isotop_showmore_js .btn"),
				o = v(".tt-add-item");
			i.length && o.length && i.on("click", function (t) {
				return t.preventDefault(), v.ajax({
					url: "ajax-content/ajax_product_metro.html",
					success: function (t) {
						var e, i = v(t);
						o.append(i), n.isotope("appended", i), it(), e = o.children().last().children().offset().top - 80, v(p, s).animate({
							scrollTop: e
						}, 500)
					}
				}), !1
			})
		}

		function dt() {
			var n = j.ttLookBookMasonry.find(".tt-lookbook-init").isotope({
				itemSelector: ".element-item",
				layoutMode: "masonry",
				gutter: 0
			});
			n.imagesLoaded().progress(function () {
				n.addClass("tt-show").isotope("layout")
			});
			var t = v(".isotop_showmore_js .btn"),
				o = v(".tt-add-item");
			t.length && o.length && t.on("click", function (t) {
				return t.preventDefault(), v.ajax({
					url: "ajax_post.php",
					success: function (t) {
						var e, i = v(t);
						o.append(i), n.isotope("appended", i), e = o.children().last().children().offset().top - 180, v(p, s).animate({
							scrollTop: e
						}, 500)
					}
				}), !1
			})
		}

		function ct() {
			if (window.innerWidth < 1025) {
				if (k.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				k.append(x.detach()), b.append(y.detach())
			} else {
				if (T.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				T.append(x.detach()), b.append(y.detach())
			}
		}

		function ht() {
			if (window.innerWidth < 1025) {
				if (E.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				E.append(I.detach())
			} else {
				if (L.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				L.append(I.detach())
			}
		}

		function ut() {
			if (window.innerWidth < 1025) {
				if (D.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				D.append(A.detach())
			} else {
				if (P.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				P.append(A.detach())
			}
		}

		function pt() {
			if (window.innerWidth < 1025) {
				if (F.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				F.append(M.detach())
			} else {
				if (H.children().lenght) return !1;
				if (v(".stuck").length) return !1;
				H.append(M.detach())
			}
		}

		function ft() {
			var s = o,
				a = d,
				r = !1,
				l = function () {
					var t = window.innerHeight,
						e = v(this).find(".dropdown-menu"),
						i = t - e.get(0).getBoundingClientRect().top,
						n = e.innerHeight(),
						o = j.ttBackToTop;
					if (i < n) {
						var s = v("body"),
							a = v(".stuck-nav");
						e.css({
							maxHeight: i - 20,
							overflow: "auto"
						}), v("body").addClass("small-viewport");
						var r = function () {
							var t = v("<div>").css({
								overflowY: "scroll",
								width: "50px",
								height: "50px",
								visibility: "hidden"
							});
							s.append(t);
							var e = t.get(0).offsetWidth - t.get(0).clientWidth;
							return t.remove(), e
						};
						s.css({
							overflowY: "hidden",
							paddingRight: r()
						}), a.css({
							paddingRight: r()
						}), o.css({
							right: r()
						})
					}
				};
			0 < u.length && (v(".tt-megamenu-submenu li a").each(function () {
				v(this).find("img").length && v(this).closest("ul").addClass("tt-sub-img")
			}), u.find(".dropdown-menu").each(function () {
				v(this).length && v(this).closest(".dropdown").addClass("tt-submenu")
			}), v(document).on({
				mouseenter: function () {
					var i = v(this),
						n = this,
						t = window.innerWidth || v(window).width(),
						e = i.innerHeight();
					if (u.hasClass("tt-menu-small")) {
						var o = Math.abs(parseInt(u.css("marginTop"), 10));
						i.find(".dropdown-menu").css({
							top: e - o
						})
					} else i.find(".dropdown-menu").css({
						top: e
					});
					1025 < t && p.hasClass("touch-device") && u.find(".dropdown.tt-submenu > a").one("click", !1), r = setTimeout(function () {
						var t = i.find(".tt-menu-slider"),
							e = i.find(".dropdown-menu");
						if (i.addClass("active").find(".dropdown-menu").stop().addClass("hover").fadeIn(a), 0 < i.children("ul").length && v("body").hasClass("small-viewport")) {
							i.children("ul:first-child").width();
							i.closest(".dropdown-menu").addClass("custom-width")
						}
						e.length & !e.hasClass("one-col") && l.call(n), t.length && (t.hasClass("slick-initialized") || t.slick({
							dots: !1,
							arrows: !0,
							infinite: !0,
							speed: 300,
							slidesToShow: 2,
							slidesToScroll: 2,
							adaptiveHeight: !0
						})), t.slick("setPosition")
					}, s)
				},
				mouseleave: function (t) {
					var e = v(this),
						i = e.find(".dropdown-menu");
					(!v(t.target).parents(".dropdown-menu").length || v(t.target).parents(".tt-megamenu-submenu").length || v(t.target).parents(".one-col").length) && (!1 !== r && (clearTimeout(r), r = !1), i.length ? i.stop().fadeOut({
						duration: 0,
						complete: function () {
							e.removeClass("active").find(".dropdown-menu").removeClass("hover"), 0 < !e.closest("li.active:not(.tt-submenu)").length && e.closest(".dropdown-menu").removeClass("custom-width")
						}
					}) : (e.removeClass("active").find(".dropdown-menu").removeClass("hover"), 0 < !e.closest("li.active:not(.tt-submenu)").length && e.closest(".dropdown-menu").removeClass("custom-width")), i.removeAttr("style"), p.removeAttr("style"), v(".stuck-nav").css({
						paddingRight: "inherit"
					}), j.ttBackToTop.css({
						right: 0
					}))
				}
			}, ".tt-desctop-menu li"), u.find(".multicolumn ul li").on("hover", function () {
				var t = v(this).find("ul:first");
				if (t.length) {
					var e = window.innerWidth,
						i = (window.innerHeight, parseInt(t.css("width"), 10)),
						n = this.getBoundingClientRect().right,
						o = this.getBoundingClientRect().left;
					e - n < i ? t.removeClass("left").addClass("right") : o < i ? t.removeClass("right").addClass("left") : t.removeClass("left right"), t.stop(!0, !0).fadeIn(300)
				}
			}, function () {
				v(this).find("ul:first").stop(!0, !0).fadeOut(300).removeAttr("style")
			}), u.find(".tt-megamenu-submenu li").on("mouseenter", function () {
				console.log("check");
				var t = v(this).find("ul:first");
				if (t.length) {
					var e = v(this).parents(".dropdown").find(".dropdown-menu"),
						i = e.get(0).getBoundingClientRect().left,
						n = e.get(0).getBoundingClientRect().right,
						o = e.get(0).getBoundingClientRect().bottom,
						s = parseInt(t.css("width"), 10),
						a = this.getBoundingClientRect().right,
						r = this.getBoundingClientRect().left;
					n - 20 - a < s ? t.removeClass("left").addClass("right") : r - s - 20 < i ? t.removeClass("right").addClass("left") : t.removeClass("left right"), t.stop(!0, !0).delay(150).fadeIn(300);
					var l = t.get(0).getBoundingClientRect().bottom;
					if (o < l) {
						var d = o - l;
						t.css({
							top: d
						})
					}
				}
			}).on("mouseleave", function () {
				v(this).find("ul:first").stop(!0, !0).fadeOut(300).removeAttr("style")
			}), u.find(".dropdown div").on("hover", function () {
				v(this).children(".tt-title-submenu").toggleClass("active")
			})), v(window).on("scroll", function () {
				var t;
				(t = v(".dropdown.hover")).find(".dropdown-menu").not(".one-col").length && t.length && l.call(t)
			});
			var e = window.location.href;
			u.find("li").each(function () {
				var t = v(this).find("a").attr("href"); - 1 !== e.indexOf(t) && v(this).addClass("selected").closest("li").siblings().removeClass("selected")
			})
		}
		tt.length && tt.on("click", ".tt-dropdown-inner li", function (t) {
				var e = v(this).closest(".js-currency-changevalue"),
					i = e.find(".tt-dropdown-toggle .tt-icon"),
					n = e.find(".tt-dropdown-toggle .tt-text"),
					o = v(this).attr("data-currency-icon"),
					s = v(this).attr("data-currency-text");
				return i.html(o), n.html(s), v(this).addClass("active").siblings().removeClass("active").closest(".js-currency-changevalue").find(".tt-dropdown-toggle").trigger("click"), !1
			}),
			function () {
				function e() {
					setTimeout(function () {
						v("#tt-pageContent .tt-ajax-tabs").each(function () {
							v(this).removeAttr("style");
							var t = v(this).innerHeight();
							v(this).css({
								height: t
							})
						})
					}, 350)
				}
				v("#tt-pageContent .tt-ajax-tabs").length && (c.resize(nt(function (t) {
					e()
				})), c.on("load", function () {
					e()
				}))
			}(), v('a[data-toggle="tab"]').length && v("body").on("shown.bs.tab", 'a[data-toggle="tab"]', function (t) {
				var e = v(this).closest(".tt-ajax-tabs").find(".tab-content");
				e.length && (e.fadeTo(0, 0), setTimeout(function () {
					e.fadeTo(170, 1)
				}, 350));
				var i = v(this).data("ajax-include") || "false",
					s = v(this).attr("href") || "false";
				s = s.replace(/#/g, ""), "false" === i || "false" === !s || v(this).hasClass("include") || (v(this).addClass("include"), v.ajax({
					url: i,
					success: function (t) {
						var e = v(t),
							i = v("#" + s);
						i.append(e), i.find(".tt-carousel-products").each(function () {
							var t = v(this),
								e = v(this).data("item");
							t.slick({
								dots: !1,
								arrows: !0,
								infinite: !0,
								speed: 300,
								slidesToShow: e || 4,
								slidesToScroll: e || 4,
								lazyLoad: "ondemand",
								adaptiveHeight: !0,
								responsive: [{
									breakpoint: 1025,
									settings: {
										slidesToShow: 3,
										slidesToScroll: 3
									}
								}, {
									breakpoint: 791,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 2
									}
								}]
							})
						}), new LazyLoad;
						var n = i.closest(".tt-ajax-tabs"),
							o = n.innerHeight();
						setTimeout(function () {
							n.removeAttr("style");
							var t = n.innerHeight();
							t < o && n.css({
								height: t
							}), ot()
						}, 1e3)
					}
				})), v(".slick-slider").each(function () {
					v(this).slick("getSlick").refresh()
				}), j.ttAlignmentImg.length && ot()
			}), v(".modal").on("shown.bs.modal", function (t) {
				new LazyLoad;
				var e = v(this).find(".slick-slider");
				e.length && e.each(function () {
					v(this).slick("getSlick").refresh()
				})
			}), v.fn.findHeight = function () {
				var t = v(this),
					e = t.eq(0).innerHeight();
				return t.each(function () {
					e = v(this).innerHeight() > e ? v(this).innerHeight() : e
				}), e / 2
			}, ("ontouchstart" in window || "onmsgesturechange" in window) && (p.addClass("touch-device"), s.addClass("touch-device")), /Edge/.test(navigator.userAgent) && s.addClass("edge"),
			function () {
				var t = v(".tt-menu-categories"),
					e = (t.find("nav > ul > li"), v(this).find(".dropdown-menu"), a.find(".tt-categories-toggle"));
				t.length && (p.on("click", ".tt-menu-categories button", function (t) {
					t.preventDefault(), v(this).closest(".tt-menu-categories").toggleClass("opened").find(".tt-dropdown-menu").slideToggle(200)
				}), t.find("nav > ul > li").each(function () {
					v(this).find(".dropdown-menu").length && v(this).closest("li").addClass("tt-submenu")
				}), t.find(".tt-dropdown-menu li").hover(function (t) {
					v(this).toggleClass("acitve", "mouseenter" === t.type)
				}), t.find(".tt-megamenu-submenu ul li").on("mouseenter", function () {
					var t = v(this).find("ul:first");
					if (t.length) {
						var e = window.innerWidth,
							i = parseInt(t.css("width"), 10) + 20,
							n = this.getBoundingClientRect().right,
							o = this.getBoundingClientRect().left;
						e - n < i ? t.addClass("right-popup") : o < i && t.removeClass("right-popup")
					}
				}).on("mouseleave", function () {
					v(this).find("ul:first").removeClass("right-popup")
				}), function () {
					if (!l.hasClass("disabled")) {
						var e = a.find(".tt-desctop-parent-menu-categories"),
							i = a.find(".tt-stuck-desctop-menu-categories"),
							n = a.find(".tt-mobile-parent-menu-categories"),
							o = a.find(".tt-stuck-mobile-menu-categories");
						c.scroll(function () {
							var t = v("header").innerHeight();
							c.scrollTop() > t ? (i.append(e.find(".tt-menu-categories").detach()), o.append(n.find(".tt-categories-toggle").detach())) : (e.append(i.find(".tt-menu-categories").detach()), n.append(o.find(".tt-categories-toggle").detach()))
						})
					}
				}(), e.length && e.initMM({
					enable_breakpoint: !0,
					mobile_button: !0,
					breakpoint: 1025,
					menu_class: "mobile-caterorie-menu"
				}))
			}(), ft()
	}(jQuery), oWa = function (f) {
		var n = /\+/g;

		function m(t) {
			return v.raw ? t : encodeURIComponent(t)
		}

		function g(t, e) {
			var i = v.raw ? t : function (t) {
				0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
				try {
					return t = decodeURIComponent(t.replace(n, " ")), v.json ? JSON.parse(t) : t
				} catch (t) {}
			}(t);
			return f.isFunction(e) ? e(i) : i
		}
		var v = f.cookie = function (t, e, i) {
			if (1 < arguments.length && !f.isFunction(e)) {
				if ("number" == typeof (i = f.extend({}, v.defaults, i)).expires) {
					var n = i.expires,
						o = i.expires = new Date;
					o.setMilliseconds(o.getMilliseconds() + 864e5 * n)
				}
				return document.cookie = [m(t), "=", (s = e, m(v.json ? JSON.stringify(s) : String(s))), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
			}
			for (var s, a, r = t ? void 0 : {}, l = document.cookie ? document.cookie.split("; ") : [], d = 0, c = l.length; d < c; d++) {
				var h = l[d].split("="),
					u = (a = h.shift(), v.raw ? a : decodeURIComponent(a)),
					p = h.join("=");
				if (t === u) {
					r = g(p, e);
					break
				}
				t || void 0 === (p = g(p)) || (r[u] = p)
			}
			return r
		};
		v.defaults = {}, f.removeCookie = function (t, e) {
			return f.cookie(t, "", f.extend({}, e, {
				expires: -1
			})), !f.cookie(t)
		}
	}, "function" == typeof define && define.amd ? define(["jquery"], oWa) : "object" == typeof exports ? module.exports = oWa(require("jquery")) : oWa(jQuery), jQuery(function (t) {
		function e(t) {
			var e = t.attr("data-pause");
			setTimeout(function () {
				t.modal("show")
			}, e)
		}
		t("#Modalnewsletter").on("click", ".checkbox-group", function () {
			t.cookie("modalnewsletter", "1", {
				expires: 7
			})
		}), t("#ModalVerifyAge").on("click", ".js-btn-close", function () {
			return t.cookie("modalverifyage", "2", {
				expires: 7
			}), !1
		}), t("#ModalDiscount").on("click", ".js-reject-discount", function () {
			return t.cookie("modaldiscount", "3", {
				expires: 7
			}), !1
		});
		var i = t("body"),
			n = t.cookie("modalnewsletter"),
			o = t("#Modalnewsletter"),
			s = t("#Modalnewsletter02"),
			a = t("#Modalnewsletter03"),
			r = t("#Modalnewsletter04"),
			l = t("#Modalnewsletter05"),
			d = t.cookie("modalverifyage"),
			c = t("#ModalVerifyAge"),
			h = t.cookie("modaldiscount"),
			u = t("#ModalDiscount");
		s.length && (e(s), i.addClass("modal-newsletter02"), t("#Modalnewsletter02").on("click", ".modal-header .close", function () {
			i.removeClass("modal-newsletter02")
		})), a.length && (e(a), i.addClass("modal-newsletter03"), t("#Modalnewsletter03").on("click", ".modal-header .close", function () {
			i.removeClass("modal-newsletter03")
		})), r.length && (e(r), i.addClass("modal-newsletter04"), t("#Modalnewsletter04").on("click", ".modal-header .close", function () {
			i.removeClass("modal-newsletter04")
		})), l.length && (e(l), i.addClass("modal-newsletter05"), t("#Modalnewsletter05").on("click", ".modal-header .close", function () {
			i.removeClass("modal-newsletter05")
		})), 1 != n && (o.length && (e(o), i.addClass("modal-newsletter"), t("#Modalnewsletter").on("click", ".modal-header .close", function () {
			i.removeClass("modal-newsletter")
		})), 2 != d && (c.length && (e(c), c.on("click", ".js-btn-close", function () {
			return c.find(".modal-header .close").trigger("click"), !1
		})), 3 != h && u.length && (e(u), u.on("click", ".js-reject-discount", function () {
			return u.find(".modal-header .close").trigger("click"), !1
		}))))
	}), jQuery(function (n) {
		var t = n("#tt-header"),
			e = t.find(".tt-search-input"),
			o = t.find(".search-results");
		e.length && o.length && (e.on("input", function (t) {
			if (n(t.target).val()) {
				o.fadeIn("250");
				var i = n("#tt-header").find(".search-results");
				i.hasClass("tt-is-include") || (i.addClass("tt-is-include"), n.ajax({
					url: "ajax-content/ajax_search.html",
					success: function (t) {
						var e = n(t);
						i.append(e), new LazyLoad
					}
				}))
			}
		}), e.blur(function () {
			o.fadeOut("250")
		}))
	}), oXa = jQuery, oXa(window).on("load", function () {
		oXa("#instafeed").each(function () {
			var t = oXa(this).data("limitimg"),
				e = oXa(this).data("username");
			oXa.instagramFeed({
				username: e,
				container: "#instafeed",
				display_profile: !1,
				display_biography: !1,
				display_gallery: !0,
				styling: !1,
				items: t,
				margin: 0
			})
		})
	}), rXa = jQuery, sXa = rXa(".js-objdata-slider"), sXa.length && (uXa = {
		autoplay: !0,
		infinite: !0,
		dots: !0,
		arrows: !1,
		cssEase: "linear",
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 300,
		responsive: [{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	}, rXa(window).on("load resize", function () {
		window.innerWidth <= 790 ? sXa.not(".slick-initialized").slick(uXa) : sXa.filter(".slick-initialized").slick("unslick")
	}));
var mapElement = document.getElementById("map");
if (mapElement) {
	function init() {
		var t = {
				zoom: 12,
				center: new google.maps.LatLng(40.67, -73.94),
				scrollwheel: !1,
				styles: [{
					featureType: "water",
					elementType: "geometry.fill",
					stylers: [{
						color: "#abd0fa"
					}]
				}, {
					featureType: "transit",
					stylers: [{
						color: "#808080"
					}, {
						visibility: "off"
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [{
						visibility: "on"
					}, {
						color: "#e1d9c6"
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.fill",
					stylers: [{
						color: "#eee9da"
					}]
				}, {
					featureType: "road.local",
					elementType: "geometry.fill",
					stylers: [{
						visibility: "on"
					}, {
						color: "000"
					}, {
						weight: 1.8
					}]
				}, {
					featureType: "road.local",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#d7d7d7"
					}]
				}, {
					featureType: "poi",
					elementType: "geometry.fill",
					stylers: [{
						visibility: "on"
					}, {
						color: "#ebebeb"
					}]
				}, {
					featureType: "administrative",
					elementType: "geometry",
					stylers: [{
						color: "#eee9da"
					}]
				}, {
					featureType: "road.arterial",
					elementType: "geometry.fill",
					stylers: [{
						color: "#fffbf8"
					}]
				}, {
					featureType: "road.arterial",
					elementType: "geometry.fill",
					stylers: [{
						color: "#fffbf8"
					}]
				}, {
					featureType: "landscape",
					elementType: "geometry.fill",
					stylers: [{
						visibility: "on"
					}, {
						color: "#fbf7ee"
					}]
				}, {
					featureType: "road",
					elementType: "labels.text.fill",
					stylers: [{
						color: "#d6d6d6"
					}]
				}, {
					featureType: "administrative",
					elementType: "labels.text.fill",
					stylers: [{
						visibility: "on"
					}, {
						color: "#3c3424"
					}]
				}, {
					featureType: "poi",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "poi",
					elementType: "labels",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "road.arterial",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#d6d6d6"
					}]
				}, {
					featureType: "road",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {}, {
					featureType: "poi",
					elementType: "geometry.fill",
					stylers: [{
						color: "#aee9c6"
					}]
				}]
			},
			e = document.getElementById("map"),
			i = new google.maps.Map(e, t);
		new google.maps.Marker({
			position: new google.maps.LatLng(40.67, -73.94),
			map: i,
			icon: "images/custom/beachflag.png",
			title: "Snazzy!"
		})
	}
	google.maps.event.addDomListener(window, "load", init)
}