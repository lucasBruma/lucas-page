import { BsFillBookmarkFill } from 'react-icons/bs';
import {GoGraph} from 'react-icons/go';
import {BiWorld} from 'react-icons/bi';
import {AiFillTrophy} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {BsCurrencyBitcoin} from 'react-icons/bs';

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
