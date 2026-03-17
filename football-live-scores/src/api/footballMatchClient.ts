import type { CreateFootballMatchRequest } from '../features/create-football-match/create-football-match-request'
import { httpClient } from './httpClient'

export async function createFootballMatch(payload: CreateFootballMatchRequest) {
  const { data } = await httpClient.post('/api/football-match', payload)
  return data
}

export async function getFootballMatch(localTeam: string, awayTeam: string, matchDate: string) {
  const { data } = await httpClient.get(`/api/football-match/${encodeURIComponent(localTeam)}/${encodeURIComponent(awayTeam)}/${encodeURIComponent(matchDate)}`)
  return data
}

