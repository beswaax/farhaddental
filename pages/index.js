import React from "react";

import Header from "../src/components/headers/Header7";
import Promises from "../src/components/features/CustomerSegments";
import Content1 from "../src/components/content/Content1";
import Content2 from "../src/components/content/Content2";
import Services from "../src/components/features/Features";
import ContactDetails from "../src/components/content/ServicesContent6";

import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <title key="title">Farhad Dental Care Toronto</title>{" "}
      </Head>
      <Header />
      <Promises />
      <Content1 />
      <Services />
      <Content2 />
      <ContactDetails
        content={{
          "header-p1":
            "Get in touch with our caring and dedicated team to find out how we can help.",
          button1: "Contact Us",
          button2: "Appointment",
        }}
      />
    </div>
  );
}
