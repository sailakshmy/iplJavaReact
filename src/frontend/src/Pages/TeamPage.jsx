import React from 'react';
import LatestMatchCard from '../Components/LatestMatchCard';
import MatchCard from '../Components/MatchCard';

function TeamPage() {
    return (
        <div className='teamPage'>
            <h2>Team Dashboard</h2>
            <LatestMatchCard />
            <MatchCard />
        </div>
    )
}

export default TeamPage;
