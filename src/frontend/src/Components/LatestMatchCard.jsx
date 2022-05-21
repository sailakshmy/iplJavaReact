import React from 'react';
import { Link } from 'react-router-dom';
import './LatestMatchCard.scss';

function LatestMatchCard({ match, teamName }) {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const winner = match.winningTeam === teamName;
    return (
        <div className={winner? `latestMatchCard winnerCard` : `latestMatchCard loserCard`}>
            <div className='matchSummarySection'>
                <span className="vsSection">vs</span>
                <h1><Link to={`/teams/${otherTeam}`}> {otherTeam}</Link></h1>
                <h2 className='matchDateSection'>{match.date}</h2>
                <h3 className='matchVenueSection'>at {match.venue}</h3>
                <h3 className='matchOutcomeSection'>{match.winningTeam} won by {match.margin} {match.wonBy}</h3>
            </div>
            <div className="additionalDetailsSection">
                <h3 className="firstInningsTeamSectionTitle">First Innings</h3>
                <p className="firstInningsTeamSection">{match.firstInningsTeam}</p>
                <h3 className="secondInningsTeamSectionTitle">Second Innings</h3>
                <p className="secondInningsTeamSection">{match.secondInningsTeam}</p>
                <h3 className="manOfMatchSectionTitle">Man Of the Match</h3>
                <p className="manOfMatchSection">{match.playerOfMatch}</p>
                <h3 className="umpireSectionTitle">Umpires</h3>
                <p className="umpireSection">{match.umpire1}, {match.umpire2}</p>
            </div>


        </div>
    )
}

export default LatestMatchCard;
