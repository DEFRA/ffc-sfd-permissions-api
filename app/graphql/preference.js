const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

const PreferenceType = new GraphQLObjectType({
  name: 'Preference',
  fields: {
    sbi: { type: GraphQLInt },
    preference: { type: GraphQLString }
  }
})

module.exports = { PreferenceType }