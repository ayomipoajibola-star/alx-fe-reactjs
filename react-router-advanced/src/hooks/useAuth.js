import { useState } from "react";

// Simple global auth simulation
let authState = {
  isAuthenticated: false,
};

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authState.isAuthenticated
  );

  const login = () => {
    authState.isAuthenticated = true;
    setIsAuthenticated(true);
  };

  const logout = () => {
    authState.isAuthenticated = false;
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
}