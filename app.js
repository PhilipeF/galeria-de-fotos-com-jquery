$(document).ready(function () {
    $('header button').on('click', () => {
        $('form').slideDown();
    })

    $('#botao-cancelar').on('click', () => {
        $('form').slideUp();
    })

    $('form').on('submit', (e) => {
        console.log('Passei aqui');
        e.preventDefault();

    })
})