const db = require('../data')

module.exports = [ 
  {
    method: 'GET',
    path: '/preference/{sbi}',
      handler: async (request, h) => {
        return h.response(await db.Preference.findOne({ where: { sbi: request.query.sbi } }))
      }
  },
  {
    method: 'POST',
    path: '/preference',
      handler: async (request, h) => {
        return h.response(await db.Preference.create(request.payload))
      }
    }
]