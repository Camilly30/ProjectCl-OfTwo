const db = require("../db");

class Produtos {
  static async select() {//metodo assíncrono  para selecionar produto
    try {
      const connect = await db.connect();
      const sql = "SELECT * FROM produtos"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }
  static async selectOne(id) {//metodo assíncrono  para selecionar um específico produto
    try {
      const connect = await db.connect();
      const sql = "SELECT * FROM produtos WHERE id=$1";
      return await connect.query(sql,[id]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {//metodo assíncrono  para inserir um novo produto
    try {
      const connect = await db.connect();
      const sql = "INSERT INTO produtos(titulo, data_cadastro, preco, descricao, imagem) VALUES ($1, $2, $3,$4, $5) RETURNING titulo, data_cadastro, preco, descricao, imagem";
      const values = [data.titulo, data.data_cadastro, data.preco, data.descricao, data.imagem];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(data) {//metodo assíncrono para atualizar os atributos um específico produto
    try {
      const connect = await db.connect();
      const sql = "UPDATE produtos Set titulo=$1, data_cadastro=$2, preco=$3, descricao=$4, imagem=$5 WHERE id=$6;";
      const values = [data.titulo, data.data_cadastro, data.preco, data.descricao, data.imagem,data.id] ;
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(id) {//metodo assíncrono para deletar um específico produto
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM produtos WHERE id=$1";
      return await connect.query(sql, [id]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Produtos;
