document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel-image");
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");

    let currentIndex = 0;

    // Função para mostrar o slide atual
    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    // Função para retroceder para o slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }

    // Abrir a modal com a imagem clicada
    function openModal(index) {
        modal.style.display = "block";
        modalImage.src = images[index].src;
    }

    // Fechar a modal ao clicar no botão "X"
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // Adicionar eventos de clique aos botões
    images.forEach(function (image, index) {
        image.addEventListener("click", function () {
            openModal(index);
        });
    });

    // Mostrar o primeiro slide
    showSlide(currentIndex);
});
