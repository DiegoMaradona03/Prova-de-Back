const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let veiculo_placa = req.body.veiculo_placa;
    let veiculo_marca = req.body.veiculo_marca;
    let veiculo_modelo = req.body.veiculo_modelo;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;

    //Conexão com o banco de dados
    let query = `INSERT INTO estacionamento (cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida) VALUES`
    query += `('${cliente_id}','${veiculo_placa}','${veiculo_marca}','${veiculo_modelo}','${data_entrada}','${data_saida}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM estacionamento', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM estacionamento WHERE estacionamento_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida } = req.body;

    const query = 'UPDATE estacionamento SET cliente_id = ?, veiculo_placa = ?, veiculo_marca = ?, veiculo_modelo = ?, data_entrada = ?, data_saida = ? WHERE estacionamento_id = ?';
    con.query(query, [cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo, data_entrada, data_saida, id], (err, result) => {
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