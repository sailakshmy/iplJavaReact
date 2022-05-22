import React from 'react';
import {Link} from 'react-router-dom';
import './YearSelector.scss';

function YearSelector({teamName}) {
    const years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;
    for(let i=startYear;i<=endYear; i++){
        years.push(i);
    }
  return (
    <div className='yearSelector'>
      {years.map(year=> <h4 key={year} className='year'>
          <Link to={`/teams/${teamName}/matches/${year}`} >
            {year}
          </Link>
        </h4>)}
    </div>
  )
}

export default YearSelector;
