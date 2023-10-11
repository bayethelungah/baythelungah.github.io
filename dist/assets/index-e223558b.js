(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Kp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cf = { exports: {} },
  vo = {},
  ff = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for("react.element"),
  Gp = Symbol.for("react.portal"),
  Qp = Symbol.for("react.fragment"),
  Yp = Symbol.for("react.strict_mode"),
  Xp = Symbol.for("react.profiler"),
  Zp = Symbol.for("react.provider"),
  Jp = Symbol.for("react.context"),
  qp = Symbol.for("react.forward_ref"),
  bp = Symbol.for("react.suspense"),
  em = Symbol.for("react.memo"),
  tm = Symbol.for("react.lazy"),
  Za = Symbol.iterator;
function nm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Za && e[Za]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var df = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hf = Object.assign,
  pf = {};
function Zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pf),
    (this.updater = n || df);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mf() {}
mf.prototype = Zn.prototype;
function Nl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pf),
    (this.updater = n || df);
}
var jl = (Nl.prototype = new mf());
jl.constructor = Nl;
hf(jl, Zn.prototype);
jl.isPureReactComponent = !0;
var Ja = Array.isArray,
  gf = Object.prototype.hasOwnProperty,
  _l = { current: null },
  yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function vf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      gf.call(t, r) && !yf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: _l.current,
  };
}
function rm(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function im(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qa = /\/+/g;
function $o(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? im("" + e.key)
    : t.toString(36);
}
function Ti(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qr:
          case Gp:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + $o(s, 0) : r),
      Ja(i)
        ? ((n = ""),
          e != null && (n = e.replace(qa, "$&/") + "/"),
          Ti(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Fl(i) &&
            (i = rm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(qa, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ja(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + $o(o, l);
      s += Ti(o, t, n, a, i);
    }
  else if (((a = nm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + $o(o, l++)), (s += Ti(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ri(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ti(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function om(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ve = { current: null },
  Ei = { transition: null },
  sm = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: Ei,
    ReactCurrentOwner: _l,
  };
F.Children = {
  map: ri,
  forEach: function (e, t, n) {
    ri(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ri(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ri(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = Zn;
F.Fragment = Qp;
F.Profiler = Xp;
F.PureComponent = Nl;
F.StrictMode = Yp;
F.Suspense = bp;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sm;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = hf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = _l.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      gf.call(t, a) &&
        !yf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Qr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zp, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = vf;
F.createFactory = function (e) {
  var t = vf.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: qp, render: e };
};
F.isValidElement = Fl;
F.lazy = function (e) {
  return { $$typeof: tm, _payload: { _status: -1, _result: e }, _init: om };
};
F.memo = function (e, t) {
  return { $$typeof: em, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Ei.transition;
  Ei.transition = {};
  try {
    e();
  } finally {
    Ei.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ve.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
F.useId = function () {
  return ve.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ve.current.useRef(e);
};
F.useState = function (e) {
  return ve.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ve.current.useTransition();
};
F.version = "18.2.0";
ff.exports = F;
var M = ff.exports;
const Ol = Kp(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lm = M,
  am = Symbol.for("react.element"),
  um = Symbol.for("react.fragment"),
  cm = Object.prototype.hasOwnProperty,
  fm = lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dm = { key: !0, ref: !0, __self: !0, __source: !0 };
function xf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) cm.call(t, r) && !dm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: am,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: fm.current,
  };
}
vo.Fragment = um;
vo.jsx = xf;
vo.jsxs = xf;
cf.exports = vo;
var V = cf.exports,
  Ls = {},
  wf = { exports: {} },
  je = {},
  Sf = { exports: {} },
  Pf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, j) {
    var _ = E.length;
    E.push(j);
    e: for (; 0 < _; ) {
      var R = (_ - 1) >>> 1,
        H = E[R];
      if (0 < i(H, j)) (E[R] = j), (E[_] = H), (_ = R);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0],
      _ = E.pop();
    if (_ !== j) {
      E[0] = _;
      e: for (var R = 0, H = E.length, Qt = H >>> 1; R < Qt; ) {
        var qe = 2 * (R + 1) - 1,
          yn = E[qe],
          Ve = qe + 1,
          Yt = E[Ve];
        if (0 > i(yn, _))
          Ve < H && 0 > i(Yt, yn)
            ? ((E[R] = Yt), (E[Ve] = _), (R = Ve))
            : ((E[R] = yn), (E[qe] = _), (R = qe));
        else if (Ve < H && 0 > i(Yt, _)) (E[R] = Yt), (E[Ve] = _), (R = Ve);
        else break e;
      }
    }
    return j;
  }
  function i(E, j) {
    var _ = E.sortIndex - j.sortIndex;
    return _ !== 0 ? _ : E.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= E)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function x(E) {
    if (((v = !1), p(E), !y))
      if (n(a) !== null) (y = !0), Fe(w);
      else {
        var j = n(u);
        j !== null && Je(x, j.startTime - E);
      }
  }
  function w(E, j) {
    (y = !1), v && ((v = !1), g(P), (P = -1)), (m = !0);
    var _ = d;
    try {
      for (
        p(j), f = n(a);
        f !== null && (!(f.expirationTime > j) || (E && !J()));

      ) {
        var R = f.callback;
        if (typeof R == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var H = R(f.expirationTime <= j);
          (j = e.unstable_now()),
            typeof H == "function" ? (f.callback = H) : f === n(a) && r(a),
            p(j);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Qt = !0;
      else {
        var qe = n(u);
        qe !== null && Je(x, qe.startTime - j), (Qt = !1);
      }
      return Qt;
    } finally {
      (f = null), (d = _), (m = !1);
    }
  }
  var C = !1,
    k = null,
    P = -1,
    N = 5,
    A = -1;
  function J() {
    return !(e.unstable_now() - A < N);
  }
  function we() {
    if (k !== null) {
      var E = e.unstable_now();
      A = E;
      var j = !0;
      try {
        j = k(!0, E);
      } finally {
        j ? Se() : ((C = !1), (k = null));
      }
    } else C = !1;
  }
  var Se;
  if (typeof h == "function")
    Se = function () {
      h(we);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      b = q.port2;
    (q.port1.onmessage = we),
      (Se = function () {
        b.postMessage(null);
      });
  } else
    Se = function () {
      T(we, 0);
    };
  function Fe(E) {
    (k = E), C || ((C = !0), Se());
  }
  function Je(E, j) {
    P = T(function () {
      E(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Fe(w));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var _ = d;
      d = j;
      try {
        return E();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var _ = d;
      d = E;
      try {
        return j();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, _) {
      var R = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? R + _ : R))
          : (_ = R),
        E)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = _ + H),
        (E = {
          id: c++,
          callback: j,
          priorityLevel: E,
          startTime: _,
          expirationTime: H,
          sortIndex: -1,
        }),
        _ > R
          ? ((E.sortIndex = _),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (v ? (g(P), (P = -1)) : (v = !0), Je(x, _ - R)))
          : ((E.sortIndex = H), t(a, E), y || m || ((y = !0), Fe(w))),
        E
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (E) {
      var j = d;
      return function () {
        var _ = d;
        d = j;
        try {
          return E.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Pf);
Sf.exports = Pf;
var hm = Sf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kf = M,
  Re = hm;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cf = new Set(),
  Lr = {};
function hn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) Cf.add(t[e]);
}
var pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Vs = Object.prototype.hasOwnProperty,
  pm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ba = {},
  eu = {};
function mm(e) {
  return Vs.call(eu, e)
    ? !0
    : Vs.call(ba, e)
    ? !1
    : pm.test(e)
    ? (eu[e] = !0)
    : ((ba[e] = !0), !1);
}
function gm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ym(e, t, n, r) {
  if (t === null || typeof t > "u" || gm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function xe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Il = /[\-:]([a-z])/g;
function zl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Il, zl);
    ce[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Il, zl);
    ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Il, zl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bl(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ym(t, n, i, r) && (n = null),
    r || i === null
      ? mm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ii = Symbol.for("react.element"),
  xn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  Ul = Symbol.for("react.strict_mode"),
  Ds = Symbol.for("react.profiler"),
  Tf = Symbol.for("react.provider"),
  Ef = Symbol.for("react.context"),
  $l = Symbol.for("react.forward_ref"),
  Ms = Symbol.for("react.suspense"),
  As = Symbol.for("react.suspense_list"),
  Hl = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  Lf = Symbol.for("react.offscreen"),
  tu = Symbol.iterator;
function bn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tu && e[tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Ho;
function ur(e) {
  if (Ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = (t && t[1]) || "";
    }
  return (
    `
` +
    Ho +
    e
  );
}
var Wo = !1;
function Ko(e, t) {
  if (!e || Wo) return "";
  Wo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Wo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : "";
}
function vm(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ko(e.type, !1)), e;
    case 11:
      return (e = Ko(e.type.render, !1)), e;
    case 1:
      return (e = Ko(e.type, !0)), e;
    default:
      return "";
  }
}
function Rs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case xn:
      return "Portal";
    case Ds:
      return "Profiler";
    case Ul:
      return "StrictMode";
    case Ms:
      return "Suspense";
    case As:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ef:
        return (e.displayName || "Context") + ".Consumer";
      case Tf:
        return (e._context.displayName || "Context") + ".Provider";
      case $l:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hl:
        return (
          (t = e.displayName || null), t !== null ? t : Rs(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return Rs(e(t));
        } catch {}
    }
  return null;
}
function xm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Rs(t);
    case 8:
      return t === Ul ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Vf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function wm(e) {
  var t = Vf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function oi(e) {
  e._valueTracker || (e._valueTracker = wm(e));
}
function Df(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ns(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Mf(e, t) {
  (t = t.checked), t != null && Bl(e, "checked", t, !1);
}
function js(e, t) {
  Mf(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _s(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _s(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ru(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _s(e, t, n) {
  (t !== "number" || zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var cr = Array.isArray;
function _n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (cr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Af(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Rf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var si,
  Nf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        si = si || document.createElement("div"),
          si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sm = ["Webkit", "ms", "Moz", "O"];
Object.keys(pr).forEach(function (e) {
  Sm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pr[t] = pr[e]);
  });
});
function jf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pr.hasOwnProperty(e) && pr[e])
    ? ("" + t).trim()
    : t + "px";
}
function _f(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = jf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Pm = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Is(e, t) {
  if (t) {
    if (Pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function zs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Bs = null;
function Wl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Us = null,
  Fn = null,
  On = null;
function su(e) {
  if ((e = Zr(e))) {
    if (typeof Us != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = ko(t)), Us(e.stateNode, e.type, t));
  }
}
function Ff(e) {
  Fn ? (On ? On.push(e) : (On = [e])) : (Fn = e);
}
function Of() {
  if (Fn) {
    var e = Fn,
      t = On;
    if (((On = Fn = null), su(e), t)) for (e = 0; e < t.length; e++) su(t[e]);
  }
}
function If(e, t) {
  return e(t);
}
function zf() {}
var Go = !1;
function Bf(e, t, n) {
  if (Go) return e(t, n);
  Go = !0;
  try {
    return If(e, t, n);
  } finally {
    (Go = !1), (Fn !== null || On !== null) && (zf(), Of());
  }
}
function Dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ko(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var $s = !1;
if (pt)
  try {
    var er = {};
    Object.defineProperty(er, "passive", {
      get: function () {
        $s = !0;
      },
    }),
      window.addEventListener("test", er, er),
      window.removeEventListener("test", er, er);
  } catch {
    $s = !1;
  }
function km(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mr = !1,
  Bi = null,
  Ui = !1,
  Hs = null,
  Cm = {
    onError: function (e) {
      (mr = !0), (Bi = e);
    },
  };
function Tm(e, t, n, r, i, o, s, l, a) {
  (mr = !1), (Bi = null), km.apply(Cm, arguments);
}
function Em(e, t, n, r, i, o, s, l, a) {
  if ((Tm.apply(this, arguments), mr)) {
    if (mr) {
      var u = Bi;
      (mr = !1), (Bi = null);
    } else throw Error(S(198));
    Ui || ((Ui = !0), (Hs = u));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Uf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function lu(e) {
  if (pn(e) !== e) throw Error(S(188));
}
function Lm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return lu(i), e;
        if (o === r) return lu(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function $f(e) {
  return (e = Lm(e)), e !== null ? Hf(e) : null;
}
function Hf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wf = Re.unstable_scheduleCallback,
  au = Re.unstable_cancelCallback,
  Vm = Re.unstable_shouldYield,
  Dm = Re.unstable_requestPaint,
  ee = Re.unstable_now,
  Mm = Re.unstable_getCurrentPriorityLevel,
  Kl = Re.unstable_ImmediatePriority,
  Kf = Re.unstable_UserBlockingPriority,
  $i = Re.unstable_NormalPriority,
  Am = Re.unstable_LowPriority,
  Gf = Re.unstable_IdlePriority,
  xo = null,
  rt = null;
function Rm(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(xo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : _m,
  Nm = Math.log,
  jm = Math.LN2;
function _m(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Nm(e) / jm) | 0)) | 0;
}
var li = 64,
  ai = 4194304;
function fr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = fr(l)) : ((o &= s), o !== 0 && (r = fr(o)));
  } else (s = n & ~i), s !== 0 ? (r = fr(s)) : o !== 0 && (r = fr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ye(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Fm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Om(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ye(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Fm(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ws(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qf() {
  var e = li;
  return (li <<= 1), !(li & 4194240) && (li = 64), e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n);
}
function Im(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ye(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Gl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var I = 0;
function Yf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xf,
  Ql,
  Zf,
  Jf,
  qf,
  Ks = !1,
  ui = [],
  Dt = null,
  Mt = null,
  At = null,
  Mr = new Map(),
  Ar = new Map(),
  Tt = [],
  zm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      Mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function tr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Zr(t)), t !== null && Ql(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Bm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Dt = tr(Dt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Mt = tr(Mt, e, t, n, r, i)), !0;
    case "mouseover":
      return (At = tr(At, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Mr.set(o, tr(Mr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ar.set(o, tr(Ar.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function bf(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Uf(n)), t !== null)) {
          (e.blockedOn = t),
            qf(e.priority, function () {
              Zf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Li(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bs = r), n.target.dispatchEvent(r), (Bs = null);
    } else return (t = Zr(n)), t !== null && Ql(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cu(e, t, n) {
  Li(e) && n.delete(t);
}
function Um() {
  (Ks = !1),
    Dt !== null && Li(Dt) && (Dt = null),
    Mt !== null && Li(Mt) && (Mt = null),
    At !== null && Li(At) && (At = null),
    Mr.forEach(cu),
    Ar.forEach(cu);
}
function nr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ks ||
      ((Ks = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Um)));
}
function Rr(e) {
  function t(i) {
    return nr(i, e);
  }
  if (0 < ui.length) {
    nr(ui[0], e);
    for (var n = 1; n < ui.length; n++) {
      var r = ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dt !== null && nr(Dt, e),
      Mt !== null && nr(Mt, e),
      At !== null && nr(At, e),
      Mr.forEach(t),
      Ar.forEach(t),
      n = 0;
    n < Tt.length;
    n++
  )
    (r = Tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
    bf(n), n.blockedOn === null && Tt.shift();
}
var In = xt.ReactCurrentBatchConfig,
  Wi = !0;
function $m(e, t, n, r) {
  var i = I,
    o = In.transition;
  In.transition = null;
  try {
    (I = 1), Yl(e, t, n, r);
  } finally {
    (I = i), (In.transition = o);
  }
}
function Hm(e, t, n, r) {
  var i = I,
    o = In.transition;
  In.transition = null;
  try {
    (I = 4), Yl(e, t, n, r);
  } finally {
    (I = i), (In.transition = o);
  }
}
function Yl(e, t, n, r) {
  if (Wi) {
    var i = Gs(e, t, n, r);
    if (i === null) rs(e, t, r, Ki, n), uu(e, r);
    else if (Bm(i, e, t, n, r)) r.stopPropagation();
    else if ((uu(e, r), t & 4 && -1 < zm.indexOf(e))) {
      for (; i !== null; ) {
        var o = Zr(i);
        if (
          (o !== null && Xf(o),
          (o = Gs(e, t, n, r)),
          o === null && rs(e, t, r, Ki, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else rs(e, t, r, null, n);
  }
}
var Ki = null;
function Gs(e, t, n, r) {
  if (((Ki = null), (e = Wl(r)), (e = tn(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Uf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ki = e), null;
}
function ed(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Mm()) {
        case Kl:
          return 1;
        case Kf:
          return 4;
        case $i:
        case Am:
          return 16;
        case Gf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  Xl = null,
  Vi = null;
function td() {
  if (Vi) return Vi;
  var e,
    t = Xl,
    n = t.length,
    r,
    i = "value" in Lt ? Lt.value : Lt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Vi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Di(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ci() {
  return !0;
}
function fu() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ci
        : fu),
      (this.isPropagationStopped = fu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ci));
      },
      persist: function () {},
      isPersistent: ci,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zl = _e(Jn),
  Xr = Y({}, Jn, { view: 0, detail: 0 }),
  Wm = _e(Xr),
  Yo,
  Xo,
  rr,
  wo = Y({}, Xr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== rr &&
            (rr && e.type === "mousemove"
              ? ((Yo = e.screenX - rr.screenX), (Xo = e.screenY - rr.screenY))
              : (Xo = Yo = 0),
            (rr = e)),
          Yo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xo;
    },
  }),
  du = _e(wo),
  Km = Y({}, wo, { dataTransfer: 0 }),
  Gm = _e(Km),
  Qm = Y({}, Xr, { relatedTarget: 0 }),
  Zo = _e(Qm),
  Ym = Y({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xm = _e(Ym),
  Zm = Y({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jm = _e(Zm),
  qm = Y({}, Jn, { data: 0 }),
  hu = _e(qm),
  bm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  eg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ng(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tg[e]) ? !!t[e] : !1;
}
function Jl() {
  return ng;
}
var rg = Y({}, Xr, {
    key: function (e) {
      if (e.key) {
        var t = bm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? eg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jl,
    charCode: function (e) {
      return e.type === "keypress" ? Di(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Di(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ig = _e(rg),
  og = Y({}, wo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  pu = _e(og),
  sg = Y({}, Xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl,
  }),
  lg = _e(sg),
  ag = Y({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ug = _e(ag),
  cg = Y({}, wo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fg = _e(cg),
  dg = [9, 13, 27, 32],
  ql = pt && "CompositionEvent" in window,
  gr = null;
pt && "documentMode" in document && (gr = document.documentMode);
var hg = pt && "TextEvent" in window && !gr,
  nd = pt && (!ql || (gr && 8 < gr && 11 >= gr)),
  mu = String.fromCharCode(32),
  gu = !1;
function rd(e, t) {
  switch (e) {
    case "keyup":
      return dg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function id(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function pg(e, t) {
  switch (e) {
    case "compositionend":
      return id(t);
    case "keypress":
      return t.which !== 32 ? null : ((gu = !0), mu);
    case "textInput":
      return (e = t.data), e === mu && gu ? null : e;
    default:
      return null;
  }
}
function mg(e, t) {
  if (Sn)
    return e === "compositionend" || (!ql && rd(e, t))
      ? ((e = td()), (Vi = Xl = Lt = null), (Sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gg[e.type] : t === "textarea";
}
function od(e, t, n, r) {
  Ff(r),
    (t = Gi(t, "onChange")),
    0 < t.length &&
      ((n = new Zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yr = null,
  Nr = null;
function yg(e) {
  gd(e, 0);
}
function So(e) {
  var t = Cn(e);
  if (Df(t)) return e;
}
function vg(e, t) {
  if (e === "change") return t;
}
var sd = !1;
if (pt) {
  var Jo;
  if (pt) {
    var qo = "oninput" in document;
    if (!qo) {
      var vu = document.createElement("div");
      vu.setAttribute("oninput", "return;"),
        (qo = typeof vu.oninput == "function");
    }
    Jo = qo;
  } else Jo = !1;
  sd = Jo && (!document.documentMode || 9 < document.documentMode);
}
function xu() {
  yr && (yr.detachEvent("onpropertychange", ld), (Nr = yr = null));
}
function ld(e) {
  if (e.propertyName === "value" && So(Nr)) {
    var t = [];
    od(t, Nr, e, Wl(e)), Bf(yg, t);
  }
}
function xg(e, t, n) {
  e === "focusin"
    ? (xu(), (yr = t), (Nr = n), yr.attachEvent("onpropertychange", ld))
    : e === "focusout" && xu();
}
function wg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return So(Nr);
}
function Sg(e, t) {
  if (e === "click") return So(t);
}
function Pg(e, t) {
  if (e === "input" || e === "change") return So(t);
}
function kg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : kg;
function jr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Vs.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Su(e, t) {
  var n = wu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = wu(n);
  }
}
function ad(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ad(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ud() {
  for (var e = window, t = zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zi(e.document);
  }
  return t;
}
function bl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Cg(e) {
  var t = ud(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ad(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Su(n, o));
        var s = Su(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Tg = pt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  Qs = null,
  vr = null,
  Ys = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ys ||
    Pn == null ||
    Pn !== zi(r) ||
    ((r = Pn),
    "selectionStart" in r && bl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vr && jr(vr, r)) ||
      ((vr = r),
      (r = Gi(Qs, "onSelect")),
      0 < r.length &&
        ((t = new Zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: fi("Animation", "AnimationEnd"),
    animationiteration: fi("Animation", "AnimationIteration"),
    animationstart: fi("Animation", "AnimationStart"),
    transitionend: fi("Transition", "TransitionEnd"),
  },
  bo = {},
  cd = {};
pt &&
  ((cd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function Po(e) {
  if (bo[e]) return bo[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cd) return (bo[e] = t[n]);
  return e;
}
var fd = Po("animationend"),
  dd = Po("animationiteration"),
  hd = Po("animationstart"),
  pd = Po("transitionend"),
  md = new Map(),
  ku =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ht(e, t) {
  md.set(e, t), hn(t, [e]);
}
for (var es = 0; es < ku.length; es++) {
  var ts = ku[es],
    Eg = ts.toLowerCase(),
    Lg = ts[0].toUpperCase() + ts.slice(1);
  Ht(Eg, "on" + Lg);
}
Ht(fd, "onAnimationEnd");
Ht(dd, "onAnimationIteration");
Ht(hd, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(pd, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Vg = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function Cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Em(r, t, void 0, e), (e.currentTarget = null);
}
function gd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Cu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Cu(i, l, u), (o = a);
        }
    }
  }
  if (Ui) throw ((e = Hs), (Ui = !1), (Hs = null), e);
}
function B(e, t) {
  var n = t[bs];
  n === void 0 && (n = t[bs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yd(t, e, 2, !1), n.add(r));
}
function ns(e, t, n) {
  var r = 0;
  t && (r |= 4), yd(n, e, r, t);
}
var di = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[di]) {
    (e[di] = !0),
      Cf.forEach(function (n) {
        n !== "selectionchange" && (Vg.has(n) || ns(n, !1, e), ns(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[di] || ((t[di] = !0), ns("selectionchange", !1, t));
  }
}
function yd(e, t, n, r) {
  switch (ed(t)) {
    case 1:
      var i = $m;
      break;
    case 4:
      i = Hm;
      break;
    default:
      i = Yl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !$s ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function rs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = tn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Bf(function () {
    var u = o,
      c = Wl(n),
      f = [];
    e: {
      var d = md.get(e);
      if (d !== void 0) {
        var m = Zl,
          y = e;
        switch (e) {
          case "keypress":
            if (Di(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = ig;
            break;
          case "focusin":
            (y = "focus"), (m = Zo);
            break;
          case "focusout":
            (y = "blur"), (m = Zo);
            break;
          case "beforeblur":
          case "afterblur":
            m = Zo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Gm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = lg;
            break;
          case fd:
          case dd:
          case hd:
            m = Xm;
            break;
          case pd:
            m = ug;
            break;
          case "scroll":
            m = Wm;
            break;
          case "wheel":
            m = fg;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Jm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = pu;
        }
        var v = (t & 4) !== 0,
          T = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              g !== null && ((x = Dr(h, g)), x != null && v.push(Fr(h, x, p)))),
            T)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Bs &&
            (y = n.relatedTarget || n.fromElement) &&
            (tn(y) || y[mt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? tn(y) : null),
              y !== null &&
                ((T = pn(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = du),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = pu),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (T = m == null ? d : Cn(m)),
            (p = y == null ? d : Cn(y)),
            (d = new v(x, h + "leave", m, n, c)),
            (d.target = T),
            (d.relatedTarget = p),
            (x = null),
            tn(c) === u &&
              ((v = new v(g, h + "enter", y, n, c)),
              (v.target = p),
              (v.relatedTarget = T),
              (x = v)),
            (T = x),
            m && y)
          )
            t: {
              for (v = m, g = y, h = 0, p = v; p; p = vn(p)) h++;
              for (p = 0, x = g; x; x = vn(x)) p++;
              for (; 0 < h - p; ) (v = vn(v)), h--;
              for (; 0 < p - h; ) (g = vn(g)), p--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = vn(v)), (g = vn(g));
              }
              v = null;
            }
          else v = null;
          m !== null && Tu(f, d, m, v, !1),
            y !== null && T !== null && Tu(f, T, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Cn(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var w = vg;
        else if (yu(d))
          if (sd) w = Pg;
          else {
            w = wg;
            var C = xg;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = Sg);
        if (w && (w = w(e, u))) {
          od(f, w, n, c);
          break e;
        }
        C && C(e, d, u),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            _s(d, "number", d.value);
      }
      switch (((C = u ? Cn(u) : window), e)) {
        case "focusin":
          (yu(C) || C.contentEditable === "true") &&
            ((Pn = C), (Qs = u), (vr = null));
          break;
        case "focusout":
          vr = Qs = Pn = null;
          break;
        case "mousedown":
          Ys = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ys = !1), Pu(f, n, c);
          break;
        case "selectionchange":
          if (Tg) break;
        case "keydown":
        case "keyup":
          Pu(f, n, c);
      }
      var k;
      if (ql)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Sn
          ? rd(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (nd &&
          n.locale !== "ko" &&
          (Sn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Sn && (k = td())
            : ((Lt = c),
              (Xl = "value" in Lt ? Lt.value : Lt.textContent),
              (Sn = !0))),
        (C = Gi(u, P)),
        0 < C.length &&
          ((P = new hu(P, e, null, n, c)),
          f.push({ event: P, listeners: C }),
          k ? (P.data = k) : ((k = id(n)), k !== null && (P.data = k)))),
        (k = hg ? pg(e, n) : mg(e, n)) &&
          ((u = Gi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new hu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    gd(f, t);
  });
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Dr(e, n)),
      o != null && r.unshift(Fr(e, o, i)),
      (o = Dr(e, t)),
      o != null && r.push(Fr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Dr(n, o)), a != null && s.unshift(Fr(n, a, l)))
        : i || ((a = Dr(n, o)), a != null && s.push(Fr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Dg = /\r\n?/g,
  Mg = /\u0000|\uFFFD/g;
function Eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dg,
      `
`
    )
    .replace(Mg, "");
}
function hi(e, t, n) {
  if (((t = Eu(t)), Eu(e) !== t && n)) throw Error(S(425));
}
function Qi() {}
var Xs = null,
  Zs = null;
function Js(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qs = typeof setTimeout == "function" ? setTimeout : void 0,
  Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lu = typeof Promise == "function" ? Promise : void 0,
  Rg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lu < "u"
      ? function (e) {
          return Lu.resolve(null).then(e).catch(Ng);
        }
      : qs;
function Ng(e) {
  setTimeout(function () {
    throw e;
  });
}
function is(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Rr(t);
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qn = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + qn,
  Or = "__reactProps$" + qn,
  mt = "__reactContainer$" + qn,
  bs = "__reactEvents$" + qn,
  jg = "__reactListeners$" + qn,
  _g = "__reactHandles$" + qn;
function tn(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vu(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = Vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[nt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function ko(e) {
  return e[Or] || null;
}
var el = [],
  Tn = -1;
function Wt(e) {
  return { current: e };
}
function U(e) {
  0 > Tn || ((e.current = el[Tn]), (el[Tn] = null), Tn--);
}
function z(e, t) {
  Tn++, (el[Tn] = e.current), (e.current = t);
}
var Bt = {},
  pe = Wt(Bt),
  Ce = Wt(!1),
  an = Bt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Yi() {
  U(Ce), U(pe);
}
function Du(e, t, n) {
  if (pe.current !== Bt) throw Error(S(168));
  z(pe, t), z(Ce, n);
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, xm(e) || "Unknown", i));
  return Y({}, n, r);
}
function Xi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (an = pe.current),
    z(pe, e),
    z(Ce, Ce.current),
    !0
  );
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = vd(e, t, an)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Ce),
      U(pe),
      z(pe, e))
    : U(Ce),
    z(Ce, n);
}
var lt = null,
  Co = !1,
  os = !1;
function xd(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function Fg(e) {
  (Co = !0), xd(e);
}
function Kt() {
  if (!os && lt !== null) {
    os = !0;
    var e = 0,
      t = I;
    try {
      var n = lt;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (Co = !1);
    } catch (i) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Wf(Kl, Kt), i);
    } finally {
      (I = t), (os = !1);
    }
  }
  return null;
}
var En = [],
  Ln = 0,
  Zi = null,
  Ji = 0,
  Ie = [],
  ze = 0,
  un = null,
  at = 1,
  ut = "";
function Jt(e, t) {
  (En[Ln++] = Ji), (En[Ln++] = Zi), (Zi = e), (Ji = t);
}
function wd(e, t, n) {
  (Ie[ze++] = at), (Ie[ze++] = ut), (Ie[ze++] = un), (un = e);
  var r = at;
  e = ut;
  var i = 32 - Ye(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ye(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (at = (1 << (32 - Ye(t) + i)) | (n << i) | r),
      (ut = o + e);
  } else (at = (1 << o) | (n << i) | r), (ut = e);
}
function ea(e) {
  e.return !== null && (Jt(e, 1), wd(e, 1, 0));
}
function ta(e) {
  for (; e === Zi; )
    (Zi = En[--Ln]), (En[Ln] = null), (Ji = En[--Ln]), (En[Ln] = null);
  for (; e === un; )
    (un = Ie[--ze]),
      (Ie[ze] = null),
      (ut = Ie[--ze]),
      (Ie[ze] = null),
      (at = Ie[--ze]),
      (Ie[ze] = null);
}
var Ae = null,
  Me = null,
  W = !1,
  Qe = null;
function Sd(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Me = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: at, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function tl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nl(e) {
  if (W) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Au(e, t)) {
        if (tl(e)) throw Error(S(418));
        t = Rt(n.nextSibling);
        var r = Ae;
        t && Au(e, t)
          ? Sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ae = e));
      }
    } else {
      if (tl(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Ae = e);
    }
  }
}
function Ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function pi(e) {
  if (e !== Ae) return !1;
  if (!W) return Ru(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Js(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (tl(e)) throw (Pd(), Error(S(418)));
    for (; t; ) Sd(e, t), (t = Rt(t.nextSibling));
  }
  if ((Ru(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ae ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Pd() {
  for (var e = Me; e; ) e = Rt(e.nextSibling);
}
function Hn() {
  (Me = Ae = null), (W = !1);
}
function na(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var Og = xt.ReactCurrentBatchConfig;
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var qi = Wt(null),
  bi = null,
  Vn = null,
  ra = null;
function ia() {
  ra = Vn = bi = null;
}
function oa(e) {
  var t = qi.current;
  U(qi), (e._currentValue = t);
}
function rl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  (bi = e),
    (ra = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function $e(e) {
  var t = e._currentValue;
  if (ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (bi === null) throw Error(S(308));
      (Vn = e), (bi.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var nn = null;
function sa(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function kd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), sa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function la(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), sa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function eo(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              kt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (fn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var Td = new kf.Component().refs;
function il(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var To = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = _t(e),
      o = ft(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Xe(t, e, i, r), Mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = _t(e),
      o = ft(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Xe(t, e, i, r), Mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = _t(e),
      i = ft(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Nt(e, i, r)),
      t !== null && (Xe(t, e, r, n), Mi(t, e, r));
  },
};
function _u(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !jr(n, r) || !jr(i, o)
      : !0
  );
}
function Ed(e, t, n) {
  var r = !1,
    i = Bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = $e(o))
      : ((i = Te(t) ? an : pe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? $n(e, i) : Bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = To),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Fu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && To.enqueueReplaceState(t, t.state, null);
}
function ol(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Td), la(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = $e(o))
    : ((o = Te(t) ? an : pe.current), (i.context = $n(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (il(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && To.enqueueReplaceState(i, i.state, null),
      eo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Td && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function mi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ou(e) {
  var t = e._init;
  return t(e._payload);
}
function Ld(e) {
  function t(g, h) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [h]), (g.flags |= 16)) : p.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function i(g, h) {
    return (g = Ft(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, h, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((g.flags |= 2), h) : p)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, p, x) {
    return h === null || h.tag !== 6
      ? ((h = ds(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function a(g, h, p, x) {
    var w = p.type;
    return w === wn
      ? c(g, h, p.props.children, x, p.key)
      : h !== null &&
        (h.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Pt &&
            Ou(w) === h.type))
      ? ((x = i(h, p.props)), (x.ref = ir(g, h, p)), (x.return = g), x)
      : ((x = Fi(p.type, p.key, p.props, null, g.mode, x)),
        (x.ref = ir(g, h, p)),
        (x.return = g),
        x);
  }
  function u(g, h, p, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = hs(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p.children || [])), (h.return = g), h);
  }
  function c(g, h, p, x, w) {
    return h === null || h.tag !== 7
      ? ((h = ln(p, g.mode, x, w)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function f(g, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ds("" + h, g.mode, p)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ii:
          return (
            (p = Fi(h.type, h.key, h.props, null, g.mode, p)),
            (p.ref = ir(g, null, h)),
            (p.return = g),
            p
          );
        case xn:
          return (h = hs(h, g.mode, p)), (h.return = g), h;
        case Pt:
          var x = h._init;
          return f(g, x(h._payload), p);
      }
      if (cr(h) || bn(h))
        return (h = ln(h, g.mode, p, null)), (h.return = g), h;
      mi(g, h);
    }
    return null;
  }
  function d(g, h, p, x) {
    var w = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return w !== null ? null : l(g, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ii:
          return p.key === w ? a(g, h, p, x) : null;
        case xn:
          return p.key === w ? u(g, h, p, x) : null;
        case Pt:
          return (w = p._init), d(g, h, w(p._payload), x);
      }
      if (cr(p) || bn(p)) return w !== null ? null : c(g, h, p, x, null);
      mi(g, p);
    }
    return null;
  }
  function m(g, h, p, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(p) || null), l(h, g, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ii:
          return (g = g.get(x.key === null ? p : x.key) || null), a(h, g, x, w);
        case xn:
          return (g = g.get(x.key === null ? p : x.key) || null), u(h, g, x, w);
        case Pt:
          var C = x._init;
          return m(g, h, p, C(x._payload), w);
      }
      if (cr(x) || bn(x)) return (g = g.get(p) || null), c(h, g, x, w, null);
      mi(h, x);
    }
    return null;
  }
  function y(g, h, p, x) {
    for (
      var w = null, C = null, k = h, P = (h = 0), N = null;
      k !== null && P < p.length;
      P++
    ) {
      k.index > P ? ((N = k), (k = null)) : (N = k.sibling);
      var A = d(g, k, p[P], x);
      if (A === null) {
        k === null && (k = N);
        break;
      }
      e && k && A.alternate === null && t(g, k),
        (h = o(A, h, P)),
        C === null ? (w = A) : (C.sibling = A),
        (C = A),
        (k = N);
    }
    if (P === p.length) return n(g, k), W && Jt(g, P), w;
    if (k === null) {
      for (; P < p.length; P++)
        (k = f(g, p[P], x)),
          k !== null &&
            ((h = o(k, h, P)), C === null ? (w = k) : (C.sibling = k), (C = k));
      return W && Jt(g, P), w;
    }
    for (k = r(g, k); P < p.length; P++)
      (N = m(k, g, P, p[P], x)),
        N !== null &&
          (e && N.alternate !== null && k.delete(N.key === null ? P : N.key),
          (h = o(N, h, P)),
          C === null ? (w = N) : (C.sibling = N),
          (C = N));
    return (
      e &&
        k.forEach(function (J) {
          return t(g, J);
        }),
      W && Jt(g, P),
      w
    );
  }
  function v(g, h, p, x) {
    var w = bn(p);
    if (typeof w != "function") throw Error(S(150));
    if (((p = w.call(p)), p == null)) throw Error(S(151));
    for (
      var C = (w = null), k = h, P = (h = 0), N = null, A = p.next();
      k !== null && !A.done;
      P++, A = p.next()
    ) {
      k.index > P ? ((N = k), (k = null)) : (N = k.sibling);
      var J = d(g, k, A.value, x);
      if (J === null) {
        k === null && (k = N);
        break;
      }
      e && k && J.alternate === null && t(g, k),
        (h = o(J, h, P)),
        C === null ? (w = J) : (C.sibling = J),
        (C = J),
        (k = N);
    }
    if (A.done) return n(g, k), W && Jt(g, P), w;
    if (k === null) {
      for (; !A.done; P++, A = p.next())
        (A = f(g, A.value, x)),
          A !== null &&
            ((h = o(A, h, P)), C === null ? (w = A) : (C.sibling = A), (C = A));
      return W && Jt(g, P), w;
    }
    for (k = r(g, k); !A.done; P++, A = p.next())
      (A = m(k, g, P, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? P : A.key),
          (h = o(A, h, P)),
          C === null ? (w = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        k.forEach(function (we) {
          return t(g, we);
        }),
      W && Jt(g, P),
      w
    );
  }
  function T(g, h, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === wn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ii:
          e: {
            for (var w = p.key, C = h; C !== null; ) {
              if (C.key === w) {
                if (((w = p.type), w === wn)) {
                  if (C.tag === 7) {
                    n(g, C.sibling),
                      (h = i(C, p.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  C.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Pt &&
                    Ou(w) === C.type)
                ) {
                  n(g, C.sibling),
                    (h = i(C, p.props)),
                    (h.ref = ir(g, C, p)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, C);
                break;
              } else t(g, C);
              C = C.sibling;
            }
            p.type === wn
              ? ((h = ln(p.props.children, g.mode, x, p.key)),
                (h.return = g),
                (g = h))
              : ((x = Fi(p.type, p.key, p.props, null, g.mode, x)),
                (x.ref = ir(g, h, p)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case xn:
          e: {
            for (C = p.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(g, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = hs(p, g.mode, x)), (h.return = g), (g = h);
          }
          return s(g);
        case Pt:
          return (C = p._init), T(g, h, C(p._payload), x);
      }
      if (cr(p)) return y(g, h, p, x);
      if (bn(p)) return v(g, h, p, x);
      mi(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = i(h, p)), (h.return = g), (g = h))
          : (n(g, h), (h = ds(p, g.mode, x)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return T;
}
var Wn = Ld(!0),
  Vd = Ld(!1),
  Jr = {},
  it = Wt(Jr),
  Ir = Wt(Jr),
  zr = Wt(Jr);
function rn(e) {
  if (e === Jr) throw Error(S(174));
  return e;
}
function aa(e, t) {
  switch ((z(zr, t), z(Ir, e), z(it, Jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Os(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Os(t, e));
  }
  U(it), z(it, t);
}
function Kn() {
  U(it), U(Ir), U(zr);
}
function Dd(e) {
  rn(zr.current);
  var t = rn(it.current),
    n = Os(t, e.type);
  t !== n && (z(Ir, e), z(it, n));
}
function ua(e) {
  Ir.current === e && (U(it), U(Ir));
}
var K = Wt(0);
function to(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ss = [];
function ca() {
  for (var e = 0; e < ss.length; e++)
    ss[e]._workInProgressVersionPrimary = null;
  ss.length = 0;
}
var Ai = xt.ReactCurrentDispatcher,
  ls = xt.ReactCurrentBatchConfig,
  cn = 0,
  Q = null,
  re = null,
  se = null,
  no = !1,
  xr = !1,
  Br = 0,
  Ig = 0;
function fe() {
  throw Error(S(321));
}
function fa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function da(e, t, n, r, i, o) {
  if (
    ((cn = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ai.current = e === null || e.memoizedState === null ? $g : Hg),
    (e = n(r, i)),
    xr)
  ) {
    o = 0;
    do {
      if (((xr = !1), (Br = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (se = re = null),
        (t.updateQueue = null),
        (Ai.current = Wg),
        (e = n(r, i));
    } while (xr);
  }
  if (
    ((Ai.current = ro),
    (t = re !== null && re.next !== null),
    (cn = 0),
    (se = re = Q = null),
    (no = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function ha() {
  var e = Br !== 0;
  return (Br = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (Q.memoizedState = se = e) : (se = se.next = e), se;
}
function He() {
  if (re === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? Q.memoizedState : se.next;
  if (t !== null) (se = t), (re = e);
  else {
    if (e === null) throw Error(S(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      se === null ? (Q.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function as(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((cn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Q.lanes |= c),
          (fn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Ze(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Q.lanes |= o), (fn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function us(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ze(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Md() {}
function Ad(e, t) {
  var n = Q,
    r = He(),
    i = t(),
    o = !Ze(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    pa(jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $r(9, Nd.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(S(349));
    cn & 30 || Rd(n, t, i);
  }
  return i;
}
function Rd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), _d(t) && Fd(e);
}
function jd(e, t, n) {
  return n(function () {
    _d(t) && Fd(e);
  });
}
function _d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function Fd(e) {
  var t = gt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function Iu(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ug.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function $r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Od() {
  return He().memoizedState;
}
function Ri(e, t, n, r) {
  var i = et();
  (Q.flags |= e),
    (i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
}
function Eo(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((o = s.destroy), r !== null && fa(r, s.deps))) {
      i.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = $r(1 | t, n, o, r));
}
function zu(e, t) {
  return Ri(8390656, 8, e, t);
}
function pa(e, t) {
  return Eo(2048, 8, e, t);
}
function Id(e, t) {
  return Eo(4, 2, e, t);
}
function zd(e, t) {
  return Eo(4, 4, e, t);
}
function Bd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ud(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Eo(4, 4, Bd.bind(null, t, e), n)
  );
}
function ma() {}
function $d(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hd(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wd(e, t, n) {
  return cn & 21
    ? (Ze(n, t) || ((n = Qf()), (Q.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function zg(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ls.transition;
  ls.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (ls.transition = r);
  }
}
function Kd() {
  return He().memoizedState;
}
function Bg(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gd(e))
  )
    Qd(t, n);
  else if (((n = kd(e, t, n, r)), n !== null)) {
    var i = ye();
    Xe(n, e, r, i), Yd(n, t, r);
  }
}
function Ug(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gd(e)) Qd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ze(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), sa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = kd(e, t, i, r)),
      n !== null && ((i = ye()), Xe(n, e, r, i), Yd(n, t, r));
  }
}
function Gd(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Qd(e, t) {
  xr = no = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n);
  }
}
var ro = {
    readContext: $e,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  $g = {
    readContext: $e,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $e,
    useEffect: zu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ri(4194308, 4, Bd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bg.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Iu,
    useDebugValue: ma,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = Iu(!1),
        t = e[0];
      return (e = zg.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = et();
      if (W) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(S(349));
        cn & 30 || Rd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        zu(jd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $r(9, Nd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = et(),
        t = le.identifierPrefix;
      if (W) {
        var n = ut,
          r = at;
        (n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Br++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ig++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hg = {
    readContext: $e,
    useCallback: $d,
    useContext: $e,
    useEffect: pa,
    useImperativeHandle: Ud,
    useInsertionEffect: Id,
    useLayoutEffect: zd,
    useMemo: Hd,
    useReducer: as,
    useRef: Od,
    useState: function () {
      return as(Ur);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = He();
      return Wd(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = as(Ur)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Md,
    useSyncExternalStore: Ad,
    useId: Kd,
    unstable_isNewReconciler: !1,
  },
  Wg = {
    readContext: $e,
    useCallback: $d,
    useContext: $e,
    useEffect: pa,
    useImperativeHandle: Ud,
    useInsertionEffect: Id,
    useLayoutEffect: zd,
    useMemo: Hd,
    useReducer: us,
    useRef: Od,
    useState: function () {
      return us(Ur);
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = He();
      return re === null ? (t.memoizedState = e) : Wd(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = us(Ur)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Md,
    useSyncExternalStore: Ad,
    useId: Kd,
    unstable_isNewReconciler: !1,
  };
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += vm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Kg = typeof WeakMap == "function" ? WeakMap : Map;
function Xd(e, t, n) {
  (n = ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      oo || ((oo = !0), (gl = r)), sl(e, t);
    }),
    n
  );
}
function Zd(e, t, n) {
  (n = ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        sl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        sl(e, t),
          typeof r != "function" &&
            (jt === null ? (jt = new Set([this])) : jt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = oy.bind(null, e, t, n)), t.then(e, e));
}
function Uu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $u(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ft(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gg = xt.ReactCurrentOwner,
  ke = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Vd(t, null, n, r) : Wn(t, e.child, n, r);
}
function Hu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    zn(t, i),
    (r = da(e, t, n, r, o, i)),
    (n = ha()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && n && ea(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function Wu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ka(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jd(e, t, o, r, i))
      : ((e = Fi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : jr), n(s, r) && e.ref === t.ref)
    )
      return yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (jr(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), yt(e, t, i);
  }
  return ll(e, t, n, r, i);
}
function qd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Mn, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Mn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Mn, De),
        (De |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Mn, De),
      (De |= r);
  return ge(e, t, i, n), t.child;
}
function bd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ll(e, t, n, r, i) {
  var o = Te(n) ? an : pe.current;
  return (
    (o = $n(t, o)),
    zn(t, i),
    (n = da(e, t, n, r, o, i)),
    (r = ha()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : (W && r && ea(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function Ku(e, t, n, r, i) {
  if (Te(n)) {
    var o = !0;
    Xi(t);
  } else o = !1;
  if ((zn(t, i), t.stateNode === null))
    Ni(e, t), Ed(t, n, r), ol(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = $e(u))
      : ((u = Te(n) ? an : pe.current), (u = $n(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Fu(t, s, r, u)),
      (kt = !1);
    var d = t.memoizedState;
    (s.state = d),
      eo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ce.current || kt
        ? (typeof c == "function" && (il(t, n, c, r), (a = t.memoizedState)),
          (l = kt || _u(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Cd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ke(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = $e(a))
        : ((a = Te(n) ? an : pe.current), (a = $n(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Fu(t, s, r, a)),
      (kt = !1),
      (d = t.memoizedState),
      (s.state = d),
      eo(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Ce.current || kt
      ? (typeof m == "function" && (il(t, n, m, r), (y = t.memoizedState)),
        (u = kt || _u(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return al(e, t, n, r, o, i);
}
function al(e, t, n, r, i, o) {
  bd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Mu(t, n, !1), yt(e, t, o);
  (r = t.stateNode), (Gg.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Wn(t, e.child, null, o)), (t.child = Wn(t, null, l, o)))
      : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && Mu(t, n, !0),
    t.child
  );
}
function eh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Du(e, t.context, !1),
    aa(e, t.containerInfo);
}
function Gu(e, t, n, r, i) {
  return Hn(), na(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function cl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function th(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(K, i & 1),
    e === null)
  )
    return (
      nl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Do(s, r, 0, null)),
              (e = ln(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = cl(n)),
              (t.memoizedState = ul),
              e)
            : ga(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Qg(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ft(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Ft(l, o)) : ((o = ln(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? cl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ul),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ft(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ga(e, t) {
  return (
    (t = Do({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gi(e, t, n, r) {
  return (
    r !== null && na(r),
    Wn(t, e.child, null, n),
    (e = ga(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Qg(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cs(Error(S(422)))), gi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Do({ mode: "visible", children: r.children }, i, 0, null)),
        (o = ln(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Wn(t, e.child, null, s),
        (t.child.memoizedState = cl(s)),
        (t.memoizedState = ul),
        o);
  if (!(t.mode & 1)) return gi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(S(419))), (r = cs(o, r, void 0)), gi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), ke || l)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), gt(e, i), Xe(r, e, i, -1));
    }
    return Pa(), (r = cs(Error(S(421)))), gi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Me = Rt(i.nextSibling)),
      (Ae = t),
      (W = !0),
      (Qe = null),
      e !== null &&
        ((Ie[ze++] = at),
        (Ie[ze++] = ut),
        (Ie[ze++] = un),
        (at = e.id),
        (ut = e.overflow),
        (un = t)),
      (t = ga(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rl(e.return, t, n);
}
function fs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function nh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
        else if (e.tag === 19) Qu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && to(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          fs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && to(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        fs(t, !0, n, null, o);
        break;
      case "together":
        fs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ni(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Yg(e, t, n) {
  switch (t.tag) {
    case 3:
      eh(t), Hn();
      break;
    case 5:
      Dd(t);
      break;
    case 1:
      Te(t.type) && Xi(t);
      break;
    case 4:
      aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(qi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? th(e, t, n)
          : (z(K, K.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      z(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qd(e, t, n);
  }
  return yt(e, t, n);
}
var rh, fl, ih, oh;
rh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
fl = function () {};
ih = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(it.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ns(e, i)), (r = Ns(e, r)), (o = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Fs(e, i)), (r = Fs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qi);
    }
    Is(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Lr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Lr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && B("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
oh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Xg(e, t, n) {
  var r = t.pendingProps;
  switch ((ta(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Te(t.type) && Yi(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        U(Ce),
        U(pe),
        ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (xl(Qe), (Qe = null)))),
        fl(e, t),
        de(t),
        null
      );
    case 5:
      ua(t);
      var i = rn(zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ih(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return de(t), null;
        }
        if (((e = rn(it.current)), pi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[nt] = t), (r[Or] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < dr.length; i++) B(dr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              nu(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              iu(r, o), B("invalid", r);
          }
          Is(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Lr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              oi(r), ru(r, o, !0);
              break;
            case "textarea":
              oi(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Qi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Rf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nt] = t),
            (e[Or] = r),
            rh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = zs(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < dr.length; i++) B(dr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                nu(e, r), (i = Ns(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                iu(e, r), (i = Fs(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            Is(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? _f(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Nf(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Vr(e, a)
                    : typeof a == "number" && Vr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Lr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && B("scroll", e)
                      : a != null && Bl(e, o, a, s));
              }
            switch (n) {
              case "input":
                oi(e), ru(e, r, !1);
                break;
              case "textarea":
                oi(e), ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? _n(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      _n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Qi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) oh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = rn(zr.current)), rn(it.current), pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (o = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (U(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Me !== null && t.mode & 1 && !(t.flags & 128))
          Pd(), Hn(), (t.flags |= 98560), (o = !1);
        else if (((o = pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[nt] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else Qe !== null && (xl(Qe), (Qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ie === 0 && (ie = 3) : Pa())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Kn(), fl(e, t), e === null && _r(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return oa(t.type._context), de(t), null;
    case 17:
      return Te(t.type) && Yi(), de(t), null;
    case 19:
      if ((U(K), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) or(o, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = to(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    or(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Qn &&
            ((t.flags |= 128), (r = !0), or(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = to(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              or(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !W)
            )
              return de(t), null;
          } else
            2 * ee() - o.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), or(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          z(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Zg(e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Yi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        U(Ce),
        U(pe),
        ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ua(t), null;
    case 13:
      if ((U(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(K), null;
    case 4:
      return Kn(), null;
    case 10:
      return oa(t.type._context), null;
    case 22:
    case 23:
      return Sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yi = !1,
  he = !1,
  Jg = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function dl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Yu = !1;
function qg(e, t) {
  if (((Xs = Wi), (e = ud()), bl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zs = { focusedElem: e, selectionRange: n }, Wi = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    T = y.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ke(t.type, v),
                      T
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (x) {
          X(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = Yu), (Yu = !1), y;
}
function wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && dl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function hl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function sh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Or], delete t[bs], delete t[jg], delete t[_g])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pl(e, t, n), e = e.sibling; e !== null; ) pl(e, t, n), (e = e.sibling);
}
function ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ml(e, t, n), e = e.sibling; e !== null; ) ml(e, t, n), (e = e.sibling);
}
var ae = null,
  Ge = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) ah(e, t, n), (n = n.sibling);
}
function ah(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(xo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || Dn(n, t);
    case 6:
      var r = ae,
        i = Ge;
      (ae = null),
        wt(e, t, n),
        (ae = r),
        (Ge = i),
        ae !== null &&
          (Ge
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Ge
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? is(e.parentNode, n)
              : e.nodeType === 1 && is(e, n),
            Rr(e))
          : is(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = Ge),
        (ae = n.stateNode.containerInfo),
        (Ge = !0),
        wt(e, t, n),
        (ae = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && dl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !he &&
        (Dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), wt(e, t, n), (he = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function Zu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jg()),
      t.forEach(function (r) {
        var i = ly.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Ge = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(S(160));
        ah(o, s, i), (ae = null), (Ge = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) uh(t, e), (t = t.sibling);
}
function uh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), be(e), r & 4)) {
        try {
          wr(3, e, e.return), Lo(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          wr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      We(t, e), be(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (
        (We(t, e),
        be(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Vr(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Mf(i, o),
              zs(l, s);
            var u = zs(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? _f(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Nf(i, f)
                : c === "children"
                ? Vr(i, f)
                : Bl(i, c, f, u);
            }
            switch (l) {
              case "input":
                js(i, o);
                break;
              case "textarea":
                Af(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? _n(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? _n(i, !!o.multiple, o.defaultValue, !0)
                      : _n(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Or] = o;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((We(t, e), be(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      We(t, e), be(e);
      break;
    case 13:
      We(t, e),
        be(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xa = ee())),
        r & 4 && Zu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (u = he) || c), We(t, e), (he = u)) : We(t, e),
        be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wr(4, d, d.return);
                  break;
                case 1:
                  Dn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Dn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    qu(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (L = m)) : qu(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = jf("display", s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      We(t, e), be(e), r & 4 && Zu(e);
      break;
    case 21:
      break;
    default:
      We(t, e), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Vr(i, ""), (r.flags &= -33));
          var o = Xu(e);
          ml(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Xu(e);
          pl(e, l, s);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bg(e, t, n) {
  (L = e), ch(e);
}
function ch(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || yi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || he;
        l = yi;
        var u = he;
        if (((yi = s), (he = a) && !u))
          for (L = i; L !== null; )
            (s = L),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? bu(i)
                : a !== null
                ? ((a.return = s), (L = a))
                : bu(i);
        for (; o !== null; ) (L = o), ch(o), (o = o.sibling);
        (L = i), (yi = l), (he = u);
      }
      Ju(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : Ju(e);
  }
}
function Ju(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ju(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ju(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Rr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        he || (t.flags & 512 && hl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function qu(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function bu(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            hl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            hl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var ey = Math.ceil,
  io = xt.ReactCurrentDispatcher,
  ya = xt.ReactCurrentOwner,
  Ue = xt.ReactCurrentBatchConfig,
  O = 0,
  le = null,
  ne = null,
  ue = 0,
  De = 0,
  Mn = Wt(0),
  ie = 0,
  Hr = null,
  fn = 0,
  Vo = 0,
  va = 0,
  Sr = null,
  Pe = null,
  xa = 0,
  Qn = 1 / 0,
  st = null,
  oo = !1,
  gl = null,
  jt = null,
  vi = !1,
  Vt = null,
  so = 0,
  Pr = 0,
  yl = null,
  ji = -1,
  _i = 0;
function ye() {
  return O & 6 ? ee() : ji !== -1 ? ji : (ji = ee());
}
function _t(e) {
  return e.mode & 1
    ? O & 2 && ue !== 0
      ? ue & -ue
      : Og.transition !== null
      ? (_i === 0 && (_i = Qf()), _i)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ed(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < Pr) throw ((Pr = 0), (yl = null), Error(S(185)));
  Yr(e, n, r),
    (!(O & 2) || e !== le) &&
      (e === le && (!(O & 2) && (Vo |= n), ie === 4 && Et(e, ue)),
      Ee(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((Qn = ee() + 500), Co && Kt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Om(e, t);
  var r = Hi(e, e === le ? ue : 0);
  if (r === 0)
    n !== null && au(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && au(n), t === 1))
      e.tag === 0 ? Fg(ec.bind(null, e)) : xd(ec.bind(null, e)),
        Rg(function () {
          !(O & 6) && Kt();
        }),
        (n = null);
    else {
      switch (Yf(r)) {
        case 1:
          n = Kl;
          break;
        case 4:
          n = Kf;
          break;
        case 16:
          n = $i;
          break;
        case 536870912:
          n = Gf;
          break;
        default:
          n = $i;
      }
      n = vh(n, fh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fh(e, t) {
  if (((ji = -1), (_i = 0), O & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (Bn() && e.callbackNode !== n) return null;
  var r = Hi(e, e === le ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = lo(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = hh();
    (le !== e || ue !== t) && ((st = null), (Qn = ee() + 500), sn(e, t));
    do
      try {
        ry();
        break;
      } catch (l) {
        dh(e, l);
      }
    while (1);
    ia(),
      (io.current = o),
      (O = i),
      ne !== null ? (t = 0) : ((le = null), (ue = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ws(e)), i !== 0 && ((r = i), (t = vl(e, i)))), t === 1)
    )
      throw ((n = Hr), sn(e, 0), Et(e, r), Ee(e, ee()), n);
    if (t === 6) Et(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ty(i) &&
          ((t = lo(e, r)),
          t === 2 && ((o = Ws(e)), o !== 0 && ((r = o), (t = vl(e, o)))),
          t === 1))
      )
        throw ((n = Hr), sn(e, 0), Et(e, r), Ee(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          qt(e, Pe, st);
          break;
        case 3:
          if (
            (Et(e, r), (r & 130023424) === r && ((t = xa + 500 - ee()), 10 < t))
          ) {
            if (Hi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = qs(qt.bind(null, e, Pe, st), t);
            break;
          }
          qt(e, Pe, st);
          break;
        case 4:
          if ((Et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ye(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ey(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qs(qt.bind(null, e, Pe, st), r);
            break;
          }
          qt(e, Pe, st);
          break;
        case 5:
          qt(e, Pe, st);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ee(e, ee()), e.callbackNode === n ? fh.bind(null, e) : null;
}
function vl(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = lo(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && xl(t)),
    e
  );
}
function xl(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function ty(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Et(e, t) {
  for (
    t &= ~va,
      t &= ~Vo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ec(e) {
  if (O & 6) throw Error(S(327));
  Bn();
  var t = Hi(e, 0);
  if (!(t & 1)) return Ee(e, ee()), null;
  var n = lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ws(e);
    r !== 0 && ((t = r), (n = vl(e, r)));
  }
  if (n === 1) throw ((n = Hr), sn(e, 0), Et(e, t), Ee(e, ee()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, Pe, st),
    Ee(e, ee()),
    null
  );
}
function wa(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((Qn = ee() + 500), Co && Kt());
  }
}
function dn(e) {
  Vt !== null && Vt.tag === 0 && !(O & 6) && Bn();
  var t = O;
  O |= 1;
  var n = Ue.transition,
    r = I;
  try {
    if (((Ue.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Ue.transition = n), (O = t), !(O & 6) && Kt();
  }
}
function Sa() {
  (De = Mn.current), U(Mn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ag(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yi();
          break;
        case 3:
          Kn(), U(Ce), U(pe), ca();
          break;
        case 5:
          ua(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          U(K);
          break;
        case 19:
          U(K);
          break;
        case 10:
          oa(r.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (ne = e = Ft(e.current, null)),
    (ue = De = t),
    (ie = 0),
    (Hr = null),
    (va = Vo = fn = 0),
    (Pe = Sr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function dh(e, t) {
  do {
    var n = ne;
    try {
      if ((ia(), (Ai.current = ro), no)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        no = !1;
      }
      if (
        ((cn = 0),
        (se = re = Q = null),
        (xr = !1),
        (Br = 0),
        (ya.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (Hr = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Uu(s);
          if (m !== null) {
            (m.flags &= -257),
              $u(m, s, l, o, t),
              m.mode & 1 && Bu(o, u, t),
              (t = m),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(o, u, t), Pa();
              break e;
            }
            a = Error(S(426));
          }
        } else if (W && l.mode & 1) {
          var T = Uu(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              $u(T, s, l, o, t),
              na(Gn(a, l));
            break e;
          }
        }
        (o = a = Gn(a, l)),
          ie !== 4 && (ie = 2),
          Sr === null ? (Sr = [o]) : Sr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = Xd(o, a, t);
              Nu(o, g);
              break e;
            case 1:
              l = a;
              var h = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (jt === null || !jt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Zd(o, l, t);
                Nu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      mh(n);
    } catch (w) {
      (t = w), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function hh() {
  var e = io.current;
  return (io.current = ro), e === null ? ro : e;
}
function Pa() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    le === null || (!(fn & 268435455) && !(Vo & 268435455)) || Et(le, ue);
}
function lo(e, t) {
  var n = O;
  O |= 2;
  var r = hh();
  (le !== e || ue !== t) && ((st = null), sn(e, t));
  do
    try {
      ny();
      break;
    } catch (i) {
      dh(e, i);
    }
  while (1);
  if ((ia(), (O = n), (io.current = r), ne !== null)) throw Error(S(261));
  return (le = null), (ue = 0), ie;
}
function ny() {
  for (; ne !== null; ) ph(ne);
}
function ry() {
  for (; ne !== null && !Vm(); ) ph(ne);
}
function ph(e) {
  var t = yh(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? mh(e) : (ne = t),
    (ya.current = null);
}
function mh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zg(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (ne = null);
        return;
      }
    } else if (((n = Xg(n, t, De)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function qt(e, t, n) {
  var r = I,
    i = Ue.transition;
  try {
    (Ue.transition = null), (I = 1), iy(e, t, n, r);
  } finally {
    (Ue.transition = i), (I = r);
  }
  return null;
}
function iy(e, t, n, r) {
  do Bn();
  while (Vt !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Im(e, o),
    e === le && ((ne = le = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vi ||
      ((vi = !0),
      vh($i, function () {
        return Bn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ue.transition), (Ue.transition = null);
    var s = I;
    I = 1;
    var l = O;
    (O |= 4),
      (ya.current = null),
      qg(e, n),
      uh(n, e),
      Cg(Zs),
      (Wi = !!Xs),
      (Zs = Xs = null),
      (e.current = n),
      bg(n),
      Dm(),
      (O = l),
      (I = s),
      (Ue.transition = o);
  } else e.current = n;
  if (
    (vi && ((vi = !1), (Vt = e), (so = i)),
    (o = e.pendingLanes),
    o === 0 && (jt = null),
    Rm(n.stateNode),
    Ee(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (oo) throw ((oo = !1), (e = gl), (gl = null), e);
  return (
    so & 1 && e.tag !== 0 && Bn(),
    (o = e.pendingLanes),
    o & 1 ? (e === yl ? Pr++ : ((Pr = 0), (yl = e))) : (Pr = 0),
    Kt(),
    null
  );
}
function Bn() {
  if (Vt !== null) {
    var e = Yf(so),
      t = Ue.transition,
      n = I;
    try {
      if (((Ue.transition = null), (I = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (so = 0), O & 6)) throw Error(S(331));
        var i = O;
        for (O |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        m = c.return;
                      if ((sh(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (L = d);
                        break;
                      }
                      L = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var T = v.sibling;
                    (v.sibling = null), (v = T);
                  } while (v !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wr(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (L = g);
                break e;
              }
              L = o.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          s = L;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (L = p);
          else
            e: for (s = h; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, l);
                  }
                } catch (w) {
                  X(l, l.return, w);
                }
              if (l === s) {
                L = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (L = x);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((O = i), Kt(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(xo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Ue.transition = t);
    }
  }
  return !1;
}
function tc(e, t, n) {
  (t = Gn(n, t)),
    (t = Xd(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = ye()),
    e !== null && (Yr(e, 1, t), Ee(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) tc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        tc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (jt === null || !jt.has(r)))
        ) {
          (e = Gn(n, e)),
            (e = Zd(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = ye()),
            t !== null && (Yr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function oy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ue & n) === n &&
      (ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > ee() - xa)
        ? sn(e, 0)
        : (va |= n)),
    Ee(e, t);
}
function gh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1));
  var n = ye();
  (e = gt(e, t)), e !== null && (Yr(e, t, n), Ee(e, n));
}
function sy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gh(e, n);
}
function ly(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), gh(e, n);
}
var yh;
yh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Yg(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), W && t.flags & 1048576 && wd(t, Ji, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ni(e, t), (e = t.pendingProps);
      var i = $n(t, pe.current);
      zn(t, n), (i = da(null, t, r, e, i, n));
      var o = ha();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Xi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            la(t),
            (i.updater = To),
            (t.stateNode = i),
            (i._reactInternals = t),
            ol(t, r, e, n),
            (t = al(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && ea(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ni(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = uy(r)),
          (e = Ke(r, e)),
          i)
        ) {
          case 0:
            t = ll(null, t, r, e, n);
            break e;
          case 1:
            t = Ku(null, t, r, e, n);
            break e;
          case 11:
            t = Hu(null, t, r, e, n);
            break e;
          case 14:
            t = Wu(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        ll(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Ku(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((eh(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Cd(e, t),
          eo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Gn(Error(S(423)), t)), (t = Gu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Gn(Error(S(424)), t)), (t = Gu(e, t, r, n, i));
            break e;
          } else
            for (
              Me = Rt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                W = !0,
                Qe = null,
                n = Vd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === i)) {
            t = yt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dd(t),
        e === null && nl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Js(r, i) ? (s = null) : o !== null && Js(r, o) && (t.flags |= 32),
        bd(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && nl(t), null;
    case 13:
      return th(e, t, n);
    case 4:
      return (
        aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Wn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Hu(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(qi, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ze(o.value, s)) {
            if (o.children === i.children && !Ce.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = ft(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      rl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(S(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  rl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (i = $e(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ke(r, t.pendingProps)),
        (i = Ke(r.type, i)),
        Wu(e, t, r, i, n)
      );
    case 15:
      return Jd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Ni(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Xi(t)) : (e = !1),
        zn(t, n),
        Ed(t, r, i),
        ol(t, r, i, n),
        al(null, t, r, !0, e, n)
      );
    case 19:
      return nh(e, t, n);
    case 22:
      return qd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function vh(e, t) {
  return Wf(e, t);
}
function ay(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new ay(e, t, n, r);
}
function ka(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function uy(e) {
  if (typeof e == "function") return ka(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $l)) return 11;
    if (e === Hl) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) ka(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case wn:
        return ln(n.children, i, o, t);
      case Ul:
        (s = 8), (i |= 8);
        break;
      case Ds:
        return (
          (e = Be(12, n, t, i | 2)), (e.elementType = Ds), (e.lanes = o), e
        );
      case Ms:
        return (e = Be(13, n, t, i)), (e.elementType = Ms), (e.lanes = o), e;
      case As:
        return (e = Be(19, n, t, i)), (e.elementType = As), (e.lanes = o), e;
      case Lf:
        return Do(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Tf:
              s = 10;
              break e;
            case Ef:
              s = 9;
              break e;
            case $l:
              s = 11;
              break e;
            case Hl:
              s = 14;
              break e;
            case Pt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function ln(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function Do(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = Lf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ds(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function hs(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qo(0)),
    (this.expirationTimes = Qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ca(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new cy(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    la(o),
    e
  );
}
function fy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xh(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return vd(e, n, t);
  }
  return t;
}
function wh(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ca(n, r, !0, e, i, o, s, l, a)),
    (e.context = xh(null)),
    (n = e.current),
    (r = ye()),
    (i = _t(n)),
    (o = ft(r, i)),
    (o.callback = t ?? null),
    Nt(n, o, i),
    (e.current.lanes = i),
    Yr(e, i, r),
    Ee(e, r),
    e
  );
}
function Mo(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = _t(i);
  return (
    (n = xh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ft(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(i, t, s)),
    e !== null && (Xe(e, i, s, o), Mi(e, i, s)),
    s
  );
}
function ao(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function nc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ta(e, t) {
  nc(e, t), (e = e.alternate) && nc(e, t);
}
function dy() {
  return null;
}
var Sh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ea(e) {
  this._internalRoot = e;
}
Ao.prototype.render = Ea.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Mo(e, t, null, null);
};
Ao.prototype.unmount = Ea.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      Mo(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function Ao(e) {
  this._internalRoot = e;
}
Ao.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
    Tt.splice(n, 0, e), n === 0 && bf(e);
  }
};
function La(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rc() {}
function hy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ao(s);
        o.call(u);
      };
    }
    var s = wh(t, r, e, 0, null, !1, !1, "", rc);
    return (
      (e._reactRootContainer = s),
      (e[mt] = s.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ao(a);
      l.call(u);
    };
  }
  var a = Ca(e, 0, !1, null, null, !1, !1, "", rc);
  return (
    (e._reactRootContainer = a),
    (e[mt] = a.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      Mo(t, a, n, r);
    }),
    a
  );
}
function No(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ao(s);
        l.call(a);
      };
    }
    Mo(t, s, e, i);
  } else s = hy(n, t, e, i, r);
  return ao(s);
}
Xf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fr(t.pendingLanes);
        n !== 0 &&
          (Gl(t, n | 1), Ee(t, ee()), !(O & 6) && ((Qn = ee() + 500), Kt()));
      }
      break;
    case 13:
      dn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = ye();
          Xe(r, e, 1, i);
        }
      }),
        Ta(e, 1);
  }
};
Ql = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Xe(t, e, 134217728, n);
    }
    Ta(e, 134217728);
  }
};
Zf = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = gt(e, t);
    if (n !== null) {
      var r = ye();
      Xe(n, e, t, r);
    }
    Ta(e, t);
  }
};
Jf = function () {
  return I;
};
qf = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Us = function (e, t, n) {
  switch (t) {
    case "input":
      if ((js(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ko(r);
            if (!i) throw Error(S(90));
            Df(r), js(r, i);
          }
        }
      }
      break;
    case "textarea":
      Af(e, n);
      break;
    case "select":
      (t = n.value), t != null && _n(e, !!n.multiple, t, !1);
  }
};
If = wa;
zf = dn;
var py = { usingClientEntryPoint: !1, Events: [Zr, Cn, ko, Ff, Of, wa] },
  sr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  my = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $f(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || dy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xi.isDisabled && xi.supportsFiber)
    try {
      (xo = xi.inject(my)), (rt = xi);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!La(t)) throw Error(S(200));
  return fy(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!La(e)) throw Error(S(299));
  var n = !1,
    r = "",
    i = Sh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ca(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new Ea(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = $f(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return dn(e);
};
je.hydrate = function (e, t, n) {
  if (!Ro(t)) throw Error(S(200));
  return No(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!La(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Sh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = wh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[mt] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ao(t);
};
je.render = function (e, t, n) {
  if (!Ro(t)) throw Error(S(200));
  return No(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!Ro(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (dn(function () {
        No(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = wa;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ro(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return No(e, t, n, !1, r);
};
je.version = "18.2.0-next-9e3b772b8-20220608";
function Ph() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph);
    } catch (e) {
      console.error(e);
    }
}
Ph(), (wf.exports = je);
var gy = wf.exports,
  ic = gy;
(Ls.createRoot = ic.createRoot), (Ls.hydrateRoot = ic.hydrateRoot);
const kh = M.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  jo = M.createContext({}),
  Va = M.createContext(null),
  _o = typeof document < "u",
  yy = _o ? M.useLayoutEffect : M.useEffect,
  Ch = M.createContext({ strict: !1 });
function vy(e, t, n, r) {
  const { visualElement: i } = M.useContext(jo),
    o = M.useContext(Ch),
    s = M.useContext(Va),
    l = M.useContext(kh).reducedMotion,
    a = M.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  M.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = M.useRef(!!window.HandoffAppearAnimations);
  return (
    yy(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    M.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function An(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function xy(e, t, n) {
  return M.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : An(n) && (n.current = r));
    },
    [t]
  );
}
function Wr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Fo(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Da = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ma = ["initial", ...Da];
function Oo(e) {
  return Fo(e.animate) || Ma.some((t) => Wr(e[t]));
}
function Th(e) {
  return !!(Oo(e) || e.variants);
}
function wy(e, t) {
  if (Oo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Wr(n) ? n : void 0,
      animate: Wr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Sy(e) {
  const { initial: t, animate: n } = wy(e, M.useContext(jo));
  return M.useMemo(() => ({ initial: t, animate: n }), [oc(t), oc(n)]);
}
function oc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const sc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Kr = {};
for (const e in sc) Kr[e] = { isEnabled: (t) => sc[e].some((n) => !!t[n]) };
function Py(e) {
  for (const t in e) Kr[t] = { ...Kr[t], ...e[t] };
}
const Eh = M.createContext({}),
  Lh = M.createContext({}),
  ky = Symbol.for("motionComponentSymbol");
function Cy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Py(e);
  function o(l, a) {
    let u;
    const c = { ...M.useContext(kh), ...l, layoutId: Ty(l) },
      { isStatic: f } = c,
      d = Sy(l),
      m = r(l, f);
    if (!f && _o) {
      d.visualElement = vy(i, m, c, t);
      const y = M.useContext(Lh),
        v = M.useContext(Ch).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
    }
    return M.createElement(
      jo.Provider,
      { value: d },
      u && d.visualElement
        ? M.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, xy(m, d.visualElement, a), m, f, d.visualElement)
    );
  }
  const s = M.forwardRef(o);
  return (s[ky] = i), s;
}
function Ty({ layoutId: e }) {
  const t = M.useContext(Eh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Ey(e) {
  function t(r, i = {}) {
    return Cy(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Ly = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Aa(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Ly.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const uo = {};
function Vy(e) {
  Object.assign(uo, e);
}
const qr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  mn = new Set(qr);
function Vh(e, { layout: t, layoutId: n }) {
  return (
    mn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!uo[e] || e === "opacity"))
  );
}
const Le = (e) => !!(e && e.getVelocity),
  Dy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  My = qr.length;
function Ay(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < My; s++) {
    const l = qr[s];
    if (e[l] !== void 0) {
      const a = Dy[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Dh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Mh = Dh("--"),
  wl = Dh("var(--"),
  Ry =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Ny = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Ut = (e, t, n) => Math.min(Math.max(n, e), t),
  gn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  kr = { ...gn, transform: (e) => Ut(0, 1, e) },
  wi = { ...gn, default: 1 },
  Cr = (e) => Math.round(e * 1e5) / 1e5,
  Io = /(-)?([\d]*\.?[\d])+/g,
  Ah =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  jy =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function br(e) {
  return typeof e == "string";
}
const ei = (e) => ({
    test: (t) => br(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  St = ei("deg"),
  ot = ei("%"),
  D = ei("px"),
  _y = ei("vh"),
  Fy = ei("vw"),
  lc = {
    ...ot,
    parse: (e) => ot.parse(e) / 100,
    transform: (e) => ot.transform(e * 100),
  },
  ac = { ...gn, transform: Math.round },
  Rh = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    radius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    size: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    rotate: St,
    rotateX: St,
    rotateY: St,
    rotateZ: St,
    scale: wi,
    scaleX: wi,
    scaleY: wi,
    scaleZ: wi,
    skew: St,
    skewX: St,
    skewY: St,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: kr,
    originX: lc,
    originY: lc,
    originZ: D,
    zIndex: ac,
    fillOpacity: kr,
    strokeOpacity: kr,
    numOctaves: ac,
  };
function Ra(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Mh(f)) {
      o[f] = d;
      continue;
    }
    const m = Rh[f],
      y = Ny(d, m);
    if (mn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = Ay(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Na = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Nh(e, t, n) {
  for (const r in t) !Le(t[r]) && !Vh(r, n) && (e[r] = t[r]);
}
function Oy({ transformTemplate: e }, t, n) {
  return M.useMemo(() => {
    const r = Na();
    return (
      Ra(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function Iy(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Nh(i, r, e),
    Object.assign(i, Oy(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function zy(e, t, n) {
  const r = {},
    i = Iy(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const By = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function co(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    By.has(e)
  );
}
let jh = (e) => !co(e);
function Uy(e) {
  e && (jh = (t) => (t.startsWith("on") ? !co(t) : e(t)));
}
try {
  Uy(require("@emotion/is-prop-valid").default);
} catch {}
function $y(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((jh(i) ||
        (n === !0 && co(i)) ||
        (!t && !co(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function uc(e, t, n) {
  return typeof e == "string" ? e : D.transform(t + n * e);
}
function Hy(e, t, n) {
  const r = uc(t, e.x, e.width),
    i = uc(n, e.y, e.height);
  return `${r} ${i}`;
}
const Wy = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ky = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Gy(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Wy : Ky;
  e[o.offset] = D.transform(-r);
  const s = D.transform(t),
    l = D.transform(n);
  e[o.array] = `${s} ${l}`;
}
function ja(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Ra(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: y, dimensions: v } = e;
  m.transform && (v && (y.transform = m.transform), delete m.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = Hy(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && Gy(m, s, l, a, !1);
}
const _h = () => ({ ...Na(), attrs: {} }),
  _a = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Qy(e, t, n, r) {
  const i = M.useMemo(() => {
    const o = _h();
    return (
      ja(o, t, { enableHardwareAcceleration: !1 }, _a(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Nh(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Yy(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Aa(n) ? Qy : zy)(r, o, s, n),
      c = { ...$y(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = M.useMemo(() => (Le(f) ? f.get() : f), [f]);
    return M.createElement(n, { ...c, children: d });
  };
}
const Fa = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Fh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Oh = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Ih(e, t, n, r) {
  Fh(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Oh.has(i) ? i : Fa(i), t.attrs[i]);
}
function Oa(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Le(n[i]) || (t.style && Le(t.style[i])) || Vh(i, e)) && (r[i] = n[i]);
  return r;
}
function zh(e, t) {
  const n = Oa(e, t);
  for (const r in e)
    if (Le(e[r]) || Le(t[r])) {
      const i =
        qr.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Ia(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Xy(e) {
  const t = M.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const fo = (e) => Array.isArray(e),
  Zy = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Jy = (e) => (fo(e) ? e[e.length - 1] || 0 : e);
function Oi(e) {
  const t = Le(e) ? e.get() : e;
  return Zy(t) ? t.toValue() : t;
}
function qy(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: by(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Bh = (e) => (t, n) => {
  const r = M.useContext(jo),
    i = M.useContext(Va),
    o = () => qy(e, t, r, i);
  return n ? o() : Xy(o);
};
function by(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Oi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Oo(e),
    u = Th(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Fo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const y = Ia(e, m);
        if (!y) return;
        const { transitionEnd: v, transition: T, ...g } = y;
        for (const h in g) {
          let p = g[h];
          if (Array.isArray(p)) {
            const x = c ? p.length - 1 : 0;
            p = p[x];
          }
          p !== null && (i[h] = p);
        }
        for (const h in v) i[h] = v[h];
      }),
    i
  );
}
const Z = (e) => e;
class cc {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function e0(e) {
  let t = new cc(),
    n = new cc(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const Si = ["prepare", "read", "update", "preRender", "render", "postRender"],
  t0 = 40;
function n0(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Si.reduce((f, d) => ((f[d] = e0(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, t0), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Si.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: Si.reduce((f, d) => {
      const m = o[d];
      return (f[d] = (y, v = !1, T = !1) => (n || a(), m.schedule(y, v, T))), f;
    }, {}),
    cancel: (f) => Si.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: $,
    cancel: vt,
    state: oe,
    steps: ps,
  } = n0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Z, !0),
  r0 = {
    useVisualState: Bh({
      scrapeMotionValuesFromProps: zh,
      createRenderState: _h,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        $.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          $.render(() => {
            ja(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              _a(t.tagName),
              e.transformTemplate
            ),
              Ih(t, n);
          });
      },
    }),
  },
  i0 = {
    useVisualState: Bh({
      scrapeMotionValuesFromProps: Oa,
      createRenderState: Na,
    }),
  };
function o0(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Aa(e) ? r0 : i0),
    preloadedFeatures: n,
    useRender: Yy(t),
    createVisualElement: r,
    Component: e,
  };
}
function ct(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Uh = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function zo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const s0 = (e) => (t) => Uh(t) && e(t, zo(t));
function dt(e, t, n, r) {
  return ct(e, t, s0(n), r);
}
const l0 = (e, t) => (n) => t(e(n)),
  Ot = (...e) => e.reduce(l0);
function $h(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const fc = $h("dragHorizontal"),
  dc = $h("dragVertical");
function Hh(e) {
  let t = !1;
  if (e === "y") t = dc();
  else if (e === "x") t = fc();
  else {
    const n = fc(),
      r = dc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Wh() {
  const e = Hh(!0);
  return e ? (e(), !1) : !0;
}
class Gt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function hc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || Wh()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && $.update(() => l[r](o, s));
    };
  return dt(e.current, n, i, { passive: !e.getProps()[r] });
}
class a0 extends Gt {
  mount() {
    this.unmount = Ot(hc(this.node, !0), hc(this.node, !1));
  }
  unmount() {}
}
class u0 extends Gt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ot(
      ct(this.node.current, "focus", () => this.onFocus()),
      ct(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Kh = (e, t) => (t ? (e === t ? !0 : Kh(e, t.parentElement)) : !1);
function ms(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, zo(n));
}
class c0 extends Gt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Z),
      (this.removeEndListeners = Z),
      (this.removeAccessibleListeners = Z),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = dt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              $.update(() => {
                Kh(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = dt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Ot(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                ms("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && $.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ct(this.node.current, "keyup", s)),
              ms("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ct(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ms("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = ct(this.node.current, "blur", r);
        this.removeAccessibleListeners = Ot(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && $.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Wh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && $.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = dt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = ct(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Ot(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Sl = new WeakMap(),
  gs = new WeakMap(),
  f0 = (e) => {
    const t = Sl.get(e.target);
    t && t(e);
  },
  d0 = (e) => {
    e.forEach(f0);
  };
function h0({ root: e, ...t }) {
  const n = e || document;
  gs.has(n) || gs.set(n, {});
  const r = gs.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(d0, { root: e, ...t })), r[i];
}
function p0(e, t, n) {
  const r = h0(t);
  return (
    Sl.set(e, n),
    r.observe(e),
    () => {
      Sl.delete(e), r.unobserve(e);
    }
  );
}
const m0 = { some: 0, all: 1 };
class g0 extends Gt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : m0[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return p0(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(y0(t, n)) && this.startObserver();
  }
  unmount() {}
}
function y0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const v0 = {
  inView: { Feature: g0 },
  tap: { Feature: c0 },
  focus: { Feature: u0 },
  hover: { Feature: a0 },
};
function Gh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function x0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function w0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Bo(e, t, n) {
  const r = e.getProps();
  return Ia(r, t, n !== void 0 ? n : r.custom, x0(e), w0(e));
}
const S0 = "framerAppearId",
  P0 = "data-" + Fa(S0);
let k0 = Z,
  za = Z;
const It = (e) => e * 1e3,
  ht = (e) => e / 1e3,
  C0 = { current: !1 },
  Qh = (e) => Array.isArray(e) && typeof e[0] == "number";
function Yh(e) {
  return !!(
    !e ||
    (typeof e == "string" && Xh[e]) ||
    Qh(e) ||
    (Array.isArray(e) && e.every(Yh))
  );
}
const hr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Xh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hr([0, 0.65, 0.55, 1]),
    circOut: hr([0.55, 0, 1, 0.45]),
    backIn: hr([0.31, 0.01, 0.66, -0.59]),
    backOut: hr([0.33, 1.53, 0.69, 0.99]),
  };
function Zh(e) {
  if (e) return Qh(e) ? hr(e) : Array.isArray(e) ? e.map(Zh) : Xh[e];
}
function T0(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Zh(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function E0(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Jh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  L0 = 1e-7,
  V0 = 12;
function D0(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Jh(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > L0 && ++l < V0);
  return s;
}
function ti(e, t, n, r) {
  if (e === t && n === r) return Z;
  const i = (o) => D0(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Jh(i(o), t, r));
}
const M0 = ti(0.42, 0, 1, 1),
  A0 = ti(0, 0, 0.58, 1),
  qh = ti(0.42, 0, 0.58, 1),
  R0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  bh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  ep = (e) => (t) => 1 - e(1 - t),
  tp = (e) => 1 - Math.sin(Math.acos(e)),
  Ba = ep(tp),
  N0 = bh(Ba),
  np = ti(0.33, 1.53, 0.69, 0.99),
  Ua = ep(np),
  j0 = bh(Ua),
  _0 = (e) =>
    (e *= 2) < 1 ? 0.5 * Ua(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  F0 = {
    linear: Z,
    easeIn: M0,
    easeInOut: qh,
    easeOut: A0,
    circIn: tp,
    circInOut: N0,
    circOut: Ba,
    backIn: Ua,
    backInOut: j0,
    backOut: np,
    anticipate: _0,
  },
  pc = (e) => {
    if (Array.isArray(e)) {
      za(e.length === 4);
      const [t, n, r, i] = e;
      return ti(t, n, r, i);
    } else if (typeof e == "string") return F0[e];
    return e;
  },
  $a = (e, t) => (n) =>
    !!(
      (br(n) && jy.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  rp = (e, t, n) => (r) => {
    if (!br(r)) return r;
    const [i, o, s, l] = r.match(Io);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  O0 = (e) => Ut(0, 255, e),
  ys = { ...gn, transform: (e) => Math.round(O0(e)) },
  on = {
    test: $a("rgb", "red"),
    parse: rp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ys.transform(e) +
      ", " +
      ys.transform(t) +
      ", " +
      ys.transform(n) +
      ", " +
      Cr(kr.transform(r)) +
      ")",
  };
function I0(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Pl = { test: $a("#"), parse: I0, transform: on.transform },
  Rn = {
    test: $a("hsl", "hue"),
    parse: rp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ot.transform(Cr(t)) +
      ", " +
      ot.transform(Cr(n)) +
      ", " +
      Cr(kr.transform(r)) +
      ")",
  },
  me = {
    test: (e) => on.test(e) || Pl.test(e) || Rn.test(e),
    parse: (e) =>
      on.test(e) ? on.parse(e) : Rn.test(e) ? Rn.parse(e) : Pl.parse(e),
    transform: (e) =>
      br(e) ? e : e.hasOwnProperty("red") ? on.transform(e) : Rn.transform(e),
  },
  G = (e, t, n) => -n * e + n * t + e;
function vs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function z0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = vs(a, l, e + 1 / 3)), (o = vs(a, l, e)), (s = vs(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const xs = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  B0 = [Pl, on, Rn],
  U0 = (e) => B0.find((t) => t.test(e));
function mc(e) {
  const t = U0(e);
  let n = t.parse(e);
  return t === Rn && (n = z0(n)), n;
}
const ip = (e, t) => {
  const n = mc(e),
    r = mc(t),
    i = { ...n };
  return (o) => (
    (i.red = xs(n.red, r.red, o)),
    (i.green = xs(n.green, r.green, o)),
    (i.blue = xs(n.blue, r.blue, o)),
    (i.alpha = G(n.alpha, r.alpha, o)),
    on.transform(i)
  );
};
function $0(e) {
  var t, n;
  return (
    isNaN(e) &&
    br(e) &&
    (((t = e.match(Io)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Ah)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const op = { regex: Ry, countKey: "Vars", token: "${v}", parse: Z },
  sp = { regex: Ah, countKey: "Colors", token: "${c}", parse: me.parse },
  lp = { regex: Io, countKey: "Numbers", token: "${n}", parse: gn.parse };
function ws(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function ho(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && ws(n, op), ws(n, sp), ws(n, lp), n;
}
function ap(e) {
  return ho(e).values;
}
function up(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = ho(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(op.token, s[a]))
        : a < r + n
        ? (l = l.replace(sp.token, me.transform(s[a])))
        : (l = l.replace(lp.token, Cr(s[a])));
    return l;
  };
}
const H0 = (e) => (typeof e == "number" ? 0 : e);
function W0(e) {
  const t = ap(e);
  return up(e)(t.map(H0));
}
const $t = {
    test: $0,
    parse: ap,
    createTransformer: up,
    getAnimatableNone: W0,
  },
  cp = (e, t) => (n) => `${n > 0 ? t : e}`;
function fp(e, t) {
  return typeof e == "number"
    ? (n) => G(e, t, n)
    : me.test(e)
    ? ip(e, t)
    : e.startsWith("var(")
    ? cp(e, t)
    : hp(e, t);
}
const dp = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => fp(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  K0 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = fp(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  hp = (e, t) => {
    const n = $t.createTransformer(t),
      r = ho(e),
      i = ho(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Ot(dp(r.values, i.values), n)
      : cp(e, t);
  },
  Gr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  gc = (e, t) => (n) => G(e, t, n);
function G0(e) {
  return typeof e == "number"
    ? gc
    : typeof e == "string"
    ? me.test(e)
      ? ip
      : hp
    : Array.isArray(e)
    ? dp
    : typeof e == "object"
    ? K0
    : gc;
}
function Q0(e, t, n) {
  const r = [],
    i = n || G0(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || Z : t;
      l = Ot(a, l);
    }
    r.push(l);
  }
  return r;
}
function pp(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((za(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = Q0(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Gr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Ut(e[0], e[o - 1], u)) : a;
}
function Y0(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Gr(0, t, r);
    e.push(G(n, 1, i));
  }
}
function X0(e) {
  const t = [0];
  return Y0(t, e.length - 1), t;
}
function Z0(e, t) {
  return e.map((n) => n * t);
}
function J0(e, t) {
  return e.map(() => t || qh).splice(0, e.length - 1);
}
function po({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = R0(r) ? r.map(pc) : pc(r),
    o = { done: !1, value: t[0] },
    s = Z0(n && n.length === t.length ? n : X0(t), e),
    l = pp(s, t, { ease: Array.isArray(i) ? i : J0(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function mp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const q0 = 5;
function gp(e, t, n) {
  const r = Math.max(t - q0, 0);
  return mp(n - e(r), t - r);
}
const Ss = 0.001,
  b0 = 0.01,
  yc = 10,
  ev = 0.05,
  tv = 1;
function nv({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  k0(e <= It(yc));
  let s = 1 - t;
  (s = Ut(ev, tv, s)),
    (e = Ut(b0, yc, ht(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = kl(u, s),
            y = Math.exp(-f);
          return Ss - (d / m) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = kl(Math.pow(u, 2), s);
          return ((-i(u) + Ss > 0 ? -1 : 1) * ((d - m) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ss + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = iv(i, o, l);
  if (((e = It(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const rv = 12;
function iv(e, t, n) {
  let r = n;
  for (let i = 1; i < rv; i++) r = r - e(r) / t(r);
  return r;
}
function kl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ov = ["duration", "bounce"],
  sv = ["stiffness", "damping", "mass"];
function vc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function lv(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!vc(e, sv) && vc(e, ov)) {
    const n = nv(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function yp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = lv(r),
    m = c ? -ht(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    T = ht(Math.sqrt(l / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const p = kl(T, y);
    h = (x) => {
      const w = Math.exp(-y * T * x);
      return (
        o - w * (((m + y * T * v) / p) * Math.sin(p * x) + v * Math.cos(p * x))
      );
    };
  } else if (y === 1) h = (p) => o - Math.exp(-T * p) * (v + (m + T * v) * p);
  else {
    const p = T * Math.sqrt(y * y - 1);
    h = (x) => {
      const w = Math.exp(-y * T * x),
        C = Math.min(p * x, 300);
      return (
        o - (w * ((m + y * T * v) * Math.sinh(C) + p * v * Math.cosh(C))) / p
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (p) => {
      const x = h(p);
      if (d) s.done = p >= f;
      else {
        let w = m;
        p !== 0 && (y < 1 ? (w = gp(h, p, x)) : (w = 0));
        const C = Math.abs(w) <= n,
          k = Math.abs(o - x) <= t;
        s.done = C && k;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function xc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    y = (P) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
        ? l
        : a;
  let v = n * t;
  const T = f + v,
    g = s === void 0 ? T : s(T);
  g !== T && (v = g - f);
  const h = (P) => -v * Math.exp(-P / r),
    p = (P) => g + h(P),
    x = (P) => {
      const N = h(P),
        A = p(P);
      (d.done = Math.abs(N) <= u), (d.value = d.done ? g : A);
    };
  let w, C;
  const k = (P) => {
    m(d.value) &&
      ((w = P),
      (C = yp({
        keyframes: [d.value, y(d.value)],
        velocity: gp(p, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let N = !1;
        return (
          !C && w === void 0 && ((N = !0), x(P), k(P)),
          w !== void 0 && P > w ? C.next(P - w) : (!N && x(P), d)
        );
      },
    }
  );
}
const av = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => $.update(t, !0),
      stop: () => vt(t),
      now: () => (oe.isProcessing ? oe.timestamp : performance.now()),
    };
  },
  wc = 2e4;
function Sc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < wc; ) (t += n), (r = e.next(t));
  return t >= wc ? 1 / 0 : t;
}
const uv = { decay: xc, inertia: xc, tween: po, keyframes: po, spring: yp };
function mo({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = av,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    y = !1,
    v,
    T;
  const g = () => {
    T = new Promise((R) => {
      v = R;
    });
  };
  g();
  let h;
  const p = uv[i] || po;
  let x;
  p !== po &&
    typeof r[0] != "number" &&
    ((x = pp([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const w = p({ ...d, keyframes: r });
  let C;
  l === "mirror" &&
    (C = p({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let k = "idle",
    P = null,
    N = null,
    A = null;
  w.calculatedDuration === null && o && (w.calculatedDuration = Sc(w));
  const { calculatedDuration: J } = w;
  let we = 1 / 0,
    Se = 1 / 0;
  J !== null && ((we = J + s), (Se = we * (o + 1) - s));
  let q = 0;
  const b = (R) => {
      if (N === null) return;
      m > 0 && (N = Math.min(N, R)),
        m < 0 && (N = Math.min(R - Se / m, N)),
        P !== null ? (q = P) : (q = Math.round(R - N) * m);
      const H = q - t * (m >= 0 ? 1 : -1),
        Qt = m >= 0 ? H < 0 : H > Se;
      (q = Math.max(H, 0)), k === "finished" && P === null && (q = Se);
      let qe = q,
        yn = w;
      if (o) {
        const Uo = q / we;
        let ni = Math.floor(Uo),
          Xt = Uo % 1;
        !Xt && Uo >= 1 && (Xt = 1),
          Xt === 1 && ni--,
          (ni = Math.min(ni, o + 1));
        const Ya = !!(ni % 2);
        Ya &&
          (l === "reverse"
            ? ((Xt = 1 - Xt), s && (Xt -= s / we))
            : l === "mirror" && (yn = C));
        let Xa = Ut(0, 1, Xt);
        q > Se && (Xa = l === "reverse" && Ya ? 1 : 0), (qe = Xa * we);
      }
      const Ve = Qt ? { done: !1, value: r[0] } : yn.next(qe);
      x && (Ve.value = x(Ve.value));
      let { done: Yt } = Ve;
      !Qt && J !== null && (Yt = m >= 0 ? q >= Se : q <= 0);
      const Wp = P === null && (k === "finished" || (k === "running" && Yt));
      return f && f(Ve.value), Wp && E(), Ve;
    },
    Fe = () => {
      h && h.stop(), (h = void 0);
    },
    Je = () => {
      (k = "idle"), Fe(), v(), g(), (N = A = null);
    },
    E = () => {
      (k = "finished"), c && c(), Fe(), v();
    },
    j = () => {
      if (y) return;
      h || (h = n(b));
      const R = h.now();
      a && a(),
        P !== null ? (N = R - P) : (!N || k === "finished") && (N = R),
        k === "finished" && g(),
        (A = N),
        (P = null),
        (k = "running"),
        h.start();
    };
  e && j();
  const _ = {
    then(R, H) {
      return T.then(R, H);
    },
    get time() {
      return ht(q);
    },
    set time(R) {
      (R = It(R)),
        (q = R),
        P !== null || !h || m === 0 ? (P = R) : (N = h.now() - R / m);
    },
    get duration() {
      const R = w.calculatedDuration === null ? Sc(w) : w.calculatedDuration;
      return ht(R);
    },
    get speed() {
      return m;
    },
    set speed(R) {
      R === m || !h || ((m = R), (_.time = ht(q)));
    },
    get state() {
      return k;
    },
    play: j,
    pause: () => {
      (k = "paused"), (P = q);
    },
    stop: () => {
      (y = !0), k !== "idle" && ((k = "idle"), u && u(), Je());
    },
    cancel: () => {
      A !== null && b(A), Je();
    },
    complete: () => {
      k = "finished";
    },
    sample: (R) => ((N = 0), b(R)),
  };
  return _;
}
function cv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const fv = cv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  dv = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Pi = 10,
  hv = 2e4,
  pv = (e, t) => t.type === "spring" || e === "backgroundColor" || !Yh(t.ease);
function mv(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      fv() &&
      dv.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((h) => {
      l = h;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: m } = i;
  if (pv(t, i)) {
    const h = mo({ ...i, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const x = [];
    let w = 0;
    for (; !p.done && w < hv; ) (p = h.sample(w)), x.push(p.value), (w += Pi);
    (m = void 0), (c = x), (f = w - Pi), (d = "linear");
  }
  const y = T0(e.owner.current, t, c, { ...i, duration: f, ease: d, times: m });
  i.syncStart &&
    (y.startTime = oe.isProcessing
      ? oe.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const v = () => y.cancel(),
    T = () => {
      $.update(v), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(E0(c, i)), r && r(), T();
    }),
    {
      then(h, p) {
        return a.then(h, p);
      },
      attachTimeline(h) {
        return (y.timeline = h), (y.onfinish = null), Z;
      },
      get time() {
        return ht(y.currentTime || 0);
      },
      set time(h) {
        y.currentTime = It(h);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(h) {
        y.playbackRate = h;
      },
      get duration() {
        return ht(f);
      },
      play: () => {
        s || (y.play(), vt(v));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: h } = y;
        if (h) {
          const p = mo({ ...i, autoplay: !1 });
          e.setWithVelocity(p.sample(h - Pi).value, p.sample(h).value, Pi);
        }
        T();
      },
      complete: () => y.finish(),
      cancel: T,
    }
  );
}
function gv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Z,
      pause: Z,
      stop: Z,
      then: (o) => (o(), Promise.resolve()),
      cancel: Z,
      complete: Z,
    }
  );
  return t
    ? mo({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const yv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  vv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  xv = { type: "keyframes", duration: 0.8 },
  wv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Sv = (e, { keyframes: t }) =>
    t.length > 2
      ? xv
      : mn.has(e)
      ? e.startsWith("scale")
        ? vv(t[1])
        : yv
      : wv,
  Cl = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            ($t.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Pv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function kv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Io) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Pv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Cv = /([a-z-]*)\(.*?\)/g,
  Tl = {
    ...$t,
    getAnimatableNone: (e) => {
      const t = e.match(Cv);
      return t ? t.map(kv).join(" ") : e;
    },
  },
  Tv = {
    ...Rh,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: Tl,
    WebkitFilter: Tl,
  },
  Ha = (e) => Tv[e];
function vp(e, t) {
  let n = Ha(e);
  return (
    n !== Tl && (n = $t), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const xp = (e) => /^0[^.\s]+$/.test(e);
function Ev(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || xp(e);
}
function Lv(e, t, n, r) {
  const i = Cl(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Ev(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = vp(t, l);
    }
  return o;
}
function Vv({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function wp(e, t) {
  return e[t] || e.default || e;
}
const Wa =
  (e, t, n, r = {}) =>
  (i) => {
    const o = wp(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - It(s);
    const a = Lv(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Cl(e, u),
      d = Cl(e, c);
    let m = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (Vv(o) || (m = { ...m, ...Sv(e, m) }),
      m.duration && (m.duration = It(m.duration)),
      m.repeatDelay && (m.repeatDelay = It(m.repeatDelay)),
      !f || !d || C0.current || o.type === !1)
    )
      return gv(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = mv(t, e, m);
      if (y) return y;
    }
    return mo(m);
  };
function go(e) {
  return !!(Le(e) && e.add);
}
const Sp = (e) => /^\-?\d*\.?\d+$/.test(e);
function Ka(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ga(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Qa {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ka(this.subscriptions, t), () => Ga(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Dv = (e) => !isNaN(parseFloat(e));
class Mv {
  constructor(t, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = oe;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          $.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => $.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Dv(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Qa());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            $.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? mp(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Yn(e, t) {
  return new Mv(e, t);
}
const Pp = (e) => (t) => t.test(e),
  Av = { test: (e) => e === "auto", parse: (e) => e },
  kp = [gn, D, ot, St, Fy, _y, Av],
  lr = (e) => kp.find(Pp(e)),
  Rv = [...kp, me, $t],
  Nv = (e) => Rv.find(Pp(e));
function jv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Yn(n));
}
function _v(e, t) {
  const n = Bo(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = Jy(o[s]);
    jv(e, s, l);
  }
}
function Fv(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (Sp(c) || xp(c))
            ? (c = parseFloat(c))
            : !Nv(c) && $t.test(u) && (c = vp(a, u)),
          e.addValue(a, Yn(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function Ov(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Iv(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = Ov(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function zv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Cp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      m = l[f];
    if (!d || m === void 0 || (c && zv(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const T = e.getProps()[P0];
      T &&
        ((y.elapsed = window.HandoffAppearAnimations(T, f, d, $)),
        (y.syncStart = !0));
    }
    d.start(Wa(f, d, m, e.shouldReduceMotion && mn.has(f) ? { type: !1 } : y));
    const v = d.animation;
    go(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && _v(e, s);
      }),
    u
  );
}
function El(e, t, n = {}) {
  const r = Bo(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Cp(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return Bv(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function Bv(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Uv)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            El(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function Uv(e, t) {
  return e.sortNodePosition(t);
}
function $v(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => El(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = El(e, t, n);
  else {
    const i = typeof t == "function" ? Bo(e, t, n.custom) : t;
    r = Promise.all(Cp(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Hv = [...Da].reverse(),
  Wv = Da.length;
function Kv(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => $v(e, n, r)));
}
function Gv(e) {
  let t = Kv(e);
  const n = Yv();
  let r = !0;
  const i = (a, u) => {
    const c = Bo(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      a = { ...a, ...m, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let y = {},
      v = 1 / 0;
    for (let g = 0; g < Wv; g++) {
      const h = Hv[g],
        p = n[h],
        x = c[h] !== void 0 ? c[h] : f[h],
        w = Wr(x),
        C = h === u ? p.isActive : null;
      C === !1 && (v = g);
      let k = x === f[h] && x !== c[h] && w;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && C === null) ||
          (!x && !p.prevProp) ||
          Fo(x) ||
          typeof x == "boolean")
      )
        continue;
      const P = Qv(p.prevProp, x);
      let N = P || (h === u && p.isActive && !k && w) || (g > v && w);
      const A = Array.isArray(x) ? x : [x];
      let J = A.reduce(i, {});
      C === !1 && (J = {});
      const { prevResolvedValues: we = {} } = p,
        Se = { ...we, ...J },
        q = (b) => {
          (N = !0), m.delete(b), (p.needsAnimating[b] = !0);
        };
      for (const b in Se) {
        const Fe = J[b],
          Je = we[b];
        y.hasOwnProperty(b) ||
          (Fe !== Je
            ? fo(Fe) && fo(Je)
              ? !Gh(Fe, Je) || P
                ? q(b)
                : (p.protectedKeys[b] = !0)
              : Fe !== void 0
              ? q(b)
              : m.add(b)
            : Fe !== void 0 && m.has(b)
            ? q(b)
            : (p.protectedKeys[b] = !0));
      }
      (p.prevProp = x),
        (p.prevResolvedValues = J),
        p.isActive && (y = { ...y, ...J }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          !k &&
          d.push(
            ...A.map((b) => ({ animation: b, options: { type: h, ...a } }))
          );
    }
    if (m.size) {
      const g = {};
      m.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (g[h] = p);
      }),
        d.push({ animation: g });
    }
    let T = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (T = !1),
      (r = !1),
      T ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var y;
        return (y = m.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function Qv(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Gh(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Yv() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt(),
  };
}
class Xv extends Gt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Gv(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Fo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let Zv = 0;
class Jv extends Gt {
  constructor() {
    super(...arguments), (this.id = Zv++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const qv = { animation: { Feature: Xv }, exit: { Feature: Jv } },
  Pc = (e, t) => Math.abs(e - t);
function bv(e, t) {
  const n = Pc(e.x, t.x),
    r = Pc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Tp {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = ks(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = bv(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: m } = oe;
        this.history.push({ ...d, timestamp: m });
        const { onStart: y, onMove: v } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Ps(c, this.transformPagePoint)),
          $.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          m = ks(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ps(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, m), d && d(u, m);
      }),
      !Uh(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = zo(t),
      o = Ps(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = oe;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, ks(o, this.history)),
      (this.removeListeners = Ot(
        dt(window, "pointermove", this.handlePointerMove),
        dt(window, "pointerup", this.handlePointerUp),
        dt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), vt(this.updatePoint);
  }
}
function Ps(e, t) {
  return t ? { point: t(e.point) } : e;
}
function kc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ks({ point: e }, t) {
  return {
    point: e,
    delta: kc(e, Ep(t)),
    offset: kc(e, e1(t)),
    velocity: t1(t, 0.1),
  };
}
function e1(e) {
  return e[0];
}
function Ep(e) {
  return e[e.length - 1];
}
function t1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Ep(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > It(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = ht(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ne(e) {
  return e.max - e.min;
}
function Ll(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Cc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = Ne(n) / Ne(t)),
    (Ll(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    (Ll(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Tr(e, t, n, r) {
  Cc(e.x, t.x, n.x, r ? r.originX : void 0),
    Cc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Tc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ne(t));
}
function n1(e, t, n) {
  Tc(e.x, t.x, n.x), Tc(e.y, t.y, n.y);
}
function Ec(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ne(t));
}
function Er(e, t, n) {
  Ec(e.x, t.x, n.x), Ec(e.y, t.y, n.y);
}
function r1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Lc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function i1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Lc(e.x, n, i), y: Lc(e.y, t, r) };
}
function Vc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function o1(e, t) {
  return { x: Vc(e.x, t.x), y: Vc(e.y, t.y) };
}
function s1(e, t) {
  let n = 0.5;
  const r = Ne(e),
    i = Ne(t);
  return (
    i > r
      ? (n = Gr(t.min, t.max - r, e.min))
      : r > i && (n = Gr(e.min, e.max - i, t.min)),
    Ut(0, 1, n)
  );
}
function l1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Vl = 0.35;
function a1(e = Vl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Vl),
    { x: Dc(e, "left", "right"), y: Dc(e, "top", "bottom") }
  );
}
function Dc(e, t, n) {
  return { min: Mc(e, t), max: Mc(e, n) };
}
function Mc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ac = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Nn = () => ({ x: Ac(), y: Ac() }),
  Rc = () => ({ min: 0, max: 0 }),
  te = () => ({ x: Rc(), y: Rc() });
function tt(e) {
  return [e("x"), e("y")];
}
function Lp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function u1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function c1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Cs(e) {
  return e === void 0 || e === 1;
}
function Dl({ scale: e, scaleX: t, scaleY: n }) {
  return !Cs(e) || !Cs(t) || !Cs(n);
}
function bt(e) {
  return Dl(e) || Vp(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Vp(e) {
  return Nc(e.x) || Nc(e.y);
}
function Nc(e) {
  return e && e !== "0%";
}
function yo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function jc(e, t, n, r, i) {
  return i !== void 0 && (e = yo(e, i, r)), yo(e, n, r) + t;
}
function Ml(e, t = 0, n = 1, r, i) {
  (e.min = jc(e.min, t, n, r, i)), (e.max = jc(e.max, t, n, r, i));
}
function Dp(e, { x: t, y: n }) {
  Ml(e.x, t.translate, t.scale, t.originPoint),
    Ml(e.y, n.translate, n.scale, n.originPoint);
}
function f1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        jn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Dp(e, s)),
      r && bt(o.latestValues) && jn(e, o.latestValues));
  }
  (t.x = _c(t.x)), (t.y = _c(t.y));
}
function _c(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Ct(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Fc(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = G(e.min, e.max, o);
  Ml(e, t[n], t[r], s, t.scale);
}
const d1 = ["x", "scaleX", "originX"],
  h1 = ["y", "scaleY", "originY"];
function jn(e, t) {
  Fc(e.x, t, d1), Fc(e.y, t, h1);
}
function Mp(e, t) {
  return Lp(c1(e.getBoundingClientRect(), t));
}
function p1(e, t, n) {
  const r = Mp(e, n),
    { scroll: i } = t;
  return i && (Ct(r.x, i.offset.x), Ct(r.y, i.offset.y)), r;
}
const m1 = new WeakMap();
class g1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(zo(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Hh(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          tt((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (ot.test(v)) {
              const { projection: T } = this.visualElement;
              if (T && T.layout) {
                const g = T.layout.layoutBox[y];
                g && (v = Ne(g) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          d && $.update(() => d(a, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = y1(y)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          m && m(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new Tp(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && $.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ki(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = r1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && An(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = i1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = a1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        tt((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = l1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !An(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = p1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = o1(i.layout.layoutBox, o);
    if (n) {
      const l = n(u1(s));
      (this.hasMutatedConstraints = !!l), l && (s = Lp(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = tt((c) => {
        if (!ki(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Wa(t, r, 0, n));
  }
  stopAnimation() {
    tt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    tt((n) => {
      const { drag: r } = this.getProps();
      if (!ki(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - G(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!An(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    tt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = s1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      tt((s) => {
        if (!ki(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(G(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    m1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = dt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        An(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = ct(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (tt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Vl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function ki(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function y1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class v1 extends Gt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Z),
      (this.removeListeners = Z),
      (this.controls = new g1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Z);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Oc = (e) => (t, n) => {
  e && $.update(() => e(t, n));
};
class x1 extends Gt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Z);
  }
  onPointerDown(t) {
    this.session = new Tp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Oc(t),
      onStart: Oc(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && $.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = dt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function w1() {
  const e = M.useContext(Va);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = M.useId();
  return M.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Ii = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ic(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ar = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Ic(e, t.target.x),
        r = Ic(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  S1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = $t.parse(e);
      if (i.length > 5) return r;
      const o = $t.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = G(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class P1 extends Ol.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Vy(k1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ii.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              $.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ap(e) {
  const [t, n] = w1(),
    r = M.useContext(Eh);
  return Ol.createElement(P1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: M.useContext(Lh),
    isPresent: t,
    safeToRemove: n,
  });
}
const k1 = {
    borderRadius: {
      ...ar,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ar,
    borderTopRightRadius: ar,
    borderBottomLeftRadius: ar,
    borderBottomRightRadius: ar,
    boxShadow: S1,
  },
  Rp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  C1 = Rp.length,
  zc = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Bc = (e) => typeof e == "number" || D.test(e);
function T1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, E1(r))),
      (e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, L1(r))))
    : o &&
      (e.opacity = G(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < C1; s++) {
    const l = `border${Rp[s]}Radius`;
    let a = Uc(t, l),
      u = Uc(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Bc(a) === Bc(u)
        ? ((e[l] = Math.max(G(zc(a), zc(u), r), 0)),
          (ot.test(u) || ot.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function Uc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const E1 = Np(0, 0.5, Ba),
  L1 = Np(0.5, 0.95, Z);
function Np(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Gr(e, t, r)));
}
function $c(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Oe(e, t) {
  $c(e.x, t.x), $c(e.y, t.y);
}
function Hc(e, t, n, r, i) {
  return (
    (e -= t), (e = yo(e, 1 / n, r)), i !== void 0 && (e = yo(e, 1 / i, r)), e
  );
}
function V1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (ot.test(t) &&
      ((t = parseFloat(t)), (t = G(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = G(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = Hc(e.min, t, n, l, i)),
    (e.max = Hc(e.max, t, n, l, i));
}
function Wc(e, t, [n, r, i], o, s) {
  V1(e, t[n], t[r], t[i], t.scale, o, s);
}
const D1 = ["x", "scaleX", "originX"],
  M1 = ["y", "scaleY", "originY"];
function Kc(e, t, n, r) {
  Wc(e.x, t, D1, n ? n.x : void 0, r ? r.x : void 0),
    Wc(e.y, t, M1, n ? n.y : void 0, r ? r.y : void 0);
}
function Gc(e) {
  return e.translate === 0 && e.scale === 1;
}
function jp(e) {
  return Gc(e.x) && Gc(e.y);
}
function A1(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function _p(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Qc(e) {
  return Ne(e.x) / Ne(e.y);
}
class R1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ka(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Ga(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Yc(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const N1 = (e, t) => e.depth - t.depth;
class j1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ka(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Ga(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(N1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function _1(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (vt(r), e(o - t));
    };
  return $.read(r, !0), () => vt(r);
}
function F1(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function O1(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function I1(e, t, n) {
  const r = Le(e) ? e : Yn(e);
  return r.start(Wa("", r, t, n)), r.animation;
}
const Xc = ["", "X", "Y", "Z"],
  Zc = 1e3;
let z1 = 0;
const en = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Fp({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = z1++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (en.totalNodes =
            en.resolvedTargetDeltas =
            en.recalculatedProjection =
              0),
            this.nodes.forEach($1),
            this.nodes.forEach(Q1),
            this.nodes.forEach(Y1),
            this.nodes.forEach(H1),
            F1(en);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new j1());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Qa()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = O1(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = _1(d, 250)),
            Ii.hasAnimatedSinceResize &&
              ((Ii.hasAnimatedSinceResize = !1), this.nodes.forEach(qc));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || b1,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !_p(this.targetLayout, y) || m,
                p = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, p);
                const x = { ...wp(v, "layout"), onPlay: T, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || qc(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        vt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(X1),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jc);
        return;
      }
      this.isUpdating || this.nodes.forEach(K1),
        (this.isUpdating = !1),
        this.nodes.forEach(G1),
        this.nodes.forEach(B1),
        this.nodes.forEach(U1),
        this.clearAllSnapshots();
      const l = performance.now();
      (oe.delta = Ut(0, 1e3 / 60, l - oe.timestamp)),
        (oe.timestamp = l),
        (oe.isProcessing = !0),
        ps.update.process(oe),
        ps.preRender.process(oe),
        ps.render.process(oe),
        (oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(W1), this.sharedNodes.forEach(Z1);
    }
    scheduleUpdateProjection() {
      $.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      $.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !jp(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || bt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        ex(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return te();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Ct(l.x, a.offset.x), Ct(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = te();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Oe(l, s);
            const { scroll: d } = this.root;
            d && (Ct(l.x, -d.offset.x), Ct(l.y, -d.offset.y));
          }
          Ct(l.x, c.offset.x), Ct(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = te();
      Oe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          jn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          bt(c.latestValues) && jn(a, c.latestValues);
      }
      return bt(this.latestValues) && jn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = te();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !bt(u.latestValues)) continue;
        Dl(u.latestValues) && u.updateSnapshot();
        const c = te(),
          f = u.measurePageBox();
        Oe(c, f),
          Kc(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bt(this.latestValues) && Kc(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Er(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = te()), (this.targetWithTransforms = te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                n1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                Dp(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = te()),
                (this.relativeTargetOrigin = te()),
                Er(this.relativeTargetOrigin, this.target, m.target),
                Oe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Dl(this.parent.latestValues) ||
          Vp(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === oe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Oe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      f1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (l.target = l.layout.layoutBox);
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Nn()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Nn()),
        (this.projectionDeltaWithTransform = Nn()));
      const v = this.projectionTransform;
      Tr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = Yc(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        en.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Nn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = te(),
        m = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = m !== y,
        T = this.getStack(),
        g = !T || T.members.length <= 1,
        h = !!(v && !g && this.options.crossfade === !0 && !this.path.some(q1));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        bc(f.x, s.x, w),
          bc(f.y, s.y, w),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Er(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            J1(this.relativeTarget, this.relativeTargetOrigin, d, w),
            p && A1(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = te()),
            Oe(p, this.relativeTarget)),
          v &&
            ((this.animationValues = c), T1(c, u, this.latestValues, w, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (vt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = $.update(() => {
          (Ii.hasAnimatedSinceResize = !0),
            (this.currentAnimation = I1(0, Zc, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Zc),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Op(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || te();
          const f = Ne(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Ne(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Oe(l, a),
          jn(l, c),
          Tr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new R1()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < Xc.length; c++) {
        const f = "rotate" + Xc[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Oi(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Oi(s.pointerEvents) || "")),
          this.hasProjected &&
            !bt(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Yc(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in uo) {
        if (d[v] === void 0) continue;
        const { correct: T, applyTo: g } = uo[v],
          h = u.transform === "none" ? d[v] : T(d[v], f);
        if (g) {
          const p = g.length;
          for (let x = 0; x < p; x++) u[g[x]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Oi(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Jc),
        this.root.sharedNodes.clear();
    }
  };
}
function B1(e) {
  e.updateLayout();
}
function U1(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Ne(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : Op(o, n.layoutBox, r) &&
        tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Ne(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const l = Nn();
    Tr(l, r, n.layoutBox);
    const a = Nn();
    s ? Tr(a, e.applyTransform(i, !0), n.measuredBox) : Tr(a, r, n.layoutBox);
    const u = !jp(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const y = te();
          Er(y, n.layoutBox, d.layoutBox);
          const v = te();
          Er(v, r, m.layoutBox),
            _p(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function $1(e) {
  en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function H1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function W1(e) {
  e.clearSnapshot();
}
function Jc(e) {
  e.clearMeasurements();
}
function K1(e) {
  e.isLayoutDirty = !1;
}
function G1(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function qc(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Q1(e) {
  e.resolveTargetDelta();
}
function Y1(e) {
  e.calcProjection();
}
function X1(e) {
  e.resetRotation();
}
function Z1(e) {
  e.removeLeadSnapshot();
}
function bc(e, t, n) {
  (e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function ef(e, t, n, r) {
  (e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r));
}
function J1(e, t, n, r) {
  ef(e.x, t.x, n.x, r), ef(e.y, t.y, n.y, r);
}
function q1(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const b1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  tf = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  nf = tf("applewebkit/") && !tf("chrome/") ? Math.round : Z;
function rf(e) {
  (e.min = nf(e.min)), (e.max = nf(e.max));
}
function ex(e) {
  rf(e.x), rf(e.y);
}
function Op(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Ll(Qc(t), Qc(n), 0.2))
  );
}
const tx = Fp({
    attachResizeListener: (e, t) => ct(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ts = { current: void 0 },
  Ip = Fp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ts.current) {
        const e = new tx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ts.current = e);
      }
      return Ts.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  nx = {
    pan: { Feature: x1 },
    drag: { Feature: v1, ProjectionNode: Ip, MeasureLayout: Ap },
  },
  rx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function ix(e) {
  const t = rx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Al(e, t, n = 1) {
  const [r, i] = ix(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Sp(s) ? parseFloat(s) : s;
  } else return wl(i) ? Al(i, t, n + 1) : i;
}
function ox(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!wl(o)) return;
      const s = Al(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!wl(o)) continue;
    const s = Al(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const sx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  zp = (e) => sx.has(e),
  lx = (e) => Object.keys(e).some(zp),
  of = (e) => e === gn || e === D,
  sf = (e, t) => parseFloat(e.split(", ")[t]),
  lf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return sf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? sf(o[1], e) : 0;
      }
    },
  ax = new Set(["x", "y", "z"]),
  ux = qr.filter((e) => !ax.has(e));
function cx(e) {
  const t = [];
  return (
    ux.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Xn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: lf(4, 13),
  y: lf(5, 14),
};
Xn.translateX = Xn.x;
Xn.translateY = Xn.y;
const fx = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = Xn[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = Xn[u](a, o));
      }),
      e
    );
  },
  dx = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(zp);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = lr(c);
        const d = t[a];
        let m;
        if (fo(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = lr(c));
          for (let T = v; T < y && d[T] !== null; T++)
            m ? za(lr(d[T]) === m) : (m = lr(d[T]));
        } else m = lr(d);
        if (f !== m)
          if (of(f) && of(m)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && m === D && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = cx(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = fx(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        _o && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function hx(e, t, n, r) {
  return lx(t) ? dx(e, t, n, r) : { target: t, transitionEnd: r };
}
const px = (e, t, n, r) => {
    const i = ox(e, t, r);
    return (t = i.target), (r = i.transitionEnd), hx(e, t, n, r);
  },
  Rl = { current: null },
  Bp = { current: !1 };
function mx() {
  if (((Bp.current = !0), !!_o))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Rl.current = e.matches);
      e.addListener(t), t();
    } else Rl.current = !1;
}
function gx(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Le(o)) e.addValue(i, o), go(r) && r.add(i);
    else if (Le(s)) e.addValue(i, Yn(o, { owner: e })), go(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Yn(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const af = new WeakMap(),
  Up = Object.keys(Kr),
  yx = Up.length,
  uf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  vx = Ma.length;
class xx {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => $.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Oo(n)),
      (this.isVariantNode = Th(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Le(d) && (d.set(l[f], !1), go(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      af.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Bp.current || mx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Rl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    af.delete(this.current),
      this.projection && this.projection.unmount(),
      vt(this.notifyUpdate),
      vt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = mn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && $.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < yx; a++) {
      const u = Up[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = Kr[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (l = m));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && An(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < uf.length; r++) {
      const i = uf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = gx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < vx; r++) {
      const i = Ma[r],
        o = this.props[i];
      (Wr(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Yn(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Ia(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Le(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Qa()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class $p extends xx {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = Iv(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      Fv(this, r, s);
      const l = px(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function wx(e) {
  return window.getComputedStyle(e);
}
class Sx extends $p {
  readValueFromInstance(t, n) {
    if (mn.has(n)) {
      const r = Ha(n);
      return (r && r.default) || 0;
    } else {
      const r = wx(t),
        i = (Mh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Mp(t, n);
  }
  build(t, n, r, i) {
    Ra(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Oa(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Le(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Fh(t, n, r, i);
  }
}
class Px extends $p {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (mn.has(n)) {
      const r = Ha(n);
      return (r && r.default) || 0;
    }
    return (n = Oh.has(n) ? n : Fa(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return te();
  }
  scrapeMotionValuesFromProps(t, n) {
    return zh(t, n);
  }
  build(t, n, r, i) {
    ja(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Ih(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = _a(t.tagName)), super.mount(t);
  }
}
const kx = (e, t) =>
    Aa(e)
      ? new Px(t, { enableHardwareAcceleration: !1 })
      : new Sx(t, { enableHardwareAcceleration: !0 }),
  Cx = { layout: { ProjectionNode: Ip, MeasureLayout: Ap } },
  Tx = { ...qv, ...v0, ...nx, ...Cx },
  Ci = Ey((e, t) => o0(e, t, Tx, kx)),
  Hp = M.forwardRef(({ children: e, ...t }, n) =>
    V.jsx("button", {
      ref: n,
      className:
        "w-full sm:w-auto flex-none bg-blue-600 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",
      ...t,
      children: e,
    })
  ),
  Ex = M.forwardRef(() =>
    V.jsxs("nav", {
      className: "fixed left-0 flex w-screen justify-around items-center mt-2",
      children: [
        V.jsx("h1", {
          className: "text-2xl font-bold text-white mr-56",
          children: "Bayethe Lungah",
        }),
        V.jsxs("ul", {
          className: "flex justify-center items-center gap-3",
          children: [
            V.jsx("li", {
              className:
                "hover:text-blue-600 cursor-pointer font-bold text-white",
              children: "Projects",
            }),
            V.jsx("li", {
              className:
                "hover:text-blue-600 cursor-pointer font-bold text-white",
              children: "Contact",
            }),
            V.jsx("li", {
              children: V.jsx("a", {
                href: "public/resume",
                children: V.jsx(Hp, { children: "Resume" }),
              }),
            }),
          ],
        }),
      ],
    })
  ),
  Es = M.forwardRef(
    ({ title: e, description: t, githubUrl: n, rawTags: r }, i) => {
      const o = r.split(",");
      return V.jsxs("div", {
        ref: i,
        className:
          "bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full hover:scale-105 transition",
        children: [
          V.jsx("div", {
            children: V.jsx("span", {
              className:
                "absolute right-3 bottom-3 flex items-center justify-center rounded-md opacity-10",
            }),
          }),
          V.jsxs("div", {
            className: "flex flex-col h-full",
            children: [
              V.jsx("h3", {
                className: "text-2xl font-bold text-blue-500",
                children: e,
              }),
              V.jsx("p", {
                className: "mt-2 text-base text-gray-300 flex-1",
                children: t,
              }),
              V.jsxs("div", {
                className: "pt-6",
                children: [
                  V.jsx("a", {
                    href: n,
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "text-white font-bold transition tracking-wide hover:text-blue-400 hover:cursor-pointer",
                    children: "See Code →",
                  }),
                  V.jsx("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: o.map((s) => V.jsx(Lx, { name: s }, s)),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
  );
function Lx({ name: e, key: t }) {
  return V.jsx(
    "div",
    {
      className:
        " p-1 text-center text-white border-blue-600 border-2 rounded-xl font-light",
      children: e,
    },
    t
  );
}
const Vx = M.forwardRef(
  ({ title: e, content: t, children: n, className: r }, i) =>
    V.jsxs("div", {
      ref: i,
      className:
        "bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full" +
        r,
      children: [
        V.jsx("div", {
          children: V.jsx("span", {
            className:
              "absolute right-3 bottom-3 flex items-center justify-center rounded-md opacity-10",
          }),
        }),
        V.jsxs("div", {
          className: "flex flex-col h-full",
          children: [
            V.jsx("h3", {
              className: "text-2xl font-bold text-blue-500",
              children: e,
            }),
            V.jsx("p", {
              className: "mt-2 text-base text-gray-300 flex-1",
              children: t,
            }),
            n,
          ],
        }),
      ],
    })
);
function Dx({ title: e, titleId: t, ...n }, r) {
  return M.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? M.createElement("title", { id: t }, e) : null,
    M.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3",
    })
  );
}
const Mx = M.forwardRef(Dx),
  Ax = Mx,
  Rx = () =>
    V.jsxs(V.Fragment, {
      children: [V.jsx(Ex, {}), V.jsx(Nx, {}), V.jsx(jx, {}), V.jsx(_x, {})],
    });
function Nx() {
  return V.jsxs("main", {
    className:
      " h-screen flex justify-center items-start flex-col gap-3 font-bold ml-12",
    children: [
      V.jsx(Ci.p, { className: "text-blue-600", children: "Hi, My name is" }),
      V.jsx(Ci.p, {
        initial: { y: 100, scale: 0 },
        animate: { y: 0, scale: 1 },
        transition: { duration: 0.7 },
        className: " text-8xl text-white font-bold m-0",
        children: "Bayethe Lungah.",
      }),
      V.jsx(Ci.p, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.9 },
        className: "text-3xl text-gray-500 font-bold",
        children: "(By-yet-tay)",
      }),
      V.jsxs(Ci.p, {
        className: "text-white mt-6 text-lg w-2/3",
        children: [
          "I am full time Computer programming student at",
          " ",
          V.jsx("a", {
            className: "underline",
            href: "https://www.fanshawec.ca/",
            children: "Fanshawe College",
          }),
          ". I've haved a strong passion for tech since I was 12 and I love making new things.",
        ],
      }),
      V.jsx(Hp, {
        children: V.jsxs("div", {
          className: "flex gap-2 justify-center items-center",
          children: [
            V.jsx("p", { children: "See Projects" }),
            V.jsx(Ax, { className: "bounce", style: { height: "25px" } }),
          ],
        }),
      }),
    ],
  });
}
function jx() {
  return V.jsxs("main", {
    className:
      " h-screen flex flex-col justify-center items-center font-bold gap-3",
    children: [
      V.jsx("h1", { className: "text-white text-4xl", children: "Projects" }),
      V.jsxs("div", {
        className: "w-2/3 flex justify-center items-center gap-3",
        children: [
          V.jsx(Es, {
            title: "Ecommerce",
            description: "An Ecommerce store",
            githubUrl: "https://github.com/bayethelungah/Ecommerce",
            url: "",
            rawTags: "Next.js,Typescript,SQL",
          }),
          V.jsx(Es, {
            title: "Genetic Simulation",
            description: "An simulation of an genetic algorithm",
            githubUrl: "",
            url: "",
            rawTags: "Java",
          }),
          V.jsx(Es, {
            title: "Chess",
            description: "an application to play chess",
            githubUrl: "",
            url: "",
            rawTags: "Typescript,HTML",
          }),
        ],
      }),
    ],
  });
}
function _x() {
  return V.jsx("main", {
    className:
      "h-screen flex justify-center items-center flex-col gap-3 font-bold",
    children: V.jsx(Vx, {
      title: "Contact Information",
      children: V.jsxs(V.Fragment, {
        children: [
          V.jsxs("ul", {
            className: "flex justify-center items-center gap-3 text-white",
            children: [
              V.jsx("a", {
                className: "text-white",
                href: "https://github.com/bayethelungah",
                children: "Github",
              }),
              "/",
              V.jsx("a", {
                className: "text-white",
                href: "https://www.linkedin.com/in/bayethe-lungah-426620217/",
                children: "Linkedin",
              }),
            ],
          }),
          V.jsx("a", {
            href: "mailto:bayethelungah03@gmail.com",
            className: "text-white",
            children: "bayethelungah03@gmail.com",
          }),
        ],
      }),
    }),
  });
}
Ls.createRoot(document.getElementById("root")).render(
  V.jsx(Ol.StrictMode, { children: V.jsx(Rx, {}) })
);
