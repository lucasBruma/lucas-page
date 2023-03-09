import React from 'react';
import { Box, Text, Link, HStack, VStack, Button, Flex, Container, Heading, Image } from '@chakra-ui/react';
import foto from '../resources/images/fotomia2BN.jpg'
import { htmlAboutme } from '../resources/datos';
import {Form} from '../Form'

const Contact = () => {
    return (
        <Flex direction='column' py='3rem' bg='red.veryDark' alignItems='center'>
            <Heading variant='section'>{htmlAboutme.es.title_contact}</Heading>
            <Text marginBottom='3rem'>{htmlAboutme.es.form.required_message}</Text>
            <Form/>
        </Flex>
    );
};

export {Contact};