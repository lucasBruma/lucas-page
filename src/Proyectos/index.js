import React from 'react';
import { useDisclosure ,Collapse,VStack, Button, Heading, Grid } from '@chakra-ui/react';
import { projectDetails } from '../resources/datos';
import {ProjectCard} from '../ProjectCard';
import Context from "../Context/Context";
import { htmlTitles } from "../resources/datos";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Proyectos = () => {
    const context = React.useContext(Context);

    const { isOpen, onToggle } = useDisclosure()
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <VStack py='3rem' bg='red.veryDark' spacing='4rem' id='projects'>
            <Heading variant='section'  data-aos='flip-down'>{htmlTitles[context.language].title_projects}</Heading>
            <Grid templateColumns={['repeat(1, 1fr)',null,'repeat(3, 1fr)']} autoRows='315px' gap={4} width='80%' data-aos='fade-right'>
                {projectDetails.map((project, index)=>{
                    if(index<3){
                        return <ProjectCard 
                                    title={project[context.language].title} 
                                    image={project.img_dark_theme} 
                                    techs={project.technologies} 
                                    bg={project.preview}
                                    demo={project.link}
                                    repo={project.repository}
                                    description={project[context.language].description}
                                    key={index}
                                    
                                />
                    }else{
                        return <Collapse in={isOpen} animateOpacity key={index} data-aos='fade-right'>
                                    <ProjectCard 
                                        title={project[context.language].title}
                                        image={project.img_dark_theme} 
                                        techs={project.technologies}
                                        bg={project.preview}
                                        demo={project.link}
                                        repo={project.repository}
                                        description={project[context.language].description}
                                    />
                                </Collapse>
                    }
                })}
            </Grid>
            <Button onClick={onToggle}>{isOpen ? (htmlTitles[context.language].button__seeLess) : (htmlTitles[context.language].button__seeMore)}</Button>
        </VStack>
    );
};

export {Proyectos};