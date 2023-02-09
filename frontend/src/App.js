import React from 'react'
import Home from './Components/Home/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AboutPage from './Components/Pages/AboutPage'
import AwardPage from './Components/Pages/AwardPage'
import MediaCentrePage from './Components/Pages/MediaCentrePage'
import HomePage from './Components/Pages/HomePage'
import ContactUsPage from './Components/Pages/ContactUsPage'
import OurPartners from "./Components/Pages/OurPartnersPage"
import OurPartnersPage from './Components/Pages/admin/OurPartners'
import OurInstitutionsPage from './Components/Pages/OurInstitutionsPage'
import Login from "./Components/Pages/admin/Login"
import AdminHome from "./Components/Pages/admin/AdminHome"
import OurInstitution from './Components/Pages/admin/OurInstitution'
import CorporateClinets from './Components/Pages/admin/CorporateClinets'
import MediaClients from './Components/Pages/admin/Media'
import BlogPage from './Components/Pages/admin/Blog'

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
        <Route exact path='/ourPartners' element={<OurPartners></OurPartners>}></Route>
        <Route exact path='/admin-login' element={<Login/>}></Route>
        <Route exact path='/admin-home' element={<AdminHome/>}></Route>
        <Route exact path='/our-institution' element={<OurInstitution/>}></Route>
        <Route exact path='/corporate-clients' element={<CorporateClinets/>}></Route>
        <Route exact path='/our-partners' element={<OurPartnersPage/>}></Route>
        <Route exact path='/media-page' element={<MediaClients/>}></Route>
        <Route exact path='/blog-page' element={<BlogPage/>}></Route>
        <Route exact path='' element={<ContactUsPage></ContactUsPage>}></Route>
      </Routes> 
      </BrowserRouter>
      

    </div>
  )
}

export default App