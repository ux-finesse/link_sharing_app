import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return NextResponse.json(
      { uid: user.uid, email: user.email },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
