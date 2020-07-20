
function gameObject() {

  const data = {
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
                  slamDunks: 1
              },
              "Reggie Evans": {
                  number: 30,
                  shoe: 14,
                  points: 12,
                  rebounds: 12,
                  assists: 12,
                  steals: 12,
                  blocks: 12,
                  slamDunks: 7
              },
              "Brooke Lopez": {
                  number: 11,
                  shoe: 17,
                  points: 17,
                  rebounds: 19,
                  assists: 10,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 15
              },
              "Mason Plumlee": {
                  number: 1,
                  shoe: 19,
                  points: 26,
                  rebounds: 12,
                  assists: 6,
                  steals: 3,
                  blocks: 8,
                  slamDunks: 5
              },
              "Jason Terry": {
                  number: 31,
                  shoe: 15,
                  points: 19,
                  rebounds: 2,
                  assists: 2,
                  steals: 4,
                  blocks: 11,
                  slamDunks: 1
              }
          }
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
                  slamDunks: 2
              },
              "Bismack Biyombo": {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10
              },
              "DeSagna Diop": {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5
              },
              "Ben Gordon": {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0
              },
              "Brendan Haywood": {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 22,
                  blocks: 5,
                  slamDunks: 12
              }
          }
      }
  }

  return data
}

function players(){
  const homePlayers = gameObject()['home']['players'];
  const awayPlayers = gameObject()['away']['players'];
  const allPlayers = Object.assign(homePlayers, awayPlayers);
  return allPlayers;
}

function numPointsScored(playerName){
  return players()[playerName].points;
}

function shoeSize(playerName){
  return players()[playerName].shoe;
}

function getTeamByName (teamName){
  return gameObject().home.teamName == teamName ? gameObject().home
    : gameObject().away.teamName == teamName ? gameObject().away
      : console.log("not found")
  }

  
  function teamColors(teamName){
    return getTeamByName(teamName).colors
  }

function teamNames(){
  names = []
  const homeN = gameObject().home.teamName
  const awayN = gameObject().away.teamName
  names.push(homeN)
  names.push(awayN)
  return names
}

function playerNumbers(teamName){
  let numbers =[]
  let players = getTeamByName(teamName).players
  for (let playerKey in players){
    let playerInfo = players[playerKey]
    numbers.push(playerInfo.number)
  }
  return numbers
}

function playerStats(playerName){
  return players()[playerName]
}

function bigShoeRebounds{
  
}