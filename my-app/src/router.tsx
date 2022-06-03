import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Form from './page/Form'
import { Navbar } from './components/Navbar'
import { Topnav } from './components/Topnav'
import { ClassificCli } from './page/ClassifcCli'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Topnav />
      <Routes>
        <Route path="/classific" element={<ClassificCli />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
