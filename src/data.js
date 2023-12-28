//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/Alpha.png';
import Project2 from './assets/img/projects/SidCup.png';
import Project3 from './assets/img/projects/PoyalEnfield.png';
import Project4 from './assets/img/projects/Insta.png';
import Project5 from './assets/img/projects/twogood.png';
import Project6 from './assets/img/projects/Chess.png';
import Project7 from './assets/img/projects/eph.png';
import Project8 from './assets/img/projects/Cars.png';



// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/mongo.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/java.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: 'mailto:tejasdoke4@gmail.com',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/tejas-santosh-doke-49593924a/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Strangeryoga',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/strangeryogi',
  },
  
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: <a href="https://alpha-psi-ten.vercel.app/">Alpha By HTML5 Up</a>,
    category: 'Web Development',
  },
  {
    id: '2',
    image: Project2,
    name: <a href="https://sid-cup.vercel.app/">SidCup</a>,
    category: 'Web Development',
  },
  {
    id: '3',
    image: Project3,
    name: <a href="https://royal-enfield-ashen.vercel.app/">RoyalEnfield</a>,
    category: 'Web Development',
  },
  {
    id: '4',
    image: Project4,
    name: <a href="https://insta-silk.vercel.app/">Instagram Clone</a>,
    category: 'Web Development',
  },
  {
    id: '5',
    image: Project5,
    name: <a href="https://two-good-delta.vercel.app/">Two Good</a>,
    category: 'Web Development',
  },
  {
    id: '6',
    image: Project6,
    name: <a href="https://chess-one-smoky.vercel.app/">Chess Game</a>,
    category: 'Web Development',
  },
  {
    id: '7',
    image: Project7,
    name: <a href="https://ephemeral-five.vercel.app/">Ephemeral</a>,
    category: 'Web Development',
  },
  {
    id: '8',
    image: Project8,
    name: <a href="https://cars-orpin.vercel.app/">Cars</a>,
    category: 'Web Development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Web Development',
  },
  {
    name: 'Java',
  },
 
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
