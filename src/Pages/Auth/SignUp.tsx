import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Signup2Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
 
}

const Signup2 = ({ heading = "Signup" }: Signup2Props) => {

  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [password1, setPassword1] = useState<string>("")
  const [password2, setPassword2] = useState<string>("")
  const [error, setError] = useState<boolean>(false)

    const navigate = useNavigate()


    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/connect')

        if(password1 !== password2) {

        }
    }

  return (
    <section className="bg-white dark:bg-[rgb(31,31,59)] h-screen transition-colors duration-500">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-5 lg:justify-start">
          <div
            className="transition-colors duration-500 border border-gray-700 
            bg-gray-900 text-gray-100 
            dark:bg-gray-50 dark:text-gray-900 
            flex w-full max-w-xl flex-col items-center gap-y-4 rounded-xl px-8 py-7 shadow-lg"
          >
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-600 bg-gray-800 text-gray-200 dark:border-gray-300 dark:bg-white dark:text-gray-900 rounded px-3 py-[6px] text-sm w-full transition-colors duration-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium">Password</label>
              <input 
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                type="password"
                placeholder="Password"
                className="border border-gray-600 bg-gray-800 text-gray-200 dark:border-gray-300 dark:bg-white dark:text-gray-900 rounded px-3 py-[6px] text-sm w-full transition-colors duration-500"
                required
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <input 
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-600 bg-gray-800 text-gray-200 dark:border-gray-300 dark:bg-white dark:text-gray-900 rounded px-3 py-[6px] text-sm w-full transition-colors duration-500"
                required
              />
            </div>

            <button
              onClick={submit}
              disabled={loading}
              type="submit"
              className={`w-full bg-white text-black dark:bg-gray-900 dark:text-white cursor-pointer rounded-md py-2 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-500 ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Registering...
              </div>
            ) : (
              'Create Account'
            )}
            </button>
            {error && (
              <span className="mt-3 text-center text-red-500 text-sm">{error}</span>
            )}
          </div>

          <div className="text-muted-foreground flex justify-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Already a user? <Link className="text-black dark:text-white" to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup2;
