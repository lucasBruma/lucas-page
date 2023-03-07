import React from 'react';
import { Box, Text, Link, HStack, VStack, Button, Flex } from '@chakra-ui/react';
import { FaGithub, FaLink, FaLinkedin,  } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="210px"
      height="100vh"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      borderRight='1px solid #ffffff'
    >
      <VStack 
        bg='#000000'
        alignItems='center'
        justifyContent='center'
        h='150px'
        w='100%'
        borderBottom='1px solid #ffffff'
      >
        <VStack alignItems='flex-start' spacing='0'>
          <Text fontWeight='700'>Lucas Brumatti</Text>
          <Text fontSize='16px'>Front-end Developer</Text>
        </VStack>

        <HStack>
            <Button variant='outline'>EN</Button>
            <Button variant='outline'>ES</Button>
        </HStack>
      </VStack>
      <VStack
        bg='#1d1b1b'
        flexGrow='1'
        w='100%'
        justifyContent='space-around'
      >
        <VStack spacing='1.5rem' alignItems='flex-start'>
            <Link variant='hover'>Inicio</Link>
            <Link variant='hover'>Proyectos</Link>
            <Link variant='hover'>Sobre mi</Link>
            <Link variant='hover'>Skills</Link>
            <Link variant='hover'>Contacto</Link>
        </VStack>
        <HStack spacing='1rem'>
            <FaGithub/>
            <FaLinkedin/>
            <AiFillMail/>
        </HStack>
      </VStack>
    </Flex>
  );
};

export {Sidebar};
