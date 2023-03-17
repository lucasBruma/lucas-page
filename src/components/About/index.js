import React from 'react';
import { Box, Text, VStack, Heading, Stack, Image } from '@chakra-ui/react';
import foto from '../../resources/images/fotomia2BN.jpg'
import { htmlAboutme } from '../../resources/data';
import Context from "../../Context/Context";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const context = React.useContext(Context)

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <VStack py='3rem' bg='red.veryDark' spacing='4rem' id='about'>
            <Heading variant='section' data-aos='flip-down'>
                {htmlAboutme[context.language].title_about}
            </Heading>
            <Stack direction={['column', null, 'row']} w='80%' spacing='3rem' alignItems='flex-start'>
                <Box
                    borderRadius='20px'
                    border='1px solid white'
                    overflow='hidden'
                    w={['100%',null,'30%']}
                >
                    <Image src={foto} objectFit='cover' w='-webkit-fill-available;'/>
                </Box>
                <VStack w={['100%',null,'70%']} fontSize='sm'>
                    <Text>{htmlAboutme[context.language].about_me1}</Text>
                    <Text>{htmlAboutme[context.language].about_me2}</Text>
                    <Text>{htmlAboutme[context.language].contact}</Text>
                </VStack>      
            </Stack>
        </VStack>
    );
};

export {About};