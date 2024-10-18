// Liste des images et des tags associés
import {generateModal} from "./modal.js";

const allImages = [
        { src: "./assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash.webp", tag: "Concert", alt: "Photo" +
                    " de concert en intérieur" },
        { src: "./assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash.webp", tag: "Entreprises", alt: "Portrait d'entreprise de Ali Morshedlou" },
        { src: "./assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash.webp", tag: "Entreprises", alt: "Portrait d'entreprise de Jason Goodman" },
        { src: "./assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash.webp", tag: "Mariages", alt: "Photo de mariage, mains des mariés" },
        { src: "./assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash.webp", tag: "Portrait", alt: "Portrait de Ade Tunji fermant les yeux" },
        { src: "./assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash.webp", tag: "Mariages", alt: "Photo de mariage, les mariés se regardent" },
        { src: "./assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash.webp", tag: "Portrait", alt: "Portrait de Nino van prattenburg en extérieur" },
        { src: "./assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash.webp", tag: "Concert", alt: "Photo d'un concert d'Austin Neill" },
        { src: "./assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.webp", tag: "Entreprises", alt: "Photo d'entreprise de Mateus Campos felipe" }
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
        
        document.querySelectorAll('.tag-button').forEach(button => {
                button.addEventListener('click', function() {
                        const selectedTag = this.getAttribute('data-tag');
                        filterImages(selectedTag);                        
                        
                        document.querySelectorAll('.tag-button').forEach(btn => btn.classList.remove('active'));

                        this.classList.add('active');
                });
        });
}


function filterImages(tag) {
        
        galleryContainer.innerHTML = '';        
        galleryContainer.classList.remove('gallery-animation');        
        void galleryContainer.offsetWidth;        
        galleryContainer.classList.add('gallery-animation');
        
        const filteredImages = tag === 'all' ? allImages : allImages.filter(image => image.tag === tag);
    
        filteredImages.forEach(image => {
                
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');

                
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.alt;
                imgElement.classList.add('gallery-item');
                imgElement.setAttribute('data-gallery-tag', image.tag);

                
                imageContainer.appendChild(imgElement);                
                galleryContainer.appendChild(imageContainer);                
                
        });
        generateModal();
}
createTagButtons();
filterImages('all');