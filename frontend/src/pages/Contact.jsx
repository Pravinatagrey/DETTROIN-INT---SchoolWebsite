import { useState } from "react";
//import { api } from "@/lib/api";
//import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  }
    /*
    try {
      await api.post("/contact", form);
      toast.success("Message sent!");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
*/
  return (
    <div data-testid="contact-page">
      <section className="bg-[#16174a] text-[#fbf7f0] py-24">
        <div className="container-x">
          <span className="text-[#14b8d4] text-xs uppercase tracking-[0.25em] font-semibold">Contact</span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium mt-4 leading-tight">
            We'd love to <span className="italic text-[#ffb98a]">hear from you.</span>
          </h1>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-[1fr_1.2fr] gap-14">
        <div className="space-y-6">
          {[
            { i: MapPin, t: "Visit us", d: "Aksharaa Campus, Ring Road, Aligarh, UP 202001, India" },
            { i: Phone, t: "Call us", d: "+91 98765 43210 / +91 98765 43211" },
            { i: Mail, t: "Email us", d: "hello@aksharaa.school · admissions@aksharaa.school" },
            { i: Clock, t: "Office hours", d: "Monday — Saturday · 8:00 am — 4:00 pm" },
          ].map((it, i) => (
            <div key={i} data-testid={`contact-info-${i}`} className="bg-white rounded-2xl p-6 border border-[#16174a]/10 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff6b1a]/10 flex items-center justify-center shrink-0">
                <it.i className="w-5 h-5 text-[#ff6b1a]" />
              </div>
              <div>
                <div className="font-serif-display text-xl font-bold text-[#16174a]">{it.t}</div>
                <div className="text-sm text-[#16174a]/75 mt-1">{it.d}</div>
              </div>
            </div>
          ))}

          <div className="rounded-2xl overflow-hidden border border-[#16174a]/10 h-64">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224086.62574097335!2d77.916!3d27.881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a0!2sAligarh!5e0!3m2!1sen!2sin!4v1000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#16174a]/10">
          {sent ? (
            <div data-testid="contact-success" className="text-center py-16">
              <CheckCircle2 className="w-16 h-16 text-[#14b8d4] mx-auto" />
              <h3 className="mt-6 font-serif-display text-3xl font-bold text-[#16174a]">Thank you!</h3>
              <p className="mt-3 text-[#16174a]/70">We've received your message and will respond within one working day.</p>
              <button
                onClick={() => setSent(false)}
                data-testid="contact-new-btn"
                className="mt-8 border border-[#16174a] text-[#16174a] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#16174a] hover:text-white transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.15em] text-[#16174a]/70 font-semibold">Name</label>
                  <input data-testid="contact-name" required value={form.name} onChange={change("name")} className="mt-2 w-full bg-[#fbf7f0] border border-[#16174a]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6b1a]" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.15em] text-[#16174a]/70 font-semibold">Email</label>
                  <input type="email" data-testid="contact-email" required value={form.email} onChange={change("email")} className="mt-2 w-full bg-[#fbf7f0] border border-[#16174a]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6b1a]" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#16174a]/70 font-semibold">Subject</label>
                <input data-testid="contact-subject" required value={form.subject} onChange={change("subject")} className="mt-2 w-full bg-[#fbf7f0] border border-[#16174a]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6b1a]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-[#16174a]/70 font-semibold">Message</label>
                <textarea data-testid="contact-message" required rows={6} value={form.message} onChange={change("message")} className="mt-2 w-full bg-[#fbf7f0] border border-[#16174a]/15 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff6b1a] resize-none" />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#ff6b1a] hover:bg-[#e75500] text-white font-semibold px-8 py-4 rounded-full text-sm transition-all disabled:opacity-60"
              >
                {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}