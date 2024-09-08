// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
    const cardBody = document.getElementById('cardBody') as HTMLElement;

    toggleButton.addEventListener('click', () => {
        if (cardBody.classList.contains('show')) {
            cardBody.classList.remove('show');
            toggleButton.textContent = 'Show Details';
        } else {
            cardBody.classList.add('show');
            toggleButton.textContent = 'Hide Details';
        }
    });
});
