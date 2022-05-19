import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LatestMatchCard from '../Components/LatestMatchCard';

function MatchPage() {

  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(false);
  const {teamName, year} = useParams();  

  useEffect(()=>{
      const fetchMatchesByTeamInYear = async ()=>{
          const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
          const data = await response.json();
          console.log(data);
          if(data.length === 0)
          setError(true);
          else
          setMatches(data);
      };
      fetchMatchesByTeamInYear();
  },[teamName, year]);
  if(error)
    return <h1>No Matches found!! Please check the team Name and the year.</h1>
  return (
    <div className='matchPage'>
      <h1>Match Page</h1>
      {matches.map((match)=>( <LatestMatchCard match={match} teamName={teamName} key={match.id} />))}
    </div>
  )
}

export default MatchPage
