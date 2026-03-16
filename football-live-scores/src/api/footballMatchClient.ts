import type { CreateFootballMatchRequest } from '../features/create-football-match/create-football-match-request'
import { httpClient } from './httpClient'

export async function createFootballMatch(payload: CreateFootballMatchRequest) {
  const { data } = await httpClient.post('/api/football-match', payload)
  return data
}

