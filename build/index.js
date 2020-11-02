/*! For license information please see index.js.LICENSE.txt */
module.exports = (() => {
  var e = {
      866: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Cookies: () => s(),
            OPTIONS: () => O,
            SAME_SITE_OPTIONS: () => v,
            default: () => S,
          });
        const o = require("react");
        var r = n.n(o),
          i = n(697),
          c = n.n(i),
          a = n(808),
          s = n.n(a);
        function l(e) {
          return (l =
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
                  y(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function y(e, t, n) {
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
        function b(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function d(e, t) {
          return (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function m(e, t) {
          return !t || ("object" !== l(t) && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function h(e) {
          return (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var O = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
          v = { STRICT: "strict", LAX: "lax", NONE: "none" },
          g = function (e) {
            var t = e.condition,
              n = e.wrapper,
              o = e.children;
            return t ? n(o) : o;
          },
          C = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && d(e, t);
            })(a, e);
            var t,
              n,
              o,
              i,
              c =
                ((o = a),
                (i = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = h(o);
                  if (i) {
                    var n = h(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else e = t.apply(this, arguments);
                  return m(this, e);
                });
            function a(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, a),
                ((t = c.call(this, e)).state = {
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
              (t = a),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props.debug;
                    (void 0 === this.getCookieValue() || e) && this.setState({ visible: !0 });
                  },
                },
                {
                  key: "accept",
                  value: function () {
                    var e = this.props,
                      t = e.cookieName,
                      n = e.cookieValue,
                      o = e.hideOnAccept,
                      r = e.onAccept;
                    this.setCookie(t, n), r(), o && this.setState({ visible: !1 });
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
                  key: "getLegacyCookieName",
                  value: function (e) {
                    return "".concat(e, "-legacy");
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
                    i === v.NONE && s().set(this.getLegacyCookieName(e), t, a), s().set(e, t, a);
                  },
                },
                {
                  key: "getCookieValue",
                  value: function () {
                    var e = this.props.cookieName,
                      t = s().get(e);
                    return void 0 === t && (t = s().get(this.getLegacyCookieName(e))), t;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    if (!this.state.visible) return null;
                    var t = this.props,
                      n = t.location,
                      o = t.style,
                      i = t.buttonStyle,
                      c = t.declineButtonStyle,
                      a = t.contentStyle,
                      s = t.disableStyles,
                      l = t.buttonText,
                      p = t.declineButtonText,
                      y = t.containerClasses,
                      b = t.contentClasses,
                      d = t.buttonClasses,
                      m = t.buttonWrapperClasses,
                      h = t.declineButtonClasses,
                      v = t.buttonId,
                      C = t.declineButtonId,
                      S = t.disableButtonStyles,
                      k = t.enableDeclineButton,
                      x = t.flipButtons,
                      j = t.ButtonComponent,
                      T = t.overlay,
                      w = t.overlayClasses,
                      B = t.overlayStyle,
                      P = t.ariaAcceptLabel,
                      D = t.ariaDeclineLabel,
                      E = {},
                      N = {},
                      I = {},
                      _ = {},
                      R = {};
                    switch (
                      (s
                        ? ((E = u({}, o)),
                          (N = u({}, i)),
                          (I = u({}, c)),
                          (_ = u({}, a)),
                          (R = u({}, B)))
                        : ((E = u({}, f(f({}, this.state.style), o))),
                          (_ = u({}, f(f({}, this.state.contentStyle), a))),
                          (R = u({}, f(f({}, this.state.overlayStyle), B))),
                          S
                            ? ((N = u({}, i)), (I = u({}, c)))
                            : ((N = u({}, f(f({}, this.state.buttonStyle), i))),
                              (I = u({}, f(f({}, this.state.declineButtonStyle), c))))),
                      n)
                    ) {
                      case O.TOP:
                        E.top = "0";
                        break;
                      case O.BOTTOM:
                        E.bottom = "0";
                    }
                    var A = [];
                    return (
                      k &&
                        A.push(
                          r().createElement(
                            j,
                            {
                              key: "declineButton",
                              style: I,
                              className: h,
                              id: C,
                              "aria-label": D,
                              onClick: function () {
                                e.decline();
                              },
                            },
                            p
                          )
                        ),
                      A.push(
                        r().createElement(
                          j,
                          {
                            key: "acceptButton",
                            style: N,
                            className: d,
                            id: v,
                            "aria-label": P,
                            onClick: function () {
                              e.accept();
                            },
                          },
                          l
                        )
                      ),
                      x && A.reverse(),
                      r().createElement(
                        g,
                        {
                          condition: T,
                          wrapper: function (e) {
                            return r().createElement("div", { style: R, className: w }, e);
                          },
                        },
                        r().createElement(
                          "div",
                          { className: "".concat(y), style: E },
                          r().createElement("div", { style: _, className: b }, this.props.children),
                          r().createElement(
                            "div",
                            { className: "".concat(m) },
                            A.map(function (e) {
                              return e;
                            })
                          )
                        )
                      )
                    );
                  },
                },
              ]) && b(t.prototype, n),
              a
            );
          })(o.Component);
        (C.propTypes = {
          location: c().oneOf(
            Object.keys(O).map(function (e) {
              return O[e];
            })
          ),
          sameSite: c().oneOf(
            Object.keys(v).map(function (e) {
              return v[e];
            })
          ),
          style: c().object,
          buttonStyle: c().object,
          declineButtonStyle: c().object,
          contentStyle: c().object,
          children: c().any,
          disableStyles: c().bool,
          hideOnAccept: c().bool,
          hideOnDecline: c().bool,
          onAccept: c().func,
          onDecline: c().func,
          buttonText: c().oneOfType([c().string, c().func, c().element]),
          declineButtonText: c().oneOfType([c().string, c().func, c().element]),
          cookieName: c().string,
          cookieValue: c().oneOfType([c().string, c().bool, c().number]),
          declineCookieValue: c().oneOfType([c().string, c().bool, c().number]),
          setDeclineCookie: c().bool,
          debug: c().bool,
          expires: c().number,
          containerClasses: c().string,
          contentClasses: c().string,
          buttonClasses: c().string,
          buttonWrapperClasses: c().string,
          declineButtonClasses: c().string,
          buttonId: c().string,
          declineButtonId: c().string,
          extraCookieOptions: c().object,
          disableButtonStyles: c().bool,
          enableDeclineButton: c().bool,
          flipButtons: c().bool,
          ButtonComponent: c().elementType,
          cookieSecurity: c().bool,
          overlay: c().bool,
          overlayClasses: c().string,
          overlayStyle: c().object,
          ariaAcceptLabel: c().string,
          ariaDeclineLabel: c().string,
        }),
          (C.defaultProps = {
            disableStyles: !1,
            hideOnAccept: !0,
            hideOnDecline: !0,
            location: O.BOTTOM,
            onAccept: function () {},
            onDecline: function () {},
            cookieName: "CookieConsent",
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
            sameSite: v.LAX,
            ButtonComponent: function (e) {
              var t = e.children,
                n = (function (e, t) {
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
                })(e, ["children"]);
              return r().createElement("button", n, t);
            },
            overlay: !1,
            overlayClasses: "",
            ariaAcceptLabel: "Accept cookies",
            ariaDeclineLabel: "Decline cookies",
          });
        const S = C;
      },
      808: (e, t, n) => {
        var o, r, i;
        void 0 ===
          (r =
            "function" ==
            typeof (o = i = function () {
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
                    var a = "";
                    for (var s in i)
                      i[s] && ((a += "; " + s), !0 !== i[s] && (a += "=" + i[s].split(";")[0]));
                    return (document.cookie = t + "=" + n + a);
                  }
                }
                function c(e, n) {
                  if ("undefined" != typeof document) {
                    for (
                      var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0;
                      c < i.length;
                      c++
                    ) {
                      var a = i[c].split("="),
                        s = a.slice(1).join("=");
                      n || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                      try {
                        var l = t(a[0]);
                        if (((s = (o.read || o)(s, l) || t(s)), n))
                          try {
                            s = JSON.parse(s);
                          } catch (e) {}
                        if (((r[l] = s), e === l)) break;
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
      703: (e, t, n) => {
        "use strict";
        var o = n(414);
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (e.exports = function () {
            function e(e, t, n, r, i, c) {
              if (c !== o) {
                var a = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((a.name = "Invariant Violation"), a);
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
      697: (e, t, n) => {
        e.exports = n(703)();
      },
      414: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { exports: {} });
    return e[o](r, r.exports, n), r.exports;
  }
  return (
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    n(866)
  );
})();
