import ecomerce from "../assets/images/E-commerceImage.png";
import countryFinder from "../assets/images/CountryFinderImage.png";
import passwordGenerator from "../assets/images/passwordGeneratorImage.png";
import lolapp from "../assets/images/LolImg.png";
export const projects = [
  {
    id: 1,
    title: "LOL-app",
    img: lolapp,
    description:
      "A web application that allows you to login with your nickname and choose your profile icon. The application is based on the League of Legends API. You can filteer and serach a chamion and see their lore and abilities",
    tags: ["React", "Tailwind", "React-router", "useContext"],
    source: "https://github.com/jorge9805/lol-app",
    visit: "https://jorge9805.github.io/lol-app/",
  },
  {
    id: 2,
    title: "CountryFinder",
    img: countryFinder,
    description:
      "It is a web application that allows you to find out any country in the world, you can sort and filter by country name, population, alphabetic, and also you can add activities to each country and you can see the activities in the country.",
    tags: [
      "React",
      "Redux",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Node.js",
      "Heroku",
    ],
    source: "https://github.com/jorge9805/Country-Finder",
    visit: "https://country-finder-seven.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce",
    img: ecomerce,
    description:
      "It was a web application developed by a team. It is a e-commerce website with admin role, user role and guest role, cart, checkout, and payment.",
    tags: [
      "React",
      "Redux",
      "Node",
      "Express",
      "PostgresSQL",
      "Material UI",
      "Passport",
      "MercadoPago",
      "Cloudinary",
    ],
    visit: "https://ecommerce-machi.netlify.app",
  },
  {
    id: 4,
    title: "Password Generator",
    img: passwordGenerator,
    description:
      "It is a web application that allows you to generate a random password with some settings .",
    tags: ["React", "Bootstrap"],
    source: "https://github.com/jorge9805/Password-Generator",
    visit: "https://jorge9805.github.io/Password-Generator/",
  },
  // {
  //   id: 3,
  //   title: "You only live once",
  //   img: "https://picsum.photos/500/300",
  //   description:
  //     "Some people think they're always right, others are quiet and uptight, others they seem so very nice inside they might feel sad and wrong",
  //   tags: ["React", "Redux", "Node", "Express", "MongoDB"],
  // },
  // {
  //   id: 4,
  //   title: "Adults are talking",
  //   img: "https://picsum.photos/500/300",
  //   description:
  //     "Don't go there cuase you'll never return, I know you think of me when you think of her, but you'll never know if you don't try",
  //   tags: ["React", "Redux", "Node", "Express", "MongoDB"],
  // },
];
