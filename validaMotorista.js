clientes = document.querySelectorAll('.cliente');

for(var i = 0; i < clientes.length; i++) {
	var cliente = clientes[i];

	var tdStatus = cliente.querySelector('.status');
	var tdferias = cliente.querySelector('.ferias');

	var ferias = tdferias.textContent.toUpperCase();
	


	console.log(ferias);

	if (ferias == "SIM") {
		var $status = "Inativo";
		tdStatus.textContent = $status;

	}else if (ferias != "SIM" && ferias != "NÃO" && ferias != "NAO") {
		
	var $status = "verificar Ferias";
	tdStatus.textContent = $status;
	tdferias.classList.add('bg-danger');
	tdStatus.classList.add('bg-danger');
	
	} else {
		var $status = "Ativo";
		tdStatus.textContent = $status;
	}
	

}
