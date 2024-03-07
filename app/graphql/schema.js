const wreck = require('@hapi/wreck')
const { GraphQLSchema, GraphQLObjectType, GraphQLInt } = require('graphql')
const { PreferenceType} = require('./preference')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        preference: {
        type: PreferenceType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: async (root, { sbi }, request) => {
        preference.preferences = preferenceData.find((preferenceObject) => preferenceObject.sbi === sbi)          
          return preference
        }
      },
      allPreference: {
        type: new GraphQLList(preferenceType),
        resolve: () => {
          const result = preferenceData.map(personObject => {
            const preferences = preferenceData.find((preferenceObject) => preferenceObject.id === personObject.id)
            return { ...personObject, preferences }
          })
          return result
        }
      }
    }
  })
})

module.exports = { schema }