import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../config/firebase.config";;

export const signInWithEmail = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };