import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import OptimizedImage from "@/components/OptimizedImage";
import aboutHero from "@/assets/about-hero.jpg";
import trainingClassroom from "@/assets/s4.jpg.jpeg";
import trainingNutrition from "@/assets/s1.jpg.jpeg";
import { MapPin, ShieldCheck, Award, BookOpen, Dumbbell, Monitor, Globe, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatMakesDifferent = [
  { title: "Government-Recognised Certification", icon: ShieldCheck },
  { title: "Experienced Industry Faculty", icon: Award },
  { title: "Science-Based Curriculum", icon: BookOpen },
  { title: "Flexible Learning (Offline & Online)", icon: Monitor },
  { title: "Extensive Practical Training", icon: Dumbbell },
  { title: "Bilingual Instruction (English & Telugu)", icon: Globe },
  { title: "Strong Placement Network", icon: Target },
  { title: "Alumni Network & Ongoing Support", icon: Heart },
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 section-blue">
      <div className="container">
        <SectionHeading title="About Sports & Fitness Sciences Academy" subtitle="Building Hyderabad's fitness professionals since 2021" />
      </div>
    </section>

    {/* Our Story */}
    <section className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <OptimizedImage src={aboutHero} alt="SFSA Academy" className="w-full h-[340px] md:h-[480px]" style={{ objectPosition: "center center" }} />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl px-6 py-4 shadow-xl" style={{ background: "hsl(204 100% 10%)" }}>
                <p className="font-heading text-3xl font-bold text-accent">2021</p>
                <p className="text-xs text-white/80 font-medium">Established</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Our Story</span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">How It Started</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              <strong className="text-foreground">Sports and Fitness Sciences Academy (SFSA)</strong> was established with a clear mission: to elevate the fitness profession by producing qualified trainers who combine scientific knowledge with practical excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              We recognized a gap in fitness education — too many enthusiastic individuals entering the field without proper training, and too few institutions providing the comprehensive, professional education needed to truly succeed. SFSA was created to fill that gap.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              Since our founding, we've trained 700+ fitness professionals who now work across Hyderabad and beyond, making positive impacts in people's lives while building rewarding careers for themselves.
            </p>
            <div className="flex items-start gap-3 float-card p-5">
              <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
              <span className="text-sm text-muted-foreground">Srinagar Colony Main Rd, Srinagar Colony, Yella Reddy Guda, Hyderabad, Telangana 500073</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* What Makes SFSA Different */}
    <section className="section-padding" style={{ background: "hsl(204 100% 10%)" }}>
      <div className="container">
        <SectionHeading title="What Makes SFSA Different" subtitle="The advantages that set our graduates apart" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whatMakesDifferent.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.06}>
              <div className="rounded-2xl p-6 h-full text-center border border-white/10 hover:border-accent/40 transition-all duration-400 hover:-translate-y-1" style={{ background: "hsl(204 100% 14%)" }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: "hsl(45 100% 50% / 0.15)" }}>
                  <w.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-base font-semibold text-white">{w.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Campus Life */}
    <section className="section-padding">
      <div className="container">
        <SectionHeading title="Professional Training Environment" subtitle="Our facility is designed to provide authentic, professional training experience" />
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] group">
              <OptimizedImage src={trainingClassroom} alt="SFSA classroom theory session" className="w-full h-full group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: "center center" }} />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center font-medium">Classroom Theory Sessions</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] group">
              <OptimizedImage src={trainingNutrition} alt="Nutrition science class at SFSA" className="w-full h-full group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: "center center" }} />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center font-medium">Nutrition Science Training</p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 relative overflow-hidden dark-section">
      <div className="container relative text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5 text-white">
            Ready to Join <span className="text-accent">SFSA</span>?
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto">
            Discover which certification program aligns with your career goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mt-6">
            <Button asChild className="btn-yellow w-full h-[3.25rem] font-heading font-semibold text-base shadow-lg transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild className="w-full h-[3.25rem] border-2 border-accent/50 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden uppercase tracking-wider">
              <Link to="/courses" className="flex items-center justify-center w-full">
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

export default AboutPage;
