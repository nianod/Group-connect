import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Loader2, XCircle, CheckCircle } from "lucide-react";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
         
      setSuccess("If your email exists in our database, we'll sent you a reset link !");
      setEmail("");
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-10 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-500">
      <div className="flex min-h-screen">
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-gray-800 dark:to-purple-800 text-white p-12 flex-col justify-between">
          <div className="flex items-center space-x-3"></div>

          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">Reset Your Password</h2>
            <p className="text-blue-100 text-lg opacity-90">
              Enter your email address and we'll send you a link to reset your
              password and get back to your studies.
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
              <div className="flex items-center space-x-3"></div>
            </div>

            <div className="mb-6">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Sign In
              </Link>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Forgot Password?
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Enter your email and we'll send you reset instructions.
              </p>
            </div>

            <form onSubmit={submit} className="space-y-6">
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
              <button
                disabled={loading}
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:scale-[0.98] focus:ring-4 focus:ring-blue-500/20"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-5 w-5 text-white" />
                    Sending reset link...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                  <XCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}
              {success && (
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  {success}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;