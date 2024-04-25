import { EmailTemplate } from "./../../_components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Jaskaran1519@resend.dev",
      to: ["jaskaran1519@gmail.com"],
      subject: "hello",
      react: EmailTemplate({ response }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
