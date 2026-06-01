import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react"; // 👈 ArrowLeft ikonkasini qo'shdik

const Login: React.FC = () => {
  const navigate = useNavigate();

  // Inputlar holati
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("admin")) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#E30A17] via-[#F25A1D] to-[#F2B705] p-4 sm:p-6 md:p-8 select-none font-sans">
      <div className="w-full max-w-105 bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 sm:p-10 space-y-6 transition-all duration-300 transform hover:scale-[1.01]">
        {/* ⬅️ Chiroyli orqaga qaytish tugmasi */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-[#E30A17] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Orqaga</span>
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-[#E30A17] rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto shadow-lg shadow-red-600/20 active:scale-95 transition-transform cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-none stroke-current"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="20" x2="18" y2="20" />
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-gray-950 tracking-tight">
            Burger<span className="text-[#E30A17]">Uz</span>
          </h2>
          <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
            Sign In
          </p>
        </div>

        {/* Forma qismi (Minimalist & Clean) */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 ml-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="example@burger.uz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 transition-all text-gray-900 placeholder:text-gray-300 font-medium shadow-sm"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-200 px-4 pr-11 py-2.5 rounded-xl text-sm focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/5 transition-all text-gray-900 placeholder:text-gray-300 font-medium shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Sign In Tugmasi */}
          <button
            type="submit"
            className="w-full bg-[#E30A17] text-white font-bold py-3 rounded-xl shadow-lg shadow-red-600/10 hover:bg-red-700 active:scale-[0.98] transition-all text-center text-sm font-sans mt-3 tracking-wide"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
