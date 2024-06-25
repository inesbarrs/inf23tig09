const form = document.getElementById('contact-form');

if (form) {

    const successMessage = document.getElementById('success-message');

    const subtmitButton = document.getElementById('submitButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Exibe a mensagem de sucesso
        successMessage.classList.remove('hidden');

        subtmitButton.disabled = true;

        // Limpa os campos do formulário
        form.reset();

        // Oculta a mensagem e botao
        setTimeout(() => {
            subtmitButton.disabled = false;

            successMessage.classList.add('hidden'); 
        }, 5000); // 5000 ms = 5 segundos
    });
}


// JSCRIPT
const img = document.getElementById('cardio2');

if (img) {
img.addEventListener('click', function () {
    alert("click.element")

});
};

const sobre = document.getElementById('sobre');

if (sobre) {
    sobre.addEventListener('mouseenter', function () {
        sobre.style.transform = "scale(1.5)";
    });

    sobre.addEventListener('mouseleave', function () {
        sobre.style.transform = "scale(1)";
    });
};

