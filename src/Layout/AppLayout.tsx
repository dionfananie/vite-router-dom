import "../App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import { AuthProvider } from "../contexts/auth";
import { checkUser } from "../libs/auth";

// export async function loader() {
//   const data = await fetch(API_URL);
//   return { data };
// }
export async function loader() {
  const data = await checkUser();
  return { data };
}

function AppLayout() {
  const { data } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <AuthProvider>
      <Outlet context={{ user: data }} />
    </AuthProvider>
  );
}

export default AppLayout;
