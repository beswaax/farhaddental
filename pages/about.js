import React from "react";
import { makeStyles } from "@material-ui/core";

import PageHeader from "../src/components/headers/PageHeader";
import UnderPageHeader from "../src/components/content/UnderPageHeader";

import AboutPageContent from "../src/components/content/AboutPageContent";
import AboutPageContent2 from "../src/components/content/AboutPageContent2";

import Testimonials from "../src/components/testimonials/TestimonalsWithoutLogo";
import TeamAllMembers from "../src/components/Team/TeamAllMembers";
import Head from "next/head";
import ContactDetails from "../src/components/content/ServicesContent6";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const classes = useStyles();

  return (
    <section>
      <Head>
        <title key="title">About | Farhad Dental Care Toronto</title>{" "}
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
          content="About Us | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/about"
        />

        <meta
          property="og:description"
          key="og:description"
          content="The company at a glance. Find out more about us and our motivations. We have stood for the highest quality craftsmanship for over 10 years. We offer engineering services to a broad array of fields. As a provider of engineering services, we supply our customers with everything from a single source."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/about" /> */}
      </Head>
      <PageHeader
        title={"About Us"}
        bg={
          "https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/quang-tri-nguyen-VckdJzo7ig0-unsplash_1_nbhcdn.jpg"
        }
      />
      <UnderPageHeader
        title="We aim for patients in our care to receive the best quality dentistry available, while delivering them their best ever dental visit every time they come to see us."
        buttonTrue={false}
      />
      <AboutPageContent />
      <Testimonials />
      <AboutPageContent2 />
      <TeamAllMembers />
      <ContactDetails
        content={{
          "header-p1":
            "Get in touch with our caring and dedicated team to find out how we can help.",
          button1: "Contact Us",
          button2: "Appointment",
        }}
      />
      {/* <Gallery /> */}
    </section>
  );
};

export default About;
