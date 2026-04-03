import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const TermsPage = () => (
  <Layout>
    <section className="pt-40 md:pt-48 pb-12 md:pb-16 section-blue">
      <div className="container">
        <SectionHeading
          title="Terms & Conditions"
          subtitle="Website and service usage terms for SFSA"
        />
      </div>
    </section>

    <section className="section-padding-sm">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <div className="premium-card-static rounded-2xl p-6 md:p-8 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Last Updated:</strong> 3 April 2026</p>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
              <p>By using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the site.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">2. Educational Information</h2>
              <p>Course details, schedules, fees, and certifications are subject to updates by SFSA. Please confirm latest details with admissions before enrollment.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">3. Intellectual Property</h2>
              <p>All text, branding, design, and media on this website are owned by SFSA unless stated otherwise. Unauthorized copying or distribution is prohibited.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">4. User Conduct</h2>
              <p>You agree not to misuse forms, submit false information, or attempt unauthorized access to website systems.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">5. Limitation of Liability</h2>
              <p>SFSA is not liable for indirect or consequential losses arising from website use, delays, or temporary service interruptions.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">6. Contact</h2>
              <p>For terms-related questions, contact <a href="mailto:info@sfsa.in" className="text-accent hover:underline">info@sfsa.in</a>.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
