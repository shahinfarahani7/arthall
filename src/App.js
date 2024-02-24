

import Navbar from "./layout/navbar/Navbar";
import Content from './layout/content/Content'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import AddToDo from "./pages/add_to_do/AddToDo";



function App() {
  return (
    <>
      <Navbar />
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddToDo />} />
        </Routes>
      </Content>
    </>
  )
}

export default App;
