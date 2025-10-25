import { Route, Routes } from 'react-router-dom'
import Login from './pages/authentication/Login'
import Registration from './pages/authentication/Registration'
import Forgot from './pages/authentication/Forgot'
import AdminDashboard from './pages/admin/AdminDashboard'
import HotelBookingDashboard from './pages/hotel/HotelBookingDashboard'
import Profile from './pages/profile/Profile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/hotel" element={<HotelBookingDashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
