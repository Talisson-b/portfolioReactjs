import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Sobre',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contatos',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nome : ',
    description: 'Talisson',
  },

  {
    id: 2,
    title: 'Sobrenome : ',
    description: 'Barbosa',
  },

  {
    id: 3,
    title: 'Idade : ',
    description: '24 Anos',
  },

  {
    id: 4,
    title: 'Nacionalidade : ',
    description: 'Brasil',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Disponível',
  },

  {
    id: 6,
    title: 'Cidade : ',
    description: 'São Paulo',
  },

  {
    id: 7,
    title: 'Telefone : ',
    description: '(11) 930499961',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'talissonb422@gmail.com',
  },


  {
    id: 10,
    title: 'Linguagens : ',
    description: 'Português',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Anos de <br /> Experiência',
  },

  {
    id: 2,
    no: '20+',
    title: 'Projetos <br /> Concluídos',
  },

  {
    id: 3,
    no: '5+',
    title: 'Clientes <br /> Felizes',
  },
  {
    id: 4,
    no: '2+',
    title: 'Premios <br /> Ganhos',
  },

  
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '70',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '57',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Vue js',
    percentage: '25',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '15',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Phyton',
    percentage: '10',
  },

  {
    id: 8,
    title: 'React',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Dev Frases ',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Dev Frases',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://devfrases.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Ateliê',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Pessoal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'html, boostrap, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://site-atelie.vercel.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Clone Disney',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone Disney',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Pessoal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://clone-disneyplus-5q4b.vercel.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Link dev',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'linktree',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Pessoal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js Firebase',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://projetolinks.vercel.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Pessoal',
      },
      {
        title: 'Language : ',
        desc: 'Html, Css, Js',
      },
      {
        title: 'Preview : ',
        desc: 'https://barbearia-peach.vercel.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Caluladora gasolina',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Calculadora',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Pessoal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://calculadora-gasolina-alcool.vercel.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
