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

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"hdntn":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "600cd631ddc24531";
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

},{}],"lNsEB":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$000f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$000f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactMultiCarousel = require("react-multi-carousel");
var _reactMultiCarouselDefault = parcelHelpers.interopDefault(_reactMultiCarousel);
var _stylesCss = require("react-multi-carousel/lib/styles.css");
const responsive = {
    superLargeDesktop: {
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
};
const Products = ()=>{
    const carouselItems = [
        {
            id: 1,
            name: "CLOTHING",
            link: "/clothing",
            image: "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg"
        },
        {
            id: 2,
            name: "RESTAURANT",
            link: "/restaurant",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 3,
            name: " GROCERY",
            link: "/instamart",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Grocery_Gourmet_Food1.jpeg"
        },
        {
            id: 4,
            name: " FITNESS",
            link: "/fitness",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Fitness.jpeg"
        },
        {
            id: 5,
            name: " DINEOUT",
            link: "/dineout",
            image: "https://www.dineout.co.in/blog/wp-content/uploads/2019/11/rsz_101.jpg"
        },
        {
            id: 6,
            name: "BEAUTY",
            link: "/beauty",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Beauty_Personal_Care_.jpg"
        },
        {
            id: 7,
            name: "HOME&KITCHEN",
            link: "/homekitchen",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Home_Kitchen.jpeg"
        },
        {
            id: 8,
            name: "STATIONARY",
            link: "/stationary",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Stationery_.jpeg"
        },
        {
            id: 9,
            name: "ELECTRONICS",
            link: "/electronics",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Electronicss1.jpeg"
        },
        {
            id: 10,
            name: "BOOKS",
            link: "/books",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Books.jpeg"
        },
        {
            id: 10,
            name: "TOYS",
            link: "/toys",
            image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/_Toys_Games.jpeg"
        },
        {
            id: 10,
            name: "MOBILES",
            link: "/mobiles",
            image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$"
        }
    ];
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "carousal",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                    children: "All Products"
                }, void 0, false, {
                    fileName: "src/component/Products.js",
                    lineNumber: 115,
                    columnNumber: 17
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactMultiCarouselDefault.default), {
                    responsive: responsive,
                    children: carouselItems.map((item)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            href: item.link,
                            style: {
                                textDecoration: "none",
                                color: "inherit"
                            },
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                        src: item.image,
                                        alt: item.name,
                                        className: "carousel-image"
                                    }, void 0, false, {
                                        fileName: "src/component/Products.js",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "carousel-name",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "src/component/Products.js",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/component/Products.js",
                                lineNumber: 123,
                                columnNumber: 23
                            }, undefined)
                        }, item.id, false, {
                            fileName: "src/component/Products.js",
                            lineNumber: 118,
                            columnNumber: 21
                        }, undefined))
                }, void 0, false, {
                    fileName: "src/component/Products.js",
                    lineNumber: 116,
                    columnNumber: 17
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/component/Products.js",
            lineNumber: 114,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/component/Products.js",
        lineNumber: 112,
        columnNumber: 5
    }, undefined);
};
_c = Products;
exports.default = Products;
var _c;
$RefreshReg$(_c, "Products");

  $parcel$ReactRefreshHelpers$000f.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-multi-carousel":"7GYri","react-multi-carousel/lib/styles.css":"kzF8x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7GYri":[function(require,module,exports,__globalThis) {
module.exports = require("422b18f349da682b");

},{"422b18f349da682b":"arZXM"}],"arZXM":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var Carousel_1 = require("fbdb9dc6cb42d15a");
exports.default = Carousel_1.default;

},{"fbdb9dc6cb42d15a":"7Fnhb"}],"7Fnhb":[function(require,module,exports,__globalThis) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    };
    return function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = require("4d366b70f83ac5d5"), utils_1 = require("f130f92f8c420c37"), types_1 = require("a47e479be2180a87"), Dots_1 = require("1cf0709c2b908d23"), Arrows_1 = require("6e4c8377e348cf14"), CarouselItems_1 = require("ba12243aefcb7ff0"), common_1 = require("458792e448c1b031"), defaultTransitionDuration = 400, defaultTransition = "transform 400ms ease-in-out", Carousel = function(_super) {
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        return _this.containerRef = React.createRef(), _this.listRef = React.createRef(), _this.state = {
            itemWidth: 0,
            slidesToShow: 0,
            currentSlide: 0,
            totalItems: React.Children.count(props.children),
            deviceType: "",
            domLoaded: !1,
            transform: 0,
            containerWidth: 0
        }, _this.onResize = _this.onResize.bind(_this), _this.handleDown = _this.handleDown.bind(_this), _this.handleMove = _this.handleMove.bind(_this), _this.handleOut = _this.handleOut.bind(_this), _this.onKeyUp = _this.onKeyUp.bind(_this), _this.handleEnter = _this.handleEnter.bind(_this), _this.setIsInThrottle = _this.setIsInThrottle.bind(_this), _this.next = utils_1.throttle(_this.next.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.previous = utils_1.throttle(_this.previous.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.goToSlide = utils_1.throttle(_this.goToSlide.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.onMove = !1, _this.initialX = 0, _this.lastX = 0, _this.isAnimationAllowed = !1, _this.direction = "", _this.initialY = 0, _this.isInThrottle = !1, _this.transformPlaceHolder = 0, _this;
    }
    return __extends(Carousel, _super), Carousel.prototype.resetTotalItems = function() {
        var _this = this, totalItems = React.Children.count(this.props.children), currentSlide = utils_1.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, totalItems));
        this.setState({
            totalItems: totalItems,
            currentSlide: currentSlide
        }, function() {
            _this.setContainerAndItemWidth(_this.state.slidesToShow, !0);
        });
    }, Carousel.prototype.setIsInThrottle = function(isInThrottle) {
        void 0 === isInThrottle && (isInThrottle = !1), this.isInThrottle = isInThrottle;
    }, Carousel.prototype.setTransformDirectly = function(position, withAnimation) {
        var additionalTransfrom = this.props.additionalTransfrom;
        this.transformPlaceHolder = position;
        var currentTransform = common_1.getTransform(this.state, this.props, this.transformPlaceHolder);
        this.listRef && this.listRef.current && (this.setAnimationDirectly(withAnimation), this.listRef.current.style.transform = "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)");
    }, Carousel.prototype.setAnimationDirectly = function(animationAllowed) {
        this.listRef && this.listRef.current && (this.listRef.current.style.transition = animationAllowed ? this.props.customTransition || defaultTransition : "none");
    }, Carousel.prototype.componentDidMount = function() {
        this.setState({
            domLoaded: !0
        }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    }, Carousel.prototype.setClones = function(slidesToShow, itemWidth, forResizing, resetCurrentSlide) {
        var _this = this;
        void 0 === resetCurrentSlide && (resetCurrentSlide = !1), this.isAnimationAllowed = !1;
        var childrenArr = React.Children.toArray(this.props.children), initialSlide = utils_1.getInitialSlideInInfiniteMode(slidesToShow || this.state.slidesToShow, childrenArr), clones = utils_1.getClones(this.state.slidesToShow, childrenArr), currentSlide = childrenArr.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
        this.setState({
            totalItems: clones.length,
            currentSlide: forResizing && !resetCurrentSlide ? currentSlide : initialSlide
        }, function() {
            _this.correctItemsPosition(itemWidth || _this.state.itemWidth);
        });
    }, Carousel.prototype.setItemsToShow = function(shouldCorrectItemPosition, resetCurrentSlide) {
        var _this = this, responsive = this.props.responsive;
        Object.keys(responsive).forEach(function(item) {
            var _a = responsive[item], breakpoint = _a.breakpoint, items = _a.items, max = breakpoint.max, min = breakpoint.min, widths = [
                window.innerWidth
            ];
            window.screen && window.screen.width && widths.push(window.screen.width);
            var screenWidth = Math.min.apply(Math, widths);
            min <= screenWidth && screenWidth <= max && (_this.setState({
                slidesToShow: items,
                deviceType: item
            }), _this.setContainerAndItemWidth(items, shouldCorrectItemPosition, resetCurrentSlide));
        });
    }, Carousel.prototype.setContainerAndItemWidth = function(slidesToShow, shouldCorrectItemPosition, resetCurrentSlide) {
        var _this = this;
        if (this.containerRef && this.containerRef.current) {
            var containerWidth = this.containerRef.current.offsetWidth, itemWidth_1 = utils_1.getItemClientSideWidth(this.props, slidesToShow, containerWidth);
            this.setState({
                containerWidth: containerWidth,
                itemWidth: itemWidth_1
            }, function() {
                _this.props.infinite && _this.setClones(slidesToShow, itemWidth_1, shouldCorrectItemPosition, resetCurrentSlide);
            }), shouldCorrectItemPosition && this.correctItemsPosition(itemWidth_1);
        }
    }, Carousel.prototype.correctItemsPosition = function(itemWidth, isAnimationAllowed, setToDomDirectly) {
        isAnimationAllowed && (this.isAnimationAllowed = !0), !isAnimationAllowed && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
        var nextTransform = this.state.totalItems < this.state.slidesToShow ? 0 : -itemWidth * this.state.currentSlide;
        setToDomDirectly && this.setTransformDirectly(nextTransform, !0), this.setState({
            transform: nextTransform
        });
    }, Carousel.prototype.onResize = function(value) {
        var shouldCorrectItemPosition;
        shouldCorrectItemPosition = !!this.props.infinite && ("boolean" != typeof value || !value), this.setItemsToShow(shouldCorrectItemPosition);
    }, Carousel.prototype.componentDidUpdate = function(_a, _b) {
        var _this = this, keyBoardControl = _a.keyBoardControl, autoPlay = _a.autoPlay, children = _a.children, containerWidth = _b.containerWidth, domLoaded = _b.domLoaded, currentSlide = _b.currentSlide;
        if (this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== containerWidth && (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), this.itemsToShowTimeout = setTimeout(function() {
            _this.setItemsToShow(!0);
        }, this.props.transitionDuration || defaultTransitionDuration)), keyBoardControl && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !keyBoardControl && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), autoPlay && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), autoPlay || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), children.length !== this.props.children.length ? Carousel.clonesTimeout = setTimeout(function() {
            _this.props.infinite ? _this.setClones(_this.state.slidesToShow, _this.state.itemWidth, !0, !0) : _this.resetTotalItems();
        }, this.props.transitionDuration || defaultTransitionDuration) : this.props.infinite && this.state.currentSlide !== currentSlide && this.correctClonesPosition({
            domLoaded: domLoaded
        }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform), this.props.autoPlay && this.props.rewind && !this.props.infinite && utils_1.isInRightEnd(this.state)) {
            var rewindBuffer = this.props.transitionDuration || defaultTransitionDuration;
            Carousel.isInThrottleTimeout = setTimeout(function() {
                _this.setIsInThrottle(!1), _this.resetAutoplayInterval(), _this.goToSlide(0, void 0, !!_this.props.rewindWithAnimation);
            }, rewindBuffer + this.props.autoPlaySpeed);
        }
    }, Carousel.prototype.correctClonesPosition = function(_a) {
        var _this = this, domLoaded = _a.domLoaded, childrenArr = React.Children.toArray(this.props.children), _b = utils_1.checkClonesPosition(this.state, childrenArr, this.props), isReachingTheEnd = _b.isReachingTheEnd, isReachingTheStart = _b.isReachingTheStart, nextSlide = _b.nextSlide, nextPosition = _b.nextPosition;
        this.state.domLoaded && domLoaded && (isReachingTheEnd || isReachingTheStart) && (this.isAnimationAllowed = !1, Carousel.transformTimeout = setTimeout(function() {
            _this.setState({
                transform: nextPosition,
                currentSlide: nextSlide
            });
        }, this.props.transitionDuration || defaultTransitionDuration));
    }, Carousel.prototype.next = function(slidesHavePassed) {
        var _this = this;
        void 0 === slidesHavePassed && (slidesHavePassed = 0);
        var _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange;
        if (!utils_1.notEnoughChildren(this.state)) {
            var _b = utils_1.populateNextSlides(this.state, this.props, slidesHavePassed), nextSlides = _b.nextSlides, nextPosition = _b.nextPosition, previousSlide = this.state.currentSlide;
            void 0 !== nextSlides && void 0 !== nextPosition && ("function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                transform: nextPosition,
                currentSlide: nextSlides
            }, function() {
                "function" == typeof afterChange && (Carousel.afterChangeTimeout = setTimeout(function() {
                    afterChange(previousSlide, _this.getState());
                }, _this.props.transitionDuration || defaultTransitionDuration));
            }));
        }
    }, Carousel.prototype.previous = function(slidesHavePassed) {
        var _this = this;
        void 0 === slidesHavePassed && (slidesHavePassed = 0);
        var _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange;
        if (!utils_1.notEnoughChildren(this.state)) {
            var _b = utils_1.populatePreviousSlides(this.state, this.props, slidesHavePassed), nextSlides = _b.nextSlides, nextPosition = _b.nextPosition;
            if (void 0 !== nextSlides && void 0 !== nextPosition) {
                var previousSlide = this.state.currentSlide;
                "function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                    transform: nextPosition,
                    currentSlide: nextSlides
                }, function() {
                    "function" == typeof afterChange && (Carousel.afterChangeTimeout2 = setTimeout(function() {
                        afterChange(previousSlide, _this.getState());
                    }, _this.props.transitionDuration || defaultTransitionDuration));
                });
            }
        }
    }, Carousel.prototype.resetAutoplayInterval = function() {
        this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    }, Carousel.prototype.componentWillUnmount = function() {
        window.removeEventListener("resize", this.onResize), this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), Carousel.clonesTimeout && clearTimeout(Carousel.clonesTimeout), Carousel.isInThrottleTimeout && clearTimeout(Carousel.isInThrottleTimeout), Carousel.transformTimeout && clearTimeout(Carousel.transformTimeout), Carousel.afterChangeTimeout && clearTimeout(Carousel.afterChangeTimeout), Carousel.afterChangeTimeout2 && clearTimeout(Carousel.afterChangeTimeout2), Carousel.afterChangeTimeout3 && clearTimeout(Carousel.afterChangeTimeout3);
    }, Carousel.prototype.resetMoveStatus = function() {
        this.onMove = !1, this.initialX = 0, this.lastX = 0, this.direction = "", this.initialY = 0;
    }, Carousel.prototype.getCords = function(_a) {
        var clientX = _a.clientX, clientY = _a.clientY;
        return {
            clientX: common_1.parsePosition(this.props, clientX),
            clientY: common_1.parsePosition(this.props, clientY)
        };
    }, Carousel.prototype.handleDown = function(e) {
        if (!(!types_1.isMouseMoveEvent(e) && !this.props.swipeable || types_1.isMouseMoveEvent(e) && !this.props.draggable || this.isInThrottle)) {
            var _a = this.getCords(types_1.isMouseMoveEvent(e) ? e : e.touches[0]), clientX = _a.clientX, clientY = _a.clientY;
            this.onMove = !0, this.initialX = clientX, this.initialY = clientY, this.lastX = clientX, this.isAnimationAllowed = !1;
        }
    }, Carousel.prototype.handleMove = function(e) {
        if (!(!types_1.isMouseMoveEvent(e) && !this.props.swipeable || types_1.isMouseMoveEvent(e) && !this.props.draggable || utils_1.notEnoughChildren(this.state))) {
            var _a = this.getCords(types_1.isMouseMoveEvent(e) ? e : e.touches[0]), clientX = _a.clientX, clientY = _a.clientY, diffX = this.initialX - clientX, diffY = this.initialY - clientY;
            if (this.onMove) {
                if (!(Math.abs(diffX) > Math.abs(diffY))) return;
                var _b = utils_1.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, clientX, this.transformPlaceHolder), direction = _b.direction, nextPosition = _b.nextPosition, canContinue = _b.canContinue;
                direction && (this.direction = direction, canContinue && void 0 !== nextPosition && this.setTransformDirectly(nextPosition)), this.lastX = clientX;
            }
        }
    }, Carousel.prototype.handleOut = function(e) {
        this.props.autoPlay && !this.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
        var shouldDisableOnMobile = "touchend" === e.type && !this.props.swipeable, shouldDisableOnDesktop = ("mouseleave" === e.type || "mouseup" === e.type) && !this.props.draggable;
        if (!shouldDisableOnMobile && !shouldDisableOnDesktop && this.onMove) {
            if (this.setAnimationDirectly(!0), "right" === this.direction) {
                if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
                    var slidesHavePassed = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
                    this.next(slidesHavePassed);
                } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
            }
            if ("left" === this.direction) {
                if (this.lastX - this.initialX > this.props.minimumTouchDrag) {
                    slidesHavePassed = Math.round((this.lastX - this.initialX) / this.state.itemWidth);
                    this.previous(slidesHavePassed);
                } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
            }
            this.resetMoveStatus();
        }
    }, Carousel.prototype.isInViewport = function(el) {
        var _a = el.getBoundingClientRect(), _b = _a.top, top = void 0 === _b ? 0 : _b, _c = _a.left, left = void 0 === _c ? 0 : _c, _d = _a.bottom, bottom = void 0 === _d ? 0 : _d, _e = _a.right, right = void 0 === _e ? 0 : _e;
        return 0 <= top && 0 <= left && bottom <= (window.innerHeight || document.documentElement.clientHeight) && right <= (window.innerWidth || document.documentElement.clientWidth);
    }, Carousel.prototype.isChildOfCarousel = function(el) {
        return !!(el instanceof Element && this.listRef && this.listRef.current) && this.listRef.current.contains(el);
    }, Carousel.prototype.onKeyUp = function(e) {
        var target = e.target;
        switch(e.keyCode){
            case 37:
                if (this.isChildOfCarousel(target)) return this.previous();
                break;
            case 39:
                if (this.isChildOfCarousel(target)) return this.next();
                break;
            case 9:
                if (this.isChildOfCarousel(target) && target instanceof HTMLInputElement && this.isInViewport(target)) return this.next();
        }
    }, Carousel.prototype.handleEnter = function(e) {
        types_1.isMouseMoveEvent(e) && this.autoPlay && this.props.autoPlay && this.props.pauseOnHover && (clearInterval(this.autoPlay), this.autoPlay = void 0);
    }, Carousel.prototype.goToSlide = function(slide, skipCallbacks, animationAllowed) {
        var _this = this;
        if (void 0 === animationAllowed && (animationAllowed = !0), !this.isInThrottle) {
            var itemWidth = this.state.itemWidth, _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange, previousSlide = this.state.currentSlide;
            "function" != typeof beforeChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipBeforeChange) || beforeChange(slide, this.getState()), this.isAnimationAllowed = animationAllowed, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                currentSlide: slide,
                transform: -itemWidth * slide
            }, function() {
                _this.props.infinite && _this.correctClonesPosition({
                    domLoaded: !0
                }), "function" != typeof afterChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipAfterChange) || (Carousel.afterChangeTimeout3 = setTimeout(function() {
                    afterChange(previousSlide, _this.getState());
                }, _this.props.transitionDuration || defaultTransitionDuration));
            });
        }
    }, Carousel.prototype.getState = function() {
        return this.state;
    }, Carousel.prototype.renderLeftArrow = function(disbaled) {
        var _this = this, _a = this.props, customLeftArrow = _a.customLeftArrow, rtl = _a.rtl;
        return React.createElement(Arrows_1.LeftArrow, {
            customLeftArrow: customLeftArrow,
            getState: function() {
                return _this.getState();
            },
            previous: this.previous,
            disabled: disbaled,
            rtl: rtl
        });
    }, Carousel.prototype.renderRightArrow = function(disbaled) {
        var _this = this, _a = this.props, customRightArrow = _a.customRightArrow, rtl = _a.rtl;
        return React.createElement(Arrows_1.RightArrow, {
            customRightArrow: customRightArrow,
            getState: function() {
                return _this.getState();
            },
            next: this.next,
            disabled: disbaled,
            rtl: rtl
        });
    }, Carousel.prototype.renderButtonGroups = function() {
        var _this = this, customButtonGroup = this.props.customButtonGroup;
        return customButtonGroup ? React.cloneElement(customButtonGroup, {
            previous: function() {
                return _this.previous();
            },
            next: function() {
                return _this.next();
            },
            goToSlide: function(slideIndex, skipCallbacks) {
                return _this.goToSlide(slideIndex, skipCallbacks);
            },
            carouselState: this.getState()
        }) : null;
    }, Carousel.prototype.renderDotsList = function() {
        var _this = this;
        return React.createElement(Dots_1.default, {
            state: this.state,
            props: this.props,
            goToSlide: this.goToSlide,
            getState: function() {
                return _this.getState();
            }
        });
    }, Carousel.prototype.renderCarouselItems = function() {
        var clones = [];
        if (this.props.infinite) {
            var childrenArr = React.Children.toArray(this.props.children);
            clones = utils_1.getClones(this.state.slidesToShow, childrenArr);
        }
        return React.createElement(CarouselItems_1.default, {
            clones: clones,
            goToSlide: this.goToSlide,
            state: this.state,
            notEnoughChildren: utils_1.notEnoughChildren(this.state),
            props: this.props
        });
    }, Carousel.prototype.render = function() {
        var _a = this.props, deviceType = _a.deviceType, arrows = _a.arrows, renderArrowsWhenDisabled = _a.renderArrowsWhenDisabled, removeArrowOnDeviceType = _a.removeArrowOnDeviceType, infinite = _a.infinite, containerClass = _a.containerClass, sliderClass = _a.sliderClass, customTransition = _a.customTransition, additionalTransfrom = _a.additionalTransfrom, renderDotsOutside = _a.renderDotsOutside, renderButtonGroupOutside = _a.renderButtonGroupOutside, className = _a.className, rtl = _a.rtl;
        utils_1.throwError(this.state, this.props);
        var _b = utils_1.getInitialState(this.state, this.props), shouldRenderOnSSR = _b.shouldRenderOnSSR, shouldRenderAtAll = _b.shouldRenderAtAll, isLeftEndReach = utils_1.isInLeftEnd(this.state), isRightEndReach = utils_1.isInRightEnd(this.state), shouldShowArrows = arrows && !(removeArrowOnDeviceType && (deviceType && -1 < removeArrowOnDeviceType.indexOf(deviceType) || this.state.deviceType && -1 < removeArrowOnDeviceType.indexOf(this.state.deviceType))) && !utils_1.notEnoughChildren(this.state) && shouldRenderAtAll, disableLeftArrow = !infinite && isLeftEndReach, disableRightArrow = !infinite && isRightEndReach, currentTransform = common_1.getTransform(this.state, this.props);
        return React.createElement(React.Fragment, null, React.createElement("div", {
            className: "react-multi-carousel-list " + containerClass + " " + className,
            dir: rtl ? "rtl" : "ltr",
            ref: this.containerRef
        }, React.createElement("ul", {
            ref: this.listRef,
            className: "react-multi-carousel-track " + sliderClass,
            style: {
                transition: this.isAnimationAllowed ? customTransition || defaultTransition : "none",
                overflow: shouldRenderOnSSR ? "hidden" : "unset",
                transform: "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)"
            },
            onMouseMove: this.handleMove,
            onMouseDown: this.handleDown,
            onMouseUp: this.handleOut,
            onMouseEnter: this.handleEnter,
            onMouseLeave: this.handleOut,
            onTouchStart: this.handleDown,
            onTouchMove: this.handleMove,
            onTouchEnd: this.handleOut
        }, this.renderCarouselItems()), shouldShowArrows && (!disableLeftArrow || renderArrowsWhenDisabled) && this.renderLeftArrow(disableLeftArrow), shouldShowArrows && (!disableRightArrow || renderArrowsWhenDisabled) && this.renderRightArrow(disableRightArrow), shouldRenderAtAll && !renderButtonGroupOutside && this.renderButtonGroups(), shouldRenderAtAll && !renderDotsOutside && this.renderDotsList()), shouldRenderAtAll && renderDotsOutside && this.renderDotsList(), shouldRenderAtAll && renderButtonGroupOutside && this.renderButtonGroups());
    }, Carousel.defaultProps = {
        slidesToSlide: 1,
        infinite: !1,
        draggable: !0,
        swipeable: !0,
        arrows: !0,
        renderArrowsWhenDisabled: !1,
        containerClass: "",
        sliderClass: "",
        itemClass: "",
        keyBoardControl: !0,
        autoPlaySpeed: 3e3,
        showDots: !1,
        renderDotsOutside: !1,
        renderButtonGroupOutside: !1,
        minimumTouchDrag: 80,
        className: "",
        dotListClass: "",
        focusOnSelect: !1,
        centerMode: !1,
        additionalTransfrom: 0,
        pauseOnHover: !0,
        shouldResetAutoplay: !0,
        rewind: !1,
        rtl: !1,
        rewindWithAnimation: !1
    }, Carousel;
}(React.Component);
exports.default = Carousel;

},{"4d366b70f83ac5d5":"21dqq","f130f92f8c420c37":"9Pb3a","a47e479be2180a87":"eSnYr","1cf0709c2b908d23":"eteDK","6e4c8377e348cf14":"kdfHd","ba12243aefcb7ff0":"8nm32","458792e448c1b031":"imys0"}],"9Pb3a":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var clones_1 = require("a757853e4832be6b");
exports.getOriginalCounterPart = clones_1.getOriginalCounterPart, exports.getClones = clones_1.getClones, exports.checkClonesPosition = clones_1.checkClonesPosition, exports.getInitialSlideInInfiniteMode = clones_1.getInitialSlideInInfiniteMode;
var elementWidth_1 = require("fa90cdefe53152f4");
exports.getWidthFromDeviceType = elementWidth_1.getWidthFromDeviceType, exports.getPartialVisibilityGutter = elementWidth_1.getPartialVisibilityGutter, exports.getItemClientSideWidth = elementWidth_1.getItemClientSideWidth;
var common_1 = require("f241ee75935f103c");
exports.getInitialState = common_1.getInitialState, exports.getIfSlideIsVisbile = common_1.getIfSlideIsVisbile, exports.getTransformForCenterMode = common_1.getTransformForCenterMode, exports.getTransformForPartialVsibile = common_1.getTransformForPartialVsibile, exports.isInLeftEnd = common_1.isInLeftEnd, exports.isInRightEnd = common_1.isInRightEnd, exports.notEnoughChildren = common_1.notEnoughChildren, exports.getSlidesToSlide = common_1.getSlidesToSlide;
var throttle_1 = require("23da0d1a0d961c4");
exports.throttle = throttle_1.default;
var throwError_1 = require("4fe3267a4edf007d");
exports.throwError = throwError_1.default;
var next_1 = require("ff8604f2d2e2f57f");
exports.populateNextSlides = next_1.populateNextSlides;
var previous_1 = require("aff06300ca5c0832");
exports.populatePreviousSlides = previous_1.populatePreviousSlides;
var mouseOrTouchMove_1 = require("5eeffae371d9294d");
exports.populateSlidesOnMouseTouchMove = mouseOrTouchMove_1.populateSlidesOnMouseTouchMove;

},{"a757853e4832be6b":"5iWMG","fa90cdefe53152f4":"62aOQ","f241ee75935f103c":"imys0","23da0d1a0d961c4":"cfzs7","4fe3267a4edf007d":"hxj9q","ff8604f2d2e2f57f":"2NGjP","aff06300ca5c0832":"dudDt","5eeffae371d9294d":"G455a"}],"5iWMG":[function(require,module,exports,__globalThis) {
"use strict";
function getOriginalCounterPart(index, _a, childrenArr) {
    var slidesToShow = _a.slidesToShow, currentSlide = _a.currentSlide;
    return childrenArr.length > 2 * slidesToShow ? index + 2 * slidesToShow : currentSlide >= childrenArr.length ? childrenArr.length + index : index;
}
function getOriginalIndexLookupTableByClones(slidesToShow, childrenArr) {
    if (childrenArr.length > 2 * slidesToShow) {
        for(var table = {}, firstBeginningOfClones = childrenArr.length - 2 * slidesToShow, firstEndOfClones = childrenArr.length - firstBeginningOfClones, firstCount = firstBeginningOfClones, i = 0; i < firstEndOfClones; i++)table[i] = firstCount, firstCount++;
        var secondBeginningOfClones = childrenArr.length + firstEndOfClones, secondEndOfClones = secondBeginningOfClones + childrenArr.slice(0, 2 * slidesToShow).length, secondCount = 0;
        for(i = secondBeginningOfClones; i <= secondEndOfClones; i++)table[i] = secondCount, secondCount++;
        var originalEnd = secondBeginningOfClones, originalCounter = 0;
        for(i = firstEndOfClones; i < originalEnd; i++)table[i] = originalCounter, originalCounter++;
        return table;
    }
    table = {};
    var totalSlides = 3 * childrenArr.length, count = 0;
    for(i = 0; i < totalSlides; i++)table[i] = count, ++count === childrenArr.length && (count = 0);
    return table;
}
function getClones(slidesToShow, childrenArr) {
    return childrenArr.length < slidesToShow ? childrenArr : childrenArr.length > 2 * slidesToShow ? childrenArr.slice(childrenArr.length - 2 * slidesToShow, childrenArr.length).concat(childrenArr, childrenArr.slice(0, 2 * slidesToShow)) : childrenArr.concat(childrenArr, childrenArr);
}
function getInitialSlideInInfiniteMode(slidesToShow, childrenArr) {
    return childrenArr.length > 2 * slidesToShow ? 2 * slidesToShow : childrenArr.length;
}
function checkClonesPosition(_a, childrenArr, props) {
    var isReachingTheEnd, currentSlide = _a.currentSlide, slidesToShow = _a.slidesToShow, itemWidth = _a.itemWidth, totalItems = _a.totalItems, nextSlide = 0, nextPosition = 0, isReachingTheStart = 0 === currentSlide, originalFirstSlide = childrenArr.length - (childrenArr.length - 2 * slidesToShow);
    return childrenArr.length < slidesToShow ? (nextPosition = nextSlide = 0, isReachingTheStart = isReachingTheEnd = !1) : childrenArr.length > 2 * slidesToShow ? ((isReachingTheEnd = currentSlide >= originalFirstSlide + childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = -itemWidth * (nextSlide = originalFirstSlide + (childrenArr.length - 2 * slidesToShow)))) : ((isReachingTheEnd = currentSlide >= 2 * childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = props.showDots ? -itemWidth * (nextSlide = childrenArr.length) : -itemWidth * (nextSlide = totalItems / 3))), {
        isReachingTheEnd: isReachingTheEnd,
        isReachingTheStart: isReachingTheStart,
        nextSlide: nextSlide,
        nextPosition: nextPosition
    };
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getOriginalCounterPart = getOriginalCounterPart, exports.getOriginalIndexLookupTableByClones = getOriginalIndexLookupTableByClones, exports.getClones = getClones, exports.getInitialSlideInInfiniteMode = getInitialSlideInInfiniteMode, exports.checkClonesPosition = checkClonesPosition;

},{}],"62aOQ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var hasWarnAboutTypo = !1;
function getPartialVisibilityGutter(responsive, partialVisible, serverSideDeviceType, clientSideDeviceType) {
    var gutter = 0, deviceType = clientSideDeviceType || serverSideDeviceType;
    return partialVisible && deviceType && (!hasWarnAboutTypo && true && responsive[deviceType].paritialVisibilityGutter && (hasWarnAboutTypo = !0, console.warn("You appear to be using paritialVisibilityGutter instead of partialVisibilityGutter which will be moved to partialVisibilityGutter in the future completely")), gutter = responsive[deviceType].partialVisibilityGutter || responsive[deviceType].paritialVisibilityGutter), gutter;
}
function getWidthFromDeviceType(deviceType, responsive) {
    var itemWidth;
    responsive[deviceType] && (itemWidth = (100 / responsive[deviceType].items).toFixed(1));
    return itemWidth;
}
function getItemClientSideWidth(props, slidesToShow, containerWidth) {
    return Math.round(containerWidth / (slidesToShow + (props.centerMode ? 1 : 0)));
}
exports.getPartialVisibilityGutter = getPartialVisibilityGutter, exports.getWidthFromDeviceType = getWidthFromDeviceType, exports.getItemClientSideWidth = getItemClientSideWidth;

},{}],"imys0":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var elementWidth_1 = require("882452b35884c786");
function notEnoughChildren(state) {
    var slidesToShow = state.slidesToShow;
    return state.totalItems < slidesToShow;
}
function getInitialState(state, props) {
    var flexBisis, domLoaded = state.domLoaded, slidesToShow = state.slidesToShow, containerWidth = state.containerWidth, itemWidth = state.itemWidth, deviceType = props.deviceType, responsive = props.responsive, ssr = props.ssr, partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
    ssr && deviceType && !domFullyLoaded && (flexBisis = elementWidth_1.getWidthFromDeviceType(deviceType, responsive));
    var shouldRenderOnSSR = Boolean(ssr && deviceType && !domFullyLoaded && flexBisis);
    return {
        shouldRenderOnSSR: shouldRenderOnSSR,
        flexBisis: flexBisis,
        domFullyLoaded: domFullyLoaded,
        partialVisibilityGutter: elementWidth_1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType),
        shouldRenderAtAll: shouldRenderOnSSR || domFullyLoaded
    };
}
function getIfSlideIsVisbile(index, state) {
    var currentSlide = state.currentSlide, slidesToShow = state.slidesToShow;
    return currentSlide <= index && index < currentSlide + slidesToShow;
}
function getTransformForCenterMode(state, props, transformPlaceHolder) {
    var transform = transformPlaceHolder || state.transform;
    return !props.infinite && 0 === state.currentSlide || notEnoughChildren(state) ? transform : transform + state.itemWidth / 2;
}
function isInLeftEnd(_a) {
    return !(0 < _a.currentSlide);
}
function isInRightEnd(_a) {
    var currentSlide = _a.currentSlide, totalItems = _a.totalItems;
    return !(currentSlide + _a.slidesToShow < totalItems);
}
function getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) {
    void 0 === partialVisibilityGutter && (partialVisibilityGutter = 0);
    var currentSlide = state.currentSlide, slidesToShow = state.slidesToShow, isRightEndReach = isInRightEnd(state), shouldRemoveRightGutter = !props.infinite && isRightEndReach, baseTransform = transformPlaceHolder || state.transform;
    if (notEnoughChildren(state)) return baseTransform;
    var transform = baseTransform + currentSlide * partialVisibilityGutter;
    return shouldRemoveRightGutter ? transform + (state.containerWidth - (state.itemWidth - partialVisibilityGutter) * slidesToShow) : transform;
}
function parsePosition(props, position) {
    return props.rtl ? -1 * position : position;
}
function getTransform(state, props, transformPlaceHolder) {
    var partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, responsive = props.responsive, deviceType = props.deviceType, centerMode = props.centerMode, transform = transformPlaceHolder || state.transform, partialVisibilityGutter = elementWidth_1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType);
    return parsePosition(props, partialVisible || partialVisbile ? getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) : centerMode ? getTransformForCenterMode(state, props, transformPlaceHolder) : transform);
}
function getSlidesToSlide(state, props) {
    var domLoaded = state.domLoaded, slidesToShow = state.slidesToShow, containerWidth = state.containerWidth, itemWidth = state.itemWidth, deviceType = props.deviceType, responsive = props.responsive, slidesToScroll = props.slidesToSlide || 1, domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
    return props.ssr && props.deviceType && !domFullyLoaded && Object.keys(responsive).forEach(function(device) {
        var slidesToSlide = responsive[device].slidesToSlide;
        deviceType === device && slidesToSlide && (slidesToScroll = slidesToSlide);
    }), domFullyLoaded && Object.keys(responsive).forEach(function(item) {
        var _a = responsive[item], breakpoint = _a.breakpoint, slidesToSlide = _a.slidesToSlide, max = breakpoint.max, min = breakpoint.min;
        slidesToSlide && window.innerWidth >= min && window.innerWidth <= max && (slidesToScroll = slidesToSlide);
    }), slidesToScroll;
}
exports.notEnoughChildren = notEnoughChildren, exports.getInitialState = getInitialState, exports.getIfSlideIsVisbile = getIfSlideIsVisbile, exports.getTransformForCenterMode = getTransformForCenterMode, exports.isInLeftEnd = isInLeftEnd, exports.isInRightEnd = isInRightEnd, exports.getTransformForPartialVsibile = getTransformForPartialVsibile, exports.parsePosition = parsePosition, exports.getTransform = getTransform, exports.getSlidesToSlide = getSlidesToSlide;

},{"882452b35884c786":"62aOQ"}],"cfzs7":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var throttle = function(func, limit, setIsInThrottle) {
    var inThrottle;
    return function() {
        var args = arguments;
        inThrottle || (func.apply(this, args), inThrottle = !0, "function" == typeof setIsInThrottle && setIsInThrottle(!0), setTimeout(function() {
            inThrottle = !1, "function" == typeof setIsInThrottle && setIsInThrottle(!1);
        }, limit));
    };
};
exports.default = throttle;

},{}],"hxj9q":[function(require,module,exports,__globalThis) {
"use strict";
function throwError(state, props) {
    var partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, centerMode = props.centerMode, ssr = props.ssr, responsive = props.responsive;
    if ((partialVisbile || partialVisible) && centerMode) throw new Error("center mode can not be used at the same time with partialVisible");
    if (!responsive) throw ssr ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
    if (responsive && "object" != typeof responsive) throw new Error("responsive prop must be an object");
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = throwError;

},{}],"2NGjP":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var common_1 = require("718150d3943a47f2");
function populateNextSlides(state, props, slidesHavePassed) {
    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var nextSlides, nextPosition, slidesToShow = state.slidesToShow, currentSlide = state.currentSlide, itemWidth = state.itemWidth, totalItems = state.totalItems, slidesToSlide = common_1.getSlidesToSlide(state, props), nextMaximumSlides = currentSlide + 1 + slidesHavePassed + slidesToShow + (0 < slidesHavePassed ? 0 : slidesToSlide);
    return nextPosition = nextMaximumSlides <= totalItems ? -itemWidth * (nextSlides = currentSlide + slidesHavePassed + (0 < slidesHavePassed ? 0 : slidesToSlide)) : totalItems < nextMaximumSlides && currentSlide !== totalItems - slidesToShow ? -itemWidth * (nextSlides = totalItems - slidesToShow) : nextSlides = void 0, {
        nextSlides: nextSlides,
        nextPosition: nextPosition
    };
}
exports.populateNextSlides = populateNextSlides;

},{"718150d3943a47f2":"imys0"}],"dudDt":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = require("e638ee0fe3918325"), common_1 = require("7caeea1b5023cc0f"), common_2 = require("7caeea1b5023cc0f");
function populatePreviousSlides(state, props, slidesHavePassed) {
    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var nextSlides, nextPosition, currentSlide = state.currentSlide, itemWidth = state.itemWidth, slidesToShow = state.slidesToShow, children = props.children, showDots = props.showDots, infinite = props.infinite, slidesToSlide = common_1.getSlidesToSlide(state, props), nextMaximumSlides = currentSlide - slidesHavePassed - (0 < slidesHavePassed ? 0 : slidesToSlide), additionalSlides = (React.Children.toArray(children).length - slidesToShow) % slidesToSlide;
    return nextPosition = 0 <= nextMaximumSlides ? (nextSlides = nextMaximumSlides, showDots && !infinite && 0 < additionalSlides && common_2.isInRightEnd(state) && (nextSlides = currentSlide - additionalSlides), -itemWidth * nextSlides) : nextSlides = nextMaximumSlides < 0 && 0 !== currentSlide ? 0 : void 0, {
        nextSlides: nextSlides,
        nextPosition: nextPosition
    };
}
exports.populatePreviousSlides = populatePreviousSlides;

},{"e638ee0fe3918325":"21dqq","7caeea1b5023cc0f":"imys0"}],"G455a":[function(require,module,exports,__globalThis) {
"use strict";
function populateSlidesOnMouseTouchMove(state, props, initialX, lastX, clientX, transformPlaceHolder) {
    var direction, nextPosition, itemWidth = state.itemWidth, slidesToShow = state.slidesToShow, totalItems = state.totalItems, currentSlide = state.currentSlide, infinite = props.infinite, canContinue = !1, slidesHavePassedRight = Math.round((initialX - lastX) / itemWidth), slidesHavePassedLeft = Math.round((lastX - initialX) / itemWidth), isMovingLeft = initialX < clientX;
    if (clientX < initialX && !!(slidesHavePassedRight <= slidesToShow)) {
        direction = "right";
        var translateXLimit = Math.abs(-itemWidth * (totalItems - slidesToShow)), nextTranslate = transformPlaceHolder - (lastX - clientX), isLastSlide = currentSlide === totalItems - slidesToShow;
        (Math.abs(nextTranslate) <= translateXLimit || isLastSlide && infinite) && (nextPosition = nextTranslate, canContinue = !0);
    }
    isMovingLeft && slidesHavePassedLeft <= slidesToShow && (direction = "left", ((nextTranslate = transformPlaceHolder + (clientX - lastX)) <= 0 || 0 === currentSlide && infinite) && (canContinue = !0, nextPosition = nextTranslate));
    return {
        direction: direction,
        nextPosition: nextPosition,
        canContinue: canContinue
    };
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.populateSlidesOnMouseTouchMove = populateSlidesOnMouseTouchMove;

},{}],"eSnYr":[function(require,module,exports,__globalThis) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    };
    return function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = require("9ce12e532842b2f0");
function isMouseMoveEvent(e) {
    return "clientY" in e;
}
exports.isMouseMoveEvent = isMouseMoveEvent;
var Carousel = function(_super) {
    function Carousel() {
        return null !== _super && _super.apply(this, arguments) || this;
    }
    return __extends(Carousel, _super), Carousel;
}(React.Component);
exports.default = Carousel;

},{"9ce12e532842b2f0":"21dqq"}],"eteDK":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = require("dadb39fb7b4bccab"), clones_1 = require("3733bb65c03788f6"), dots_1 = require("bd184b42affc4d77"), common_1 = require("c775be409c3d47dd"), Dots = function(_a) {
    var props = _a.props, state = _a.state, goToSlide = _a.goToSlide, getState = _a.getState, showDots = props.showDots, customDot = props.customDot, dotListClass = props.dotListClass, infinite = props.infinite, children = props.children;
    if (!showDots || common_1.notEnoughChildren(state)) return null;
    var numberOfDotsToShow, currentSlide = state.currentSlide, slidesToShow = state.slidesToShow, slidesToSlide = common_1.getSlidesToSlide(state, props), childrenArr = React.Children.toArray(children);
    numberOfDotsToShow = infinite ? Math.ceil(childrenArr.length / slidesToSlide) : Math.ceil((childrenArr.length - slidesToShow) / slidesToSlide) + 1;
    var nextSlidesTable = dots_1.getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr), lookupTable = clones_1.getOriginalIndexLookupTableByClones(slidesToShow, childrenArr), currentSlides = lookupTable[currentSlide];
    return React.createElement("ul", {
        className: "react-multi-carousel-dot-list " + dotListClass
    }, Array(numberOfDotsToShow).fill(0).map(function(_, index) {
        var isActive, nextSlide;
        if (infinite) {
            nextSlide = nextSlidesTable[index];
            var cloneIndex = lookupTable[nextSlide];
            isActive = currentSlides === cloneIndex || cloneIndex <= currentSlides && currentSlides < cloneIndex + slidesToSlide;
        } else {
            var maximumNextSlide = childrenArr.length - slidesToShow, possibileNextSlides = index * slidesToSlide;
            isActive = (nextSlide = maximumNextSlide < possibileNextSlides ? maximumNextSlide : possibileNextSlides) === currentSlide || nextSlide < currentSlide && currentSlide < nextSlide + slidesToSlide && currentSlide < childrenArr.length - slidesToShow;
        }
        return customDot ? React.cloneElement(customDot, {
            index: index,
            active: isActive,
            key: index,
            onClick: function() {
                return goToSlide(nextSlide);
            },
            carouselState: getState()
        }) : React.createElement("li", {
            "data-index": index,
            key: index,
            className: "react-multi-carousel-dot " + (isActive ? "react-multi-carousel-dot--active" : "")
        }, React.createElement("button", {
            "aria-label": "Go to slide " + (index + 1),
            onClick: function() {
                return goToSlide(nextSlide);
            }
        }));
    }));
};
exports.default = Dots;

},{"dadb39fb7b4bccab":"21dqq","3733bb65c03788f6":"5iWMG","bd184b42affc4d77":"7PASH","c775be409c3d47dd":"imys0"}],"7PASH":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var clones_1 = require("3e49fddceae50e58"), common_1 = require("c42ba5e0a645aad4");
function getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr) {
    var table = {}, slidesToSlide = common_1.getSlidesToSlide(state, props);
    return Array(numberOfDotsToShow).fill(0).forEach(function(_, i) {
        var nextSlide = clones_1.getOriginalCounterPart(i, state, childrenArr);
        if (0 === i) table[0] = nextSlide;
        else {
            var now = table[i - 1] + slidesToSlide;
            table[i] = now;
        }
    }), table;
}
exports.getLookupTableForNextSlides = getLookupTableForNextSlides;

},{"3e49fddceae50e58":"5iWMG","c42ba5e0a645aad4":"imys0"}],"kdfHd":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = require("f55e92446f7600d4"), LeftArrow = function(_a) {
    var customLeftArrow = _a.customLeftArrow, getState = _a.getState, previous = _a.previous, disabled = _a.disabled, rtl = _a.rtl;
    if (customLeftArrow) return React.cloneElement(customLeftArrow, {
        onClick: function() {
            return previous();
        },
        carouselState: getState(),
        disabled: disabled,
        rtl: rtl
    });
    var rtlClassName = rtl ? "rtl" : "";
    return React.createElement("button", {
        "aria-label": "Go to previous slide",
        className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " + rtlClassName,
        onClick: function() {
            return previous();
        },
        type: "button",
        disabled: disabled
    });
};
exports.LeftArrow = LeftArrow;
var RightArrow = function(_a) {
    var customRightArrow = _a.customRightArrow, getState = _a.getState, next = _a.next, disabled = _a.disabled, rtl = _a.rtl;
    if (customRightArrow) return React.cloneElement(customRightArrow, {
        onClick: function() {
            return next();
        },
        carouselState: getState(),
        disabled: disabled,
        rtl: rtl
    });
    var rtlClassName = rtl ? "rtl" : "";
    return React.createElement("button", {
        "aria-label": "Go to next slide",
        className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " + rtlClassName,
        onClick: function() {
            return next();
        },
        type: "button",
        disabled: disabled
    });
};
exports.RightArrow = RightArrow;

},{"f55e92446f7600d4":"21dqq"}],"8nm32":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var React = require("eb0fe8492571c66"), utils_1 = require("df415723d419f7d9"), CarouselItems = function(_a) {
    var props = _a.props, state = _a.state, goToSlide = _a.goToSlide, clones = _a.clones, notEnoughChildren = _a.notEnoughChildren, itemWidth = state.itemWidth, children = props.children, infinite = props.infinite, itemClass = props.itemClass, itemAriaLabel = props.itemAriaLabel, partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, _b = utils_1.getInitialState(state, props), flexBisis = _b.flexBisis, shouldRenderOnSSR = _b.shouldRenderOnSSR, domFullyLoaded = _b.domFullyLoaded, partialVisibilityGutter = _b.partialVisibilityGutter;
    return _b.shouldRenderAtAll ? (partialVisbile && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), React.createElement(React.Fragment, null, (infinite ? clones : React.Children.toArray(children)).map(function(child, index) {
        return React.createElement("li", {
            key: index,
            "data-index": index,
            onClick: function() {
                props.focusOnSelect && goToSlide(index);
            },
            "aria-hidden": utils_1.getIfSlideIsVisbile(index, state) ? "false" : "true",
            "aria-label": itemAriaLabel || (child.props.ariaLabel ? child.props.ariaLabel : null),
            style: {
                flex: shouldRenderOnSSR ? "1 0 " + flexBisis + "%" : "auto",
                position: "relative",
                width: domFullyLoaded ? ((partialVisbile || partialVisible) && partialVisibilityGutter && !notEnoughChildren ? itemWidth - partialVisibilityGutter : itemWidth) + "px" : "auto"
            },
            className: "react-multi-carousel-item " + (utils_1.getIfSlideIsVisbile(index, state) ? "react-multi-carousel-item--active" : "") + " " + itemClass
        }, child);
    }))) : null;
};
exports.default = CarouselItems;

},{"eb0fe8492571c66":"21dqq","df415723d419f7d9":"9Pb3a"}],"kzF8x":[function() {},{}]},["aQL8O","hdntn"], null, "parcelRequire94c2")

//# sourceMappingURL=Products.ddc24531.js.map
