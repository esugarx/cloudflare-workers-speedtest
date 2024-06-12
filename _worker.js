addEventListener("fetch", event => {
    let url = new URL(event.request.url);
    if (url.pathname == "/" && url.search == "") {
        url.href = "https://speed.cloudflare.com/__down?bytes=200000000"
        let request = new Request(url, event.request);
        event.respondWith(fetch(request));
    }
})