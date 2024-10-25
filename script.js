document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    AOS.init();

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        console.log('Formulário enviado com sucesso!');
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Telefone:', phone);
        console.log('Mensagem:', message);

        form.reset();
        alert('Obrigado pelo seu contato, ' + name + '! Nós responderemos em breve.');
    });
});
