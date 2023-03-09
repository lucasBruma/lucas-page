import React from 'react';
import { useDisclosure ,Box,Collapse, Text, Link, HStack, VStack, Button, Flex, Container, Heading, Grid, GridItem } from '@chakra-ui/react';
import { projectDetails } from '../resources/datos';
import {ProjectCard} from '../ProjectCard';
// import { useContext } from "react";
// import Context from "../Context/Context";
// import { htmlTitles } from "./datos_proyectos";

const Proyectos = () => {
    // const context = useContext(Context);
    const { isOpen, onToggle } = useDisclosure()

    return (
        <VStack py='3rem' bg='red.veryDark' spacing='4rem'>
            <Heading variant='section'>Proyectos</Heading>
            <Grid templateColumns='repeat(3, 1fr)' autoRows='315px' gap={4} width='80%'>
                {projectDetails.map((project, index)=>{
                    if(index<3){
                        return <ProjectCard 
                                    title={project.es.title} 
                                    image={project.img_dark_theme} 
                                    techs={project.technologies} 
                                    bg={project.preview}
                                    demo={project.link}
                                    repo={project.repository}
                                    description={project.es.description}
                                    key={index}
                                />
                    }else{
                        return <Collapse in={isOpen} animateOpacity key={index}>
                                    <ProjectCard 
                                        title={project.es.title} 
                                        image={project.img_dark_theme} 
                                        techs={project.technologies}
                                        bg={project.preview}
                                        demo={project.link}
                                        repo={project.repository}
                                        description={project.es.description}
                                    />
                                </Collapse>
                    }
                })}
            </Grid>
            <Button onClick={onToggle}>{isOpen ? 'Ver menos' : 'Ver más'}</Button>
        </VStack>
    );
};

export {Proyectos};