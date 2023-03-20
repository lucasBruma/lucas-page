import { VStack, Text, Link, OrderedList, ListItem } from '@chakra-ui/react';

export const ANSWERS = {
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
            message:`Hey there! What's up? I'm a bot created by Lucas to help you with anything you need, no matter what it is! I will ask for him, just fire away with your questions, and I'll be here to assist you in no time! Don't forget, if you ever need assistance, just type "help" in the chat.`,
        },
        es: {
            message: `¡Hola! ¿Cómo andas? Soy un bot creado por Lucas para ayudarte con cualquier cosa que necesites, ¡sin importar qué sea! Le voy a preguntar a él, solo hacé tus preguntas y voy a estar acá para ayudarte en poco tiempo. ¡No olvides que si necesitas ayuda, solo escribí "ayuda" en el chat!`
        }
    },
    conocimientos: {
        en: {
            message:`As a frontend developer, I have a good understanding of programming languages and tools necessary for web development. I am proficient in HTML, CSS, and JavaScript, as well as in the use of frameworks such as React. I also use ChakraUI for styling, which speeds up my development process significantly. To stay up-to-date, I usually watch videos and follow experts in the field of frontend development (such as Goncy or Midudev).`,
        },
        es: {
            message: `Como desarrollador frontend, tengo un buen conocimiento de los lenguajes de programación y herramientas necesarias para el desarrollo de sitios web. Tengo conocimientos sólidos en el uso de HTML, CSS y JavaScript., así como en el uso de frameworks como React. También utilizo ChakraUI para los estilos, la cual me agiliza bastante el desarrollo. Y para mantenerme actualizado, suelo ver videos y seguir a expertos en el campo del front (como Goncy o Midudev).`
        }
    },
    experiencia: {
        en:{
            message:`Although I don't have work experience, I've worked on several personal projects, as can be seen in the 'Projects' section. Currently, I'm looking for a job!`
        },
        es:{
            message: `Aunque no tengo experiencia laboral, trabajé en varios proyectos personales, como los que se pueden apreciar en la seccion ‘Proyectos’. Actualmente estoy buscando trabajo!`
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
    },
    ayuda: {
        en:{
            message:(
                <VStack alignItems='flex-start'>
                    <Text>Of course! Here are some common questions you can ask me:</Text>
                    <OrderedList>
                        <Text>1- Which technologies do you know?</Text>
                        <Text>2- What are your short or long term goals?</Text>
                        <Text>3- Where are you studying?</Text>
                    </OrderedList>
                    <Text>Do you wanna try? Type any number of that options</Text> 
                </VStack>
            )
        },
        es:{
            message: (
                <VStack alignItems='flex-start'>
                    <Text>Obvio! Acá te dejo algunas de las preguntas que podes hacerme:</Text>
                    <OrderedList>
                        <Text>1- ¿Qué tecnologías manejás?</Text>
                        <Text>2- ¿Cuáles son tus objetivos?</Text>
                        <Text>3- ¿Donde estás estudiando?</Text>
                    </OrderedList>
                    <Text>¿Querés intentarlo? Escribí cualquier número de esas opciones.</Text> 
                </VStack>

            )
        }  
    },

}