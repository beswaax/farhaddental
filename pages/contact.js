import React from "react";
import PageHeader from "../src/components/headers/PageHeader";
import Values from "../src/components/features/CustomerSegments";
import Contact2 from "../src/components/content/LearnMoreContactPage";

import Contact from "../src/components/contact/ContactPageContact";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title key="title">Contact | Farhad Dental Care Toronto</title>{" "}
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
