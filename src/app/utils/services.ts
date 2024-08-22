import app from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
const firestore = getFirestore(app);
export async function addBook(data:any) {
  try{const docsRef = doc(firestore, "books","TvCvt7R2rEOIJ3WVi4ji");
  await updateDoc(docsRef, {book:data});
  return { success: true,statusCode: 200, data:data };}
  catch(err){return { success: "service", statusCode: 400, message: err }}
}

export async function getBook(data: any) {
  const q = query(collection(firestore, "books"));
  const snapshot = await getDocs(q);
  return { data: snapshot.docs[0].data(), statusCode: 200, success: true };
}
export async function pinjamBuku(data: any) {
  const docsRef = collection(firestore, "pinjam");
  await addDoc(docsRef, data);
  return { success: true };
}

export async function dataPinjamBuku() {
  const snapshot = await getDocs(collection(firestore, "pinjam"));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return { data: data, statusCode: 200, success: true };
}

export async function loginUser(data: any) {
  const q = query(
    collection(firestore, "admin"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    password: doc.data().password,
    id: doc.id,
    ...doc.data(),
  }));
  if (user.length > 0) {
    if (data.password != user[0].password) {
      return {
        success: false,
        message: "Password tidak sesuai!",
        statusCode: 401,
      };
    }
    return { success: true, user };
  } else {
    return { success: false, message: "Email tidak sesuai!", statusCode: 401 };
  }
}
export async function ubahPinjamBuku(data: any) {
  await updateDoc(doc(firestore,"pinjam",data.id),data);
  return { success: true,statusCode:200 };
}