import { useState } from 'react'
import { AuthLayout } from './Layout/Authlayout'
import { MainLayout } from './Layout/Mainlayout'
import { Login } from './componants/Login'
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
        <MainLayout>
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif' }}>Welcome to Rymo Dashboard</h1>
            <p style={{ color: '#888', marginTop: '8px' }}>You have successfully authenticated.</p>
          </div>
        </MainLayout>
      )}
    </>
  )
}

export default App
