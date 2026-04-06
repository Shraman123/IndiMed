"use client";

import Link from "next/link";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export default function CategoryCard({ title, description, icon, slug }: CategoryCardProps) {
  return (
    <Link href={`/quiz/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.action}>
          Explore treatments <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}
