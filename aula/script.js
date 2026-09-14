  // ===== Estado do stepper de seções =====
  const track = document.getElementById('track');
  const sections = document.querySelectorAll('section');
  const totalSections = sections.length;
  let activeIndex = 0;

  const dotsContainer = document.getElementById('dots');
  const dotButtons = [];
  for (let i = 0; i < totalSections; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', 'ir para seção ' + (i + 1));
    dot.addEventListener('click', () => goToSection(i));
    dotsContainer.appendChild(dot);
    dotButtons.push(dot);
  }

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentLabel = document.getElementById('current');

  function goToSection(index) {
    if (index < 0 || index >= totalSections) return;

    sections[activeIndex].classList.remove('active');
    activeIndex = index;
    sections[activeIndex].classList.add('active');

    // cada passo desce uma tela cheia (100vh) + o afastamento entre seções
    const gapValue = getComputedStyle(document.documentElement).getPropertyValue('--gap-vh');
    const offsetVh = activeIndex * (100 + parseFloat(gapValue));
    track.style.transform = 'translateY(-' + offsetVh + 'vh)';

    dotButtons.forEach((dot, i) => dot.classList.toggle('on', i === activeIndex));
    prevBtn.disabled = activeIndex === 0;
    nextBtn.disabled = activeIndex === totalSections - 1;
    currentLabel.textContent = String(activeIndex + 1).padStart(2, '0');

    if (activeIndex === PRACTICE_INDEX) {
      startPracticeDemos();
    } else {
      clearPracticeTimers();
    }
  }

  prevBtn.addEventListener('click', () => goToSection(activeIndex - 1));
  nextBtn.addEventListener('click', () => goToSection(activeIndex + 1));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') goToSection(activeIndex + 1);
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') goToSection(activeIndex - 1);
  });

  // ===== Seção "na prática": três demos animados =====
  const PRACTICE_INDEX = Array.from(sections).indexOf(document.getElementById('s5'));
  let practiceTimers = [];

  function clearPracticeTimers() {
    practiceTimers.forEach(id => clearTimeout(id));
    practiceTimers.forEach(id => clearInterval(id));
    practiceTimers = [];
  }

  function typeInto(el, text, delay, onDone) {
    el.textContent = '';
    const caret = document.createElement('span');
    caret.className = 'caret';
    el.appendChild(caret);
    let i = 0;
    const step = () => {
      if (i < text.length) {
        caret.insertAdjacentText('beforebegin', text[i]);
        i++;
        practiceTimers.push(setTimeout(step, delay));
      } else if (onDone) {
        onDone();
      }
    };
    step();
  }

  function runLoginDemo() {
    const userField = document.getElementById('demo-login-user');
    const passField = document.getElementById('demo-login-pass');
    const btn = document.getElementById('demo-login-btn');
    btn.classList.remove('pulse');

    typeInto(userField, 'ana.silva@email.com', 55, () => {
      practiceTimers.push(setTimeout(() => {
        typeInto(passField, '••••••••', 90, () => {
          practiceTimers.push(setTimeout(() => btn.classList.add('pulse'), 350));
        });
      }, 400));
    });
  }

  const produtosBusca = [
    { nome: 'Tênis Runner', chave: 'tênis' },
    { nome: 'Camiseta Básica', chave: 'camiseta' },
    { nome: 'Tênis Skate', chave: 'tênis' },
    { nome: 'Bermuda Jeans', chave: 'bermuda' },
    { nome: 'Boné Trucker', chave: 'boné' },
    { nome: 'Tênis Casual', chave: 'tênis' },
  ];

  function runSearchDemo() {
    const chipContainer = document.getElementById('demo-search-chips');
    const searchField = document.getElementById('demo-search-input');
    chipContainer.innerHTML = '';
    const chips = produtosBusca.map(p => {
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.textContent = p.nome;
      chipContainer.appendChild(chip);
      return chip;
    });

    typeInto(searchField, 'tênis', 140, null);

    // reaplica o filtro a cada letra digitada, junto com a animação de digitação
    let typed = '';
    const target = 'tênis';
    let idx = 0;
    const filterStep = () => {
      idx++;
      typed = target.slice(0, idx);
      chips.forEach((chip, i) => {
        const combina = produtosBusca[i].chave.startsWith(typed) || produtosBusca[i].chave === typed;
        const parcial = produtosBusca[i].chave.indexOf(typed) === 0;
        chip.classList.toggle('match', parcial && typed.length > 0);
        chip.classList.toggle('hide', typed.length > 0 && !parcial);
      });
      if (idx < target.length) practiceTimers.push(setTimeout(filterStep, 140));
    };
    filterStep();
  }

  const techPool = ['JavaScript', 'Python', 'React', 'Django', 'Node.js', 'TypeScript', 'PostgreSQL'];

  function runTechCarousel() {
    const slotsContainer = document.getElementById('demo-tech-slots');
    let start = 0;

    const render = () => {
      slotsContainer.innerHTML = '';
      for (let i = 0; i < 3; i++) {
        const name = techPool[(start + i) % techPool.length];
        const slot = document.createElement('div');
        slot.className = 'tech-slot';
        slot.innerHTML = '<span>' + name + '</span>';
        slotsContainer.appendChild(slot);
      }
    };

    render();
    const interval = setInterval(() => {
      start = (start + 1) % techPool.length;
      render();
    }, 1600);
    practiceTimers.push(interval);
  }

  function startPracticeDemos() {
    clearPracticeTimers();
    runLoginDemo();
    runSearchDemo();
    runTechCarousel();
  }

  goToSection(0);

  // ===== Playground da seção JS: transforma o que a pessoa digita =====
  const playgroundInput = document.getElementById('playground-input');
  const playgroundOutput = document.getElementById('playground-output');
  const playgroundMeta = document.getElementById('playground-meta');

  playgroundInput.addEventListener('input', () => {
    const valor = playgroundInput.value;

    if (valor === '') {
      playgroundOutput.textContent = 'a transformação aparece aqui';
      playgroundMeta.textContent = '0 caracteres';
      return;
    }

    const invertido = valor.split('').reverse().join('');
    playgroundOutput.textContent = invertido;
    playgroundMeta.textContent = valor.length + ' caracteres · isso é uma decisão de lógica, não de estilo';
  });