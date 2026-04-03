import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicyPage = () => (
  <Layout>
    <section className="section-padding-sm section-blue">
      <div className="container">
        <SectionHeading
          title="Privacy Policy"
          subtitle="How SFSA collects, uses, and protects your personal information"
        />
      </div>
    </section>

    <section className="section-padding-sm">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <div className="premium-card-static rounded-2xl p-6 md:p-8 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Last Updated:</strong> 3 April 2026</p>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">1. Information We Collect</h2>
              <p>We may collect your name, phone number, email address, location, and enquiry details when you submit forms, contact us, or interact with our website.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">2. How We Use Information</h2>
              <p>We use your information to respond to enquiries, provide course guidance, process admissions, improve services, and share important updates related to SFSA programs.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">3. Data Sharing</h2>
              <p>We do not sell personal data. We may share information with trusted service providers only when required for operations, communication, or legal compliance.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">4. Data Security</h2>
              <p>We use reasonable technical and administrative measures to protect personal information. However, no digital system can guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">5. Your Rights</h2>
              <p>You may request access, correction, or deletion of your personal data by contacting us at info@sfsa.in.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">6. Contact</h2>
              <p>For privacy-related questions, contact us at <a href="mailto:info@sfsa.in" className="text-accent hover:underline">info@sfsa.in</a>.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicyPage;
