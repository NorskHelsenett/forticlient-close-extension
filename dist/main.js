(()=>{"use strict";({156:function(t,o){var e=this&&this.__awaiter||function(t,o,e,n){return new(e||(e=Promise))((function(c,i){function l(t){try{s(n.next(t))}catch(t){i(t)}}function r(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var o;t.done?c(t.value):(o=t.value,o instanceof e?o:new e((function(t){t(o)}))).then(l,r)}s((n=n.apply(t,o||[])).next())}))};Object.defineProperty(o,"__esModule",{value:!0}),function(){e(this,void 0,void 0,(function*(){const t=yield chrome.tabs.query({url:["http://localhost:8020/*","http://127.0.0.1:8020/*"]});console.log(t),t.forEach((t=>{!function(t){console.log("start closeTab"),-1===t.url.indexOf("http://localhost:8020")&&-1===t.url.indexOf("http://127.0.0.1:8020")||(console.log("about to close tab"),setTimeout((()=>{chrome.tabs.remove(t.id).catch((t=>{console.error(t)})).then((()=>{console.log("tab closed")}))}),1e3))}(t)}))}))}()}})[156](0,{})})();