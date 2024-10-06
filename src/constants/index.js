import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for developing a functional and responsive web application. I mainly develop the UI/UX for the web application and also occasionally do some bugfixing using technologies such as HTML, CSS, and React Typescript for the Frontend side, as well as technologies such as C# and CosmosDB for the Backend side.`;

export const ABOUT_TEXT = `I am currently studying as a dedicated Computer Science college student in Bina Nusantara University, committed to learning new skills and gain experience to improve myself better. I am also currently working at the Bina Nusantara IT Division company as a developer associate member. I am able to cooperate and work effectively in team projects to accomplishing the team's shared goal. Enthusiastic to learn new skills and make more projects in the web development industry.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Associate Member",
    company: "IT Division Bina Nusantara",
    description: `Contribute in developing web application related to the campus management system such as Academic Services and Thesis App using mainly React Typescript, C#, and CosmosDB. Other than developing the web application, I occasionally do some bugfixing whenever a case happens.`,
    technologies: ["HTML", "CSS", "Typescript", "React", "CosmosDB", "C#"],
  },
];

export const PROJECTS = [
  {
    title: "Algorithm and Programming - Assurance of Learning",
    image: project1,
    description:
      "A project where the program read the data from an excel file and prompts the user to input a command from the choice provided. The command executed by the program varies depending on the choice the user made, such as displaying all the location and frequency of those locations, displaying all the prices and the average value, and other similar commands.",
    technologies: ["C"],
    projectLink: "https://github.com/JasonLowen/AOL-Algoprog",
  },
  {
    title: "Project Human Computer Interaction - Guarjian",
    image: project2,
    description:
      "A project where students were tasked to make an E-Commerce website called Guarjian, which sells health and beauty products online. The website consists of 5 main pages, which are the Home Page, Promotion Page, Product Page, About Us Page, and Contact Us Page. Before making the website with HTML, students need to design the UI of Guarjian using figma to have a clearer idea about how to make it.",
    technologies: ["HTML", "CSS", "Javascript", "Figma"],
    projectLink: "https://github.com/JasonLowen/Project-LAB-HCI",
  },
  {
    title: "IT Division Mini Project - Wearhouse",
    image: project3,
    description:
      "A mini project where IT Division Associate Member Candidates are tasked to make a website with the UI shown in the instructions. Other than the UI, the website must also have all the functionality listed on the instructions, such as adding product or category to the database, login and sign up. The framework used in the making of this website is MVC (Model, View, Controller).",
    technologies: ["HTML", "CSS", "Javascript", "C#", "Model View Controller", "SSMS"],
    projectLink: "https://github.com/JasonLowen/Wearhouse",
  },
  {
    title: "Software Engineering Assurance of Learning - Taniboen",
    image: project4,
    description:
      "In this software engineering project, students are tasked to form a group and choose one of the following topics provided (Foods, Energy, Health, Transportation, Maritime, and so on), and then design and make a website based on the theme chosen. This project requires the use of a Version Control System platforms such as Github for the sake of development. In this project, my group decided to make a marketplace website that's focused on agriculture in general.",
      technologies: ["HTML", "CSS", "Javascript", "C#", "Model View Controller", "SSMS"],
      projectLink: "https://github.com/bryandersonn/TaniBoen-Backend",
  },
];

export const CONTACT = {
  address: "Jalan Hajinaman No.18 RT 10 RW 003 Pondok Kelapa Jakarta Timur / 13450 ",
  phoneNo: "+62 813 8169 5019 ",
  email: "nathan.lowen@binus.ac.id",
};
