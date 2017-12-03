public void adiciona(Customer customer) {
    String sql = "insert into tb_customer_account " +
            "(id_customer,cpf_cnpj,nm_customer,is_active,vl_total)" +
            " values (?,?,?,?)";

    try {
        // prepared statement para inserção
        PreparedStatement stmt = con.prepareStatement(sql);

        // seta os valores

        stmt.setString(1,customer.getNome());
        stmt.setInt(2,customer.getCpfCnpj());
        stmt.setBoolean(3,customer.getStatus());
        stmt.setDouble(3,customer.getVl_total());
       

        // executa
        stmt.execute();
        stmt.close();
    } catch (SQLException e) {
        throw new RuntimeException(e);
    }
}