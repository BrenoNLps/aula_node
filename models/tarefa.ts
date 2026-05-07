const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Tarefa = sequelize.define('Tarefa', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    concluida: { type: DataTypes.BOOLEAN, defaultValue: false }
})

module.exports = Tarefa
