"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import styles from "../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc gap-4 flex flex-wrap">
        <li className="flex items-center">
          <Image
            src="/images/nextjs.svg"
            alt="next js icon"
            width={40}
            height={35}
            className="m-2 p-1 bg-white"
          />
          Next js
        </li>
        <li className="flex items-center m-2">
          <Image
            src="/images/ts.png"
            alt="ts icon"
            width={40}
            height={35}
            className="p-2"
          />
          typescript
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-react fa-xl p-2"
            style={{ color: "#61DBFB" }}
          ></i>
          React
        </li>
        <li className="flex items-center m-2">
          <i className="fab fa-js fa-xl px-2" style={{ color: "#fbe813" }}></i>
          JavaScript
        </li>

        <li className="flex items-center m-2">
          <i
            className="fab fa-node-js fa-xl p-2"
            style={{ color: "#8CC84B" }}
          ></i>
          Node.js
        </li>
        <li className="flex items-center m-2">
          <i className="fab fa-npm fa-xl p-2" style={{ color: "#CB3837" }}></i>
          NPM
        </li>

        <li className="flex items-center m-2">
          <Image
            src="/images/ruby.svg"
            alt="srcum icon"
            width={45}
            height={45}
            className="p-2"
          />
          Ruby
        </li>
        <li className="flex items-center m-2">
          <Image
            src="/images/rails.svg"
            alt="srcum icon"
            width={45}
            height={45}
            className="p-2"
          />
          Ruby on Rails
        </li>
        <li className="flex items-center m-2">
          <i
            className="fas fa-database fa-xl p-2"
            style={{ color: "#336791" }}
          ></i>
          PostgreSQL
        </li>
        <li className="flex items-center m-2">
          <i
            className="fas fa-database fa-xl p-2"
            style={{ color: "#336791" }}
          ></i>
          Sql
        </li>
        <li className="flex items-center m-2">
          <Image
            src="/images/jest.png"
            alt="jest icon"
            width={50}
            height={50}
          />
          Jest
        </li>
        <li className="flex items-center m-2">
          <Image
            src="/images/cypress.svg"
            alt="srcum icon"
            width={45}
            height={45}
            className="p-2"
          />
          Cypress
        </li>
        <li className="flex items-center m-2">
          <Image
            src="/images/rspec.svg"
            alt="srcum icon"
            width={45}
            height={45}
            className="p-2"
          />
          Rspec
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-html5 fa-xl p-2"
            style={{ color: "#E34F26" }}
          ></i>
          HTML
        </li>
        <li className="flex items-center">
          <i className="fas fa-code fa-xl p-2" style={{ color: "#38B2AC" }}></i>
          Tailwind
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-css3-alt fa-xl p-2"
            style={{ color: "#1572B6" }}
          ></i>
          CSS
        </li>
        <li className="flex items-center m-2">
          <i className="fab fa-sass fa-xl p-2" style={{ color: "#CC6699" }}></i>
          Sass
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-bootstrap fa-xl p-2"
            style={{ color: "#7952B3" }}
          ></i>
          Bootstrap
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-figma fa-xl p-2"
            style={{ color: "#F24E1E" }}
          ></i>
          Figma
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-git-alt fa-xl p-2"
            style={{ color: "#F05032" }}
          ></i>
          Git
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-github fa-xl p-2"
            style={{ color: "#20c3658" }}
          ></i>
          GitHub
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-ubuntu fa-xl p-2"
            style={{ color: "#E95420" }}
          ></i>
          Ubuntu
        </li>
        <li className="flex items-center m-2">
          <i
            className="fa-solid fa-people-group fa-xl p-2"
            style={{ color: "#d2e0f9" }}
          ></i>
          Agile
        </li>
        <li className="flex items-center m-2">
          <Image
            src="/images/scrum.png"
            alt="srcum icon"
            width={35}
            height={35}
          />
          Scrum
        </li>
        <li className="flex items-center m-2">
          <i
            className="fab fa-trello fa-xl p-2"
            style={{ color: "#0079BF" }}
          ></i>
          Trello
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 flex flex-col">
        <li className="mb-2 flex flex-col md:flex-row items-center">
          <Image
            src="/images/microverse.jpeg"
            alt="srcum icon"
            width={70}
            height={70}
            className="p-2"
          />
          <div className="flex flex-col w-70">
            <h4 className="font-bold mx-4 mb-2 w-80">
              Microverse, Remote Full Stack Web Development Program
            </h4>
          </div>
          <ul className="m-2 ">
            <li>
              <a
                href="https://www.microverse.org/"
                className="text-blue-500 hover:text-blue-800"
                target="_blank"
              >
                MICROVERSE | March 2023 / Sept 2023.
              </a>
            </li>
            <li className="mb-2 flex flex-wrap">
              - Spend 1300+ hours mastering algorithms, data structures, and
              full-stack development while simultaneously developing projects
              with Ruby, Rails, JavaScript, React, and Redux.
            </li>
            <li className="mb-2 flex flex-wrap">
              - Develop skills in remote pair programming using GitHub,
              industry-standard git-flow, and daily standups to communicate and
              collaborate with international remote developers.
            </li>
          </ul>
        </li>
        <li className="mb-4 flex flex-col md:flex-row items-center">
          <Image
            src="/images/essat.png"
            alt="srcum icon"
            width={70}
            height={70}
            className="p-2"
          />
          <div className="flex flex-col w-70">
            <h4 className="font-bold mx-4 mb-2 w-80">
              Master&apos;s Degree in <br />
              automation and control engineering
            </h4>
          </div>
          <ul>
            <li className="mb-2">
              <a
                href="https://www.microverse.org/"
                className="text-blue-500 hover:text-blue-800"
                target="_blank"
              >
                SUPERIOR SCHOOL OF APPLIED SCIENCES IN TLEMCEN | Sept 2015 /
                Sept 2020
              </a>
            </li>
            <li className="mb-2 flex flex-wrap">
              - Thesis: Control of a traveling crane with a manipulator arm of 6
              degrees of freedom by radio frequency.
            </li>
          </ul>
        </li>
        <li className="mb-8 flex flex-col md:flex-row items-center">
          <Image
            src="/images/essat.png"
            alt="srcum icon"
            width={70}
            height={70}
            className="p-2"
          />
          <div className="flex flex-col w-70">
            <h4 className="font-bold mx-4 mb-2 w-80">
              State&apos;s Engineer Degree in automation and control engineering
            </h4>
          </div>
          <ul>
            <li className=" mb-2">
              <a
                href="https://www.microverse.org/"
                className="text-blue-500 hover:text-blue-800"
                target="_blank"
              >
                SUPERIOR SCHOOL OF APPLIED SCIENCES IN TLEMCEN | Sept 2018 /
                Sept 2020
              </a>
            </li>
            <li className="mb-2 flex flex-wrap">
              - Thesis: Control of a double crane in wireless charging mode by
              radio frequency.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 flex flex-col pt-6">
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.credential.net/10b84d8e-4c44-4f66-b900-59830cc3c607"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Full Stack Web Development {"  "}</b>
            </span>
            MICROVERSE |Sept 2023.
          </a>
        </li>

        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.linkedin.com/in/rachaouldbabaali/details/certifications/1635540392104/single-media-viewer/?profileId=ACoAABA6oV0BrPJgRNp4UfkhcUFD9OCDyx2CKfc"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Elite Master of CSS {"  "}</b>
            </span>
            Elite |Sept 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.linkedin.com/in/rachaouldbabaali/details/certifications/1635540392123/single-media-viewer/?profileId=ACoAABA6oV0BrPJgRNp4UfkhcUFD9OCDyx2CKfc"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Elite Master Of Git {"  "}</b>
            </span>
            Elite |Sept 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.linkedin.com/in/rachaouldbabaali/details/certifications/1635540685240/single-media-viewer/?profileId=ACoAABA6oV0BrPJgRNp4UfkhcUFD9OCDyx2CKfc"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Elite Master of HTML5 {"  "}</b>
            </span>
            Elite |Sept 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.credly.com/badges/60b414a2-2121-4116-9804-e8f530f6c319/public_url"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Enterprise Design Thinking Practitioner {"  "}</b>
            </span>
            IBM |Sept 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.credential.net/1ca9e184-8328-4c4f-aadb-235adf630776"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Ruby On Rails {"  "}</b>
            </span>
            Microverse |Sept 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-RachaOuld-995063.pdf"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>SCRUM Fondamentals {"  "}</b>
            </span>
            SCRUM STUDY MK |Sept 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.credential.net/67164f5c-71c0-48fe-8ef1-0d21aaa3b0a5"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Ruby {"  "}</b>
            </span>
            Microverse |Aug 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i class="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3"></i>
          <a
            href="https://www.credential.net/b920a161-3b15-4e67-ac91-47d81e4dac25"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>React / Redux {"  "}</b>
            </span>
            Microverse |Jul 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i className="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3 "></i>
          <a
            href="https://www.credential.net/c35af549-dc3f-4d4b-a9ef-493c0e233973"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>JavaScript {"  "}</b>
            </span>
            Microverse |May 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i className="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3 "></i>
          <a
            href="https://www.udemy.com/certificate/UC-4274cd01-09d5-429e-8444-318ce11eedde/"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Modern JavaScript for ReactJs-ES6{"  "}</b>
            </span>
            Udemy |May 2023.
          </a>
        </li>
        <li className="mb-2 flex items-center">
          <i className="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3 "></i>
          <a
            href="https://www.credential.net/22713af6-eeb4-414e-af79-fdf25ac6cfe2"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>HTML / CSS {"  "}</b>
            </span>
            Microverse |Apr 2023.
          </a>
        </li>
        <li className="mb-8 flex items-center">
          <i className="fa-solid fa-graduation-cap bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mx-3 "></i>
          <a
            href="https://www.credential.net/22713af6-eeb4-414e-af79-fdf25ac6cfe2"
            className="text-white hover:text-purple-300"
            target="_blank"
          >
            <span className="pr-3">
              <b>Responsive Web Design with Bootstrap {"  "}</b>
            </span>
            Udemy |March 2023.
          </a>
        </li>
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
    <>
      <section className="text-white mt-20" id="about">
        <div className="md:flex md:flex-row gap-8 items-center p-1 xl:gap-16 sm:py-3 xl:px-3 inline-block w-full sm:w-fit my-3 sm:m-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center w-full bg-[#121212] rounded-lg p-10">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold  mb-4 text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                About Me
              </h2>
              <p className="text-base lg:text-lg">
                Hello there! I&apos;m Racha, an enthusiastic front-end web
                developer with a year of hands-on experience and a passion for
                tackling real-world challenges.
                <br />
                <br />
                Currently interning at Join Momentum, I&apos;m excited to share
                that I&apos;ve successfully completed my transformative journey
                at Microverse. With a solid more than a year of practical
                experience, I thrive on conquering real-world challenges and
                mastering diverse technologies.
                <br />
                <br />
                If you&apos;re in search of a dedicated, hardworking, and
                perpetually curious front-end developer to enhance your
                projects, let&apos;s connect. I&apos;m eager to contribute my
                skills and passion to your team!
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src="/images/about.png"
                alt="about"
                width={400}
                height={400}
                className="default"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:flex md:flex-col items-center py-8 px-2 sm:pt-20 sm:pb-6 xl:px-16 mb-10">
          <div className="flex flex-row mt-8 font-extrabold md:text-3xl">
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
          <div className="mt-2 text-white flex items-center justify-center">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
