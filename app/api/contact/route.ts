import { NextResponse } from "next/server";
import { mailTransporter } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, organization, website, projectDetails } = body;

    if (!name?.trim() || !email?.trim() || !projectDetails?.trim()) {
      return NextResponse.json(
        { message: "Required fields are missing." },
        { status: 400 },
      );
    }

    const subject =
      `New project from Portfolio: ${name.trim()} - ` +
      `${email.trim()} from ${organization?.trim() || "N/A"} ` +
      `(${website?.trim() || "N/A"}).`;

    await mailTransporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.PORTFOLIO_EMAIL,
      replyTo: email.trim(),
      subject,
      text: `
New project inquiry from your portfolio

Name: ${name.trim()}
Email: ${email.trim()}
Organization: ${organization?.trim() || "N/A"}
Website: ${website?.trim() || "N/A"}

Project Details:
${projectDetails.trim()}
      `.trim(),
    });

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 },
    );
  }
}
