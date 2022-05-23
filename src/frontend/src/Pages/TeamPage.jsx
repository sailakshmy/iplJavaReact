import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LatestMatchCard from '../Components/LatestMatchCard';
import MatchCard from '../Components/MatchCard';
import WinLossPieChart from '../Components/WinLossPieChart';
import './TeamPage.scss';

function TeamPage() {

    const [team, setTeam] = useState({
        id: null,
        teamName: '',
        matches: [],
        totalWins: 0,
        totalMatches: 0,
    });
    const [error, setError] = useState(false);
    const { teamName } = useParams();
    useEffect(() => {
        const fetchTeam = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
            const data = await response.json();
            // console.log(data);
            if (data.status === 500) {
                setError(true);
            }
            else setTeam(data);
        };
        fetchTeam();
    }, [teamName]);

    if (error)
        return <h1> Team not found!</h1>
    return (
        <div className='teamPage'>
            <div className='teamNameSection'>
                <h2>{team.teamName}</h2>
            </div>
            <div className='winLossSection'>Wins/Losses
                <WinLossPieChart wins={team.totalWins} loss={team.totalMatches-team.totalWins} />
            </div>
            {team.matches.map((match, index) => {
                if (index === 0)
                    return (
                        <div className='latestMatchSection' key={match.id}>
                            <h3>Latest Matches</h3>
                            <LatestMatchCard match={match} teamName={team.teamName} />
                        </div>
                    )
                else return (
                    <div className='matchCardSection' key={match.id}>
                        <MatchCard match={match} teamName={team.teamName} />
                    </div>
                );
            })}
            <div className="moreMatchesSection">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More {'>'}</Link>
            </div>
        </div>
    )
}

export default TeamPage;
