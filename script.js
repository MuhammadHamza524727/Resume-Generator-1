// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var cardBody = document.getElementById('cardBody');
    toggleButton.addEventListener('click', function () {
        if (cardBody.classList.contains('show')) {
            cardBody.classList.remove('show');
            toggleButton.textContent = 'Show Details';
        }
        else {
            cardBody.classList.add('show');
            toggleButton.textContent = 'Hide Details';
        }
    });
});
