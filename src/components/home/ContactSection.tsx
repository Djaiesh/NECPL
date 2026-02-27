import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Send } from "lucide-react";

// Initialize EmailJS (Replace with your service ID)
emailjs.init("PGQzoigb_O0Zrzatb");

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    const templateParams = {
      email: "navyaecpl@gmail.com",
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send("service_2s54ywe", "template_ebz5w3n", templateParams)
      .then(() => {
        setSending(false);
        setSent(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        setSending(false);
        setError(true);
        setTimeout(() => setError(false), 3000);
      });
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Contact Us
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Office Address</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    Flat No:101, Sri Lakshmi Nivas, Phase-1, 5th Road, KPHB Colony, Kukatpally, Hyderabad-500072, Telangana, India
                  </span>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    <div>Land Line: 040 45134231</div>
                    <div>Mobile: 091-7842788557</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-muted-foreground text-sm">navyaengineeringconsultant@yahoo.com</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold py-3 rounded-md hover:brightness-110 transition-all disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {sending ? "Sending..." : sent ? "Message Sent!" : error ? "Failed to Send" : "Send Message"}
            </button>
            {error && (
              <p className="text-destructive text-sm text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
