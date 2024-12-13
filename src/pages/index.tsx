import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
// import Skills from "components/OldSkills/Skills";
import Projects from "components/Projects/Projects";
import ContactMe from "components/Contact/ContactMe";
import Certifications from "components/Certifications/Certifications";
import axios from "axios";
import React from "react";
import SkillsSection from "components/SkillsSection/SkillsSection";
import Carousel from "components/Carousel/Carousel";
import { useState, useEffect } from "react";
import ProjectsMobile from "components/ProjectsMobile/ProjectsMobile";
// import { InfinitySpin } from "react-loader-spinner";

const inter = Inter({ subsets: ["latin"] });
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  let { data }: any = await axios.get("https://sunilportfolioapi.vercel.app/");
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data,
    },
  };
}
type Props = {
  data: any;
};

export default function Home(props: Props) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div
      className="
    bg-black
    
    text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-transparent sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full"
    >
      <Head>
        <title>{`Sunil Band`}</title>
      </Head>
      {/* Header */}
      <Header data={props.data[5]} />

      {/* <section id="text">
  <Test/>
</section> */}

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero data={props.data[1]} />
      </section>

      {/* About */}
      <section id="about" className="snap-center snap-mandatory  snap-always">
        <About data={props.data[0]} />
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="snap-start snap-mandatory snap-always"
      >
        <Certifications data={props.data[2]} />
      </section>

      {/* Skills */}
      {/* <section
      id="skills"
      className="snap-start snap-mandatory  snap-always"
    >
      <Skills data={props.data[3]} />
    </section> */}

      {/* Skills new section */}
      <section id="skills" className="snap-start snap-mandatory  snap-always">
        <SkillsSection data={props.data[3]} />
      </section>

      {/* Projects old*/}
      {/* <section id="projects" className="snap-start snap-mandatory  snap-always">
        <Projects data={props.data[4]} />
      </section> */}

      {/* Projects new */}
      <section
        id="projects"
        className="snap-start snap-mandatory  snap-always max-h-screen overflow-clip"
      >
        {width > 768 ? (
          <Carousel data={projects} />
        ) : (
          <ProjectsMobile data={projects} />
        )}
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start snap-mandatory  snap-always">
        <ContactMe />
      </section>
    </div>
  );
}

const projects = {
  _id: "6432d818e600088d794f1e97",
  section: "projects",
  projectsData: [
    {
      projectName: "Spiritual-GPT",
      projectDesc:
        "Spiritual GPT is an AI chatbot designed to provide spiritual guidance and knowledge.It recognizes religious and spiritual queries and generates relevant responses from various religious scriptures using OpenAI GPT-3.5-turbo.Supports 8 scriptures including Bhagwad Geeta ,Holy Quran,Guru Granth Sahib and more with 14 languages.",
      projectImage: "https://s6.gifyu.com/images/S6Q3c.gif",
      projectLink: "https://spiritualgpt.sunilband.me",
      projectDuration: "May 2023 - July 2023",
    },
    {
      projectName: "Task Master",
      projectDesc:
        "A personalized tasks/notes management app with encrypted user data and JWT auth. Add , Delete , Update and view functionality",
      projectImage: "https://s6.gifyu.com/images/S6Qve.gif",
      projectLink: "https://taskmaster.sunilabnd.me",
      projectDuration: "Oct 2023",
    },
    {
      projectName: "Portfolio Website",
      projectDesc:
        "My developer portfolio made with beautiful and responsive UI with flowing animations with intention to demonstrate my potential as a candidate for various opportunities and to showcase my strengths and capabilities to potential employers or collaborators.",
      projectImage: "https://s6.gifyu.com/images/S6QES.gif",
      projectLink: "https://sunilband.me",
      projectDuration: "Jan 2023 - Feb 2023",
    },
    {
      projectName: "Digi-CRM",
      projectDesc:
        "A CRM solution for small businesses with admin and user login/registration and dashboard complete with JWT auth.Task,Customers,Sales,Leads,etc management and status resolution with admin and admin seperate dashboard.",
      projectImage: "https://s6.gifyu.com/images/S6Q32.gif",
      projectLink: "https://digicrm.sunilband.me",
      projectDuration: "July 2023 - Aug 2023",
    },
    {
      projectName: "News Birdie",
      projectDesc:
        "News app that provide users with accurate and up‑to‑date news from around the world.Utilizes NewsAPI integration get the latest news.Country wise news options with live news sync.Easy‑to‑use interface and offers a personalized news feed to keep users informed about the latest happenings in the world.",
      projectImage: "https://s6.gifyu.com/images/S6QE8.gif",
      projectLink: "https://newsbirdie.vercel.app/",
      projectDuration: "Dec 2022",
    },
    {
      projectName: "Commision Project",
      projectDesc:
        "Built an amazing looking Portfolio website for a friend as a commision project. Admittedly it turned out better than my own.",
      projectImage: "https://s13.gifyu.com/images/Sjdrs.gif",
      projectLink: "https://anagha.tech",
      projectDuration: "Dec 2023",
    },
  ],
};
