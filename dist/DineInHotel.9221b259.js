// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQL8O":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"9lLrM":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1929bd769221b259";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9onQj":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$7a42 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$7a42.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _bookingSlice = require("../utils/BookingSlice");
var _favSlice = require("../utils/FavSlice");
var _starRating = require("./StarRating");
var _starRatingDefault = parcelHelpers.interopDefault(_starRating);
var _useSpecificDineIn = require("../utils/useSpecificDineIn");
var _useSpecificDineInDefault = parcelHelpers.interopDefault(_useSpecificDineIn);
var _shimmer = require("./shimmer");
var _useOnline = require("../utils/useOnline");
var _useOnlineDefault = parcelHelpers.interopDefault(_useOnline);
var _sweetalert2 = require("sweetalert2");
var _sweetalert2Default = parcelHelpers.interopDefault(_sweetalert2);
var _reactDatetimePicker = require("react-datetime-picker");
var _reactDatetimePickerDefault = parcelHelpers.interopDefault(_reactDatetimePicker);
var _dateTimePickerCss = require("react-datetime-picker/dist/DateTimePicker.css");
var _calendarCss = require("react-calendar/dist/Calendar.css");
var _clockCss = require("react-clock/dist/Clock.css");
var _s = $RefreshSig$();
const DineInHotel = ()=>{
    _s();
    const { id2 } = (0, _reactRouterDom.useParams)();
    const [Ditem, error, isLoading] = (0, _useSpecificDineInDefault.default)(id2);
    const [bookingDateTime, setBookingDateTime] = (0, _react.useState)(new Date());
    const onlinecheck = (0, _useOnlineDefault.default)();
    const dispatch = (0, _reactRedux.useDispatch)();
    if (!onlinecheck) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Offline, {}, void 0, false, {
        fileName: "src/component/DineInHotel.js",
        lineNumber: 23,
        columnNumber: 28
    }, undefined);
    if (isLoading) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmer.Shimmer), {}, void 0, false, {
        fileName: "src/component/DineInHotel.js",
        lineNumber: 24,
        columnNumber: 25
    }, undefined);
    if (error) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "error-message",
        children: [
            "Error: ",
            error
        ]
    }, void 0, true, {
        fileName: "src/component/DineInHotel.js",
        lineNumber: 25,
        columnNumber: 21
    }, undefined);
    const addHotelItem = (item)=>{
        if (!bookingDateTime) {
            (0, _sweetalert2Default.default).fire({
                title: "Date and Time Required",
                text: "Please select a date and time before booking.",
                icon: "warning",
                confirmButtonText: "OK"
            });
            return;
        }
        dispatch((0, _bookingSlice.addItem)({
            ...item,
            bookingDateTime
        }));
        (0, _sweetalert2Default.default).fire({
            title: '<h3 class="success-title">Booking Confirmed!</h3>',
            html: `
        <div class="booking-confirmation">
          <p>You have successfully booked <strong>${item.name}</strong></p>
          <div class="booking-details">
            <p><i class="fas fa-map-marker-alt"></i> ${item.address}</p>
            <p><i class="fas fa-clock"></i> ${bookingDateTime.toLocaleString()}</p>
          </div>
        </div>
      `,
            icon: "success",
            confirmButtonText: "OK",
            customClass: {
                popup: "custom-popup",
                confirmButton: "custom-confirm-button"
            }
        });
    };
    const addFav = ()=>{
        dispatch((0, _favSlice.addFavItem)(Ditem));
        (0, _sweetalert2Default.default).fire({
            title: "Added to Favorites",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "hotel-details-container",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "hotel-header",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "hotel-title",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: Ditem.name
                        }, void 0, false, {
                            fileName: "src/component/DineInHotel.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "hotel-rating",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _starRatingDefault.default), {}, void 0, false, {
                                fileName: "src/component/DineInHotel.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/component/DineInHotel.js",
                            lineNumber: 75,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "hotel-address",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                    className: "fas fa-map-marker-alt"
                                }, void 0, false, {
                                    fileName: "src/component/DineInHotel.js",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, undefined),
                                " ",
                                Ditem.address,
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "review-count",
                                    children: "(0 Reviews)"
                                }, void 0, false, {
                                    fileName: "src/component/DineInHotel.js",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/component/DineInHotel.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/component/DineInHotel.js",
                    lineNumber: 73,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/component/DineInHotel.js",
                lineNumber: 72,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "hotel-content",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "hotel-gallery",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: Ditem.image,
                            alt: Ditem.name,
                            className: "main-image"
                        }, void 0, false, {
                            fileName: "src/component/DineInHotel.js",
                            lineNumber: 90,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/component/DineInHotel.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "booking-panel",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "booking-form",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                    children: "Make a Reservation"
                                }, void 0, false, {
                                    fileName: "src/component/DineInHotel.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "datetime-section",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                            htmlFor: "booking-datetime",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                    className: "far fa-calendar-alt"
                                                }, void 0, false, {
                                                    fileName: "src/component/DineInHotel.js",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, undefined),
                                                " Select Date and Time"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/component/DineInHotel.js",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDatetimePickerDefault.default), {
                                            id: "booking-datetime",
                                            onChange: setBookingDateTime,
                                            value: bookingDateTime,
                                            className: "datetime-input",
                                            format: "y-MM-dd h:mm a"
                                        }, void 0, false, {
                                            fileName: "src/component/DineInHotel.js",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/component/DineInHotel.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "operating-hours",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            className: "far fa-clock"
                                        }, void 0, false, {
                                            fileName: "src/component/DineInHotel.js",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            children: [
                                                "Operating Hours: ",
                                                Ditem.time
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/component/DineInHotel.js",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/component/DineInHotel.js",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "booking-actions",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                            className: "book-now-btn",
                                            onClick: ()=>addHotelItem(Ditem),
                                            children: "Book Now"
                                        }, void 0, false, {
                                            fileName: "src/component/DineInHotel.js",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                            className: "favorite-btn",
                                            onClick: addFav,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                    className: "far fa-heart"
                                                }, void 0, false, {
                                                    fileName: "src/component/DineInHotel.js",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, undefined),
                                                " Save to Favorites"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/component/DineInHotel.js",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/component/DineInHotel.js",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/component/DineInHotel.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/component/DineInHotel.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/component/DineInHotel.js",
                lineNumber: 88,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/component/DineInHotel.js",
        lineNumber: 71,
        columnNumber: 5
    }, undefined);
};
_s(DineInHotel, "AsYfHFezoQUIbMSDCeujlcPOU1k=", false, function() {
    return [
        (0, _reactRouterDom.useParams),
        (0, _useSpecificDineInDefault.default),
        (0, _useOnlineDefault.default),
        (0, _reactRedux.useDispatch)
    ];
});
_c = DineInHotel;
exports.default = DineInHotel;
var _c;
$RefreshReg$(_c, "DineInHotel");

  $parcel$ReactRefreshHelpers$7a42.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","react-redux":"62sf7","../utils/BookingSlice":"lTKvC","../utils/FavSlice":"bPK1g","./StarRating":"5G9LQ","../utils/useSpecificDineIn":"isXut","./shimmer":"bltIQ","../utils/useOnline":"74Yls","sweetalert2":"1HyFr","react-datetime-picker":"bPBYl","react-datetime-picker/dist/DateTimePicker.css":"2wWSk","react-calendar/dist/Calendar.css":"bUOtF","react-clock/dist/Clock.css":"hIPQz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"isXut":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3225 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3225.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _constants = require("../constants");
var _s = $RefreshSig$();
const useSpecificDineIn = (id2)=>{
    _s();
    const [Ditem, setDitem] = (0, _react.useState)([]); // Initialize as `null` for better clarity
    const [error, setError] = (0, _react.useState)(null);
    const [isLoading, setIsLoading] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        if (id2) fetchDineData();
    }, [
        id2
    ]);
    const fetchDineData = async ()=>{
        setIsLoading(true);
        try {
            const response = await fetch((0, _constants.D_I_N_2) + id2);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            setDitem(json);
        } catch (err) {
            setError(err.message); // Set the error message
            console.log(error);
        } finally{
            setIsLoading(false);
        }
    };
    return [
        Ditem,
        error,
        isLoading
    ];
};
_s(useSpecificDineIn, "ZUn8Nhm7AYTeNYn3GP36maac9HQ=");
exports.default = useSpecificDineIn;

  $parcel$ReactRefreshHelpers$3225.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","../constants":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"3huJa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ALL_DATA_URL", ()=>ALL_DATA_URL);
parcelHelpers.export(exports, "U_R_L", ()=>U_R_L);
parcelHelpers.export(exports, "I_R_L", ()=>I_R_L);
parcelHelpers.export(exports, "N_R_L", ()=>N_R_L);
parcelHelpers.export(exports, "D_I_N", ()=>D_I_N);
parcelHelpers.export(exports, "D_I_N_2", ()=>D_I_N_2);
parcelHelpers.export(exports, "T_R_N", ()=>T_R_N);
parcelHelpers.export(exports, "T_R_N_2", ()=>T_R_N_2);
parcelHelpers.export(exports, "S_T_R", ()=>S_T_R);
parcelHelpers.export(exports, "S_T_R_S", ()=>S_T_R_S);
parcelHelpers.export(exports, "T_O", ()=>T_O);
parcelHelpers.export(exports, "T_O_S", ()=>T_O_S);
parcelHelpers.export(exports, "C_L_T", ()=>C_L_T);
parcelHelpers.export(exports, "C_L_T_S", ()=>C_L_T_S);
parcelHelpers.export(exports, "C_L_T_S_W", ()=>C_L_T_S_W);
parcelHelpers.export(exports, "C_L_T_S_K", ()=>C_L_T_S_K);
parcelHelpers.export(exports, "S_C_S", ()=>S_C_S);
parcelHelpers.export(exports, "H_C_S", ()=>H_C_S);
parcelHelpers.export(exports, "B_K_S", ()=>B_K_S);
parcelHelpers.export(exports, "H_K_S", ()=>H_K_S);
parcelHelpers.export(exports, "T_V_S", ()=>T_V_S);
parcelHelpers.export(exports, "W_H_S", ()=>W_H_S);
parcelHelpers.export(exports, "R_F_S", ()=>R_F_S);
parcelHelpers.export(exports, "F_F_S", ()=>F_F_S);
parcelHelpers.export(exports, "X_M_S", ()=>X_M_S);
parcelHelpers.export(exports, "P_M_S", ()=>P_M_S);
parcelHelpers.export(exports, "A_M_S", ()=>A_M_S);
parcelHelpers.export(exports, "O_M_S", ()=>O_M_S);
parcelHelpers.export(exports, "S_M_S", ()=>S_M_S);
const ALL_DATA_URL = "https://api-personal-project.onrender.com/api";
const U_R_L = "https://api-personal-project.onrender.com/api/restaurants/";
const I_R_L = "https://api-personal-project.onrender.com/api";
const N_R_L = "https://api-personal-project.onrender.com/api/Instamart/";
const D_I_N = "https://api-personal-project.onrender.com/api";
const D_I_N_2 = "https://api-personal-project.onrender.com/api/DineIn/";
const T_R_N = "https://api-personal-project.onrender.com/api";
const T_R_N_2 = "https://api-personal-project.onrender.com/api/Trending/";
const S_T_R = "https://api-personal-project.onrender.com/api";
const S_T_R_S = "https://api-personal-project.onrender.com/api/Stationary/";
const T_O = "https://api-personal-project.onrender.com/api";
const T_O_S = "https://api-personal-project.onrender.com/api/Toys/";
const C_L_T = "https://api-personal-project.onrender.com/api";
const C_L_T_S = "https://api-personal-project.onrender.com/api/MenFashion/";
const C_L_T_S_W = "https://api-personal-project.onrender.com/api/WomenFashion/";
const C_L_T_S_K = "https://api-personal-project.onrender.com/api/KidsFashion/";
const S_C_S = "https://api-personal-project.onrender.com/api/beautyAndCare/skinCare/";
const H_C_S = "https://api-personal-project.onrender.com/api/beautyAndCare/hairCare/";
const B_K_S = "https://api-personal-project.onrender.com/api/Books/";
const H_K_S = "https://api-personal-project.onrender.com/api/HomeKitchen/";
const T_V_S = "https://api-personal-project.onrender.com/api/Electronics/TVs/";
const W_H_S = "https://api-personal-project.onrender.com/api/Electronics/WashingMachine/";
const R_F_S = "https://api-personal-project.onrender.com/api/Electronics/Refrigerator/";
const F_F_S = "https://api-personal-project.onrender.com/api/Fitness/";
const X_M_S = "https://api-personal-project.onrender.com/api/Mobiles/Xiaomi/";
const P_M_S = "https://api-personal-project.onrender.com/api/Mobiles/Poco/";
const A_M_S = "https://api-personal-project.onrender.com/api/Mobiles/Apple/";
const O_M_S = "https://api-personal-project.onrender.com/api/Mobiles/Oneplus/";
const S_M_S = "https://api-personal-project.onrender.com/api/Mobiles/Samsung/";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74Yls":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$03b2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$03b2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _s = $RefreshSig$();
const useOnline = ()=>{
    _s();
    const [onlinecheck, setOnlineCheck] = (0, _react.useState)(navigator.onLine);
    (0, _react.useEffect)(()=>{
        const online = ()=>{
            setOnlineCheck(true);
        };
        const offline = ()=>{
            setOnlineCheck(false);
        };
        window.addEventListener("online", online);
        window.addEventListener("offline", offline);
        // below is for good practice because we don't need it when we are changing page;
        return ()=>{
            window.removeEventListener("online", online);
            window.removeEventListener("offline", offline);
        };
    }, []);
    return onlinecheck;
};
_s(useOnline, "eD7kCB2lweyQd6N5Gab4IzGogZI=");
exports.default = useOnline;

  $parcel$ReactRefreshHelpers$03b2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"bPBYl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateTimePicker", ()=>(0, _dateTimePickerJsDefault.default));
var _dateTimePickerJs = require("./DateTimePicker.js");
var _dateTimePickerJsDefault = parcelHelpers.interopDefault(_dateTimePickerJs);
exports.default = (0, _dateTimePickerJsDefault.default);

},{"./DateTimePicker.js":"le7ze","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"le7ze":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DateTimePicker);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _reactDom = require("react-dom");
var _makeEventProps = require("make-event-props");
var _makeEventPropsDefault = parcelHelpers.interopDefault(_makeEventProps);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _reactCalendar = require("react-calendar");
var _reactCalendarDefault = parcelHelpers.interopDefault(_reactCalendar);
var _reactClock = require("react-clock");
var _reactClockDefault = parcelHelpers.interopDefault(_reactClock);
var _reactFit = require("react-fit");
var _reactFitDefault = parcelHelpers.interopDefault(_reactFit);
var _dateTimeInputJs = require("./DateTimeInput.js");
var _dateTimeInputJsDefault = parcelHelpers.interopDefault(_dateTimeInputJs);
'use client';
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var baseClassName = 'react-datetime-picker';
var outsideActionEvents = [
    'mousedown',
    'focusin',
    'touchstart'
];
var allViews = [
    'hour',
    'minute',
    'second'
];
var iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 19,
    height: 19,
    viewBox: '0 0 19 19',
    stroke: 'black',
    strokeWidth: 2
};
var CalendarIcon = (0, _jsxRuntime.jsxs)("svg", __assign({}, iconProps, {
    className: "".concat(baseClassName, "__calendar-button__icon ").concat(baseClassName, "__button__icon"),
    children: [
        (0, _jsxRuntime.jsx)("rect", {
            fill: "none",
            height: "15",
            width: "15",
            x: "2",
            y: "2"
        }),
        (0, _jsxRuntime.jsx)("line", {
            x1: "6",
            x2: "6",
            y1: "0",
            y2: "4"
        }),
        (0, _jsxRuntime.jsx)("line", {
            x1: "13",
            x2: "13",
            y1: "0",
            y2: "4"
        })
    ]
}));
var ClearIcon = (0, _jsxRuntime.jsxs)("svg", __assign({}, iconProps, {
    className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon"),
    children: [
        (0, _jsxRuntime.jsx)("line", {
            x1: "4",
            x2: "15",
            y1: "4",
            y2: "15"
        }),
        (0, _jsxRuntime.jsx)("line", {
            x1: "15",
            x2: "4",
            y1: "4",
            y2: "15"
        })
    ]
}));
function DateTimePicker(props) {
    var amPmAriaLabel = props.amPmAriaLabel, autoFocus = props.autoFocus, calendarAriaLabel = props.calendarAriaLabel, _a = props.calendarIcon, calendarIcon = _a === void 0 ? CalendarIcon : _a, className = props.className, clearAriaLabel = props.clearAriaLabel, _b = props.clearIcon, clearIcon = _b === void 0 ? ClearIcon : _b, _c = props.closeWidgets, shouldCloseWidgetsOnSelect = _c === void 0 ? true : _c, dataTestid = props["data-testid"], dayAriaLabel = props.dayAriaLabel, dayPlaceholder = props.dayPlaceholder, disableCalendar = props.disableCalendar, disableClock = props.disableClock, disabled = props.disabled, format = props.format, hourAriaLabel = props.hourAriaLabel, hourPlaceholder = props.hourPlaceholder, id = props.id, _d = props.isCalendarOpen, isCalendarOpenProps = _d === void 0 ? null : _d, _e = props.isClockOpen, isClockOpenProps = _e === void 0 ? null : _e, locale = props.locale, maxDate = props.maxDate, _f = props.maxDetail, maxDetail = _f === void 0 ? 'minute' : _f, minDate = props.minDate, minuteAriaLabel = props.minuteAriaLabel, minutePlaceholder = props.minutePlaceholder, monthAriaLabel = props.monthAriaLabel, monthPlaceholder = props.monthPlaceholder, _g = props.name, name = _g === void 0 ? 'datetime' : _g, nativeInputAriaLabel = props.nativeInputAriaLabel, onCalendarClose = props.onCalendarClose, onCalendarOpen = props.onCalendarOpen, onChangeProps = props.onChange, onClockClose = props.onClockClose, onClockOpen = props.onClockOpen, onFocusProps = props.onFocus, onInvalidChange = props.onInvalidChange, _h = props.openWidgetsOnFocus, openWidgetsOnFocus = _h === void 0 ? true : _h, required = props.required, secondAriaLabel = props.secondAriaLabel, secondPlaceholder = props.secondPlaceholder, shouldCloseWidgets = props.shouldCloseWidgets, shouldOpenWidgets = props.shouldOpenWidgets, showLeadingZeros = props.showLeadingZeros, value = props.value, yearAriaLabel = props.yearAriaLabel, yearPlaceholder = props.yearPlaceholder, otherProps = __rest(props, [
        "amPmAriaLabel",
        "autoFocus",
        "calendarAriaLabel",
        "calendarIcon",
        "className",
        "clearAriaLabel",
        "clearIcon",
        "closeWidgets",
        'data-testid',
        "dayAriaLabel",
        "dayPlaceholder",
        "disableCalendar",
        "disableClock",
        "disabled",
        "format",
        "hourAriaLabel",
        "hourPlaceholder",
        "id",
        "isCalendarOpen",
        "isClockOpen",
        "locale",
        "maxDate",
        "maxDetail",
        "minDate",
        "minuteAriaLabel",
        "minutePlaceholder",
        "monthAriaLabel",
        "monthPlaceholder",
        "name",
        "nativeInputAriaLabel",
        "onCalendarClose",
        "onCalendarOpen",
        "onChange",
        "onClockClose",
        "onClockOpen",
        "onFocus",
        "onInvalidChange",
        "openWidgetsOnFocus",
        "required",
        "secondAriaLabel",
        "secondPlaceholder",
        "shouldCloseWidgets",
        "shouldOpenWidgets",
        "showLeadingZeros",
        "value",
        "yearAriaLabel",
        "yearPlaceholder"
    ]);
    var _j = (0, _react.useState)(isCalendarOpenProps), isCalendarOpen = _j[0], setIsCalendarOpen = _j[1];
    var _k = (0, _react.useState)(isClockOpenProps), isClockOpen = _k[0], setIsClockOpen = _k[1];
    var wrapper = (0, _react.useRef)(null);
    var calendarWrapper = (0, _react.useRef)(null);
    var clockWrapper = (0, _react.useRef)(null);
    (0, _react.useEffect)(function() {
        setIsCalendarOpen(isCalendarOpenProps);
    }, [
        isCalendarOpenProps
    ]);
    (0, _react.useEffect)(function() {
        setIsClockOpen(isClockOpenProps);
    }, [
        isClockOpenProps
    ]);
    function openCalendar(_a) {
        var reason = _a.reason;
        if (shouldOpenWidgets) {
            if (!shouldOpenWidgets({
                reason: reason,
                widget: 'calendar'
            })) return;
        }
        setIsClockOpen(isClockOpen ? false : isClockOpen);
        setIsCalendarOpen(true);
        if (onCalendarOpen) onCalendarOpen();
    }
    var closeCalendar = (0, _react.useCallback)(function(_a) {
        var reason = _a.reason;
        if (shouldCloseWidgets) {
            if (!shouldCloseWidgets({
                reason: reason,
                widget: 'calendar'
            })) return;
        }
        setIsCalendarOpen(false);
        if (onCalendarClose) onCalendarClose();
    }, [
        onCalendarClose,
        shouldCloseWidgets
    ]);
    function toggleCalendar() {
        if (isCalendarOpen) closeCalendar({
            reason: 'buttonClick'
        });
        else openCalendar({
            reason: 'buttonClick'
        });
    }
    function openClock(_a) {
        var reason = _a.reason;
        if (shouldOpenWidgets) {
            if (!shouldOpenWidgets({
                reason: reason,
                widget: 'clock'
            })) return;
        }
        setIsCalendarOpen(isCalendarOpen ? false : isCalendarOpen);
        setIsClockOpen(true);
        if (onClockOpen) onClockOpen();
    }
    var closeClock = (0, _react.useCallback)(function(_a) {
        var reason = _a.reason;
        if (shouldCloseWidgets) {
            if (!shouldCloseWidgets({
                reason: reason,
                widget: 'clock'
            })) return;
        }
        setIsClockOpen(false);
        if (onClockClose) onClockClose();
    }, [
        onClockClose,
        shouldCloseWidgets
    ]);
    var closeWidgets = (0, _react.useCallback)(function(_a) {
        var reason = _a.reason;
        closeCalendar({
            reason: reason
        });
        closeClock({
            reason: reason
        });
    }, [
        closeCalendar,
        closeClock
    ]);
    function onChange(value, shouldCloseWidgets) {
        if (shouldCloseWidgets === void 0) shouldCloseWidgets = shouldCloseWidgetsOnSelect;
        if (shouldCloseWidgets) closeWidgets({
            reason: 'select'
        });
        if (onChangeProps) onChangeProps(value);
    }
    function onDateChange(nextValue, shouldCloseWidgets) {
        // React-Calendar passes an array of values when selectRange is enabled
        var nextValueFrom = (Array.isArray(nextValue) ? nextValue : [
            nextValue
        ])[0];
        var valueFrom = (Array.isArray(value) ? value : [
            value
        ])[0];
        if (valueFrom && nextValueFrom) {
            var valueFromDate = new Date(valueFrom);
            var nextValueFromWithHour = new Date(nextValueFrom);
            nextValueFromWithHour.setHours(valueFromDate.getHours(), valueFromDate.getMinutes(), valueFromDate.getSeconds(), valueFromDate.getMilliseconds());
            onChange(nextValueFromWithHour, shouldCloseWidgets);
        } else onChange(nextValueFrom, shouldCloseWidgets);
    }
    function onFocus(event) {
        if (onFocusProps) onFocusProps(event);
        if (// Internet Explorer still fires onFocus on disabled elements
        disabled || !openWidgetsOnFocus || event.target.dataset.select === 'true') return;
        switch(event.target.name){
            case 'day':
            case 'month':
            case 'year':
                if (isCalendarOpen) return;
                openCalendar({
                    reason: 'focus'
                });
                break;
            case 'hour12':
            case 'hour24':
            case 'minute':
            case 'second':
                if (isClockOpen) return;
                openClock({
                    reason: 'focus'
                });
                break;
            default:
        }
    }
    var onKeyDown = (0, _react.useCallback)(function(event) {
        if (event.key === 'Escape') closeWidgets({
            reason: 'escape'
        });
    }, [
        closeWidgets
    ]);
    function clear() {
        onChange(null);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }
    var onOutsideAction = (0, _react.useCallback)(function(event) {
        var wrapperEl = wrapper.current;
        var calendarWrapperEl = calendarWrapper.current;
        var clockWrapperEl = clockWrapper.current;
        // Try event.composedPath first to handle clicks inside a Shadow DOM.
        var target = 'composedPath' in event ? event.composedPath()[0] : event.target;
        if (target && wrapperEl && !wrapperEl.contains(target) && (!calendarWrapperEl || !calendarWrapperEl.contains(target)) && (!clockWrapperEl || !clockWrapperEl.contains(target))) closeWidgets({
            reason: 'outsideAction'
        });
    }, [
        calendarWrapper,
        clockWrapper,
        closeWidgets,
        wrapper
    ]);
    var handleOutsideActionListeners = (0, _react.useCallback)(function(shouldListen) {
        if (shouldListen === void 0) shouldListen = isCalendarOpen || isClockOpen;
        outsideActionEvents.forEach(function(event) {
            if (shouldListen) document.addEventListener(event, onOutsideAction);
            else document.removeEventListener(event, onOutsideAction);
        });
        if (shouldListen) document.addEventListener('keydown', onKeyDown);
        else document.removeEventListener('keydown', onKeyDown);
    }, [
        isCalendarOpen,
        isClockOpen,
        onOutsideAction,
        onKeyDown
    ]);
    (0, _react.useEffect)(function() {
        handleOutsideActionListeners();
        return function() {
            handleOutsideActionListeners(false);
        };
    }, [
        handleOutsideActionListeners
    ]);
    function renderInputs() {
        var valueFrom = (Array.isArray(value) ? value : [
            value
        ])[0];
        var ariaLabelProps = {
            amPmAriaLabel: amPmAriaLabel,
            dayAriaLabel: dayAriaLabel,
            hourAriaLabel: hourAriaLabel,
            minuteAriaLabel: minuteAriaLabel,
            monthAriaLabel: monthAriaLabel,
            nativeInputAriaLabel: nativeInputAriaLabel,
            secondAriaLabel: secondAriaLabel,
            yearAriaLabel: yearAriaLabel
        };
        var placeholderProps = {
            dayPlaceholder: dayPlaceholder,
            hourPlaceholder: hourPlaceholder,
            minutePlaceholder: minutePlaceholder,
            monthPlaceholder: monthPlaceholder,
            secondPlaceholder: secondPlaceholder,
            yearPlaceholder: yearPlaceholder
        };
        return (0, _jsxRuntime.jsxs)("div", {
            className: "".concat(baseClassName, "__wrapper"),
            children: [
                (0, _jsxRuntime.jsx)((0, _dateTimeInputJsDefault.default), __assign({}, ariaLabelProps, placeholderProps, {
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus: autoFocus,
                    className: "".concat(baseClassName, "__inputGroup"),
                    disabled: disabled,
                    format: format,
                    isWidgetOpen: isCalendarOpen || isClockOpen,
                    locale: locale,
                    maxDate: maxDate,
                    maxDetail: maxDetail,
                    minDate: minDate,
                    name: name,
                    onChange: onChange,
                    onInvalidChange: onInvalidChange,
                    required: required,
                    showLeadingZeros: showLeadingZeros,
                    value: valueFrom
                })),
                clearIcon !== null && (0, _jsxRuntime.jsx)("button", {
                    "aria-label": clearAriaLabel,
                    className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
                    disabled: disabled,
                    onClick: clear,
                    onFocus: stopPropagation,
                    type: "button",
                    children: typeof clearIcon === 'function' ? (0, _react.createElement)(clearIcon) : clearIcon
                }),
                calendarIcon !== null && !disableCalendar && (0, _jsxRuntime.jsx)("button", {
                    "aria-expanded": isCalendarOpen || false,
                    "aria-label": calendarAriaLabel,
                    className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"),
                    disabled: disabled,
                    onClick: toggleCalendar,
                    onFocus: stopPropagation,
                    type: "button",
                    children: typeof calendarIcon === 'function' ? (0, _react.createElement)(calendarIcon) : calendarIcon
                })
            ]
        });
    }
    function renderCalendar() {
        if (isCalendarOpen === null || disableCalendar) return null;
        var calendarProps = props.calendarProps, portalContainer = props.portalContainer, value = props.value;
        var className = "".concat(baseClassName, "__calendar");
        var classNames = (0, _clsxDefault.default)(className, "".concat(className, "--").concat(isCalendarOpen ? 'open' : 'closed'));
        var calendar = (0, _jsxRuntime.jsx)((0, _reactCalendarDefault.default), __assign({
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onChange: function(value) {
                return onDateChange(value);
            },
            value: value
        }, calendarProps));
        return portalContainer ? (0, _reactDom.createPortal)((0, _jsxRuntime.jsx)("div", {
            ref: calendarWrapper,
            className: classNames,
            children: calendar
        }), portalContainer) : (0, _jsxRuntime.jsx)((0, _reactFitDefault.default), {
            children: (0, _jsxRuntime.jsx)("div", {
                ref: function(ref) {
                    if (ref && !isCalendarOpen) ref.removeAttribute('style');
                },
                className: classNames,
                children: calendar
            })
        });
    }
    function renderClock() {
        if (isClockOpen === null || disableClock) return null;
        var clockProps = props.clockProps, _a = props.maxDetail, maxDetail = _a === void 0 ? 'minute' : _a, portalContainer = props.portalContainer, value = props.value;
        var className = "".concat(baseClassName, "__clock");
        var classNames = (0, _clsxDefault.default)(className, "".concat(className, "--").concat(isClockOpen ? 'open' : 'closed'));
        var valueFrom = (Array.isArray(value) ? value : [
            value
        ])[0];
        var maxDetailIndex = allViews.indexOf(maxDetail);
        var clock = (0, _jsxRuntime.jsx)((0, _reactClockDefault.default), __assign({
            locale: locale,
            renderMinuteHand: maxDetailIndex > 0,
            renderSecondHand: maxDetailIndex > 1,
            value: valueFrom
        }, clockProps));
        return portalContainer ? (0, _reactDom.createPortal)((0, _jsxRuntime.jsx)("div", {
            ref: clockWrapper,
            className: classNames,
            children: clock
        }), portalContainer) : (0, _jsxRuntime.jsx)((0, _reactFitDefault.default), {
            children: (0, _jsxRuntime.jsx)("div", {
                ref: function(ref) {
                    if (ref && !isClockOpen) ref.removeAttribute('style');
                },
                className: classNames,
                children: clock
            })
        });
    }
    var eventProps = (0, _react.useMemo)(function() {
        return (0, _makeEventPropsDefault.default)(otherProps);
    }, [
        otherProps
    ]);
    return (0, _jsxRuntime.jsxs)("div", __assign({
        className: (0, _clsxDefault.default)(baseClassName, "".concat(baseClassName, "--").concat(isCalendarOpen || isClockOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className),
        "data-testid": dataTestid,
        id: id
    }, eventProps, {
        onFocus: onFocus,
        ref: wrapper,
        children: [
            renderInputs(),
            renderCalendar(),
            renderClock()
        ]
    }));
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","react-dom":"j6uA9","make-event-props":"5851d","clsx":"gocd3","react-calendar":"lr2jY","react-clock":"iKrD3","react-fit":"1GeRq","./DateTimeInput.js":"b0RLS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5851d":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clipboardEvents", ()=>clipboardEvents);
parcelHelpers.export(exports, "compositionEvents", ()=>compositionEvents);
parcelHelpers.export(exports, "focusEvents", ()=>focusEvents);
parcelHelpers.export(exports, "formEvents", ()=>formEvents);
parcelHelpers.export(exports, "imageEvents", ()=>imageEvents);
parcelHelpers.export(exports, "keyboardEvents", ()=>keyboardEvents);
parcelHelpers.export(exports, "mediaEvents", ()=>mediaEvents);
parcelHelpers.export(exports, "mouseEvents", ()=>mouseEvents);
parcelHelpers.export(exports, "dragEvents", ()=>dragEvents);
parcelHelpers.export(exports, "selectionEvents", ()=>selectionEvents);
parcelHelpers.export(exports, "touchEvents", ()=>touchEvents);
parcelHelpers.export(exports, "pointerEvents", ()=>pointerEvents);
parcelHelpers.export(exports, "uiEvents", ()=>uiEvents);
parcelHelpers.export(exports, "wheelEvents", ()=>wheelEvents);
parcelHelpers.export(exports, "animationEvents", ()=>animationEvents);
parcelHelpers.export(exports, "transitionEvents", ()=>transitionEvents);
parcelHelpers.export(exports, "otherEvents", ()=>otherEvents);
parcelHelpers.export(exports, "changeEvents", ()=>changeEvents);
parcelHelpers.export(exports, "allEvents", ()=>allEvents);
parcelHelpers.export(exports, "default", ()=>makeEventProps);
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var clipboardEvents = [
    'onCopy',
    'onCut',
    'onPaste'
];
var compositionEvents = [
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate'
];
var focusEvents = [
    'onFocus',
    'onBlur'
];
var formEvents = [
    'onInput',
    'onInvalid',
    'onReset',
    'onSubmit'
];
var imageEvents = [
    'onLoad',
    'onError'
];
var keyboardEvents = [
    'onKeyDown',
    'onKeyPress',
    'onKeyUp'
];
var mediaEvents = [
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onError',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting'
];
var mouseEvents = [
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp'
];
var dragEvents = [
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop'
];
var selectionEvents = [
    'onSelect'
];
var touchEvents = [
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart'
];
var pointerEvents = [
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut'
];
var uiEvents = [
    'onScroll'
];
var wheelEvents = [
    'onWheel'
];
var animationEvents = [
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration'
];
var transitionEvents = [
    'onTransitionEnd'
];
var otherEvents = [
    'onToggle'
];
var changeEvents = [
    'onChange'
];
var allEvents = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], clipboardEvents, true), compositionEvents, true), focusEvents, true), formEvents, true), imageEvents, true), keyboardEvents, true), mediaEvents, true), mouseEvents, true), dragEvents, true), selectionEvents, true), touchEvents, true), pointerEvents, true), uiEvents, true), wheelEvents, true), animationEvents, true), transitionEvents, true), changeEvents, true), otherEvents, true);
function makeEventProps(props, getArgs) {
    var eventProps = {};
    allEvents.forEach(function(eventName) {
        var eventHandler = props[eventName];
        if (!eventHandler) return;
        if (getArgs) eventProps[eventName] = function(event) {
            return eventHandler(event, getArgs(eventName));
        };
        else eventProps[eventName] = eventHandler;
    });
    return eventProps;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gocd3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clsx", ()=>clsx);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) {
        if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
        } else for(f in e)e[f] && (n && (n += " "), n += f);
    }
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
exports.default = clsx;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lr2jY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Calendar", ()=>(0, _calendarJsDefault.default));
parcelHelpers.export(exports, "CenturyView", ()=>(0, _centuryViewJsDefault.default));
parcelHelpers.export(exports, "DecadeView", ()=>(0, _decadeViewJsDefault.default));
parcelHelpers.export(exports, "MonthView", ()=>(0, _monthViewJsDefault.default));
parcelHelpers.export(exports, "Navigation", ()=>(0, _navigationJsDefault.default));
parcelHelpers.export(exports, "YearView", ()=>(0, _yearViewJsDefault.default));
var _calendarJs = require("./Calendar.js");
var _calendarJsDefault = parcelHelpers.interopDefault(_calendarJs);
var _centuryViewJs = require("./CenturyView.js");
var _centuryViewJsDefault = parcelHelpers.interopDefault(_centuryViewJs);
var _decadeViewJs = require("./DecadeView.js");
var _decadeViewJsDefault = parcelHelpers.interopDefault(_decadeViewJs);
var _monthViewJs = require("./MonthView.js");
var _monthViewJsDefault = parcelHelpers.interopDefault(_monthViewJs);
var _navigationJs = require("./Calendar/Navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _yearViewJs = require("./YearView.js");
var _yearViewJsDefault = parcelHelpers.interopDefault(_yearViewJs);
exports.default = (0, _calendarJsDefault.default);

},{"./Calendar.js":"dKnWQ","./CenturyView.js":false,"./DecadeView.js":false,"./MonthView.js":false,"./Calendar/Navigation.js":false,"./YearView.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKnWQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _navigationJs = require("./Calendar/Navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _centuryViewJs = require("./CenturyView.js");
var _centuryViewJsDefault = parcelHelpers.interopDefault(_centuryViewJs);
var _decadeViewJs = require("./DecadeView.js");
var _decadeViewJsDefault = parcelHelpers.interopDefault(_decadeViewJs);
var _yearViewJs = require("./YearView.js");
var _yearViewJsDefault = parcelHelpers.interopDefault(_yearViewJs);
var _monthViewJs = require("./MonthView.js");
var _monthViewJsDefault = parcelHelpers.interopDefault(_monthViewJs);
var _datesJs = require("./shared/dates.js");
var _utilsJs = require("./shared/utils.js");
'use client';
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var baseClassName = 'react-calendar';
var allViews = [
    'century',
    'decade',
    'year',
    'month'
];
var allValueTypes = [
    'decade',
    'year',
    'month',
    'day'
];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) return value;
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */ function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */ function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */ function getView(view, minDetail, maxDetail) {
    if (!view) return maxDetail;
    if (isViewAllowed(view, minDetail, maxDetail)) return view;
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */ function getValueType(view) {
    var index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) return null;
    var valueDate = toDate(rawValue);
    if (Number.isNaN(valueDate.getTime())) throw new Error("Invalid date: ".concat(value));
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
    var valuePiece = getValue(value, index);
    if (!valuePiece) return null;
    var valueType = getValueType(maxDetail);
    var detailValueFrom = function() {
        switch(index){
            case 0:
                return (0, _datesJs.getBegin)(valueType, valuePiece);
            case 1:
                return (0, _datesJs.getEnd)(valueType, valuePiece);
            default:
                throw new Error("Invalid index value: ".concat(index));
        }
    }();
    return (0, _utilsJs.between)(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
    return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
    return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
    return [
        getDetailValueFrom,
        getDetailValueTo
    ].map(function(fn) {
        return fn(args);
    });
};
function getActiveStartDate(_a) {
    var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
    }) || new Date();
    return (0, _datesJs.getBegin)(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
    var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) return (0, _datesJs.getBegin)(rangeType, valueFrom);
    return getActiveStartDate({
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: value || defaultValue,
        view: view || defaultView
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, _react.forwardRef)(function Calendar(props, ref) {
    var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay = props.formatDay, formatLongDate = props.formatLongDate, formatMonth = props.formatMonth, formatMonthYear = props.formatMonthYear, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, formatYear = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? 'month' : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? 'century' : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? 'start' : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
    var _j = (0, _react.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
    var _k = (0, _react.useState)(null), hoverState = _k[0], setHoverState = _k[1];
    var _l = (0, _react.useState)(Array.isArray(defaultValue) ? defaultValue.map(function(el) {
        return el !== null ? toDate(el) : null;
    }) : defaultValue !== null && defaultValue !== undefined ? toDate(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
    var _m = (0, _react.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
    var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
        activeStartDate: activeStartDateProps,
        defaultActiveStartDate: defaultActiveStartDate,
        defaultValue: defaultValue,
        defaultView: defaultView,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: valueProps,
        view: viewProps
    });
    var value = function() {
        var rawValue = function() {
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) return valueState;
            return valueProps !== undefined ? valueProps : valueState;
        }();
        if (!rawValue) return null;
        return Array.isArray(rawValue) ? rawValue.map(function(el) {
            return el !== null ? toDate(el) : null;
        }) : rawValue !== null ? toDate(rawValue) : null;
    }();
    var valueType = getValueType(maxDetail);
    var view = getView(viewProps || viewState, minDetail, maxDetail);
    var views = getLimitedViews(minDetail, maxDetail);
    var hover = selectRange ? hoverState : null;
    var drillDownAvailable = views.indexOf(view) < views.length - 1;
    var drillUpAvailable = views.indexOf(view) > 0;
    var getProcessedValue = (0, _react.useCallback)(function(value) {
        var processFunction = function() {
            switch(returnValue){
                case 'start':
                    return getDetailValueFrom;
                case 'end':
                    return getDetailValueTo;
                case 'range':
                    return getDetailValueArray;
                default:
                    throw new Error('Invalid returnValue.');
            }
        }();
        return processFunction({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            value: value
        });
    }, [
        maxDate,
        maxDetail,
        minDate,
        returnValue
    ]);
    var setActiveStartDate = (0, _react.useCallback)(function(nextActiveStartDate, action) {
        setActiveStartDateState(nextActiveStartDate);
        var args = {
            action: action,
            activeStartDate: nextActiveStartDate,
            value: value,
            view: view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
    }, [
        activeStartDate,
        onActiveStartDateChange,
        value,
        view
    ]);
    var onClickTile = (0, _react.useCallback)(function(value, event) {
        var callback = function() {
            switch(view){
                case 'century':
                    return onClickDecade;
                case 'decade':
                    return onClickYear;
                case 'year':
                    return onClickMonth;
                case 'month':
                    return onClickDay;
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        }();
        if (callback) callback(value, event);
    }, [
        onClickDay,
        onClickDecade,
        onClickMonth,
        onClickYear,
        view
    ]);
    var drillDown = (0, _react.useCallback)(function(nextActiveStartDate, event) {
        if (!drillDownAvailable) return;
        onClickTile(nextActiveStartDate, event);
        var nextView = views[views.indexOf(view) + 1];
        if (!nextView) throw new Error('Attempted to drill down from the lowest view.');
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillDown',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
        if (onViewChange && view !== nextView) onViewChange(args);
        if (onDrillDown) onDrillDown(args);
    }, [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views
    ]);
    var drillUp = (0, _react.useCallback)(function() {
        if (!drillUpAvailable) return;
        var nextView = views[views.indexOf(view) - 1];
        if (!nextView) throw new Error('Attempted to drill up from the highest view.');
        var nextActiveStartDate = (0, _datesJs.getBegin)(nextView, activeStartDate);
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillUp',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
        if (onViewChange && view !== nextView) onViewChange(args);
        if (onDrillUp) onDrillUp(args);
    }, [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views
    ]);
    var onChange = (0, _react.useCallback)(function(rawNextValue, event) {
        var previousValue = value;
        onClickTile(rawNextValue, event);
        var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        var nextValue;
        if (selectRange) {
            // Range selection turned on
            if (isFirstValueInRange) // Value has 0 or 2 elements - either way we're starting a new array
            // First value
            nextValue = (0, _datesJs.getBegin)(valueType, rawNextValue);
            else {
                if (!previousValue) throw new Error('previousValue is required');
                if (Array.isArray(previousValue)) throw new Error('previousValue must not be an array');
                // Second value
                nextValue = (0, _datesJs.getValueRange)(valueType, previousValue, rawNextValue);
            }
        } else // Range selection turned off
        nextValue = getProcessedValue(rawNextValue);
        var nextActiveStartDate = // Range selection turned off
        !selectRange || // Range selection turned on, first value
        isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
        goToRangeStartOnSelect ? getActiveStartDate({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            minDetail: minDetail,
            value: nextValue,
            view: view
        }) : null;
        event.persist();
        setActiveStartDateState(nextActiveStartDate);
        setValueState(nextValue);
        var args = {
            action: 'onChange',
            activeStartDate: nextActiveStartDate,
            value: nextValue,
            view: view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
        if (onChangeProps) {
            if (selectRange) {
                var isSingleValue = getIsSingleValue(nextValue);
                if (!isSingleValue) onChangeProps(nextValue || null, event);
                else if (allowPartialRange) {
                    if (Array.isArray(nextValue)) throw new Error('value must not be an array');
                    onChangeProps([
                        nextValue || null,
                        null
                    ], event);
                }
            } else onChangeProps(nextValue || null, event);
        }
    }, [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0, _react.useImperativeHandle)(ref, function() {
        return {
            activeStartDate: activeStartDate,
            drillDown: drillDown,
            drillUp: drillUp,
            onChange: onChange,
            setActiveStartDate: setActiveStartDate,
            value: value,
            view: view
        };
    }, [
        activeStartDate,
        drillDown,
        drillUp,
        onChange,
        setActiveStartDate,
        value,
        view
    ]);
    function renderContent(next) {
        var currentActiveStartDate = next ? (0, _datesJs.getBeginNext)(view, activeStartDate) : (0, _datesJs.getBegin)(view, activeStartDate);
        var onClick = drillDownAvailable ? drillDown : onChange;
        var commonProps = {
            activeStartDate: currentActiveStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onClick: onClick,
            onMouseOver: selectRange ? onMouseOver : undefined,
            tileClassName: tileClassName,
            tileContent: tileContent,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType
        };
        switch(view){
            case 'century':
                return (0, _jsxRuntime.jsx)((0, _centuryViewJsDefault.default), __assign({
                    formatYear: formatYear,
                    showNeighboringCentury: showNeighboringCentury
                }, commonProps));
            case 'decade':
                return (0, _jsxRuntime.jsx)((0, _decadeViewJsDefault.default), __assign({
                    formatYear: formatYear,
                    showNeighboringDecade: showNeighboringDecade
                }, commonProps));
            case 'year':
                return (0, _jsxRuntime.jsx)((0, _yearViewJsDefault.default), __assign({
                    formatMonth: formatMonth,
                    formatMonthYear: formatMonthYear
                }, commonProps));
            case 'month':
                return (0, _jsxRuntime.jsx)((0, _monthViewJsDefault.default), __assign({
                    calendarType: calendarType,
                    formatDay: formatDay,
                    formatLongDate: formatLongDate,
                    formatShortWeekday: formatShortWeekday,
                    formatWeekday: formatWeekday,
                    onClickWeekNumber: onClickWeekNumber,
                    onMouseLeave: selectRange ? onMouseLeave : undefined,
                    showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined' ? showFixedNumberOfWeeks : showDoubleView,
                    showNeighboringMonth: showNeighboringMonth,
                    showWeekNumbers: showWeekNumbers
                }, commonProps));
            default:
                throw new Error("Invalid view: ".concat(view, "."));
        }
    }
    function renderNavigation() {
        if (!showNavigation) return null;
        return (0, _jsxRuntime.jsx)((0, _navigationJsDefault.default), {
            activeStartDate: activeStartDate,
            drillUp: drillUp,
            formatMonthYear: formatMonthYear,
            formatYear: formatYear,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            navigationAriaLabel: navigationAriaLabel,
            navigationAriaLive: navigationAriaLive,
            navigationLabel: navigationLabel,
            next2AriaLabel: next2AriaLabel,
            next2Label: next2Label,
            nextAriaLabel: nextAriaLabel,
            nextLabel: nextLabel,
            prev2AriaLabel: prev2AriaLabel,
            prev2Label: prev2Label,
            prevAriaLabel: prevAriaLabel,
            prevLabel: prevLabel,
            setActiveStartDate: setActiveStartDate,
            showDoubleView: showDoubleView,
            view: view,
            views: views
        });
    }
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    return (0, _jsxRuntime.jsxs)("div", {
        className: (0, _clsxDefault.default)(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
        ref: inputRef,
        children: [
            renderNavigation(),
            (0, _jsxRuntime.jsxs)("div", {
                className: "".concat(baseClassName, "__viewContainer"),
                onBlur: selectRange ? onMouseLeave : undefined,
                onMouseLeave: selectRange ? onMouseLeave : undefined,
                children: [
                    renderContent(),
                    showDoubleView ? renderContent(true) : null
                ]
            })
        ]
    });
});
exports.default = Calendar;

},{"react/jsx-runtime":"6AEwr","react":"21dqq","clsx":"gocd3","./Calendar/Navigation.js":"8fVVr","./CenturyView.js":"j5zGB","./DecadeView.js":"5tXnG","./YearView.js":"7DDGa","./MonthView.js":"knc9x","./shared/dates.js":"aY0Di","./shared/utils.js":"1EhLy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fVVr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _jsxRuntime = require("react/jsx-runtime");
var _getUserLocale = require("get-user-locale");
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
'use client';
var className = 'react-calendar__navigation';
function Navigation(_a) {
    var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear = _b === void 0 ? (0, _dateFormatterJs.formatMonthYear) : _b, _c = _a.formatYear, formatYear = _c === void 0 ? (0, _dateFormatterJs.formatYear) : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? '' : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? '' : _e, _f = _a.next2Label, next2Label = _f === void 0 ? "\xbb" : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? '' : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? "\u203A" : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? '' : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? "\xab" : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? '' : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? "\u2039" : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== 'century';
    var previousActiveStartDate = (0, _datesJs.getBeginPrevious)(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, _datesJs.getBeginPrevious2)(view, activeStartDate) : undefined;
    var nextActiveStartDate = (0, _datesJs.getBeginNext)(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, _datesJs.getBeginNext2)(view, activeStartDate) : undefined;
    var prevButtonDisabled = function() {
        if (previousActiveStartDate.getFullYear() < 0) return true;
        var previousActiveEndDate = (0, _datesJs.getEndPrevious)(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
        if (previousActiveStartDate2.getFullYear() < 0) return true;
        var previousActiveEndDate = (0, _datesJs.getEndPrevious2)(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, 'prev');
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, 'prev2');
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, 'next');
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, 'next2');
    }
    function renderLabel(date) {
        var label = function() {
            switch(view){
                case 'century':
                    return (0, _datesJs.getCenturyLabel)(locale, formatYear, date);
                case 'decade':
                    return (0, _datesJs.getDecadeLabel)(locale, formatYear, date);
                case 'year':
                    return formatYear(locale, date);
                case 'month':
                    return formatMonthYear(locale, date);
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        }();
        return navigationLabel ? navigationLabel({
            date: date,
            label: label,
            locale: locale || (0, _getUserLocale.getUserLocale)() || undefined,
            view: view
        }) : label;
    }
    function renderButton() {
        var labelClassName = "".concat(className, "__label");
        return (0, _jsxRuntime.jsxs)("button", {
            "aria-label": navigationAriaLabel,
            "aria-live": navigationAriaLive,
            className: labelClassName,
            disabled: !drillUpAvailable,
            onClick: drillUp,
            style: {
                flexGrow: 1
            },
            type: "button",
            children: [
                (0, _jsxRuntime.jsx)("span", {
                    className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"),
                    children: renderLabel(activeStartDate)
                }),
                showDoubleView ? (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
                    children: [
                        (0, _jsxRuntime.jsx)("span", {
                            className: "".concat(labelClassName, "__divider"),
                            children: " \u2013 "
                        }),
                        (0, _jsxRuntime.jsx)("span", {
                            className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"),
                            children: renderLabel(nextActiveStartDate)
                        })
                    ]
                }) : null
            ]
        });
    }
    return (0, _jsxRuntime.jsxs)("div", {
        className: className,
        children: [
            prev2Label !== null && shouldShowPrevNext2Buttons ? (0, _jsxRuntime.jsx)("button", {
                "aria-label": prev2AriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
                disabled: prev2ButtonDisabled,
                onClick: onClickPrevious2,
                type: "button",
                children: prev2Label
            }) : null,
            prevLabel !== null && (0, _jsxRuntime.jsx)("button", {
                "aria-label": prevAriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
                disabled: prevButtonDisabled,
                onClick: onClickPrevious,
                type: "button",
                children: prevLabel
            }),
            renderButton(),
            nextLabel !== null && (0, _jsxRuntime.jsx)("button", {
                "aria-label": nextAriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__next-button"),
                disabled: nextButtonDisabled,
                onClick: onClickNext,
                type: "button",
                children: nextLabel
            }),
            next2Label !== null && shouldShowPrevNext2Buttons ? (0, _jsxRuntime.jsx)("button", {
                "aria-label": next2AriaLabel,
                className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
                disabled: next2ButtonDisabled,
                onClick: onClickNext2,
                type: "button",
                children: next2Label
            }) : null
        ]
    });
}

},{"react/jsx-runtime":"6AEwr","get-user-locale":"gsxNA","../shared/dates.js":"aY0Di","../shared/dateFormatter.js":"cxbk6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsxNA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUserLocales", ()=>getUserLocales);
parcelHelpers.export(exports, "getUserLocale", ()=>getUserLocale);
var _mem = require("mem");
var _memDefault = parcelHelpers.interopDefault(_mem);
function isString(el) {
    return typeof el === 'string';
}
function isUnique(el, index, arr) {
    return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
    return el.toLowerCase() === el;
}
function fixCommas(el) {
    return el.indexOf(',') === -1 ? el : el.split(',');
}
function normalizeLocale(locale) {
    if (!locale) return locale;
    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') return 'en-US';
    // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
    if (locale.indexOf('.') !== -1) {
        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;
        return normalizeLocale(actualLocale);
    }
    // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
    if (locale.indexOf('@') !== -1) {
        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;
        return normalizeLocale(actualLocale);
    }
    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) return locale;
    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;
    return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;
    var languageList = [];
    if (typeof navigator !== 'undefined') {
        var rawLanguages = navigator.languages || [];
        var languages = [];
        for(var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++){
            var rawLanguagesItem = rawLanguages_1[_i];
            languages = languages.concat(fixCommas(rawLanguagesItem));
        }
        var rawLanguage = navigator.language;
        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
        languageList = languageList.concat(languages, language);
    }
    if (useFallbackLocale) languageList.push(fallbackLocale);
    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = (0, _memDefault.default)(getUserLocalesInternal, {
    cacheKey: JSON.stringify
});
function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, _memDefault.default)(getUserLocaleInternal, {
    cacheKey: JSON.stringify
});
exports.default = getUserLocale;

},{"mem":"3tS9G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tS9G":[function(require,module,exports,__globalThis) {
'use strict';
const mimicFn = require("57a33a07709752a4");
const mapAgeCleaner = require("1e9d91b904cd1ab9");
const decoratorInstanceMap = new WeakMap();
const cacheStore = new WeakMap();
/**
[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

@param fn - Function to be memoized.

@example
```
import mem = require('mem');

let i = 0;
const counter = () => ++i;
const memoized = mem(counter);

memoized('foo');
//=> 1

// Cached as it's the same arguments
memoized('foo');
//=> 1

// Not cached anymore as the arguments changed
memoized('bar');
//=> 2

memoized('bar');
//=> 2
```
*/ const mem = (fn, { cacheKey, cache = new Map(), maxAge } = {})=>{
    if (typeof maxAge === 'number') // TODO: Drop after https://github.com/SamVerschueren/map-age-cleaner/issues/5
    // @ts-expect-error
    mapAgeCleaner(cache);
    const memoized = function(...arguments_) {
        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
        const cacheItem = cache.get(key);
        if (cacheItem) return cacheItem.data;
        const result = fn.apply(this, arguments_);
        cache.set(key, {
            data: result,
            maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY
        });
        return result;
    };
    mimicFn(memoized, fn, {
        ignoreNonConfigurable: true
    });
    cacheStore.set(memoized, cache);
    return memoized;
};
/**
@returns A [decorator](https://github.com/tc39/proposal-decorators) to memoize class methods or static class methods.

@example
```
import mem = require('mem');

class Example {
    index = 0

    @mem.decorator()
    counter() {
        return ++this.index;
    }
}

class ExampleWithOptions {
    index = 0

    @mem.decorator({maxAge: 1000})
    counter() {
        return ++this.index;
    }
}
```
*/ mem.decorator = (options = {})=>(target, propertyKey, descriptor)=>{
        const input = target[propertyKey];
        if (typeof input !== 'function') throw new TypeError('The decorated value must be a function');
        delete descriptor.value;
        delete descriptor.writable;
        descriptor.get = function() {
            if (!decoratorInstanceMap.has(this)) {
                const value = mem(input, options);
                decoratorInstanceMap.set(this, value);
                return value;
            }
            return decoratorInstanceMap.get(this);
        };
    };
/**
Clear all cached data of a memoized function.

@param fn - Memoized function.
*/ mem.clear = (fn)=>{
    const cache = cacheStore.get(fn);
    if (!cache) throw new TypeError('Can\'t clear a function that was not memoized!');
    if (typeof cache.clear !== 'function') throw new TypeError('The cache Map can\'t be cleared!');
    cache.clear();
};
module.exports = mem;

},{"57a33a07709752a4":"5gC2j","1e9d91b904cd1ab9":"dGYBR"}],"5gC2j":[function(require,module,exports,__globalThis) {
'use strict';
const copyProperty = (to, from, property, ignoreNonConfigurable)=>{
    // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
    // `Function#prototype` is non-writable and non-configurable so can never be modified.
    if (property === 'length' || property === 'prototype') return;
    // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
    if (property === 'arguments' || property === 'caller') return;
    const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
    const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
    if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) return;
    Object.defineProperty(to, property, fromDescriptor);
};
// `Object.defineProperty()` throws if the property exists, is not configurable and either:
//  - one its descriptors is changed
//  - it is non-writable and its value is changed
const canCopyProperty = function(toDescriptor, fromDescriptor) {
    return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from)=>{
    const fromPrototype = Object.getPrototypeOf(from);
    if (fromPrototype === Object.getPrototypeOf(to)) return;
    Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody)=>`/* Wrapped ${withName}*/\n${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');
// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name)=>{
    const withName = name === '' ? '' : `with ${name.trim()}() `;
    const newToString = wrappedToString.bind(null, withName, from.toString());
    // Ensure `to.toString.toString` is non-enumerable and has the same `same`
    Object.defineProperty(newToString, 'name', toStringName);
    Object.defineProperty(to, 'toString', {
        ...toStringDescriptor,
        value: newToString
    });
};
const mimicFn = (to, from, { ignoreNonConfigurable = false } = {})=>{
    const { name } = to;
    for (const property of Reflect.ownKeys(from))copyProperty(to, from, property, ignoreNonConfigurable);
    changePrototype(to, from);
    changeToString(to, from, name);
    return to;
};
module.exports = mimicFn;

},{}],"dGYBR":[function(require,module,exports,__globalThis) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function(resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const p_defer_1 = __importDefault(require("526f57a4c30ce969"));
function mapAgeCleaner(map, property = 'maxAge') {
    let processingKey;
    let processingTimer;
    let processingDeferred;
    const cleanup = ()=>__awaiter(this, void 0, void 0, function*() {
            if (processingKey !== undefined) // If we are already processing an item, we can safely exit
            return;
            const setupTimer = (item)=>__awaiter(this, void 0, void 0, function*() {
                    processingDeferred = p_defer_1.default();
                    const delay = item[1][property] - Date.now();
                    if (delay <= 0) {
                        // Remove the item immediately if the delay is equal to or below 0
                        map.delete(item[0]);
                        processingDeferred.resolve();
                        return;
                    }
                    // Keep track of the current processed key
                    processingKey = item[0];
                    processingTimer = setTimeout(()=>{
                        // Remove the item when the timeout fires
                        map.delete(item[0]);
                        if (processingDeferred) processingDeferred.resolve();
                    }, delay);
                    // tslint:disable-next-line:strict-type-predicates
                    if (typeof processingTimer.unref === 'function') // Don't hold up the process from exiting
                    processingTimer.unref();
                    return processingDeferred.promise;
                });
            try {
                for (const entry of map)yield setupTimer(entry);
            } catch (_a) {
            // Do nothing if an error occurs, this means the timer was cleaned up and we should stop processing
            }
            processingKey = undefined;
        });
    const reset = ()=>{
        processingKey = undefined;
        if (processingTimer !== undefined) {
            clearTimeout(processingTimer);
            processingTimer = undefined;
        }
        if (processingDeferred !== undefined) {
            processingDeferred.reject(undefined);
            processingDeferred = undefined;
        }
    };
    const originalSet = map.set.bind(map);
    map.set = (key, value)=>{
        if (map.has(key)) // If the key already exist, remove it so we can add it back at the end of the map.
        map.delete(key);
        // Call the original `map.set`
        const result = originalSet(key, value);
        // If we are already processing a key and the key added is the current processed key, stop processing it
        if (processingKey && processingKey === key) reset();
        // Always run the cleanup method in case it wasn't started yet
        cleanup(); // tslint:disable-line:no-floating-promises
        return result;
    };
    cleanup(); // tslint:disable-line:no-floating-promises
    return map;
}
exports.default = mapAgeCleaner;
// Add support for CJS
module.exports = mapAgeCleaner;
module.exports.default = mapAgeCleaner;

},{"526f57a4c30ce969":"cWx93"}],"cWx93":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = ()=>{
    const ret = {};
    ret.promise = new Promise((resolve, reject)=>{
        ret.resolve = resolve;
        ret.reject = reject;
    });
    return ret;
};

},{}],"aY0Di":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Simple getters - getting a property of a given point in time */ /**
 * Gets day of the week of a given date.
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Day of the week.
 */ parcelHelpers.export(exports, "getDayOfWeek", ()=>getDayOfWeek);
/**
 * Century
 */ /**
 * Gets the year of the beginning of a century of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a century.
 */ parcelHelpers.export(exports, "getBeginOfCenturyYear", ()=>getBeginOfCenturyYear);
/**
 * Decade
 */ /**
 * Gets the year of the beginning of a decade of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a decade.
 */ parcelHelpers.export(exports, "getBeginOfDecadeYear", ()=>getBeginOfDecadeYear);
/**
 * Week
 */ /**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {Date} Beginning of a given week.
 */ parcelHelpers.export(exports, "getBeginOfWeek", ()=>getBeginOfWeek);
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Week number.
 */ parcelHelpers.export(exports, "getWeekNumber", ()=>getWeekNumber);
/**
 * Others
 */ /**
 * Returns the beginning of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a given range.
 */ parcelHelpers.export(exports, "getBegin", ()=>getBegin);
/**
 * Returns the beginning of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a previous given range.
 */ parcelHelpers.export(exports, "getBeginPrevious", ()=>getBeginPrevious);
/**
 * Returns the beginning of a next given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a next given range.
 */ parcelHelpers.export(exports, "getBeginNext", ()=>getBeginNext);
parcelHelpers.export(exports, "getBeginPrevious2", ()=>getBeginPrevious2);
parcelHelpers.export(exports, "getBeginNext2", ()=>getBeginNext2);
/**
 * Returns the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a given range.
 */ parcelHelpers.export(exports, "getEnd", ()=>getEnd);
/**
 * Returns the end of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a previous given range.
 */ parcelHelpers.export(exports, "getEndPrevious", ()=>getEndPrevious);
parcelHelpers.export(exports, "getEndPrevious2", ()=>getEndPrevious2);
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date[]} Beginning and end of a given range.
 */ parcelHelpers.export(exports, "getRange", ()=>getRange);
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {Date[]} Beginning and end of a given range.
 */ parcelHelpers.export(exports, "getValueRange", ()=>getValueRange);
/**
 * @callback FormatYear
 * @param {string} locale Locale.
 * @param {Date} date Date.
 * @returns {string} Formatted year.
 */ /**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a century of a given date.
 */ parcelHelpers.export(exports, "getCenturyLabel", ()=>getCenturyLabel);
/**
 * Returns a string labelling a decade of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a decade of a given date.
 */ parcelHelpers.export(exports, "getDecadeLabel", ()=>getDecadeLabel);
/**
 * Returns a boolean determining whether a given date is the current day of the week.
 *
 * @param {Date} date Date.
 * @returns {boolean} Whether a given date is the current day of the week.
 */ parcelHelpers.export(exports, "isCurrentDayOfWeek", ()=>isCurrentDayOfWeek);
/**
 * Returns a boolean determining whether a given date is a weekend day.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {boolean} Whether a given date is a weekend day.
 */ parcelHelpers.export(exports, "isWeekend", ()=>isWeekend);
var _dateUtils = require("@wojtekmaj/date-utils");
var _constJs = require("./const.js");
var _dateFormatterJs = require("./dateFormatter.js");
var SUNDAY = (0, _constJs.WEEKDAYS)[0];
var FRIDAY = (0, _constJs.WEEKDAYS)[5];
var SATURDAY = (0, _constJs.WEEKDAYS)[6];
function getDayOfWeek(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var weekday = date.getDay();
    switch(calendarType){
        case (0, _constJs.CALENDAR_TYPES).ISO_8601:
            // Shifts days of the week so that Monday is 0, Sunday is 6
            return (weekday + 6) % 7;
        case (0, _constJs.CALENDAR_TYPES).ISLAMIC:
            return (weekday + 1) % 7;
        case (0, _constJs.CALENDAR_TYPES).HEBREW:
        case (0, _constJs.CALENDAR_TYPES).GREGORY:
            return weekday;
        default:
            throw new Error('Unsupported calendar type.');
    }
}
function getBeginOfCenturyYear(date) {
    var beginOfCentury = (0, _dateUtils.getCenturyStart)(date);
    return (0, _dateUtils.getYear)(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
    var beginOfDecade = (0, _dateUtils.getDecadeStart)(date);
    return (0, _dateUtils.getYear)(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var year = (0, _dateUtils.getYear)(date);
    var monthIndex = (0, _dateUtils.getMonth)(date);
    var day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var calendarTypeForWeekNumber = calendarType === (0, _constJs.CALENDAR_TYPES).GREGORY ? (0, _constJs.CALENDAR_TYPES).GREGORY : (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var beginOfWeek = getBeginOfWeek(date, calendarType);
    var year = (0, _dateUtils.getYear)(date) + 1;
    var dayInWeekOne;
    var beginOfFirstWeek;
    // Look for the first week one that does not come after a given date
    do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === (0, _constJs.CALENDAR_TYPES).ISO_8601 ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
        year -= 1;
    }while (date < beginOfFirstWeek);
    return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
function getBegin(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, _dateUtils.getCenturyStart)(date);
        case 'decade':
            return (0, _dateUtils.getDecadeStart)(date);
        case 'year':
            return (0, _dateUtils.getYearStart)(date);
        case 'month':
            return (0, _dateUtils.getMonthStart)(date);
        case 'day':
            return (0, _dateUtils.getDayStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, _dateUtils.getPreviousCenturyStart)(date);
        case 'decade':
            return (0, _dateUtils.getPreviousDecadeStart)(date);
        case 'year':
            return (0, _dateUtils.getPreviousYearStart)(date);
        case 'month':
            return (0, _dateUtils.getPreviousMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, _dateUtils.getNextCenturyStart)(date);
        case 'decade':
            return (0, _dateUtils.getNextDecadeStart)(date);
        case 'year':
            return (0, _dateUtils.getNextYearStart)(date);
        case 'month':
            return (0, _dateUtils.getNextMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, _dateUtils.getPreviousDecadeStart)(date, -100);
        case 'year':
            return (0, _dateUtils.getPreviousYearStart)(date, -10);
        case 'month':
            return (0, _dateUtils.getPreviousMonthStart)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, _dateUtils.getNextDecadeStart)(date, 100);
        case 'year':
            return (0, _dateUtils.getNextYearStart)(date, 10);
        case 'month':
            return (0, _dateUtils.getNextMonthStart)(date, 12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEnd(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, _dateUtils.getCenturyEnd)(date);
        case 'decade':
            return (0, _dateUtils.getDecadeEnd)(date);
        case 'year':
            return (0, _dateUtils.getYearEnd)(date);
        case 'month':
            return (0, _dateUtils.getMonthEnd)(date);
        case 'day':
            return (0, _dateUtils.getDayEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, _dateUtils.getPreviousCenturyEnd)(date);
        case 'decade':
            return (0, _dateUtils.getPreviousDecadeEnd)(date);
        case 'year':
            return (0, _dateUtils.getPreviousYearEnd)(date);
        case 'month':
            return (0, _dateUtils.getPreviousMonthEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious2(rangeType, date) {
    switch(rangeType){
        case 'decade':
            return (0, _dateUtils.getPreviousDecadeEnd)(date, -100);
        case 'year':
            return (0, _dateUtils.getPreviousYearEnd)(date, -10);
        case 'month':
            return (0, _dateUtils.getPreviousMonthEnd)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getRange(rangeType, date) {
    switch(rangeType){
        case 'century':
            return (0, _dateUtils.getCenturyRange)(date);
        case 'decade':
            return (0, _dateUtils.getDecadeRange)(date);
        case 'year':
            return (0, _dateUtils.getYearRange)(date);
        case 'month':
            return (0, _dateUtils.getMonthRange)(date);
        case 'day':
            return (0, _dateUtils.getDayRange)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getValueRange(rangeType, date1, date2) {
    var rawNextValue = [
        date1,
        date2
    ].sort(function(a, b) {
        return a.getTime() - b.getTime();
    });
    return [
        getBegin(rangeType, rawNextValue[0]),
        getEnd(rangeType, rawNextValue[1])
    ];
}
function toYearLabel(locale, formatYear, dates) {
    return dates.map(function(date) {
        return (formatYear || (0, _dateFormatterJs.formatYear))(locale, date);
    }).join(" \u2013 ");
}
function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, _dateUtils.getCenturyRange)(date));
}
function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, _dateUtils.getDecadeRange)(date));
}
function isCurrentDayOfWeek(date) {
    return date.getDay() === new Date().getDay();
}
function isWeekend(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var weekday = date.getDay();
    switch(calendarType){
        case (0, _constJs.CALENDAR_TYPES).ISLAMIC:
        case (0, _constJs.CALENDAR_TYPES).HEBREW:
            return weekday === FRIDAY || weekday === SATURDAY;
        case (0, _constJs.CALENDAR_TYPES).ISO_8601:
        case (0, _constJs.CALENDAR_TYPES).GREGORY:
            return weekday === SATURDAY || weekday === SUNDAY;
        default:
            throw new Error('Unsupported calendar type.');
    }
}

},{"@wojtekmaj/date-utils":"51hTi","./const.js":"hFFI9","./dateFormatter.js":"cxbk6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51hTi":[function(require,module,exports,__globalThis) {
/**
 * Utils
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Simple getters - getting a property of a given point in time
 */ /**
 * Gets year from a given date.
 *
 * @param {DateLike} date Date to get year from
 * @returns {number} Year
 */ parcelHelpers.export(exports, "getYear", ()=>getYear);
/**
 * Gets month from a given date.
 *
 * @param {Date} date Date to get month from
 * @returns {number} Month
 */ parcelHelpers.export(exports, "getMonth", ()=>getMonth);
/**
 * Gets human-readable month from a given date.
 *
 * @param {Date} date Date to get human-readable month from
 * @returns {number} Human-readable month
 */ parcelHelpers.export(exports, "getMonthHuman", ()=>getMonthHuman);
/**
 * Gets day of the month from a given date.
 *
 * @param {Date} date Date to get day of the month from
 * @returns {number} Day of the month
 */ parcelHelpers.export(exports, "getDate", ()=>getDate);
/**
 * Gets hours from a given date.
 *
 * @param {Date | string} date Date to get hours from
 * @returns {number} Hours
 */ parcelHelpers.export(exports, "getHours", ()=>getHours);
/**
 * Gets minutes from a given date.
 *
 * @param {Date | string} date Date to get minutes from
 * @returns {number} Minutes
 */ parcelHelpers.export(exports, "getMinutes", ()=>getMinutes);
/**
 * Gets seconds from a given date.
 *
 * @param {Date | string} date Date to get seconds from
 * @returns {number} Seconds
 */ parcelHelpers.export(exports, "getSeconds", ()=>getSeconds);
/**
 * Gets milliseconds from a given date.
 *
 * @param {Date | string} date Date to get milliseconds from
 * @returns {number} Milliseconds
 */ parcelHelpers.export(exports, "getMilliseconds", ()=>getMilliseconds);
/**
 * Century
 */ /**
 * Gets century start date from a given date.
 *
 * @param {DateLike} date Date to get century start from
 * @returns {Date} Century start date
 */ parcelHelpers.export(exports, "getCenturyStart", ()=>getCenturyStart);
parcelHelpers.export(exports, "getPreviousCenturyStart", ()=>getPreviousCenturyStart);
parcelHelpers.export(exports, "getNextCenturyStart", ()=>getNextCenturyStart);
parcelHelpers.export(exports, "getCenturyEnd", ()=>getCenturyEnd);
parcelHelpers.export(exports, "getPreviousCenturyEnd", ()=>getPreviousCenturyEnd);
parcelHelpers.export(exports, "getNextCenturyEnd", ()=>getNextCenturyEnd);
parcelHelpers.export(exports, "getCenturyRange", ()=>getCenturyRange);
/**
 * Decade
 */ /**
 * Gets decade start date from a given date.
 *
 * @param {DateLike} date Date to get decade start from
 * @returns {Date} Decade start date
 */ parcelHelpers.export(exports, "getDecadeStart", ()=>getDecadeStart);
parcelHelpers.export(exports, "getPreviousDecadeStart", ()=>getPreviousDecadeStart);
parcelHelpers.export(exports, "getNextDecadeStart", ()=>getNextDecadeStart);
parcelHelpers.export(exports, "getDecadeEnd", ()=>getDecadeEnd);
parcelHelpers.export(exports, "getPreviousDecadeEnd", ()=>getPreviousDecadeEnd);
parcelHelpers.export(exports, "getNextDecadeEnd", ()=>getNextDecadeEnd);
parcelHelpers.export(exports, "getDecadeRange", ()=>getDecadeRange);
/**
 * Year
 */ /**
 * Gets year start date from a given date.
 *
 * @param {DateLike} date Date to get year start from
 * @returns {Date} Year start date
 */ parcelHelpers.export(exports, "getYearStart", ()=>getYearStart);
parcelHelpers.export(exports, "getPreviousYearStart", ()=>getPreviousYearStart);
parcelHelpers.export(exports, "getNextYearStart", ()=>getNextYearStart);
parcelHelpers.export(exports, "getYearEnd", ()=>getYearEnd);
parcelHelpers.export(exports, "getPreviousYearEnd", ()=>getPreviousYearEnd);
parcelHelpers.export(exports, "getNextYearEnd", ()=>getNextYearEnd);
parcelHelpers.export(exports, "getYearRange", ()=>getYearRange);
/**
 * Gets month start date from a given date.
 *
 * @param {DateLike} date Date to get month start from
 * @returns {Date} Month start date
 */ parcelHelpers.export(exports, "getMonthStart", ()=>getMonthStart);
parcelHelpers.export(exports, "getPreviousMonthStart", ()=>getPreviousMonthStart);
parcelHelpers.export(exports, "getNextMonthStart", ()=>getNextMonthStart);
parcelHelpers.export(exports, "getMonthEnd", ()=>getMonthEnd);
parcelHelpers.export(exports, "getPreviousMonthEnd", ()=>getPreviousMonthEnd);
parcelHelpers.export(exports, "getNextMonthEnd", ()=>getNextMonthEnd);
parcelHelpers.export(exports, "getMonthRange", ()=>getMonthRange);
/**
 * Gets day start date from a given date.
 *
 * @param {DateLike} date Date to get day start from
 * @returns {Date} Day start date
 */ parcelHelpers.export(exports, "getDayStart", ()=>getDayStart);
parcelHelpers.export(exports, "getPreviousDayStart", ()=>getPreviousDayStart);
parcelHelpers.export(exports, "getNextDayStart", ()=>getNextDayStart);
parcelHelpers.export(exports, "getDayEnd", ()=>getDayEnd);
parcelHelpers.export(exports, "getPreviousDayEnd", ()=>getPreviousDayEnd);
parcelHelpers.export(exports, "getNextDayEnd", ()=>getNextDayEnd);
parcelHelpers.export(exports, "getDayRange", ()=>getDayRange);
/**
 * Other
 */ /**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date
 * @returns {number} Number of days in a month
 */ parcelHelpers.export(exports, "getDaysInMonth", ()=>getDaysInMonth);
/**
 * Returns local hours and minutes (hh:mm).
 *
 * @param {Date | string} date Date to get hours and minutes from
 * @returns {string} Local hours and minutes
 */ parcelHelpers.export(exports, "getHoursMinutes", ()=>getHoursMinutes);
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 *
 * @param {Date | string} date Date to get hours, minutes and seconds from
 * @returns {string} Local hours, minutes and seconds
 */ parcelHelpers.export(exports, "getHoursMinutesSeconds", ()=>getHoursMinutesSeconds);
/**
 * Returns local month in ISO-like format (YYYY-MM).
 *
 * @param {Date} date Date to get month in ISO-like format from
 * @returns {string} Local month in ISO-like format
 */ parcelHelpers.export(exports, "getISOLocalMonth", ()=>getISOLocalMonth);
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 *
 * @param {Date} date Date to get date in ISO-like format from
 * @returns {string} Local date in ISO-like format
 */ parcelHelpers.export(exports, "getISOLocalDate", ()=>getISOLocalDate);
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 *
 * @param {Date} date Date to get date & time in ISO-like format from
 * @returns {string} Local date & time in ISO-like format
 */ parcelHelpers.export(exports, "getISOLocalDateTime", ()=>getISOLocalDateTime);
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset) {
        if (offset === void 0) offset = defaultOffset;
        var previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(getStart, getEnd) {
    return function makeGetRangeInternal(date) {
        return [
            getStart(date),
            getEnd(date)
        ];
    };
}
function getYear(date) {
    if (date instanceof Date) return date.getFullYear();
    if (typeof date === 'number') return date;
    var year = parseInt(date, 10);
    if (typeof date === 'string' && !isNaN(year)) return year;
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getMonth(date) {
    if (date instanceof Date) return date.getMonth();
    throw new Error("Failed to get month from date: ".concat(date, "."));
}
function getMonthHuman(date) {
    if (date instanceof Date) return date.getMonth() + 1;
    throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
function getDate(date) {
    if (date instanceof Date) return date.getDate();
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getHours(date) {
    if (date instanceof Date) return date.getHours();
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var hoursString = datePieces[0];
            if (hoursString) {
                var hours = parseInt(hoursString, 10);
                if (!isNaN(hours)) return hours;
            }
        }
    }
    throw new Error("Failed to get hours from date: ".concat(date, "."));
}
function getMinutes(date) {
    if (date instanceof Date) return date.getMinutes();
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var minutesString = datePieces[1] || '0';
            var minutes = parseInt(minutesString, 10);
            if (!isNaN(minutes)) return minutes;
        }
    }
    throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
function getSeconds(date) {
    if (date instanceof Date) return date.getSeconds();
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var secondsWithMillisecondsString = datePieces[2] || '0';
            var seconds = parseInt(secondsWithMillisecondsString, 10);
            if (!isNaN(seconds)) return seconds;
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
function getMilliseconds(date) {
    if (date instanceof Date) return date.getMilliseconds();
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var secondsWithMillisecondsString = datePieces[2] || '0';
            var millisecondsString = secondsWithMillisecondsString.split('.')[1] || '0';
            var milliseconds = parseInt(millisecondsString, 10);
            if (!isNaN(milliseconds)) return milliseconds;
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
function getCenturyStart(date) {
    var year = getYear(date);
    var centuryStartYear = year + (-year + 1) % 100;
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
    var year = getYear(date);
    var decadeStartYear = year + (-year + 1) % 10;
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
    var year = getYear(date);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */ function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
        if (offset === void 0) offset = defaultOffset;
        var year = getYear(date);
        var month = getMonth(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getMonthStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */ function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset) {
        if (offset === void 0) offset = defaultOffset;
        var year = getYear(date);
        var month = getMonth(date);
        var day = getDate(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getDayStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
    return getDate(getMonthEnd(date));
}
function padStart(num, val) {
    if (val === void 0) val = 2;
    var numStr = "".concat(num);
    if (numStr.length >= val) return num;
    return "0000".concat(numStr).slice(-val);
}
function getHoursMinutes(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    return "".concat(hours, ":").concat(minutes);
}
function getHoursMinutesSeconds(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    var seconds = padStart(getSeconds(date));
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
function getISOLocalMonth(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    return "".concat(year, "-").concat(month);
}
function getISOLocalDate(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    var day = padStart(getDate(date));
    return "".concat(year, "-").concat(month, "-").concat(day);
}
function getISOLocalDateTime(date) {
    return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFFI9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CALENDAR_TYPES", ()=>CALENDAR_TYPES);
parcelHelpers.export(exports, "CALENDAR_TYPE_LOCALES", ()=>CALENDAR_TYPE_LOCALES);
parcelHelpers.export(exports, "WEEKDAYS", ()=>WEEKDAYS);
var CALENDAR_TYPES = {
    GREGORY: 'gregory',
    HEBREW: 'hebrew',
    ISLAMIC: 'islamic',
    ISO_8601: 'iso8601'
};
var CALENDAR_TYPE_LOCALES = {
    gregory: [
        'en-CA',
        'en-US',
        'es-AR',
        'es-BO',
        'es-CL',
        'es-CO',
        'es-CR',
        'es-DO',
        'es-EC',
        'es-GT',
        'es-HN',
        'es-MX',
        'es-NI',
        'es-PA',
        'es-PE',
        'es-PR',
        'es-SV',
        'es-VE',
        'pt-BR'
    ],
    hebrew: [
        'he',
        'he-IL'
    ],
    islamic: [
        // ar-LB, ar-MA intentionally missing
        'ar',
        'ar-AE',
        'ar-BH',
        'ar-DZ',
        'ar-EG',
        'ar-IQ',
        'ar-JO',
        'ar-KW',
        'ar-LY',
        'ar-OM',
        'ar-QA',
        'ar-SA',
        'ar-SD',
        'ar-SY',
        'ar-YE',
        'dv',
        'dv-MV',
        'ps',
        'ps-AR'
    ]
};
var WEEKDAYS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxbk6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "formatDay", ()=>formatDay);
parcelHelpers.export(exports, "formatLongDate", ()=>formatLongDate);
parcelHelpers.export(exports, "formatMonth", ()=>formatMonth);
parcelHelpers.export(exports, "formatMonthYear", ()=>formatMonthYear);
parcelHelpers.export(exports, "formatShortWeekday", ()=>formatShortWeekday);
parcelHelpers.export(exports, "formatWeekday", ()=>formatWeekday);
parcelHelpers.export(exports, "formatYear", ()=>formatYear);
var _getUserLocale = require("get-user-locale");
var _getUserLocaleDefault = parcelHelpers.interopDefault(_getUserLocale);
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, _getUserLocaleDefault.default)();
        if (!formatterCache.has(localeWithDefault)) formatterCache.set(localeWithDefault, new Map());
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */ function toSafeHour(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return function(locale, date) {
        return getFormatter(options)(locale, toSafeHour(date));
    };
}
var formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
var formatDayOptions = {
    day: 'numeric'
};
var formatLongDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
var formatMonthOptions = {
    month: 'long'
};
var formatMonthYearOptions = {
    month: 'long',
    year: 'numeric'
};
var formatShortWeekdayOptions = {
    weekday: 'short'
};
var formatWeekdayOptions = {
    weekday: 'long'
};
var formatYearOptions = {
    year: 'numeric'
};
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

},{"get-user-locale":"gsxNA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5zGB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CenturyView);
var _jsxRuntime = require("react/jsx-runtime");
var _decadesJs = require("./CenturyView/Decades.js");
var _decadesJsDefault = parcelHelpers.interopDefault(_decadesJs);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function CenturyView(props) {
    function renderDecades() {
        return (0, _jsxRuntime.jsx)((0, _decadesJsDefault.default), __assign({}, props));
    }
    return (0, _jsxRuntime.jsx)("div", {
        className: "react-calendar__century-view",
        children: renderDecades()
    });
}

},{"react/jsx-runtime":"6AEwr","./CenturyView/Decades.js":"62Tcu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62Tcu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Decades);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _decadeJs = require("./Decade.js");
var _decadeJsDefault = parcelHelpers.interopDefault(_decadeJs);
var _datesJs = require("../shared/dates.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Decades(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "showNeighboringCentury",
        "value",
        "valueType"
    ]);
    var start = (0, _datesJs.getBeginOfCenturyYear)(activeStartDate);
    var end = start + (showNeighboringCentury ? 119 : 99);
    return (0, _jsxRuntime.jsx)((0, _tileGroupJsDefault.default), {
        className: "react-calendar__century-view__decades",
        dateTransform: (0, _dateUtils.getDecadeStart),
        dateType: "decade",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _jsxRuntime.jsx)((0, _decadeJsDefault.default), __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                currentCentury: start,
                date: date
            }), date.getTime());
        },
        start: start,
        step: 10,
        value: value,
        valueType: valueType
    });
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../TileGroup.js":"gT8If","./Decade.js":"6eDw4","../shared/dates.js":"aY0Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gT8If":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>TileGroup);
var _jsxRuntime = require("react/jsx-runtime");
var _flexJs = require("./Flex.js");
var _flexJsDefault = parcelHelpers.interopDefault(_flexJs);
var _utilsJs = require("./shared/utils.js");
function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType;
    var tiles = [];
    for(var point = start; point <= end; point += step){
        var date = dateTransform(point);
        tiles.push(renderTile({
            classes: (0, _utilsJs.getTileClasses)({
                date: date,
                dateType: dateType,
                hover: hover,
                value: value,
                valueType: valueType
            }),
            date: date
        }));
    }
    return (0, _jsxRuntime.jsx)((0, _flexJsDefault.default), {
        className: className,
        count: count,
        offset: offset,
        wrap: true,
        children: tiles
    });
}

},{"react/jsx-runtime":"6AEwr","./Flex.js":"jkQ9j","./shared/utils.js":"1EhLy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jkQ9j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Flex);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function toPercent(num) {
    return "".concat(num, "%");
}
function Flex(_a) {
    var children = _a.children, className = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest(_a, [
        "children",
        "className",
        "count",
        "direction",
        "offset",
        "style",
        "wrap"
    ]);
    return (0, _jsxRuntime.jsx)("div", __assign({
        className: className,
        style: __assign({
            display: 'flex',
            flexDirection: direction,
            flexWrap: wrap ? 'wrap' : 'nowrap'
        }, style)
    }, otherProps, {
        children: (0, _react.Children).map(children, function(child, index) {
            var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
            return (0, _react.cloneElement)(child, __assign(__assign({}, child.props), {
                style: {
                    flexBasis: toPercent(100 / count),
                    flexShrink: 0,
                    flexGrow: 0,
                    overflow: 'hidden',
                    marginLeft: marginInlineStart,
                    marginInlineStart: marginInlineStart,
                    marginInlineEnd: 0
                }
            }));
        })
    }));
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1EhLy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */ parcelHelpers.export(exports, "between", ()=>between);
parcelHelpers.export(exports, "isValueWithinRange", ()=>isValueWithinRange);
parcelHelpers.export(exports, "isRangeWithinRange", ()=>isRangeWithinRange);
parcelHelpers.export(exports, "doRangesOverlap", ()=>doRangesOverlap);
parcelHelpers.export(exports, "getTileClasses", ()=>getTileClasses);
var _datesJs = require("./dates.js");
function between(value, min, max) {
    if (min && min > value) return min;
    if (max && max < value) return max;
    return value;
}
function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];
    if (isRange) {
        classes.push(baseClassName);
        var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) classes.push("".concat(baseClassName, "Start"));
        if (isRangeEnd) classes.push("".concat(baseClassName, "End"));
        if (isRangeStart && isRangeEnd) classes.push("".concat(baseClassName, "BothEnds"));
    }
    return classes;
}
function isCompleteValue(value) {
    if (Array.isArray(value)) return value[0] !== null && value[1] !== null;
    return value !== null;
}
function getTileClasses(args) {
    if (!args) throw new Error('args is required');
    var value = args.value, date = args.date, hover = args.hover;
    var className = 'react-calendar__tile';
    var classes = [
        className
    ];
    if (!date) return classes;
    var now = new Date();
    var dateRange = function() {
        if (Array.isArray(date)) return date;
        var dateType = args.dateType;
        if (!dateType) throw new Error('dateType is required when date is not an array of two dates');
        return (0, _datesJs.getRange)(dateType, date);
    }();
    if (isValueWithinRange(now, dateRange)) classes.push("".concat(className, "--now"));
    if (!value || !isCompleteValue(value)) return classes;
    var valueRange = function() {
        if (Array.isArray(value)) return value;
        var valueType = args.valueType;
        if (!valueType) throw new Error('valueType is required when value is not an array of two dates');
        return (0, _datesJs.getRange)(valueType, value);
    }();
    if (isRangeWithinRange(valueRange, dateRange)) classes.push("".concat(className, "--active"));
    else if (doRangesOverlap(valueRange, dateRange)) classes.push("".concat(className, "--hasActive"));
    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, valueRangeClassNames);
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    if (hover && valueArray.length === 1) {
        var hoverRange = hover > valueRange[0] ? [
            valueRange[0],
            hover
        ] : [
            hover,
            valueRange[0]
        ];
        var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
        classes.push.apply(classes, hoverRangeClassNames);
    }
    return classes;
}

},{"./dates.js":"aY0Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6eDw4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Decade);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var className = 'react-calendar__century-view__decades__decade';
function Decade(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a.currentCentury, _c = _a.formatYear, formatYear = _c === void 0 ? (0, _dateFormatterJs.formatYear) : _c, otherProps = __rest(_a, [
        "classes",
        "currentCentury",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) classesProps.push.apply(classesProps, classes);
    if (className) classesProps.push(className);
    if ((0, _dateUtils.getCenturyStart)(date).getFullYear() !== currentCentury) classesProps.push("".concat(className, "--neighboringCentury"));
    return (0, _jsxRuntime.jsx)((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: classesProps,
        maxDateTransform: (0, _dateUtils.getDecadeEnd),
        minDateTransform: (0, _dateUtils.getDecadeStart),
        view: "century",
        children: (0, _datesJs.getDecadeLabel)(locale, formatYear, date)
    }));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../Tile.js":"hpf3J","../shared/dates.js":"aY0Di","../shared/dateFormatter.js":"cxbk6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpf3J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Tile);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
function Tile(props) {
    var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
    var tileClassName = (0, _react.useMemo)(function() {
        var args = {
            activeStartDate: activeStartDate,
            date: date,
            view: view
        };
        return typeof tileClassNameProps === 'function' ? tileClassNameProps(args) : tileClassNameProps;
    }, [
        activeStartDate,
        date,
        tileClassNameProps,
        view
    ]);
    var tileContent = (0, _react.useMemo)(function() {
        var args = {
            activeStartDate: activeStartDate,
            date: date,
            view: view
        };
        return typeof tileContentProps === 'function' ? tileContentProps(args) : tileContentProps;
    }, [
        activeStartDate,
        date,
        tileContentProps,
        view
    ]);
    return (0, _jsxRuntime.jsxs)("button", {
        className: (0, _clsxDefault.default)(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || (tileDisabled === null || tileDisabled === void 0 ? void 0 : tileDisabled({
            activeStartDate: activeStartDate,
            date: date,
            view: view
        })),
        onClick: onClick ? function(event) {
            return onClick(date, event);
        } : undefined,
        onFocus: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        onMouseOver: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        style: style,
        type: "button",
        children: [
            formatAbbr ? (0, _jsxRuntime.jsx)("abbr", {
                "aria-label": formatAbbr(locale, date),
                children: children
            }) : children,
            tileContent
        ]
    });
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","clsx":"gocd3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tXnG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DecadeView);
var _jsxRuntime = require("react/jsx-runtime");
var _yearsJs = require("./DecadeView/Years.js");
var _yearsJsDefault = parcelHelpers.interopDefault(_yearsJs);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function DecadeView(props) {
    function renderYears() {
        return (0, _jsxRuntime.jsx)((0, _yearsJsDefault.default), __assign({}, props));
    }
    return (0, _jsxRuntime.jsx)("div", {
        className: "react-calendar__decade-view",
        children: renderYears()
    });
}

},{"react/jsx-runtime":"6AEwr","./DecadeView/Years.js":"lEA7g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEA7g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Years);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _yearJs = require("./Year.js");
var _yearJsDefault = parcelHelpers.interopDefault(_yearJs);
var _datesJs = require("../shared/dates.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Years(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "showNeighboringDecade",
        "value",
        "valueType"
    ]);
    var start = (0, _datesJs.getBeginOfDecadeYear)(activeStartDate);
    var end = start + (showNeighboringDecade ? 11 : 9);
    return (0, _jsxRuntime.jsx)((0, _tileGroupJsDefault.default), {
        className: "react-calendar__decade-view__years",
        dateTransform: (0, _dateUtils.getYearStart),
        dateType: "year",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _jsxRuntime.jsx)((0, _yearJsDefault.default), __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                currentDecade: start,
                date: date
            }), date.getTime());
        },
        start: start,
        value: value,
        valueType: valueType
    });
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../TileGroup.js":"gT8If","./Year.js":"iFqOq","../shared/dates.js":"aY0Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFqOq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Year);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _dateFormatterJs = require("../shared/dateFormatter.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var className = 'react-calendar__decade-view__years__year';
function Year(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a.currentDecade, _c = _a.formatYear, formatYear = _c === void 0 ? (0, _dateFormatterJs.formatYear) : _c, otherProps = __rest(_a, [
        "classes",
        "currentDecade",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) classesProps.push.apply(classesProps, classes);
    if (className) classesProps.push(className);
    if ((0, _dateUtils.getDecadeStart)(date).getFullYear() !== currentDecade) classesProps.push("".concat(className, "--neighboringDecade"));
    return (0, _jsxRuntime.jsx)((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: classesProps,
        maxDateTransform: (0, _dateUtils.getYearEnd),
        minDateTransform: (0, _dateUtils.getYearStart),
        view: "decade",
        children: formatYear(locale, date)
    }));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../Tile.js":"hpf3J","../shared/dateFormatter.js":"cxbk6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DDGa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>YearView);
var _jsxRuntime = require("react/jsx-runtime");
var _monthsJs = require("./YearView/Months.js");
var _monthsJsDefault = parcelHelpers.interopDefault(_monthsJs);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function YearView(props) {
    function renderMonths() {
        return (0, _jsxRuntime.jsx)((0, _monthsJsDefault.default), __assign({}, props));
    }
    return (0, _jsxRuntime.jsx)("div", {
        className: "react-calendar__year-view",
        children: renderMonths()
    });
}

},{"react/jsx-runtime":"6AEwr","./YearView/Months.js":"jRHb3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRHb3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Months);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _monthJs = require("./Month.js");
var _monthJsDefault = parcelHelpers.interopDefault(_monthJs);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Months(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "value",
        "valueType"
    ]);
    var start = 0;
    var end = 11;
    var year = (0, _dateUtils.getYear)(activeStartDate);
    return (0, _jsxRuntime.jsx)((0, _tileGroupJsDefault.default), {
        className: "react-calendar__year-view__months",
        dateTransform: function(monthIndex) {
            var date = new Date();
            date.setFullYear(year, monthIndex, 1);
            return (0, _dateUtils.getMonthStart)(date);
        },
        dateType: "month",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _jsxRuntime.jsx)((0, _monthJsDefault.default), __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                date: date
            }), date.getTime());
        },
        start: start,
        value: value,
        valueType: valueType
    });
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../TileGroup.js":"gT8If","./Month.js":"fRaBF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRaBF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Month);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _dateFormatterJs = require("../shared/dateFormatter.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var className = 'react-calendar__year-view__months__month';
function Month(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth = _c === void 0 ? (0, _dateFormatterJs.formatMonth) : _c, _d = _a.formatMonthYear, formatMonthYear = _d === void 0 ? (0, _dateFormatterJs.formatMonthYear) : _d, otherProps = __rest(_a, [
        "classes",
        "formatMonth",
        "formatMonthYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    return (0, _jsxRuntime.jsx)((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: __spreadArray(__spreadArray([], classes, true), [
            className
        ], false),
        formatAbbr: formatMonthYear,
        maxDateTransform: (0, _dateUtils.getMonthEnd),
        minDateTransform: (0, _dateUtils.getMonthStart),
        view: "year",
        children: formatMonth(locale, date)
    }));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../Tile.js":"hpf3J","../shared/dateFormatter.js":"cxbk6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knc9x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MonthView);
var _jsxRuntime = require("react/jsx-runtime");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _daysJs = require("./MonthView/Days.js");
var _daysJsDefault = parcelHelpers.interopDefault(_daysJs);
var _weekdaysJs = require("./MonthView/Weekdays.js");
var _weekdaysJsDefault = parcelHelpers.interopDefault(_weekdaysJs);
var _weekNumbersJs = require("./MonthView/WeekNumbers.js");
var _weekNumbersJsDefault = parcelHelpers.interopDefault(_weekNumbersJs);
var _constJs = require("./shared/const.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function getCalendarTypeFromLocale(locale) {
    if (locale) for(var _i = 0, _a = Object.entries((0, _constJs.CALENDAR_TYPE_LOCALES)); _i < _a.length; _i++){
        var _b = _a[_i], calendarType = _b[0], locales = _b[1];
        if (locales.includes(locale)) return calendarType;
    }
    return (0, _constJs.CALENDAR_TYPES).ISO_8601;
}
function MonthView(props) {
    var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest(props, [
        "calendarType",
        "formatShortWeekday",
        "formatWeekday",
        "onClickWeekNumber",
        "showWeekNumbers"
    ]);
    function renderWeekdays() {
        return (0, _jsxRuntime.jsx)((0, _weekdaysJsDefault.default), {
            calendarType: calendarType,
            formatShortWeekday: formatShortWeekday,
            formatWeekday: formatWeekday,
            locale: locale,
            onMouseLeave: onMouseLeave
        });
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) return null;
        return (0, _jsxRuntime.jsx)((0, _weekNumbersJsDefault.default), {
            activeStartDate: activeStartDate,
            calendarType: calendarType,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: onMouseLeave,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks
        });
    }
    function renderDays() {
        return (0, _jsxRuntime.jsx)((0, _daysJsDefault.default), __assign({
            calendarType: calendarType
        }, childProps));
    }
    var className = 'react-calendar__month-view';
    return (0, _jsxRuntime.jsx)("div", {
        className: (0, _clsxDefault.default)(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''),
        children: (0, _jsxRuntime.jsxs)("div", {
            style: {
                display: 'flex',
                alignItems: 'flex-end'
            },
            children: [
                renderWeekNumbers(),
                (0, _jsxRuntime.jsxs)("div", {
                    style: {
                        flexGrow: 1,
                        width: '100%'
                    },
                    children: [
                        renderWeekdays(),
                        renderDays()
                    ]
                })
            ]
        })
    });
}

},{"react/jsx-runtime":"6AEwr","clsx":"gocd3","./MonthView/Days.js":"47ZQQ","./MonthView/Weekdays.js":"fUOyS","./MonthView/WeekNumbers.js":"7SpYc","./shared/const.js":"hFFI9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47ZQQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Days);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _dayJs = require("./Day.js");
var _dayJsDefault = parcelHelpers.interopDefault(_dayJs);
var _datesJs = require("../shared/dates.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Days(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "calendarType",
        "hover",
        "showFixedNumberOfWeeks",
        "showNeighboringMonth",
        "value",
        "valueType"
    ]);
    var year = (0, _dateUtils.getYear)(activeStartDate);
    var monthIndex = (0, _dateUtils.getMonth)(activeStartDate);
    var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    var dayOfWeek = (0, _datesJs.getDayOfWeek)(activeStartDate, calendarType);
    var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */ var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */ var end = function() {
        if (showFixedNumberOfWeeks) // Always show 6 weeks
        return start + 42 - 1;
        var daysInMonth = (0, _dateUtils.getDaysInMonth)(activeStartDate);
        if (showNeighboringMonth) {
            var activeEndDate = new Date();
            activeEndDate.setFullYear(year, monthIndex, daysInMonth);
            activeEndDate.setHours(0, 0, 0, 0);
            var daysUntilEndOfTheWeek = 7 - (0, _datesJs.getDayOfWeek)(activeEndDate, calendarType) - 1;
            return daysInMonth + daysUntilEndOfTheWeek;
        }
        return daysInMonth;
    }();
    return (0, _jsxRuntime.jsx)((0, _tileGroupJsDefault.default), {
        className: "react-calendar__month-view__days",
        count: 7,
        dateTransform: function(day) {
            var date = new Date();
            date.setFullYear(year, monthIndex, day);
            return (0, _dateUtils.getDayStart)(date);
        },
        dateType: "day",
        hover: hover,
        end: end,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _jsxRuntime.jsx)((0, _dayJsDefault.default), __assign({}, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                calendarType: calendarType,
                currentMonthIndex: monthIndex,
                date: date
            }), date.getTime());
        },
        offset: offset,
        start: start,
        value: value,
        valueType: valueType
    });
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../TileGroup.js":"gT8If","./Day.js":"f0sIY","../shared/dates.js":"aY0Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0sIY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Day);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var className = 'react-calendar__month-view__days__day';
function Day(_a) {
    var calendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay = _c === void 0 ? (0, _dateFormatterJs.formatDay) : _c, _d = _a.formatLongDate, formatLongDate = _d === void 0 ? (0, _dateFormatterJs.formatLongDate) : _d, otherProps = __rest(_a, [
        "calendarType",
        "classes",
        "currentMonthIndex",
        "formatDay",
        "formatLongDate"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) classesProps.push.apply(classesProps, classes);
    if (className) classesProps.push(className);
    if ((0, _datesJs.isWeekend)(date, calendarType)) classesProps.push("".concat(className, "--weekend"));
    if (date.getMonth() !== currentMonthIndex) classesProps.push("".concat(className, "--neighboringMonth"));
    return (0, _jsxRuntime.jsx)((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: classesProps,
        formatAbbr: formatLongDate,
        maxDateTransform: (0, _dateUtils.getDayEnd),
        minDateTransform: (0, _dateUtils.getDayStart),
        view: "month",
        children: formatDay(locale, date)
    }));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","../Tile.js":"hpf3J","../shared/dates.js":"aY0Di","../shared/dateFormatter.js":"cxbk6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUOyS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Weekdays);
var _jsxRuntime = require("react/jsx-runtime");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _dateUtils = require("@wojtekmaj/date-utils");
var _flexJs = require("../Flex.js");
var _flexJsDefault = parcelHelpers.interopDefault(_flexJs);
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
var className = 'react-calendar__month-view__weekdays';
var weekdayClassName = "".concat(className, "__weekday");
function Weekdays(props) {
    var calendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday = _a === void 0 ? (0, _dateFormatterJs.formatShortWeekday) : _a, _b = props.formatWeekday, formatWeekday = _b === void 0 ? (0, _dateFormatterJs.formatWeekday) : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
    var anyDate = new Date();
    var beginOfMonth = (0, _dateUtils.getMonthStart)(anyDate);
    var year = (0, _dateUtils.getYear)(beginOfMonth);
    var monthIndex = (0, _dateUtils.getMonth)(beginOfMonth);
    var weekdays = [];
    for(var weekday = 1; weekday <= 7; weekday += 1){
        var weekdayDate = new Date(year, monthIndex, weekday - (0, _datesJs.getDayOfWeek)(beginOfMonth, calendarType));
        var abbr = formatWeekday(locale, weekdayDate);
        weekdays.push((0, _jsxRuntime.jsx)("div", {
            className: (0, _clsxDefault.default)(weekdayClassName, (0, _datesJs.isCurrentDayOfWeek)(weekdayDate) && "".concat(weekdayClassName, "--current"), (0, _datesJs.isWeekend)(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")),
            children: (0, _jsxRuntime.jsx)("abbr", {
                "aria-label": abbr,
                title: abbr,
                children: formatShortWeekday(locale, weekdayDate).replace('.', '')
            })
        }, weekday));
    }
    return (0, _jsxRuntime.jsx)((0, _flexJsDefault.default), {
        className: className,
        count: 7,
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        children: weekdays
    });
}

},{"react/jsx-runtime":"6AEwr","clsx":"gocd3","@wojtekmaj/date-utils":"51hTi","../Flex.js":"jkQ9j","../shared/dates.js":"aY0Di","../shared/dateFormatter.js":"cxbk6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7SpYc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WeekNumbers);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _weekNumberJs = require("./WeekNumber.js");
var _weekNumberJsDefault = parcelHelpers.interopDefault(_weekNumberJs);
var _flexJs = require("../Flex.js");
var _flexJsDefault = parcelHelpers.interopDefault(_flexJs);
var _datesJs = require("../shared/dates.js");
function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var numberOfWeeks = function() {
        if (showFixedNumberOfWeeks) return 6;
        var numberOfDays = (0, _dateUtils.getDaysInMonth)(activeStartDate);
        var startWeekday = (0, _datesJs.getDayOfWeek)(activeStartDate, calendarType);
        var days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    }();
    var dates = function() {
        var year = (0, _dateUtils.getYear)(activeStartDate);
        var monthIndex = (0, _dateUtils.getMonth)(activeStartDate);
        var day = (0, _dateUtils.getDate)(activeStartDate);
        var result = [];
        for(var index = 0; index < numberOfWeeks; index += 1)result.push((0, _datesJs.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
        return result;
    }();
    var weekNumbers = dates.map(function(date) {
        return (0, _datesJs.getWeekNumber)(date, calendarType);
    });
    return (0, _jsxRuntime.jsx)((0, _flexJsDefault.default), {
        className: "react-calendar__month-view__weekNumbers",
        count: numberOfWeeks,
        direction: "column",
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        style: {
            flexBasis: 'calc(100% * (1 / 8)',
            flexShrink: 0
        },
        children: weekNumbers.map(function(weekNumber, weekIndex) {
            var date = dates[weekIndex];
            if (!date) throw new Error('date is not defined');
            return (0, _jsxRuntime.jsx)((0, _weekNumberJsDefault.default), {
                date: date,
                onClickWeekNumber: onClickWeekNumber,
                weekNumber: weekNumber
            }, weekNumber);
        })
    });
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./WeekNumber.js":"iNHhv","../Flex.js":"jkQ9j","../shared/dates.js":"aY0Di","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNHhv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WeekNumber);
var _jsxRuntime = require("react/jsx-runtime");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var className = 'react-calendar__tile';
function WeekNumber(props) {
    var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
    var children = (0, _jsxRuntime.jsx)("span", {
        children: weekNumber
    });
    if (onClickWeekNumber) {
        var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, _jsxRuntime.jsx)("button", __assign({}, otherProps, {
            className: className,
            onClick: function(event) {
                return onClickWeekNumber_1(weekNumber_1, date_1, event);
            },
            type: "button",
            children: children
        }));
    // biome-ignore lint/style/noUselessElse: TypeScript is unhappy if we remove this else
    } else {
        var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, _jsxRuntime.jsx)("div", __assign({}, otherProps, {
            className: className,
            children: children
        }));
    }
}

},{"react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKrD3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Clock", ()=>(0, _clockJsDefault.default));
var _clockJs = require("./Clock.js");
var _clockJsDefault = parcelHelpers.interopDefault(_clockJs);
exports.default = (0, _clockJsDefault.default);

},{"./Clock.js":"5ABIj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ABIj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Clock);
var _jsxRuntime = require("react/jsx-runtime");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _dateUtils = require("@wojtekmaj/date-utils");
var _handJs = require("./Hand.js");
var _handJsDefault = parcelHelpers.interopDefault(_handJs);
var _markJs = require("./Mark.js");
var _markJsDefault = parcelHelpers.interopDefault(_markJs);
var _markNumberJs = require("./MarkNumber.js");
var _markNumberJsDefault = parcelHelpers.interopDefault(_markNumberJs);
var _hourFormatterJs = require("./shared/hourFormatter.js");
var _utilsJs = require("./shared/utils.js");
function Clock(_a) {
    var className = _a.className, _b = _a.formatHour, formatHour = _b === void 0 ? (0, _hourFormatterJs.formatHour) : _b, _c = _a.hourHandLength, hourHandLength = _c === void 0 ? 50 : _c, hourHandOppositeLength = _a.hourHandOppositeLength, _d = _a.hourHandWidth, hourHandWidth = _d === void 0 ? 4 : _d, _e = _a.hourMarksLength, hourMarksLength = _e === void 0 ? 10 : _e, _f = _a.hourMarksWidth, hourMarksWidth = _f === void 0 ? 3 : _f, locale = _a.locale, _g = _a.minuteHandLength, minuteHandLength = _g === void 0 ? 70 : _g, minuteHandOppositeLength = _a.minuteHandOppositeLength, _h = _a.minuteHandWidth, minuteHandWidth = _h === void 0 ? 2 : _h, _j = _a.minuteMarksLength, minuteMarksLength = _j === void 0 ? 6 : _j, _k = _a.minuteMarksWidth, minuteMarksWidth = _k === void 0 ? 1 : _k, _l = _a.renderHourMarks, renderHourMarks = _l === void 0 ? true : _l, _m = _a.renderMinuteHand, renderMinuteHand = _m === void 0 ? true : _m, _o = _a.renderMinuteMarks, renderMinuteMarks = _o === void 0 ? true : _o, renderNumbers = _a.renderNumbers, _p = _a.renderSecondHand, renderSecondHand = _p === void 0 ? true : _p, _q = _a.secondHandLength, secondHandLength = _q === void 0 ? 90 : _q, secondHandOppositeLength = _a.secondHandOppositeLength, _r = _a.secondHandWidth, secondHandWidth = _r === void 0 ? 1 : _r, _s = _a.size, size = _s === void 0 ? 150 : _s, useMillisecondPrecision = _a.useMillisecondPrecision, value = _a.value;
    function renderMinuteMarksFn() {
        if (!renderMinuteMarks) return null;
        var minuteMarks = [];
        for(var i = 1; i <= 60; i += 1){
            var isHourMark = renderHourMarks && !(i % 5);
            if (!isHourMark) minuteMarks.push((0, _jsxRuntime.jsx)((0, _markJsDefault.default), {
                angle: i * 6,
                length: minuteMarksLength,
                name: "minute",
                width: minuteMarksWidth
            }, "minute_".concat(i)));
        }
        return minuteMarks;
    }
    function renderHourMarksFn() {
        if (!renderHourMarks) return null;
        var hourMarks = [];
        for(var i = 1; i <= 12; i += 1)hourMarks.push((0, _jsxRuntime.jsx)((0, _markJsDefault.default), {
            angle: i * 30,
            length: hourMarksLength,
            name: "hour",
            width: hourMarksWidth
        }, "hour_".concat(i)));
        return hourMarks;
    }
    function renderNumbersFn() {
        if (!renderNumbers) return null;
        var numbers = [];
        for(var i = 1; i <= 12; i += 1)numbers.push((0, _jsxRuntime.jsx)((0, _markNumberJsDefault.default), {
            angle: i * 30,
            length: (0, _utilsJs.safeMax)(renderHourMarks && hourMarksLength, renderMinuteMarks && minuteMarksLength, 0),
            name: "number",
            number: formatHour(locale, i)
        }, "number_".concat(i)));
        return numbers;
    }
    function renderFace() {
        return (0, _jsxRuntime.jsxs)("div", {
            className: "react-clock__face",
            children: [
                renderMinuteMarksFn(),
                renderHourMarksFn(),
                renderNumbersFn()
            ]
        });
    }
    function renderHourHandFn() {
        var angle = value ? (0, _dateUtils.getHours)(value) * 30 + (0, _dateUtils.getMinutes)(value) / 2 + (0, _dateUtils.getSeconds)(value) / 120 + (useMillisecondPrecision ? (0, _dateUtils.getMilliseconds)(value) / 120000 : 0) : 0;
        return (0, _jsxRuntime.jsx)((0, _handJsDefault.default), {
            angle: angle,
            length: hourHandLength,
            name: "hour",
            oppositeLength: hourHandOppositeLength,
            width: hourHandWidth
        });
    }
    function renderMinuteHandFn() {
        if (!renderMinuteHand) return null;
        var angle = value ? (0, _dateUtils.getHours)(value) * 360 + (0, _dateUtils.getMinutes)(value) * 6 + (0, _dateUtils.getSeconds)(value) / 10 + (useMillisecondPrecision ? (0, _dateUtils.getMilliseconds)(value) / 10000 : 0) : 0;
        return (0, _jsxRuntime.jsx)((0, _handJsDefault.default), {
            angle: angle,
            length: minuteHandLength,
            name: "minute",
            oppositeLength: minuteHandOppositeLength,
            width: minuteHandWidth
        });
    }
    function renderSecondHandFn() {
        if (!renderSecondHand) return null;
        var angle = value ? (0, _dateUtils.getMinutes)(value) * 360 + (0, _dateUtils.getSeconds)(value) * 6 + (useMillisecondPrecision ? (0, _dateUtils.getMilliseconds)(value) * 0.006 : 0) : 0;
        return (0, _jsxRuntime.jsx)((0, _handJsDefault.default), {
            angle: angle,
            length: secondHandLength,
            name: "second",
            oppositeLength: secondHandOppositeLength,
            width: secondHandWidth
        });
    }
    return (0, _jsxRuntime.jsxs)("time", {
        className: (0, _clsxDefault.default)('react-clock', className),
        dateTime: value instanceof Date ? value.toLocaleTimeString('en', {
            hourCycle: 'h23',
            hour: '2-digit',
            minute: renderMinuteHand ? '2-digit' : undefined,
            second: renderSecondHand ? '2-digit' : undefined
        }) : value || undefined,
        style: {
            width: size,
            height: size
        },
        children: [
            renderFace(),
            renderHourHandFn(),
            renderMinuteHandFn(),
            renderSecondHandFn()
        ]
    });
}

},{"react/jsx-runtime":"6AEwr","clsx":"gocd3","@wojtekmaj/date-utils":"51hTi","./Hand.js":"bm2kF","./Mark.js":"kessj","./MarkNumber.js":"lAO9T","./shared/hourFormatter.js":"3Asfu","./shared/utils.js":"aGDoM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bm2kF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Hand);
var _jsxRuntime = require("react/jsx-runtime");
function Hand(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, name = _a.name, _c = _a.length, length = _c === void 0 ? 100 : _c, _d = _a.oppositeLength, oppositeLength = _d === void 0 ? 10 : _d, _e = _a.width, width = _e === void 0 ? 1 : _e;
    return (0, _jsxRuntime.jsx)("div", {
        className: "react-clock__hand react-clock__".concat(name, "-hand"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, _jsxRuntime.jsx)("div", {
            className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"),
            style: {
                width: "".concat(width, "px"),
                top: "".concat(50 - length / 2, "%"),
                bottom: "".concat(50 - oppositeLength / 2, "%")
            }
        })
    });
}

},{"react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kessj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var Mark = (0, _react.memo)(function Mark(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, _d = _a.width, width = _d === void 0 ? 1 : _d;
    return (0, _jsxRuntime.jsx)("div", {
        className: "react-clock__mark react-clock__".concat(name, "-mark"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, _jsxRuntime.jsx)("div", {
            className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"),
            style: {
                width: "".concat(width, "px"),
                top: 0,
                bottom: "".concat(100 - length / 2, "%")
            }
        })
    });
});
exports.default = Mark;

},{"react/jsx-runtime":"6AEwr","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lAO9T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var MarkNumber = (0, _react.memo)(function MarkNumber(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, number = _a.number;
    return (0, _jsxRuntime.jsx)("div", {
        className: "react-clock__mark react-clock__".concat(name, "-mark"),
        style: {
            transform: "rotate(".concat(angle, "deg)")
        },
        children: (0, _jsxRuntime.jsx)("div", {
            className: "react-clock__mark__number",
            style: {
                transform: "rotate(-".concat(angle, "deg)"),
                top: "".concat(length / 2, "%")
            },
            children: number
        })
    });
});
exports.default = MarkNumber;

},{"react/jsx-runtime":"6AEwr","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Asfu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatHour", ()=>formatHour);
var _getUserLocale = require("get-user-locale");
var _getUserLocaleDefault = parcelHelpers.interopDefault(_getUserLocale);
function formatHour(locale, hour) {
    return hour.toLocaleString(locale || (0, _getUserLocaleDefault.default)() || undefined);
}

},{"get-user-locale":"gsxNA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGDoM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "safeMax", ()=>safeMax);
function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMax() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return Math.max.apply(Math, args.filter(isValidNumber));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GeRq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fit", ()=>(0, _fitJsDefault.default));
var _fitJs = require("./Fit.js");
var _fitJsDefault = parcelHelpers.interopDefault(_fitJs);
exports.default = (0, _fitJsDefault.default);

},{"./Fit.js":"2tsG0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tsG0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Fit);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _detectElementOverflow = require("detect-element-overflow");
var _detectElementOverflowDefault = parcelHelpers.interopDefault(_detectElementOverflow);
var _warning = require("warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
'use client';
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var isBrowser = typeof document !== 'undefined';
var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function findScrollContainer(element) {
    var parent = element.parentElement;
    while(parent){
        var overflow = window.getComputedStyle(parent).overflow;
        if (overflow.split(' ').every(function(o) {
            return o === 'auto' || o === 'scroll';
        })) return parent;
        parent = parent.parentElement;
    }
    return document.documentElement;
}
function alignAxis(_a) {
    var axis = _a.axis, container = _a.container, element = _a.element, invertAxis = _a.invertAxis, scrollContainer = _a.scrollContainer, secondary = _a.secondary, spacing = _a.spacing;
    var style = window.getComputedStyle(element);
    var parent = container.parentElement;
    if (!parent) return;
    var scrollContainerCollisions = (0, _detectElementOverflowDefault.default)(parent, scrollContainer);
    var documentCollisions = (0, _detectElementOverflowDefault.default)(parent, document.documentElement);
    var isX = axis === 'x';
    var startProperty = isX ? 'left' : 'top';
    var endProperty = isX ? 'right' : 'bottom';
    var sizeProperty = isX ? 'width' : 'height';
    var overflowStartProperty = "overflow".concat(capitalize(startProperty));
    var overflowEndProperty = "overflow".concat(capitalize(endProperty));
    var scrollProperty = "scroll".concat(capitalize(startProperty));
    var uppercasedSizeProperty = capitalize(sizeProperty);
    var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
    var clientSizeProperty = "client".concat(uppercasedSizeProperty);
    var minSizeProperty = "min-".concat(sizeProperty);
    var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
    var startSpacing = typeof spacing === 'object' ? spacing[startProperty] : spacing;
    var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
    var endSpacing = typeof spacing === 'object' ? spacing[endProperty] : spacing;
    var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;
    if (secondary) {
        availableStartSpace += parent[clientSizeProperty];
        availableEndSpace += parent[clientSizeProperty];
    }
    var offsetSize = element[offsetSizeProperty];
    function displayStart() {
        element.style[startProperty] = 'auto';
        element.style[endProperty] = secondary ? '0' : '100%';
    }
    function displayEnd() {
        element.style[startProperty] = secondary ? '0' : '100%';
        element.style[endProperty] = 'auto';
    }
    function displayIfFits(availableSpace, display) {
        var fits = offsetSize <= availableSpace;
        if (fits) display();
        return fits;
    }
    function displayStartIfFits() {
        return displayIfFits(availableStartSpace, displayStart);
    }
    function displayEndIfFits() {
        return displayIfFits(availableEndSpace, displayEnd);
    }
    function displayWhereverShrinkedFits() {
        var moreSpaceStart = availableStartSpace > availableEndSpace;
        var rawMinSize = style.getPropertyValue(minSizeProperty);
        var minSize = rawMinSize ? parseInt(rawMinSize, 10) : null;
        function shrinkToSize(size) {
            (0, _warningDefault.default)(!minSize || size >= minSize, "<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
            var newSize = Math.max(size, minSize || 0);
            (0, _warningDefault.default)(false, "<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
            element.style[sizeProperty] = "".concat(newSize, "px");
        }
        if (moreSpaceStart) {
            shrinkToSize(availableStartSpace);
            displayStart();
        } else {
            shrinkToSize(availableEndSpace);
            displayEnd();
        }
    }
    var fits;
    if (invertAxis) fits = displayStartIfFits() || displayEndIfFits();
    else fits = displayEndIfFits() || displayStartIfFits();
    if (!fits) displayWhereverShrinkedFits();
}
function alignMainAxis(args) {
    alignAxis(args);
}
function alignSecondaryAxis(args) {
    alignAxis(__assign(__assign({}, args), {
        axis: args.axis === 'x' ? 'y' : 'x',
        secondary: true
    }));
}
function alignBothAxis(args) {
    var invertAxis = args.invertAxis, invertSecondaryAxis = args.invertSecondaryAxis, commonArgs = __rest(args, [
        "invertAxis",
        "invertSecondaryAxis"
    ]);
    alignMainAxis(__assign(__assign({}, commonArgs), {
        invertAxis: invertAxis
    }));
    alignSecondaryAxis(__assign(__assign({}, commonArgs), {
        invertAxis: invertSecondaryAxis
    }));
}
function Fit(_a) {
    var children = _a.children, invertAxis = _a.invertAxis, invertSecondaryAxis = _a.invertSecondaryAxis, _b = _a.mainAxis, mainAxis = _b === void 0 ? 'y' : _b, _c = _a.spacing, spacing = _c === void 0 ? 8 : _c;
    var container = (0, _react.useRef)(undefined);
    var element = (0, _react.useRef)(undefined);
    var elementWidth = (0, _react.useRef)(undefined);
    var elementHeight = (0, _react.useRef)(undefined);
    var scrollContainer = (0, _react.useRef)(undefined);
    var fit = (0, _react.useCallback)(function() {
        if (!scrollContainer.current || !container.current || !element.current) return;
        var currentElementWidth = element.current.clientWidth;
        var currentElementHeight = element.current.clientHeight;
        // No need to recalculate - already did that for current dimensions
        if (elementWidth.current === currentElementWidth && elementHeight.current === currentElementHeight) return;
        // Save the dimensions so that we know we don't need to repeat the function if unchanged
        elementWidth.current = currentElementWidth;
        elementHeight.current = currentElementHeight;
        var parent = container.current.parentElement;
        // Container was unmounted
        if (!parent) return;
        /**
         * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
         * we wouldn't be able to place the child in the correct position.
         */ var style = window.getComputedStyle(element.current);
        var position = style.position;
        if (position !== 'absolute') element.current.style.position = 'absolute';
        /**
         * We need to ensure that <Fit />'s parent has a relative or absolute position. Otherwise,
         * we wouldn't be able to place the child in the correct position.
         */ var parentStyle = window.getComputedStyle(parent);
        var parentPosition = parentStyle.position;
        if (parentPosition !== 'relative' && parentPosition !== 'absolute') parent.style.position = 'relative';
        alignBothAxis({
            axis: mainAxis,
            container: container.current,
            element: element.current,
            invertAxis: invertAxis,
            invertSecondaryAxis: invertSecondaryAxis,
            scrollContainer: scrollContainer.current,
            spacing: spacing
        });
    }, [
        invertAxis,
        invertSecondaryAxis,
        mainAxis,
        spacing
    ]);
    var child = (0, _react.Children).only(children);
    (0, _react.useEffect)(function() {
        fit();
        function onMutation() {
            fit();
        }
        if (isMutationObserverSupported && element.current) {
            var mutationObserver = new MutationObserver(onMutation);
            mutationObserver.observe(element.current, {
                attributes: true,
                attributeFilter: [
                    'class',
                    'style'
                ]
            });
        }
    }, [
        fit
    ]);
    function assignRefs(domElement) {
        if (!domElement || !(domElement instanceof HTMLElement)) return;
        element.current = domElement;
        scrollContainer.current = findScrollContainer(domElement);
    }
    return (0, _jsxRuntime.jsx)("span", {
        ref: function(domContainer) {
            if (!domContainer) return;
            container.current = domContainer;
            var domElement = domContainer === null || domContainer === void 0 ? void 0 : domContainer.firstElementChild;
            assignRefs(domElement);
        },
        style: {
            display: 'contents'
        },
        children: child
    });
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","detect-element-overflow":"fvTMD","warning":"eUVzU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvTMD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>detectElementOverflow);
function getRect(element) {
    return element.getBoundingClientRect();
}
function detectElementOverflow(element, container) {
    return {
        get collidedTop () {
            return getRect(element).top < getRect(container).top;
        },
        get collidedBottom () {
            return getRect(element).bottom > getRect(container).bottom;
        },
        get collidedLeft () {
            return getRect(element).left < getRect(container).left;
        },
        get collidedRight () {
            return getRect(element).right > getRect(container).right;
        },
        get overflowTop () {
            return getRect(container).top - getRect(element).top;
        },
        get overflowBottom () {
            return getRect(element).bottom - getRect(container).bottom;
        },
        get overflowLeft () {
            return getRect(container).left - getRect(element).left;
        },
        get overflowRight () {
            return getRect(element).right - getRect(container).right;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUVzU":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = true;
var warning = function() {};
if (__DEV__) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++)args[key - 1] = arguments[key];
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') console.error(message);
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++)args[key - 2] = arguments[key];
        if (format === undefined) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!condition) printWarning.apply(null, [
            format
        ].concat(args));
    };
}
module.exports = warning;

},{}],"b0RLS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DateTimeInput);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _dateUtils = require("@wojtekmaj/date-utils");
var _dividerJs = require("./Divider.js");
var _dividerJsDefault = parcelHelpers.interopDefault(_dividerJs);
var _dayInput = require("react-date-picker/dist/esm/DateInput/DayInput");
var _dayInputDefault = parcelHelpers.interopDefault(_dayInput);
var _monthInput = require("react-date-picker/dist/esm/DateInput/MonthInput");
var _monthInputDefault = parcelHelpers.interopDefault(_monthInput);
var _monthSelect = require("react-date-picker/dist/esm/DateInput/MonthSelect");
var _monthSelectDefault = parcelHelpers.interopDefault(_monthSelect);
var _yearInput = require("react-date-picker/dist/esm/DateInput/YearInput");
var _yearInputDefault = parcelHelpers.interopDefault(_yearInput);
var _hour12Input = require("react-time-picker/dist/esm/TimeInput/Hour12Input");
var _hour12InputDefault = parcelHelpers.interopDefault(_hour12Input);
var _hour24Input = require("react-time-picker/dist/esm/TimeInput/Hour24Input");
var _hour24InputDefault = parcelHelpers.interopDefault(_hour24Input);
var _minuteInput = require("react-time-picker/dist/esm/TimeInput/MinuteInput");
var _minuteInputDefault = parcelHelpers.interopDefault(_minuteInput);
var _secondInput = require("react-time-picker/dist/esm/TimeInput/SecondInput");
var _secondInputDefault = parcelHelpers.interopDefault(_secondInput);
var _amPm = require("react-time-picker/dist/esm/TimeInput/AmPm");
var _amPmDefault = parcelHelpers.interopDefault(_amPm);
var _nativeInputJs = require("./DateTimeInput/NativeInput.js");
var _nativeInputJsDefault = parcelHelpers.interopDefault(_nativeInputJs);
var _dateFormatterJs = require("./shared/dateFormatter.js");
var _datesJs = require("./shared/dates.js");
var _utilsJs = require("./shared/utils.js");
'use client';
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getFormatterOptionsCache = {};
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
var allViews = [
    'hour',
    'minute',
    'second'
];
function toDate(value) {
    if (value instanceof Date) return value;
    return new Date(value);
}
function isSameDate(date, year, month, day) {
    return year === (0, _dateUtils.getYear)(date).toString() && month === (0, _dateUtils.getMonthHuman)(date).toString() && day === (0, _dateUtils.getDate)(date).toString();
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) return null;
    var valueDate = toDate(rawValue);
    if (isNaN(valueDate.getTime())) throw new Error("Invalid date: ".concat(value));
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate;
    var valuePiece = getValue(value, index);
    if (!valuePiece) return null;
    return (0, _utilsJs.between)(valuePiece, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
    return getDetailValue(args, 0);
};
function isInternalInput(element) {
    return element.dataset.input === 'true';
}
function findInput(element, property) {
    var nextElement = element;
    do nextElement = nextElement[property];
    while (nextElement && !isInternalInput(nextElement));
    return nextElement;
}
function focus(element) {
    if (element) element.focus();
}
function renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
    var usedFunctions = [];
    var pattern = new RegExp(Object.keys(elementFunctions).map(function(el) {
        return "".concat(el, "+");
    }).join('|'), 'g');
    var matches = placeholder.match(pattern);
    return placeholder.split(pattern).reduce(function(arr, element, index) {
        var divider = element && // eslint-disable-next-line react/no-array-index-key
        (0, _jsxRuntime.jsx)((0, _dividerJsDefault.default), {
            children: element
        }, "separator_".concat(index));
        arr.push(divider);
        var currentMatch = matches && matches[index];
        if (currentMatch) {
            var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function(elementFunction) {
                return currentMatch.match(elementFunction);
            })];
            if (!renderFunction) return arr;
            if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) arr.push(currentMatch);
            else {
                arr.push(renderFunction(currentMatch, index));
                usedFunctions.push(renderFunction);
            }
        }
        return arr;
    }, []);
}
var formatNumber = (0, _dateFormatterJs.getNumberFormatter)({
    useGrouping: false
});
function DateTimeInput(_a) {
    var amPmAriaLabel = _a.amPmAriaLabel, autoFocus = _a.autoFocus, className = _a.className, dayAriaLabel = _a.dayAriaLabel, dayPlaceholder = _a.dayPlaceholder, disabled = _a.disabled, format = _a.format, hourAriaLabel = _a.hourAriaLabel, hourPlaceholder = _a.hourPlaceholder, isWidgetOpenProps = _a.isWidgetOpen, locale = _a.locale, maxDate = _a.maxDate, _b = _a.maxDetail, maxDetail = _b === void 0 ? 'minute' : _b, minDate = _a.minDate, minuteAriaLabel = _a.minuteAriaLabel, minutePlaceholder = _a.minutePlaceholder, monthAriaLabel = _a.monthAriaLabel, monthPlaceholder = _a.monthPlaceholder, _c = _a.name, name = _c === void 0 ? 'datetime' : _c, nativeInputAriaLabel = _a.nativeInputAriaLabel, onChangeProps = _a.onChange, onInvalidChange = _a.onInvalidChange, required = _a.required, secondAriaLabel = _a.secondAriaLabel, secondPlaceholder = _a.secondPlaceholder, showLeadingZeros = _a.showLeadingZeros, valueProps = _a.value, yearAriaLabel = _a.yearAriaLabel, yearPlaceholder = _a.yearPlaceholder;
    var _d = (0, _react.useState)(null), amPm = _d[0], setAmPm = _d[1];
    var _e = (0, _react.useState)(null), year = _e[0], setYear = _e[1];
    var _f = (0, _react.useState)(null), month = _f[0], setMonth = _f[1];
    var _g = (0, _react.useState)(null), day = _g[0], setDay = _g[1];
    var _h = (0, _react.useState)(null), hour = _h[0], setHour = _h[1];
    var _j = (0, _react.useState)(null), minute = _j[0], setMinute = _j[1];
    var _k = (0, _react.useState)(null), second = _k[0], setSecond = _k[1];
    var _l = (0, _react.useState)(null), value = _l[0], setValue = _l[1];
    var amPmInput = (0, _react.useRef)(null);
    var yearInput = (0, _react.useRef)(null);
    var monthInput = (0, _react.useRef)(null);
    var monthSelect = (0, _react.useRef)(null);
    var dayInput = (0, _react.useRef)(null);
    var hour12Input = (0, _react.useRef)(null);
    var hour24Input = (0, _react.useRef)(null);
    var minuteInput = (0, _react.useRef)(null);
    var secondInput = (0, _react.useRef)(null);
    var _m = (0, _react.useState)(isWidgetOpenProps), isWidgetOpen = _m[0], setIsWidgetOpenOpen = _m[1];
    var lastPressedKey = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(function() {
        setIsWidgetOpenOpen(isWidgetOpenProps);
    }, [
        isWidgetOpenProps
    ]);
    (0, _react.useEffect)(function() {
        var nextValue = getDetailValueFrom({
            value: valueProps,
            minDate: minDate,
            maxDate: maxDate
        });
        if (nextValue) {
            setAmPm((0, _datesJs.convert24to12)((0, _dateUtils.getHours)(nextValue))[1]);
            setYear((0, _dateUtils.getYear)(nextValue).toString());
            setMonth((0, _dateUtils.getMonthHuman)(nextValue).toString());
            setDay((0, _dateUtils.getDate)(nextValue).toString());
            setHour((0, _dateUtils.getHours)(nextValue).toString());
            setMinute((0, _dateUtils.getMinutes)(nextValue).toString());
            setSecond((0, _dateUtils.getSeconds)(nextValue).toString());
            setValue(toDate(nextValue));
        } else {
            setAmPm(null);
            setYear(null);
            setMonth(null);
            setDay(null);
            setHour(null);
            setMinute(null);
            setSecond(null);
            setValue(null);
        }
    }, [
        valueProps,
        minDate,
        maxDate,
        // Toggling widget visibility resets values
        isWidgetOpen
    ]);
    var valueType = maxDetail;
    var formatTime = function() {
        var level = allViews.indexOf(maxDetail);
        var formatterOptions = getFormatterOptionsCache[level] || function() {
            var options = {
                hour: 'numeric'
            };
            if (level >= 1) options.minute = 'numeric';
            if (level >= 2) options.second = 'numeric';
            getFormatterOptionsCache[level] = options;
            return options;
        }();
        return (0, _dateFormatterJs.getFormatter)(formatterOptions);
    }();
    var datePlaceholder = function() {
        var year = 2017;
        var monthIndex = 11;
        var day = 11;
        var date = new Date(year, monthIndex, day);
        var formattedDate = (0, _dateFormatterJs.formatDate)(locale, date);
        var datePieces = [
            'year',
            'month',
            'day'
        ];
        var datePieceReplacements = [
            'y',
            'M',
            'd'
        ];
        function formatDatePiece(name, dateToFormat) {
            var formatterOptions = getFormatterOptionsCache[name] || function() {
                var _a;
                var options = (_a = {}, _a[name] = 'numeric', _a);
                getFormatterOptionsCache[name] = options;
                return options;
            }();
            return (0, _dateFormatterJs.getFormatter)(formatterOptions)(locale, dateToFormat).match(/\d{1,}/);
        }
        var placeholder = formattedDate;
        datePieces.forEach(function(datePiece, index) {
            var match = formatDatePiece(datePiece, date);
            if (match) {
                var formattedDatePiece = match[0];
                var datePieceReplacement = datePieceReplacements[index];
                placeholder = placeholder.replace(formattedDatePiece, datePieceReplacement);
            }
        });
        // See: https://github.com/wojtekmaj/react-date-picker/issues/396
        placeholder = placeholder.replace('17', 'y');
        return placeholder;
    }();
    var timePlaceholder = function() {
        var hour24 = 21;
        var hour12 = 9;
        var minute = 13;
        var second = 14;
        var date = new Date(2017, 0, 1, hour24, minute, second);
        return formatTime(locale, date).replace(formatNumber(locale, hour12), 'h').replace(formatNumber(locale, hour24), 'H').replace(formatNumber(locale, minute), 'mm').replace(formatNumber(locale, second), 'ss').replace(new RegExp((0, _utilsJs.getAmPmLabels)(locale).join('|')), 'a');
    }();
    var placeholder = format || "".concat(datePlaceholder, "\u00A0").concat(timePlaceholder);
    var dateDivider = function() {
        var dividers = datePlaceholder.match(/[^0-9a-z]/i);
        return dividers ? dividers[0] : null;
    }();
    var timeDivider = function() {
        var dividers = timePlaceholder.match(/[^0-9a-z]/i);
        return dividers ? dividers[0] : null;
    }();
    var maxTime = function() {
        if (!maxDate) return undefined;
        if (!isSameDate(maxDate, year, month, day)) return undefined;
        return (0, _dateUtils.getHoursMinutesSeconds)(maxDate || defaultMaxDate);
    }();
    var minTime = function() {
        if (!minDate) return undefined;
        if (!isSameDate(minDate, year, month, day)) return undefined;
        return (0, _dateUtils.getHoursMinutesSeconds)(minDate || defaultMinDate);
    }();
    function onClick(event) {
        if (event.target === event.currentTarget) {
            // Wrapper was directly clicked
            var firstInput = event.target.children[1];
            focus(firstInput);
        }
    }
    function onKeyDown(event) {
        lastPressedKey.current = event.key;
        switch(event.key){
            case 'ArrowLeft':
            case 'ArrowRight':
            case dateDivider:
            case timeDivider:
                event.preventDefault();
                var input = event.target;
                var property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
                var nextInput = findInput(input, property);
                focus(nextInput);
                break;
            default:
        }
    }
    function onKeyUp(event) {
        var key = event.key, input = event.target;
        var isLastPressedKey = lastPressedKey.current === key;
        if (!isLastPressedKey) return;
        var isNumberKey = !isNaN(Number(key));
        if (!isNumberKey) return;
        var max = input.getAttribute('max');
        if (!max) return;
        var value = input.value;
        /**
         * Given 1, the smallest possible number the user could type by adding another digit is 10.
         * 10 would be a valid value given max = 12, so we won't jump to the next input.
         * However, given 2, smallers possible number would be 20, and thus keeping the focus in
         * this field doesn't make sense.
         */ if (Number(value) * 10 > Number(max) || value.length >= max.length) {
            var property = 'nextElementSibling';
            var nextInput = findInput(input, property);
            focus(nextInput);
        }
    }
    /**
     * Called after internal onChange. Checks input validity. If all fields are valid,
     * calls props.onChange.
     */ function onChangeExternal() {
        if (!onChangeProps) return;
        function filterBoolean(value) {
            return Boolean(value);
        }
        var formElements = [
            amPmInput.current,
            dayInput.current,
            monthInput.current,
            monthSelect.current,
            yearInput.current,
            hour12Input.current,
            hour24Input.current,
            minuteInput.current,
            secondInput.current
        ].filter(filterBoolean);
        var formElementsWithoutSelect = formElements.slice(1);
        var values = {};
        formElements.forEach(function(formElement) {
            values[formElement.name] = formElement.type === 'number' ? 'valueAsNumber' in formElement ? formElement.valueAsNumber : Number(formElement.value) : formElement.value;
        });
        var isEveryValueEmpty = formElementsWithoutSelect.every(function(formElement) {
            return !formElement.value;
        });
        if (isEveryValueEmpty) {
            onChangeProps(null, false);
            return;
        }
        var isEveryValueFilled = formElements.every(function(formElement) {
            return formElement.value;
        });
        var isEveryValueValid = formElements.every(function(formElement) {
            return formElement.validity.valid;
        });
        if (isEveryValueFilled && isEveryValueValid) {
            var year_1 = Number(values.year || new Date().getFullYear());
            var monthIndex = Number(values.month || 1) - 1;
            var day_1 = Number(values.day || 1);
            var hour_1 = Number(values.hour24 || values.hour12 && values.amPm && (0, _datesJs.convert12to24)(values.hour12, values.amPm) || 0);
            var minute_1 = Number(values.minute || 0);
            var second_1 = Number(values.second || 0);
            var proposedValue = new Date();
            proposedValue.setFullYear(year_1, monthIndex, day_1);
            proposedValue.setHours(hour_1, minute_1, second_1, 0);
            onChangeProps(proposedValue, false);
            return;
        }
        if (!onInvalidChange) return;
        onInvalidChange();
    }
    /**
     * Called when non-native date input is changed.
     */ function onChange(event) {
        var _a = event.target, name = _a.name, value = _a.value;
        switch(name){
            case 'amPm':
                setAmPm(value);
                break;
            case 'year':
                setYear(value);
                break;
            case 'month':
                setMonth(value);
                break;
            case 'day':
                setDay(value);
                break;
            case 'hour12':
                setHour(value ? (0, _datesJs.convert12to24)(value, amPm || 'am').toString() : '');
                break;
            case 'hour24':
                setHour(value);
                break;
            case 'minute':
                setMinute(value);
                break;
            case 'second':
                setSecond(value);
                break;
        }
        onChangeExternal();
    }
    /**
     * Called when native date input is changed.
     */ function onChangeNative(event) {
        var value = event.target.value;
        if (!onChangeProps) return;
        var processedValue = function() {
            if (!value) return null;
            var _a = value.split('T'), valueDate = _a[0], valueTime = _a[1];
            var _b = valueDate.split('-'), yearString = _b[0], monthString = _b[1], dayString = _b[2];
            var year = Number(yearString);
            var monthIndex = Number(monthString) - 1 || 0;
            var day = Number(dayString) || 1;
            var _c = valueTime.split(':'), hourString = _c[0], minuteString = _c[1], secondString = _c[2];
            var hour = Number(hourString) || 0;
            var minute = Number(minuteString) || 0;
            var second = Number(secondString) || 0;
            var proposedValue = new Date();
            proposedValue.setFullYear(year, monthIndex, day);
            proposedValue.setHours(hour, minute, second, 0);
            return proposedValue;
        }();
        onChangeProps(processedValue, false);
    }
    var commonInputProps = {
        className: className,
        disabled: disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        // This is only for showing validity when editing
        required: Boolean(required || isWidgetOpen)
    };
    var commonTimeInputProps = {
        maxTime: maxTime,
        minTime: minTime
    };
    function renderDay(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) throw new Error("Unsupported token: ".concat(currentMatch));
        var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
        return (0, _jsxRuntime.jsx)((0, _dayInputDefault.default), __assign({}, commonInputProps, {
            ariaLabel: dayAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            inputRef: dayInput,
            month: month,
            placeholder: dayPlaceholder,
            showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
            value: day,
            year: year
        }), "day");
    }
    function renderMonth(currentMatch, index) {
        if (currentMatch && currentMatch.length > 4) throw new Error("Unsupported token: ".concat(currentMatch));
        if (currentMatch.length > 2) return (0, _jsxRuntime.jsx)((0, _monthSelectDefault.default), __assign({}, commonInputProps, {
            ariaLabel: monthAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            inputRef: monthSelect,
            locale: locale,
            placeholder: monthPlaceholder,
            short: currentMatch.length === 3,
            value: month,
            year: year
        }), "month");
        var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
        return (0, _jsxRuntime.jsx)((0, _monthInputDefault.default), __assign({}, commonInputProps, {
            ariaLabel: monthAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            inputRef: monthInput,
            placeholder: monthPlaceholder,
            showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
            value: month,
            year: year
        }), "month");
    }
    function renderYear(currentMatch, index) {
        return (0, _jsxRuntime.jsx)((0, _yearInputDefault.default), __assign({}, commonInputProps, {
            ariaLabel: yearAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            inputRef: yearInput,
            placeholder: yearPlaceholder,
            value: year,
            valueType: "day"
        }), "year");
    }
    function renderHour12(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) throw new Error("Unsupported token: ".concat(currentMatch));
        var showLeadingZeros = currentMatch ? currentMatch.length === 2 : false;
        return (0, _jsxRuntime.jsx)((0, _hour12InputDefault.default), __assign({}, commonInputProps, commonTimeInputProps, {
            amPm: amPm,
            ariaLabel: hourAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            inputRef: hour12Input,
            placeholder: hourPlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: hour
        }), "hour12");
    }
    function renderHour24(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) throw new Error("Unsupported token: ".concat(currentMatch));
        var showLeadingZeros = currentMatch ? currentMatch.length === 2 : false;
        return (0, _jsxRuntime.jsx)((0, _hour24InputDefault.default), __assign({}, commonInputProps, commonTimeInputProps, {
            ariaLabel: hourAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            inputRef: hour24Input,
            placeholder: hourPlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: hour
        }), "hour24");
    }
    function renderHour(currentMatch, index) {
        if (/h/.test(currentMatch)) return renderHour12(currentMatch, index);
        return renderHour24(currentMatch, index);
    }
    function renderMinute(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) throw new Error("Unsupported token: ".concat(currentMatch));
        var showLeadingZeros = currentMatch ? currentMatch.length === 2 : false;
        return (0, _jsxRuntime.jsx)((0, _minuteInputDefault.default), __assign({}, commonInputProps, commonTimeInputProps, {
            ariaLabel: minuteAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            hour: hour,
            inputRef: minuteInput,
            placeholder: minutePlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: minute
        }), "minute");
    }
    function renderSecond(currentMatch, index) {
        if (currentMatch && currentMatch.length > 2) throw new Error("Unsupported token: ".concat(currentMatch));
        var showLeadingZeros = currentMatch ? currentMatch.length === 2 : true;
        return (0, _jsxRuntime.jsx)((0, _secondInputDefault.default), __assign({}, commonInputProps, commonTimeInputProps, {
            ariaLabel: secondAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            hour: hour,
            inputRef: secondInput,
            minute: minute,
            placeholder: secondPlaceholder,
            showLeadingZeros: showLeadingZeros,
            value: second
        }), "second");
    }
    function renderAmPm(currentMatch, index) {
        return (0, _jsxRuntime.jsx)((0, _amPmDefault.default), __assign({}, commonInputProps, commonTimeInputProps, {
            ariaLabel: amPmAriaLabel,
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus: index === 0 && autoFocus,
            inputRef: amPmInput,
            locale: locale,
            onChange: onChange,
            value: amPm
        }), "ampm");
    }
    function renderCustomInputsInternal() {
        var elementFunctions = {
            d: renderDay,
            M: renderMonth,
            y: renderYear,
            h: renderHour,
            H: renderHour,
            m: renderMinute,
            s: renderSecond,
            a: renderAmPm
        };
        var allowMultipleInstances = typeof format !== 'undefined';
        return renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
    }
    function renderNativeInput() {
        return (0, _jsxRuntime.jsx)((0, _nativeInputJsDefault.default), {
            ariaLabel: nativeInputAriaLabel,
            disabled: disabled,
            maxDate: maxDate || defaultMaxDate,
            minDate: minDate || defaultMinDate,
            name: name,
            onChange: onChangeNative,
            required: required,
            value: value,
            valueType: valueType
        }, "datetime");
    }
    return(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    (0, _jsxRuntime.jsxs)("div", {
        className: className,
        onClick: onClick,
        children: [
            renderNativeInput(),
            renderCustomInputsInternal()
        ]
    }));
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","@wojtekmaj/date-utils":"51hTi","./Divider.js":"1zPva","react-date-picker/dist/esm/DateInput/DayInput":"knCuv","react-date-picker/dist/esm/DateInput/MonthInput":"dbBb1","react-date-picker/dist/esm/DateInput/MonthSelect":"5NxfY","react-date-picker/dist/esm/DateInput/YearInput":"dHIiC","react-time-picker/dist/esm/TimeInput/Hour12Input":"4J8DM","react-time-picker/dist/esm/TimeInput/Hour24Input":"eF5fU","react-time-picker/dist/esm/TimeInput/MinuteInput":"8yNf6","react-time-picker/dist/esm/TimeInput/SecondInput":"mYyhV","react-time-picker/dist/esm/TimeInput/AmPm":"2MpCS","./DateTimeInput/NativeInput.js":"hJhOW","./shared/dateFormatter.js":"kti0s","./shared/dates.js":"aTPA6","./shared/utils.js":"1Tk7U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zPva":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Divider);
var _jsxRuntime = require("react/jsx-runtime");
function Divider(_a) {
    var children = _a.children;
    return (0, _jsxRuntime.jsx)("span", {
        className: "react-datetime-picker__inputGroup__divider",
        children: children
    });
}

},{"react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knCuv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DayInput);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function DayInput(_a) {
    var maxDate = _a.maxDate, minDate = _a.minDate, month = _a.month, year = _a.year, otherProps = __rest(_a, [
        "maxDate",
        "minDate",
        "month",
        "year"
    ]);
    var currentMonthMaxDays = function() {
        if (!month) return 31;
        return (0, _dateUtils.getDaysInMonth)(new Date(Number(year), Number(month) - 1, 1));
    }();
    function isSameMonth(date) {
        return year === (0, _dateUtils.getYear)(date).toString() && month === (0, _dateUtils.getMonthHuman)(date).toString();
    }
    var maxDay = (0, _utilsJs.safeMin)(currentMonthMaxDays, maxDate && isSameMonth(maxDate) && (0, _dateUtils.getDate)(maxDate));
    var minDay = (0, _utilsJs.safeMax)(1, minDate && isSameMonth(minDate) && (0, _dateUtils.getDate)(minDate));
    return (0, _jsxRuntime.jsx)((0, _inputJsDefault.default), __assign({
        max: maxDay,
        min: minDay,
        name: "day"
    }, otherProps));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./Input.js":"6iVbc","../shared/utils.js":"2klED","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iVbc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Input);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _updateInputWidth = require("update-input-width");
var _updateInputWidthDefault = parcelHelpers.interopDefault(_updateInputWidth);
var isBrowser = typeof document !== 'undefined';
var useIsomorphicLayoutEffect = isBrowser ? (0, _react.useLayoutEffect) : (0, _react.useEffect);
var isIEOrEdgeLegacy = isBrowser && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
var isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
function onFocus(event) {
    var target = event.target;
    if (isIEOrEdgeLegacy) requestAnimationFrame(function() {
        return target.select();
    });
    else target.select();
}
function updateInputWidthOnLoad(element) {
    if (document.readyState === 'complete') return;
    function onLoad() {
        (0, _updateInputWidthDefault.default)(element);
    }
    window.addEventListener('load', onLoad);
}
function updateInputWidthOnFontLoad(element) {
    if (!document.fonts) return;
    var font = (0, _updateInputWidth.getFontShorthand)(element);
    if (!font) return;
    var isFontLoaded = document.fonts.check(font);
    if (isFontLoaded) return;
    function onLoadingDone() {
        (0, _updateInputWidthDefault.default)(element);
    }
    document.fonts.addEventListener('loadingdone', onLoadingDone);
}
function getSelectionString(input) {
    /**
     * window.getSelection().toString() returns empty string in IE11 and Firefox,
     * so alternatives come first.
     */ if (input && 'selectionStart' in input && input.selectionStart !== null && 'selectionEnd' in input && input.selectionEnd !== null) return input.value.slice(input.selectionStart, input.selectionEnd);
    if ('getSelection' in window) {
        var selection = window.getSelection();
        return selection && selection.toString();
    }
    return null;
}
function makeOnKeyPress(maxLength) {
    if (maxLength === null) return undefined;
    /**
     * Prevents keystrokes that would not produce a number or when value after keystroke would
     * exceed maxLength.
     */ return function onKeyPress(event) {
        if (isFirefox) // See https://github.com/wojtekmaj/react-time-picker/issues/92
        return;
        var key = event.key, input = event.target;
        var value = input.value;
        var isNumberKey = key.length === 1 && /\d/.test(key);
        var selection = getSelectionString(input);
        if (!isNumberKey || !(selection || value.length < maxLength)) event.preventDefault();
    };
}
function Input(_a) {
    var ariaLabel = _a.ariaLabel, autoFocus = _a.autoFocus, className = _a.className, disabled = _a.disabled, inputRef = _a.inputRef, max = _a.max, min = _a.min, name = _a.name, nameForClass = _a.nameForClass, onChange = _a.onChange, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, _b = _a.placeholder, placeholder = _b === void 0 ? '--' : _b, required = _a.required, showLeadingZeros = _a.showLeadingZeros, step = _a.step, value = _a.value;
    useIsomorphicLayoutEffect(function() {
        if (!inputRef || !inputRef.current) return;
        (0, _updateInputWidthDefault.default)(inputRef.current);
        updateInputWidthOnLoad(inputRef.current);
        updateInputWidthOnFontLoad(inputRef.current);
    }, [
        inputRef,
        value
    ]);
    var hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === '0' || !value.toString().startsWith('0'));
    var maxLength = max ? max.toString().length : null;
    return (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            hasLeadingZero ? (0, _jsxRuntime.jsx)("span", {
                className: "".concat(className, "__leadingZero"),
                children: "0"
            }) : null,
            (0, _jsxRuntime.jsx)("input", {
                "aria-label": ariaLabel,
                autoComplete: "off",
                autoFocus: autoFocus,
                className: (0, _clsxDefault.default)("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
                "data-input": "true",
                disabled: disabled,
                inputMode: "numeric",
                max: max,
                min: min,
                name: name,
                onChange: onChange,
                onFocus: onFocus,
                onKeyDown: onKeyDown,
                onKeyPress: makeOnKeyPress(maxLength),
                onKeyUp: function(event) {
                    (0, _updateInputWidthDefault.default)(event.target);
                    if (onKeyUp) onKeyUp(event);
                },
                placeholder: placeholder,
                // Assertion is needed for React 18 compatibility
                ref: inputRef,
                required: required,
                step: step,
                type: "number",
                value: value !== null ? value : ''
            })
        ]
    });
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","clsx":"gocd3","update-input-width":"7Q2JM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Q2JM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Gets font CSS shorthand property given element.
 *
 * @param {HTMLElement} element Element to get font CSS shorthand property from
 */ parcelHelpers.export(exports, "getFontShorthand", ()=>getFontShorthand);
/**
 * Measures text width given text and font CSS shorthand.
 *
 * @param {string} text Text to measure
 * @param {string} font Font to use when measuring the text
 */ parcelHelpers.export(exports, "measureText", ()=>measureText);
/**
 * Updates input element width to fit its content given input element
 * @param {HTMLInputElement} element
 */ parcelHelpers.export(exports, "updateInputWidth", ()=>updateInputWidth);
var allowedVariants = [
    'normal',
    'small-caps'
];
function getFontShorthand(element) {
    if (!element) return '';
    var style = window.getComputedStyle(element);
    if (style.font) return style.font;
    var isFontDefined = style.fontFamily !== '';
    if (!isFontDefined) return '';
    var fontVariant = allowedVariants.includes(style.fontVariant) ? style.fontVariant : 'normal';
    return "".concat(style.fontStyle, " ").concat(fontVariant, " ").concat(style.fontWeight, " ").concat(style.fontSize, " / ").concat(style.lineHeight, " ").concat(style.fontFamily);
}
var cachedCanvas;
function measureText(text, font) {
    var canvas = cachedCanvas || (cachedCanvas = document.createElement('canvas'));
    var context = canvas.getContext('2d');
    // Context type not supported
    if (!context) return null;
    context.font = font;
    var width = context.measureText(text).width;
    return Math.ceil(width);
}
function updateInputWidth(element) {
    if (typeof document === 'undefined' || !element) return null;
    var font = getFontShorthand(element);
    var text = element.value || element.placeholder;
    var width = measureText(text, font);
    if (width === null) return null;
    element.style.width = "".concat(width, "px");
    return width;
}
exports.default = updateInputWidth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2klED":[function(require,module,exports,__globalThis) {
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "between", ()=>between);
parcelHelpers.export(exports, "safeMin", ()=>safeMin);
parcelHelpers.export(exports, "safeMax", ()=>safeMax);
function between(value, min, max) {
    if (min && min > value) return min;
    if (max && max < value) return max;
    return value;
}
function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return Math.min.apply(Math, args.filter(isValidNumber));
}
function safeMax() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return Math.max.apply(Math, args.filter(isValidNumber));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbBb1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MonthInput);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function MonthInput(_a) {
    var maxDate = _a.maxDate, minDate = _a.minDate, year = _a.year, otherProps = __rest(_a, [
        "maxDate",
        "minDate",
        "year"
    ]);
    function isSameYear(date) {
        return date && year === (0, _dateUtils.getYear)(date).toString();
    }
    var maxMonth = (0, _utilsJs.safeMin)(12, maxDate && isSameYear(maxDate) && (0, _dateUtils.getMonthHuman)(maxDate));
    var minMonth = (0, _utilsJs.safeMax)(1, minDate && isSameYear(minDate) && (0, _dateUtils.getMonthHuman)(minDate));
    return (0, _jsxRuntime.jsx)((0, _inputJsDefault.default), __assign({
        max: maxMonth,
        min: minMonth,
        name: "month"
    }, otherProps));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./Input.js":"6iVbc","../shared/utils.js":"2klED","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NxfY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MonthSelect);
var _jsxRuntime = require("react/jsx-runtime");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _dateUtils = require("@wojtekmaj/date-utils");
var _dateFormatterJs = require("../shared/dateFormatter.js");
var _utilsJs = require("../shared/utils.js");
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function MonthSelect(_a) {
    var ariaLabel = _a.ariaLabel, autoFocus = _a.autoFocus, className = _a.className, disabled = _a.disabled, inputRef = _a.inputRef, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, onChange = _a.onChange, onKeyDown = _a.onKeyDown, _b = _a.placeholder, placeholder = _b === void 0 ? '--' : _b, required = _a.required, short = _a.short, value = _a.value, year = _a.year;
    function isSameYear(date) {
        return date && year === (0, _dateUtils.getYear)(date).toString();
    }
    var maxMonth = (0, _utilsJs.safeMin)(12, maxDate && isSameYear(maxDate) && (0, _dateUtils.getMonthHuman)(maxDate));
    var minMonth = (0, _utilsJs.safeMax)(1, minDate && isSameYear(minDate) && (0, _dateUtils.getMonthHuman)(minDate));
    var dates = __spreadArray([], Array(12), true).map(function(el, index) {
        return new Date(2019, index, 1);
    });
    var name = 'month';
    var formatter = short ? (0, _dateFormatterJs.formatShortMonth) : (0, _dateFormatterJs.formatMonth);
    return (0, _jsxRuntime.jsxs)("select", {
        "aria-label": ariaLabel,
        autoFocus: autoFocus,
        className: (0, _clsxDefault.default)("".concat(className, "__input"), "".concat(className, "__").concat(name)),
        "data-input": "true",
        "data-select": "true",
        disabled: disabled,
        name: name,
        onChange: onChange,
        onKeyDown: onKeyDown,
        // Assertion is needed for React 18 compatibility
        ref: inputRef,
        required: required,
        value: value !== null ? value : '',
        children: [
            !value && (0, _jsxRuntime.jsx)("option", {
                value: "",
                children: placeholder
            }),
            dates.map(function(date) {
                var month = (0, _dateUtils.getMonthHuman)(date);
                var disabled = month < minMonth || month > maxMonth;
                return (0, _jsxRuntime.jsx)("option", {
                    disabled: disabled,
                    value: month,
                    children: formatter(locale, date)
                }, month);
            })
        ]
    });
}

},{"react/jsx-runtime":"6AEwr","clsx":"gocd3","@wojtekmaj/date-utils":"51hTi","../shared/dateFormatter.js":"kCmbW","../shared/utils.js":"2klED","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCmbW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFormatter", ()=>getFormatter);
parcelHelpers.export(exports, "formatMonth", ()=>formatMonth);
parcelHelpers.export(exports, "formatShortMonth", ()=>formatShortMonth);
var _getUserLocale = require("get-user-locale");
var _getUserLocaleDefault = parcelHelpers.interopDefault(_getUserLocale);
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, _getUserLocaleDefault.default)();
        if (!formatterCache.has(localeWithDefault)) formatterCache.set(localeWithDefault, new Map());
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */ function toSafeHour(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return function(locale, date) {
        return getFormatter(options)(locale, toSafeHour(date));
    };
}
var formatMonthOptions = {
    month: 'long'
};
var formatShortMonthOptions = {
    month: 'short'
};
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatShortMonth = getSafeFormatter(formatShortMonthOptions);

},{"get-user-locale":"gsxNA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHIiC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>YearInput);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function YearInput(_a) {
    var maxDate = _a.maxDate, minDate = _a.minDate, _b = _a.placeholder, placeholder = _b === void 0 ? '----' : _b, valueType = _a.valueType, otherProps = __rest(_a, [
        "maxDate",
        "minDate",
        "placeholder",
        "valueType"
    ]);
    var maxYear = (0, _utilsJs.safeMin)(275760, maxDate && (0, _dateUtils.getYear)(maxDate));
    var minYear = (0, _utilsJs.safeMax)(1, minDate && (0, _dateUtils.getYear)(minDate));
    var yearStep = function() {
        if (valueType === 'century') return 10;
        return 1;
    }();
    return (0, _jsxRuntime.jsx)((0, _inputJsDefault.default), __assign({
        max: maxYear,
        min: minYear,
        name: "year",
        placeholder: placeholder,
        step: yearStep
    }, otherProps));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./Input.js":"6iVbc","../shared/utils.js":"2klED","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4J8DM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Hour12Input);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _datesJs = require("../shared/dates.js");
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Hour12Input(_a) {
    var amPm = _a.amPm, maxTime = _a.maxTime, minTime = _a.minTime, value = _a.value, otherProps = __rest(_a, [
        "amPm",
        "maxTime",
        "minTime",
        "value"
    ]);
    var maxHour = (0, _utilsJs.safeMin)(12, maxTime && function() {
        var _a = (0, _datesJs.convert24to12)((0, _dateUtils.getHours)(maxTime)), maxHourResult = _a[0], maxAmPm = _a[1];
        if (maxAmPm !== amPm) // pm is always after am, so we should ignore validation
        return null;
        return maxHourResult;
    }());
    var minHour = (0, _utilsJs.safeMax)(1, minTime && function() {
        var _a = (0, _datesJs.convert24to12)((0, _dateUtils.getHours)(minTime)), minHourResult = _a[0], minAmPm = _a[1];
        if (// pm is always after am, so we should ignore validation
        minAmPm !== amPm || // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
        minHourResult === 12) return null;
        return minHourResult;
    }());
    var value12 = value ? (0, _datesJs.convert24to12)(value)[0].toString() : '';
    return (0, _jsxRuntime.jsx)((0, _inputJsDefault.default), __assign({
        max: maxHour,
        min: minHour,
        name: "hour12",
        nameForClass: "hour",
        value: value12
    }, otherProps));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./Input.js":"bHXqC","../shared/dates.js":"f548X","../shared/utils.js":"iOh4a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHXqC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Input);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _updateInputWidth = require("update-input-width");
var _updateInputWidthDefault = parcelHelpers.interopDefault(_updateInputWidth);
var isBrowser = typeof document !== 'undefined';
var useIsomorphicLayoutEffect = isBrowser ? (0, _react.useLayoutEffect) : (0, _react.useEffect);
var isIEOrEdgeLegacy = isBrowser && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
var isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
function onFocus(event) {
    var target = event.target;
    if (isIEOrEdgeLegacy) requestAnimationFrame(function() {
        return target.select();
    });
    else target.select();
}
function updateInputWidthOnLoad(element) {
    if (document.readyState === 'complete') return;
    function onLoad() {
        (0, _updateInputWidthDefault.default)(element);
    }
    window.addEventListener('load', onLoad);
}
function updateInputWidthOnFontLoad(element) {
    if (!document.fonts) return;
    var font = (0, _updateInputWidth.getFontShorthand)(element);
    if (!font) return;
    var isFontLoaded = document.fonts.check(font);
    if (isFontLoaded) return;
    function onLoadingDone() {
        (0, _updateInputWidthDefault.default)(element);
    }
    document.fonts.addEventListener('loadingdone', onLoadingDone);
}
function getSelectionString(input) {
    /**
     * window.getSelection().toString() returns empty string in IE11 and Firefox,
     * so alternatives come first.
     */ if (input && 'selectionStart' in input && input.selectionStart !== null && 'selectionEnd' in input && input.selectionEnd !== null) return input.value.slice(input.selectionStart, input.selectionEnd);
    if ('getSelection' in window) {
        var selection = window.getSelection();
        return selection && selection.toString();
    }
    return null;
}
function makeOnKeyPress(maxLength) {
    if (maxLength === null) return undefined;
    /**
     * Prevents keystrokes that would not produce a number or when value after keystroke would
     * exceed maxLength.
     */ return function onKeyPress(event) {
        if (isFirefox) // See https://github.com/wojtekmaj/react-time-picker/issues/92
        return;
        var key = event.key, input = event.target;
        var value = input.value;
        var isNumberKey = key.length === 1 && /\d/.test(key);
        var selection = getSelectionString(input);
        if (!isNumberKey || !(selection || value.length < maxLength)) event.preventDefault();
    };
}
function Input(_a) {
    var ariaLabel = _a.ariaLabel, autoFocus = _a.autoFocus, className = _a.className, disabled = _a.disabled, inputRef = _a.inputRef, max = _a.max, min = _a.min, name = _a.name, nameForClass = _a.nameForClass, onChange = _a.onChange, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, _b = _a.placeholder, placeholder = _b === void 0 ? '--' : _b, required = _a.required, showLeadingZeros = _a.showLeadingZeros, step = _a.step, value = _a.value;
    useIsomorphicLayoutEffect(function() {
        if (!inputRef || !inputRef.current) return;
        (0, _updateInputWidthDefault.default)(inputRef.current);
        updateInputWidthOnLoad(inputRef.current);
        updateInputWidthOnFontLoad(inputRef.current);
    }, [
        inputRef,
        value
    ]);
    var hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === '0' || !value.toString().startsWith('0'));
    var maxLength = max ? max.toString().length : null;
    return (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            hasLeadingZero ? (0, _jsxRuntime.jsx)("span", {
                className: "".concat(className, "__leadingZero"),
                children: "0"
            }) : null,
            (0, _jsxRuntime.jsx)("input", {
                "aria-label": ariaLabel,
                autoComplete: "off",
                autoFocus: autoFocus,
                className: (0, _clsxDefault.default)("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
                "data-input": "true",
                disabled: disabled,
                inputMode: "numeric",
                max: max,
                min: min,
                name: name,
                onChange: onChange,
                onFocus: onFocus,
                onKeyDown: onKeyDown,
                onKeyPress: makeOnKeyPress(maxLength),
                onKeyUp: function(event) {
                    (0, _updateInputWidthDefault.default)(event.target);
                    if (onKeyUp) onKeyUp(event);
                },
                placeholder: placeholder,
                // Assertion is needed for React 18 compatibility
                ref: inputRef,
                required: required,
                step: step,
                type: "number",
                value: value !== null ? value : ''
            })
        ]
    });
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","clsx":"gocd3","update-input-width":"7Q2JM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f548X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convert12to24", ()=>convert12to24);
parcelHelpers.export(exports, "convert24to12", ()=>convert24to12);
function convert12to24(hour12, amPm) {
    var hour24 = Number(hour12);
    if (amPm === 'am' && hour24 === 12) hour24 = 0;
    else if (amPm === 'pm' && hour24 < 12) hour24 += 12;
    return hour24;
}
function convert24to12(hour24) {
    var hour12 = Number(hour24) % 12 || 12;
    return [
        hour12,
        Number(hour24) < 12 ? 'am' : 'pm'
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOh4a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAmPmLabels", ()=>getAmPmLabels);
parcelHelpers.export(exports, "safeMin", ()=>safeMin);
parcelHelpers.export(exports, "safeMax", ()=>safeMax);
var _dateFormatterJs = require("./dateFormatter.js");
var nines = [
    '9',
    "\u0669"
];
var ninesRegExp = new RegExp("[".concat(nines.join(''), "]"));
var amPmFormatter = (0, _dateFormatterJs.getFormatter)({
    hour: 'numeric'
});
function getAmPmLabels(locale) {
    var amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
    var pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));
    var _a = amString.split(ninesRegExp), am1 = _a[0], am2 = _a[1];
    var _b = pmString.split(ninesRegExp), pm1 = _b[0], pm2 = _b[1];
    if (pm2 !== undefined) {
        // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
        if (am1 !== pm1) return [
            am1,
            pm1
        ].map(function(el) {
            return el.trim();
        });
        if (am2 !== pm2) return [
            am2,
            pm2
        ].map(function(el) {
            return el.trim();
        });
    }
    // Fallback
    return [
        'AM',
        'PM'
    ];
}
function isValidNumber(num) {
    return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return Math.min.apply(Math, args.filter(isValidNumber));
}
function safeMax() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return Math.max.apply(Math, args.filter(isValidNumber));
}

},{"./dateFormatter.js":"78MnY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"78MnY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFormatter", ()=>getFormatter);
parcelHelpers.export(exports, "getNumberFormatter", ()=>getNumberFormatter);
var _getUserLocale = require("get-user-locale");
var _getUserLocaleDefault = parcelHelpers.interopDefault(_getUserLocale);
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, _getUserLocaleDefault.default)();
        if (!formatterCache.has(localeWithDefault)) formatterCache.set(localeWithDefault, new Map());
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        return formatterCacheLocale.get(options)(date);
    };
}
var numberFormatterCache = new Map();
function getNumberFormatter(options) {
    return function(locale, number) {
        var localeWithDefault = locale || (0, _getUserLocaleDefault.default)();
        if (!numberFormatterCache.has(localeWithDefault)) numberFormatterCache.set(localeWithDefault, new Map());
        var numberFormatterCacheLocale = numberFormatterCache.get(localeWithDefault);
        if (!numberFormatterCacheLocale.has(options)) numberFormatterCacheLocale.set(options, new Intl.NumberFormat(localeWithDefault || undefined, options).format);
        return numberFormatterCacheLocale.get(options)(number);
    };
}

},{"get-user-locale":"gsxNA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eF5fU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Hour24Input);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Hour24Input(_a) {
    var maxTime = _a.maxTime, minTime = _a.minTime, otherProps = __rest(_a, [
        "maxTime",
        "minTime"
    ]);
    var maxHour = (0, _utilsJs.safeMin)(23, maxTime && (0, _dateUtils.getHours)(maxTime));
    var minHour = (0, _utilsJs.safeMax)(0, minTime && (0, _dateUtils.getHours)(minTime));
    return (0, _jsxRuntime.jsx)((0, _inputJsDefault.default), __assign({
        max: maxHour,
        min: minHour,
        name: "hour24",
        nameForClass: "hour"
    }, otherProps));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./Input.js":"bHXqC","../shared/utils.js":"iOh4a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yNf6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MinuteInput);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function MinuteInput(_a) {
    var hour = _a.hour, maxTime = _a.maxTime, minTime = _a.minTime, _b = _a.showLeadingZeros, showLeadingZeros = _b === void 0 ? true : _b, otherProps = __rest(_a, [
        "hour",
        "maxTime",
        "minTime",
        "showLeadingZeros"
    ]);
    function isSameHour(date) {
        return hour === (0, _dateUtils.getHours)(date).toString();
    }
    var maxMinute = (0, _utilsJs.safeMin)(59, maxTime && isSameHour(maxTime) && (0, _dateUtils.getMinutes)(maxTime));
    var minMinute = (0, _utilsJs.safeMax)(0, minTime && isSameHour(minTime) && (0, _dateUtils.getMinutes)(minTime));
    return (0, _jsxRuntime.jsx)((0, _inputJsDefault.default), __assign({
        max: maxMinute,
        min: minMinute,
        name: "minute",
        showLeadingZeros: showLeadingZeros
    }, otherProps));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./Input.js":"bHXqC","../shared/utils.js":"iOh4a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mYyhV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SecondInput);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function SecondInput(_a) {
    var hour = _a.hour, maxTime = _a.maxTime, minTime = _a.minTime, minute = _a.minute, _b = _a.showLeadingZeros, showLeadingZeros = _b === void 0 ? true : _b, otherProps = __rest(_a, [
        "hour",
        "maxTime",
        "minTime",
        "minute",
        "showLeadingZeros"
    ]);
    function isSameMinute(date) {
        return hour === (0, _dateUtils.getHours)(date).toString() && minute === (0, _dateUtils.getMinutes)(date).toString();
    }
    var maxSecond = (0, _utilsJs.safeMin)(59, maxTime && isSameMinute(maxTime) && (0, _dateUtils.getSeconds)(maxTime));
    var minSecond = (0, _utilsJs.safeMax)(0, minTime && isSameMinute(minTime) && (0, _dateUtils.getSeconds)(minTime));
    return (0, _jsxRuntime.jsx)((0, _inputJsDefault.default), __assign({
        max: maxSecond,
        min: minSecond,
        name: "second",
        showLeadingZeros: showLeadingZeros
    }, otherProps));
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","./Input.js":"bHXqC","../shared/utils.js":"iOh4a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MpCS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>AmPm);
var _jsxRuntime = require("react/jsx-runtime");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _dateUtils = require("@wojtekmaj/date-utils");
var _datesJs = require("../shared/dates.js");
var _utilsJs = require("../shared/utils.js");
function AmPm(_a) {
    var ariaLabel = _a.ariaLabel, autoFocus = _a.autoFocus, className = _a.className, disabled = _a.disabled, inputRef = _a.inputRef, locale = _a.locale, maxTime = _a.maxTime, minTime = _a.minTime, onChange = _a.onChange, onKeyDown = _a.onKeyDown, required = _a.required, value = _a.value;
    var amDisabled = minTime ? (0, _datesJs.convert24to12)((0, _dateUtils.getHours)(minTime))[1] === 'pm' : false;
    var pmDisabled = maxTime ? (0, _datesJs.convert24to12)((0, _dateUtils.getHours)(maxTime))[1] === 'am' : false;
    var name = 'amPm';
    var _b = (0, _utilsJs.getAmPmLabels)(locale), amLabel = _b[0], pmLabel = _b[1];
    return (0, _jsxRuntime.jsxs)("select", {
        "aria-label": ariaLabel,
        autoFocus: autoFocus,
        className: (0, _clsxDefault.default)("".concat(className, "__input"), "".concat(className, "__").concat(name)),
        "data-input": "true",
        "data-select": "true",
        disabled: disabled,
        name: name,
        onChange: onChange,
        onKeyDown: onKeyDown,
        // Assertion is needed for React 18 compatibility
        ref: inputRef,
        required: required,
        value: value !== null ? value : '',
        children: [
            !value && (0, _jsxRuntime.jsx)("option", {
                value: "",
                children: "--"
            }),
            (0, _jsxRuntime.jsx)("option", {
                disabled: amDisabled,
                value: "am",
                children: amLabel
            }),
            (0, _jsxRuntime.jsx)("option", {
                disabled: pmDisabled,
                value: "pm",
                children: pmLabel
            })
        ]
    });
}

},{"react/jsx-runtime":"6AEwr","clsx":"gocd3","@wojtekmaj/date-utils":"51hTi","../shared/dates.js":"f548X","../shared/utils.js":"iOh4a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJhOW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>NativeInput);
var _jsxRuntime = require("react/jsx-runtime");
var _dateUtils = require("@wojtekmaj/date-utils");
function NativeInput(_a) {
    var ariaLabel = _a.ariaLabel, disabled = _a.disabled, maxDate = _a.maxDate, minDate = _a.minDate, name = _a.name, onChange = _a.onChange, required = _a.required, value = _a.value, valueType = _a.valueType;
    var nativeValueParser = function() {
        switch(valueType){
            case 'hour':
                return function(receivedValue) {
                    return "".concat((0, _dateUtils.getISOLocalDate)(receivedValue), "T").concat((0, _dateUtils.getHours)(receivedValue), ":00");
                };
            case 'minute':
                return function(receivedValue) {
                    return "".concat((0, _dateUtils.getISOLocalDate)(receivedValue), "T").concat((0, _dateUtils.getHoursMinutes)(receivedValue));
                };
            case 'second':
                return 0, _dateUtils.getISOLocalDateTime;
            default:
                throw new Error('Invalid valueType');
        }
    }();
    var step = function() {
        switch(valueType){
            case 'hour':
                return 3600;
            case 'minute':
                return 60;
            case 'second':
                return 1;
            default:
                throw new Error('Invalid valueType');
        }
    }();
    function stopPropagation(event) {
        event.stopPropagation();
    }
    return (0, _jsxRuntime.jsx)("input", {
        "aria-label": ariaLabel,
        disabled: disabled,
        hidden: true,
        max: maxDate ? nativeValueParser(maxDate) : undefined,
        min: minDate ? nativeValueParser(minDate) : undefined,
        name: name,
        onChange: onChange,
        onFocus: stopPropagation,
        required: required,
        step: step,
        style: {
            visibility: 'hidden',
            position: 'absolute',
            zIndex: '-999'
        },
        type: "datetime-local",
        value: value ? nativeValueParser(value) : ''
    });
}

},{"react/jsx-runtime":"6AEwr","@wojtekmaj/date-utils":"51hTi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kti0s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFormatter", ()=>getFormatter);
parcelHelpers.export(exports, "getNumberFormatter", ()=>getNumberFormatter);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
var _getUserLocale = require("get-user-locale");
var _getUserLocaleDefault = parcelHelpers.interopDefault(_getUserLocale);
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, _getUserLocaleDefault.default)();
        if (!formatterCache.has(localeWithDefault)) formatterCache.set(localeWithDefault, new Map());
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        return formatterCacheLocale.get(options)(date);
    };
}
var numberFormatterCache = new Map();
function getNumberFormatter(options) {
    return function(locale, number) {
        var localeWithDefault = locale || (0, _getUserLocaleDefault.default)();
        if (!numberFormatterCache.has(localeWithDefault)) numberFormatterCache.set(localeWithDefault, new Map());
        var numberFormatterCacheLocale = numberFormatterCache.get(localeWithDefault);
        if (!numberFormatterCacheLocale.has(options)) numberFormatterCacheLocale.set(options, new Intl.NumberFormat(localeWithDefault || undefined, options).format);
        return numberFormatterCacheLocale.get(options)(number);
    };
}
var formatDateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
var formatDate = getFormatter(formatDateOptions);

},{"get-user-locale":"gsxNA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTPA6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convert12to24", ()=>convert12to24);
parcelHelpers.export(exports, "convert24to12", ()=>convert24to12);
function convert12to24(hour12, amPm) {
    var hour24 = Number(hour12);
    if (amPm === 'am' && hour24 === 12) hour24 = 0;
    else if (amPm === 'pm' && hour24 < 12) hour24 += 12;
    return hour24;
}
function convert24to12(hour24) {
    var hour12 = Number(hour24) % 12 || 12;
    return [
        hour12,
        Number(hour24) < 12 ? 'am' : 'pm'
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Tk7U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */ parcelHelpers.export(exports, "between", ()=>between);
parcelHelpers.export(exports, "getAmPmLabels", ()=>getAmPmLabels);
var _dateFormatterJs = require("./dateFormatter.js");
function between(value, min, max) {
    if (min && min > value) return min;
    if (max && max < value) return max;
    return value;
}
var nines = [
    '9',
    "\u0669"
];
var ninesRegExp = new RegExp("[".concat(nines.join(''), "]"));
var amPmFormatter = (0, _dateFormatterJs.getFormatter)({
    hour: 'numeric'
});
function getAmPmLabels(locale) {
    var amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
    var pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));
    var _a = amString.split(ninesRegExp), am1 = _a[0], am2 = _a[1];
    var _b = pmString.split(ninesRegExp), pm1 = _b[0], pm2 = _b[1];
    if (pm2 !== undefined) {
        // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
        if (am1 !== pm1) return [
            am1,
            pm1
        ].map(function(el) {
            return el.trim();
        });
        if (am2 !== pm2) return [
            am2,
            pm2
        ].map(function(el) {
            return el.trim();
        });
    }
    // Fallback
    return [
        'AM',
        'PM'
    ];
}

},{"./dateFormatter.js":"kti0s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wWSk":[function() {},{}],"bUOtF":[function() {},{}],"hIPQz":[function() {},{}]},["aQL8O","9lLrM"], null, "parcelRequire94c2")

//# sourceMappingURL=DineInHotel.9221b259.js.map
