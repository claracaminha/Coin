import { useState, useEffect } from 'react'

import Table from './components/Table'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    
    }

    getTasks()
  }, []) 
  

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('https://api.hashdex.io/prod/marketdata/v1/index/NCI/last')
    const data = (await res.json()).constituents

    return data
  }

  return (
    <div className="container">
      <h1>CoinMarketCap</h1>
      <br/>
      <Table tasks={tasks} /> 
    </div>
  );
}

export default App;
