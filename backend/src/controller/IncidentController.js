const Yup = require('yup')
const connection = require('../database/connections')

module.exports = {
    
  async index(req, res) {
    const { page = 1 } = req.query

    const [ count ] = await connection('incidents').count().as()

    const incidents = await connection('incidents')
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ])
      .limit(5)
      .offset( (page - 1) * 5 )
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')

    res.header('X-Total-Count', count['count(*)'])
    return res.json(incidents)
  },

  async create(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json( { error: 'Campos obrigatórios não foram preenchidos corretamente.' } )
    }

    const { title, description, value } = req.body
    const ong_id = req.headers.authorization

    const [ id ] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.json({ id })
  },

  async delete(req, res) {
    const { id } = req.params
    const ong_id = req.headers.authorization

    const incidents = await connection('incidents')
      .select('ong_id')
      .where('id', id)
      .first()

    if (incidents.ong_id != ong_id) {
      return res.status(401).json({ error: "Não é possível deletar um caso que não seja da sua ONG." })
    }

    await connection('incidents').where('id', id).delete()

    return res.status(204).send()
  }   
}