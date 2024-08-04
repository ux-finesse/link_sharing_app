// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import { database } from "../../../../firebase"; // Adjust the path according to your setup
import { ref, set, get, child } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

// POST method to save data to the database
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

// GET method to retrieve data from the database
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key"); // Get the key from query parameters
  console.log("Retrieving state for key:", key); // Log the key being retrieved
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `states/${key}`)); // Retrieve data from Firebase
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
