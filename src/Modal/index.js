import React from 'react';
import { Box, Text, VStack, Heading, Stack, Image, Link, HStack } from '@chakra-ui/react';
import { FaGithub, FaLink, FaLinkedin,  } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';


const Modal = () => {

    return (
        <VStack py='4rem' h='100vh' w='100vw' spacing='3rem' justifyContent='space-around' bgColor='red.veryDark' position='fixed' zIndex='100'>
            <VStack>
                <Heading variant='primary' mt='0' lineHeight='.9' fontSize={['3xl', null, 'auto']}>
                    <Box as='span' color='aquamarine'>L</Box>ucas <Box as='span' color='aquamarine'>B</Box>rumatti
                </Heading>
            </VStack>
            <VStack>
                <Link>Inicio</Link>
                <Link>Proyectos</Link>
                <Link>Sobre mi</Link>
                <Link>Skills</Link>
                <Link>Contacto</Link>
            </VStack>
            <HStack spacing='1rem'>
                <FaGithub/>
                <FaLinkedin/>
                <AiFillMail/>
            </HStack>
        </VStack>
    );
};

export {Modal};