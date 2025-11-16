import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Διορθώσαμε τη χρήση του prisma με named import
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Έλεγχος αν υπάρχει χρήστης
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Έλεγχος του κωδικού
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // Δημιουργία του JWT Token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  return NextResponse.json({ message: "Login successful", token });
}
