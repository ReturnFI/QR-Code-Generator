document.addEventListener('DOMContentLoaded', () => {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
    const container = document.querySelector('.container');
    const qrCodeContainer = document.getElementById('qr-code-container');
    const errorMessage = document.getElementById('error-message');

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        container.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            body.classList.add('dark-mode');
            container.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            container.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const textInput = form.elements['text'].value.trim();

        errorMessage.textContent = '';
        qrCodeContainer.innerHTML = '';

        if (textInput === '') {
            errorMessage.textContent = 'Please enter some text to generate a QR code.';
            return;
        }

        const qrCodeImage = document.createElement('img');
        qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(textInput)}`;
        qrCodeContainer.appendChild(qrCodeImage);
    });
});
