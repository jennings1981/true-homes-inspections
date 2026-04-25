import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Please fill in your name and message.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Get in Touch</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Contact True Homes Inspections
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-6">
            The fastest way to reach Tim is by phone. Call or text during business hours for same-day response.
          </p>
          <a href="tel:+12082439706" className="btn-amber text-sm flex items-center gap-2 w-fit">
            <Phone size={14} /> Call Tim Now &mdash; 208-243-9706
          </a>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-5">
              <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-2">Call Tim Directly</h3>
                <p className="text-xs text-muted-foreground mb-4">The fastest way to get answers and schedule your inspection.</p>
                <a href="tel:+12082439706" className="btn-amber text-sm flex items-center gap-2 w-full justify-center mb-5">
                  <Phone size={14} /> 208-243-9706
                </a>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#D35400] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">Call or Text</div>
                      <a href="tel:+12082439706" className="text-white hover:text-[#D35400] transition-colors text-sm">208-243-9706</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#D35400] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">Service Area</div>
                      <p className="text-white text-sm">North Idaho Panhandle<br />Sandpoint · Coeur d'Alene · Post Falls<br />and surrounding communities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#D35400] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">Hours</div>
                      <p className="text-white text-sm">Monday – Saturday<br />7:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#D35400]/10 border border-[#D35400]/20 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-2">Ready to Schedule?</h3>
                <p className="text-sm text-muted-foreground mb-4">Use our scheduling form for the fastest response.</p>
                <a href="/schedule" className="btn-amber text-xs w-full justify-center">
                  Schedule Inspection <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-10 text-center">
                  <div className="w-16 h-16 bg-[#D35400]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[#D35400]" />
                  </div>
                  <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground mb-4">
                    Thank you, {form.name}. We've received your message and will respond shortly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For urgent inquiries, call us at{" "}
                    <a href="tel:+12082439706" className="text-[#D35400] hover:text-[#E8660A] transition-colors">208-243-9706</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                        Your Name <span className="text-[#D35400]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="form-input"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="form-input"
                        placeholder="(208) 555-0100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="form-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="schedule">Schedule an Inspection</option>
                      <option value="quote">Request a Quote</option>
                      <option value="question">General Question</option>
                      <option value="report">Question About My Report</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                      Message <span className="text-[#D35400]">*</span>
                    </label>
                    <textarea
                      rows={6}
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="form-input resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn-amber text-sm w-full justify-center">
                    Send Message <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
