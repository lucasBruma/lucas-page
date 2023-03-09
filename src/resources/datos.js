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
            alt: "manage",
            description: 'Challenge de Frontend Mentor'
        },
        en: {
            title: "First Portfolio",
            alt: "HTML code with errors",
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
            alt: "bookmark",
            description: 'Challenge de Frontend Mentor'
        },
        en: {
            title: "Bookmark Landing Page",
            alt: "bookmark",
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
            alt: "countries",
            description: 'Sitio que provee información acerca de todos los países.'
        },
        en: {
            title: "Info Countries",
            alt: "tic'tac'toe game",
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
            alt: "todo list",
            description: 'Genera contraseñas aleatorias. Se pueden personalizar'
        },
        en: {
            title: "Password generator",
            alt: "password generator",
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
            alt: "clima",
            description: 'Consulta el clima de tu ciudad y algunas otras.'
        },
        en: {
            title: "Weather App",
            alt: "weather",
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
            alt: "mundial de futbol",
            description: "Es un juego para predecir el campéon. También, tiene apartado con los resultados.",
        },
        en: {
            title: "World cup predictor",
            alt: "world cup",
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
            alt: "cripto",
            description: "Lista de 25 criptos con mayor market cap y cotizacion de algunas cripto en monedas FIAT.",
        },
        en: {
            title: "Crypto project",
            alt: "crypto",
            description: `List of the 25 cryptos by market cap. And also the price of some cryptos in three FIAT currencies`,
        }
    }
]


export const htmlAboutme = {
    es: {
        title_about: 'Sobre mi',
        about_me: `Soy oriunda de Rosario, Santa Fe, Argentina y desde el 2021 vivo en Múnich, Alemania.
        En Rosario trabajaba como profesora de violín, y desde el inicio de la pandemia decidí incursionar en el mundo de la programación. 
        Comencé resolviendo problemas de programación competitiva usando Python y gracias a la curiosidad que todo esto me despertó, realicé la carrera de desarrolladora Front-end de un año de duración en el bootcamp para mujeres ADA ITW.
        Tuve la fortuna de tener como profesora a la maravillosa María Elena Rey, que me acompañó en todo este camino de aprendizaje y me enseñó la belleza de programar.
        Después de haber sido estudiante de física en la universidad y haber dado clases de violín, encontré en el desarrollo Front-end, una simbiosis perfecta entre lógica y arte.`,

        contact: `Si querés contactarme, podés escribirme un correo o completar el formulario que se encuentra  acá abajo.
        Sugerencias, comentarios, preguntas son siempre bienvenidas!`,
        title_contact: 'Contacto',
        form: {
            required_message: '(Todos los campos son obligatorios)',
            name: 'Nombre*',
            surname: 'Apellido*',
            message: 'Mensaje*',
            submit: 'Enviar',
            modal_title: '¡Muchas gracias por tu mensaje!',
            modal_message: 'Te estaré respondiendo a la brevedad.'
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
            name: 'First Name*',
            surname: 'Surname*',
            message: 'Message*',
            submit: 'Send',
            modal_title: 'Thank you so much for your message!',
            modal_message: 'I will answer as soon as possible.'
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

