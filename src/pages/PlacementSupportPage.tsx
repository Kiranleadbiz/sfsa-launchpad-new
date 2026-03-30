import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";
import EnquiryForm from "@/components/EnquiryForm";
import { Button } from "@/components/ui/button";
import {
  Briefcase, Users, Building2, GraduationCap, Mail, Phone, Handshake,
} from "lucide-react";

const placementPartners = [
  { name: "Fit Map", location: "Banjara Hills, Hyderabad" },
  { name: "F45", location: "Kukatpally, Hyderabad" },
  { name: "Stark Fitness", location: "All Branches, Hyderabad" },
];

const PlacementSupportPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding-sm section-blue mt-20 md:mt-28">
      <div className="container text-center">
        <SectionHeading title="Where SFSA Graduates Build Their Careers" />
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: GraduationCap, value: 90, suffix: "%", label: "Placement Success" },
              { icon: Building2, value: 50, suffix: "+", label: "Partner Companies" },
              { icon: Users, value: 700, suffix: "+", label: "Graduates Placed" },
              { icon: Briefcase, value: 6, suffix: "+", label: "Career Paths" },
            ].map((s) => (
              <div key={s.label} className="float-card p-5 text-center">
                <p className="font-heading text-2xl font-bold text-blue">
                  <CounterAnimation end={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Our Placement Partners */}
    <section className="section-padding-sm mt-10 md:mt-16">
      <div className="container">
        <SectionHeading title="Our Placement Partners" />
        
        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-14">
          {placementPartners.map((p) => (
            <AnimatedSection key={p.name}>
              <div className="float-card px-10 py-6 text-center min-w-[180px]">
                <p className="font-heading text-xl font-bold text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{p.location}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Table */}
        <AnimatedSection>
          <div className="premium-card-static overflow-hidden max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="dark-section">
                    <th className="p-4 text-left font-heading font-semibold text-white text-base">Gym Name</th>
                    <th className="p-4 text-left font-heading font-semibold text-white text-base">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {placementPartners.map((p, i) => (
                    <tr key={p.name} className={`${i % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
                      <td className="p-4 font-semibold text-foreground text-base">{p.name}</td>
                      <td className="p-4 text-muted-foreground text-base">{p.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Become a Partner */}
    <section className="section-padding-sm section-alt">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <div className="float-card p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "hsl(45 100% 50%)" }} />
            <div className="text-center mb-8">
              <Handshake className="text-accent mx-auto mb-4" size={36} />
              <h3 className="font-heading text-2xl font-bold uppercase mb-3">Hire SFSA-Certified Professionals</h3>
              <p className="text-muted-foreground text-base max-w-md mx-auto">Partner with SFSA to access a pipeline of qualified, certified fitness professionals.</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="btn-yellow !rounded-xl">
                <a href="mailto:info@sfsa.in" className="flex items-center justify-center gap-2">
                  <Mail size={15} />
                  <span>Partner With Us</span>
                </a>
              </Button>
              <Button asChild className="border-2 border-accent/50 bg-transparent text-foreground hover:bg-accent/10 hover:border-accent hover:text-accent px-10 h-[3.25rem] rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden uppercase tracking-wider">
                <a href="tel:+916309792244" className="flex items-center justify-center gap-2">
                  <span className="absolute left-0 top-0 h-full w-1 bg-accent"></span>
                  <Phone size={15} />
                  <span>+91 63097 92244</span>
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Enquiry */}
    <section className="section-padding-sm section-blue">
      <div className="container max-w-xl">
        <SectionHeading title="Get Placement Assistance" subtitle="Submit your details and our career team will reach out" />
        <AnimatedSection>
          <EnquiryForm title="Career Enquiry" subtitle="Fill in your details to learn about current opportunities." />
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding-sm relative overflow-hidden dark-section">
      <div className="container relative text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5 text-white">
            Your Career Starts With <span className="text-accent">Certification</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto">
            Get certified, get placed, and start earning in the fitness industry.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="btn-yellow !rounded-xl">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild className="border-2 border-accent/50 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent px-10 h-[3.25rem] rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden uppercase tracking-wider">
              <Link to="/courses" className="flex items-center">
                <span className="absolute left-0 top-0 h-full w-1 bg-accent"></span>
                <span className="ml-3">View Programs</span>
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default PlacementSupportPage;
