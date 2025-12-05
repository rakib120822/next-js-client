"use client";
import Link from "next/link";

function RegisterPage() {
  const { register, setUser, updateInfo, setLoading, googleLogin } = useAuth();

  const validatePassword = (password) => {
    // Check minimum length
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    // Check uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter (A–Z).";
    }

    // Check lowercase letter
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter (a–z).";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const verficationPassword = validatePassword(password);
    if (verficationPassword) {
      return alert(verficationPassword);
    }

    register(email, password)
      .then((res) => {
        setUser(res.user);
        updateInfo(name, photoUrl).then(() => {
          alert("Successfully Created");
        });

        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        alert("Successfully Created");
        setLoading(false);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="w-full flex justify-center my-[100px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  ">
        <div className="card-body border border-red-600 ">
          <div className="flex w-full flex-col ">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="name"
                  name="name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="name"
                  name="photoUrl"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <Link href={"/login"} className="link link-hover">
                    Already have account ? Please Login
                  </Link>
                </div>
                <button className="btn btn-outline border-red-600 text-red-600 mt-4">
                  Register
                </button>
              </fieldset>
            </form>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
