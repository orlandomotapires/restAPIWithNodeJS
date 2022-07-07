const express = require('express');
const router = express.Router();

//Retorna todos os pedidos
router.get('/', (req, res, next) =>{
  res.status(200).send({
    mensagem: 'Retorna os pedidos'
  })
});

//Insere um pedidos
router.post('/', (req, res, next)=>{
  res.status(201).send({
    mensagem: 'O pedido foi criado'
  })
});

//Retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) =>{
  const id = req.params.id_pedido;
  res.status(200).send({
    mensagem: 'Pedido único encontrado',
    id_pedido: id
  });
})

//Exclui um pedidos
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Pedido excluído'
  })
})

module.exports = router;