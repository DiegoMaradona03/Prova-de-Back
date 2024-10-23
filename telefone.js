const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo;

    //Conexão com o banco de dados
    let query = `INSERT INTO telefone (cliente_id, numero, tipo) VALUES`
    query += `('${cliente_id}','${numero}','${tipo}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM telefone WHERE telefone_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, numero, tipo } = req.body;

    const query = 'UPDATE telefone SET cliente_id = ?, numero = ?, tipo = ? WHERE telefone_id = ?';
    con.query(query, [cliente_id, numero, tipo, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    })
}

module.exports = {
    create,
    read,
    deletar,
    update
}