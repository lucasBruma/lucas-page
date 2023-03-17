import React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import {Form} from '../Form'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Context from "../../Context/Context";
import { htmlAboutme } from '../../resources/data';

const Contact = () => {
    const context = React.useContext(Context);

    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Flex direction='column' py='3rem' bg='red.veryDark' alignItems='center' id='contact'>
            <Heading variant='section' data-aos='flip-down'>{htmlAboutme[context.language].title_contact}</Heading>
            <Text marginBottom='3rem'>{htmlAboutme[context.language].form.required_message}</Text>
            <Form/>
        </Flex>
    );
};

export {Contact};