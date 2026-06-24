  /* ============ EDITE AQUI: palestrantes (basta trocar o caminho da imagem) ============ */
  const R = p => (window.__resources && window.__resources[p]) || p;
  const SPEAKERS = [
    'assets/speakers/alessandro-bonorino.jpg',
    'assets/speakers/regina-frederico.jpg',
    'assets/speakers/ana-laginha.jpg',
    'assets/speakers/rogerio-donizete.jpg',
    'assets/speakers/beatriz-leitole.jpg',
    'assets/speakers/ana-clara-silva-pinto.jpg',
    'assets/speakers/deborah-abi-saber.jpg',
    'assets/speakers/manuela-rodrigues-alves.jpg',
    'assets/speakers/michelle-dapper.jpg',
    'assets/speakers/priscila-monaco.jpg',
    'assets/speakers/roberta-nunes.jpg',
    'assets/speakers/rodolfo-pelitz.jpg',
    'assets/speakers/rosi-pucceti.jpg',
    'assets/speakers/carolina-duque.jpg',
    'assets/speakers/angelica-peres.jpg',
    'assets/speakers/danielle-lopes.jpg'
  ];
  const BRANDS = [
    { nome:'Adecco',      logo:'uploads/adecco (sem borda) (1) 1.svg' },
    { nome:'Apdata',      logo:'uploads/apdata - sem bordas.svg' },
    { nome:'',            logo:'uploads/Azul escuro seta laranja tagline (2).svg' },
    { nome:'Beneo Talks', logo:'uploads/beneo talks 1.svg' },
    { nome:'BIZ',         logo:'uploads/BIZ 1.svg' },
    { nome:'',            logo:'uploads/Camada 1.svg' },
    { nome:'',            logo:'uploads/Camada 4.svg' },
    { nome:'Dot',         logo:'uploads/dot svg 1.svg' },
    { nome:'',            logo:'uploads/exlsY5qGhLUJ 1.svg' },
    { nome:'Fluencypass', logo:'uploads/fluencypass 2.svg' },
    { nome:'',            logo:'uploads/Frame 53400.svg' },
    { nome:'',            logo:'uploads/Frame 2609202.svg' },
    { nome:'',            logo:'uploads/Frame 2147204752.svg' },
    { nome:'',            logo:'uploads/Frame 2147204753.svg' },
    { nome:'',            logo:'uploads/Frame 2147204754.svg' },
    { nome:'',            logo:'uploads/Group 53091.svg' },
    { nome:'',            logo:'uploads/Group 53092.svg' },
    { nome:'',            logo:'uploads/Group 53138.svg' },
    { nome:'',            logo:'uploads/Group 2609111.svg' },
    { nome:'',            logo:'uploads/Group 2609114.svg' },
    { nome:'',            logo:'uploads/Group 2609115.svg' },
    { nome:'',            logo:'uploads/Group.svg' },
    { nome:'',            logo:'uploads/Group-1.svg' },
    { nome:'iFood Benefícios', logo:'uploads/ifood beneficios 1.svg' },
    { nome:'Elsa',        logo:'uploads/Logo Elsa horizontal sem bordas 1.svg' },
    { nome:'SGG',         logo:'uploads/logo sgg alta.svg' },
    { nome:'Kairós',      logo:'uploads/Logo-Kairos-Verde-Chapado 1.svg' },
    { nome:'Metadil',     logo:'uploads/METADIL 1.svg' },
    { nome:'Nine to Nine',logo:'uploads/NINE TO NINE 1.svg' },
    { nome:'Ninja',       logo:'uploads/NINJA 1.svg' },
    { nome:'',            logo:'uploads/RyN41dtNKMsw 1.svg' },
    { nome:'SmartLeader', logo:'uploads/smartleader 1.svg' },
    { nome:'Starbem',     logo:'uploads/starbem 1.svg' },
    { nome:'TD',          logo:'uploads/td logo.svg' },
    { nome:'Ticket',      logo:'uploads/ticket - sem bordas.svg' },
    { nome:'TOTVS',       logo:'uploads/totvs atualizado 1.svg' },
    { nome:'',            logo:'uploads/Union.svg' },
    { nome:'',            logo:'uploads/Vector.svg' },
    { nome:'',            logo:'uploads/Vector-1.svg' },
    { nome:'Vende-C',     logo:'uploads/VENDE-C 1.svg' },
    { nome:'VR',          logo:'uploads/VR 1.svg' },
    { nome:'Wellhub',     logo:'uploads/WELLHUB 1.svg' }
  ];

  /* ---- Speakers carousel (auto-loop + arrows) ---- */
  const spTrack = document.getElementById('spTrack');
  SPEAKERS.concat(SPEAKERS).forEach(src => {
    const d = document.createElement('div');
    d.className = 'sp-card';
    const img = document.createElement('img');
    img.src = R(src); img.alt = 'Palestrante RH Summit'; img.loading = 'lazy';
    d.appendChild(img); spTrack.appendChild(d);
  });
  const SP_STEP = 268; // card + gap
  function spScroll(dir){ spTrack.scrollLeft += dir * SP_STEP * 2; }
  let spPaused = false;
  spTrack.addEventListener('mouseenter', () => spPaused = true);
  spTrack.addEventListener('mouseleave', () => spPaused = false);
  setInterval(() => {
    if (spPaused) return;
    const half = spTrack.scrollWidth / 2;
    if (spTrack.scrollLeft >= half) spTrack.scrollLeft -= half;
    spTrack.scrollLeft += 1;
  }, 24);

  /* ---- Brands static grid (troque por <img> com SVG oficial: BRANDS pode receber {nome, logo}) ---- */
  const brandGrid = document.getElementById('brandGrid');
  BRANDS.forEach(b => {
    const c = document.createElement('div'); c.className = 'brand-cell';
    if (typeof b === 'object' && b.logo) {
      const img = document.createElement('img'); img.src = R(b.logo); img.alt = b.nome || ''; c.appendChild(img);
    } else {
      const s = document.createElement('span'); s.textContent = b; c.appendChild(s);
    }
    brandGrid.appendChild(c);
  });

  /* ---- Motivos cards (4:5, lado a lado, setas) ---- */
  const MOTIVOS = [
    { img:'assets/photos/feira.jpg',         kick:'Geração de negócios', html:'5.000 líderes de RH<br>em <em>um só lugar</em>' },
    { img:'assets/photos/roundtables-1.jpg', kick:'Decisores na sala',   html:'73% decidem. Fale<br>com <em>quem assina</em>' },
    { img:'assets/photos/plenaria-1.jpg',    kick:'Autoridade de marca', html:'A pauta de RH<br><em>do ano inteiro</em>' },
    { img:'assets/photos/conectas-1.jpg',    kick:'Mais que um estande', html:'Não é estande.<br>É <em>demanda</em>' },
    { img:'assets/photos/publico-1.jpg',     kick:'Boa companhia',       html:'Ao lado das<br><em>maiores do Brasil</em>' },
    { img:'assets/photos/feira-2.jpg',       kick:'Visibilidade',        html:'Sua marca<br>em <em>destaque</em>' }
  ];
  const mvTrack = document.getElementById('mvTrack');
  MOTIVOS.forEach(m => {
    const c = document.createElement('div'); c.className = 'mv-card';
    c.innerHTML = `<img src="${R(m.img)}" alt="" loading="lazy"><div class="scrim"></div><div class="body"><div class="mv-kick">${m.kick}</div><div class="mv-title">${m.html}</div></div>`;
    mvTrack.appendChild(c);
  });
  function mvScroll(d){ mvTrack.scrollBy({ left: d * 318, behavior: 'smooth' }); }

  /* ---- Estandes carousel (fotos de estandes prontos) ---- */
  const STANDS = [
    'assets/stands/stand-1.webp','assets/stands/stand-2.webp','assets/stands/stand-3.webp',
    'assets/stands/stand-4.webp','assets/stands/stand-5.webp','assets/stands/stand-6.webp','assets/stands/stand-7.webp'
  ];
  const stTrack = document.getElementById('stTrack');
  STANDS.forEach(src => {
    const c = document.createElement('div'); c.className = 'st-card';
    const img = document.createElement('img'); img.src = R(src); img.alt = 'Estande pronto RH Summit'; img.loading = 'lazy';
    c.appendChild(img); stTrack.appendChild(c);
  });
  function stScroll(d){ stTrack.scrollBy({ left: d * 358, behavior: 'smooth' }); }

  /* ---- Lead form ---- */
  function submitLead(e){
    e.preventDefault();
    const f = e.target;
    const nome = encodeURIComponent((f.nome.value || '').split(' ')[0] || '');
    window.location.href = 'obrigado.html?nome=' + nome;
    return false;
  }

  /* ---- Lead modal (CTAs distribuídos pela página abrem o mesmo formulário em pop-up) ---- */
  function openLeadModal(tier){
    const modal = document.getElementById('leadModal');
    if (!modal) return;
    const tierField = modal.querySelector('input[name="cota"]');
    if (tierField) tierField.value = tier || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('input[name="nome"]');
    if (firstInput) setTimeout(() => firstInput.focus(), 50);
  }
  function closeLeadModal(){
    const modal = document.getElementById('leadModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLeadModal(); });
