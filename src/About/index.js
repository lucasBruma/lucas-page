import React from 'react';
import { Box, Text, Link, HStack, VStack, Button, Flex, Container, Heading, Image } from '@chakra-ui/react';
import foto from '../resources/images/fotomia2BN.jpg'
import { htmlAboutme } from '../resources/datos';

const About = () => {
    return (
        <VStack py='3rem' bg='red.veryDark' spacing='4rem'>
            <Heading variant='section'>About</Heading>
            <HStack w='80%' spacing='3rem' alignItems='flex-start'>
                <Box
                    borderRadius='20px'
                    border='1px solid white'
                    overflow='hidden'
                    w='30%'
                >
                    <Image src={foto} objectFit='cover' w='-webkit-fill-available;'/>
                </Box>
                <Text w='70%'>{htmlAboutme.es.about_me}</Text>
            </HStack>
        </VStack>
    );
};

export {About};