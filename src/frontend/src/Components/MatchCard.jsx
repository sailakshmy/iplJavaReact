import React from 'react';
import {Link} from 'react-router-dom';

function MatchCard({ match, teamName }) {
    const otherTeam = match.team1 ===  teamName ? match.team2 : match.team1;
    return (
        <div className='matchCard'>
            <h4>Match Details</h4>
            <h3> vs <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h3>
            <p>{match.winningTeam} won by {match.margin} {match.wonBy} </p>
        </div>
    )
}

export default MatchCard;
