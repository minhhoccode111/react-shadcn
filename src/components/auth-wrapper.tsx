import { Navigate } from "react-router-dom";
import { Fragment } from "react";

import { useAuthStore } from "@/shared/stores";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authData = useAuthStore((state) => state.authData);

  if (!authData.user?.username || !authData.user?.token) {
    return <Navigate to="/logout" replace={true} />;
  }

  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
