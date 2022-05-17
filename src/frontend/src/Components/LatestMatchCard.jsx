import React from 'react';

function LatestMatchCard({match}) {
    return (
        <div className='latestMatchCard'>
            <h3>Latest Matches</h3>
            <h4>{match.team1} vs {match.team2}</h4>

        </div>
    )
}

export default LatestMatchCard;
