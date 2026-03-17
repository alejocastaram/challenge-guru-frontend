import type { CreateFootballMatchRequest } from '../features/create-football-match/create-football-match-request'
import type { DeleteFootballRequest } from '../features/delete-football-match/delete-football-match-request'
import type { UpdateScoreRequest } from '../features/update-score/update-score-request'
import { httpClient } from './httpClient'

export async function createFootballMatch(payload: CreateFootballMatchRequest) {
  const { data } = await httpClient.post('/api/football-match', payload)
  return data
}

export async function getFootballMatch(localTeam: string, awayTeam: string, matchDate: string) {
  const { data } = await httpClient.get(`/api/football-match/${encodeURIComponent(localTeam)}/${encodeURIComponent(awayTeam)}/${encodeURIComponent(matchDate)}`)
  return data
}

export async function updateScore(payload: UpdateScoreRequest) {
  const { data } = await httpClient.put('/api/football-match', payload)
  return data
}

export async function deleteFootballMatch(payload: DeleteFootballRequest) {
  const { data } = await httpClient.delete('/api/football-match',
    { data: {...payload} }
  )
  return data
}