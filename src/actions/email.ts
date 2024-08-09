'use server';

type SendEmail = {
  subject: string;
  html: string;
  to?: string;
};
export const sendEmail = async ({ subject, html, to }: SendEmail) => {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return;
  const apiUrl = 'https://api.brevo.com/v3/smtp/email';
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'api-key': apiKey,
  };
  const body = {
    sender: {
      email: process.env.BREVO_FROM_EMAIL,
    },
    to: [
      {
        email: to || process.env.BREVO_TO_EMAIL,
      },
    ],
    subject: subject,
    htmlContent: html,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    if (response?.ok) {
      console.log('Email query sent successfully');
    }
  } catch (err) {
    console.error(err);
  }
};
