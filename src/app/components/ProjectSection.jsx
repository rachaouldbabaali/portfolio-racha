"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Car Rental Application",
    description:
      "Car Rental is a web application that allows users to add, rent, and reserve vehicles. It is built using React as a Front-end library along with redux and Ruby On Rails at the backend for building the APIs together with the PostgreSQL database.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/rachaouldbabaali/car-rentals",
    previewUrl: "https://vehicle-company.onrender.com/",
  },
  {
    id: 2,
    title: "Budget Tracker Application",
    description:
      " is an application designed for users to track their expenditures. It is built using Ruby On Rails with the PostgreSQL database.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rachaouldbabaali/budget-app",
    previewUrl: "https://budget-app-racha.onrender.com/",
  },
  {
    id: 3,
    title: "Recipe Application",
    description:
      " Recipe Application is a web application that allows users to add, edit, and delete recipes.allows users to create, manage, and share recipes while keeping track of their ingredient inventory. It is built using React as a Front-end library along with redux and Ruby On Rails at the backend for building the APIs together with the PostgreSQL database.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/rachaouldbabaali/recipe_app",
    previewUrl: "https://recipe-app-ecva.onrender.com/",
  },
  {
    id: 4,
    title: "Loop Filter Optimization",
    description:
      " Our project aims to build a dummy business intelligence dashboard that provides a filter functionality and displays data based on the selected filters. The dashboard is built using React and Redux.",
    image: "/images/projects/4.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rachaouldbabaali/Loop-filter-optimization",
    previewUrl: "https://dev--voluble-paprenjak-7162ef.netlify.app/",
  },
  {
    id: 5,
    title: "Weather Forecasting Servic",
    description:
      "a mobile web application that allows users to check a list of metrics (numeric values) for the weather in different cities. The application is built using React and Redux.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rachaouldbabaali/react-capstone",
    previewUrl: "https://rainbow-pastelito-5e3788.netlify.app/",
  },
  {
    id: 6,
    title: "Bookstore CMS",
    description: "BookStore This project that we build is based on a website allowing users to add/remove books from a list in real time.",
    image: "/images/projects/6.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rachaouldbabaali/bookstore",
    previewUrl: "https://phenomenal-zuccutto-ecc701.netlify.app/",
  },
  {
    id: 7,
    title: "Space Travelers' Hub",
    description:
      "space travelers hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rachaouldbabaali/React-Redux-GP",
    previewUrl: "https://amazing-scone-67be35.netlify.app/",
  },
  {
    id: 8,
    title: "RAKI Book Store",
    description:
      "Rakibook store is an online bookstore that offers a wide variety of books across multiple genres. The store provides a convenient and user-friendly platform for customers to browse and purchase books from the comfort of their homes.",
    image: "/images/projects/8.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rachaouldbabaali/JavaScript-capstone-",
    previewUrl: "https://rachaouldbabaali.github.io/JavaScript-capstone-/dist/",
  },
  {
    id: 9,
    title: "SmartEd Online: Virtual Classroom for Lifelong Learning",
    description:
      " SmartEd Online is a leading online school that offers a wide range of courses and programs to students of all ages.",
    image: "/images/projects/9.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rachaouldbabaali/capstone-1",
    previewUrl: "https://rachaouldbabaali.github.io/capstone-1/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
