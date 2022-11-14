# NYRangersExpress
GraphQL + Node.js + Express project that demonstrates GraphQL basics with static data.
This project was themed after the New York Rangers Hockey team with some fictional data for the sake of filling out static data to query from.
Please see my other repositories where I introduce Mutations and other more advanced GraphQL concepts.



Try these Queries in Apollo for best results:

`query {
  defensivePlayer(id: "1") {
    name
    nationality
    position
  }
}`

Your results should look like this:

`{
  "data": {
    "defensivePlayer": {
      "name": "Igor Shesterkin",
      "nationality": "Russia",
      "position": "tendy"
    }
  }
}`

**********************
**********************

`query {
  averageTicketPrice
  currentSeasonTotalGoals
  division
  offensivePlayers
  defensivePlayers {
  name 
  }
}`

Your results should look like this:

`{
  "data": {
    "averageTicketPrice": 250.99,
    "currentSeasonTotalGoals": 23,
    "division": "Metro Division",
    "offensivePlayers": [
      "Artemi Panarin",
      "Phylip Chytil",
      "Kaapo Kaako",
      "Vincent Trocheck",
      "Christopher Kreider",
      "Mika Zibanejhad",
      "Alexis La'freniere",
      "Ryan Reaves",
      "Jimmy Vesey",
      "Kyle Carpenter"
    ],
    "defensivePlayers": [
      {
        "name": "Igor Shesterkin"
      },
      {
        "name": "Adam Fox"
      },
      {
        "name": "Ryan Lindgren"
      },
      {
        "name": "K'Andre Miller"
      }
    ]
  }
}`
