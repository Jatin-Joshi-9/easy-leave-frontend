import Layout from '@/components/Layout'
import ApplyLeave from '@/pages/ApplyLeave'
import Dashboard from '@/pages/Dashboard'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
const AppRoutes = () : React.JSX.Element => {
  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply-leave" element={<ApplyLeave />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
