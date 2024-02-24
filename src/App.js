
import Layout from "./layout/Layout";
import Navbar from "./layout/navbar/Navbar";
import Content from './layout/content/Content'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import AddToDo from "./pages/add_to_do/AddToDo";
import List from "./List";


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
