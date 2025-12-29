document.addEventListener('DOMContentLoaded', () => {
    initParticulas();
    initScrollSuave();
    initAcordeon();
    initFiltros();
    initAnimacaoScroll();
    initMenuMobile();
});

function initMenuMobile() {
    const menuTrigger = document.getElementById('menuTrigger');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeDrawer = document.getElementById('closeDrawer');

    if (!menuTrigger || !mobileDrawer) return;

    menuTrigger.addEventListener('click', () => {
        menuTrigger.classList.toggle('active');
        mobileDrawer.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    if (closeDrawer) {
        closeDrawer.addEventListener('click', () => {
            menuTrigger.classList.remove('active');
            mobileDrawer.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }

    // Fechar ao clicar em um link
    mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuTrigger.classList.remove('active');
            mobileDrawer.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

function initAcordeon() {
    const categorias = document.querySelectorAll('.categoria');

    categorias.forEach((cat, index) => {
        const header = cat.querySelector('.categoria-cabecalho');
        if (!header) return;

        header.addEventListener('click', () => {
            // Fecha outras se quiser comportamento de "apenas um aberto por vez", 
            // mas o pedido foi "expandir a desejada", geralmente implica toggle individual.
            // Vamos fazer toggle individual para flexibilidade.
            cat.classList.toggle('ativa');
        });

        // Opcional: Manter a primeira aberta por padrão
        // if (index === 0) cat.classList.add('ativa');
    });
}

function initParticulas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particulas-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let w, h;
    let particulas = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function criarParticula(isMobile) {
        const maxOpacity = isMobile ? 0.3 : 0.5;
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            tamanho: Math.random() * 2 + 1,
            cor: `rgba(187, 134, 252, ${Math.random() * maxOpacity})`
        };
    }

    function init() {
        resize();
        const isMobile = w < 768;
        const quantidade = isMobile ? 10 : 15; // Reduzido conforme pedido (10 mobile, 15 PC)

        for (let i = 0; i < quantidade; i++) {
            particulas.push(criarParticula(isMobile));
        }
        loop();
    }

    function loop() {
        ctx.clearRect(0, 0, w, h);
        particulas.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            ctx.fillStyle = p.cor;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.tamanho, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    init();
}

function initScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function initFiltros() {
    const botoes = document.querySelectorAll('.container-filtros button');
    if (!botoes.length) return;

    const items = document.querySelectorAll('.secao-slot');

    // Mapeamento simples: 0 -> Animais (primeiro slot), 1 -> Móveis (segundo slot)
    // Assumindo que a estrutura do HTML de fusão tem 2 slots principais
    // Ajuste conforme a estrutura real do HTML gerado

    botoes.forEach(btn => {
        btn.addEventListener('click', () => {
            botoes.forEach(b => b.classList.remove('ativo'));
            btn.classList.add('ativo');

            const slot = btn.dataset.slot;

            items.forEach((item, index) => {
                if (slot === 'todos') {
                    item.style.display = 'grid';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    if (index == slot) {
                        item.style.display = 'grid';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.style.display = 'none';
                        item.style.opacity = '0';
                    }
                }
            });
        });
    });
}

function initAnimacaoScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.cartao-traco').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}
