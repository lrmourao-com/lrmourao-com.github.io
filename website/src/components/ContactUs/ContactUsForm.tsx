"use client";

import { Loader2, CheckCircle, Send, Mail, AlertCircle } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTranslation } from "@/lib/use-translation";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactUsForm() {
  const { t, i18n } = useTranslation();
  const { values, errors, status, errorMessage, setField, submit } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(i18n.language);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setField(e.target.name as any, e.target.value);
  };

  return (
    <div className="relative opacity-0 animate-fade-in-up animation-delay-300">
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl blur opacity-20 animate-pulse-slow" />

      <div className="relative bg-white/90 backdrop-blur-xl border-2 border-blue-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-blue-500/10">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900" style={{ marginBottom: '2px' }}>
            {t('contact.form.title')}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">
                {t('contact.form.nameLabel')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base ${
                  errors.name
                    ? "border-red-300 focus:border-red-500"
                    : "border-blue-100 focus:border-blue-500"
                }`}
                placeholder={t('contact.form.namePlaceholder')}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">
                {t('contact.form.emailLabel')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base ${
                  errors.email
                    ? "border-red-300 focus:border-red-500"
                    : "border-blue-100 focus:border-blue-500"
                }`}
                placeholder={t('contact.form.emailPlaceholder')}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              {t('contact.form.phoneLabel')}
            </label>
            <div className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all ${
              errors.phone
                ? "border-red-300 focus-within:border-red-500"
                : "border-blue-100 focus-within:border-blue-500"
            }`}>
              <PhoneInput
                value={values.phone}
                onChange={(phone) => setField("phone", phone)}
                defaultCountry="pt"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              {t('contact.form.subjectLabel')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleInputChange}
              className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base ${
                errors.subject
                  ? "border-red-300 focus:border-red-500"
                  : "border-blue-100 focus:border-blue-500"
              }`}
              placeholder={t('contact.form.subjectPlaceholder')}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.subject}
              </p>
            )}
          </div>



          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              {t('contact.form.messageLabel')} <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleInputChange}
              rows={5}
              className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm sm:text-base ${
                errors.message
                  ? "border-red-300 focus:border-red-500"
                  : "border-blue-100 focus:border-blue-500"
              }`}
              placeholder={t('contact.form.messagePlaceholder')}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {status === "submitting"
              ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  {t('contact.form.submittingButton')}
                </>
              )
              : status === "success"
                ? (
                  <>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t('contact.form.successButton')}
                  </>
                )
                : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t('contact.form.submitButton')}
                  </>
                )}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-center text-sm sm:text-base">
              {errorMessage || t('contact.form.errorMessage')}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
