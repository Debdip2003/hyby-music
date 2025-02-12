import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import loginBg from "../assets/loginbg.png"; // Import the image

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Fake admin credentials
  const FAKE_ADMIN = {
    username: "admin",
    password: "password123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      credentials.username === FAKE_ADMIN.username &&
      credentials.password === FAKE_ADMIN.password
    ) {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <img
        src={loginBg}
        alt="Login Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Login Card */}
      <div className="relative z-10 shadow-lg rounded-lg p-8 w-full max-w-sm border-2 border-white bg-white/30 backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-700 text-sm text-center mb-6">{error}</p>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Username Input */}
          <div>
            <label className="block mb-2 text-white">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 text-black placeholder-gray-700"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-white">Password</label>
            <div className="flex justify-center items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 bg-white/50 text-black placeholder-gray-700"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
              <button
                type="button"
                className="transform -translate-y-1/2 mt-4 text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-white">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="text-blue-300 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          {credentials.username && credentials.password ? (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
