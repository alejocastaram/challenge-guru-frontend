import { useState } from "react";
import { getFootballMatch } from "../../api/footballMatchClient";
import TeamSelect from "../../components/common/team-select/TeamSelect";
import { useNavigate } from "react-router-dom";

export default function SearchFootballMatch() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        localTeam: "",
        awayTeam: "",
        matchDate: ""
      });
    
      const [loading, setLoading] = useState(false);
    
      const handleSearch = async () => {
        if (!form.localTeam || !form.awayTeam || !form.matchDate) return;
    
        try {
          setLoading(true);
    
          const data = await getFootballMatch(
            form.localTeam,
            form.awayTeam,
            form.matchDate
          );
    
          navigate("/football-match", {
            state: { match: data }
          });
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
      const isDisabled =
        !form.localTeam || !form.awayTeam || !form.matchDate;
    
      return (
        <div className="container mt-4">
    
          <div className="d-flex gap-2 align-items-center flex-wrap">
    
            <div style={{ minWidth: "220px", flex: 1 }}>
              <TeamSelect
                value={form.localTeam}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, localTeam: value }))
                }
              />
            </div>
    
            <div style={{ minWidth: "220px", flex: 1 }}>
              <TeamSelect
                value={form.awayTeam}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, awayTeam: value }))
                }
              />
            </div>
    
            <input
              type="date"
              className="form-control"
              style={{ maxWidth: "180px" }}
              value={form.matchDate}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, matchDate: e.target.value }))
              }
            />
    
            <button
              className="btn btn-primary d-flex align-items-center gap-2"
              onClick={handleSearch}
              disabled={isDisabled || loading}
            >
              {loading ? (
                "Buscando..."
              ) : (
                <>
                  🔍 Buscar
                </>
              )}
            </button>
          </div>
    
        </div>
      );
}