document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    // Limpar o formulário e esconder a mensagem de sucesso ao carregar a página
    form.reset();
    successMessage.classList.add("hidden");
    form.classList.remove("hidden");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Ocultar o formulário
        form.classList.add("hidden");
        
        // Mostrar a mensagem de sucesso
        successMessage.classList.remove("hidden");
    });
});


// Click na imagem - alert
const img = document.getElementById('cardio2');

if (img) {
img.addEventListener('click', function () {
    alert("click.element")

});
};


// Titulo altera de tamanho ao passar o rato
const sobre = document.getElementById('sobre');

if (sobre) {
    sobre.addEventListener('mouseenter', function () {
        sobre.style.transform = "scale(1.5)";
    });

    sobre.addEventListener('mouseleave', function () {
        sobre.style.transform = "scale(1)";
    });
};

