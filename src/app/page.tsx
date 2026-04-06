import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import styles from "./page.module.css";

const treatments = [
  {
    title: "Hair Loss",
    description: "Clinically proven treatments like Minoxidil and Finasteride to stop hair fall and regrow hair.",
    icon: "💆‍♂️",
    slug: "hair-loss"
  },
  {
    title: "Skincare",
    description: "Personalized formulas for acne, aging, and pigmentation under expert dermatology guidance.",
    icon: "✨",
    slug: "skincare"
  },
  {
    title: "Weight Management",
    description: "Modern GLP-1 backed approaches and metabolic plans to help you achieve a healthy weight safely.",
    icon: "⚖️",
    slug: "weight-loss"
  },
  {
    title: "Women's Health & PCOS",
    description: "Comprehensive care for PCOS, hormonal balance, and holistic wellness customized for Indian women.",
    icon: "🌸",
    slug: "womens-health"
  },
  {
    title: "Ayurvedic Wellness",
    description: "Time-tested natural supplements clinically backed for modern lifestyle issues.",
    icon: "🌿",
    slug: "ayurveda"
  },
  {
    title: "Men's Health",
    description: "Discreet, doctor-prescribed solutions for performance and vitality.",
    icon: "💪",
    slug: "mens-health"
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      
      <section id="treatments" className={styles.treatmentsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="title">Personalized Care for You</h2>
            <p className="subtitle">Select a category to start your free doctor consultation.</p>
          </div>
          
          <div className={styles.grid}>
            {treatments.map((treatment) => (
              <CategoryCard
                key={treatment.slug}
                title={treatment.title}
                description={treatment.description}
                icon={treatment.icon}
                slug={treatment.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="title">How IndiMed Works</h2>
            <p className="subtitle">Get expert care from the comfort of your home in 3 simple steps.</p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className="title" style={{ fontSize: '1.5rem' }}>Take the Quiz</h3>
              <p className="subtitle">Tell us about your symptoms, medical history, and goals in a quick online assessment.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className="title" style={{ fontSize: '1.5rem' }}>Doctor Review</h3>
              <p className="subtitle">A licensed Indian practitioner reviews your profile and prescribes a personalized treatment plan.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className="title" style={{ fontSize: '1.5rem' }}>Free Delivery</h3>
              <p className="subtitle">Your prescribed medications and wellness products are shipped directly to your door in discreet packaging.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
