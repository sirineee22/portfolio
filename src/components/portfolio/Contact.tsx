import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";
import { SpotlightCard } from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].contact;

  const copyEmail = () => {
    navigator.clipboard.writeText("dahmane.sirine@esprit.tn");
    setCopiedEmail(true);
    toast.success("Email copied: dahmane.sirine@esprit.tn");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const senderName = String(formData.get("name") || "");
    const senderEmail = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const payload = {
      name: senderName,
      email: senderEmail,
      subject: subject,
      message: message,
      _replyto: senderEmail,
      _subject: `Portfolio Message from ${senderName} — ${subject}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/dahmane.sirine@esprit.tn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success(t.successToast);
        form.reset();
      } else {
        // Fallback to mailto client
        window.location.href = `mailto:dahmane.sirine@esprit.tn?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(
          `From: ${senderName} (${senderEmail})\n\n${message}`
        )}`;
        toast.info(t.fallbackToast);
      }
    } catch {
      // If network or adblocker interrupts fetch, trigger direct email
      window.location.href = `mailto:dahmane.sirine@esprit.tn?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `From: ${senderName} (${senderEmail})\n\n${message}`
      )}`;
      toast.info(t.fallbackToast);
    } finally {
      setSending(false);
    }
  };

  const inputClass = `w-full rounded-xl px-3.5 py-2 text-xs transition focus:outline-none focus:border-indigo-500 border ${
    isDark
      ? "bg-[#030712]/80 border-white/[0.09] text-white placeholder:text-slate-600"
      : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white"
  }`;

  const labelClass = `text-[11px] font-mono mb-1 block transition-colors ${
    isDark ? "text-slate-400" : "text-slate-600 font-medium"
  }`;

  return (
    <section id="contact" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t.title}
          </h2>
          <p
            className={`text-xs sm:text-sm font-mono transition-colors ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* LEFT CARD: DIRECT CONTACT CHANNELS */}
          <SpotlightCard
            spotlightColor={
              isDark ? "rgba(99, 102, 241, 0.18)" : "rgba(99, 102, 241, 0.12)"
            }
            className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <h3
                className={`text-lg font-bold tracking-tight mb-1 transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t.directChannels}
              </h3>
              <p
                className={`text-xs mb-5 font-mono transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {t.directDesc}
              </p>

              <div className="space-y-2.5 mb-6">
                {/* Email Box with One-Click Copy */}
                <div
                  className={`flex items-center justify-between p-3 rounded-xl border transition ${
                    isDark
                      ? "bg-white/[0.03] border-white/[0.08] hover:border-indigo-500/40"
                      : "bg-slate-50 border-slate-200/90 hover:border-indigo-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                        isDark
                          ? "bg-indigo-500/15 border-indigo-500/25 text-indigo-400"
                          : "bg-indigo-50 border-indigo-200 text-indigo-600"
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-[10px] font-mono uppercase ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {t.emailLabel}
                      </p>
                      <a
                        href="mailto:dahmane.sirine@esprit.tn"
                        className={`text-xs font-mono truncate block transition ${
                          isDark
                            ? "text-white hover:text-indigo-300"
                            : "text-slate-900 hover:text-indigo-600 font-medium"
                        }`}
                      >
                        dahmane.sirine@esprit.tn
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className={`p-1.5 rounded-lg transition border cursor-pointer ${
                      isDark
                        ? "bg-white/[0.04] hover:bg-white/[0.08] border-transparent text-slate-400 hover:text-white"
                        : "bg-white hover:bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
                    }`}
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location Box */}
                <div
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition ${
                    isDark
                      ? "bg-white/[0.03] border-white/[0.08]"
                      : "bg-slate-50 border-slate-200/90"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      isDark
                        ? "bg-violet-500/15 border-violet-500/25 text-violet-400"
                        : "bg-violet-50 border-violet-200 text-violet-600"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p
                      className={`text-[10px] font-mono uppercase ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {t.locationLabel}
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-white" : "text-slate-900 font-medium"
                      }`}
                    >
                      {t.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div
              className={`pt-4 border-t flex items-center gap-2.5 transition-colors ${
                isDark ? "border-white/[0.06]" : "border-slate-200"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/dahmane-sirine-6a7a612a0/"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                  isDark
                    ? "bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-slate-300 hover:text-white"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs"
                }`}
              >
                <Linkedin
                  className={`w-3.5 h-3.5 ${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sirineee22"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                  isDark
                    ? "bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-slate-300 hover:text-white"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs"
                }`}
              >
                <Github
                  className={`w-3.5 h-3.5 ${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
                <span>GitHub</span>
              </a>
            </div>
          </SpotlightCard>

          {/* RIGHT CARD: SEND MESSAGE FORM */}
          <SpotlightCard
            spotlightColor={
              isDark ? "rgba(139, 92, 246, 0.18)" : "rgba(139, 92, 246, 0.12)"
            }
            className="lg:col-span-7 p-6 sm:p-7"
          >
            <form onSubmit={onSubmit} className="space-y-3.5">
              <h3
                className={`text-lg font-bold tracking-tight mb-1 transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t.formTitle}
              </h3>
              <p
                className={`text-xs mb-4 font-mono transition-colors ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {t.formSubtitle}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>{t.nameLabel}</label>
                  <input
                    required
                    name="name"
                    placeholder={t.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.emailInputLabel}</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{t.subjectLabel}</label>
                <input
                  required
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t.messageLabel}</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full pro-btn-primary py-2.5 cursor-pointer disabled:opacity-60 text-xs shadow-md"
              >
                <span>{sending ? t.sendingBtn : t.sendBtn}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
