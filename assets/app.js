(function(){var w=document.getElementById("jsRuntimeWarning");if(w)w.remove();})();
const EMBEDDED = [{"name": "Rudaw TV", "url": "https://hlspackager.akamaized.net/live/DB/RUDAW/HLS/RUDAW.m3u8", "category": "Nyheter", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Kurdistan 24", "url": "https://hlspackager.akamaized.net/live/DB/K24/HLS/K24.m3u8", "category": "Nyheter", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Kurdsat News", "url": "https://hlspackager.akamaized.net/live/DB/KURDSAT_NEWS/HLS/KURDSAT_NEWS.m3u8", "category": "Nyheter", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Channel8", "url": "https://live.channel8.com/Channel8-Kurdish/index.fmp4.m3u8", "category": "Nyheter", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "TRT Kurdi", "url": "https://tv-trtkurdi.medya.trt.com.tr/master.m3u8", "category": "Allmänt", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "Kurdsat", "url": "https://hlspackager.akamaized.net/live/DB/KURDSAT_HD/HLS/KURDSAT_HD.m3u8", "category": "Underhållning", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Kurdistan TV", "url": "https://5a3ed7a72ed4b.streamlock.net/live/SMIL:myStream.smil/playlist.m3u8", "category": "Allmänt", "grade": "B", "note": "Ej 24/7 enligt IPTV-org", "source": "Inbyggd baslista", "curated": true}, {"name": "Waar TV", "url": "https://hlspackager.akamaized.net/live/DB/WAAR_HD/HLS/WAAR_HD.m3u8", "category": "Allmänt", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Payam TV", "url": "https://hlspackager.akamaized.net/live/DB/PAYAM_TV/HLS/PAYAM_TV.m3u8", "category": "Nyheter", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "AVA Media", "url": "https://ava002.xyz/upload/images/1080.m3u8", "category": "Allmänt", "grade": "B", "note": "Direkt HLS men domänen bör verifieras", "source": "Inbyggd baslista", "curated": true}, {"name": "AVA Family TV", "url": "https://familyhls.avatv.live/hls/stream.m3u8", "category": "Familj", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "Zarok TV Kurmanji", "url": "https://zindikurmanci.zaroktv.com.tr/hls/stream.m3u8", "category": "Barn", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "Zarok TV Sorani", "url": "https://zindisorani.zaroktv.com.tr/hls/stream.m3u8", "category": "Barn", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "Ronahi TV", "url": "https://hlspackager.akamaized.net/live/DB/RONAHI_TV/HLS/RONAHI_TV.m3u8", "category": "Allmänt", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Rojava TV", "url": "https://hlspackager.akamaized.net/live/DB/ROJAVA_HD/HLS/ROJAVA_HD.m3u8", "category": "Allmänt", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Sterk TV", "url": "https://hlspackager.akamaized.net/live/DB/STERK_TV/HLS/STERK_TV.m3u8", "category": "Nyheter", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Speda TV", "url": "https://cdn.karwan.tv/speda-tv/index.m3u8", "category": "Allmänt", "grade": "B", "note": "Flera källor; tredjeparts-CDN", "source": "Inbyggd baslista", "curated": true}, {"name": "Kirkuk TV", "url": "https://live.kirkuklive.live/hls/stream/index.m3u8", "category": "Allmänt", "grade": "A", "note": "Förstapartslik domän; flera källor", "source": "Inbyggd baslista", "curated": true}, {"name": "KurdMax Sorani", "url": "https://6476e46b58f91.streamlock.net/liveTrans/KURDB3388/playlist.m3u8", "category": "Underhållning", "grade": "B", "note": "Flera källor", "source": "Inbyggd baslista", "curated": true}, {"name": "KurdMax Kurmanji", "url": "https://6476e46b58f91.streamlock.net/liveTrans/KURDS2211/playlist.m3u8", "category": "Underhållning", "grade": "B", "note": "Flera källor", "source": "Inbyggd baslista", "curated": true}, {"name": "KurdMax Show", "url": "https://6476e46b58f91.streamlock.net/liveTrans/SHOWS123/playlist.m3u8", "category": "Underhållning", "grade": "B", "note": "Flera källor", "source": "Inbyggd baslista", "curated": true}, {"name": "KurdMax Music", "url": "https://6476e46b58f91.streamlock.net/music/MUSIC2402/playlist.m3u8", "category": "Musik", "grade": "B", "note": "Flera källor", "source": "Inbyggd baslista", "curated": true}, {"name": "4Kurd", "url": "https://4kuhls.persiana.live/hls/stream.m3u8", "category": "Musik", "grade": "B", "note": "Direkt HLS via extern CDN", "source": "Inbyggd baslista", "curated": true}, {"name": "Afarin Baxcha", "url": "https://5dcabf026b188.streamlock.net/afarinTV/livestream/playlist.m3u8", "category": "Barn", "grade": "B", "note": "Direkt HLS via streamhost", "source": "Inbyggd baslista", "curated": true}, {"name": "Afarin TV", "url": "https://65f16f0fdfc51.streamlock.net/afarinTV/livestream/playlist.m3u8", "category": "Barn", "grade": "B", "note": "Ej 24/7 enligt IPTV-org", "source": "Inbyggd baslista", "curated": true}, {"name": "Al Iraqia Kurdish", "url": "https://imn-live.esite-lab.com/hls/iraqia-kurdish.m3u8", "category": "Allmänt", "grade": "A", "note": "Tydlig kanal-/distributionsström", "source": "Inbyggd baslista", "curated": true}, {"name": "Alternative Shoray TV", "url": "https://hlspackager.akamaized.net/live/DB/ALTERNATIVE_SHORAI_TV/HLS/ALTERNATIVE_SHORAI_TV-avc1_1500000=10001.m3u8", "category": "Allmänt", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Amozhgary TV", "url": "https://app-live.org/live/3268334b/index.m3u8", "category": "Religion", "grade": "B", "note": "Direkt HLS men extern host", "source": "Inbyggd baslista", "curated": true}, {"name": "Aryen TV", "url": "https://aryen.tv/live/tv/playlist.m3u8", "category": "Allmänt", "grade": "A", "note": "Förstapartsdomän; ej 24/7 enligt IPTV-org", "source": "Inbyggd baslista", "curated": true}, {"name": "Atrak TV", "url": "https://ncdn.telewebion.ir/atrak/live/playlist.m3u8", "category": "Allmänt", "grade": "B", "note": "HLS via etablerad distribution", "source": "Inbyggd baslista", "curated": true}, {"name": "Avar TV", "url": "https://avr.host247.net/live/AvarTv/playlist.m3u8", "category": "Allmänt", "grade": "B", "note": "Direkt HLS via streamhost", "source": "Inbyggd baslista", "curated": true}, {"name": "Cira TV", "url": "https://hlspackager.akamaized.net/live/DB/CIRA_TV/HLS/CIRA_TV.m3u8", "category": "Allmänt", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "EmanTv", "url": "https://avr.host247.net/live/emantv/playlist.m3u8", "category": "Familj", "grade": "B", "note": "Direkt HLS via streamhost", "source": "Inbyggd baslista", "curated": true}, {"name": "FarmodaTV", "url": "https://avr.host247.net/live/FarmodaTV/playlist.m3u8", "category": "Religion", "grade": "B", "note": "Direkt HLS via streamhost", "source": "Inbyggd baslista", "curated": true}, {"name": "Gali Kurdistan TV", "url": "https://live.host247.net/gk/gksat/playlist.m3u8", "category": "Allmänt", "grade": "B", "note": "Flera källor; streamhost", "source": "Inbyggd baslista", "curated": true}, {"name": "Ilke TV", "url": "https://stream.ilketv.com.tr/hls/ilkecanli.m3u8", "category": "Allmänt", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "iNEWS TV", "url": "https://live.i-news.tv/hls/stream.m3u8", "category": "Nyheter", "grade": "A", "note": "Förstapartsdomän; Alannjaf", "source": "Inbyggd baslista", "curated": true}, {"name": "Jin TV", "url": "https://live.jintv.org/medialive/jintv.m3u8", "category": "Kultur", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "Komala TV", "url": "https://komhls.wns.live/hls/stream.m3u8", "category": "Kultur", "grade": "B", "note": "Direkt HLS via extern host", "source": "Inbyggd baslista", "curated": true}, {"name": "Kurd Channel", "url": "https://kurdchhls.wns.live/hls/stream.m3u8", "category": "Allmänt", "grade": "B", "note": "Direkt HLS via extern host", "source": "Inbyggd baslista", "curated": true}, {"name": "Mixkurdy", "url": "https://avr.host247.net/live/Mix-kurdy/playlist.m3u8", "category": "Familj", "grade": "B", "note": "Direkt HLS via streamhost", "source": "Inbyggd baslista", "curated": true}, {"name": "Newline TV", "url": "https://cdn.karwan.tv/newline-tv/index.m3u8", "category": "Allmänt", "grade": "B", "note": "Kurdtvs markerar Live", "source": "Inbyggd baslista", "curated": true}, {"name": "NRT TV", "url": "https://media.streambrothers.com:1936/8226/8226/playlist.m3u8", "category": "Nyheter", "grade": "B", "note": "Ej 24/7 enligt IPTV-org", "source": "Inbyggd baslista", "curated": true}, {"name": "Nuce TV", "url": "https://hlspackager.akamaized.net/live/DB/NU_TV/HLS/NU_TV.m3u8", "category": "Nyheter", "grade": "A", "note": "HLS via Akamai", "source": "Inbyggd baslista", "curated": true}, {"name": "Rehber TV", "url": "https://cdn4.yayin.com.tr/rehbertv/tracks-v1a1/mono.m3u8", "category": "Allmänt", "grade": "B", "note": "HTTPS via streamingplattform", "source": "Inbyggd baslista", "curated": true}, {"name": "Sercem TV", "url": "https://canli.sercemtv.com.tr/hls/0/stream.m3u8", "category": "Allmänt", "grade": "A", "note": "Förstapartsdomän", "source": "Inbyggd baslista", "curated": true}, {"name": "West Azerbaijan TV", "url": "https://ncdn.telewebion.ir/azarbayjangharbi/live/playlist.m3u8", "category": "Allmänt", "grade": "B", "note": "HLS via etablerad distribution", "source": "Inbyggd baslista", "curated": true}, {"name": "Zagros TV", "url": "https://5a3ed7a72ed4b.streamlock.net/zagrostv/SMIL:myStream.smil/playlist.m3u8", "category": "Allmänt", "grade": "B", "note": "Flera källor; Kurdtvs markerar Live", "source": "Inbyggd baslista", "curated": true}, {"name": "Zoom News", "url": "https://live.zoomnews.info/live/Zoom_playlist.m3u8", "category": "Nyheter", "grade": "B", "note": "Kräver referrer enligt IPTV-org", "source": "Inbyggd baslista", "curated": true}];
const REMOTE_SOURCES = [{"name": "Daily Health Check · Kurdish", "url": "https://dearbulut.github.io/iptv/playlists/language/kur.m3u", "trust": 7}, {"name": "Kurdtvs.net · Working Kurdish", "url": "https://kurdtvs.net/iptv.php?format=m3u", "trust": 5}, {"name": "IPTV-org · Kurdish", "url": "https://iptv-org.github.io/iptv/languages/kur.m3u", "trust": 5}];

const state = {
  channels: new Map(),
  filtered: [],
  view: 'all',
  category: 'Alla',
  selected: 0,
  currentKey: null,
  hls: null,
  sourceStatus: {},
  loadingSources: false
};

const $ = s => document.querySelector(s);
const video = $('#video');
const list = $('#channelList');
const search = $('#search');
const modalBack = $('#modalBack');
const modal = $('#modal');

function keyName(name){
  return name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/\b(4k|uhd|fhd|full hd|hd|sd|1080p|720p|576p|480p|live)\b/g,' ')
    .replace(/\b(tv channel|channel|television)\b/g,' ')
    .replace(/^(ku|kr|kurdish)\s*[\|\-:]\s*/,'')
    .replace(/[^a-z0-9\u0600-\u06ff]+/g,' ')
    .trim()
    .replace(/\s+/g,' ');
}
function cleanName(name){
  return name.replace(/^(KU|KR|KURDISH)\s*[\|\-:]\s*/i,'')
    .replace(/\s*\((1080p|720p|576p|480p)\)/ig,'')
    .replace(/\s*\[(not 24\/7|may be offline)\]/ig,'')
    .replace(/\s+/g,' ').trim();
}
function initials(name){
  return cleanName(name).split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase().slice(0,3);
}
function urlRisk(url){
  try{
    const u = new URL(url);
    let score = 0;
    const host = u.hostname.toLowerCase();
    if(u.protocol === 'http:') score += 2;
    if(/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) score += 3;
    if(/ddns|trxdns|vipma|alwaysbelive|short\.gy/i.test(host)) score += 2;
    if(/\/live\/[^/]+\/[^/]+\//i.test(u.pathname)) score += 2;
    if(/token=/.test(u.search) && /ddns|^\d/.test(host)) score += 1;
    return score;
  }catch(e){ return 9; }
}
function streamScore(s){
  let score = (s.curated ? 100 : 0) + (s.trust||0)*10;
  if(s.url.startsWith('https://')) score += 8;
  score -= urlRisk(s.url)*7;
  if(/akamaized|cloudfront|channel8\.com|trt\.com|jintv\.org|zaroktv|aryen\.tv|i-news\.tv/i.test(s.url)) score += 7;
  return score;
}
function classifyChannel(c){
  const best = [...c.streams].sort((a,b)=>streamScore(b)-streamScore(a))[0];
  if(c.curated && best && urlRisk(best.url) <= 1) return 'A';
  if(best && urlRisk(best.url) <= 2) return 'B';
  return 'X';
}
function addChannel(raw){
  if(!raw.name || !raw.url || !/^https?:\/\//i.test(raw.url)) return;
  const name = cleanName(raw.name);
  const key = keyName(name);
  if(!key) return;
  let c = state.channels.get(key);
  if(!c){
    c = {key,name,category:raw.category||'Övrigt',logo:raw.logo||'',streams:[],sources:new Set(),curated:!!raw.curated};
    state.channels.set(key,c);
  }
  if(raw.logo && !c.logo) c.logo = raw.logo;
  if(raw.category && (c.category==='Övrigt'||c.category==='Undefined')) c.category=raw.category;
  c.curated = c.curated || !!raw.curated;
  if(raw.source) c.sources.add(raw.source);
  if(!c.streams.some(x=>x.url===raw.url)){
    c.streams.push({url:raw.url,source:raw.source||'Okänd',trust:raw.trust||0,curated:!!raw.curated,note:raw.note||''});
  }
}
function parseAttrs(s){
  const out={};
  s.replace(/([\w-]+)="([^"]*)"/g,(_,k,v)=>{out[k]=v;return _});
  return out;
}
function parseM3U(text, source){
  const lines = text.replace(/\r/g,'').split('\n');
  const out=[];
  let info=null, opts={};
  for(const line0 of lines){
    const line=line0.trim();
    if(!line) continue;
    if(line.startsWith('#EXTINF:')){
      const comma=line.lastIndexOf(',');
      const attrs=parseAttrs(comma>=0?line.slice(0,comma):line);
      info={
        name:comma>=0?line.slice(comma+1).trim():'Okänd kanal',
        logo:attrs['tvg-logo']||'',
        category:(attrs['group-title']||'Övrigt').split(';')[0]
      };
      opts={};
    } else if(line.startsWith('#EXTVLCOPT:')){
      const x=line.slice(11).split('=');
      opts[x.shift()]=x.join('=');
    } else if(!line.startsWith('#') && info){
      out.push({...info,url:line,source:source.name,trust:source.trust||1,curated:false,opts});
      info=null; opts={};
    }
  }
  return out;
}
function seedEmbedded(){
  EMBEDDED.forEach(x=>addChannel({...x,trust:6}));
}
async function loadRemoteSources(){
  if(state.loadingSources) return;
  state.loadingSources=true;
  $('#syncText').textContent='Hämtar aktuella M3U-listor…';
  for(const src of REMOTE_SOURCES){
    state.sourceStatus[src.name]={state:'loading',count:0};
    try{
      const r=await fetch(src.url,{cache:'no-store'});
      if(!r.ok) throw new Error('HTTP '+r.status);
      const text=await r.text();
      const items=parseM3U(text,src);
      items.forEach(addChannel);
      state.sourceStatus[src.name]={state:'ok',count:items.length};
    }catch(e){
      state.sourceStatus[src.name]={state:'fail',count:0,error:e.message};
    }
    renderAll();
  }
  state.loadingSources=false;
  const ok=Object.values(state.sourceStatus).filter(x=>x.state==='ok').length;
  $('#syncText').textContent=`${state.channels.size} unika kanalposter · ${ok}/${REMOTE_SOURCES.length} externa källor laddade`;
  toast(`Klart: ${state.channels.size} unika kanalposter`);
}
function favorites(){try{return JSON.parse(localStorage.getItem('ktv-favs')||'[]')}catch(e){return[]}}
function saveFavs(v){localStorage.setItem('ktv-favs',JSON.stringify(v))}
function isFav(k){return favorites().includes(k)}

function hiddenChannels(){try{return JSON.parse(localStorage.getItem('ktv-hidden')||'[]')}catch(e){return[]}}
function saveHidden(v){localStorage.setItem('ktv-hidden',JSON.stringify(v))}
function isHidden(k){return hiddenChannels().includes(k)}
function hideChannel(k){
  let h=hiddenChannels();
  if(!h.includes(k)) h.push(k);
  saveHidden(h);
  if(state.currentKey===k){ try{video.pause()}catch(e){} state.currentKey=null; $('#nowName').textContent='Ingen kanal vald'; $('#nowMeta').textContent='—'; }
  toast('Kanalen doldes. Du kan återställa den under Dolda kanaler.');
  renderAll();
}
function restoreChannel(k){
  saveHidden(hiddenChannels().filter(x=>x!==k));
  toast('Kanalen återställdes.');
  renderAll();
}
function resetHidden(){
  if(!hiddenChannels().length){toast('Du har inga dolda kanaler.');return}
  if(confirm('Återställa alla dolda kanaler?')){saveHidden([]);toast('Alla dolda kanaler är tillbaka.');renderAll()}
}

function workingChannels(){try{return JSON.parse(localStorage.getItem('ktv-working')||'[]')}catch(e){return[]}}
function failedChannels(){try{return JSON.parse(localStorage.getItem('ktv-failed')||'[]')}catch(e){return[]}}
function preferredStreams(){try{return JSON.parse(localStorage.getItem('ktv-preferred-streams')||'{}')}catch(e){return{}}}
function markWorking(k,url){
  let w=workingChannels(); if(!w.includes(k)) w.push(k); localStorage.setItem('ktv-working',JSON.stringify(w));
  localStorage.setItem('ktv-failed',JSON.stringify(failedChannels().filter(x=>x!==k)));
  const p=preferredStreams(); p[k]=url; localStorage.setItem('ktv-preferred-streams',JSON.stringify(p));
  renderAll();
}
function markFailed(k){
  if(workingChannels().includes(k)) return;
  let f=failedChannels(); if(!f.includes(k)) f.push(k); localStorage.setItem('ktv-failed',JSON.stringify(f));
  renderAll();
}

function toggleFav(k){
  let f=favorites(); const i=f.indexOf(k); if(i>=0)f.splice(i,1);else f.push(k);
  saveFavs(f); renderAll();
}
function recent(){try{return JSON.parse(localStorage.getItem('ktv-recent')||'[]')}catch(e){return[]}}
function pushRecent(k){
  let r=recent().filter(x=>x!==k);r.unshift(k);r=r.slice(0,20);
  localStorage.setItem('ktv-recent',JSON.stringify(r));
}
function bestStream(c){
  const pref=preferredStreams()[c.key];
  return [...c.streams].sort((a,b)=>
    ((b.url===pref)?10000:0)+streamScore(b)-(((a.url===pref)?10000:0)+streamScore(a))
  );
}
function categoriesFor(arr){
  const m=new Map();
  arr.forEach(c=>m.set(c.category,(m.get(c.category)||0)+1));
  return [...m.entries()].sort((a,b)=>b[1]-a[1]);
}
function currentBase(){
  let arr=[...state.channels.values()];
  if(state.view==='hidden') arr=arr.filter(c=>isHidden(c.key));
  else arr=arr.filter(c=>!isHidden(c.key));
  if(state.view==='reliable') arr=arr.filter(c=>['A','B'].includes(classifyChannel(c)));
  if(state.view==='working') {const w=workingChannels(); arr=arr.filter(c=>w.includes(c.key));}
  if(state.view==='experimental') arr=arr.filter(c=>classifyChannel(c)==='X');
  if(state.view==='favorites') {const f=favorites(); arr=arr.filter(c=>f.includes(c.key));}
  if(state.view==='recent') {const r=recent(); arr=arr.filter(c=>r.includes(c.key)).sort((a,b)=>r.indexOf(a.key)-r.indexOf(b.key));}
  const q=search.value.trim().toLowerCase();
  if(q) arr=arr.filter(c=>(c.name+' '+c.category+' '+[...c.sources].join(' ')).toLowerCase().includes(q));
  if(state.category!=='Alla')arr=arr.filter(c=>c.category===state.category);
  return arr.sort((a,b)=>{
    const ca=classifyChannel(a),cb=classifyChannel(b);
    const order={A:0,B:1,X:2};
    return order[ca]-order[cb] || b.sources.size-a.sources.size || a.name.localeCompare(b.name);
  });
}
function renderCounts(){
  const all=[...state.channels.values()];
  const visible=all.filter(c=>!isHidden(c.key));
  $('#allCount').textContent=visible.length;
  $('#reliableCount').textContent=visible.filter(c=>['A','B'].includes(classifyChannel(c))).length;
  $('#workingCount').textContent=visible.filter(c=>workingChannels().includes(c.key)).length;
  $('#expCount').textContent=visible.filter(c=>classifyChannel(c)==='X').length;
  $('#hiddenCount').textContent=hiddenChannels().length;
  $('#favCount').textContent=favorites().filter(k=>!isHidden(k)).length;
  $('#recentCount').textContent=recent().filter(k=>!isHidden(k)).length;
}
function renderChips(){
  let base=[...state.channels.values()];
  if(state.view==='hidden') base=base.filter(c=>isHidden(c.key));
  else base=base.filter(c=>!isHidden(c.key));
  if(state.view==='reliable')base=base.filter(c=>['A','B'].includes(classifyChannel(c)));
  if(state.view==='working')base=base.filter(c=>workingChannels().includes(c.key));
  if(state.view==='experimental')base=base.filter(c=>classifyChannel(c)==='X');
  const cats=categoriesFor(base).slice(0,12);
  const el=$('#chips');el.innerHTML='';
  [['Alla',base.length],...cats].forEach(([cat,n])=>{
    const b=document.createElement('button');b.className='chip'+(state.category===cat?' active':'');
    b.textContent=`${cat} · ${n}`;b.onclick=()=>{state.category=cat;renderAll()};el.appendChild(b);
  });
}
function renderList(){
  state.filtered=currentBase();
  list.innerHTML='';
  const titles={all:'Alla kanaler',reliable:'Rekommenderade',working:'Fungerar hos mig',favorites:'Favoriter',recent:'Senast sedda',experimental:'Experimentella',hidden:'Dolda kanaler'};
  $('#listTitle').textContent=titles[state.view]||'Kanaler';
  $('#listMeta').textContent=`${state.filtered.length} kanaler`;
  if(!state.filtered.length){list.innerHTML='<div class="empty">Inga kanaler i den här vyn.</div>';return}
  state.filtered.forEach((c,i)=>{
    const grade=classifyChannel(c);
    const row=document.createElement('div');row.className='row'+(c.key===state.currentKey?' playing':'');
    const logo=c.logo?`<img src="${escapeHtml(c.logo)}" onerror="this.remove()">`:escapeHtml(initials(c.name));
    const tested=workingChannels().includes(c.key)?'<span class="tag a">✓ FUNKAR</span>':(failedChannels().includes(c.key)?'<span class="tag" style="color:#fca5a5">SENAST FEL</span>':'');
    const manageBtn=state.view==='hidden'
      ? '<button class="restoreBtn" title="Återställ kanal">↩</button>'
      : '<button class="hideBtn" title="Dölj kanal">✕</button>';
    row.innerHTML=`<div class="num">${String(i+1).padStart(2,'0')}</div>
      <div class="thumb">${logo}</div>
      <div class="meta"><div class="name">${escapeHtml(c.name)}</div>
        <div class="sub"><span>${escapeHtml(c.category)}</span><span class="tag ${grade.toLowerCase()}">${grade==='X'?'EXP':grade}</span>${tested}<span>${c.sources.size} källa${c.sources.size===1?'':'or'}</span><span>${c.streams.length} ström${c.streams.length===1?'':'mar'}</span></div>
      </div>
      <button class="star ${isFav(c.key)?'on':''}" title="Favorit">★</button>${manageBtn}`;
    row.onclick=e=>{
      if(e.target.classList.contains('star'))toggleFav(c.key);
      else if(e.target.classList.contains('hideBtn'))hideChannel(c.key);
      else if(e.target.classList.contains('restoreBtn'))restoreChannel(c.key);
      else playChannel(c.key);
    };
    list.appendChild(row);
  })
}
function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]))}
function renderAll(){renderCounts();renderChips();renderList()}

function setMobileViewport(){
  document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}
setMobileViewport();
window.addEventListener('resize', setMobileViewport);
window.addEventListener('orientationchange', ()=>setTimeout(setMobileViewport,150));

function isMobileLayout(){
  return window.matchMedia('(max-width: 760px)').matches;
}

function normalizeVideoBox(){
  video.style.position='absolute';
  video.style.left='0';
  video.style.top='0';
  video.style.width='100%';
  video.style.height='100%';
  video.style.objectFit='contain';
  video.style.objectPosition='center center';
  video.style.display='block';
  video.style.visibility='visible';
  video.style.opacity='1';
  try{
    const wrap=video.parentElement;
    if(wrap){
      wrap.style.position='absolute';
      wrap.style.inset='0';
      wrap.style.overflow='hidden';
      wrap.style.background='#000';
    }
  }catch(e){}
}

async function playChannel(key,streamIndex=0){
  const c=state.channels.get(key); if(!c)return;
  state.currentKey=key; pushRecent(key); renderAll();
  const streams=bestStream(c);
  const s=streams[streamIndex];
  if(!s){playerMessage('Ingen fungerande strömadress hittades.');return}
  $('#nowName').textContent=c.name;
  $('#nowMeta').textContent=`${c.category} · ${classifyChannel(c)==='X'?'Experimentell':'Rekommenderad'} · ${s.source}`;
  const nl=$('#nowLogo'); nl.innerHTML=c.logo?`<img src="${escapeHtml(c.logo)}" onerror="this.parentNode.textContent='${escapeHtml(initials(c.name))}'">`:escapeHtml(initials(c.name));
  $('#centerState').classList.remove('hidden');
  $('#centerState').innerHTML=`<div class="box"><h3>Laddar ${escapeHtml(c.name)}…</h3><p>Ström ${streamIndex+1} av ${streams.length}</p></div>`;
  if(state.hls){try{state.hls.destroy()}catch(e){} state.hls=null}
  video.pause(); video.removeAttribute('src'); video.load(); normalizeVideoBox(); video.onplaying=()=>{markWorking(key,url);$('#centerState').classList.add('hidden')};
  const url=s.url;
  const fail=()=>{
    if(streamIndex+1<streams.length){
      toast(`Provar reservström för ${c.name}…`);
      setTimeout(()=>playChannel(key,streamIndex+1),450);
    }else{
      markFailed(key);
      playerMessage(`${c.name} kunde inte startas i webbläsaren. Strömmen kan vara nere eller blockera webbläsaruppspelning.`);
    }
  };
  if(video.canPlayType('application/vnd.apple.mpegurl')){
    video.src=url; video.onloadedmetadata=()=>{normalizeVideoBox();video.play().catch(()=>{});$('#centerState').classList.add('hidden')};video.onplaying=()=>{normalizeVideoBox();markWorking(key,url);$('#centerState').classList.add('hidden')};video.onerror=fail;
  }else if(window.Hls && Hls.isSupported()){
    const hls=new Hls({enableWorker:true,lowLatencyMode:true,backBufferLength:30,maxBufferLength:18});
    state.hls=hls; hls.loadSource(url);hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,()=>{normalizeVideoBox();video.play().catch(()=>{});$('#centerState').classList.add('hidden')});
    hls.on(Hls.Events.ERROR,(event,data)=>{
      if(!data.fatal)return;
      try{hls.destroy()}catch(e){}
      fail();
    });
  }else{
    playerMessage('Den här webbläsaren saknar HLS-stöd. Prova aktuell Chrome eller Edge.');
  }
}
function playerMessage(msg){
  $('#centerState').classList.remove('hidden');
  $('#centerState').innerHTML=`<div class="box"><h3>Kunde inte spela</h3><p>${escapeHtml(msg)}</p></div>`;
}
function zap(delta){
  const arr=currentBase(); if(!arr.length)return;
  let i=arr.findIndex(c=>c.key===state.currentKey);if(i<0)i=0;else i=(i+delta+arr.length)%arr.length;
  playChannel(arr[i].key);
}
function toast(msg){
  const t=$('#toast');t.textContent=msg;t.classList.remove('hidden');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.add('hidden'),2600)
}
function showModal(html){modal.innerHTML=html;modalBack.classList.remove('hidden')}
function closeModal(){modalBack.classList.add('hidden')}
function showCast(){
  // The picker must be called inside the original tap/click event on Safari.
  if(typeof video.webkitShowPlaybackTargetPicker === 'function' && !video.paused){
    try { video.webkitShowPlaybackTargetPicker(); return; } catch(e) {}
  }
  if(isMobileLayout()){
    showModal(`<h2>Visa på Samsung-TV</h2><p><b>AirPlay:</b> Tryck på AirPlay-symbolen i videons inbyggda kontroller, om den visas, och välj TV:n.</p><p><b>Spegla hela mobilen:</b> Öppna iPhones Kontrollcenter → Skärmspegling → välj Samsung-TV:n. Båda måste vara på samma wifi och TV:n behöver stöd för AirPlay.</p><p>En webbsida kan inte öppna iPhones skärmspeglingsmeny automatiskt. Om du vill testa AirPlay, starta en kanal först.</p><div class="modalActions"><button class="btn primary" onclick="closeModal()">Stäng</button></div>`);
    return;
  }
  showModal(`<h2>Casta till Samsung-TV</h2>
  <p>Det stabilaste är att spegla hela datorbilden till TV:n. Då fortsätter den här appen att spela på datorn och TV:n visar samma bild och ljud.</p>
  <ol>
    <li>Se till att dator och Samsung-TV är på samma wifi.</li>
    <li>Tryck <span class="kbd">Win</span> + <span class="kbd">K</span> och välj TV:n. På vissa Windows-versioner fungerar även <span class="kbd">Win</span> + <span class="kbd">P</span> → trådlös bildskärm.</li>
    <li>Klicka sedan på <b>TV-läge</b> här i appen.</li>
  </ol>
  <p>Om trådlös spegling hackar är HDMI-kabel den mest stabila lösningen.</p>
  <div class="modalActions"><button class="btn primary" onclick="closeModal()">Klart</button></div>`);
}

function layoutDebug(){
  const pc=document.querySelector('.playerCard');
  const rl=document.querySelector('.list');
  const pr=pc?pc.getBoundingClientRect():null;
  return pr ? `Spelaryta ${Math.round(pr.width)}×${Math.round(pr.height)} px · Kanallista ${rl?Math.round(rl.clientHeight):0}px / ${rl?Math.round(rl.scrollHeight):0}px` : '';
}

function showSources(){
  const rows=REMOTE_SOURCES.map(s=>{
    const st=state.sourceStatus[s.name]||{state:'loading',count:0};
    const txt=st.state==='ok'?`${st.count} poster`:st.state==='fail'?'Kunde inte hämtas':'Väntar';
    return `<div class="sourceLine"><span>${escapeHtml(s.name)}</span><b class="${st.state==='ok'?'ok':st.state==='fail'?'fail':'load'}">${txt}</b></div>`;
  }).join('');
  showModal(`<h2>Källor</h2><p><b>${layoutDebug()}</b></p><p>Appen har en inbyggd reservlista och hämtar i första hand en dagligen hälsokontrollerad kurdisk lista. Därefter kompletterar den med andra kurdiska källor. Dubbletter slås ihop och flera adresser sparas som reservströmmar.</p>
  <div class="sourceGrid">${rows}</div>
  <p style="margin-top:16px">”Experimentell” betyder att länken ser mindre robust ut, till exempel HTTP, rå IP-adress, DDNS eller credential-liknande IPTV-sökväg. Det är en teknisk markering, inte en rättighetsbedömning.</p>
  <div class="modalActions"><button class="btn" onclick="loadRemoteSources();closeModal()">Uppdatera igen</button><button class="btn primary" onclick="closeModal()">Stäng</button></div>`)
}
function playerFullscreen(){
  if(typeof video.webkitEnterFullscreen === 'function'){
    try{video.webkitEnterFullscreen();return;}catch(e){}
  }
  const box=document.querySelector('.playerCard');
  if(document.fullscreenElement){document.exitFullscreen().catch(()=>{});return;}
  if(box && typeof box.requestFullscreen === 'function'){
    box.requestFullscreen().catch(()=>{toggleTV()});return;
  }
  toggleTV();
}
function toggleTV(){
  document.body.classList.toggle('tvMode');
  if(document.body.classList.contains('tvMode')) document.documentElement.requestFullscreen?.().catch(()=>{});
  else if(document.fullscreenElement) document.exitFullscreen?.();
}
function importM3U(text,name='Egen M3U'){
  const src={name,trust:1};const items=parseM3U(text,src);items.forEach(addChannel);renderAll();toast(`${items.length} poster importerades från ${name}`);
}
function exportMyList(){
  const arr=[...state.channels.values()].filter(c=>!isHidden(c.key));
  const lines=['#EXTM3U'];
  arr.forEach(c=>{
    const s=bestStream(c)[0]; if(!s)return;
    lines.push(`#EXTINF:-1 group-title="${String(c.category||'Kurdish').replace(/"/g,'')}",${c.name}`);
    lines.push(s.url);
  });
  const blob=new Blob([lines.join('\n')+'\n'],{type:'audio/x-mpegurl'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Min_KurdTV_lista.m3u';a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  toast(`Exporterade ${arr.length} synliga kanaler`);
}
document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
  state.view=b.dataset.view;state.category='Alla';renderAll();setMenu(false);
});
search.oninput=renderAll;

list.addEventListener('wheel', e=>{
  if(!isMobileLayout() && list.scrollHeight > list.clientHeight){
    list.scrollTop += e.deltaY;
    e.preventDefault();
  }
},{passive:false});

$('#prevBtn').onclick=()=>zap(-1);$('#nextBtn').onclick=()=>zap(1);
const menuBtn=$('#mobileMenuBtn');
const scrim=$('#menuScrim');
function setMenu(open){
 document.body.classList.toggle('menuOpen',!!open);
 menuBtn?.setAttribute('aria-expanded',String(!!open));
 if(menuBtn)menuBtn.innerHTML=open?'✕ <span>Stäng</span>':'☰ <span>Meny</span>';
 if(scrim)scrim.hidden=!open;
}
menuBtn?.addEventListener('click',()=>setMenu(!document.body.classList.contains('menuOpen')));
scrim?.addEventListener('click',()=>setMenu(false));
$('#playerCastBtn').addEventListener('click',showCast);
$('#playerFullBtn').addEventListener('click',playerFullscreen);
$('#reloadBtn').onclick=loadRemoteSources;$('#castBtn').onclick=showCast;$('#tvBtn').onclick=toggleTV;$('#sourcesBtn').onclick=showSources;
$('#addM3U').onclick=()=>$('#fileInput').click();$('#exportBtn').onclick=exportMyList;$('#resetHiddenBtn').onclick=resetHidden;
$('#fileInput').onchange=async e=>{const f=e.target.files[0];if(f)importM3U(await f.text(),f.name);e.target.value=''};
modalBack.onclick=e=>{if(e.target===modalBack)closeModal()};
window.closeModal=closeModal;window.loadRemoteSources=loadRemoteSources;
window.addEventListener('resize',normalizeVideoBox);
document.addEventListener('fullscreenchange',()=>setTimeout(normalizeVideoBox,60));

window.addEventListener('keydown',e=>{
 if(e.key==='ArrowDown'){e.preventDefault();zap(1)}
 else if(e.key==='ArrowUp'){e.preventDefault();zap(-1)}
 else if(e.key.toLowerCase()==='f'&&state.currentKey){toggleFav(state.currentKey);toast(isFav(state.currentKey)?'Tillagd i favoriter':'Borttagen från favoriter')}
 else if(e.key.toLowerCase()==='t'){toggleTV()}
 else if(e.key==='Escape'&&document.body.classList.contains('tvMode')){document.body.classList.remove('tvMode')}
 else if(e.key==='Enter' && state.filtered[state.selected]){playChannel(state.filtered[state.selected].key)}
});


function updateMobileLabels(){
  const castBtn=document.getElementById('castBtn');
  const tvBtn=document.getElementById('tvBtn');
  if(isMobileLayout()){
    if(castBtn) castBtn.textContent='▣ Casta';
    if(tvBtn) tvBtn.textContent='⛶ TV';
  }else{
    if(castBtn) castBtn.textContent='▣ Casta till TV';
    if(tvBtn) tvBtn.textContent='⛶ TV-läge';
  }
}
updateMobileLabels();
window.addEventListener('resize',updateMobileLabels);

seedEmbedded();
renderAll();
$('#syncText').textContent=`${state.channels.size} inbyggda kanaler · hämtar dagens kontrollerade listor…`;
loadRemoteSources();