import React from 'react';

function MatchCard({ match }) {
    return (
        <div className='matchCard'>
            <h4>Match Details</h4>
            <p>{match.team1} vs {match.team2}</p>

        </div>
    )
}

export default MatchCard;
