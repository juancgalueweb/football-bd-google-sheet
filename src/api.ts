import fs from 'node:fs'
import type { Match, Player } from './types'

const data = fs
  .readFileSync('public/bd.tsv', 'utf8')
  .split('\n')
  .splice(1)
  .filter((line) => line.trim() !== '')

const api = {
  matches: {
    list: (): Match[] => {
      return data.map((row) => {
        const [id, date, team1, team2, goals1, goals2] = row.split('\t')

        return {
          id,
          date,
          team1,
          team2,
          goals1: parseInt(goals1),
          goals2: parseInt(goals2)
        }
      })
    }
  },
  players: {
    list: (): Player[] => {
      const matches = api.matches.list()
      const players = new Map<string, Player>()

      for (const { team1, team2, goals1, goals2 } of matches) {
        const players1 = team1.split(',')
        const players2 = team2.split(',')

        for (let name of players1) {
          name = name.trim()

          const player = players.get(name) ?? { name, matches: 0, score: 0 }
          player.matches++
          player.score += goals1 - goals2

          players.set(name, player)
        }

        for (let name of players2) {
          name = name.trim()

          const player = players.get(name) ?? { name, matches: 0, score: 0 }
          player.matches++
          player.score += goals2 - goals1

          players.set(name, player)
        }
      }

      return Array.from(players.values())
        .map((player) => ({
          ...player,
          score: Math.round(player.score / player.matches)
        }))
        .sort((a, b) => b.score - a.score)
    }
  }
}

export default api
