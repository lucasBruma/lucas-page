import React from 'react';
import { Box, Text, Link, HStack, VStack, Button, Flex, Container, Heading } from '@chakra-ui/react';
// import { useContext } from "react";
// import Context from "../Context/Context";
// import { htmlTitles } from "./datos_proyectos";
import fondoPortada from '../resources/images/fondoPortada.png'

const Portada = () => {
    // const context = useContext(Context);

    return (
        <Box bgImage={`${fondoPortada}`} bgRepeat='repeat' height='100vh' width='100%'>
            <Flex height='100%' justifyContent='center' width='fit-content' m='0 auto' alignItems='flex-start' direction='column'>
                <Text fontSize='2xl'>Hola, soy</Text>
                <Heading variant='primary' mt='0' lineHeight='.9'>
                    <Box as='span' color='aquamarine'>L</Box>ucas <Box as='span' color='aquamarine'>B</Box>rumatti
                </Heading>
                <Text fontSize='2xl' mt='.8rem'>
                    <Box as='span'>&lt;p&gt;</Box>
                        Desarrollador Front-end
                    <Box as='span'>&lt;/p&gt;</Box>
                </Text>
                <Link>
                    <Button variant='solid' mt='2rem'>
                        Contactame!
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
};

export {Portada};