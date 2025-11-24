import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface SignIn2Props {
  heading?: string;
}

const SignIn = ({ heading = "Welcome Back" }: SignIn2Props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

   // console.log(typeof email)
    //console.log(typeof password)
    
    try {
      //  API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const loginPort = import.meta.env.VITE_BACKEND_URL
      const response = await axios.post(`${loginPort}/signin`,
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        const token = localStorage.getItem("token")
        console.log("here's you token", token)
        navigate("/home");
      } else {
        setError(response.data.error || "Invalid email or password. Please try again.")
        console.error(error)
      }
    } catch (err) {
      setError("Login Failed")
    } finally {
      setLoading(false)
    }
  };

  return (
    <section className="mt-10 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-500">
      <div className="flex min-h-screen">
      
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-gray-800 dark:to-purple-800 text-white p-12 flex-col justify-between">
          <div className="flex items-center space-x-3">
          </div>

          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">Welcome back!</h2>
            <p className="text-blue-100 text-lg opacity-90">
              Sign in to continue your Study and access your personalized dashboard with all your saved preferences.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
            <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
            <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>

 
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
   
            <div className="lg:hidden flex justify-center mb-8">
              <div className="flex items-center space-x-3">
   
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {heading}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link 
                  to="/register" 
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>

           
            <div className="grid grid-cols-2 gap-3 mb-8">
              <button 
                type="button"
                className="flex cursor-pointer items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                  <FaGoogle />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button 
                type="button"
                className="flex cursor-pointer items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <FaGithub />
                <span className="text-sm font-medium">Github</span>
              </button>
            </div>
 
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                  </label>
                  <Link to="/reset" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:scale-[0.98] focus:ring-4 focus:ring-blue-500/20"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  {error}
                </div>
              )}
            </form>

            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              By signing in, you agree to our{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;