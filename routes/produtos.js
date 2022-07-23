const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

//Retorna todos os produtos
router.get("/", (req, res, next) => {
	res.status(200).send({
		mensagem: "Retorna os produtos",
	});
});

//Insere um produto
router.post("/", (req, res, next) => {
	mysql.getConnection((error, conn) => {
		conn.query(
			'INSERT INTO produtos (nome, preco) VALUES (?,?)',
			[req.body.nome, req.body.preco],
			(error, resultado, field) => {
				conn.release();	

				if (error) {
						return res.status(500).send({
						error: error,
						response: null
					});

				}

				res.status(201).send({
					mensagem: 'Produto inserido com sucesso',
					id_produto: resultado.insertId 
				});
			}
		)
	});

});

//Retorna os dados de um produto
router.get("/:id_produto", (req, res, next) => {
	const id = req.params.id_produto;
	res.status(200).send({
		mensagem: "Produto único encontrado",
	});
});

//Altera um produto
router.patch("/", (req, res, next) => {
	res.status(201).send({
		mensagem: "Produto alterado",
	});
});

//Exclui um produto
router.delete("/", (req, res, next) => {
	res.status(201).send({
		mensagem: "Produto excluído",
	});
});

module.exports = router;
