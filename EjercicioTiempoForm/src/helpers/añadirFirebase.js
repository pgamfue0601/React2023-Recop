import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export async function guardar(usuario){
    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          email: usuario.email,
          nombre: usuario.nombre,
          password: usuario.password,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}