import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from '../controllers/postsControllers.js';
import cors from 'cors';

const corsOpions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

//Dessa forma é mac e linux
//const upload = multer({ dest: "./uploads", storage});

//Desta forma é obrigatoria para sistema windows pra não causar problemas
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads", storage});

//funcao que encapsula tada a parte de rota pra ser exportada
const routes = (app) => {
  // Essa rota faz o express transformar a base de dados em Json para serem trafegados.
  app.use( express.json());
  app.use(cors(corsOpions));

  //Rota paara buscar todos os posts
  app.get("/posts", listarPosts);
  //Rota para criar um post
  app.post("/posts", postarNovoPost);
  //rota para upload de uma imagem
  app.post("/upload", upload.single("imagem"), uploadImagem)

  //rota para atualizar um registe existente nesse caso uma imagem
  app.put('/upload/:id', atualizarNovoPost);
}

export default routes;

