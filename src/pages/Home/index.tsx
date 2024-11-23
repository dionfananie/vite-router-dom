// import { useLoaderData, Await } from "react-router-dom";
// import { Suspense, useContext } from "react";

import { Link } from "react-router-dom";
import { loginUser } from "../../libs/auth";

export function HomeRoute() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
      <button
        onClick={loginUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  );
}
