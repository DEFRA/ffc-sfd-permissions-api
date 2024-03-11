const { PreferenceType } = require("../graphql/preference")

module.exports = [ {
    method: 'GET',
    path: '/preference',
    config: {
      tags: ['graphql'],
      handler: (request, h) => {
        return h.response(PreferenceType).code(200)
      }
    }
  },
  {
    method: 'GET',
    path: '/preference/{sbi}',
    config: {
      tags: ['graphql'],
      handler: (request, h) => {
        return h.response(PreferenceType).code(200)
      }
    }
  },
  {
    method: 'POST',
    path: '/preference',
    config: {
      tags: ['graphql'],
      handler: (request, h) => {
        return h.response(PreferenceType).code(200)
      }
    }
  }
]