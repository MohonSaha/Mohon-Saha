//========================= FULL STACK IMAGE =======================
import Project1 from './Pictures/Action-Land.png';
import Project2 from './Pictures/project2.jpg';


//========================= FRONT END IMAGE ========================
import front1 from '../assets/Pictures/Projects/front-1-react-knowledge.png';
import front2 from '../assets/Pictures/Projects/front-2-react-cooking-master.png';

import Project3 from './Pictures/project3.jpeg';
import Project4 from './Pictures/project4.jpeg';

//============================= DESIGN IMAGE =========================

import design1 from './Pictures/Projects/New-Year.png';
import design2 from './Pictures/Projects/Law-Farm.png';
import design3 from './Pictures/Projects/Archetecure.png';
import design4 from './Pictures/Projects/House-Rent.png';

//=========================== Javascript Image ======================
import js1 from '../assets/Pictures/Projects/JS-1-PHero-HAck.png';
import js2 from '../assets/Pictures/Projects/JS-2-Calculate-Area.png';
import js3 from '../assets/Pictures/Projects/JS-3-AI-Universe.png';

// import Testimonial1 from './assets/testimonial1.jpg';
// import Testimonial2 from './assets/testimonial2.jpg';
// import Testimonial3 from './assets/testimonial3.jpg';
// import Testimonial4 from './assets/testimonial4.jpg';
// import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Front End Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
  },
  {
    id: 2,
    name: 'Back End Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 3,
    name: ' Mern Stack Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 4,
    name: ' Website Debugging ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    name: ' Website Design ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
];


export const skills = [
  {
    id: 1,
    name: 'React',
    percentage: 85,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 2,
    name: 'MongoDB',
    percentage: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 3,
    name: 'Express',
    percentage: 90,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 4,
    name: 'Node',
    percentage: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 5,
    name: 'Firebase',
    percentage: 70,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 6,
    name: 'Tailwind',
    percentage: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];




export const projects = [
  {
    id: "full1",
    img: Project1,
    category: 'Full Stack',
    title: 'Action Land',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },





  // {
  //   id: 2,
  //   img: Project2,
  //   category: 'Full Stack',
  //   title: 'Gooir',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // },
  {
    id: "fr1",
    img: front1,
    category: 'Front End',
    title: 'Knowledge Store',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ['React', 'Vanila CSS'],
    live: "https://knowledge-store.netlify.app/",
    client_code: ""

  },
  {
    id: "fr2",
    img: front2,
    category: 'Front End',
    title: 'Cooking Master',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ['React', 'React Router', 'Firebase', 'API'],
    live: "https://cooking-master-3e6ff.web.app/",
    client_code: ""

  },
  // {
  //   id: 4,
  //   img: Project4,
  //   category: 'Back End',
  //   title: 'Mozar',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // },
  {
    id: "ds1",
    img: design1,
    category: 'Design',
    title: 'New Year Page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ['HTML-5', 'Vanila CSS',],
    live: "https://mohon-new-year.netlify.app/",
    client_code: ""
  },
  {
    id: "ds2",
    img: design2,
    category: 'Design',
    title: 'Law Farm Page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ["HTML-5", "Vanila CSS", "Bootstrap"],
    live: "https://justice-mohon.netlify.app/",
    client_code: ""
  },
  {
    id: "ds3",
    img: design3,
    category: 'Design',
    title: 'Architect Farm Page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ["HTML-5", "Vanila CSS"],
    live: "https://architects71.netlify.app/",
    client_code: ""
  },
  {
    id: "ds4",
    img: design4,
    category: 'Design',
    title: 'House Renting Page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ["HTML-5", "Vanila CSS", "Bootstrap"],
    live: "https://jocular-florentine-66ec1d.netlify.app/",
    client_code: ""
  },
  {
    id: "js1",
    img: js1,
    category: 'Javascript',
    title: 'Colne Programming Hero',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ["HTML-5", "Vanila CSS", "Javascript"],
    live: "https://inspiring-cobbler-72efe6.netlify.app/",
    client_code: ""
  },
  {
    id: "js2",
    img: js2,
    category: 'Javascript',
    title: 'Calculate Shapes Area',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ["HTML-5", "Vanila CSS", "Javascript"],
    live: "https://mohon-geometry-genius.netlify.app/",
    client_code: ""
  },
  {
    id: "js3",
    img: js3,
    category: 'Javascript',
    title: 'Calculate Shapes Area',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    technology: ["HTML-5", "Vanila CSS", "Bootstrap", "Javascript"],
    live: "https://moonlit-custard-8db700.netlify.app/",
    client_code: ""
  },
  // {
  //   id: 7,
  //   img: Project6,
  //   category: 'Dom',
  //   title: 'Kana',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  // },
];


// export const testimonials = [
//   {
//     id: 1,
//     img: Testimonial1,
//     name: 'Barbara Wilson',
//     author: 'CEO Company',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 2,
//     img: Testimonial2,
//     name: 'Charlie Smith',
//     author: 'Designer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 3,
//     img: Testimonial3,
//     name: 'Roy Wang',
//     author: 'Manager GYM',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 4,
//     img: Testimonial4,
//     name: 'Jennifer Smith',
//     author: 'CEO & Founder',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 5,
//     img: Testimonial5,
//     name: 'Paul Freeman',
//     author: 'Photographer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
// ];
