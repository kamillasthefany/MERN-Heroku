const Agendamento = require('../models/agendamento.model');

module.exports = {
  async index(req, res) {
    const agendamento = await Agendamento.find();
    res.json(agendamento);
  },

  async create(req, res) {
    const { dia, hora, usuarioId } = req.body;
    let data = {};
    let agendamento = await Agendamento.findOne({ dia, hora, usuarioId });

    if (!agendamento) {
      data = { dia, hora, usuarioId };
      agendamento = await Agendamento.create(data);
      return res.status(200).json(agendamento);
    } else {
      return res.status(500).json(agendamento);
    }
  },
}