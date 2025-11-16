import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import MemberDetailPage from './pages/MemberDetailPage';
import ContactPage from './pages/ContactPage';
import RegistrationPage from './pages/RegistrationPage'; // NEW IMPORT
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminPage.jsx';
import { supabase } from './supabaseClient';

// Protected Route Component
function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/admin-login" replace />;
}

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check for active session on component mount
  useEffect(() => {
    checkAuthState();
    
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          setIsAuthenticated(true);
        } else if (event === 'SIGNED_OUT') {
          setIsAuthenticated(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const checkAuthState = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    } catch (error) {
      console.error('Error checking auth state:', error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
      sessionStorage.removeItem('adminAuthenticated');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700">Loading...</p>
        </div>
      </div>
    );
  }

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
        
        {/* Individual Member Detail Page */}
        <Route
          path="/member/:id"
          element={
            <>
              <Navbar />
              <MemberDetailPage />
              <Footer />
            </>
          }
        />
        
        {/* NEW ROUTE: Registration Page */}
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <RegistrationPage />
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