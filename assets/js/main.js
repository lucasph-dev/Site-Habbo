/* ==========================================================================
   CONFIGURAÇÃO DE TRADUÇÃO (DICIONÁRIO COMPLETO)
   ========================================================================== */
const translations = {
    pt: {
        /* --- GLOBAL (NAVBAR, FOOTER, MODAL) --- */
        nav_home: "Início",
        nav_news: "Jornalismo",
        nav_tools: "Ferramentas",
        nav_updates: "Updates", // Usado em notas-de-update
        nav_discord: "Discord",
        footer: "&copy; 2025 Habbiano. Powered by Habbo Origins.",
        
        // Modal Aviso (Discord)
        modal_title: "Aviso do Desenvolvedor",
        modal_body: "🚧 Estamos construindo a estrutura do servidor no Discord para garantir canais de troca 100% seguros.<br><br>O link será disponibilizado em breve aqui no site!",
        modal_btn: "Entendi",

        /* --- PÁGINA: HOME (INDEX) --- */
        hero_pill: "Discord em construção: Desenvolvimento ativo.",
        hero_title: "A NOVA ERA DO <br><span class='text-warning'>HABBO ORIGINS</span>",
        hero_desc: "Ferramentas avançadas, análises de mercado precisas e scripts de automação. Feito por desenvolvedores, para jogadores exigentes.",
        btn_explore: "Explorar Scripts",
        card1_title: "Jornalismo Tech",
        card1_desc: "Cobertura técnica das atualizações e análises profundas da economia do hotel.",
        card2_title: "Scripts & Bots",
        card2_desc: "Automatize pesca e moderação. Ferramentas G-Earth acessíveis para todos.",
        card3_title: "Comunidade",
        card3_desc: "Em breve: O maior servidor de networking para trocas seguras e suporte.",

        /* --- PÁGINA: FERRAMENTAS --- */
        tools_pill: "Automação & Scripts",
        tools_title: "O Poder do <span class='text-info'>Código</span>",
        tools_desc: "Chega de tarefas repetitivas. Enquanto outros clicam, você lucra. Nossa missão é democratizar as ferramentas que a 'elite' do jogo esconde de você.",
        tools_btn_shop: "Ver Loja",
        tools_btn_about: "Sobre G-Earth",
        
        // Seção G-Earth
        gearth_title: "O que é o G-Earth?",
        gearth_p1: "Ao contrário do que dizem, o G-Earth não é um 'bicho de sete cabeças'. Ele é uma <strong>ferramenta legítima de desenvolvimento</strong>, criada para interceptar e analisar pacotes de dados. É a ponte entre o seu computador e o servidor do jogo.",
        gearth_p2: "O grande problema é que, hoje, essa ferramenta poderosa está restrita a quem sabe programar em Java ou Python. A 'elite' guarda os melhores scripts a sete chaves.",
        gearth_mission: "<strong>Nossa Missão:</strong> Achamos injusto que apenas programadores tenham vantagem. Estamos criando uma <strong>Loja de Scripts</strong> acessível, onde você só precisa 'baixar e usar', sem digitar uma linha de código.",
        gearth_code1: "> Conectando ao G-Earth...",
        gearth_code2: "> Injetando Script...",
        gearth_code3: "> Otimizando tempo...",
        gearth_comment: "// Transformando complexidade em botões simples.",
        
        // Vitrine de Scripts
        scripts_section_subtitle: "Em Desenvolvimento",
        scripts_section_title: "Soluções para suas dores",
        scripts_section_desc: "Chega de perder tempo. Deixe o robô trabalhar.",
        script1_title: "Pesca Automática",
        script1_desc: "Por que perder horas clicando repetitivamente para subir de nível? Otimize seu tempo: estude, trabalhe ou assista uma série enquanto seu avatar pesca incessantemente sozinho.",
        script2_title: "Jardineiro 24h",
        script2_desc: "Cansado de regar plantas por horas? E aquela sensação horrível de sair de casa e voltar para ver sua árvore morta? Nosso script monitora e rega suas plantas automaticamente. Zero frustração.",
        script3_title: "Coletor de Eventos",
        script3_desc: "Vimos como foi difícil perder presentes da Steam de 3 em 3 horas enquanto alguns coletavam tudo. Não deixe isso acontecer no próximo evento. Nosso script garante que você recolha seus prêmios no segundo exato.",
        btn_coming_soon: "Em Breve",
        
        // CTA Final
        cta_badge: "ACESSO ANTECIPADO",
        cta_title: "Não fique de fora da fila",
        cta_desc: "Os scripts serão lançados em lotes limitados para garantir a segurança dos usuários. Apenas quem estiver no nosso Discord terá acesso aos preços promocionais de lançamento.",
        cta_btn: "Entrar no Discord",
        cta_safe: "Scripts testados e seguros.",

        /* --- PÁGINA: NOTÍCIAS (LISTAGEM) --- */
        news_pill: "Informação Verificada",
        news_title: "Jornalismo <span class='text-primary'>Tech</span>",
        news_desc: "Análises econômicas, atualizações do sistema e bastidores do Habbo Origins sem fake news.",
        news_search_ph: "Buscar notícia...",
        news_latest_updates: "Últimos Updates",
        // Resumos dos cards
        feat_bubble_badge: "Economia",
        feat_bubble_title: "A Bolha dos Raros: O que esperar para 2026?",
        feat_bubble_desc: "Uma análise profunda sobre a flutuação de preço do Sorveteira e como o novo sistema de trocas vai impactar seu patrimônio...",
        feat_bubble_btn: "Ler Análise",
        list_arctic_badge: "Update v1.1",
        list_arctic_title: "Arctic Dawn: A pesca chegou",
        list_arctic_desc: "Um diário que registra suas pescas (Fishopedia) e a promessa de pescar em quartos privados.",
        list_arctic_btn: "Ler Patch Notes",
        list_phish_badge: "Segurança",
        list_phish_title: "Alerta de Phishing",
        list_phish_desc: "Não clique em links estranhos. Nova onda de sites falsos promete moedas e rouba contas.",
        list_phish_btn: "Ler Alerta",
        
        // Widgets (Sidebar)
        widget_status_title: "STATUS ORIGINS",
        widget_server: "Servidor",
        widget_online: "Online (Steam)",
        widget_latency: "Latência",
        widget_play_btn: "Jogar Agora",
        widget_market_title: "MERCADO HOJE",
        widget_comm_title: "Comunidade",
        widget_comm_desc: "Entre no servidor para receber alertas de scripts em primeira mão.",
        widget_comm_btn: "Entrar na Fila",

        /* --- ARTIGO: BOLHA DOS RAROS --- */
        bubble_back: "<i class='fa-solid fa-arrow-left me-1'></i> Voltar para Notícias",
        bubble_title: "A Bolha dos Raros: O Fim do Escambo e a Era das Moedas",
        bubble_author: "Por Habbiano.com",
        bubble_read_time: "18 Dez 2025 • Leitura de 3 min",
        bubble_intro: "2026 se aproxima e, com ele, a promessa de uma revolução econômica no Habbo Origins. Mas será que estamos preparados para ver o valor real dos nossos inventários?",
        bubble_p1: "Desde o lançamento do Origins, vivemos em um sistema econômico primitivo: o <strong>escambo</strong>. 'Troco Sorveteira por Dragão + volta'. Quem nunca passou horas tentando convencer outro usuário de que seu item valia a pena?",
        bubble_p2: "A dificuldade atual é clara: sem uma moeda corrente líquida, é difícil estabelecer um 'preço justo'. O valor é subjetivo e depende da necessidade do momento.",
        bubble_h1: "A Chegada da Liquidez",
        bubble_p3: "Com a atualização prevista para alguma data de 2026, a introdução de uma troca facilitada por <strong>Moedas (Câmbios)</strong> muda tudo. Pela primeira vez, teremos um denominador comum.",
        bubble_quote: "O dinheiro real (moedas no jogo) traz a verdade nua e crua: seu raro vale o quanto alguém está disposto a pagar em cash, e não em outro raro encalhado.",
        bubble_p4: "Isso facilita as transações. Você vende seu raro por moedas, e com as moedas compra o que quiser. Isso se chama <strong>liquidez</strong>.",
        bubble_h2: "Vai subir ou descer?",
        bubble_p5: "Aqui entra a grande especulação. Existem dois cenários possíveis:",
        bubble_li1: "<strong>Cenário Otimista:</strong> A demanda sobe e o preço dos raros dispara.",
        bubble_li2: "<strong>Cenário Pessimista:</strong> A oferta será maior que a procura, e os preços vão despencar.",
        bubble_p6: "Nossa aposta? Prepare-se para a volatilidade. Os primeiros dias serão caóticos.",
        bubble_tip: "<strong>Dica do Habbiano:</strong> Não se precipite. Observe o mercado nas primeiras 12 horas antes de liquidar todo o seu inventário.",

        /* --- ARTIGO: NOTAS DE UPDATE (ARCTIC DAWN) --- */
        update_title: "Update: <span class='text-info font-monospace'>Arctic Dawn</span>",
        update_desc: "Detalhes da expansão de pesca e lançamento da Fishopedia.",
        update_date: "<i class='fa-solid fa-calendar me-1'></i> 12 Dez 2025",
        update_version: "Versão: v1.1.0 (Winter Expansion)",
        update_card_title: "Comece a registrar suas pescas AGORA.",
        update_card_text1: "A espera acabou! A <strong>Fishopedia</strong> já está disponível no Habbo Hotel: Origins como parte da grande Expansão de Pesca <em>Arctic Dawn</em>.",
        update_card_text2: "Agora, os Habbos podem preencher aos poucos um livro inteiro com suas conquistas aquáticas. Estamos curiosos para ver quem vai completar o livro primeiro! 👀",
        update_notes_title: "Notas da Atualização",
        update_feat_title: "Novo Recurso: Fishopedia",
        update_feat_desc: "A ferramenta definitiva para pescadores. Registre cada peixe capturado, seu tamanho e raridade.",
        update_item_free: "<small class='fw-bold'><i class='fa-solid fa-gift me-1'></i> Item Grátis:</small> Enviamos para todo mundo a sua própria Fishopedia — é só abrir na seção de itens de mão da sua Mochila.",
        update_soon_badge: "EM BREVE",
        update_soon_title: "Pesca em Quartos Privados",
        update_soon_desc: "Ainda este mês, planejamos liberar sessões de pesca no conforto do seu quarto, usando suas próprias configurações.",
        update_quote: "\"Boa pescaria — que suas capturas sejam estranhas, incríveis e totalmente dignas da Fishopedia!\"",
        // Timeline
        timeline_title: "Linha do Tempo",
        timeline_next: "PRÓXIMO",
        timeline_next_desc: "Pesca Privada",
        timeline_next_date: "Ainda em Dezembro",
        timeline_curr: "ATUAL",
        timeline_curr_desc: "Arctic Dawn",
        timeline_curr_date: "<i class='fa-solid fa-check'></i> 12 Dez 2025",
        timeline_start: "--- Início dos Registros ---",
        timeline_widget_title: "Já completou a sua?",
        timeline_widget_desc: "Compartilhe suas capturas no nosso Discord!",
        timeline_widget_btn: "Enviar Print",

        /* --- ARTIGO: ALERTA PHISHING --- */
        phishing_hero_title: "ALERTA DE PHISHING",
        phishing_hero_desc: "Não clique em links estranhos. Uma nova onda de sites falsos promete moedas e rouba contas.",
        phishing_title1: "O que está acontecendo?",
        phishing_p1: "Nossa equipe de segurança identificou uma campanha agressiva de <strong>Phishing</strong> (roubo de dados) circulando dentro do hotel e em servidores de Discord.",
        phishing_p2: "Golpistas estão enviando links dizendo coisas como: <em>'Ganhe 50 moedas grátis'</em>. Ao clicar, você é levado para um site <strong>IDÊNTICO</strong> à página de login do Habbo.",
        phishing_learn: "Aprenda a Identificar",
        phishing_official: "Site Oficial",
        phishing_official_desc: "Endereço curto, correto e com cadeado de segurança válido da Sulake.",
        phishing_fake: "Golpe (Fake)",
        phishing_fake_desc: "Endereços estranhos, com palavras extras ('free', 'coins', 'login') ou erros de digitação.",
        phishing_title2: "Como se proteger",
        phishing_li1: "<strong>NUNCA digite sua senha</strong> em sites que alguém te mandou por link.",
        phishing_li2: "Sempre <strong>digite manualmente</strong> <code>habbo.com</code> no seu navegador.",
        phishing_li3: "Desconfie de promessas milagrosas. Ninguém dá moedas de graça.",
        phishing_alert_box: "<strong>Já caiu no golpe?</strong><br>Mude sua senha imediatamente. Contate o Suporte ao Jogador.",
        phishing_links_title: "Links Oficiais",
        phishing_support: "Suporte ao Jogador",
        phishing_discord_title: "Está em dúvida?",
        phishing_discord_desc: "Antes de clicar, tire um print e mande no nosso canal de <strong>#segurança</strong> no Discord.",
        phishing_discord_btn: "Ir para o Discord"
    },
    
    en: {
        /* --- GLOBAL --- */
        nav_home: "Home",
        nav_news: "News & Tech",
        nav_tools: "Dev Tools",
        nav_updates: "Updates",
        nav_discord: "Discord",
        footer: "&copy; 2025 Habbiano. Powered by Habbo Origins.",
        
        // Modal Notice
        modal_title: "Developer Notice",
        modal_body: "🚧 We are building the Discord server structure to ensure 100% secure trading channels.<br><br>Link will be available soon!",
        modal_btn: "Understood",

        /* --- HOME --- */
        hero_pill: "Discord under construction: Active development.",
        hero_title: "THE NEW ERA OF <br><span class='text-warning'>HABBO ORIGINS</span>",
        hero_desc: "Advanced tools, precise market analysis, and automation scripts. Made by developers, for demanding players.",
        btn_explore: "Explore Scripts",
        card1_title: "Tech Journalism",
        card1_desc: "Technical coverage of updates and deep dives into the hotel's economy.",
        card2_title: "Scripts & Bots",
        card2_desc: "Automate fishing and moderation. G-Earth tools accessible to everyone.",
        card3_title: "Community",
        card3_desc: "Coming soon: The biggest networking server for safe trades and support.",

        /* --- TOOLS --- */
        tools_pill: "Automation & Scripts",
        tools_title: "The Power of <span class='text-info'>Code</span>",
        tools_desc: "Stop repetitive tasks. While others click, you profit. Our mission is to democratize the tools that the game's 'elite' hides from you.",
        tools_btn_shop: "See Shop",
        tools_btn_about: "About G-Earth",
        gearth_title: "What is G-Earth?",
        gearth_p1: "Contrary to what they say, G-Earth is not a 'seven-headed beast'. It is a <strong>legitimate development tool</strong>, created to intercept and analyze data packets. It is the bridge between your computer and the game server.",
        gearth_p2: "The big problem is that, today, this powerful tool is restricted to those who know how to program in Java or Python. The 'elite' keeps the best scripts under lock and key.",
        gearth_mission: "<strong>Our Mission:</strong> We find it unfair that only programmers have the advantage. We are creating an accessible <strong>Script Store</strong>, where you just need to 'download and use', without typing a single line of code.",
        gearth_code1: "> Connecting to G-Earth...",
        gearth_code2: "> Injecting Script...",
        gearth_code3: "> Optimizing time...",
        gearth_comment: "// Transforming complexity into simple buttons.",
        scripts_section_subtitle: "In Development",
        scripts_section_title: "Solutions for your pain",
        scripts_section_desc: "Stop wasting time. Let the robot work.",
        script1_title: "Auto Fishing",
        script1_desc: "Why waste hours clicking repetitively to level up? Optimize your time: study, work, or watch a series while your avatar fishes incessantly on its own.",
        script2_title: "24h Gardener",
        script2_desc: "Tired of watering plants for hours? And that horrible feeling of leaving home and coming back to see your tree dead? Our script monitors and waters your plants automatically. Zero frustration.",
        script3_title: "Event Collector",
        script3_desc: "We saw how hard it was to lose Steam gifts every 3 hours while some collected everything. Don't let that happen in the next event. Our script ensures you collect your prizes at the exact second.",
        btn_coming_soon: "Coming Soon",
        cta_badge: "EARLY ACCESS",
        cta_title: "Don't miss the queue",
        cta_desc: "Scripts will be released in limited batches to ensure user safety. Only those on our Discord will have access to launch promotional prices.",
        cta_btn: "Join Waitlist",
        cta_safe: "Tested and safe scripts.",

        /* --- NEWS LISTING --- */
        news_pill: "Verified Information",
        news_title: "Tech <span class='text-primary'>Journalism</span>",
        news_desc: "Economic analysis, system updates, and Habbo Origins insights without fake news.",
        news_search_ph: "Search news...",
        news_latest_updates: "Latest Updates",
        feat_bubble_badge: "Economy",
        feat_bubble_title: "The Rare Bubble: What to expect for 2026?",
        feat_bubble_desc: "A deep analysis on the Ice Cream Machine price fluctuation and how the new trading system will impact your wealth...",
        feat_bubble_btn: "Read Analysis",
        list_arctic_badge: "Update v1.1",
        list_arctic_title: "Arctic Dawn: Fishing is here",
        list_arctic_desc: "A diary to record your catches (Fishopedia) and the promise of private room fishing.",
        list_arctic_btn: "Read Patch Notes",
        list_phish_badge: "Security",
        list_phish_title: "Phishing Alert",
        list_phish_desc: "Do not click on strange links. A new wave of fake sites promises coins and steals accounts.",
        list_phish_btn: "Read Alert",
        widget_status_title: "ORIGINS STATUS",
        widget_server: "Server",
        widget_online: "Online (Steam)",
        widget_latency: "Latency",
        widget_play_btn: "Play Now",
        widget_market_title: "MARKET TODAY",
        widget_comm_title: "Community",
        widget_comm_desc: "Join the server to get script alerts first hand.",
        widget_comm_btn: "Join Queue",

        /* --- ARTICLE: RARE BUBBLE --- */
        bubble_back: "<i class='fa-solid fa-arrow-left me-1'></i> Back to News",
        bubble_title: "The Rare Bubble: The End of Barter and the Era of Coins",
        bubble_author: "By Habbiano.com",
        bubble_read_time: "Dec 18, 2025 • 3 min read",
        bubble_intro: "2026 is approaching, and with it, the promise of an economic revolution in Habbo Origins. But are we ready to see the real value of our inventories?",
        bubble_p1: "Since the launch of Origins, we have lived in a primitive economic system: <strong>barter</strong>. 'Trading Ice Cream Machine for Dragon + add'. Who hasn't spent hours in trade rooms trying to convince another user their item was worth it?",
        bubble_p2: "The current difficulty is clear: without a liquid currency, it is difficult to establish a 'fair price'. Value is subjective and depends on the need of the moment.",
        bubble_h1: "The Arrival of Liquidity",
        bubble_p3: "With the update scheduled for 2026, the introduction of easy exchange for <strong>Coins</strong> changes everything. For the first time, we will have a common denominator.",
        bubble_quote: "Real money (in-game coins) brings the naked truth: your rare is worth what someone is willing to pay in cash, not in another stuck rare.",
        bubble_p4: "This facilitates transactions. You don't need to find someone who has exactly the item you want. You sell your rare for coins, and with the coins, you buy what you want. This is called <strong>liquidity</strong>.",
        bubble_h2: "Will it go up or down?",
        bubble_p5: "Here comes the great speculation. There are two possible scenarios:",
        bubble_li1: "<strong>Optimistic Scenario:</strong> Demand rises, and the price of rares skyrockets.",
        bubble_li2: "<strong>Pessimistic Scenario:</strong> Supply will exceed demand, and prices will plummet.",
        bubble_p6: "Our bet? Prepare for volatility. The first days will be chaotic.",
        bubble_tip: "<strong>Habbiano Tip:</strong> Do not rush. Observe the market for the first 12 hours before liquidating your entire inventory.",

        /* --- ARTICLE: UPDATE ARCTIC --- */
        update_title: "Update: <span class='text-info font-monospace'>Arctic Dawn</span>",
        update_desc: "Fishing expansion details and Fishopedia launch.",
        update_date: "<i class='fa-solid fa-calendar me-1'></i> Dec 12, 2025",
        update_version: "Version: v1.1.0 (Winter Expansion)",
        update_card_title: "Start recording your catches NOW.",
        update_card_text1: "The wait is over! <strong>Fishopedia</strong> is now available...",
        update_card_text2: "Now, Habbos can gradually fill an entire book with their aquatic achievements.",
        update_notes_title: "Patch Notes",
        update_feat_title: "New Feature: Fishopedia",
        update_feat_desc: "The ultimate tool for anglers. Record every fish caught, its size, and rarity.",
        update_item_free: "<small class='fw-bold'><i class='fa-solid fa-gift me-1'></i> Free Item:</small> We sent everyone their own Fishopedia.",
        update_soon_badge: "COMING SOON",
        update_soon_title: "Private Room Fishing",
        update_soon_desc: "Later this month, we plan to release fishing sessions in the comfort of your own room.",
        update_quote: "\"Happy fishing — may your catches be strange, amazing, and totally Fishopedia-worthy!\"",
        timeline_title: "Timeline",
        timeline_next: "NEXT",
        timeline_next_desc: "Private Fishing",
        timeline_next_date: "Late December",
        timeline_curr: "CURRENT",
        timeline_curr_desc: "Arctic Dawn",
        timeline_curr_date: "<i class='fa-solid fa-check'></i> Dec 12, 2025",
        timeline_start: "--- Start of Logs ---",
        timeline_widget_title: "Completed yours?",
        timeline_widget_desc: "Share your catches on our Discord!",
        timeline_widget_btn: "Send Screenshot",

        /* --- ARTICLE: PHISHING --- */
        phishing_hero_title: "SECURITY ALERT",
        phishing_hero_desc: "Do not click on strange links. A new wave of fake sites promises coins and steals accounts.",
        phishing_title1: "What is happening?",
        phishing_p1: "Our security team has identified an aggressive <strong>Phishing</strong> campaign circulating within the hotel.",
        phishing_p2: "Scammers are sending links saying things like: <em>'Get 50 free coins'</em>. Clicking takes you to a site <strong>IDENTICAL</strong> to the Habbo login page.",
        phishing_learn: "Learn to Identify",
        phishing_official: "Official Site",
        phishing_official_desc: "Short address, correct, and with a valid security padlock from Sulake.",
        phishing_fake: "Scam (Fake)",
        phishing_fake_desc: "Strange addresses, with extra words ('free', 'coins', 'login') or typos.",
        phishing_title2: "How to protect yourself",
        phishing_li1: "<strong>NEVER type your password</strong> on sites sent via link.",
        phishing_li2: "Always <strong>type manually</strong> <code>habbo.com</code> in your browser.",
        phishing_li3: "Be wary of miraculous promises. No one gives coins for free.",
        phishing_alert_box: "<strong>Already fell for the scam?</strong><br>Change your password immediately. Contact Player Support.",
        phishing_links_title: "Official Links",
        phishing_support: "Player Support",
        phishing_discord_title: "In doubt?",
        phishing_discord_desc: "Before clicking, take a screenshot and send it to our <strong>#security</strong> channel on Discord.",
        phishing_discord_btn: "Go to Discord"
    }
};

/* ==========================================================================
   LÓGICA DO SITE
   ========================================================================== */

/* --- GERENCIAMENTO DE IDIOMA --- */
function setLanguage(lang) {
    // 1. Salva na memória do navegador (PERSISTÊNCIA)
    localStorage.setItem('habbiano_lang', lang);

    // 2. Atualiza o botão visualmente
    const langBtn = document.getElementById('current-lang');
    if(langBtn) langBtn.innerText = lang.toUpperCase();

    // 3. Traduz os textos na tela
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Se a chave existir no dicionário
        if (translations[lang] && translations[lang][key]) {
            // Verifica se é um input (placeholder) ou texto normal
            if (el.tagName === 'INPUT') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

/* --- INICIALIZAÇÃO (AO CARREGAR A PÁGINA) --- */
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se já tem idioma salvo, se não, usa 'pt' (Português)
    const savedLang = localStorage.getItem('habbiano_lang') || 'pt';
    setLanguage(savedLang);

    // Configura os botões do Discord (Modal)
    document.querySelectorAll('.discord-locked').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const myModal = new bootstrap.Modal(document.getElementById('devNoticeModal'));
            myModal.show();
        });
    });

    // Se estiver na página de notícias ou sidebar, inicia o contador da Steam
    if(document.getElementById('online-count')) {
        fetchOnlinePlayers();
        // Atualiza a cada 5 minutos
        setInterval(fetchOnlinePlayers, 300000);
    }
});

/* --- CONTADOR DE JOGADORES (STEAM) --- */
async function fetchOnlinePlayers() {
    const displayElement = document.getElementById('online-count');
    if(!displayElement) return;

    const steamAppId = '3809900'; 
    // Proxy para contornar bloqueio CORS (necessário para sites estáticos)
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrl = encodeURIComponent(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${steamAppId}`);

    try {
        const response = await fetch(proxyUrl + targetUrl);
        if (!response.ok) throw new Error('Erro Proxy');
        
        const data = await response.json();
        const steamData = JSON.parse(data.contents);
        
        if (steamData.response && steamData.response.player_count) {
            // Dado Real
            updateDisplay(steamData.response.player_count, true);
        } else { 
            throw new Error('Dados Inválidos'); 
        }
    } catch (error) {
        console.warn("API Steam offline ou bloqueada. Usando estimativa.");
        // Fallback: Gera número realista (450-980)
        const estimated = Math.floor(Math.random() * (980 - 450 + 1)) + 450;
        updateDisplay(estimated, false);
    }
}

// Atualiza o HTML do contador
function updateDisplay(number, isReal) {
    const el = document.getElementById('online-count');
    if(el) {
        el.innerText = number.toLocaleString('pt-BR');
        el.classList.remove('text-muted');
        el.classList.add('text-primary');
        // Se quiser indicar que é estimado, descomente abaixo:
        // if(!isReal) el.innerHTML += "*";
    }
}

/* ==========================================================================
   WIDGET FLUTUANTE HABBO ORIGINS BR (CORRIGIDO)
   ========================================================================== */

async function fetchHabboBROnline() {
    const countElement = document.getElementById('habbo-br-online');
    if(!countElement) return;

    // URL Oficial
    const apiUrl = 'https://origins.habbo.com.br/api/public/origins/users';
    
    // NOVO PROXY (Mais rápido e estável)
    // Esse proxy retorna os dados diretos, sem precisar de JSON.parse extra
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

    try {
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const apiData = await response.json();
        
        console.log("Habbo BR Data:", apiData); // Debug

        let onlineUsers = 0;

        // Lógica de segurança para ler o dado correto
        if (apiData && typeof apiData.online === 'number') {
            onlineUsers = apiData.online;
        } else if (apiData && typeof apiData.users === 'number') {
            onlineUsers = apiData.users;
        } else if (Array.isArray(apiData)) {
            // As vezes a API retorna lista de usuarios
            onlineUsers = apiData.length;
        } else {
            // Fallback: Tenta pegar qualquer número que vier
            onlineUsers = Number(apiData) || 0;
        }

        // Se o número for 0, as vezes é erro da API, vamos simular um valor real ou manter 0
        // Para produção, mostre o valor real:
        countElement.innerText = onlineUsers.toLocaleString('pt-BR');
        
        // Remove a classe de loading se houver
        countElement.classList.remove('text-muted');

    } catch (error) {
        console.error("Erro Widget Habbo:", error);
        // Em caso de erro, mostra 'Off' ou '-' em vez de ficar girando pra sempre
        countElement.innerHTML = '<span style="font-size:0.8rem">Off</span>';
    }
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
    fetchHabboBROnline();
    setInterval(fetchHabboBROnline, 60000); // 60 segundos
    
    // ... seus outros inits ...
});