document.addEventListener('DOMContentLoaded', () => {
    const collapsibleButton = document.querySelector('.collapsible');
    const content = document.querySelector('.content');

    collapsibleButton.addEventListener('click', () => {
        content.classList.toggle('hidden'); // Переключаем класс hidden
    });
});