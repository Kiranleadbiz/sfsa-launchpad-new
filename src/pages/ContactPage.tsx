// Simple AccordionItem component for dropdown FAQ
import { useState } from "react";
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-accent/30 rounded-xl bg-white shadow-sm">
      <button
        className="w-full flex justify-between items-center px-6 py-4 font-heading font-semibold text-base text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`ml-4 transition-transform ${open ? "rotate-90" : "rotate-0"}`}>▶</span>
      </button>
      {open && (
        <div className="px-6 pb-4 text-muted-foreground text-sm whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
}
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import EnquiryForm from "@/components/EnquiryForm";
import OptimizedImage from "@/components/OptimizedImage";
import sfsaLogoMain from "@/assets/Sfsa Logo (1).png";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/sfsa_official", icon: () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: "YouTube", url: "https://www.youtube.com/@SFSA-SportsandFitnessSciencesA", icon: () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { label: "Facebook", url: "https://www.facebook.com/share/1b5EL9Q4MB/", icon: () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/sports-and-fitness-sciences-academy/", icon: () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
];

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-10 section-blue relative z-10">
        <div className="container">
          <SectionHeading title="Get In Touch With SFSA" subtitle="Have questions about our programs, admission process, batch schedules, or career opportunities? We're here to help you take the next step toward your fitness career." />
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-xl flex items-center justify-center h-[260px] max-w-3xl mx-auto bg-white">
              <img src={sfsaLogoMain} alt="SFSA Logo" className="w-full h-full object-contain p-8" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <AnimatedSection className="md:col-span-3">
              <EnquiryForm title="We'll respond within 24 hours" subtitle="Fill in your details and we'll get back to you promptly." />
            </AnimatedSection>
            <div className="md:col-span-2 flex flex-col gap-5 h-full">
              <div className="flex flex-col gap-5 h-full justify-between" style={{height: '100%'}}>
                <div className="float-card p-6">
                  <h3 className="font-heading text-lg font-semibold mb-4">Main Office</h3>
                  <p className="text-sm font-medium text-foreground mb-3">Sports & Fitness Sciences Academy (SFSA)</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-accent shrink-0 mt-0.5" size={16} />
                      <span>Srinagar Colony Main Rd, Srinagar Colony, Yella Reddy Guda, Hyderabad, Telangana 500073</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+916309792244" className="flex items-center gap-3 hover:text-accent transition-colors">
                        <Phone className="text-accent shrink-0" size={16} />
                        +91 63097 92244
                      </a>
                      <a href="tel:+917386133880" className="flex items-center gap-3 hover:text-accent transition-colors">
                        <Phone className="text-accent shrink-0" size={16} />
                        +91 73861 33880
                      </a>
                    </div>
                    <a href="mailto:info@sfsa.in" className="flex items-center gap-3 hover:text-accent transition-colors">
                      <Mail className="text-accent shrink-0" size={16} />
                      info@sfsa.in
                    </a>
                  </div>
                </div>
                <div className="float-card p-6">
                  <h3 className="font-heading text-lg font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-accent shrink-0" />
                      <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-accent shrink-0" />
                      <span>Sunday: 10:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* Social Links Bar: full width below grid */}
          <div className="w-full flex flex-row gap-4 justify-between items-center mt-8 max-w-5xl mx-auto">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "hsl(45 100% 50% / 0.15)", color: "hsl(204 100% 10%)", flex: 1, justifyContent: 'center' }}
              >
                <s.icon />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt">
        <div className="container">
          <SectionHeading title="Before You Reach Out" subtitle="Quick answers to common questions" />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { q: "How quickly will I get a response?", a: "Our admissions team responds within 24 hours. For urgent queries, call us directly during office hours." },
                { q: "Is the consultation really free?", a: "Absolutely! The career consultation is completely free with no obligations." },
                { q: "Can I visit the campus before enrolling?", a: "Yes! We encourage campus visits. Schedule a visit through this form." },
                { q: "What documents do I need for enrollment?", a: "You'll need an Aadhaar card, passport-size photos, and educational certificates. No specific prior qualifications are required." },
                { q: "Do you offer payment plans?", a: "Yes, we accept installment payments. Contact our admissions team for available payment options." },
              ].map((faq, i) => (
                <AccordionItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Campus CTA */}
      <section className="section-padding-sm relative overflow-hidden dark-section">
        <div className="container relative text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5 text-white">
              Visit Our <span className="text-accent">Campus</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto">
              See our training facilities, meet faculty members, and get a feel for the SFSA learning environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+916309792244" className="btn-yellow inline-flex items-center justify-center">Schedule Visit</a>
              <Link to="/about" className="border-2 border-accent/50 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent px-10 h-[3.25rem] rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden inline-flex items-center uppercase tracking-wider">
                <span className="absolute left-0 top-0 h-full w-1 bg-accent"></span>
                <span className="ml-3">Learn About SFSA</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
