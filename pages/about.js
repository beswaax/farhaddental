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
  return (
    <section>
      <Head>
        <title key="title">About | Farhad Dental Care Toronto</title>{" "}
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
    </section>
  );
};

export default About;
