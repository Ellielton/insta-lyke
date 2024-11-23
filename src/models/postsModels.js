 //importacao do arquivo de configudração de conexao.
import 'dorenv/config';
 import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// chamda da conecxao ao banco de dados.
const conexao = await conectarAoBanco (process.env.STRING_CONEXAO);


//funcão para acessar todos os posts no banco de dados e chamamos ela dentro do paramentro do json no app.get.
export  async function getTodosPost() {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

//fucao que recebe o conteudo do post a ser criado.
export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
  
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  const objId = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
  
}