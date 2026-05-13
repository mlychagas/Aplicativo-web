const { timer } = require("rxjs");

$(function () {
    $('.remover').click(function (e) {
        e.preventDefault();

        let id = $(this).data('id');
        let name = $(this).data('name');

        // alert(`ID: ${id}, Produto: ${name}`)
        Swal.fire({
            title: `Deseja remover o produto ${name}?`,
            text: "Essa ação não pode ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, remover!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`/produtos/${id}/remover`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (!response.ok) {
                        alert('RETORNO', response.ok);
                    }

                    Swal.fire({
                    title: "Excluido!",
                    text: 'Produto removido com sucesso!',
                    icon: "success",
                    willClose: () => {
                        location.reload();
                    }
                    })


                } catch (error) {

                }
                
            }
        });
    });
});