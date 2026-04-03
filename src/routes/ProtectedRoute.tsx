import useAuthUser from '@/hooks/useAuthUser';
import React from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps): React.JSX.Element {
  const { user } = useAuthUser();
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}