const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }
//conectando ao banco de dados: nome do banco, usuario, senha,url e o nome do banco que vc criou
    const pool = new Pool({
      connectionString: 'postgres://postgres:postgres@localhost/littleproject'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
