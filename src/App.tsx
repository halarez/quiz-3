import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthLayout } from './Layout/Authlayout'
import { MainLayout } from './Layout/Mainlayout'
import { Login } from './componants/Login'
import { Home } from './componants/Home'
import { Shop } from './componants/Shop'
import { Cart } from './componants/Cart'
import { About } from './componants/about'
import { Account } from './componants/account'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {!isLoggedIn ? (
        <AuthLayout>
          <Login onLoginSuccess={handleLoginSuccess} />
        </AuthLayout>
      ) : (
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </MainLayout>
        </Router>
      )}
    </>
  )
}

export default App
