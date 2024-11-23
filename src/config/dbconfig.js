import { MongoClient } from 'mongodb';

//exportando por padrao a função asincrona
export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');
    await mongoClient.connect();
    console.log('Concectado ao MongoDB Atlas com sucesso!');

    return mongoClient;
  } catch (erro) {
    console.log('Falha na conexão com o banco', erro);
    process.exit();
  }
}