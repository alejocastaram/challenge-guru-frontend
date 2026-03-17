import { useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  localTeam: string;
  awayTeam: string;
}

export function ConfirmDeleteModal({
  show,
  onClose,
  onConfirm,
  localTeam,
  awayTeam
}: Props) {

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const expectedText = `${localTeam} VS ${awayTeam}`;
  const isValid = input === expectedText;

  const handleConfirm = async () => {
    if (!isValid) return;

    try {
      setLoading(true);
      await onConfirm();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title text-danger">
              Confirmar eliminación
            </h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <p>¿Está seguro de borrar el partido?</p>

            <p className="small text-muted">
              Escriba exactamente:
              <strong> {expectedText} </strong>
            </p>

            <input
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Equipo A VS Equipo B"
            />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>

            <button
              className="btn btn-danger"
              disabled={!isValid || loading}
              onClick={handleConfirm}
            >
              {loading ? "Eliminando..." : "Eliminar"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}