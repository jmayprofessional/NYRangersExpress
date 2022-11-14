const { ApolloServer } = require("apollo-server");
const { defensivePlayers } = require("./db");
const { typeDefs } = require("./schema")
const { Query } = require("./resolvers/Query")


//defensive player data located in db.js

// type defs are located in schema.js file

// resolvers have three major parameters (parent, args, and context)


const server = new ApolloServer({
typeDefs,
resolvers: {
    Query
},
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url)
})