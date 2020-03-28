const connection = require('../database/connections')
const bcrypt = require('bcryptjs')

module.exports = {
    
  async create(req, res) {
    const { email, password } = req.body

    const ong = await connection('ongs')
      .select('*')
      .where('email', email)
      .first()

    if ( !ong ) {
      return res.status(400).json({ error: "Não existe uma ONG cadastrada com este E-mail." })
    }

    if ( !(await bcrypt.compare(password, ong.password)) ) {
      return res.status(401).json( { error: 'Senha informada está incorreta.' } )
    }

    return res.json(ong)
  },

}