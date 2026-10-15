import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Sparkles,
  Copy,
  Check,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";
import { SpotlightCard } from "./SpotlightCard";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dahmane.sirine@esprit.tn");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard: dahmane.sirine@esprit.tn");
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

      const result = await response.json().catch(() => null);

      if (response.ok && (!result || result.success !== "false")) {
        toast.success(
          "Thank you! Your message has been sent to Dahmane Sirine. I will get back to you shortly."
        );
        form.reset();
      } else {
        // Fallback to mailto client
        window.location.href = `mailto:dahmane.sirine@esprit.tn?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(
          `From: ${senderName} (${senderEmail})\n\n${message}`
        )}`;
        toast.info("Opening your email client to send the message directly...");
      }
    } catch {
      // If network or adblocker interrupts fetch, trigger direct email
      window.location.href = `mailto:dahmane.sirine@esprit.tn?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `From: ${senderName} (${senderEmail})\n\n${message}`
      )}`;
      toast.info("Opening your email client to send the message directly...");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Contact Me
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Open to 6-month PFE internships and software engineering opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* LEFT CARD: DIRECT CONTACT CHANNELS */}
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.18)"
            className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 mb-5 font-mono">
                Fastest response via email
              </p>

              <div className="space-y-2.5 mb-6">
                {/* Email Box with One-Click Copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 transition">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-slate-400 uppercase">
                        Email
                      </p>
                      <a
                        href="mailto:dahmane.sirine@esprit.tn"
                        className="text-xs font-mono text-white truncate block hover:text-indigo-300 transition"
                      >
                        dahmane.sirine@esprit.tn
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase">
                      Location
                    </p>
                    <p className="text-xs text-white">
                      Tunis, Tunisia · Remote Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/dahmane-sirine-6a7a612a0/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition"
              >
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/sirineee22"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition"
              >
                <Github className="w-3.5 h-3.5 text-indigo-400" />
                <span>GitHub</span>
              </a>
            </div>
          </SpotlightCard>

          {/* RIGHT CARD: SEND MESSAGE FORM */}
          <SpotlightCard
            spotlightColor="rgba(139, 92, 246, 0.18)"
            className="lg:col-span-7 p-6 sm:p-7"
          >
            <form onSubmit={onSubmit} className="space-y-3.5">
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">
                Leave a quick note and I'll reply promptly
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 mb-1 block">
                    Your Name
                  </label>
                  <input
                    required
                    name="name"
                    placeholder="Name"
                    className="w-full bg-[#030712]/80 border border-white/[0.09] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 mb-1 block">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-[#030712]/80 border border-white/[0.09] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 mb-1 block">
                  Subject
                </label>
                <input
                  required
                  name="subject"
                  placeholder="Internship / Engineering Project"
                  className="w-full bg-[#030712]/80 border border-white/[0.09] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 mb-1 block">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Message..."
                  className="w-full bg-[#030712]/80 border border-white/[0.09] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full pro-btn-primary py-2.5 cursor-pointer disabled:opacity-60 text-xs"
              >
                <span>{sending ? "Sending..." : "Send Message"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
