import {
  Navigate,
  Outlet,
  useLocation,
  useOutletContext,
} from "react-router-dom";
import { User } from "../types/auth";

type contextData = {
  user: User;
};

function PrivateLayout() {
  const { user } = useOutletContext<contextData>();
  const location = useLocation();
  console.log("context from app layoutL: ", user);

  // intended new data append to local context only in private layout
  const auth = { isAuth: true };

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet context={{ auth, user }} />;
}

export default PrivateLayout;
