import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));

  const data = snapshot.data();
  return data;
}

export async function register(data: {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return { status: false, statusCode: 400, message: "Email already exists" };
  } else {
    data.role = "user";
    data.password = await bcrypt.hash(data.password, 10);

    try {
      await addDoc(collection(firestore, "users"), data);
      return { status: true, statusCode: 200, message: "Register Success" };
    } catch (error) {
      return { status: false, statusCode: 500, message: "Register Failed" };
    }
  }
}

export async function login(data: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}

export async function addPlant(data: {
  name: string;
  tinggi: string;
  monitor: string;
}) {
  // Basic validation for the input data
  if (!data.name || !data.tinggi || !data.monitor) {
    return {
      status: false,
      statusCode: 400,
      message: "All fields are required",
    };
  }

  try {
    await addDoc(collection(firestore, "plants"), data);
    return {
      status: true,
      statusCode: 200,
      message: "Plant added successfully",
    };
  } catch (error) {
    console.error("Error adding plant: ", error);
    return { status: false, statusCode: 500, message: "Failed to add plant" };
  }
}

export async function deletePlant(id: string) {
  if (!id) {
    return {
      status: false,
      statusCode: 400,
      message: "Plant ID is required",
    };
  }

  try {
    await deleteDoc(doc(firestore, "plants", id));
    return {
      status: true,
      statusCode: 200,
      message: "Plant deleted successfully!",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: "Failed to delete plant",
    };
  }
}
