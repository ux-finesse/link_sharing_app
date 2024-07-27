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

    console.log("User created successfully:", user.uid);

    return NextResponse.json(
      { uid: user.uid, email: user.email },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    let errorMessage = "Registration failed";
    if (error.code === "auth/email-already-in-use") {
      errorMessage = "Account Exists";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email address.";
    } else if (error.code === "auth/weak-password") {
      errorMessage = "Password is too weak.";
    } else if (error.code === "auth/invalid-api-key") {
      errorMessage = "Invalid API key.";
    }

    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
