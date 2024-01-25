$(document).ready(function () {
    // Intercepta o evento de envio do formulário
    $('#target').submit(function (event) {
        // Evita o envio padrão do formulário
        event.preventDefault();

        // Realize a lógica de verificação do envio aqui (pode ser uma chamada AJAX, etc.)

        // Simulando um envio bem-sucedido para teste
        var envioBemSucedido = true;

        if (envioBemSucedido) {
            // Exibe o modal de sucesso
            $('#SucessoEnvio').modal('show');
            // Limpa os campos do formulário
            $('#target')[0].reset();
        } else {
            // Exibe o modal de erro
            $('#ErroEnvio').modal('show');
        }
    });
});