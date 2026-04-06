"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        IndiMed
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="#treatments" className={styles.link}>Treatments</Link>
        <Link href="#how-it-works" className={styles.link}>How it works</Link>
        <Link href="#ayurveda" className={styles.link}>Ayurveda</Link>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </nav>
  );
}
