document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Exibe a mensagem de sucesso
        successMessage.classList.remove('hidden');

        // Limpa os campos do formulário
        form.reset();

        // Oculta a mensagem de sucesso após alguns segundos (opcional)
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000); // 5000 ms = 5 segundos
    });
});
