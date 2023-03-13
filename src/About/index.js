import React from 'react';
import { Box, Text, VStack, Heading, Stack, Image } from '@chakra-ui/react';
import foto from '../resources/images/fotomia2BN.jpg'
import { htmlAboutme } from '../resources/datos';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <VStack py='3rem' bg='red.veryDark' spacing='4rem'>
            <Heading variant='section' data-aos='flip-down'>About</Heading>
            <Stack direction={['column', null, 'row']} w='80%' spacing='3rem' alignItems='flex-start'>
                <Box
                    borderRadius='20px'
                    border='1px solid white'
                    overflow='hidden'
                    w={['100%',null,'30%']}
                >
                    <Image src={foto} objectFit='cover' w='-webkit-fill-available;'/>
                </Box>
                <Text w={['100%',null,'70%']}>{htmlAboutme.es.about_me}</Text>
            </Stack>
        </VStack>
    );
};

export {About};