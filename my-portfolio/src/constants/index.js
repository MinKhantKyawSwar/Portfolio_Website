import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. 
 I specialize in the Javascript Fullstack with MongoDB, Express.js, React js, and Node.js—which enables me to deliver dynamic and user-friendly applications with great ui from the front end to the back end.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web 
applications. Starting from last year, I have worked with a variety of technologies, including React, Node.js, Express, MySQL,
  MongoDB Python and Php. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where 
 I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to
  deliver high-quality solutions. I am now developing a multipurpose AI-based calculator with tensor flow in the python and react`;

export const EDUCATION = [
  {
    year: "2023 - Present",
    role: "Higher National Diploma (HND)",
    company: "Info Myanmar College",
    description: `I learn more about MERN stack, while learning data science, programming and visualization of big data in the Collage. I'm developing ecommerce website with react and php, using MySQL database and AI based calculator with handwritten recognition.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Higher National Certificate (HNC)",
    company: "Info Myanmar College",
    description: `This is whern I have started deeply exploring computer science and web development, starting with HTML, CSS, JavaScript and Java. I focused on building a strong foundation in front-end development. This journey has ignited my passion for creating functional and visually appealing web applications.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2020 - 2022",
    role: "Self Learning in Programming ",
    // company: "Info Myanmar University",
    description: `I learn python and some html css here from youtube and free courses online. In 2022, I attended basic programming course in Fairway Technology, which help me alot to gain knowledge about programming`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2017 - 2020",
    role: "Architecture",
    company: "Technology University, Hmawbi",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  }
];

export const PROJECTS = [
  {
    title: "Trade hubE-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, admin panel and user authentication.",
    technologies: ["React", "Node.js", "Express", "React Router Dom", "Tailwind","MongoDB"],
    demoLink: "https://marketplace-client-nt3y.onrender.com/",
  },{
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript", "React", "Tailwind"],
    demoLink: "/",
  },
  {
    title: "Blogging Platform",
    image: project3,
    description:
      "A platform for creating and publishing blog posts, with features like account creating, pagination, forgot password features, premium features subscription and profile adding.",
    technologies: ["Ejs", "Css", "Javascript", "Node.js","Express.js", "MongoDB"],
    demoLink: "https://blog-with-node-express-mongoose.onrender.com/"
  },
];

export const CONTACT = {
  address: "Hlaing, Yangon",
  phoneNo: "09 794184997 ",
  email: "mkks1986.mkks@gmail.com",
};
