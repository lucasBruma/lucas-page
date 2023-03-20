import { BsFillBookmarkFill,BsCurrencyBitcoin,BsGit} from 'react-icons/bs';
import {GoGraph} from 'react-icons/go';
import {BiWorld} from 'react-icons/bi';
import {AiFillTrophy, AiFillHtml5} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {IoLogoCss3, IoLogoJavascript,IoLogoSass} from 'react-icons/io';
import {SiChakraui} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';

import previewManage from '../resources/images/manage.png';
import previewBookmark from '../resources/images/bookmark.png';
import previewCountries from '../resources/images/countries.png';
import previewPassword from '../resources/images/password.png';
import previewWeather from '../resources/images/weather.png';
import previewWorldCup from '../resources/images/worldcup.png';
import previewCripto from '../resources/images/cripto.png'


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
        id: "1_manage-landing",
        img_dark_theme: GoGraph,
        link: "https://manage-landing-page-three-ecru.vercel.app/",
        technologies: ['React.js', 'ChakraUI'],
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
        id: "4_password",
        img_dark_theme: RiLockPasswordFill,
        link: "https://lucasbruma.github.io/generadorPasswords/",
        technologies: ['HTML', 'CSS', 'JS'],
        repository: "https://github.com/lucasBruma/generadorPasswords",
        preview: previewPassword,
        es: {
            title: 'Generador de contraseñas',
            description: 'Genera contraseñas aleatorias. Se pueden personalizar'
        },
        en: {
            title: "Password generator",
            description: 'It generates random passwords and can be customized',
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
    },
    {
        id: "6_worldCup",
        img_dark_theme: AiFillTrophy,
        link: "https://pronosticador-mundial2022.netlify.app/matches.html",
        technologies: ['HTML', 'CSS', 'JS'],
        repository: "https://github.com/lucasBruma/pronostico-mundial",
        preview: previewWorldCup,
        es: {
            title: "Pronóstico para el mundial 2022",
            description: "Es un juego para predecir el campéon. También tiene un apartado con los resultados.",
        },
        en: {
            title: "World cup predictor",
            description: "It is a game to predict the champion and also has a section with the results.",
        }
    },

    {
        id: "7_cripto",
        img_dark_theme: BsCurrencyBitcoin,
        link: "https://lucasbruma.github.io/marketCap-cotizacion/index.html",
        technologies: ['HTML', 'CSS', 'JS'],
        repository: "https://github.com/lucasBruma/marketCap-cotizacion",
        preview: previewCripto,
        es: {
            title: "Proyecto cripto",
            description: "Lista de 25 criptos con mayor market cap y cotizacion de algunas cripto en monedas FIAT.",
        },
        en: {
            title: "Crypto project",
            description: `List of the 25 cryptos by market cap. And also the price of some cryptos in three FIAT currencies`,
        }
    }
]

export const htmlAboutme = {
    es: {
        title_about: 'Sobre mi',
        about_me1: `Soy un desarrollador front-end de 20 años viviendo en Buenos Aires, Argentina. Aparte de la universidad, me encanta aprender a través de cursos online (en plataformas como Platzi) y de proyectos personales que me permiten experimentar y desafiarme a mí mismo.
        `,
        about_me2: `Me considero una persona bien organizada, solucionadora de problemas y con gran atención al detalle. Soy un apasionado por el desarrollo, y me encantaría trabajar en equipo para crear soluciones innovadoras y de calidad. Siempre estoy buscando nuevos retos y oportunidades para crecer como programador. 
        `,
        contact: `Asi que si querés contactarme, podés escribirme un correo o completar el formulario que se encuentra  acá abajo!`,
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
        about_me1: `I am a 20-year-old front-end developer living in Buenos Aires, Argentina. Since my first contact with programming in high school, I knew it was what I wanted to do. Apart from university, I love learning through online courses (on platforms such as Platzi) and personal projects that allow me to experiment and challenge myself.`,
        about_me2: `I consider myself a well-organized person, problem solver, and detail-oriented. Some of my hobbies include football, working out, and reading. I am passionate about development and would love to work in a team to create innovative and quality solutions. I am always looking for new challenges and opportunities to grow as a developer.`,
        contact: `So, if you want to reach me, you can write me an email, or fill out the form below.`,
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
