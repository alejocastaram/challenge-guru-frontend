import { useNavigate } from 'react-router-dom'
import SearchFootballMatch from '../search-football-match/SearchFootballMatch'

export function Home() {
  const navigate = useNavigate()

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center gap-3">
              <img
                src="/favicon.svg"
                alt="Football live scores logo"
                width={48}
                height={48}
              />
              <h1 className="display-4 fw-bold mb-0 text-dark">
                Football live scores
              </h1>
            </div>
            <p className="text-muted mt-3">
              Bienvenido, crea y gestiona tus partidos de fútbol en segundos.
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <SearchFootballMatch></SearchFootballMatch>
      </div>

      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => navigate('/create-football-match')}
          >
            Create Football Match
          </button>
        </div>
      </div>
    </main>
  )
}

