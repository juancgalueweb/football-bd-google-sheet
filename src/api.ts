import type { Match } from './types'

const url = process.env.NEXT_PUBLIC_BD_URL

// https://www.youtube.com/watch?v=bk37Kf4PT8E&ab_channel=Goncy
// continuar en el minuto 35

const api = {
  match: {
    list: async (): Promise<Match[]> => {
      return await fetch(`${url}`)
        .then(async (res) => await res.text())
        .then((text) => {
          return text
            .split('\n')
            .slice(1)
            .map((row) => {
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
        })
    }
  }
}

export default api
