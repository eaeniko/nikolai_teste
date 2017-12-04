var btnMotorista = document.querySelector("#btn-motorista");

btnMotorista.addEventListener("click",function(event){
	event.preventDefault();

	var form = document.querySelector("#adiciona-motorista");

	var nome = form.inputNome.value;
	var nascimento = form.inputData.value;
	var cpf = form.inputCpf.value;
	var ferias = form.inputFerias.value;
	var modeloCarro = form.inputModeloCarro.value;
	//var status = form.inputStatus.value;

	
	validaForm(nome, cpf, nascimento, modeloCarro);
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
	statusTd.textContent = validaFerias(ferias);


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