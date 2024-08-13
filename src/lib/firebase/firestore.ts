import {getFirestore} from "@firebase/firestore";
import firebaseApp from "@/lib/firebase";

const db = getFirestore(firebaseApp);
export default db;
