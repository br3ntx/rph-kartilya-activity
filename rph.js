    /* =========================================================
   CONTENT — edit here.
   4 Pics 1 Word: each "pics" entry can be an emoji OR an image
   path/URL (e.g. "img/newspaper.jpg") to use real photos.
   ========================================================= */
const GOOD='Becoming a Good Person', OTHERS='Treating Others with Respect and Equality';
const RULES={
 1:'Life without a noble cause is like a tree without shade or a harmful weed.',
 2:'Good deeds lose their value when done for personal gain, not for the genuine desire to do good.',
 3:'True kindness lies in acts of compassion, love for others, and being truthful.',
 4:'Use reason as the standard for every action, deed, and word.',
 5:'Regardless of skin color, all humans are equal. Superiority can exist in knowledge, wealth, and beauty but not in humanity.',
 6:'Noble individuals prioritize honor over self-interest, while ignoble ones prioritize self-interest over honor.',
 7:'The word of an honorable individual is trustworthy.',
 8:'Don’t squander time; lost wealth can be regained, but lost time is gone forever.',
 9:'Stand up for the oppressed and fight against oppressors.',
 10:'Intelligence is shown by being careful with words and keeping secrets.',
 11:'In life’s journey, the man leads, and the wife and children follow. If the leader strays, so do those who follow.',
 12:'Treat women not as toys but as partners in life’s hardships. Respect their weaknesses and remember the mother who gave birth and nurtured during infancy.',
 13:'Treat others’ family members with respect. A man’s value isn’t determined by his status or appearance, but by his good behavior, honesty, honor, fairness to others, and love for his homeland.',
 14:'When these lessons reach everyone, and freedom brightens these islands, uniting people and bringing lasting joy, all the sacrifices made will be worth it.'
};
const CAT={1:GOOD,2:GOOD,3:GOOD,4:GOOD,6:GOOD,7:GOOD,8:GOOD,10:GOOD,5:OTHERS,9:OTHERS,11:OTHERS,12:OTHERS,13:OTHERS,14:OTHERS};
const SHORT={1:'Life without a noble cause is like a tree without shade.',2:'Good deeds lose value when done for personal gain.',3:'True kindness is compassion, love for others, and truthfulness.',4:'Use reason as the standard for every action, deed, and word.',5:'Regardless of skin color, all humans are equal.',6:'Prioritize honor over self-interest.',7:'The word of an honorable person is trustworthy.',8:'Don’t squander time — lost time is gone forever.',9:'Stand up for the oppressed; fight against oppressors.',10:'Be careful with words and keep secrets.',11:'If the leader strays, so do those who follow.',12:'Treat women as partners, not toys; remember your mother.',13:'A person’s value is in their conduct, not status or looks.',14:'When these lessons reach everyone, the sacrifices will be worth it.'};

const PICS=[
 {a:'KATIPUNAN',hint:'The secret society that fought for independence',pics:[
   'img/katipunan1.jpg',
   'img/katipunan2.jpg',
   'img/katipunan3.jpg',
   'img/katipunan4.jpg'
   ],
  fact:'The <b>Kataastaasan Kagalang-galang na Katipunan ng mga Anak ng Bayan</b> — the <b>Katipunan</b> or <b>KKK</b> — was founded in <b>1892</b> and fought for Philippine independence from <b>Spain</b>. It wasn’t only about war: it stood for <b>equality, patriotism, and moral integrity</b>.'},
 {a:'BRAIN',hint:'Jacinto’s famous nickname',pics:[
   'img/brain1.jpg',
   'img/brain2.jpg',
   'img/brain3.jpg',
   'img/brain4.jpg'
 ],
  fact:'<b>Emilio Jacinto</b>, born <b>December 15, 1875</b>, became one of the key leaders of the Katipunan and earned the nickname <b>“Brain of the Katipunan”</b> — also called the “Brain of the Revolution.”'},
 {a:'KARTILYA',hint:'A primer — and the guidebook Jacinto wrote',pics:[
    'img/kartilya1.jpg',
    'img/kartilya2.jpg',
    'img/kartilya3.jpg',
    'img/kartilya4.jpg'
 ],
  fact:'Jacinto wrote the original <b>Kartilya ng Katipunan</b>. Like a guidebook for members, it served as the organization’s <b>moral and ethical guide</b>.'},
 {a:'TREASURER',hint:'One of Jacinto’s jobs in the Katipunan',pics:[
     'img/treasurer1.jpg',
     'img/treasurer2.jpg',
     'img/treasurer3.jpg',
     'img/treasurer4.jpg'
 ],
  fact:'Jacinto didn’t stop at writing — he was also the Katipunan’s <b>spokesperson</b> and <b>treasurer</b>.'},
 {a:'KALAYAAN',hint:'“Freedom” — and the Katipunan’s newspaper',pics:[
     'img/kalayaan1.jpg',
     'img/kalayaan2.jpg',
     'img/kalayaan3.jpg',
     'img/kalayaan4.jpg'
 ],
  fact:'Jacinto contributed to the Katipunan’s newspaper, <b><i>Kalayaan</i></b> (“Freedom”), under the pen name <b>Dimas-Ilaw</b>.'}
];

const WORDLE=[
 {a:'SHADE',rule:1,q:'What’s one noble cause you’d give your time to as a student — and who gets “shade” from it?'},
 {a:'REASON',rule:4,q:'When has a decision made out of anger or hype (instead of reason) backfired on someone you know?'},
 {a:'EQUAL',rule:5,q:'People can differ in knowledge, wealth, and beauty — but not in humanity. Where do we still see people treated as “less” today?'},
 {a:'HONOR',rule:6,q:'Would you take a higher grade if it meant cutting corners? What does choosing honor look like in school?'},
 {a:'TIME',rule:8,q:'Money can be earned back, time can’t. What’s one way students squander time — and why would Jacinto treat it so seriously?'}
];

const CONNECT=[
 {title:'Jacinto, the Katipunan & the Kartilya',groups:[
  {name:'The founding of the Katipunan',items:['Bonifacio','Diwa','Plata','1892'],why:'Andr\u00e9s Bonifacio founded it in 1892 with Ladislao Diwa and Teodoro Plata.'},
  {name:'Jacinto\u2019s writing',items:['Kartilya','Kalayaan','Dimas-Ilaw','Malolos Constitution'],why:'His guidebook, his newspaper, his pen name, and the first constitution the Kartilya influenced.'},
  {name:'Doesn\u2019t decide a person\u2019s worth',items:['Skin color','Wealth','Status','Appearance'],why:'Rules 5 & 13: all humans are equal; value isn\u2019t status or appearance.'},
  {name:'What DOES decide a person\u2019s worth',items:['Honesty','Honor','Fairness','Love for homeland'],why:'Rule 13: good behavior, honesty, honor, fairness, love for homeland.'}]}
];

const SCEN=[
 {t:'Your org holds a feeding program. One member shows up only for the photo, posts it with #blessed, and leaves before the actual work starts.',o:[2,7,9,13],a:2,why:'The good deed was done for clout, not out of a genuine desire to do good — so it loses its value.',q:'Is a good deed still “good” if it’s mainly done for likes?'},
 {t:'A classmate trusts you with something personal. That night, you post it in the block group chat “as a joke.”',o:[4,7,10,13],a:10,why:'Jacinto says intelligence shows in being careful with words and keeping secrets.',q:'What does “keeping secrets” mean in the age of screenshots?'},
 {t:'Your groupmate says, “I’ll finish my part by Friday, promise!” Friday comes — they’re offline and ghost the group chat.',o:[1,7,8,11],a:7,why:'An honorable person’s word can be trusted. A broken promise breaks that trust.',q:'How do you rebuild trust after breaking your word?'},
 {t:'A transferee from the province gets teased every day because of their accent. The rest of the class either laughs along or stays quiet.',o:[2,6,8,9],a:9,why:'The Kartilya asks us to stand up for the oppressed and against those who oppress them — silence lets it continue.',q:'What’s a realistic way to “stand up” for someone in class?'},
 {t:'The class president copies answers during a quiz. Soon, half the block decides it’s fine to cheat too.',o:[3,8,11,14],a:11,why:'When the one leading strays, those who follow stray too. A leader’s example spreads.',q:'Rule 11 was written for families in the 1890s. How would you rewrite it for student leaders today?'},
 {t:'When forming groups, one student only invites the rich, popular, good-looking classmates.',o:[3,8,10,13],a:13,why:'A person’s value isn’t determined by status or appearance, but by behavior, honesty, honor, and fairness.',q:'What qualities should actually matter when choosing groupmates?'},
 {t:'During planning, a groupmate says, “She’s a girl, so she’ll just handle the decorations.”',o:[2,4,9,12],a:12,why:'Women are to be treated as partners in life’s hardships — equals, not accessories.',q:'Why was this idea progressive for a revolutionary group in 1892?'},
 {t:'You could submit the whole report under your name for a higher grade, even though your groupmate wrote half of it.',o:[1,4,6,12],a:6,why:'Noble people put honor above self-interest. Taking credit puts self-interest first.',q:'Is a grade worth more than your honor? Why do we sometimes act like it is?'},
 {t:'You comfort a friend who failed an exam… then laugh about it with others behind their back.',o:[3,8,11,14],a:3,why:'True kindness means compassion, love for others, and being truthful — not kindness only to someone’s face.',q:'What’s the difference between being nice and being kind?'},
 {t:'The deadline is tomorrow. You’ve known about it for three weeks, but spent all that time scrolling and gaming.',o:[1,7,8,13],a:8,why:'Lost wealth can be regained, but lost time is gone forever.',q:'What’s one habit that “steals” your time the most?'}
];

const TEAM_COLORS=['#D62839','#1F7AE0','#E07A1F','#3E9B5F','#9B5DE5','#E2A721','#14B8A6','#EC4899','#64748B','#84CC16'];

/* ========================= helpers ========================= */
function h(tag,props,...kids){const el=document.createElement(tag);if(props)for(const k in props){const v=props[k];if(v==null||v===false)continue;if(k==='class')el.className=v;else if(k==='style')el.style.cssText=v;else if(k==='html')el.innerHTML=v;else if(k.slice(0,2)==='on')el.addEventListener(k.slice(2),v);else el.setAttribute(k,v===true?'':v);}for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;el.appendChild(c instanceof Node?c:document.createTextNode(String(c)));}return el;}
const store={get(k,d){try{const v=localStorage.getItem('kshow_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('kshow_'+k,JSON.stringify(v))}catch(e){}}};
function hash(s){let x=2166136261;for(const c of s){x^=c.charCodeAt(0);x=Math.imul(x,16777619)}return x>>>0}
function rng(seed){let s=seed>>>0||1;return()=>{s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296}}
function shuffle(a,seed){const r=seed==null?Math.random:rng(seed);const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function isImg(p){return /[./]/.test(p)&&!/^\p{Extended_Pictographic}/u.test(p)}

let teams=store.get('teams',[]);
let cur=0;
const ps={};
function save(){store.set('teams',teams)}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('on'),1600)}

function awardRow(st,def,label){
  if(st.pts==null)st.pts=def;
  const kids=[h('span',{class:'lbl'},label||'Award'),
    h('div',{class:'stepper'},h('button',{class:'mini','aria-label':'Fewer points',onclick:()=>{st.pts=Math.max(1,st.pts-1);rerender()}},'−'),h('b',null,st.pts),h('button',{class:'mini','aria-label':'More points',onclick:()=>{st.pts++;rerender()}},'+'))];
  if(!teams.length)kids.push(h('span',{class:'small',style:'opacity:.75'},'Add teams on the Teams screen to give points.'));
  teams.forEach(t=>kids.push(h('button',{class:'tbtn',style:'--c:'+t.color,onclick:()=>{t.score+=st.pts;save();(st.given=st.given||[]).push(t.name+' +'+st.pts);toast('+'+st.pts+' to '+t.name);rerender()}},'+'+st.pts+' '+t.name)));
  const w=h('div',{class:'award'},kids);
  if(st.given&&st.given.length)w.appendChild(h('span',{class:'small',style:'opacity:.7'},'✓ '+st.given.join(', ')));
  return w;
}

/* ========================= screens ========================= */
const S=[];
function add(section,render,extra){S.push(Object.assign({section,render},extra||{}))}

/* --- Title --- */
add('Welcome',(m)=>{
  m.append(h('div',{class:'screen',style:'justify-content:center;gap:22px;padding:40px 72px'},
    h('span',{class:'eyebrow'},'Lesson III · Readings in Philippine History'),
    h('h1',{class:'disp',style:'margin:0;font-size:104px;line-height:.92;letter-spacing:-1px'},'KARTILYA',h('br'),h('span',{style:'color:var(--red)'},'SHOWDOWN')),
    h('p',{style:'margin:0;font-size:22px;line-height:1.5;color:var(--soft);max-width:760px'},'A game show on the ',h('i',null,'Kartilya ng Katipunan'),' and Emilio Jacinto, the “Brain of the Katipunan.” Four rounds, fourteen rules, one champion team.'),
    h('div',{class:'row',style:'margin-top:8px'},h('button',{class:'btn',style:'height:56px;font-size:17px',onclick:()=>go(cur+1)},'Set up teams →'))
  ));
});

/* --- Teams --- */
add('Teams',(m)=>{
  const inp=h('input',{class:'field',placeholder:'Team name, e.g. Team Bonifacio','aria-label':'New team name',maxlength:'24'});
  const addTeam=()=>{const n=inp.value.trim();if(!n)return;teams.push({name:n,score:0,color:TEAM_COLORS[teams.length%TEAM_COLORS.length]});save();rerender();setTimeout(()=>{const i=document.querySelector('.field');i&&i.focus()},0)};
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addTeam()}});
  m.append(h('div',{class:'screen',style:'gap:20px'},
    h('div',null,h('span',{class:'eyebrow'},'Before we start'),h('h2',{class:'disp',style:'margin:6px 0 0;font-size:44px'},'Add your teams')),
    h('div',{style:'display:flex;gap:28px;flex:1;min-height:0'},
      h('div',{style:'width:460px;display:flex;flex-direction:column;gap:14px'},
        h('div',{class:'row'},inp,h('button',{class:'btn',style:'height:50px',onclick:addTeam},'Add')),
        h('p',{class:'muted',style:'margin:0;font-size:15px;line-height:1.5'},'Type a name and press Enter. Click a name to rename it. Scores save in this browser, so a refresh won’t wipe them.'),
        h('div',{class:'row',style:'margin-top:auto'},
          h('button',{class:'btn ghost sm',onclick:()=>{teams.forEach(t=>t.score=0);save();rerender();toast('Scores reset')}},'Reset scores'),
          h('button',{class:'btn ghost sm',onclick:()=>{if(confirmClear())rerender()}},'Remove all teams'))
      ),
      h('div',{class:'panel',style:'flex:1;padding:18px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-content:start;overflow:auto'},
        teams.length?teams.map((t,i)=>{const ti=h('input',{value:t.name,'aria-label':'Team name',maxlength:'24'});ti.addEventListener('change',()=>{t.name=ti.value.trim()||t.name;save();renderChrome()});
          return h('div',{class:'tcard'},h('span',{class:'sw',style:'background:'+t.color}),ti,h('span',{class:'disp',style:'font-size:16px;color:var(--muted)'},t.score),h('button',{class:'mini','aria-label':'Remove '+t.name,onclick:()=>{teams.splice(i,1);save();rerender()}},'×'))})
        :h('div',{class:'muted',style:'grid-column:1/-1;padding:40px;text-align:center;font-size:16px'},'No teams yet.')
      )
    )
  ));
},{typing:true});
let clearArmed=false;
function confirmClear(){if(!clearArmed){clearArmed=true;toast('Click again to remove all teams');setTimeout(()=>clearArmed=false,2500);return false}teams=[];save();clearArmed=false;return true}

/* --- Objectives + diagnostic --- */
add('Learning Objectives',(m,st)=>{
  const objs=['Grasp the historical context and role of the <i>Kartilya ng Katipunan</i> in the Philippine revolution.','Evaluate the principles in the <i>Kartilya ng Katipunan</i> and their relevance today.','Study Emilio Jacinto’s life, contributions, and his role in the Katipunan.','Use lessons from the <i>Kartilya ng Katipunan</i> in personal and academic contexts.'];
  m.append(h('div',{class:'screen',style:'gap:20px'},
    h('div',null,h('span',{class:'eyebrow'},'Lesson III'),h('h2',{class:'disp',style:'margin:6px 0 0;font-size:40px'},'Kartilya ng Katipunan: Emilio Jacinto')),
    h('div',{style:'display:flex;gap:24px;flex:1;min-height:0'},
      h('div',{class:'panel',style:'flex:1;padding:32px 40px;display:flex;flex-direction:column;gap:22px;justify-content:center'},
        h('span',{class:'eyebrow',style:'color:var(--muted)'},'By the end, we should be able to…'),
        objs.map((o,i)=>h('div',{style:'display:flex;gap:14px;align-items:flex-start'},h('span',{class:'disp',style:'font-size:22px;color:var(--gold);min-width:26px'},i+1),h('span',{style:'font-size:22px;line-height:1.45',html:o})))
      )
    )
  ));
});

/* --- Round intro builder --- */
function intro(section,n,name,tag,how,covers){
  add(section,(m)=>{
    m.append(h('div',{class:'screen',style:'justify-content:center;gap:26px;padding:40px 72px'},
      h('div',{style:'display:flex;gap:28px;align-items:flex-end'},
        h('span',{class:'disp',style:'font-size:150px;line-height:.8;color:var(--red)'},n),
        h('div',null,h('span',{class:'eyebrow'},n==='F'?'Final round':'Round '+n),h('h2',{class:'disp',style:'margin:6px 0 0;font-size:58px;line-height:1'},name),h('p',{style:'margin:8px 0 0;font-size:19px;color:var(--soft)'},tag))),
      h('div',{style:'display:flex;gap:20px'},
        h('div',{class:'panel',style:'flex:1.4;padding:20px 24px;display:flex;flex-direction:column;gap:10px'},h('span',{class:'eyebrow',style:'color:var(--muted)'},'How to play'),how.map(x=>h('div',{style:'font-size:17px;line-height:1.45;display:flex;gap:10px'},h('span',{style:'color:var(--gold)'},'▸'),h('span',{html:x})))),
        h('div',{class:'panel',style:'flex:1;padding:20px 24px;display:flex;flex-direction:column;gap:10px'},h('span',{class:'eyebrow',style:'color:var(--muted)'},'What it covers'),h('p',{style:'margin:0;font-size:17px;line-height:1.5;color:var(--soft)',html:covers}))
      )
    ));
  });
}

/* --- 4 Pics 1 Word --- */
function fourPics(d,i){
  add('Round 1 · 4 Pics 1 Word · '+(i+1)+' of '+PICS.length,(m,st)=>{
    const A=d.a,L=A.length;
    if(!st.init){st.init=true;const pool='ABDEGHILMNOPRSTUY';const r=rng(hash(A));const ls=A.split('');let n=Math.max(12,L+4);if(n%2)n++;while(ls.length<n)ls.push(pool[Math.floor(r()*pool.length)]);st.bank=shuffle(ls,hash(A)+7).map(ch=>({ch,u:false}));st.slots=Array(L).fill(null);st.lock=Array(L).fill(false);st.hints=0;}
    const sz=Math.min(58,Math.floor((640-(L-1)*6)/L));
    const slots=h('div',{class:'slots'+(st.bad?' bad':'')},st.slots.map((bi,k)=>h('button',{class:'slot'+(bi!=null?(st.solved?' ok':st.lock[k]?' l':' f'):''),style:`width:${sz}px;height:${Math.round(sz*1.15)}px;font-size:${Math.round(sz*.52)}px`,'aria-label':'Letter slot '+(k+1),onclick:()=>{if(!st.solved){unplace(st,k);rerender()}}},bi!=null?st.bank[bi].ch:'')));
    const cols=st.bank.length/2;
    const right=[h('div',null,h('span',{class:'eyebrow',style:'color:var(--muted)'},'What’s the word? · '+L+' letters'),h('p',{style:'margin:6px 0 0;font-size:20px;color:var(--soft)'},'Hint: '+d.hint)),slots];
    if(st.solved){
      right.push(h('div',{class:'paper',style:'padding:20px 22px;display:flex;flex-direction:column;gap:14px'},
        h('span',{style:'font-size:12px;font-weight:800;letter-spacing:2px;color:var(--crimson)'},st.shown?'THE ANSWER':'SOLVED!'),
        h('p',{style:'margin:0;font-size:18px;line-height:1.5',html:d.fact}),
        awardRow(st,Math.max(1,3-st.hints))),
        h('div',{class:'row'},h('button',{class:'btn',onclick:()=>go(cur+1)},'Next →')));
    }else{
      right.push(h('div',{class:'bank',style:`grid-template-columns:repeat(${cols},minmax(0,1fr));max-width:${cols*60}px`},st.bank.map((b,bi)=>h('button',{class:'lt'+(b.u?' u':''),onclick:()=>{place(st,bi,A);rerender()}},b.ch))),
        h('div',{class:'row',style:'flex-wrap:wrap'},
          h('button',{class:'btn ghost sm',onclick:()=>{hint(st,A);rerender()}},'Reveal a letter (−1 pt)'),
          h('button',{class:'btn ghost sm',onclick:()=>{st.slots.forEach((_,k)=>unplace(st,k));rerender()}},'Clear'),
          h('button',{class:'btn sm',onclick:()=>{showAll(st,A);rerender()}},'Show answer')));
    }
    m.append(h('div',{class:'screen',style:'flex-direction:row;gap:40px;align-items:center'},
      h('div',{class:'pics'},d.pics.map(p=>h('div',{class:'pic'},isImg(p)?h('img',{src:p,alt:''}):h('span',{'aria-hidden':'true'},p)))),
      h('div',{style:'flex:1;display:flex;flex-direction:column;gap:22px;min-width:0'},right)));
  },{key:(e,st)=>{if(st.solved)return false;const k=e.key.toUpperCase();if(/^[A-Z]$/.test(k)){const bi=st.bank.findIndex(b=>!b.u&&b.ch===k);if(bi>=0){place(st,bi,d.a);rerender()}return true}if(e.key==='Backspace'){for(let k2=st.slots.length-1;k2>=0;k2--){if(st.slots[k2]!=null&&!st.lock[k2]){unplace(st,k2);break}}rerender();return true}return false}});
}
function place(st,bi,A){const k=st.slots.indexOf(null);if(k<0||st.bank[bi].u)return;st.slots[k]=bi;st.bank[bi].u=true;check(st,A)}
function unplace(st,k){if(st.lock[k]||st.slots[k]==null)return;st.bank[st.slots[k]].u=false;st.slots[k]=null}
function check(st,A){if(st.slots.includes(null))return;const w=st.slots.map(b=>st.bank[b].ch).join('');if(w===A){st.solved=true;toast('Correct!')}else{st.bad=true;setTimeout(()=>{st.bad=false;rerender()},600)}}
function hint(st,A){const k=st.lock.indexOf(false);if(k<0)return;unplace(st,k);let bi=st.bank.findIndex(b=>!b.u&&b.ch===A[k]);if(bi<0){const j=st.slots.findIndex((b,jj)=>b!=null&&!st.lock[jj]&&st.bank[b].ch===A[k]);if(j<0)return;bi=st.slots[j];unplace(st,j)}st.slots[k]=bi;st.bank[bi].u=true;st.lock[k]=true;st.hints++;check(st,A)}
function showAll(st,A){st.slots.forEach((_,k)=>{st.lock[k]=false;unplace(st,k)});st.bank.forEach(b=>b.u=false);for(let k=0;k<A.length;k++){const bi=st.bank.findIndex(b=>!b.u&&b.ch===A[k]);st.slots[k]=bi;st.bank[bi].u=true}st.solved=true;st.shown=true;st.hints=Math.max(st.hints,3)}

/* --- Lesson screens --- */
function lessonJacinto(){
  add('Lesson · The Brain of the Katipunan',(m)=>{
    const card=(title,items)=>h('div',{class:'panel',style:'flex:1;padding:22px 26px;display:flex;flex-direction:column;gap:12px'},h('span',{class:'eyebrow'},title),items.map(x=>h('div',{style:'font-size:17px;line-height:1.45;display:flex;gap:10px'},h('span',{style:'color:var(--red)'},'■'),h('span',{html:x}))));
    m.append(h('div',{class:'screen',style:'gap:20px'},
      h('h2',{class:'disp',style:'margin:0;font-size:40px'},'Recap: the Katipunan & its “Brain”'),
      h('div',{style:'display:flex;gap:20px;flex:1;min-height:0'},
        card('The Katipunan (KKK)',['Officially the <b>Kataastaasan Kagalang-galang na Katipunan ng mga Anak ng Bayan</b>.','Founded in <b>1892</b> by Filipino patriots led by <b>Andrés Bonifacio</b>, with co-founders <b>Ladislao Diwa</b> and <b>Teodoro Plata</b>.','Played a major role in the fight for independence from <b>Spain</b>.','Stood for <b>equality, patriotism, and moral integrity</b>, all laid out in the <i>Kartilya</i>.']),
        card('Emilio Jacinto',['Born <b>December 15, 1875</b>; one of the most important figures in Philippine history.','Nicknamed the <b>“Brain of the Katipunan”</b> / “Brain of the Revolution.”','Wrote the original <b><i>Kartilya ng Katipunan</i></b>, the organization’s moral and ethical guide.','The Katipunan’s <b>spokesperson</b> and <b>treasurer</b>; wrote for its newspaper <b><i>Kalayaan</i></b> as <b>Dimas-Ilaw</b>.'])
      )));
  });
  add('Lesson · Spirit & Lasting Impact',(m)=>{
    m.append(h('div',{class:'screen',style:'gap:20px'},
      h('h2',{class:'disp',style:'margin:0;font-size:40px'},'Why the Kartilya matters'),
      h('div',{style:'display:flex;gap:20px;flex:1;min-height:0'},
        h('div',{class:'paper',style:'flex:1;padding:24px 28px;display:flex;flex-direction:column;gap:12px'},
          h('span',{style:'font-size:12px;font-weight:800;letter-spacing:2px;color:var(--crimson)'},'A REFLECTION OF THE FILIPINO SPIRIT'),
          h('p',{style:'margin:0;font-family:Georgia,serif;font-size:24px;line-height:1.35'},'“Like a mirror” of the values and ideals of the Filipino people during the revolution.'),
          ['Champions <b>freedom and equality</b>, reflecting the progressive ideas of the <b>18th and 19th centuries</b>.','Shows how the Katipuneros thought: equality <b>regardless of gender, status, or wealth</b>.','Inspires <b>courage and strength</b> in the fight for freedom, and urges everyone to live by <b>fairness and integrity</b>.'].map(x=>h('div',{style:'font-size:16.5px;line-height:1.45;color:var(--ink2)',html:'• '+x}))),
        h('div',{class:'paper',style:'flex:1;padding:24px 28px;display:flex;flex-direction:column;gap:12px'},
          h('span',{style:'font-size:12px;font-weight:800;letter-spacing:2px;color:var(--crimson)'},'ITS LASTING IMPACT ON HISTORY'),
          h('p',{style:'margin:0;font-family:Georgia,serif;font-size:24px;line-height:1.35'},'A cornerstone of Philippine history.'),
          ['Its <b>14 rules</b> lay out how members should live and act, built on <b>two themes</b>: becoming a good person, and treating others with respect and equality.','Beyond guiding the revolution, it influenced the <b>Malolos Constitution</b>, the <b>first constitution of the Philippines</b>.','Jacinto’s work wasn’t just about fighting for independence; it helped shape the <b>values and direction of the nation’s future</b>.'].map(x=>h('div',{style:'font-size:16.5px;line-height:1.45;color:var(--ink2)',html:'• '+x})))
      )));
  });
}
function lessonTable(){
  add('Lesson · The 14 Rules',(m)=>{
    const col=(cat,cls,bg)=>h('div',{class:'rcol',style:'background:'+bg},h('span',{class:'chip '+cls,style:'align-self:flex-start;margin-bottom:4px'},cat),Object.keys(RULES).filter(n=>CAT[n]===cat).map(n=>h('div',{class:'rr'},h('b',null,n),h('span',null,RULES[n]))));
    m.append(h('div',{class:'screen',style:'gap:14px;padding-top:20px;padding-bottom:20px'},
      h('div',{class:'row',style:'justify-content:space-between'},h('h2',{class:'disp',style:'margin:0;font-size:32px'},'Kartilya ng Katipunan: an overview'),h('span',{class:'muted',style:'font-size:14px'},'The simplified version groups the 14 rules into two categories')),
      h('div',{class:'rtab'},col(GOOD,'good','#172338'),col(OTHERS,'others','#2A1519'))));
  });
}

/* --- Wordle --- */
function evalGuess(g,A){const r=Array(A.length).fill('x');const cnt={};for(let i=0;i<A.length;i++){if(g[i]===A[i])r[i]='g';else cnt[A[i]]=(cnt[A[i]]||0)+1}for(let i=0;i<A.length;i++){if(r[i]!=='g'&&cnt[g[i]]){r[i]='y';cnt[g[i]]--}}return r}
function ruleWithBlank(n,A,mode){const re=new RegExp('\\b'+A+'\\b','gi');const t=esc(RULES[n]);return t.replace(re,m=>mode==='blank'?'<span class="blank"></span>':'<span class="hl">'+m+'</span>')}
function wordle(d,i){
  const A=d.a,L=A.length,MAX=6;
  add('Round 2 · Wordle · Word '+(i+1)+' of '+WORDLE.length,(m,st)=>{
    if(!st.init){st.init=true;st.g=[];st.c='';}
    const res=st.g.map(g=>evalGuess(g,A));
    const ks={};st.g.forEach((g,gi)=>g.split('').forEach((ch,ci)=>{const v=res[gi][ci];const p=ks[ch];if(v==='g'||(v==='y'&&p!=='g')||(!p))ks[ch]=v}));
    const clue=true;
    const rows=[];for(let r=0;r<MAX;r++){const tiles=[];for(let c=0;c<L;c++){let ch='',cls='wt';if(r<st.g.length){ch=st.g[r][c];cls+=' '+res[r][c]}else if(r===st.g.length&&!st.done){ch=st.c[c]||'';if(ch)cls+=' t'}tiles.push(h('div',{class:cls,style:r<st.g.length?'animation-delay:'+(c*.08)+'s':''},ch))}rows.push(h('div',{class:'wrow'+(r===st.g.length&&st.bad?' bad':'')},tiles))}
    const press=k=>{wKey(st,k,A,MAX);};
    const kb=h('div',{class:'kb'},['QWERTYUIOP','ASDFGHJKL',['ENTER','Z','X','C','V','B','N','M','DEL']].map(row=>h('div',{class:'kr'},(Array.isArray(row)?row:row.split('')).map(k=>h('button',{class:'key'+(k.length>1?' w':'')+(ks[k]?' '+ks[k]:''),onclick:()=>press(k==='DEL'?'Backspace':k==='ENTER'?'Enter':k)},k==='DEL'?'⌫':k)))));
    const worth=Math.max(1,MAX-st.g.length);
    const left=h('div',{style:'width:380px;display:flex;flex-direction:column;gap:14px;flex:none'},
      clue?h('div',{class:'panel',style:'padding:22px;display:flex;flex-direction:column;gap:10px'},h('div',{class:'row',style:'justify-content:space-between'},h('span',{class:'eyebrow'},'Clue · Rule '+d.rule),h('span',{class:'small muted'},L+' letters')),h('p',{style:'margin:0;font-family:Georgia,serif;font-size:21px;line-height:1.4',html:'“'+ruleWithBlank(d.rule,A,'blank')+'”'}))
        :h('div',{class:'panel',style:'padding:22px;display:flex;flex-direction:column;gap:12px'},h('span',{class:'eyebrow'},'Clue locked'),h('p',{style:'margin:0;font-size:16px;color:var(--soft);line-height:1.5'},'The word ('+L+' letters) comes from one of the 14 rules. The clue unlocks after guess 2.'),h('button',{class:'btn ghost sm',style:'align-self:flex-start',onclick:()=>{st.clue=true;rerender()}},'Show clue now')),
      h('div',{class:'panel',style:'padding:18px 22px;display:flex;flex-direction:column;gap:4px'},h('span',{class:'eyebrow',style:'color:var(--muted)'},st.done?'Finished':'Guess '+(st.g.length+1)+' of '+MAX),h('span',{style:'font-size:17px;color:var(--soft)'},st.done?(st.won?'Solved in '+st.g.length+'!':'Out of guesses.'):h('span',null,'Solve on this guess for ',h('b',{style:'color:var(--gold)'},'+'+worth+' pts')))),
      h('div',{class:'row'},st.done?h('button',{class:'btn',style:'flex:1',onclick:()=>{st.rev=true;rerender()}},'Show rule card'):h('button',{class:'btn ghost',style:'flex:1',onclick:()=>{st.done=true;st.gave=true;st.rev=true;rerender()}},'Reveal answer')),
      h('div',{class:'row small muted',style:'gap:14px'},[['var(--green)','right spot'],['var(--yellow)','wrong spot'],['var(--gray)','not in word']].map(([c,t])=>h('span',{class:'row',style:'gap:6px'},h('span',{style:'width:13px;height:13px;border-radius:3px;background:'+c}),t))));
    const screen=h('div',{class:'screen',style:'flex-direction:row;gap:48px;padding-top:24px'},left,h('div',{style:'flex:1;display:flex;flex-direction:column;align-items:center;gap:18px'},h('div',{class:'wgrid'},rows),kb));
    m.append(screen);
    if(st.rev){
      const sol=h('div',{class:'row',style:'gap:8px;justify-content:center'},A.split('').map(ch=>h('div',{class:'wt g',style:'width:62px;height:62px;font-size:30px'},ch)));
      m.append(h('div',{class:'ov'},h('div',{class:'paper box',style:'width:860px;max-height:none;display:flex;flex-direction:column;gap:16px'},
        h('div',{class:'row',style:'justify-content:space-between'},h('span',{style:'font-size:12px;font-weight:800;letter-spacing:2px;color:var(--crimson)'},st.won?'SOLVED IN '+st.g.length+(st.g.length===1?' GUESS':' GUESSES'):'THE WORD WAS'),h('button',{class:'mini','aria-label':'Close',onclick:()=>{st.rev=false;rerender()}},'×')),
        sol,
        h('div',{style:'display:flex;gap:24px;align-items:flex-start'},
          h('div',{style:'display:flex;flex-direction:column;align-items:center;min-width:90px;border-right:2px solid #D8D1C3;padding-right:20px'},h('span',{style:'font-size:12px;font-weight:800;letter-spacing:2px;color:#6B6355'},'RULE'),h('span',{class:'disp',style:'font-size:62px;line-height:1;color:var(--crimson)'},d.rule)),
          h('div',{style:'display:flex;flex-direction:column;gap:10px;flex:1'},h('span',{class:'chip '+(CAT[d.rule]===GOOD?'good':'others'),style:'align-self:flex-start'},CAT[d.rule]),h('p',{style:'margin:0;font-family:Georgia,serif;font-size:23px;line-height:1.38',html:'“'+ruleWithBlank(d.rule,A,'hl')+'”'}))),
        st.won?awardRow(st,Math.max(1,MAX+1-st.g.length)):null,
        h('div',{class:'row',style:'justify-content:flex-end'},h('button',{class:'btn ghost sm',style:'color:var(--ink);border-color:#CFC7B6',onclick:()=>{st.rev=false;rerender()}},'Back to board'),h('button',{class:'btn sm',onclick:()=>go(cur+1)},'Next →'))
      )));
    }
  },{key:(e,st)=>{if(st.done||st.rev)return false;if(/^[a-zA-Z]$/.test(e.key)||e.key==='Backspace'||e.key==='Enter'){wKey(st,e.key,A,MAX);return true}return false}});
}
function wKey(st,k,A,MAX){if(st.done)return;if(k==='Backspace'){st.c=st.c.slice(0,-1)}else if(k==='Enter'){if(st.c.length!==A.length){st.bad=true;toast('Need '+A.length+' letters');setTimeout(()=>{st.bad=false;rerender()},450)}else{st.g.push(st.c);st.c='';if(st.g[st.g.length-1]===A){st.done=st.won=true;toast('Solved!');setTimeout(()=>{st.rev=true;rerender()},900)}else if(st.g.length>=MAX){st.done=true;setTimeout(()=>{st.rev=true;rerender()},900)}}}else if(/^[a-zA-Z]$/.test(k)&&st.c.length<A.length){st.c+=k.toUpperCase()}rerender()}

/* --- Connections --- */
const CCOL=['#F2CF5B','#8FC27A','#9DB8E8','#B99BD8'];
function connections(d,i){
  add('Round 3 · Connections',(m,st)=>{
    if(!st.init){st.init=true;st.tiles=shuffle(d.groups.flatMap(g=>g.items),hash(d.title));st.sel=[];st.solved=[];st.mis=4;}
    const done=new Set(st.solved.flatMap(gi=>d.groups[gi].items));
    const rem=st.tiles.filter(t=>!done.has(t));
    const all=st.solved.length===4;
    const reset=()=>{st.init=false;st.failed=false;st.given=[];rerender()};
    const submit=()=>{if(st.sel.length!==4)return;const gi=d.groups.findIndex(g=>st.sel.every(s=>g.items.includes(s)));if(gi>=0){st.solved.push(gi);st.sel=[];toast(st.solved.length===4?'All groups found!':'Group found!')}else{const best=Math.max(...d.groups.map(g=>st.sel.filter(s=>g.items.includes(s)).length));st.mis--;toast(best===3?'One away…':'Not a group');if(st.mis<=0){d.groups.forEach((_,k)=>{if(!st.solved.includes(k))st.solved.push(k)});st.sel=[];st.failed=true}}rerender()};
    m.append(h('div',{class:'screen',style:'align-items:center;gap:14px;padding-top:18px;padding-bottom:16px'},
      h('div',{style:'text-align:center'},h('span',{class:'disp',style:'font-size:26px'},all?(st.failed?'Here are the groups':'Nice! All four groups found'):'Create four groups of four'),h('div',{class:'muted',style:'font-size:14px;margin-top:2px'},d.title)),
      !all?h('div',{class:'row',style:'gap:8px;flex-wrap:wrap;justify-content:center'},d.groups.map((g,k)=>st.solved.includes(k)?null:h('span',{style:'padding:5px 12px;border-radius:999px;font-size:13px;font-weight:800;color:var(--ink);background:'+CCOL[k]},g.name))):null,
      h('div',{style:'width:1000px;display:flex;flex-direction:column;gap:10px'},
        st.solved.map(gi=>{const g=d.groups[gi];return h('div',{class:'cbar',style:'background:'+CCOL[gi]},h('b',null,g.name),h('span',null,g.items.join(', ')),h('em',null,g.why))}),
        rem.length?h('div',{class:'cgrid'},rem.map(t=>h('button',{class:'ct'+(st.sel.includes(t)?' s':''),onclick:()=>{if(st.sel.includes(t))st.sel=st.sel.filter(x=>x!==t);else if(st.sel.length<4)st.sel.push(t);rerender()}},t))):null),
      all?h('div',{class:'panel',style:'padding:12px 18px;margin-top:4px;display:flex;gap:16px;align-items:center'},awardRow(st,5),h('button',{class:'btn ghost sm',onclick:reset},'Reset'),h('button',{class:'btn sm',onclick:()=>go(cur+1)},'Next →'))
      :h('div',{style:'display:flex;flex-direction:column;align-items:center;gap:12px'},
        h('div',{class:'row',style:'font-size:15px;color:var(--soft)'},'Mistakes remaining:',h('div',{class:'dots'},[0,1,2,3].map(k=>h('span',{class:'dot'+(k<st.mis?'':' o')})))),
        h('div',{class:'row'},
          h('button',{class:'btn ghost sm',style:'border-radius:999px',onclick:()=>{st.tiles=shuffle(st.tiles);rerender()}},'Shuffle'),
          h('button',{class:'btn ghost sm',style:'border-radius:999px',onclick:()=>{st.sel=[];rerender()}},'Deselect all'),
          h('button',{class:'btn light sm',style:'border-radius:999px;font-weight:800',disabled:st.sel.length!==4,onclick:submit},'Submit'),
          h('button',{class:'btn ghost sm',style:'border-radius:999px',onclick:()=>{d.groups.forEach((_,k)=>{if(!st.solved.includes(k))st.solved.push(k)});st.sel=[];st.failed=true;rerender()}},'Reveal all'),
          h('button',{class:'btn ghost sm',style:'border-radius:999px',onclick:reset},'Reset')))
    ));
  });
}

/* --- Scenarios --- */
function scenario(d,i){
  add('Round 4 · Which Rule Was Broken? · '+(i+1)+' of '+SCEN.length,(m,st)=>{
    if(!st.init){st.init=true;st.o=shuffle(d.o,hash(d.t));}
    const L='ABCD';
    m.append(h('div',{class:'screen',style:'gap:14px;padding-top:22px;padding-bottom:18px'},
      h('div',{class:'paper',style:'padding:'+(st.rev?'18px 28px':'26px 32px')+';display:flex;flex-direction:column;gap:8px'},h('span',{style:'font-size:12px;font-weight:800;letter-spacing:2px;color:var(--crimson)'},'SCENARIO '+(i+1)),h('p',{style:'margin:0;font-weight:600;line-height:1.35;font-size:'+(st.rev?'22px':'27px')},d.t)),
      h('div',{class:'opts'},st.o.map((n,k)=>{let c='opt';if(st.rev){c+=n===d.a?' ok':(st.pick===n?' no':' dim')}else if(st.pick===n)c+=' p';return h('button',{class:c,onclick:()=>{if(!st.rev){st.pick=n;rerender()}}},h('span',{class:'lt2'},L[k]),h('span',null,h('small',{class:'rn'},'Rule '+n),h('strong',null,RULES[n])))})),
      st.rev?h('div',{class:'panel',style:'padding:14px 20px;display:flex;flex-direction:column;gap:8px'},
                              h('div',{class:'row',style:'justify-content:space-between'},awardRow(st,2),h('button',{class:'btn sm',onclick:()=>go(cur+1)},'Next →')))
        :h('div',{class:'row',style:'justify-content:space-between;margin-top:auto'},h('span'),h('button',{class:'btn',onclick:()=>{st.rev=true;rerender()}},'Reveal answer'))
    ));
  });
}

/* --- Finale --- */
add('Finale',(m)=>{
  const ranked=teams.slice().sort((a,b)=>b.score-a.score);
  const top=ranked[0];
  m.append(h('div',{class:'screen',style:'flex-direction:row;gap:28px'},
    h('div',{style:'flex:1;display:flex;flex-direction:column;gap:14px'},
      h('span',{class:'eyebrow'},'Final standings'),
      top?h('h2',{class:'disp',style:'margin:0;font-size:52px;line-height:1'},top.name,h('span',{style:'color:var(--gold)'},' wins!')):h('h2',{class:'disp',style:'margin:0;font-size:40px'},'Thanks for playing!'),
      h('div',{style:'display:flex;flex-direction:column;gap:8px;overflow:auto'},ranked.map((t,k)=>h('div',{class:'tcard',style:k===0?'box-shadow:inset 0 0 0 2px var(--gold)':''},h('span',{class:'disp',style:'width:30px;color:var(--muted)'},k+1),h('span',{class:'sw',style:'background:'+t.color}),h('span',{style:'flex:1;font-weight:700;font-size:18px'},t.name),h('span',{class:'disp',style:'font-size:24px'},t.score))))),
    h('div',{style:'width:560px;display:flex;flex-direction:column;gap:16px'},
      h('div',{class:'paper',style:'padding:24px 28px;display:flex;flex-direction:column;gap:10px'},h('span',{style:'font-size:12px;font-weight:800;letter-spacing:2px;color:var(--crimson)'},'RULE 14'),h('p',{style:'margin:0;font-family:Georgia,serif;font-size:22px;line-height:1.4'},'“'+RULES[14]+'”')),
      h('div',{class:'panel',style:'padding:20px 24px;display:flex;flex-direction:column;gap:10px'},h('span',{class:'eyebrow'},'Take it with you'),
        ['Which rule do you think is the hardest to live by as a student today?','How can the Kartilya guide how we treat groupmates, classmates, and family?','Jacinto was only a teenager when he joined the Katipunan. What does that say about what young people can do?'].map(q=>h('div',{style:'font-size:16px;line-height:1.45;display:flex;gap:10px'},h('span',{style:'color:var(--gold)'},'▸'),q))))
  ));
});

/* ========================= build order ========================= */
(function build(){
  const titleTeamsObj=S.splice(0,S.length);
  S.push(...titleTeamsObj);
  const tail=[];
  // Round 1
  intro('Round 1 · 4 Pics 1 Word','1','4 Pics 1 Word','Jacinto and the Katipunan',['Four pictures, one word. Use the hint and the letter bank.','Teams take turns: one guess per turn. Wrong guess? Next team.','Worth <b>3 pts</b>. Each revealed letter costs <b>1 pt</b>.'],'The Katipunan’s name and founding, Jacinto’s nickname and roles, the <i>Kartilya</i>, and the newspaper <i>Kalayaan</i>.');
  PICS.forEach(fourPics);
  lessonJacinto();
  intro('Round 2 · Wordle','2','Wordle','Keywords hidden in the rules',['Guess the hidden word from one of the 14 rules in <b>6 tries</b>.','<span style="color:#7FD39B;font-weight:700">Green</span> = right spot, <span style="color:var(--yellow);font-weight:700">yellow</span> = wrong spot, gray = not in the word.','The rule clue is shown with the word blanked out. Solve on guess 1 for <b>6 pts</b>, guess 2 for 5, and so on.'],'Rules 1, 4, 5, 6 and 8. Each solved word reveals its full rule.');
  WORDLE.forEach(wordle);
  lessonTable();
  intro('Round 3 · Connections','3','Connections','Find the four hidden groups',['16 tiles hide <b>4 groups of 4</b>. Select four and submit.','The four group names are shown; the class gets <b>4 mistakes</b>.','Award up to <b>5 pts</b> to the team that cracks the most groups.'],'The Katipunan’s founding, Jacinto’s writing, and what does and doesn’t decide a person’s worth (Rules 5 & 13).');
  CONNECT.forEach(connections);
  intro('Round 4 · Which Rule Was Broken?','4','Which Rule Was Broken?','The Kartilya in student life today',['Read the scenario out loud. Teams agree on a letter (A–D).','Click the class’s answer, then reveal. Correct teams get <b>2 pts</b>.'],'How the Kartilya’s principles apply today: Rules 2, 3, 6, 7, 8, 9, 10, 11, 12 and 13.');
  SCEN.forEach(scenario);
  // finale was added earlier; move it to the end
  const finIdx=S.findIndex(s=>s.section==='Finale');
  S.push(S.splice(finIdx,1)[0]);
})();

const SECTIONS=[];S.forEach((s,i)=>{const base=s.section.split(' · ').slice(0,2).join(' · ');const key=/^Round|^Lesson/.test(s.section)?base:s.section;if(!SECTIONS.find(x=>x.k===key))SECTIONS.push({k:key,i})});

/* ========================= engine ========================= */
const main=document.getElementById('main');
function renderChrome(){
  document.getElementById('sec').textContent=S[cur].section;
  const pills=document.getElementById('pills');pills.innerHTML='';
  teams.forEach(t=>pills.appendChild(h('button',{class:'pill',style:'--c:'+t.color,onclick:openScores},h('i'),t.name,h('b',null,t.score))));
  document.getElementById('prog').textContent=(cur+1)+' / '+S.length;
  document.getElementById('bPrev').disabled=cur===0;
  document.getElementById('bNext').disabled=cur===S.length-1;
}
function rerender(){main.innerHTML='';const st=ps[cur]=ps[cur]||{};S[cur].render(main,st);renderChrome();if(overlay)main.appendChild(overlay)}
let overlay=null;
function closeOv(){overlay=null;rerender()}
function go(i){i=Math.max(0,Math.min(S.length-1,i));cur=i;overlay=null;store.set('cur',cur);rerender()}
function openScores(){
  const build=()=>h('div',{class:'ov',onclick:e=>{if(e.target===e.currentTarget)closeOv()}},h('div',{class:'panel box',style:'display:flex;flex-direction:column;gap:12px'},
    h('div',{class:'row',style:'justify-content:space-between'},h('span',{class:'disp',style:'font-size:26px'},'Scoreboard'),h('button',{class:'mini','aria-label':'Close',onclick:closeOv},'×')),
    teams.length?teams.map(t=>h('div',{class:'tcard'},h('span',{class:'sw',style:'background:'+t.color}),h('span',{style:'flex:1;font-weight:700;font-size:18px'},t.name),h('button',{class:'mini','aria-label':'Minus one',onclick:()=>{t.score--;save();overlay=build();rerender()}},'−'),h('span',{class:'disp',style:'font-size:24px;min-width:44px;text-align:center'},t.score),h('button',{class:'mini','aria-label':'Plus one',onclick:()=>{t.score++;save();overlay=build();rerender()}},'+'))):h('p',{class:'muted'},'No teams yet.'),
    h('button',{class:'btn ghost sm',style:'align-self:flex-start',onclick:()=>go(1)},'Edit teams')));
  overlay=build();rerender();
}
function openMenu(){
  overlay=h('div',{class:'ov',onclick:e=>{if(e.target===e.currentTarget)closeOv()}},h('div',{class:'panel box',style:'display:flex;flex-direction:column;gap:6px'},
    h('div',{class:'row',style:'justify-content:space-between;margin-bottom:6px'},h('span',{class:'disp',style:'font-size:26px'},'Jump to'),h('button',{class:'mini','aria-label':'Close',onclick:closeOv},'×')),
    SECTIONS.map(s=>h('button',{class:'btn ghost sm',style:'justify-content:flex-start;text-align:left;'+(cur>=s.i?'':'opacity:.85'),onclick:()=>go(s.i)},s.k))));
  rerender();
}
document.getElementById('bPrev').onclick=()=>go(cur-1);
document.getElementById('bNext').onclick=()=>go(cur+1);
document.getElementById('bScores').onclick=openScores;
document.getElementById('bMenu').onclick=openMenu;
function toggleFull(){try{if(!document.fullscreenElement)document.documentElement.requestFullscreen();else document.exitFullscreen()}catch(e){}}
document.getElementById('bFull').onclick=toggleFull;
document.addEventListener('keydown',e=>{
  const tag=(e.target&&e.target.tagName)||'';
  if(tag==='INPUT'||tag==='TEXTAREA')return;
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  if(overlay){if(e.key==='Escape')closeOv();return}
  const s=S[cur];const st=ps[cur]=ps[cur]||{};
  if(s.key&&s.key(e,st)){e.preventDefault();return}
  if(e.key==='ArrowRight'||e.key==='PageDown'){e.preventDefault();go(cur+1)}
  else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();go(cur-1)}
  else if(e.key==='f'||e.key==='F'){toggleFull()}
});
function fit(){const s=Math.min(innerWidth/1280,innerHeight/720);document.getElementById('stage').style.transform='translate(-50%,-50%) scale('+s+')'}
addEventListener('resize',fit);fit();
cur=Math.min(store.get('cur',0),S.length-1);
rerender();
