function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 17,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 1,
          slamDunks: 1,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 19,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 7,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 15,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 15,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 5,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function players() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

function numPointsScored(playerName) {
  return players()[playerName].points;
}

console.log("Points for player Jeff Adrien : ", numPointsScored("Jeff Adrien"));
console.log(
  "Points for player Mason Plumlee : ",
  numPointsScored("Mason Plumlee")
);

function shoeSize(playerName) {
  return players()[playerName].shoe;
}

console.log("Player Brendan Haywood shoe size : ", shoeSize("Brendan Haywood"));
console.log("Player Brook Lopez shoe size : ", shoeSize("Brook Lopez"));

function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) return game[team].colors;
  }
}

console.log(
  "Team Charlotte Hornets colors are : ",
  teamColors("Charlotte Hornets")
);

function teamNames(game) {
  return `Home team is : ${game.home.teamName} & Away team is : ${game.away.teamName}`;
}

console.log(teamNames(gameObject()));

function playersNumbers(teamName) {
  const game = gameObject();
  const homePlayers = game.home.players;
  const awayPlayers = game.away.players;
  const jerseys = [];
  if (game.home.teamName === teamName) {
    for (const player in homePlayers) jerseys.push(homePlayers[player].number);
  } else {
    for (const player in awayPlayers) jerseys.push(awayPlayers[player].number);
  }
  return jerseys;
}

console.log("Brooklyn Nets Team Jerseys", playersNumbers("Brooklyn Nets"));

function playerStats(playerName) {
  return players()[playerName];
}

console.log("Alan Anderson stats : ", playerStats("Alan Anderson"));

function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoe;
  for (const player in players()) {
    if (largestShoeSize < players()[player].shoe) {
      largestShoeSize = players()[player].shoe;
      playerWithLargestShoe = player;
    }
  }
  return `Rebounds for player ${playerWithLargestShoe} who has big shoe number are ${
    players()[playerWithLargestShoe].rebounds
  }`;
}

console.log(bigShoeRebounds());

function mostPointsScored() {
  let maxPoints = 0;
  let playerWithMaxPoints;
  for (const player in players()) {
    if (maxPoints < players()[player].points) {
      maxPoints = players()[player].points;
      playerWithMaxPoints = player;
    }
  }
  return `${playerWithMaxPoints} has scored the most points :  ${
    players()[playerWithMaxPoints].points
  }`;
}

console.log(mostPointsScored());

function winningTeam() {
  const game = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  for (const player in game.home.players) {
    homeTeamPoints += game.home.players[player].points;
  }
  for (const player in game.away.players) {
    awayTeamPoints += game.away.players[player].points;
  }
  return homeTeamPoints > awayTeamPoints
    ? `Home Team (${game.home.teamName}) is the winning team with total points of : ${homeTeamPoints}`
    : `Away Team (${game.away.teamName}) is the winning team with total points of : ${awayTeamPoints}`;
}

console.log(winningTeam());

function playerWithLongestName() {
  const playersNames = [];
  for (const player in players()) {
    playersNames.push(player);
  }
  const namesLength = playersNames.map((name) => name.length);
  const maxLength = Math.max(...namesLength);
  const maxLengthIndex = namesLength.indexOf(maxLength);
  return playersNames[maxLengthIndex];
}

console.log("The player with the longest name is : ", playerWithLongestName());

function doesLongNameStealATon() {
  const playerWithLongestNameSteals = players()[playerWithLongestName()].steals;
  for (const player in players()) {
    if (players()[player].steals > playerWithLongestNameSteals) return false;
  }
  return true;
}

console.log(
  "Does the player with the longest name has the most steals? ",
  doesLongNameStealATon()
);
