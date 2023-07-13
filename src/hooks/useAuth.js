import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return {
    state,
    dispatch,
  };
};