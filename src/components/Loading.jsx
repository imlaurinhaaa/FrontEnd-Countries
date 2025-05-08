import React from "react";
import Image from "next/image";
import styles from "../styles/Loading.module.css";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <Image src={"/images/world.gif"} width={200} height={120} priority alt="Loading" />
            <p>Carregando países...</p>
        </div>
    );
}
