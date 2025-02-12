import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom hook for using authentication
export const useAuth = () => useContext(AuthContext);
