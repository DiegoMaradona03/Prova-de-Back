const con = require('../connect/connect').con;

const create = (req, res) => {
    let numero = req.body.numero;
    let andar = req.body.andar;
    let tipo = req.body.tipo;
    let valor_diaria = req.body.valor_diaria;
    let statusQuarto = req.body.statusQuarto;
    let cliente_id = req.body.cliente_id;

    //Conexão com o banco de dados
    let query = `INSERT INTO quartos (numero, andar, tipo, valor_diaria, statusQuarto, cliente_id) VALUES`
    query += `('${numero}','${andar}','${tipo}','${valor_diaria}','${statusQuarto}','${cliente_id}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM quartos', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM quartos WHERE quarto_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, numero, andar, tipo, valor_diaria, statusQuarto, cliente_id } = req.body;

    const query = 'UPDATE clientes SET numero = ?, andar = ?, tipo = ?, valor_diaria = ?, statusQuarto = ?, cliente_id = ? WHERE quarto_id = ?';
    con.query(query, [numero, andar, tipo, valor_diaria, statusQuarto, cliente_id, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
}

module.exports = {
    create,
    read,
    deletar,
    update
}