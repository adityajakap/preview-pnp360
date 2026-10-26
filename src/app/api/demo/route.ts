import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, role, message } = body;

    // Strict validation
    if (!name || !email || !organization || !role) {
      return NextResponse.json(
        { error: 'Missing required demonstration request fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid official work email address.' },
        { status: 400 }
      );
    }

    // In production, integrate here with Resend / CRM / Slack webhook
    return NextResponse.json(
      {
        success: true,
        message: 'Demo request received. Our team will contact your office within 1 business day.',
        received: { name, email, organization, role },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid request payload.' },
      { status: 500 }
    );
  }
}

