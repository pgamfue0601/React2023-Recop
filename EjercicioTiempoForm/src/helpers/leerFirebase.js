import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig' 


export async function leerDatos(){
    const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}