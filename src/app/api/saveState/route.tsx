import { NextRequest, NextResponse } from "next/server";
import { database } from "../../lib/firebase";
import { ref, set, get, child } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const key = uuidv4();
    await set(ref(database, "states/" + key), {
      key,
      ...body,
    });
    return NextResponse.json({ key }, { status: 200 });
  } catch (e) {
    console.error("Error saving state:", e);
    return NextResponse.json(
      { error: "Error saving state to Realtime Database" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");
  console.log("Retrieving state for key:", key); // Log the key being retrieved
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `states/${key}`));
    if (snapshot.exists()) {
      console.log("State found:", snapshot.val()); // Log the state found
      return NextResponse.json(snapshot.val(), { status: 200 });
    } else {
      console.log("State not found for key:", key); // Log when state is not found
      return NextResponse.json({ error: "State not found" }, { status: 404 });
    }
  } catch (e) {
    console.error("Error retrieving state:", e);
    return NextResponse.json(
      { error: "Error retrieving state from Realtime Database" },
      { status: 500 }
    );
  }
}
