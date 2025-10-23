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

    const navigate = useNavigate()
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/connect')
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
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-600 bg-gray-800 text-gray-200 dark:border-gray-300 dark:bg-white dark:text-gray-900 rounded px-3 py-[6px] text-sm w-full transition-colors duration-500"
                required
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-600 bg-gray-800 text-gray-200 dark:border-gray-300 dark:bg-white dark:text-gray-900 rounded px-3 py-[6px] text-sm w-full transition-colors duration-500"
                required
              />
            </div>

            <button
              onClick={submit}
              type="submit"
              className="w-full bg-white text-black dark:bg-gray-900 dark:text-white cursor-pointer rounded-md py-2 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-500"
            >
              Create Account
            </button>
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
