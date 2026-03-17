import { useState } from "react";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import type { DeleteFootballRequest } from "./delete-football-match-request";
import { deleteFootballMatch } from "../../api/footballMatchClient";
import { data, useNavigate } from "react-router-dom";

interface DeleteFootballMatchProps {
    request: DeleteFootballRequest;
}

export function DeleteFootballMatchButton({ request }: DeleteFootballMatchProps) {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteFootballMatch(request);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button
                className="btn btn-outline-light"
                onClick={() => setShowModal(true)}
            >
                🗑️
            </button>

            <ConfirmDeleteModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
                localTeam={request.localTeam}
                awayTeam={request.awayTeam}
            />
        </>
    );
}