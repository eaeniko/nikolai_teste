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

