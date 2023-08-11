import { BsFillBookmarkFill,BsGit} from 'react-icons/bs';
import {GoGraph} from 'react-icons/go';
import {BiWorld,BiCameraMovie} from 'react-icons/bi';
import { AiFillHtml5} from 'react-icons/ai';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {IoLogoCss3, IoLogoJavascript,IoLogoSass} from 'react-icons/io';
import {SiChakraui, SiTypescript, SiNextdotjs, SiTailwindcss,SiStyledcomponents} from 'react-icons/si';
import {FaReact,FaRegHandshake} from 'react-icons/fa';
import {MdOutlineBusinessCenter,MdGTranslate,MdRestaurantMenu} from 'react-icons/md';
import {TbTicTac} from 'react-icons/tb';

import previewManage from '../resources/images/manage.png';
import previewBookmark from '../resources/images/bookmark.png';
import previewCountries from '../resources/images/countries.png';
import previewWeather from '../resources/images/weather.png';
import previewMeli from '../resources/images/meli.png'; 
import previewTateti from '../resources/images/tateti.png';
import previewMorfi from '../resources/images/morfi.png';
import previewTraductor from '../resources/images/traductor.png'
import previewPosts from '../resources/images/posts.png';   

export const sections = [{
    href: 'home',
    es: {
        name: 'Inicio',
    },
    en: {
        name: 'Home',
    }
  },
  {
    href: 'projects',
    es: {
        name: 'Proyectos',
    },
    en: {
        name: 'Projects',
    }
  },
  {
    href: 'about',
    es: {
        name: 'Sobre mi',
    },
    en: {
        name: 'About me',
    }
  },
  {
    href: 'skills', 
    es: {
        name: 'Tecnologías',
    },
    en: {
        name: 'Skills',
    }
  },
  {
    href: 'contact',
    es: {
        name:'Contacto'
    },
    en: {
        name:'Contact'
    }
  }]

export const projectDetails = [
    {
        id: "1_clon-ml",
        img_dark_theme: FaRegHandshake,
        link: "https://mercadolibre-details-challenge-two.vercel.app/",
        technologies: ['React.js', 'Typescript', 'ChakraUI'],
        repository: "https://github.com/lucasBruma/mercadolibre-details-challenge",
        preview: previewMeli,
        es: {
            title: 'Clon de Mercado Libre',
            description: 'Desarrollé la vista de detalle de producto de ML!'
        },
        en: {
            title: "Mercado Libre Clone",
            description: 'I developed the product detail view for Mercado Libre.',
        }
    },
    {
        id: "2_agency-posts",
        img_dark_theme: MdOutlineBusinessCenter,
        link: "https://agency-posts.vercel.app/",
        technologies: ['React.js', 'ChakraUI', 'Node.js', 'Express'],
        repository: "https://github.com/lucasBruma/agency-posts",
        preview: previewPosts,
        es: {
            title: 'Agency Posts',
            description: 'Proyecto enfocado a las agencias digitales. Genera 10 posts para instagram dado un prompt. Usé Openai API y Pexels API'
        },
        en: {
            title: "Agency Posts",
            description: 'Project focused on digital agencies. Generates 10 Instagram posts given a prompt. I used the OpenAI API and the Pexels API',
        }
    },
    {
        id: "2_hbo-max",
        img_dark_theme: BiCameraMovie,
        link: "https://hbo-clon.vercel.app/",
        technologies: ['Next.js', 'Typescript', 'Tailwind'],
        repository: "https://github.com/lucasBruma/hbo-clon",
        preview: previewPosts,
        es: {
            title: 'Clon de HBO Max',
            description: 'Home y movie detail de HBO Max.'
        },
        en: {
            title: "HBO Max clone",
            description: "HBO Max's home and movie detail",
        }
    },
    {
        id: "1_manage-landing",
        img_dark_theme: GoGraph,
        link: "https://manage-landing-page-three-ecru.vercel.app/",
        technologies: ['React.js', 'Javascript', 'ChakraUI'],
        repository: "https://github.com/lucasBruma/manage-landing-page",
        preview: previewManage,
        es: {
            title: 'Manage Landing Page',
            description: 'Este es un challenge de Frontend Mentor donde a partir de unas consignas y un diseño dado, lo debo desarrollar con las tecnologías que quiera. En este caso, elegi React.js y ChakraUI las cuales me permitieron agilizar mucho más el desarrollo. Estuvo bastante entretenido y creo que quedó bastante similar al diseño original.'
        },
        en: {
            title: "Manage Landing Page",
            description: 'It is a Frontend Mentor Challenge where, based on given prompts and a provided design, I had to develop the project using the technologies of my choice. In this case, I chose React.js and ChakraUI which allowed me to speed up the development process significantly. It was quite entertaining and I believe the final result is quite faithful to the original design.',
        }
    },
    {
        id: "2_morfi",
        img_dark_theme:  MdRestaurantMenu,
        link: "https://nocountry-vercel.vercel.app/",
        technologies: ['React.js','Javascript','Tailwind'],
        repository: "https://github.com/No-Country/c11-34-ft-react-nodeJS",
        preview: previewMorfi,
        es: {
            title: 'Morfi app',
            description: 'Morfi es una plataforma web diseñada para facilitar y agilizar el proceso de reservas en mesas de restaurantes en Argentina. En este proyecto colabore junto a otros programadores y diseñadores.'
        },
        en: {
            title: "Morfi app",
            description: "Morfi is a web platform designed to facilitate and accelerate the process of reservations in restaurant tables in Argentina. In this project, I collaborate with other programmers and designers"
        }
    },
    {
        id: "3_google-translate-clon",
        img_dark_theme: MdGTranslate,
        link: "https://clon-google-translate.vercel.app/",
        technologies: ['React.js', 'Typescript', 'Node.js', 'Express'],
        repository: "https://github.com/lucasBruma/clon-google-translate",
        preview: previewTraductor,
        es: {
            title: 'Clon de google translate',
            description: 'Este proyecto es un clon de la famosa herramienta de traducción de Google, pero con la particularidad de que utiliza inteligencia artificial para hacer las traducciones. Para lograrlo, se utiliza la API de OpenAI.'
        },
        en: {
            title: "Google translate clone",
            description: 'This project is a clone of the famous Google translation tool, but with the particularity that it uses artificial intelligence for translations. To achieve this, the OpenAI API is used.',
        }
    },
    {
        id: "3_tictactoe",
        img_dark_theme: TbTicTac,
        link: "https://ta-te-ti-tau.vercel.app/",
        technologies: ['React.js', 'Javascript','Tailwind'],
        repository: "https://github.com/lucasBruma/ta-te-ti",
        preview: previewTateti,
        es: {
            title: 'Ta te ti',
            description: 'Juego de Ta Te Ti. Se guarda info del tablero y del turno en localStorage.'
        },
        en: {
            title: "Tic tac toe",
            description: "Tic tac toe game. It saves the board and the turn in localStorage"
        }
    },
    {
        id: "2_bookmark-landing",
        img_dark_theme:  BsFillBookmarkFill,
        link: "https://bookmark-landing-page-orpin.vercel.app/",
        technologies: ['React.js', 'CSS'],
        repository: "https://github.com/lucasBruma/bookmark-landing-page",
        preview: previewBookmark,
        es: {
            title: 'Bookmark Landing Page',
            description: 'Este es un challenge de Frontend Mentor donde a partir de unas consignas y un diseño dado, lo debo desarrollar con las tecnologías que quiera. En este caso, elegi React.js y CSS'
        },
        en: {
            title: "Bookmark Landing Page",
            description: "It is a Frontend Mentor Challenge where, based on given prompts and a provided design, I had to develop the project using the technologies of my choice. In this case, I chose React.js and CSS."
        }
    },
    {
        id: "3_countries",
        img_dark_theme: BiWorld,
        link: "https://lucasbruma.github.io/info-countries/",
        technologies: ['HTML', 'SASS', 'JS'],
        repository: "https://github.com/lucasBruma/info-countries",
        preview: previewCountries,
        es: {
            title: 'Info Countries App',
            description: 'Sitio que provee información acerca de todos los países. Se pueden filtrar por continente o mediante un buscador. Además, se puede observar información más detallada acerca de cada país.'
        },
        en: {
            title: "Info Countries",
            description: "A website that provides information about all the countries. They can be filtered by continent or through a search bar. Additionally, more detailed information about each country can be observed."
        }
    },
    {
        id: "5_weather",
        img_dark_theme: TiWeatherPartlySunny,
        link: "https://lucasbruma.github.io/weatherApp/",
        technologies: ['HTML', 'CSS', 'JS'],
        preview: previewWeather,
        repository: "https://github.com/lucasBruma/weatherApp",
        es: {
            title: 'Aplicación del clima',
            description: 'Consulta el clima de tu ciudad y algunas otras.'
        },
        en: {
            title: "Weather App",
            description: "Check the weather in your city and some others.",
        }
    }
]


export const htmlAboutme = {
    es: {
        title_about: 'Sobre mi',
        about_me1:`Buenas! Soy Lucas, desarrollador frontend argentino en búsqueda de poder dar mis primeros pasos en el mundo Tech. 🚀`,
        about_me2: ` He desarrollado distintos proyectos con las tecnologías mencionadas en el apartado de skills, siempre tratando de implementar las mejores prácticas. También formé parte de la Cohorte 11 de No Country, experiencia muy valiosa que me permitió colaborar en equipo para sacar adelante un proyecto muy interesante (Morfi App).
        💪 Nunca me canso de aprender y estoy inscripto en plataformas como Platzi para seguir mejorando mis habilidades en desarrollo web. `,
        contact: `Si querés contactarme, podés escribirme un correo o completar el formulario que se encuentra acá abajo!`,
        title_contact: 'Contacto',
        form: {
            required_message: '(Todos los campos son obligatorios)',
            name: 'Nombre',
            email: 'Email',
            message: 'Mensaje',
            submit: 'Enviar mensaje',
            modal_title: '¡Muchas gracias por tu mensaje!',
            modal_message: 'Tu mensaje fue enviado correctamente. Te estaré respondiendo a la brevedad.',
            modal_error: 'El mensaje no fue enviado.',
            modal_email: 'Revisa tu email.',
            modal_required: 'Este campo es obligatorio.'
        }
    },
    en: {
        title_about: 'About me',
        about_me1: `Hello! I'm Lucas, an Argentinian frontend developer looking forward to give my first steps in Tech. 🚀`,
        about_me2: `I've developed different projects with the technologies mentioned in the skills section, always trying to implement the best practices. Also I was part of the Cohort 11 of No Country, a very valuable experience that I've gained in collaborating with other developers to get a project that is very interesting (Morfi App).
        💪 I never stop learning and I'm enrolled in platforms like Platzi to keep improving my skills in web development.`,
        contact: `If you want to contact me, you can write me an email, or fill out the form below.`,
        title_contact: 'Contact',
        form: {
            required_message: '(All fields required)',
            name: 'First Name',
            email: 'Email',
            message: 'Message',
            submit: 'Send message',
            modal_title: 'Thank you so much for your message!',
            modal_message: 'Your message was sent successfully. I will answer as soon as possible.',
            modal_error: 'The email was not sent.',
            modal_email: 'Check your email.',
            modal_required: "This field is required.",
        }
    },
}

export const skills = [
    {
        nombre: 'HTML5',
        logo: AiFillHtml5
    },
    {
        nombre: 'CSS3',
        logo: IoLogoCss3
    },
        {
        nombre: 'JavaScript',
        logo: IoLogoJavascript
    },
    {
        nombre: 'Git',
        logo: BsGit
    },
    {
        nombre: 'SASS',
        logo: IoLogoSass
    },
    {
        nombre: 'React',
        logo: FaReact
    },
    {
        nombre: 'ChakraUI',
        logo: SiChakraui
    },
    {
        nombre: 'Typescript',
        logo: SiTypescript
    },
    {
        nombre:'Tailwind',
        logo: SiTailwindcss
    },
    {
        nombre: 'Next.js',
        logo: SiNextdotjs
    
    },
    {
        nombre: 'S. Components',
        logo: SiStyledcomponents
    }
]

export const htmlTitles = {
    es: {
        intro: 'Desarrollador Front-end',
        presentation_text: `Hola, soy`,
        button__contact: 'Contactame!',
        button__seeMore: 'Ver más',
        button__seeLess: 'Ver menos',
        button__close: 'Cerrar',
        button__send: 'Enviar',
        input__chatbot: '¿Qué tecnologías usas?',
        loading__chatbot: 'escribiendo...',
        title_home: 'Inicio',
        title_projects: 'Proyectos',
        title_skills: 'Tecnologías',
        title_about: 'Sobre mi',
        title_contact: 'Contacto'
    },
    en: {
        intro: 'Front-end Developer',
        presentation_text: `Hello, I'm`,
        button__contact: 'Contact me!',
        button__seeMore: 'See more',
        button__seeLess: 'See less',
        button__close: 'Close',
        button__send: 'Send',
        input__chatbot: 'What technologies do you use?',
        loading__chatbot: 'typing...',
        title_home: 'Home',
        title_projects: 'Projects',
        title_skills: 'Skills',
        title_about: 'About me',
        title_contact: 'Contact',
    }
}
