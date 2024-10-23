const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let quarto_id = req.body.quarto_id;
    let data_reserva = req.body.data_reserva;
    let data_entrada = req.body.data_entrada;
    let data_saida = req.body.data_saida;
    let valor_total = req.body.valor_total;
    let statusReserva = req.body.statusReserva;

    //Conexão com o banco de dados
    let query = `INSERT INTO reservas (cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva) VALUES`
    query += `('${cliente_id}','${quarto_id}','${data_reserva}','${data_entrada}','${data_saida}','${valor_total}','${statusReserva}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM reservas', (err, result) => {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

const deletar = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM reservas WHERE reserva_id = '${id}'`, (err,result) => {
        if (err) {
            res.status(400).json.end();
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    const { id, cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva } = req.body;

    const query = 'UPDATE reservas SET cliente_id = ?, quarto_id = ?, data_reserva = ?, data_entrada = ?, data_saida = ?, valor_total = ?, statusReserva = ? WHERE reserva_id = ?';
    con.query(query, [cliente_id, quarto_id, data_reserva, data_entrada, data_saida, valor_total, statusReserva, id], (err, result) => {
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