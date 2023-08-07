import { Chart } from 'react-google-charts'
import axios from 'axios';
import React, { useEffect, useState } from 'react';



let options = {
  title: 'Cricket Score',
  pieChart: '0.4',
  slices: [
    {
      color: 'green'
    },
    {
      color: 'blue'
    },
    {
      color: 'red'
    }
  ],
  legend: {
    position: "left"
  }
}
function App() {
  const [score, setscore] = useState(
    [['username', 'score'], ['Rohit sharma', 40], ['virat', 11]]
  )
  async function getscore() {
    let response = await axios.get('http://localhost:4999/livescore')
    console.log(response.data.Rohitsharma)
    console.log(response.data.virat)
    setscore(
      [['username', 'score'], ['Rohit sharma', response.data.Rohitsharma], 
      ['virat', response.data.virat]]
    )
  }
  useEffect(function () {
    getscore()
  }, [])

  return (
    <div>
      <div>work progress</div>
      <Chart
        chartType='LineChart'
        data={score}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}

export default App