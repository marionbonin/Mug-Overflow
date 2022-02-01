import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({ children }) {
  const auth = localStorage.getItem('token');
  return auth ? children : <Navigate replace to="/connexion" />;
}
