import { useState } from 'react'
import { originals, action, comedy, horror, documentaries} from './Urls'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Posters from './Components/Posters/Posters'

function App() {

  return (
    <>
     <Navbar  />
     <Banner />
     <Posters url={originals} title='Netflix Originals'/>
     <Posters url={action} title='Action' isSmall/>
     <Posters url={comedy} title='comedy' isSmall/>
     <Posters url={horror} title='horror' isSmall/>
     <Posters url={documentaries} title='documentaries' isSmall/>
   </>
  )
}

export default App
