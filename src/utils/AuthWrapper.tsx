import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, isTokenExpired, logout } from "@/utils/auth"; // Pastikan path sesuai

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token || isTokenExpired(token)) {
      logout(navigate);
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthWrapper;
