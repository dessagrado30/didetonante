const db = require('../database/conection.js');

class sendersController {
    construct(){
    }
    append(req, res) {
        try{
            const {name, organization, email, project, message} = req.body;
            db.query('INSERT INTO senders(id, name, organization, email, project, message) VALUES (NULL, ?, ?, ?, ?, ?);',
            [name, organization, email, project, message], (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                }else{
                    let sendersOne=`Registro incluido correctamente`;
                    res.status(201).json({respuesta:sendersOne, id:rows.insertId});
                }
            });
        }catch (err) {
            res.status(500).send(err.message);
        }  
    }
    modify(req, res){
        try{
            const {id, name, organization, email, project, message} = req.body;
            db.query('UPDATE senders SET name=?, organization=?, email=?, project=?, message=? WHERE id=?',
            [name, organization, email, project, message, id], (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                }
                res.status(200).json({respuesta:'Registro actualizado correctamente'});
            });
        }catch (err) {
            res.status(500).send(err.message);
        }  
    }
    consult(req, res){
        const {id} = req.params;
        console.log(req.params)
        try{
            db.query(`SELECT * FROM senders WHERE id=?`,
                [id],(err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                }
                res.status(200).json(rows);
            });
        }catch (err) {
            res.status(500).send(err.message);
        }
    }
    delete(req, res) {
        const {id} = req.params;
        try{
            db.query('DELETE FROM senders WHERE id=?;',
            [id], (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                }
                if (rows.affectedRows == 1)
                    res.status(200).json({respuesta:'Registro borrado correctamente'});
            });
        }catch (err) {
            res.status(500).send(err.message);
        }  
    }
}

module.exports = new sendersController();
