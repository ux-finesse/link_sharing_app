import { db } from "../../lib/firebase";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

const saveStateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const key = uuidv4();
      await addDoc(collection(db, "states"), {
        key,
        ...req.body,
      });
      res.status(200).json({ key });
    } catch (e) {
      res.status(500).json({ error: "Error saving state to Firestore" });
    }
  } else if (req.method === "GET") {
    const { key } = req.query;
    const docRef = doc(db, "states", key as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json(docSnap.data());
    } else {
      res.status(404).json({ error: "State not found" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default saveStateHandler;
