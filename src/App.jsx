import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import './App.css'

const Admin = lazy(() => import('./pages/Admin'))
const Sales = lazy(() => import('./pages/Sales'))

function App() {

  return (
    <Routes>

      <Route index element={<Home />} />


      <Route path='/sales' element={
        <Suspense fallback={<div>Loading Content...</div>}>
          <Sales />
        </Suspense>} />


      <Route path='/admin' element={
        <Suspense fallback={<div>Loading Content...</div>}>
          <Admin />
        </Suspense>} />


    </Routes >
  )
}

export default App
