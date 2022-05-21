import React from 'react';
import {Link} from 'react-router-dom';
import './MatchCard.scss';

function MatchCard({ match, teamName }) {
    const otherTeam = match.team1 ===  teamName ? match.team2 : match.team1;
    const winner = match.winningTeam === teamName;

    return (
        <div className={winner? `matchCard winnerCard` : `matchCard loserCard`}>
            <h4>Match Details</h4>
            <span className="vsSection">vs</span>
            <h3><Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h3>
            <p className='matchOutcomeSection'>{match.winningTeam} won by {match.margin} {match.wonBy} </p>
        </div>
    )
}

export default MatchCard;
