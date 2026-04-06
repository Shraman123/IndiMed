import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <h1 className={`${styles.title} animate-fade-in`}>
        Personalized Healthcare, <br />
        <span className={styles.highlight}>Tailored for India.</span>
      </h1>
      
      <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
        Clinician-guided solutions for hair loss, skincare, weight management, and holistic wellness. Get treatments delivered discreetly to your door.
      </p>
      
      <div className={`${styles.ctaWrapper} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        <Link href="#treatments">
          <button className={styles.primaryBtn}>Start Consultation</button>
        </Link>
        <button className={styles.secondaryBtn}>Explore Ayurveda</button>
      </div>
    </section>
  );
}
