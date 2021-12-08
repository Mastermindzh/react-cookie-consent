/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ReactCookieConsent = t())
    : (e.ReactCookieConsent = t());
})(self, function () {
  return (function () {
    var e = {
        808: function (e, t, n) {
          var o, r, i;
          void 0 ===
            (r =
              "function" ==
              typeof (o = i =
                function () {
                  function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var o in n) t[o] = n[o];
                    }
                    return t;
                  }
                  function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  return (function n(o) {
                    function r() {}
                    function i(t, n, i) {
                      if ("undefined" != typeof document) {
                        "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
                          (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                          (i.expires = i.expires ? i.expires.toUTCString() : "");
                        try {
                          var c = JSON.stringify(n);
                          /^[\{\[]/.test(c) && (n = c);
                        } catch (e) {}
                        (n = o.write
                          ? o.write(n, t)
                          : encodeURIComponent(String(n)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (t = encodeURIComponent(String(t))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var l = "";
                        for (var a in i)
                          i[a] && ((l += "; " + a), !0 !== i[a] && (l += "=" + i[a].split(";")[0]));
                        return (document.cookie = t + "=" + n + l);
                      }
                    }
                    function c(e, n) {
                      if ("undefined" != typeof document) {
                        for (
                          var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0;
                          c < i.length;
                          c++
                        ) {
                          var l = i[c].split("="),
                            a = l.slice(1).join("=");
                          n || '"' !== a.charAt(0) || (a = a.slice(1, -1));
                          try {
                            var s = t(l[0]);
                            if (((a = (o.read || o)(a, s) || t(a)), n))
                              try {
                                a = JSON.parse(a);
                              } catch (e) {}
                            if (((r[s] = a), e === s)) break;
                          } catch (e) {}
                        }
                        return e ? r[e] : r;
                      }
                    }
                    return (
                      (r.set = i),
                      (r.get = function (e) {
                        return c(e, !1);
                      }),
                      (r.getJSON = function (e) {
                        return c(e, !0);
                      }),
                      (r.remove = function (t, n) {
                        i(t, "", e(n, { expires: -1 }));
                      }),
                      (r.defaults = {}),
                      (r.withConverter = n),
                      r
                    );
                  })(function () {});
                })
                ? o.call(t, n, t, e)
                : o) || (e.exports = r),
            (e.exports = i());
        },
        703: function (e, t, n) {
          "use strict";
          var o = n(414);
          function r() {}
          function i() {}
          (i.resetWarningCache = r),
            (e.exports = function () {
              function e(e, t, n, r, i, c) {
                if (c !== o) {
                  var l = new Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((l.name = "Invariant Violation"), l);
                }
              }
              function t() {
                return e;
              }
              e.isRequired = e;
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: r,
              };
              return (n.PropTypes = n), n;
            });
        },
        697: function (e, t, n) {
          e.exports = n(703)();
        },
        414: function (e) {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
      },
      t = {};
    function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var i = (t[o] = { exports: {} });
      return e[o](i, i.exports, n), i.exports;
    }
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
      (n.d = function (e, t) {
        for (var o in t)
          n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var o = {};
    return (
      (function () {
        "use strict";
        n.r(o),
          n.d(o, {
            Cookies: function () {
              return l();
            },
            OPTIONS: function () {
              return m;
            },
            SAME_SITE_OPTIONS: function () {
              return g;
            },
            VISIBLE_OPTIONS: function () {
              return S;
            },
            default: function () {
              return B;
            },
            getCookieConsentValue: function () {
              return C;
            },
            resetCookieConsentValue: function () {
              return k;
            },
          });
        const e = require("react");
        var t = n.n(e),
          r = n(697),
          i = n.n(r),
          c = n(808),
          l = n.n(c);
        function a(e) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var s = ["children"];
        function u() {
          return (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function p(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? p(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function d(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function b(e, t) {
          return (b =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function y(e, t) {
          if (t && ("object" === a(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
          return v(e);
        }
        function v(e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function O(e) {
          return (O = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function h(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var m = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
          g = { STRICT: "strict", LAX: "lax", NONE: "none" },
          S = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" },
          C = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
              t = l().get(e);
            return void 0 === t && (t = l().get(x(e))), t;
          },
          k = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j;
            l().remove(e);
          },
          x = function (e) {
            return "".concat(e, "-legacy");
          },
          j = "CookieConsent",
          w = function (e) {
            var t = e.condition,
              n = e.wrapper,
              o = e.children;
            return t ? n(o) : o;
          },
          T = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && b(e, t);
            })(a, e);
            var n,
              o,
              r,
              i,
              c =
                ((r = a),
                (i = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = O(r);
                  if (i) {
                    var n = O(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else e = t.apply(this, arguments);
                  return y(this, e);
                });
            function a(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, a),
                h(v((t = c.call(this, e))), "handleScroll", function () {
                  var e = t.props.acceptOnScrollPercentage,
                    n = document.documentElement,
                    o = document.body,
                    r = "scrollTop",
                    i = "scrollHeight";
                  ((n[r] || o[r]) / ((n[i] || o[i]) - n.clientHeight)) * 100 > e && t.accept(!0);
                }),
                h(v(t), "removeScrollListener", function () {
                  t.props.acceptOnScroll && window.removeEventListener("scroll", t.handleScroll);
                }),
                (t.state = {
                  visible: !1,
                  style: {
                    alignItems: "baseline",
                    background: "#353535",
                    color: "white",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    left: "0",
                    position: "fixed",
                    width: "100%",
                    zIndex: "999",
                  },
                  buttonStyle: {
                    background: "#ffd42d",
                    border: "0",
                    borderRadius: "0px",
                    boxShadow: "none",
                    color: "black",
                    cursor: "pointer",
                    flex: "0 0 auto",
                    padding: "5px 10px",
                    margin: "15px",
                  },
                  declineButtonStyle: {
                    background: "#c12a2a",
                    border: "0",
                    borderRadius: "0px",
                    boxShadow: "none",
                    color: "#e5e5e5",
                    cursor: "pointer",
                    flex: "0 0 auto",
                    padding: "5px 10px",
                    margin: "15px",
                  },
                  contentStyle: { flex: "1 0 300px", margin: "15px" },
                  overlayStyle: {
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: "999",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  },
                }),
                t
              );
            }
            return (
              (n = a),
              (o = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props.debug;
                    (void 0 === this.getCookieValue() || e) &&
                      (this.setState({ visible: !0 }),
                      this.props.acceptOnScroll &&
                        window.addEventListener("scroll", this.handleScroll, { passive: !0 }));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.removeScrollListener();
                  },
                },
                {
                  key: "accept",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                      t = this.props,
                      n = t.cookieName,
                      o = t.cookieValue,
                      r = t.hideOnAccept,
                      i = t.onAccept;
                    this.setCookie(n, o),
                      i(null != e && e),
                      r && (this.setState({ visible: !1 }), this.removeScrollListener());
                  },
                },
                {
                  key: "decline",
                  value: function () {
                    var e = this.props,
                      t = e.cookieName,
                      n = e.declineCookieValue,
                      o = e.hideOnDecline,
                      r = e.onDecline;
                    e.setDeclineCookie && this.setCookie(t, n),
                      r(),
                      o && this.setState({ visible: !1 });
                  },
                },
                {
                  key: "setCookie",
                  value: function (e, t) {
                    var n = this.props,
                      o = n.extraCookieOptions,
                      r = n.expires,
                      i = n.sameSite,
                      c = this.props.cookieSecurity;
                    void 0 === c && (c = !location || "https:" === location.protocol);
                    var a = f(f({ expires: r }, o), {}, { sameSite: i, secure: c });
                    i === g.NONE && l().set(x(e), t, a), l().set(e, t, a);
                  },
                },
                {
                  key: "getCookieValue",
                  value: function () {
                    var e = this.props.cookieName;
                    return C(e);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    switch (this.props.visible) {
                      case S.HIDDEN:
                        return null;
                      case S.BY_COOKIE_VALUE:
                        if (!this.state.visible) return null;
                    }
                    var n = this.props,
                      o = n.location,
                      r = n.style,
                      i = n.buttonStyle,
                      c = n.declineButtonStyle,
                      l = n.contentStyle,
                      a = n.disableStyles,
                      s = n.buttonText,
                      p = n.declineButtonText,
                      d = n.containerClasses,
                      b = n.contentClasses,
                      y = n.buttonClasses,
                      v = n.buttonWrapperClasses,
                      O = n.declineButtonClasses,
                      h = n.buttonId,
                      g = n.declineButtonId,
                      C = n.disableButtonStyles,
                      k = n.enableDeclineButton,
                      x = n.flipButtons,
                      j = n.ButtonComponent,
                      T = n.overlay,
                      B = n.overlayClasses,
                      E = n.overlayStyle,
                      P = n.ariaAcceptLabel,
                      D = n.ariaDeclineLabel,
                      I = {},
                      _ = {},
                      N = {},
                      R = {},
                      A = {};
                    switch (
                      (a
                        ? ((I = u({}, r)),
                          (_ = u({}, i)),
                          (N = u({}, c)),
                          (R = u({}, l)),
                          (A = u({}, E)))
                        : ((I = u({}, f(f({}, this.state.style), r))),
                          (R = u({}, f(f({}, this.state.contentStyle), l))),
                          (A = u({}, f(f({}, this.state.overlayStyle), E))),
                          C
                            ? ((_ = u({}, i)), (N = u({}, c)))
                            : ((_ = u({}, f(f({}, this.state.buttonStyle), i))),
                              (N = u({}, f(f({}, this.state.declineButtonStyle), c))))),
                      o)
                    ) {
                      case m.TOP:
                        I.top = "0";
                        break;
                      case m.BOTTOM:
                        I.bottom = "0";
                    }
                    var L = [];
                    return (
                      k &&
                        L.push(
                          t().createElement(
                            j,
                            {
                              key: "declineButton",
                              style: N,
                              className: O,
                              id: g,
                              "aria-label": D,
                              onClick: function () {
                                e.decline();
                              },
                            },
                            p
                          )
                        ),
                      L.push(
                        t().createElement(
                          j,
                          {
                            key: "acceptButton",
                            style: _,
                            className: y,
                            id: h,
                            "aria-label": P,
                            onClick: function () {
                              e.accept();
                            },
                          },
                          s
                        )
                      ),
                      x && L.reverse(),
                      t().createElement(
                        w,
                        {
                          condition: T,
                          wrapper: function (e) {
                            return t().createElement("div", { style: A, className: B }, e);
                          },
                        },
                        t().createElement(
                          "div",
                          { className: "".concat(d), style: I },
                          t().createElement("div", { style: R, className: b }, this.props.children),
                          t().createElement(
                            "div",
                            { className: "".concat(v) },
                            L.map(function (e) {
                              return e;
                            })
                          )
                        )
                      )
                    );
                  },
                },
              ]) && d(n.prototype, o),
              a
            );
          })(e.Component);
        (T.propTypes = {
          location: i().oneOf(
            Object.keys(m).map(function (e) {
              return m[e];
            })
          ),
          visible: i().oneOf(
            Object.keys(S).map(function (e) {
              return S[e];
            })
          ),
          sameSite: i().oneOf(
            Object.keys(g).map(function (e) {
              return g[e];
            })
          ),
          style: i().object,
          buttonStyle: i().object,
          declineButtonStyle: i().object,
          contentStyle: i().object,
          children: i().any,
          disableStyles: i().bool,
          hideOnAccept: i().bool,
          hideOnDecline: i().bool,
          onAccept: i().func,
          onDecline: i().func,
          buttonText: i().oneOfType([i().string, i().func, i().element]),
          declineButtonText: i().oneOfType([i().string, i().func, i().element]),
          cookieName: i().string,
          cookieValue: i().oneOfType([i().string, i().bool, i().number]),
          declineCookieValue: i().oneOfType([i().string, i().bool, i().number]),
          setDeclineCookie: i().bool,
          debug: i().bool,
          expires: i().number,
          containerClasses: i().string,
          contentClasses: i().string,
          buttonClasses: i().string,
          buttonWrapperClasses: i().string,
          declineButtonClasses: i().string,
          buttonId: i().string,
          declineButtonId: i().string,
          extraCookieOptions: i().object,
          disableButtonStyles: i().bool,
          enableDeclineButton: i().bool,
          flipButtons: i().bool,
          ButtonComponent: i().elementType,
          cookieSecurity: i().bool,
          overlay: i().bool,
          overlayClasses: i().string,
          overlayStyle: i().object,
          ariaAcceptLabel: i().string,
          ariaDeclineLabel: i().string,
          acceptOnScroll: i().bool,
          acceptOnScrollPercentage: i().number,
        }),
          (T.defaultProps = {
            disableStyles: !1,
            hideOnAccept: !0,
            hideOnDecline: !0,
            location: m.BOTTOM,
            visible: S.BY_COOKIE_VALUE,
            onAccept: function () {},
            onDecline: function () {},
            cookieName: j,
            cookieValue: !0,
            declineCookieValue: !1,
            setDeclineCookie: !0,
            buttonText: "I understand",
            declineButtonText: "I decline",
            debug: !1,
            expires: 365,
            containerClasses: "CookieConsent",
            contentClasses: "",
            buttonClasses: "",
            buttonWrapperClasses: "",
            declineButtonClasses: "",
            buttonId: "rcc-confirm-button",
            declineButtonId: "rcc-decline-button",
            extraCookieOptions: {},
            disableButtonStyles: !1,
            enableDeclineButton: !1,
            flipButtons: !1,
            sameSite: g.LAX,
            ButtonComponent: function (e) {
              var n = e.children,
                o = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    o,
                    r = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        o,
                        r = {},
                        i = Object.keys(e);
                      for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                      return r;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++)
                      (n = i[o]),
                        t.indexOf(n) >= 0 ||
                          (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                  }
                  return r;
                })(e, s);
              return t().createElement("button", o, n);
            },
            overlay: !1,
            overlayClasses: "",
            ariaAcceptLabel: "Accept cookies",
            ariaDeclineLabel: "Decline cookies",
            acceptOnScroll: !1,
            acceptOnScrollPercentage: 25,
          });
        const B = T;
      })(),
      o
    );
  })();
});
