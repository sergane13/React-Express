import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [backendData, setBackednData] = useState([])

  useEffect(() => 
  {
    fetch("/api")
    .then( response => 
      response.json()
      .then(data => setBackednData(data))
    )
    .catch((err) => 
    {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <div> 
        {backendData.users[0]}
      </div>
    </div>
  );
}

export default App;
