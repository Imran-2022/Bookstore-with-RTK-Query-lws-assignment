import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddBook/>}/>
        <Route path='/edit/:editId' element={<EditBook/>}/>
      </Routes>
    </div>
  )
}

export default App
