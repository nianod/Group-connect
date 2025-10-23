 

interface Signup2Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Signup2 = ({
  heading = "Signup",
 
 
}: Signup2Props) => {
  return (
    <section className="bg-muted h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-5 lg:justify-start">
          
          <div className="border-muted bg-black text-white flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-7 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border bg-gray-900 text-gray-500 rounded px-3 py-[4px] text-sm w-full"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium text-white">Password</label >
              <input
                type="password"
                placeholder="Password"
                className="border bg-gray-900 text-gray-500 rounded px-3 py-[4px] text-sm w-full"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label className="text-sm font-medium text-white">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border bg-gray-900 text-gray-500 rounded px-3 py-[4px] text-sm w-full"
                required
              />
            </div>
            <button type="submit" className="w-full bg-white cursor-pointer text-black rounded-md py-1 font-semibold text-sm hover:bg-gray-300">
                Create Account
            </button>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
             
            <a
              
              className="text-primary font-medium hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup2 
