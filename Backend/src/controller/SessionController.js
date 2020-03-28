const connection = require('../database/connections')

module.exports = {
    
  async create(req, res) {
    const { id } = req.body

    const ong = await connection('ongs')
      .select('name')
      .where('id', id)
      .first()

    if ( !ong ) {
      return res.status(400).json({ error: "Não existe uma ONG com este ID." })
    }

    return res.json(ong)
  },

}