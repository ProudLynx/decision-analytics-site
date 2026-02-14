import { NextResponse } from 'next/server';

type LeadPayload = {
  name: string;
  company?: string;
  role?: string;
  contact: string;
  project: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  // TODO: замените console.log на запись в CRM или почтовый сервис.
  console.log('Новая заявка:', {
    name: body.name,
    company: body.company,
    role: body.role,
    contact: body.contact,
    project: body.project,
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ ok: true });
}
