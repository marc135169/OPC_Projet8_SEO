
export function generateModal() {
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-content");
    const prevElement = document.querySelector(".prev");
    const nextElement = document.querySelector(".next");

    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery-item');
    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            currentIndex = index; // Save the current index of the clicked image
        });
    });

    prevElement.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImg.src = images[currentIndex].src;        
        modalImg.alt = images[currentIndex].alt;
    });

    nextElement.addEventListener('click', function() {        
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = images[currentIndex].src;
        modalImg.alt = images[currentIndex].alt;
    });

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

