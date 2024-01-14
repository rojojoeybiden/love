// popup.js
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('imageModal');

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };
});

function openModal(imageSrc) {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}