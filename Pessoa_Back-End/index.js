const express = require('express');
const path = require('path');
const Pessoa = require("./models/pessoa");
const cors= require('cors');//delimitar que consegue acessar
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/pessoas', async function(req, res){
  try {
    var pessoas = await Pessoa.select();
    res.json(pessoas.rows);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar pessoas' });
  }
});

app.post('/pessoas', async function(req, res){
  try {
    var pessoa = await Pessoa.selectOne(req.body.id);
    res.json(pessoa.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar pessoas' });
  }
});

app.post('/pessoa', async function(req,res){
  try{
    var pessoa = req.body
    var pessoa = await Pessoa.insert(pessoa);
    res.json(pessoa.rows)
  }catch(error){
    console.log("error")
  }
})

app.delete('/pessoas', async function(req, res){
  try {
    console.log(req.body.id)
    var pessoa = await Pessoa.delete(req.body.id);
    res.json(pessoa.rows);
  } catch (error) {
    console.error('Erro ao atualizar pessoa:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar pessoa' });
  }
});


app.listen(3003, function() {
  console.log(`app de Exemplo escutando na porta! ${3003}`)
});
