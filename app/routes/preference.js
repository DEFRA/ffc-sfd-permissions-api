const db = require('../data')

module.exports = [
  {
    method: 'GET',
    path: '/preference/{sbi}',
    handler: async (request, h) => {
      return h.response(await db.preference.findOne({ where: { sbi: request.param.sbi } }))
    }
  },
  {
    method: 'POST',
    path: '/preference',
    handler: async (request, h) => {
      return h.response(await db.preference.create(request.payload))
    }
  }
]
