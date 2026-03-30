import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import OptimizedImage from "@/components/OptimizedImage";
import trainingClassroom from "@/assets/training-classroom.jpg";
import trainingNutrition from "@/assets/training-nutrition.jpg";
import trainingRehab from "@/assets/training-rehab.jpg";
import trainingStrength from "@/assets/training-strength.jpg";
import trainingBiology from "@/assets/training-biology.jpg";

const gallery = [
  { src: trainingClassroom, alt: "CPT Demo Class", label: "Classroom Training", span: "md:col-span-2", pos: "center 30%" },
  { src: trainingNutrition, alt: "Nutrition Science Session", label: "Nutrition Science", span: "", pos: "center 30%" },
  { src: trainingRehab, alt: "Sports Rehab Class", label: "Sports Rehabilitation", span: "", pos: "center 30%" },
  { src: trainingStrength, alt: "Strength & Conditioning", label: "Practical Sessions", span: "md:col-span-2", pos: "center 35%" },
  { src: trainingBiology, alt: "Biology & Anatomy Class", label: "Anatomy & Biology", span: "", pos: "center 35%" },
];

const TrainingGallery = () => (
  <section className="section-padding-sm section-alt">
    <div className="container">
      <SectionHeading
        title="Inside Our Academy"
        subtitle="Real classroom and practical training sessions at SFSA"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {gallery.map((img, i) => (
          <AnimatedSection key={img.alt} delay={i * 0.08} className={img.span}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-[240px]">
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: img.pos }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10" />
              <p className="absolute bottom-4 left-5 text-white text-sm font-heading font-semibold opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0 z-10">
                {img.label}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingGallery;
