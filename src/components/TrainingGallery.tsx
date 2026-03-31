import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import OptimizedImage from "@/components/OptimizedImage";
import academyImage1 from "@/assets/s1.jpg.jpeg";
import academyImage2 from "@/assets/s2.jpg.jpeg";
import academyImage3 from "@/assets/s3.jpg.jpeg";
import academyImage4 from "@/assets/s4.jpg.jpeg";
import academyImage5 from "@/assets/s5.jpg.jpeg";
import academyImage6 from "@/assets/s7.jpg.jpeg";

const gallery = [
  { src: academyImage1, alt: "SFSA Academy Session 1", pos: "center center" },
  { src: academyImage2, alt: "SFSA Academy Session 2", pos: "center center" },
  { src: academyImage3, alt: "SFSA Academy Session 3", pos: "center center" },
  { src: academyImage4, alt: "SFSA Academy Session 4", pos: "center center" },
  { src: academyImage5, alt: "SFSA Academy Session 5", pos: "center center" },
  { src: academyImage6, alt: "SFSA Academy Session 6", pos: "center center" },
];

const TrainingGallery = () => (
  <section className="section-padding-sm section-alt">
    <div className="container">
      <SectionHeading
        title="Inside Our Academy"
        subtitle="Real classroom and practical training sessions at SFSA"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
        {gallery.map((img, i) => (
          <AnimatedSection key={img.alt} delay={i * 0.08}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group bg-white">
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: img.pos, objectFit: "cover" }}
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingGallery;
