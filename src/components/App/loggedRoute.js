import { Navigate } from 'react-router-dom';

const auth = localStorage.getItem('token');

export default function LoggedRoute({ children }) {
  return !auth ? children : <Navigate to="/" />;
}
