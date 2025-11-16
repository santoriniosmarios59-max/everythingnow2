import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Σιγουρευόμαστε ότι κάνουμε σωστή εισαγωγή του prisma
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Βρίσκουμε τον χρήστη στην βάση δεδομένων
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Ελέγχουμε αν ο κωδικός είναι σωστός
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // Δημιουργούμε το JWT Token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  return NextResponse.json({ message: "Login successful", token });
}
