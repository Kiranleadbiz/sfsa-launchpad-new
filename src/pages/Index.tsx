import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import OptimizedImage from "@/components/OptimizedImage";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";
import EnquiryForm from "@/components/EnquiryForm";
import MentorsSection from "@/components/MentorsSection";
import TrainingGallery from "@/components/TrainingGallery";
import ParticleField from "@/components/ParticleField";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import heroImage from "@/assets/hero-new.jpg";
import whoWeAreImage from "@/assets/who-we-are.jpg";
import sfsaLogo from "@/assets/sfsa-logo.png";
import courseCpt from "@/assets/course-cpt.jpg";
import courseNutrition from "@/assets/course-nutrition.jpg";
import courseSportsNutrition from "@/assets/course-sports-nutrition.jpg";
import courseStrength from "@/assets/course-strength.jpg";
import testimonialMani from "@/assets/testimonial-mani.png";
import testimonialShafi from "@/assets/testimonial-shafi.png";
import testimonialBunny from "@/assets/testimonial-bunny.png";
import testimonialAdnan from "@/assets/testimonial-adnan.jpeg";
import {
  ArrowRight, Star, Clock,
  Dumbbell, Apple, Trophy, CheckCircle, Award,
  ShieldCheck, Users, Globe, BookOpen, Monitor,
} from "lucide-react";

const courses = [
  {
    id: "cpt",
    title: "Certified Personal Trainer",
    duration: "3 months",
    icon: Dumbbell,
    image: courseCpt,
    desc: "Flagship program that prepares highly skilled fitness professionals through advanced exercise science and global coaching standards.",
  },
  {
    id: "nutrition",
    title: "Certified Nutrition Coach",
    duration: "2 months",
    icon: Apple,
    image: courseNutrition,
    desc: "Professional certification in evidence-based nutrition, meal planning, and client coaching.",
  },
  {
    id: "sports-nutrition",
    title: "Certified Sports Nutrition Coach",
    duration: "3 months",
    icon: Trophy,
    image: courseSportsNutrition,
    desc: "Advanced certification in performance nutrition, supplementation, and recovery strategies for athletes.",
  },
  {
    id: "strength",
    title: "Strength & Conditioning",
    duration: "2 months",
    icon: Award,
    image: courseStrength,
    desc: "Advanced training in strength development, speed, agility, and athletic performance.",
  },
];

const whatMakesDifferent = [
  "Government-Recognised Certification",
  "Expert Mentorship",
  "Practical Learning",
  "Offline & Online Learning",
  "Regional Language Support (English & Telugu)",
  "Placement Support",
];

const testimonials = [
  {
    name: "Mani",
    location: "Hyderabad",
    text: "One of the best academy in Hyderabad where you can do certified fitness trainer and ACE course. Full supportive staff and facultys are highly qualified where they will teach from basics to advance. I highly recommend to do courses in this academy.",
    program: "CPT",
    image: testimonialMani,
  },
  {
    name: "Shafi",
    location: "Hyderabad",
    text: "Overall, my experience with SFSA has been excellent. Quality education, good faculty, and practical approach. Placement support, Definitely one of the best fitness education institutes in Hyderabad.",
    program: "CPT",
    image: testimonialShafi,
  },
  {
    name: "Bunny Rathod",
    location: "Hyderabad",
    text: "What I liked most about SFSA is the offline classroom learning. Interactive sessions, discussions and practical demos helped me understand concepts better than online courses. Thanks for SFSA TEAM.",
    program: "CPT",
    image: testimonialBunny,
  },
  {
    name: "Adnan",
    location: "Hyderabad",
    text: "Best institute for pursuing certification in personal training. Faculty are good they helped me to successfully complete my certification. Its more like a knowledge hub with faculties having good expertise and command over the subject. They helped me to broaden my knowledge base with their practical sessions.",
    program: "CPT",
    image: testimonialAdnan,
  },
];

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[hsl(204,100%,6%)]" />
        </div>
        <ParticleField className="z-[1] opacity-40" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TextReveal>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] mb-6 text-white">
                  Simplifying Fitness Science{" "}
                  <span className="text-accent">Building Confident Coaches</span>
                </h1>
              </TextReveal>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <MagneticButton>
                  <Button asChild className="btn-yellow !rounded-xl">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild className="border-2 border-accent/50 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent px-10 h-[3.25rem] rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden group uppercase tracking-wider">
                    <Link to="/courses" className="flex items-center">
                      <span className="absolute left-0 top-0 h-full w-1 bg-accent transition-all duration-300"></span>
                      <span className="ml-3">View Courses</span>
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src={heroImage}
                  alt="Professional fitness training at SFSA"
                  className="w-full h-[500px]"
                  style={{ objectPosition: "center center" }}
                  eager
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative -mt-1 z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10">
            {[
              { value: 700, suffix: "+", label: "Students Trained" },
              { value: 90, suffix: "%", label: "Placement Support" },
              { value: 20, suffix: "+", label: "Years Expert Faculty Experience" },
              { value: 100, suffix: "%", label: "Government Recognition" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="float-card p-6 md:p-8 text-center group cursor-default"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-blue mb-1">
                  <CounterAnimation end={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="section-padding-sm">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <TextReveal>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6">Who We Are</h2>
              </TextReveal>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
                <strong className="text-foreground">Sports & Fitness Sciences Academy (SFSA)</strong> is dedicated to simplifying fitness and sports science for real-world coaching.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                Learn through simplified exercise science, practical application, and expert mentorship — so you don't just train clients, you coach with confidence.
              </p>

              {/* What Makes SFSA Different */}
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">What Makes SFSA Different</h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col gap-3 mb-8"
              >
                {whatMakesDifferent.map((item) => (
                  <motion.div key={item} variants={staggerItem} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <MagneticButton>
                <Button asChild className="btn-yellow !rounded-xl">
                  <Link to="/about">Learn More About SFSA <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </MagneticButton>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl overflow-hidden shadow-xl relative"
                >
                  <img
                    src={courseCpt}
                    alt="SFSA practical training session"
                    className="w-full h-[340px] md:h-[480px] object-cover rounded-3xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                  className="absolute -bottom-5 -left-5 rounded-2xl px-6 py-4 shadow-xl"
                  style={{ background: "hsl(204 100% 10%)" }}
                >
                  <p className="font-heading text-3xl font-bold text-accent">5+</p>
                  <p className="text-xs text-white/80 font-medium">Years of Excellence</p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section className="section-padding-sm section-blue relative overflow-hidden">
        <div className="container relative">
          <SectionHeading title="Advance Your Fitness Career" subtitle="Explore industry-focused certification programs designed to match your goals—combining science, practical learning, and real-world application." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <GlowCard className="float-card h-full flex flex-col relative group rounded-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left z-10" />

                  {/* Course Image */}
                  <div className="h-44 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {i === 0 && (
                      <span className="absolute top-3 right-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10" style={{ background: "hsl(45 100% 50%)", color: "hsl(204 100% 10%)" }}>
                        Flagship
                      </span>
                    )}

                    <h3 className="font-heading text-lg font-semibold mb-3 leading-snug">{c.title}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-3 py-1.5 rounded-full">
                        <Clock size={12} /> {c.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{c.desc}</p>
                    <Button
                      asChild
                      className="w-full text-sm h-10 !h-10 !text-sm !px-4 !rounded-xl border-2 border-accent/50 bg-transparent text-accent font-heading font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg relative overflow-hidden group hover:bg-[hsl(45,100%,50%)] hover:text-[hsl(204,100%,10%)] hover:border-[hsl(45,100%,50%)]"
                    >
                      <Link to={`/courses#${c.id}`} className="flex items-center justify-center">
                        <span className="absolute left-0 top-0 h-full w-1 bg-accent transition-all duration-300 group-hover:bg-[hsl(204,100%,10%)]"></span>
                        <span className="ml-3">Learn More</span>
                        <ArrowRight className="ml-1" size={14} />
                      </Link>
                    </Button>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding-sm section-alt relative overflow-hidden">
        <div className="absolute top-20 left-10 text-[200px] font-serif text-accent/[0.05] leading-none select-none pointer-events-none">"</div>
        <div className="container relative">
          <SectionHeading title="Success Stories from SFSA Graduates" />
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="float-card p-8 h-full relative group"
                >
                  <span className="absolute top-4 right-6 text-6xl font-serif text-accent/10 leading-none select-none">"</span>
                  <div className="flex flex-row items-center gap-8">
                    {/* Left: Image */}
                    <div className="flex-shrink-0 w-40 h-40 rounded-2xl overflow-hidden border-2 border-accent/30 bg-white">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Right: Text */}
                    <div className="flex-1">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={16} className="fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-4 relative z-10">"{t.text}"</p>
                      <div>
                        <p className="font-semibold text-base leading-tight">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.location} · {t.program}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAMPUS GALLERY ─── */}
      <TrainingGallery />

      {/* ─── MENTORS ─── */}
      <MentorsSection />

      {/* ─── ENQUIRY FORM ─── */}
      <section className="section-padding-sm section-blue relative overflow-hidden">
        <div className="container max-w-xl relative">
          <SectionHeading title="Ready to Start Your Fitness Career?" subtitle="Join our next batch and take the first step toward becoming a certified fitness professional. Limited seats available." />
          <AnimatedSection>
            <EnquiryForm title="Free Career Consultation" subtitle="Fill in your details for a free consultation call." />
          </AnimatedSection>
        </div>
      </section>


      {/* ─── AFFILIATED & RECOGNIZED BY (SIDE BY SIDE) ─── */}
      <section className="section-padding-sm">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Affiliated With */}
            <div className="flex-1 bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center justify-center">
              <SectionHeading title="Affiliated With" subtitle="SPEFL-SC" />
              <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
                <AnimatedSection>
                  <div className="float-card px-8 py-6 text-center">
                    <img src="/src/assets/SPEFL-SC.png" alt="SPEFL-SC" className="h-12 w-auto mx-auto" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
            {/* Recognized By */}
            <div className="flex-1 bg-[#f7f9fb] rounded-2xl shadow-md p-8 text-center flex flex-col items-center justify-center">
              <SectionHeading title="Recognized By" subtitle="Skill India | PMKVY" />
              <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
                <AnimatedSection>
                  <div className="float-card px-8 py-6 text-center">
                    <img src="/src/assets/Skill_India-removebg-preview.png" alt="Skill India" className="h-12 w-auto mx-auto" />
                  </div>
                </AnimatedSection>
                <AnimatedSection>
                  <div className="float-card px-8 py-6 text-center">
                    <img src="/src/assets/pmky.png" alt="PMKVY" className="h-12 w-auto mx-auto" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 md:py-24 relative overflow-hidden dark-section">
        <ParticleField className="opacity-40" />
        <div className="container relative text-center z-10">
          <AnimatedSection>
            <TextReveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold uppercase mb-5 text-white">
                Ready to <span className="text-accent">Transform</span> Your Career?
              </h2>
            </TextReveal>
            <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto">
              Book a free consultation with our career advisors and find the right certification for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton>
                <Button asChild className="btn-yellow !rounded-xl">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild className="border-2 border-accent/50 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent px-10 h-[3.25rem] rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden uppercase tracking-wider">
                  <Link to="/courses" className="flex items-center">
                    <span className="absolute left-0 top-0 h-full w-1 bg-accent transition-all duration-300"></span>
                    <span className="ml-3">View Courses</span>
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
