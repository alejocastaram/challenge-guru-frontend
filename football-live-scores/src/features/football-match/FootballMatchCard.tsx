import { useLocation } from "react-router-dom";
import { BackButton } from "../../components/common/back-button/BackButton";
import type { FootballMatch } from "./football-match";
import "./FootballMatchCard.css";
import { UpdateScoreButton } from "../update-score/UpdateScoreButton";
import { DeleteFootballMatchButton } from "../delete-football-match/DeleteFootballMatchButton";

export function FootballMatchCard({ }: {}) {
    const location = useLocation();
    const match: FootballMatch = location.state?.match;

    const date = new Date(match.matchDate).toLocaleDateString();

    return (
        <>
            <BackButton />
            <div className="container py-5">
                <div className="card bg text p-4 rounded">
                    <div className="d-flex">
                        <DeleteFootballMatchButton request={{
                            localTeam: match?.localTeam,
                            awayTeam: match?.awayTeam,
                            matchDate: match?.matchDate.split('T')[0]
                        }}></DeleteFootballMatchButton>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">

                        <div className="text-center">
                            <img className="team-logo mb-2" src={match.localTeamImageUrl} />
                            <div>{match.localTeam}</div>
                        </div>

                        <div className="text-center">
                            <UpdateScoreButton request={{
                                localTeam: match?.localTeam,
                                awayTeam: match?.awayTeam,
                                matchDate: match?.matchDate.split('T')[0],
                                scorerTeam: match?.localTeam
                            }}></UpdateScoreButton>
                        </div>

                        <div className="text-center">
                            <div className="small opacity-75">{date}</div>
                            <div className="score">
                                {match.localScore} - {match.awayScore}
                            </div>
                            <div className="small opacity-75">{match.stadium}</div>
                        </div>

                        <div className="text-center">
                            <img className="team-logo mb-2" src={match.awayTeamImageUrl} />
                            <div>{match.awayTeam}</div>
                        </div>

                        <div className="text-center">
                            <UpdateScoreButton request={{
                                localTeam: match?.localTeam,
                                awayTeam: match?.awayTeam,
                                matchDate: match?.matchDate.split('T')[0],
                                scorerTeam: match?.awayTeam
                            }}></UpdateScoreButton>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}