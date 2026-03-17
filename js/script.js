// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Détection du mode sombre
    function detectDarkMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }
        // Écouter les changements de préférence
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });
    }

    // Appliquer la détection
    detectDarkMode();

    // Éléments principaux
    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const card3 = document.getElementById('card-3');
    const contentArea = document.getElementById('content-area');

    // Données pour la première année
    const firstYearContent = `
        <div class="content-section">
            <h2 class="section-title">Compétences</h2>
            <ul class="skill-list">
                <li>Réseaux : Configuration de routeurs et commutateurs, VLAN, routage statique et dynamique (OSPF)</li>
                <li>Télécoms : Principes des transmissions, fibre optique, technologies sans fil (Wi‑Fi, 4G/5G)</li>
                <li>Programmation : Scripting Bash, Python pour l'automatisation, bases de C</li>
                <li>Sécurité : Pare‑feu, détection d'intrusions, bonnes pratiques de sécurisation</li>
                <li>Virtualisation : Machines virtuelles (VirtualBox), conteneurs Docker</li>
            </ul>
        </div>
        <div class="content-section">
            <h2 class="section-title">Projets</h2>
            <ul class="project-list">
                <li>
                    <div class="project-title">Déploiement d'un réseau local d'entreprise</div>
                    <div class="project-desc">Conception et mise en œuvre d'un réseau sécurisé avec VLAN, DHCP et contrôle d'accès. Utilisation de matériel Cisco Packet Tracer.</div>
                </li>
                <li>
                    <div class="project-title">Script d'automatisation de sauvegarde</div>
                    <div class="project-desc">Développement d'un script Bash pour sauvegarder automatiquement les configurations des équipements réseau sur un serveur FTP.</div>
                </li>
                <li>
                    <div class="project-title">Étude de couverture Wi‑Fi</div>
                    <div class="project-desc">Analyse des performances d'un réseau sans fil existant et propositions d'optimisation (positionnement des points d'accès, canaux).</div>
                </li>
            </ul>
        </div>
    `;

    // Messages pour les autres années
    const secondYearContent = `<div class="default-message"><p>🔄 Contenu de la 2ᵉ année en cours de préparation…</p></div>`;
    const thirdYearContent = `<div class="default-message"><p>🚧 La 3ᵉ année sera disponible prochainement !</p></div>`;

    // Fonction pour afficher le contenu et mettre à jour la sélection
    function showContent(content, selectedCard) {
        contentArea.innerHTML = content;
        // Mettre à jour l'état visuel des cartes
        [card1, card2, card3].forEach(card => card.classList.remove('selected'));
        selectedCard.classList.add('selected');
    }

    // Gestionnaire de clic pour la carte 1
    card1.addEventListener('click', function() {
        showContent(firstYearContent, card1);
    });

    // Gestionnaires pour les cartes 2 et 3
    card2.addEventListener('click', function(event) {
        event.preventDefault();
        showContent(secondYearContent, card2);
    });

    card3.addEventListener('click', function(event) {
        event.preventDefault();
        showContent(thirdYearContent, card3);
    });

    // Initialisation : ne rien afficher dans la zone de contenu
    contentArea.innerHTML = '';
});
