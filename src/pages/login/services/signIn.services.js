import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../../config/firebase.config";;

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};