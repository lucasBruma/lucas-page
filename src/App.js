import React from 'react';
import {Sidebar} from './components/Sidebar';
import {Homepage} from './components/Homepage';
import { Projects } from './components/Projects';
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Contact} from './components/Contact';
import { Modal } from './components/Modal';
import { Chatbot } from './components/Chatbot';
import Context from './Context/Context'
import { Box, Button, Icon, VStack, Text, Link } from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';

const API_KEY = process.env.REACT_APP_API_KEY;

const ANSWERS = {
    default:{
        en:{
            message: `Upss! I'm not Lucas. I'm just an IA which is prepared only to answer some questions.`
        },
        es:{
            message: `Upss! No soy Lucas. Soy una IA que está preparada para responder solo algunas preguntas.`
        }
    },
    intro: {
        en: {
            message:`Hey there! What's up? I'm Codey, the bot created by Lucas to help you with anything you need, no matter what it is! I will ask for him, just fire away with your questions, and I'll be here to assist you in no time! Don't forget, if you ever need assistance, just type "help" in the chat.`,
        },
        es: {
            message: `¡Hola! ¿Cómo estás? Soy Codey, el bot creado por Lucas para ayudarte con cualquier cosa que necesites, ¡sin importar qué sea! Le preguntaré a él, solo haz tus preguntas y estaré aquí para ayudarte en poco tiempo. ¡No olvides que si necesitas ayuda, solo escribe "ayuda" en el chat!`
        }
    },
    conocimientos: {
        en: {
            message:`As a frontend developer, I have a good understanding of programming languages and tools necessary for web development. I am proficient in HTML, CSS, and JavaScript, as well as in the use of frameworks such as React. I also use ChakraUI for styling, which speeds up my development process significantly. To stay up-to-date, I usually watch videos and follow experts in the field of frontend development (such as Goncy or Midudev).`,
        },
        es: {
            message: `Como desarrollador frontend, tengo un buen conocimiento de los lenguajes de programación y herramientas necesarias para el desarrollo de sitios web. Soy competente en el manejo de HTML, CSS y JavaScript, así como en el uso de frameworks como React. También utilizo ChakraUI para los estilos, la cual me agiliza bastante el desarrollo. Y para mantenerme actualizado, suelo ver videos y seguir a expertos en el campo del front (como Goncy o Midudev).`
        }
    },
    experiencia: {
        en:{
            message:`Although I don't have work experience, I've worked on several personal projects, as can be seen in the 'Projects' section. Currently, I'm looking for a job!`
        },
        es:{
            message: `Aunque no tengo experiencia laboral, trabajé en varios proyectos personales, como los que se pueden apreciar en la seccion ‘Projects’. Actualmente estoy buscando trabajo!`
        }
    },
    objetivos: {
        en:{
            message:`My short-term goal is to find a job in the frontend development field where I can learn and apply my skills. In the long run, I hope to work on projects that can have a significant impact on society. I am motivated by technical challenges and the opportunity to work in a collaborative and creative environment. I believe that my positive attitude and adaptability make me stand out as a candidate in the frontend development field.`
        },
        es:{
            message: `Mi objetivo a corto plazo es encontrar un puesto de trabajo en el área de desarrollo frontend, donde pueda aprender y aplicar mis habilidades. A largo plazo, espero trabajar en proyectos que puedan tener un impacto significativo en la sociedad. Me motivan los desafíos técnicos y la oportunidad de trabajar en un ambiente colaborativo y creativo. Creo que mi actitud positiva y mi capacidad de adaptación me hacen destacar como candidato en el área de desarrollo frontend.`
        }  
    },
    formacion: {
        en:{
            message:`Currently, I am studying at university (UNSAM) and although the majority of what I apply is self-taught, my studies are giving me a solid foundation in concepts such as data structures and algorithms. 
            I am enrolled in Platzi, a platform that I adore because they have learning paths that are very easy to follow and allow you to orient yourself; besides, it has a great community in LATAM.`
        },
        es:{
            message: `Actualmente estudio en la universidad (UNSAM) y aunque la mayoría de lo que aplico es de manera autodidacta, mis estudios me estan dando una base sólida en conceptos como estructuras de datos y algoritmos.  
            Estoy inscripto en Platzi, plataforma que adoro porque tienen rutas de aprendizaje que son muy fáciles de seguir y te permite orientarte; además que tiene una gran comunidad en LATAM.`
        }  
    },
    contacto: {
        en:{
            message:(
                <VStack alignItems='flex-start'>
                    <Text>
                        If you are interested in my profile, you can contact me through <Link href="mailto:lucasbrumatti99@gmail.com" target='_blank' color='blue.400'>my email</Link> or <Link href='https://www.linkedin.com/in/lucas-brumatti-50bb9a1b3/' target='_blank' color='blue.400'>my LinkedIn profile</Link>, where you can find more information about my experience and previous projects. I am available to work on remote projects and I am immediately available to start working in the frontend development area.
                    </Text>
                    <Text>
                        If you need my resume, download it by <Link
                            href="../resources/CV-Lucas_Brumatti.pdf"
                            download="Lucas Brumatti"
                            color='blue.400'
                        >
                            clicking here!
                        </Link>
                    </Text>
                </VStack>

            )
        },
        es:{
            message: (
                <VStack alignItems='flex-start'>
                    <Text>
                        En caso de estar interesado en mi perfil, me pueden contactar a través de <Link href="mailto:lucasbrumatti99@gmail.com" target='_blank' color='blue.400'>mi correo electrónico</Link> o <Link href='https://www.linkedin.com/in/lucas-brumatti-50bb9a1b3/' target='_blank' color='blue.400'>mi perfil en LinkedIn</Link>, donde podrán encontrar más información sobre mi experiencia y proyectos anteriores. Estoy disponible para trabajar en proyectos remotos y mi disponibilidad para iniciar un trabajo en el área de desarrollo frontend es inmediata.
                    </Text>
                    <Text>
                        Si necesitas mi CV, descargalo <Link
                            href="../resources/CV_Lucas_Brumatti.pdf"
                            download="Lucas Brumatti"
                            color='blue.400'
                        >
                            clickeando acá!
                        </Link>
                    </Text>
                </VStack>

            )
        }  
    }
}

const EXAMPLES = [
    {"text": "¿Cómo describirías tu nivel de habilidades en el desarrollo frontend?", "label": "conocimientos"}, 
    {"text": "¿Qué herramientas y lenguajes de programación dominas?", "label": "conocimientos"}, 
    {"text": "¿Qué frameworks de desarrollo frontend has utilizado?", "label": "conocimientos"}, 
    {"text": "¿Cómo te mantienes actualizado en cuanto a las tendencias y novedades en el desarrollo frontend?", "label": "conocimientos"}, 
    {"text": "¿Tienes experiencia en la creación de animaciones y transiciones en CSS? ", "label": "conocimientos"}, 
    {"text": "¿Qué tipo de proyectos has desarrollado hasta ahora?", "label": "experiencia"},
    {"text": "¿Has trabajado en equipo en algún proyecto anteriormente? ", "label": "experiencia"}, 
    {"text": "¿Cómo describirías tu proceso de trabajo para llevar a cabo un proyecto? ", "label": "experiencia"}, 
    {"text": "¿Cómo manejas los errores y problemas que surgen durante el proceso de desarrollo?", "label": "experiencia"}, 
    {"text": "¿Tienes experiencia con la integración de APIs de terceros en tus proyectos? ", "label": "experiencia"}, {"text": "¿Cuáles son tus objetivos a corto y largo plazo como desarrollador frontend?", "label": "objetivos"}, 
    {"text": "¿Qué te motiva a seguir aprendiendo y desarrollándote en este campo? ", "label": "objetivos"}, 
    {"text": "¿Qué tipo de proyectos te gustaría trabajar en el futuro?", "label": "objetivos"}, {"text": "¿Qué te hace destacar como candidato en un puesto de trabajo en el área de desarrollo frontend? ", "label": "objetivos"}, 
    {"text": "¿Qué esperas aprender en un posible trabajo en el área de desarrollo frontend? ", "label": "objetivos"}, 
    {"text": "¿Qué estás estudiando actualmente en la universidad? ", "label": "formacion"}, 
    {"text": "¿Cómo aplicas los conocimientos que adquieres de manera autodidacta en tu formación académica? ", "label": "formacion"}, 
    {"text": "¿Has realizado algún curso o capacitación en el área de desarrollo frontend?", "label": "formacion"}, 
    {"text": "¿Cómo te ha ayudado tu formación académica en tu desarrollo como desarrollador frontend?", "label": "formacion"}, 
    {"text": "¿Cómo has aplicado los conocimientos adquiridos en la universidad en tus proyectos personales?", "label": "formacion"}, {"text": "¿Cómo te pueden contactar en caso de estar interesado en tu perfil?", "label": "contacto"}, 
    {"text": "¿Tienes algún perfil en redes sociales o página web donde se puedan ver tus proyectos?", "label": "contacto"}, 
    {"text": "¿Cuál es tu correo electrónico?", "label": "contacto"}, {"text": "¿Estás disponible para trabajar en proyectos remotos?", "label": "contacto"}, 
    {"text": "¿Cuál es tu disponibilidad para iniciar un trabajo en el área de desarrollo frontend?", "label": "contacto"}, 
    {"text": "Hola", "label": "intro"}, 
    {"text": "Como estás?", "label": "intro"}, 
    {"text": "Quien sos?", "label": "intro"}, 
    {"text": "ayuda", "label": "intro"}, 
    {"text": "help", "label": "intro"}, 
    {"text": "¿Cuál es el origen de la vida en la Tierra?", "label": "no_relacionadas"}, 
    {"text": "¿Cuál es la mejor forma de cocinar una langosta?", "label": "no_relacionadas"}, 
    {"text": "¿Por qué algunos animales hibernan y otros no?", "label": "no_relacionadas"}, 
    {"text": "¿Cuánto tiempo tarda la luz del sol en llegar a la Tierra?", "label": "no_relacionadas"}, 
    {"text": "¿Cuál es la montaña más alta del mundo", "label": "no_relacionadas"}, 
    {"text": "¿Qué lenguajes sabés?", "label": "conocimientos"}, 
    {"text": "¿Qué tecnologías manejas?", "label": "conocimientos"}, 
    {"text": "¿sabes ingles?", "label": "conocimientos"},
    {"text": "donde trabajaste?", "label": "experiencia"}
]


const App = () => {
  const initialState = window.innerWidth < 768 ? false : true;
  const [showSidebar, setShowSidebar] = React.useState(initialState);
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('es');

  const context = {
    language: language,
    setLanguage: setLanguage,
  }

  document.documentElement.lang = context.language;

  const toggleModal = () =>{
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    function handleResize() {
    if (window.innerWidth < 768) {
        setShowSidebar(false);
    } else {
        setShowSidebar(true);
        setIsOpen(false)
    }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <Context.Provider value={context}>   
      <Box marginLeft={['0','0','210px']} position='relative'>
        {showSidebar ?
          <Sidebar/> :
          <Button 
            variant='icon' 
            onClick={()=> {toggleModal()}}  
            fontSize='40px' 
            position='fixed' 
            right='10px' 
            top='20px' 
            zIndex='200' 
            width='3rem'
            paddingInlineStart={0}
            paddingEnd={0}
          >
            {isOpen ?
            <Icon as={IoMdClose}></Icon>
            :
            <Icon bgColor='rgba(0,0,0,0.3)' borderRadius='7px' w='3rem' as={GiHamburgerMenu}></Icon>
            }  
          </Button> 
        }
        {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen}/>}
        <Homepage />
        <Projects />
        <About/>
        <Skills/>
        <Contact/>
        <Chatbot API_KEY={API_KEY} ANSWERS={ANSWERS} EXAMPLES={EXAMPLES}/>
      </Box>
    </Context.Provider>
  );
};

export default App;
