// src/components/FeatureCard.jsx
import React from 'react';
import clsx from 'clsx';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className={clsx(styles.card)}>
      <div className={styles.iconContainer}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

