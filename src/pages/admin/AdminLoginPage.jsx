import { useState } from "react";
import { Shield, Eye, EyeOff } from "lucide-react";
import logo from "../../assets/logo.png"

function AdminLoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate loading delay
    setTimeout(() => {
      // Simple authentication (in real app, use proper authentication)
      if (loginData.username === "admin" && loginData.password === "nast2024") {
        onLogin(true); // Notify parent component of successful login
      } else {
        setError("Invalid credentials. Please check your username and password.");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 p-2 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <img src={logo} alt="logo"/>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">NAST Admin</h1>
            <p className="text-slate-600 mt-2">Sign in to access the dashboard</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter username"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-12"
                  placeholder="Enter password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700 disabled:opacity-50"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:from-emerald-400 disabled:to-green-400 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[0.98] disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <p className="text-sm text-emerald-700">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: nast2024
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;