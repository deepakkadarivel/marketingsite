"use strict";var precacheConfig=[["/marketingsite/index.html","a78d61d0298095b5fe461bab49a153fb"],["/marketingsite/static/css/main.61216dca.css","8788f3ee31b8814ab2797f5256a2fad2"],["/marketingsite/static/js/main.6873357d.js","dde3a5145dbb819305409bb54809a373"],["/marketingsite/static/media/header_bg.960a4207.jpg","960a4207e209bec164f63318b09d6cb5"],["/marketingsite/static/media/header_bg_ipad.63224588.jpg","63224588ffae0a9370677877ea180800"],["/marketingsite/static/media/header_bg_ipad_land.9f44e73e.jpg","9f44e73e7b886cc90b1b8ae0ba107485"],["/marketingsite/static/media/header_bg_mob.71c894a1.jpg","71c894a1675e78f2e51cc8c1e5cd2c43"],["/marketingsite/static/media/icon_arrow.978bfa1f.svg","978bfa1fcc498534f7faf14b5c6d34fa"],["/marketingsite/static/media/icon_arrow_left.497388da.svg","497388da140a00f70eaf66431840d2f9"],["/marketingsite/static/media/icon_arrow_right.d635bc1d.svg","d635bc1d4efd3f6acec68c07b805d99e"],["/marketingsite/static/media/icon_email.3a0b280b.svg","3a0b280bf36de61a693faf4e4505c252"],["/marketingsite/static/media/icon_location.ebc458f6.svg","ebc458f670831fc5328ed0d9612a27ce"],["/marketingsite/static/media/icon_phone.cd080c3f.svg","cd080c3f92d7d81864db9af18f69aa71"],["/marketingsite/static/media/icon_reading.b112c0b5.svg","b112c0b55d9c1b33b8066b451817db97"],["/marketingsite/static/media/icon_reading_color.dd970c2f.svg","dd970c2f7a5a0af12232730d4222df72"],["/marketingsite/static/media/icon_reading_md.fb0c38f6.svg","fb0c38f658eeb7c7290a87bb2cc5a923"],["/marketingsite/static/media/icon_reading_md_color.ac7b4f70.svg","ac7b4f7056d7a43d4795a85a29e3a8bc"],["/marketingsite/static/media/icon_signup.00fdbd77.svg","00fdbd7707471c4969ce5f02f7c502e8"],["/marketingsite/static/media/icon_target.373d9ed7.svg","373d9ed7cad951fedb2092b119e3adc8"],["/marketingsite/static/media/icon_target_color.94f17ac3.svg","94f17ac3417330b5f42f051f18947866"],["/marketingsite/static/media/icon_target_md.9fa79945.svg","9fa7994546064d77db4b6fc0289834f4"],["/marketingsite/static/media/icon_target_md_color.f51c6b7e.svg","f51c6b7e0762f7e215076eb82f47d003"],["/marketingsite/static/media/icon_test.f9962aaa.svg","f9962aaa8dd99078b05f6f6a31c4dfaa"],["/marketingsite/static/media/icon_test_color.0fe8b77f.svg","0fe8b77fdb3189939b4640bf4676600a"],["/marketingsite/static/media/icon_test_md.1e41d413.svg","1e41d4139a751da5363faafaa1293581"],["/marketingsite/static/media/icon_test_md_color.98596a84.svg","98596a844f030cc0f43f1a04ef0cdd45"],["/marketingsite/static/media/icon_train.8980eb3c.svg","8980eb3c9c89ba0ec98b99ffadd5fe07"],["/marketingsite/static/media/icon_train_color.c7bd8175.svg","c7bd817529b64b12699d71eaa52810f7"],["/marketingsite/static/media/icon_train_md.4c968ff1.svg","4c968ff1fe3dbc08caa473813e1ea25a"],["/marketingsite/static/media/icon_train_md_color.247bf92e.svg","247bf92efc5931d053b1affc2848c8a4"],["/marketingsite/static/media/icon_vocab.c6e7913d.svg","c6e7913debcd485a85d980998a4709fa"],["/marketingsite/static/media/icon_vocab_color.c6b6d85c.svg","c6b6d85c10317aba8815b6aac57f3210"],["/marketingsite/static/media/icon_vocab_md.d3fb378b.svg","d3fb378b3a4b4178dfdf3cf73318ef48"],["/marketingsite/static/media/icon_vocab_md_color.fc1bab23.svg","fc1bab23ee9223c2642001743682edc9"],["/marketingsite/static/media/img_vocab.b11d612e.jpg","b11d612e29fc3bb22745e516312401b6"],["/marketingsite/static/media/nav-logo.50e7b091.svg","50e7b0913b020c216cac7668a4aa92a5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),c=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),e=urlsToCacheKeys.has(t));var c="/marketingsite/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});