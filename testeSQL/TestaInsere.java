public class TestaInsere {

  public static void main(String[] args) {

      // pronto para gravar
      Customer customer = new Contato();
      customer.setNome("José");
      customer.setCpfCnpj("000.000.000-02");
      customer.setStatus(true);
      customer.setVl_total(500);
      

      // grave nessa conexão!!!
      Misterio bd = new Misterio();

      // método elegante
      bd.adiciona(customer);

      System.out.println("Gravado!");
  }
}