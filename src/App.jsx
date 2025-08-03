import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminPage.jsx';

// Protected Route Component

// Admin Login Route Component with redirect handling
function AdminLoginRoute({ children, isAuthenticated, onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (authStatus) => {
    onLogin(authStatus);
    if (authStatus) {
      navigate('/admin', { replace: true });
    }
  };

  return !isAuthenticated ? (
    <div>
      {children && 
        children.type === AdminLoginPage ? 
        <AdminLoginPage onLogin={handleLogin} /> : 
        children
      }
    </div>
  ) : (
    <Navigate to="/admin" replace />
  );
}

// Admin Dashboard Route Component with logout handling
function AdminDashboardRoute({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/admin-login', { replace: true });
  };

  return isAuthenticated ? (
    <AdminDashboard onLogout={handleLogout} />
  ) : (
    <Navigate to="/admin-login" replace />
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user was previously authenticated (optional: persist login state)
    const savedAuthState = sessionStorage.getItem('adminAuthenticated');
    return savedAuthState === 'true';
  });

  // Save authentication state to sessionStorage (optional: for session persistence)
  useEffect(() => {
    sessionStorage.setItem('adminAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Clear any stored auth data
    sessionStorage.removeItem('adminAuthenticated');
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/members"
          element={
            <>
              <Navbar />
              <MembersPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactPage />
              <Footer />
            </>
          }
        />
        
        {/* Admin Routes */}
        <Route
          path="/admin-login"
          element={
            <AdminLoginRoute 
              isAuthenticated={isAuthenticated} 
              onLogin={handleLogin}
            >
              <AdminLoginPage />
            </AdminLoginRoute>
          }
        />
        
        <Route
          path="/admin"
          element={
            <AdminDashboardRoute 
              isAuthenticated={isAuthenticated} 
              onLogout={handleLogout}
            />
          }
        />

        {/* Redirect /admin/* routes to /admin if authenticated, otherwise to login */}
        <Route
          path="/admin/*"
          element={
            isAuthenticated ? 
              <Navigate to="/admin" replace /> : 
              <Navigate to="/admin-login" replace />
          }
        />

        {/* Catch all route - redirect to home */}
        <Route 
          path="*" 
          element={<Navigate to="/" replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;