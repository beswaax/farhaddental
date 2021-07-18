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
        {/* <meta
          name="description"
          key="description"
          content="The company at a glance. Find out more about us and our motivations. We have stood for the highest quality craftsmanship for over 10 years. We offer engineering services to a broad array of fields. As a provider of engineering services, we supply our customers with everything from a single source."
        />
        <meta
          name="keywords"
          content="engineering toronto, engineering structural toronto, toronto envelope engineering, structural engineering gta, mississauga engineering, mississauga engineering services, toronto engineering services"
        />
        <meta
          property="og:title"
          content="Engineering Link Toronto"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="engineeringlink.ca/" />

        <meta
          property="og:description"
          key="og:description"
          content="The company at a glance. Find out more about us and our motivations. We have stood for the highest quality craftsmanship for over 10 years. We offer engineering services to a broad array of fields. As a provider of engineering services, we supply our customers with everything from a single source."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/" /> */}
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
