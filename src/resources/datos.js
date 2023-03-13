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
            description: 'Challenge de Frontend Mentor'
        },
        en: {
            title: "Manage Landing Page",
            description: "Frontend Mentor Challenge",
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
            description: 'Challenge de Frontend Mentor'
        },
        en: {
            title: "Bookmark Landing Page",
            description: "Frontend Mentor Challenge",
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
            description: 'Sitio que provee información acerca de todos los países.'
        },
        en: {
            title: "Info Countries",
            description: "This was an optional project of the ADA ITW bootcamp. It is a 3-match game. Some things are worth improving (cleaning the code + adding some extra functionalities, the responsive design and some bugs), it was really challenging and I am happy with the results.",

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
            description: 'Generate random passwords. It can be customized',
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
            description: "Es un juego para predecir el campéon. También, tiene apartado con los resultados.",
        },
        en: {
            title: "World cup predictor",
            description: "It is a game to predict the champion. Also, it has a section with the results.",
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
        about_me: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        contact: `Si querés contactarme, podés escribirme un correo o completar el formulario que se encuentra  acá abajo.
        Sugerencias, comentarios, preguntas son siempre bienvenidas!`,
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
            modal_required: 'Recorda que todos los campos son requeridos.'
        }
    },
    en: {
        title_about: 'About me',
        about_me: `I'm a front-end developer from Rosario, Argentina, living in Munich since 2021.
        When the pandemic started, I adventured myself into the programming world.
        I started solving problems from programming contests, and intrigued by those I did the "ADA ITW" front-end course(400hs in total), an Argentinian bootcamp for women.
        I had the fortune to have Maria Elena Rey as a teacher, who motivated me a lot and taught me the beauty of programming.
        Back when I was living in Rosario, I initially studied physics and then for a few years worked as a violin teacher. 
        In front-end developing, I found myself in a very stimulating equilibrium between analytical problem solving and art. I enjoy this symbiosis a lot.`,
        contact: `If you want to reach me, you can write me an email, or fill out the form below.
        Your questions, suggestions, and comments are always welcome and help me to grow both on personal level and professionally.`,
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
            modal_required: "Remember that every field is required.",
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
        title_home: 'Home',
        title_projects: 'Projects',
        title_skills: 'Skills',
        title_about: 'About me',
        title_contact: 'Contact',
    }
}
