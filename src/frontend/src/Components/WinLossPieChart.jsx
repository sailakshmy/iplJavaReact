import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';


function WinLossPieChart({wins, loss}) {
    const dataForPieChart = [
        {title: 'Loss', value: loss, color:'#a34d5d'},
        {title: 'Wins', value: wins, color:'#4da375'}
]
  return (
    <div>
      <PieChart data={dataForPieChart} radius={40}/>
    </div>
  )
}

export default WinLossPieChart
