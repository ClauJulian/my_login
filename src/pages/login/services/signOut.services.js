import { auth } from "../../../config/firebase.config";


export const signOut = async () => {
    await auth.signOut();

}