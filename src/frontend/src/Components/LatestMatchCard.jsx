import React from 'react';
import {Link} from 'react-router-dom';

function LatestMatchCard({match, teamName}) {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    return (
        <div className='latestMatchCard'>
            <h3>Latest Matches</h3>
            <h1>vs <Link to={`/teams/${otherTeam}`}> {otherTeam}</Link></h1>
            <h2>{match.date}</h2>
            <h3>at {match.venue}</h3>
            <h3>{match.winningTeam} won by {match.margin} {match.wonBy}</h3>
        </div>
    )
}

export default LatestMatchCard;
