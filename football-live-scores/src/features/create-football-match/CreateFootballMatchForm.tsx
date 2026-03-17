import type React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createFootballMatch } from '../../api/footballMatchClient'
import type { CreateFootballMatchRequest } from './create-football-match-request'
import { BackButton } from '../../components/common/back-button/BackButton'
import TeamSelect from '../../components/common/team-select/TeamSelect'

export function CreateFootballMatchForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState<CreateFootballMatchRequest>({
    localTeam: '',
    localTeamImageUrl: '',
    awayTeam: '',
    awayTeamImageUrl: '',
    stadium: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      await createFootballMatch(form)
      setSuccess('Partido creado correctamente')
    } catch (err) {
      console.error(err)
      setError('Ocurrió un error al crear el partido')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <BackButton />
      <div className='container py-4'>
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="h4 mb-3">Crear partido</h2>
            <p className="text-muted mb-4">
              Completa la información del encuentro para registrarlo.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="localTeam">
                    Equipo local
                  </label>
                  <div>
                    <TeamSelect
                      label="Selecciona un equipo"
                      value={form.localTeam}
                      onChange={(value) =>
                        setForm((prev) => ({ ...prev, localTeam: value }))
                      }
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="awayTeam">
                    Equipo visitante
                  </label>
                  <TeamSelect
                    label="Selecciona un equipo"
                    value={form.awayTeam}
                    onChange={(value) =>
                      setForm((prev) => ({ ...prev, awayTeam: value }))
                    }
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="localTeamImageUrl">
                    URL escudo equipo local
                  </label>
                  <input
                    id="localTeamImageUrl"
                    type="url"
                    name="localTeamImageUrl"
                    value={form.localTeamImageUrl}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="https://..."
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="awayTeamImageUrl">
                    URL escudo equipo visitante
                  </label>
                  <input
                    id="awayTeamImageUrl"
                    type="url"
                    name="awayTeamImageUrl"
                    value={form.awayTeamImageUrl}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="https://..."
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="stadium">
                    Estadio
                  </label>
                  <input
                    id="stadium"
                    type="text"
                    name="stadium"
                    value={form.stadium}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Atanasio Girardot"
                  />
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creando…' : 'Crear partido'}
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate('/')}
                >
                  Cancelar
                </button>

                {error && <span className="text-danger small">{error}</span>}
                {!error && success && (
                  <span className="text-success small">{success}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

