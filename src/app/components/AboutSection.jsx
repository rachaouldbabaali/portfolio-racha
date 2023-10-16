"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import styles from "../globals.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:flex md:flex-row gap-8 items-center py-8 px-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.png"
          alt="about"
          width={400}
          height={400}
          className="default"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello there! I&apos;m an enthusiastic front-end web developer
            currently interning at Join Momentum and on a transformative journey
            at Microverse.
            <br />
            <br />
            With a year of hands-on experience, I thrive on
            tackling real-world challenges and mastering diverse technologies,
            including Next.js, React, TypeScript, and Javascript.
            <br />
            <br />
            My background in Control Engineering not only honed my coding skills but also
            instilled in me the value of dedication and completion.
            <br />
            <br />
            What sets me
            apart is my ability to merge technical expertise with interpersonal
            finesse. I excel in collaborating with diverse teams, delivering
            top-notch work, and adapting to new technologies.
            <br />I&apos;m deeply
            passionate about web development and perpetually driven to expand my
            knowledge. If you&apos;re seeking a dedicated, hardworking, and
            perpetually curious front-end developer to elevate your projects,

            <br />
            <br />
            let&apos;s connect. I&apos;m eager to contribute my skills and
            passion to your team!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
