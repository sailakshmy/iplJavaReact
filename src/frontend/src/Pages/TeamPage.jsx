import React, { useEffect, useState } from 'react';
import LatestMatchCard from '../Components/LatestMatchCard';
import MatchCard from '../Components/MatchCard';

function TeamPage() {

    const [team, setTeam] = useState({
        id: null,
        teamName: '',
        matches: [],
        totalWins: 0,
        totalMatches: 0,
    });
    useEffect(()=>{
        const fetchMatches = async () =>{
            const response = await fetch('http://localhost:8080/team/Chennai%20Super%20Kings');
            const data = await response.json();
            console.log(data);
            setTeam(data);
        };
        fetchMatches();
    }, []);
    return (
        <div className='teamPage'>
            <h2>{team.teamName}</h2>
            {team.matches.map((match, index)=>{
                if(index === 0)
                    return <LatestMatchCard key={match.id} match={match}/>;
                else return <MatchCard key={match.id} match={match}/>;
            })}
        </div>
    )
}

export default TeamPage;
