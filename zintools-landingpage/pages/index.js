import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { WrapperContainerComponent } from "../src/layout/index";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>zintools landing page</title>
        <link rel="icon" href="/zintools-logo.jpg" />
      </Head>
      <main>
        <WrapperContainerComponent />
      </main>
    </div>
  );
}
