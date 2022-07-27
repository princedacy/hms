export default function Login() {
  const handleClick = (e) => {
    e.preventDefault()
    const form = {
      email: e.target.username.value,
      password: e.target.password.value,
    };
    fetch("https://api.storerestapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="grid h-screen place-items-center bg-white">
      <form onSubmit={handleClick}>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-3 py-2 bg-white border border-primary-gray rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-white border border-primary-gray rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <button
          type="submit"
          className="w-48 my-4 px-4 py-1 text-sm bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-sm"
        >
          Login
        </button>
      </form>
    </div>
  );
}
