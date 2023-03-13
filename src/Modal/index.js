import React from 'react';
import { Box, Text, VStack, Heading, Stack, Image, HStack, Button } from '@chakra-ui/react';
import { FaGithub, FaLink, FaLinkedin,  } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";


const Modal = ({sections, setOpenModal}) => {

    const closeModal = ()=>{
        setOpenModal(false)
    }

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
                {sections.map((section, index)=>{
                    return <Link 
                            key={index} 
                            to={`${section.href}`} 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                        >
                            <Button 
                                variant='sidebar' 
                                paddingInlineStart={0} 
                                paddingInlineEnd={0}
                                fontWeight='200'
                                onClick={closeModal}
                            >
                                {section.name}
                            </Button>
                        </Link>
                })}
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