import React from 'react';
import { Box, Text, Link, HStack, VStack, Button, Flex, Container, Heading, Image } from '@chakra-ui/react';
import { htmlAboutme } from '../resources/datos';
import {Form} from '../Form'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Flex direction='column' py='3rem' bg='red.veryDark' alignItems='center' id='contact'>
            <Heading variant='section' data-aos='flip-down'>{htmlAboutme.es.title_contact}</Heading>
            <Text marginBottom='3rem'>{htmlAboutme.es.form.required_message}</Text>
            <Form/>
        </Flex>
    );
};

export {Contact};