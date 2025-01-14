// app/api/get-streamlit-token/route.ts
import {  NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";

export async function GET() {
  // 1) Retrieve NextAuth session (must import your authOptions)
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: "Not logged in or missing email" }, { status: 401 });
  }

  // 2) Create a short-lived token
  const SECRET_KEY = process.env.STREAMLIT_JWT_SECRET;
  if (!SECRET_KEY) {
    return NextResponse.json({ message: "STREAMLIT_JWT_SECRET not set" }, { status: 500 });
  }

  const token = jwt.sign(
    { sub: session.user.email }, 
    SECRET_KEY, 
    { expiresIn: "15m" }
  );

  // 3) Redirect to your Streamlit app
  const streamlitUrl = `http://localhost:8502/?token=${token}`;
  return NextResponse.redirect(streamlitUrl, 307);
}
