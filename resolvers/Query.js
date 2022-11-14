const { defensivePlayers } = require("../db")

exports.Query = {
        hello: () => {
            return "Hello Rangers fans"
        },
        numberOfFans: () => {
            return 100
        },
        currentSeasonTotalGoals: () => {
            return 23
        },
        division: () => {
            return "Metro Division"
        },
        originalSix: () => {
            return true
        },
        averageTicketPrice: () => {
            return 250.99
        },
        offensivePlayers: () => {
            return ["Artemi Panarin",
                   "Phylip Chytil", 
                   "Kaapo Kaako", 
                   "Vincent Trocheck", 
                   "Christopher Kreider", 
                   "Mika Zibanejhad", 
                   "Alexis La'freniere", 
                   "Ryan Reaves", 
                   "Jimmy Vesey", 
                   "Kyle Carpenter"]
        },
        defensivePlayers: () => {
            return defensivePlayers
        },
        defensivePlayer: (parent, args, context) => {
            // reccomend console logging args
            const defensivePlayerId = args.id;
            // find the defensivePlayer by iterating through the defensivePlayer array where defensivePlayer id is equal to our argument we're passing in i.e. "3"
            const defensivePlayer = defensivePlayers.find(defensivePlayer => defensivePlayer.id === defensivePlayerId);
            // if we don't find the defensivePlayer by id, we return null
            if(!defensivePlayer) return null;
            // if we do find the defensive player by id, we return that data i.e. Ryan Lindgren's data will come back if you query by "3" 
            return defensivePlayer;
        }
    }
