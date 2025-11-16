// Σωστή διαχείριση για να κάνουμε σωστό validation και να επιστρέψουμε έγκυρα δεδομένα.
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";  // Εδώ διορθώθηκε το import.

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();  // Λήψη των δεδομένων από το σώμα του request.

    const user = await prisma.user.findUnique({
      where: { email }, // Ελέγχουμε αν υπάρχει ο χρήστης με αυτό το email.
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });  // Αποτυχία αν δεν υπάρχει ο χρήστης.
    }

    // Συγκρίνουμε τον κωδικό πρόσβασης
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });  // Αποτυχία αν ο κωδικός είναι λάθος.
    }

    // Δημιουργούμε το JWT token αν όλα είναι σωστά.
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",  // 1 ώρα ισχύος
    });

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}
