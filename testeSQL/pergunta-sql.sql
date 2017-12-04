1	- Identifique	as	colunas	que	compõe	a	chave	primária	de	cada	tabela.
tb_customer : id_customer

2- Utilizando	o	comando	INSERT	de	SQL,	crie	os	scripts	para	cadastrar	o cliente
abaixo:
Joãozinho	Silva	- 888.777.666-55
Endereço	Residencial:	Rua	das	Flores,	1.	CEP:	01234-567
Endereço	Comercial:	Rua das	Pedras,	100	Conjunto	200.	CEP:	01234-567

mysql> insert into tb.customer_id_customer_seq (nm_customer, cpf_cnpj, cd_address_type, street, lot, zip_code,  cd_address_type, street, lot, zip_code ) values ('Joãozinho Silva', 888.777.666-55, R, 'Rua	das	Flores', 1, '01234-567', C, 'Rua das	Pedras', 200, '01234-567' );
mysql> select * from tb.customer;

Quantos	endereços	diferentes	podem	ser	cadastrado	para	um	cliente?
3. Residencial, Comercial e algum outro adicional.

Dado	um	CPF,	qual	seria	o	passo	a	passo	para	excluir	um	cliente	da	nossa	base	
de	dados?	
mysql> delet from tb.customer where id_customer = 01;