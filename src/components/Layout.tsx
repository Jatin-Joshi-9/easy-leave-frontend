import { Outlet } from 'react-router'
import AppSidebar  from './app-sidebar'
import { SidebarTrigger } from './ui/sidebar'

const Layout = () => {
  return (
    <>
        <AppSidebar />
        <div>
          <SidebarTrigger />
          <Outlet />
        </div>
    </>
  )
}

export default Layout
