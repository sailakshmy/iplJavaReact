import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    const [error, setError] = useState(false);
    const {teamName} = useParams();
    useEffect(()=>{
        const fetchMatches = async () =>{
            const response = await fetch(`http://localhost:8080/team/${teamName}`);
            const data = await response.json();
            console.log(data);
            if(data.status === 500) {
                setError(true);
            }
            else setTeam(data);
        };
        fetchMatches();
    },[teamName]);

    if(error)
        return <h1> Team not found!</h1>
    return (
        <div className='teamPage'>
            <h2>{team.teamName}</h2>
            {team.matches.map((match, index)=>{
                if(index === 0)
                    return <LatestMatchCard key={match.id} match={match} teamName={team.teamName}/>;
                else return <MatchCard key={match.id} match={match} teamName={team.teamName}/>;
            })}
        </div>
    )
}

export default TeamPage;
