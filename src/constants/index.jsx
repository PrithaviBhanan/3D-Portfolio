import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "HTML, CSS, TailwindCSS",
      icon: backend,
    },
    {
      title: "JavaScript, ES6",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];

  const projects = [
    {
      name: "BlackJack Game",
      description:
        "A simple blackjack game built using HTML, CSS and, JavaScript. The game has an interactive UI with functional rules of the game. The user can play against the computer/bot",
        tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://prithavibhanan.github.io/BlackJack-Game/",
    },
    {
      name: "3D Portfolio",
      description:
        "Built a 3D Portfolio using React, Three.js, CSS and Tailwind. Describing my accomplishments and projects. Please visit my portfolio to know more",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "GitHub Repository",
      description:
        "Please visit my GitHub repository for more projects. Most of the projects are made using HTML, CSS, JavaScript, React and Tailwind.",
      tags: [
        {
          name: "Click on Icon to visit",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/PrithaviBhanan?tab=repositories",
    },
  ];
  
  export { services, technologies, projects };