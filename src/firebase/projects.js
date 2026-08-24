import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export const getProjects = async () => {
  const snapshot = await getDocs(collection(db, "projects"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};