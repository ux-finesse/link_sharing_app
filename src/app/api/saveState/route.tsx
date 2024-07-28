import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { databaseURL } from "../../lib/firebase"; // Ensure you have this URL defined in your firebase configuration

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const key = uuidv4();
    await axios.put(`${databaseURL}/states/${key}.json`, {
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
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Missing key in query parameters" },
        { status: 400 }
      );
    }

    console.log("Retrieving state for key:", key);
    const response = await axios.get(`${databaseURL}/states/${key}.json`);

    if (response.data) {
      console.log("State found:", response.data);
      return NextResponse.json(response.data, { status: 200 });
    } else {
      console.log("State not found for key:", key);
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