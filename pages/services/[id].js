import React from "react";
import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";

import PageHeader from "../../src/components/headers/PageHeader";
import UnderPageHeader from "../../src/components/content/UnderPageHeader";
import Content1 from "../../src/components/content/ServicesContent1";
import Content2 from "../../src/components/content/ServicesContent2";

import Content6 from "../../src/components/content/ServicesContent6";

import Head from "next/head";

const contents = [
  {
    id: 1,
    pageHeaderTitle: "Preventive Care",
    image:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626604938/quang-tri-nguyen-VxVO1zrY5F8-unsplash_vcbcyg.jpg",
    underHeaderTitle:
      "If you are interested in Preventive Care and what it can do to your smile please contact our practice for a FREE Preventive Care Consultation.",
    content1: {
      title: "Preventive Care at Farhad Dental Care",
      description:
        "Preventive Dentistry still scores high at Farhad Dental Care. Routine hygiene care and thorough monitoring of teeth and gum tissue are the best ways to preserve a smile. Dr. Farhad's hygiene team will recommend optimum home care habits and products. A naturally healthy smile contributes to overall health and fitness and is the the first goal of the Farhad Dental Care team.",
      description2:
        "Dental implants have become a prime focus because for many patients they are a miraculous solution for the eradication of significant dental disease; however, not every patient requires dental implants to keep their smile attractive and healthy. The Farhad Dental Care team includes professional specialists who provide routine orthodontic and periodontic care to keep teeth functionally aligned and gums free of inflammation. These preventive measures reduce the likelihood of decay and the need for restorative dental care.",
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626599946/quang-tri-nguyen-4YZyBNA1UeA-unsplash_kf0kve.jpg",
    },
    content2: {
      "02_header": "Our Preventive Care Services",
      "02_description":
        "We've designed a simple process for companies migrating to PiperNet. Here's how it works.",
      image1:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/engin-akyurt-WQ5fGfFHGZ0-unsplash_wgm7s3.jpg",
      step1: "Oral Exams and Cleanings",
      "step1-desc":
        "Our team recommends patients get two exams and professional cleanings annually to detect existing and potential problems with the health of your teeth and gums. Your oral exam includes a comprehensive evaluation by Dr. Farhad. Your cleaning will remove plaque and tartar build up from teeth above the gum line and is performed by our dental hygienist.",
      image2:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605220/jonathan-borba-v_2FRXEba94-unsplash_m1yl7b.jpg",
      step2: "Oral Cancer Screening",
      "step2-desc":
        "Oral cancer symptoms are often not visible until the disease has progressed, therefore making early diagnosis and treatment critical to your health. At Farhad Dental Care, Dr. Farhad offers a quick and painless screening during routine dental exams. We recommend the procedure once a year for non-tobacco users, and twice a year for patients who use tobacco products.",
      image3:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605212/artur-tumasjan-qLzWvcQq-V8-unsplash_ebokj8.jpg",
      step3: "Sealants",
      "step3-desc":
        "Dental sealants provide a protective layer over your teeth to help prevent tooth decay. The sealant material is applied directly to the surface of the tooth to prevent bacteria from getting into the spaces between your teeth. This procedure is often recommended for children as a preventative measure against cavities.",
    },
    content6: {
      "header-p1":
        "Get in touch with our caring and dedicated team to find out how we can help.",
      button1: "Contact Us",
      button2: "Consultation",
    },
  },
  {
    id: 2,
    pageHeaderTitle: "Restorative Care",
    image:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626604938/quang-tri-nguyen-VxVO1zrY5F8-unsplash_vcbcyg.jpg",
    underHeaderTitle:
      "If you are interested in Restorative Care and what it can do to your smile please contact our practice for a FREE Restorative Care Consultation.",
    content1: {
      title: "Restorative Care at Farhad Dental Care",
      description:
        "Do you suffer from tooth pain or have lost functionality? The restorative options at Farhad Dental Care can renew your smile and significantly improve your overall oral health. We are experienced with a variety of techniques and depending on your needs, can recommend what is best for your situation. Utilizing some of the most advanced technologies, we can enhance the form and function of your teeth, helping you smile with confidence.",
      description2:
        "Read below for more information about our restorative procedures. For additional information or to schedule a consultation, please contact us today.",
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626599946/quang-tri-nguyen-4YZyBNA1UeA-unsplash_kf0kve.jpg",
    },
    content2: {
      image1:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/engin-akyurt-WQ5fGfFHGZ0-unsplash_wgm7s3.jpg",
      step1: "Composite Fillings",
      "step1-desc":
        "Cavities and decayed teeth, in the past, were typically treated with mercury fillings. At Farhad Dental Care, we use tooth-colored composite materials for all our fillings. This procedure is not only more aesthetically pleasing, but will strengthen the affected tooth and prevent further damage. These mercury-free fillings are safer and allow us to protect our patients from potential health risks associated with exposure to mercury.",
      image2:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605220/jonathan-borba-v_2FRXEba94-unsplash_m1yl7b.jpg",
      step2: "Root Canal Therapy",
      "step2-desc":
        "Severe decay or tooth damage can affect the inner tooth (or pulp) which contains the canals. Root canal therapy, also known as endodontic therapy, is the process where the tooth canals are cleaned and sterilized. Farhad Dental Care offers endodontic treatment to quickly and gently remove the infected pulp and prevent any further damage.",
      image3:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605212/artur-tumasjan-qLzWvcQq-V8-unsplash_ebokj8.jpg",
      step3: "Full and Partial Dentures",
      "step3-desc":
        "These are many restorative options for replacing missing teeth. Depending on your jawbone density, you may not be eligible for implants or anchored dentures. Dentures help many patients achieve their goal of having a beautiful smile and they help improve their ability to chew and speak.",
    },
    content6: {
      "header-p1":
        "Get in touch with our caring and dedicated team to find out how we can help.",
      button1: "Contact Us",
      button2: "Consultation",
    },
  },
  {
    id: 3,
    pageHeaderTitle: "Dental Implants",
    image:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626604938/quang-tri-nguyen-VxVO1zrY5F8-unsplash_vcbcyg.jpg",
    underHeaderTitle:
      "If you are interested in Dental Implants and what it can do to your smile please contact our practice for a FREE Dental Implants Consultation.",
    content1: {
      title: "Dental Implants Make First Class Smiles",
      description:
        "Dental implants have become the treatment of choice for patients seeking to replace severely compromised or missing teeth with a healthy, attractive, fully functional smile.",
      description2:
        "Few concepts in the field of dentistry have had more scientific research or product development associated with them than the emergence of implant treatment protocols. That is because historically, the success rates have been consistently high, the esthetic results can be positively dramatic, and even the most unhealthy smiles can be replaced with pristine new ones.",
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626599946/quang-tri-nguyen-4YZyBNA1UeA-unsplash_kf0kve.jpg",
    },
    content2: {
      image1:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/engin-akyurt-WQ5fGfFHGZ0-unsplash_wgm7s3.jpg",
      step1: "Life Changing Results",
      "step1-desc":
        " Healthy Smiles affect more than just the health of the mouth. Patients report a bounty of restored self-confidence, relief from digestive disorders through ease in proper chewing, and the ultimate preventive relief knowing that oral bacteria is not leading to heart disease. Some patients abandon plans for plastic surgery, surprised by the youthfulness a new smile can provide. Others find renewed energy for exercise and the key to revamp overall fitness. Dental implants are a lifestyle upgrade.",
      image2:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605220/jonathan-borba-v_2FRXEba94-unsplash_m1yl7b.jpg",
      step2: "Dental Implant Procedures Have Been Streamlined",
      "step2-desc":
        "Erase the stories of multiple lengthy visits to the dentist. Dental Implants have become so advanced that most of the critical scientific planning and artistry takes place without the patient. Technologically, dentistry has kept step or even run ahead of medicine. The patient’s scan is on the doctor’s computer and the ideal placement of the implants is studiously pre-determined.",
      image3:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605212/artur-tumasjan-qLzWvcQq-V8-unsplash_ebokj8.jpg",
      step3: "Why Are All-on-4 Implants Better than Dentures?",
      "step3-desc":
        "Your new implants will be securely anchored to your jaw, just like real teeth! They won’t slip, come loose or fall out. Never again will you have to worry about your dentures coming out while eating or talking. Dentures may seem less expensive, but they require frequent replacements and updates that will add up over the years. All-on-4® implants rarely need replacing.",
    },
    content6: {
      "header-p1":
        "Get in touch with our caring and dedicated team to find out how we can help.",
      button1: "Contact Us",
      button2: "Consultation",
    },
  },
  {
    id: 4,
    pageHeaderTitle: "Advanced Dentistry",
    image:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626604938/quang-tri-nguyen-VxVO1zrY5F8-unsplash_vcbcyg.jpg",
    underHeaderTitle:
      "If you are interested in Advanced Dentistry and what it can do to your smile please contact our practice for a FREE Advanced DentistryConsultation.",
    content1: {
      title: "Advanced Dentistry at Farhad Dental Care",
      description:
        "Farhad Dental Care is committed to providing our patients with the most advanced care, in a relaxing and inviting environment. Dr. Farhad can perform non-surgical procedures to stop the progression of periodontal disease and to prevent further damage. Our treatment options use the latest dental technology, which reduces recovery time and will dramatically improve your oral health.",
      description2:
        "The links below provide more detailed information of the advanced options available at Farhad Dental Care. Please contact us for additional information or to schedule your appointment.",
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626599946/quang-tri-nguyen-4YZyBNA1UeA-unsplash_kf0kve.jpg",
    },
    content2: {
      image1:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/engin-akyurt-WQ5fGfFHGZ0-unsplash_wgm7s3.jpg",
      step1: "Sedation Dentistry",
      "step1-desc":
        "Sedation dentistry, also known as “sleep dentistry” is perfect for those who experience anxiety when going to the dentist. Any of our procedures can be done under sedation in our comfortable office setting, and you’ll awake refreshed with little memory of the appointment. The dental team at Farhad Dental Care understands the fear often associated with dental visits, and we offer options to make your visit as comfortable as possible. For more information on sedation options, please contact our practice.",
      image2:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605220/jonathan-borba-v_2FRXEba94-unsplash_m1yl7b.jpg",
      step2: "Scaling and Root Planing",
      "step2-desc":
        "Scaling and root planing are common treatment methods. This non-surgical procedure removes pockets of tartar and plaque from the gums and around the teeth. Once the bacteria are removed, the gums are disinfected and treated to create a strong seal between the teeth and gums.",
      image3:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605212/artur-tumasjan-qLzWvcQq-V8-unsplash_ebokj8.jpg",
      step3: "Laser Gum Reshaping",
      "step3-desc":
        "There are now advanced techniques to painlessly reduce excess gum tissue and improve appearance of a “gummy smile”. Dr. Farhad can reshape and contour the gums, so they appear more balanced and symmetrical with your teeth. This procedure can be performed using either laser or traditional techniques depending on each individuals needs.",
    },
    content6: {
      "header-p1":
        "Get in touch with our caring and dedicated team to find out how we can help.",
      button1: "Contact Us",
      button2: "Consultation",
    },
  },

  {
    id: 5,
    pageHeaderTitle: "Cosmetic Dentistry",
    image:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626604938/quang-tri-nguyen-VxVO1zrY5F8-unsplash_vcbcyg.jpg",
    underHeaderTitle:
      "If you are interested in Cosmetic Dentistry and what it can do to your smile please contact our practice for a FREE Cosmetic Dentistry Consultation.",
    content1: {
      title: "Cosmetic Dentistry at Farhad Dental Care",
      description:
        "Traditional restorative dentistry—crowns, bridges and veneers—have taken their place in the dental market with a tagline called cosmetic dentistry. Farhad Dental Center’s restorative dental procedures are more than cosmetic. They are long lasting, enduring restorations that while focused on attractive results, also use materials and techniques that fully restore health and function in the mouth.",
      description2:
        "Dr. Farhad stays vibrantly current with emerging technology, partners with cutting edge laboratory support and delivers unparalleled restorative dentistry that enables patients to take pride in the appearance of their smile. The smile is the ultimate cosmetic at any age for men and women alike. No one is ever fully groomed without one.",
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626599946/quang-tri-nguyen-4YZyBNA1UeA-unsplash_kf0kve.jpg",
    },
    content2: {
      image1:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/engin-akyurt-WQ5fGfFHGZ0-unsplash_wgm7s3.jpg",
      step1: "Teeth Whitening",
      "step1-desc":
        "Whitening your teeth is one of the easiest procedures to brighten your smile and improve your overall appearance. As we age, our teeth naturally become more dull and yellow in color due to a variety of factors. Professional teeth whitening procedures effectively lighten teeth and remove stains, which brightens teeth with long-lasting results.",
      image2:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605220/jonathan-borba-v_2FRXEba94-unsplash_m1yl7b.jpg",
      step2: "Porcelain Veneers",
      "step2-desc":
        "Veneers are thin shells of ceramic material that are bonded to the front surface of your teeth. They are a popular treatment for correcting minor aesthetic imperfections such as chips, gaps, discoloration and cracks. Porcelain veneers are a virtually painless procedure that can change the shape, length, and color of your teeth in just two visits. Veneers are long-lasting and require no further maintenance apart from regular brushing, flossing and routine checkups.",
      image3:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605212/artur-tumasjan-qLzWvcQq-V8-unsplash_ebokj8.jpg",
      step3: "Clear braces",
      "step3-desc":
        "You can straighten your teeth quickly and discreetly. These state-of-the art cosmetic braces are clear so they are less noticeable on the teeth and more comfortable to wear. They can correct issues such as teeth crowding, gaps and misalignment. If you would like more information on this procedure or to schedule a consultation, please contact us today.",
    },
    content6: {
      "header-p1":
        "Get in touch with our caring and dedicated team to find out how we can help.",
      button1: "Contact Us",
      button2: "Consultation",
    },
  },
  {
    id: 6,
    pageHeaderTitle: "Surgical Procedures",
    image:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1626604938/quang-tri-nguyen-VxVO1zrY5F8-unsplash_vcbcyg.jpg",
    underHeaderTitle:
      "If you are interested in Surgical Procedures and what it can do to your smile please contact our practice for a FREE Surgical Procedures Consultation.",
    content1: {
      title: "Surgical Procedures at Farhad Dental Care",
      description:
        "In addition to our preventative, restorative and cosmetic dentistry, Farhad Dental Care provides surgical treatments that not only improve your appearance, but quality of life by reducing risks associated with poor dental and periodontal disease.",
      description2:
        "The links below provide information on our techniques and procedures. If you have questions or if you would like to schedule an appointment, please contact us today.",
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626599946/quang-tri-nguyen-4YZyBNA1UeA-unsplash_kf0kve.jpg",
    },
    content2: {
      image1:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626517433/engin-akyurt-WQ5fGfFHGZ0-unsplash_wgm7s3.jpg",
      step1: "Oral Surgery",
      "step1-desc":
        "Dr. Farhad has years of advanced training and a comprehensive background in oral surgery. His scope of practice includes all aspects of general and cosmetic dentistry, with an emphasis in implants, wisdom teeth extractions and sedation dentistry. You can be confident that you are going to receive the highest level of care, in a relaxed atmosphere that will help alleviate anxiety, allowing you to receive the best dental care.",
      image2:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605220/jonathan-borba-v_2FRXEba94-unsplash_m1yl7b.jpg",
      step2: "Sinus Lift",
      "step2-desc":
        "A sinus lift is often required as a first step when placing a dental implant in the back upper jaw. When upper back teeth are lost, bone in the area naturally shrinks or reabsorbs over time; as a result your sinuses expand to fill the empty space. Because there is insufficient bone available to securely place an implant, the sinuses must be lifted to create space for placing additional bone in the area.",
      image3:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1626605212/artur-tumasjan-qLzWvcQq-V8-unsplash_ebokj8.jpg",
      step3: "Bone Graft",
      "step3-desc":
        "Dr. Farhad has advanced training in bone grafting techniques using PRP and growth factors. The grafted bone needed during a sinus lift procedure was for years, taken from another part of your jaw or body, which meant a patient had to go through multiple surgeries before the implant procedure could take place. With advances in technology, the number of procedures needed has been reduced and is a more streamlined and comfortable procedure for the patient.",
    },
    content6: {
      "header-p1":
        "Get in touch with our caring and dedicated team to find out how we can help.",
      button1: "Contact Us",
      button2: "Consultation",
    },
  },
];

function getPostDataById(id) {
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === parseInt(id)) {
      return contents[i];
    }
  }
}

const About = ({ id }) => {
  const content = getPostDataById(id);

  if (content == undefined) {
    return (
      <Box py={50}>
        <Typography variant="h3" color="textSecondary" align="center">
          404 error
        </Typography>
      </Box>
    );
  }

  return (
    <section>
      <Head>
        <title key="title">Services | Farhad Dental Care Toronto</title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="Take a look at our services! We offer structural and evelope engineering services to a wide array of fields. As a general provider of engineering services, we supply our customers with everything from a single source. We operate in the greater Stuttgart area"
        />
        <meta
          name="keywords"
          content="engineering toronto, engineering structural toronto, toronto envelope engineering, structural engineering gta, mississauga engineering, mississauga engineering services, toronto engineering services"
        />
        <meta
          property="og:title"
          content="Services | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/services"
        />

        <meta
          property="og:description"
          key="og:description"
          content="Take a look at our services! We offer structural and evelope engineering services to a wide array of fields. As a general provider of engineering services, we supply our customers with everything from a single source. We operate in the greater Stuttgart area"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/services" /> */}
      </Head>
      <PageHeader title={content.pageHeaderTitle} bg={content.image} />
      <UnderPageHeader
        title={content.underHeaderTitle}
        description="nice"
        buttonTrue={true}
      />
      <Content1 content1={content.content1} />
      <Content2 content={content.content2} />
      <Content6 content={content.content6} />
    </section>
  );
};

export default About;

About.getInitialProps = async ({ query }) => {
  const id = query.id;
  return { id };
};
