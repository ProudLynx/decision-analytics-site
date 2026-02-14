'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  company: string;
  role: string;
  contact: string;
  project: string;
};

const initialState: FormState = {
  name: '',
  company: '',
  role: '',
  contact: '',
  project: ''
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Отправка...');

    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setStatus('Заявка отправлена. Спасибо!');
      setForm(initialState);
      return;
    }

    setStatus('Не удалось отправить заявку. Попробуйте позже.');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
      {/* TODO: при необходимости добавьте валидацию и интеграцию с CRM */}
      <input
        required
        placeholder="Имя"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Компания"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />
      <input
        placeholder="Роль"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />
      <input
        required
        placeholder="Email или телефон"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        value={form.contact}
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
      />
      <textarea
        required
        placeholder="Краткое описание проекта"
        className="min-h-28 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        value={form.project}
        onChange={(e) => setForm({ ...form, project: e.target.value })}
      />
      <button type="submit" className="rounded-md bg-accent px-5 py-2 text-sm font-semibold text-white">
        Отправить заявку
      </button>
      {status && <p className="text-sm text-muted">{status}</p>}
    </form>
  );
}
