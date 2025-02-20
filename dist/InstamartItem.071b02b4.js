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

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"7AKHs":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5b238e35071b02b4";
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

},{}],"c3CkU":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$9378 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9378.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _useInstamart = require("../utils/useInstamart");
var _useInstamartDefault = parcelHelpers.interopDefault(_useInstamart);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _cartSlice = require("../utils/CartSlice");
var _starRating = require("./StarRating");
var _starRatingDefault = parcelHelpers.interopDefault(_starRating);
var _userContext = require("../utils/UserContext");
var _userContextDefault = parcelHelpers.interopDefault(_userContext);
var _useSpecificInstamartItem = require("../utils/useSpecificInstamartItem");
var _useSpecificInstamartItemDefault = parcelHelpers.interopDefault(_useSpecificInstamartItem);
var _shimmer = require("./shimmer");
var _instacard = require("./Instacard");
var _instacardDefault = parcelHelpers.interopDefault(_instacard);
var _sweetalert2 = require("sweetalert2");
var _sweetalert2Default = parcelHelpers.interopDefault(_sweetalert2);
var _favSlice = require("../utils/FavSlice");
var _s = $RefreshSig$();
const Instaitem = ()=>{
    _s();
    const { id1 } = (0, _reactRouterDom.useParams)();
    const { seller } = (0, _react.useContext)((0, _userContextDefault.default));
    const { mitem, error, isLoading } = (0, _useSpecificInstamartItemDefault.default)(id1);
    const [item] = (0, _useInstamartDefault.default)();
    const dispatch = (0, _reactRedux.useDispatch)();
    const navigate = (0, _reactRouterDom.useNavigate)();
    if (isLoading) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmer.Shimmer), {}, void 0, false, {
        fileName: "src/component/InstamartItem.js",
        lineNumber: 24,
        columnNumber: 12
    }, undefined);
    if (error) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            "Error: ",
            error
        ]
    }, void 0, true, {
        fileName: "src/component/InstamartItem.js",
        lineNumber: 28,
        columnNumber: 12
    }, undefined);
    const addInstaItem = (item)=>{
        dispatch((0, _cartSlice.addItem)(mitem));
        (0, _sweetalert2Default.default).fire({
            title: '<h3 style="color: #4CAF50;">Item Added!</h3>',
            html: `<p style="font-size: 16px;">${mitem.name} has been added to your cart.</p>`,
            icon: "success",
            confirmButtonText: '<span style="color: white;">Continue Shopping</span>',
            background: "#fefae0",
            iconColor: "#4CAF50",
            customClass: {
                popup: "custom-popup",
                confirmButton: "custom-confirm-button"
            }
        });
    };
    const checkAvailability = ()=>{
        (0, _sweetalert2Default.default).fire({
            title: "Check Availability",
            text: "Availability checked for the provided zip code.",
            icon: "info",
            confirmButtonText: "OK"
        });
    };
    const addFav = ()=>{
        dispatch((0, _favSlice.addFavItem)(mitem));
        (0, _sweetalert2Default.default).fire({
            title: "Add to Favorites",
            text: "Added To Favorites",
            icon: "info",
            confirmButtonText: "OK"
        });
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "specific-item-container trending-container",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "left-section",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "main-image",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                src: mitem.image || "https://via.placeholder.com/300",
                                alt: mitem.name,
                                className: "product-image"
                            }, void 0, false, {
                                fileName: "src/component/InstamartItem.js",
                                lineNumber: 71,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/component/InstamartItem.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/component/InstamartItem.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "right-section",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                className: "product-title",
                                children: mitem.name
                            }, void 0, false, {
                                fileName: "src/component/InstamartItem.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "rating",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _starRatingDefault.default), {}, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "(0 Reviews)"
                                    }, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/component/InstamartItem.js",
                                lineNumber: 82,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "price-section",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "current-price",
                                    children: [
                                        "$",
                                        mitem.price
                                    ]
                                }, void 0, true, {
                                    fileName: "src/component/InstamartItem.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/component/InstamartItem.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "availability-check",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        type: "text",
                                        placeholder: "Zipcode",
                                        className: "zipcode-input"
                                    }, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: checkAvailability,
                                        className: "check-btn",
                                        children: "Check Availability"
                                    }, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/component/InstamartItem.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "action-buttons",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        // Use an arrow function to prevent React from passing the event object
                                        // to the handler. This ensures that only the item object is passed.
                                        onClick: ()=>addInstaItem(mitem),
                                        className: "add-to-cart-btn",
                                        children: "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        className: "add-to-favorite-btn",
                                        onClick: addFav,
                                        children: "Add to Favorite"
                                    }, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/component/InstamartItem.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "seller-info",
                                children: [
                                    "Seller: ",
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "seller-name",
                                        children: seller.name
                                    }, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 114,
                                        columnNumber: 21
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/component/InstamartItem.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/component/InstamartItem.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/component/InstamartItem.js",
                lineNumber: 67,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "trending-container",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "related-products",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "related-heading",
                            children: "Related Products"
                        }, void 0, false, {
                            fileName: "src/component/InstamartItem.js",
                            lineNumber: 122,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "allcards",
                            children: item.map((val)=>{
                                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                    className: "product-link",
                                    to: `/instamart/${val.id}`,
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _instacardDefault.default), {
                                        ...val
                                    }, void 0, false, {
                                        fileName: "src/component/InstamartItem.js",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, undefined)
                                }, val.id, false, {
                                    fileName: "src/component/InstamartItem.js",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, undefined);
                            })
                        }, void 0, false, {
                            fileName: "src/component/InstamartItem.js",
                            lineNumber: 123,
                            columnNumber: 9
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/component/InstamartItem.js",
                    lineNumber: 121,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "src/component/InstamartItem.js",
                lineNumber: 120,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(Instaitem, "iYuSmaXstdksDk9oBwjerLnW6V4=", false, function() {
    return [
        (0, _reactRouterDom.useParams),
        (0, _useSpecificInstamartItemDefault.default),
        (0, _useInstamartDefault.default),
        (0, _reactRedux.useDispatch),
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = Instaitem;
exports.default = Instaitem;
var _c;
$RefreshReg$(_c, "Instaitem");

  $parcel$ReactRefreshHelpers$9378.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../utils/useInstamart":"5fmzm","react":"21dqq","react-router-dom":"9xmpe","react-redux":"62sf7","../utils/CartSlice":"jOiMX","./StarRating":"5G9LQ","../utils/UserContext":"c5vgB","../utils/useSpecificInstamartItem":"gXkUR","./shimmer":"bltIQ","./Instacard":"jmbau","sweetalert2":"1HyFr","../utils/FavSlice":"bPK1g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"5fmzm":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$23f8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$23f8.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _constants = require("../constants");
var _s = $RefreshSig$();
const useInstamartItem = ()=>{
    _s();
    const [item, setItem] = (0, _react.useState)([]);
    const [allitem, setAllItem] = (0, _react.useState)([]);
    const [loading, setLoading] = (0, _react.useState)(true);
    const [error, setError] = (0, _react.useState)(null); // State to hold error messages
    (0, _react.useEffect)(()=>{
        data();
    }, []);
    const data = async ()=>{
        try {
            let response = await fetch((0, _constants.I_R_L));
            if (!response.ok) throw new Error('Network response was not ok'); // Throw error for non-2xx responses
            let json = await response.json();
            setItem(json.Instamart);
            setAllItem(json.Instamart);
        } catch (err) {
            setError(err.message); // Set error message if an error occurs
        } finally{
            setLoading(false); // Set loading to false after fetching
        }
    };
    return [
        item,
        allitem,
        loading,
        setItem,
        setAllItem,
        error
    ];
};
_s(useInstamartItem, "GjW2HsNXCXOJC3z03c5f1E/59Zg=");
exports.default = useInstamartItem;

  $parcel$ReactRefreshHelpers$23f8.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","../constants":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gXkUR":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$fac6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$fac6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _constants = require("../constants");
var _s = $RefreshSig$();
const useSpecificInstaItem = (id1)=>{
    _s();
    const [mitem, setMitem] = (0, _react.useState)([]);
    const [error, setError] = (0, _react.useState)(null);
    const [isLoading, setIsLoading] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        Martdata();
    }, [
        id1
    ]);
    const Martdata = async ()=>{
        setIsLoading(true);
        try {
            let response = await fetch((0, _constants.N_R_L) + id1);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            let json = await response.json();
            setMitem(json);
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally{
            setIsLoading(false);
        }
    };
    return {
        mitem,
        error,
        isLoading
    };
};
_s(useSpecificInstaItem, "hrKys9cQ5L/MHWA1CeyCz1HMVEM=");
exports.default = useSpecificInstaItem;

  $parcel$ReactRefreshHelpers$fac6.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","../constants":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jmbau":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$a0a5 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a0a5.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
const InstaCard = ({ id, name, image, price })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                src: image,
                alt: name
            }, void 0, false, {
                fileName: "src/component/Instacard.js",
                lineNumber: 5,
                columnNumber: 11
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                children: name
            }, void 0, false, {
                fileName: "src/component/Instacard.js",
                lineNumber: 6,
                columnNumber: 11
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                children: [
                    "$",
                    price
                ]
            }, void 0, true, {
                fileName: "src/component/Instacard.js",
                lineNumber: 7,
                columnNumber: 11
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/component/Instacard.js",
        lineNumber: 4,
        columnNumber: 9
    }, undefined);
};
_c = InstaCard;
exports.default = InstaCard;
var _c;
$RefreshReg$(_c, "InstaCard");

  $parcel$ReactRefreshHelpers$a0a5.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["aQL8O","7AKHs"], null, "parcelRequire94c2")

//# sourceMappingURL=InstamartItem.071b02b4.js.map
