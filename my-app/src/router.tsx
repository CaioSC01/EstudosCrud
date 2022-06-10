import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Form from './page/Form'
import { Navbar } from './components/Navbar'
import { Topnav } from './components/Topnav'
import { Campanha } from './page/Campanha'
import { ClassificCli } from './page/ClassifcCli'
import { GroupCli } from './page/GroupCli'
import Edit from './page/Edit'

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
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
