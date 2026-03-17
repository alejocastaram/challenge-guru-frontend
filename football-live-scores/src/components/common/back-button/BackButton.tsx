import { useNavigate } from 'react-router-dom'
import './BackButton.css'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <div className="back-button-wrapper">
      <button
        type="button"
        className="btn btn-outline-secondary back-button"
        onClick={() => navigate('/')}
      >
        <span className="back-button-arrow">{'<-'}</span>
        <span>REGRESAR</span>
      </button>
    </div>
  )
}

