function solution(players, callings) {
    const playerDict = {}
    players.forEach((player, pIdx) => playerDict[player] = pIdx)

    for(let i = 0 ; i < callings.length ; i ++) {
        const curPlayer = callings[i]
        const playerIdx = playerDict[curPlayer]
        const slowerPlayer = players[playerIdx-1]

        players[playerIdx-1] = curPlayer
        players[playerIdx] = slowerPlayer

        playerDict[curPlayer] = playerIdx-1
        playerDict[slowerPlayer] = playerIdx
    }
    return players
}