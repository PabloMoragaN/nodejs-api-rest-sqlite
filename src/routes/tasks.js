//configuracion de http://localhost:3000/tasks
module.exports = app => {
    const Tasks = app.db.models.Tasks;


    /*PARA TODAS TAREAS */
    app.route('/tasks')
        //Get tasks
        .get((req, res) => {
            //findAll metodo de sequelize para getAllTasks
            Tasks.findAll({}).then(result => res.json(result)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })
        //Create tasks
        .post((req, res) => {
            Tasks.create(req.body) //El create es de sequelize para insertar datos (INSERT INTO ...)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message })
                });
        });


    /*PARA UNA ÚNICA TAREA */

    app.route('/tasks/:id')
        //Get una sola tarea
        .get((req, res) => {
            //findOne metodo de sequelize para getTaskbyID

            Tasks.findOne({ where: req.params }).then(result => res.json(result)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })
        .put((req, res) => {
            //update metodo de sequelize para updateTask
            //nos devuelve el codigo de estado, no nos devuelve el objeto updateado

            Tasks.update(req.body, { where: req.params }).then(result => res.sendStatus(204)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })
        .delete((req, res) => {
            //destroy metodo de sequelize para deleteTask
            //nos devuelve el codigo de estado, no nos devuelve el objeto updateado

            Tasks.destroy({ where: req.params }).then(result => res.sendStatus(204)).catch(error => {

                res.status(412).json({ msg: error.message })
            });


        })


}