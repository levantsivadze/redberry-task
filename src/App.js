import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
function App() {
	return (
    
		<div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/1' element={<PersonalInfo/>}/>
        </Routes>
      
			{/* <LandingPage /> */}
			{/* <PersonalInfo /> */}
			{/* <Pagination /> */}
      </div>
	)
}

export default App
