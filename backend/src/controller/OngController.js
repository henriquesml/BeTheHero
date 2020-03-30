const crypto = require('crypto')
const Yup = require('yup')
const connection = require('../database/connections')
const bcrypt = require('bcryptjs')

module.exports = {
    
  async index(req, res) {
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)
  },

  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      whatsapp: Yup.string().required().min(10).max(11),
      city: Yup.string().required(),
      uf: Yup.string().required().min(2).max(2)
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json( { error: 'Campos obrigatórios não foram preenchidos corretamente.' } )
    }

    const { name, email, whatsapp, city, uf } = req.body
    let { password } = req.body
  
    const ongExists = await connection('ongs').select('email').where('email', email).first()

    if (ongExists) {
      return res.status(400).json({ error: `E-mail ${email} já possuí cadastro.` })
    }

    const id = crypto.randomBytes(4).toString('HEX')

    password = await bcrypt.hash(password, 8)
  
    await connection('ongs').insert({
      id,
      name,
      email,
      password,
      whatsapp,
      city,
      uf
    })
  
    return res.json({ id, name })
  }     
}