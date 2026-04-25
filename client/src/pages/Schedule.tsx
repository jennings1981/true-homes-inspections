import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Schedule() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", service: "", sqft: "", date: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Request submitted! We'll contact you within 1 business hour.");
  };

  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Book an Inspection</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Schedule Your Inspection
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-6">
            The fastest way to book is to call Tim directly. Same-week scheduling is often available.
          </p>
          <a href="tel:+12082439706" className="btn-amber text-sm flex items-center gap-2 w-fit">
            <Phone size={14} /> Call Tim Now &mdash; 208-243-9706
          </a>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-10 text-center">
                  <div className="w-16 h-16 bg-[#D35400]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[#D35400]" />
                  </div>
                  <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-3">Request Received!</h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you, {form.name}. We've received your inspection request and will contact you at {form.phone} within 1 business hour to confirm your appointment.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Questions? Call us directly at{" "}
                    <a href="tel:+12082439706" className="text-[#D35400] hover:text-[#E8660A] transition-colors">208-243-9706</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                        Full Name <span className="text-[#D35400]">*</span>
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
                        Phone Number <span className="text-[#D35400]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
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
                      Property Address <span className="text-[#D35400]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.address}
                      onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                      className="form-input"
                      placeholder="123 Main St"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                        className="form-input"
                        placeholder="Sandpoint, ID"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                        Approx. Square Footage
                      </label>
                      <input
                        type="text"
                        value={form.sqft}
                        onChange={e => setForm(f => ({ ...f, sqft: e.target.value }))}
                        className="form-input"
                        placeholder="e.g. 2,000 sq ft"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                        Service Needed <span className="text-[#D35400]">*</span>
                      </label>
                      <select
                        required
                        value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        className="form-input"
                      >
                        <option value="">Select a service</option>
                        <option value="buyer">Buyer Home Inspection</option>
                        <option value="prelisting">Pre-Listing Inspection</option>
                        <option value="newconstruction">New Construction Inspection</option>
                        <option value="radon">Radon Testing</option>
                        <option value="combo">Inspection + Radon Testing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="form-input resize-none"
                      placeholder="Any specific concerns, access instructions, or questions..."
                    />
                  </div>
                  <button type="submit" className="btn-amber text-sm w-full justify-center">
                    Submit Inspection Request <ArrowRight size={14} />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll contact you within 1 business hour to confirm your appointment.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-2">Call Tim Directly</h3>
                <p className="text-xs text-muted-foreground mb-4">The fastest way to book your inspection.</p>
                <a href="tel:+12082439706" className="btn-amber text-sm flex items-center gap-2 w-full justify-center mb-4">
                  <Phone size={14} /> 208-243-9706
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock size={14} className="text-[#D35400] flex-shrink-0" />
                  Mon–Sat: 7am–7pm
                </div>
              </div>

              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "Response within 1 business hour",
                    "Same-week appointments often available",
                    "2–4 hours on-site inspection",
                    "Report delivered within 24 hours — guaranteed",
                    "Inspector available for questions",
                    "Attend your inspection — we encourage it",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={13} className="text-[#D35400] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#D35400]/10 border border-[#D35400]/20 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-2">Service Area</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We serve all of North Idaho including Sandpoint, Coeur d'Alene, Post Falls, and surrounding communities.
                </p>
                <a href="/areas-served" className="text-xs text-[#D35400] hover:text-[#E8660A] transition-colors font-['Barlow_Condensed'] font-600 tracking-wide uppercase flex items-center gap-1">
                  View Full Service Area <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
