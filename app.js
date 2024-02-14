$(document).ready(function () {
    console.log(document.querySelector('header button'))
    console.log($('botao-cancelar'));

    $('header button').on('click', () => {
        alert('Testando esta budega');
    })

    $('form').on('submit', (e) => {
        console.log('Passei por aqui');
        e.preventDefault();

    })
})