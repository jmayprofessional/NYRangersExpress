const { gql } = require("apollo-server");

exports.typeDefs =gql`
type Query {
    hello: String
    numberOfFans: Int!
    currentSeasonTotalGoals: Int
    division: String
    originalSix: Boolean
    averageTicketPrice: Float
    offensivePlayers: [String]
    defensivePlayers: [DefensivePlayer!]!
    defensivePlayer(id: ID!): DefensivePlayer
}

type DefensivePlayer {
    id: String
    name: String!
    nationality: String
    position: String
}
`;