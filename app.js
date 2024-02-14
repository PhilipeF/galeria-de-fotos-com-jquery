$(document).ready(function () {
    $('header button').on('click', () => {
        $('form').slideDown();
    })

    $('#botao-cancelar').on('click', () => {
        $('form').slideUp();
    })

    $('form').on('submit', (e) => {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        console.log('Endereço da imagem', enderecoDaNovaImagem);
        const novoItem = $(`<li style="display:none"> </li>`);

        $(`        
            <img src="${enderecoDaNovaImagem}" alt="Pintura de um gato">
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}">Ver imagens em tamanho real</a>
            </div>
        
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova').val('');
    })
})