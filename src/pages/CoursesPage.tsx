import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import courseCpt from "@/assets/course-cpt.jpg";
import courseNutrition from "@/assets/course-nutrition.jpg";
import courseSportsNutrition from "@/assets/course-sports-nutrition.jpg";
import courseStrength from "@/assets/course-strength.jpg";
import {
  Clock, ArrowRight, CheckCircle, Dumbbell, Apple, Trophy, Award,
  BookOpen, MessageCircle, Zap, Phone,
} from "lucide-react";

const courses = [
  {
    id: "cpt",
    title: "Certified Personal Trainer (CPT)",
    duration: "3 months",
    icon: Dumbbell,
    image: courseCpt,
    overview: "A flagship programme designed to develop highly skilled fitness professionals through structured exercise science, practical coaching, and real-world application.",
    subheading: "Subheading",
    theory: [
      "Anatomy, Kinesiology & Biomechanics",
      "Exercise Physiology (Neuromuscular & Energy Systems)",
      "Strength, Conditioning & Cardio Training Principles",
      "Nutrition Fundamentals for Coaching",
      "Client Assessment & Goal Setting",
      "Injury Prevention & Exercise Safety",
      "Professional Ethics & Communication",
    ],
    practical: [
      "Movement Screening & Fitness Assessments",
      "Exercise Technique & Coaching Cues",
      "Hands-on Training (Strength & Cardio Equipment)",
      "Client Communication & Coaching",
      "Programme Design (Fat Loss, Muscle Gain, Performance)",
      "Exercise Modifications (All Fitness Levels)",
      "Training for Special Populations",
      "Real-World Client Training Experience",
    ],
    careers: [
      "Personal Trainer (Gym / Freelance / Studio)",
      "Strength & Conditioning Coach (General Fitness Level)",
      "Fitness & Lifestyle Coach",
      "Online Coach / Content Creator",
      "Corporate Wellness Trainer",
      "Fitness Entrepreneur",
    ],
    cta: "Become a confident, industry-ready fitness professional.",
  },
  {
    id: "nutrition",
    title: "Certified Nutrition Coach (CNC)",
    duration: "2 months",
    icon: Apple,
    image: courseNutrition,
    overview: "Learn how to understand nutrition, plan meals, and apply it effectively in real-life coaching.",
    subheading: "Subheading",
    who: [
      "Anyone who wants to understand nutrition and improve their diet",
      "Fitness trainers and coaches adding nutrition to their coaching",
      "No prior nutrition background required."
    ],
    theory: [
      "Nutrition fundamentals & healthy eating",
      "Macronutrients, micronutrients & hydration",
      "Digestion, metabolism & energy balance",
      "Body composition & diet quality",
      "Nutrition for fat loss, muscle gain & performance",
      "Nutrition for special populations",
    ],
    practical: [
      "Meal planning for different goals",
      "Calorie & macronutrient calculation",
      "Food labels & portion control",
      "Client assessment & nutrition coaching",
      "Habit building & diet planning",
      "Case studies & real-world application",
    ],
    careers: [
      "Nutrition coach (online / offline)",
      "Fat loss & lifestyle coach",
      "Meal planning consultant",
      "Fitness & nutrition advisor",
      "Corporate wellness coach",
    ],
  },
  {
    id: "sports-nutrition",
    title: "Certified Sports Nutrition Coach",
    duration: "3 months",
    icon: Trophy,
    image: courseSportsNutrition,
    overview: "Advanced programme focused on sports nutrition, supplementation, and recovery to improve performance.",
    subheading: "Subheading",
    theory: [
      "Sports nutrition fundamentals",
      "Nutrition periodisation strategies",
      "Hydration and recovery principles",
      "Supplement safety and usage",
      "Competition-day nutrition",
      "Performance-focused nutrition planning",
    ],
    practical: [
      "Meal planning for training and performance",
      "Supplement analysis and recommendations",
      "Recovery nutrition planning",
      "Competition preparation strategies",
      "Athlete assessment basics",
      "Real-world application with clients",
    ],
    careers: [
      "Sports Nutrition Coach (Fitness & Athletes)",
      "Nutrition Consultant (General & Fitness Clients)",
      "Team / Gym Nutrition Advisor",
      "Supplement & Performance Nutrition Specialist",
    ],
  },
  {
    id: "strength",
    title: "Strength & Conditioning",
    duration: "2 months",
    icon: Award,
    image: courseStrength,
    overview: "Advanced programme focused on strength development, speed, agility, and performance.",
    subheading: "Subheading",
    theory: [
      "Biomechanics and movement fundamentals",
      "Strength development principles",
      "Speed, agility, and power training",
      "Periodisation and programme design",
      "Injury prevention basics",
      "Performance testing fundamentals",
    ],
    practical: [
      "Strength and performance programme design",
      "Movement screening and corrective exercise",
      "Speed and agility drill design",
      "Olympic lifting technique coaching",
      "Sport-specific training planning",
      "Performance testing and progress tracking",
    ],
    careers: [
      "Strength & Conditioning Coach",
      "Sports Performance Trainer",
      "Athletic Development Coach",
      "Fitness Programme Manager",
    ],
  },
];

const faqs = [
  { q: "Can I enroll in multiple courses?", a: "Yes! Many students complete one certification and then enroll in another to expand their skill set. We offer bundle discounts for students enrolling in multiple programs." },
  { q: "What is the class schedule like?", a: "Classes are held on weekdays and weekends depending on the batch. Weekend batches are available for working professionals. Each session is typically 2-3 hours." },
  { q: "Do I get a certificate after completion?", a: "Yes, you receive a SPEFL-affiliated government-recognized certification upon passing the final exam. This certificate is valid across India." },
  { q: "Is there any online-only option?", a: "We offer a hybrid model where you can access recorded lectures and materials online, but practical sessions require in-person attendance at our Hyderabad campus." },
  { q: "What documents do I need for enrollment?", a: "You'll need an Aadhaar card, passport-size photos, and educational certificates (if any). No specific prior qualifications are required to enroll." },
  { q: "Do you offer payment plans?", a: "Yes, we accept installment payments to make our programs more accessible. Contact our admissions team for details on available payment options." },
];

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const CoursesPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 section-blue" />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] uppercase">
              Courses
            </motion.h1>
            {/* 4 course buttons as outlined secondary buttons in a grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-3xl mx-auto"
            >
              {courses.map((c) => (
                <Button
                  key={c.id}
                  asChild
                  variant="outline"
                  className="!rounded-xl font-heading font-semibold text-[1.05rem] uppercase tracking-wider min-w-0 w-full h-16 px-6 flex items-center justify-center border-2 border-accent/50 text-black hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 shadow-md text-center whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  <a href={`#${c.id}`} className="w-full h-full flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis text-black">{c.title.split("(")[0].trim()}</a>
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Course Detail Sections */}
      {courses.map((course, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={course.id}
            id={course.id}
            className={`py-16 md:py-20 lg:py-24 ${isEven ? "" : "section-alt"}`}
          >
            <div className="container">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-10">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm" style={{ background: "hsl(45 100% 50%)", color: "hsl(204 100% 10%)" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="flex items-center gap-2 text-lg font-bold text-foreground bg-gradient-to-r from-accent/5 to-accent/10 px-5 py-2.5 rounded-full border border-accent/30 shadow-sm">
                    <Clock size={20} className="text-accent" />
                    {course.duration}
                  </span>
                </div>

                <div className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-start ${!isEven ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""}`}>
                  {/* Image */}
                  <div>
                    <div className="relative rounded-2xl overflow-hidden group mb-8" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={course.image}
                        alt={`${course.title} training session`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <GlowCard className="p-6 mb-6">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Career Opportunities</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {course.careers.map((c) => (
                          <div key={c} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle size={14} className="text-accent shrink-0" />
                            {c}
                          </div>
                        ))}
                      </div>
                    </GlowCard>
                    <Button asChild className="btn-yellow !rounded-xl w-full mt-10">
                      <Link to="/contact">
                        Apply for This Program <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="icon-badge-xl">
                        <course.icon className="text-accent" size={28} />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        {course.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base md:text-[17px] mb-8 max-w-xl">
                      {course.overview}
                    </p>

                    <div className="space-y-5 mb-8">
                      <div className="premium-card-static rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-5">
                          <BookOpen size={18} className="text-accent" />
                          <h3 className="font-heading text-lg font-bold">Theoretical Foundation</h3>
                        </div>
                        <ul className="space-y-3">
                          {course.theory.map((m, i) => (
                            <motion.li
                              key={m}
                              initial={{ opacity: 0, x: -12 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.06 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                              {m}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="premium-card-static rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-5">
                          <Zap size={18} className="text-accent" />
                          <h3 className="font-heading text-lg font-bold">Practical Skills</h3>
                        </div>
                        <ul className="space-y-3">
                          {course.practical.map((b, i) => (
                            <motion.li
                              key={b}
                              initial={{ opacity: 0, x: -12 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.06 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                              {b}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden dark-section">
        <div className="container relative text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6 text-white leading-tight">
              Not Sure Which Course Is Right For You?
            </h2>
            <p className="text-white/50 text-base md:text-lg mb-10 max-w-lg mx-auto">
              Book a free consultation and our career advisors will help you choose the perfect certification.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="btn-yellow !rounded-xl">
                <Link to="/contact">Get Free Guidance</Link>
              </Button>
              <Button asChild className="border-2 border-accent/50 bg-transparent text-white hover:bg-accent/10 hover:border-accent hover:text-accent px-10 h-[3.25rem] rounded-xl font-heading font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden uppercase tracking-wider">
                <a href="tel:+916309792244" className="flex items-center justify-center gap-2">
                  <span className="absolute left-0 top-0 h-full w-1 bg-accent"></span>
                  <Phone size={16} />
                  <span>Call Us</span>
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

export default CoursesPage;

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
