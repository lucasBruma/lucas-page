import React from 'react';
import { Box, Text, HStack, VStack, Button, Flex } from '@chakra-ui/react';
import { FaGithub, FaLink, FaLinkedin,  } from 'react-icons/fa';
import { AiFillMail  } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";


const Sidebar = ({sections}) => {
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
        p='20px 10px'
      >
        <VStack alignItems='flex-start' spacing='0'>
          <Text fontWeight='700'>Lucas Brumatti</Text>
          <Text fontSize='14px'>Desarrollador Front-end</Text>
        </VStack>

        <HStack>
            <Button variant='outline'>EN</Button>
            <Button variant='outline'>ES</Button>
        </HStack>
      </VStack>
      <VStack
        bg='red.veryDark'
        flexGrow='1'
        w='100%'
        justifyContent='space-around'
      >
        <VStack spacing='1rem' alignItems='flex-start'>
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
                      >
                        {section.name}
                      </Button>
                    </Link>
                })}
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
