import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function handler(req, res) {
 console.log(`Received ${req.method} request`); // Debugging log
  console.log("Request body:", req.body); // Debugging log
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      console.log("Received data:", { email, password }); // Debugging log

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User created successfully:", user.uid); // Debugging log

      return res.status(201).json({ uid: user.uid, email: user.email });
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

      return res.status(400).json({ error: errorMessage });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}