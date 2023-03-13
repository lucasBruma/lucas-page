import React from 'react';
import { Box, VStack, Heading,HStack, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin,  } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion'
import Context from "../Context/Context";
import { sections } from '../resources/datos';


const Modal = ({setIsOpen, isOpen}) => {
    const context = React.useContext(Context);
    
    const closeModal = ()=>{
        setIsOpen(false)
    }
    const handleClickLanguage = (e) => {
        context.setLanguage(e.target.value);
      };

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
                as={motion.div}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ease: "easeOut", duration: 10 }}
            >
                <VStack spacing='2rem'>
                    <Heading variant='primary' mt='0' lineHeight='.9' fontSize={['3xl', null, 'auto']}>
                        <Box as='span' color='aquamarine'>L</Box>ucas <Box as='span' color='aquamarine'>B</Box>rumatti
                    </Heading>
                    <HStack>
                        <Button 
                            variant='outline'
                            onClick={handleClickLanguage}
                            aria-label="English"
                            lang="en"
                            value="en"
                        >EN</Button>
                        <Button 
                            variant='outline'
                            onClick={handleClickLanguage}
                            aria-label="Español"
                            lang="es"
                            value="es"
                        >ES</Button>
                    </HStack>
                </VStack>
                <VStack spacing='.8rem'>
                    {sections.map((section, index)=>{
                        return <Link 
                                key={index} 
                                to={`${section.href}`} 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                                width='100%'
                            >
                                <Button 
                                    variant='sidebar' 
                                    paddingInlineStart={0} 
                                    paddingInlineEnd={0}
                                    fontWeight='200'
                                    onClick={closeModal}
                                    w='100%'
                                >
                                    {section[context.language].name}
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