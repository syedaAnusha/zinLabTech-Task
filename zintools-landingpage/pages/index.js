import Head from "next/head";
import React from "react";

import "tailwindcss/tailwind.css";
import { WrapperContainer } from "../src/layout/index";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>zintools landing page</title>
        <link rel="icon" href="/zintools-logo.jpg" />
      </Head>
      <main>
        <WrapperContainer />
      </main>
    </React.Fragment>
  );
}
