clientes = document.querySelectorAll('.cliente');

for(var i = 0; i < clientes.length; i++) {
	var cliente = clientes[i];

	var tdStatus = cliente.querySelector('.status');
	var tdferias = cliente.querySelector('.ferias');

	var ferias = tdferias.textContent.toUpperCase();
	


	console.log(ferias);

    validaFerias(ferias);
	

}
function validaFerias(ferias) {
    var status;
    if (ferias == "SIM") {
        $status = "Inativo";
        status = $status;
    } else {
        $status = "Ativo";
        status = $status;
    }
    return status;
}
function validaForm(nome, cpf, data, modelo){
    if (nome === '' || cpf === '' || data === '' || modelo === '') {
        return alert('Você não preencheu todos os campos.');
    }
}