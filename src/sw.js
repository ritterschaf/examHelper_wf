if ("serviceWorker" in navigator) {
    try {
        navigator.serviceWorker.register("sw.js");
        navigator.serviceWorker.ready.then(registration => registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: new Uint8Array([4, 191, 233, 62, 39, 98, 127, 174, 92, 188, 24, 206, 75, 102, 64, 151, 179, 246, 199, 199, 219, 147, 249, 90, 66, 204, 23, 151, 155, 154, 18, 134, 126, 21, 153, 253, 75, 104, 5, 95, 151, 16, 109, 15, 234, 218, 212, 117, 61, 187, 17, 226, 211, 17, 158, 185, 129, 165, 64, 74, 207, 85, 127, 255, 18]),
        })).then(subscription => {
            mySub = subscription.toJSON();
            console.log(mySub);
        }, error => console.log(error));

        console.log("Service Worker Registered");
    } catch (error) {
        console.log("Service Worker Registration Failed");
    }
}

const staticAssets = [
    "1-es5.a6c57973ae14557f2bcf.js",
    "2-es2015.3170804127f392de1600.js",
    "3-es5.89810583d7fe73757bfc.js",
    "3-es2015.0d3cc4d20d8177cc1ec7.js",
    "4-es5.7e34598ffb573e47cdfc.js",
    "4-es2015.8406ebf7ed26479fbe37.js",
    "5-es5.b628b814f4d2e0d79dd5.js",
    "5-es2015.56460e8ab7c0d9366ca5.js",
    "6-es5.9ce8020af7bdae2d9ea6.js",
    "6-es2015.572e629ef18d294a2fe9.js",
    "7-es5.35fe5364d069416a2905.js",
    "7-es2015.ba74aa92ec41b223c94a.js",
    "8-es5.abde9c367e7b46a05a97.js",
    "8-es2015.2eb762447e447dd09497.js",
    "9-es5.ec704ee56f1eeb5141e3.js",
    "9-es2015.52f932684ad71860c82f.js",
    "12-es5.d88c698987190edd32d0.js",
    "13-es5.e2c0006672b1a104c962.js",
    "13-es2015.46fe47206e9b3e1ae5b8.js",
    "14-es5.fa41c0694b5f68acca05.js",
    "14-es2015.fd8f762dd19d746175d3.js",
    "15-es5.bdb3398aceac6a6f4944.js",
    "15-es2015.9c152f14dd356d1f2689.js",
    "16-es5.8ac14cccb972f0a317d4.js",
    "16-es2015.def987fdcb66e1c49136.js",
    "17-es5.b21e579e5c5ff8ee9654.js",
    "17-es2015.e55ccc952f4e9d33f4c1.js",
    "18-es5.dc78d433315f69e74cb4.js",
    "18-es2015.4fb3efb79e7cb536dc9e.js",
    "19-es5.766be237f1dbd99138c5.js",
    "19-es2015.fb96b797c53e6de31ab0.js",
    "20-es5.536ae71cfb776a5dc1af.js",
    "20-es2015.dc545f8df206212c49fd.js",
    "21-es5.ce3e0b9686701d446df7.js",
    "21-es2015.d030e527257c47f7498d.js",
    "22-es5.f8cb487fbf1717dad39d.js",
    "22-es2015.fad661319123f06fcf6d.js",
    "23-es5.d4cdd5bfd9ecd71a15e9.js",
    "23-es2015.aa556a6b5ef926e44a2d.js",
    "24-es5.07abb06f28fc6f6b37ef.js",
    "24-es2015.a6e20dbb4156633abba7.js",
    "25-es5.b6775de44dc615481eac.js",
    "25-es2015.827af9a789df541a93ef.js",
    "26-es5.f30470e34bb6bdd31ea3.js",
    "26-es2015.b59638ab0a38c5ea9aa9.js",
    "27-es5.2a41819e7ade214f15b1.js",
    "27-es2015.bf75bf66519ac78a849f.js",
    "28-es5.88aa1616e99aa76f75bf.js",
    "28-es2015.cb9bbaf3ac56ddd4f72f.js",
    "29-es5.7094efd1aa6875b0b377.js",
    "29-es2015.2f27a3fdc9529bc08c7f.js",
    "30-es5.4ff8cc697dc2d8489b9e.js",
    "30-es2015.e96503821341e7cc4794.js",
    "31-es5.083a0e53200a508a3224.js",
    "31-es2015.732fcf572657d2e7e01d.js",
    "32-es5.ff7fc3b4f4295b6357e1.js",
    "32-es2015.a6b9fb0a3066e1e91c14.js",
    "33-es5.21cba2a6a87ebd5e96dd.js",
    "33-es2015.75a29c5fad67f0cf2c2c.js",
    "34-es5.11d6819129a525c8f84d.js",
    "34-es2015.0600f28c9d74f8fa14d7.js",
    "35-es5.8e726811eb48e2268b5d.js",
    "35-es2015.de5790dd8474a9b041ca.js",
    "36-es5.91679741ef3f841baa8e.js",
    "36-es2015.bd4d58fbf55bbc3fc6d8.js",
    "37-es5.8780ff58ec462a99eec2.js",
    "37-es2015.5d3c9e258d8ce3f16bea.js",
    "38-es5.a8fb7812b2ac48432191.js",
    "38-es2015.a4bcd38e0f593029b240.js",
    "39-es5.42953962eb805b2d48ef.js",
    "39-es2015.cdc878b814d0ac1f2e27.js",
    "40-es5.5998c67221d11ea1fd98.js",
    "40-es2015.15a481bc50ba223cae3c.js",
    "41-es5.0a4a4314189eb5137b65.js",
    "41-es2015.46af871b63d52285eead.js",
    "42-es5.1953106b22d8fd69928b.js",
    "42-es2015.443f372db44f79a8b1c8.js",
    "43-es5.bfc0b8202a079028ef46.js",
    "43-es2015.cfd1dff8160488df631d.js",
    "44-es5.fbc556aac04edb5298ad.js",
    "44-es2015.062f21744352ca1c983a.js",
    "45-es5.6758c53ca833d72d2b4b.js",
    "45-es2015.d08cef363fe1b1fd0255.js",
    "46-es5.3ad4a5a41212ef9be312.js",
    "46-es2015.0646b003d82943679cca.js",
    "47-es5.a59bcd8603c54c1aab03.js",
    "47-es2015.71de083fe4b20b411d71.js",
    "48-es5.9b494b1b704655d94f9a.js",
    "48-es2015.89128858b0abafe5c2d0.js",
    "49-es5.cc6fd1f12502611c103a.js",
    "49-es2015.46f30b903ed1d7fa94e7.js",
    "50-es5.d142661e9b85211923c5.js",
    "50-es2015.fc62e71c7906081cf809.js",
    "51-es5.3ceb8b220d1e5d01ef20.js",
    "51-es2015.dc24837583ebda6259d1.js",
    "52-es5.9b3023534e3907510966.js",
    "52-es2015.7f212bbe4c2bc2c7aa9c.js",
    "53-es5.9733c72a736ba5941571.js",
    "53-es2015.e692355d23c325571a0d.js",
    "54-es5.daaed017733a7a0dc50c.js",
    "54-es2015.8b4c32a1ca408501b0d1.js",
    "55-es5.236a12f7720a6628693d.js",
    "55-es2015.95d225d5658ffa0ee43a.js",
    "56-es5.5484202bcb143d00fabe.js",
    "56-es2015.081ec343ba594faabf56.js",
    "57-es5.e9eb5a30be691da1dbab.js",
    "57-es2015.6c095986f984f26a7d5b.js",
    "58-es5.d21d03ee2d40fb2bdc01.js",
    "58-es2015.10792343e54163b0e0d9.js",
    "59-es5.b7ba4e696c6982dea3c1.js",
    "59-es2015.169658c4585ebe9922cc.js",
    "60-es5.3d240366645f1b96a91a.js",
    "60-es2015.9fe594e8e46d5b1b79bd.js",
    "61-es5.9a9e29a63e75ad1124af.js",
    "61-es2015.15ce7fe25d909f2b5734.js",
    "62-es5.436645821dce879f1138.js",
    "62-es2015.2f8ab254b4c2c67dc00d.js",
    "63-es5.97c10403853fcb54a42b.js",
    "63-es2015.7ae47a8d82bc158275e5.js",
    "64-es5.dd97949b4cc55451ebe4.js",
    "64-es2015.27a55da5d44d3c3f1c5a.js",
    "65-es5.9dcafc032b73d23eaab2.js",
    "65-es2015.20e95a7ffa892bd69d88.js",
    "66-es5.d67ef5ee69bc00ac9dd4.js",
    "66-es2015.e495a8f59e1aa8447bf9.js",
    "67-es5.1e3f888a40a0a7bf4371.js",
    "67-es2015.32d6bfb60bec5020011e.js",
    "68-es5.6441afc3874d60327f95.js",
    "68-es2015.959ad0530884b1b41af4.js",
    "69-es5.3f31fc0074d594da17bb.js",
    "69-es2015.5c89f15c134ff5f54fde.js",
    "70-es5.1054e9a35754abbd3a9a.js",
    "70-es2015.7738afac1b601dc602fd.js",
    "71-es5.d18f3ccf782b524e5e70.js",
    "71-es2015.8b68351e1710a456c2de.js",
    "72-es5.33f04d3cba67599ded09.js",
    "72-es2015.3d47c14605cb097f92f6.js",
    "73-es5.c550c43747577dcebd45.js",
    "73-es2015.81496e15fcaf38198ae8.js",
    "74-es5.784d6eced21cb6ce271e.js",
    "74-es2015.261e66df68746ec0d652.js",
    "75-es5.b2edf2eaa1444b6c46d1.js",
    "75-es2015.9ac0a4174f8b339b45eb.js",
    "76-es5.6951369db090fa391db8.js",
    "76-es2015.b6897bda23370b5e3fc6.js",
    "77-es5.2b7467ff1104c360a07b.js",
    "77-es2015.1d7ff4250c6b4fba32bc.js",
    "78-es5.11302efa05f61f7a4aae.js",
    "78-es2015.9baf6f2b7c012ab2a729.js",
    "79-es5.0b43ea1763daca862650.js",
    "79-es2015.65c52ec9847d8f7f4df5.js",
    "80-es5.9d73b604c89341288dc7.js",
    "80-es2015.cca01dfeeaf6fe470280.js",
    "81-es5.3528fe32ad249ad5aeb0.js",
    "81-es2015.a6e88f821d307bbdbfa9.js",
    "82-es5.35e55b06e39e2dcf959a.js",
    "82-es2015.f9172f572b8627e14a45.js",
    "83-es5.02a0e0da174017c098c9.js",
    "83-es2015.e52972fdffcf2d51d5e3.js",
    "84-es5.ceeb93064bc29c5e27ae.js",
    "84-es2015.772be72ed0a69d55e516.js",
    "85-es5.a974d69802f2e81e0f28.js",
    "85-es2015.3bcea634e6b5cbb0839c.js",
    "86-es5.f288a6d362f8bf4d9606.js",
    "86-es2015.1ffccf5e092ea8a5fec4.js",
    "87-es5.157afc6177d84b2cadd9.js",
    "87-es2015.477c2d0a9d092e06afb9.js",
    "88-es5.1ab76c633c50aebb6e23.js",
    "88-es2015.6bacd1627d823b2acc19.js",
    "89-es5.de26f4cd4259a90f8acf.js",
    "89-es2015.dbf2795c0fd9f44c7a65.js",
    "90-es5.03c2ddcaaf44dd39aad9.js",
    "90-es2015.078f45b8a27589544919.js",
    "91-es5.d043694f20e4586af7ea.js",
    "91-es2015.c7b26ed457699f215b16.js",
    "92-es5.9fb979f0fd46f11d0d14.js",
    "92-es2015.c5acfcb700cd406297fc.js",
    "93-es5.7a93a12107279113cedc.js",
    "93-es2015.786075b807351fc36309.js",
    "94-es5.469b7484185ff88bc1cd.js",
    "94-es2015.2427b2401b294356705d.js",
    "95-es5.95dab9135af458e2cfb0.js",
    "95-es2015.b7b8bc23890cbd21ddfe.js",
    "96-es5.617e80e82f92f040e7ba.js",
    "96-es2015.d1ce920a1bac8f142345.js",
    "97-es5.c10cd430ac58c902831c.js",
    "97-es2015.b43ca2d50146f21bea8e.js",
    "98-es2015.a6a3a760b921c3200939.js",
    "KaTeX_Fraktur-Bold.a31e7cba7b7221ebf1a2.ttf",
    "KaTeX_Math-Italic.291e76b8871b84560701.ttf",
    "KaTeX_Fraktur-Regular.b7d9c46bff5d51da6209.woff",
    "KaTeX_Main-Italic.99be0e10c38cd42466e6.woff",
    "polyfills-es2015.581cd70750ac94ce6388.js",
    "KaTeX_Math-BoldItalic.b13731ef4e2bfc3d8d85.woff",
    "KaTeX_Main-Regular.5c734d78610fa35282f3.woff2",
    "KaTeX_Fraktur-Regular.a48dad4f58c82e38a10d.ttf",
    "KaTeX_Script-Regular.755e2491f13b5269f0af.woff2",
    "KaTeX_SansSerif-Italic.4059868e460d2d2e6be1.ttf",
    "KaTeX_Main-Regular.b741441f6d71014d0453.woff",
    "KaTeX_Fraktur-Bold.c4c8cab7d5be97b2bb28.woff",
    "KaTeX_Math-Italic.4ad08b826b8065e1eab8.woff2",
    "KaTeX_Main-Bold.8e1e01c4b1207c0a383d.woff2",
    "KaTeX_SansSerif-Italic.fba01c9c6fb2866a0f95.woff2",
    "KaTeX_Caligraphic-Regular.d3b46c3a530116933081.woff",
    "main-es2015.b3aaff92fdf8cfd59a4c.js",
    "KaTeX_Size2-Regular.eb130dcc661de766c999.ttf",
    "styles.7bddd4d783147f0f0911.css",
    "KaTeX_Caligraphic-Bold.1e802ca9dedc4ed4e3c6.woff",
    "KaTeX_Caligraphic-Bold.4ec58befa687e9752c3c.woff2",
    "KaTeX_Main-Bold.9ceff51b3cb7ce6eb4e8.ttf",
    "common-es5.b902b69fe8e228ac5248.js",
    "main-es5.997e6adf06cd2f1ec58a.js",
    "KaTeX_Size1-Regular.048c39cba4dfb0460682.woff2",
    "KaTeX_Size1-Regular.08b5f00e7140f7a10e62.woff",
    "KaTeX_Size2-Regular.81d6b8d5ca77d63d5033.woff2",
    "KaTeX_Main-BoldItalic.e8b44b990516dab7937b.ttf",
    "KaTeX_Math-BoldItalic.9a2834a9ff8ab4111535.ttf",
    "KaTeX_AMS-Regular.e78e28b4834954df047e.woff2",
    "runtime-es5.ded9d0e5791271ba3b01.js",
    "KaTeX_Main-BoldItalic.284a17fe5baf72ff8217.woff2",
    "KaTeX_Fraktur-Regular.32a5339eb809f381a735.woff2",
    "KaTeX_Math-Italic.f0303906c2a67ac63bf1.woff",
    "KaTeX_SansSerif-Regular.d929cd671b19f0cfea55.woff2",
    "KaTeX_Math-BoldItalic.d747bd1e7a6a43864285.woff2",
    "KaTeX_Size2-Regular.af24b0e4b7e52656ca77.woff",
    "KaTeX_Main-Italic.e533d5a2506cf053cd67.woff2",
    "KaTeX_AMS-Regular.7f06b4e30317f784d61d.woff",
    "KaTeX_Size3-Regular.0d8926405d832a4b065e.woff",
    "KaTeX_Script-Regular.d12ea9efb375f9dc331f.ttf",
    "KaTeX_SansSerif-Bold.3fb419559955e3ce7561.woff",
    "KaTeX_Main-Bold.22086eb5d97009c3e99b.woff",
    "KaTeX_SansSerif-Bold.7dc027cba9f7b11ec92a.ttf",
    "KaTeX_Size1-Regular.7342d45b052c3a2abc21.ttf",
    "KaTeX_Caligraphic-Regular.d49f2d55ce4f40f982d8.ttf",
    "KaTeX_SansSerif-Regular.2555754a67062cac3a09.woff",
    "KaTeX_Main-BoldItalic.4c57dbc44bfff1fdf08a.woff",
    "KaTeX_Script-Regular.d524c9a5b62a17f98f4a.woff",
    "polyfills-es5.d1684a418c08dd85dc2f.js",
    "runtime-es2015.cd0988ab53f6978361ca.js",
    "KaTeX_Caligraphic-Bold.021dd4dc61ee5f5cdf31.ttf",
    "common-es2015.f7e1a6760d5a35051353.js",
    "KaTeX_Caligraphic-Regular.7edb53b6693d75b8a223.woff2",
    "KaTeX_AMS-Regular.aaf4eee9fba9907d61c3.ttf",
    "KaTeX_SansSerif-Italic.727a9b0d97d72d2fc022.woff",
    "KaTeX_SansSerif-Bold.6e0830bee40435e72165.woff2",
    "KaTeX_SansSerif-Regular.5c58d168c0b66d2c3223.ttf",
    "KaTeX_Fraktur-Bold.d5b59ec9764e10f4a823.woff2",
    "KaTeX_Main-Regular.5c94aef490324b0925db.ttf",
    "KaTeX_Main-Italic.29c86397e75cdcb3135a.ttf",
    "KaTeX_Size4-Regular.6a3255dfc1ba41c46e7e.woff2",
    "KaTeX_Size3-Regular.7e02a40c41e52dc3b2b6.ttf",
    "KaTeX_Size3-Regular.b311ca09df2c89a10fbb.woff2",
    "KaTeX_Size4-Regular.68895bb880a61a7fc019.woff",
    "KaTeX_Size4-Regular.ad7672524b64b730dfd1.ttf",
    "KaTeX_Typewriter-Regular.3fe216d2a5f736c560cd.woff",
    "KaTeX_Typewriter-Regular.6cc31ea5c223c88705a1.woff2",
    "KaTeX_Typewriter-Regular.257023560753aeb0b89b.ttf",
    "assets/icons/icon-128x128.png",
    "assets/icons/icon-144x144.png",
    "assets/icons/icon-152x152.png",
    "assets/icons/icon-192x192.png",
    "assets/icons/icon-256x256.png",
    "assets/icons/icon-512x512.png",
    "index.html",
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("examHelperF-v1")
            .then(cache => cache.addAll(staticAssets))
            .then(() => self.skipWaiting()),
    );
});

self.addEventListener("fetch", event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.url) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open("dynamic-cache");

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}

//Push API

self.addEventListener("push", event => {
    const notification = event.data.json();
    const title = "Notification-Titel!";
    const options = {
        body: "Erste Zeile der Benachrichtigung.\n Zweite Zeile der Benachrichtigung.",
        icon: "/assets/icons/icon-512x512.png",
    };
    self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll().then(windowClients => windowClients.length ?
            windowClients[0].focus() : clients.openWindow("/index.html")),
    );
});
