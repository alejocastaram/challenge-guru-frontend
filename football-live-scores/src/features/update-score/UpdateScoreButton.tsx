import { useState } from "react";
import type { UpdateScoreRequest } from "./update-score-request";
import { updateScore } from "../../api/footballMatchClient";
import { useNavigate } from "react-router-dom";

interface UpdateScoreProps {
    request: UpdateScoreRequest
}

export function UpdateScoreButton({ request }: UpdateScoreProps) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const handleUpdateScore = async () => {
        try {
            setLoading(true)

            const data = await updateScore(request)
            navigate("/football-match", {
                state: { match: data }
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                type="submit"
                className="btn btn-outline-dark"
                onClick={handleUpdateScore}
            >
                {loading ? (
                    "Actualizando"
                ) : (
                    <>
                        Gooool
                    </>
                )}
            </button>
        </>
    )
}