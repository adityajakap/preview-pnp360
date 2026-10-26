'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { content } from '@/content/en';

export function DemoForm() {
  const { form } = content.cta;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request.');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'An error occurred while submitting your request.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.05] text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
          {form.successTitle}
        </h3>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
          {form.successMessage}
        </p>
        <div className="pt-2">
          <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
            Recorded for <strong className="text-zinc-900 dark:text-zinc-100">{formData.email}</strong>
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {status === 'error' && (
        <div className="p-3 rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="demo-name" className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {form.nameLabel} <span className="text-rose-500">*</span>
          </label>
          <input
            id="demo-name"
            name="name"
            type="text"
            required
            placeholder={form.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#B3CCF5]"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="demo-email" className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {form.emailLabel} <span className="text-rose-500">*</span>
          </label>
          <input
            id="demo-email"
            name="email"
            type="email"
            required
            placeholder={form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#B3CCF5] font-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="demo-org" className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {form.orgLabel} <span className="text-rose-500">*</span>
          </label>
          <input
            id="demo-org"
            name="organization"
            type="text"
            required
            placeholder={form.orgPlaceholder}
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#B3CCF5]"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="demo-role" className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
            {form.roleLabel} <span className="text-rose-500">*</span>
          </label>
          <input
            id="demo-role"
            name="role"
            type="text"
            required
            placeholder={form.rolePlaceholder}
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#B3CCF5]"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="demo-message" className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
          {form.messageLabel}
        </label>
        <textarea
          id="demo-message"
          name="message"
          rows={3}
          placeholder={form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-950 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#B3CCF5] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#B3CCF5] hover:bg-[#B3CCF5]/90 text-zinc-950 font-semibold text-xs shadow-sm shadow-[#B3CCF5]/25 border border-white/60 dark:border-white/30 backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CCF5] disabled:opacity-50"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{form.submitting}</span>
          </>
        ) : (
          <>
            <span>{form.submitButton}</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center font-mono pt-1">
        Protected under NDA · Enterprise Data Confidentiality Guaranteed
      </p>
    </form>
  );
}
