import { db } from "../../lib/firebase";
import { ref, set, get, child } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

const saveStateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const key = uuidv4();
      await set(ref(db, "states/" + key), {
        key,
        ...req.body,
      });
      res.status(200).json({ key });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Error saving state to Realtime Database" });
    }
  } else if (req.method === "GET") {
    const { key } = req.query;
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `states/${key}`));
      if (snapshot.exists()) {
        res.status(200).json(snapshot.val());
      } else {
        res.status(404).json({ error: "State not found" });
      }
    } catch (e) {
      res
        .status(500)
        .json({ error: "Error retrieving state from Realtime Database" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default saveStateHandler;
