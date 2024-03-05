import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Competitions from './App/Competitions/page'
import Home from './App/Home/page'
import { Route, Routes } from 'react-router-dom'
import CompetitionDetails from './App/CompetitionsDetails/page'
import NotFound from './App/NotFound/page'

import AddCompetition from './App/AddCompetition/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Routes>

     <Route
          path='/home'
          element={<Home />}
        />
      <Route
        path='/competitions'
        element={<Competitions /> }/>
       <Route path="/competition/:id" element={<CompetitionDetails />} />
        <Route path="/add" element={<AddCompetition />} />
       <Route path="*" element={<NotFound></NotFound>}/>
     </Routes>
    </>
  )
}

export default App
