import React from 'react';
import { Box, Text, Link, Button, Flex, Heading } from '@chakra-ui/react';
import Context from "../Context/Context";
import { htmlTitles } from "../resources/datos.js";
import fondoPortada from '../resources/images/fondoPortada.png'


const Portada = () => {
    const context = React.useContext(Context);

    return (
        <Box bgImage={`${fondoPortada}`} bgRepeat='repeat' height='100vh' width='100%' id='home'>
            <Flex 
                height='100%' 
                justifyContent='center' 
                width='fit-content' 
                m='0 auto' 
                alignItems='flex-start' 
                direction='column'
                marginLeft={['2rem','2rem','auto']}
            >
                <Text fontSize={['xl',null,'2xl']}>{htmlTitles[context.language].presentation_text}</Text>
                <Heading variant='primary' mt='0' lineHeight='.9' fontSize={['6xl', null, 'auto']}>
                    <Box as='span' color='aquamarine'>L</Box>ucas <Box as='span' color='aquamarine'>B</Box>rumatti
                </Heading>
                <Text fontSize={['xl',null,'2xl']} w={['65%',null,'100%']} mt='.8rem'>
                    <Box as='span'>&lt;p&gt;</Box>
                        {htmlTitles[context.language].intro}
                    <Box as='span'>&lt;/p&gt;</Box>
                </Text>
                <Link>
                    <Button variant='solid' mt='2rem'>
                        {htmlTitles[context.language].button__contact}
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
};

export {Portada};