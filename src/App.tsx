import { useState, useEffect } from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { ConfigProvider, theme as antdTheme } from 'antd'
import { lightTheme, darkTheme } from './theme/themeConfig'
import AppRoutes from './AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

const AppLayout = () => {
  const location = useLocation()
  const hideLayout = ['/', '/registration', '/forgot'].includes(location.pathname)

  return (
    <>
      {!hideLayout && <Header />}
      <AppRoutes />
      {!hideLayout && <Footer />}
    </>
  )
}

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  // ✅ Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('darkMode')
    if (storedTheme) {
      setDarkMode(storedTheme === 'true')
    }
  }, [])

  return (
    <ConfigProvider
      theme={
        darkMode
          ? { ...darkTheme, algorithm: antdTheme.darkAlgorithm }
          : { ...lightTheme, algorithm: antdTheme.defaultAlgorithm }
      }
    >
      <Router>
        <AppLayout />
      </Router>
    </ConfigProvider>
  )
}

export default App
