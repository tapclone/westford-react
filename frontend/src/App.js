import React from 'react'
import Home from './Components/Home/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AboutPage from './Components/Pages/AboutPage'
import AwardPage from './Components/Pages/AwardPage'
import MediaCentrePage from './Components/Pages/MediaCentrePage'
import HomePage from './Components/Pages/HomePage'
import ContactUsPage from './Components/Pages/ContactUsPage'
import OurPartnersPage from './Components/Pages/OurPartnersPage'
import OurInstitutionsPage from './Components/Pages/OurInstitutionsPage'
import Login from "./Components/Pages/admin/Login"
import AdminHome from "./Components/Pages/admin/AdminHome"
import OurInstitution from './Components/Pages/admin/OurInstitution'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage></HomePage>}></Route>
        <Route exact path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route exact path='/awards' element={<AwardPage></AwardPage>}></Route>
        <Route exact path='/mediaCentre' element={<MediaCentrePage></MediaCentrePage>}></Route>
        <Route exact path='/ourInstitution' element={<OurInstitutionsPage></OurInstitutionsPage>}></Route>
        <Route exact path='/ourPartners' element={<OurPartnersPage></OurPartnersPage>}></Route>
        <Route exact path='/admin-login' element={<Login/>}></Route>
        <Route exact path='/admin-home' element={<AdminHome/>}></Route>
        <Route exact path='/our-institution' element={<OurInstitution/>}></Route>
        <Route exact path='' element={<ContactUsPage></ContactUsPage>}></Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App