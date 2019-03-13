module.exports = (sequelize, DataType) => {


    const Tasks = sequelize.define('Tasks', {

        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false

        }
    });

    //Metodo associate
    Tasks.associate = (models) => {

        Tasks.belongsTo(models.Users); //Relacion de muchos a uno. Muchas tareas a un usuario

    }
    return Tasks;

}