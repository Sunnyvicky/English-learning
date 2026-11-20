const CACHE='lifelong-english-v14';
const FILES=['./','./index.html','./manifest.webmanifest','./icons/app-icon.svg'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET' || new URL(request.url).origin!==self.location.origin) return;
  const url=new URL(request.url);
  const isAppPage=request.mode==='navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/');

  if(isAppPage){
    event.respondWith((async()=>{
      try{
        const response=await fetch(request,{cache:'no-store'});
        if(response && response.ok){
          const cache=await caches.open(CACHE);
          await cache.put('./index.html',response.clone());
          await cache.put('./',response.clone());
        }
        return response;
      }catch(error){
        return (await caches.match(request)) || (await caches.match('./index.html'));
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached) return cached;
    try{
      const response=await fetch(request);
      if(response && response.ok){
        const cache=await caches.open(CACHE);
        await cache.put(request,response.clone());
      }
      return response;
    }catch(error){
      return Response.error();
    }
  })());
});
