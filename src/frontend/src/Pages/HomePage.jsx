import React ,{useEffect, useState} from 'react';
import TeamTile from '../Components/TeamTile';
import './HomePage.scss';

function HomePage() {

    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        const fetchAllTeams = async () => {
            const response = await fetch ('http://localhost:8080/teams');
            const data = await response.json();
            // console.log(data);
            setTeams(data);
        };
        fetchAllTeams();
    },[setTeams]);
  return (
    <div className='homePage'>
        <div className="headerSection">
            <h1>IPL Dashboard</h1>
        </div>
        <div className="teamGridSection">
            {teams.map(team => <TeamTile teamName={team.teamName} key={team.id}/>)}
        </div>
    </div>
  )
}

export default HomePage;
