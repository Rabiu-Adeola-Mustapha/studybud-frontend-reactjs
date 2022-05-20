import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserState } from "../state/store";

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);
  const location = useLocation();
  // console.log(isLoggedIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={(path = location.pathname)} />
  );
};

export default ProtectedRoute;
