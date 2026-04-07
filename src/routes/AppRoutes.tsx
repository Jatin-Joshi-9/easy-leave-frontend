import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';
import Leave from '@/pages/Leave';
import Dashboard from '@/pages/Dashboard';
import Home from '@/components/Home';
import LeaveDetails from '@/pages/LeaveDetails';

const AppRoutes = (): React.JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/leave/:id" element={<LeaveDetails />} />
      </Route>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
