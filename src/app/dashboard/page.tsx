"use client";

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Dashboard() {
  const [paid, setPaid] = useState(false);

  const handlePay = () => {
    // Mock Razorpay / UPI flow
    alert("Simulating Razorpay UPI integration...");
    setTimeout(() => {
      setPaid(true);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className="title" style={{ marginBottom: 0 }}>Welcome back, User</h1>
        </div>

        <div className={styles.dashboardGrid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>📜 Active Prescriptions</h2>
            
            <div className={styles.prescriptionList}>
              <div className={styles.prescriptionItem}>
                <div>
                  <div className={styles.medicineName}>Finasteride 1mg & Minoxidil 5%</div>
                  <div className={styles.medicineDetails}>Prescribed by Dr. Sharma • 3 Month Plan</div>
                </div>
                <div className={styles.statusBadge}>Active</div>
              </div>
              
              <div className={styles.prescriptionItem}>
                <div>
                  <div className={styles.medicineName}>Biotin Gummies</div>
                  <div className={styles.medicineDetails}>Daily Supplement</div>
                </div>
                <div className={styles.statusBadge}>Active</div>
              </div>
            </div>
          </div>

          <div>
            {!paid ? (
              <div className={`${styles.card} ${styles.payCta}`}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Pending Payment</h3>
                <div className={styles.payAmount}>₹1,499<span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>/mo</span></div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Your doctor has approved your treatment plan.</p>
                
                <button className={styles.upiBtn} onClick={handlePay}>
                  Pay via UPI / Cards
                </button>
                <div className={styles.upiMethods}>
                  <span>GPay</span> • <span>PhonePe</span> • <span>Paytm</span>
                </div>
              </div>
            ) : (
              <div className={styles.card} style={{ textAlign: 'center', borderColor: 'var(--secondary)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Payment Successful</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Your order is confirmed and will be shipped in discreet packaging within 24 hours. Check WhatsApp for updates.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
