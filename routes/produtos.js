const express = require('express');
const router = express.Router();

//Retorna todos os produtos
router.get('/', (req, res, next) =>{
  res.status(200).send({
    mensagem: 'Retorna os produtos'
  })
});

//Insere um produto
router.post('/', (req, res, next)=>{

  const produto = { //Objeto produto tem nome e preco
    nome: req.body.nome,
    preco: req.body.preco
  };

  res.status(201).send({
    mensagem: 'Insere um produto',
    produtoCriado: produto

  })

});

//Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) =>{
  const id = req.params.id_produto;
  res.status(200).send({
    mensagem: 'Produto único encontrado'
  });
})

//Altera um produto
router.patch('/', (req, res, next) =>{
  res.status(201).send({
    mensagem: 'Produto alterado'
  })
})

//Exclui um produto
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Produto excluído'
  })
})

module.exports = router;