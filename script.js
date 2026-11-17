function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(t => t.classList.add('hidden'));

  document.getElementById('tab-' + tabId).classList.remove('hidden');

  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.classList.remove('bg-purple-50', 'text-brandPurple');
    btn.classList.add('text-gray-600', 'hover:bg-gray-100');
  });

  if(tabId === 'home') {
    const btn = document.getElementById('nav-home');
    if(btn) { btn.classList.add('bg-purple-50', 'text-brandPurple'); btn.classList.remove('text-gray-600'); }
  } else if(tabId === 'about') {
    const btn = document.getElementById('nav-about');
    if(btn) { btn.classList.add('bg-purple-50', 'text-brandPurple'); btn.classList.remove('text-gray-600'); }
  } else if(tabId === 'safety') {
    const btn = document.getElementById('nav-safety');
    if(btn) { btn.classList.add('bg-purple-50', 'text-brandPurple'); btn.classList.remove('text-gray-600'); }
  } else if(tabId === 'games') {
    const btn = document.getElementById('nav-games');
    if(btn) { btn.classList.add('bg-pink-50', 'text-brandPink'); btn.classList.remove('text-gray-600'); }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

const quizData = [
  {
    question: "Um colega criou um grupo no WhatsApp só para rir e mandar figurinhas zoando a aparência de outro aluno da sala. O que você deve fazer?",
    options: [
      { text: "Não compartilhar, defender o colega ou sair do grupo, e avisar um adulto ou professor.", isCorrect: true, feedback: "Muito bem! Ter empatia, não espalhar ofensas e pedir ajuda a um adulto de confiança é atitude de um verdadeiro Herói da Web." },
      { text: "Rir junto e compartilhar as figurinhas para não ficar de fora.", isCorrect: false, feedback: "Cuidado! Participar e compartilhar ofensas também é praticar cyberbullying e machuca muito o colega." },
      { text: "Ficar quieto e fingir que nada está acontecendo.", isCorrect: false, feedback: "Ficar em silêncio deixa o agressor continuar. Pedir ajuda a um adulto de confiança ajuda a proteger o colega." }
    ]
  },
  {
    question: "Você está jogando online e alguém que você não conhece pede seu endereço, o nome da sua escola ou uma foto sua em troca de moedas no jogo. Qual é a atitude segura?",
    options: [
      { text: "Passar só o nome da escola para ganhar as moedas.", isCorrect: false, feedback: "Nunca passe nenhum dado pessoal! Informações como escola, endereço ou fotos colocam sua segurança em risco." },
      { text: "Mandar uma foto antiga para enganar a pessoa.", isCorrect: false, feedback: "Mesmo uma foto antiga não deve ser enviada para desconhecidos. O seguro é bloquear e avisar um adulto." },
      { text: "Recusar na hora, bloquear o usuário e contar para seus pais ou responsáveis.", isCorrect: true, feedback: "Perfeito! Na internet, nunca compartilhamos dados pessoais ou fotos com estranhos. Bloquear e avisar os pais é sempre a escolha certa." }
    ]
  },
  {
    question: "Você entrou em um grupo de chat da escola e percebeu que alguns colegas estão fazendo piadas maldosas sobre a roupa de um aluno. O que você deve fazer?",
    options: [
      { text: "Dar risada junto para não ficar de fora do grupo.", isCorrect: false, feedback: "Dar risada incentiva o agressor. O melhor é não participar de brincadeiras que machucam os outros." },
      { text: "Não responder às ofensas, tirar print e avisar um adulto de confiança.", isCorrect: true, feedback: "Excelente escolha! Salvar as provas e pedir ajuda a um adulto protege quem está sofrendo a agressão." },
      { text: "Responder xingando todo mundo com letras maiúsculas.", isCorrect: false, feedback: "Responder com mais violência só aumenta a confusão. O ideal é manter a calma e procurar ajuda." }
    ]
  },
  {
    question: "Alguém que você não conhece na internet te mandou uma mensagem pedindo uma foto sua e o nome da sua escola. Qual é a atitude mais segura?",
    options: [
      { text: "Ignorar, não responder e contar imediatamente para os seus pais ou responsável.", isCorrect: true, feedback: "Perfeito! A segurança dos seus dados pessoais e de sua escola deve vir sempre em primeiro lugar." },
      { text: "Enviar a foto e conversar, parecia ser uma pessoa simpática.", isCorrect: false, feedback: "Nunca compartilhe fotos ou dados pessoais com desconhecidos na internet!" },
      { text: "Ficar com medo e apagar o aplicativo sem falar nada para ninguém.", isCorrect: false, feedback: "Apagar ajuda, mas é fundamental conversar com um adulto de confiança para que ele saiba o que aconteceu." }
    ]
  },
  {
    question: "Um colega novo na turma tem um jeito diferente de falar e alguns alunos estão rindo dele no recreio. O que você pode fazer?",
    options: [
      { text: "Ficar em silêncio e fingir que não vi nada.", isCorrect: false, feedback: "O silêncio pode fazer o agressor achar que tudo bem. Mostrar apoio a quem precisa faz toda a diferença." },
      { text: "Falar dos defeitos dele também para se enturmar.", isCorrect: false, feedback: "Isso é bullying e machuca os sentimentos de outra pessoa. Seja sempre gentil!" },
      { text: "Convidar o colega para brincar com você e mostrar que ele é bem-vindo.", isCorrect: true, feedback: "Maravilhoso! A empatia e o respeito às diferenças são as maiores armas contra o bullying." }
    ]
  },
  {
    question: "Seu melhor amigo pede a senha do seu jogo e das suas redes sociais, dizendo que é 'prova de amizade'. O que você faz?",
    options: [
      { text: "Passar a senha, afinal ele é seu melhor amigo.", isCorrect: false, feedback: "Senha é segredo só seu! Mesmo amigos podem usar sua conta sem querer causar problemas ou até se chatear com você depois." },
      { text: "Explicar com educação que senha não se compartilha e que amizade de verdade respeita isso.", isCorrect: true, feedback: "Muito bem! Senhas só devem ser divididas com seus pais ou responsáveis. Um bom amigo entende." },
      { text: "Passar só a senha do jogo, que parece menos importante.", isCorrect: false, feedback: "Cuidado! Qualquer senha pode ser usada para fazer coisas em seu nome, e muita gente usa a mesma senha em vários lugares." }
    ]
  },
  {
    question: "Chegou no seu celular um vídeo de um colega passando vergonha, e todo mundo está repassando para rir. O que você deve fazer?",
    options: [
      { text: "Repassar só para uns poucos amigos, assim não espalha muito.", isCorrect: false, feedback: "Cada compartilhamento aumenta o sofrimento de quem aparece no vídeo. Na internet, 'só uns poucos' vira muitos rapidamente." },
      { text: "Mandar mensagem no grupo dizendo que o vídeo é engraçado.", isCorrect: false, feedback: "Incentivar o vídeo também é participar do cyberbullying, mesmo sem ter sido você quem gravou." },
      { text: "Não repassar, apagar o vídeo e contar para um adulto de confiança.", isCorrect: true, feedback: "Excelente! Quebrar a corrente de compartilhamento protege o colega, e o adulto pode ajudar a denunciar e remover o vídeo." }
    ]
  },
  {
    question: "Um perfil falso começou a mandar mensagens maldosas para você e você está com vergonha de contar para alguém. O que é melhor fazer?",
    options: [
      { text: "Não responder, tirar print, bloquear o perfil e contar para um adulto de confiança, mesmo com vergonha.", isCorrect: true, feedback: "Muito corajoso! Ter vergonha é normal, mas o erro nunca é seu. Contar para um adulto é o primeiro passo para resolver." },
      { text: "Guardar segredo e torcer para a pessoa parar sozinha.", isCorrect: false, feedback: "Guardar sozinho(a) costuma piorar a tristeza. Um adulto de confiança pode te ajudar de verdade." },
      { text: "Criar um perfil falso também para se vingar.", isCorrect: false, feedback: "Revidar do mesmo jeito só aumenta o problema e pode te colocar em encrenca. O caminho seguro é pedir ajuda." }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuizQuestion() {
  const q = quizData[currentQuestionIndex];
  document.getElementById('quiz-progress').innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizData.length}`;
  document.getElementById('quiz-score').innerText = `Pontos: ${score}`;
  document.getElementById('quiz-question-text').innerText = q.question;

  const optionsBox = document.getElementById('quiz-options');
  optionsBox.innerHTML = '';
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-question-box').classList.remove('hidden');

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = "w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-brandPurple hover:bg-purple-50 transition font-medium text-gray-700 flex items-center justify-between";
    btn.innerHTML = `<span>${opt.text}</span> <i class="fa-solid fa-chevron-right text-gray-400"></i>`;
    btn.onclick = () => selectQuizOption(opt.isCorrect, opt.feedback);
    optionsBox.appendChild(btn);
  });
}

function selectQuizOption(isCorrect, feedbackText) {
  document.getElementById('quiz-question-box').classList.add('hidden');
  const feedbackBox = document.getElementById('quiz-feedback');
  feedbackBox.classList.remove('hidden');

  const title = document.getElementById('feedback-title');
  const desc = document.getElementById('feedback-desc');

  if(isCorrect) {
    score += 10;
    title.innerHTML = '<span class="text-brandGreen"><i class="fa-solid fa-circle-check mr-2"></i> Muito bem! Escolha correta!</span>';
  } else {
    title.innerHTML = '<span class="text-brandPink"><i class="fa-solid fa-circle-xmark mr-2"></i> Quase lá! Vamos refletir sobre isso?</span>';
  }
  desc.innerText = feedbackText;
  document.getElementById('quiz-score').innerText = `Pontos: ${score}`;
}

function nextQuizQuestion() {
  currentQuestionIndex++;
  if(currentQuestionIndex < quizData.length) {
    loadQuizQuestion();
  } else {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-finished').classList.remove('hidden');
    document.getElementById('final-score-text').innerText = `Você concluiu os desafios com ${score} pontos e mostrou que entende tudo sobre respeito e segurança na internet!`;
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('quiz-finished').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  loadQuizQuestion();
}

window.onload = function() {
  loadQuizQuestion();
};
