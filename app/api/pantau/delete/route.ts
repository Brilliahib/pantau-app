import { NextApiRequest, NextApiResponse } from "next";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import app from "@/lib/firebase/init";

const firestore = getFirestore(app);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      status: false,
      statusCode: 400,
      message: "ID tanaman diperlukan",
    });
  }

  try {
    await deleteDoc(doc(firestore, "plants", id));
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Tanaman berhasil dihapus!",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: "Gagal menghapus tanaman",
    });
  }
}
