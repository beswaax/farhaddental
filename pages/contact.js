import React from "react";
import PageHeader from "../src/components/headers/PageHeader";
import Values from "../src/components/features/CustomerSegments";
import UnderTest from "../src/components/testimonials/TestimonalsWithoutLogo";
import Contact2 from "../src/components/content/LearnMoreContactPage";

import Contact from "../src/components/contact/ContactPageContact";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title key="title">Contact | Farhad Dental Care Toronto</title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="Contact us today! We offer structural and envelope engineering services As a general provider of engineering services, we supply our customers with everything from a single source. We are active in the Greater Toronto Area."
        />
        <meta
          name="keywords"
          content="engineering gat, engineering toronto, contact engineering link, contact engineering, engineering job toronto, structural engineering contact, structural engineering contact toronto, toronto structural engineering, toronto envelope engineering"
        />
        <meta
          property="og:title"
          content="Contact | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/contact"
        />

        <meta
          property="og:description"
          key="og:description"
          content="Contact us today! We offer structural and envelope engineering services As a general provider of engineering services, we supply our customers with everything from a single source. We are active in the Greater Toronto Area."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/contact" /> */}
      </Head>
      <PageHeader
        title={"Contact"}
        bg={
          "https://res.cloudinary.com/dpupj9evt/image/upload/v1626614094/neonbrand-y8fWicGsv4g-unsplash_zroaqi.jpg"
        }
      />
      <Contact />
      <Values />
      <Contact2
        content={{
          "header-p1":
            "We care deeply about helping patients to achieve better oral-health.",
          button1: "Learn More",
        }}
      />{" "}
    </div>
  );
}
