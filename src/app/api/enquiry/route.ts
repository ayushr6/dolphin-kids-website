import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EnquiryBody = {
  parentName?: string;
  email?: string;
  phone?: string;
  childName?: string;
  gradeInterest?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  // Honeypot check — bots fill hidden fields
  if (body.website) {
    // Return 200 so bots think it succeeded
    return NextResponse.json({ success: true });
  }

  // Validate required fields
  const errors: string[] = [];

  if (!body.parentName?.trim()) {
    errors.push("Parent / Guardian Name is required");
  }

  if (!body.email?.trim()) {
    errors.push("Email Address is required");
  } else if (!EMAIL_REGEX.test(body.email.trim())) {
    errors.push("Email Address is not valid");
  }

  if (!body.phone?.trim()) {
    errors.push("Phone Number is required");
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, errors },
      { status: 400 },
    );
  }

  // Log the submission (email integration is future work)
  console.log("New enquiry submission:", {
    parentName: body.parentName!.trim(),
    email: body.email!.trim(),
    phone: body.phone!.trim(),
    childName: body.childName?.trim() || "",
    gradeInterest: body.gradeInterest || "",
    message: body.message?.trim() || "",
  });

  return NextResponse.json({ success: true });
}
