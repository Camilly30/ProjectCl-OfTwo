const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const cors= require('cors');//delimitar que consegue acessar
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/produtos', async function(req, res){//recupera todos os produtos
  try {
    var produtos = await Produto.select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});



app.post('/produto', async function(req,res){//inserir um produto
  try{
    var produto = req.body
    var produto = await Produto.insert(produto);
    res.json(produto.rows)
  }catch(error){
    console.log("error")
  }
})

app.put('/produtos',async function (req,res){
  try{
    var produto= await Produto.update(req.body.id, req.body);
    res.json(produto.rows);
  }catch (error){
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar produto' });
  }
}
);
app.delete('/produtos', async function(req, res){
  try {
    console.log(req.body.id)
    var produto = await Produto.delete(req.body.id);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao DELETAR produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao deletar produto' });
  }
});


app.listen(3000, function() {
  console.log(`APP rodando locamente na porta ${3000}`)
});
