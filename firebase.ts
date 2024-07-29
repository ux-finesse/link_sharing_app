import { initializeApp } from "firebase/app";
import { clientConfig } from "./config";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const app = initializeApp(clientConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export { app, auth, database };