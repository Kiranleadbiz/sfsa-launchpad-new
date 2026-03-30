// Simple AccordionItem component for dropdown FAQ
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
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Search, CheckCircle, Info, MessageCircle, FileText, Users, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CertificateVerificationPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ certificateId: "", name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.certificateId.trim() || !form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1200);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 section-blue">
        <div className="container text-center">
          <SectionHeading
            title="Verify SFSA Certifications"
            subtitle="Employers, clients, or certification verification services can use this tool to confirm the authenticity of SFSA-issued certifications"
          />
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="text-accent" size={24} />
              <p className="text-sm text-muted-foreground">All SFSA certificates are government-affiliated through SPEFL</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Verify */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <AnimatedSection>
              <div className="float-card p-8 h-full">
                <div className="icon-badge-lg mb-5">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-base font-semibold mb-3">For Employers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enter the certificate number provided by a candidate to verify their SFSA certification status, program completed, and issue date.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="float-card p-8 h-full">
                <div className="icon-badge-lg mb-5">
                  <FileText className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-base font-semibold mb-3">For Certificate Holders</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can verify your own certification to ensure it appears correctly in our system.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="section-padding section-alt !pt-0">
        <div className="container max-w-lg">
          <AnimatedSection>
            {!submitted ? (
              <div className="float-card p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="icon-badge-xl">
                    <Search className="text-accent" size={26} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">Certificate Verification</h3>
                    <p className="text-sm text-muted-foreground">Enter the certificate details below</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block text-muted-foreground uppercase tracking-wider">Certificate Number *</label>
                    <Input
                      value={form.certificateId}
                      onChange={(e) => setForm({ ...form, certificateId: e.target.value })}
                      placeholder="e.g. SFSA-CPT-2024-001"
                      maxLength={50}
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block text-muted-foreground uppercase tracking-wider">Certificate Holder Name *</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name as on certificate"
                      maxLength={100}
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block text-muted-foreground uppercase tracking-wider">Email *</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      maxLength={255}
                      className="rounded-xl h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-yellow !rounded-xl !w-full" disabled={submitting}>
                    <ShieldCheck className="mr-2" size={16} />
                    {submitting ? "Verifying..." : "Verify Certificate"}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="float-card p-10 text-center">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ background: "hsl(45 100% 50% / 0.15)" }}>
                  <CheckCircle className="text-accent" size={36} />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">Verification Request Submitted</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  Our team will verify the certificate and contact you shortly at <strong className="text-foreground">{form.email}</strong>.
                </p>
                <Button
                  className="btn-yellow rounded-md"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ certificateId: "", name: "", email: "" });
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* How Verification Works */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title="How Verification Works" subtitle="Our verification process ensures certificate authenticity" />
          <div className="space-y-5">
            {[
              { step: "1", title: "Submit Your Request", desc: "Enter the Certificate Number, certificate holder name, and your email address." },
              { step: "2", title: "We Verify the Records", desc: "Our team cross-checks the certificate details against our official graduation records." },
              { step: "3", title: "Receive Confirmation", desc: "You'll receive an email confirmation with the verification status within 1-2 business days." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="float-card p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "hsl(45 100% 50% / 0.15)" }}>
                    <span className="text-accent font-heading font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt">
        <div className="container max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { q: "How long does verification take?", a: "Verification requests are processed within 1-2 business days." },
                { q: "What if the certificate number isn't recognized?", a: "This could indicate an invalid certificate or data entry error. Contact us for manual verification." },
                { q: "Do SFSA certifications expire?", a: "SFSA certifications are valid as long as the holder maintains professional standards." },
                { q: "Can I get an official verification letter?", a: "Yes, certificate holders can request official verification letters. Contact us with your certificate details." },
              ].map((faq, i) => (
                <AccordionItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="float-card p-8 h-full">
                <div className="icon-badge-lg mb-5">
                  <Info className="text-accent" size={24} />
                </div>
                <h4 className="font-heading text-base font-semibold mb-3">Verification Support</h4>
                <div className="space-y-2 text-sm">
                  <p><a href="mailto:info@sfsa.in" className="text-accent hover:underline font-medium">info@sfsa.in</a></p>
                  <p><a href="tel:+916309792244" className="text-accent hover:underline font-medium">+91 63097 92244</a></p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="float-card p-8 h-full">
                <div className="icon-badge-lg mb-5">
                  <Users className="text-accent" size={24} />
                </div>
                <h4 className="font-heading text-base font-semibold mb-3">Hiring SFSA Graduates?</h4>
                <p className="text-sm text-muted-foreground mb-5">
                  Interested in recruiting SFSA-certified professionals?
                </p>
                <Button asChild className="btn-yellow !rounded-xl !text-sm !h-10 !px-6">
                  <Link to="/placement-support">Become a Placement Partner <ArrowRight className="ml-1" size={14} /></Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CertificateVerificationPage;
