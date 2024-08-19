
    document.getElementById('target').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o redirecionamento padrão após o envio

        // Obtém os dados do formulário
        let formData = new FormData(this);

        // Envia o formulário via Fetch API
        fetch('/', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                // Se o envio for bem-sucedido, exibe o modal de sucesso
                $('#SucessoEnvio').modal('show');
            } else {
                // Se houver um erro, exibe o modal de erro
                $('#ErroEnvio').modal('show');
            }
        }).catch(() => {
            // Caso haja um erro de rede ou similar, exibe o modal de erro
            $('#ErroEnvio').modal('show');
        });
    });

