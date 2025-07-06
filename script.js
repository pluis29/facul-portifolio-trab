// Garante que o script só execute após o DOM estar completamente carregado para evitar erros de manipulação.
document.addEventListener('DOMContentLoaded', () => {

    // Referências a elementos do DOM para manipulação.
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const contactForm = document.getElementById('contactForm');

    // --- Funções para gerenciar visibilidade e estado da navegação ---
    // Oculta todas as seções de conteúdo.
    function hideAllSections() {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Remove o destaque visual de todos os links de navegação.
    function deactivateAllNavLinks() {
        navLinks.forEach(link => {
            link.classList.remove('active-nav');
        });
    }

    // --- Lógica de Interatividade da Página ---
    // Adiciona o comportamento de troca de seção ao clique em cada link de navegação.
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do navegador (ex: recarregar a página).

            const targetId = event.target.dataset.target; // ID da seção a ser exibida.

            // Garante que apenas uma seção esteja visível e um link ativo por vez.
            hideAllSections();
            deactivateAllNavLinks();

            // Exibe a seção alvo e destaca o link clicado.
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            event.target.classList.add('active-nav');
        });
    });

    // Define a seção inicial a ser exibida e o link de navegação ativo ao carregar a página.
    const initialSectionId = 'about';
    const initialSection = document.getElementById(initialSectionId);
    if (initialSection) {
        initialSection.classList.add('active');
        document.querySelector(`.nav-link[data-target="${initialSectionId}"]`).classList.add('active-nav');
    }

    // Gerencia o envio do formulário de contato.
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão para um servidor.

            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.'); // Feedback simples ao usuário.
            contactForm.reset(); // Limpa os campos do formulário.
        });
    }
});