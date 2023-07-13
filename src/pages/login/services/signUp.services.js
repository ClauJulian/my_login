import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../config/firebase.config";

export const signUpWithEmail = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  };