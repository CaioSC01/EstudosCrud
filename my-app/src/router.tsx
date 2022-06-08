import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Form from './page/Form'
import { Navbar } from './components/Navbar'
import { Topnav } from './components/Topnav'
import { Campanha } from './page/Campanha'
import { ClassificCli } from './page/ClassifcCli'
import { GroupCli } from './page/GroupCli'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Topnav />
      <Routes>
        <Route path="/" element={<div>oi</div>} />
        <Route path="/classific" element={<ClassificCli />} />
        <Route path="/group" element={<GroupCli />} />
        <Route path="/campanha" element={<Campanha />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
