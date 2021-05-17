const mongoose = require('mongoose');

const DataShema = new mongoose.Schema({
    dia: Date,
    hora: Number,
    usuarioId: Number,
}, {
    timestamps: true
});

const agendamentos = mongoose.model('Agendamentos', DataShema);
module.exports = agendamentos;