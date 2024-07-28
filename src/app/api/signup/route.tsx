import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { firebaseConfig } from "../../lib/firebase"; // Ensure you have your firebase config here

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const apiKey = firebaseConfig.apiKey;
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    const user = response.data;

    return NextResponse.json(
      { user: { id: user.localId, email: user.email } },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Signup error:", errorMessage);
    return NextResponse.json(
      { error: { message: errorMessage } },
      { status: 500 }
    );
  }
}