document.querySelector('.contact-form').addEventListener('submit', function (e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert("Por favor, preencha todos os campos!");
        e.preventDefault(); // Impede o envio do formulário
    }
});
