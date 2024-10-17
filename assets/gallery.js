// Liste des images et des tags associés
const allImages = [
        { src: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp", tag: "Concert" },
        { src: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.webp", tag: "Entreprises" },
        { src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.webp", tag: "Entreprises" },
        { src: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.webp", tag: "Mariages" },
        { src: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp", tag: "Portrait" },
        { src: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp", tag: "Mariages" },
        { src: "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp", tag: "Portrait" },
        { src: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp", tag: "Concert" },
        { src: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp", tag: "Entreprises" }
];


const tagContainerElement = document.querySelector(".tag-container");
const galleryContainer = document.querySelector(".gallery-container");


const tags = [...new Set(allImages.map(image => image.tag))];


/**
 * @description create filter buttons for tags
 * @return {void}
 */
function createTagButtons() {
        const allButton = document.createElement('button');
        allButton.textContent = 'Tous';
        allButton.setAttribute('data-tag', 'all');
        allButton.classList.add('tag-button', 'active');
        tagContainerElement.appendChild(allButton);

        tags.forEach(tag => {
                const button = document.createElement('button');
                button.textContent = tag;
                button.setAttribute('data-tag', tag);
                button.classList.add('tag-button');
                tagContainerElement.appendChild(button);
        });

        // Ajouter des événements aux boutons
        document.querySelectorAll('.tag-button').forEach(button => {
                button.addEventListener('click', function() {
                        const selectedTag = this.getAttribute('data-tag');
                        filterImages(selectedTag);
                        
                        // Enlever la classe "active" de tous les boutons
                        document.querySelectorAll('.tag-button').forEach(btn => btn.classList.remove('active'));

                        // Ajouter la classe "active" au bouton cliqué
                        this.classList.add('active');
                });
        });
}

// Filtrer et afficher les images selon le tag
function filterImages(tag) {
        // Vider le conteneur de la galerie
        galleryContainer.innerHTML = '';

        // Filtrer les images
        const filteredImages = tag === 'all' ? allImages : allImages.filter(image => image.tag === tag);

        // Générer les images avec des conteneurs
        filteredImages.forEach(image => {
                // Créer un div pour contenir chaque image
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container'); // Classe pour personnaliser via le CSS

                // Créer l'élément image
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.classList.add('gallery-item');
                imgElement.setAttribute('data-gallery-tag', image.tag);

                // Ajouter l'image dans le conteneur
                imageContainer.appendChild(imgElement);

                // Ajouter le conteneur d'image à la galerie
                galleryContainer.appendChild(imageContainer);
        });
}

// Initialiser la galerie
createTagButtons();
filterImages('all'); // Afficher toutes les images par défaut
