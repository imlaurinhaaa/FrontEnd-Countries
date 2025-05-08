import React from "react";
import Image from "next/image";
import styles from "../styles/CountryCard.module.css";

export default function CountryCard({ country, onClick, onCardClick }) {
  return (
    <div
      className={styles.card}
      onClick={() => {
        if (onCardClick) onCardClick(country); 
        if (onClick) onClick(); 
      }}
    >
      <Image
        width={200}
        height={200}
        src={country.flags.png}
        alt={`Bandeira de ${country.translations.por.common}`}
        className={styles.flag}
      />
      <h3 className={styles.name}>{country.translations.por.common}</h3>
    </div>
  );
}
