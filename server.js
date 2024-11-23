//importa o express para criar o servidor local.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// instanciar o sevidor.
const app = express();
//Servir arquivos estáticos
app.use(express.static("uploads"))
routes(app);
// Faz o servidor criado localmente escutar a porta 3000 do nosso computador.
app.listen(3000, ()=>console.log("servidor conectado com banco de dados da nuvem!"));


//essa função recebe um id e busca ele dentro da lista.
function buscarPostPorId(id) {
  //findIndex é uma metodo nativo do js que procura um dado armazenado na lista pelo seu índice.
  return posts.findIndex((post) => {
    // transforme o parametro id em numero se for uma string
    return post.id === Number(id);
  });
}; 

// chamada da função incluindo um parfamatro.
//const index = buscarPostPorId(req.params.id);

// resposta da requisição configurado para pegar os dado na lista que neste caso esta convertida para json.
app.get("/posts/:id", (req, res) => {
  res.status(200).json(posts[index]);
});
