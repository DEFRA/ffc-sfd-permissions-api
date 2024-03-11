module.exports = [ 
  {
    method: 'GET',
    path: '/preference/{sbi}',
      handler: (request, h) => {
        return h.response("ok").code(200)
      }
  },
  {
    method: 'POST',
    path: '/preference',
      handler: (request, h) => {
        return h.response("working").code(200)
      }
    }
]