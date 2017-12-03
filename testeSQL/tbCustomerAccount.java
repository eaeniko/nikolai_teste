public class tbCustomerAccount {

  // a conexão com o banco de dados
  private Connection connection;

  public tbCustomerAccount() {
    this.connection = new ConnectionFactory().getConnection();
  }
}