import { NextRequest, NextResponse } from "next/server";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../lib/firebase"; // Ensure this path is correct

const auth = getAuth(app);

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log("Received data:", { email, password });

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
    let errorMessage = "Registration failed";
    if ((error as any).code === "auth/email-already-in-use") {
      errorMessage = "Account Exists";
    } else if ((error as any).code === "auth/invalid-email") {
      errorMessage = "Invalid email address.";
    } else if ((error as any).code === "auth/weak-password") {
      errorMessage = "Password is too weak.";
    }
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
