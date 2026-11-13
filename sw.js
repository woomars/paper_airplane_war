// 종이비행기 공중전 서비스 워커
// - 화면·코드: 네트워크 우선, 실패하면 캐시(한 번 연 뒤에는 혼자 연습을 오프라인으로도 실행)
// - 소리(./audio/): 설치할 때 미리 받아 두고 캐시 우선(배경음악 1MB를 매번 다시 받지 않게).
//   소리 파일을 바꾸면 CACHE 이름을 올려야 새 파일을 받는다.
const CACHE = 'paw-v2';
const AUDIO = ['bgm', 'click', 'engine_loop', 'explosion', 'flyby', 'gun', 'hit_confirm', 'hit_me', 'missile_launch', 'missile_loop', 'paper', 'splash'].map(n => `./audio/${n}.ogg`);

self.addEventListener('install', e => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then(c => c.addAll(['./', './index.html', './manifest.webmanifest', './manifest.en.webmanifest', './manifest.ja.webmanifest']).then(() => c.addAll(AUDIO).catch(() => undefined)))
      .then(() => self.skipWaiting()),
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

const isAudio = url => /\/audio\/[^/]+\.ogg$/.test(url.pathname);

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return; // 외부 요청은 건드리지 않음
  if (isAudio(url)) {
    // 캐시 우선. 없으면 받아서(전체 응답일 때만) 캐시에 넣는다. 부분 요청(Range)이면 따로 전체를 받아 둔다.
    e.respondWith(
      caches.match(url.href, { ignoreSearch: true }).then(hit => {
        if (hit) return hit;
        return fetch(req).then(res => {
          if (res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(url.href, copy));
          } else if (res.status === 206) {
            fetch(url.href).then(full => full.ok && caches.open(CACHE).then(c => c.put(url.href, full)));
          }
          return res;
        });
      }),
    );
    return;
  }
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))),
  );
});
