import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Dumbbell, Apple, Trophy } from "lucide-react";

const workshops = [
  {
    title: "Functional Training Workshop",
    duration: "2 Days",
    icon: Dumbbell,
    desc: "Hands-on workshop covering functional movement patterns, kettlebell training, TRX, and bodyweight exercises for real-world coaching.",
  },
  {
    title: "Sports Injury Prevention",
    duration: "1 Day",
    icon: Trophy,
    desc: "Learn common sports injuries, prevention strategies, basic taping techniques, and when to refer clients to medical professionals.",
  },
  {
    title: "Nutrition for Fat Loss",
    duration: "1 Day",
    icon: Apple,
    desc: "Evidence-based fat loss nutrition strategies, macro calculations, meal prep guidance, and client counseling techniques.",
  },
];

const WorkshopsPage = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 section-blue">
      <div className="container text-center">
        <SectionHeading
          title="Workshops & Masterclasses"
          subtitle="Short-duration, high-impact learning experiences designed to sharpen specific skills and expand your fitness knowledge."
        />
      </div>
    </section>

    {/* Workshops Grid */}
    <section className="section-padding">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.08}>
              <GlowCard className="float-card p-8 h-full flex flex-col group rounded-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-2xl" />
                <div className="icon-badge-xl mb-5 group-hover:scale-110 transition-all duration-300">
                  <w.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 leading-snug">{w.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-3 py-1.5 rounded-full">
                    <Clock size={12} /> {w.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{w.desc}</p>
                <Button asChild className="w-full btn-yellow rounded-md !h-10 !text-sm !px-4">
                  <Link to="/contact">
                    Enrol Now <ArrowRight className="ml-1" size={14} />
                  </Link>
                </Button>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 relative overflow-hidden dark-section">
      <div className="container relative text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-5 text-white">
            Want a Custom <span className="text-accent">Workshop</span>?
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto">
            We also conduct custom workshops for gyms, fitness studios, and corporate teams. Get in touch to discuss your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="btn-yellow !rounded-xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="border-2 border-accent/50 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent px-10 h-[3.25rem] rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden uppercase tracking-wider">
              <Link to="/courses" className="flex items-center">
                <span className="absolute left-0 top-0 h-full w-1 bg-accent"></span>
                <span className="ml-3">View Full Courses</span>
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default WorkshopsPage;
