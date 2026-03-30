import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import OptimizedImage from "@/components/OptimizedImage";
import { Star } from "lucide-react";
import mentorMounika from "@/assets/mentor-mounika.jpg";
import mentorPrashanth from "@/assets/mentor-prashanth.jpg";
import mentorYeshwanth from "@/assets/mentor-yeshwanth.png";
import mentorTuheena from "@/assets/mentor-tuheena.jpg";

const mentors = [
  {
    name: "Mounika Medak",
    role: "Co-Founder & Faculty",
    specialization: "CPT, Sports Nutrition & Functional Medicine",
    description:
      "A passionate fitness educator with deep expertise in certified personal training, sports nutrition, and functional medicine. Mounika co-founded SFSA to make quality fitness education accessible to all.",
    rating: 5,
    image: mentorMounika,
    objectPosition: "center 20%",
  },
  {
    name: "Prashanth Gaddampally",
    role: "Co-Founder & Faculty",
    specialization: "Fitness & Nutrition Sciences",
    description:
      "With years of experience in fitness and nutrition sciences, Prashanth brings a science-first approach to training. He focuses on bridging the gap between academic knowledge and practical application.",
    rating: 5,
    image: mentorPrashanth,
    objectPosition: "center 30%",
  },
  {
    name: "Dr. Yeshwanth",
    role: "Mentor & Guest Faculty",
    specialization: "Sports Rehab & Performance",
    description:
      "A specialist in sports rehabilitation and performance optimization, Dr. Yeshwanth guides students on injury prevention, recovery protocols, and athletic performance enhancement.",
    rating: 5,
    image: mentorYeshwanth,
    objectPosition: "center 20%",
  },
  {
    name: "Dr. Tuheena Sharma",
    role: "Mentor & Guest Faculty",
    specialization: "Sports Physiotherapy & Clinical Pilates",
    description:
      "An expert in sports physiotherapy and clinical pilates, Dr. Tuheena brings a rehabilitation-focused perspective to the curriculum, helping students understand movement science deeply.",
    rating: 5,
    image: mentorTuheena,
    objectPosition: "center 25%",
  },
];

const MentorsSection = () => (
  <section className="section-padding-sm">
    <div className="container">
      <SectionHeading
        title="Meet Our Mentors"
        subtitle="Learn from industry-leading experts who are passionate about your success"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((m, i) => (
          <AnimatedSection key={m.name} delay={i * 0.1}>
            <div className="float-card p-8 h-full flex flex-col items-center text-center group">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-3 border-primary/20 shadow-lg group-hover:border-primary/40 transition-colors duration-300">
                <OptimizedImage
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full"
                  style={{ objectPosition: m.objectPosition }}
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-heading text-xl font-bold mb-1">{m.name}</h3>
              <p className="text-sm font-bold text-accent mb-1">{m.role}</p>
              <p className="text-sm font-bold text-accent mb-4">{m.specialization}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {m.description}
              </p>

              {/* Star Rating */}
              <div className="flex gap-0.5">
                {[...Array(m.rating)].map((_, j) => (
                  <Star key={j} size={15} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MentorsSection;
