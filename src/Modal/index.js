import React from 'react';
import { Box, Text, VStack, Heading, Stack, Image, Link, HStack, Button } from '@chakra-ui/react';
import { FaGithub, FaLink, FaLinkedin,  } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';


const Modal = () => {

    return (
        <VStack 
            pt='5rem' 
            pb='3rem' 
            h='100vh' 
            w='100vw' 
            spacing='2rem' 
            justifyContent='space-around' 
            bgColor='red.veryDark' 
            position='fixed' 
            zIndex='100'
        >
            <VStack spacing='2rem'>
                <Heading variant='primary' mt='0' lineHeight='.9' fontSize={['3xl', null, 'auto']}>
                    <Box as='span' color='aquamarine'>L</Box>ucas <Box as='span' color='aquamarine'>B</Box>rumatti
                </Heading>
                <HStack>
                    <Button variant='outline'>EN</Button>
                    <Button variant='outline'>ES</Button>
                </HStack>
            </VStack>
            <VStack spacing='1.7rem'>
                <Link>Inicio</Link>
                <Link>Proyectos</Link>
                <Link>Sobre mi</Link>
                <Link>Skills</Link>
                <Link>Contacto</Link>
            </VStack>
            <HStack spacing='3rem' fontSize='1.6rem'>
                <FaGithub/>
                <FaLinkedin/>
                <AiFillMail/>
            </HStack>
        </VStack>
    );
};

export {Modal};