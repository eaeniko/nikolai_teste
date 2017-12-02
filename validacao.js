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
var btnPassageiro = document.querySelector("#btn-passageiro");

btnPassageiro.addEventListener("click",function(event){
	event.preventDefault();

	var form = document.querySelector("#adiciona-passageiro");

	var nome = form.inputNome.value;
	var nascimento = form.inputData.value;
	var cpf = form.inputCpf.value;

	var passageiroTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	var nascimentoTd = document.createElement("td");
	var cpfTd = document.createElement("td");

	nomeTd.textContent = nome;
	nascimentoTd.textContent = nascimento;
	cpfTd.textContent = cpf;


	passageiroTr.appendChild(nomeTd);
	passageiroTr.appendChild(nascimentoTd);
	passageiroTr.appendChild(cpfTd);

	var tabelaPassageiro = document.querySelector("#tabela-passageiros");
	tabelaPassageiro.appendChild(passageiroTr);

});

var btnMotorista = document.querySelector("#btn-motorista");

btnMotorista.addEventListener("click",function(event){
	event.preventDefault();

	var form = document.querySelector("#adiciona-motorista");

	var nome = form.inputNome.value;
	var nascimento = form.inputData.value;
	var cpf = form.inputCpf.value;
	var ferias = form.inputFerias.value;
	var modeloCarro = form.inputModeloCarro.value;
	var status = form.inputStatus.value;

	var motoristaTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	var nascimentoTd = document.createElement("td");
	var cpfTd = document.createElement("td");
	var feriasTd = document.createElement("td");
	var modeloCarroTd = document.createElement("td");
	var statusTd = document.createElement("td");

	nomeTd.textContent = nome;
	nascimentoTd.textContent = nascimento;
	cpfTd.textContent = cpf;
	feriasTd.textContent = ferias;
	modeloCarroTd.textContent = modeloCarro;
	statusTd.textContent = status;


	motoristaTr.appendChild(nomeTd);
	motoristaTr.appendChild(nascimentoTd);
	motoristaTr.appendChild(cpfTd);
	motoristaTr.appendChild(feriasTd);
	motoristaTr.appendChild(modeloCarroTd);
	motoristaTr.appendChild(statusTd);
	console.log(motoristaTr);

	var tabelaMotorista = document.querySelector("#tabela-motorista");
	tabelaMotorista.appendChild(motoristaTr);

});